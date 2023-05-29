import { useParams } from 'react-router-dom';
import orderImg from '../../assets/shop/order.jpg'
import FoodCard from '../../components/FoodCard/FoodCard';
import useMenu from '../../hookes/useMenu';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
const Order = () => {
    const [menu] = useMenu();
   
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} =useParams()
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <>
        <PageTitle title='Bistro Boss |  Order Food'></PageTitle>
        
            <Cover img={orderImg} title={"Order Food"}></Cover>



            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>



                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            pizza.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            soup.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            desserts.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            drinks.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </>
    );
};

export default Order;
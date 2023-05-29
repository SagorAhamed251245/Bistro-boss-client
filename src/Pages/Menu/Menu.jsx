import PageTitle from "../../components/PageTitle/PageTitle";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

import useMenu from "../../hookes/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <>
            <PageTitle title='Bistro Boss |  Our Menu'></PageTitle>

            <Cover title="Our Menu"
                img={menuImg} ></Cover>

            <SectionTitle subHeading="Don't Miss" heading="Today's Offer">

            </SectionTitle>
            {/* offered menu items */}
            <MenuCategory

                items={offered}
            ></MenuCategory>

            {/* desserts menu items */}
            <MenuCategory
                items={dessert}
                title="dessert"
                img={dessertImg}
            ></MenuCategory>

            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                title="salad"
                img={saladImg }
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title="soup"
                img={soupImg}
            ></MenuCategory>



        </>
    );
};

export default Menu;
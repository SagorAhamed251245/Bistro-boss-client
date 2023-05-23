import PageTitle from "../../components/PageTitle/PageTitle";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <>
        <PageTitle title='Bistro Boss |  Our Menu'></PageTitle>
        <Cover
        img={menuImg}
        title='OUR MENU'
        
        ></Cover>

        <PopularMenu></PopularMenu>
        <PageTitle title='Bistro Boss |  Our Menu'></PageTitle>
        <Cover
        img={menuImg}
        title='OUR MENU'
        
        ></Cover>

        <PopularMenu></PopularMenu>
        <PageTitle title='Bistro Boss |  Our Menu'></PageTitle>
        <Cover
        img={menuImg}
        title='OUR MENU'
        
        ></Cover>

        <PopularMenu></PopularMenu>
        <PageTitle title='Bistro Boss |  Our Menu'></PageTitle>
        <Cover
        img={menuImg}
        title='OUR MENU'
        
        ></Cover>

        <PopularMenu></PopularMenu>
        </>
    );
};

export default Menu;
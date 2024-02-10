import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


import "./navbar.css"


const Navbar = () => {
  return (
    <div className="navbar__container">
        <div className="left__navbar-content">
            <CollectionsBookmarkOutlinedIcon fontSize= "large" />
        </div>
        

        <div className="right__navbar-content">

            <div className="navbar__website-font">
                <p>Serif</p>
                <span> <KeyboardArrowDownOutlinedIcon className='material_ui'/> </span>
            </div>

            <div className="navbar_lightdarkmode">
                <ToggleOffOutlinedIcon fontSize= "large"/>
                <DarkModeOutlinedIcon className='material_ui'/>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar

import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useEffect, useState } from 'react';
import "./navbar.css"

const Navbar = () => {
    const [activeOption, setActiveOption] = useState(null);
    const [showDropDown, setShowDropDown] = useState(false);
    const [switchMode, setSwitchMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (switchMode) {
            body.classList.add('dark__mode');
        } else {
            body.classList.remove('dark__mode')
        }
    })

    const handleOptionClick = (index) => {
        setActiveOption(index);
        setShowDropDown(false);
    };

    const handledropdown = () => {
        setShowDropDown(!showDropDown);
    };

    const handleswitchmode = () => {
        setSwitchMode(!switchMode); 
    };

    return (
        <div className="navbar__container">
            <div className="left__navbar-content">
                <CollectionsBookmarkOutlinedIcon fontSize="large" />
            </div>
            
            <div className="right__navbar-content">
                <div className="navbar__website-font">
                    <p>{activeOption === 0 ? 'Dictionary' : activeOption === 1 ? 'Thesaurus' : ''}</p>
                    <span>
                        <KeyboardArrowDownOutlinedIcon onClick={handledropdown} className='material_ui'/>
                    </span>
                    {showDropDown && (
                        <div className="options__box-container">
                            <p className={activeOption === 0 ? 'active': ''} onClick={() => handleOptionClick(0)}>Dictionary</p>
                            <p className={activeOption === 1 ? 'active': ''} onClick={() => handleOptionClick(1)}>Thesaurus</p>
                        </div>
                    )}
                </div>
                <div className="navbar_lightdarkmode">
                    <div className="switch__mode-button" onClick={handleswitchmode}>
                        {switchMode ? <ToggleOnOutlinedIcon fontSize="large" className='material_ui'/> : <ToggleOffOutlinedIcon fontSize="large" className='material_ui'/>}
                    </div>
                    <DarkModeOutlinedIcon className='material_ui'/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

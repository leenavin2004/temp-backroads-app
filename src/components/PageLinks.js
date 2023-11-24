import {pageLinks} from '../data';
const PageLinks=({parentClass,itemClass})=>{
    return(
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return(
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  {link.text}
                </a>
                </li>
            );
          })}          
          </ul>
    )
}
export default PageLinks;
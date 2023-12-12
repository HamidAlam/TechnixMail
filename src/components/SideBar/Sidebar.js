import "./Sidebar.css";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="ab">
      
      <Sidebar
     
        style={{
          height: "100%",
          position: "absolute",
          width: "18.5%",
          marginTop: ".3rem",
        }}
      >
     
          <Menu>
          <div className="containe"><i class="fa-solid fa-list"></i> <h3 className="sideBar">TechnixMail</h3></div>
        
          <SubMenu icon=<i class="fa-solid fa-list"></i> label={"Mail Agents"}>
            <MenuItem component={<Link to="Mailagent" />}>
              mail-agent_1
            </MenuItem>        
 
          </SubMenu>                                        
            <MenuItem component={<Link to="SupressionList" />} icon=<i class="fa-solid fa-user"></i>>Supression_List</MenuItem>         
          </Menu>
  
      </Sidebar>
    </div>
  );
}
export default SideBar;

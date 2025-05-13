
import * as React from "react";
// import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import "@pnp/sp/files";
import "@pnp/sp/sites";
import "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/site-users/web";
import { SPFI } from "@pnp/sp";


import { IEmployeeCrudProps } from "./IEmployeeCrudProps";
// import { SPFI } from "@pnp/sp/presets/all";
import { getSP } from "../loc/pnpjsConfig";

const EmployeeCrud: React.FC<IEmployeeCrudProps> = (props) => {
  const sp: SPFI = getSP();

  interface IEmployeeItem {
    Id: number;
    Title: string;
    GroupType: string;
    number: number;
    course: string;
  }

  const [items, setItems] = React.useState<IEmployeeItem[]>([]);
  const getdata = async ()=> {
    try {
      const mydata = await sp.web.lists.getByTitle("Abhay").items.getAll();
      console.log(mydata, "abhy list data");
      setItems(mydata);
      console.log(items, "my stored data");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getdata().catch((error) => console.error("Error in useEffect:", error));
    // fetchData();
  }, []);
  return (
    <div>
      <h2>ARG Group and Team</h2>
      <ul>
        {items.map((item) => (
          <li key={item.Id}>
            <strong>{item.Title}</strong> — {item.GroupType}
            <br />
            Members:{" "}
            {item.number}
            {item.course}
            {item.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeCrud;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import "@pnp/sp/files";
import "@pnp/sp/sites";
import "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/site-users/web";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { getSP } from "./loc/pnpjsConfig";
import EmployeeCrud from "./components/EmployeeCrud";
import { IEmployeeCrudProps } from "./components/IEmployeeCrudProps";

export interface IEmployeeCrudWebPartProps {}

export default class EmployeeCrudWebPart extends BaseClientSideWebPart<IEmployeeCrudWebPartProps> {
  public async onInit(): Promise<void> {
    await super.onInit();

   
    await super.onInit();
    getSP(this.context);
  }

  public render(): void {
    const element: React.ReactElement<IEmployeeCrudProps> = React.createElement(
      EmployeeCrud,
      {
        context: this.context,
      }
    );

    ReactDOM.render(element, this.domElement);
  }

  public onDispose(): void {
    ReactDOM.unmountComponentAtNode(this.domElement);
  }
}

// _runtime/01489_CommonActions.js
import goBackAll from "01491_goBack.js";
import BaseRouter from "01492_BaseRouter.js";
import openDrawer from "01494_openDrawer.js";
import TabActions from "01495_TabActions.js";
import StackActions from "01498_StackActions.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01490__.js")) {
  arg5[key10013] = require("metro/01490__.js")[key10013];
  continue;
}

export const CommonActions = goBackAll;
export const BaseRouter = BaseRouter.BaseRouter;
export const DrawerActions = openDrawer.DrawerActions;
export const DrawerRouter = openDrawer.DrawerRouter;
export const StackActions = StackActions.StackActions;
export const StackRouter = StackActions.StackRouter;
export const TabActions = TabActions.TabActions;
export const TabRouter = TabActions.TabRouter;

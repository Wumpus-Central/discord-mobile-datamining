// _runtime/01507_CommonActions.js
import goBackAll from "01509_goBack.js";
import BaseRouter from "01510_BaseRouter.js";
import openDrawer from "01512_openDrawer.js";
import TabActions from "01513_TabActions.js";
import StackActions from "01516_StackActions.js";

const require = globalThis.__r;

for (const key10013 in require("metro/01508__.js")) {
  arg5[key10013] = require("metro/01508__.js")[key10013];
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

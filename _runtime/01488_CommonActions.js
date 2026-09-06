// _runtime/01488_CommonActions.js
import goBackAll from "01490_goBack.js";
import BaseRouter from "01491_BaseRouter.js";
import openDrawer from "01493_openDrawer.js";
import TabActions from "01494_TabActions.js";
import StackActions from "01497_StackActions.js";

for (const key10013 in require("metro/01489__.js")) {
  arg5[key10013] = require("metro/01489__.js")[key10013];
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

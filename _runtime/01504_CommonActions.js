// _runtime/01504_CommonActions.js
import goBackAll from "01506_goBack.js";
import nanoid from "01507_nanoid.js";
import openDrawer from "01509_openDrawer.js";
import TabRouter from "01510_TabRouter.js";
import StackRouter from "01513_StackRouter.js";

for (const key10013 in require("metro/01505__.js")) {
  let tmp2 = key10013;
  arg5[key10013] = require("metro/01505__.js")[key10013];
  continue;
}

export const CommonActions = goBackAll;
export const BaseRouter = nanoid.BaseRouter;
export const DrawerActions = openDrawer.DrawerActions;
export const DrawerRouter = openDrawer.DrawerRouter;
export const StackActions = StackRouter.StackActions;
export const StackRouter = StackRouter.StackRouter;
export const TabActions = TabRouter.TabActions;
export const TabRouter = TabRouter.TabRouter;
// _runtime/01503_CommonActions.js
import goBackAll from "01505_goBack.js";
import nanoid from "01506_nanoid.js";
import openDrawer from "01508_openDrawer.js";
import TabRouter from "01509_TabRouter.js";
import StackRouter from "01512_StackRouter.js";

for (const key10013 in require("metro/01504__.js")) {
  let tmp2 = key10013;
  arg5[key10013] = require("metro/01504__.js")[key10013];
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

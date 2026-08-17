// _runtime/01505_CommonActions.js
import goBackAll from "01507_goBack.js";
import nanoid from "01508_nanoid.js";
import openDrawer from "01510_openDrawer.js";
import TabRouter from "01511_TabRouter.js";
import StackRouter from "01514_StackRouter.js";

for (const key10013 in require("module_1506")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1506")[key10013];
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
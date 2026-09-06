// === Module 1488: CommonActions ===

// Module 1488 (CommonActions)
import goBackAll from "goBack" /* 1490 */;
import BaseRouter from "BaseRouter" /* 1491 */;
import openDrawer from "openDrawer" /* 1493 */;
import TabActions from "TabActions" /* 1494 */;
import StackActions from "StackActions" /* 1497 */;

for (const key10013 in require("module_1489")) {
  arg5[key10013] = require("module_1489")[key10013];
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
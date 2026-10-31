// === Module 1502: CommonActions ===

// Module 1502 (CommonActions)
import goBackAll from "goBack" /* 1504 */;
import BaseRouter from "BaseRouter" /* 1505 */;
import openDrawer from "openDrawer" /* 1507 */;
import TabActions from "TabActions" /* 1508 */;
import StackActions from "StackActions" /* 1511 */;

const require = globalThis.__r;

for (const key10013 in require("module_1503")) {
  arg5[key10013] = require("module_1503")[key10013];
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
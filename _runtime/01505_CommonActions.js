// === Module 1505: CommonActions ===

// Module 1505 (CommonActions)
import goBackAll from "goBack" /* 1507 */;
import nanoid from "nanoid" /* 1508 */;
import openDrawer from "openDrawer" /* 1510 */;
import TabRouter from "TabRouter" /* 1511 */;
import StackRouter from "StackRouter" /* 1514 */;

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
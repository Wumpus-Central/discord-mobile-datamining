// === Module 1488: CommonActions ===

// Module 1488 (CommonActions)
import goBackAll from "goBack" /* 1490 */;
import nanoid from "nanoid" /* 1491 */;
import openDrawer from "openDrawer" /* 1493 */;
import TabRouter from "TabRouter" /* 1494 */;
import StackRouter from "StackRouter" /* 1497 */;

for (const key10013 in require("module_1489")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1489")[key10013];
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
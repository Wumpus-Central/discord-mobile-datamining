// === Module 1504: CommonActions ===

// Module 1504 (CommonActions)
import goBackAll from "goBack" /* 1506 */;
import nanoid from "nanoid" /* 1507 */;
import openDrawer from "openDrawer" /* 1509 */;
import TabRouter from "TabRouter" /* 1510 */;
import StackRouter from "StackRouter" /* 1513 */;

for (const key10013 in require("module_1505")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1505")[key10013];
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
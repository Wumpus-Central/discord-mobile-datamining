// === Module 1503: CommonActions ===

// Module 1503 (CommonActions)
import goBackAll from "goBack" /* 1505 */;
import nanoid from "nanoid" /* 1506 */;
import openDrawer from "openDrawer" /* 1508 */;
import TabRouter from "TabRouter" /* 1509 */;
import StackRouter from "StackRouter" /* 1512 */;

for (const key10013 in require("module_1504")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1504")[key10013];
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
// === Module 1495: CommonActions ===

// Module 1495 (CommonActions)
import _mod1496 from "module_1496" /* 1496 */;
import goBackAll from "goBack" /* 1497 */;
import BaseRouter from "BaseRouter" /* 1498 */;
import DrawerActions from "DrawerActions" /* 1500 */;
import TabActions from "TabActions" /* 1501 */;
import StackActions from "StackActions" /* 1504 */;

for (const key10013 in _mod1496) {
  exports[key10013] = _mod1496[key10013];
  continue;
}
const BaseRouter_export = BaseRouter.BaseRouter;
const DrawerActions_export = DrawerActions.DrawerActions;
const StackActions_export = StackActions.StackActions;
const TabActions_export = TabActions.TabActions;

export const CommonActions = goBackAll;
export { BaseRouter_export as BaseRouter };
export { DrawerActions_export as DrawerActions };
export const DrawerRouter = DrawerActions.DrawerRouter;
export { StackActions_export as StackActions };
export const StackRouter = StackActions.StackRouter;
export { TabActions_export as TabActions };
export const TabRouter = TabActions.TabRouter;
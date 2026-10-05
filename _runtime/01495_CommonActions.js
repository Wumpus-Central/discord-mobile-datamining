// _runtime/01495_CommonActions.js
import _mod1496 from "metro/01496__.js";
import goBackAll from "01497_goBack.js";
import BaseRouter from "01498_BaseRouter.js";
import DrawerActions from "01500_DrawerActions.js";
import TabActions from "01501_TabActions.js";
import StackActions from "01504_StackActions.js";

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

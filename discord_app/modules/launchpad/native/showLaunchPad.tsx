// === Module 17399: showLaunchPad ===

// Module 17399 (showLaunchPad)
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
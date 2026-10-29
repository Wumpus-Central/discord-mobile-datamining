// === Module 14311: hideLaunchPad ===

// Module 14311 (hideLaunchPad)
import Constants from "Constants" /* 1084 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
// === Module 10966: hideLaunchPad ===

// Module 10966 (hideLaunchPad)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1109 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
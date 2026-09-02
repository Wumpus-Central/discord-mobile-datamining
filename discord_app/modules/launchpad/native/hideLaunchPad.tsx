// === Module 10924: hideLaunchPad ===

// Module 10924 (hideLaunchPad)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1228 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
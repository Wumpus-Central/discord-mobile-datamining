// === Module 16911: showLaunchPad ===

// Module 16911 (showLaunchPad)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1109 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
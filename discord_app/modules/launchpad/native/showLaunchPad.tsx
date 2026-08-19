// === Module 16127: showLaunchPad ===

// Module 16127 (showLaunchPad)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;

const ComponentActions = ME.ComponentActions;
const result = obj132.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
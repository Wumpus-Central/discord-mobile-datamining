// discord_app/modules/launchpad/native/showLaunchPad.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import ComponentDispatcher from "../../../utils/ComponentDispatchUtils.tsx";

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
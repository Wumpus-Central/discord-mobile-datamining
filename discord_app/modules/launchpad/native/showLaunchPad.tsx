// discord_app/modules/launchpad/native/showLaunchPad.tsx
import Constants from "../../../Constants.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
}

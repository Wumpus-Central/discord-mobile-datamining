// discord_app/modules/launchpad/native/hideLaunchPad.tsx
import Constants from "../../../Constants.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
}

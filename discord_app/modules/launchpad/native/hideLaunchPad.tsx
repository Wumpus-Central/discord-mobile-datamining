// discord_app/modules/launchpad/native/hideLaunchPad.tsx
import { ComponentActions } from "ME";
import { ComponentDispatcher } from "../../../utils/ComponentDispatchUtils.tsx";

const result = require("set").fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
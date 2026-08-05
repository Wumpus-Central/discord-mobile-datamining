// discord_app/modules/launchpad/native/showLaunchPad.tsx
import { ComponentActions } from "ME";
import { ComponentDispatcher } from "../../../utils/ComponentDispatchUtils.tsx";

const result = require("set").fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatcher /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
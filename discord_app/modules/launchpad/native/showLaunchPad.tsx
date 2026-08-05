// discord_app/modules/launchpad/native/showLaunchPad.tsx
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = require("../../../utils/ComponentDispatchUtils.tsx") /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
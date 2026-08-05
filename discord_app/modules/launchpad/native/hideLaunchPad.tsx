// discord_app/modules/launchpad/native/hideLaunchPad.tsx
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = require("../../../utils/ComponentDispatchUtils.tsx") /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
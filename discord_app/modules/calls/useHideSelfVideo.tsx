// discord_app/modules/calls/useHideSelfVideo.tsx
import closure_3 from "../../stores/AuthenticationStore.tsx";
import closure_4 from "../../stores/MediaEngineStore.tsx";
import { VideoToggleState } from "../../Constants.tsx";
import DesktopSources from "../../../discord_common/js/packages/media-engine/Constants.tsx";

const require = arg1;
({ MediaEngineContextTypes: closure_6, Features: error } = DesktopSources);
const result = require("set").fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default function useHideSelfVideo(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let stateFromStores;
  const items = [closure_3];
  stateFromStores = DEFAULT(589).useStateFromStores(items, () => id.getId());
  const obj = DEFAULT(589);
  const items1 = [closure_4];
  const stateFromStores1 = DEFAULT(589).useStateFromStores(items1, () => closure_4.supports(constants.DISABLE_VIDEO));
  const obj2 = DEFAULT(589);
  const items2 = [closure_4];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == arg0;
  const stateFromStores2 = DEFAULT(589).useStateFromStores(items2, () => closure_1_4.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
  if (!tmp5) {
    tmp5 = arg0 === stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores1;
  }
  const items4 = [
    tmp5,
    stateFromStores2,
    (arg0) => {
      stateFromStores(closure_1_2[5]).setDisableLocalVideo(stateFromStores, arg0 ? closure_1_5.DISABLED : closure_1_5.MANUAL_ENABLED, DEFAULT);
    }
  ];
  return items4;
};
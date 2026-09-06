// === Module 17213: useHideSelfVideo ===

// Module 17213 (useHideSelfVideo)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

const require = fn;
const VideoToggleState = fn(1074).VideoToggleState;
const Constants = fn(4585);
({ MediaEngineContextTypes: metroRequire, Features: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default function useHideSelfVideo(id) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const items = [AuthenticationStore];
  const stateFromStores = DEFAULT(504).useStateFromStores(items, () => id.getId());
  let obj = DEFAULT(504);
  const items1 = [MediaEngineStore];
  const stateFromStores1 = DEFAULT(504).useStateFromStores(items1, () => MediaEngineStore.supports(constants.DISABLE_VIDEO));
  const obj2 = DEFAULT(504);
  const items2 = [MediaEngineStore];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == id;
  const stateFromStores2 = DEFAULT(504).useStateFromStores(items2, () => MediaEngineStore.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
  if (!tmp5) {
    tmp5 = id === stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores1;
  }
  const items4 = [
    tmp5,
    stateFromStores2,
    (arg0) => {
      AudioActionCreatorsDefault.setDisableLocalVideo(stateFromStores, arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED, DEFAULT);
      const tmp2 = arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED;
    }
  ];
  return items4;
};
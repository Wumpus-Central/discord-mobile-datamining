// === Module 17300: useIsVoicePanelParticipantFocusable ===

// Module 17300 (useIsVoicePanelParticipantFocusable)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import participantHasVideo from "participantHasVideo" /* 9119 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import CallConstants from "CallConstants" /* 4911 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function isVoicePanelParticipantFocusable(guildId, channelId, id2) {
  let obj = ChannelRTCStore;
  if (ChannelRTCStore === undefined) {
    obj = ChannelRTCStore;
  }
  let tmp = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    tmp = MediaEngineStore;
  }
  let obj2 = EmbeddedActivitiesStore;
  if (EmbeddedActivitiesStore === undefined) {
    obj2 = EmbeddedActivitiesStore;
  }
  let obj3 = ApplicationStreamingStore;
  if (ApplicationStreamingStore === undefined) {
    obj3 = ApplicationStreamingStore;
  }
  if (null == id2) {
    return false;
  } else {
    const participant = obj.getParticipant(channelId, id2);
    if (null == participant) {
      return false;
    } else if (metroRequire(participant)) {
      const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return null != applicationId && participant.applicationId === currentEmbeddedActivity.applicationId;
    } else {
      let result;
      if (metroImportDefault(participant)) {
        result = null != obj3.getActiveStreamForUser(participant.user.id, guildId);
      } else if (metroImportAll(participant)) {
        const tmp4Result = participantHasVideo;
        result = tmp4Result.canRenderParticipantVideo(participant, tmp);
      } else {
        const tmp4Result2 = GlobalUtils;
        tmp4Result2.assertNever(participant);
      }
      return result;
    }
  }
}
({ isActivityParticipant: metroRequire, isStreamParticipant: metroImportDefault, isUserParticipant: metroImportAll } = CallConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, MediaEngineStore, closure_2, ApplicationStreamingStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp9;
      if (cResult[3] === arg2) {
        tmp9 = cResult[4];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp9);
    }
  }
  class P {
    constructor() {
      return isVoicePanelParticipantFocusable(closure_0, closure_1, closure_2, closure_3, closure_5, closure_2, closure_4);
    }
  }
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = arg2;
  cResult[4] = P;
  tmp9 = P;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  const items = [ChannelRTCStore, MediaEngineStore, closure_2, ApplicationStreamingStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => isVoicePanelParticipantFocusable(closure_0, closure_1, closure_2, ChannelRTCStore, MediaEngineStore, EmbeddedActivitiesStore, ApplicationStreamingStore));
});
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default tmp3;
export { isVoicePanelParticipantFocusable };
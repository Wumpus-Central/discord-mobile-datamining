// discord_app/modules/video_calls/native/ChannelCallUtils.tsx
import "report";
import initialize from "initialize";
import ME from "ME";
import { jsx } from "showShareActionSheet";
import { registerAsset } from "../../../../_runtime/08018_registerAsset.js";
import { registerAsset } from "../../../../_runtime/10868_registerAsset.js";
import { registerAsset } from "../../../../_runtime/16285_registerAsset.js";
import { registerAsset } from "../../../../_runtime/16286_registerAsset.js";
import { AlertActionCreators } from "../../../actions/native/AlertActionCreators.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ UserSettingsSections: c4, AnalyticsPages: c5, InstantInviteSources: closure_6, RPC_APPLICATION_LOGGING_CATEGORY: error } = ME);
let result = require("ME").fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  let obj = { label: null, icon: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.NiTd0e);
  obj[1] = registerAsset;
  obj[2] = function onPress() {
    let obj = callback(6016);
    obj = { screen: constants.VOICE };
    obj.openUserSettings(obj);
    callback2(4271).hideActionSheet();
  };
  return obj;
};
export const videoParticipantsHidden = function videoParticipantsHidden(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.hoZYAA);
  obj[1] = !arg1;
  obj[2] = function onPress() {
    const result = callback(outer1_2[8]).toggleVoiceParticipantsHidden(id.id, !callback);
  };
  return obj;
};
export const openHideSelfStreamAndVideoConfirmDialog = function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let obj = AlertActionCreators;
  obj = {
    importer() {
      return callback(outer1_2[11])(outer1_2[10], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.type = closure_0;
          obj.onConfirm = outer1_1;
          return outer2_8(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
export const selfVideoHidden = function selfVideoHidden(arg0, arg1) {
  const _require = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.MH8ESU);
  obj[1] = !arg0;
  obj[2] = function onPress() {
    callback();
  };
  return obj;
};
export const reportStreamIssue = function reportStreamIssue(stream) {
  const _require = stream;
  let obj = { label: null, icon: null, onPress: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.KHGhHf);
  obj[1] = registerAsset;
  obj[2] = function onPress() {
    let obj = stream(outer1_2[13]);
    const encodeStreamKeyResult = obj.encodeStreamKey(stream);
    let videoStats = outer1_3.getVideoStats(encodeStreamKeyResult);
    if (videoStats == null) {
      videoStats = {};
    }
    obj = { media_session_id: obj2.getMediaSessionId(encodeStreamKeyResult), rtc_connection_id: obj2.getRtcConnectionId(encodeStreamKeyResult), stream_region: obj2.getRegion(encodeStreamKeyResult), max_viewers: obj2.getMaxViewers(encodeStreamKeyResult) };
    const merged = Object.assign(videoStats);
    const obj5 = outer1_1(outer1_2[7]);
    const tmp = stream;
    obj5.openLazy(stream(outer1_2[11])(outer1_2[14], outer1_2.paths), "StreamReportProblem" + stream.ownerId, { stream, analyticsData: obj });
  };
  return obj;
};
export const invite = function invite(isPrivate) {
  const _require = isPrivate;
  const importDefault = arg1;
  const dependencyMap = arg2;
  if (null != arg1) {
    function onPress() {
      let obj = isPrivate(9065);
      obj = { source: outer1_6.STREAM, stream: closure_1 };
      return obj.showInstantInviteActionSheet(isPrivate, obj);
    }
  } else {
    onPress = function onPress() {
      let obj = isPrivate(9065);
      obj = { source: outer1_6.VOICE_CHANNEL };
      return obj.showInstantInviteActionSheet(isPrivate, obj);
    };
    if (null != arg2) {
      onPress = function onPress() {
        let obj = isPrivate(9065);
        obj = { source: outer1_6.ACTIVITY_INVITE, targetApplicationId: dependencyMap };
        return obj.showInstantInviteActionSheet(isPrivate, obj);
      };
    }
  }
  if (isPrivate.isPrivate()) {
    onPress = function onPress() {
      return isPrivate(4158).navigateToNewGroupDM(isPrivate.id, outer1_5.CHANNEL_CALL);
    };
  }
  let obj = { label: null, icon: null, onPress: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.VINpSK);
  obj[1] = registerAsset;
  obj[2] = onPress;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  const _require = arg0;
  const obj = { label: null, icon: null, onPress: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.X8bCMe);
  obj[1] = registerAsset;
  obj[2] = function onPress() {
    callback();
    outer1_1(outer1_2[7]).hideActionSheet();
  };
  return obj;
};
export const shareActivityLogs = function shareActivityLogs() {
  let obj = { label: null, icon: null, onPress: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.iQzQs3);
  obj[1] = registerAsset;
  obj[2] = function onPress() {
    let obj = callback(table[19]);
    const items = [closure_7];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = tmp(tmp2[4]).intl;
      obj[1] = intl.string(tmp(tmp2[4]).t["i+9VWy"]);
      callback2(tmp2[20]).open(obj);
      const obj4 = callback2(tmp2[20]);
    } else {
      obj = { message: null };
      obj[0] = json;
      tmp(tmp2[21]).showShareActionSheet(obj, "Activity Logs");
      const tmpResult = tmp(tmp2[21]);
    }
  };
  return obj;
};
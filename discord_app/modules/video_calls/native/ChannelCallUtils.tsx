// discord_app/modules/video_calls/native/ChannelCallUtils.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef4656 from "../../../actions/native/AlertActionCreators.tsx";
import registerAssetDefault from "../../../../_runtime/08134_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/12565_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/16428_registerAsset.js";
import registerAssetDefault4 from "../../../../_runtime/16429_registerAsset.js";
import initialize from "../../../stores/StreamRTCConnectionStore.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
({ UserSettingsSections: c4, AnalyticsPages: c5, InstantInviteSources: closure_6, RPC_APPLICATION_LOGGING_CATEGORY: error } = ME);
let result = require("obj132").fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  let obj = { label: null, icon: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.NiTd0e);
  obj[1] = registerAssetDefault3;
  obj[2] = function onPress() {
    callback(7360);
    const obj = { screen: constants.VOICE };
    obj.openUserSettings(obj);
    callback2(4342).hideActionSheet();
  };
  return obj;
};
export const videoParticipantsHidden = function videoParticipantsHidden(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t.hoZYAA);
  obj[1] = !arg1;
  obj[2] = function onPress() {
    const result = callback(dependencyMap[8]).toggleVoiceParticipantsHidden(id.id, !callback);
  };
  return obj;
};
export const openHideSelfStreamAndVideoConfirmDialog = function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  let obj = {
    importer() {
      return callback(dependencyMap[11])(dependencyMap[10], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.type = closure_0;
          obj.onConfirm = closure_1_1;
          return closure_2_8(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
export const selfVideoHidden = function selfVideoHidden(arg0, arg1) {
  const _require = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t.MH8ESU);
  obj[1] = !arg0;
  obj[2] = function onPress() {
    callback();
  };
  return obj;
};
export const reportStreamIssue = function reportStreamIssue(stream) {
  const _require = stream;
  let obj = { label: null, icon: null, onPress: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t.KHGhHf);
  obj[1] = registerAssetDefault4;
  obj[2] = function onPress() {
    let obj = stream(dependencyMap[13]);
    const encodeStreamKeyResult = obj.encodeStreamKey(stream);
    let videoStats = closure_1_3.getVideoStats(encodeStreamKeyResult);
    if (videoStats == null) {
      videoStats = {};
    }
    obj = { media_session_id: closure_1_3.getMediaSessionId(encodeStreamKeyResult), rtc_connection_id: closure_1_3.getRtcConnectionId(encodeStreamKeyResult), stream_region: closure_1_3.getRegion(encodeStreamKeyResult), max_viewers: closure_1_3.getMaxViewers(encodeStreamKeyResult) };
    const merged = Object.assign(videoStats);
    const obj5 = ACTION_SHEET_HEIGHT_HALFDefault;
    obj5.openLazy(stream(dependencyMap[11])(dependencyMap[14], dependencyMap.paths), "StreamReportProblem" + stream.ownerId, { stream, analyticsData: obj });
    const tmp6 = stream(dependencyMap[11])(dependencyMap[14], dependencyMap.paths);
  };
  return obj;
};
export const invite = function invite(closure_2) {
  const _require = dependencyMap;
  importDefault = arg1;
  dependencyMap = arg2;
  if (null != arg1) {
    function onPress() {
      lib(8918);
      const obj = { source: closure_1_6.STREAM, stream: closure_1 };
      return obj.showInstantInviteActionSheet(lib, obj);
    }
  } else {
    onPress = function onPress() {
      lib(8918);
      const obj = { source: closure_1_6.VOICE_CHANNEL };
      return obj.showInstantInviteActionSheet(lib, obj);
    };
    if (null != arg2) {
      onPress = function onPress() {
        lib(8918);
        const obj = { source: closure_1_6.ACTIVITY_INVITE, targetApplicationId: dependencyMap };
        return obj.showInstantInviteActionSheet(lib, obj);
      };
    }
  }
  if (dependencyMap.isPrivate()) {
    onPress = function onPress() {
      return lib(4229).navigateToNewGroupDM(lib.id, closure_1_5.CHANNEL_CALL);
    };
  }
  let obj = { label: null, icon: null, onPress: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t.VINpSK);
  obj[1] = registerAssetDefault2;
  obj[2] = onPress;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  const _require = arg0;
  const obj = { label: null, icon: null, onPress: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t.X8bCMe);
  obj[1] = registerAssetDefault;
  obj[2] = function onPress() {
    callback();
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  };
  return obj;
};
export const shareActivityLogs = function shareActivityLogs() {
  let obj = { label: null, icon: null, onPress: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.iQzQs3);
  obj[1] = registerAssetDefault;
  obj[2] = function onPress() {
    let obj = callback(table[19]);
    const items = [closure_7];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = callback(table[4]).intl;
      obj[1] = intl.string(callback(table[4]).t["i+9VWy"]);
      callback2(table[20]).open(obj);
      const obj4 = callback2(table[20]);
    } else {
      obj = { message: null };
      obj[0] = json;
      callback(table[21]).showShareActionSheet(obj, "Activity Logs");
      const tmpResult = callback(table[21]);
    }
  };
  return obj;
};
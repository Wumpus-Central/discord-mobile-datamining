// === Module 17307: ChannelCallUtils ===

// Module 17307 (ChannelCallUtils)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4303 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4657 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4806 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4950 */;
import _modDef8697 from "module_8697" /* 8697 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9890 */;
import _modDef10071 from "module_10071" /* 10071 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11661 */;
import _modDef17308 from "module_17308" /* 17308 */;
import _modDef17309 from "module_17309" /* 17309 */;
import noop from "module_19" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4644 */;

require = fn;
const Constants = fn(1074);
({ UserSettingsSections: closure_4, AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire, RPC_APPLICATION_LOGGING_CATEGORY: closure_7 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  let obj = { label: null, icon: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.NiTd0e);
  obj.icon = _modDef17308;
  obj.onPress = function onPress() {
    require("openUserSettings");
    const obj = { screen: constants.VOICE };
    obj.openUserSettings(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return obj;
};
export const videoParticipantsHidden = function videoParticipantsHidden(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.hoZYAA);
  obj.switchValue = !arg1;
  obj.onPress = function onPress() {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(id.id, !closure_1);
  };
  return obj;
};
export const openHideSelfStreamAndVideoConfirmDialog = function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  let obj = {
    importer() {
      return asyncRequireImpl(17305, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.type = type;
          obj.onConfirm = onConfirm;
          return <closure_0 />;
        };
      });
    }
  };
  obj.openLazy(obj);
};
export const selfVideoHidden = function selfVideoHidden(arg0, arg1) {
  closure_0 = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.MH8ESU);
  obj.switchValue = !arg0;
  obj.onPress = function onPress() {
    closure_0();
  };
  return obj;
};
export const reportStreamIssue = function reportStreamIssue(stream) {
  _require = stream;
  let obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.KHGhHf);
  obj.icon = _modDef17309;
  obj.onPress = function onPress() {
    let obj = StreamKeyUtils;
    const encodeStreamKeyResult = obj.encodeStreamKey(stream);
    let videoStats = StreamRTCConnectionStore.getVideoStats(encodeStreamKeyResult);
    if (videoStats == null) {
      videoStats = {};
    }
    obj = { media_session_id: StreamRTCConnectionStore.getMediaSessionId(encodeStreamKeyResult), rtc_connection_id: StreamRTCConnectionStore.getRtcConnectionId(encodeStreamKeyResult), stream_region: StreamRTCConnectionStore.getRegion(encodeStreamKeyResult), max_viewers: StreamRTCConnectionStore.getMaxViewers(encodeStreamKeyResult) };
    const merged = Object.assign(videoStats);
    const obj5 = ActionSheetActionCreatorsDefault;
    obj5.openLazy(asyncRequireImpl(17310, dependencyMap.paths), "StreamReportProblem" + stream.ownerId, { stream, analyticsData: obj });
    const tmp6 = asyncRequireImpl(17310, dependencyMap.paths);
  };
  return obj;
};
export const invite = function invite(dependencyMap, stream, targetApplicationId) {
  _require = dependencyMap;
  importDefault = stream;
  dependencyMap = targetApplicationId;
  if (null != stream) {
    function onPress() {
      const obj = { source: constants2.STREAM, stream };
      return obj.showInstantInviteActionSheet(closure_0, obj);
    }
  } else {
    onPress = function onPress() {
      const obj = { source: constants2.VOICE_CHANNEL };
      return obj.showInstantInviteActionSheet(closure_0, obj);
    };
    if (null != targetApplicationId) {
      onPress = function onPress() {
        const obj = { source: constants2.ACTIVITY_INVITE, targetApplicationId };
        return obj.showInstantInviteActionSheet(closure_0, obj);
      };
    }
  }
  if (dependencyMap.isPrivate()) {
    onPress = function onPress() {
      return openGroupDMAddMembersDefault(dependencyMap.id, constants.CHANNEL_CALL);
    };
  }
  let obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.VINpSK);
  obj.icon = _modDef10071;
  obj.onPress = onPress;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  _require = arg0;
  const obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.X8bCMe);
  obj.icon = _modDef8697;
  obj.onPress = function onPress() {
    closure_0();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return obj;
};
export const shareActivityLogs = function shareActivityLogs() {
  let obj = { label: null, icon: null, onPress: null };
  let intl = util.intl;
  obj.label = intl.string(util.t.iQzQs3);
  obj.icon = _modDef8697;
  obj.onPress = function onPress() {
    let obj = require("LogAggregator");
    const items = [closure_1_7];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = require("util").intl;
      obj.content = intl.string(require("util").t["i+9VWy"]);
      ToastActionCreatorsDefault.open(obj);
    } else {
      obj = { message: json };
      require("showShareActionSheet").showShareActionSheet(obj, "Activity Logs");
      const tmpResult = require("showShareActionSheet");
    }
  };
  return obj;
};
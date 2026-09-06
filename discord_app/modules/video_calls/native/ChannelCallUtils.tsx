// discord_app/modules/video_calls/native/ChannelCallUtils.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import StreamKeyUtils from "../../go_live/utils/StreamKeyUtils.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import _modDef8627 from "../../../../_runtime/metro/08627__.js";
import instant_invite_InstantInviteUtils from "../../instant_invite/native/InstantInviteUtils.tsx";
import _modDef10001 from "../../../../_runtime/metro/10001__.js";
import openGroupDMAddMembersDefault from "../../group_dm/native/openGroupDMAddMembers.tsx";
import _modDef17215 from "../../../../_runtime/metro/17215__.js";
import _modDef17216 from "../../../../_runtime/metro/17216__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import StreamRTCConnectionStore from "../../../stores/StreamRTCConnectionStore.tsx";

require = fn;
const Constants = fn(1074);
({
  UserSettingsSections: closure_4,
  AnalyticsPages: hasOwnProperty,
  InstantInviteSources: metroRequire,
  RPC_APPLICATION_LOGGING_CATEGORY: closure_7,
} = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  let obj = { label: null, icon: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.NiTd0e);
  obj.icon = _modDef17215;
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
      return asyncRequireImpl(17212, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.type = type;
          obj.onConfirm = onConfirm;
          return <closure_0 />;
        };
      });
    },
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
  obj.icon = _modDef17216;
  obj.onPress = function onPress() {
    let obj = StreamKeyUtils;
    const encodeStreamKeyResult = obj.encodeStreamKey(stream);
    let videoStats = StreamRTCConnectionStore.getVideoStats(encodeStreamKeyResult);
    if (videoStats == null) {
      videoStats = {};
    }
    obj = {
      media_session_id: obj2.getMediaSessionId(encodeStreamKeyResult),
      rtc_connection_id: obj2.getRtcConnectionId(encodeStreamKeyResult),
      stream_region: obj2.getRegion(encodeStreamKeyResult),
      max_viewers: obj2.getMaxViewers(encodeStreamKeyResult),
    };
    const merged = Object.assign(videoStats);
    const obj5 = ActionSheetActionCreatorsDefault;
    obj5.openLazy(asyncRequireImpl(17217, dependencyMap.paths), "StreamReportProblem" + stream.ownerId, {
      stream,
      analyticsData: obj,
    });
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
  obj.icon = _modDef10001;
  obj.onPress = onPress;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  _require = arg0;
  const obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.X8bCMe);
  obj.icon = _modDef8627;
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
  obj.icon = _modDef8627;
  obj.onPress = function onPress() {
    let obj = require("LogAggregator");
    const items = [closure_1_7];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = tmp(tmp2[4]).intl;
      obj.content = intl.string(tmp(tmp2[4]).t["i+9VWy"]);
      require("ToastActionCreators").open(obj);
      const obj4 = require("ToastActionCreators");
    } else {
      obj = { message: json };
      tmp(tmp2[21]).showShareActionSheet(obj, "Activity Logs");
      const tmpResult = tmp(tmp2[21]);
    }
  };
  return obj;
};

// === Module 16050: HappeningNowCardVoice ===

// Module 16050 (HappeningNowCardVoice)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import HappeningNowConstants from "HappeningNowConstants" /* 15129 */;
import react from "react" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7156 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, userAffinity;

let c10;
let unpackModuleId;
function formatVoiceActivityTitle(arr, guildId) {
  let obj2;
  let obj3;
  let obj6;
  let obj7;
  if (0 === arr.length) {
    return "";
  } else if (1 === arr.length) {
    const obj4 = NicknameUtilsDefault;
    return obj4.getName(guildId, null, arr[0]);
  } else if (2 === arr.length) {
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { user1: obj2.getName(guildId, null, arr[0]), user2: obj3.getName(guildId, null, arr[1]) };
    const prop = intl3.t["4SM/RX"];
    obj2 = NicknameUtilsDefault;
    obj3 = NicknameUtilsDefault;
    return formatToPlainString(prop, obj);
  } else {
    const intl2 = intl3.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj5 = { user1: obj6.getName(guildId, null, arr[0]), user2: obj7.getName(guildId, null, arr[1]), extras: arr.length - 2 };
    const pjxkCI = intl3.t.pjxkCI;
    obj6 = NicknameUtilsDefault;
    obj7 = NicknameUtilsDefault;
    return formatToPlainString2(pjxkCI, obj5);
  }
}
const View = react_native.View;
let closure_8 = HappeningNowConstants.HappeningNowCardTrackingType;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ content: { flexShrink: 1 }, avatars: { marginRight: 12 } });
const memoResult = react.memo((guildId) => {
  let items1;
  let items2;
  let obj4;
  let str;
  let tmp11Result;
  guildId = guildId.guildId;
  const index = guildId.index;
  const voiceState = guildId.voiceState;
  let flag = guildId.panelVariant;
  const fullwidth = guildId.fullwidth;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_12();
  const users = closure_13(voiceState);
  const items = [index, guildId, voiceState.channelId, users];
  const tmp2 = formatVoiceActivityTitle(users, guildId);
  if (0 === users.length) {
    let obj2 = { panelVariant: flag };
    tmp11Result = closure_10(guildId(voiceState[12]).HappeningNowCardPlaceholder, obj2);
  } else {
    const obj3 = { onPress: tmp3, width: str, IconComponent: guildId(voiceState[14]).VoiceNormalIcon, panelVariant: flag, children: items1 };
    str = "large";
    const tmp12 = index;
    const tmp14 = index(voiceState[13]);
    if (fullwidth) {
      str = "full";
    }
    let obj = { style: tmp.avatars, children: closure_10(tmp12(voiceState[15]), obj4) };
    obj4 = { guildId, users };
    items1 = [closure_10(View, obj), ];
    const obj5 = { style: tmp.content, children: items2 };
    const obj6 = { lineClamp: 2, children: tmp2 };
    items2 = [closure_10(guildId(voiceState[13]).HappeningNowCardHeader, obj6), ];
    const obj7 = { voiceState };
    items2[1] = closure_10(guildId(voiceState[16]).HappeningNowVoiceCardSubtitle, obj7);
    items1[1] = closure_11(View, obj5);
    tmp11Result = closure_11(tmp14, obj3);
  }
  return tmp11Result;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  _require = channelId;
  const obj = require("react");
  const cResult = obj.c(5);
  const obj2 = require("VoiceUserAffinityExperiment");
  const voiceUserAffinitySortType = obj2.useVoiceUserAffinitySortType("useVoiceChannelUsers");
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === voiceUserAffinitySortType) {
    let tmp9;
    let tmp10;
    if (cResult[2] === channelId.channelId) {
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresArray(first, tmp9, tmp10);
  }
  const fn = function s() {
    let user;
    const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(channelId.channelId);
    const arr = _modDef12(voiceStatesForChannel);
    const mapped = arr.map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const items = [
      (id) => {
        let num;
        userAffinity = userAffinity.getUserAffinity(id.id);
        if ("vc_probability" === voiceUserAffinitySortType) {
          let num2;
          if (userAffinity != null) {
            num2 = userAffinity.vcProbability;
          }
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        } else {
          num = undefined;
          if (userAffinity != null) {
            num = userAffinity.communicationProbability;
          }
          if (num == null) {
            num = 0;
          }
        }
        return num;
      }
    ];
    const iter = found.orderBy(items, ["desc"]);
    return iter.value();
  };
  const items1 = [voiceUserAffinitySortType, channelId.channelId];
  cResult[1] = voiceUserAffinitySortType;
  cResult[2] = channelId.channelId;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((channelId) => {
  _require = channelId;
  const obj = require("VoiceUserAffinityExperiment");
  const voiceUserAffinitySortType = obj.useVoiceUserAffinitySortType("useVoiceChannelUsers");
  let items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
  const items1 = [voiceUserAffinitySortType, channelId.channelId];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items, () => {
    let user;
    const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(channelId.channelId);
    const arr = _modDef12(voiceStatesForChannel);
    const mapped = arr.map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const items = [
      (id) => {
        let num;
        userAffinity = userAffinity.getUserAffinity(id.id);
        if ("vc_probability" === voiceUserAffinitySortType) {
          let num2;
          if (userAffinity != null) {
            num2 = userAffinity.vcProbability;
          }
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        } else {
          num = undefined;
          if (userAffinity != null) {
            num = userAffinity.communicationProbability;
          }
          if (num == null) {
            num = 0;
          }
        }
        return num;
      }
    ];
    const iter = found.orderBy(items, ["desc"]);
    return iter.value();
  }, items1);
});
let closure_13 = tmp4;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx");

export default memoResult;
export const useVoiceChannelUsers = tmp4;
export { formatVoiceActivityTitle };
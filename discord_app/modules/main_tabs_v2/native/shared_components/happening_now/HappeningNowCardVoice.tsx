// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../../Constants.tsx";
import intl3 from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import UserAffinitiesV2Store from "../../../../user_affinities/UserAffinitiesV2Store.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
    const obj5 = {
      user1: obj6.getName(guildId, null, arr[0]),
      user2: obj7.getName(guildId, null, arr[1]),
      extras: arr.length - 2,
    };
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
    const obj3 = {
      onPress: tmp3,
      width: str,
      IconComponent: guildId(voiceState[14]).VoiceNormalIcon,
      panelVariant: flag,
      children: items1,
    };
    str = "large";
    const tmp12 = index;
    const tmp14 = index(voiceState[13]);
    if (fullwidth) {
      str = "full";
    }
    let obj = { style: tmp.avatars, children: closure_10(tmp12(voiceState[15]), obj4) };
    obj4 = { guildId, users };
    items1 = [closure_10(View, obj)];
    const obj5 = { style: tmp.content, children: items2 };
    const obj6 = { lineClamp: 2, children: tmp2 };
    items2 = [closure_10(guildId(voiceState[13]).HappeningNowCardHeader, obj6)];
    const obj7 = { voiceState };
    items2[1] = closure_10(guildId(voiceState[16]).HappeningNowVoiceCardSubtitle, obj7);
    items1[1] = closure_11(View, obj5);
    tmp11Result = closure_11(tmp14, obj3);
  }
  return tmp11Result;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
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
          },
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
    }
  : (channelId) => {
      _require = channelId;
      const obj = require("VoiceUserAffinityExperiment");
      const voiceUserAffinitySortType = obj.useVoiceUserAffinitySortType("useVoiceChannelUsers");
      let items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
      const items1 = [voiceUserAffinitySortType, channelId.channelId];
      const obj2 = require("get initialized");
      return obj2.useStateFromStoresArray(
        items,
        () => {
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
            },
          ];
          const iter = found.orderBy(items, ["desc"]);
          return iter.value();
        },
        items1,
      );
    };
let closure_13 = tmp4;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx",
);

export default memoResult;
export const useVoiceChannelUsers = tmp4;
export { formatVoiceActivityTitle };

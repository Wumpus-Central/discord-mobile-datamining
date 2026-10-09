// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/02000_asyncRequireImpl.js";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserAffinitiesV2Store from "../../../../user_affinities/UserAffinitiesV2Store.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";

require = fn;
function formatVoiceActivityTitle(arr, guildId) {
  if (0 === arr.length) {
    return "";
  } else if (1 === length) {
    return NicknameUtilsDefault.getName(guildId, null, arr[0]);
  } else if (2 === length) {
    const intl = util.intl;
    const obj = { user1: NicknameUtilsDefault.getName(guildId, null, arr[0]), user2: null };
    obj.user2 = NicknameUtilsDefault.getName(guildId, null, arr[1]);
    return intl.formatToPlainString(util.t["4SM/RX"], obj);
  } else {
    const intl2 = util.intl;
    const obj5 = { user1: NicknameUtilsDefault.getName(guildId, null, arr[0]), user2: null, extras: null };
    obj5.user2 = NicknameUtilsDefault.getName(guildId, null, arr[1]);
    obj5.extras = arr.length - 2;
    return intl2.formatToPlainString(util.t.pjxkCI, obj5);
  }
}
const View = fn(17).View;
let closure_8 = fn(15504).HappeningNowCardTrackingType;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let closure_12 = createStyles.createStyles({ content: { flexShrink: 1 }, avatars: { marginRight: 12 } });
const ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVoiceChannelUsers(channelId) {
      _require = channelId;
      const cResult = require("c").c(5);
      const obj = require("c");
      const tmp = _require;
      const voiceUserAffinitySortType =
        require("VoiceUserAffinityExperiment").useVoiceUserAffinitySortType("useVoiceChannelUsers");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === voiceUserAffinitySortType) {
        if (cResult[2] === channelId.channelId) {
          let tmp9 = cResult[3];
          let tmp10 = cResult[4];
        }
        return tmp(504).useStateFromStoresArray(first, tmp9, tmp10);
      }
      const fn = function s() {
        const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(channelId.channelId);
        const mapped = _modDef12(voiceStatesForChannel).map((userId) => user.getUser(userId.userId));
        const found = mapped.filter(GlobalUtils.isNotNullish);
        const items = [
          function userAffinitySort(id) {
            userAffinity = userAffinity.getUserAffinity(id.id);
            if ("vc_probability" === voiceUserAffinitySortType) {
              let num2;
              if (userAffinity != null) {
                num2 = userAffinity.vcProbability;
              }
              if (num2 == null) {
                num2 = 0;
              }
              let num = num2;
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
        const arr = _modDef12(voiceStatesForChannel);
        return found.orderBy(items, ["desc"]).value();
      };
      const items1 = [voiceUserAffinitySortType, channelId.channelId];
      cResult[1] = voiceUserAffinitySortType;
      cResult[2] = channelId.channelId;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp10 = items1;
      tmp9 = fn;
      const obj2 = require("VoiceUserAffinityExperiment");
    }
  : function useVoiceChannelUsers(channelId) {
      _require = channelId;
      const voiceUserAffinitySortType =
        require("VoiceUserAffinityExperiment").useVoiceUserAffinitySortType("useVoiceChannelUsers");
      const obj = require("VoiceUserAffinityExperiment");
      let items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
      const items1 = [voiceUserAffinitySortType, channelId.channelId];
      return require("initialize").useStateFromStoresArray(
        items,
        () => {
          const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(channelId.channelId);
          const mapped = _modDef12(voiceStatesForChannel).map((userId) => user.getUser(userId.userId));
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const items = [
            function userAffinitySort(id) {
              userAffinity = userAffinity.getUserAffinity(id.id);
              if ("vc_probability" === voiceUserAffinitySortType) {
                let num2;
                if (userAffinity != null) {
                  num2 = userAffinity.vcProbability;
                }
                if (num2 == null) {
                  num2 = 0;
                }
                let num = num2;
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
          const arr = _modDef12(voiceStatesForChannel);
          return found.orderBy(items, ["desc"]).value();
        },
        items1,
      );
    };
let closure_13 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx",
);

export default noop.memo(function VoiceChannelCard(guildId) {
  guildId = guildId.guildId;
  const index = guildId.index;
  const voiceState = guildId.voiceState;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_12();
  const users = closure_13(voiceState);
  const items = [index, guildId, voiceState.channelId, users];
  if (0 === users.length) {
    let obj2 = { panelVariant: flag };
    let tmp11Result = closure_10(guildId(voiceState[12]).HappeningNowCardPlaceholder, obj2);
  } else {
    const obj3 = { onPress: tmp3, width: null, IconComponent: null, panelVariant: null, children: null };
    let str = "large";
    if (guildId.fullwidth) {
      str = "full";
    }
    obj3.width = str;
    obj3.IconComponent = guildId(voiceState[14]).VoiceNormalIcon;
    obj3.panelVariant = flag;
    let obj = { style: tmp.avatars, children: null };
    const obj4 = { guildId, users };
    obj.children = closure_10(index(voiceState[15]), obj4);
    const items1 = [closure_10(View, obj)];
    const obj5 = { style: tmp.content, children: null };
    const obj6 = { lineClamp: 2, children: tmp2 };
    const items2 = [closure_10(guildId(voiceState[13]).HappeningNowCardHeader, obj6)];
    const obj7 = { voiceState };
    items2[1] = closure_10(guildId(voiceState[16]).HappeningNowVoiceCardSubtitle, obj7);
    obj5.children = items2;
    items1[1] = closure_11(View, obj5);
    obj3.children = items1;
    tmp11Result = closure_11(index(voiceState[13]), obj3);
    const tmp14 = index(voiceState[13]);
  }
  return tmp11Result;
});
export const useVoiceChannelUsers = tmp4;
export { formatVoiceActivityTitle };

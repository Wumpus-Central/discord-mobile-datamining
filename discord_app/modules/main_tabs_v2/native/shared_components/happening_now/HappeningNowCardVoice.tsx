// === Module 16086: formatVoiceActivityTitle ===

// Module 16086 (formatVoiceActivityTitle)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import getNicknameDefault from "getNickname" /* 4712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "recomputeAffinities" /* 7659 */;
import closure_6 from "mergeGuildAvatar" /* 1371 */;
import closure_7 from "updateVoiceState" /* 4579 */;
import { HappeningNowCardTrackingType as closure_8 } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 15294 */;
import { AnalyticEvents } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function formatVoiceActivityTitle(stateFromStoresArray, guildId) {
  if (0 === stateFromStoresArray.length) {
    return "";
  } else if (1 === length) {
    return getNicknameDefault.getName(guildId, null, stateFromStoresArray[0]);
  } else if (2 === length) {
    const intl = getSystemLocale.intl;
    let obj = { user1: null, user2: null };
    obj[0] = getNicknameDefault.getName(guildId, null, stateFromStoresArray[0]);
    const obj2 = getNicknameDefault;
    obj[1] = getNicknameDefault.getName(guildId, null, stateFromStoresArray[1]);
    return intl.formatToPlainString(getSystemLocale.t["4SM/RX"], obj);
  } else {
    const intl2 = getSystemLocale.intl;
    obj = { user1: null, user2: null, extras: null };
    obj[0] = getNicknameDefault.getName(guildId, null, stateFromStoresArray[0]);
    const obj6 = getNicknameDefault;
    obj[1] = getNicknameDefault.getName(guildId, null, stateFromStoresArray[1]);
    obj[2] = stateFromStoresArray.length - 2;
    return intl2.formatToPlainString(getSystemLocale.t.pjxkCI, obj);
  }
}
let c3 = importAllResult;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ content: { flexShrink: 1 }, avatars: { marginRight: 12 } });
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  let voiceState = guildId;
  const index = guildId.index;
  let voiceUserAffinitySortType = index;
  voiceState = guildId.voiceState;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStoresArray;
  const tmp = callback2();
  voiceUserAffinitySortType = undefined;
  let obj = voiceState(voiceState[17]);
  voiceUserAffinitySortType = obj.useVoiceUserAffinitySortType("useVoiceChannelUsers");
  obj1 = voiceState(voiceState[18]);
  let items = [closure_7, closure_6, closure_5];
  const items1 = [voiceUserAffinitySortType, voiceState.channelId];
  stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = closure_1_7.getVoiceStatesForChannel(voiceState.channelId);
    const mapped = voiceUserAffinitySortType(voiceState[19])(voiceStatesForChannel).map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(voiceState(voiceState[20]).isNotNullish);
    const items = [
      (id) => {
        const userAffinity = closure_1_5.getUserAffinity(id.id);
        if ("vc_probability" === closure_1) {
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
      }
    ];
    const arr = voiceUserAffinitySortType(voiceState[19])(voiceStatesForChannel);
    return found.orderBy(items, ["desc"]).value();
  }, items1);
  const items2 = [index, guildId, voiceState.channelId, stateFromStoresArray];
  if (0 === stateFromStoresArray.length) {
    obj = { panelVariant: null };
    obj[0] = flag;
    let tmp11Result = callback(tmp2(tmp3[12]).HappeningNowCardPlaceholder, obj);
  } else {
    obj = { onPress: null, width: null, IconComponent: null, panelVariant: null, children: null };
    obj[0] = tmp6;
    let str = "large";
    if (guildId.fullwidth) {
      str = "full";
    }
    obj[1] = str;
    obj[2] = tmp2(tmp3[14]).VoiceNormalIcon;
    obj[3] = flag;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.avatars;
    const obj2 = { guildId: null, users: null };
    obj2[0] = guildId;
    obj2[1] = stateFromStoresArray;
    obj1[1] = callback(voiceUserAffinitySortType(tmp3[15]), obj2);
    const items3 = [callback(View, obj1), ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.content;
    const obj4 = { lineClamp: 2, children: null };
    obj4[1] = tmp5;
    const items4 = [callback(tmp2(tmp3[13]).HappeningNowCardHeader, obj4), ];
    const obj5 = { voiceState: null };
    obj5[0] = voiceState;
    items4[1] = callback(tmp2(tmp3[16]).HappeningNowVoiceCardSubtitle, obj5);
    obj3[1] = items4;
    items3[1] = closure_11(View, obj3);
    obj[4] = items3;
    tmp11Result = tmp11(voiceUserAffinitySortType(tmp3[13]), obj);
    const tmp12 = voiceUserAffinitySortType;
    const tmp13 = voiceUserAffinitySortType(tmp3[13]);
  }
  return tmp11Result;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx");

export default memoResult;
export const useVoiceChannelUsers = function useVoiceChannelUsers(channelId) {
  const _require = channelId;
  const voiceUserAffinitySortType = _require(8073).useVoiceUserAffinitySortType("useVoiceChannelUsers");
  const obj = _require(8073);
  const items = [closure_7, closure_6, closure_5];
  const items1 = [voiceUserAffinitySortType, channelId.channelId];
  return _require(504).useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = closure_1_7.getVoiceStatesForChannel(voiceState.channelId);
    const mapped = voiceUserAffinitySortType(voiceState[19])(voiceStatesForChannel).map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(voiceState(voiceState[20]).isNotNullish);
    const items = [
      (id) => {
        const userAffinity = closure_1_5.getUserAffinity(id.id);
        if ("vc_probability" === closure_1) {
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
      }
    ];
    const arr = voiceUserAffinitySortType(voiceState[19])(voiceStatesForChannel);
    return found.orderBy(items, ["desc"]).value();
  }, items1);
};
export { formatVoiceActivityTitle };
// === Module 16086: HappeningNowCardVoice ===

// Module 16086 (HappeningNowCardVoice)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import noop from "module_19" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7659 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
function formatVoiceActivityTitle(stateFromStoresArray, guildId) {
  if (0 === stateFromStoresArray.length) {
    return "";
  } else if (1 === length) {
    return NicknameUtilsDefault.getName(guildId, null, stateFromStoresArray[0]);
  } else if (2 === length) {
    const intl = util.intl;
    let obj = { user1: NicknameUtilsDefault.getName(guildId, null, stateFromStoresArray[0]), user2: null };
    obj.user2 = NicknameUtilsDefault.getName(guildId, null, stateFromStoresArray[1]);
    return intl.formatToPlainString(util.t["4SM/RX"], obj);
  } else {
    const intl2 = util.intl;
    obj = { user1: NicknameUtilsDefault.getName(guildId, null, stateFromStoresArray[0]), user2: null, extras: null };
    obj.user2 = NicknameUtilsDefault.getName(guildId, null, stateFromStoresArray[1]);
    obj.extras = stateFromStoresArray.length - 2;
    return intl2.formatToPlainString(util.t.pjxkCI, obj);
  }
}
const View = fn(17).View;
let closure_8 = fn(15294).HappeningNowCardTrackingType;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({ content: { flexShrink: 1 }, avatars: { marginRight: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  const index = guildId.index;
  const voiceState = guildId.voiceState;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_12();
  closure_129_0 = voiceState;
  let obj = guildId(voiceState[17]);
  const voiceUserAffinitySortType = obj.useVoiceUserAffinitySortType("useVoiceChannelUsers");
  closure_129_1 = voiceUserAffinitySortType;
  let obj1 = guildId(voiceState[18]);
  let items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
  const items1 = [voiceUserAffinitySortType, voiceState.channelId];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(guildId.channelId);
    const mapped = _modDef12(voiceStatesForChannel).map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const items = [
      (id) => {
        userAffinity = userAffinity.getUserAffinity(id.id);
        if ("vc_probability" === index) {
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
    const arr = _modDef12(voiceStatesForChannel);
    return found.orderBy(items, ["desc"]).value();
  }, items1);
  const items2 = [index, guildId, voiceState.channelId, stateFromStoresArray];
  if (0 === stateFromStoresArray.length) {
    obj = { panelVariant: flag };
    let tmp11Result = closure_10(tmp2(tmp3[12]).HappeningNowCardPlaceholder, obj);
  } else {
    obj = { onPress: tmp6, width: null, IconComponent: null, panelVariant: null, children: null };
    let str = "large";
    if (guildId.fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.IconComponent = tmp2(tmp3[14]).VoiceNormalIcon;
    obj.panelVariant = flag;
    obj1 = { style: tmp.avatars, children: null };
    const obj2 = { guildId, users: stateFromStoresArray };
    obj1.children = closure_10(index(tmp3[15]), obj2);
    const items3 = [closure_10(View, obj1), ];
    const obj3 = { style: tmp.content, children: null };
    const obj4 = { lineClamp: 2, children: tmp5 };
    const items4 = [closure_10(tmp2(tmp3[13]).HappeningNowCardHeader, obj4), ];
    const obj5 = { voiceState };
    items4[1] = closure_10(tmp2(tmp3[16]).HappeningNowVoiceCardSubtitle, obj5);
    obj3.children = items4;
    items3[1] = closure_11(View, obj3);
    obj.children = items3;
    tmp11Result = closure_11(index(tmp3[13]), obj);
    const tmp13 = index(tmp3[13]);
  }
  return tmp11Result;
});
export const useVoiceChannelUsers = function useVoiceChannelUsers(channelId) {
  _require = channelId;
  const voiceUserAffinitySortType = require("VoiceUserAffinityExperiment").useVoiceUserAffinitySortType("useVoiceChannelUsers");
  const obj = require("VoiceUserAffinityExperiment");
  const items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
  const items1 = [voiceUserAffinitySortType, channelId.channelId];
  return require("initialize").useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = VoiceStateStore.getVoiceStatesForChannel(guildId.channelId);
    const mapped = _modDef12(voiceStatesForChannel).map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const items = [
      (id) => {
        userAffinity = userAffinity.getUserAffinity(id.id);
        if ("vc_probability" === index) {
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
    const arr = _modDef12(voiceStatesForChannel);
    return found.orderBy(items, ["desc"]).value();
  }, items1);
};
export { formatVoiceActivityTitle };
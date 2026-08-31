// === Module 11987: ? ===

// Module 11987
import playDefault from "play" /* 5912 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 11979 */;
import registerAssetDefault from "registerAsset" /* 11988 */;
import registerAssetDefault2 from "registerAsset" /* 11989 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import { TextAreaCta } from "TextAreaCta" /* 11502 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let closure_8 = createCacheKey.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const memoResult = importAllResult.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = callback();
  let obj = guildId(7632);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4272).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = registerAssetDefault;
    const intl3 = tmp2(1236).intl;
    let stringResult = intl3.string(tmp2(1236).t.lk30cY);
    let fn = function _() {
      let obj = closure_1_1(closure_1_2[11]);
      obj = { cta_type: closure_1_5.MEMBER_VERIFICATION_REJECTED };
      obj.trackWithMetadata(closure_1_6.TEXT_AREA_CTA_CLICKED, obj);
      obj = { guildId, canWithdraw: false };
      const result = guildId(closure_1_2[12]).openMemberVerificationRejectedAlert(obj);
    };
  } else if (tmp2(4272).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = registerAssetDefault2;
    const intl2 = tmp2(1236).intl;
    stringResult = intl2.string(tmp2(1236).t["5iLvSx"]);
    fn = function _() {
      let obj = closure_1_1(closure_1_2[11]);
      obj = { cta_type: closure_1_5.MEMBER_VERIFICATION_CONFIRMED };
      obj.trackWithMetadata(closure_1_6.TEXT_AREA_CTA_CLICKED, obj);
      obj = { guildId, subtitleText: null };
      const intl = guildId(closure_1_2[10]).intl;
      obj[1] = intl.string(guildId(closure_1_2[10]).t["13tjTU"]);
      const result = guildId(closure_1_2[12]).openMemberVerificationCancelPendingAlert(obj);
    };
    const tmp7 = jsx(tmp2(5519).XSmallIcon, {});
  } else {
    let intl = tmp2(1236).intl;
    stringResult = intl.string(tmp2(1236).t.rEBKvg);
    fn = function _() {
      let obj = closure_1_1(closure_1_2[11]);
      obj = { cta_type: closure_1_5.MEMBER_VERIFICATION };
      obj.trackWithMetadata(closure_1_6.TEXT_AREA_CTA_CLICKED, obj);
      const result = guildId(closure_1_2[15]).openMemberVerificationModal(guildId);
    };
  }
  const items = [closure_4];
  const stateFromStores = guildId(589).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp14 = importDefault;
  const tmp2Result = guildId(589);
  if (null != tmp8) {
    obj = { style: null, source: null };
    obj[0] = tmp.noticeIcon;
    obj[1] = tmp8;
    let tmp13Result = tmp13(Image, obj);
  } else {
    obj = { style: null, source: null, autoPlay: null };
    obj[0] = tmp.lottieAnimation;
    obj[1] = tmp2(11990);
    obj[2] = !stateFromStores;
    tmp13Result = tmp13(playDefault, obj);
    const tmp14Result = playDefault;
  }
  obj1 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1236).intl;
  obj1[4] = intl4.string(guildId(1236).t["r8/DT+"]);
  obj1[5] = fn;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});
let result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
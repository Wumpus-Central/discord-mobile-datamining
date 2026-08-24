// === Module 12662: VoiceStatus ===

// Module 12662 (VoiceStatus)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import registerAssetDefault from "registerAsset" /* 8643 */;
import registerAssetDefault2 from "registerAsset" /* 12664 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "_detectH265HardwareDecode" /* 4501 */;
import closure_5 from "updateVoiceState" /* 4547 */;
import closure_6 from "buildStageChannelUserRoles" /* 4995 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
let obj = { voiceStatusWrapper: null, moderatorStatusWrapper: null, restricted: null };
obj = { position: "absolute", top: 4, left: 4, backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
createCacheKey = { position: "absolute", top: 4, right: 4, backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj[1] = createCacheKey;
obj[2] = { marginEnd: ThemesDefault.space.PX_4 };
let closure_8 = createCacheKey.createStyles(obj);
const obj2 = { marginEnd: ThemesDefault.space.PX_4 };
const memoResult = importAllResult.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  let obj = userId(589);
  const items = [closure_4];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.isLocalMute(userId), items1);
  const tmp = callback();
  const items2 = [closure_5];
  const items3 = [channelId, userId];
  const stateFromStores1 = userId(589).useStateFromStores(items2, () => closure_1_5.getVoiceStateForChannel(channelId, userId), items3);
  let flag;
  if (stateFromStores1 != null) {
    flag = stateFromStores1.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (stateFromStores1 != null) {
    flag2 = stateFromStores1.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  if (stateFromStores) {
    let tmp5 = channelId(12623);
    let flag3 = true;
  } else if (flag2) {
    tmp5 = channelId(12513);
    flag3 = false;
  } else {
    flag3 = false;
    if (flag) {
      tmp5 = channelId(12514);
      flag3 = false;
    }
  }
  let tmp9 = null;
  if (null != tmp5) {
    obj = { style: null, children: null };
    const items4 = [tmp.voiceStatusWrapper, userId.style];
    obj[0] = items4;
    obj = { source: null, size: null, color: null, disableColor: null };
    obj[0] = tmp5;
    obj[1] = tmp2(1297).Icon.Sizes.SMALL;
    obj[2] = channelId(712).unsafe_rawColors.BLACK;
    obj[3] = flag3;
    obj[1] = jsx(tmp2(1297).Icon, { source: null, size: null, color: null, disableColor: null });
    tmp9 = <View source={null} size={null} color={null} disableColor={null} />;
  }
  return tmp9;
});
const memoResult1 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  let obj = userId(589);
  const items = [closure_6];
  const items1 = [channelId, userId];
  let tmp4;
  if (obj.useStateFromStores(items, () => closure_1_6.isModerator(userId, channelId), items1)) {
    tmp4 = channelId(12663);
  }
  let tmp6 = null;
  if (null != tmp4) {
    obj = { style: null, children: null };
    const items2 = [tmp.moderatorStatusWrapper, userId.style];
    obj[0] = items2;
    obj = { source: null, size: null, color: null };
    obj[0] = tmp4;
    obj[1] = tmp2(1297).Icon.Sizes.SMALL;
    obj[2] = channelId(712).unsafe_rawColors.BLACK;
    obj[1] = jsx(tmp2(1297).Icon, { source: null, size: null, color: null });
    tmp6 = <View source={null} size={null} color={null} />;
  }
  return tmp6;
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memoResult1;
export const BlockedStatus = function BlockedStatus() {
  const tmp = callback();
  return jsx(Button.Icon, { style: callback().restricted, source: registerAssetDefault2, size: Button.Icon.Sizes.EXTRA_SMALL, color: ThemesDefault.unsafe_rawColors.RED_400 });
};
export const IgnoredStatus = function IgnoredStatus() {
  const tmp = callback();
  return jsx(Button.Icon, { style: callback().restricted, source: registerAssetDefault, size: Button.Icon.Sizes.EXTRA_SMALL });
};
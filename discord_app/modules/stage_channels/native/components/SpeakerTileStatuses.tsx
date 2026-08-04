import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import updateVoiceState from "updateVoiceState";
import buildStageChannelUserRoles from "buildStageChannelUserRoles";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let obj = { voiceStatusWrapper: null, moderatorStatusWrapper: null, restricted: null };
obj = { position: "absolute", top: 4, left: 4, backgroundColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
createCacheKey = { position: "absolute", top: 4, right: 4, backgroundColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj[1] = createCacheKey;
obj[2] = { marginEnd: require("Themes").space.PX_4 };
let closure_8 = createCacheKey.createStyles(obj);
const obj2 = { marginEnd: require("Themes").space.PX_4 };
const memoResult = importAllResult.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  let obj = userId(589);
  const items = [_detectH265HardwareDecode];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.isLocalMute(userId), items1);
  const tmp = callback();
  const items2 = [updateVoiceState];
  const items3 = [channelId, userId];
  const stateFromStores1 = userId(589).useStateFromStores(items2, () => outer1_5.getVoiceStateForChannel(channelId, userId), items3);
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
    let tmp5 = channelId(10768);
    let flag3 = true;
  } else if (flag2) {
    tmp5 = channelId(10621);
    flag3 = false;
  } else {
    flag3 = false;
    if (flag) {
      tmp5 = channelId(10622);
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
  const items = [buildStageChannelUserRoles];
  const items1 = [channelId, userId];
  let tmp4;
  if (obj.useStateFromStores(items, () => outer1_6.isModerator(userId, channelId), items1)) {
    tmp4 = channelId(10826);
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
const result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memoResult1;
export const BlockedStatus = function BlockedStatus() {
  const obj = { style: callback().restricted, source: null, size: null, color: null };
  obj[1] = importDefault(10827);
  obj[2] = require(1297) /* Button */.Icon.Sizes.EXTRA_SMALL;
  obj[3] = importDefault(712).unsafe_rawColors.RED_400;
  return jsx(require(1297) /* Button */.Icon, { style: callback().restricted, source: null, size: null, color: null });
};
export const IgnoredStatus = function IgnoredStatus() {
  const obj = { style: callback().restricted, source: null, size: null };
  obj[1] = importDefault(8307);
  obj[2] = require(1297) /* Button */.Icon.Sizes.EXTRA_SMALL;
  return jsx(require(1297) /* Button */.Icon, { style: callback().restricted, source: null, size: null });
};
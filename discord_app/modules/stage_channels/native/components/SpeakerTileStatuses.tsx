// discord_app/modules/stage_channels/native/components/SpeakerTileStatuses.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import registerAssetDefault from "../../../../../_runtime/07754_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/10161_registerAsset.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/MediaEngineStore.tsx";
import closure_5 from "../../../../stores/VoiceStateStore.tsx";
import closure_6 from "../../StageChannelRoleStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let obj = { voiceStatusWrapper: null, moderatorStatusWrapper: null, restricted: null };
obj = {
  position: "absolute",
  top: 4,
  left: 4,
  backgroundColor: ThemesDefault.colors.WHITE,
  borderRadius: ThemesDefault.radii.md,
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
};
obj[0] = obj;
createCacheKey = {
  position: "absolute",
  top: 4,
  right: 4,
  backgroundColor: ThemesDefault.colors.WHITE,
  borderRadius: ThemesDefault.radii.md,
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
};
obj[1] = createCacheKey;
obj[2] = { marginEnd: ThemesDefault.space.PX_4 };
let closure_8 = createCacheKey.createStyles(obj);
const obj2 = { marginEnd: ThemesDefault.space.PX_4 };
const memoResult = importAllResult.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  let obj = userId(586);
  const items = [closure_4];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.isLocalMute(userId), items1);
  const tmp = callback();
  const items2 = [closure_5];
  const items3 = [channelId, userId];
  const stateFromStores1 = userId(586).useStateFromStores(
    items2,
    () => closure_1_5.getVoiceStateForChannel(channelId, userId),
    items3,
  );
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
    let tmp5 = channelId(10116);
    let flag3 = true;
  } else if (flag2) {
    tmp5 = channelId(9612);
    flag3 = false;
  } else {
    flag3 = false;
    if (flag) {
      tmp5 = channelId(9613);
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
    obj[1] = tmp2(1296).Icon.Sizes.SMALL;
    obj[2] = channelId(709).unsafe_rawColors.BLACK;
    obj[3] = flag3;
    obj[1] = jsx(tmp2(1296).Icon, { source: null, size: null, color: null, disableColor: null });
    tmp9 = <View source={null} size={null} color={null} disableColor={null} />;
  }
  return tmp9;
});
const memoResult1 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  let obj = userId(586);
  const items = [closure_6];
  const items1 = [channelId, userId];
  let tmp4;
  if (obj.useStateFromStores(items, () => closure_1_6.isModerator(userId, channelId), items1)) {
    tmp4 = channelId(10160);
  }
  let tmp6 = null;
  if (null != tmp4) {
    obj = { style: null, children: null };
    const items2 = [tmp.moderatorStatusWrapper, userId.style];
    obj[0] = items2;
    obj = { source: null, size: null, color: null };
    obj[0] = tmp4;
    obj[1] = tmp2(1296).Icon.Sizes.SMALL;
    obj[2] = channelId(709).unsafe_rawColors.BLACK;
    obj[1] = jsx(tmp2(1296).Icon, { source: null, size: null, color: null });
    tmp6 = <View source={null} size={null} color={null} />;
  }
  return tmp6;
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memoResult1;
export const BlockedStatus = function BlockedStatus() {
  const tmp = callback();
  return jsx(Button.Icon, {
    style: callback().restricted,
    source: registerAssetDefault2,
    size: Button.Icon.Sizes.EXTRA_SMALL,
    color: ThemesDefault.unsafe_rawColors.RED_400,
  });
};
export const IgnoredStatus = function IgnoredStatus() {
  const tmp = callback();
  return jsx(Button.Icon, {
    style: callback().restricted,
    source: registerAssetDefault,
    size: Button.Icon.Sizes.EXTRA_SMALL,
  });
};

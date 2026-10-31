// discord_app/modules/stage_channels/native/components/SpeakerTileStatuses.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef7136 from "../../../../../_runtime/metro/07136__.js";
import _modDef12032 from "../../../../../_runtime/metro/12032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import StageChannelRoleStore from "../../StageChannelRoleStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj = { voiceStatusWrapper: null, moderatorStatusWrapper: null, restricted: null };
let size = {
  position: "absolute",
  top: 4,
  left: 4,
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.md,
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
};
obj.voiceStatusWrapper = size;
const size1 = {
  position: "absolute",
  top: 4,
  right: 4,
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.md,
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
};
obj.moderatorStatusWrapper = size1;
obj.restricted = { marginEnd: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let obj3 = { marginEnd: nativeDefault.space.PX_4 };
const memoResult = noop.memo(function VoiceStatus(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const tmp = closure_8();
  const items = [MediaEngineStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => MediaEngineStore.isLocalMute(userId), items1);
  const obj = userId(504);
  const obj2 = userId(9235);
  const items2 = [VoiceStateStore];
  const items3 = [channelId, userId];
  const stateFromStores1 = userId(504).useStateFromStores(
    items2,
    () => VoiceStateStore.getVoiceStateForChannel(channelId, userId),
    items3,
  );
  const obj3 = userId(504);
  const result = obj2.withLocalSelfMuteDeaf(stateFromStores1, userId(9235).useLocalSelfMuteDeaf());
  let flag;
  if (result != null) {
    flag = result.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (result != null) {
    flag2 = result.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  if (stateFromStores) {
    let tmp6 = channelId(11973);
    let flag3 = true;
  } else if (flag2) {
    tmp6 = channelId(11781);
    flag3 = false;
  } else {
    flag3 = false;
    if (flag) {
      tmp6 = channelId(11782);
      flag3 = false;
    }
  }
  let tmp10 = null;
  if (null != tmp6) {
    const obj5 = { style: null, children: null };
    const items4 = [tmp.voiceStatusWrapper, userId.style];
    obj5.style = items4;
    const obj6 = {
      source: tmp6,
      size: tmp2(1187).Icon.Sizes.SMALL,
      color: channelId(575).unsafe_rawColors.BLACK,
      disableColor: flag3,
    };
    obj5.children = jsx(tmp2(1187).Icon, {
      source: tmp6,
      size: tmp2(1187).Icon.Sizes.SMALL,
      color: channelId(575).unsafe_rawColors.BLACK,
      disableColor: flag3,
    });
    tmp10 = <View style={null}>{null}</View>;
  }
  return tmp10;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = noop.memo(function ModeratorStatus(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const tmp = closure_8();
  const items = [StageChannelRoleStore];
  const items1 = [channelId, userId];
  let tmp4;
  if (obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(userId, channelId), items1)) {
    tmp4 = channelId(12031);
  }
  let tmp6 = null;
  if (null != tmp4) {
    const obj2 = { style: null, children: null };
    const items2 = [tmp.moderatorStatusWrapper, userId.style];
    obj2.style = items2;
    const obj3 = { source: tmp4, size: tmp2(1187).Icon.Sizes.SMALL, color: channelId(575).unsafe_rawColors.BLACK };
    obj2.children = jsx(tmp2(1187).Icon, {
      source: tmp4,
      size: tmp2(1187).Icon.Sizes.SMALL,
      color: channelId(575).unsafe_rawColors.BLACK,
    });
    tmp6 = <View style={null}>{null}</View>;
  }
  return tmp6;
});
export function BlockedStatus() {
  const tmp = closure_8();
  return jsx(native.Icon, {
    style: closure_8().restricted,
    source: _modDef12032,
    size: native.Icon.Sizes.EXTRA_SMALL,
    color: nativeDefault.unsafe_rawColors.RED_400,
  });
}
export function IgnoredStatus() {
  const tmp = closure_8();
  return jsx(native.Icon, { style: closure_8().restricted, source: _modDef7136, size: native.Icon.Sizes.EXTRA_SMALL });
}

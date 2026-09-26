// === Module 9510: SpeakerTileStatuses ===

// Module 9510 (SpeakerTileStatuses)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import _modDef6388 from "module_6388" /* 6388 */;
import _modDef9512 from "module_9512" /* 9512 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5733 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj = { voiceStatusWrapper: null, moderatorStatusWrapper: null, restricted: null };
let size = { position: "absolute", top: 4, left: 4, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj.voiceStatusWrapper = size;
const size1 = { position: "absolute", top: 4, right: 4, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj.moderatorStatusWrapper = size1;
obj.restricted = { marginEnd: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let obj3 = { marginEnd: nativeDefault.space.PX_4 };
const memoResult = noop.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  const tmp = closure_8();
  const items = [MediaEngineStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => MediaEngineStore.isLocalMute(userId), items1);
  const obj = userId(504);
  const items2 = [VoiceStateStore];
  const items3 = [channelId, userId];
  const stateFromStores1 = userId(504).useStateFromStores(items2, () => VoiceStateStore.getVoiceStateForChannel(channelId, userId), items3);
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
    let tmp5 = channelId(9467);
    let flag3 = true;
  } else if (flag2) {
    tmp5 = channelId(8906);
    flag3 = false;
  } else {
    flag3 = false;
    if (flag) {
      tmp5 = channelId(8907);
      flag3 = false;
    }
  }
  let tmp9 = null;
  if (null != tmp5) {
    const obj3 = { style: null, children: null };
    const items4 = [tmp.voiceStatusWrapper, userId.style];
    obj3.style = items4;
    const obj4 = { source: tmp5, size: tmp2(1177).Icon.Sizes.SMALL, color: channelId(576).unsafe_rawColors.BLACK, disableColor: flag3 };
    obj3.children = jsx(tmp2(1177).Icon, { source: tmp5, size: tmp2(1177).Icon.Sizes.SMALL, color: channelId(576).unsafe_rawColors.BLACK, disableColor: flag3 });
    tmp9 = <View style={null}>{null}</View>;
  }
  return tmp9;
});
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = noop.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  const tmp = closure_8();
  const items = [StageChannelRoleStore];
  const items1 = [channelId, userId];
  let tmp4;
  if (obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(userId, channelId), items1)) {
    tmp4 = channelId(9511);
  }
  let tmp6 = null;
  if (null != tmp4) {
    const obj2 = { style: null, children: null };
    const items2 = [tmp.moderatorStatusWrapper, userId.style];
    obj2.style = items2;
    const obj3 = { source: tmp4, size: tmp2(1177).Icon.Sizes.SMALL, color: channelId(576).unsafe_rawColors.BLACK };
    obj2.children = jsx(tmp2(1177).Icon, { source: tmp4, size: tmp2(1177).Icon.Sizes.SMALL, color: channelId(576).unsafe_rawColors.BLACK });
    tmp6 = <View style={null}>{null}</View>;
  }
  return tmp6;
});
export const BlockedStatus = function BlockedStatus() {
  const tmp = closure_8();
  return jsx(native.Icon, { style: closure_8().restricted, source: _modDef9512, size: native.Icon.Sizes.EXTRA_SMALL, color: nativeDefault.unsafe_rawColors.RED_400 });
};
export const IgnoredStatus = function IgnoredStatus() {
  const tmp = closure_8();
  return jsx(native.Icon, { style: closure_8().restricted, source: _modDef6388, size: native.Icon.Sizes.EXTRA_SMALL });
};
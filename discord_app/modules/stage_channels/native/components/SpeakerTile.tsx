// === Module 10046: SpeakerTile ===

// Module 10046 (SpeakerTile)
import nativeDefault from "native" /* 576 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8393 */;
import StageTileTypes from "StageTileTypes" /* 10047 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;

require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(4581).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
const result1 = obj.HALF * 1.7777777777777777;
fn(4560);
obj = { container: { marginHorizontal: 4, marginVertical: 4, alignItems: "center", flex: 1 }, full: { height: obj.FULL }, half: { height: obj.HALF }, third: { height: obj.THIRD }, avatarContainer: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm }, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, nameplateContainer: null, nameplateText: null, restricted: null, blocked: null };
const createStyles = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", bottom: 4, marginHorizontal: 4, paddingVertical: 4, paddingHorizontal: 8, backgroundColor: null, borderRadius: 6 };
const ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3);
obj.nameplateContainer = createStyles;
let obj1 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm };
obj.nameplateText = { color: nativeDefault.colors.WHITE };
let size = { borderRadius: nativeDefault.radii.sm, width: 16, height: 16, justifyContent: "center", alignItems: "center", marginEnd: 4 };
obj.restricted = size;
let obj3 = { color: nativeDefault.colors.WHITE };
obj.blocked = { backgroundColor: nativeDefault.colors.WHITE };
const styles = createStyles.createStyles(obj);
let obj4 = { backgroundColor: nativeDefault.colors.WHITE };
size = fn(2);
const result2 = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTile.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  let user;
  const tmp = styles();
  let obj = channel(user[10]);
  user = participant.user;
  ({ blocked, ignored } = participant);
  const isScreenLandscape = obj.useIsScreenLandscape();
  let obj1 = channel(user[11]);
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const stateFromStores = obj1.useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  const items2 = [channel.id, user.id];
  if (null != stateFromStores) {
    if (stateFromStores.type === ParticipantTypes.USER) {
      let tmp10Result = blocked;
      if (!blocked) {
        tmp10Result = ignored;
      }
      const tmp9 = tmp2(tmp3[13])(channel, stateFromStores);
      obj = { accessibilityLabel: null, accessibilityRole: "button", style: null, onPress: null, children: null };
      const intl = tmp4(tmp3[15]).intl;
      obj = { name: tmp9 };
      obj.accessibilityLabel = intl.formatToPlainString(tmp4(tmp3[15]).t.ODlyvk, obj);
      const items3 = [tmp.container, , ];
      if (tmp4(tmp3[8]).StageTileSize.FULL === size) {
        let full = tmp.full;
      } else {
        full = tmp4(tmp3[8]).StageTileSize.HALF === size ? tmp.half : tmp.third;
      }
      items3[1] = full;
      const StageTileSize = tmp4(tmp3[8]).StageTileSize;
      if (isScreenLandscape) {
        obj1 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
      } else {
        if (size === StageTileSize.THIRD) {
          const obj2 = { maxWidth: (participant(user[9])().width - 36) / 3 };
          let obj3 = obj2;
        } else {
          obj3 = { flex: 1 };
        }
        items3[2] = obj3;
        obj.style = items3;
        obj.onPress = tmp7;
        const obj4 = { style: tmp.avatarContainer, children: null };
        if (size === tmp4(tmp3[8]).StageTileSize.THIRD) {
          const items4 = [tmp.imageBackground, { paddingBottom: 12 }];
          let items5 = items4;
        } else {
          items5 = [tmp.imageBackground];
        }
        const obj5 = { style: items5, url: user.getAvatarURL(channel.guild_id, 64), speaking: stateFromStores.speaking, animate: true, size: tmp4(tmp3[17]).AvatarSizes.XLARGE, isStageCall: true, avatarStyle: null };
        let obj6 = tmp10Result;
        if (tmp10Result) {
          obj6 = { opacity: 0.5 };
        }
        obj5.avatarStyle = obj6;
        const items6 = [closure_7(tmp2(tmp3[16]), obj5), , ];
        const obj7 = { userId: user.id, channelId: channel.id };
        items6[1] = closure_7(tmp4(tmp3[18]).VoiceStatus, obj7);
        const obj8 = { userId: user.id, channelId: channel.id };
        items6[2] = closure_7(tmp4(tmp3[18]).ModeratorStatus, obj8);
        obj4.children = items6;
        const items7 = [closure_8(View, obj4), ];
        const obj9 = { style: tmp.nameplateContainer, children: null };
        if (tmp10Result) {
          const items8 = [tmp.restricted, ];
          blocked = null;
          if (blocked) {
            blocked = tmp.blocked;
          }
          const obj10 = { style: null, children: null };
          items8[1] = blocked;
          obj10.style = items8;
          if (blocked) {
            const obj11 = { source: tmp2(tmp3[19]), size: tmp4(tmp3[17]).Icon.Sizes.EXTRA_SMALL, color: tmp2(tmp3[6]).unsafe_rawColors.RED_400 };
            blocked = closure_7(tmp4(tmp3[17]).Icon, obj11);
          }
          const items9 = [blocked, ];
          if (ignored) {
            const obj12 = { source: tmp2(tmp3[20]), size: tmp4(tmp3[17]).Icon.Sizes.EXTRA_SMALL };
            ignored = closure_7(tmp4(tmp3[17]).Icon, obj12);
          }
          items9[1] = ignored;
          obj10.children = items9;
          tmp10Result = closure_8(View, obj10);
        }
        const items10 = [tmp10Result, ];
        const obj13 = { lineClamp: 1, style: tmp.nameplateText, variant: "text-sm/medium", color: "text-overlay-light", children: tmp9 };
        items10[1] = closure_7(tmp4(tmp3[21]).Text, obj13);
        obj9.children = items10;
        items7[1] = closure_8(View, obj9);
        obj.children = items7;
        return closure_8(tmp4(tmp3[14]).PressableOpacity, obj);
      }
    }
  }
  return null;
});
export const SPEAKER_TILE_HEIGHTS = obj;
export const LANDSCAPE_MAX_TILE_WIDTH_FULL = result;
export const LANDSCAPE_MAX_TILE_WIDTH = result1;
export const useSpeakerTileStyles = styles;
export const getSizeStyle = function getSizeStyle(size, speakerTileStyles) {
  if (StageTileTypes.StageTileSize.FULL === size) {
    return speakerTileStyles.full;
  } else if (StageTileTypes.StageTileSize.HALF === size) {
    return speakerTileStyles.half;
  } else {
    return speakerTileStyles.third;
  }
};
export const getTileWidthStyle = function getTileWidthStyle(arg0, arg1, arg2) {
  const StageTileSize = StageTileTypes.StageTileSize;
  if (arg2) {
    let obj = { maxWidth: arg0 === StageTileSize.FULL ? result : result1 };
  } else {
    if (arg0 === StageTileSize.THIRD) {
      obj = { maxWidth: (arg1 - 36) / 3 };
    } else {
      obj = { flex: 1 };
    }
    return obj;
  }
};
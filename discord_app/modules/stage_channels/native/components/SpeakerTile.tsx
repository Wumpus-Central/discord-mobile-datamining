// discord_app/modules/stage_channels/native/components/SpeakerTile.tsx
import importAllResult from "registerAsset";
import { View } from "Button";
import getParticipants from "getParticipants";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";
import { StageTileSize } from "../../StageTileTypes.tsx";

let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
let c9 = result;
const result1 = obj.HALF * 1.7777777777777777;
obj = { container: { marginHorizontal: 4, marginVertical: 4, alignItems: "center", flex: 1 }, full: obj1, half: createCacheKey, third: obj3, avatarContainer: null, imageBackground: null, nameplateContainer: null, nameplateText: null, restricted: null, blocked: null };
createCacheKey = { height: obj.HALF };
obj[4] = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: require("Themes").radii.sm };
obj[5] = { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" };
let obj5 = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", bottom: 4, marginHorizontal: 4, paddingVertical: 4, paddingHorizontal: 8, backgroundColor: null, borderRadius: 6 };
obj5[8] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.3);
obj[6] = obj5;
obj1 = { height: obj.FULL };
obj3 = { height: obj.THIRD };
let obj4 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: require("Themes").radii.sm };
obj[7] = { color: require("Themes").colors.WHITE };
let obj6 = { color: require("Themes").colors.WHITE };
obj[8] = { borderRadius: require("Themes").radii.sm, width: 16, height: 16, justifyContent: "center", alignItems: "center", marginEnd: 4 };
let obj7 = { borderRadius: require("Themes").radii.sm, width: 16, height: 16, justifyContent: "center", alignItems: "center", marginEnd: 4 };
obj[9] = { backgroundColor: require("Themes").colors.WHITE };
const styles = createCacheKey.createStyles(obj);
let obj8 = { backgroundColor: require("Themes").colors.WHITE };
const memoResult = importAllResult.memo((channel) => {
  let blocked;
  let ignored;
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
  const items = [getParticipants];
  const items1 = [channel.id, participant.id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getParticipant(channel.id, participant.id), items1);
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
      obj = { name: null };
      obj[0] = tmp9;
      obj[0] = intl.formatToPlainString(tmp4(tmp3[15]).t.ODlyvk, obj);
      const items3 = [tmp.container, , ];
      if (tmp4(tmp3[8]).StageTileSize.FULL === size) {
        let full = tmp.full;
      } else {
        full = tmp4(tmp3[8]).StageTileSize.HALF === size ? tmp.half : tmp.third;
      }
      items3[1] = full;
      const StageTileSize = tmp4(tmp3[8]).StageTileSize;
      if (isScreenLandscape) {
        obj1 = { maxWidth: null };
        obj1[0] = size === StageTileSize.FULL ? closure_9 : result1;
      } else {
        if (size === StageTileSize.THIRD) {
          const obj2 = { maxWidth: null };
          obj2[0] = (participant(user[9])().width - 36) / 3;
          let obj3 = obj2;
        } else {
          obj3 = { flex: 1 };
        }
        items3[2] = obj3;
        obj[2] = items3;
        obj[3] = tmp7;
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.avatarContainer;
        if (size === tmp4(tmp3[8]).StageTileSize.THIRD) {
          const items4 = [tmp.imageBackground, { paddingBottom: 12 }];
          let items5 = items4;
        } else {
          items5 = [tmp.imageBackground];
        }
        const obj5 = { style: null, url: null, speaking: null, animate: true, size: null, isStageCall: true, avatarStyle: null };
        obj5[0] = items5;
        obj5[1] = user.getAvatarURL(channel.guild_id, 64);
        obj5[2] = stateFromStores.speaking;
        obj5[4] = tmp4(tmp3[17]).AvatarSizes.XLARGE;
        let obj6 = tmp10Result;
        if (tmp10Result) {
          obj6 = { opacity: 0.5 };
        }
        obj5[6] = obj6;
        const items6 = [closure_7(tmp2(tmp3[16]), obj5), , ];
        const obj7 = { userId: null, channelId: null };
        obj7[0] = user.id;
        obj7[1] = channel.id;
        items6[1] = closure_7(tmp4(tmp3[18]).VoiceStatus, obj7);
        const obj8 = { userId: null, channelId: null };
        obj8[0] = user.id;
        obj8[1] = channel.id;
        items6[2] = closure_7(tmp4(tmp3[18]).ModeratorStatus, obj8);
        obj4[1] = items6;
        const items7 = [tmp10(View, obj4), ];
        const obj9 = { style: null, children: null };
        obj9[0] = tmp.nameplateContainer;
        if (tmp10Result) {
          const items8 = [tmp.restricted, ];
          blocked = null;
          if (blocked) {
            blocked = tmp.blocked;
          }
          const obj10 = { style: null, children: null };
          items8[1] = blocked;
          obj10[0] = items8;
          if (blocked) {
            const obj11 = { source: null, size: null, color: null };
            obj11[0] = tmp2(tmp3[19]);
            obj11[1] = tmp4(tmp3[17]).Icon.Sizes.EXTRA_SMALL;
            obj11[2] = tmp2(tmp3[6]).unsafe_rawColors.RED_400;
            blocked = tmp13(tmp4(tmp3[17]).Icon, obj11);
          }
          const items9 = [blocked, ];
          if (ignored) {
            const obj12 = { source: null, size: null };
            obj12[0] = tmp2(tmp3[20]);
            obj12[1] = tmp4(tmp3[17]).Icon.Sizes.EXTRA_SMALL;
            ignored = tmp13(tmp4(tmp3[17]).Icon, obj12);
          }
          items9[1] = ignored;
          obj10[1] = items9;
          tmp10Result = tmp10(tmp12, obj10);
        }
        const items10 = [tmp10Result, ];
        const obj13 = { lineClamp: 1, style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
        obj13[1] = tmp.nameplateText;
        obj13[4] = tmp9;
        items10[1] = closure_7(tmp4(tmp3[21]).Text, obj13);
        obj9[1] = items10;
        items7[1] = tmp10(View, obj9);
        obj[4] = items7;
        return tmp10(tmp4(tmp3[14]).PressableOpacity, obj);
      }
    }
  }
  return null;
});
const result2 = require("getParticipants").fileFinishedImporting("modules/stage_channels/native/components/SpeakerTile.tsx");

export default memoResult;
export const SPEAKER_TILE_HEIGHTS = obj;
export const LANDSCAPE_MAX_TILE_WIDTH_FULL = result;
export const LANDSCAPE_MAX_TILE_WIDTH = result1;
export const useSpeakerTileStyles = styles;
export const getSizeStyle = function getSizeStyle(size, speakerTileStyles) {
  if (StageTileSize.StageTileSize.FULL === size) {
    return speakerTileStyles.full;
  } else if (tmp(10861).StageTileSize.HALF === size) {
    return speakerTileStyles.half;
  } else {
    return speakerTileStyles.third;
  }
  tmp = require;
};
export const getTileWidthStyle = function getTileWidthStyle(arg0, arg1, arg2) {
  const StageTileSize = StageTileSize.StageTileSize;
  if (arg2) {
    let obj = { maxWidth: null };
    obj[0] = arg0 === StageTileSize.FULL ? closure_9 : result1;
  } else {
    if (arg0 === StageTileSize.THIRD) {
      obj = { maxWidth: null };
      obj[0] = (arg1 - 36) / 3;
    } else {
      obj = { flex: 1 };
    }
    return obj;
  }
};
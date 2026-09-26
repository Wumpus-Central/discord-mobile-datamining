// === Module 15757: VoiceUserItem ===

// Module 15757 (VoiceUserItem)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "text-sm/medium";
let c9 = "redesign-channel-name-muted-text";
const XSMALL_20 = fn(1177).AvatarSizes.XSMALL_20;
const createStyles = fn(4836);
let obj = { voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 }, disabled: { opacity: 0.5 }, voiceStateCollapsed: null, voiceStateIcon: null, legacyVoiceStateIcon: null, gameIcon: null };
let size = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: nativeDefault.radii.lg, borderWidth: 4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
obj.voiceStateCollapsed = size;
const ChannelListLayout = fn(9580);
let merged = Object.assign(ChannelListLayout.makeSizeStyle(14));
obj.voiceStateIcon = { marginLeft: 6 };
obj.legacyVoiceStateIcon = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
obj.gameIcon = { marginLeft: 6 };
let closure_11 = createStyles.createStyles(obj);
let obj3 = { marginLeft: 6 };
let obj4 = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default noop.memo(function VoiceUserItem(guildId) {
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = closure_11();
  const first = user(guildId[10])(user.id, guildId, user(guildId[9])("channel_list"))[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  function getSource() {
    if (null != require) {
      if (null != require.avatar) {
        let guildMemberAvatarSource = AvatarUtilsDefault.getGuildMemberAvatarSource(require, user);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = user.getAvatarSource(guildId);
  }
  const gameRecord = user(tmp3[11])(application_id).gameRecord;
  const items = [guildId, channelId, application_id];
  if (collapsed) {
    const obj2 = { style: tmp.voiceStateCollapsed, children: null };
    const obj3 = { source: getSource, size: XSMALL_20 };
    obj2.children = closure_6(require("native").Avatar, obj3);
    let tmp8Result = closure_6(application_id, obj2);
  } else {
    const items1 = [tmp.voiceState, ];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    let obj = { style: null, children: null };
    items1[1] = disabled2;
    obj.style = items1;
    const obj4 = { source: getSource, size: XSMALL_20 };
    const items2 = [closure_6(require("native").Avatar, obj4), , , , , , , , ];
    const obj5 = { variant, color };
    const merged = Object.assign(guildId);
    items2[1] = closure_6(user(tmp3[14]), obj5);
    if (disabled) {
      items2[2] = null;
      if (disabled) {
        items2[3] = null;
        let tmp10Result = null;
        if (video) {
          tmp10Result = null;
          if (!disabled) {
            const obj6 = { size: "custom", color, style: tmp.voiceStateIcon };
            tmp10Result = closure_6(require("VideoIcon").VideoIcon, obj6);
          }
        }
        items2[4] = tmp10Result;
        let tmp10Result7 = null;
        if (isInEmbeddedActivity) {
          const obj7 = { source: user(tmp3[20]), size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp10Result7 = closure_6(require("native").Icon, obj7);
        }
        items2[5] = tmp10Result7;
        if (platform == null) {
          platform = "";
        }
        let tmp2Result1Result = user(tmp3[21])(platform);
        if (tmp2Result1Result == null) {
          tmp2Result1Result = require("getConsoleIcon").getConsoleIconForVoicePlatform(voicePlatform);
          const tmp11Result = require("getConsoleIcon");
        }
        let tmp10Result8 = null;
        if (null != tmp2Result1Result) {
          const obj8 = { source: tmp2Result1Result, size: require("native").Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp10Result8 = closure_6(require("native").Icon, obj8);
        }
        items2[6] = tmp10Result8;
        let tmp10Result9 = null;
        if (stream) {
          const obj9 = { style: tmp.legacyVoiceStateIcon };
          tmp10Result9 = closure_6(require("native").LiveTag, obj9);
        }
        items2[7] = tmp10Result9;
        let tmp10Result10 = null;
        if (!disabled) {
          tmp10Result10 = null;
          if (!isInEmbeddedActivity) {
            tmp10Result10 = null;
            if (null != gameRecord) {
              const obj10 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: tmp7 };
              tmp10Result10 = closure_6(user(tmp3[22]), obj10);
            }
          }
        }
        items2[8] = tmp10Result10;
        obj.children = items2;
        tmp8Result = closure_7(tmp9, obj);
        const tmp2Result2 = user(tmp3[21]);
      } else if (serverDeaf) {
        const obj11 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        let tmp10Result11 = closure_6(require("HeadphonesDenyIcon").HeadphonesDenyIcon, obj11);
      } else {
        tmp10Result11 = null;
        if (deaf) {
          const obj12 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp10Result11 = closure_6(require("HeadphonesSlashIcon").HeadphonesSlashIcon, obj12);
        }
      }
    } else if (serverMute) {
      const obj13 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
      let tmp10Result12 = closure_6(require("MicrophoneDenyIcon").MicrophoneDenyIcon, obj13);
    } else if (localMute) {
      const obj14 = { style: tmp.voiceStateIcon, size: "custom", color };
      tmp10Result12 = closure_6(require("MicrophoneDenyIcon").MicrophoneDenyIcon, obj14);
    } else {
      tmp10Result12 = null;
      if (mute) {
        const obj15 = { style: tmp.voiceStateIcon, size: "custom", color };
        tmp10Result12 = closure_6(require("MicrophoneSlashIcon").MicrophoneSlashIcon, obj15);
      }
    }
    const tmp2Result = user(tmp3[14]);
    tmp9 = application_id;
  }
  return tmp8Result;
});
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  return Math.max(useScaledTextLineHeight.scaleTextLineHeight(c8, fontScale), native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};
// === Module 16123: VoiceUserItem ===

// Module 16123 (VoiceUserItem)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10119 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "text-sm/medium";
let c10 = "redesign-channel-name-muted-text";
const XSMALL_20 = fn(1178).AvatarSizes.XSMALL_20;
fn(4560);
let obj = { voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 }, disabled: { opacity: 0.5 }, voiceStateCollapsed: null, voiceStateIcon: null, legacyVoiceStateIcon: null, gameIcon: null };
let size = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: nativeDefault.radii.lg, borderWidth: 4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
obj.voiceStateCollapsed = size;
obj = { marginLeft: 6 };
const ChannelListLayout = fn(10121);
let merged = Object.assign(ChannelListLayout.makeSizeStyle(14));
obj.voiceStateIcon = obj;
const createStyles = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
obj.legacyVoiceStateIcon = createStyles;
obj.gameIcon = { marginLeft: 6 };
let closure_12 = createStyles.createStyles(obj);
const __initData = { code: "function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default noop.memo(function VoiceUserItem(guildId) {
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity, ringing } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = closure_12();
  let obj = require("initialize");
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => !stateFromStores.useReducedMotion);
  const first = user(guildId[12])(user.id, guildId, user(guildId[11])("channel_list"))[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  function getSource() {
    if (null != _require) {
      if (null != tmp.avatar) {
        let guildMemberAvatarSource = AvatarUtilsDefault.getGuildMemberAvatarSource(tmp, user);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = user.getAvatarSource(guildId);
  }
  const gameRecord = tmp5(tmp3[13])(application_id).gameRecord;
  const items1 = [guildId, channelId, application_id];
  const callback = channelId.useCallback(() => {
    const obj = { guild_id: guildId, channel_id: channelId, application_id };
    obj.track(AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, obj);
  }, items1);
  let tmp2Result = tmp2(tmp3[15]);
  class A {
    constructor() {
      if (ringing) {
        tmp = closure_5;
        if (closure_5) {
          obj = { opacity: null };
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj3 = closure_0(closure_2[15]);
          obj4 = closure_0(closure_2[15]);
          obj5 = closure_0(closure_2[15]);
          obj6 = closure_0(closure_2[16]);
          obj1 = { duration: 250, easing: null };
          Easing = closure_0(closure_2[15]).Easing;
          num = 1;
          num2 = 0;
          num3 = 0.4;
          tmp4 = Easing;
          num4 = 0.4;
          num5 = 1;
          num6 = 1;
          obj1.easing = Easing.bezier(0.4, 0, 1, 1);
          num7 = 100;
          withDelayResult = obj5.withDelay(100, obj6.withTiming(0.4, obj1));
          obj8 = closure_0(closure_2[15]);
          obj9 = closure_0(closure_2[16]);
          num8 = 0.1;
          num9 = 250;
          num10 = -1;
          obj.opacity = obj3.withRepeat(obj4.withSequence(withDelayResult, obj8.withDelay(250, obj9.withTiming(0.1, { duration: 500 }))), -1);
        } else {
          obj = { opacity: 0.4 };
        }
        tmp6 = obj;
      } else {
        return { opacity: 1 };
      }
      return;
    }
  }
  obj = { ringing, shouldAnimate: stateFromStores, PULSE_ENDING_OPACITY: 0.4, withRepeat: tmp2(tmp3[15]).withRepeat, withSequence: tmp2(tmp3[15]).withSequence, withDelay: tmp2(tmp3[15]).withDelay, INNER_PULSE_DELAY: 100, withTiming: tmp2(tmp3[16]).withTiming, PULSE_DURATION: 250, Easing: tmp2(tmp3[15]).Easing, PULSE_STARTING_OPACITY: 0.1, FADE_DURATION: 500 };
  A.__closure = obj;
  A.__workletHash = 9430639809025;
  A.__initData = __initData;
  if (collapsed) {
    obj = { style: tmp.voiceStateCollapsed, children: null };
    const obj1 = { source: getSource, size: XSMALL_20 };
    obj.children = closure_7(tmp2(tmp3[5]).Avatar, obj1);
    let tmp12Result = closure_7(ringing, obj);
  } else {
    const items2 = [tmp.voiceState, , ];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    const obj2 = { style: null, children: null };
    items2[1] = disabled2;
    items2[2] = tmp11;
    obj2.style = items2;
    let obj3 = { source: getSource, size: XSMALL_20 };
    const items3 = [closure_7(tmp2(tmp3[5]).Avatar, obj3), , , , , , , , ];
    let obj4 = { variant, color };
    let tmp5Result = tmp5(tmp3[18]);
    const merged = Object.assign(guildId);
    items3[1] = closure_7(tmp5Result, obj4);
    if (disabled) {
      items3[2] = null;
      if (disabled) {
        items3[3] = null;
        let tmp13Result = null;
        if (video) {
          tmp13Result = null;
          if (!disabled) {
            let obj5 = { size: "custom", color: tmp17, style: tmp.voiceStateIcon };
            tmp13Result = tmp13(tmp2(tmp3[23]).VideoIcon, obj5);
          }
        }
        items3[4] = tmp13Result;
        tmp13Result = null;
        if (isInEmbeddedActivity) {
          let obj6 = { source: tmp5(tmp3[24]), size: tmp2(tmp3[5]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp13Result = tmp13(tmp2(tmp3[5]).Icon, obj6);
        }
        items3[5] = tmp13Result;
        tmp5Result = tmp5(tmp3[25]);
        if (platform == null) {
          platform = "";
        }
        let tmp5Result1Result = tmp5Result(platform);
        if (tmp5Result1Result == null) {
          tmp2Result = tmp2(tmp3[25]);
          tmp5Result1Result = tmp2Result.getConsoleIconForVoicePlatform(voicePlatform);
        }
        let tmp13Result1 = null;
        if (null != tmp5Result1Result) {
          const obj7 = { source: tmp5Result1Result, size: tmp2(tmp3[5]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp13Result1 = tmp13(tmp2(tmp3[5]).Icon, obj7);
        }
        items3[6] = tmp13Result1;
        let tmp13Result2 = null;
        if (stream) {
          let obj8 = { style: tmp.legacyVoiceStateIcon };
          tmp13Result2 = tmp13(tmp2(tmp3[5]).LiveTag, obj8);
        }
        items3[7] = tmp13Result2;
        let tmp13Result3 = null;
        if (!disabled) {
          tmp13Result3 = null;
          if (!isInEmbeddedActivity) {
            tmp13Result3 = null;
            if (null != gameRecord) {
              let obj9 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: callback };
              tmp13Result3 = tmp13(tmp5(tmp3[26]), obj9);
            }
          }
        }
        items3[8] = tmp13Result3;
        obj2.children = items3;
        tmp12Result = tmp12(tmp5(tmp3[15]).View, obj2);
      } else if (serverDeaf) {
        const obj10 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        let tmp13Result4 = tmp13(tmp2(tmp3[21]).HeadphonesDenyIcon, obj10);
      } else {
        tmp13Result4 = null;
        if (deaf) {
          const obj11 = { style: tmp.voiceStateIcon, size: "custom", color: tmp17 };
          tmp13Result4 = tmp13(tmp2(tmp3[22]).HeadphonesSlashIcon, obj11);
        }
      }
    } else if (serverMute) {
      const obj12 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
      let tmp13Result5 = tmp13(tmp2(tmp3[19]).MicrophoneDenyIcon, obj12);
    } else if (localMute) {
      const obj13 = { style: tmp.voiceStateIcon, size: "custom", color: tmp17 };
      tmp13Result5 = tmp13(tmp2(tmp3[19]).MicrophoneDenyIcon, obj13);
    } else {
      tmp13Result5 = null;
      if (mute) {
        const obj14 = { style: tmp.voiceStateIcon, size: "custom", color: tmp17 };
        tmp13Result5 = tmp13(tmp2(tmp3[20]).MicrophoneSlashIcon, obj14);
      }
    }
    tmp12 = closure_8;
  }
  return tmp12Result;
});
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  return Math.max(useScaledTextLineHeight.scaleTextLineHeight(c9, fontScale), native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};
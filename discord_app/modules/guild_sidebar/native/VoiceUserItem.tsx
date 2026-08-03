import { View } from "HeadphonesSlashIcon";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import getLayoutStyles from "getLayoutStyles";
import merged from "MicrophoneDenyIcon";
import importAllResult from "registerAsset";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let c7 = "text-sm/medium";
let c8 = "redesign-channel-name-muted-text";
const XSMALL_20 = require("Button").AvatarSizes.XSMALL_20;
let obj = { voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 }, disabled: { opacity: 0.5 }, voiceStateCollapsed: null, voiceStateIcon: null, legacyVoiceStateIcon: null };
obj = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: require("Themes").radii.lg, borderWidth: 4, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
obj[2] = obj;
createCacheKey = { marginLeft: 6 };
obj[3] = createCacheKey;
obj[4] = { tintColor: require("Themes").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}" };
let obj2 = { tintColor: require("Themes").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
const memoResult = importAllResult.memo(function VoiceUserItem(arg0) {
  let collapsed;
  let deaf;
  let dependencyMap;
  let disabled;
  let importDefault;
  let isInEmbeddedActivity;
  let localMute;
  let mute;
  let platform;
  let require;
  let ringing;
  let serverDeaf;
  let serverMute;
  let stream;
  let video;
  let voicePlatform;
  function getSource() {
    if (null != closure_0) {
      if (null != tmp.avatar) {
        let guildMemberAvatarSource = outer1_1(outer1_2[12]).getGuildMemberAvatarSource(tmp, avatarSource);
        const obj = outer1_1(outer1_2[12]);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = avatarSource.getAvatarSource(closure_2);
  }
  ({ member: require, user: importDefault, guildId: dependencyMap, disabled, platform, ringing } = arg0);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, isInEmbeddedActivity, voicePlatform } = arg0);
  const tmp = callback2();
  let obj = require(589) /* initialize */;
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => !stateFromStores.useReducedMotion);
  require(4054);
  const fn = function c() {
    if (ringing) {
      if (stateFromStores) {
        let obj = { opacity: null };
        const obj3 = outer1_0(outer1_2[10]);
        const obj4 = outer1_0(outer1_2[10]);
        const obj5 = outer1_0(outer1_2[10]);
        obj = { duration: 250, easing: null };
        const Easing = outer1_0(outer1_2[10]).Easing;
        obj[1] = Easing.bezier(0.4, 0, 1, 1);
        const obj6 = outer1_0(outer1_2[11]);
        const withDelayResult = obj5.withDelay(100, outer1_0(outer1_2[11]).withTiming(0.4, obj));
        const obj8 = outer1_0(outer1_2[10]);
        obj[0] = obj3.withRepeat(obj4.withSequence(withDelayResult, obj8.withDelay(250, outer1_0(outer1_2[11]).withTiming(0.1, { duration: 500 }))), -1);
        const obj9 = outer1_0(outer1_2[11]);
      } else {
        obj = { opacity: 0.4 };
      }
    } else {
      return { opacity: 1 };
    }
  };
  obj = { ringing, shouldAnimate: stateFromStores, PULSE_ENDING_OPACITY: 0.4, withRepeat: require(4054).withRepeat, withSequence: require(4054).withSequence, withDelay: require(4054).withDelay, INNER_PULSE_DELAY: 100, withTiming: require(4194) /* CONFIG_NEVER_ANIMATE_TIMING */.withTiming, PULSE_DURATION: 250, Easing: require(4054).Easing, PULSE_STARTING_OPACITY: 0.1, FADE_DURATION: 500 };
  fn.__closure = obj;
  fn.__workletHash = 9430639809025;
  fn.__initData = closure_11;
  if (collapsed) {
    obj = { style: null, children: null };
    obj[0] = tmp.voiceStateCollapsed;
    const obj1 = { source: null, size: null };
    obj1[0] = getSource;
    obj1[1] = XSMALL_20;
    obj[1] = callback(tmp2(1297).Avatar, obj1);
    let tmp7Result = callback(ringing, obj);
  } else {
    const items1 = [tmp.voiceState, , ];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    const obj2 = { style: null, children: null };
    items1[1] = disabled2;
    items1[2] = tmp6;
    obj2[0] = items1;
    let obj3 = { source: null, size: null };
    obj3[0] = getSource;
    obj3[1] = XSMALL_20;
    const items2 = [callback(tmp2(1297).Avatar, obj3), , , , , , , ];
    let obj4 = { variant: null, color: null };
    obj4[0] = c7;
    obj4[1] = c8;
    let tmp8Result = tmp8(15132);
    const merged = Object.assign(arg0);
    items2[1] = callback(tmp8Result, obj4);
    if (disabled) {
      items2[2] = null;
      if (disabled) {
        items2[3] = null;
        let tmp9Result = null;
        if (video) {
          tmp9Result = null;
          if (!disabled) {
            let obj5 = { size: "custom", color: null, style: null };
            obj5[1] = tmp13;
            obj5[2] = tmp.voiceStateIcon;
            tmp9Result = tmp9(tmp2(6640).VideoIcon, obj5);
          }
        }
        items2[4] = tmp9Result;
        tmp9Result = null;
        if (isInEmbeddedActivity) {
          let obj6 = { source: null, size: null, style: null };
          obj6[0] = tmp8(6617);
          obj6[1] = tmp2(1297).Icon.Sizes.REFRESH_SMALL_16;
          obj6[2] = tmp.legacyVoiceStateIcon;
          tmp9Result = tmp9(tmp2(1297).Icon, obj6);
        }
        items2[5] = tmp9Result;
        tmp8Result = tmp8(9062);
        if (platform == null) {
          platform = "";
        }
        let tmp8Result1Result = tmp8Result(platform);
        if (tmp8Result1Result == null) {
          tmp8Result1Result = tmp2(9062).getConsoleIconForVoicePlatform(voicePlatform);
          const tmp2Result = tmp2(9062);
        }
        let tmp9Result1 = null;
        if (null != tmp8Result1Result) {
          const obj7 = { source: null, size: null, style: null };
          obj7[0] = tmp8Result1Result;
          obj7[1] = tmp2(1297).Icon.Sizes.REFRESH_SMALL_16;
          obj7[2] = tmp.legacyVoiceStateIcon;
          tmp9Result1 = tmp9(tmp2(1297).Icon, obj7);
        }
        items2[6] = tmp9Result1;
        let tmp9Result2 = null;
        if (stream) {
          let obj8 = { style: null };
          obj8[0] = tmp.legacyVoiceStateIcon;
          tmp9Result2 = tmp9(tmp2(1297).LiveTag, obj8);
        }
        items2[7] = tmp9Result2;
        obj2[1] = items2;
        tmp7Result = tmp7(importDefault(4054).View, obj2);
      } else if (serverDeaf) {
        let obj9 = { style: null, color: "text-feedback-critical", size: "custom" };
        obj9[0] = tmp.voiceStateIcon;
        let tmp9Result3 = tmp9(tmp2(8872).HeadphonesDenyIcon, obj9);
      } else {
        tmp9Result3 = null;
        if (deaf) {
          const obj10 = { style: null, size: "custom", color: null };
          obj10[0] = tmp.voiceStateIcon;
          obj10[2] = tmp13;
          tmp9Result3 = tmp9(tmp2(8874).HeadphonesSlashIcon, obj10);
        }
      }
    } else if (serverMute) {
      const obj11 = { style: null, color: "text-feedback-critical", size: "custom" };
      obj11[0] = tmp.voiceStateIcon;
      let tmp9Result4 = tmp9(tmp2(8876).MicrophoneDenyIcon, obj11);
    } else if (localMute) {
      const obj12 = { style: null, size: "custom", color: null };
      obj12[0] = tmp.voiceStateIcon;
      obj12[2] = tmp13;
      tmp9Result4 = tmp9(tmp2(8876).MicrophoneDenyIcon, obj12);
    } else {
      tmp9Result4 = null;
      if (mute) {
        const obj13 = { style: null, size: "custom", color: null };
        obj13[0] = tmp.voiceStateIcon;
        obj13[2] = tmp13;
        tmp9Result4 = tmp9(tmp2(8878).MicrophoneSlashIcon, obj13);
      }
    }
    tmp7 = closure_6;
  }
  return tmp7Result;
});
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default memoResult;
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  const obj = require(9925) /* map */;
  return Math.max(require(9925) /* map */.scaleTextLineHeight(c7, fontScale), require(1297) /* Button */.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};
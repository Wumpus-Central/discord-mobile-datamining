// === Module 15385: getVoiceUserHeight ===

// Module 15385 (getVoiceUserHeight)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import map from "map" /* 9288 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import getLayoutStyles from "getLayoutStyles" /* 10056 */;
import merged from "module_14" /* 14 */;

require = fn;
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let c9 = "text-sm/medium";
let c10 = "redesign-channel-name-muted-text";
const XSMALL_20 = require("Button").AvatarSizes.XSMALL_20;
let obj = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, borderWidth: 4, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
obj[2] = obj;
const createCacheKey = { marginLeft: 6 };
obj[3] = createCacheKey;
obj[4] = { tintColor: ThemesDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
obj[5] = { marginLeft: 6 };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}" };
const memoResult = importAllResult.memo(function VoiceUserItem(guildId) {
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity, ringing } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = callback2();
  let obj = require(guildId[10]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => !stateFromStores.useReducedMotion);
  const first = user(guildId[12])(user.id, guildId, user(guildId[11])("channel_list"))[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  function getSource() {
    if (null != user) {
      if (null != user.avatar) {
        let guildMemberAvatarSource = user(guildId[17]).getGuildMemberAvatarSource(user, user);
        const obj = user(guildId[17]);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = user.getAvatarSource(guildId);
  }
  const gameRecord = user(tmp3[13])(application_id).gameRecord;
  const items1 = [guildId, channelId, application_id];
  const callback = channelId.useCallback(() => {
    user(guildId[14]);
    const obj = { guild_id: guildId, channel_id: channelId, application_id };
    obj.track(application_id.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, obj);
  }, items1);
  let tmp2Result = require(tmp3[15]);
  class A {
    constructor() {
      if (ringing) {
        tmp = closure_5;
        if (closure_5) {
          obj = { opacity: null };
          tmp2 = member;
          tmp3 = guildId;
          obj3 = member(guildId[15]);
          obj4 = member(guildId[15]);
          obj5 = member(guildId[15]);
          obj6 = member(guildId[16]);
          obj1 = { duration: 250, easing: null };
          Easing = member(guildId[15]).Easing;
          num = 1;
          num2 = 0;
          num3 = 0.4;
          tmp4 = Easing;
          num4 = 0.4;
          num5 = 1;
          num6 = 1;
          obj1[1] = Easing.bezier(0.4, 0, 1, 1);
          num7 = 100;
          withDelayResult = obj5.withDelay(100, obj6.withTiming(0.4, obj1));
          obj8 = member(guildId[15]);
          obj9 = member(guildId[16]);
          num8 = 0.1;
          num9 = 250;
          num10 = -1;
          obj[0] = obj3.withRepeat(obj4.withSequence(withDelayResult, obj8.withDelay(250, obj9.withTiming(0.1, { duration: 500 }))), -1);
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
  obj = { ringing, shouldAnimate: stateFromStores, PULSE_ENDING_OPACITY: 0.4, withRepeat: require(tmp3[15]).withRepeat, withSequence: require(tmp3[15]).withSequence, withDelay: require(tmp3[15]).withDelay, INNER_PULSE_DELAY: 100, withTiming: require(tmp3[16]).withTiming, PULSE_DURATION: 250, Easing: require(tmp3[15]).Easing, PULSE_STARTING_OPACITY: 0.1, FADE_DURATION: 500 };
  A.__closure = obj;
  A.__workletHash = 9430639809025;
  A.__initData = closure_13;
  if (collapsed) {
    obj = { style: null, children: null };
    obj[0] = tmp.voiceStateCollapsed;
    obj1 = { source: null, size: null };
    obj1[0] = getSource;
    obj1[1] = XSMALL_20;
    obj[1] = callback(require(tmp3[5]).Avatar, obj1);
    let tmp12Result = callback(ringing, obj);
  } else {
    const items2 = [tmp.voiceState, , ];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    const obj2 = { style: null, children: null };
    items2[1] = disabled2;
    items2[2] = tmp11;
    obj2[0] = items2;
    let obj3 = { source: null, size: null };
    obj3[0] = getSource;
    obj3[1] = XSMALL_20;
    const items3 = [callback(require(tmp3[5]).Avatar, obj3), , , , , , , , ];
    let obj4 = { variant: null, color: null };
    obj4[0] = c9;
    obj4[1] = c10;
    let tmp5Result = user(tmp3[18]);
    const merged = Object.assign(guildId);
    items3[1] = callback(tmp5Result, obj4);
    if (disabled) {
      items3[2] = null;
      if (disabled) {
        items3[3] = null;
        let tmp13Result = null;
        if (video) {
          tmp13Result = null;
          if (!disabled) {
            let obj5 = { size: "custom", color: null, style: null };
            obj5[1] = c10;
            obj5[2] = tmp.voiceStateIcon;
            tmp13Result = tmp13(require(tmp3[23]).VideoIcon, obj5);
          }
        }
        items3[4] = tmp13Result;
        tmp13Result = null;
        if (isInEmbeddedActivity) {
          let obj6 = { source: null, size: null, style: null };
          obj6[0] = user(tmp3[24]);
          obj6[1] = require(tmp3[5]).Icon.Sizes.REFRESH_SMALL_16;
          obj6[2] = tmp.legacyVoiceStateIcon;
          tmp13Result = tmp13(require(tmp3[5]).Icon, obj6);
        }
        items3[5] = tmp13Result;
        tmp5Result = user(tmp3[25]);
        if (platform == null) {
          platform = "";
        }
        let tmp5Result1Result = tmp5Result(platform);
        if (tmp5Result1Result == null) {
          tmp2Result = require(tmp3[25]);
          tmp5Result1Result = tmp2Result.getConsoleIconForVoicePlatform(voicePlatform);
        }
        let tmp13Result1 = null;
        if (null != tmp5Result1Result) {
          const obj7 = { source: null, size: null, style: null };
          obj7[0] = tmp5Result1Result;
          obj7[1] = require(tmp3[5]).Icon.Sizes.REFRESH_SMALL_16;
          obj7[2] = tmp.legacyVoiceStateIcon;
          tmp13Result1 = tmp13(require(tmp3[5]).Icon, obj7);
        }
        items3[6] = tmp13Result1;
        let tmp13Result2 = null;
        if (stream) {
          let obj8 = { style: null };
          obj8[0] = tmp.legacyVoiceStateIcon;
          tmp13Result2 = tmp13(require(tmp3[5]).LiveTag, obj8);
        }
        items3[7] = tmp13Result2;
        let tmp13Result3 = null;
        if (!disabled) {
          tmp13Result3 = null;
          if (!isInEmbeddedActivity) {
            tmp13Result3 = null;
            if (null != gameRecord) {
              let obj9 = { game: null, size: 16, fallback: "none", style: null, onShown: null };
              obj9[0] = gameRecord;
              obj9[3] = tmp.gameIcon;
              obj9[4] = callback;
              tmp13Result3 = tmp13(user(tmp3[26]), obj9);
            }
          }
        }
        items3[8] = tmp13Result3;
        obj2[1] = items3;
        tmp12Result = callback(user(tmp3[15]).View, obj2);
      } else if (serverDeaf) {
        const obj10 = { style: null, color: "text-feedback-critical", size: "custom" };
        obj10[0] = tmp.voiceStateIcon;
        let tmp13Result4 = tmp13(require(tmp3[21]).HeadphonesDenyIcon, obj10);
      } else {
        tmp13Result4 = null;
        if (deaf) {
          const obj11 = { style: null, size: "custom", color: null };
          obj11[0] = tmp.voiceStateIcon;
          obj11[2] = c10;
          tmp13Result4 = tmp13(require(tmp3[22]).HeadphonesSlashIcon, obj11);
        }
      }
    } else if (serverMute) {
      const obj12 = { style: null, color: "text-feedback-critical", size: "custom" };
      obj12[0] = tmp.voiceStateIcon;
      let tmp13Result5 = tmp13(require(tmp3[19]).MicrophoneDenyIcon, obj12);
    } else if (localMute) {
      const obj13 = { style: null, size: "custom", color: null };
      obj13[0] = tmp.voiceStateIcon;
      obj13[2] = c10;
      tmp13Result5 = tmp13(require(tmp3[19]).MicrophoneDenyIcon, obj13);
    } else {
      tmp13Result5 = null;
      if (mute) {
        const obj14 = { style: null, size: "custom", color: null };
        obj14[0] = tmp.voiceStateIcon;
        obj14[2] = c10;
        tmp13Result5 = tmp13(require(tmp3[20]).MicrophoneSlashIcon, obj14);
      }
    }
  }
  return tmp12Result;
});
const result = require("obj132").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default memoResult;
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  return Math.max(map.scaleTextLineHeight(c9, fontScale), Button.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};
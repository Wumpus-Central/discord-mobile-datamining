// discord_app/modules/guild_sidebar/native/VoiceUserItem.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "text-sm/medium";
let c10 = "redesign-channel-name-muted-text";
const XSMALL_20 = fn(1177).AvatarSizes.XSMALL_20;
const createStyles = fn(4756);
let obj = {
  voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 },
  disabled: { opacity: 0.5 },
  voiceStateCollapsed: null,
  voiceStateIcon: null,
  legacyVoiceStateIcon: null,
  gameIcon: null,
};
let size = {
  marginTop: 4,
  marginRight: 8,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 4,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  overflow: "hidden",
};
obj.voiceStateCollapsed = size;
const ChannelListLayout = fn(10376);
let merged = Object.assign(ChannelListLayout.makeSizeStyle(14));
obj.voiceStateIcon = { marginLeft: 6 };
obj.legacyVoiceStateIcon = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
obj.gameIcon = { marginLeft: 6 };
let closure_12 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}",
};
let obj3 = { marginLeft: 6 };
let obj4 = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default noop.memo(function VoiceUserItem(guildId) {
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity, ringing } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = closure_12();
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => !stateFromStores.useReducedMotion);
  let obj = require("initialize");
  const first = user(guildId[12])(user.id, guildId, user(guildId[11])("channel_list"))[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  function getSource() {
    if (null != _require) {
      if (null != _require.avatar) {
        let guildMemberAvatarSource = AvatarUtilsDefault.getGuildMemberAvatarSource(_require, user);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = user.getAvatarSource(guildId);
  }
  const gameRecord = user(tmp3[13])(application_id).gameRecord;
  const items1 = [guildId, channelId, application_id];
  const callback = channelId.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, {
      guild_id: guildId,
      channel_id: channelId,
      application_id,
    });
  }, items1);
  require("ReanimatedRexport");
  class A {
    constructor() {
      if (ringing) {
        tmp = closure_5;
        if (closure_5) {
          obj1 = { opacity: null };
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj3 = closure_0(closure_2[15]);
          obj4 = closure_0(closure_2[15]);
          obj5 = closure_0(closure_2[15]);
          obj6 = closure_0(closure_2[16]);
          obj10 = { duration: 250, easing: null };
          Easing = closure_0(closure_2[15]).Easing;
          num = 1;
          num2 = 0;
          num3 = 0.4;
          tmp4 = Easing;
          num4 = 0.4;
          num5 = 1;
          num6 = 1;
          obj10.easing = Easing.bezier(0.4, 0, 1, 1);
          num7 = 100;
          withDelayResult = obj5.withDelay(100, obj6.withTiming(0.4, obj10));
          obj8 = closure_0(closure_2[15]);
          obj9 = closure_0(closure_2[16]);
          num8 = 0.1;
          num9 = 250;
          num10 = -1;
          obj1.opacity = obj3.withRepeat(
            obj4.withSequence(withDelayResult, obj8.withDelay(250, obj9.withTiming(0.1, { duration: 500 }))),
            -1,
          );
          obj = obj1;
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
  const tmp6 = user(guildId[11])("channel_list");
  A.__closure = {
    ringing,
    shouldAnimate: stateFromStores,
    PULSE_ENDING_OPACITY: 0.4,
    withRepeat: require("ReanimatedRexport").withRepeat,
    withSequence: require("ReanimatedRexport").withSequence,
    withDelay: require("ReanimatedRexport").withDelay,
    INNER_PULSE_DELAY: 100,
    withTiming: require("timing").withTiming,
    PULSE_DURATION: 250,
    Easing: require("ReanimatedRexport").Easing,
    PULSE_STARTING_OPACITY: 0.1,
    FADE_DURATION: 500,
  };
  A.__workletHash = 9430639809025;
  A.__initData = __initData;
  if (collapsed) {
    let obj3 = { style: tmp.voiceStateCollapsed, children: null };
    let obj4 = { source: getSource, size: XSMALL_20 };
    obj3.children = closure_7(require("native").Avatar, obj4);
    let tmp12Result = closure_7(ringing, obj3);
  } else {
    const items2 = [tmp.voiceState, ,];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    let obj5 = { style: null, children: null };
    items2[1] = disabled2;
    items2[2] = tmp11;
    obj5.style = items2;
    let obj6 = { source: getSource, size: XSMALL_20 };
    const items3 = [closure_7(require("native").Avatar, obj6), , , , , , , ,];
    let obj7 = { variant, color };
    const merged = Object.assign(guildId);
    items3[1] = closure_7(user(tmp3[18]), obj7);
    if (disabled) {
      items3[2] = null;
      if (disabled) {
        items3[3] = null;
        let tmp13Result = null;
        if (video) {
          tmp13Result = null;
          if (!disabled) {
            let obj8 = { size: "custom", color, style: tmp.voiceStateIcon };
            tmp13Result = closure_7(require("VideoIcon").VideoIcon, obj8);
          }
        }
        items3[4] = tmp13Result;
        let tmp13Result7 = null;
        if (isInEmbeddedActivity) {
          let obj9 = {
            source: user(tmp3[24]),
            size: require("native").Icon.Sizes.REFRESH_SMALL_16,
            style: tmp.legacyVoiceStateIcon,
          };
          tmp13Result7 = closure_7(require("native").Icon, obj9);
        }
        items3[5] = tmp13Result7;
        if (platform == null) {
          platform = "";
        }
        let tmp5Result1Result = user(tmp3[25])(platform);
        if (tmp5Result1Result == null) {
          tmp5Result1Result = require("getConsoleIcon").getConsoleIconForVoicePlatform(voicePlatform);
          const tmp2Result2 = require("getConsoleIcon");
        }
        let tmp13Result8 = null;
        if (null != tmp5Result1Result) {
          const obj10 = {
            source: tmp5Result1Result,
            size: require("native").Icon.Sizes.REFRESH_SMALL_16,
            style: tmp.legacyVoiceStateIcon,
          };
          tmp13Result8 = closure_7(require("native").Icon, obj10);
        }
        items3[6] = tmp13Result8;
        let tmp13Result9 = null;
        if (stream) {
          const obj11 = { style: tmp.legacyVoiceStateIcon };
          tmp13Result9 = closure_7(require("native").LiveTag, obj11);
        }
        items3[7] = tmp13Result9;
        let tmp13Result10 = null;
        if (!disabled) {
          tmp13Result10 = null;
          if (!isInEmbeddedActivity) {
            tmp13Result10 = null;
            if (null != gameRecord) {
              const obj12 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: callback };
              tmp13Result10 = closure_7(user(tmp3[26]), obj12);
            }
          }
        }
        items3[8] = tmp13Result10;
        obj5.children = items3;
        tmp12Result = closure_8(user(tmp3[15]).View, obj5);
        const tmp5Result2 = user(tmp3[25]);
      } else if (serverDeaf) {
        const obj13 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        let tmp13Result11 = closure_7(require("HeadphonesDenyIcon").HeadphonesDenyIcon, obj13);
      } else {
        tmp13Result11 = null;
        if (deaf) {
          const obj14 = { style: tmp.voiceStateIcon, size: "custom", color };
          tmp13Result11 = closure_7(require("HeadphonesSlashIcon").HeadphonesSlashIcon, obj14);
        }
      }
    } else if (serverMute) {
      const obj15 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
      let tmp13Result12 = closure_7(require("MicrophoneDenyIcon").MicrophoneDenyIcon, obj15);
    } else if (localMute) {
      const obj16 = { style: tmp.voiceStateIcon, size: "custom", color };
      tmp13Result12 = closure_7(require("MicrophoneDenyIcon").MicrophoneDenyIcon, obj16);
    } else {
      tmp13Result12 = null;
      if (mute) {
        const obj17 = { style: tmp.voiceStateIcon, size: "custom", color };
        tmp13Result12 = closure_7(require("MicrophoneSlashIcon").MicrophoneSlashIcon, obj17);
      }
    }
    const tmp5Result = user(tmp3[18]);
  }
  return tmp12Result;
});
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  return Math.max(useScaledTextLineHeight.scaleTextLineHeight(c9, fontScale), native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};

// discord_app/modules/stage_channels/native/components/StageActionBarButtons.tsx
import asyncRequireImpl from "asyncRequireImpl";
import MusicSlashIcon from "MusicSlashIcon";
import { View } from "registerAsset";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import initialize from "initialize";
import { REQUEST_TO_SPEAK_SHEET_KEY as closure_10 } from "MAX_STAGE_TOPIC_LENGTH";
import { NOOP } from "ME";
import jsxProd from "updateStageMusicMuted";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/07711_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/07812_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/10677_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/10711_registerAsset.js";
import { Button } from "../../../../design/void/native.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let closure_12;
let map1;
const require = arg1;
class AgeVerificationSpeakerActionSheet {
  constructor(arg0) {
    onClose = global.onClose;
    handleDismiss = function handleDismiss() {
      onClose();
      outer1_1(outer1_3[30]).hideActionSheet();
    };
    tmp = jsxs();
    obj = { startExpanded: true, onDismiss: handleDismiss, contentStyles: { paddingBottom: require("useSafeAreaInsets")().bottom }, header: null, children: null };
    obj = { style: tmp.header, children: null };
    obj[1] = jsx(require("AccountAgeTier10LargeBadge").TrafficConeSpotIllustration, { width: 120, height: 120 });
    obj[3] = jsx(View, obj);
    obj1 = { style: tmp.container, children: null };
    obj2 = { style: tmp.content, children: null };
    obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
    intl = require("getSystemLocale").intl;
    obj3[3] = intl.string(require("getSystemLocale").t.zvubnM);
    items = [, ];
    items[0] = jsx(require("Text").Text, obj3);
    obj4 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: null };
    intl2 = require("getSystemLocale").intl;
    obj4[3] = intl2.string(require("getSystemLocale").t["/wx+J2"]);
    items[1] = jsx(require("Text").Text, obj4);
    obj2[1] = items;
    items1 = [, ];
    items1[0] = jsxs(View, obj2);
    obj5 = { style: tmp.footer, children: null };
    obj6 = {
      size: "lg",
      onPress() {
            let obj = outer1_1(outer1_3[40]);
            obj = { entryPoint: onClose(outer1_3[41]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
            const result = obj.showAgeVerificationGetStartedModal(obj);
            onClose();
            outer1_1(outer1_3[30]).hideActionSheet();
          },
      text: null
    };
    intl3 = require("getSystemLocale").intl;
    obj6[2] = intl3.string(require("getSystemLocale").t.KXVgjt);
    items2 = [, ];
    items2[0] = jsx(require("Button").Button, obj6);
    obj7 = { size: "lg", onPress: handleDismiss, text: null, variant: "secondary" };
    intl4 = require("getSystemLocale").intl;
    obj7[2] = intl4.string(require("getSystemLocale").t.WAI6xu);
    items2[1] = jsx(require("Button").Button, obj7);
    obj5[1] = items2;
    items1[1] = jsxs(View, obj5);
    obj1[1] = items1;
    obj[4] = jsxs(View, obj1);
    return jsx(require("ActionSheet").ActionSheet, obj);
  }
}
class AnimatedPrompt {
  constructor(arg0) {
    show = global.show;
    ({ children, style } = global);
    tmp = jsxs();
    obj = require("initialize");
    items = [];
    items[0] = View;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    obj2 = require("module_4146");
    fn = function c() {
      let obj = show(outer1_3[54]);
      let num = 20;
      if (show) {
        num = 0;
      }
      obj = { marginTop: obj.withSpring(num, outer1_17), opacity: null };
      let num2 = 0;
      if (show) {
        num2 = 1;
      }
      obj[1] = show(outer1_3[54]).withSpring(num2, outer1_17);
      return obj;
    };
    obj = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, show, actionBarAnimationConfig: jsxs };
    fn.__closure = obj;
    fn.__workletHash = 5255980384921;
    fn.__initData = jsxs;
    animatedStyle = obj2.useAnimatedStyle(fn);
    tmp4 = jsx;
    items1 = [, , ];
    items1[0] = tmp.actionBarCTAContainer;
    items1[1] = style;
    tmp5 = undefined;
    if (!stateFromStores) {
      tmp5 = animatedStyle;
    }
    items1[2] = tmp5;
    return tmp4(require("module_4146").View, { style: items1, children });
  }
}
class StartStagePrompt {
  constructor(arg0) {
    ({ channel, isLive } = global);
    tmp = jsxs();
    obj = {
      onPress() {
            if (!isLive) {
              const result = outer1_0(outer1_3[25]).openStageChannelSettings(closure_0);
              const obj = outer1_0(outer1_3[25]);
            }
          },
      iconSource: null,
      iconStyle: null,
      iconContainerStyle: null,
      style: null,
      completed: null,
      title: null,
      subtitle: null
    };
    obj[1] = require("registerAsset");
    ({ iconStyle: obj[2], iconContainerStyle: obj[3] } = tmp);
    obj[4] = global.style;
    obj[5] = isLive;
    intl = require("getSystemLocale").intl;
    obj[6] = intl.string(require("getSystemLocale").t.OYbHfv);
    intl2 = require("getSystemLocale").intl;
    obj[7] = intl2.string(require("getSystemLocale").t.yXwLMQ);
    return jsx(require("Form").FormCTA, obj);
  }
}
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { actionBarCTAContainer: { position: "relative" }, imageStyle: null, iconStyle: null, iconContainerStyle: null, continueContainer: null, continueText: null, continueIcon: null };
createCacheKey = { tintColor: require("Themes").colors.WHITE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { tintColor: require("Themes").colors.WHITE, width: 20, height: 20 };
let obj1 = { tintColor: require("Themes").colors.WHITE, width: 20, height: 20 };
createCacheKey[3] = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360, borderRadius: require("Themes").radii.lg, padding: 4 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 };
let obj2 = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360, borderRadius: require("Themes").radii.lg, padding: 4 };
createCacheKey[5] = { color: require("Themes").unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
let obj3 = { color: require("Themes").unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
createCacheKey[6] = { tintColor: require("Themes").unsafe_rawColors.BLUE_345 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { container: null, header: null, content: null, title: null, body: null, footer: null };
let obj4 = { tintColor: require("Themes").unsafe_rawColors.BLUE_345 };
obj5[0] = { paddingVertical: require("Themes").space.PX_12, gap: require("Themes").space.PX_24 };
obj5[1] = { alignItems: "center" };
createCacheKey = { gap: require("Themes").space.PX_8 };
obj5[2] = createCacheKey;
obj5[3] = { textAlign: "center" };
obj5[4] = { textAlign: "center" };
let obj6 = { paddingVertical: require("Themes").space.PX_12, gap: require("Themes").space.PX_24 };
obj5[5] = { gap: require("Themes").space.PX_12 };
let closure_15 = createCacheKey.createStyles(obj5);
let closure_17 = { mass: 1, stiffness: 100, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let closure_18 = { code: "function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}" };
const obj8 = { gap: require("Themes").space.PX_12 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export const MoveToAudienceButton = function MoveToAudienceButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, onPress: null, isSmallSize: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t.ezLpY6);
  obj[1] = registerAsset;
  obj[2] = function onPress() {
    const result = channel(outer1_3[14]).audienceAckRequestToSpeak(channel, true);
  };
  obj[3] = channel.isSmallSize;
  return callback2(importAll(10577).ActionButton, obj);
};
export const MusicMuteButton = function MusicMuteButton(arg0) {
  let channel;
  let isSmallSize;
  let stateFromStores;
  ({ channel, isSmallSize } = arg0);
  let imageStyle = createCacheKey();
  let tmpResult = dependencyMap;
  let obj = stateFromStores(589);
  const items = [initialize];
  stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  if (!obj2.useShowStageMusicMuteButton(channel.id)) {
    return null;
  } else {
    const intl = tmp(1236).intl;
    const string = intl.string;
    const t = tmp(1236).t;
    if (stateFromStores) {
      let stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    obj = { accessibilityLabel: null, source: null, IconComponent: null, imageStyle: null, onPress: null, isSmallSize: null };
    obj[0] = stringResult;
    obj[1] = importDefault(stateFromStores ? 10679 : 10680);
    if (stateFromStores) {
      tmpResult = tmp(10681);
      let MusicIcon = tmpResult.MusicSlashIcon;
    } else {
      MusicIcon = tmp(9568).MusicIcon;
    }
    obj[2] = MusicIcon;
    imageStyle = imageStyle.imageStyle;
    obj[3] = imageStyle;
    obj[4] = function onPress() {
      return stateFromStores(outer1_3[21]).updateStageMusicMuted(!stateFromStores);
    };
    obj[5] = isSmallSize;
    closure_12(importAll(10577).ActionButton, obj);
    const tmp4 = closure_12;
  }
};
export const DisconnectStageButton = function DisconnectStageButton(channel) {
  channel = channel.channel;
  const obj = { accessibilityLabel: null, source: null, IconComponent: null, onPress: null, isSmallSize: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t.SMKyih);
  obj[1] = registerAsset;
  obj[2] = channel(10684).DoorExitIcon;
  obj[3] = function onPress() {
    if (outer1_1(outer1_3[24])(channel)) {
      let tmp3Result = tmp3(tmp[25]);
      tmp3Result.openEndStageModal(tmp2);
    } else {
      tmp3Result = tmp3(tmp[26]);
      tmp3Result.handleDisconnect(tmp2);
    }
  };
  obj[4] = channel.isSmallSize;
  return callback2(importAll(10577).PrimaryActionButton, obj);
};
export const RequestToSpeakListButton = function RequestToSpeakListButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let analyticsLocations;
  function handleOpenAudienceList() {
    let obj = analyticsLocations(outer1_3[30]);
    obj = { channelId: channel.id, analyticsLocations };
    obj.openLazy(channel(outer1_3[32])(outer1_3[31], outer1_3.paths), outer1_10, obj);
  }
  analyticsLocations = analyticsLocations(5610)().analyticsLocations;
  let obj = channel(5115);
  const stageParticipantsCount = obj.useStageParticipantsCount(channel.id, channel(5109).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  if (stageParticipantsCount > 0) {
    obj = { accessibilityLabel: null, source: null, imageStyle: null, IconComponent: null, onPress: null, notifications: null, isSmallSize: null };
    const intl = tmp3(1236).intl;
    obj = { count: null };
    obj[0] = stageParticipantsCount;
    obj[0] = intl.formatToPlainString(tmp3(1236).t.OhK58v, obj);
    obj[1] = tmp(10699);
    const obj1 = { tintColor: null };
    obj1[0] = tmp(712).unsafe_rawColors.WHITE;
    obj[2] = obj1;
    obj[3] = tmp3(10700).HandRequestSpeakListIcon;
    obj[4] = handleOpenAudienceList;
    obj[5] = stageParticipantsCount;
    obj[6] = isSmallSize;
    let tmp7 = callback2(importAll(10577).NotifiedActionButton, obj);
  } else {
    const obj2 = { accessibilityLabel: null, source: null, imageStyle: null, IconComponent: null, onPress: null, isSmallSize: null };
    const intl2 = tmp3(1236).intl;
    obj2[0] = intl2.string(tmp3(1236).t.KJnyvh);
    obj2[1] = tmp(10699);
    const obj3 = { tintColor: null };
    obj3[0] = tmp(712).unsafe_rawColors.WHITE;
    obj2[2] = obj3;
    obj2[3] = tmp3(10700).HandRequestSpeakListIcon;
    obj2[4] = handleOpenAudienceList;
    obj2[5] = isSmallSize;
    tmp7 = callback2(importAll(10577).ActionButton, obj2);
  }
  return tmp7;
};
export { AgeVerificationSpeakerActionSheet };
export const RequestToSpeakButton = function RequestToSpeakButton(channel) {
  let c0;
  let tmp4;
  channel = channel.channel;
  let _require;
  let first;
  let importAll;
  let shouldAgeVerifyToSpeakForCurrentUser;
  let shouldShowAgeVerificationPopover;
  [tmp4, c0] = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[42])(channel), 2);
  let obj = _require(shouldAgeVerifyToSpeakForCurrentUser[43]);
  const tmp6 = shouldShowAgeVerificationPopover(obj.useLocalStorageState("age-verification-stage-popover-dismissed", false), 2);
  first = tmp6[0];
  importAll = tmp8;
  let tmp = first;
  const tmp3 = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[42])(channel), 2);
  shouldAgeVerifyToSpeakForCurrentUser = _require(shouldAgeVerifyToSpeakForCurrentUser[44]).useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  const obj2 = _require(shouldAgeVerifyToSpeakForCurrentUser[44]);
  shouldShowAgeVerificationPopover = _require(shouldAgeVerifyToSpeakForCurrentUser[44]).useShouldShowAgeVerificationPopover(channel.id);
  const items = [shouldShowAgeVerificationPopover, first, tmp6[1]];
  const effect = React.useEffect(() => {
    let tmp = shouldShowAgeVerificationPopover;
    if (shouldShowAgeVerificationPopover) {
      tmp = !first;
    }
    if (tmp) {
      let obj = _undefined(shouldAgeVerifyToSpeakForCurrentUser[30]);
      obj = { content: null, key: "AgeVerificationSpeakerActionSheet" };
      obj = { onClose: null };
      obj[0] = function onClose() {
        return callback(true);
      };
      obj[0] = outer1_12(outer1_16, obj);
      obj.showActionSheet(obj);
    }
  }, items);
  const obj3 = _require(shouldAgeVerifyToSpeakForCurrentUser[44]);
  const canRaiseHand = _require(shouldAgeVerifyToSpeakForCurrentUser[45]).useCanRaiseHand(channel);
  let tmp13 = !canRaiseHand;
  if (!canRaiseHand) {
    tmp13 = !tmp4;
  }
  const intl = tmp5(tmp2[12]).intl;
  const string = intl.string;
  const t = tmp5(tmp2[12]).t;
  if (tmp4) {
    let stringResult = string(t.GCimTk);
  } else {
    stringResult = string(t.hLbG5N);
  }
  obj = { accessibilityLabel: stringResult, isActive: tmp4, source: tmp(tmp2[46]), IconComponent: null, onPress: null, appearsDisabled: null, isSmallSize: null };
  if (shouldAgeVerifyToSpeakForCurrentUser) {
    let HandRequestSpeakIcon = tmp5(tmp2[47]).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp5(tmp2[48]).HandRequestSpeakIcon;
  }
  obj[3] = HandRequestSpeakIcon;
  obj[4] = tmp13 ? NOOP : (() => {
    if (shouldAgeVerifyToSpeakForCurrentUser) {
      let obj = first(shouldAgeVerifyToSpeakForCurrentUser[40]);
      obj = { entryPoint: null };
      obj[0] = _undefined(shouldAgeVerifyToSpeakForCurrentUser[41]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND;
      const result = obj.showAgeVerificationGetStartedModal(obj);
    } else {
      _undefined();
    }
  });
  obj[5] = tmp13;
  obj[6] = channel.isSmallSize;
  return closure_12(importAll(shouldAgeVerifyToSpeakForCurrentUser[11]).ToggledActionButton, obj);
};
export const ChatButton = function ChatButton(channel) {
  let mentionCount;
  let unreadCount;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let isVoiceChannelLocked;
  let openChat;
  let obj = channel(589);
  const items = [generateOldThreadCutoff];
  const items1 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ unreadCount: outer1_8.getUnreadCount(channel.id), mentionCount: outer1_8.getMentionCount(channel.id) }), items1);
  ({ unreadCount, mentionCount } = stateFromStoresObject);
  let obj1 = channel(10709);
  isVoiceChannelLocked = obj1.useIsVoiceChannelLocked(channel);
  let obj2 = channel(9663);
  const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
  openChat = undefined;
  if (voiceChatNavigationContext != null) {
    openChat = voiceChatNavigationContext.openChat;
  }
  function onPress() {
    if (!isVoiceChannelLocked) {
      if (openChat != null) {
        tmp();
      }
    }
  }
  if (mentionCount <= 0) {
    if (unreadCount <= 0) {
      obj = { imageStyle: null, accessibilityLabel: null, IconComponent: null, source: null, onPress: null, appearsDisabled: null, isSmallSize: null };
      obj = { tintColor: null };
      obj[0] = isVoiceChannelLocked(712).unsafe_rawColors.WHITE;
      obj[0] = obj;
      const intl2 = tmp(1236).intl;
      obj[1] = intl2.string(tmp(1236).t.ZXxLQg);
      obj[2] = tmp(4781).ChatIcon;
      obj[3] = isVoiceChannelLocked(10710);
      obj[4] = onPress;
      obj[5] = isVoiceChannelLocked;
      obj[6] = isSmallSize;
      let tmp7Result = callback2(openChat(10577).ActionButton, obj);
    }
    return tmp7Result;
  }
  if (mentionCount > 0) {
    unreadCount = mentionCount;
  }
  obj1 = { notifications: unreadCount, isMentioned: mentionCount > 0, imageStyle: null, accessibilityLabel: null, IconComponent: null, source: null, onPress: null, appearsDisabled: null, isSmallSize: null };
  obj2 = { tintColor: isVoiceChannelLocked(712).unsafe_rawColors.WHITE };
  obj1[2] = obj2;
  const intl = tmp(1236).intl;
  obj1[3] = intl.string(channel(1236).t.ZXxLQg);
  obj1[4] = channel(4781).ChatIcon;
  obj1[5] = isVoiceChannelLocked(10710);
  obj1[6] = onPress;
  obj1[7] = isVoiceChannelLocked;
  obj1[8] = isSmallSize;
  tmp7Result = callback2(openChat(10577).NotifiedActionButton, obj1);
};
export { AnimatedPrompt };
export const AnimatedStartStagePrompt = function AnimatedStartStagePrompt(channel) {
  channel = channel.channel;
  let isLive;
  let first;
  let closure_2;
  let first1;
  let callback;
  let first2;
  let closure_6;
  let obj = isLive(first1[55]);
  isLive = obj.useStageChannelStartEvent(channel.id).isLive;
  let tmp = callback(first2.useState(false), 2);
  first = tmp[0];
  closure_2 = tmp[1];
  const tmp3 = callback(first2.useState(false), 2);
  first1 = tmp3[0];
  callback = tmp3[1];
  const tmp5 = callback(first2.useState(isLive), 2);
  first2 = tmp5[0];
  closure_6 = tmp5[1];
  const items = [isLive, first, first1];
  const effect = first2.useEffect(() => {
    if (first1) {
      let tmp = isLive;
      if (!isLive) {
        if (!first) {
          callback(true);
        }
      }
      if (tmp) {
        tmp = first;
      }
      if (tmp) {
        callback(false);
      }
    }
  }, items);
  const effect1 = first2.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(true);
    }, 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const items1 = [isLive, first, first2];
  const effect2 = first2.useEffect(() => {
    if (timeout) {
      if (!first) {
        if (!first2) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            callback(true);
          }, 400);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
  }, items1);
  let tmp10 = null;
  if (!first2) {
    obj = { show: null, children: null };
    obj[0] = first;
    obj = { channel: null, isLive: null, style: null };
    obj[0] = channel;
    obj[1] = isLive;
    obj[2] = channel.style;
    obj[1] = callback2(StartStagePrompt, obj);
    tmp10 = callback2(AnimatedPrompt, obj);
  }
  return tmp10;
};
export { StartStagePrompt };
export const JoinStagePrompt = function JoinStagePrompt(channel) {
  channel = channel.channel;
  const obj = {
    onPress() {
      channel(outer1_3[58]).connectAndOpen(channel);
    },
    iconSource: null,
    iconStyle: null,
    iconContainerStyle: null,
    style: null,
    title: null,
    subtitle: null
  };
  obj[1] = registerAsset;
  ({ iconStyle: obj[2], iconContainerStyle: obj[3] } = createCacheKey());
  obj[4] = channel.style;
  const intl = channel(1236).intl;
  obj[5] = intl.string(channel(1236).t["7vb2cc"]);
  const intl2 = channel(1236).intl;
  obj[6] = intl2.string(channel(1236).t.lyCW4E);
  return callback2(channel(7777).FormCTA, obj);
};
export const ContinueToStagePrompt = function ContinueToStagePrompt(onContinue) {
  const tmp = createCacheKey();
  let obj = { accessibilityRole: "button", onPress: onContinue.onContinue, children: null };
  obj = { style: tmp.continueContainer, children: null };
  obj = { children: null };
  const obj1 = { style: tmp.continueText, children: null };
  const intl = getSystemLocale.intl;
  obj1[1] = intl.string(getSystemLocale.t["jMLfp/"]);
  obj[0] = callback2(Button.LegacyText, obj1);
  const items = [callback2(View, obj), ];
  const obj2 = { children: null };
  const obj3 = { style: tmp.continueIcon, source: null, size: null, disableColor: true };
  obj3[1] = registerAsset;
  obj3[2] = Button.Icon.Sizes.SMALL;
  obj2[0] = callback2(Button.Icon, obj3);
  items[1] = callback2(View, obj2);
  obj[1] = items;
  obj[2] = callback3(View, obj);
  return callback2(PressableBase.PressableOpacity, obj);
};
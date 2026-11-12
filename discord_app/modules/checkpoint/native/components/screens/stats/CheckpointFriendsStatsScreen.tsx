// === Module 14406: CheckpointFriendsStatsScreen ===

// Module 14406 (CheckpointFriendsStatsScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _modDef3237 from "module_3237" /* 3237 */;
import _modDef3269 from "module_3269" /* 3269 */;
import FriendsIcon from "FriendsIcon" /* 5955 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import ChatIcon from "ChatIcon" /* 8004 */;
import utils_openGiftModal from "utils/openGiftModal" /* 11594 */;
import MicrophoneIcon from "MicrophoneIcon" /* 12952 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 13033 */;
import Tracking from "Tracking" /* 14144 */;
import CheckpointTextDefault from "CheckpointText" /* 14161 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 14373 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14383 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 14389 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import UserStore from "UserStore" /* 1385 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;

const require = globalThis.__r;

require = fn;
function FriendsHeader(children) {
  const title = children.title;
  const tmp = closure_19();
  obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.heading, children: null };
  obj3 = { style: tmp.title, children: null };
  items = [state(FriendsIcon.FriendsIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj5 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const intl = util.intl;
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp2 = CheckpointTextDefault;
  obj5.children = intl.string(_modDef3237.ZQakPR).toLocaleUpperCase();
  items[1] = state(tmp2, obj5);
  obj3.children = items;
  const items1 = [gesture(metroImportDefault, obj3), ];
  const obj6 = { children: null };
  const stringResult = intl.string(_modDef3237.ZQakPR);
  obj6.children = title.toLocaleUpperCase();
  items1[1] = state(CheckpointDisplayTextDefault, obj6);
  obj2.children = items1;
  const items2 = [gesture(metroImportDefault, obj2), state(CheckpointTextDefault, { variant: "heading-lg/medium", children: children.description })];
  obj.children = items2;
  return gesture(metroImportDefault, obj);
}
function SidekickStats(sidekick) {
  sidekick = sidekick.sidekick;
  const tmp = closure_19();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const result = CheckpointNumberUtils.formatCheckpointStatNumber(rounded);
  const result1 = CheckpointNumberUtils.formatCheckpointStatNumber(rounded1);
  const intl = util.intl;
  obj3 = { duration: null };
  const intl2 = util.intl;
  obj3.duration = intl2.formatToPlainString(_modDef3269.x7PkHm, { minutes: rounded1 });
  const obj4 = { style: tmp.stats, children: null };
  const obj5 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3269.lw35aH, obj3);
  obj5.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel("messages", rounded);
  obj5.style = tmp.stat;
  items = [state(ChatIcon.ChatIcon, { size: "md", color: CHECKPOINT_PRIMARY }), state(CheckpointStatNumberDefault, { value: result })];
  obj5.children = items;
  const items1 = [gesture(metroImportDefault, obj5), ];
  const obj8 = { accessible: true, accessibilityLabel: formatToPlainStringResult, style: tmp.stat, children: null };
  const items2 = [state(MicrophoneIcon.MicrophoneIcon, { size: "md", color: CHECKPOINT_PRIMARY }), state(CheckpointStatNumberDefault, { value: result1 })];
  obj8.children = items2;
  items1[1] = gesture(metroImportDefault, obj8);
  obj4.children = items1;
  return gesture(metroImportDefault, obj4);
}
function SidekickMessageInput(user) {
  user = user.user;
  _require = user;
  c3 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_7 = undefined;
  closure_8 = async function _handleSend() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (metroImportDefault) {
            _slicedToArray(true);
            c3 = 2;
            c1 = 3;
            c4 = 1;
            const obj6 = { value: tmp4(tmp40[38]).sendSidekickMessage(_undefined2, id.id), done: false };
            return obj6;
          } else {
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const intl = tmp4(tmp40[23]).intl;
            tmp4(tmp40[39]).presentError(intl.string(tmp4(tmp40[23]).t.fEptJP));
            const obj2 = tmp4(tmp40[39]);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_4(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_2(undefined);
            closure_128_3(true);
            c3 = 1;
          }
          c3 = 0;
          closure_128_4(false);
        }
        c3 = 0;
        closure_128_4(false);
        throw tmp40;
      } catch (tmp40) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp40;
        } else if (tmp2 === tmp42) {
          c1 = tmp2;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp = closure_19();
  [first] = noop.useState(undefined);
  [tmp5, c3] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp7, c4] = noop.useState(false);
  const ref = noop.useRef(null);
  noop = ref;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const sharedValue = require("module_1652").useSharedValue(0);
  let obj2 = require("module_1652");
  const tmp13 = useAnimatedKeyboardHeightDefault();
  obj3 = require("utils/PlatformUtils");
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const height = size.height;
  const bound = Math.min(size.width, height);
  let messageInputContainerLarge = bound > require("useWindowSizeClassifier").WINDOW_SIZE_THRESHOLD_LARGE;
  const isIOSResult = require("utils/PlatformUtils").isIOS();
  const sharedValue1 = require("module_1652").useSharedValue(0);
  let obj4 = require("module_1652");
  items = [closure_22, sharedValue1, require("timing/timing").withTiming, noop];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp17, tmp18, tmp19, tmp20] = items;
  let obj6 = { onStart: null };
  class CheckpointFriendsStatsScreenTsx1 {
    constructor(arg0) {
      result = closure_0.set(closure_1(user.height, closure_2));
      return;
    }
  }
  const items1 = [tmp18, tmp19, tmp20];
  CheckpointFriendsStatsScreenTsx1.__closure = items1;
  CheckpointFriendsStatsScreenTsx1.__workletHash = 16087244587333;
  CheckpointFriendsStatsScreenTsx1.__initData = tmp17;
  obj6.onStart = CheckpointFriendsStatsScreenTsx1;
  require("KeyboardChatScrollView").useKeyboardHandler(obj6, []);
  let obj5 = require("KeyboardChatScrollView");
  const items2 = [closure_23, isIOSResult, tmp13, sharedValue1, PX_16, height, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
  class CheckpointFriendsStatsScreenTsx2 {
    constructor() {
      if (closure_0) {
        tmp3 = closure_1;
        value = closure_1.get();
      } else {
        tmp = closure_2;
        value = closure_2.get();
      }
      sum = value + closure_3;
      obj = { transform: null };
      obj1 = { translateY: -Math.max(0, sum - (closure_4 - closure_5.get())) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  CheckpointFriendsStatsScreenTsx2.__closure = items3;
  CheckpointFriendsStatsScreenTsx2.__workletHash = 4013262097384;
  CheckpointFriendsStatsScreenTsx2.__initData = tmp22;
  const items4 = [sharedValue];
  const animatedStyle = require("module_1652").useAnimatedStyle(CheckpointFriendsStatsScreenTsx2);
  const callback = obj.useCallback(() => {
    const current = _undefined4.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1, arg2, arg3) => sharedValue.set(arg1 + arg3));
    }
  }, items4);
  let tmp32 = null != first;
  const tmp9Result = require("module_1652");
  if (tmp32) {
    tmp32 = first.length > 0;
  }
  if (tmp32) {
    tmp32 = first.length <= 250;
  }
  if (tmp32) {
    tmp32 = !tmp5;
  }
  if (tmp32) {
    tmp32 = !tmp7;
  }
  closure_7 = tmp32;
  let tmp34Result = null;
  if (tmp31) {
    const obj7 = { ref, onLayout: callback, children: null };
    const items5 = [tmp.messageInputContainer, , ];
    if (messageInputContainerLarge) {
      messageInputContainerLarge = tmp.messageInputContainerLarge;
    }
    const obj8 = { style: null, children: null };
    items5[1] = messageInputContainerLarge;
    items5[2] = animatedStyle;
    obj8.style = items5;
    const obj9 = { multiline: true, onFocus: callback, onChangeText: tmp3, style: tmp.messageInput, value: first, maxLength: 250, editable: null, placeholderTextColor: null, placeholder: null, returnKeyType: "done", submitBehavior: "blurAndSubmit" };
    let tmp37 = !tmp5;
    if (!tmp5) {
      tmp37 = !tmp7;
    }
    obj9.editable = tmp37;
    obj9.placeholderTextColor = CHECKPOINT_WHITE;
    let intl = tmp9(1113).intl;
    if (tmp5) {
      let stringResult = intl.string(tmp9(1113).t.fjcCk5);
    } else {
      const obj10 = { name: user.username };
      stringResult = intl.formatToPlainString(tmp9(1113).t["0ZQw/X"], obj10);
    }
    obj9.placeholder = stringResult;
    const items6 = [closure_13(tmp9(1187).TextInput, obj9), ];
    const obj11 = { style: tmp.messageInputActions, children: null };
    const obj12 = {
      onPress: function handleGift() {
          const result = Tracking.trackCheckpoint2026GiftCtaClicked(_undefined.id);
          obj3 = { recipientUserId: _undefined.id, analyticsLocations: null };
          items = [AnalyticsLocationDefault.CHECKPOINT, AnalyticsLocationDefault.CHECKPOINT_SIDEKICK];
          obj3.analyticsLocations = items;
          utils_openGiftModal.openGiftModal(obj3);
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null
    };
    const intl2 = tmp9(1113).intl;
    obj12.accessibilityLabel = intl2.string(tmp9(1113).t.Ve9Ge6);
    const obj13 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    obj12.children = closure_13(tmp9(11751).GiftIcon, obj13);
    const items7 = [closure_13(sharedValue, obj12), ];
    const obj14 = {
      onPress: function handleSend() {
          const self = this;
          const apply = closure_8.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      disabled: !tmp32,
      style: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      children: null
    };
    let disabled;
    if (!tmp32) {
      disabled = tmp.disabled;
    }
    obj14.style = disabled;
    const intl3 = tmp9(1113).intl;
    obj14.accessibilityLabel = intl3.string(tmp9(1113).t.oeb1vg);
    const obj15 = { disabled: !tmp32 };
    obj14.accessibilityState = obj15;
    const obj16 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    obj14.children = closure_13(tmp9(5968).SendMessageIcon, obj16);
    items7[1] = closure_13(sharedValue, obj14);
    obj11.children = items7;
    items6[1] = closure_14(closure_7, obj11);
    obj8.children = items6;
    obj7.children = closure_14(tmp12(1652).View, obj8);
    tmp34Result = closure_13(tmp35, obj7);
  }
  return tmp34Result;
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const CheckpointConstants = fn(6314);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
let obj = { duration: fn(5488).timingStandardDuration, easing: null };
const Easing = fn(1652).Easing;
obj.easing = Easing.bezier(0.2, 0, 0, 1);
let closure_17 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
const PlatformUtils = fn(1357);
let tmp5;
if (PlatformUtils.isIOS()) {
  let obj3 = { "unifont-17.0.03": null };
  let obj4 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  obj3["unifont-17.0.03"] = obj4;
  tmp5 = obj3;
}
obj3 = tmp5;
const createStyles = fn(5243);
let obj6 = { container: { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 }, animation: null, transition: null, header: null, heading: null, title: null, titleText: null, sidekick: null, sidekickDetails: null, stats: null, stat: null, messageInputContainer: null, messageInputContainerLarge: null, messageInput: null, messageInputActions: null, disabled: null };
const rect = { position: "absolute", left: -nativeDefault.space.PX_24, right: -nativeDefault.space.PX_24 };
obj6.animation = rect;
obj6.transition = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" };
let obj7 = { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 };
obj6.header = { gap: nativeDefault.space.PX_12 };
let obj8 = { gap: nativeDefault.space.PX_12 };
obj6.heading = { gap: nativeDefault.space.PX_8 };
let obj9 = { gap: nativeDefault.space.PX_8 };
obj6.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj6.titleText = { flexShrink: 1 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj6.sidekick = { gap: nativeDefault.space.PX_32 };
let obj11 = { gap: nativeDefault.space.PX_32 };
obj6.sidekickDetails = { gap: nativeDefault.space.PX_24 };
let obj12 = { gap: nativeDefault.space.PX_24 };
obj6.stats = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 };
let obj13 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 };
obj6.stat = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj6.messageInputContainer = { height: 96, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
obj6.messageInputContainerLarge = { height: 128 };
obj6.messageInput = { flex: 1, alignSelf: "stretch", padding: 0, color: CHECKPOINT_PRIMARY, textAlignVertical: "top" };
let obj15 = { height: 96, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
obj6.messageInputActions = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_12 };
obj6.disabled = { opacity: 0.5 };
let closure_19 = createStyles.createStyles(obj6);
let closure_22 = { code: "(function CheckpointFriendsStatsScreenTsx1(e){let[androidKeyboardHeight,withTiming,ANDROID_KEYBOARD_TIMING]=this.__closure;androidKeyboardHeight.set(withTiming(e.height,ANDROID_KEYBOARD_TIMING));})" };
let closure_23 = { code: "(function CheckpointFriendsStatsScreenTsx2(){let[isIOSKeyboard,keyboardHeight,androidKeyboardHeight,MESSAGE_INPUT_KEYBOARD_GAP,windowHeight,containerBottom]=this.__closure;const height=isIOSKeyboard?keyboardHeight.get():androidKeyboardHeight.get();const overlap=height+MESSAGE_INPUT_KEYBOARD_GAP-(windowHeight-containerBottom.get());return{transform:[{translateY:-Math.max(0,overlap)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default function CheckpointFriendsStatsScreen(arg0) {
  ({ route, onNextStep, onPreviousStep } = arg0);
  _require = undefined;
  let width;
  let height;
  const tmp = closure_19();
  items = [CheckpointStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let users;
    if (stats != null) {
      users = stats.users;
    }
    return users;
  });
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  obj = require("initialize");
  const items1 = [CheckpointStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let sidekick;
    if (stats != null) {
      sidekick = stats.sidekick;
    }
    return sidekick;
  });
  const tmp2Result = require("initialize");
  const items2 = [UserStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp2Result9 = require("initialize");
  const items3 = [AccessibilityStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result10 = require("initialize");
  const friendsAnimationState = require("useFriendsAnimationState").useFriendsAnimationState(route, stateFromStores3);
  const tmp2Result11 = require("useFriendsAnimationState");
  const sidekickLeave = require("useSidekickLeave").useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep);
  const tmp10 = friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.BEST || friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.LEAVE;
  _require = tmp10;
  const tmp2Result12 = require("useSidekickLeave");
  const size = require("CheckpointScreen").useCheckpointScreenFrame();
  width = size.width;
  height = size.height;
  const items4 = [tmp10, height, width];
  const memo = noop.useMemo(() => {
    let num = 0;
    const result = -height / 2;
    if (closure_0) {
      num = nativeDefault.space.PX_48;
    }
    return { top: result - num, height: width + height };
  }, items4);
  const tmp2Result13 = require("CheckpointScreen");
  [tmp13, tmp14] = stateFromStores;
  const tmp12 = _slicedToArray(stateFromStores, 2);
  let str = require("UserUtils").useName(tmp13);
  if (str == null) {
    str = "";
  }
  const tmp2Result14 = require("UserUtils");
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  let str2 = require("UserUtils").useName(tmp14);
  if (str2 == null) {
    str2 = "";
  }
  const tmp2Result15 = require("UserUtils");
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  let user;
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str3 = require("UserUtils").useName(user);
  if (str3 == null) {
    str3 = "";
  }
  let tmp23Result = route === tmp2(tmp3[20]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[20]).CheckpointRoute.SIDEKICK_LEAVE;
  if (stateFromStores.length < 2) {
    let str5 = "twoFriends";
    if (stateFromStores3) {
      str5 = "twoFriends-reducedMotion";
    }
    let str4 = str5;
  } else {
    str4 = "threeFriends";
    if (stateFromStores3) {
      str4 = "threeFriends-reducedMotion";
    }
  }
  const obj2 = { style: tmp.container, children: null };
  obj3 = { style: null, pointerEvents: "none", children: null };
  const items5 = [tmp.animation, memo];
  obj3.style = items5;
  const tmp2Result16 = require("UserUtils");
  const obj4 = { referencedAssets: obj3, defaultViewModelInstance: str4, dataBinding: null };
  const obj5 = {};
  const merged = Object.assign(closure_17);
  obj5.AnimationState = friendsAnimationState;
  let user1;
  if (stateFromStores1 != null) {
    user1 = stateFromStores1.user;
  }
  let userAvatarURL;
  if (null != user1) {
    const tmp21Result = tmp21(tmp3[14]);
    userAvatarURL = tmp21Result.getUserAvatarURL(user1, false, 64, "png");
  }
  obj5["Avatar01/img"] = userAvatarURL;
  let userAvatarURL1;
  if (null != tmp14) {
    const tmp21Result6 = tmp21(tmp3[14]);
    userAvatarURL1 = tmp21Result6.getUserAvatarURL(tmp14, false, 64, "png");
  }
  obj5["Avatar02/img"] = userAvatarURL1;
  let userAvatarURL2;
  if (null != tmp13) {
    const tmp21Result7 = tmp21(tmp3[14]);
    userAvatarURL2 = tmp21Result7.getUserAvatarURL(tmp13, false, 64, "png");
  }
  obj5["Avatar03/img"] = userAvatarURL2;
  let user2;
  if (stateFromStores1 != null) {
    user2 = stateFromStores1.user;
  }
  let userAvatarURL3;
  if (null != user2) {
    const tmp21Result8 = tmp21(tmp3[14]);
    userAvatarURL3 = tmp21Result8.getUserAvatarURL(user2, false, 64, "png");
  }
  obj5["Avatar04/img"] = userAvatarURL3;
  let userAvatarURL4;
  if (null != stateFromStores2) {
    const tmp21Result9 = tmp21(tmp3[14]);
    userAvatarURL4 = tmp21Result9.getUserAvatarURL(stateFromStores2, false, 64, "png");
  }
  obj5["Avatar05/img"] = userAvatarURL4;
  obj5["Avatar01/Username"] = str3.toLocaleUpperCase();
  obj5["Avatar02/Username"] = toLocaleUpperCaseResult1;
  obj5["Avatar03/Username"] = toLocaleUpperCaseResult;
  obj5["Avatar04/Username"] = str3.toLocaleUpperCase();
  obj5.twoFriends = stateFromStores.length < 2;
  obj4.dataBinding = obj5;
  obj3.children = closure_13(require("CheckpointFriendsRive").CheckpointFriendsRive, obj4);
  const items6 = [closure_13(closure_7, obj3), , , ];
  let tmp20Result = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD_TRANSITION;
  if (tmp20Result) {
    const obj6 = { style: tmp.transition, children: null };
    const obj7 = { isStepHeading: true, variant: "heading-lg/medium", children: null };
    const intl = tmp2(tmp3[23]).intl;
    obj7.children = intl.string(tmp21(tmp3[24])["6RSp5q"]);
    obj6.children = closure_13(tmp21(tmp3[22]), obj7);
    tmp20Result = closure_13(closure_7, obj6);
    const tmp21Result10 = tmp21(tmp3[22]);
  }
  items6[1] = tmp20Result;
  let tmp20Result2 = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD;
  if (tmp20Result2) {
    const obj8 = { title: null, description: null };
    const intl2 = tmp2(tmp3[23]).intl;
    obj8.title = intl2.string(tmp21(tmp3[25]).OzY5Ns);
    const intl3 = tmp2(tmp3[23]).intl;
    obj8.description = intl3.string(tmp21(tmp3[24]).EqdLDd);
    tmp20Result2 = closure_13(FriendsHeader, obj8);
  }
  items6[2] = tmp20Result2;
  if (tmp23Result) {
    tmp23Result = null != stateFromStores1;
  }
  if (tmp23Result) {
    const obj9 = { style: tmp.sidekick, children: null };
    const obj10 = { style: tmp.sidekickDetails, children: null };
    const obj11 = { title: null, description: null };
    const intl4 = tmp2(tmp3[23]).intl;
    obj11.title = intl4.string(tmp21(tmp3[25])["+uwOHt"]);
    const intl5 = tmp2(tmp3[23]).intl;
    obj11.description = intl5.string(tmp21(tmp3[24])["/ctmGw"]);
    const items7 = [closure_13(FriendsHeader, obj11), ];
    const obj12 = { sidekick: stateFromStores1 };
    items7[1] = closure_13(SidekickStats, obj12);
    obj10.children = items7;
    const items8 = [closure_14(closure_7, obj10), ];
    const obj13 = { user: stateFromStores1.user, username: str3 };
    items8[1] = closure_13(SidekickMessageInput, obj13);
    obj9.children = items8;
    tmp23Result = closure_14(closure_7, obj9);
  }
  const tmp22 = width(height[18]);
  items6[3] = tmp23Result;
  obj2.children = items6;
  return closure_13(tmp22, { children: closure_14(closure_7, obj2) });
};
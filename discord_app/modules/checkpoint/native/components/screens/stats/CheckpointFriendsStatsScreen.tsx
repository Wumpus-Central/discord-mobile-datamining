// === Module 13667: CheckpointFriendsStatsScreen ===

// Module 13667 (CheckpointFriendsStatsScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3060 from "module_3060" /* 3060 */;
import FriendsIcon from "FriendsIcon" /* 5715 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import ChatIcon from "ChatIcon" /* 8643 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10558 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11971 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13627 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13643 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import UserStore from "UserStore" /* 1383 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;

const require = globalThis.__r;

require = fn;
function FriendsHeader(children) {
  const title = children.title;
  const tmp = closure_17();
  const obj = { style: tmp.header, children: null };
  obj2 = { style: tmp.heading, children: null };
  const obj3 = { style: tmp.title, children: null };
  const items = [map1(FriendsIcon.FriendsIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj5 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const intl = util.intl;
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp2 = CheckpointTextDefault;
  obj5.children = intl.string(_modDef3060.ZQakPR).toLocaleUpperCase();
  items[1] = map1(tmp2, obj5);
  obj3.children = items;
  const items1 = [closure_1_14(React5, obj3), ];
  const obj6 = { children: null };
  const stringResult = intl.string(_modDef3060.ZQakPR);
  obj6.children = title.toLocaleUpperCase();
  items1[1] = map1(CheckpointDisplayTextDefault, obj6);
  obj2.children = items1;
  const items2 = [closure_1_14(React5, obj2), map1(CheckpointTextDefault, { variant: "heading-lg/medium", children: children.description })];
  obj.children = items2;
  return closure_1_14(React5, obj);
}
function SidekickStats(sidekick) {
  sidekick = sidekick.sidekick;
  const tmp = closure_17();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const intl = util.intl;
  const intl2 = util.intl;
  const stringResult = intl.string(_modDef3060.wWKySP);
  const obj = { style: tmp.stats, children: null };
  obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.stat, children: null };
  const items = [map1(ChatIcon.ChatIcon, { size: "md", color: CHECKPOINT_PRIMARY }), map1(CheckpointStatNumberDefault, { value: rounded })];
  obj2.children = items;
  const items1 = [closure_1_14(React5, obj2), ];
  const obj4 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + intl2.formatToPlainString(_modDef3060.UZbUtl, { numMinutes: rounded1 }).toLocaleLowerCase(), style: tmp.stat, children: null };
  const items2 = [map1(MicrophoneIcon.MicrophoneIcon, { size: "md", color: CHECKPOINT_PRIMARY }), map1(CheckpointStatNumberDefault, { value: rounded1 })];
  obj4.children = items2;
  items1[1] = closure_1_14(React5, obj4);
  obj.children = items1;
  return closure_1_14(React5, obj);
}
function SidekickMessageInput(user) {
  user = user.user;
  value = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = async function _handleSend() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          } else if (noop) {
            _slicedToArray(true);
            c3 = 2;
            c1 = 3;
            c4 = 1;
            const obj6 = { value: tmp4(tmp40[31]).sendSidekickMessage(importDefault, id.id), done: false };
            return obj6;
          } else {
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const intl = tmp4(tmp40[22]).intl;
            tmp4(tmp40[32]).presentError(intl.string(tmp4(tmp40[22]).t.fEptJP));
            obj2 = tmp4(tmp40[32]);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_4(false);
            c4 = 3;
            const obj = { value, done: true };
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
  const tmp = closure_17();
  [value] = noop.useState(undefined);
  dependencyMap = tmp3;
  [tmp5, c3] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp7, c4] = noop.useState(false);
  let tmp10 = null != value;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  if (tmp10) {
    tmp10 = value.length > 0;
  }
  if (tmp10) {
    tmp10 = value.length <= 250;
  }
  if (tmp10) {
    tmp10 = !tmp5;
  }
  if (tmp10) {
    tmp10 = !tmp7;
  }
  noop = tmp10;
  let tmp12Result = null;
  if (tmp9) {
    let obj = { style: tmp.messageInputContainer, children: null };
    obj2 = { multiline: true, onChangeText: tmp3, style: tmp.messageInput, value, editable: null, placeholderTextColor: null, placeholder: null, returnKeyType: "done", submitBehavior: "blurAndSubmit" };
    let tmp16 = !tmp5;
    if (!tmp5) {
      tmp16 = !tmp7;
    }
    obj2.editable = tmp16;
    obj2.placeholderTextColor = CHECKPOINT_WHITE;
    let intl = tmp15(1113).intl;
    if (tmp5) {
      let stringResult = intl.string(tmp15(1113).t.fjcCk5);
    } else {
      const obj3 = { name: user.username };
      stringResult = intl.formatToPlainString(tmp15(1113).t["0ZQw/X"], obj3);
    }
    obj2.placeholder = stringResult;
    let items = [closure_13(user(1187).TextInput, obj2), ];
    let obj4 = { style: tmp.messageInputActions, children: null };
    let obj5 = {
      onPress: function handleGift() {
          obj2 = { recipientUserId: user.id, analyticsLocations: null };
          const items = [AnalyticsLocationDefault.CHECKPOINT];
          obj2.analyticsLocations = items;
          utils_openGiftModal.openGiftModal(obj2);
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null
    };
    const intl2 = tmp15(1113).intl;
    obj5.accessibilityLabel = intl2.string(user(1113).t.Ve9Ge6);
    let obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    obj5.children = closure_13(user(13350).GiftIcon, obj6);
    const items1 = [closure_13(closure_6, obj5), ];
    const obj7 = {
      onPress: function handleSend() {
          const self = this;
          const apply = closure_6.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      disabled: !tmp10,
      style: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      children: null
    };
    let disabled;
    if (!tmp10) {
      disabled = tmp.disabled;
    }
    obj7.style = disabled;
    const intl3 = tmp15(1113).intl;
    obj7.accessibilityLabel = intl3.string(user(1113).t.oeb1vg);
    const obj8 = { disabled: !tmp10 };
    obj7.accessibilityState = obj8;
    const obj9 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    obj7.children = closure_13(user(5729).SendMessageIcon, obj9);
    items1[1] = closure_13(closure_6, obj7);
    obj4.children = items1;
    items[1] = closure_14(closure_7, obj4);
    obj.children = items;
    tmp12Result = closure_14(closure_7, obj);
  }
  return tmp12Result;
}
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CheckpointConstants = fn(6066);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
const PlatformUtils = fn(1376);
let tmp5;
if (PlatformUtils.isIOS()) {
  let obj2 = { "unifont-17.0.03": null };
  let obj3 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  obj2["unifont-17.0.03"] = obj3;
  tmp5 = obj2;
}
obj2 = tmp5;
const createStyles = fn(5014);
let obj5 = { container: { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 }, animation: null, transition: null, header: null, heading: null, title: null, titleText: null, sidekick: null, sidekickDetails: null, stats: null, stat: null, messageInputContainer: null, messageInput: null, messageInputActions: null, disabled: null };
const rect = { position: "absolute", left: -nativeDefault.space.PX_24, right: -nativeDefault.space.PX_24 };
obj5.animation = rect;
obj5.transition = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" };
let obj6 = { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 };
obj5.header = { gap: nativeDefault.space.PX_12 };
let obj7 = { gap: nativeDefault.space.PX_12 };
obj5.heading = { gap: nativeDefault.space.PX_8 };
let obj8 = { gap: nativeDefault.space.PX_8 };
obj5.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5.titleText = { flexShrink: 1 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5.sidekick = { gap: nativeDefault.space.PX_32 };
let obj10 = { gap: nativeDefault.space.PX_32 };
obj5.sidekickDetails = { gap: nativeDefault.space.PX_24 };
let obj11 = { gap: nativeDefault.space.PX_24 };
obj5.stats = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 };
let obj12 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 };
obj5.stat = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5.messageInputContainer = { minHeight: 96, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
obj5.messageInput = { flexGrow: 1, alignSelf: "stretch", maxHeight: 200, padding: 0, color: CHECKPOINT_PRIMARY, textAlignVertical: "top" };
const obj14 = { minHeight: 96, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
obj5.messageInputActions = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_12 };
obj5.disabled = { opacity: 0.5 };
let closure_17 = createStyles.createStyles(obj5);
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default function CheckpointFriendsStatsScreen(arg0) {
  ({ route, onNextStep, onPreviousStep } = arg0);
  _require = undefined;
  let width;
  let height;
  const tmp = closure_17();
  const items = [CheckpointStore];
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
  const obj = require("initialize");
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
  const tmp2Result8 = require("initialize");
  const items3 = [AccessibilityStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result9 = require("initialize");
  const friendsAnimationState = require("useFriendsAnimationState").useFriendsAnimationState(route, stateFromStores3);
  const tmp2Result10 = require("useFriendsAnimationState");
  const sidekickLeave = require("useSidekickLeave").useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep);
  const tmp10 = friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.BEST || friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.LEAVE;
  _require = tmp10;
  const size = width(tmp3[16])({ ignoreKeyboard: true });
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
  const tmp2Result11 = require("useSidekickLeave");
  [tmp14, tmp15] = stateFromStores;
  const tmp13 = _slicedToArray(stateFromStores, 2);
  let str = require("UserUtils").useName(tmp14);
  if (str == null) {
    str = "";
  }
  const tmp2Result12 = require("UserUtils");
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  let str2 = require("UserUtils").useName(tmp15);
  if (str2 == null) {
    str2 = "";
  }
  const tmp2Result13 = require("UserUtils");
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  let user;
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str3 = require("UserUtils").useName(user);
  if (str3 == null) {
    str3 = "";
  }
  let tmp23Result = route === tmp2(tmp3[18]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[18]).CheckpointRoute.SIDEKICK_LEAVE;
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
  obj2 = { style: tmp.container, children: null };
  const obj3 = { style: null, pointerEvents: "none", children: null };
  const items5 = [tmp.animation, memo];
  obj3.style = items5;
  const tmp2Result14 = require("UserUtils");
  const obj4 = { referencedAssets: obj2, defaultViewModelInstance: str4, dataBinding: null };
  const obj5 = {};
  const merged = Object.assign(closure_15);
  obj5.AnimationState = friendsAnimationState;
  let user1;
  if (stateFromStores1 != null) {
    user1 = stateFromStores1.user;
  }
  let userAvatarURL;
  if (null != user1) {
    const tmp11Result7 = tmp11(tmp3[12]);
    userAvatarURL = tmp11Result7.getUserAvatarURL(user1, false, 64, "png");
  }
  obj5["Avatar01/img"] = userAvatarURL;
  let userAvatarURL1;
  if (null != tmp15) {
    const tmp11Result8 = tmp11(tmp3[12]);
    userAvatarURL1 = tmp11Result8.getUserAvatarURL(tmp15, false, 64, "png");
  }
  obj5["Avatar02/img"] = userAvatarURL1;
  let userAvatarURL2;
  if (null != tmp14) {
    const tmp11Result9 = tmp11(tmp3[12]);
    userAvatarURL2 = tmp11Result9.getUserAvatarURL(tmp14, false, 64, "png");
  }
  obj5["Avatar03/img"] = userAvatarURL2;
  let user2;
  if (stateFromStores1 != null) {
    user2 = stateFromStores1.user;
  }
  let userAvatarURL3;
  if (null != user2) {
    const tmp11Result10 = tmp11(tmp3[12]);
    userAvatarURL3 = tmp11Result10.getUserAvatarURL(user2, false, 64, "png");
  }
  obj5["Avatar04/img"] = userAvatarURL3;
  let userAvatarURL4;
  if (null != stateFromStores2) {
    const tmp11Result11 = tmp11(tmp3[12]);
    userAvatarURL4 = tmp11Result11.getUserAvatarURL(stateFromStores2, false, 64, "png");
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
  let tmp21Result = route === tmp2(tmp3[18]).CheckpointRoute.SQUAD_TRANSITION;
  if (tmp21Result) {
    const obj6 = { style: tmp.transition, children: null };
    const obj7 = { isStepHeading: true, variant: "heading-lg/medium", children: null };
    const intl = tmp2(tmp3[22]).intl;
    obj7.children = intl.string(tmp11(tmp3[23])["6RSp5q"]);
    obj6.children = closure_13(tmp11(tmp3[21]), obj7);
    tmp21Result = closure_13(closure_7, obj6);
    const tmp11Result12 = tmp11(tmp3[21]);
  }
  items6[1] = tmp21Result;
  let tmp21Result2 = route === tmp2(tmp3[18]).CheckpointRoute.SQUAD;
  if (tmp21Result2) {
    const obj8 = { title: null, description: null };
    const intl2 = tmp2(tmp3[22]).intl;
    obj8.title = intl2.string(tmp11(tmp3[24]).OzY5Ns);
    const intl3 = tmp2(tmp3[22]).intl;
    obj8.description = intl3.string(tmp11(tmp3[23]).EqdLDd);
    tmp21Result2 = closure_13(FriendsHeader, obj8);
  }
  items6[2] = tmp21Result2;
  if (tmp23Result) {
    tmp23Result = null != stateFromStores1;
  }
  if (tmp23Result) {
    const obj9 = { style: tmp.sidekick, children: null };
    const obj10 = { style: tmp.sidekickDetails, children: null };
    const obj11 = { title: null, description: null };
    const intl4 = tmp2(tmp3[22]).intl;
    obj11.title = intl4.string(tmp11(tmp3[24])["+uwOHt"]);
    const intl5 = tmp2(tmp3[22]).intl;
    obj11.description = intl5.string(tmp11(tmp3[23])["/ctmGw"]);
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
  const tmp11Result = width(height[19]);
  items6[3] = tmp23Result;
  obj2.children = items6;
  return closure_13(tmp11Result, { children: closure_14(closure_7, obj2) });
};
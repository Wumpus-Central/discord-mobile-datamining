// === Module 12951: CheckpointFriendsStatsScreen ===

// Module 12951 (CheckpointFriendsStatsScreen)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1499 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import UserUtils from "UserUtils" /* 5018 */;
import CheckpointFriendsRive from "CheckpointFriendsRive" /* 5097 */;
import FriendsIcon from "FriendsIcon" /* 5652 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6348 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7263 */;
import ChatIcon from "ChatIcon" /* 8528 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10423 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11602 */;
import CheckpointTextDefault from "CheckpointText" /* 12911 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12913 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12919 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 12926 */;
import useFriendsAnimationState from "useFriendsAnimationState" /* 12952 */;
import useSidekickLeave from "useSidekickLeave" /* 12953 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import UserStore from "UserStore" /* 1392 */;
import CheckpointStore from "CheckpointStore" /* 12893 */;

const require = globalThis.__r;

require = fn;
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
        return { value: "IconComponent", done: null };
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
            const obj6 = { value: tmp4(tmp40[33]).sendSidekickMessage(importDefault, id.id), done: false };
            return obj6;
          } else {
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const intl = tmp4(tmp40[23]).intl;
            tmp4(tmp40[34]).presentError(intl.string(tmp4(tmp40[23]).t.fEptJP));
            obj2 = tmp4(tmp40[34]);
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
    let intl = tmp15(1128).intl;
    if (tmp5) {
      let stringResult = intl.string(tmp15(1128).t.fjcCk5);
    } else {
      const obj3 = { name: user.username };
      stringResult = intl.formatToPlainString(tmp15(1128).t["0ZQw/X"], obj3);
    }
    obj2.placeholder = stringResult;
    let items = [closure_13(user(1202).TextInput, obj2), ];
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
    const intl2 = tmp15(1128).intl;
    obj5.accessibilityLabel = intl2.string(user(1128).t.Ve9Ge6);
    let obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    obj5.children = closure_13(user(12825).GiftIcon, obj6);
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
    const intl3 = tmp15(1128).intl;
    obj7.accessibilityLabel = intl3.string(user(1128).t.oeb1vg);
    const obj8 = { disabled: !tmp10 };
    obj7.accessibilityState = obj8;
    const obj9 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    obj7.children = closure_13(user(5666).SendMessageIcon, obj9);
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
const CheckpointConstants = fn(6001);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
const PlatformUtils = fn(1385);
let tmp5;
if (PlatformUtils.isIOS()) {
  let obj2 = { "unifont-17.0.03": null };
  let obj3 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  obj2["unifont-17.0.03"] = obj3;
  tmp5 = obj2;
}
obj2 = tmp5;
const createStyles = fn(4969);
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
fn(558);
const obj15 = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_12 };
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function FriendsHeader(arg0) {
  const cResult = c.c(21);
  ({ title, description } = arg0);
  const tmp4 = closure_17();
  ({ header, heading, title: title2 } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    obj2 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    const tmp8 = map1(FriendsIcon.FriendsIcon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const toLocaleUpperCaseResult = intl.string(_modDef3056.ZQakPR).toLocaleUpperCase();
    cResult[1] = toLocaleUpperCaseResult;
    let tmp9 = toLocaleUpperCaseResult;
    const stringResult = intl.string(_modDef3056.ZQakPR);
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.titleText) {
    const obj3 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: tmp9 };
    const tmp15 = map1(CheckpointTextDefault, obj3);
    cResult[2] = tmp4.titleText;
    cResult[3] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.title) {
    if (cResult[5] === tmp12) {
      let tmp16 = cResult[6];
    }
    if (cResult[7] !== title) {
      const toLocaleUpperCaseResult1 = title.toLocaleUpperCase();
      cResult[7] = title;
      cResult[8] = toLocaleUpperCaseResult1;
      let tmp18 = toLocaleUpperCaseResult1;
    } else {
      tmp18 = cResult[8];
    }
    if (cResult[9] !== tmp18) {
      const obj4 = { children: tmp18 };
      const tmp23 = map1(CheckpointDisplayTextDefault, obj4);
      cResult[9] = tmp18;
      cResult[10] = tmp23;
      let tmp20 = tmp23;
    } else {
      tmp20 = cResult[10];
    }
    if (cResult[11] === tmp4.heading) {
      if (cResult[12] === tmp20) {
        if (cResult[13] === tmp16) {
          let tmp24 = cResult[14];
        }
        if (cResult[15] !== description) {
          const obj5 = { variant: "heading-lg/medium", children: description };
          const tmp31 = map1(CheckpointTextDefault, obj5);
          cResult[15] = description;
          cResult[16] = tmp31;
          let tmp28 = tmp31;
        } else {
          tmp28 = cResult[16];
        }
        if (cResult[17] === tmp4.header) {
          if (cResult[18] === tmp24) {
            if (cResult[19] === tmp28) {
              let tmp32 = cResult[20];
            }
            return tmp32;
          }
        }
        const obj6 = { style: header, children: null };
        const items = [tmp24, tmp28];
        obj6.children = items;
        const tmp35 = closure_1_14(React5, obj6);
        cResult[17] = tmp4.header;
        cResult[18] = tmp24;
        cResult[19] = tmp28;
        cResult[20] = tmp35;
        tmp32 = tmp35;
      }
    }
    const obj7 = { style: heading, children: null };
    const items1 = [tmp16, tmp20];
    obj7.children = items1;
    const tmp27 = closure_1_14(React5, obj7);
    cResult[11] = tmp4.heading;
    cResult[12] = tmp20;
    cResult[13] = tmp16;
    cResult[14] = tmp27;
    tmp24 = tmp27;
  }
  const obj8 = { style: title2, children: null };
  const items2 = [first, tmp12];
  obj8.children = items2;
  const tmp17 = closure_1_14(React5, obj8);
  cResult[4] = tmp4.title;
  cResult[5] = tmp12;
  cResult[6] = tmp17;
  tmp16 = tmp17;
}) : (function FriendsHeader(children) {
  const title = children.title;
  const tmp = closure_17();
  const obj = { style: tmp.header, children: null };
  obj2 = { style: tmp.heading, children: null };
  const obj3 = { style: tmp.title, children: null };
  const items = [map1(FriendsIcon.FriendsIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj5 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const intl = util.intl;
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp2 = CheckpointTextDefault;
  obj5.children = intl.string(_modDef3056.ZQakPR).toLocaleUpperCase();
  items[1] = map1(tmp2, obj5);
  obj3.children = items;
  const items1 = [closure_1_14(React5, obj3), ];
  const obj6 = { children: null };
  const stringResult = intl.string(_modDef3056.ZQakPR);
  obj6.children = title.toLocaleUpperCase();
  items1[1] = map1(CheckpointDisplayTextDefault, obj6);
  obj2.children = items1;
  const items2 = [closure_1_14(React5, obj2), map1(CheckpointTextDefault, { variant: "heading-lg/medium", children: children.description })];
  obj.children = items2;
  return closure_1_14(React5, obj);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function SidekickStats(sidekick) {
  const cResult = c.c(35);
  stats = sidekick.sidekick;
  const tmp4 = closure_17();
  if (cResult[0] !== stats.numMessagesSent) {
    const _Math = Math;
    const rounded = Math.round(stats.numMessagesSent);
    cResult[0] = stats.numMessagesSent;
    cResult[1] = rounded;
    let tmp5 = rounded;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === stats.numVoiceMinutes) {
      if (cResult[4] === tmp4.stat) {
        if (cResult[5] === tmp4.stats) {
          const _HermesInternal = HermesInternal;
          const combined = "" + cResult[8] + " " + cResult[9];
          const _Symbol = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            obj2 = { size: "md", color: CHECKPOINT_PRIMARY };
            const tmp40 = map1(MicrophoneIcon.MicrophoneIcon, obj2);
            cResult[21] = tmp40;
            let tmp37 = tmp40;
          } else {
            tmp37 = cResult[21];
          }
          if (cResult[22] !== cResult[13]) {
            const obj3 = { value: tmp13 };
            const tmp44 = map1(CheckpointStatNumberDefault, obj3);
            cResult[22] = tmp13;
            cResult[23] = tmp44;
            let tmp41 = tmp44;
          } else {
            tmp41 = cResult[23];
          }
          if (cResult[24] === cResult[6]) {
            if (cResult[25] === tmp4.stat) {
              if (cResult[26] === tmp10) {
                if (cResult[27] === combined) {
                  if (cResult[28] === tmp41) {
                    let tmp45 = cResult[29];
                  }
                  if (cResult[30] === tmp9) {
                    if (cResult[31] === tmp45) {
                      if (cResult[32] === tmp11) {
                        if (cResult[33] === tmp12) {
                          let tmp48 = cResult[34];
                        }
                        return tmp48;
                      }
                    }
                  }
                  const obj4 = { style: tmp11, children: null };
                  const items = [tmp12, tmp45];
                  obj4.children = items;
                  const tmp50 = closure_1_14(tmp9, obj4);
                  cResult[30] = tmp9;
                  cResult[31] = tmp45;
                  cResult[32] = tmp11;
                  cResult[33] = tmp12;
                  cResult[34] = tmp50;
                  tmp48 = tmp50;
                }
              }
            }
          }
          const obj5 = { accessible: cResult[10], accessibilityLabel: combined, style: tmp4.stat, children: null };
          const items1 = [tmp37, tmp41];
          obj5.children = items1;
          const tmp47 = closure_1_14(cResult[6], obj5);
          cResult[24] = cResult[6];
          cResult[25] = tmp4.stat;
          cResult[26] = cResult[10];
          cResult[27] = combined;
          cResult[28] = tmp41;
          cResult[29] = tmp47;
          tmp45 = tmp47;
        }
      }
    }
  }
  const rounded1 = Math.round(stats.numVoiceMinutes);
  const intl = util.intl;
  const intl2 = util.intl;
  const stringResult = intl.string(_modDef3056.wWKySP);
  const stats2 = tmp4.stats;
  const combined1 = "" + tmp5 + " " + stringResult.toLocaleLowerCase();
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { size: "md", color: CHECKPOINT_PRIMARY };
    const tmp21 = map1(ChatIcon.ChatIcon, obj6);
    cResult[14] = tmp21;
    let tmp18 = tmp21;
  } else {
    tmp18 = cResult[14];
  }
  if (cResult[15] !== tmp5) {
    const obj7 = { value: tmp5 };
    const tmp24 = map1(CheckpointStatNumberDefault, obj7);
    cResult[15] = tmp5;
    cResult[16] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[16];
  }
  if (cResult[17] === tmp4.stat) {
    if (cResult[18] === combined1) {
      if (cResult[19] === tmp22) {
        let tmp25 = cResult[20];
      }
      const toLocaleLowerCaseResult = formatToPlainStringResult.toLocaleLowerCase();
      cResult[2] = tmp5;
      cResult[3] = stats.numVoiceMinutes;
      ({ stat: tmp3[4], stats } = tmp4);
      cResult[5] = stats;
      cResult[6] = React5;
      cResult[7] = React5;
      cResult[8] = rounded1;
      cResult[9] = toLocaleLowerCaseResult;
      cResult[10] = true;
      cResult[11] = stats2;
      cResult[12] = tmp25;
      cResult[13] = rounded1;
    }
  }
  const obj8 = { accessible: true, accessibilityLabel: combined1, style: tmp4.stat, children: null };
  const items2 = [tmp18, tmp22];
  obj8.children = items2;
  const tmp26 = closure_1_14(React5, obj8);
  cResult[17] = tmp4.stat;
  cResult[18] = combined1;
  cResult[19] = tmp22;
  cResult[20] = tmp26;
  tmp25 = tmp26;
  formatToPlainStringResult = intl2.formatToPlainString(_modDef3056.UZbUtl, { numMinutes: rounded1 });
}) : (function SidekickStats(sidekick) {
  sidekick = sidekick.sidekick;
  const tmp = closure_17();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const intl = util.intl;
  const intl2 = util.intl;
  const stringResult = intl.string(_modDef3056.wWKySP);
  const obj = { style: tmp.stats, children: null };
  obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.stat, children: null };
  const items = [map1(ChatIcon.ChatIcon, { size: "md", color: CHECKPOINT_PRIMARY }), map1(CheckpointStatNumberDefault, { value: rounded })];
  obj2.children = items;
  const items1 = [closure_1_14(React5, obj2), ];
  const obj4 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + intl2.formatToPlainString(_modDef3056.UZbUtl, { numMinutes: rounded1 }).toLocaleLowerCase(), style: tmp.stat, children: null };
  const items2 = [map1(MicrophoneIcon.MicrophoneIcon, { size: "md", color: CHECKPOINT_PRIMARY }), map1(CheckpointStatNumberDefault, { value: rounded1 })];
  obj4.children = items2;
  items1[1] = closure_1_14(React5, obj4);
  obj.children = items1;
  return closure_1_14(React5, obj);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointFriendsStatsScreen(arg0) {
  const cResult = c.c(66);
  ({ route, onNextStep, onPreviousStep } = arg0);
  const tmp4 = closure_17();
  obj2 = initialize;
  const items = [CheckpointStore];
  let stateFromStores = obj2.useStateFromStores(items, () => {
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
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    const fn = function o() {
      const stats = CheckpointStore.stats;
      let sidekick;
      if (stats != null) {
        sidekick = stats.sidekick;
      }
      return sidekick;
    };
    cResult[0] = items1;
    cResult[1] = fn;
    tmp6 = items1;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores1 = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class R {
      constructor() {
        return closure_1_9.getCurrentUser();
      }
    }
    cResult[2] = items2;
    cResult[3] = R;
    let tmp10 = R;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores2 = initialize.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    class R {
      constructor() {
        return closure_1_9.getCurrentUser();
      }
    }
    cResult[4] = items3;
    cResult[5] = tmp16;
    let tmp14 = tmp16;
    let tmp13 = items3;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult9 = initialize;
  const stateFromStores3 = initialize.useStateFromStores(tmp13, tmp14);
  const tmpResult10 = initialize;
  const friendsAnimationState = useFriendsAnimationState.useFriendsAnimationState(route, stateFromStores3);
  const tmpResult11 = useFriendsAnimationState;
  const sidekickLeave = useSidekickLeave.useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep);
  const tmpResult12 = useSidekickLeave;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[6] = { ignoreKeyboard: true };
    class R {
      constructor() {
        return closure_1_9.getCurrentUser();
      }
    }
    const obj3 = { ignoreKeyboard: true };
  } else {
    const tmp21 = cResult[6];
  }
  const size = useWindowDimensionsDefault(tmp21);
  const height = size.height;
  let num8 = 0;
  const result = -height / 2;
  if (tmp20) {
    num8 = nativeDefault.space.PX_48;
  }
  const diff = result - num8;
  const sum = size.width + height;
  if (cResult[7] === diff) {
    if (cResult[8] === sum) {
      let tmp26 = cResult[9];
    }
    class R {
      constructor() {
        return closure_1_9.getCurrentUser();
      }
    }
    [tmp29, tmp30, tmp31] = tmp28;
    let str = UserUtils.useName(tmp29);
    if (str == null) {
      str = "";
    }
    if (cResult[10] !== str) {
      const toLocaleUpperCaseResult = str.toLocaleUpperCase();
      cResult[10] = str;
      class R {
        constructor() {
          return closure_1_9.getCurrentUser();
        }
      }
      cResult[11] = toLocaleUpperCaseResult;
      let tmp32 = toLocaleUpperCaseResult;
    } else {
      tmp32 = cResult[11];
    }
    const tmpResult13 = UserUtils;
    let str2 = UserUtils.useName(tmp30);
    if (str2 == null) {
      str2 = "";
    }
    if (cResult[12] !== str2) {
      const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
      cResult[12] = str2;
      class R {
        constructor() {
          return closure_1_9.getCurrentUser();
        }
      }
      cResult[13] = toLocaleUpperCaseResult1;
      let tmp34 = toLocaleUpperCaseResult1;
    } else {
      tmp34 = cResult[13];
    }
    const tmpResult14 = UserUtils;
    let str3 = UserUtils.useName(tmp31);
    if (str3 == null) {
      str3 = "";
    }
    if (cResult[14] !== str3) {
      const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
      cResult[14] = str3;
      class R {
        constructor() {
          return closure_1_9.getCurrentUser();
        }
      }
      cResult[15] = toLocaleUpperCaseResult2;
      let tmp36 = toLocaleUpperCaseResult2;
    } else {
      tmp36 = cResult[15];
    }
    const tmpResult15 = UserUtils;
    let user;
    if (stateFromStores1 != null) {
      user = stateFromStores1.user;
    }
    let str4 = UserUtils.useName(user);
    if (str4 == null) {
      str4 = "";
    }
    const tmp40 = route === CheckpointNavigation.CheckpointRoute.SIDEKICK || route === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE;
    if (stateFromStores.length < 3) {
      let str6 = "twoFriends";
      if (stateFromStores3) {
        str6 = "twoFriends-reducedMotion";
      }
      let str5 = str6;
    } else {
      str5 = "threeFriends";
      if (stateFromStores3) {
        str5 = "threeFriends-reducedMotion";
      }
    }
    if (cResult[16] === tmp26) {
      if (cResult[17] === tmp4.animation) {
        let tmp42 = cResult[18];
      }
      if (cResult[19] !== tmp29) {
        let userAvatarURL;
        if (null != tmp29) {
          const tmp22Result = AvatarUtilsDefault;
          class R {
            constructor() {
              return closure_1_9.getCurrentUser();
            }
          }
          userAvatarURL = tmp22Result.getUserAvatarURL(tmp29, false, 64, "png");
        }
        class R {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        cResult[20] = userAvatarURL;
        let tmp43 = userAvatarURL;
      } else {
        tmp43 = cResult[20];
      }
      if (cResult[21] !== tmp31) {
        let userAvatarURL1;
        if (null != tmp31) {
          const tmp22Result5 = AvatarUtilsDefault;
          class R {
            constructor() {
              return closure_1_9.getCurrentUser();
            }
          }
          userAvatarURL1 = tmp22Result5.getUserAvatarURL(tmp31, false, 64, "png");
        }
        class R {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        cResult[22] = userAvatarURL1;
        let tmp47 = userAvatarURL1;
      } else {
        tmp47 = cResult[22];
      }
      class R {
        constructor() {
          return closure_1_9.getCurrentUser();
        }
      }
      let user1;
      if (stateFromStores1 != null) {
        user1 = stateFromStores1.user;
      }
      if (cResult[25] !== user1) {
        let userAvatarURL2;
        if (null != user1) {
          const tmp22Result6 = AvatarUtilsDefault;
          class R {
            constructor() {
              return closure_1_9.getCurrentUser();
            }
          }
          userAvatarURL2 = tmp22Result6.getUserAvatarURL(user1, false, 64, "png");
        }
        class R {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        cResult[26] = userAvatarURL2;
        let tmp53 = userAvatarURL2;
      } else {
        tmp53 = cResult[26];
      }
      if (cResult[27] !== stateFromStores2) {
        let userAvatarURL3;
        if (null != stateFromStores2) {
          const tmp22Result7 = AvatarUtilsDefault;
          class R {
            constructor() {
              return closure_1_9.getCurrentUser();
            }
          }
          userAvatarURL3 = tmp22Result7.getUserAvatarURL(stateFromStores2, false, 64, "png");
        }
        class R {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        cResult[28] = userAvatarURL3;
        let tmp57 = userAvatarURL3;
      } else {
        tmp57 = cResult[28];
      }
      if (cResult[29] !== str4) {
        const toLocaleUpperCaseResult3 = str4.toLocaleUpperCase();
        cResult[29] = str4;
        class R {
          constructor() {
            return closure_1_9.getCurrentUser();
          }
        }
        cResult[30] = toLocaleUpperCaseResult3;
        let tmp61 = toLocaleUpperCaseResult3;
      } else {
        tmp61 = cResult[30];
      }
      if (cResult[31] === friendsAnimationState) {
        if (cResult[32] === tmp32) {
          if (cResult[33] === tmp34) {
            if (cResult[34] === tmp43) {
              if (cResult[35] === tmp47) {
                if (cResult[36] === tmp51) {
                  if (cResult[37] === tmp53) {
                    if (cResult[38] === tmp57) {
                      if (cResult[39] === tmp61) {
                        if (cResult[40] === tmp36) {
                          if (cResult[41] === tmp39) {
                            let tmp63 = cResult[42];
                          }
                          if (cResult[43] === str5) {
                            if (cResult[44] === tmp63) {
                              let tmp67 = cResult[45];
                            }
                            if (cResult[46] === tmp42) {
                              if (cResult[47] === tmp67) {
                                let tmp72 = cResult[48];
                              }
                              if (cResult[49] === route) {
                                if (cResult[50] === tmp4.transition) {
                                  let tmp75 = cResult[51];
                                }
                                if (cResult[52] !== route) {
                                  let tmp78 = route === CheckpointNavigation.CheckpointRoute.SQUAD;
                                  if (tmp78) {
                                    const obj4 = { title: null, description: null };
                                    class R {
                                      constructor() {
                                        return closure_1_9.getCurrentUser();
                                      }
                                    }
                                    obj4.title = obj21.string(_modDef3056.OzY5Ns);
                                    const intl = util.intl;
                                    obj4.description = intl.string(_modDef3088.EqdLDd);
                                    tmp78 = map1(closure_18, obj4);
                                  }
                                  class R {
                                    constructor() {
                                      return closure_1_9.getCurrentUser();
                                    }
                                  }
                                  cResult[53] = tmp78;
                                  let tmp77 = tmp78;
                                } else {
                                  tmp77 = cResult[53];
                                }
                                if (cResult[54] === tmp40) {
                                  if (cResult[55] === stateFromStores1) {
                                    if (cResult[56] === str4) {
                                      if (cResult[57] === tmp4.sidekick) {
                                        if (cResult[58] === tmp4.sidekickDetails) {
                                          let tmp81 = cResult[59];
                                        }
                                        if (cResult[60] === tmp4.container) {
                                          if (cResult[61] === tmp72) {
                                            if (cResult[62] === tmp75) {
                                              if (cResult[63] === tmp77) {
                                                if (cResult[64] === tmp81) {
                                                  let tmp89 = cResult[65];
                                                }
                                                return tmp89;
                                              }
                                            }
                                          }
                                        }
                                        class R {
                                          constructor() {
                                            return closure_1_9.getCurrentUser();
                                          }
                                        }
                                        const obj5 = { style: tmp41, children: null };
                                        const items4 = [tmp72, tmp75, tmp77, tmp81];
                                        obj5.children = items4;
                                        tmp92[0] = closure_1_14(React5, obj5);
                                        const tmp95 = map1(CheckpointScreenDefault, tmp92);
                                        cResult[60] = tmp4.container;
                                        cResult[61] = tmp72;
                                        cResult[62] = tmp75;
                                        cResult[63] = tmp77;
                                        cResult[64] = tmp81;
                                        cResult[65] = tmp95;
                                        tmp89 = tmp95;
                                        const tmp22Result8 = CheckpointScreenDefault;
                                      }
                                    }
                                  }
                                }
                                class R {
                                  constructor() {
                                    return closure_1_9.getCurrentUser();
                                  }
                                }
                                if (tmp40) {
                                  let tmp82 = null != stateFromStores1;
                                }
                                if (tmp82) {
                                  const obj6 = { style: null, children: null };
                                  class R {
                                    constructor() {
                                      return closure_1_9.getCurrentUser();
                                    }
                                  }
                                  const obj7 = { style: tmp4.sidekickDetails, children: null };
                                  const obj8 = { title: null, description: null };
                                  const intl2 = util.intl;
                                  obj8.title = intl2.string(_modDef3056["+uwOHt"]);
                                  const intl3 = util.intl;
                                  obj8.description = intl3.string(_modDef3088["/ctmGw"]);
                                  const items5 = [map1(closure_18, obj8), ];
                                  const obj9 = { sidekick: stateFromStores1 };
                                  items5[1] = map1(closure_19, obj9);
                                  obj7.children = items5;
                                  const items6 = [closure_1_14(React5, obj7), ];
                                  const obj10 = { user: stateFromStores1.user, username: str4 };
                                  items6[1] = map1(SidekickMessageInput, obj10);
                                  obj6.children = items6;
                                  tmp82 = closure_1_14(React5, obj6);
                                }
                                cResult[54] = tmp40;
                                cResult[55] = stateFromStores1;
                                cResult[56] = str4;
                                cResult[57] = tmp4.sidekick;
                                cResult[58] = tmp4.sidekickDetails;
                                cResult[59] = tmp82;
                                tmp81 = tmp82;
                              }
                              const tmp76 = route === CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION;
                              class R {
                                constructor() {
                                  return closure_1_9.getCurrentUser();
                                }
                              }
                              cResult[49] = route;
                              cResult[50] = tmp4.transition;
                              cResult[51] = tmp76;
                              tmp75 = tmp76;
                            }
                            class R {
                              constructor() {
                                return closure_1_9.getCurrentUser();
                              }
                            }
                            const obj11 = { style: tmp42, pointerEvents: "none", children: tmp67 };
                            const tmp74 = map1(React5, obj11);
                            cResult[46] = tmp42;
                            cResult[47] = tmp67;
                            cResult[48] = tmp74;
                            tmp72 = tmp74;
                          }
                          class R {
                            constructor() {
                              return closure_1_9.getCurrentUser();
                            }
                          }
                          tmp69[0] = obj2;
                          tmp69[1] = str5;
                          tmp69[2] = tmp63;
                          const tmp71 = map1(CheckpointFriendsRive.CheckpointFriendsRive, tmp69);
                          cResult[43] = str5;
                          cResult[44] = tmp63;
                          cResult[45] = tmp71;
                          tmp67 = tmp71;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj12 = {};
      const merged = Object.assign(closure_15);
      obj12.AnimationState = friendsAnimationState;
      obj12["Avatar01/img"] = tmp43;
      obj12["Avatar02/img"] = tmp47;
      obj12["Avatar03/img"] = tmp51;
      obj12["Avatar04/img"] = tmp53;
      obj12["Avatar05/img"] = tmp57;
      obj12["Avatar01/Username"] = tmp32;
      obj12["Avatar02/Username"] = tmp36;
      obj12["Avatar03/Username"] = tmp34;
      obj12["Avatar04/Username"] = tmp61;
      obj12.twoFriends = tmp39;
      cResult[31] = friendsAnimationState;
      cResult[32] = tmp32;
      cResult[33] = tmp34;
      cResult[34] = tmp43;
      cResult[35] = tmp47;
      cResult[36] = tmp51;
      cResult[37] = tmp53;
      cResult[38] = tmp57;
      cResult[39] = tmp61;
      cResult[40] = tmp36;
      cResult[41] = tmp39;
      cResult[42] = obj12;
      tmp63 = obj12;
    }
    const items7 = [tmp4.animation, tmp26];
    cResult[16] = tmp26;
    cResult[17] = tmp4.animation;
    cResult[18] = items7;
    tmp42 = items7;
    const tmpResult16 = UserUtils;
  }
  const obj13 = { top: diff, height: sum };
  cResult[7] = diff;
  cResult[8] = sum;
  cResult[9] = obj13;
  tmp26 = obj13;
  tmp20 = friendsAnimationState === useFriendsAnimationState.FriendsAnimationState.BEST || friendsAnimationState === useFriendsAnimationState.FriendsAnimationState.LEAVE;
}) : (function CheckpointFriendsStatsScreen(arg0) {
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
  const tmp2Result9 = require("initialize");
  const items3 = [AccessibilityStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result10 = require("initialize");
  const friendsAnimationState = require("useFriendsAnimationState").useFriendsAnimationState(route, stateFromStores3);
  const tmp2Result11 = require("useFriendsAnimationState");
  const sidekickLeave = require("useSidekickLeave").useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep);
  const tmp10 = friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.BEST || friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.LEAVE;
  _require = tmp10;
  const size = width(tmp3[18])({ ignoreKeyboard: true });
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
  const tmp2Result12 = require("useSidekickLeave");
  [tmp14, tmp15, tmp16] = stateFromStores;
  const tmp13 = _slicedToArray(stateFromStores, 3);
  let str = require("UserUtils").useName(tmp14);
  if (str == null) {
    str = "";
  }
  const tmp2Result13 = require("UserUtils");
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  let str2 = require("UserUtils").useName(tmp15);
  if (str2 == null) {
    str2 = "";
  }
  const tmp2Result14 = require("UserUtils");
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  let str3 = require("UserUtils").useName(tmp16);
  if (str3 == null) {
    str3 = "";
  }
  const tmp2Result15 = require("UserUtils");
  const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
  let user;
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str4 = require("UserUtils").useName(user);
  if (str4 == null) {
    str4 = "";
  }
  let tmp25Result = route === tmp2(tmp3[20]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[20]).CheckpointRoute.SIDEKICK_LEAVE;
  if (stateFromStores.length < 3) {
    let str6 = "twoFriends";
    if (stateFromStores3) {
      str6 = "twoFriends-reducedMotion";
    }
    let str5 = str6;
  } else {
    str5 = "threeFriends";
    if (stateFromStores3) {
      str5 = "threeFriends-reducedMotion";
    }
  }
  obj2 = { style: tmp.container, children: null };
  const obj3 = { style: null, pointerEvents: "none", children: null };
  const items5 = [tmp.animation, memo];
  obj3.style = items5;
  const tmp2Result16 = require("UserUtils");
  const obj4 = { referencedAssets: obj2, defaultViewModelInstance: str5, dataBinding: null };
  const obj5 = {};
  const merged = Object.assign(closure_15);
  obj5.AnimationState = friendsAnimationState;
  let userAvatarURL;
  if (null != tmp14) {
    const tmp11Result7 = tmp11(tmp3[12]);
    userAvatarURL = tmp11Result7.getUserAvatarURL(tmp14, false, 64, "png");
  }
  obj5["Avatar01/img"] = userAvatarURL;
  let userAvatarURL1;
  if (null != tmp16) {
    const tmp11Result8 = tmp11(tmp3[12]);
    userAvatarURL1 = tmp11Result8.getUserAvatarURL(tmp16, false, 64, "png");
  }
  obj5["Avatar02/img"] = userAvatarURL1;
  let userAvatarURL2;
  if (null != tmp15) {
    const tmp11Result9 = tmp11(tmp3[12]);
    userAvatarURL2 = tmp11Result9.getUserAvatarURL(tmp15, false, 64, "png");
  }
  obj5["Avatar03/img"] = userAvatarURL2;
  let user1;
  if (stateFromStores1 != null) {
    user1 = stateFromStores1.user;
  }
  let userAvatarURL3;
  if (null != user1) {
    const tmp11Result10 = tmp11(tmp3[12]);
    userAvatarURL3 = tmp11Result10.getUserAvatarURL(user1, false, 64, "png");
  }
  obj5["Avatar04/img"] = userAvatarURL3;
  let userAvatarURL4;
  if (null != stateFromStores2) {
    const tmp11Result11 = tmp11(tmp3[12]);
    userAvatarURL4 = tmp11Result11.getUserAvatarURL(stateFromStores2, false, 64, "png");
  }
  obj5["Avatar05/img"] = userAvatarURL4;
  obj5["Avatar01/Username"] = toLocaleUpperCaseResult;
  obj5["Avatar02/Username"] = toLocaleUpperCaseResult2;
  obj5["Avatar03/Username"] = toLocaleUpperCaseResult1;
  obj5["Avatar04/Username"] = str4.toLocaleUpperCase();
  obj5.twoFriends = stateFromStores.length < 3;
  obj4.dataBinding = obj5;
  obj3.children = closure_13(require("CheckpointFriendsRive").CheckpointFriendsRive, obj4);
  const items6 = [closure_13(closure_7, obj3), , , ];
  let tmp23Result = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD_TRANSITION;
  if (tmp23Result) {
    const obj6 = { style: tmp.transition, children: null };
    const obj7 = { variant: "heading-lg/medium", children: null };
    const intl = tmp2(tmp3[23]).intl;
    obj7.children = intl.string(tmp11(tmp3[24])["6RSp5q"]);
    obj6.children = closure_13(tmp11(tmp3[22]), obj7);
    tmp23Result = closure_13(closure_7, obj6);
    const tmp11Result12 = tmp11(tmp3[22]);
  }
  items6[1] = tmp23Result;
  let tmp23Result2 = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD;
  if (tmp23Result2) {
    const obj8 = { title: null, description: null };
    const intl2 = tmp2(tmp3[23]).intl;
    obj8.title = intl2.string(tmp11(tmp3[25]).OzY5Ns);
    const intl3 = tmp2(tmp3[23]).intl;
    obj8.description = intl3.string(tmp11(tmp3[24]).EqdLDd);
    tmp23Result2 = closure_13(closure_18, obj8);
  }
  items6[2] = tmp23Result2;
  if (tmp25Result) {
    tmp25Result = null != stateFromStores1;
  }
  if (tmp25Result) {
    const obj9 = { style: tmp.sidekick, children: null };
    const obj10 = { style: tmp.sidekickDetails, children: null };
    const obj11 = { title: null, description: null };
    const intl4 = tmp2(tmp3[23]).intl;
    obj11.title = intl4.string(tmp11(tmp3[25])["+uwOHt"]);
    const intl5 = tmp2(tmp3[23]).intl;
    obj11.description = intl5.string(tmp11(tmp3[24])["/ctmGw"]);
    const items7 = [closure_13(closure_18, obj11), ];
    const obj12 = { sidekick: stateFromStores1 };
    items7[1] = closure_13(closure_19, obj12);
    obj10.children = items7;
    const items8 = [closure_14(closure_7, obj10), ];
    const obj13 = { user: stateFromStores1.user, username: str4 };
    items8[1] = closure_13(SidekickMessageInput, obj13);
    obj9.children = items8;
    tmp25Result = closure_14(closure_7, obj9);
  }
  const tmp11Result = width(height[26]);
  items6[3] = tmp25Result;
  obj2.children = items6;
  return closure_13(tmp11Result, { children: closure_14(closure_7, obj2) });
});
// === Module 12898: CheckpointFriendsStatsScreen ===

// Module 12898 (CheckpointFriendsStatsScreen)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1499 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import UserUtils from "UserUtils" /* 5015 */;
import CheckpointFriendsRive from "CheckpointFriendsRive" /* 5093 */;
import FriendsIcon from "FriendsIcon" /* 5648 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6342 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import ChatIcon from "ChatIcon" /* 8518 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10404 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11574 */;
import CheckpointTextDefault from "CheckpointText" /* 12861 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12863 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12868 */;
import useFriendsAnimationState from "useFriendsAnimationState" /* 12899 */;
import useSidekickLeave from "useSidekickLeave" /* 12900 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4967 */;
import UserStore from "UserStore" /* 1392 */;
import CheckpointStore from "CheckpointStore" /* 12843 */;

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
            const intl = tmp4(tmp40[21]).intl;
            tmp4(tmp40[34]).presentError(intl.string(tmp4(tmp40[21]).t.fEptJP));
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
    obj5.children = closure_13(user(12774).GiftIcon, obj6);
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
    obj7.children = closure_13(user(5662).SendMessageIcon, obj9);
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
const CheckpointConstants = fn(5995);
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
const createStyles = fn(4966);
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
let obj14 = { minHeight: 96, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
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
      const obj4 = { variant: "display-lg", children: tmp18 };
      const tmp23 = map1(CheckpointTextDefault, obj4);
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
  const obj6 = { variant: "display-lg", children: null };
  const stringResult = intl.string(_modDef3056.ZQakPR);
  obj6.children = title.toLocaleUpperCase();
  items1[1] = map1(CheckpointTextDefault, obj6);
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
  const cResult = c.c(70);
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
    class M {
      constructor() {
        return closure_1_8.useReducedMotion;
      }
    }
    cResult[4] = items3;
    cResult[5] = M;
    let tmp14 = M;
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
    class M {
      constructor() {
        return closure_1_8.useReducedMotion;
      }
    }
    const obj3 = { ignoreKeyboard: true };
  } else {
    const tmp20 = cResult[6];
  }
  const size = useWindowDimensionsDefault(tmp20);
  const height = size.height;
  let num8 = 0;
  const result = -height / 2;
  if (tmp19) {
    num8 = nativeDefault.space.PX_48;
  }
  const diff = result - num8;
  const sum = size.width + height;
  if (cResult[7] === diff) {
    if (cResult[8] === sum) {
      let tmp25 = cResult[9];
    }
    class M {
      constructor() {
        return closure_1_8.useReducedMotion;
      }
    }
    [tmp28, tmp29, tmp30] = tmp27;
    let str = UserUtils.useName(tmp28);
    if (str == null) {
      str = "";
    }
    if (cResult[10] !== str) {
      const toLocaleUpperCaseResult = str.toLocaleUpperCase();
      cResult[10] = str;
      class M {
        constructor() {
          return closure_1_8.useReducedMotion;
        }
      }
      cResult[11] = toLocaleUpperCaseResult;
      let tmp31 = toLocaleUpperCaseResult;
    } else {
      tmp31 = cResult[11];
    }
    const tmpResult13 = UserUtils;
    let str2 = UserUtils.useName(tmp29);
    if (str2 == null) {
      str2 = "";
    }
    if (cResult[12] !== str2) {
      const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
      cResult[12] = str2;
      class M {
        constructor() {
          return closure_1_8.useReducedMotion;
        }
      }
      cResult[13] = toLocaleUpperCaseResult1;
      let tmp33 = toLocaleUpperCaseResult1;
    } else {
      tmp33 = cResult[13];
    }
    const tmpResult14 = UserUtils;
    let str3 = UserUtils.useName(tmp30);
    if (str3 == null) {
      str3 = "";
    }
    if (cResult[14] !== str3) {
      const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
      cResult[14] = str3;
      class M {
        constructor() {
          return closure_1_8.useReducedMotion;
        }
      }
      cResult[15] = toLocaleUpperCaseResult2;
      let tmp35 = toLocaleUpperCaseResult2;
    } else {
      tmp35 = cResult[15];
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
    const tmp39 = route === CheckpointNavigation.CheckpointRoute.SIDEKICK || route === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE;
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
    if (tmp39) {
      let tmp40 = null == stateFromStores1;
    } else {
      tmp40 = 0 === stateFromStores.length;
    }
    if (tmp40) {
      if (cResult[16] !== tmp39) {
        const string = util.intl.string;
        _modDef3056;
        class M {
          constructor() {
            return closure_1_8.useReducedMotion;
          }
        }
        cResult[16] = tmp39;
        cResult[17] = tmp98;
      } else {
        if (cResult[18] !== cResult[17]) {
          { name: null }.name = tmp96;
          class M {
            constructor() {
              return closure_1_8.useReducedMotion;
            }
          }
          cResult[18] = tmp96;
          cResult[19] = tmp102;
          let tmp100 = tmp102;
          const obj4 = { name: null };
        } else {
          tmp100 = cResult[19];
        }
        return tmp100;
      }
    } else {
      if (cResult[20] === tmp25) {
        if (cResult[21] === tmp4.animation) {
          let tmp42 = cResult[22];
        }
        if (cResult[23] !== tmp28) {
          let userAvatarURL;
          if (null != tmp28) {
            const tmp21Result6 = AvatarUtilsDefault;
            class M {
              constructor() {
                return closure_1_8.useReducedMotion;
              }
            }
            userAvatarURL = tmp21Result6.getUserAvatarURL(tmp28, false, 64, "png");
          }
          class M {
            constructor() {
              return closure_1_8.useReducedMotion;
            }
          }
          cResult[24] = userAvatarURL;
          let tmp43 = userAvatarURL;
        } else {
          tmp43 = cResult[24];
        }
        if (cResult[25] !== tmp30) {
          let userAvatarURL1;
          if (null != tmp30) {
            const tmp21Result7 = AvatarUtilsDefault;
            class M {
              constructor() {
                return closure_1_8.useReducedMotion;
              }
            }
            userAvatarURL1 = tmp21Result7.getUserAvatarURL(tmp30, false, 64, "png");
          }
          class M {
            constructor() {
              return closure_1_8.useReducedMotion;
            }
          }
          cResult[26] = userAvatarURL1;
          let tmp47 = userAvatarURL1;
        } else {
          tmp47 = cResult[26];
        }
        class M {
          constructor() {
            return closure_1_8.useReducedMotion;
          }
        }
        let user1;
        if (stateFromStores1 != null) {
          user1 = stateFromStores1.user;
        }
        if (cResult[29] !== user1) {
          let userAvatarURL2;
          if (null != user1) {
            const tmp21Result8 = AvatarUtilsDefault;
            class M {
              constructor() {
                return closure_1_8.useReducedMotion;
              }
            }
            userAvatarURL2 = tmp21Result8.getUserAvatarURL(user1, false, 64, "png");
          }
          class M {
            constructor() {
              return closure_1_8.useReducedMotion;
            }
          }
          cResult[30] = userAvatarURL2;
          let tmp53 = userAvatarURL2;
        } else {
          tmp53 = cResult[30];
        }
        if (cResult[31] !== stateFromStores2) {
          let userAvatarURL3;
          if (null != stateFromStores2) {
            const tmp21Result9 = AvatarUtilsDefault;
            class M {
              constructor() {
                return closure_1_8.useReducedMotion;
              }
            }
            userAvatarURL3 = tmp21Result9.getUserAvatarURL(stateFromStores2, false, 64, "png");
          }
          class M {
            constructor() {
              return closure_1_8.useReducedMotion;
            }
          }
          cResult[32] = userAvatarURL3;
          let tmp57 = userAvatarURL3;
        } else {
          tmp57 = cResult[32];
        }
        if (cResult[33] !== str4) {
          const toLocaleUpperCaseResult3 = str4.toLocaleUpperCase();
          cResult[33] = str4;
          class M {
            constructor() {
              return closure_1_8.useReducedMotion;
            }
          }
          cResult[34] = toLocaleUpperCaseResult3;
          let tmp61 = toLocaleUpperCaseResult3;
        } else {
          tmp61 = cResult[34];
        }
        if (cResult[35] === friendsAnimationState) {
          if (cResult[36] === tmp31) {
            if (cResult[37] === tmp33) {
              if (cResult[38] === tmp43) {
                if (cResult[39] === tmp47) {
                  if (cResult[40] === tmp51) {
                    if (cResult[41] === tmp53) {
                      if (cResult[42] === tmp57) {
                        if (cResult[43] === tmp61) {
                          if (cResult[44] === tmp35) {
                            if (cResult[45] === tmp38) {
                              let tmp63 = cResult[46];
                            }
                            if (cResult[47] === str5) {
                              if (cResult[48] === tmp63) {
                                let tmp67 = cResult[49];
                              }
                              if (cResult[50] === tmp42) {
                                if (cResult[51] === tmp67) {
                                  let tmp72 = cResult[52];
                                }
                                if (cResult[53] === route) {
                                  if (cResult[54] === tmp4.transition) {
                                    let tmp75 = cResult[55];
                                  }
                                  if (cResult[56] !== route) {
                                    let tmp78 = route === CheckpointNavigation.CheckpointRoute.SQUAD;
                                    if (tmp78) {
                                      const obj5 = { title: null, description: null };
                                      class M {
                                        constructor() {
                                          return closure_1_8.useReducedMotion;
                                        }
                                      }
                                      obj5.title = obj21.string(_modDef3056.OzY5Ns);
                                      const intl = util.intl;
                                      obj5.description = intl.string(_modDef3088.EqdLDd);
                                      tmp78 = map1(closure_18, obj5);
                                    }
                                    class M {
                                      constructor() {
                                        return closure_1_8.useReducedMotion;
                                      }
                                    }
                                    cResult[57] = tmp78;
                                    let tmp77 = tmp78;
                                  } else {
                                    tmp77 = cResult[57];
                                  }
                                  if (cResult[58] === tmp39) {
                                    if (cResult[59] === stateFromStores1) {
                                      if (cResult[60] === str4) {
                                        if (cResult[61] === tmp4.sidekick) {
                                          if (cResult[62] === tmp4.sidekickDetails) {
                                            let tmp81 = cResult[63];
                                          }
                                          if (cResult[64] === tmp4.container) {
                                            if (cResult[65] === tmp72) {
                                              if (cResult[66] === tmp75) {
                                                if (cResult[67] === tmp77) {
                                                  if (cResult[68] === tmp81) {
                                                    let tmp89 = cResult[69];
                                                  }
                                                  return tmp89;
                                                }
                                              }
                                            }
                                          }
                                          class M {
                                            constructor() {
                                              return closure_1_8.useReducedMotion;
                                            }
                                          }
                                          const obj6 = { style: tmp41, children: null };
                                          const items4 = [tmp72, tmp75, tmp77, tmp81];
                                          obj6.children = items4;
                                          tmp92[0] = closure_1_14(React5, obj6);
                                          const tmp95 = map1(CheckpointScreenDefault, tmp92);
                                          cResult[64] = tmp4.container;
                                          cResult[65] = tmp72;
                                          cResult[66] = tmp75;
                                          cResult[67] = tmp77;
                                          cResult[68] = tmp81;
                                          cResult[69] = tmp95;
                                          tmp89 = tmp95;
                                          const tmp21Result10 = CheckpointScreenDefault;
                                        }
                                      }
                                    }
                                  }
                                  class M {
                                    constructor() {
                                      return closure_1_8.useReducedMotion;
                                    }
                                  }
                                  if (tmp39) {
                                    let tmp82 = null != stateFromStores1;
                                  }
                                  if (tmp82) {
                                    const obj7 = { style: null, children: null };
                                    class M {
                                      constructor() {
                                        return closure_1_8.useReducedMotion;
                                      }
                                    }
                                    const obj8 = { style: tmp4.sidekickDetails, children: null };
                                    const obj9 = { title: null, description: null };
                                    const intl2 = util.intl;
                                    obj9.title = intl2.string(_modDef3056["+uwOHt"]);
                                    const intl3 = util.intl;
                                    obj9.description = intl3.string(_modDef3088["/ctmGw"]);
                                    const items5 = [map1(closure_18, obj9), ];
                                    const obj10 = { sidekick: stateFromStores1 };
                                    items5[1] = map1(closure_19, obj10);
                                    obj8.children = items5;
                                    const items6 = [closure_1_14(React5, obj8), ];
                                    const obj11 = { user: stateFromStores1.user, username: str4 };
                                    items6[1] = map1(SidekickMessageInput, obj11);
                                    obj7.children = items6;
                                    tmp82 = closure_1_14(React5, obj7);
                                  }
                                  cResult[58] = tmp39;
                                  cResult[59] = stateFromStores1;
                                  cResult[60] = str4;
                                  cResult[61] = tmp4.sidekick;
                                  cResult[62] = tmp4.sidekickDetails;
                                  cResult[63] = tmp82;
                                  tmp81 = tmp82;
                                }
                                const tmp76 = route === CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION;
                                class M {
                                  constructor() {
                                    return closure_1_8.useReducedMotion;
                                  }
                                }
                                cResult[53] = route;
                                cResult[54] = tmp4.transition;
                                cResult[55] = tmp76;
                                tmp75 = tmp76;
                              }
                              class M {
                                constructor() {
                                  return closure_1_8.useReducedMotion;
                                }
                              }
                              const obj12 = { style: tmp42, pointerEvents: "none", children: tmp67 };
                              const tmp74 = map1(React5, obj12);
                              cResult[50] = tmp42;
                              cResult[51] = tmp67;
                              cResult[52] = tmp74;
                              tmp72 = tmp74;
                            }
                            class M {
                              constructor() {
                                return closure_1_8.useReducedMotion;
                              }
                            }
                            tmp69[0] = obj2;
                            tmp69[1] = str5;
                            tmp69[2] = tmp63;
                            const tmp71 = map1(CheckpointFriendsRive.CheckpointFriendsRive, tmp69);
                            cResult[47] = str5;
                            cResult[48] = tmp63;
                            cResult[49] = tmp71;
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
        const obj13 = {};
        const merged = Object.assign(closure_15);
        obj13.AnimationState = friendsAnimationState;
        obj13["Avatar01/img"] = tmp43;
        obj13["Avatar02/img"] = tmp47;
        obj13["Avatar03/img"] = tmp51;
        obj13["Avatar04/img"] = tmp53;
        obj13["Avatar05/img"] = tmp57;
        obj13["Avatar01/Username"] = tmp31;
        obj13["Avatar02/Username"] = tmp35;
        obj13["Avatar03/Username"] = tmp33;
        obj13["Avatar04/Username"] = tmp61;
        obj13.twoFriends = tmp38;
        cResult[35] = friendsAnimationState;
        cResult[36] = tmp31;
        cResult[37] = tmp33;
        cResult[38] = tmp43;
        cResult[39] = tmp47;
        cResult[40] = tmp51;
        cResult[41] = tmp53;
        cResult[42] = tmp57;
        cResult[43] = tmp61;
        cResult[44] = tmp35;
        cResult[45] = tmp38;
        cResult[46] = obj13;
        tmp63 = obj13;
      }
      const items7 = [tmp4.animation, ];
      class M {
        constructor() {
          return closure_1_8.useReducedMotion;
        }
      }
      cResult[20] = tmp25;
      cResult[21] = tmp4.animation;
      cResult[22] = items7;
      tmp42 = items7;
    }
    const tmpResult16 = UserUtils;
  }
  const obj14 = { top: diff, height: sum };
  cResult[7] = diff;
  cResult[8] = sum;
  cResult[9] = obj14;
  tmp25 = obj14;
  tmp19 = friendsAnimationState === useFriendsAnimationState.FriendsAnimationState.BEST || friendsAnimationState === useFriendsAnimationState.FriendsAnimationState.LEAVE;
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
  const tmp22 = route === require("CheckpointNavigation").CheckpointRoute.SIDEKICK || route === require("CheckpointNavigation").CheckpointRoute.SIDEKICK_LEAVE;
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
  if (tmp22) {
    let tmp23 = null == stateFromStores1;
  } else {
    tmp23 = 0 === stateFromStores.length;
  }
  if (tmp23) {
    const intl6 = tmp2(tmp3[21]).intl;
    tmp11(tmp3[22]);
    const tmp11Result9 = { name: null };
    tmp11Result9.name = intl6.string(tmp22 ? tmp11Result9["+uwOHt"] : tmp11Result9.OzY5Ns);
    closure_13(tmp11(tmp3[23]), tmp11Result9);
    const tmp11Result = tmp11(tmp3[23]);
    const tmp57 = tmp22 ? tmp11Result9["+uwOHt"] : tmp11Result9.OzY5Ns;
  } else {
    obj2 = { style: tmp.container, children: null };
    const obj3 = { style: null, pointerEvents: "none", children: null };
    const items5 = [tmp.animation, memo];
    obj3.style = items5;
    const obj4 = { referencedAssets: obj2, defaultViewModelInstance: str5, dataBinding: null };
    const obj5 = {};
    const merged = Object.assign(closure_15);
    obj5.AnimationState = friendsAnimationState;
    let userAvatarURL;
    if (null != tmp14) {
      const tmp11Result11 = tmp11(tmp3[12]);
      userAvatarURL = tmp11Result11.getUserAvatarURL(tmp14, false, 64, "png");
    }
    obj5["Avatar01/img"] = userAvatarURL;
    let userAvatarURL1;
    if (null != tmp16) {
      const tmp11Result12 = tmp11(tmp3[12]);
      userAvatarURL1 = tmp11Result12.getUserAvatarURL(tmp16, false, 64, "png");
    }
    obj5["Avatar02/img"] = userAvatarURL1;
    let userAvatarURL2;
    if (null != tmp15) {
      const tmp11Result13 = tmp11(tmp3[12]);
      userAvatarURL2 = tmp11Result13.getUserAvatarURL(tmp15, false, 64, "png");
    }
    obj5["Avatar03/img"] = userAvatarURL2;
    let user1;
    if (stateFromStores1 != null) {
      user1 = stateFromStores1.user;
    }
    let userAvatarURL3;
    if (null != user1) {
      const tmp11Result14 = tmp11(tmp3[12]);
      userAvatarURL3 = tmp11Result14.getUserAvatarURL(user1, false, 64, "png");
    }
    obj5["Avatar04/img"] = userAvatarURL3;
    let userAvatarURL4;
    if (null != stateFromStores2) {
      const tmp11Result15 = tmp11(tmp3[12]);
      userAvatarURL4 = tmp11Result15.getUserAvatarURL(stateFromStores2, false, 64, "png");
    }
    obj5["Avatar05/img"] = userAvatarURL4;
    obj5["Avatar01/Username"] = toLocaleUpperCaseResult;
    obj5["Avatar02/Username"] = toLocaleUpperCaseResult2;
    obj5["Avatar03/Username"] = toLocaleUpperCaseResult1;
    obj5["Avatar04/Username"] = str4.toLocaleUpperCase();
    obj5.twoFriends = tmp21;
    obj4.dataBinding = obj5;
    obj3.children = closure_13(tmp2(tmp3[24]).CheckpointFriendsRive, obj4);
    const items6 = [closure_13(closure_7, obj3), , , ];
    let tmp24Result3 = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD_TRANSITION;
    if (tmp24Result3) {
      const obj6 = { style: tmp.transition, children: null };
      const obj7 = { variant: "heading-lg/medium", children: null };
      const intl = tmp2(tmp3[21]).intl;
      obj7.children = intl.string(tmp11(tmp3[26])["6RSp5q"]);
      obj6.children = closure_13(tmp11(tmp3[25]), obj7);
      tmp24Result3 = closure_13(closure_7, obj6);
      const tmp11Result16 = tmp11(tmp3[25]);
    }
    items6[1] = tmp24Result3;
    let tmp24Result4 = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD;
    if (tmp24Result4) {
      const obj8 = { title: null, description: null };
      const intl2 = tmp2(tmp3[21]).intl;
      obj8.title = intl2.string(tmp11(tmp3[22]).OzY5Ns);
      const intl3 = tmp2(tmp3[21]).intl;
      obj8.description = intl3.string(tmp11(tmp3[26]).EqdLDd);
      tmp24Result4 = closure_13(closure_18, obj8);
    }
    items6[2] = tmp24Result4;
    let tmp26Result = tmp22;
    if (tmp22) {
      tmp26Result = null != stateFromStores1;
    }
    if (tmp26Result) {
      const obj9 = { style: tmp.sidekick, children: null };
      const obj10 = { style: tmp.sidekickDetails, children: null };
      const obj11 = { title: null, description: null };
      const intl4 = tmp2(tmp3[21]).intl;
      obj11.title = intl4.string(tmp11(tmp3[22])["+uwOHt"]);
      const intl5 = tmp2(tmp3[21]).intl;
      obj11.description = intl5.string(tmp11(tmp3[26])["/ctmGw"]);
      const items7 = [closure_13(closure_18, obj11), ];
      const obj12 = { sidekick: stateFromStores1 };
      items7[1] = closure_13(closure_19, obj12);
      obj10.children = items7;
      const items8 = [closure_14(closure_7, obj10), ];
      const obj13 = { user: stateFromStores1.user, username: str4 };
      items8[1] = closure_13(SidekickMessageInput, obj13);
      obj9.children = items8;
      tmp26Result = closure_14(closure_7, obj9);
    }
    const obj14 = { children: null };
    items6[3] = tmp26Result;
    obj2.children = items6;
    obj14.children = closure_14(closure_7, obj2);
    return closure_13(tmp11(tmp3[27]), obj14);
  }
  const tmp2Result16 = require("UserUtils");
});
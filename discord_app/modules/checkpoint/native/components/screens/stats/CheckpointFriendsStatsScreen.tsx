// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3109 from "../../../../Checkpoint.messages.js";
import FriendsIcon from "../../../../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import AnalyticsLocationDefault from "../../../../../app_analytics/AnalyticsLocation.tsx";
import ChatIcon from "../../../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import utils_openGiftModal from "../../../../../premium/native/utils/openGiftModal.tsx";
import MicrophoneIcon from "../../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import CheckpointNavigation from "../../../../CheckpointNavigation.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointStatNumberDefault from "../../CheckpointStatNumber.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import CheckpointStore from "../../../../CheckpointStore.tsx";

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
            const obj6 = { value: tmp4(tmp40[31]).sendSidekickMessage(importDefault, id.id), done: false };
            return obj6;
          } else {
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const intl = tmp4(tmp40[19]).intl;
            tmp4(tmp40[32]).presentError(intl.string(tmp4(tmp40[19]).t.fEptJP));
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
  const tmp = closure_18();
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
    obj5.children = closure_13(user(12673).GiftIcon, obj6);
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
    obj7.children = closure_13(user(5139).SendMessageIcon, obj9);
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
const CheckpointConstants = fn(5537);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const constants = { START: 0, [0]: "START", INTRO: 1, [1]: "INTRO", TRANSITION: 2, [2]: "TRANSITION", BEST: 3, [3]: "BEST", LEAVE: 4, [4]: "LEAVE", END: 5, [5]: "END" };
let closure_16 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
const PlatformUtils = fn(1385);
let tmp5;
if (PlatformUtils.isIOS()) {
  let obj2 = { "unifont-17.0.03": null };
  let obj3 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  obj2["unifont-17.0.03"] = obj3;
  tmp5 = obj2;
}
obj2 = tmp5;
const createStyles = fn(5191);
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
let closure_18 = createStyles.createStyles(obj5);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendsAnimationState(route, arg1) {
  const cResult = c.c(6);
  const tmp4 = route === CheckpointNavigation.CheckpointRoute.SQUAD;
  if (cResult[0] === route) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    [first] = noop.useState(tmp5);
    closure_1 = tmp10;
    if (first.route !== route) {
      obj2 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: null };
      let tmp12 = !arg1;
      if (!arg1) {
        tmp12 = first.route === CheckpointNavigation.CheckpointRoute.SQUAD;
      }
      if (tmp12) {
        tmp12 = route === CheckpointNavigation.CheckpointRoute.SIDEKICK;
      }
      obj2.isTransitioning = tmp12;
      tmp10(obj2);
      const tmp11 = first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
    }
    if (cResult[3] !== first.isTransitioning) {
      const fn = function h() {
        if (isTransitioning.isTransitioning) {
          const _setTimeout = setTimeout;
          isTransitioning = setTimeout(() => closure_1_1((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.isTransitioning = false;
            return obj;
          }), 1500);
          return () => clearTimeout(closure_0);
        }
      };
      const items = [first.isTransitioning];
      cResult[3] = first.isTransitioning;
      cResult[4] = fn;
      cResult[5] = items;
      let tmp15 = items;
      let tmp14 = fn;
    } else {
      tmp14 = cResult[4];
      tmp15 = cResult[5];
    }
    const effect = noop.useEffect(tmp14, tmp15);
    if (CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION === route) {
      return first.hasShownSquad ? constants.END : constants.START;
    } else if (CheckpointNavigation.CheckpointRoute.SQUAD === route) {
      return constants.INTRO;
    } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK === route) {
      return first.isTransitioning ? constants.TRANSITION : constants.BEST;
    } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE === route) {
      return arg1 ? constants.BEST : constants.LEAVE;
    } else {
      return constants.START;
    }
  }
  const obj4 = { route, hasShownSquad: tmp4, isTransitioning: false };
  cResult[0] = route;
  cResult[1] = tmp4;
  cResult[2] = obj4;
  tmp5 = obj4;
}) : (function useFriendsAnimationState(route, arg1) {
  [first] = noop.useState({ route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false });
  closure_1 = tmp5;
  if (first.route !== route) {
    const obj3 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: null };
    let tmp7 = !arg1;
    if (!arg1) {
      tmp7 = first.route === CheckpointNavigation.CheckpointRoute.SQUAD;
    }
    if (tmp7) {
      tmp7 = route === CheckpointNavigation.CheckpointRoute.SIDEKICK;
    }
    obj3.isTransitioning = tmp7;
    tmp5(obj3);
    const tmp6 = first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
  }
  const items = [first.isTransitioning];
  const effect = noop.useEffect(() => {
    if (isTransitioning.isTransitioning) {
      const _setTimeout = setTimeout;
      isTransitioning = setTimeout(() => closure_1_1((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.isTransitioning = false;
        return obj;
      }), 1500);
      return () => clearTimeout(closure_0);
    }
  }, items);
  if (CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION === route) {
    return first.hasShownSquad ? constants.END : constants.START;
  } else if (CheckpointNavigation.CheckpointRoute.SQUAD === route) {
    return constants.INTRO;
  } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK === route) {
    return first.isTransitioning ? constants.TRANSITION : constants.BEST;
  } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE === route) {
    return arg1 ? constants.BEST : constants.LEAVE;
  } else {
    return constants.START;
  }
  obj2 = { route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false };
});
fn(558);
let obj15 = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_12 };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function FriendsHeader(arg0) {
  const cResult = c.c(21);
  ({ title, description } = arg0);
  const tmp4 = closure_18();
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
    const toLocaleUpperCaseResult = intl.string(_modDef3109.ZQakPR).toLocaleUpperCase();
    cResult[1] = toLocaleUpperCaseResult;
    let tmp9 = toLocaleUpperCaseResult;
    const stringResult = intl.string(_modDef3109.ZQakPR);
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
  const tmp = closure_18();
  const obj = { style: tmp.header, children: null };
  obj2 = { style: tmp.heading, children: null };
  const obj3 = { style: tmp.title, children: null };
  const items = [map1(FriendsIcon.FriendsIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj5 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const intl = util.intl;
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp2 = CheckpointTextDefault;
  obj5.children = intl.string(_modDef3109.ZQakPR).toLocaleUpperCase();
  items[1] = map1(tmp2, obj5);
  obj3.children = items;
  const items1 = [closure_1_14(React5, obj3), ];
  const obj6 = { variant: "display-lg", children: null };
  const stringResult = intl.string(_modDef3109.ZQakPR);
  obj6.children = title.toLocaleUpperCase();
  items1[1] = map1(CheckpointTextDefault, obj6);
  obj2.children = items1;
  const items2 = [closure_1_14(React5, obj2), map1(CheckpointTextDefault, { variant: "heading-lg/medium", children: children.description })];
  obj.children = items2;
  return closure_1_14(React5, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function SidekickStats(sidekick) {
  const cResult = c.c(35);
  stats = sidekick.sidekick;
  const tmp4 = closure_18();
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
  const stringResult = intl.string(_modDef3109.wWKySP);
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
  formatToPlainStringResult = intl2.formatToPlainString(_modDef3109.UZbUtl, { numMinutes: rounded1 });
}) : (function SidekickStats(sidekick) {
  sidekick = sidekick.sidekick;
  const tmp = closure_18();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const intl = util.intl;
  const intl2 = util.intl;
  const stringResult = intl.string(_modDef3109.wWKySP);
  const obj = { style: tmp.stats, children: null };
  obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.stat, children: null };
  const items = [map1(ChatIcon.ChatIcon, { size: "md", color: CHECKPOINT_PRIMARY }), map1(CheckpointStatNumberDefault, { value: rounded })];
  obj2.children = items;
  const items1 = [closure_1_14(React5, obj2), ];
  const obj4 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + intl2.formatToPlainString(_modDef3109.UZbUtl, { numMinutes: rounded1 }).toLocaleLowerCase(), style: tmp.stat, children: null };
  const items2 = [map1(MicrophoneIcon.MicrophoneIcon, { size: "md", color: CHECKPOINT_PRIMARY }), map1(CheckpointStatNumberDefault, { value: rounded1 })];
  obj4.children = items2;
  items1[1] = closure_1_14(React5, obj4);
  obj.children = items1;
  return closure_1_14(React5, obj);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointFriendsStatsScreen(route) {
  const cResult = route(onPreviousStep[13]).c(76);
  route = route.route;
  const onNextStep = route.onNextStep;
  onPreviousStep = route.onPreviousStep;
  const tmp4 = closure_18();
  obj2 = route(onPreviousStep[16]);
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
    const fn = function l() {
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
  const obj = route(onPreviousStep[13]);
  const stateFromStores1 = route(onPreviousStep[16]).useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class N {
      constructor() {
        return closure_1_9.getCurrentUser();
      }
    }
    cResult[2] = items2;
    cResult[3] = N;
    let tmp10 = N;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = route(onPreviousStep[16]);
  const stateFromStores2 = route(onPreviousStep[16]).useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    class P {
      constructor() {
        return closure_1_8.useReducedMotion;
      }
    }
    cResult[4] = items3;
    cResult[5] = P;
    let tmp14 = P;
    let tmp13 = items3;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult7 = route(onPreviousStep[16]);
  const stateFromStores3 = route(onPreviousStep[16]).useStateFromStores(tmp13, tmp14);
  const tmpResult8 = route(onPreviousStep[16]);
  const tmp17 = closure_19(route, stateFromStores3);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[6] = { ignoreKeyboard: true };
    class P {
      constructor() {
        return closure_1_8.useReducedMotion;
      }
    }
    const obj3 = { ignoreKeyboard: true };
  } else {
    const tmp19 = cResult[6];
  }
  const size = onNextStep(tmp2[17])(tmp19);
  const height = size.height;
  let num8 = 0;
  const result = -height / 2;
  if (tmp18) {
    num8 = tmp20(tmp2[11]).space.PX_48;
  }
  const diff = result - num8;
  const sum = size.width + height;
  if (cResult[7] === diff) {
    if (cResult[8] === sum) {
      let tmp24 = cResult[9];
    }
    class P {
      constructor() {
        return closure_1_8.useReducedMotion;
      }
    }
    [tmp27, tmp28, tmp29] = tmp26;
    let str = tmp(tmp2[18]).useName(tmp27);
    if (str == null) {
      str = "";
    }
    if (cResult[10] !== str) {
      const toLocaleUpperCaseResult = str.toLocaleUpperCase();
      cResult[10] = str;
      class P {
        constructor() {
          return closure_1_8.useReducedMotion;
        }
      }
      cResult[11] = toLocaleUpperCaseResult;
      let tmp30 = toLocaleUpperCaseResult;
    } else {
      tmp30 = cResult[11];
    }
    const tmpResult9 = tmp(tmp2[18]);
    let str2 = tmp(tmp2[18]).useName(tmp28);
    if (str2 == null) {
      str2 = "";
    }
    if (cResult[12] !== str2) {
      const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
      cResult[12] = str2;
      class P {
        constructor() {
          return closure_1_8.useReducedMotion;
        }
      }
      cResult[13] = toLocaleUpperCaseResult1;
      let tmp32 = toLocaleUpperCaseResult1;
    } else {
      tmp32 = cResult[13];
    }
    const tmpResult10 = tmp(tmp2[18]);
    let str3 = tmp(tmp2[18]).useName(tmp29);
    if (str3 == null) {
      str3 = "";
    }
    if (cResult[14] !== str3) {
      const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
      cResult[14] = str3;
      class P {
        constructor() {
          return closure_1_8.useReducedMotion;
        }
      }
      cResult[15] = toLocaleUpperCaseResult2;
      let tmp34 = toLocaleUpperCaseResult2;
    } else {
      tmp34 = cResult[15];
    }
    const tmpResult11 = tmp(tmp2[18]);
    let user;
    if (stateFromStores1 != null) {
      user = stateFromStores1.user;
    }
    let str4 = tmp(tmp2[18]).useName(user);
    if (str4 == null) {
      str4 = "";
    }
    const tmp38 = route === tmp(tmp2[14]).CheckpointRoute.SIDEKICK || route === tmp(tmp2[14]).CheckpointRoute.SIDEKICK_LEAVE;
    if (tmp38) {
      let tmp39 = null == stateFromStores1;
    } else {
      tmp39 = 0 === stateFromStores.length;
    }
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
    if (cResult[16] === onNextStep) {
      if (cResult[17] === onPreviousStep) {
        if (cResult[18] === stateFromStores3) {
          if (cResult[19] === route) {
            let tmp40 = cResult[20];
            let tmp41 = cResult[21];
          }
          const effect = noop.useEffect(tmp40, tmp41);
          if (tmp39) {
            if (cResult[22] !== tmp38) {
              const string = tmp(tmp2[19]).intl.string;
              tmp20(tmp2[20]);
              class P {
                constructor() {
                  return closure_1_8.useReducedMotion;
                }
              }
              cResult[22] = tmp38;
              cResult[23] = tmp100;
            } else {
              if (cResult[24] !== cResult[23]) {
                { name: null }.name = tmp98;
                class P {
                  constructor() {
                    return closure_1_8.useReducedMotion;
                  }
                }
                cResult[24] = tmp98;
                cResult[25] = tmp104;
                let tmp102 = tmp104;
                const obj4 = { name: null };
              } else {
                tmp102 = cResult[25];
              }
              return tmp102;
            }
          } else {
            if (cResult[26] === tmp24) {
              if (cResult[27] === tmp4.animation) {
                let tmp44 = cResult[28];
              }
              if (cResult[29] !== tmp27) {
                let userAvatarURL;
                if (null != tmp27) {
                  const tmp20Result6 = tmp20(tmp2[15]);
                  class P {
                    constructor() {
                      return closure_1_8.useReducedMotion;
                    }
                  }
                  userAvatarURL = tmp20Result6.getUserAvatarURL(tmp27, false, 64, "png");
                }
                class P {
                  constructor() {
                    return closure_1_8.useReducedMotion;
                  }
                }
                cResult[30] = userAvatarURL;
                let tmp45 = userAvatarURL;
              } else {
                tmp45 = cResult[30];
              }
              if (cResult[31] !== tmp29) {
                let userAvatarURL1;
                if (null != tmp29) {
                  const tmp20Result7 = tmp20(tmp2[15]);
                  class P {
                    constructor() {
                      return closure_1_8.useReducedMotion;
                    }
                  }
                  userAvatarURL1 = tmp20Result7.getUserAvatarURL(tmp29, false, 64, "png");
                }
                class P {
                  constructor() {
                    return closure_1_8.useReducedMotion;
                  }
                }
                cResult[32] = userAvatarURL1;
                let tmp49 = userAvatarURL1;
              } else {
                tmp49 = cResult[32];
              }
              class P {
                constructor() {
                  return closure_1_8.useReducedMotion;
                }
              }
              let user1;
              if (stateFromStores1 != null) {
                user1 = stateFromStores1.user;
              }
              if (cResult[35] !== user1) {
                let userAvatarURL2;
                if (null != user1) {
                  const tmp20Result8 = tmp20(tmp2[15]);
                  class P {
                    constructor() {
                      return closure_1_8.useReducedMotion;
                    }
                  }
                  userAvatarURL2 = tmp20Result8.getUserAvatarURL(user1, false, 64, "png");
                }
                class P {
                  constructor() {
                    return closure_1_8.useReducedMotion;
                  }
                }
                cResult[36] = userAvatarURL2;
                let tmp55 = userAvatarURL2;
              } else {
                tmp55 = cResult[36];
              }
              if (cResult[37] !== stateFromStores2) {
                let userAvatarURL3;
                if (null != stateFromStores2) {
                  const tmp20Result9 = tmp20(tmp2[15]);
                  class P {
                    constructor() {
                      return closure_1_8.useReducedMotion;
                    }
                  }
                  userAvatarURL3 = tmp20Result9.getUserAvatarURL(stateFromStores2, false, 64, "png");
                }
                class P {
                  constructor() {
                    return closure_1_8.useReducedMotion;
                  }
                }
                cResult[38] = userAvatarURL3;
                let tmp59 = userAvatarURL3;
              } else {
                tmp59 = cResult[38];
              }
              if (cResult[39] !== str4) {
                const toLocaleUpperCaseResult3 = str4.toLocaleUpperCase();
                cResult[39] = str4;
                class P {
                  constructor() {
                    return closure_1_8.useReducedMotion;
                  }
                }
                cResult[40] = toLocaleUpperCaseResult3;
                let tmp63 = toLocaleUpperCaseResult3;
              } else {
                tmp63 = cResult[40];
              }
              if (cResult[41] === tmp17) {
                if (cResult[42] === tmp30) {
                  if (cResult[43] === tmp32) {
                    if (cResult[44] === tmp45) {
                      if (cResult[45] === tmp49) {
                        if (cResult[46] === tmp53) {
                          if (cResult[47] === tmp55) {
                            if (cResult[48] === tmp59) {
                              if (cResult[49] === tmp63) {
                                if (cResult[50] === tmp34) {
                                  if (cResult[51] === tmp37) {
                                    let tmp65 = cResult[52];
                                  }
                                  if (cResult[53] === str5) {
                                    if (cResult[54] === tmp65) {
                                      let tmp69 = cResult[55];
                                    }
                                    if (cResult[56] === tmp44) {
                                      if (cResult[57] === tmp69) {
                                        let tmp74 = cResult[58];
                                      }
                                      if (cResult[59] === route) {
                                        if (cResult[60] === tmp4.transition) {
                                          let tmp77 = cResult[61];
                                        }
                                        if (cResult[62] !== route) {
                                          let tmp80 = route === tmp(tmp2[14]).CheckpointRoute.SQUAD;
                                          if (tmp80) {
                                            const obj5 = { title: null, description: null };
                                            class P {
                                              constructor() {
                                                return closure_1_8.useReducedMotion;
                                              }
                                            }
                                            obj5.title = obj20.string(tmp20(tmp2[20]).OzY5Ns);
                                            const intl = tmp(tmp2[19]).intl;
                                            obj5.description = intl.string(tmp20(tmp2[24]).EqdLDd);
                                            tmp80 = closure_13(closure_20, obj5);
                                          }
                                          class P {
                                            constructor() {
                                              return closure_1_8.useReducedMotion;
                                            }
                                          }
                                          cResult[63] = tmp80;
                                          let tmp79 = tmp80;
                                        } else {
                                          tmp79 = cResult[63];
                                        }
                                        if (cResult[64] === tmp38) {
                                          if (cResult[65] === stateFromStores1) {
                                            if (cResult[66] === str4) {
                                              if (cResult[67] === tmp4.sidekick) {
                                                if (cResult[68] === tmp4.sidekickDetails) {
                                                  let tmp83 = cResult[69];
                                                }
                                                if (cResult[70] === tmp4.container) {
                                                  if (cResult[71] === tmp74) {
                                                    if (cResult[72] === tmp77) {
                                                      if (cResult[73] === tmp79) {
                                                        if (cResult[74] === tmp83) {
                                                          let tmp91 = cResult[75];
                                                        }
                                                        return tmp91;
                                                      }
                                                    }
                                                  }
                                                }
                                                class P {
                                                  constructor() {
                                                    return closure_1_8.useReducedMotion;
                                                  }
                                                }
                                                const obj7 = { style: tmp43, children: null };
                                                const items4 = [tmp74, tmp77, tmp79, tmp83];
                                                obj7.children = items4;
                                                tmp94[0] = closure_14(closure_7, obj7);
                                                const tmp97 = closure_13(tmp20(tmp2[25]), tmp94);
                                                cResult[70] = tmp4.container;
                                                cResult[71] = tmp74;
                                                cResult[72] = tmp77;
                                                cResult[73] = tmp79;
                                                cResult[74] = tmp83;
                                                cResult[75] = tmp97;
                                                tmp91 = tmp97;
                                                const tmp20Result10 = tmp20(tmp2[25]);
                                              }
                                            }
                                          }
                                        }
                                        class P {
                                          constructor() {
                                            return closure_1_8.useReducedMotion;
                                          }
                                        }
                                        if (tmp38) {
                                          let tmp84 = null != stateFromStores1;
                                        }
                                        if (tmp84) {
                                          const obj8 = { style: null, children: null };
                                          class P {
                                            constructor() {
                                              return closure_1_8.useReducedMotion;
                                            }
                                          }
                                          const obj9 = { style: tmp4.sidekickDetails, children: null };
                                          const obj10 = { title: null, description: null };
                                          const intl2 = tmp(tmp2[19]).intl;
                                          obj10.title = intl2.string(tmp20(tmp2[20])["+uwOHt"]);
                                          const intl3 = tmp(tmp2[19]).intl;
                                          obj10.description = intl3.string(tmp20(tmp2[24])["/ctmGw"]);
                                          const items5 = [closure_13(closure_20, obj10), ];
                                          const obj11 = { sidekick: stateFromStores1 };
                                          items5[1] = closure_13(closure_21, obj11);
                                          obj9.children = items5;
                                          const items6 = [closure_14(closure_7, obj9), ];
                                          const obj12 = { user: stateFromStores1.user, username: str4 };
                                          items6[1] = closure_13(SidekickMessageInput, obj12);
                                          obj8.children = items6;
                                          tmp84 = closure_14(closure_7, obj8);
                                        }
                                        cResult[64] = tmp38;
                                        cResult[65] = stateFromStores1;
                                        cResult[66] = str4;
                                        cResult[67] = tmp4.sidekick;
                                        cResult[68] = tmp4.sidekickDetails;
                                        cResult[69] = tmp84;
                                        tmp83 = tmp84;
                                      }
                                      const tmp78 = route === tmp(tmp2[14]).CheckpointRoute.SQUAD_TRANSITION;
                                      class P {
                                        constructor() {
                                          return closure_1_8.useReducedMotion;
                                        }
                                      }
                                      cResult[59] = route;
                                      cResult[60] = tmp4.transition;
                                      cResult[61] = tmp78;
                                      tmp77 = tmp78;
                                    }
                                    class P {
                                      constructor() {
                                        return closure_1_8.useReducedMotion;
                                      }
                                    }
                                    const obj13 = { style: tmp44, pointerEvents: "none", children: tmp69 };
                                    const tmp76 = closure_13(closure_7, obj13);
                                    cResult[56] = tmp44;
                                    cResult[57] = tmp69;
                                    cResult[58] = tmp76;
                                    tmp74 = tmp76;
                                  }
                                  class P {
                                    constructor() {
                                      return closure_1_8.useReducedMotion;
                                    }
                                  }
                                  tmp71[0] = obj2;
                                  tmp71[1] = str5;
                                  tmp71[2] = tmp65;
                                  const tmp73 = closure_13(tmp(tmp2[22]).CheckpointFriendsRive, tmp71);
                                  cResult[53] = str5;
                                  cResult[54] = tmp65;
                                  cResult[55] = tmp73;
                                  tmp69 = tmp73;
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
              const obj14 = {};
              const merged = Object.assign(closure_16);
              obj14.AnimationState = tmp17;
              obj14["Avatar01/img"] = tmp45;
              obj14["Avatar02/img"] = tmp49;
              obj14["Avatar03/img"] = tmp53;
              obj14["Avatar04/img"] = tmp55;
              obj14["Avatar05/img"] = tmp59;
              obj14["Avatar01/Username"] = tmp30;
              obj14["Avatar02/Username"] = tmp34;
              obj14["Avatar03/Username"] = tmp32;
              obj14["Avatar04/Username"] = tmp63;
              obj14.twoFriends = tmp37;
              cResult[41] = tmp17;
              cResult[42] = tmp30;
              cResult[43] = tmp32;
              cResult[44] = tmp45;
              cResult[45] = tmp49;
              cResult[46] = tmp53;
              cResult[47] = tmp55;
              cResult[48] = tmp59;
              cResult[49] = tmp63;
              cResult[50] = tmp34;
              cResult[51] = tmp37;
              cResult[52] = obj14;
              tmp65 = obj14;
            }
            const items7 = [tmp4.animation, ];
            class P {
              constructor() {
                return closure_1_8.useReducedMotion;
              }
            }
            cResult[26] = tmp24;
            cResult[27] = tmp4.animation;
            cResult[28] = items7;
            tmp44 = items7;
          }
        }
      }
    }
    function oe() {
      if (route === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
        if (ref.current) {
          onPreviousStep();
        } else if (stateFromStores3) {
          onNextStep();
        } else {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(onNextStep, 1000);
          return () => clearTimeout(closure_0);
        }
      } else {
        ref.current = false;
      }
    }
    const items8 = [onNextStep, onPreviousStep, stateFromStores3, route];
    cResult[16] = onNextStep;
    cResult[17] = onPreviousStep;
    cResult[18] = stateFromStores3;
    cResult[19] = route;
    cResult[20] = oe;
    cResult[21] = items8;
    tmp41 = items8;
    tmp40 = oe;
    const tmpResult12 = tmp(tmp2[18]);
  }
  const obj15 = { top: diff, height: sum };
  cResult[7] = diff;
  cResult[8] = sum;
  cResult[9] = obj15;
  tmp24 = obj15;
  const ref = noop.useRef(true);
  tmp18 = tmp17 === constants.BEST || tmp17 === constants.LEAVE;
}) : (function CheckpointFriendsStatsScreen(route) {
  route = route.route;
  const onNextStep = route.onNextStep;
  const onPreviousStep = route.onPreviousStep;
  let stateFromStores3;
  _slicedToArray = undefined;
  noop = undefined;
  let width;
  let height;
  const tmp = closure_18();
  const items = [CheckpointStore];
  let stateFromStores = route(onPreviousStep[16]).useStateFromStores(items, () => {
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
  const obj = route(onPreviousStep[16]);
  const items1 = [CheckpointStore];
  const stateFromStores1 = route(onPreviousStep[16]).useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let sidekick;
    if (stats != null) {
      sidekick = stats.sidekick;
    }
    return sidekick;
  });
  const tmp2Result = route(onPreviousStep[16]);
  const items2 = [UserStore];
  const stateFromStores2 = route(onPreviousStep[16]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp2Result7 = route(onPreviousStep[16]);
  const items3 = [AccessibilityStore];
  stateFromStores3 = route(onPreviousStep[16]).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  _slicedToArray = noop.useRef(true);
  const tmp8 = closure_19(route, stateFromStores3);
  noop = tmp9;
  const size = onNextStep(tmp3[17])({ ignoreKeyboard: true });
  width = size.width;
  height = size.height;
  const items4 = [tmp8 === constants.BEST || tmp8 === constants.LEAVE, height, width];
  const memo = obj5.useMemo(() => {
    let num = 0;
    const result = -height / 2;
    if (closure_5) {
      num = nativeDefault.space.PX_48;
    }
    return { top: result - num, height: width + height };
  }, items4);
  const tmp2Result8 = route(onPreviousStep[16]);
  [tmp13, tmp14, tmp15] = stateFromStores;
  const tmp12 = _slicedToArray(stateFromStores, 3);
  let str = route(onPreviousStep[18]).useName(tmp13);
  if (str == null) {
    str = "";
  }
  const tmp2Result9 = route(onPreviousStep[18]);
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  let str2 = route(onPreviousStep[18]).useName(tmp14);
  if (str2 == null) {
    str2 = "";
  }
  const tmp2Result10 = route(onPreviousStep[18]);
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  let str3 = route(onPreviousStep[18]).useName(tmp15);
  if (str3 == null) {
    str3 = "";
  }
  const tmp2Result11 = route(onPreviousStep[18]);
  const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
  let user;
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str4 = route(onPreviousStep[18]).useName(user);
  if (str4 == null) {
    str4 = "";
  }
  const tmp21 = route === route(onPreviousStep[14]).CheckpointRoute.SIDEKICK || route === route(onPreviousStep[14]).CheckpointRoute.SIDEKICK_LEAVE;
  if (tmp21) {
    let tmp22 = null == stateFromStores1;
  } else {
    tmp22 = 0 === stateFromStores.length;
  }
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
  const items5 = [onNextStep, onPreviousStep, stateFromStores3, route];
  const effect = obj5.useEffect(() => {
    if (route === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        onPreviousStep();
      } else if (stateFromStores3) {
        onNextStep();
      } else {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(onNextStep, 1000);
        return () => clearTimeout(closure_0);
      }
    } else {
      ref.current = false;
    }
  }, items5);
  if (tmp22) {
    const intl6 = tmp2(tmp3[19]).intl;
    tmp10(tmp3[20]);
    const tmp10Result9 = { name: null };
    tmp10Result9.name = intl6.string(tmp21 ? tmp10Result9["+uwOHt"] : tmp10Result9.OzY5Ns);
    closure_13(tmp10(tmp3[21]), tmp10Result9);
    const tmp10Result = tmp10(tmp3[21]);
    const tmp57 = tmp21 ? tmp10Result9["+uwOHt"] : tmp10Result9.OzY5Ns;
  } else {
    obj2 = { style: tmp.container, children: null };
    const obj3 = { style: null, pointerEvents: "none", children: null };
    const items6 = [tmp.animation, memo];
    obj3.style = items6;
    const obj4 = { referencedAssets: obj2, defaultViewModelInstance: str5, dataBinding: null };
    const obj6 = {};
    const merged = Object.assign(closure_16);
    obj6.AnimationState = tmp8;
    let userAvatarURL;
    if (null != tmp13) {
      const tmp10Result11 = tmp10(tmp3[15]);
      userAvatarURL = tmp10Result11.getUserAvatarURL(tmp13, false, 64, "png");
    }
    obj6["Avatar01/img"] = userAvatarURL;
    let userAvatarURL1;
    if (null != tmp15) {
      const tmp10Result12 = tmp10(tmp3[15]);
      userAvatarURL1 = tmp10Result12.getUserAvatarURL(tmp15, false, 64, "png");
    }
    obj6["Avatar02/img"] = userAvatarURL1;
    let userAvatarURL2;
    if (null != tmp14) {
      const tmp10Result13 = tmp10(tmp3[15]);
      userAvatarURL2 = tmp10Result13.getUserAvatarURL(tmp14, false, 64, "png");
    }
    obj6["Avatar03/img"] = userAvatarURL2;
    let user1;
    if (stateFromStores1 != null) {
      user1 = stateFromStores1.user;
    }
    let userAvatarURL3;
    if (null != user1) {
      const tmp10Result14 = tmp10(tmp3[15]);
      userAvatarURL3 = tmp10Result14.getUserAvatarURL(user1, false, 64, "png");
    }
    obj6["Avatar04/img"] = userAvatarURL3;
    let userAvatarURL4;
    if (null != stateFromStores2) {
      const tmp10Result15 = tmp10(tmp3[15]);
      userAvatarURL4 = tmp10Result15.getUserAvatarURL(stateFromStores2, false, 64, "png");
    }
    obj6["Avatar05/img"] = userAvatarURL4;
    obj6["Avatar01/Username"] = toLocaleUpperCaseResult;
    obj6["Avatar02/Username"] = toLocaleUpperCaseResult2;
    obj6["Avatar03/Username"] = toLocaleUpperCaseResult1;
    obj6["Avatar04/Username"] = str4.toLocaleUpperCase();
    obj6.twoFriends = tmp20;
    obj4.dataBinding = obj6;
    obj3.children = closure_13(tmp2(tmp3[22]).CheckpointFriendsRive, obj4);
    const items7 = [closure_13(height, obj3), , , ];
    let tmp24Result3 = route === tmp2(tmp3[14]).CheckpointRoute.SQUAD_TRANSITION;
    if (tmp24Result3) {
      const obj7 = { style: tmp.transition, children: null };
      const obj8 = { variant: "heading-lg/medium", children: null };
      const intl = tmp2(tmp3[19]).intl;
      obj8.children = intl.string(tmp10(tmp3[24])["6RSp5q"]);
      obj7.children = closure_13(tmp10(tmp3[23]), obj8);
      tmp24Result3 = closure_13(tmp27, obj7);
      const tmp10Result16 = tmp10(tmp3[23]);
    }
    items7[1] = tmp24Result3;
    let tmp24Result4 = route === tmp2(tmp3[14]).CheckpointRoute.SQUAD;
    if (tmp24Result4) {
      const obj9 = { title: null, description: null };
      const intl2 = tmp2(tmp3[19]).intl;
      obj9.title = intl2.string(tmp10(tmp3[20]).OzY5Ns);
      const intl3 = tmp2(tmp3[19]).intl;
      obj9.description = intl3.string(tmp10(tmp3[24]).EqdLDd);
      tmp24Result4 = closure_13(closure_20, obj9);
    }
    items7[2] = tmp24Result4;
    let tmp26Result = tmp21;
    if (tmp21) {
      tmp26Result = null != stateFromStores1;
    }
    if (tmp26Result) {
      const obj10 = { style: tmp.sidekick, children: null };
      const obj11 = { style: tmp.sidekickDetails, children: null };
      const obj12 = { title: null, description: null };
      const intl4 = tmp2(tmp3[19]).intl;
      obj12.title = intl4.string(tmp10(tmp3[20])["+uwOHt"]);
      const intl5 = tmp2(tmp3[19]).intl;
      obj12.description = intl5.string(tmp10(tmp3[24])["/ctmGw"]);
      const items8 = [closure_13(closure_20, obj12), ];
      const obj13 = { sidekick: stateFromStores1 };
      items8[1] = closure_13(closure_21, obj13);
      obj11.children = items8;
      const items9 = [closure_14(tmp27, obj11), ];
      const obj14 = { user: stateFromStores1.user, username: str4 };
      items9[1] = closure_13(SidekickMessageInput, obj14);
      obj10.children = items9;
      tmp26Result = closure_14(tmp27, obj10);
    }
    const obj15 = { children: null };
    items7[3] = tmp26Result;
    obj2.children = items7;
    obj15.children = closure_14(height, obj2);
    return closure_13(tmp10(tmp3[25]), obj15);
  }
  const tmp2Result12 = route(onPreviousStep[18]);
});
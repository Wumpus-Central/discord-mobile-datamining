// discord_app/modules/checkpoint/native/components/CheckpointNavigationControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3043 from "../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import CheckpointButtonDefault from "CheckpointButton.tsx";
import CheckpointPressableDefault from "CheckpointPressable.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null, nextControl: null };
let rect = {
  position: "absolute",
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  bottom: nativeDefault.space.PX_16,
};
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = { width: 48, height: 48, alignItems: "center", justifyContent: "center" };
let obj2 = { gap: nativeDefault.space.PX_24 };
obj.nextControl = { borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (isHome) => {
      const cResult = require("c").c(43);
      ({ onBack, onNext, isTerminal } = isHome);
      const tmp4 = closure_9();
      _require = tmp4;
      const rect = useSafeAreaInsetsDefault();
      if (cResult[0] === rect.bottom) {
        if (cResult[1] === rect.left) {
          if (cResult[2] === rect.right) {
            let tmp6 = cResult[3];
          }
          if (cResult[4] === tmp4.container) {
            if (cResult[5] === tmp6) {
              let tmp7 = cResult[6];
            }
            if (isHome.isHome) {
              if (cResult[7] === tmp7) {
                if (cResult[8] === tmp4.homeContainer) {
                  let tmp35 = cResult[9];
                }
                const _Symbol3 = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(1126).intl;
                  const stringResult = intl3.string(tmp(1126).t.I0v0Qv);
                  cResult[10] = stringResult;
                  let tmp37 = stringResult;
                } else {
                  tmp37 = cResult[10];
                }
                if (cResult[11] !== onNext) {
                  const obj2 = { Icon: tmp(7948).PlayIcon, label: tmp37, onPress: onNext };
                  const tmp42 = closure_7(CheckpointButtonDefault, obj2);
                  cResult[11] = onNext;
                  cResult[12] = tmp42;
                  let tmp39 = tmp42;
                  const tmp5Result = CheckpointButtonDefault;
                } else {
                  tmp39 = cResult[12];
                }
                if (cResult[13] !== tmp4.link) {
                  const intl4 = tmp(1126).intl;
                  const obj3 = {
                    learnMoreHook(children, arg1) {
                      return React5(
                        CheckpointTextDefault,
                        {
                          variant: "text-sm/medium",
                          style: link.link,
                          onPress() {
                            const obj = closure_1_1(4565);
                            return obj.openURL(closure_1_1(2115).getArticleURL(constants.CHECKPOINT));
                          },
                          accessibilityRole: "link",
                          children,
                        },
                        arg1,
                      );
                    },
                  };
                  const formatResult = intl4.format(_modDef3043.hcNhyq, obj3);
                  cResult[13] = tmp4.link;
                  cResult[14] = formatResult;
                  let tmp43 = formatResult;
                } else {
                  tmp43 = cResult[14];
                }
                if (cResult[15] !== tmp43) {
                  const obj4 = { variant: "text-sm/medium", children: tmp43 };
                  const tmp47 = closure_7(CheckpointTextDefault, obj4);
                  cResult[15] = tmp43;
                  cResult[16] = tmp47;
                  let tmp45 = tmp47;
                } else {
                  tmp45 = cResult[16];
                }
                if (cResult[17] === tmp35) {
                  if (cResult[18] === tmp39) {
                    if (cResult[19] === tmp45) {
                      let tmp48 = cResult[20];
                    }
                    return tmp48;
                  }
                }
                const obj5 = { style: tmp35, children: null };
                const items = [tmp39, tmp45];
                obj5.children = items;
                const tmp51 = closure_8(closure_4, obj5);
                cResult[17] = tmp35;
                cResult[18] = tmp39;
                cResult[19] = tmp45;
                cResult[20] = tmp51;
                tmp48 = tmp51;
              }
              const items1 = [tmp7, tmp4.homeContainer];
              cResult[7] = tmp7;
              cResult[8] = tmp4.homeContainer;
              cResult[9] = items1;
              tmp35 = items1;
            } else {
              if (cResult[21] === tmp7) {
                if (cResult[22] === tmp4.routeControls) {
                  let tmp8 = cResult[23];
                }
                const _Symbol = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(1126).intl;
                  const stringResult1 = intl.string(tmp(1126).t["13/7kX"]);
                  const obj6 = { color: CHECKPOINT_PRIMARY };
                  const tmp15 = closure_7(tmp(6014).ArrowLargeLeftIcon, obj6);
                  cResult[24] = stringResult1;
                  cResult[25] = tmp15;
                  let tmp11 = tmp15;
                  let tmp10 = stringResult1;
                } else {
                  tmp10 = cResult[24];
                  tmp11 = cResult[25];
                }
                if (cResult[26] === onBack) {
                  if (cResult[27] === tmp4.control) {
                    let tmp16 = cResult[28];
                  }
                  if (cResult[29] === tmp4.control) {
                    if (cResult[30] === tmp4.nextControl) {
                      let tmp20 = cResult[31];
                    }
                    if (cResult[32] !== isTerminal) {
                      const intl2 = tmp(1126).intl;
                      const t = tmp(1126).t;
                      const stringResult2 = intl2.string(isTerminal ? t.i4jeWR : t.PDTjLN);
                      cResult[32] = isTerminal;
                      cResult[33] = stringResult2;
                    } else {
                      const _Symbol2 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj7 = { color: CHECKPOINT_PRIMARY };
                        const tmp27 = closure_7(tmp(15554).ArrowLargeRightIcon, obj7);
                        cResult[34] = tmp27;
                        let tmp24 = tmp27;
                      } else {
                        tmp24 = cResult[34];
                      }
                      if (cResult[35] === onNext) {
                        if (cResult[36] === tmp20) {
                          if (cResult[37] === tmp21) {
                            let tmp28 = cResult[38];
                          }
                          if (cResult[39] === tmp28) {
                            if (cResult[40] === tmp8) {
                              if (cResult[41] === tmp16) {
                                let tmp31 = cResult[42];
                              }
                              return tmp31;
                            }
                          }
                          const obj8 = { style: tmp8, children: null };
                          const items2 = [tmp16, tmp28];
                          obj8.children = items2;
                          const tmp34 = closure_8(closure_4, obj8);
                          cResult[39] = tmp28;
                          cResult[40] = tmp8;
                          cResult[41] = tmp16;
                          cResult[42] = tmp34;
                          tmp31 = tmp34;
                        }
                      }
                      const obj9 = {
                        style: tmp20,
                        onPress: onNext,
                        accessibilityRole: "button",
                        accessibilityLabel: cResult[33],
                        children: tmp24,
                      };
                      const tmp30 = closure_7(CheckpointPressableDefault, obj9);
                      cResult[35] = onNext;
                      cResult[36] = tmp20;
                      cResult[37] = cResult[33];
                      cResult[38] = tmp30;
                      tmp28 = tmp30;
                    }
                  }
                  const items3 = [,];
                  ({ control: arr3[0], nextControl: arr3[1] } = tmp4);
                  cResult[29] = tmp4.control;
                  cResult[30] = tmp4.nextControl;
                  cResult[31] = items3;
                  tmp20 = items3;
                }
                const obj10 = {
                  style: tmp4.control,
                  onPress: onBack,
                  accessibilityRole: "button",
                  accessibilityLabel: tmp10,
                  children: tmp11,
                };
                const tmp19 = closure_7(closure_3, obj10);
                cResult[26] = onBack;
                cResult[27] = tmp4.control;
                cResult[28] = tmp19;
                tmp16 = tmp19;
              }
              const items4 = [tmp7, tmp4.routeControls];
              cResult[21] = tmp7;
              cResult[22] = tmp4.routeControls;
              cResult[23] = items4;
              tmp8 = items4;
            }
          }
          const items5 = [tmp4.container, tmp6];
          cResult[4] = tmp4.container;
          cResult[5] = tmp6;
          cResult[6] = items5;
          tmp7 = items5;
        }
      }
      const obj11 = { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom };
      cResult[0] = rect.bottom;
      cResult[1] = rect.left;
      cResult[2] = rect.right;
      cResult[3] = obj11;
      tmp6 = obj11;
      let obj = require("c");
    }
  : (onNext) => {
      onNext = onNext.onNext;
      ({ onBack, isTerminal, isHome } = onNext);
      const tmp = closure_9();
      _require = tmp;
      const rect = useSafeAreaInsetsDefault();
      const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
      let obj = { style: null, children: null };
      const items1 = [items];
      if (isHome) {
        items1[1] = tmp.homeContainer;
        obj.style = items1;
        const obj2 = { Icon: require("PlayIcon").PlayIcon, label: null, onPress: null };
        const intl3 = require("util").intl;
        obj2.label = intl3.string(require("util").t.I0v0Qv);
        obj2.onPress = onNext;
        const items2 = [closure_7(CheckpointButtonDefault, obj2)];
        const obj3 = { variant: "text-sm/medium", children: null };
        const tmp2Result = CheckpointButtonDefault;
        const intl4 = require("util").intl;
        const obj4 = {
          learnMoreHook(children, arg1) {
            return React5(
              CheckpointTextDefault,
              {
                variant: "text-sm/medium",
                style: link.link,
                onPress() {
                  const obj = closure_1_1(4565);
                  return obj.openURL(closure_1_1(2115).getArticleURL(constants.CHECKPOINT));
                },
                accessibilityRole: "link",
                children,
              },
              arg1,
            );
          },
        };
        obj3.children = intl4.format(_modDef3043.hcNhyq, obj4);
        items2[1] = closure_7(CheckpointTextDefault, obj3);
        obj.children = items2;
        let tmp11 = obj;
        const tmp2Result3 = CheckpointTextDefault;
      } else {
        items1[1] = tmp.routeControls;
        obj.style = items1;
        const obj5 = {
          style: tmp.control,
          onPress: onBack,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = require("util").intl;
        obj5.accessibilityLabel = intl.string(require("util").t["13/7kX"]);
        const obj6 = { color: CHECKPOINT_PRIMARY };
        obj5.children = closure_7(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, obj6);
        const items3 = [closure_7(closure_3, obj5)];
        const obj7 = {
          style: null,
          onPress: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const items4 = [,];
        ({ control: arr4[0], nextControl: arr4[1] } = tmp);
        obj7.style = items4;
        obj7.onPress = onNext;
        const intl2 = require("util").intl;
        const t = require("util").t;
        obj7.accessibilityLabel = intl2.string(isTerminal ? t.i4jeWR : t.PDTjLN);
        const obj8 = { color: CHECKPOINT_PRIMARY };
        obj7.children = closure_7(require("ArrowLargeRightIcon").ArrowLargeRightIcon, obj8);
        items3[1] = closure_7(CheckpointPressableDefault, obj7);
        obj.children = items3;
        tmp11 = obj;
        const tmp2Result4 = CheckpointPressableDefault;
      }
      return closure_8(closure_4, tmp11);
    };

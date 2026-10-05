// === Module 15555: CheckpointNavigationControls ===

// Module 15555 (CheckpointNavigationControls)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import _modDef3043 from "module_3043" /* 3043 */;
import CheckpointConstants from "CheckpointConstants" /* 5115 */;
import CheckpointTextDefault from "CheckpointText" /* 15539 */;
import CheckpointButtonDefault from "CheckpointButton" /* 15556 */;
import CheckpointPressableDefault from "CheckpointPressable" /* 15557 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
({ Pressable: c3, View: closure_4 } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, homeContainer: obj2, link: { textDecorationLine: "underline" }, routeControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, control: { width: 48, height: 48, alignItems: "center", justifyContent: "center" }, nextControl: obj3 };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { gap: nativeDefault.space.PX_24 };
obj3 = { borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((isHome) => {
  let isTerminal;
  let items;
  let items2;
  let link;
  let onBack;
  let onNext;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(43);
  ({ onBack, onNext, isTerminal } = isHome);
  isHome = isHome.isHome;
  const tmp4 = closure_9();
  _require = tmp4;
  const rect = useSafeAreaInsetsDefault();
  if (cResult[0] === rect.bottom) {
    if (cResult[1] === rect.left) {
      let tmp6;
      if (cResult[2] === rect.right) {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4.container) {
        let tmp7;
        if (cResult[5] === tmp6) {
          tmp7 = cResult[6];
        }
        if (isHome) {
          if (cResult[7] === tmp7) {
            let tmp34;
            let tmp36;
            let tmp38;
            let tmp42;
            let tmp44;
            if (cResult[8] === tmp4.homeContainer) {
              tmp34 = cResult[9];
            }
            const _Symbol3 = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult = intl3.string(tmp(1126).t.I0v0Qv);
              cResult[10] = stringResult;
              tmp36 = stringResult;
            } else {
              tmp36 = cResult[10];
            }
            if (cResult[11] !== onNext) {
              const obj2 = { Icon: tmp(7948).PlayIcon, label: tmp36, onPress: onNext };
              const tmp5Result = CheckpointButtonDefault;
              const tmp41 = closure_7(tmp5Result, obj2);
              cResult[11] = onNext;
              cResult[12] = tmp41;
              tmp38 = tmp41;
            } else {
              tmp38 = cResult[12];
            }
            if (cResult[13] !== tmp4.link) {
              const intl4 = tmp(1126).intl;
              const obj3 = {
                learnMoreHook(children, id) {
                              let obj = {
                                variant: "text-sm/medium",
                                style: link.link,
                                onPress() {
                                  const openURL = closure_1_1(closure_1_2[14]).openURL;
                                  closure_1_1(closure_1_2[14]);
                                  const obj = closure_1_1(closure_1_2[15]);
                                  return openURL(obj.getArticleURL(constants.CHECKPOINT));
                                },
                                accessibilityRole: "link",
                                children
                              };
                              return metroImportDefault(CheckpointTextDefault, obj, id);
                            }
              };
              const formatResult = intl4.format(_modDef3043.hcNhyq, obj3);
              cResult[13] = tmp4.link;
              cResult[14] = formatResult;
              tmp42 = formatResult;
            } else {
              tmp42 = cResult[14];
            }
            if (cResult[15] !== tmp42) {
              const obj4 = { variant: "text-sm/medium", children: tmp42 };
              const tmp46 = closure_7(CheckpointTextDefault, obj4);
              cResult[15] = tmp42;
              cResult[16] = tmp46;
              tmp44 = tmp46;
            } else {
              tmp44 = cResult[16];
            }
            if (cResult[17] === tmp34) {
              if (cResult[18] === tmp38) {
                let tmp47;
                if (cResult[19] === tmp44) {
                  tmp47 = cResult[20];
                }
                return tmp47;
              }
            }
            const obj5 = { style: tmp34, children: items };
            items = [tmp38, tmp44];
            const tmp50 = closure_8(closure_4, obj5);
            cResult[17] = tmp34;
            cResult[18] = tmp38;
            cResult[19] = tmp44;
            cResult[20] = tmp50;
            tmp47 = tmp50;
          }
          const items1 = [tmp7, tmp4.homeContainer];
          cResult[7] = tmp7;
          cResult[8] = tmp4.homeContainer;
          cResult[9] = items1;
          tmp34 = items1;
        } else {
          if (cResult[21] === tmp7) {
            let tmp8;
            let tmp11;
            let tmp10;
            if (cResult[22] === tmp4.routeControls) {
              tmp8 = cResult[23];
            }
            const _Symbol = Symbol;
            const control = tmp4.control;
            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult1 = intl.string(tmp(1126).t["13/7kX"]);
              const obj6 = { color: CHECKPOINT_PRIMARY };
              const tmp15 = closure_7(tmp(6014).ArrowLargeLeftIcon, obj6);
              cResult[24] = stringResult1;
              cResult[25] = tmp15;
              tmp11 = tmp15;
              tmp10 = stringResult1;
            } else {
              tmp10 = cResult[24];
              tmp11 = cResult[25];
            }
            if (cResult[26] === onBack) {
              let tmp16;
              if (cResult[27] === tmp4.control) {
                tmp16 = cResult[28];
              }
              if (cResult[29] === tmp4.control) {
                let tmp20;
                let tmp21;
                let tmp23;
                if (cResult[30] === tmp4.nextControl) {
                  tmp20 = cResult[31];
                }
                if (cResult[32] !== isTerminal) {
                  const intl2 = tmp(1126).intl;
                  const string = intl2.string;
                  const t = tmp(1126).t;
                  const stringResult2 = string(isTerminal ? t.i4jeWR : t.PDTjLN);
                  cResult[32] = isTerminal;
                  cResult[33] = stringResult2;
                  tmp21 = stringResult2;
                } else {
                  tmp21 = cResult[33];
                }
                const _Symbol2 = Symbol;
                if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj7 = { color: CHECKPOINT_PRIMARY };
                  const tmp26 = closure_7(tmp(15558).ArrowLargeRightIcon, obj7);
                  cResult[34] = tmp26;
                  tmp23 = tmp26;
                } else {
                  tmp23 = cResult[34];
                }
                if (cResult[35] === onNext) {
                  if (cResult[36] === tmp20) {
                    let tmp27;
                    if (cResult[37] === tmp21) {
                      tmp27 = cResult[38];
                    }
                    if (cResult[39] === tmp27) {
                      if (cResult[40] === tmp8) {
                        let tmp30;
                        if (cResult[41] === tmp16) {
                          tmp30 = cResult[42];
                        }
                        return tmp30;
                      }
                    }
                    const obj8 = { style: tmp8, children: items2 };
                    items2 = [tmp16, tmp27];
                    const tmp33 = closure_8(closure_4, obj8);
                    cResult[39] = tmp27;
                    cResult[40] = tmp8;
                    cResult[41] = tmp16;
                    cResult[42] = tmp33;
                    tmp30 = tmp33;
                  }
                }
                const obj9 = { style: tmp20, onPress: onNext, accessibilityRole: "button", accessibilityLabel: tmp21, children: tmp23 };
                const tmp29 = closure_7(CheckpointPressableDefault, obj9);
                cResult[35] = onNext;
                cResult[36] = tmp20;
                cResult[37] = tmp21;
                cResult[38] = tmp29;
                tmp27 = tmp29;
              }
              const items3 = [, ];
              ({ control: arr3[0], nextControl: arr3[1] } = tmp4);
              cResult[29] = tmp4.control;
              cResult[30] = tmp4.nextControl;
              cResult[31] = items3;
              tmp20 = items3;
            }
            const obj10 = { style: control, onPress: onBack, accessibilityRole: "button", accessibilityLabel: tmp10, children: tmp11 };
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
}) : ((onNext) => {
  let intl;
  let intl3;
  let intl4;
  let isHome;
  let isTerminal;
  let items4;
  let link;
  let obj4;
  let obj6;
  let obj8;
  let onBack;
  let string;
  let t;
  let tmp11;
  onNext = onNext.onNext;
  ({ onBack, isTerminal, isHome } = onNext);
  const tmp = closure_9();
  _require = tmp;
  const rect = useSafeAreaInsetsDefault();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  let obj = { style: null, children: null };
  const items1 = [items, ];
  if (isHome) {
    items1[1] = tmp.homeContainer;
    obj.style = items1;
    const obj2 = { Icon: require("PlayIcon").PlayIcon, label: intl3.string(require("intl").t.I0v0Qv), onPress: onNext };
    const tmp2Result = CheckpointButtonDefault;
    intl3 = require("intl").intl;
    const items2 = [closure_7(tmp2Result, obj2), ];
    const obj3 = { variant: "text-sm/medium", children: intl4.format(_modDef3043.hcNhyq, obj4) };
    const tmp2Result3 = CheckpointTextDefault;
    intl4 = require("intl").intl;
    obj4 = {
      learnMoreHook(children, id) {
          let obj = {
            variant: "text-sm/medium",
            style: link.link,
            onPress() {
              const openURL = closure_1_1(closure_1_2[14]).openURL;
              closure_1_1(closure_1_2[14]);
              const obj = closure_1_1(closure_1_2[15]);
              return openURL(obj.getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          };
          return metroImportDefault(CheckpointTextDefault, obj, id);
        }
    };
    items2[1] = closure_7(tmp2Result3, obj3);
    obj.children = items2;
    tmp11 = obj;
  } else {
    items1[1] = tmp.routeControls;
    obj.style = items1;
    const obj5 = { style: tmp.control, onPress: onBack, accessibilityRole: "button", accessibilityLabel: intl.string(require("intl").t["13/7kX"]), children: closure_7(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, obj6) };
    intl = require("intl").intl;
    obj6 = { color: CHECKPOINT_PRIMARY };
    const items3 = [closure_7(closure_3, obj5), ];
    const obj7 = { style: items4, onPress: onNext, accessibilityRole: "button", accessibilityLabel: string(isTerminal ? t.i4jeWR : t.PDTjLN), children: closure_7(require("ArrowLargeRightIcon").ArrowLargeRightIcon, obj8) };
    items4 = [, ];
    ({ control: arr4[0], nextControl: arr4[1] } = tmp);
    const tmp2Result4 = CheckpointPressableDefault;
    const intl2 = require("intl").intl;
    string = intl2.string;
    t = require("intl").t;
    obj8 = { color: CHECKPOINT_PRIMARY };
    items3[1] = closure_7(tmp2Result4, obj7);
    obj.children = items3;
    tmp11 = obj;
  }
  return closure_8(closure_4, tmp11);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default tmp5;
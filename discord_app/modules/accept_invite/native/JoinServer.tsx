// === Module 6467: JoinServer ===

// Module 6467 (JoinServer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import Text_Text from "Text/Text" /* 4886 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6097 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6469 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6468 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT: metroRequire, CreateGuildModalStates: metroImportDefault } = CreateGuildConstants);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { growSpacing: obj2, container: obj3, textInput: obj4, innerSeparator: obj5, separator: { paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" }, orText: obj6, header: { textAlign: "center" }, description: { textAlign: "center", marginTop: 8, marginBottom: 32 }, exampleText: { marginTop: 8 } };
obj2 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj4 = { borderRadius: nativeDefault.radii.lg };
obj5 = { height: 1, flexGrow: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj6 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_8, textTransform: "uppercase" };
let closure_11 = createStyles(obj);
let items = ["https://discord.gg/hTKzmak", "hTKzmak", "https://discord.gg/wumpus-friends"];
const placeholder = items[0];
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  const tmp4 = closure_11();
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj2.useTypeConsolidationTextTransform("JoinServer");
  const separator = tmp4.separator;
  if (cResult[0] !== tmp4.innerSeparator) {
    const obj3 = { style: tmp4.innerSeparator };
    const tmp9 = metroImportAll(React3, obj3);
    cResult[0] = tmp4.innerSeparator;
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.orText) {
    let tmp10;
    let tmp12;
    let tmp14;
    let tmp17;
    if (cResult[3] === typeConsolidationTextTransform) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl10.intl;
      const stringResult = intl.string(intl10.t.HEuagM);
      cResult[5] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp10) {
      const obj4 = { style: tmp10, variant: "text-sm/semibold", color: "text-muted", children: tmp12 };
      const tmp16 = metroImportAll(Text_Text.Text, obj4);
      cResult[6] = tmp10;
      cResult[7] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== tmp4.innerSeparator) {
      const obj5 = { style: tmp4.innerSeparator };
      const tmp20 = metroImportAll(React3, obj5);
      cResult[8] = tmp4.innerSeparator;
      cResult[9] = tmp20;
      tmp17 = tmp20;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === tmp4.separator) {
      if (cResult[11] === tmp6) {
        if (cResult[12] === tmp14) {
          let tmp21;
          if (cResult[13] === tmp17) {
            tmp21 = cResult[14];
          }
          return tmp21;
        }
      }
    }
    const obj6 = { style: separator, children: items };
    items = [tmp6, tmp14, tmp17];
    const tmp24 = React4(React3, obj6);
    cResult[10] = tmp4.separator;
    cResult[11] = tmp6;
    cResult[12] = tmp14;
    cResult[13] = tmp17;
    cResult[14] = tmp24;
    tmp21 = tmp24;
  }
  const items1 = [tmp4.orText, typeConsolidationTextTransform];
  cResult[2] = tmp4.orText;
  cResult[3] = typeConsolidationTextTransform;
  cResult[4] = items1;
  tmp10 = items1;
}) : (() => {
  let intl;
  let items1;
  const tmp = closure_11();
  const obj2 = { style: tmp.separator, children: items };
  const obj = useTypeConsolidationTextTransform;
  const obj3 = { style: tmp.innerSeparator };
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("JoinServer");
  items = [metroImportAll(React3, obj3), , ];
  const obj4 = { style: items1, variant: "text-sm/semibold", color: "text-muted", children: intl.string(intl10.t.HEuagM) };
  items1 = [tmp.orText, typeConsolidationTextTransform];
  const Text = Text_Text.Text;
  intl = intl10.intl;
  items[1] = metroImportAll(Text, obj4);
  const obj5 = { style: tmp.innerSeparator };
  items[2] = metroImportAll(React3, obj5);
  return React4(React3, obj2);
});
let closure_14 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let error;
  let intl;
  let intl2;
  let inviteString;
  let items1;
  let items2;
  let items3;
  let onDone;
  let onInviteChange;
  let submitting;
  let tmp10;
  let tmp8;
  let obj = navigation(576);
  const cResult = obj.c(46);
  ({ error, inviteString, onInviteChange, onDone, submitting } = arg0);
  const tmp4 = closure_11();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  const tmp7 = useWindowDimensionsDefault().height <= closure_6;
  if (cResult[0] !== navigation) {
    const fn = function n() {
      navigation.push(metroImportDefault.JOIN_STUDENT_HUB);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  const sum = insets.bottom + nativeDefault.space.PX_16;
  if (cResult[2] !== sum) {
    const obj3 = { paddingBottom: sum };
    cResult[2] = sum;
    cResult[3] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.container) {
    let tmp11;
    if (cResult[5] === tmp10) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp4.description) {
        let tmp12;
        let tmp18;
        let tmp20;
        if (cResult[9] === tmp4.header) {
          tmp12 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(navigation(1126).t.qreV25);
          cResult[11] = stringResult;
          tmp18 = stringResult;
        } else {
          tmp18 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult1 = intl4.string(navigation(1126).t.qreV25);
          cResult[12] = stringResult1;
          tmp20 = stringResult1;
        } else {
          tmp20 = cResult[12];
        }
        if (cResult[13] === error) {
          if (cResult[14] === inviteString) {
            if (cResult[15] === onDone) {
              if (cResult[16] === onInviteChange) {
                let tmp22;
                let tmp26;
                let tmp29;
                if (cResult[17] === tmp4.textInput) {
                  tmp22 = cResult[18];
                }
                const _Symbol3 = Symbol;
                const exampleText = tmp4.exampleText;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = tmp(1126).intl;
                  const obj4 = {
                    example1: null,
                    example2: null,
                    example3: null,
                    exampleHook(children, arg1) {
                                      const obj = { variant: "text-sm/medium", color: "text-default", children };
                                      return closure_1_8(navigation(dependencyMap[10]).Text, obj, arg1);
                                    }
                  };
                  [obj8.example1, obj8.example2, obj8.example3] = items;
                  const formatResult = intl5.format(navigation(1126).t.vwWaTe, obj4);
                  cResult[19] = formatResult;
                  tmp26 = formatResult;
                } else {
                  tmp26 = cResult[19];
                }
                if (cResult[20] !== tmp4.exampleText) {
                  const obj5 = { style: exampleText, variant: "text-sm/medium", color: "text-muted", children: tmp26 };
                  const tmp31 = closure_8(navigation(4886).Text, obj5);
                  cResult[20] = tmp4.exampleText;
                  cResult[21] = tmp31;
                  tmp29 = tmp31;
                } else {
                  tmp29 = cResult[21];
                }
                if (cResult[22] === tmp29) {
                  if (cResult[23] === tmp12) {
                    let tmp32;
                    let tmp36;
                    let tmp41;
                    let tmp40;
                    if (cResult[24] === tmp22) {
                      tmp32 = cResult[25];
                    }
                    if (cResult[26] !== tmp4.growSpacing) {
                      const obj6 = { style: tmp4.growSpacing };
                      const tmp39 = closure_8(closure_4, obj6);
                      cResult[26] = tmp4.growSpacing;
                      cResult[27] = tmp39;
                      tmp36 = tmp39;
                    } else {
                      tmp36 = cResult[27];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = tmp(1126).intl;
                      const stringResult2 = intl6.string(navigation(1126).t["+H/coT"]);
                      const intl7 = tmp(1126).intl;
                      const stringResult3 = intl7.string(navigation(1126).t["+H/coT"]);
                      cResult[28] = stringResult2;
                      cResult[29] = stringResult3;
                      tmp41 = stringResult3;
                      tmp40 = stringResult2;
                    } else {
                      tmp40 = cResult[28];
                      tmp41 = cResult[29];
                    }
                    if (cResult[30] === onDone) {
                      let tmp44;
                      let tmp47;
                      let tmp52;
                      let tmp51;
                      let tmp55;
                      if (cResult[31] === submitting) {
                        tmp44 = cResult[32];
                      }
                      const _Symbol5 = Symbol;
                      if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp50 = closure_8(closure_14, {});
                        cResult[33] = tmp50;
                        tmp47 = tmp50;
                      } else {
                        tmp47 = cResult[33];
                      }
                      const _Symbol6 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl8 = tmp(1126).intl;
                        const stringResult4 = intl8.string(navigation(1126).t["MOqX/G"]);
                        const intl9 = tmp(1126).intl;
                        const stringResult5 = intl9.string(navigation(1126).t["MOqX/G"]);
                        cResult[34] = stringResult4;
                        cResult[35] = stringResult5;
                        tmp52 = stringResult5;
                        tmp51 = stringResult4;
                      } else {
                        tmp51 = cResult[34];
                        tmp52 = cResult[35];
                      }
                      if (cResult[36] !== tmp8) {
                        const obj7 = { size: "lg", variant: "secondary", text: tmp51, accessibilityLabel: tmp52, onPress: tmp8 };
                        const tmp57 = closure_8(navigation(5594).Button, obj7);
                        cResult[36] = tmp8;
                        cResult[37] = tmp57;
                        tmp55 = tmp57;
                      } else {
                        tmp55 = cResult[37];
                      }
                      if (cResult[38] === tmp36) {
                        if (cResult[39] === tmp44) {
                          let tmp58;
                          if (cResult[40] === tmp55) {
                            tmp58 = cResult[41];
                          }
                          if (cResult[42] === tmp32) {
                            if (cResult[43] === tmp58) {
                              let tmp62;
                              if (cResult[44] === tmp11) {
                                tmp62 = cResult[45];
                              }
                              return tmp62;
                            }
                          }
                          const obj9 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: tmp11, children: items };
                          items = [tmp32, tmp58];
                          const tmp65 = closure_9(closure_5, obj9);
                          cResult[42] = tmp32;
                          cResult[43] = tmp58;
                          cResult[44] = tmp11;
                          cResult[45] = tmp65;
                          tmp62 = tmp65;
                        }
                      }
                      const obj10 = { children: items1 };
                      items1 = [tmp36, tmp44, tmp47, tmp55];
                      const tmp61 = closure_9(closure_10, obj10);
                      cResult[38] = tmp36;
                      cResult[39] = tmp44;
                      cResult[40] = tmp55;
                      cResult[41] = tmp61;
                      tmp58 = tmp61;
                    }
                    const obj11 = { size: "lg", text: tmp40, accessibilityLabel: tmp41, loading: submitting, disabled: submitting, onPress: onDone };
                    const tmp46 = closure_8(navigation(5594).Button, obj11);
                    cResult[30] = onDone;
                    cResult[31] = submitting;
                    cResult[32] = tmp46;
                    tmp44 = tmp46;
                  }
                }
                const obj12 = { children: items2 };
                items2 = [tmp12, tmp22, tmp29];
                const tmp35 = closure_9(closure_4, obj12);
                cResult[22] = tmp29;
                cResult[23] = tmp12;
                cResult[24] = tmp22;
                cResult[25] = tmp35;
                tmp32 = tmp35;
              }
            }
          }
        }
        const obj13 = { label: tmp18, error, value: inviteString, onChangeText: onInviteChange, placeholder, accessibilityLabel: tmp20, autoFocus: true, autoCapitalize: "none", autoCorrect: false, returnKeyType: "join", textStyle: tmp4.textInput, onSubmitEditing: onDone };
        const tmp25 = closure_8(FreeFormInputGroupDefault, obj13);
        cResult[13] = error;
        cResult[14] = inviteString;
        cResult[15] = onDone;
        cResult[16] = onInviteChange;
        cResult[17] = tmp4.textInput;
        cResult[18] = tmp25;
        tmp22 = tmp25;
      }
    }
    let tmp13 = null;
    if (!tmp7) {
      const obj14 = { children: items3 };
      const obj15 = { style: tmp4.header, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(navigation(1126).t.jlfuFW) };
      const Text = tmp(4886).Text;
      intl = tmp(1126).intl;
      items3 = [closure_8(Text, obj15), ];
      const obj28 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(navigation(1126).t.lVvN3A) };
      const Text2 = tmp(4886).Text;
      intl2 = tmp(1126).intl;
      items3[1] = closure_8(Text2, obj28);
      tmp13 = closure_9(closure_10, obj14);
    }
    cResult[7] = tmp7;
    cResult[8] = tmp4.description;
    cResult[9] = tmp4.header;
    cResult[10] = tmp13;
    tmp12 = tmp13;
  }
  const items4 = [tmp4.container, tmp10];
  cResult[4] = tmp4.container;
  cResult[5] = tmp10;
  cResult[6] = items4;
  tmp11 = items4;
}) : ((arg0) => {
  let error;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let inviteString;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let onDone;
  let onInviteChange;
  let submitting;
  ({ onDone, submitting } = arg0);
  navigation = undefined;
  ({ error, inviteString, onInviteChange } = arg0);
  const tmp = closure_11();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  let obj = navigation(1490);
  navigation = obj.useNavigation();
  items = [navigation];
  const height = useWindowDimensionsDefault().height;
  const obj2 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: items1, children: items4 };
  items1 = [tmp.container, ];
  const obj3 = { paddingBottom: insets.bottom + nativeDefault.space.PX_16 };
  const callback = react.useCallback(() => {
    navigation.push(metroImportDefault.JOIN_STUDENT_HUB);
  }, items);
  items1[1] = obj3;
  let tmp7Result = null;
  if (height > closure_6) {
    const obj4 = { children: items2 };
    const obj5 = { style: tmp.header, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(navigation(1126).t.jlfuFW) };
    const Text = tmp4(4886).Text;
    intl = tmp4(1126).intl;
    items2 = [closure_8(Text, obj5), ];
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(navigation(1126).t.lVvN3A) };
    const Text2 = tmp4(4886).Text;
    intl2 = tmp4(1126).intl;
    items2[1] = closure_8(Text2, obj6);
    tmp7Result = closure_9(closure_10, obj4);
  }
  const obj7 = { children: items3 };
  items3 = [tmp7Result, , ];
  const obj8 = { label: intl3.string(navigation(1126).t.qreV25), error, value: inviteString, onChangeText: onInviteChange, placeholder, accessibilityLabel: intl4.string(navigation(1126).t.qreV25), autoFocus: true, autoCapitalize: "none", autoCorrect: false, returnKeyType: "join", textStyle: tmp.textInput, onSubmitEditing: onDone };
  const tmp2Result = FreeFormInputGroupDefault;
  intl3 = tmp4(1126).intl;
  intl4 = tmp4(1126).intl;
  items3[1] = closure_8(tmp2Result, obj8);
  const obj9 = { style: tmp.exampleText, variant: "text-sm/medium", color: "text-muted", children: intl5.format(navigation(1126).t.vwWaTe, obj10) };
  const Text3 = tmp4(4886).Text;
  intl5 = tmp4(1126).intl;
  obj10 = {
    example1: items[0],
    example2: items[1],
    example3: items[2],
    exampleHook(children, arg1) {
      const obj = { variant: "text-sm/medium", color: "text-default", children };
      return closure_1_8(navigation(dependencyMap[10]).Text, obj, arg1);
    }
  };
  items3[2] = closure_8(Text3, obj9);
  items4 = [closure_9(closure_4, obj7), ];
  const obj11 = { children: items5 };
  items5 = [, , , ];
  const obj12 = { style: tmp.growSpacing };
  items5[0] = closure_8(closure_4, obj12);
  const obj13 = { size: "lg", text: intl6.string(navigation(1126).t["+H/coT"]), accessibilityLabel: intl7.string(navigation(1126).t["+H/coT"]), loading: submitting, disabled: submitting, onPress: onDone };
  const Button = tmp4(5594).Button;
  intl6 = tmp4(1126).intl;
  intl7 = tmp4(1126).intl;
  items5[1] = closure_8(Button, obj13);
  items5[2] = closure_8(closure_14, {});
  const obj14 = { size: "lg", variant: "secondary", text: intl8.string(navigation(1126).t["MOqX/G"]), accessibilityLabel: intl9.string(navigation(1126).t["MOqX/G"]), onPress: callback };
  const Button2 = tmp4(5594).Button;
  intl8 = tmp4(1126).intl;
  intl9 = tmp4(1126).intl;
  items5[3] = closure_8(Button2, obj14);
  items4[1] = closure_9(closure_10, obj11);
  return closure_9(closure_5, obj2);
});
const result = size.fileFinishedImporting("modules/accept_invite/native/JoinServer.tsx");

export default tmp7;
export const OrSeparator = tmp6;
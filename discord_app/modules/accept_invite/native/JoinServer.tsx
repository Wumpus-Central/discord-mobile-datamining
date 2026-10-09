// === Module 6659: JoinServer ===

// Module 6659 (JoinServer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import Text_Text from "Text/Text" /* 5087 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6289 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6661 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6663 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const CreateGuildConstants = fn(6660);
({ CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT: metroRequire, CreateGuildModalStates: closure_7 } = CreateGuildConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { growSpacing: { flexGrow: 2, minHeight: nativeDefault.space.PX_24 }, container: null, textInput: null, innerSeparator: null, separator: null, orText: null, header: null, description: null, exampleText: null };
let obj3 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.container = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj4 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.textInput = { borderRadius: nativeDefault.radii.lg };
let obj5 = { borderRadius: nativeDefault.radii.lg };
obj2.innerSeparator = { height: 1, flexGrow: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.separator = { paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj6 = { height: 1, flexGrow: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.orText = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_8, textTransform: "uppercase" };
obj2.header = { textAlign: "center" };
obj2.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj2.exampleText = { marginTop: 8 };
let closure_11 = createStyles.createStyles(obj2);
let items = ["https://discord.gg/hTKzmak", "hTKzmak", "https://discord.gg/wumpus-friends"];
const placeholder = items[0];
let ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrSeparator() {
  const cResult = c.c(15);
  const tmp4 = closure_11();
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("JoinServer");
  if (cResult[0] !== tmp4.innerSeparator) {
    const obj3 = { style: tmp4.innerSeparator };
    const tmp9 = closure_1_8(React4, obj3);
    cResult[0] = tmp4.innerSeparator;
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.orText) {
    if (cResult[3] === typeConsolidationTextTransform) {
      let tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.HEuagM);
      cResult[5] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp10) {
      const obj4 = { style: tmp10, variant: "text-sm/semibold", color: "text-muted", children: tmp12 };
      const tmp16 = closure_1_8(Text_Text.Text, obj4);
      cResult[6] = tmp10;
      cResult[7] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== tmp4.innerSeparator) {
      const obj5 = { style: tmp4.innerSeparator };
      const tmp20 = closure_1_8(React4, obj5);
      cResult[8] = tmp4.innerSeparator;
      cResult[9] = tmp20;
      let tmp17 = tmp20;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === tmp4.separator) {
      if (cResult[11] === tmp6) {
        if (cResult[12] === tmp14) {
          if (cResult[13] === tmp17) {
            let tmp21 = cResult[14];
          }
          return tmp21;
        }
      }
    }
    const obj6 = { style: tmp4.separator, children: null };
    items = [tmp6, tmp14, tmp17];
    obj6.children = items;
    const tmp24 = options(React4, obj6);
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
}) : (function OrSeparator() {
  const tmp = closure_11();
  const obj2 = { style: tmp.separator, children: null };
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("JoinServer");
  items = [closure_1_8(React4, { style: tmp.innerSeparator }), , ];
  const obj4 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: null };
  const items1 = [tmp.orText, typeConsolidationTextTransform];
  obj4.style = items1;
  const intl = util.intl;
  obj4.children = intl.string(util.t.HEuagM);
  items[1] = closure_1_8(Text_Text.Text, obj4);
  items[2] = closure_1_8(React4, { style: tmp.innerSeparator });
  obj2.children = items;
  return options(React4, obj2);
});
let closure_14 = tmp5;
ReactCompilerGating = fn(558);
let obj7 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_8, textTransform: "uppercase" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/JoinServer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function JoinServer(arg0) {
  const cResult = navigation(576).c(46);
  ({ error, inviteString, onInviteChange, onDone, submitting } = arg0);
  const tmp4 = closure_11();
  const obj = navigation(576);
  navigation = navigation(1503).useNavigation();
  const tmp7 = useWindowDimensionsDefault().height <= closure_6;
  if (cResult[0] !== navigation) {
    const fn = function n() {
      navigation.push(constants.JOIN_STUDENT_HUB);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  const sum = useSafeAreaInsetsKeyboardAwareDefault().insets.bottom + nativeDefault.space.PX_16;
  if (cResult[2] !== sum) {
    const obj3 = { paddingBottom: sum };
    cResult[2] = sum;
    cResult[3] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.container) {
    if (cResult[5] === tmp10) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp4.description) {
        if (cResult[9] === tmp4.header) {
          let tmp12 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(tmp(1126).t.qreV25);
          cResult[11] = stringResult;
          let tmp18 = stringResult;
        } else {
          tmp18 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult1 = intl4.string(tmp(1126).t.qreV25);
          cResult[12] = stringResult1;
          let tmp20 = stringResult1;
        } else {
          tmp20 = cResult[12];
        }
        if (cResult[13] === error) {
          if (cResult[14] === inviteString) {
            if (cResult[15] === onDone) {
              if (cResult[16] === onInviteChange) {
                if (cResult[17] === tmp4.textInput) {
                  let tmp22 = cResult[18];
                }
                const _Symbol3 = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = tmp(1126).intl;
                  const obj4 = { example1: null, example2: null, example3: null, exampleHook: null };
                  [obj8.example1, obj8.example2, obj8.example3] = items;
                  obj4.exampleHook = function exampleHook(children, arg1) {
                    return closure_1_8(navigation(dependencyMap[10]).Text, { variant: "text-sm/medium", color: "text-default", children }, arg1);
                  };
                  const formatResult = intl5.format(tmp(1126).t.vwWaTe, obj4);
                  cResult[19] = formatResult;
                  let tmp26 = formatResult;
                } else {
                  tmp26 = cResult[19];
                }
                if (cResult[20] !== tmp4.exampleText) {
                  const obj5 = { style: tmp4.exampleText, variant: "text-sm/medium", color: "text-muted", children: tmp26 };
                  const tmp31 = closure_8(tmp(5087).Text, obj5);
                  cResult[20] = tmp4.exampleText;
                  cResult[21] = tmp31;
                  let tmp29 = tmp31;
                } else {
                  tmp29 = cResult[21];
                }
                if (cResult[22] === tmp29) {
                  if (cResult[23] === tmp12) {
                    if (cResult[24] === tmp22) {
                      let tmp32 = cResult[25];
                    }
                    if (cResult[26] !== tmp4.growSpacing) {
                      const obj6 = { style: tmp4.growSpacing };
                      const tmp39 = closure_8(closure_4, obj6);
                      cResult[26] = tmp4.growSpacing;
                      cResult[27] = tmp39;
                      let tmp36 = tmp39;
                    } else {
                      tmp36 = cResult[27];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = tmp(1126).intl;
                      const stringResult2 = intl6.string(tmp(1126).t["+H/coT"]);
                      const intl7 = tmp(1126).intl;
                      const stringResult3 = intl7.string(tmp(1126).t["+H/coT"]);
                      cResult[28] = stringResult2;
                      cResult[29] = stringResult3;
                      let tmp41 = stringResult3;
                      let tmp40 = stringResult2;
                    } else {
                      tmp40 = cResult[28];
                      tmp41 = cResult[29];
                    }
                    if (cResult[30] === onDone) {
                      if (cResult[31] === submitting) {
                        let tmp44 = cResult[32];
                      }
                      const _Symbol5 = Symbol;
                      if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp50 = closure_8(closure_14, {});
                        cResult[33] = tmp50;
                        let tmp47 = tmp50;
                      } else {
                        tmp47 = cResult[33];
                      }
                      const _Symbol6 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl8 = tmp(1126).intl;
                        const stringResult4 = intl8.string(tmp(1126).t["MOqX/G"]);
                        const intl9 = tmp(1126).intl;
                        const stringResult5 = intl9.string(tmp(1126).t["MOqX/G"]);
                        cResult[34] = stringResult4;
                        cResult[35] = stringResult5;
                        let tmp52 = stringResult5;
                        let tmp51 = stringResult4;
                      } else {
                        tmp51 = cResult[34];
                        tmp52 = cResult[35];
                      }
                      if (cResult[36] !== tmp8) {
                        const obj7 = { size: "lg", variant: "secondary", text: tmp51, accessibilityLabel: tmp52, onPress: tmp8 };
                        const tmp57 = closure_8(tmp(5376).Button, obj7);
                        cResult[36] = tmp8;
                        cResult[37] = tmp57;
                        let tmp55 = tmp57;
                      } else {
                        tmp55 = cResult[37];
                      }
                      if (cResult[38] === tmp36) {
                        if (cResult[39] === tmp44) {
                          if (cResult[40] === tmp55) {
                            let tmp58 = cResult[41];
                          }
                          if (cResult[42] === tmp32) {
                            if (cResult[43] === tmp58) {
                              if (cResult[44] === tmp11) {
                                let tmp62 = cResult[45];
                              }
                              return tmp62;
                            }
                          }
                          const obj9 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: tmp11, children: null };
                          items = [tmp32, tmp58];
                          obj9.children = items;
                          const tmp65 = closure_9(closure_5, obj9);
                          cResult[42] = tmp32;
                          cResult[43] = tmp58;
                          cResult[44] = tmp11;
                          cResult[45] = tmp65;
                          tmp62 = tmp65;
                        }
                      }
                      const obj10 = { children: null };
                      const items1 = [tmp36, tmp44, tmp47, tmp55];
                      obj10.children = items1;
                      const tmp61 = closure_9(closure_10, obj10);
                      cResult[38] = tmp36;
                      cResult[39] = tmp44;
                      cResult[40] = tmp55;
                      cResult[41] = tmp61;
                      tmp58 = tmp61;
                    }
                    const obj11 = { size: "lg", text: tmp40, accessibilityLabel: tmp41, loading: submitting, disabled: submitting, onPress: onDone };
                    const tmp46 = closure_8(tmp(5376).Button, obj11);
                    cResult[30] = onDone;
                    cResult[31] = submitting;
                    cResult[32] = tmp46;
                    tmp44 = tmp46;
                  }
                }
                const obj12 = { children: null };
                const items2 = [tmp12, tmp22, tmp29];
                obj12.children = items2;
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
      const obj14 = { children: null };
      const obj15 = { style: tmp4.header, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
      const intl = tmp(1126).intl;
      obj15.children = intl.string(tmp(1126).t.jlfuFW);
      const items3 = [closure_8(tmp(5087).Text, obj15), ];
      const obj28 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = tmp(1126).intl;
      obj28.children = intl2.string(tmp(1126).t.lVvN3A);
      items3[1] = closure_8(tmp(5087).Text, obj28);
      obj14.children = items3;
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
  const obj2 = navigation(1503);
}) : (function JoinServer(arg0) {
  ({ onDone, submitting } = arg0);
  let navigation;
  ({ error, inviteString, onInviteChange } = arg0);
  const tmp = closure_11();
  navigation = navigation(1503).useNavigation();
  items = [navigation];
  const obj2 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: null, children: null };
  const items1 = [tmp.container, ];
  const obj3 = { paddingBottom: null };
  const callback = noop.useCallback(() => {
    navigation.push(constants.JOIN_STUDENT_HUB);
  }, items);
  obj3.paddingBottom = useSafeAreaInsetsKeyboardAwareDefault().insets.bottom + nativeDefault.space.PX_16;
  items1[1] = obj3;
  obj2.contentContainerStyle = items1;
  let tmp7Result = null;
  if (useWindowDimensionsDefault().height > closure_6) {
    const obj4 = { children: null };
    const obj5 = { style: tmp.header, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp4(1126).intl;
    obj5.children = intl.string(tmp4(1126).t.jlfuFW);
    const items2 = [closure_8(tmp4(5087).Text, obj5), ];
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp4(1126).intl;
    obj6.children = intl2.string(tmp4(1126).t.lVvN3A);
    items2[1] = closure_8(tmp4(5087).Text, obj6);
    obj4.children = items2;
    tmp7Result = closure_9(closure_10, obj4);
  }
  const obj7 = { children: null };
  const items3 = [tmp7Result, , ];
  const obj8 = { label: null, error: null, value: null, onChangeText: null, placeholder: null, accessibilityLabel: null, autoFocus: true, autoCapitalize: "none", autoCorrect: false, returnKeyType: "join", textStyle: null, onSubmitEditing: null };
  const obj = navigation(1503);
  const intl3 = tmp4(1126).intl;
  obj8.label = intl3.string(navigation(1126).t.qreV25);
  obj8.error = error;
  obj8.value = inviteString;
  obj8.onChangeText = onInviteChange;
  obj8.placeholder = placeholder;
  const intl4 = tmp4(1126).intl;
  obj8.accessibilityLabel = intl4.string(navigation(1126).t.qreV25);
  obj8.textStyle = tmp.textInput;
  obj8.onSubmitEditing = onDone;
  items3[1] = closure_8(FreeFormInputGroupDefault, obj8);
  const obj9 = { style: tmp.exampleText, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl5 = tmp4(1126).intl;
  obj9.children = intl5.format(navigation(1126).t.vwWaTe, {
    example1: items[0],
    example2: items[1],
    example3: items[2],
    exampleHook(children, arg1) {
      return closure_1_8(navigation(dependencyMap[10]).Text, { variant: "text-sm/medium", color: "text-default", children }, arg1);
    }
  });
  items3[2] = closure_8(navigation(5087).Text, obj9);
  obj7.children = items3;
  const items4 = [closure_9(closure_4, obj7), ];
  const obj11 = { children: null };
  const items5 = [closure_8(closure_4, { style: tmp.growSpacing }), , , ];
  const obj13 = { size: "lg", text: null, accessibilityLabel: null, loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(1126).intl;
  obj13.text = intl6.string(navigation(1126).t["+H/coT"]);
  const intl7 = tmp4(1126).intl;
  obj13.accessibilityLabel = intl7.string(navigation(1126).t["+H/coT"]);
  obj13.loading = submitting;
  obj13.disabled = submitting;
  obj13.onPress = onDone;
  items5[1] = closure_8(navigation(5376).Button, obj13);
  items5[2] = closure_8(closure_14, {});
  const obj14 = { size: "lg", variant: "secondary", text: null, accessibilityLabel: null, onPress: null };
  const intl8 = tmp4(1126).intl;
  obj14.text = intl8.string(navigation(1126).t["MOqX/G"]);
  const intl9 = tmp4(1126).intl;
  obj14.accessibilityLabel = intl9.string(navigation(1126).t["MOqX/G"]);
  obj14.onPress = callback;
  items5[3] = closure_8(navigation(5376).Button, obj14);
  obj11.children = items5;
  items4[1] = closure_9(closure_10, obj11);
  obj2.children = items4;
  return closure_9(closure_5, obj2);
});
export const OrSeparator = tmp5;
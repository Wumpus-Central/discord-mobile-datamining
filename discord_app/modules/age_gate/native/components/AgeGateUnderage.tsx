// === Module 16323: AgeGateUnderage ===

// Module 16323 (AgeGateUnderage)
import nativeDefault from "native" /* 587 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6624 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = 80;
  }
  const obj = { container: { alignItems: "center", justifyContent: "center", flex: 1, padding: 16, paddingTop: 0, paddingBottom: num, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, header: { marginTop: 16 }, body: { marginTop: 8, lineHeight: 20, textAlign: "center" }, buttonWrapper: { width: "100%", marginTop: 24 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateUnderage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AgeGateUnderage(onClose) {
  const cResult = onClose(576).c(34);
  onClose = onClose.onClose;
  ({ underageMessage, existingUser, fromRegister, disableSwipe } = onClose);
  importDefault = tmp4;
  dependencyMap = tmp6;
  const tmp8 = useWideAuthViewDefault();
  const tmp9 = closure_9(tmp8);
  let obj = onClose(576);
  const navigation = onClose(1503).useNavigation();
  if (cResult[0] === (undefined !== disableSwipe && disableSwipe)) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === navigation) {
        if (cResult[3] === onClose) {
          let tmp11 = cResult[4];
          let tmp12 = cResult[5];
        }
        const layoutEffect = navigation.useLayoutEffect(tmp11, tmp12);
        if (cResult[6] !== onClose) {
          const fn2 = function f() {
            onClose();
            return true;
          };
          cResult[6] = onClose;
          cResult[7] = fn2;
          let tmp15 = fn2;
        } else {
          tmp15 = cResult[7];
        }
        tmp(6211).useNavigatorBackPressHandler(tmp15);
        if (cResult[8] !== tmp4) {
          const intl = tmp(1126).intl;
          const string = intl.string;
          let t = tmp(1126).t;
          if (tmp4) {
            t = t["NR/zrG"];
            let stringResult = string(t);
          } else {
            stringResult = string(t.nCB6Ga);
          }
          cResult[8] = tmp4;
          cResult[9] = stringResult;
        } else {
          if (cResult[10] !== tmp8) {
            let tmp22 = null;
            if (!tmp8) {
              tmp22 = closure_6(tmp7(6655), {});
            }
            cResult[10] = tmp8;
            cResult[11] = tmp22;
            let tmp21 = tmp22;
          } else {
            tmp21 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp28 = closure_6(tmp7(6658), {});
            const tmp29 = closure_6(tmp(7513).ShieldSpotIllustration, {});
            cResult[12] = tmp29;
            cResult[13] = tmp28;
            let tmp26 = tmp28;
            let tmp25 = tmp29;
          } else {
            tmp25 = cResult[12];
            tmp26 = cResult[13];
          }
          if (cResult[14] === cResult[9]) {
            if (cResult[15] === tmp9.header) {
              let tmp30 = cResult[16];
            }
            if (cResult[17] === tmp5) {
              if (cResult[18] === underageMessage) {
                if (cResult[20] === tmp9.body) {
                  if (cResult[21] === tmp33) {
                    let tmp39 = cResult[22];
                  }
                  if (cResult[23] === tmp4) {
                    if (cResult[24] === onClose) {
                      if (cResult[25] === tmp9.body) {
                        if (cResult[26] === tmp9.buttonWrapper) {
                          let tmp42 = cResult[27];
                        }
                        if (cResult[28] === tmp9.container) {
                          if (cResult[29] === tmp30) {
                            if (cResult[30] === tmp39) {
                              if (cResult[31] === tmp42) {
                                if (cResult[32] === tmp21) {
                                  let tmp48 = cResult[33];
                                }
                                return tmp48;
                              }
                            }
                          }
                        }
                        let obj2 = { style: tmp9.container, children: null };
                        const items = [tmp21, tmp26, tmp25, tmp30, tmp39, tmp42];
                        obj2.children = items;
                        const tmp51 = closure_8(View, obj2);
                        cResult[28] = tmp9.container;
                        cResult[29] = tmp30;
                        cResult[30] = tmp39;
                        cResult[31] = tmp42;
                        cResult[32] = tmp21;
                        cResult[33] = tmp51;
                        tmp48 = tmp51;
                      }
                    }
                  }
                  let tmp43 = null;
                  if (tmp4) {
                    const obj3 = { children: null };
                    const obj4 = { style: tmp9.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
                    const intl4 = tmp(1126).intl;
                    obj4.children = intl4.format(tmp(1126).t["3axQdB"], { days: 30 });
                    const items1 = [closure_6(tmp(5087).Text, obj4), ];
                    const obj5 = { style: tmp9.buttonWrapper, children: null };
                    const obj6 = { onPress: onClose, text: null, grow: true };
                    const intl5 = tmp(1126).intl;
                    obj6.text = intl5.string(tmp(1126).t.JhDw5o);
                    obj5.children = closure_6(tmp(5376).Button, obj6);
                    items1[1] = closure_6(View, obj5);
                    obj3.children = items1;
                    tmp43 = closure_8(closure_7, obj3);
                  }
                  cResult[23] = tmp4;
                  cResult[24] = onClose;
                  cResult[25] = tmp9.body;
                  cResult[26] = tmp9.buttonWrapper;
                  cResult[27] = tmp43;
                  tmp42 = tmp43;
                }
                const obj7 = { style: tmp9.body, variant: "text-md/medium", color: "interactive-text-default", children: cResult[19] };
                const tmp41 = closure_6(tmp(5087).Text, obj7);
                cResult[20] = tmp9.body;
                cResult[21] = cResult[19];
                cResult[22] = tmp41;
                tmp39 = tmp41;
              }
            }
            const intl2 = tmp(1126).intl;
            if (tmp5) {
              let stringResult1 = intl2.string(tmp(1126).t.GDQgHL);
            } else {
              let stringResult2 = underageMessage;
              if (underageMessage == null) {
                const intl3 = tmp(1126).intl;
                stringResult2 = intl3.string(tmp(1126).t.WqEH4D);
              }
              const obj8 = { underageMessage: stringResult2, helpURL: tmp7(2127).getArticleURL(HelpdeskArticles.AGE_GATE) };
              stringResult1 = intl2.format(tmp(1126).t.b0QzXe, obj8);
              const tmp7Result = tmp7(2127);
            }
            cResult[17] = tmp5;
            cResult[18] = underageMessage;
            cResult[19] = stringResult1;
          }
          const obj9 = { style: tmp9.header, children: cResult[9] };
          const tmp32 = closure_6(tmp7(6654), obj9);
          cResult[14] = cResult[9];
          cResult[15] = tmp9.header;
          cResult[16] = tmp32;
          tmp30 = tmp32;
        }
        const tmpResult2 = tmp(6211);
      }
    }
  }
  let fn = function h() {
    if (closure_1) {
      let fn = () => null;
    } else {
      fn = NavigatorHeader.getHeaderBackButton(onClose);
    }
    navigation.setOptions({ headerLeft: fn, gestureEnabled: !closure_2 });
    const obj2 = { headerLeft: fn, gestureEnabled: !closure_2 };
  };
  const items2 = [onClose, undefined !== existingUser && existingUser, navigation, undefined !== disableSwipe && disableSwipe];
  cResult[0] = undefined !== disableSwipe && disableSwipe;
  cResult[1] = undefined !== existingUser && existingUser;
  cResult[2] = navigation;
  cResult[3] = onClose;
  cResult[4] = fn;
  cResult[5] = items2;
  tmp12 = items2;
  tmp11 = fn;
  const tmpResult = onClose(1503);
}) : (function AgeGateUnderage(onClose) {
  onClose = onClose.onClose;
  ({ underageMessage, existingUser } = onClose);
  if (existingUser === undefined) {
    existingUser = false;
  }
  let flag = onClose.fromRegister;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onClose.disableSwipe;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp3 = existingUser(flag2[8])();
  const tmp4 = closure_9(tmp3);
  const navigation = onClose(flag2[9]).useNavigation();
  const items = [onClose, existingUser, navigation, flag2];
  const layoutEffect = navigation.useLayoutEffect(() => {
    if (existingUser) {
      let fn = () => null;
    } else {
      fn = NavigatorHeader.getHeaderBackButton(onClose);
    }
    navigation.setOptions({ headerLeft: fn, gestureEnabled: !flag2 });
    const obj2 = { headerLeft: fn, gestureEnabled: !flag2 };
  }, items);
  let obj = onClose(flag2[9]);
  onClose(flag2[11]).useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  const intl = onClose(flag2[12]).intl;
  const string = intl.string;
  const t = onClose(flag2[12]).t;
  if (existingUser) {
    let stringResult = string(t["NR/zrG"]);
  } else {
    stringResult = string(t.nCB6Ga);
  }
  const obj3 = { style: tmp4.container, children: null };
  let tmp12 = null;
  if (!tmp3) {
    tmp12 = closure_6(tmp(tmp2[13]), {});
  }
  const items1 = [tmp12, closure_6(existingUser(flag2[14]), {}), closure_6(onClose(flag2[15]).ShieldSpotIllustration, {}), closure_6(existingUser(flag2[16]), { style: tmp4.header, children: stringResult }), , ];
  const obj5 = { style: tmp4.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
  const intl2 = tmp5(tmp2[12]).intl;
  if (flag) {
    let stringResult1 = intl2.string(tmp5(tmp2[12]).t.GDQgHL);
  } else {
    if (underageMessage == null) {
      const intl3 = tmp5(tmp2[12]).intl;
      underageMessage = intl3.string(tmp5(tmp2[12]).t.WqEH4D);
    }
    const obj6 = { underageMessage, helpURL: tmp(tmp2[17]).getArticleURL(HelpdeskArticles.AGE_GATE) };
    stringResult1 = intl2.format(tmp5(tmp2[12]).t.b0QzXe, obj6);
    const tmpResult = tmp(tmp2[17]);
  }
  obj5.children = stringResult1;
  items1[4] = closure_6(onClose(flag2[18]).Text, obj5);
  let tmp10Result = null;
  if (existingUser) {
    const obj7 = { children: null };
    const obj8 = { style: tmp4.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
    const intl4 = tmp5(tmp2[12]).intl;
    obj8.children = intl4.format(tmp5(tmp2[12]).t["3axQdB"], { days: 30 });
    const items2 = [closure_6(tmp5(tmp2[18]).Text, obj8), ];
    const obj9 = { style: tmp4.buttonWrapper, children: null };
    const obj10 = { onPress: onClose, text: null, grow: true };
    const intl5 = tmp5(tmp2[12]).intl;
    obj10.text = intl5.string(tmp5(tmp2[12]).t.JhDw5o);
    obj9.children = closure_6(tmp5(tmp2[19]).Button, obj10);
    items2[1] = closure_6(View, obj9);
    obj7.children = items2;
    tmp10Result = closure_8(closure_7, obj7);
  }
  items1[5] = tmp10Result;
  obj3.children = items1;
  return closure_8(View, obj3);
});
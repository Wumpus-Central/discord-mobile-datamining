// === Module 10731: ConjureRemixSheet ===

// Module 10731 (ConjureRemixSheet)
import nativeDefault from "native" /* 587 */;
import TableRadioRow from "TableRadioRow" /* 7020 */;
import ConjureRemix from "ConjureRemix" /* 10732 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4878 */;
import SortedGuildStore from "SortedGuildStore" /* 6736 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const ConjureRemixSheet = "ConjureRemixSheet";
const createStyles = fn(5004);
let closure_12 = createStyles.createStyles((paddingBottom) => {
  const obj = { scroll: { flex: 1, minHeight: 0 }, list: { paddingBottom }, footer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, footerBody: null };
  const obj2 = { paddingBottom };
  const obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  obj.footerBody = { gap: nativeDefault.space.PX_16 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemixSheet(project) {
  const cResult = require("c").c(54);
  project = project.project;
  _require = project;
  const currentGuildId = project.currentGuildId;
  onRemixed = project.onRemixed;
  [value, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  let obj = require("c");
  let obj2 = first1;
  [tmp9, GuildStore] = first1.useState(null);
  const tmp8 = _slicedToArray(first1.useState(null), 2);
  [tmp11, SortedGuildStore] = first1.useState(0);
  const tmp12 = _slicedToArray(first1.useState(0), 2);
  closure_9 = tmp12[1];
  const tmp13 = closure_12(tmp12[0]);
  closure_10 = first1.useRef(null);
  if (cResult[0] === currentGuildId) {
    if (cResult[1] === project) {
      let tmp14 = cResult[2];
    }
    if (cResult[3] === tmp11) {
      if (cResult[4] === currentGuildId) {
        if (cResult[5] === project) {
          let tmp15 = cResult[6];
        }
        const effect = obj2.useEffect(tmp14, tmp15);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [SortedGuildStore, GuildStore];
          const fn2 = function x() {
            const items = [];
            flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
            while (tmp2 !== undefined) {
              guild = guild.getGuild(tmp3);
              let tmp6 = guild;
              let result = null != guild;
              if (result) {
                let obj = closure_0(onRemixed[12]);
                result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
              }
              if (result) {
                let arr = items.push(tmp6);
              }
              continue;
            }
            return items;
          };
          cResult[7] = items;
          cResult[8] = fn2;
          let tmp19 = fn2;
          let tmp18 = items;
        } else {
          tmp18 = cResult[7];
          tmp19 = cResult[8];
        }
        const stateFromStoresArray = tmp(tmp2[13]).useStateFromStoresArray(tmp18, tmp19);
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[14]).intl;
          const stringResult = intl.string(currentGuildId(tmp2[15])["maL0+X"]);
          cResult[9] = stringResult;
          let tmp22 = stringResult;
        } else {
          tmp22 = cResult[9];
        }
        if (cResult[10] === value) {
          if (cResult[11] === stateFromStoresArray) {
            closure_11 = tmp25;
            if (cResult[15] === value) {
              if (cResult[16] === tmp25) {
                if (cResult[17] === onRemixed) {
                  if (cResult[18] === first1) {
                    let tmp29 = cResult[19];
                  }
                  closure_12 = tmp29;
                  const _Symbol3 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    function te(nativeEvent) {
                      closure_9(nativeEvent.nativeEvent.layout.height);
                    }
                    cResult[20] = te;
                    let tmp31 = te;
                  } else {
                    tmp31 = cResult[20];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj3 = { title: tmp22 };
                    const tmp34 = closure_9(tmp(tmp2[17]).BottomSheetTitleHeader, obj3);
                    cResult[21] = tmp34;
                    let tmp32 = tmp34;
                  } else {
                    tmp32 = cResult[21];
                  }
                  ({ footer, footerBody } = tmp13);
                  if (cResult[22] !== tmp9) {
                    let tmp36 = null;
                    if (null != tmp9) {
                      let obj4 = { accessibilityRole: "alert", children: null };
                      let obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp9 };
                      obj4.children = closure_9(tmp(tmp2[18]).Text, obj5);
                      tmp36 = closure_9(closure_6, obj4);
                    }
                    cResult[22] = tmp9;
                    cResult[23] = tmp36;
                    let tmp35 = tmp36;
                  } else {
                    tmp35 = cResult[23];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[14]).intl;
                    const stringResult1 = intl2.string(currentGuildId(tmp2[15]).XWgAfc);
                    cResult[24] = stringResult1;
                    let tmp39 = stringResult1;
                  } else {
                    tmp39 = cResult[24];
                  }
                  if (cResult[25] !== tmp29) {
                    function ce() {
                      closure_12().catch(() => {

                      });
                    }
                    cResult[25] = tmp29;
                    cResult[26] = ce;
                    let tmp43 = ce;
                  } else {
                    tmp43 = cResult[26];
                  }
                  if (cResult[27] === first1) {
                    if (cResult[28] === tmp42) {
                      if (cResult[29] === tmp43) {
                        let tmp44 = cResult[30];
                      }
                      if (cResult[31] === tmp13.footerBody) {
                        if (cResult[32] === tmp35) {
                          if (cResult[33] === tmp44) {
                            let tmp47 = cResult[34];
                          }
                          if (cResult[35] === tmp13.footer) {
                            if (cResult[36] === tmp47) {
                              let tmp50 = cResult[37];
                            }
                            const _Symbol6 = Symbol;
                            ({ scroll, list } = tmp13);
                            if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                              function fe(arg0) {
                                return closure_4(arg0);
                              }
                              cResult[38] = fe;
                              let tmp54 = fe;
                            } else {
                              tmp54 = cResult[38];
                            }
                            if (cResult[39] === stateFromStoresArray) {
                              if (cResult[40] === first1) {
                                if (cResult[44] === value) {
                                  if (cResult[45] === tmp55) {
                                    let tmp59 = cResult[46];
                                  }
                                  if (cResult[47] === tmp13.list) {
                                    if (cResult[48] === tmp13.scroll) {
                                      if (cResult[49] === tmp59) {
                                        let tmp62 = cResult[50];
                                      }
                                      if (cResult[51] === tmp50) {
                                        if (cResult[52] === tmp62) {
                                          let tmp65 = cResult[53];
                                        }
                                        return tmp65;
                                      }
                                      let obj6 = { scrollable: true, header: tmp32, footer: tmp50, children: tmp62 };
                                      const tmp67 = closure_9(tmp(tmp2[24]).ActionSheet, obj6);
                                      cResult[51] = tmp50;
                                      cResult[52] = tmp62;
                                      cResult[53] = tmp67;
                                      tmp65 = tmp67;
                                    }
                                  }
                                  const obj7 = { style: scroll, contentContainerStyle: list, children: tmp59 };
                                  const tmp64 = closure_9(tmp(tmp2[23]).BottomSheetScrollView, obj7);
                                  cResult[47] = tmp13.list;
                                  cResult[48] = tmp13.scroll;
                                  cResult[49] = tmp59;
                                  cResult[50] = tmp64;
                                  tmp62 = tmp64;
                                }
                                const obj8 = { hasIcons: false, value, onChange: tmp54, accessibilityLabel: tmp22, children: cResult[41] };
                                const tmp61 = closure_9(tmp(tmp2[22]).TableRadioGroup, obj8);
                                cResult[44] = value;
                                cResult[45] = cResult[41];
                                cResult[46] = tmp61;
                                tmp59 = tmp61;
                              }
                            }
                            if (cResult[42] !== first1) {
                              function ve(label) {
                                return React6(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first1 }, label.id);
                              }
                              cResult[42] = first1;
                              cResult[43] = ve;
                              let tmp56 = ve;
                            } else {
                              tmp56 = cResult[43];
                            }
                            const mapped = stateFromStoresArray.map(tmp56);
                            cResult[39] = stateFromStoresArray;
                            cResult[40] = first1;
                            cResult[41] = mapped;
                          }
                          const obj9 = { style: footer, onLayout: tmp31, children: tmp47 };
                          const tmp53 = closure_9(closure_6, obj9);
                          cResult[35] = tmp13.footer;
                          cResult[36] = tmp47;
                          cResult[37] = tmp53;
                          tmp50 = tmp53;
                        }
                      }
                      const obj10 = { bottom: true, style: footerBody, children: null };
                      const items1 = [tmp35, tmp44];
                      obj10.children = items1;
                      const tmp49 = closure_10(tmp(tmp2[20]).SafeAreaPaddingView, obj10);
                      cResult[31] = tmp13.footerBody;
                      cResult[32] = tmp35;
                      cResult[33] = tmp44;
                      cResult[34] = tmp49;
                      tmp47 = tmp49;
                    }
                  }
                  const obj11 = { variant: "primary", size: "md", text: tmp39, loading: first1, disabled: !tmp25, onPress: tmp43 };
                  const tmp46 = closure_9(tmp(tmp2[19]).Button, obj11);
                  cResult[27] = first1;
                  cResult[28] = !tmp25;
                  cResult[29] = tmp43;
                  cResult[30] = tmp46;
                  tmp44 = tmp46;
                }
              }
            }
            _require = value(function*() {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c3 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      closure_1 = tmp5;
                      closure_0 = tmp2;
                      closure_128_0 = undefined;
                      if (!first1) {
                        if (closure_1_11) {
                          if (null != ref.current) {
                            closure_1_6(true);
                            guild(null);
                            const current = tmp25.current;
                            v1 = 1;
                            c3 = 1;
                            const obj4 = { value: current.open(c3), done: false };
                            return obj4;
                          }
                        }
                      }
                      c3 = 3;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    closure_128_0 = value;
                    if (!closure_128_0.ok) {
                      guild(closure_128_0.message);
                      if (!closure_128_0.kept) {
                        flattenedGuildIds((arg0) => arg0 + 1);
                      }
                      closure_1_6(false);
                    }
                  }
                  currentGuildId(onRemixed[16]).hideActionSheet(closure_11);
                  v1(closure_128_0.projectId, closure_128_0.guildId);
                  c3 = 3;
                  const obj6 = { value: undefined, done: true };
                  return obj6;
                } catch (tmp32) {
                  c3 = tmp;
                  throw tmp32;
                }
              }
            });
            function t7() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            cResult[15] = value;
            cResult[16] = cResult[12];
            cResult[17] = onRemixed;
            cResult[18] = first1;
            cResult[19] = t7;
            tmp29 = t7;
          }
        }
        if (cResult[13] !== value) {
          class Q {
            constructor(arg0) {
              return project.id === closure_3;
            }
          }
          cResult[13] = value;
          cResult[14] = Q;
        } else {
          class Q {
            constructor(arg0) {
              return project.id === closure_3;
            }
          }
        }
        const someResult = stateFromStoresArray.some(Q);
        cResult[10] = value;
        cResult[11] = stateFromStoresArray;
        cResult[12] = someResult;
        const tmpResult = tmp(tmp2[13]);
      }
    }
    const items2 = [project, currentGuildId, tmp11];
    cResult[3] = tmp11;
    cResult[4] = currentGuildId;
    cResult[5] = project;
    cResult[6] = items2;
    tmp15 = items2;
  }
  const fn = function y() {
    const prepareConjureRemixResult = ConjureRemix.prepareConjureRemix(closure_0, currentGuildId);
    closure_0 = prepareConjureRemixResult;
    closure_10.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  };
  cResult[0] = currentGuildId;
  cResult[1] = project;
  cResult[2] = fn;
  tmp14 = fn;
  let tmp10 = _slicedToArray(first1.useState(0), 2);
}) : (function ConjureRemixSheet(project) {
  project = project.project;
  const currentGuildId = project.currentGuildId;
  let onRemixed = project.onRemixed;
  value = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_12 = undefined;
  [value, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  [tmp6, c7] = first1.useState(null);
  const tmp5 = _slicedToArray(first1.useState(null), 2);
  [tmp8, c8] = first1.useState(0);
  const tmp9 = _slicedToArray(first1.useState(0), 2);
  closure_9 = tmp9[1];
  let tmp10 = closure_12(tmp9[0]);
  closure_10 = first1.useRef(null);
  let items = [project, currentGuildId, tmp8];
  const effect = first1.useEffect(() => {
    const prepareConjureRemixResult = ConjureRemix.prepareConjureRemix(project, currentGuildId);
    project = prepareConjureRemixResult;
    closure_10.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  }, items);
  const tmp7 = _slicedToArray(first1.useState(0), 2);
  const items1 = [c8, c7];
  const stateFromStoresArray = project(onRemixed[13]).useStateFromStoresArray(items1, () => {
    const items = [];
    const flattenedGuildIds = _undefined2.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      guild = _undefined.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(onRemixed[12]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const intl = project(onRemixed[14]).intl;
  const stringResult = intl.string(currentGuildId(onRemixed[15])["maL0+X"]);
  const someResult = stateFromStoresArray.some((id) => id.id === first);
  c11 = someResult;
  const items2 = [value, someResult, onRemixed, first1];
  closure_12 = first1.useCallback(value(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === onRemixed) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            if (!first1) {
              if (c11) {
                if (null != ref.current) {
                  closure_6(true);
                  _undefined(null);
                  const current = tmp25.current;
                  onRemixed = 1;
                  c3 = 1;
                  const obj4 = { value: current.open(first), done: false };
                  return obj4;
                }
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          if (!closure_128_0.ok) {
            closure_129_7(closure_128_0.message);
            if (!closure_128_0.kept) {
              closure_129_8((arg0) => arg0 + 1);
            }
            closure_129_6(false);
          }
        }
        tmp5(onRemixed[16]).hideActionSheet(closure_1_11);
        closure_129_2(closure_128_0.projectId, closure_128_0.guildId);
        c3 = 3;
        const obj6 = { value: undefined, done: true };
        return obj6;
      } catch (tmp32) {
        c3 = tmp;
        throw tmp32;
      }
    }
  }), items2);
  const callback = first1.useCallback((nativeEvent) => {
    closure_9(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj2 = { scrollable: true, header: closure_9(project(onRemixed[17]).BottomSheetTitleHeader, { title: stringResult }), footer: null, children: null };
  let obj3 = { style: tmp10.footer, onLayout: callback, children: null };
  let obj4 = { bottom: true, style: tmp10.footerBody, children: null };
  let tmp18Result = null;
  if (null != tmp6) {
    let obj5 = { accessibilityRole: "alert", children: null };
    let obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp6 };
    obj5.children = tmp18(tmp12(tmp13[18]).Text, obj6);
    tmp18Result = tmp18(tmp19, obj5);
  }
  const items3 = [tmp18Result, ];
  const obj7 = { variant: "primary", size: "md", text: null, loading: null, disabled: null, onPress: null };
  const intl2 = tmp12(tmp13[14]).intl;
  obj7.text = intl2.string(currentGuildId(onRemixed[15]).XWgAfc);
  obj7.loading = first1;
  obj7.disabled = !someResult;
  obj7.onPress = function onPress() {
    closure_12().catch(() => {

    });
  };
  items3[1] = closure_9(project(onRemixed[19]).Button, obj7);
  obj4.children = items3;
  obj3.children = closure_10(project(onRemixed[20]).SafeAreaPaddingView, obj4);
  obj2.footer = closure_9(closure_6, obj3);
  const obj8 = { style: tmp10.scroll, contentContainerStyle: tmp10.list, children: null };
  let obj = project(onRemixed[13]);
  obj8.children = closure_9(project(onRemixed[22]).TableRadioGroup, {
    hasIcons: false,
    value,
    onChange(arg0) {
      return closure_4(arg0);
    },
    accessibilityLabel: stringResult,
    children: stateFromStoresArray.map((label) => React6(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first1 }, label.id))
  });
  obj2.children = closure_9(project(onRemixed[23]).BottomSheetScrollView, obj8);
  return closure_9(project(onRemixed[24]).ActionSheet, obj2);
});
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";
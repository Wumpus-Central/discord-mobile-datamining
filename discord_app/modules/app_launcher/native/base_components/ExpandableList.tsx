// === Module 11794: ExpandableList ===

// Module 11794 (ExpandableList)
import timing from "timing" /* 5093 */;
import timingPresets from "timingPresets" /* 5096 */;
import usePreviousDefault from "usePrevious" /* 5922 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = tmp4(4850);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
const __initData = { code: "function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
const __initData2 = { code: "function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
const __initData3 = { code: "function ExpandableListTsx3(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
const __initData4 = { code: "function ExpandableListTsx4(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ExpandableList(onExpandCTAPress) {
  let obj = expandedOverride;
  const cResult = onExpand(expandedOverride[6]).c(50);
  ({ items, onExpand } = onExpandCTAPress);
  onExpandCTAPress = onExpandCTAPress.onExpandCTAPress;
  expandedOverride = onExpandCTAPress.expandedOverride;
  ({ showsExpandCTAOverride, disableExpanding } = onExpandCTAPress);
  const title = onExpandCTAPress.title;
  const tmp3 = derivedValue();
  let flag = expandedOverride;
  if (expandedOverride == null) {
    flag = false;
  }
  const tmp4 = disableExpanding(first.useState(flag), 2);
  first = tmp4[0];
  closure_5 = tmp4[1];
  let tmp7 = onExpandCTAPress(obj[7])(first);
  if (tmp7 == null) {
    tmp7 = first;
  }
  first = tmp7;
  if (cResult[0] === first) {
    if (cResult[1] === onExpand) {
      if (cResult[2] === tmp7) {
        let tmp8 = cResult[3];
        let tmp9 = cResult[4];
      }
      const effect = obj3.useEffect(tmp8, tmp9);
      if (cResult[5] !== expandedOverride) {
        const fn2 = function f() {
          if (undefined !== expandedOverride) {
            closure_5(tmp);
          }
        };
        const items1 = [expandedOverride];
        cResult[5] = expandedOverride;
        cResult[6] = fn2;
        cResult[7] = items1;
        let tmp12 = items1;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[6];
        tmp12 = cResult[7];
      }
      const effect1 = obj3.useEffect(tmp11, tmp12);
      const _Math = Math;
      const bound = Math.min(4, items.length);
      if (null == showsExpandCTAOverride) {
        showsExpandCTAOverride = items.length > bound;
      }
      const sharedValue = onExpand(obj[8]).useSharedValue(0);
      const tmpResult = onExpand(obj[8]);
      const sharedValue1 = onExpand(obj[8]).useSharedValue(0);
      const tmpResult4 = onExpand(obj[8]);
      class D {
        constructor() {
          if (closure_4) {
            obj = closure_7;
            num = 0;
            if (0 !== closure_7.get()) {
              obj2 = closure_8;
              if (0 !== closure_8.get()) {
                value = obj.get();
                sum = value + obj2.get();
              }
              return sum;
            }
          }
          sum = closure_7.get();
          return;
        }
      }
      const obj4 = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
      D.__closure = obj4;
      D.__workletHash = 17033418452229;
      D.__initData = __initData;
      derivedValue = onExpand(obj[8]).useDerivedValue(D);
      if (cResult[8] === bound) {
        if (cResult[9] === items) {
          let tmp20 = cResult[10];
        }
        if (cResult[11] === bound) {
          if (cResult[12] === items) {
            let arr3 = cResult[13];
          }
          const fn3 = function q() {
            if (0 !== sharedValue.get()) {
              const obj2 = { height: null };
              value = derivedValue.get();
              obj2.height = timing.withTiming(value, timingPresets.timingStandard);
              let obj = obj2;
            } else {
              obj = {};
            }
            return obj;
          };
          const obj5 = { collapsedListHeight: sharedValue, withTiming: onExpand(obj[9]).withTiming, containerHeight: derivedValue, timingStandard: onExpand(obj[10]).timingStandard };
          fn3.__closure = obj5;
          fn3.__workletHash = 2086836441465;
          fn3.__initData = __initData2;
          const animatedStyle = onExpand(obj[8]).useAnimatedStyle(fn3);
          if (cResult[14] === disableExpanding) {
            if (cResult[15] === first) {
              if (cResult[16] === onExpandCTAPress) {
                let tmp25 = cResult[17];
              }
              if (cResult[18] !== sharedValue) {
                function handleCollapsedListLayout(nativeEvent) {
                  const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
                }
                cResult[18] = sharedValue;
                cResult[19] = handleCollapsedListLayout;
                let tmp26 = handleCollapsedListLayout;
              } else {
                tmp26 = cResult[19];
              }
              if (cResult[20] !== sharedValue1) {
                function handleRemainingListLayout(nativeEvent) {
                  const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
                }
                cResult[20] = sharedValue1;
                cResult[21] = handleRemainingListLayout;
                let tmp27 = handleRemainingListLayout;
              } else {
                tmp27 = cResult[21];
              }
              const _Symbol = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                function renderItems(hasListEnd) {
                  const items = hasListEnd.items;
                  hasListEnd = hasListEnd.hasListEnd;
                  closure_1 = undefined !== hasListEnd && hasListEnd;
                  return items.map((fn, index) => {
                    let isLastRow = closure_1;
                    if (isLastRow) {
                      isLastRow = index === items.length - 1;
                    }
                    return fn({ isLastRow });
                  });
                }
                cResult[22] = renderItems;
                let tmp28 = renderItems;
              } else {
                tmp28 = cResult[22];
              }
              if (cResult[23] === animatedStyle) {
                let tmp30 = !showsExpandCTAOverride;
                if (!showsExpandCTAOverride) {
                  tmp30 = !first;
                }
                if (cResult[26] === tmp20) {
                  if (cResult[27] === tmp30) {
                    let tmp31 = cResult[28];
                  }
                  if (cResult[29] === tmp26) {
                    if (cResult[30] === tmp31) {
                      let tmp33 = cResult[31];
                    }
                    if (cResult[32] === first) {
                      if (cResult[33] === tmp27) {
                        if (cResult[34] === arr3) {
                          if (cResult[35] === showsExpandCTAOverride) {
                            let tmp37 = cResult[36];
                          }
                          if (cResult[37] === tmp29) {
                            if (cResult[38] === tmp33) {
                              if (cResult[39] === tmp37) {
                                let tmp41 = cResult[40];
                              }
                              if (cResult[41] === first) {
                                if (cResult[42] === tmp25) {
                                  if (cResult[43] === showsExpandCTAOverride) {
                                    if (cResult[44] === tmp3.expandCTALabelContainer) {
                                      if (cResult[45] === title) {
                                        let tmp44 = cResult[46];
                                      }
                                      if (cResult[47] === tmp41) {
                                        if (cResult[48] === tmp44) {
                                          let tmp51 = cResult[49];
                                        }
                                        return tmp51;
                                      }
                                      const obj6 = { children: null };
                                      const items2 = [tmp41, tmp44];
                                      obj6.children = items2;
                                      const tmp54 = sharedValue(sharedValue1, obj6);
                                      cResult[47] = tmp41;
                                      cResult[48] = tmp44;
                                      cResult[49] = tmp54;
                                      tmp51 = tmp54;
                                    }
                                  }
                                }
                              }
                              if (!showsExpandCTAOverride) {
                                cResult[41] = first;
                                cResult[42] = tmp25;
                                cResult[43] = showsExpandCTAOverride;
                                cResult[44] = tmp3.expandCTALabelContainer;
                                cResult[45] = title;
                                cResult[46] = showsExpandCTAOverride;
                                tmp44 = showsExpandCTAOverride;
                              } else {
                                if (first) {
                                  const intl2 = onExpand(obj[12]).intl;
                                  let stringResult = intl2.string(onExpand(obj[12]).t.nPGLFQ);
                                } else if (null != title) {
                                  const intl = onExpand(obj[12]).intl;
                                  const obj7 = { title };
                                  stringResult = intl.formatToPlainString(onExpand(obj[12]).t["bj/2kV"], obj7);
                                }
                                let obj8 = { accessibilityLabel: stringResult, label: null, onPress: null, end: true };
                                let obj9 = { style: tmp3.expandCTALabelContainer, children: null };
                                const intl3 = onExpand(obj[12]).intl;
                                if (first) {
                                  let stringResult1 = intl3.string(onExpand(obj[12]).t.nPGLFQ);
                                } else {
                                  stringResult1 = intl3.format(onExpand(obj[12]).t.gVw57p, {});
                                }
                                obj = { children: null };
                                const obj10 = { color: "text-brand", variant: "text-md/semibold", children: stringResult1 };
                                obj9.children = first(onExpand(obj[13]).Text, obj10);
                                obj9 = tmp46(tmp47, obj9);
                                obj8.label = obj9;
                                class D {
                                  constructor() {
                                    if (closure_4) {
                                      obj = closure_7;
                                      num = 0;
                                      if (0 !== closure_7.get()) {
                                        obj2 = closure_8;
                                        if (0 !== closure_8.get()) {
                                          value = obj.get();
                                          sum = value + obj2.get();
                                        }
                                        return sum;
                                      }
                                    }
                                    sum = closure_7.get();
                                    return;
                                  }
                                }
                                obj8 = tmp46(onExpand(obj[11]).TableRow, obj8);
                                obj.children = obj8;
                                first(closure_5, obj);
                              }
                            }
                          }
                          const obj11 = { style: tmp29, children: null };
                          const items3 = [tmp33, tmp37];
                          obj11.children = items3;
                          cResult[37] = tmp29;
                          cResult[38] = tmp33;
                          cResult[39] = tmp37;
                          class D {
                            constructor() {
                              if (closure_4) {
                                obj = closure_7;
                                num = 0;
                                if (0 !== closure_7.get()) {
                                  obj2 = closure_8;
                                  if (0 !== closure_8.get()) {
                                    value = obj.get();
                                    sum = value + obj2.get();
                                  }
                                  return sum;
                                }
                              }
                              sum = closure_7.get();
                              return;
                            }
                          }
                          tmp41 = sharedValue(tmp6(obj[8]).View, obj11);
                          const tmp43 = sharedValue(tmp6(obj[8]).View, obj11);
                        }
                      }
                    }
                    let tmp39Result = arr3.length > 0;
                    if (tmp39Result) {
                      const obj12 = { onLayout: tmp27, accessibilityElementsHidden: !first, importantForAccessibility: "no-hide-descendants", children: null };
                      const obj13 = { items: arr3, hasListEnd: !showsExpandCTAOverride };
                      obj12.children = tmp28(obj13);
                      tmp39Result = first(closure_5, obj12);
                    }
                    cResult[32] = first;
                    cResult[33] = tmp27;
                    cResult[34] = arr3;
                    cResult[35] = showsExpandCTAOverride;
                    cResult[36] = tmp39Result;
                    tmp37 = tmp39Result;
                  }
                  const obj14 = { onLayout: tmp26, children: tmp31 };
                  const tmp36 = first(closure_5, obj14);
                  cResult[29] = tmp26;
                  cResult[30] = tmp31;
                  cResult[31] = tmp36;
                  tmp33 = tmp36;
                }
                const obj15 = { items: tmp20, hasListEnd: tmp30 };
                const tmp28Result = tmp28(obj15);
                cResult[26] = tmp20;
                cResult[27] = tmp30;
                cResult[28] = tmp28Result;
                tmp31 = tmp28Result;
              }
              const items4 = [tmp3.animatedListContainer, animatedStyle];
              cResult[23] = animatedStyle;
              cResult[24] = tmp3.animatedListContainer;
              cResult[25] = items4;
              class D {
                constructor() {
                  if (closure_4) {
                    obj = closure_7;
                    num = 0;
                    if (0 !== closure_7.get()) {
                      obj2 = closure_8;
                      if (0 !== closure_8.get()) {
                        value = obj.get();
                        sum = value + obj2.get();
                      }
                      return sum;
                    }
                  }
                  sum = closure_7.get();
                  return;
                }
              }
            }
          }
          function handleExpandCTAPress() {
            let tmp = true !== disableExpanding;
            if (tmp) {
              tmp = !first;
            }
            closure_5(tmp);
            if (onExpandCTAPress != null) {
              const obj = { expanded: tmp };
              tmp4(obj);
            }
          }
          class D {
            constructor() {
              if (closure_4) {
                obj = closure_7;
                num = 0;
                if (0 !== closure_7.get()) {
                  obj2 = closure_8;
                  if (0 !== closure_8.get()) {
                    value = obj.get();
                    sum = value + obj2.get();
                  }
                  return sum;
                }
              }
              sum = closure_7.get();
              return;
            }
          }
          cResult[14] = disableExpanding;
          cResult[15] = first;
          cResult[16] = onExpandCTAPress;
          cResult[17] = handleExpandCTAPress;
          tmp25 = handleExpandCTAPress;
          const tmpResult6 = onExpand(obj[8]);
        }
        const substr = items.slice(bound, items.length);
        cResult[11] = bound;
        cResult[12] = items;
        cResult[13] = substr;
        arr3 = substr;
      }
      const substr1 = items.slice(0, bound);
      cResult[8] = bound;
      cResult[9] = items;
      cResult[10] = substr1;
      tmp20 = substr1;
      const tmpResult5 = onExpand(obj[8]);
    }
  }
  const fn = function p() {
    if (tmp) {
      if (onExpand != null) {
        tmp2();
      }
    }
  };
  const items5 = [first, onExpand, tmp7];
  cResult[0] = first;
  cResult[1] = onExpand;
  cResult[2] = tmp7;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp9 = items5;
  tmp8 = fn;
  let obj2 = onExpand(expandedOverride[6]);
  tmp6 = onExpandCTAPress;
}) : (function ExpandableList(onExpand) {
  const items = onExpand.items;
  let memo1 = items;
  onExpand = onExpand.onExpand;
  importDefault = onExpand;
  ({ onExpandCTAPress: dependencyMap, expandedOverride } = onExpand);
  ({ showsExpandCTAOverride, disableExpanding: noop, title } = onExpand);
  closure_6 = undefined;
  let first;
  let bound;
  let sharedValue;
  let sharedValue1;
  let derivedValue;
  let tmp = sharedValue();
  let flag = expandedOverride;
  if (expandedOverride == null) {
    flag = false;
  }
  const tmp2 = expandedOverride(noop.useState(flag), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  let obj14 = dependencyMap;
  let tmp5 = usePreviousDefault(first);
  if (tmp5 == null) {
    tmp5 = first;
  }
  first = tmp5;
  const items1 = [first, onExpand, tmp5];
  const effect = noop.useEffect(() => {
    if (tmp) {
      if (closure_1 != null) {
        tmp2();
      }
    }
  }, items1);
  const items2 = [expandedOverride];
  const effect1 = noop.useEffect(() => {
    if (undefined !== expandedOverride) {
      closure_6(tmp);
    }
  }, items2);
  bound = Math.min(4, items.length);
  if (null == showsExpandCTAOverride) {
    showsExpandCTAOverride = items.length > bound;
  }
  sharedValue = memo1(4850).useSharedValue(0);
  let obj3 = memo1(4850);
  sharedValue1 = memo1(4850).useSharedValue(0);
  const obj4 = memo1(4850);
  class S {
    constructor() {
      if (closure_5) {
        obj = closure_9;
        num = 0;
        if (0 !== closure_9.get()) {
          obj2 = closure_10;
          if (0 !== closure_10.get()) {
            value = obj.get();
            sum = value + obj2.get();
          }
          return sum;
        }
      }
      sum = closure_9.get();
      return;
    }
  }
  S.__closure = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
  S.__workletHash = 15615156859143;
  S.__initData = __initData3;
  derivedValue = memo1(4850).useDerivedValue(S);
  const items3 = [items, bound];
  const memo = noop.useMemo(() => memo1.slice(0, bound), items3);
  const items4 = [items, bound];
  memo1 = noop.useMemo(() => memo1.slice(bound, memo1.length), items4);
  const obj5 = memo1(4850);
  class A {
    constructor() {
      if (0 !== closure_9.get()) {
        obj1 = { height: null };
        tmp = closure_0;
        tmp2 = closure_2;
        obj3 = closure_0(closure_2[9]);
        tmp3 = closure_11;
        value = closure_11.get();
        obj1.height = obj3.withTiming(value, closure_0(closure_2[10]).timingStandard);
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }
  const obj6 = memo1(4850);
  A.__closure = { collapsedListHeight: sharedValue, withTiming: memo1(5093).withTiming, containerHeight: derivedValue, timingStandard: memo1(5096).timingStandard };
  A.__workletHash = 16625034396799;
  A.__initData = __initData4;
  const animatedStyle = obj6.useAnimatedStyle(A);
  const obj7 = { style: null, children: null };
  const items5 = [tmp.animatedListContainer, animatedStyle];
  obj7.style = items5;
  const obj8 = {
    onLayout: function handleCollapsedListLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  let tmp18 = !showsExpandCTAOverride;
  if (!showsExpandCTAOverride) {
    tmp18 = !first;
  }
  memo1 = memo;
  importDefault = tmp18;
  obj8.children = memo.map((fn, index) => {
    let isLastRow = closure_1;
    if (isLastRow) {
      isLastRow = index === memo1.length - 1;
    }
    return fn({ isLastRow });
  });
  const items6 = [closure_6(first, obj8), ];
  let tmp16Result = memo1.length > 0;
  if (tmp16Result) {
    const obj9 = {
      onLayout: function handleRemainingListLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        },
      accessibilityElementsHidden: !first,
      importantForAccessibility: "no-hide-descendants",
      children: null
    };
    importDefault = !showsExpandCTAOverride;
    obj9.children = memo1.map((fn, index) => {
      let isLastRow = closure_1;
      if (isLastRow) {
        isLastRow = index === memo1.length - 1;
      }
      return fn({ isLastRow });
    });
    tmp16Result = tmp16(tmp17, obj9);
  }
  items6[1] = tmp16Result;
  obj7.children = items6;
  const items7 = [first(ReanimatedRexportDefault.View, obj7), ];
  if (!showsExpandCTAOverride) {
    const obj10 = { children: null };
    items7[1] = showsExpandCTAOverride;
    obj10.children = items7;
    return tmp14(tmp15, obj10);
  } else {
    if (first) {
      const intl2 = tmp9(1126).intl;
      let stringResult = intl2.string(tmp9(1126).t.nPGLFQ);
    } else if (null != title) {
      const intl = tmp9(1126).intl;
      const obj11 = { title };
      stringResult = intl.formatToPlainString(tmp9(1126).t["bj/2kV"], obj11);
    }
    let obj12 = { accessibilityLabel: stringResult, label: null, onPress: null, end: true };
    let obj13 = { style: tmp.expandCTALabelContainer, children: null };
    const intl3 = tmp9(1126).intl;
    if (first) {
      let stringResult1 = intl3.string(tmp9(1126).t.nPGLFQ);
    } else {
      stringResult1 = intl3.format(tmp9(1126).t.gVw57p, {});
    }
    obj14 = { children: null };
    const obj15 = { color: "text-brand", variant: "text-md/semibold", children: stringResult1 };
    obj13.children = tmp16(tmp9(5088).Text, obj15);
    obj13 = tmp16(tmp17, obj13);
    obj12.label = obj13;
    obj12.onPress = function handleExpandCTAPress() {
      let tmp = true !== noop;
      if (tmp) {
        tmp = !first;
      }
      closure_6(tmp);
      if (dependencyMap != null) {
        const obj = { expanded: tmp };
        tmp4(obj);
      }
    };
    obj12 = tmp16(tmp9(6179).TableRow, obj12);
    obj14.children = obj12;
    tmp16(tmp17, obj14);
  }
  let obj2 = { collapsedListHeight: sharedValue, withTiming: memo1(5093).withTiming, containerHeight: derivedValue, timingStandard: memo1(5096).timingStandard };
  tmp15 = bound;
});
export const COLLAPSED_LIST_ITEM_MAX = 4;
// discord_app/modules/app_launcher/native/base_components/ExpandableList.tsx
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = tmp4(4618);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({
  animatedListContainer: { overflow: "hidden" },
  expandCTALabelContainer: { alignItems: "center" },
});
const __initData = {
  code: "function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}",
};
const __initData2 = {
  code: "function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}",
};
const __initData3 = {
  code: "function ExpandableListTsx3(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}",
};
const __initData4 = {
  code: "function ExpandableListTsx4(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onExpandCTAPress) => {
      const cResult = onExpand(expandedOverride[6]).c(50);
      ({ items, onExpand } = onExpandCTAPress);
      onExpandCTAPress = onExpandCTAPress.onExpandCTAPress;
      expandedOverride = onExpandCTAPress.expandedOverride;
      ({ showsExpandCTAOverride, disableExpanding } = onExpandCTAPress);
      const tmp4 = derivedValue();
      let flag = expandedOverride;
      if (expandedOverride == null) {
        flag = false;
      }
      const tmp5 = disableExpanding(first.useState(flag), 2);
      first = tmp5[0];
      closure_5 = tmp5[1];
      let tmp7 = onExpandCTAPress(tmp2[7])(first);
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
          const effect = obj2.useEffect(tmp8, tmp9);
          if (cResult[5] !== expandedOverride) {
            const fn2 = function x() {
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
          const effect1 = obj2.useEffect(tmp11, tmp12);
          const _Math = Math;
          const bound = Math.min(4, items.length);
          if (null == showsExpandCTAOverride) {
            showsExpandCTAOverride = items.length > bound;
          }
          const sharedValue = onExpand(tmp2[8]).useSharedValue(0);
          const tmpResult = onExpand(tmp2[8]);
          const sharedValue1 = onExpand(tmp2[8]).useSharedValue(0);
          const tmpResult4 = onExpand(tmp2[8]);
          class I {
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
          let obj3 = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
          I.__closure = obj3;
          I.__workletHash = 17033418452229;
          I.__initData = __initData;
          derivedValue = onExpand(tmp2[8]).useDerivedValue(I);
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
              const obj4 = {
                collapsedListHeight: sharedValue,
                withTiming: onExpand(tmp2[9]).withTiming,
                containerHeight: derivedValue,
                timingStandard: onExpand(tmp2[10]).timingStandard,
              };
              fn3.__closure = obj4;
              fn3.__workletHash = 2086836441465;
              fn3.__initData = __initData2;
              const animatedStyle = onExpand(tmp2[8]).useAnimatedStyle(fn3);
              if (cResult[14] === disableExpanding) {
                if (cResult[15] === first) {
                  if (cResult[18] !== sharedValue) {
                    class K {
                      constructor(arg0) {
                        result = closure_7.set(onExpandCTAPress.nativeEvent.layout.height);
                        return;
                      }
                    }
                    cResult[18] = sharedValue;
                    cResult[19] = K;
                  } else {
                    class K {
                      constructor(arg0) {
                        result = closure_7.set(onExpandCTAPress.nativeEvent.layout.height);
                        return;
                      }
                    }
                  }
                  if (cResult[20] !== sharedValue1) {
                    class U {
                      constructor(arg0) {
                        result = closure_8.set(onExpandCTAPress.nativeEvent.layout.height);
                        return;
                      }
                    }
                    cResult[20] = sharedValue1;
                    cResult[21] = U;
                  } else {
                    class U {
                      constructor(arg0) {
                        result = closure_8.set(onExpandCTAPress.nativeEvent.layout.height);
                        return;
                      }
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    class Y {
                      constructor(arg0) {
                        items = onExpandCTAPress.items;
                        hasListEnd = onExpandCTAPress.hasListEnd;
                        hasListEnd = undefined !== hasListEnd && hasListEnd;
                        return items.map((fn, index) => {
                          let isLastRow = closure_1;
                          if (isLastRow) {
                            isLastRow = index === items.length - 1;
                          }
                          return fn({ isLastRow });
                        });
                      }
                    }
                    cResult[22] = Y;
                  } else {
                    class Y {
                      constructor(arg0) {
                        items = onExpandCTAPress.items;
                        hasListEnd = onExpandCTAPress.hasListEnd;
                        hasListEnd = undefined !== hasListEnd && hasListEnd;
                        return items.map((fn, index) => {
                          let isLastRow = closure_1;
                          if (isLastRow) {
                            isLastRow = index === items.length - 1;
                          }
                          return fn({ isLastRow });
                        });
                      }
                    }
                  }
                  if (cResult[23] === animatedStyle) {
                    class Y {
                      constructor(arg0) {
                        items = onExpandCTAPress.items;
                        hasListEnd = onExpandCTAPress.hasListEnd;
                        hasListEnd = undefined !== hasListEnd && hasListEnd;
                        return items.map((fn, index) => {
                          let isLastRow = closure_1;
                          if (isLastRow) {
                            isLastRow = index === items.length - 1;
                          }
                          return fn({ isLastRow });
                        });
                      }
                    }
                    if (!showsExpandCTAOverride) {
                      class Y {
                        constructor(arg0) {
                          items = onExpandCTAPress.items;
                          hasListEnd = onExpandCTAPress.hasListEnd;
                          hasListEnd = undefined !== hasListEnd && hasListEnd;
                          return items.map((fn, index) => {
                            let isLastRow = closure_1;
                            if (isLastRow) {
                              isLastRow = index === items.length - 1;
                            }
                            return fn({ isLastRow });
                          });
                        }
                      }
                    }
                    if (cResult[26] === tmp20) {
                      class Y {
                        constructor(arg0) {
                          items = onExpandCTAPress.items;
                          hasListEnd = onExpandCTAPress.hasListEnd;
                          hasListEnd = undefined !== hasListEnd && hasListEnd;
                          return items.map((fn, index) => {
                            let isLastRow = closure_1;
                            if (isLastRow) {
                              isLastRow = index === items.length - 1;
                            }
                            return fn({ isLastRow });
                          });
                        }
                      }
                      if (cResult[29] === K) {
                        class Y {
                          constructor(arg0) {
                            items = onExpandCTAPress.items;
                            hasListEnd = onExpandCTAPress.hasListEnd;
                            hasListEnd = undefined !== hasListEnd && hasListEnd;
                            return items.map((fn, index) => {
                              let isLastRow = closure_1;
                              if (isLastRow) {
                                isLastRow = index === items.length - 1;
                              }
                              return fn({ isLastRow });
                            });
                          }
                        }
                        if (cResult[32] === first) {
                          class Y {
                            constructor(arg0) {
                              items = onExpandCTAPress.items;
                              hasListEnd = onExpandCTAPress.hasListEnd;
                              hasListEnd = undefined !== hasListEnd && hasListEnd;
                              return items.map((fn, index) => {
                                let isLastRow = closure_1;
                                if (isLastRow) {
                                  isLastRow = index === items.length - 1;
                                }
                                return fn({ isLastRow });
                              });
                            }
                          }
                        }
                        let tmp38Result = arr3.length > 0;
                        if (tmp38Result) {
                          class Y {
                            constructor(arg0) {
                              items = onExpandCTAPress.items;
                              hasListEnd = onExpandCTAPress.hasListEnd;
                              hasListEnd = undefined !== hasListEnd && hasListEnd;
                              return items.map((fn, index) => {
                                let isLastRow = closure_1;
                                if (isLastRow) {
                                  isLastRow = index === items.length - 1;
                                }
                                return fn({ isLastRow });
                              });
                            }
                          }
                          tmp40[0] = U;
                          tmp40[1] = !first;
                          if (first) {
                            class Y {
                              constructor(arg0) {
                                items = onExpandCTAPress.items;
                                hasListEnd = onExpandCTAPress.hasListEnd;
                                hasListEnd = undefined !== hasListEnd && hasListEnd;
                                return items.map((fn, index) => {
                                  let isLastRow = closure_1;
                                  if (isLastRow) {
                                    isLastRow = index === items.length - 1;
                                  }
                                  return fn({ isLastRow });
                                });
                              }
                            }
                          }
                          tmp40[2] = "no-hide-descendants";
                          const obj5 = { items: arr3, hasListEnd: !showsExpandCTAOverride };
                          tmp40[3] = Y(obj5);
                          tmp38Result = first(closure_5, tmp40);
                        }
                        cResult[32] = first;
                        cResult[33] = U;
                        cResult[34] = arr3;
                        cResult[35] = showsExpandCTAOverride;
                        cResult[36] = tmp38Result;
                      }
                      const obj6 = { onLayout: K, children: tmp30 };
                      const tmp35 = first(closure_5, obj6);
                      cResult[29] = K;
                      cResult[30] = tmp30;
                      cResult[31] = tmp35;
                    }
                    const obj7 = { items: tmp20, hasListEnd: !showsExpandCTAOverride };
                    const tmp28Result = Y(obj7);
                    cResult[26] = tmp20;
                    cResult[27] = !showsExpandCTAOverride;
                    cResult[28] = tmp28Result;
                  }
                  const items2 = [tmp4.animatedListContainer, animatedStyle];
                  cResult[23] = animatedStyle;
                  cResult[24] = tmp4.animatedListContainer;
                  cResult[25] = items2;
                  class I {
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
              const fn4 = function z() {
                let tmp = true !== disableExpanding;
                if (tmp) {
                  tmp = !first;
                }
                closure_5(tmp);
                if (onExpandCTAPress != null) {
                  const obj = { expanded: tmp };
                  tmp4(obj);
                }
              };
              class I {
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
              cResult[17] = fn4;
              const tmpResult6 = onExpand(tmp2[8]);
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
          const tmpResult5 = onExpand(tmp2[8]);
        }
      }
      const fn = function p() {
        if (tmp) {
          if (onExpand != null) {
            tmp2();
          }
        }
      };
      const items3 = [first, onExpand, tmp7];
      cResult[0] = first;
      cResult[1] = onExpand;
      cResult[2] = tmp7;
      cResult[3] = fn;
      cResult[4] = items3;
      tmp9 = items3;
      tmp8 = fn;
      let obj = onExpand(expandedOverride[6]);
    }
  : (onExpand) => {
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
      sharedValue = memo1(4618).useSharedValue(0);
      let obj3 = memo1(4618);
      sharedValue1 = memo1(4618).useSharedValue(0);
      const obj4 = memo1(4618);
      class C {
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
      C.__closure = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
      C.__workletHash = 15615156859143;
      C.__initData = __initData3;
      derivedValue = memo1(4618).useDerivedValue(C);
      const items3 = [items, bound];
      const memo = noop.useMemo(() => memo1.slice(0, bound), items3);
      const items4 = [items, bound];
      memo1 = noop.useMemo(() => memo1.slice(bound, memo1.length), items4);
      const obj5 = memo1(4618);
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
      const obj6 = memo1(4618);
      A.__closure = {
        collapsedListHeight: sharedValue,
        withTiming: memo1(4897).withTiming,
        containerHeight: derivedValue,
        timingStandard: memo1(4900).timingStandard,
      };
      A.__workletHash = 16625034396799;
      A.__initData = __initData4;
      const animatedStyle = obj6.useAnimatedStyle(A);
      const obj7 = { style: null, children: null };
      const items5 = [tmp.animatedListContainer, animatedStyle];
      obj7.style = items5;
      const obj8 = {
        onLayout(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
        },
        children: null,
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
      const items6 = [closure_6(first, obj8)];
      let tmp16Result = memo1.length > 0;
      if (tmp16Result) {
        const obj9 = {
          onLayout(nativeEvent) {
            const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
          },
          accessibilityElementsHidden: !first,
          importantForAccessibility: "no-hide-descendants",
          children: null,
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
      const items7 = [first(ReanimatedRexportDefault.View, obj7)];
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
        obj13.children = tmp16(tmp9(4892).Text, obj15);
        obj13 = tmp16(tmp17, obj13);
        obj12.label = obj13;
        obj12.onPress = function onPress() {
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
        obj12 = tmp16(tmp9(6000).TableRow, obj12);
        obj14.children = obj12;
        tmp16(tmp17, obj14);
      }
      let obj2 = {
        collapsedListHeight: sharedValue,
        withTiming: memo1(4897).withTiming,
        containerHeight: derivedValue,
        timingStandard: memo1(4900).timingStandard,
      };
      tmp15 = bound;
    };
export const COLLAPSED_LIST_ITEM_MAX = 4;

// discord_app/modules/app_launcher/native/base_components/ExpandableList.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasListEnd, onExpandCTAPress;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onExpandCTAPress) => {
      let derivedValue;
      let disableExpanding;
      let expandedOverride;
      let first;
      let items;
      let onExpand;
      let showsExpandCTAOverride;
      const tmp2 = expandedOverride;
      let obj = onExpand(expandedOverride[6]);
      const cResult = obj.c(50);
      ({ items, onExpand } = onExpandCTAPress);
      onExpandCTAPress = onExpandCTAPress.onExpandCTAPress;
      expandedOverride = onExpandCTAPress.expandedOverride;
      ({ showsExpandCTAOverride, disableExpanding } = onExpandCTAPress);
      const tmp4 = derivedValue();
      let obj2 = first;
      let flag = expandedOverride;
      const useState = first.useState;
      if (expandedOverride == null) {
        flag = false;
      }
      const tmp5 = disableExpanding(useState(flag), 2);
      first = tmp5[0];
      let closure_5 = tmp5[1];
      let tmp7 = onExpandCTAPress(tmp2[7])(first);
      if (tmp7 == null) {
        tmp7 = first;
      }
      first = tmp7;
      if (cResult[0] === first) {
        if (cResult[1] === onExpand) {
          let tmp8;
          let tmp9;
          let tmp12;
          let tmp11;
          if (cResult[2] === tmp7) {
            tmp8 = cResult[3];
            tmp9 = cResult[4];
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
            tmp12 = items1;
            tmp11 = fn2;
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
          const tmpResult = onExpand(tmp2[8]);
          const sharedValue = tmpResult.useSharedValue(0);
          const tmpResult4 = onExpand(tmp2[8]);
          const sharedValue1 = tmpResult4.useSharedValue(0);
          const tmpResult5 = onExpand(tmp2[8]);
          class I {
            constructor() {
              if (first) {
                if (0 !== sharedValue.get()) {
                  let sum;
                  if (0 !== sharedValue1.get()) {
                    const value = sharedValue.get();
                    sum = value + sharedValue1.get();
                  }
                  return sum;
                }
              }
              sum = sharedValue.get();
            }
          }
          const obj3 = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
          I.__closure = obj3;
          I.__workletHash = 17033418452229;
          I.__initData = __initData;
          derivedValue = tmpResult5.useDerivedValue(I);
          if (cResult[8] === bound) {
            let tmp20;
            if (cResult[9] === items) {
              tmp20 = cResult[10];
            }
            if (cResult[11] === bound) {
              let arr3;
              if (cResult[12] === items) {
                arr3 = cResult[13];
              }
              const fn3 = function q() {
                let obj;
                let value;
                let withTiming;
                if (0 !== sharedValue.get()) {
                  const obj2 = { height: withTiming(value, timingPresets.timingStandard) };
                  withTiming = timing.withTiming;
                  timing;
                  value = derivedValue.get();
                  obj = obj2;
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
              const useAnimatedStyle = onExpand(tmp2[8]).useAnimatedStyle;
              onExpand(tmp2[8]);
              fn3.__closure = obj4;
              fn3.__workletHash = 2086836441465;
              fn3.__initData = __initData2;
              const animatedStyle = useAnimatedStyle(fn3);
              if (cResult[14] === disableExpanding) {
                if (cResult[15] === first) {
                  if (cResult[18] !== sharedValue) {
                    class K {
                      constructor(nativeEvent) {
                        const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
                      }
                    }
                    cResult[18] = sharedValue;
                    cResult[19] = K;
                  } else {
                    class K {
                      constructor(nativeEvent) {
                        const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
                      }
                    }
                  }
                  if (cResult[20] !== sharedValue1) {
                    class U {
                      constructor(nativeEvent) {
                        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
                      }
                    }
                    cResult[20] = sharedValue1;
                    cResult[21] = U;
                  } else {
                    class U {
                      constructor(nativeEvent) {
                        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
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
                          const isLastRow = closure_1 && index === items.length - 1;
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
                          const isLastRow = closure_1 && index === items.length - 1;
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
                          const isLastRow = closure_1 && index === items.length - 1;
                          return fn({ isLastRow });
                        });
                      }
                    }
                    if (cResult[26] === tmp20) {
                      class Y {
                        constructor(arg0) {
                          items = onExpandCTAPress.items;
                          hasListEnd = onExpandCTAPress.hasListEnd;
                          hasListEnd = undefined !== hasListEnd && hasListEnd;
                          return items.map((fn, index) => {
                            const isLastRow = closure_1 && index === items.length - 1;
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
                              const isLastRow = closure_1 && index === items.length - 1;
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
                                const isLastRow = closure_1 && index === items.length - 1;
                                return fn({ isLastRow });
                              });
                            }
                          }
                        }
                        let tmp39Result = arr3.length > 0;
                        if (tmp39Result) {
                          class Y {
                            constructor(arg0) {
                              items = onExpandCTAPress.items;
                              hasListEnd = onExpandCTAPress.hasListEnd;
                              hasListEnd = undefined !== hasListEnd && hasListEnd;
                              return items.map((fn, index) => {
                                const isLastRow = closure_1 && index === items.length - 1;
                                return fn({ isLastRow });
                              });
                            }
                          }
                          tmp41[0] = U;
                          tmp41[1] = !first;
                          const tmp39 = first;
                          const tmp40 = closure_5;
                          if (first) {
                            class Y {
                              constructor(arg0) {
                                items = onExpandCTAPress.items;
                                hasListEnd = onExpandCTAPress.hasListEnd;
                                hasListEnd = undefined !== hasListEnd && hasListEnd;
                                return items.map((fn, index) => {
                                  const isLastRow = closure_1 && index === items.length - 1;
                                  return fn({ isLastRow });
                                });
                              }
                            }
                          }
                          tmp41[2] = "no-hide-descendants";
                          const obj5 = { items: arr3, hasListEnd: !showsExpandCTAOverride };
                          tmp41[3] = Y(obj5);
                          tmp39Result = tmp39(tmp40, tmp41);
                        }
                        cResult[32] = first;
                        cResult[33] = U;
                        cResult[34] = arr3;
                        cResult[35] = showsExpandCTAOverride;
                        cResult[36] = tmp39Result;
                      }
                      const obj6 = { onLayout: K, children: tmp31 };
                      cResult[29] = K;
                      cResult[30] = tmp31;
                      cResult[31] = first(closure_5, obj6);
                      const tmp36 = first(closure_5, obj6);
                    }
                    const obj7 = { items: tmp20, hasListEnd: !showsExpandCTAOverride && !first };
                    cResult[26] = tmp20;
                    cResult[27] = !showsExpandCTAOverride && !first;
                    cResult[28] = Y(obj7);
                    const tmp29Result = Y(obj7);
                  }
                  const items2 = [tmp4.animatedListContainer, animatedStyle];
                  cResult[23] = animatedStyle;
                  cResult[24] = tmp4.animatedListContainer;
                  cResult[25] = items2;
                  class I {
                    constructor() {
                      if (first) {
                        if (0 !== sharedValue.get()) {
                          let sum;
                          if (0 !== sharedValue1.get()) {
                            const value = sharedValue.get();
                            sum = value + sharedValue1.get();
                          }
                          return sum;
                        }
                      }
                      sum = sharedValue.get();
                    }
                  }
                }
              }
              const fn4 = function z() {
                closure_5(true !== disableExpanding && !first);
                if (onExpandCTAPress != null) {
                  const obj = { expanded: true !== disableExpanding && !first };
                  tmp4(obj);
                }
              };
              class I {
                constructor() {
                  if (first) {
                    if (0 !== sharedValue.get()) {
                      let sum;
                      if (0 !== sharedValue1.get()) {
                        const value = sharedValue.get();
                        sum = value + sharedValue1.get();
                      }
                      return sum;
                    }
                  }
                  sum = sharedValue.get();
                }
              }
              cResult[14] = disableExpanding;
              cResult[15] = first;
              cResult[16] = onExpandCTAPress;
              cResult[17] = fn4;
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
        }
      }
      const fn = function p() {
        const tmp = first !== first && first;
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
    }
  : (onExpand) => {
      let Text;
      let expandedOverride;
      let items5;
      let items6;
      let obj12;
      let obj14;
      let showsExpandCTAOverride;
      let title;
      const f141910 = (fn, index) => {
        const isLastRow = closure_1 && index === memo1.length - 1;
        return fn({ isLastRow });
      };
      const items = onExpand.items;
      onExpand = onExpand.onExpand;
      ({ onExpandCTAPress: dependencyMap, expandedOverride } = onExpand);
      ({ showsExpandCTAOverride, disableExpanding: react, title } = onExpand);
      let closure_6;
      let first;
      let bound;
      let sharedValue;
      let sharedValue1;
      let derivedValue;
      let tmp = sharedValue();
      let flag = expandedOverride;
      const useState = react.useState;
      if (expandedOverride == null) {
        flag = false;
      }
      const tmp2 = expandedOverride(useState(flag), 2);
      first = tmp2[0];
      closure_6 = tmp2[1];
      const tmp4 = onExpand;
      let tmp6 = onExpand(7957)(first);
      if (tmp6 == null) {
        tmp6 = first;
      }
      first = tmp6;
      const items1 = [first, onExpand, tmp6];
      const effect = react.useEffect(() => {
        const tmp = first !== first && first;
        if (tmp) {
          if (onExpand != null) {
            tmp2();
          }
        }
      }, items1);
      const items2 = [expandedOverride];
      const effect1 = react.useEffect(() => {
        if (undefined !== expandedOverride) {
          closure_6(tmp);
        }
      }, items2);
      bound = Math.min(4, items.length);
      if (null == showsExpandCTAOverride) {
        showsExpandCTAOverride = items.length > bound;
      }
      let obj2 = items(4618);
      sharedValue = obj2.useSharedValue(0);
      const obj3 = items(4618);
      sharedValue1 = obj3.useSharedValue(0);
      const obj4 = items(4618);
      class C {
        constructor() {
          if (first) {
            if (0 !== sharedValue.get()) {
              let sum;
              if (0 !== sharedValue1.get()) {
                const value = sharedValue.get();
                sum = value + sharedValue1.get();
              }
              return sum;
            }
          }
          sum = sharedValue.get();
        }
      }
      C.__closure = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
      C.__workletHash = 15615156859143;
      C.__initData = __initData3;
      derivedValue = obj4.useDerivedValue(C);
      const items3 = [items, bound];
      const memo = react.useMemo(() => items.slice(0, bound), items3);
      const items4 = [items, bound];
      const memo1 = react.useMemo(() => items.slice(bound, items.length), items4);
      const obj5 = items(4618);
      class A {
        constructor() {
          let obj;
          let value;
          let withTiming;
          if (0 !== sharedValue.get()) {
            const obj2 = { height: withTiming(value, timingPresets.timingStandard) };
            withTiming = timing.withTiming;
            timing;
            value = derivedValue.get();
            obj = obj2;
          } else {
            obj = {};
          }
          return obj;
        }
      }
      A.__closure = {
        collapsedListHeight: sharedValue,
        withTiming: items(4897).withTiming,
        containerHeight: derivedValue,
        timingStandard: items(4900).timingStandard,
      };
      A.__workletHash = 16625034396799;
      A.__initData = __initData4;
      ({
        collapsedListHeight: sharedValue,
        withTiming: items(4897).withTiming,
        containerHeight: derivedValue,
        timingStandard: items(4900).timingStandard,
      });
      const animatedStyle = obj5.useAnimatedStyle(A);
      const obj7 = { style: items5, children: items6 };
      items5 = [tmp.animatedListContainer, animatedStyle];
      let tmp19 = !showsExpandCTAOverride;
      const obj8 = {
        onLayout(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
        },
        children: memo.map(f141910),
      };
      View = tmp4(4618).View;
      const tmp16 = bound;
      if (!showsExpandCTAOverride) {
        tmp19 = !first;
      }
      let closure_1 = tmp19;
      items6 = [closure_6(first, obj8)];
      let tmp17Result = memo1.length > 0;
      if (tmp17Result) {
        closure_1 = !showsExpandCTAOverride;
        const obj9 = {
          onLayout(nativeEvent) {
            const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
          },
          accessibilityElementsHidden: !first,
          importantForAccessibility: "no-hide-descendants",
          children: memo1.map(f141910),
        };
        tmp17Result = tmp17(tmp18, obj9);
      }
      items6[1] = tmp17Result;
      const children = [first(View, obj7)];
      if (showsExpandCTAOverride) {
        let stringResult;
        let stringResult1;
        const TableRow = tmp10(6000).TableRow;
        if (first) {
          const intl2 = tmp10(1126).intl;
          stringResult = intl2.string(tmp10(1126).t.nPGLFQ);
        } else if (null != title) {
          const intl = tmp10(1126).intl;
          const obj10 = { title };
          stringResult = intl.formatToPlainString(tmp10(1126).t["bj/2kV"], obj10);
        }
        const obj11 = {
          accessibilityLabel: stringResult,
          label: closure_6(first, obj12),
          onPress() {
            closure_6(true !== react && !first);
            if (dependencyMap != null) {
              const obj = { expanded: true !== react && !first };
              tmp4(obj);
            }
          },
          end: true,
        };
        obj12 = { style: tmp.expandCTALabelContainer, children: closure_6(Text, obj14) };
        Text = tmp10(4892).Text;
        const intl3 = tmp10(1126).intl;
        if (first) {
          stringResult1 = intl3.string(tmp10(1126).t.nPGLFQ);
        } else {
          stringResult1 = intl3.format(tmp10(1126).t.gVw57p, {});
        }
        const obj13 = { children: closure_6(TableRow, obj11) };
        obj14 = { color: "text-brand", variant: "text-md/semibold", children: stringResult1 };
        showsExpandCTAOverride = tmp17(tmp18, obj13);
      }
      children[1] = showsExpandCTAOverride;
      return first(tmp16, { children });
    };
let result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default tmp3;
export const COLLAPSED_LIST_ITEM_MAX = 4;

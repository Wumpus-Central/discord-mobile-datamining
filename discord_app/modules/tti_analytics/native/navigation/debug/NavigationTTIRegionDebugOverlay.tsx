// discord_app/modules/tti_analytics/native/navigation/debug/NavigationTTIRegionDebugOverlay.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NavigationSpanTrackerDefault from "../NavigationSpanTracker.tsx";
import NavigationTTIDebugFreeze from "NavigationTTIDebugFreeze.tsx";
import NavigationTTIRegionDebugState from "NavigationTTIRegionDebugState.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ["time_start", "first_paint"];
const createStyles = fn(4890);
let obj2 = {
  outline: null,
  includedOutline: null,
  excludedOutline: null,
  mixedOutline: null,
  violationOutline: null,
  badge: null,
  expandedBadge: null,
  badgeText: null,
  includedBadge: null,
  excludedBadge: null,
  mixedBadge: null,
  violationBadge: null,
  armedBadge: null,
  freezeControl: null,
  armedFreezeControl: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 10000;
obj3.borderWidth = 2;
obj2.outline = obj3;
obj2.includedOutline = {
  borderColor: nativeDefault.colors.STATUS_POSITIVE,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE,
};
let obj4 = {
  borderColor: nativeDefault.colors.STATUS_POSITIVE,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE,
};
obj2.excludedOutline = {
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderStyle: "dashed",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj5 = {
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderStyle: "dashed",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.mixedOutline = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.violationOutline = {
  borderColor: nativeDefault.colors.STATUS_DANGER,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
};
obj2.badge = { position: "absolute", maxWidth: "48%" };
obj2.expandedBadge = { maxWidth: "92%" };
let obj7 = {
  borderColor: nativeDefault.colors.STATUS_DANGER,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
};
obj2.badgeText = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
let rect = { top: 0, left: 0, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.includedBadge = rect;
const rect1 = { top: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.excludedBadge = rect1;
const rect2 = { top: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.mixedBadge = rect2;
const rect3 = { top: 0, left: 0, backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2.violationBadge = rect3;
let obj8 = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj2.armedBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
const rect4 = {
  position: "absolute",
  right: 0,
  bottom: 0,
  maxWidth: "60%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.freezeControl = rect4;
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.armedFreezeControl = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (name) => {
      const cResult = name(tracking[7]).c(9);
      name = name.name;
      const regionId = name.regionId;
      tracking = name.tracking;
      let obj = name(tracking[7]);
      const navTTISurface = name(tracking[8]).useNavTTISurface();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(arg0) {
          closure_0 = regionId(tracking[9]).subscribeDebugBundle(arg0);
          const obj = regionId(tracking[9]);
          closure_1 = name(tracking[10]).subscribeNavigationTTIRegionDebugMeasurements(arg0);
          return () => {
            closure_0();
            closure_1();
          };
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === name) {
        if (cResult[2] === regionId) {
          if (cResult[3] === navTTISurface) {
            if (cResult[4] === tracking) {
              let tmp4 = cResult[5];
            }
            const syncExternalStore = noop.useSyncExternalStore(first, tmp4, tmp4);
            const lastIndexOfResult = syncExternalStore.lastIndexOf(":");
            if (cResult[6] === lastIndexOfResult) {
              if (cResult[7] === syncExternalStore) {
                let tmp7 = cResult[8];
              }
              return tmp7;
            }
            let NumberResult = null;
            if (-1 !== lastIndexOfResult) {
              NumberResult = null;
              if ("" !== syncExternalStore.slice(lastIndexOfResult + 1)) {
                const _Number = Number;
                NumberResult = Number(syncExternalStore.slice(lastIndexOfResult + 1));
              }
            }
            cResult[6] = lastIndexOfResult;
            cResult[7] = syncExternalStore;
            cResult[8] = NumberResult;
            tmp7 = NumberResult;
          }
        }
      }
      const fn2 = function v() {
        let activeTraceId = null;
        if (null != navTTISurface) {
          activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(
            navTTISurface.definition,
            navTTISurface.navigationKey,
          );
        }
        let str = "none";
        if (null != activeTraceId) {
          if ("include" === tracking) {
            const lastBundle = NavigationSpanTrackerDefault.getLastBundle();
            let end_ms;
            if (lastBundle != null) {
              const components = lastBundle.components;
              const found = components.find((span_name) => span_name.span_name === name);
              if (found != null) {
                end_ms = found.end_ms;
              }
            }
            let str3 = end_ms;
          } else {
            str3 = NavigationTTIRegionDebugState.getNavigationTTIRegionDebugMeasurement(activeTraceId, regionId);
          }
          if (str3 == null) {
            str3 = "";
          }
          const _HermesInternal = HermesInternal;
          str = "" + activeTraceId + ":" + str3;
        }
        return str;
      };
      cResult[1] = name;
      cResult[2] = regionId;
      cResult[3] = navTTISurface;
      cResult[4] = tracking;
      cResult[5] = fn2;
      tmp4 = fn2;
      let obj2 = name(tracking[8]);
    }
  : (name) => {
      name = name.name;
      const regionId = name.regionId;
      const tracking = name.tracking;
      const navTTISurface = name(tracking[8]).useNavTTISurface();
      const items = [name, regionId, navTTISurface, tracking];
      const callback = noop.useCallback((arg0) => {
        closure_0 = regionId(tracking[9]).subscribeDebugBundle(arg0);
        const obj = regionId(tracking[9]);
        closure_1 = name(tracking[10]).subscribeNavigationTTIRegionDebugMeasurements(arg0);
        return () => {
          closure_0();
          closure_1();
        };
      }, []);
      const callback1 = noop.useCallback(() => {
        let activeTraceId = null;
        if (null != navTTISurface) {
          activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(
            navTTISurface.definition,
            navTTISurface.navigationKey,
          );
        }
        let str = "none";
        if (null != activeTraceId) {
          if ("include" === tracking) {
            const lastBundle = NavigationSpanTrackerDefault.getLastBundle();
            let end_ms;
            if (lastBundle != null) {
              const components = lastBundle.components;
              const found = components.find((span_name) => span_name.span_name === name);
              if (found != null) {
                end_ms = found.end_ms;
              }
            }
            let str3 = end_ms;
          } else {
            str3 = NavigationTTIRegionDebugState.getNavigationTTIRegionDebugMeasurement(activeTraceId, regionId);
          }
          if (str3 == null) {
            str3 = "";
          }
          const _HermesInternal = HermesInternal;
          str = "" + activeTraceId + ":" + str3;
        }
        return str;
      }, items);
      const syncExternalStore = noop.useSyncExternalStore(callback, callback1, callback1);
      const lastIndexOfResult = syncExternalStore.lastIndexOf(":");
      let NumberResult = null;
      if (-1 !== lastIndexOfResult) {
        NumberResult = null;
        if ("" !== syncExternalStore.slice(lastIndexOfResult + 1)) {
          const _Number = Number;
          NumberResult = Number(syncExternalStore.slice(lastIndexOfResult + 1));
        }
      }
      return NumberResult;
    };
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
const f74124 = () => {};
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = surface(576).c(17);
      ({ target, surface } = arg0);
      const tmp4 = closure_10();
      let kind;
      if (target != null) {
        kind = target.kind;
      }
      let name = null;
      if ("milestone" === kind) {
        name = target.name;
      }
      if (cResult[0] !== target) {
        let kind1;
        if (target != null) {
          kind1 = target.kind;
        }
        let str = "FREEZE: COMPONENT";
        if ("component" === kind1) {
          cResult[0] = target;
          cResult[1] = str;
        } else {
          let name1;
          if (target != null) {
            name1 = target.name;
          }
          if ("time_start" !== name1) {
            str = "FREEZE: NEXT FP";
            if ("first_paint" !== name1) {
              str = "FREEZE: OFF";
            }
          }
        }
        str = "FREEZE: NEXT START";
      } else {
        if (cResult[2] === name) {
          if (cResult[3] === surface) {
            let tmp11 = cResult[4];
          }
          class T {
            constructor() {
              tmp = surface;
              activeTraceId = null;
              if (null != surface) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[9]);
                activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
              }
              if (null == name) {
                tmp8 = closure_9;
                first = closure_9[0];
                if (first == null) {
                  first = null;
                }
                tmp7 = first;
              } else {
                tmp6 = closure_9;
                num = 1;
                tmp7 = closure_9[closure_9.indexOf(closure_9, tmp5) + 1];
                if (tmp7 == null) {
                  tmp7 = null;
                }
              }
              if (null == tmp7) {
                tmp14 = closure_0;
                tmp15 = closure_2;
                obj5 = closure_0(closure_2[11]);
                result = obj5.disarmNavigationTTIDebugFreeze();
              } else {
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj2 = closure_0(closure_2[11]);
                obj1 = { kind: "milestone", name: null };
                obj1.name = tmp7;
                obj6 = { armedDuringTraceId: null, destinationKey: null };
                obj6.armedDuringTraceId = activeTraceId;
                navigationKey = undefined;
                if (tmp != null) {
                  navigationKey = tmp.navigationKey;
                }
                if (navigationKey == null) {
                  navigationKey = null;
                }
                obj6.destinationKey = navigationKey;
                result1 = obj2.armNavigationTTIDebugFreeze(obj1, obj6);
              }
              return;
            }
          }
          if (cResult[5] === tmp4.freezeControl) {
            if (cResult[6] === tmp12) {
              let tmp13 = cResult[7];
            }
            class T {
              constructor() {
                tmp = surface;
                activeTraceId = null;
                if (null != surface) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[9]);
                  activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
                }
                if (null == name) {
                  tmp8 = closure_9;
                  first = closure_9[0];
                  if (first == null) {
                    first = null;
                  }
                  tmp7 = first;
                } else {
                  tmp6 = closure_9;
                  num = 1;
                  tmp7 = closure_9[closure_9.indexOf(closure_9, tmp5) + 1];
                  if (tmp7 == null) {
                    tmp7 = null;
                  }
                }
                if (null == tmp7) {
                  tmp14 = closure_0;
                  tmp15 = closure_2;
                  obj5 = closure_0(closure_2[11]);
                  result = obj5.disarmNavigationTTIDebugFreeze();
                } else {
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj2 = closure_0(closure_2[11]);
                  obj1 = { kind: "milestone", name: null };
                  obj1.name = tmp7;
                  obj6 = { armedDuringTraceId: null, destinationKey: null };
                  obj6.armedDuringTraceId = activeTraceId;
                  navigationKey = undefined;
                  if (tmp != null) {
                    navigationKey = tmp.navigationKey;
                  }
                  if (navigationKey == null) {
                    navigationKey = null;
                  }
                  obj6.destinationKey = navigationKey;
                  result1 = obj2.armNavigationTTIDebugFreeze(obj1, obj6);
                }
                return;
              }
            }
            if (cResult[8] === tmp7) {
              if (cResult[9] === tmp4.badgeText) {
                if (cResult[10] === str5) {
                  let tmp14 = cResult[11];
                }
                if (cResult[12] === tmp11) {
                  if (cResult[13] === tmp7) {
                    if (cResult[14] === tmp13) {
                      if (cResult[15] === tmp14) {
                        let tmp17 = cResult[16];
                      }
                      return tmp17;
                    }
                  }
                }
                class T {
                  constructor() {
                    tmp = surface;
                    activeTraceId = null;
                    if (null != surface) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[9]);
                      activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
                    }
                    if (null == name) {
                      tmp8 = closure_9;
                      first = closure_9[0];
                      if (first == null) {
                        first = null;
                      }
                      tmp7 = first;
                    } else {
                      tmp6 = closure_9;
                      num = 1;
                      tmp7 = closure_9[closure_9.indexOf(closure_9, tmp5) + 1];
                      if (tmp7 == null) {
                        tmp7 = null;
                      }
                    }
                    if (null == tmp7) {
                      tmp14 = closure_0;
                      tmp15 = closure_2;
                      obj5 = closure_0(closure_2[11]);
                      result = obj5.disarmNavigationTTIDebugFreeze();
                    } else {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      obj2 = closure_0(closure_2[11]);
                      obj1 = { kind: "milestone", name: null };
                      obj1.name = tmp7;
                      obj6 = { armedDuringTraceId: null, destinationKey: null };
                      obj6.armedDuringTraceId = activeTraceId;
                      navigationKey = undefined;
                      if (tmp != null) {
                        navigationKey = tmp.navigationKey;
                      }
                      if (navigationKey == null) {
                        navigationKey = null;
                      }
                      obj6.destinationKey = navigationKey;
                      result1 = obj2.armNavigationTTIDebugFreeze(obj1, obj6);
                    }
                    return;
                  }
                }
                let obj2 = {
                  style: tmp13,
                  hitSlop: name(587).space.PX_12,
                  onPress: tmp11,
                  accessibilityRole: "button",
                  accessibilityLabel: tmp7,
                  accessibilityHint: "Cycles the one-shot freeze point. Restart the app after a freeze.",
                  children: tmp14,
                };
                const tmp20 = closure_7(closure_5, obj2);
                cResult[12] = tmp11;
                cResult[13] = tmp7;
                cResult[14] = tmp13;
                cResult[15] = tmp14;
                cResult[16] = tmp20;
                tmp17 = tmp20;
              }
            }
            let obj3 = {
              variant: "text-xs/bold",
              color: "text-default",
              style: tmp4.badgeText,
              lineClamp: 1,
              accessible: false,
              children: tmp7,
            };
            const tmp16 = closure_7(surface(4886).Text, obj3);
            cResult[8] = tmp7;
            cResult[9] = tmp4.badgeText;
            cResult[10] = "text-default";
            cResult[11] = tmp16;
            tmp14 = tmp16;
          }
          const items = [tmp4.freezeControl, undefined];
          cResult[5] = tmp4.freezeControl;
          cResult[6] = undefined;
          cResult[7] = items;
          tmp13 = items;
        }
        class T {
          constructor() {
            tmp = surface;
            activeTraceId = null;
            if (null != surface) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[9]);
              activeTraceId = obj.getActiveTraceId(tmp.definition, tmp.navigationKey);
            }
            if (null == name) {
              tmp8 = closure_9;
              first = closure_9[0];
              if (first == null) {
                first = null;
              }
              tmp7 = first;
            } else {
              tmp6 = closure_9;
              num = 1;
              tmp7 = closure_9[closure_9.indexOf(closure_9, tmp5) + 1];
              if (tmp7 == null) {
                tmp7 = null;
              }
            }
            if (null == tmp7) {
              tmp14 = closure_0;
              tmp15 = closure_2;
              obj5 = closure_0(closure_2[11]);
              result = obj5.disarmNavigationTTIDebugFreeze();
            } else {
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj2 = closure_0(closure_2[11]);
              obj1 = { kind: "milestone", name: null };
              obj1.name = tmp7;
              obj6 = { armedDuringTraceId: null, destinationKey: null };
              obj6.armedDuringTraceId = activeTraceId;
              navigationKey = undefined;
              if (tmp != null) {
                navigationKey = tmp.navigationKey;
              }
              if (navigationKey == null) {
                navigationKey = null;
              }
              obj6.destinationKey = navigationKey;
              result1 = obj2.armNavigationTTIDebugFreeze(obj1, obj6);
            }
            return;
          }
        }
        cResult[2] = name;
        cResult[3] = surface;
        cResult[4] = T;
        tmp11 = T;
      }
      let obj = surface(576);
    }
  : (arg0) => {
      ({ target, surface: require } = arg0);
      let name;
      const tmp = closure_10();
      let kind;
      if (target != null) {
        kind = target.kind;
      }
      name = null;
      if ("milestone" === kind) {
        name = target.name;
      }
      let kind1;
      if (target != null) {
        kind1 = target.kind;
      }
      let str = "FREEZE: COMPONENT";
      if ("component" !== kind1) {
        let name1;
        if (target != null) {
          name1 = target.name;
        }
        if ("time_start" === name1) {
          str = "FREEZE: NEXT START";
        } else {
          str = "FREEZE: NEXT FP";
          if ("first_paint" !== name1) {
            str = "FREEZE: OFF";
          }
        }
      }
      const items = [tmp.freezeControl];
      let armedFreezeControl;
      if (null != target) {
        armedFreezeControl = tmp.armedFreezeControl;
      }
      let obj = {
        style: items,
        hitSlop: name(587).space.PX_12,
        onPress() {
          let activeTraceId = null;
          if (null != _require) {
            activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(_require.definition, _require.navigationKey);
          }
          if (null == name) {
            let first = closure_9[0];
            if (first == null) {
              first = null;
            }
            let tmp7 = first;
          } else {
            tmp7 = closure_9[closure_9.indexOf(closure_9, tmp5) + 1];
            if (tmp7 == null) {
              tmp7 = null;
            }
          }
          if (null == tmp7) {
            const result = NavigationTTIDebugFreeze.disarmNavigationTTIDebugFreeze();
          } else {
            const obj3 = { kind: "milestone", name: tmp7 };
            const obj4 = { armedDuringTraceId: activeTraceId, destinationKey: null };
            let navigationKey;
            if (_require != null) {
              navigationKey = _require.navigationKey;
            }
            if (navigationKey == null) {
              navigationKey = null;
            }
            obj4.destinationKey = navigationKey;
            const result1 = NavigationTTIDebugFreeze.armNavigationTTIDebugFreeze(obj3, obj4);
          }
        },
        accessibilityRole: "button",
        accessibilityLabel: str,
        accessibilityHint: "Cycles the one-shot freeze point. Restart the app after a freeze.",
        children: null,
      };
      items[1] = armedFreezeControl;
      let str4 = "text-default";
      if (null != target) {
        str4 = "text-feedback-info";
      }
      obj.children = closure_7(Text_Text.Text, {
        variant: "text-xs/bold",
        color: str4,
        style: tmp.badgeText,
        lineClamp: 1,
        accessible: false,
        children: str,
      });
      return closure_7(closure_5, obj);
    };
ReactCompilerGating = fn(558);
const obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
const size = fn(2);
let result1 = size.fileFinishedImporting(
  "modules/tti_analytics/native/navigation/debug/NavigationTTIRegionDebugOverlay.tsx",
);

export const NavigationTTIRegionDebugOverlay = ReactCompilerGating.isReactCompilerEnabled()
  ? (name) => {
      const cResult = name(576).c(56);
      name = name.name;
      ({ regionId, tracking, descendantTracking, includedDescendants, excludedDescendants, hierarchyDepth, violation } =
        name);
      const tmp4 = closure_10();
      let obj = name(576);
      const navTTISurface = name(16481).useNavTTISurface();
      let obj2 = name(16481);
      let obj3 = noop;
      [tmp7, dependencyMap] = noop.useState(false);
      if (typeof f74124 === "function") {
        const syncExternalStore = obj3.useSyncExternalStore(
          tmp(16485).subscribeNavigationTTIDebugFreezeTarget,
          tmp(16485).getNavigationTTIDebugFreezeTarget,
          tmp(16485).getNavigationTTIDebugFreezeTarget,
        );
        if (cResult[0] === name) {
          if (cResult[1] === regionId) {
            if (cResult[2] === tracking) {
              let tmp9 = cResult[3];
            }
            const tmp11 = closure_11(tmp9);
            let tmp14 = "exclude" === tracking;
            let tmp15 = tmp14;
            if (tmp14) {
              tmp15 = "mixed" === descendantTracking;
            }
            if (!tmp14) {
              tmp14 = tmp13;
            }
            _slicedToArray = tmp14;
            let tmp17 = tmp16;
            if ("include" === tracking) {
              tmp17 = !tmp13;
            }
            noop = tmp17;
            let kind;
            if (syncExternalStore != null) {
              kind = syncExternalStore.kind;
            }
            closure_5 = tmp19;
            let tmp20 = tmp14;
            if (!tmp14) {
              tmp20 = tmp17;
            }
            if (cResult[4] === descendantTracking) {
              if (cResult[5] === excludedDescendants) {
                if (cResult[6] === tmp13) {
                  if (cResult[7] === includedDescendants) {
                    if (cResult[8] === tracking) {
                      if (cResult[9] === violation) {
                        if (null == tmp11) {
                          let str17 = "not observed";
                          if (tmp16) {
                            str17 = "waiting";
                          }
                          let combined = str17;
                        } else {
                          const _HermesInternal3 = HermesInternal;
                          combined = "+" + tmp11 + "ms";
                        }
                        let tmp30 = tmp21;
                        if (!tmp7) {
                          let str18 = "INVALID";
                          if (!tmp13) {
                            let str19 = "MIXED";
                            if (!tmp15) {
                              let tmp31 = "BOUNDARY";
                              if (tmp16) {
                                tmp31 = null;
                              }
                              str19 = tmp31;
                            }
                            str18 = str19;
                          }
                          tmp30 = str18;
                        }
                        let str21 = "";
                        if (tmp19) {
                          str21 = " \u00B7 FREEZE NEXT";
                        }
                        let str22 = "";
                        if (null != tmp30) {
                          const _HermesInternal4 = HermesInternal;
                          str22 = "" + tmp30 + " \u00B7 ";
                        }
                        if (!tmp7) {
                          if (!tmp16) {
                            let str24 = "";
                          }
                          let str26 = "";
                          if (tmp14) {
                            let str27 = " \u25B8";
                            if (tmp7) {
                              str27 = " \u25BE";
                            }
                            str26 = str27;
                          }
                          const _HermesInternal6 = HermesInternal;
                          const combined1 = "" + str22 + name + str24 + str21 + str26;
                          let str30 = "text-overlay-light";
                          if (!tmp13) {
                            str30 = "text-overlay-light";
                            if (!tmp16) {
                              let str31 = "text-default";
                              if (tmp15) {
                                str31 = "text-feedback-info";
                              }
                              str30 = str31;
                            }
                          }
                          let result = hierarchyDepth * navTTISurface(587).space.PX_4;
                          if (cResult[11] !== result) {
                            const rect = { top: result, right: result, bottom: result, left: result };
                            cResult[11] = result;
                            cResult[12] = rect;
                            let tmp43 = rect;
                          } else {
                            tmp43 = cResult[12];
                          }
                          if (cResult[13] === tmp17) {
                            if (cResult[14] === tmp14) {
                              if (cResult[15] === tmp19) {
                                if (cResult[16] === name) {
                                  if (tmp13) {
                                    let violationOutline = tmp4.violationOutline;
                                  } else {
                                    violationOutline = tmp16 ? tmp4.includedOutline : tmp4.excludedOutline;
                                  }
                                  let mixedOutline;
                                  if (!tmp13) {
                                    if (tmp15) {
                                      mixedOutline = tmp4.mixedOutline;
                                    }
                                  }
                                  if (cResult[19] === tmp43) {
                                    if (cResult[20] === tmp4.outline) {
                                      if (cResult[21] === violationOutline) {
                                        if (cResult[22] === mixedOutline) {
                                          let tmp46 = cResult[23];
                                        }
                                        let expandedBadge;
                                        if (tmp7) {
                                          expandedBadge = tmp4.expandedBadge;
                                        }
                                        if (tmp13) {
                                          let includedBadge = tmp4.violationBadge;
                                        } else if (tmp16) {
                                          includedBadge = tmp4.includedBadge;
                                        } else {
                                          includedBadge = tmp15 ? tmp4.mixedBadge : tmp4.excludedBadge;
                                        }
                                        let armedBadge;
                                        if (tmp19) {
                                          armedBadge = tmp4.armedBadge;
                                        }
                                        if (cResult[24] === tmp4.badge) {
                                          if (cResult[25] === armedBadge) {
                                            if (cResult[26] === expandedBadge) {
                                              if (cResult[27] === includedBadge) {
                                                let tmp49 = cResult[28];
                                              }
                                              let str32 = "none";
                                              if (tmp20) {
                                                str32 = "auto";
                                              }
                                              if (cResult[29] === tmp7) {
                                                if (cResult[30] === tmp14) {
                                                  let tmp51 = cResult[31];
                                                }
                                                if (tmp20) {
                                                  const _HermesInternal7 = HermesInternal;
                                                  const combined2 =
                                                    "" + tmp21 + " \u00B7 " + name + " \u00B7 " + combined + str21;
                                                }
                                                if (tmp14) {
                                                  let str39 = "Show Navigation TTI region details";
                                                  if (tmp7) {
                                                    str39 = "Collapse Navigation TTI region details";
                                                  }
                                                  let tmp58 = str39;
                                                } else if (tmp17) {
                                                  let str38 =
                                                    "Freeze after this component paints on the next navigation";
                                                  if (tmp19) {
                                                    str38 = "Disarm the one-shot freeze for this component";
                                                  }
                                                  tmp58 = str38;
                                                }
                                                let num32 = 1;
                                                if (tmp7) {
                                                  num32 = 3;
                                                }
                                                if (cResult[32] === combined1) {
                                                  if (cResult[33] === tmp4.badgeText) {
                                                    if (cResult[34] === num32) {
                                                      if (cResult[35] === str30) {
                                                        let tmp59 = cResult[36];
                                                      }
                                                      if (cResult[37] === tmp20) {
                                                        if (cResult[38] === tmp49) {
                                                          if (cResult[39] === str32) {
                                                            if (cResult[40] === tmp62) {
                                                              if (cResult[41] === tmp50) {
                                                                if (cResult[42] === str33) {
                                                                  if (cResult[43] === tmp51) {
                                                                    if (cResult[44] === combined2) {
                                                                      if (cResult[45] === tmp58) {
                                                                        if (cResult[46] === tmp59) {
                                                                          let tmp63 = cResult[47];
                                                                        }
                                                                        if (cResult[48] === syncExternalStore) {
                                                                          if (cResult[49] === hierarchyDepth) {
                                                                            if (cResult[50] === navTTISurface) {
                                                                              let tmp67 = cResult[51];
                                                                            }
                                                                            if (cResult[52] === tmp63) {
                                                                              if (cResult[53] === tmp67) {
                                                                                if (cResult[54] === tmp46) {
                                                                                  let tmp71 = cResult[55];
                                                                                }
                                                                                return tmp71;
                                                                              }
                                                                            }
                                                                            let obj4 = {
                                                                              style: tmp46,
                                                                              pointerEvents: "box-none",
                                                                              accessible: false,
                                                                              children: null,
                                                                            };
                                                                            const items = [tmp63, tmp67];
                                                                            obj4.children = items;
                                                                            const tmp74 = closure_8(closure_6, obj4);
                                                                            cResult[52] = tmp63;
                                                                            cResult[53] = tmp67;
                                                                            cResult[54] = tmp46;
                                                                            cResult[55] = tmp74;
                                                                            tmp71 = tmp74;
                                                                          }
                                                                        }
                                                                        let tmp68 = null;
                                                                        if (0 === hierarchyDepth) {
                                                                          let obj5 = {
                                                                            target: syncExternalStore,
                                                                            surface: navTTISurface,
                                                                          };
                                                                          tmp68 = closure_7(closure_13, obj5);
                                                                        }
                                                                        cResult[48] = syncExternalStore;
                                                                        cResult[49] = hierarchyDepth;
                                                                        cResult[50] = navTTISurface;
                                                                        cResult[51] = tmp68;
                                                                        tmp67 = tmp68;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      const obj6 = {
                                                        style: tmp49,
                                                        pointerEvents: str32,
                                                        disabled: !tmp20,
                                                        hitSlop: tmp41(587).space.PX_12,
                                                        onPress: tmp50,
                                                        accessible: tmp20,
                                                        accessibilityRole: str33,
                                                        accessibilityState: tmp51,
                                                        accessibilityLabel: combined2,
                                                        accessibilityHint: tmp58,
                                                        children: tmp59,
                                                      };
                                                      const tmp66 = closure_7(closure_5, obj6);
                                                      cResult[37] = tmp20;
                                                      cResult[38] = tmp49;
                                                      cResult[39] = str32;
                                                      cResult[40] = !tmp20;
                                                      cResult[41] = tmp50;
                                                      cResult[42] = str33;
                                                      cResult[43] = tmp51;
                                                      cResult[44] = combined2;
                                                      cResult[45] = tmp58;
                                                      cResult[46] = tmp59;
                                                      cResult[47] = tmp66;
                                                      tmp63 = tmp66;
                                                    }
                                                  }
                                                }
                                                const obj7 = {
                                                  variant: "text-xs/bold",
                                                  color: str30,
                                                  style: tmp4.badgeText,
                                                  lineClamp: num32,
                                                  accessible: false,
                                                  children: combined1,
                                                };
                                                const tmp61 = closure_7(tmp(4886).Text, obj7);
                                                cResult[32] = combined1;
                                                cResult[33] = tmp4.badgeText;
                                                cResult[34] = num32;
                                                cResult[35] = str30;
                                                cResult[36] = tmp61;
                                                tmp59 = tmp61;
                                              }
                                              let tmp52;
                                              if (tmp14) {
                                                const obj8 = { expanded: tmp7 };
                                                tmp52 = obj8;
                                              }
                                              cResult[29] = tmp7;
                                              cResult[30] = tmp14;
                                              cResult[31] = tmp52;
                                              tmp51 = tmp52;
                                            }
                                          }
                                        }
                                        const items1 = [tmp4.badge, expandedBadge, includedBadge, armedBadge];
                                        cResult[24] = tmp4.badge;
                                        cResult[25] = armedBadge;
                                        cResult[26] = expandedBadge;
                                        cResult[27] = includedBadge;
                                        cResult[28] = items1;
                                        tmp49 = items1;
                                      }
                                    }
                                  }
                                  const items2 = [tmp4.outline, tmp43, violationOutline, mixedOutline];
                                  cResult[19] = tmp43;
                                  cResult[20] = tmp4.outline;
                                  cResult[21] = violationOutline;
                                  cResult[22] = mixedOutline;
                                  cResult[23] = items2;
                                  tmp46 = items2;
                                }
                              }
                            }
                          }
                          const fn = function q() {
                            if (closure_3) {
                              dependencyMap((arg0) => !arg0);
                            } else if (closure_5) {
                              const result = NavigationTTIDebugFreeze.disarmNavigationTTIDebugFreeze();
                            } else if (closure_4) {
                              const obj2 = { kind: "component", spanComponent: name };
                              let activeTraceId = null;
                              if (null != navTTISurface) {
                                activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(
                                  navTTISurface.definition,
                                  navTTISurface.navigationKey,
                                );
                              }
                              const obj4 = { armedDuringTraceId: activeTraceId, destinationKey: null };
                              let navigationKey;
                              if (navTTISurface != null) {
                                navigationKey = navTTISurface.navigationKey;
                              }
                              if (navigationKey == null) {
                                navigationKey = null;
                              }
                              obj4.destinationKey = navigationKey;
                              const result1 = NavigationTTIDebugFreeze.armNavigationTTIDebugFreeze(obj2, obj4);
                            }
                          };
                          cResult[13] = tmp17;
                          cResult[14] = tmp14;
                          cResult[15] = tmp19;
                          cResult[16] = name;
                          cResult[17] = navTTISurface;
                          cResult[18] = fn;
                          tmp41 = navTTISurface;
                        }
                        const _HermesInternal5 = HermesInternal;
                        str24 = " \u00B7 " + combined;
                      }
                    }
                  }
                }
              }
            }
            if (null != violation) {
              const _HermesInternal2 = HermesInternal;
              let str5 = "INVALID \u00B7 " + violation;
            } else {
              str5 = "MEASURED";
              if (!tmp16) {
                let str6 = "TRACKED";
                if ("included" !== descendantTracking) {
                  let str8 = "MIXED";
                  if ("excluded" === descendantTracking) {
                    str8 = "IGNORED";
                  }
                  str6 = str8;
                }
                const _HermesInternal = HermesInternal;
                str5 =
                  "BOUNDARY ONLY \u00B7 CHILDREN " +
                  str6 +
                  " \u00B7 " +
                  includedDescendants +
                  " tracked / " +
                  excludedDescendants +
                  " ignored below";
              }
            }
            cResult[4] = descendantTracking;
            cResult[5] = excludedDescendants;
            cResult[6] = null != violation;
            cResult[7] = includedDescendants;
            cResult[8] = tracking;
            cResult[9] = violation;
            cResult[10] = str5;
          }
        }
        const obj9 = { name, regionId, tracking };
        cResult[0] = name;
        cResult[1] = regionId;
        cResult[2] = tracking;
        cResult[3] = obj9;
        tmp9 = obj9;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const tmp6 = _slicedToArray(noop.useState(false), 2);
    }
  : (name) => {
      name = name.name;
      ({ tracking, descendantTracking, includedDescendants, excludedDescendants, hierarchyDepth, violation } = name);
      dependencyMap = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      closure_5 = undefined;
      const tmp = closure_10();
      const navTTISurface = name(16481).useNavTTISurface();
      let obj = name(16481);
      let obj2 = noop;
      [tmp6, c2] = noop.useState(false);
      if (typeof f74124 === "function") {
        const syncExternalStore = obj2.useSyncExternalStore(
          tmp2(16485).subscribeNavigationTTIDebugFreezeTarget,
          tmp2(16485).getNavigationTTIDebugFreezeTarget,
          tmp2(16485).getNavigationTTIDebugFreezeTarget,
        );
        let obj3 = { name, regionId: name.regionId, tracking };
        const tmp9 = closure_11(obj3);
        let tmp12 = "exclude" === tracking;
        let tmp13 = tmp12;
        if (tmp12) {
          tmp13 = "mixed" === descendantTracking;
        }
        if (!tmp12) {
          tmp12 = tmp11;
        }
        _slicedToArray = tmp12;
        let tmp15 = tmp14;
        if ("include" === tracking) {
          tmp15 = !tmp11;
        }
        noop = tmp15;
        let kind;
        if (syncExternalStore != null) {
          kind = syncExternalStore.kind;
        }
        closure_5 = tmp17;
        let tmp18 = tmp12;
        if (!tmp12) {
          tmp18 = tmp15;
        }
        if (null != violation) {
          const _HermesInternal2 = HermesInternal;
          let str5 = "INVALID \u00B7 " + violation;
        } else {
          str5 = "MEASURED";
          if (!tmp14) {
            let str6 = "TRACKED";
            if ("included" !== descendantTracking) {
              let str8 = "MIXED";
              if ("excluded" === descendantTracking) {
                str8 = "IGNORED";
              }
              str6 = str8;
            }
            const _HermesInternal = HermesInternal;
            str5 =
              "BOUNDARY ONLY \u00B7 CHILDREN " +
              str6 +
              " \u00B7 " +
              includedDescendants +
              " tracked / " +
              excludedDescendants +
              " ignored below";
          }
        }
        if (null == tmp9) {
          let str17 = "not observed";
          if (tmp14) {
            str17 = "waiting";
          }
          let combined = str17;
        } else {
          const _HermesInternal3 = HermesInternal;
          combined = "+" + tmp9 + "ms";
        }
        let tmp26 = str5;
        if (!tmp6) {
          let str18 = "INVALID";
          if (!tmp11) {
            let str19 = "MIXED";
            if (!tmp13) {
              let tmp27 = "BOUNDARY";
              if (tmp14) {
                tmp27 = null;
              }
              str19 = tmp27;
            }
            str18 = str19;
          }
          tmp26 = str18;
        }
        let str21 = "";
        if ("component" === kind && syncExternalStore.spanComponent === name) {
          str21 = " \u00B7 FREEZE NEXT";
        }
        let str22 = "";
        if (null != tmp26) {
          const _HermesInternal4 = HermesInternal;
          str22 = "" + tmp26 + " \u00B7 ";
        }
        if (!tmp6) {
          if (!tmp14) {
            let str24 = "";
          }
          let str26 = "";
          if (tmp12) {
            let str27 = " \u25B8";
            if (tmp6) {
              str27 = " \u25BE";
            }
            str26 = str27;
          }
          const _HermesInternal6 = HermesInternal;
          let str30 = "text-overlay-light";
          const combined1 = "" + str22 + name + str24 + str21 + str26;
          if (!tmp11) {
            str30 = "text-overlay-light";
            if (!tmp14) {
              let str31 = "text-default";
              if (tmp13) {
                str31 = "text-feedback-info";
              }
              str30 = str31;
            }
          }
          let result = hierarchyDepth * navTTISurface(587).space.PX_4;
          const items = [tmp.outline, , ,];
          const rect = { top: result, right: result, bottom: result, left: result };
          items[1] = rect;
          if (tmp11) {
            let violationOutline = tmp.violationOutline;
          } else {
            violationOutline = tmp14 ? tmp.includedOutline : tmp.excludedOutline;
          }
          items[2] = violationOutline;
          let mixedOutline;
          if (!tmp11) {
            if (tmp13) {
              mixedOutline = tmp.mixedOutline;
            }
          }
          let obj4 = { style: null, pointerEvents: "box-none", accessible: false, children: null };
          items[3] = mixedOutline;
          obj4.style = items;
          const items1 = [tmp.badge, , ,];
          let expandedBadge;
          if (tmp6) {
            expandedBadge = tmp.expandedBadge;
          }
          items1[1] = expandedBadge;
          if (tmp11) {
            let includedBadge = tmp.violationBadge;
          } else if (tmp14) {
            includedBadge = tmp.includedBadge;
          } else {
            includedBadge = tmp13 ? tmp.mixedBadge : tmp.excludedBadge;
          }
          items1[2] = includedBadge;
          let armedBadge;
          if (tmp17) {
            armedBadge = tmp.armedBadge;
          }
          let obj5 = {
            style: null,
            pointerEvents: null,
            disabled: null,
            hitSlop: null,
            onPress: null,
            accessible: null,
            accessibilityRole: null,
            accessibilityState: null,
            accessibilityLabel: null,
            accessibilityHint: null,
            children: null,
          };
          items1[3] = armedBadge;
          obj5.style = items1;
          let str32 = "none";
          if (tmp18) {
            str32 = "auto";
          }
          obj5.pointerEvents = str32;
          obj5.disabled = !tmp18;
          obj5.hitSlop = navTTISurface(587).space.PX_12;
          let fn;
          if (tmp18) {
            fn = () => {
              if (closure_3) {
                _undefined((arg0) => !arg0);
              } else if (closure_5) {
                const result = NavigationTTIDebugFreeze.disarmNavigationTTIDebugFreeze();
              } else if (closure_4) {
                const obj2 = { kind: "component", spanComponent: name };
                let activeTraceId = null;
                if (null != navTTISurface) {
                  activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(
                    navTTISurface.definition,
                    navTTISurface.navigationKey,
                  );
                }
                const obj4 = { armedDuringTraceId: activeTraceId, destinationKey: null };
                let navigationKey;
                if (navTTISurface != null) {
                  navigationKey = navTTISurface.navigationKey;
                }
                if (navigationKey == null) {
                  navigationKey = null;
                }
                obj4.destinationKey = navigationKey;
                const result1 = NavigationTTIDebugFreeze.armNavigationTTIDebugFreeze(obj2, obj4);
              }
            };
          }
          obj5.onPress = fn;
          obj5.accessible = tmp18;
          let str33;
          if (tmp18) {
            str33 = "button";
          }
          obj5.accessibilityRole = str33;
          let tmp46;
          if (tmp12) {
            const obj6 = { expanded: tmp6 };
            tmp46 = obj6;
          }
          obj5.accessibilityState = tmp46;
          let combined2;
          if (tmp18) {
            const _HermesInternal7 = HermesInternal;
            combined2 = "" + str5 + " \u00B7 " + name + " \u00B7 " + combined + str21;
          }
          obj5.accessibilityLabel = combined2;
          if (tmp12) {
            let str39 = "Show Navigation TTI region details";
            if (tmp6) {
              str39 = "Collapse Navigation TTI region details";
            }
            let tmp52 = str39;
          } else if (tmp15) {
            let str38 = "Freeze after this component paints on the next navigation";
            if (tmp17) {
              str38 = "Disarm the one-shot freeze for this component";
            }
            tmp52 = str38;
          }
          obj5.accessibilityHint = tmp52;
          const obj7 = {
            variant: "text-xs/bold",
            color: str30,
            style: tmp.badgeText,
            lineClamp: null,
            accessible: false,
            children: null,
          };
          let num = 1;
          if (tmp6) {
            num = 3;
          }
          obj7.lineClamp = num;
          obj7.children = combined1;
          obj5.children = closure_7(tmp2(4886).Text, obj7);
          const items2 = [closure_7(closure_5, obj5)];
          let tmp42Result = null;
          if (0 === hierarchyDepth) {
            const obj8 = { target: syncExternalStore, surface: navTTISurface };
            tmp42Result = closure_7(closure_13, obj8);
          }
          items2[1] = tmp42Result;
          obj4.children = items2;
          return closure_8(closure_6, obj4);
        }
        const _HermesInternal5 = HermesInternal;
        str24 = " \u00B7 " + combined;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const tmp5 = _slicedToArray(noop.useState(false), 2);
    };

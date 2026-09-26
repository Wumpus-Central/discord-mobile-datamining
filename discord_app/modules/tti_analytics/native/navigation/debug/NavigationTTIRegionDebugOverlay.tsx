// === Module 16187: NavigationTTIRegionDebugOverlay ===

// Module 16187 (NavigationTTIRegionDebugOverlay)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16183 */;
import NavigationTTIDebugFreeze from "NavigationTTIDebugFreeze" /* 16184 */;
import NavigationTTIRegionDebugState from "NavigationTTIRegionDebugState" /* 16185 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function NavigationTTIDebugFreezeControl(arg0) {
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
  const items = [tmp.freezeControl, ];
  let armedFreezeControl;
  if (null != target) {
    armedFreezeControl = tmp.armedFreezeControl;
  }
  let obj = {
    style: items,
    hitSlop: name(576).space.PX_12,
    onPress() {
      let activeTraceId = null;
      if (null != closure_1_0) {
        activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(closure_1_0.definition, closure_1_0.navigationKey);
      }
      if (null == name) {
        let first = closure_9[0];
        if (first == null) {
          first = null;
        }
        let tmp8 = first;
      } else {
        tmp8 = closure_9[closure_9.indexOf(closure_9, tmp5) + 1];
        if (tmp8 == null) {
          tmp8 = null;
        }
      }
      if (null == tmp8) {
        const result = NavigationTTIDebugFreeze.disarmNavigationTTIDebugFreeze();
      } else {
        const obj3 = { kind: "milestone", name: tmp8 };
        const obj4 = { armedDuringTraceId: activeTraceId, destinationKey: null };
        let navigationKey;
        if (closure_1_0 != null) {
          navigationKey = closure_1_0.navigationKey;
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
    children: null
  };
  items[1] = armedFreezeControl;
  let str4 = "text-default";
  if (null != target) {
    str4 = "text-feedback-info";
  }
  obj.children = closure_7(Text_Text.Text, { variant: "text-xs/bold", color: str4, style: tmp.badgeText, lineClamp: 1, accessible: false, children: str });
  return closure_7(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ["time_start", "first_paint"];
const createStyles = fn(4836);
let obj2 = { outline: null, includedOutline: null, excludedOutline: null, mixedOutline: null, violationOutline: null, badge: null, expandedBadge: null, badgeText: null, includedBadge: null, excludedBadge: null, mixedBadge: null, violationBadge: null, armedBadge: null, freezeControl: null, armedFreezeControl: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 10000;
obj3.borderWidth = 2;
obj2.outline = obj3;
obj2.includedOutline = { borderColor: nativeDefault.colors.STATUS_POSITIVE, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
let obj4 = { borderColor: nativeDefault.colors.STATUS_POSITIVE, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE };
obj2.excludedOutline = { borderColor: nativeDefault.colors.BORDER_STRONG, borderStyle: "dashed", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj5 = { borderColor: nativeDefault.colors.BORDER_STRONG, borderStyle: "dashed", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.mixedOutline = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.violationOutline = { borderColor: nativeDefault.colors.STATUS_DANGER, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj2.badge = { position: "absolute", maxWidth: "48%" };
obj2.expandedBadge = { maxWidth: "92%" };
let obj7 = { borderColor: nativeDefault.colors.STATUS_DANGER, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj2.badgeText = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
let rect = { top: 0, left: 0, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.includedBadge = rect;
const rect1 = { top: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.excludedBadge = rect1;
const rect2 = { top: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.mixedBadge = rect2;
const rect3 = { top: 0, left: 0, backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2.violationBadge = rect3;
const obj8 = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj2.armedBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
const rect4 = { position: "absolute", right: 0, bottom: 0, maxWidth: "60%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.freezeControl = rect4;
const obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.armedFreezeControl = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionDebugOverlay.tsx");

export const NavigationTTIRegionDebugOverlay = function NavigationTTIRegionDebugOverlay(name) {
  name = name.name;
  ({ regionId, tracking, descendantTracking, includedDescendants, excludedDescendants, hierarchyDepth, violation } = name);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_5 = undefined;
  const tmp = closure_10();
  const navTTISurface = name(16181).useNavTTISurface();
  let obj = name(16181);
  const tmp2 = name;
  [tmp6, c2] = noop.useState(false);
  const syncExternalStore = noop.useSyncExternalStore(name(16184).subscribeNavigationTTIDebugFreezeTarget, name(16184).getNavigationTTIDebugFreezeTarget, name(16184).getNavigationTTIDebugFreezeTarget);
  closure_129_0 = name;
  closure_129_1 = regionId;
  closure_129_2 = tracking;
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const navTTISurface1 = name(16181).useNavTTISurface();
  closure_129_3 = navTTISurface1;
  const items = [name, regionId, navTTISurface1, tracking];
  const callback = noop.useCallback((arg0) => {
    closure_0 = navTTISurface(_undefined[7]).subscribeDebugBundle(arg0);
    const obj = navTTISurface(_undefined[7]);
    closure_1 = name(_undefined[8]).subscribeNavigationTTIRegionDebugMeasurements(arg0);
    return () => {
      closure_0();
      closure_1();
    };
  }, []);
  const callback1 = noop.useCallback(() => {
    let activeTraceId = null;
    if (null != closure_3) {
      activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(closure_3.definition, closure_3.navigationKey);
    }
    let str = "none";
    if (null != activeTraceId) {
      if ("include" === c2) {
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
        str3 = NavigationTTIRegionDebugState.getNavigationTTIRegionDebugMeasurement(activeTraceId, navTTISurface);
      }
      if (str3 == null) {
        str3 = "";
      }
      const _HermesInternal = HermesInternal;
      str = "" + activeTraceId + ":" + str3;
    }
    return str;
  }, items);
  const syncExternalStore1 = noop.useSyncExternalStore(callback, callback1, callback1);
  const lastIndexOfResult = syncExternalStore1.lastIndexOf(":");
  let NumberResult = null;
  if (-1 !== lastIndexOfResult) {
    NumberResult = null;
    if ("" !== syncExternalStore1.slice(lastIndexOfResult + 1)) {
      const _Number = Number;
      NumberResult = Number(syncExternalStore1.slice(lastIndexOfResult + 1));
    }
  }
  let tmp15 = "exclude" === tracking;
  let tmp16 = tmp15;
  if (tmp15) {
    tmp16 = "mixed" === descendantTracking;
  }
  if (!tmp15) {
    tmp15 = tmp14;
  }
  _slicedToArray = tmp15;
  let tmp18 = tmp17;
  if ("include" === tracking) {
    tmp18 = !tmp14;
  }
  noop = tmp18;
  let kind;
  if (syncExternalStore != null) {
    kind = syncExternalStore.kind;
  }
  closure_5 = tmp20;
  let tmp21 = tmp15;
  if (!tmp15) {
    tmp21 = tmp18;
  }
  if (null != violation) {
    const _HermesInternal2 = HermesInternal;
    let str3 = "INVALID \u00B7 " + violation;
  } else {
    str3 = "MEASURED";
    if (!tmp17) {
      let str4 = "TRACKED";
      if ("included" !== descendantTracking) {
        let str6 = "MIXED";
        if ("excluded" === descendantTracking) {
          str6 = "IGNORED";
        }
        str4 = str6;
      }
      let _HermesInternal = HermesInternal;
      str3 = "BOUNDARY ONLY \u00B7 CHILDREN " + str4 + " \u00B7 " + includedDescendants + " tracked / " + excludedDescendants + " ignored below";
    }
  }
  if (null == NumberResult) {
    let str15 = "not observed";
    if (tmp17) {
      str15 = "waiting";
    }
    let combined = str15;
  } else {
    const _HermesInternal3 = HermesInternal;
    combined = "+" + NumberResult + "ms";
  }
  let tmp29 = str3;
  if (!tmp6) {
    let str16 = "INVALID";
    if (!tmp14) {
      let str17 = "MIXED";
      if (!tmp16) {
        let tmp30 = "BOUNDARY";
        if (tmp17) {
          tmp30 = null;
        }
        str17 = tmp30;
      }
      str16 = str17;
    }
    tmp29 = str16;
  }
  let str18 = "";
  if ("component" === kind && syncExternalStore.spanComponent === name) {
    str18 = " \u00B7 FREEZE NEXT";
  }
  let str19 = "";
  if (null != tmp29) {
    const _HermesInternal4 = HermesInternal;
    str19 = "" + tmp29 + " \u00B7 ";
  }
  if (!tmp6) {
    if (!tmp17) {
      let str21 = "";
    }
    let str22 = "";
    if (tmp15) {
      let str23 = " \u25B8";
      if (tmp6) {
        str23 = " \u25BE";
      }
      str22 = str23;
    }
    const _HermesInternal5 = HermesInternal;
    let str26 = "text-overlay-light";
    const combined1 = "" + str19 + name + str21 + str18 + str22;
    if (!tmp14) {
      str26 = "text-overlay-light";
      if (!tmp17) {
        let str27 = "text-default";
        if (tmp16) {
          str27 = "text-feedback-info";
        }
        str26 = str27;
      }
    }
    let result = hierarchyDepth * navTTISurface(576).space.PX_4;
    const items1 = [tmp.outline, , , ];
    const rect = { top: result, right: result, bottom: result, left: result };
    items1[1] = rect;
    if (tmp14) {
      let violationOutline = tmp.violationOutline;
    } else {
      violationOutline = tmp17 ? tmp.includedOutline : tmp.excludedOutline;
    }
    items1[2] = violationOutline;
    let mixedOutline;
    if (!tmp14) {
      if (tmp16) {
        mixedOutline = tmp.mixedOutline;
      }
    }
    let obj3 = { style: null, pointerEvents: "box-none", accessible: false, children: null };
    items1[3] = mixedOutline;
    obj3.style = items1;
    const items2 = [tmp.badge, , , ];
    let expandedBadge;
    if (tmp6) {
      expandedBadge = tmp.expandedBadge;
    }
    items2[1] = expandedBadge;
    if (tmp14) {
      let includedBadge = tmp.violationBadge;
    } else if (tmp17) {
      includedBadge = tmp.includedBadge;
    } else {
      includedBadge = tmp16 ? tmp.mixedBadge : tmp.excludedBadge;
    }
    items2[2] = includedBadge;
    let armedBadge;
    if (tmp20) {
      armedBadge = tmp.armedBadge;
    }
    let obj4 = { style: null, pointerEvents: null, disabled: null, hitSlop: null, onPress: null, accessible: null, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, children: null };
    items2[3] = armedBadge;
    obj4.style = items2;
    let str28 = "none";
    if (tmp21) {
      str28 = "auto";
    }
    obj4.pointerEvents = str28;
    obj4.disabled = !tmp21;
    obj4.hitSlop = navTTISurface(576).space.PX_12;
    let fn;
    if (tmp21) {
      fn = () => {
        if (closure_3) {
          _undefined((arg0) => !arg0);
        } else if (closure_5) {
          const result = NavigationTTIDebugFreeze.disarmNavigationTTIDebugFreeze();
        } else if (closure_4) {
          const obj2 = { kind: "component", spanComponent: name };
          let activeTraceId = null;
          if (null != navTTISurface) {
            activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(navTTISurface.definition, navTTISurface.navigationKey);
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
    obj4.onPress = fn;
    obj4.accessible = tmp21;
    let str29;
    if (tmp21) {
      str29 = "button";
    }
    obj4.accessibilityRole = str29;
    let tmp48;
    if (tmp15) {
      let obj5 = { expanded: tmp6 };
      tmp48 = obj5;
    }
    obj4.accessibilityState = tmp48;
    let combined2;
    if (tmp21) {
      const _HermesInternal6 = HermesInternal;
      combined2 = "" + str3 + " \u00B7 " + name + " \u00B7 " + combined + str18;
    }
    obj4.accessibilityLabel = combined2;
    if (tmp15) {
      let str35 = "Show Navigation TTI region details";
      if (tmp6) {
        str35 = "Collapse Navigation TTI region details";
      }
      let tmp54 = str35;
    } else if (tmp18) {
      let str34 = "Freeze after this component paints on the next navigation";
      if (tmp20) {
        str34 = "Disarm the one-shot freeze for this component";
      }
      tmp54 = str34;
    }
    obj4.accessibilityHint = tmp54;
    const obj6 = { variant: "text-xs/bold", color: str26, style: tmp.badgeText, lineClamp: null, accessible: false, children: null };
    let num2 = 1;
    if (tmp6) {
      num2 = 3;
    }
    obj6.lineClamp = num2;
    obj6.children = combined1;
    obj4.children = closure_7(tmp2(4832).Text, obj6);
    const items3 = [closure_7(closure_5, obj4), ];
    let tmp44Result = null;
    if (0 === hierarchyDepth) {
      const obj7 = { target: syncExternalStore, surface: navTTISurface };
      tmp44Result = closure_7(NavigationTTIDebugFreezeControl, obj7);
    }
    items3[1] = tmp44Result;
    obj3.children = items3;
    return closure_8(closure_6, obj3);
  }
  str21 = " \u00B7 " + combined;
  let obj2 = name(16181);
};
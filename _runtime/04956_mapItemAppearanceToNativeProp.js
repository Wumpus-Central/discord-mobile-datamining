// _runtime/04956_mapItemAppearanceToNativeProp.js
import bottomTabsDebugLog from "04950_bottomTabsDebugLog.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

require = fn;
function mapItemAppearanceToNativeProp(compactInline) {
  if (compactInline) {
    ({ normal, selected, focused, disabled } = compactInline);
    let obj = {};
    const merged = Object.assign(compactInline);
    let tmp4;
    if (normal) {
      const tabBarItemTitleFontWeight = normal.tabBarItemTitleFontWeight;
      obj = {};
      ({ tabBarItemTitleFontColor, tabBarItemIconColor, tabBarItemBadgeBackgroundColor } = normal);
      const merged1 = Object.assign(normal);
      obj.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor);
      obj.tabBarItemIconColor = React7(tabBarItemIconColor);
      obj.tabBarItemBadgeBackgroundColor = React7(tabBarItemBadgeBackgroundColor);
      let StringResult;
      if (undefined !== tabBarItemTitleFontWeight) {
        const _String = String;
        StringResult = String(tabBarItemTitleFontWeight);
      }
      obj.tabBarItemTitleFontWeight = StringResult;
      tmp4 = obj;
    }
    obj.normal = tmp4;
    let tmp11;
    if (selected) {
      const tabBarItemTitleFontWeight2 = selected.tabBarItemTitleFontWeight;
      obj = {};
      ({
        tabBarItemTitleFontColor: tabBarItemTitleFontColor2,
        tabBarItemIconColor: tabBarItemIconColor2,
        tabBarItemBadgeBackgroundColor: tabBarItemBadgeBackgroundColor2,
      } = selected);
      const merged2 = Object.assign(selected);
      obj.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor2);
      obj.tabBarItemIconColor = React7(tabBarItemIconColor2);
      obj.tabBarItemBadgeBackgroundColor = React7(tabBarItemBadgeBackgroundColor2);
      let StringResult1;
      if (undefined !== tabBarItemTitleFontWeight2) {
        const _String2 = String;
        StringResult1 = String(tabBarItemTitleFontWeight2);
      }
      obj.tabBarItemTitleFontWeight = StringResult1;
      tmp11 = obj;
    }
    obj.selected = tmp11;
    let tmp18;
    if (focused) {
      const tabBarItemTitleFontWeight3 = focused.tabBarItemTitleFontWeight;
      const obj1 = {};
      ({
        tabBarItemTitleFontColor: tabBarItemTitleFontColor3,
        tabBarItemIconColor: tabBarItemIconColor3,
        tabBarItemBadgeBackgroundColor: tabBarItemBadgeBackgroundColor3,
      } = focused);
      const merged3 = Object.assign(focused);
      obj1.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor3);
      obj1.tabBarItemIconColor = React7(tabBarItemIconColor3);
      obj1.tabBarItemBadgeBackgroundColor = React7(tabBarItemBadgeBackgroundColor3);
      let StringResult2;
      if (undefined !== tabBarItemTitleFontWeight3) {
        const _String3 = String;
        StringResult2 = String(tabBarItemTitleFontWeight3);
      }
      obj1.tabBarItemTitleFontWeight = StringResult2;
      tmp18 = obj1;
    }
    obj.focused = tmp18;
    let tmp25;
    if (disabled) {
      const tabBarItemTitleFontWeight4 = disabled.tabBarItemTitleFontWeight;
      const obj2 = {};
      ({
        tabBarItemTitleFontColor: tabBarItemTitleFontColor4,
        tabBarItemIconColor: tabBarItemIconColor4,
        tabBarItemBadgeBackgroundColor: tabBarItemBadgeBackgroundColor4,
      } = disabled);
      const merged4 = Object.assign(disabled);
      obj2.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor4);
      obj2.tabBarItemIconColor = React7(tabBarItemIconColor4);
      obj2.tabBarItemBadgeBackgroundColor = React7(tabBarItemBadgeBackgroundColor4);
      let StringResult3;
      if (undefined !== tabBarItemTitleFontWeight4) {
        const _String4 = String;
        StringResult3 = String(tabBarItemTitleFontWeight4);
      }
      obj2.tabBarItemTitleFontWeight = StringResult3;
      tmp25 = obj2;
    }
    obj.disabled = tmp25;
    return obj;
  }
}
let closure_3 = [
  "onWillAppear",
  "onDidAppear",
  "onWillDisappear",
  "onDidDisappear",
  "isFocused",
  "freezeContents",
  "icon",
  "selectedIcon",
  "standardAppearance",
  "scrollEdgeAppearance",
  "scrollEdgeEffects",
  "experimental_userInterfaceStyle",
  "style",
];
get_ActivityIndicator = fn(17);
({
  Image: closure_7,
  Platform,
  StyleSheet,
  findNodeHandle: closure_8,
  processColor: closure_9,
} = get_ActivityIndicator);
const jsx = fn(21).jsx;
const fillParent = StyleSheet.create({ fillParent: { position: "absolute", flex: 1, width: "100%", height: "100%" } });

export default function TabsScreen(onWillAppear) {
  let obj = onDidDisappear;
  const ref = onDidDisappear.useRef(null);
  const ref1 = onDidDisappear.useRef(-1);
  const effect = onDidDisappear.useEffect(() => {
    if (null != ref.current) {
      let num2 = React6(tmp.current);
      if (num2 == null) {
        num2 = -1;
      }
      ref1.current = num2;
    } else {
      ref1.current = -1;
    }
  }, []);
  [tmp5, dependencyMap] = onWillDisappear(onDidDisappear.useState(false), 2);
  onWillAppear = onWillAppear.onWillAppear;
  const onDidAppear = onWillAppear.onDidAppear;
  onWillDisappear = onWillAppear.onWillDisappear;
  onDidDisappear = onWillAppear.onDidDisappear;
  const isFocused = onWillAppear.isFocused;
  ({ freezeContents, icon, selectedIcon, standardAppearance, scrollEdgeAppearance, scrollEdgeEffects } = onWillAppear);
  ({ experimental_userInterfaceStyle, style } = onWillAppear);
  const tmp7 = onDidAppear(onWillAppear, onWillAppear);
  let obj1 = ref(4915);
  let flag = false;
  if (obj1.freezeEnabled()) {
    flag = freezeContents;
    if (undefined === freezeContents) {
      let tmp10 = !tmp5;
      if (tmp8(4925).featureFlags.experiment.controlledBottomTabs) {
        if (!tmp5) {
          tmp10 = !tmp6;
        }
        flag = tmp10;
      } else {
        flag = tmp10;
      }
    }
  }
  const items = [onWillAppear];
  const items1 = [onDidAppear];
  const callback = obj.useCallback((arg0) => {
    bottomTabsDebugLog.bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onWillAppear received");
    dependencyMap(true);
    if (onWillAppear != null) {
      tmp3(arg0);
    }
  }, items);
  const items2 = [onWillDisappear];
  const callback1 = obj.useCallback((arg0) => {
    bottomTabsDebugLog.bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onDidAppear received");
    if (onDidAppear != null) {
      tmp2(arg0);
    }
  }, items1);
  const items3 = [onDidDisappear];
  const callback2 = obj.useCallback((arg0) => {
    bottomTabsDebugLog.bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onWillDisappear received");
    if (onWillDisappear != null) {
      tmp2(arg0);
    }
  }, items2);
  const callback3 = obj.useCallback((arg0) => {
    bottomTabsDebugLog.bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onDidDisappear received");
    dependencyMap(false);
    if (onDidDisappear != null) {
      tmp3(arg0);
    }
  }, items3);
  const tmp4 = onWillDisappear(onDidDisappear.useState(false), 2);
  let num = ref1.current;
  if (num == null) {
    num = -1;
  }
  ref(4950).bottomTabsDebugLog(
    "TabsScreen [" +
      num +
      "] render; tabKey: " +
      tmp7.tabKey +
      " shouldFreeze: " +
      flag +
      ", isFocused: " +
      undefined !==
      isFocused && isFocused + " nativeViewIsVisible: " + tmp5,
  );
  let android;
  if (icon != null) {
    android = icon.android;
  }
  if (!android) {
    let shared;
    if (icon != null) {
      shared = icon.shared;
    }
    android = shared;
  }
  if (android) {
    if ("imageSource" === android.type) {
      const assetSource = closure_7.resolveAssetSource(android.imageSource);
      if (!assetSource) {
        const _console = console;
        console.error("[RNScreens] failed to resolve an asset for bottom tab icon");
      }
      obj = { imageIconResource: assetSource };
      obj1 = obj;
    } else if ("drawableResource" === android.type) {
      obj = { drawableIconResourceName: android.name };
      obj1 = obj;
    } else {
      const _Error = Error;
      const error = new Error(
        "[RNScreens] Incorrect icon format for Android. You must provide `imageSource` or `drawableResource`.",
      );
      throw error;
    }
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  const obj3 = {
    collapsable: false,
    style: null,
    onWillAppear: callback,
    onDidAppear: callback1,
    onWillDisappear: callback2,
    onDidDisappear: callback3,
    isFocused: undefined !== isFocused && isFocused,
  };
  const items4 = [style, fillParent.fillParent];
  obj3.style = items4;
  const obj2 = {};
  const tmp8Result = ref(4950);
  const merged1 = Object.assign(obj2);
  let tmp30;
  if (standardAppearance) {
    const obj4 = {};
    ({ stacked, inline, compactInline, tabBarBackgroundColor, tabBarShadowColor } = standardAppearance);
    const merged2 = Object.assign(standardAppearance);
    obj4.stacked = mapItemAppearanceToNativeProp(stacked);
    obj4.inline = mapItemAppearanceToNativeProp(inline);
    obj4.compactInline = mapItemAppearanceToNativeProp(compactInline);
    obj4.tabBarBackgroundColor = closure_9(tabBarBackgroundColor);
    obj4.tabBarShadowColor = closure_9(tabBarShadowColor);
    tmp30 = obj4;
  }
  obj3.standardAppearance = tmp30;
  let tmp36;
  if (scrollEdgeAppearance) {
    const obj5 = {};
    ({
      stacked: stacked2,
      inline: inline2,
      compactInline: compactInline2,
      tabBarBackgroundColor: tabBarBackgroundColor2,
      tabBarShadowColor: tabBarShadowColor2,
    } = scrollEdgeAppearance);
    const merged3 = Object.assign(scrollEdgeAppearance);
    obj5.stacked = mapItemAppearanceToNativeProp(stacked2);
    obj5.inline = mapItemAppearanceToNativeProp(inline2);
    obj5.compactInline = mapItemAppearanceToNativeProp(compactInline2);
    obj5.tabBarBackgroundColor = closure_9(tabBarBackgroundColor2);
    obj5.tabBarShadowColor = closure_9(tabBarShadowColor2);
    tmp36 = obj5;
  }
  obj3.scrollEdgeAppearance = tmp36;
  obj3.ref = ref;
  let bottom;
  if (scrollEdgeEffects != null) {
    bottom = scrollEdgeEffects.bottom;
  }
  obj3.bottomScrollEdgeEffect = bottom;
  let left;
  if (scrollEdgeEffects != null) {
    left = scrollEdgeEffects.left;
  }
  obj3.leftScrollEdgeEffect = left;
  let right;
  if (scrollEdgeEffects != null) {
    right = scrollEdgeEffects.right;
  }
  obj3.rightScrollEdgeEffect = right;
  let top;
  if (scrollEdgeEffects != null) {
    top = scrollEdgeEffects.top;
  }
  obj3.topScrollEdgeEffect = top;
  obj3.isTitleUndefined = null === tmp7.title || undefined === tmp7.title;
  obj3.userInterfaceStyle = experimental_userInterfaceStyle;
  const merged4 = Object.assign(tmp7);
  obj3.children = jsx(ref(4923).Freeze, { freeze: flag, placeholder: tmp7.placeholder, children: tmp7.children });
  return jsx(ref1(4957), {
    collapsable: false,
    style: null,
    onWillAppear: callback,
    onDidAppear: callback1,
    onWillDisappear: callback2,
    onDidDisappear: callback3,
    isFocused: undefined !== isFocused && isFocused,
  });
}

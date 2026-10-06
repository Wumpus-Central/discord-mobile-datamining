// _runtime/05734_TabsScreen.js
import Fragment from "react/00021_Fragment.js";
import _mod5735 from "metro/05735__.js";
import _modDef5736 from "metro/05736__.js";
import react_native from "05737_react-native.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react from "00019_react.js";
import react_native2 from "00017_react-native.js";

let StyleSheet;
let c9;
let closure_3 = ["android", "ios"];
let closure_4 = ["onDidAppear", "onDidDisappear", "onWillAppear", "onWillDisappear", "children", "style"];
let closure_5 = [
  "tabBarBackgroundColor",
  "tabBarItemRippleColor",
  "normal",
  "selected",
  "focused",
  "disabled",
  "tabBarItemActiveIndicatorColor",
  "tabBarItemTitleFontWeight",
  "tabBarItemBadgeBackgroundColor",
  "tabBarItemBadgeTextColor",
];
let closure_6 = ["tabBarItemTitleFontColor", "tabBarItemIconColor"];
({ StyleSheet, processColor: c9 } = react_native2);
const jsx = Fragment.jsx;
const fillParent = StyleSheet.create({ fillParent: { position: "absolute", flex: 1, width: "100%", height: "100%" } });

export default function TabsScreen(arg0) {
  let StringResult;
  let android;
  let children;
  let disabled;
  let focused;
  let ios;
  let normal;
  let onDidAppear;
  let onDidDisappear;
  let onWillAppear;
  let onWillDisappear;
  let selected;
  let style;
  let tabBarBackgroundColor;
  let tabBarItemActiveIndicatorColor;
  let tabBarItemBadgeBackgroundColor;
  let tabBarItemBadgeTextColor;
  let tabBarItemIconColor;
  let tabBarItemIconColor2;
  let tabBarItemIconColor3;
  let tabBarItemIconColor4;
  let tabBarItemRippleColor;
  let tabBarItemTitleFontColor;
  let tabBarItemTitleFontColor2;
  let tabBarItemTitleFontColor3;
  let tabBarItemTitleFontColor4;
  let tabBarItemTitleFontWeight;
  let tmp22;
  let tmp26;
  let tmp30;
  let tmp34;
  ({ android, ios } = arg0);
  const tmp2 = _objectWithoutProperties(arg0, closure_3);
  const ref = react.useRef(null);
  ({ onDidAppear, onDidDisappear, onWillAppear, onWillDisappear, children, style } = tmp2);
  const tmp4 = _objectWithoutProperties(tmp2, closure_4);
  let icon;
  const obj = _mod5735;
  const obj2 = {
    componentNodeRef: ref,
    onDidAppear,
    onDidDisappear,
    onWillAppear,
    onWillDisappear,
    screenKey: tmp4.screenKey,
  };
  const lifecycleCallbacks = obj.useTabsScreen(obj2).lifecycleCallbacks;
  if (android != null) {
    icon = android.icon;
  }
  let selectedIcon;
  if (android != null) {
    selectedIcon = android.selectedIcon;
  }
  const tmp5Result = react_native;
  const result = tmp5Result.parseAndroidIconToNativeProps(icon);
  const tmp5Result2 = react_native;
  const result1 = tmp5Result2.parseAndroidIconToNativeProps(selectedIcon);
  const items = [,];
  const obj3 = {
    imageIconResource: result.imageIconResource,
    drawableIconResourceName: result.drawableIconResourceName,
    selectedImageIconResource: result1.imageIconResource,
    selectedDrawableIconResourceName: result1.drawableIconResourceName,
  };
  items[0] = style;
  items[1] = fillParent.fillParent;
  _modDef5736;
  const merged = Object.assign(lifecycleCallbacks);
  const merged1 = Object.assign(obj3);
  const merged2 = Object.assign(tmp4);
  let standardAppearance;
  if (android != null) {
    standardAppearance = android.standardAppearance;
  }
  let tmp17;
  if (standardAppearance) {
    ({ normal, selected, focused, disabled, tabBarItemTitleFontWeight } = standardAppearance);
    const obj5 = {
      tabBarBackgroundColor: React4(tabBarBackgroundColor),
      tabBarItemRippleColor: React4(tabBarItemRippleColor),
      normal: tmp22,
      selected: tmp26,
      focused: tmp30,
      disabled: tmp34,
      tabBarItemActiveIndicatorColor: React4(tabBarItemActiveIndicatorColor),
      tabBarItemTitleFontWeight: StringResult,
      tabBarItemBadgeBackgroundColor: React4(tabBarItemBadgeBackgroundColor),
      tabBarItemBadgeTextColor: React4(tabBarItemBadgeTextColor),
    };
    ({
      tabBarBackgroundColor,
      tabBarItemRippleColor,
      tabBarItemActiveIndicatorColor,
      tabBarItemBadgeBackgroundColor,
      tabBarItemBadgeTextColor,
    } = standardAppearance);
    const merged3 = Object.assign(_objectWithoutProperties(standardAppearance, closure_5));
    tmp22 = undefined;
    if (normal) {
      const obj6 = {
        tabBarItemTitleFontColor: React4(tabBarItemTitleFontColor),
        tabBarItemIconColor: React4(tabBarItemIconColor),
      };
      ({ tabBarItemTitleFontColor, tabBarItemIconColor } = normal);
      const merged4 = Object.assign(_objectWithoutProperties(normal, closure_6));
      tmp22 = obj6;
    }
    tmp26 = undefined;
    if (selected) {
      const obj7 = {
        tabBarItemTitleFontColor: React4(tabBarItemTitleFontColor2),
        tabBarItemIconColor: React4(tabBarItemIconColor2),
      };
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor2, tabBarItemIconColor: tabBarItemIconColor2 } = selected);
      const merged5 = Object.assign(_objectWithoutProperties(selected, closure_6));
      tmp26 = obj7;
    }
    tmp30 = undefined;
    if (focused) {
      const obj8 = {
        tabBarItemTitleFontColor: React4(tabBarItemTitleFontColor3),
        tabBarItemIconColor: React4(tabBarItemIconColor3),
      };
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor3, tabBarItemIconColor: tabBarItemIconColor3 } = focused);
      const merged6 = Object.assign(_objectWithoutProperties(focused, closure_6));
      tmp30 = obj8;
    }
    tmp34 = undefined;
    if (disabled) {
      const obj9 = {
        tabBarItemTitleFontColor: React4(tabBarItemTitleFontColor4),
        tabBarItemIconColor: React4(tabBarItemIconColor4),
      };
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor4, tabBarItemIconColor: tabBarItemIconColor4 } = disabled);
      const merged7 = Object.assign(_objectWithoutProperties(disabled, closure_6));
      tmp34 = obj9;
    }
    StringResult = undefined;
    if (undefined !== tabBarItemTitleFontWeight) {
      const _String = String;
      StringResult = String(tabBarItemTitleFontWeight);
    }
    tmp17 = obj5;
  }
  return (
    <tmp12 collapsable={false} style={items} ref={ref} standardAppearance={tmp17}>
      {children}
    </tmp12>
  );
}

// _runtime/metro/04970__.js
import _mod4971 from "04971__.js";
import _modDef4972 from "04972__.js";
import _mod4973 from "04973__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";

require = fn;
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
get_ActivityIndicator = fn(17);
({ StyleSheet, processColor: closure_9 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const fillParent = StyleSheet.create({ fillParent: { position: "absolute", flex: 1, width: "100%", height: "100%" } });

export default function TabsScreen(arg0) {
  ({ android, ios } = arg0);
  const tmp2 = _objectWithoutProperties(arg0, closure_3);
  const ref = noop.useRef(null);
  ({ onDidAppear, onDidDisappear, onWillAppear, onWillDisappear, children, style } = tmp2);
  const tmp4 = _objectWithoutProperties(tmp2, closure_4);
  let obj = {
    componentNodeRef: ref,
    onDidAppear,
    onDidDisappear,
    onWillAppear,
    onWillDisappear,
    screenKey: tmp4.screenKey,
  };
  let icon;
  if (android != null) {
    icon = android.icon;
  }
  let selectedIcon;
  if (android != null) {
    selectedIcon = android.selectedIcon;
  }
  let tmp5Result = _mod4973;
  const result = tmp5Result.parseAndroidIconToNativeProps(icon);
  tmp5Result = _mod4973;
  const result1 = tmp5Result.parseAndroidIconToNativeProps(selectedIcon);
  obj = {
    imageIconResource: result.imageIconResource,
    drawableIconResourceName: result.drawableIconResourceName,
    selectedImageIconResource: result1.imageIconResource,
    selectedDrawableIconResourceName: result1.drawableIconResourceName,
  };
  const obj1 = { collapsable: false, style: null, ref };
  const items = [style, fillParent.fillParent];
  obj1.style = items;
  const merged = Object.assign(obj.useTabsScreen(obj).lifecycleCallbacks);
  const merged1 = Object.assign(obj);
  const merged2 = Object.assign(tmp4);
  let standardAppearance;
  if (android != null) {
    standardAppearance = android.standardAppearance;
  }
  let tmp17;
  if (standardAppearance) {
    ({ normal, selected, focused, disabled, tabBarItemTitleFontWeight } = standardAppearance);
    const obj2 = {};
    ({
      tabBarBackgroundColor,
      tabBarItemRippleColor,
      tabBarItemActiveIndicatorColor,
      tabBarItemBadgeBackgroundColor,
      tabBarItemBadgeTextColor,
    } = standardAppearance);
    const merged3 = Object.assign(_objectWithoutProperties(standardAppearance, closure_5));
    obj2.tabBarBackgroundColor = React7(tabBarBackgroundColor);
    obj2.tabBarItemRippleColor = React7(tabBarItemRippleColor);
    let tmp22;
    if (normal) {
      const obj3 = {};
      ({ tabBarItemTitleFontColor, tabBarItemIconColor } = normal);
      const merged4 = Object.assign(_objectWithoutProperties(normal, closure_6));
      obj3.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor);
      obj3.tabBarItemIconColor = React7(tabBarItemIconColor);
      tmp22 = obj3;
    }
    obj2.normal = tmp22;
    let tmp26;
    if (selected) {
      const obj4 = {};
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor2, tabBarItemIconColor: tabBarItemIconColor2 } = selected);
      const merged5 = Object.assign(_objectWithoutProperties(selected, closure_6));
      obj4.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor2);
      obj4.tabBarItemIconColor = React7(tabBarItemIconColor2);
      tmp26 = obj4;
    }
    obj2.selected = tmp26;
    let tmp30;
    if (focused) {
      const obj5 = {};
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor3, tabBarItemIconColor: tabBarItemIconColor3 } = focused);
      const merged6 = Object.assign(_objectWithoutProperties(focused, closure_6));
      obj5.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor3);
      obj5.tabBarItemIconColor = React7(tabBarItemIconColor3);
      tmp30 = obj5;
    }
    obj2.focused = tmp30;
    let tmp34;
    if (disabled) {
      const obj6 = {};
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor4, tabBarItemIconColor: tabBarItemIconColor4 } = disabled);
      const merged7 = Object.assign(_objectWithoutProperties(disabled, closure_6));
      obj6.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor4);
      obj6.tabBarItemIconColor = React7(tabBarItemIconColor4);
      tmp34 = obj6;
    }
    obj2.disabled = tmp34;
    obj2.tabBarItemActiveIndicatorColor = React7(tabBarItemActiveIndicatorColor);
    let StringResult;
    if (undefined !== tabBarItemTitleFontWeight) {
      const _String = String;
      StringResult = String(tabBarItemTitleFontWeight);
    }
    obj2.tabBarItemTitleFontWeight = StringResult;
    obj2.tabBarItemBadgeBackgroundColor = React7(tabBarItemBadgeBackgroundColor);
    obj2.tabBarItemBadgeTextColor = React7(tabBarItemBadgeTextColor);
    tmp17 = obj2;
  }
  obj1.standardAppearance = tmp17;
  obj1.children = children;
  return jsx(_modDef4972, { collapsable: false, style: null, ref });
}

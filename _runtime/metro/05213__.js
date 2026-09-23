// _runtime/metro/05213__.js
import _mod5214 from "05214__.js";
import _modDef5215 from "05215__.js";
import _mod5216 from "05216__.js";
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
  let icon;
  if (android != null) {
    icon = android.icon;
  }
  let selectedIcon;
  if (android != null) {
    selectedIcon = android.selectedIcon;
  }
  const obj = _mod5214;
  const obj2 = {
    componentNodeRef: ref,
    onDidAppear,
    onDidDisappear,
    onWillAppear,
    onWillDisappear,
    screenKey: tmp4.screenKey,
  };
  const result = _mod5216.parseAndroidIconToNativeProps(icon);
  const tmp5Result = _mod5216;
  const result1 = _mod5216.parseAndroidIconToNativeProps(selectedIcon);
  const obj4 = { collapsable: false, style: null, ref };
  const items = [style, fillParent.fillParent];
  obj4.style = items;
  const obj3 = {
    imageIconResource: result.imageIconResource,
    drawableIconResourceName: result.drawableIconResourceName,
    selectedImageIconResource: result1.imageIconResource,
    selectedDrawableIconResourceName: result1.drawableIconResourceName,
  };
  const tmp5Result2 = _mod5216;
  const merged = Object.assign(obj.useTabsScreen(obj2).lifecycleCallbacks);
  const merged1 = Object.assign(obj3);
  const merged2 = Object.assign(tmp4);
  let standardAppearance;
  if (android != null) {
    standardAppearance = android.standardAppearance;
  }
  let tmp17;
  if (standardAppearance) {
    ({ normal, selected, focused, disabled, tabBarItemTitleFontWeight } = standardAppearance);
    const obj5 = {};
    ({
      tabBarBackgroundColor,
      tabBarItemRippleColor,
      tabBarItemActiveIndicatorColor,
      tabBarItemBadgeBackgroundColor,
      tabBarItemBadgeTextColor,
    } = standardAppearance);
    const merged3 = Object.assign(_objectWithoutProperties(standardAppearance, closure_5));
    obj5.tabBarBackgroundColor = React7(tabBarBackgroundColor);
    obj5.tabBarItemRippleColor = React7(tabBarItemRippleColor);
    let tmp22;
    if (normal) {
      const obj6 = {};
      ({ tabBarItemTitleFontColor, tabBarItemIconColor } = normal);
      const merged4 = Object.assign(_objectWithoutProperties(normal, closure_6));
      obj6.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor);
      obj6.tabBarItemIconColor = React7(tabBarItemIconColor);
      tmp22 = obj6;
    }
    obj5.normal = tmp22;
    let tmp26;
    if (selected) {
      const obj7 = {};
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor2, tabBarItemIconColor: tabBarItemIconColor2 } = selected);
      const merged5 = Object.assign(_objectWithoutProperties(selected, closure_6));
      obj7.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor2);
      obj7.tabBarItemIconColor = React7(tabBarItemIconColor2);
      tmp26 = obj7;
    }
    obj5.selected = tmp26;
    let tmp30;
    if (focused) {
      const obj8 = {};
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor3, tabBarItemIconColor: tabBarItemIconColor3 } = focused);
      const merged6 = Object.assign(_objectWithoutProperties(focused, closure_6));
      obj8.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor3);
      obj8.tabBarItemIconColor = React7(tabBarItemIconColor3);
      tmp30 = obj8;
    }
    obj5.focused = tmp30;
    let tmp34;
    if (disabled) {
      const obj9 = {};
      ({ tabBarItemTitleFontColor: tabBarItemTitleFontColor4, tabBarItemIconColor: tabBarItemIconColor4 } = disabled);
      const merged7 = Object.assign(_objectWithoutProperties(disabled, closure_6));
      obj9.tabBarItemTitleFontColor = React7(tabBarItemTitleFontColor4);
      obj9.tabBarItemIconColor = React7(tabBarItemIconColor4);
      tmp34 = obj9;
    }
    obj5.disabled = tmp34;
    obj5.tabBarItemActiveIndicatorColor = React7(tabBarItemActiveIndicatorColor);
    let StringResult;
    if (undefined !== tabBarItemTitleFontWeight) {
      const _String = String;
      StringResult = String(tabBarItemTitleFontWeight);
    }
    obj5.tabBarItemTitleFontWeight = StringResult;
    obj5.tabBarItemBadgeBackgroundColor = React7(tabBarItemBadgeBackgroundColor);
    obj5.tabBarItemBadgeTextColor = React7(tabBarItemBadgeTextColor);
    tmp17 = obj5;
  }
  obj4.standardAppearance = tmp17;
  obj4.children = children;
  return jsx(_modDef5215, { collapsable: false, style: null, ref });
}

// === Module 15802: AppIconRows ===

// Module 15802 (AppIconRows)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1969 */;
import AppIconTypes from "AppIconTypes" /* 9438 */;
import AppIconUtils from "AppIconUtils" /* 13720 */;
import AppIconRowDefault from "AppIconRow" /* 15803 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function BackwardsCompatibleAppIconRows(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let merged = Object.assign(arg0, undefined);
    c1 = undefined;
    dependencyMap = undefined;
    function onLongPress(noop) {
      let tmp = null;
      if (noop === AppIconTypes.FreemiumAppIconIds.DEFAULT) {
        tmp = _undefined(true);
      }
      return tmp;
    }
    const tmp4 = closure_11();
    [c1, c2] = onLongPress(noop.useState(false), 2);
    const icons = merged.icons;
    let obj = { style: tmp4.container, children: null };
    const obj2 = { title: merged.title, accessibilityRole: "radiogroup", accessibilityLabel: null, hasIcons: true, children: null };
    const intl = merged(1115).intl;
    obj2.accessibilityLabel = intl.string(merged(1115).t.N4YDao);
    obj2.children = icons.map((id) => {
      const obj = {};
      merged = Object.assign(merged);
      obj.key = id.id;
      obj.icon = id;
      obj.showEasterEgg = showEasterEgg;
      obj.onLongPress = onLongPress;
      return createElement(AppIconRowDefault, {});
    });
    obj.children = closure_8(merged(5904).TableRowGroup, obj2);
    return closure_8(View, obj);
  }
}
const View = fn(17).View;
const createElement = fn(19).createElement;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let closure_11 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  onSelect = onSelect.onSelect;
  const tmp = closure_11();
  const appIcons = AppIconUtils.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isPremiumResult = PremiumTypeUtils.isPremium(stateFromStores);
  const tmp7 = limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
  let tmp10 = null;
  if (tmp7) {
    const obj4 = { hasNitro: isPremiumResult, icons: limitedTimeAppIcons, currentAppIcon, title: null, onSelect: null };
    const intl = util.intl;
    obj4.title = intl.string(util.t.anqaFd);
    obj4.onSelect = onSelect;
    tmp10 = React6(BackwardsCompatibleAppIconRows, obj4);
  }
  const items1 = [tmp10, ];
  let bottomUpsellPadding = !isPremiumResult;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  const obj5 = { style: bottomUpsellPadding, children: null };
  const obj6 = { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: null, onSelect: null };
  let stringResult;
  if (tmp7) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.Ipxkog);
  }
  const obj7 = { children: null };
  obj6.title = stringResult;
  obj6.onSelect = onSelect;
  obj5.children = React6(BackwardsCompatibleAppIconRows, obj6);
  items1[1] = React6(View, obj5);
  obj7.children = items1;
  return closure_1_10(React7, obj7);
};
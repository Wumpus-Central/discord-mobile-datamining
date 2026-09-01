// === Module 15124: BackwardsCompatibleAppIconRows ===

// Module 15124 (BackwardsCompatibleAppIconRows)
import initialize from "initialize" /* 589 */;
import isPremiumAtLeast from "isPremiumAtLeast" /* 1946 */;
import fetchCurrentAppIcon from "fetchCurrentAppIcon" /* 13024 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { createElement } from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function BackwardsCompatibleAppIconRows(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let merged = Object.assign(arg0, undefined);
    c1 = undefined;
    dependencyMap = undefined;
    function onLongPress(closure_4, arg1) {
      let tmp = null;
      if (closure_4 === merged(_undefined2[6]).FreemiumAppIconIds.DEFAULT) {
        tmp = _undefined2(true);
      }
      return tmp;
    }
    const tmp5 = callback2();
    [c1, c2] = onLongPress(React.useState(false), 2);
    const icons = merged.icons;
    let obj = { style: null, children: null };
    obj[0] = tmp5.container;
    obj = { title: null, accessibilityRole: "radiogroup", accessibilityLabel: null, hasIcons: true, children: null };
    obj[0] = merged.title;
    const intl = merged(1236).intl;
    obj[2] = intl.string(merged(1236).t.N4YDao);
    obj[4] = icons.map((id) => {
      const obj = {};
      merged = Object.assign(merged);
      obj.key = id.id;
      obj.icon = id;
      obj.showEasterEgg = _undefined;
      obj.onLongPress = onLongPress;
      return closure_1_7(_undefined(_undefined2[9]), obj);
    });
    obj[1] = callback(merged(5992).TableRowGroup, obj);
    return callback(View, obj);
  }
}
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
const result = require("set").fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  onSelect = onSelect.onSelect;
  let obj = fetchCurrentAppIcon;
  const appIcons = obj.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  obj1 = initialize;
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = isPremiumAtLeast;
  const isPremiumResult = obj2.isPremium(stateFromStores);
  const tmp7 = limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
  let tmp10 = null;
  if (tmp7) {
    obj = { hasNitro: null, icons: null, currentAppIcon: null, title: null, onSelect: null };
    obj[0] = isPremiumResult;
    obj[1] = limitedTimeAppIcons;
    obj[2] = currentAppIcon;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t.anqaFd);
    obj[4] = onSelect;
    tmp10 = callback(BackwardsCompatibleAppIconRows, obj);
  }
  const items1 = [tmp10, ];
  let bottomUpsellPadding = !isPremiumResult;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  obj = { style: bottomUpsellPadding, children: null };
  obj1 = { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: null, onSelect: null };
  let stringResult;
  if (tmp7) {
    const intl2 = tmp2(1236).intl;
    stringResult = intl2.string(tmp2(1236).t.Ipxkog);
  }
  obj2 = { children: null };
  obj1[3] = stringResult;
  obj1[4] = onSelect;
  obj[1] = callback(BackwardsCompatibleAppIconRows, obj1);
  items1[1] = callback(View, obj);
  obj2[0] = items1;
  return closure_10(closure_9, obj2);
};
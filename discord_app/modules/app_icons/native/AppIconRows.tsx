// === Module 18158: AppIconRows ===

// Module 18158 (AppIconRows)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2110 */;
import AppIconTypes from "AppIconTypes" /* 5332 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5334 */;
import AppIconUtils from "AppIconUtils" /* 15314 */;
import AppIconRowDefault from "AppIconRow" /* 18159 */;
import HexagonCampaignAppIconSectionDefault from "HexagonCampaignAppIconSection" /* 18160 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1388 */;

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
    const intl = merged(1113).intl;
    obj2.accessibilityLabel = intl.string(merged(1113).t.N4YDao);
    obj2.children = icons.map((id) => {
      const obj = {};
      merged = Object.assign(merged);
      obj.key = id.id;
      obj.icon = id;
      obj.showEasterEgg = showEasterEgg;
      obj.onLongPress = onLongPress;
      return createElement(AppIconRowDefault, {});
    });
    obj.children = closure_8(merged(7746).TableRowGroup, obj2);
    return closure_8(View, obj);
  }
}
const View = fn(17).View;
const createElement = fn(19).createElement;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5306);
let closure_11 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  onSelect = onSelect.onSelect;
  const tmp = closure_11();
  const appIcons = AppIconUtils.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isPremiumResult = PremiumTypeUtils.isPremium(stateFromStores);
  const someResult = limitedTimeAppIcons.some((id) => HexagonCampaignUtils.isHexagonCampaignAppIcon(id.id));
  const found = limitedTimeAppIcons.filter((id) => {
    const result = HexagonCampaignUtils.isHexagonCampaignAppIcon(id.id);
    let tmp2 = !result;
    if (!result) {
      tmp2 = !id.isHidden;
    }
    return tmp2;
  });
  if (someResult) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.w9v0yp);
  } else if (tmp8) {
    const intl = util.intl;
    stringResult = intl.string(util.t.Ipxkog);
  }
  let tmp12 = null;
  if (someResult) {
    const obj4 = { currentAppIcon, isPending: onSelect.pendingAppIconId === AppIconTypes.LimitedTimeAppIconIds.HEXAGON, onSelect };
    tmp12 = React5(HexagonCampaignAppIconSectionDefault, obj4);
  }
  const items1 = [tmp12, , ];
  let tmp16 = null;
  if (found.length > 0) {
    const obj5 = { hasNitro: isPremiumResult, icons: found, currentAppIcon, title: null, onSelect: null };
    const intl3 = util.intl;
    obj5.title = intl3.string(util.t.anqaFd);
    obj5.onSelect = onSelect;
    tmp16 = React5(BackwardsCompatibleAppIconRows, obj5);
  }
  items1[1] = tmp16;
  let bottomUpsellPadding = !isPremiumResult;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  const obj6 = { children: null };
  items1[2] = React5(View, { style: bottomUpsellPadding, children: React5(BackwardsCompatibleAppIconRows, { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: stringResult, onSelect }) });
  obj6.children = items1;
  return refs(React6, obj6);
};
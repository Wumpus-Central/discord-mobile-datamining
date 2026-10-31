// discord_app/modules/app_icons/native/AppIconRows.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import AppIconTypes from "../AppIconTypes.tsx";
import AppIconUtils from "AppIconUtils.tsx";
import AppIconRowDefault from "AppIconRow/AppIconRow.tsx";
import HexagonCampaignAppIconSectionDefault from "HexagonCampaignAppIconSection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

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
    const tmp4 = closure_12();
    [c1, c2] = onLongPress(noop.useState(false), 2);
    const icons = merged.icons;
    let obj = { style: tmp4.container, children: null };
    const obj2 = {
      title: merged.title,
      accessibilityRole: "radiogroup",
      accessibilityLabel: null,
      hasIcons: true,
      children: null,
    };
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
    obj.children = closure_9(merged(7060).TableRowGroup, obj2);
    return closure_9(View, obj);
  }
}
const View = fn(17).View;
const isHexagonCampaignAppIcon = fn(9979).isHexagonCampaignAppIcon;
const createElement = fn(19).createElement;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5014);
let closure_12 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  onSelect = onSelect.onSelect;
  let tmp = closure_12();
  const appIcons = AppIconUtils.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isPremiumResult = PremiumTypeUtils.isPremium(stateFromStores);
  const someResult = limitedTimeAppIcons.some((id) => isHexagonCampaignAppIcon(id.id));
  const found = limitedTimeAppIcons.filter((id) => {
    const tmp = isHexagonCampaignAppIcon(id.id);
    let tmp2 = !tmp;
    if (!tmp) {
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
    const obj4 = {
      currentAppIcon,
      isPending: onSelect.pendingAppIconId === AppIconTypes.LimitedTimeAppIconIds.HEXAGON,
      onSelect,
    };
    tmp12 = React7(HexagonCampaignAppIconSectionDefault, obj4);
  }
  const items1 = [tmp12, ,];
  let tmp16 = null;
  if (found.length > 0) {
    const obj5 = { hasNitro: isPremiumResult, icons: found, currentAppIcon, title: null, onSelect: null };
    const intl3 = util.intl;
    obj5.title = intl3.string(util.t.anqaFd);
    obj5.onSelect = onSelect;
    tmp16 = React7(BackwardsCompatibleAppIconRows, obj5);
  }
  items1[1] = tmp16;
  let bottomUpsellPadding = !isPremiumResult;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  const obj6 = { children: null };
  items1[2] = React7(View, {
    style: bottomUpsellPadding,
    children: React7(BackwardsCompatibleAppIconRows, {
      hasNitro: isPremiumResult,
      icons: officialAppIcons,
      currentAppIcon,
      title: stringResult,
      onSelect,
    }),
  });
  obj6.children = items1;
  return closure_1_11(closure_1_10, obj6);
}

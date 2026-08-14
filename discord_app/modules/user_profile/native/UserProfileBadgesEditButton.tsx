// discord_app/modules/user_profile/native/UserProfileBadgesEditButton.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { getBadgeAssetFromCDN } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { apexExperiment } from "../../badges/BadgeManagementExperiment.tsx";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { content: null, badge: null, hideBadgesLink: null, overflowCount: null };
createCacheKey = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 32, height: 32 };
createCacheKey[2] = { marginLeft: "auto" };
createCacheKey[3] = { marginLeft: 2 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("USER_PROFILE_TOOLTIP_DELAY").fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  let badges;
  let catalogBadges;
  ({ badges, catalogBadges } = arg0);
  let _require;
  let analyticsLocations;
  const tmp = createCacheKey();
  _require = tmp;
  let obj = _apexExperiment;
  const isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  analyticsLocations = analyticsLocations(5789)().analyticsLocations;
  [][0] = analyticsLocations;
  const callback = React.useCallback(() => {
    analyticsLocations(paths[8]).openLazy(_undefined(paths[10])(paths[9], paths.paths), "Hide Badges", {});
  }, []);
  if (isBadgeManagementEnabled) {
    let length;
    if (catalogBadges != null) {
      length = catalogBadges.length;
    }
    if (length == null) {
      length = badges.length;
    }
    const substr = badges.slice(0, 6);
    let substr1;
    if (catalogBadges != null) {
      substr1 = catalogBadges.slice(0, 6);
    }
    if (substr1 == null) {
      substr1 = null;
    }
    const _Math = Math;
    const diff = length - Math.min(length, 6);
    let mapped;
    if (substr1 != null) {
      mapped = substr1.map((name) => name.name);
    }
    if (mapped == null) {
      mapped = substr.map((description) => description.description);
    }
    const intl = tmp2(1236).intl;
    obj = { badge_names: null, overflow_count: null };
    obj[0] = mapped.join(", ");
    obj[1] = diff;
    obj = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
    const intl2 = tmp2(1236).intl;
    obj[0] = intl2.string(tmp2(1236).t.l6w3Vj);
    const obj1 = { role: "button", variant: "text-sm/semibold", color: "text-link", style: null, onPress: null, children: null };
    obj1[3] = tmp.hideBadgesLink;
    obj1[4] = callback;
    const intl3 = tmp2(1236).intl;
    obj1[5] = intl3.string(tmp2(1236).t.XMDvpN);
    obj[1] = callback(tmp2(4338).Text, obj1);
    const obj2 = { style: null, "aria-hidden": true, children: null };
    obj2[0] = tmp.content;
    if (null != substr1) {
      let mapped1 = substr1.map((badge) => outer1_7(analyticsLocations(outer1_2[15]), { badge, size: 32, style: _undefined.badge }, badge.badge_id));
    } else {
      mapped1 = substr.map((iconSrc) => {
        const obj = { style: _undefined.badge, source: null };
        iconSrc = iconSrc.iconSrc;
        if (iconSrc == null) {
          iconSrc = outer1_6(iconSrc.icon);
        }
        obj[1] = { uri: iconSrc };
        return outer1_7(outer1_4, obj, iconSrc.id);
      });
    }
    const items = [mapped1, ];
    let tmp13Result = diff > 0;
    if (tmp13Result) {
      const obj3 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: null, children: null };
      obj3[2] = tmp.overflowCount;
      const _HermesInternal = HermesInternal;
      obj3[3] = "+" + diff;
      tmp13Result = tmp13(tmp2(4338).Text, obj3);
    }
    items[1] = tmp13Result;
    obj2[2] = items;
    obj[2] = closure_8(closure_5, obj2);
    let tmp18;
    if (mapped.length > 0) {
      const obj4 = { text: null };
      obj4[0] = formatToPlainStringResult;
      tmp18 = obj4;
    }
    obj[3] = tmp18;
    obj[4] = tmp6;
    return callback(tmp2(14004).UserProfileEditFormButton, obj);
  } else {
    return null;
  }
};
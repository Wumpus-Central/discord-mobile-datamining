// === Module 14039: UserProfileBadgesEditButton ===

// Module 14039 (UserProfileBadgesEditButton)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { getBadgeAssetFromCDN } from "USER_PROFILE_TOOLTIP_DELAY" /* 8931 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 32, height: 32 };
createCacheKey[2] = { marginLeft: "auto" };
createCacheKey[3] = { marginLeft: 2 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  ({ badges, catalogBadges } = arg0);
  let analyticsLocations;
  const tmp = callback2();
  const _require = tmp;
  let obj = _require(14024);
  const isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  analyticsLocations = analyticsLocations(7139)().analyticsLocations;
  [][0] = analyticsLocations;
  const callback = React.useCallback(() => {
    analyticsLocations(paths[8]).openLazy(lib(paths[10])(paths[9], paths.paths), "Hide Badges", {});
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
      mapped = substr1.map((item, index) => item.name);
    }
    if (mapped == null) {
      mapped = substr.map((item, index) => item.description);
    }
    const intl = tmp2(1236).intl;
    obj = { badge_names: null, overflow_count: null };
    obj[0] = mapped.join(", ");
    obj[1] = diff;
    obj = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
    const intl2 = tmp2(1236).intl;
    obj[0] = intl2.string(tmp2(1236).t.l6w3Vj);
    obj1 = { role: "button", variant: "text-sm/semibold", color: "text-link", style: null, onPress: null, children: null };
    obj1[3] = tmp.hideBadgesLink;
    obj1[4] = callback;
    const intl3 = tmp2(1236).intl;
    obj1[5] = intl3.string(tmp2(1236).t.XMDvpN);
    obj[1] = callback(tmp2(4734).Text, obj1);
    const obj2 = { style: null, "aria-hidden": true, children: null };
    obj2[0] = tmp.content;
    if (null != substr1) {
      let mapped1 = substr1.map((item, index) => closure_1_7(analyticsLocations(dependencyMap[15]), { badge: item, size: 32, style: lib.badge }, item.badge_id));
    } else {
      mapped1 = substr.map((item, index) => {
        const obj = { style: lib.badge, source: null };
        let iconSrc = item.iconSrc;
        if (iconSrc == null) {
          iconSrc = getBadgeAssetFromCDN(item.icon);
        }
        obj[1] = { uri: iconSrc };
        return closure_1_7(closure_1_4, obj, item.id);
      });
    }
    const items = [mapped1, ];
    let tmp13Result = diff > 0;
    if (tmp13Result) {
      const obj3 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: null, children: null };
      obj3[2] = tmp.overflowCount;
      const _HermesInternal = HermesInternal;
      obj3[3] = "+" + diff;
      tmp13Result = tmp13(tmp2(4734).Text, obj3);
    }
    items[1] = tmp13Result;
    obj2[2] = items;
    obj[2] = callback(closure_5, obj2);
    let tmp18;
    if (mapped.length > 0) {
      const obj4 = { text: null };
      obj4[0] = formatToPlainStringResult;
      tmp18 = obj4;
    }
    obj[3] = tmp18;
    obj[4] = tmp6;
    return callback(tmp2(14036).UserProfileEditFormButton, obj);
  } else {
    return null;
  }
};
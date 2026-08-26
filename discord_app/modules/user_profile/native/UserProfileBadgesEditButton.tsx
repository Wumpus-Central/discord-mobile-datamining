// === Module 14210: UserProfileBadgesEditButton ===

// Module 14210 (UserProfileBadgesEditButton)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { content: null, badge: null, overflowCount: null };
createCacheKey = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 32, height: 32 };
createCacheKey[2] = { marginLeft: 2 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  ({ badges, catalogBadges } = arg0);
  let _require;
  let analyticsLocations;
  dependencyMap = undefined;
  const tmp = callback();
  _require = tmp;
  let obj = _require(9738);
  const isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  analyticsLocations = analyticsLocations(5900)().analyticsLocations;
  [][0] = analyticsLocations;
  if (isBadgeManagementEnabled) {
    dependencyMap = tmp2(9739).getLegacyIconUrlByBadgeId(badges);
    let length;
    if (catalogBadges != null) {
      length = catalogBadges.length;
    }
    if (length == null) {
      length = badges.length;
    }
    const substr = badges.slice(0, tmp2(9739).MAX_DISPLAYED_PROFILE_BADGES);
    let substr1;
    if (catalogBadges != null) {
      substr1 = catalogBadges.slice(0, tmp2(9739).MAX_DISPLAYED_PROFILE_BADGES);
    }
    if (substr1 == null) {
      substr1 = null;
    }
    const _Math = Math;
    const diff = length - Math.min(length, tmp2(9739).MAX_DISPLAYED_PROFILE_BADGES);
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
    const tmp2Result = tmp2(9739);
    obj = { label: null, content: null, accessibilityValue: null, onPress: null };
    const intl2 = tmp2(1236).intl;
    obj[0] = intl2.string(tmp2(1236).t.l6w3Vj);
    obj1 = { style: null, "aria-hidden": true, children: null };
    obj1[0] = tmp.content;
    if (null != substr1) {
      let mapped1 = substr1.map((badge_id) => {
        const value = closure_2.get(badge_id.badge_id);
        if (null != value) {
          let obj = { style: null, source: null };
          obj[0] = lib.badge;
          obj = { uri: null };
          obj[0] = value;
          obj[1] = obj;
          let tmp6 = closure_1_6(closure_1_4, obj, badge_id.badge_id);
        } else {
          obj = { badge: null, size: 32, style: null };
          obj[0] = badge_id;
          obj[2] = lib.badge;
          tmp6 = closure_1_6(analyticsLocations(closure_2[13]), obj, badge_id.badge_id);
        }
        return tmp6;
      });
    } else {
      mapped1 = substr.map((id) => {
        let obj = { style: lib.badge, source: null };
        obj = { uri: lib(closure_2[10]).getProfileBadgeIconUrl(id) };
        obj[1] = obj;
        return closure_1_6(closure_1_4, obj, id.id);
      });
    }
    const items = [mapped1, ];
    let tmp14Result = diff > 0;
    if (tmp14Result) {
      const obj2 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: null, children: null };
      obj2[2] = tmp.overflowCount;
      const _HermesInternal = HermesInternal;
      obj2[3] = "+" + diff;
      tmp14Result = tmp14(tmp2(4440).Text, obj2);
    }
    items[1] = tmp14Result;
    obj1[2] = items;
    obj[1] = closure_7(closure_5, obj1);
    let tmp19;
    if (mapped.length > 0) {
      const obj3 = { text: null };
      obj3[0] = formatToPlainStringResult;
      tmp19 = obj3;
    }
    obj[2] = tmp19;
    obj[3] = tmp5;
    return closure_6(tmp2(14209).UserProfileEditFormButton, obj);
  } else {
    return null;
  }
};
// discord_app/modules/user_profile/native/UserProfileBadgesEditButton.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { apexExperiment } from "../../badges/BadgeManagementExperiment.tsx";

const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { content: null, badge: null, hideBadgesLink: null, overflowCount: null };
createCacheKey = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 32, height: 32 };
createCacheKey[2] = { marginLeft: "auto" };
createCacheKey[3] = { marginLeft: 2 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  ({ badges, catalogBadges } = arg0);
  let _require;
  let analyticsLocations;
  dependencyMap = undefined;
  const tmp = callback2();
  _require = tmp;
  let obj = apexExperiment;
  const isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  analyticsLocations = analyticsLocations(5834)().analyticsLocations;
  [][0] = analyticsLocations;
  const callback = React.useCallback(() => {
    analyticsLocations(closure_2[7]).openLazy(lib(closure_2[9])(closure_2[8], closure_2.paths), "Hide Badges", {});
  }, []);
  if (isBadgeManagementEnabled) {
    dependencyMap = tmp2(9671).getLegacyIconUrlByBadgeId(badges);
    let length;
    if (catalogBadges != null) {
      length = catalogBadges.length;
    }
    if (length == null) {
      length = badges.length;
    }
    const substr = badges.slice(0, tmp2(9671).MAX_DISPLAYED_PROFILE_BADGES);
    let substr1;
    if (catalogBadges != null) {
      substr1 = catalogBadges.slice(0, tmp2(9671).MAX_DISPLAYED_PROFILE_BADGES);
    }
    if (substr1 == null) {
      substr1 = null;
    }
    const _Math = Math;
    const diff = length - Math.min(length, tmp2(9671).MAX_DISPLAYED_PROFILE_BADGES);
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
    const tmp2Result = tmp2(9671);
    obj = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
    const intl2 = tmp2(1236).intl;
    obj[0] = intl2.string(tmp2(1236).t.l6w3Vj);
    obj1 = { role: "button", variant: "text-sm/semibold", color: "text-link", style: null, onPress: null, children: null };
    obj1[3] = tmp.hideBadgesLink;
    obj1[4] = callback;
    const intl3 = tmp2(1236).intl;
    obj1[5] = intl3.string(tmp2(1236).t.XMDvpN);
    obj[1] = callback(tmp2(4376).Text, obj1);
    const obj2 = { style: null, "aria-hidden": true, children: null };
    obj2[0] = tmp.content;
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
          tmp6 = closure_1_6(analyticsLocations(closure_2[15]), obj, badge_id.badge_id);
        }
        return tmp6;
      });
    } else {
      mapped1 = substr.map((id) => {
        let obj = { style: lib.badge, source: null };
        obj = { uri: lib(closure_2[11]).getProfileBadgeIconUrl(id) };
        obj[1] = obj;
        return closure_1_6(closure_1_4, obj, id.id);
      });
    }
    const items = [mapped1, ];
    let tmp15Result = diff > 0;
    if (tmp15Result) {
      const obj3 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: null, children: null };
      obj3[2] = tmp.overflowCount;
      const _HermesInternal = HermesInternal;
      obj3[3] = "+" + diff;
      tmp15Result = tmp15(tmp2(4376).Text, obj3);
    }
    items[1] = tmp15Result;
    obj2[2] = items;
    obj[2] = closure_7(closure_5, obj2);
    let tmp20;
    if (mapped.length > 0) {
      const obj4 = { text: null };
      obj4[0] = formatToPlainStringResult;
      tmp20 = obj4;
    }
    obj[3] = tmp20;
    obj[4] = tmp6;
    return callback(tmp2(14136).UserProfileEditFormButton, obj);
  } else {
    return null;
  }
};
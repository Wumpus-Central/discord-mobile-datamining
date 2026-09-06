// === Module 14619: UserProfileBadgesEditButton ===

// Module 14619 (UserProfileBadgesEditButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 11190 */;
import BadgeUtils from "BadgeUtils" /* 11199 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { content: null, badge: null, overflowCount: null };
createStyles = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.content = createStyles;
createStyles.badge = { width: 32, height: 32 };
createStyles.overflowCount = { marginLeft: 2 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  ({ badges, catalogBadges, ownsAnyBadge } = arg0);
  let analyticsLocations;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  _require = tmp;
  let obj = require("BadgeManagementExperiment");
  const isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  let length;
  if (catalogBadges != null) {
    length = catalogBadges.length;
  }
  if (length == null) {
    length = badges.length;
  }
  let tmp2Result = tmp2(7388);
  if (!isBadgeManagementEnabled) {
    let items = [];
  } else {
    const items1 = [tmp2(1943).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
    items = items1;
  }
  let tmp6 = _slicedToArray(tmp2Result.useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp7;
  const tmp8 = tmp6[0] === require("dismissible_content").DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  _slicedToArray = tmp8;
  const items2 = [analyticsLocations, tmp8, tmp6[1]];
  const callback = noop.useCallback(() => {
    const obj = { analyticsLocations };
    obj.openLazy(asyncRequireImpl(14620, dependencyMap.paths), "Customize Badges", obj);
    if (closure_3) {
      closure_2(ContentDismissActionType.TAKE_ACTION);
    }
  }, items2);
  if (isBadgeManagementEnabled) {
    if (0 === length) {
      obj = { label: null, labelTrailing: null, content: null, accessibilityValue: null, disabled: null, onPress: null };
      const intl3 = tmp2(1114).intl;
      obj.label = intl3.string(tmp2(1114).t.l6w3Vj);
      obj = { showNewBadge: tmp8 };
      obj.labelTrailing = closure_8(tmp2(14618).UserProfileEditFormLabelBadges, obj);
      const obj1 = { style: tmp.content, "aria-hidden": true, children: null };
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl4 = tmp2(1114).intl;
      obj2.children = intl4.string(tmp2(1114).t.xfuQvv);
      obj1.children = closure_8(tmp2(4556).Text, obj2);
      obj.content = closure_8(closure_6, obj1);
      const obj3 = { text: null };
      const intl5 = tmp2(1114).intl;
      obj3.text = intl5.string(tmp2(1114).t.xfuQvv);
      obj.accessibilityValue = obj3;
      obj.disabled = !ownsAnyBadge;
      obj.onPress = callback;
      return closure_8(tmp2(14618).UserProfileEditFormButton, obj);
    } else {
      tmp2Result = tmp2(11199);
      noop = tmp2Result.getLegacyIconUrlByBadgeId(badges);
      const substr = badges.slice(0, tmp2(11199).MAX_DISPLAYED_PROFILE_BADGES);
      let substr1;
      if (catalogBadges != null) {
        substr1 = catalogBadges.slice(0, tmp2(11199).MAX_DISPLAYED_PROFILE_BADGES);
      }
      if (substr1 == null) {
        substr1 = null;
      }
      const _Math = Math;
      const diff = length - Math.min(length, tmp2(11199).MAX_DISPLAYED_PROFILE_BADGES);
      let mapped;
      if (substr1 != null) {
        mapped = substr1.map((name) => name.name);
      }
      if (mapped == null) {
        mapped = substr.map((description) => description.description);
      }
      const intl = tmp2(1114).intl;
      const obj4 = { badge_names: mapped.join(", "), overflow_count: diff };
      const obj5 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
      const intl2 = tmp2(1114).intl;
      obj5.label = intl2.string(tmp2(1114).t.l6w3Vj);
      const obj6 = { showNewBadge: tmp8 };
      obj5.labelTrailing = closure_8(tmp2(14618).UserProfileEditFormLabelBadges, obj6);
      const obj7 = { style: tmp.content, "aria-hidden": true, children: null };
      if (null != substr1) {
        let mapped1 = substr1.map((badge_id) => {
          value = closure_4.get(badge_id.badge_id);
          if (null != value) {
            let obj = { style: closure_0.badge, source: null };
            obj = { uri: value };
            obj.source = obj;
            let tmp6 = React6(hasOwnProperty, obj, badge_id.badge_id);
          } else {
            obj = { badge: badge_id, size: 32, style: closure_0.badge };
            tmp6 = React6(BadgeCatalogIconDefault, obj, badge_id.badge_id);
          }
          return tmp6;
        });
      } else {
        mapped1 = substr.map((id) => {
          let obj = { style: closure_0.badge, source: null };
          obj = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
          obj.source = obj;
          return React6(hasOwnProperty, obj, id.id);
        });
      }
      const items3 = [mapped1, ];
      let tmp15Result = diff > 0;
      if (tmp15Result) {
        const obj8 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.overflowCount, children: null };
        const _HermesInternal = HermesInternal;
        obj8.children = "+" + diff;
        tmp15Result = tmp15(tmp2(4556).Text, obj8);
      }
      items3[1] = tmp15Result;
      obj7.children = items3;
      obj5.content = closure_9(closure_6, obj7);
      let tmp20;
      if (mapped.length > 0) {
        const obj9 = { text: formatToPlainStringResult };
        tmp20 = obj9;
      }
      obj5.accessibilityValue = tmp20;
      obj5.onPress = callback;
      return closure_8(tmp2(14618).UserProfileEditFormButton, obj5);
    }
  } else {
    return null;
  }
};
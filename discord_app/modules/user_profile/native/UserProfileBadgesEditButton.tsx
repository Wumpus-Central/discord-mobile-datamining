// === Module 14672: UserProfileBadgesEditButton ===

// Module 14672 (UserProfileBadgesEditButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 11285 */;
import BadgeUtils from "BadgeUtils" /* 11293 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4606);
let createStyles = { content: null, badge: null, overflowCount: null };
createStyles = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.content = createStyles;
createStyles.badge = { width: 32, height: 32 };
createStyles.overflowCount = { marginLeft: 2 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  ({ badges, catalogBadges, ownsAnyBadge, autoOpen } = arg0);
  if (autoOpen === undefined) {
    autoOpen = false;
  }
  let isBadgeManagementEnabled;
  noop = undefined;
  closure_5 = undefined;
  let onPress;
  let legacyIconUrlByBadgeId;
  let tmp = closure_10();
  importDefault = tmp;
  let obj = autoOpen(isBadgeManagementEnabled[7]);
  isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let length;
  if (catalogBadges != null) {
    length = catalogBadges.length;
  }
  if (length == null) {
    length = badges.length;
  }
  let tmp2Result = tmp2(tmp3[9]);
  if (!isBadgeManagementEnabled) {
    let items = [];
  } else {
    const items1 = [tmp2(tmp3[10]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
    items = items1;
  }
  let tmp6 = analyticsLocations(tmp2Result.useSelectedDismissibleContent(items, undefined, true), 2);
  noop = tmp7;
  const tmp8 = tmp6[0] === autoOpen(isBadgeManagementEnabled[10]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  closure_5 = tmp8;
  const items2 = [analyticsLocations, tmp8, tmp6[1]];
  onPress = noop.useCallback(() => {
    const obj = { analyticsLocations };
    obj.openLazy(asyncRequireImpl(14673, dependencyMap.paths), "Customize Badges", obj);
    if (closure_5) {
      closure_4(ContentDismissActionType.TAKE_ACTION);
    }
  }, items2);
  noop.useRef(false);
  const items3 = [autoOpen, isBadgeManagementEnabled, onPress];
  const effect = noop.useEffect(() => {
    let tmp = autoOpen;
    if (autoOpen) {
      tmp = isBadgeManagementEnabled;
    }
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items3);
  if (isBadgeManagementEnabled) {
    if (0 === length) {
      obj = { label: null, labelTrailing: null, content: null, accessibilityValue: null, disabled: null, onPress: null };
      const intl3 = tmp2(tmp3[15]).intl;
      obj.label = intl3.string(tmp2(tmp3[15]).t.l6w3Vj);
      obj = { showNewBadge: tmp8 };
      obj.labelTrailing = legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormLabelBadges, obj);
      const obj1 = { style: tmp.content, "aria-hidden": true, children: null };
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl4 = tmp2(tmp3[15]).intl;
      obj2.children = intl4.string(tmp2(tmp3[15]).t.xfuQvv);
      obj1.children = legacyIconUrlByBadgeId(tmp2(tmp3[16]).Text, obj2);
      obj.content = legacyIconUrlByBadgeId(onPress, obj1);
      const obj3 = { text: null };
      const intl5 = tmp2(tmp3[15]).intl;
      obj3.text = intl5.string(tmp2(tmp3[15]).t.xfuQvv);
      obj.accessibilityValue = obj3;
      obj.disabled = !ownsAnyBadge;
      obj.onPress = onPress;
      return legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormButton, obj);
    } else {
      tmp2Result = tmp2(tmp3[17]);
      legacyIconUrlByBadgeId = tmp2Result.getLegacyIconUrlByBadgeId(badges);
      const substr = badges.slice(0, tmp2(tmp3[17]).MAX_DISPLAYED_PROFILE_BADGES);
      let substr1;
      if (catalogBadges != null) {
        substr1 = catalogBadges.slice(0, tmp2(tmp3[17]).MAX_DISPLAYED_PROFILE_BADGES);
      }
      if (substr1 == null) {
        substr1 = null;
      }
      const _Math = Math;
      const diff = length - Math.min(length, tmp2(tmp3[17]).MAX_DISPLAYED_PROFILE_BADGES);
      let mapped;
      if (substr1 != null) {
        mapped = substr1.map((name) => name.name);
      }
      if (mapped == null) {
        mapped = substr.map((description) => description.description);
      }
      const intl = tmp2(tmp3[15]).intl;
      const obj4 = { badge_names: mapped.join(", "), overflow_count: diff };
      const obj5 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
      const intl2 = tmp2(tmp3[15]).intl;
      obj5.label = intl2.string(tmp2(tmp3[15]).t.l6w3Vj);
      const obj6 = { showNewBadge: tmp8 };
      obj5.labelTrailing = legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormLabelBadges, obj6);
      const obj7 = { style: tmp.content, "aria-hidden": true, children: null };
      if (null != substr1) {
        let mapped1 = substr1.map((badge_id) => {
          value = closure_8.get(badge_id.badge_id);
          if (null != value) {
            let obj = { style: closure_1.badge, source: null };
            obj = { uri: value };
            obj.source = obj;
            let tmp6 = React6(hasOwnProperty, obj, badge_id.badge_id);
          } else {
            obj = { badge: badge_id, size: 32, style: closure_1.badge };
            tmp6 = React6(BadgeCatalogIconDefault, obj, badge_id.badge_id);
          }
          return tmp6;
        });
      } else {
        mapped1 = substr.map((id) => {
          let obj = { style: closure_1.badge, source: null };
          obj = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
          obj.source = obj;
          return React6(hasOwnProperty, obj, id.id);
        });
      }
      const items4 = [mapped1, ];
      let tmp16Result = diff > 0;
      if (tmp16Result) {
        const obj8 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.overflowCount, children: null };
        const _HermesInternal = HermesInternal;
        obj8.children = "+" + diff;
        tmp16Result = tmp16(tmp2(tmp3[16]).Text, obj8);
      }
      items4[1] = tmp16Result;
      obj7.children = items4;
      obj5.content = closure_9(onPress, obj7);
      let tmp21;
      if (mapped.length > 0) {
        const obj9 = { text: formatToPlainStringResult };
        tmp21 = obj9;
      }
      obj5.accessibilityValue = tmp21;
      obj5.onPress = onPress;
      return legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormButton, obj5);
    }
  } else {
    return null;
  }
};
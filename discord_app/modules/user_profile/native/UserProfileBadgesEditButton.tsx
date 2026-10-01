// === Module 14388: UserProfileBadgesEditButton ===

// Module 14388 (UserProfileBadgesEditButton)
import nativeDefault from "native" /* 576 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10852 */;
import BadgeUtils from "BadgeUtils" /* 10859 */;
import openCustomizeBadgesSheet from "openCustomizeBadgesSheet" /* 10862 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4845);
let obj2 = { content: { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, badge: { width: 32, height: 32 }, overflowCount: { marginLeft: 2 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

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
  isBadgeManagementEnabled = autoOpen(isBadgeManagementEnabled[7]).useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  let obj = autoOpen(isBadgeManagementEnabled[7]);
  const isBadgeDirectoryUpdatesEnabled = autoOpen(isBadgeManagementEnabled[8]).useIsBadgeDirectoryUpdatesEnabled({ location: "UserProfileBadgesEditButton" });
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let length;
  if (catalogBadges != null) {
    length = catalogBadges.length;
  }
  if (length == null) {
    length = badges.length;
  }
  let obj2 = autoOpen(isBadgeManagementEnabled[8]);
  if (!isBadgeManagementEnabled) {
    let items = [];
  } else {
    const items1 = [tmp2(tmp3[11]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
    items = items1;
  }
  const tmp7 = analyticsLocations(autoOpen(isBadgeManagementEnabled[10]).useSelectedDismissibleContent(items, undefined, true), 2);
  noop = tmp8;
  const tmp9 = tmp7[0] === autoOpen(isBadgeManagementEnabled[11]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  closure_5 = tmp9;
  const items2 = [analyticsLocations, tmp9, tmp7[1]];
  onPress = noop.useCallback(() => {
    const result = openCustomizeBadgesSheet.openCustomizeBadgesSheet({ analyticsLocations });
    if (closure_5) {
      closure_4(ContentDismissActionType.TAKE_ACTION);
    }
    const obj2 = { analyticsLocations };
  }, items2);
  const callback1 = noop.useCallback(() => {
    const result = autoOpen(isBadgeManagementEnabled[13]).openBadgeDirectoryScreen();
  }, []);
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
      let tmp24 = !ownsAnyBadge;
      if (!ownsAnyBadge) {
        tmp24 = isBadgeDirectoryUpdatesEnabled;
      }
      let obj3 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, disabled: null, onPress: null };
      const intl3 = tmp2(tmp3[15]).intl;
      obj3.label = intl3.string(tmp2(tmp3[15]).t.l6w3Vj);
      const obj4 = { showNewBadge: tmp9 };
      obj3.labelTrailing = legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormLabelBadges, obj4);
      const obj5 = { style: tmp.content, "aria-hidden": true, children: null };
      const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl4 = tmp2(tmp3[15]).intl;
      obj6.children = intl4.string(tmp2(tmp3[15]).t.xfuQvv);
      obj5.children = legacyIconUrlByBadgeId(tmp2(tmp3[16]).Text, obj6);
      obj3.content = legacyIconUrlByBadgeId(onPress, obj5);
      const obj7 = { text: null };
      const intl5 = tmp2(tmp3[15]).intl;
      obj7.text = intl5.string(tmp2(tmp3[15]).t.xfuQvv);
      obj3.accessibilityValue = obj7;
      let tmp27 = !ownsAnyBadge;
      if (!ownsAnyBadge) {
        tmp27 = !tmp24;
      }
      obj3.disabled = tmp27;
      if (tmp24) {
        onPress = callback1;
      }
      obj3.onPress = onPress;
      return legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormButton, obj3);
    } else {
      legacyIconUrlByBadgeId = tmp2(tmp3[17]).getLegacyIconUrlByBadgeId(badges);
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
      const obj8 = { badge_names: mapped.join(", "), overflow_count: diff };
      const tmp2Result2 = tmp2(tmp3[17]);
      const obj9 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
      const intl2 = tmp2(tmp3[15]).intl;
      obj9.label = intl2.string(tmp2(tmp3[15]).t.l6w3Vj);
      const obj10 = { showNewBadge: tmp9 };
      obj9.labelTrailing = legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormLabelBadges, obj10);
      const obj11 = { style: tmp.content, "aria-hidden": true, children: null };
      if (null != substr1) {
        let mapped1 = substr1.map((badge_id) => {
          value = closure_8.get(badge_id.badge_id);
          if (null != value) {
            const obj2 = { style: closure_1.badge, source: null };
            const obj3 = { uri: value };
            obj2.source = obj3;
            let tmp6 = React6(hasOwnProperty, obj2, badge_id.badge_id);
          } else {
            const obj = { badge: badge_id, size: 32, style: closure_1.badge };
            tmp6 = React6(BadgeCatalogIconDefault, obj, badge_id.badge_id);
          }
          return tmp6;
        });
      } else {
        mapped1 = substr.map((id) => {
          const obj = { style: closure_1.badge, source: null };
          const obj2 = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
          obj.source = obj2;
          return React6(hasOwnProperty, obj, id.id);
        });
      }
      const items4 = [mapped1, ];
      let tmp18Result = diff > 0;
      if (tmp18Result) {
        const obj12 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.overflowCount, children: null };
        const _HermesInternal = HermesInternal;
        obj12.children = "+" + diff;
        tmp18Result = tmp18(tmp2(tmp3[16]).Text, obj12);
      }
      items4[1] = tmp18Result;
      obj11.children = items4;
      obj9.content = closure_9(onPress, obj11);
      let tmp23;
      if (mapped.length > 0) {
        const obj13 = { text: formatToPlainStringResult };
        tmp23 = obj13;
      }
      obj9.accessibilityValue = tmp23;
      obj9.onPress = onPress;
      return legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormButton, obj9);
    }
  } else {
    return null;
  }
  const tmp2Result = autoOpen(isBadgeManagementEnabled[10]);
};
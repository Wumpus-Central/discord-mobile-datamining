// discord_app/modules/user_profile/native/UserProfileBadgesEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import BadgeCatalogIconDefault from "../../badges/native/BadgeCatalogIcon.tsx";
import BadgeUtils from "../../badges/BadgeUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  content: { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 },
  badge: { width: 32, height: 32 },
  overflowCount: { marginLeft: 2 },
};
let closure_10 = createStyles.createStyles(obj2);
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
  isBadgeManagementEnabled = autoOpen(isBadgeManagementEnabled[7]).useIsBadgeManagementEnabled({
    location: "UserProfileBadgesEditButton",
  });
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let length;
  if (catalogBadges != null) {
    length = catalogBadges.length;
  }
  if (length == null) {
    length = badges.length;
  }
  let obj = autoOpen(isBadgeManagementEnabled[7]);
  if (!isBadgeManagementEnabled) {
    let items = [];
  } else {
    const items1 = [tmp2(tmp3[10]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
    items = items1;
  }
  let tmp6 = analyticsLocations(
    autoOpen(isBadgeManagementEnabled[9]).useSelectedDismissibleContent(items, undefined, true),
    2,
  );
  noop = tmp7;
  const tmp8 = tmp6[0] === autoOpen(isBadgeManagementEnabled[10]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  closure_5 = tmp8;
  const items2 = [analyticsLocations, tmp8, tmp6[1]];
  onPress = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14734, dependencyMap.paths), "Customize Badges", {
      analyticsLocations,
    });
    if (closure_5) {
      closure_4(ContentDismissActionType.TAKE_ACTION);
    }
    const obj2 = { analyticsLocations };
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
      let obj2 = {
        label: null,
        labelTrailing: null,
        content: null,
        accessibilityValue: null,
        disabled: null,
        onPress: null,
      };
      const intl3 = tmp2(tmp3[15]).intl;
      obj2.label = intl3.string(tmp2(tmp3[15]).t.l6w3Vj);
      let obj3 = { showNewBadge: tmp8 };
      obj2.labelTrailing = legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormLabelBadges, obj3);
      const obj4 = { style: tmp.content, "aria-hidden": true, children: null };
      const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl4 = tmp2(tmp3[15]).intl;
      obj5.children = intl4.string(tmp2(tmp3[15]).t.xfuQvv);
      obj4.children = legacyIconUrlByBadgeId(tmp2(tmp3[16]).Text, obj5);
      obj2.content = legacyIconUrlByBadgeId(onPress, obj4);
      const obj6 = { text: null };
      const intl5 = tmp2(tmp3[15]).intl;
      obj6.text = intl5.string(tmp2(tmp3[15]).t.xfuQvv);
      obj2.accessibilityValue = obj6;
      obj2.disabled = !ownsAnyBadge;
      obj2.onPress = onPress;
      return legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormButton, obj2);
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
      const obj7 = { badge_names: mapped.join(", "), overflow_count: diff };
      const tmp2Result2 = tmp2(tmp3[17]);
      const obj8 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
      const intl2 = tmp2(tmp3[15]).intl;
      obj8.label = intl2.string(tmp2(tmp3[15]).t.l6w3Vj);
      const obj9 = { showNewBadge: tmp8 };
      obj8.labelTrailing = legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormLabelBadges, obj9);
      const obj10 = { style: tmp.content, "aria-hidden": true, children: null };
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
      const items4 = [mapped1];
      let tmp16Result = diff > 0;
      if (tmp16Result) {
        const obj11 = {
          variant: "text-md/normal",
          color: "mobile-text-heading-primary",
          style: tmp.overflowCount,
          children: null,
        };
        const _HermesInternal = HermesInternal;
        obj11.children = "+" + diff;
        tmp16Result = tmp16(tmp2(tmp3[16]).Text, obj11);
      }
      items4[1] = tmp16Result;
      obj10.children = items4;
      obj8.content = closure_9(onPress, obj10);
      let tmp21;
      if (mapped.length > 0) {
        const obj12 = { text: formatToPlainStringResult };
        tmp21 = obj12;
      }
      obj8.accessibilityValue = tmp21;
      obj8.onPress = onPress;
      return legacyIconUrlByBadgeId(tmp2(tmp3[14]).UserProfileEditFormButton, obj8);
    }
  } else {
    return null;
  }
  const tmp2Result = autoOpen(isBadgeManagementEnabled[9]);
}

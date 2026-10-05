// === Module 14446: UserProfileBadgesEditButton ===

// Module 14446 (UserProfileBadgesEditButton)
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10881 */;
import BadgeUtils from "BadgeUtils" /* 10889 */;
import openCustomizeBadgesSheet from "openCustomizeBadgesSheet" /* 14447 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9417 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { content: obj2, badge: { width: 32, height: 32 }, overflowCount: { marginLeft: 2 } };
obj2 = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let autoOpen;
  let badges;
  let catalogBadges;
  let closure_0;
  let closure_1;
  let closure_4;
  let field;
  let first;
  let isBadgeManagementEnabled;
  let ownsAnyBadge;
  let ref;
  let tmp13;
  let tmp7;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(70);
  ({ badges, catalogBadges, ownsAnyBadge, autoOpen } = arg0);
  _require = undefined !== autoOpen && autoOpen;
  importDefault = closure_11();
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "UserProfileBadgesEditButton" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(isBadgeManagementEnabled[10]);
  isBadgeManagementEnabled = tmpResult.useIsBadgeManagementEnabled(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "UserProfileBadgesEditButton" };
    cResult[1] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  const tmpResult3 = tmp(isBadgeManagementEnabled[11]);
  const isBadgeDirectoryUpdatesEnabled = tmpResult3.useIsBadgeDirectoryUpdatesEnabled(tmp7);
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let length;
  const tmp9 = importDefault;
  if (catalogBadges != null) {
    length = catalogBadges.length;
  }
  if (length == null) {
    length = badges.length;
  }
  let tmp11 = isBadgeManagementEnabled;
  if (tmp11) {
    tmp11 = length > 0 || ownsAnyBadge;
  }
  if (cResult[2] !== tmp11) {
    let items1;
    if (tmp11) {
      const items = [tmp(isBadgeManagementEnabled[13]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[2] = tmp11;
    cResult[3] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[3];
  }
  const tmpResult4 = tmp(isBadgeManagementEnabled[14]);
  const tmp14 = analyticsLocations(tmpResult4.useSelectedDismissibleContent(tmp13, undefined, true), 2);
  react = tmp15;
  const tmp16 = tmp14[0] === tmp(isBadgeManagementEnabled[13]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  let closure_5 = tmp16;
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === tmp16) {
      let tmp17;
      if (cResult[6] === tmp14[1]) {
        tmp17 = cResult[7];
      }
      let closure_6 = tmp17;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            const obj = closure_0(isBadgeManagementEnabled[16]);
            const result = obj.openBadgeDirectoryScreen();
          }
        }
        cResult[8] = M;
      } else {
        class M {
          constructor() {
            const obj = closure_0(isBadgeManagementEnabled[16]);
            const result = obj.openBadgeDirectoryScreen();
          }
        }
      }
      field = field.useField("pendingCustomizeBadgesSheet");
      const tmp21 = tmp9(isBadgeManagementEnabled[17])();
      let closure_8 = tmp21;
      if (cResult[9] === tmp17) {
        class M {
          constructor() {
            const obj = closure_0(isBadgeManagementEnabled[16]);
            const result = obj.openBadgeDirectoryScreen();
          }
        }
      }
      const fn = function j() {
        if (field) {
          if (closure_8) {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(() => {
              field.setState({ pendingCustomizeBadgesSheet: false });
              if (isBadgeManagementEnabled) {
                closure_1_6();
              }
            }, 300);
            return () => clearTimeout(closure_0);
          }
        }
      };
      const items2 = [field, tmp21, isBadgeManagementEnabled, tmp17];
      cResult[9] = tmp17;
      cResult[10] = tmp21;
      cResult[11] = isBadgeManagementEnabled;
      cResult[12] = field;
      cResult[13] = fn;
      cResult[14] = items2;
    }
  }
  class U {
    constructor() {
      const obj = openCustomizeBadgesSheet;
      const obj2 = { analyticsLocations };
      const result = obj.openCustomizeBadgesSheet(obj2);
      if (closure_5) {
        closure_4(ContentDismissActionType.TAKE_ACTION);
      }
    }
  }
  cResult[4] = analyticsLocations;
  cResult[5] = tmp16;
  cResult[6] = tmp14[1];
  cResult[7] = U;
  tmp17 = U;
}) : ((arg0) => {
  let Text2;
  let autoOpen;
  let badges;
  let catalogBadges;
  let closure_1;
  let closure_10;
  let closure_4;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items5;
  let obj10;
  let obj11;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let ownsAnyBadge;
  let tmp24;
  let tmp25;
  let tmp28;
  ({ badges, catalogBadges, ownsAnyBadge, autoOpen } = arg0);
  if (autoOpen === undefined) {
    autoOpen = false;
  }
  let isBadgeManagementEnabled;
  react = undefined;
  let closure_5;
  let onPress;
  let field;
  let closure_8;
  let ref;
  let legacyIconUrlByBadgeId;
  let tmp = closure_11();
  importDefault = tmp;
  let obj = autoOpen(isBadgeManagementEnabled[10]);
  isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  let obj2 = autoOpen(isBadgeManagementEnabled[11]);
  const isBadgeDirectoryUpdatesEnabled = obj2.useIsBadgeDirectoryUpdatesEnabled({ location: "UserProfileBadgesEditButton" });
  let tmp6 = importDefault;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let length;
  if (catalogBadges != null) {
    length = catalogBadges.length;
  }
  if (length == null) {
    length = badges.length;
  }
  const useSelectedDismissibleContent = autoOpen(tmp3[14]).useSelectedDismissibleContent;
  autoOpen(isBadgeManagementEnabled[14]);
  if (!isBadgeManagementEnabled) {
    items = [];
  } else {
    const items1 = [autoOpen(tmp3[13]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
    items = items1;
  }
  const tmp9 = analyticsLocations(useSelectedDismissibleContent(items, undefined, true), 2);
  react = tmp10;
  const tmp11 = tmp9[0] === autoOpen(isBadgeManagementEnabled[13]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  closure_5 = tmp11;
  const items2 = [analyticsLocations, tmp11, tmp9[1]];
  onPress = react.useCallback(() => {
    const obj = openCustomizeBadgesSheet;
    const obj2 = { analyticsLocations };
    const result = obj.openCustomizeBadgesSheet(obj2);
    if (closure_5) {
      closure_4(ContentDismissActionType.TAKE_ACTION);
    }
  }, items2);
  const callback1 = react.useCallback(() => {
    const obj = autoOpen(isBadgeManagementEnabled[16]);
    const result = obj.openBadgeDirectoryScreen();
  }, []);
  field = field.useField("pendingCustomizeBadgesSheet");
  const tmp15 = tmp6(isBadgeManagementEnabled[17])();
  closure_8 = tmp15;
  const items3 = [field, tmp15, isBadgeManagementEnabled, onPress];
  const effect = react.useEffect(() => {
    let closure_0;
    if (field) {
      if (closure_8) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          field.setState({ pendingCustomizeBadgesSheet: false });
          if (isBadgeManagementEnabled) {
            onPress();
          }
        }, 300);
        return () => clearTimeout(closure_0);
      }
    }
  }, items3);
  ref = react.useRef(false);
  const items4 = [autoOpen, isBadgeManagementEnabled, onPress];
  const effect1 = react.useEffect(() => {
    const tmp = autoOpen && isBadgeManagementEnabled && !ref.current;
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items4);
  if (isBadgeManagementEnabled) {
    if (0 === length) {
      let obj3 = { label: intl3.string(autoOpen(tmp3[18]).t.l6w3Vj), labelTrailing: ref(autoOpen(tmp3[19]).UserProfileEditFormLabelBadges, obj4), content: ref(onPress, obj5), accessibilityValue: obj7, disabled: !ownsAnyBadge && !(!ownsAnyBadge && isBadgeDirectoryUpdatesEnabled), onPress };
      const UserProfileEditFormButton2 = tmp2(tmp3[19]).UserProfileEditFormButton;
      intl3 = tmp2(tmp3[18]).intl;
      obj4 = { showNewBadge: tmp11 };
      obj5 = { style: tmp.content, "aria-hidden": true, children: ref(Text2, obj6) };
      obj6 = { variant: "text-sm/medium", color: "text-muted", children: intl4.string(autoOpen(isBadgeManagementEnabled[18]).t.xfuQvv) };
      Text2 = tmp2(tmp3[20]).Text;
      intl4 = tmp2(tmp3[18]).intl;
      obj7 = { text: intl5.string(autoOpen(isBadgeManagementEnabled[18]).t.xfuQvv) };
      intl5 = tmp2(tmp3[18]).intl;
      const tmp30 = ref;
      if (!ownsAnyBadge && isBadgeDirectoryUpdatesEnabled) {
        onPress = callback1;
      }
      return tmp30(UserProfileEditFormButton2, obj3);
    } else {
      let mapped1;
      const tmp2Result2 = autoOpen(isBadgeManagementEnabled[21]);
      legacyIconUrlByBadgeId = tmp2Result2.getLegacyIconUrlByBadgeId(badges);
      const substr = badges.slice(0, tmp2(tmp3[21]).MAX_DISPLAYED_PROFILE_BADGES);
      let substr1;
      if (catalogBadges != null) {
        substr1 = catalogBadges.slice(0, tmp2(tmp3[21]).MAX_DISPLAYED_PROFILE_BADGES);
      }
      if (substr1 == null) {
        substr1 = null;
      }
      const _Math = Math;
      const diff = length - Math.min(length, tmp2(tmp3[21]).MAX_DISPLAYED_PROFILE_BADGES);
      let mapped;
      if (substr1 != null) {
        mapped = substr1.map((name) => name.name);
      }
      if (mapped == null) {
        mapped = substr.map((description) => description.description);
      }
      const intl = tmp2(tmp3[18]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj8 = { badge_names: mapped.join(", "), overflow_count: diff };
      const AdyOTw = tmp2(tmp3[18]).t.AdyOTw;
      const obj9 = { label: intl2.string(autoOpen(isBadgeManagementEnabled[18]).t.l6w3Vj), labelTrailing: ref(autoOpen(isBadgeManagementEnabled[19]).UserProfileEditFormLabelBadges, obj10), content: tmp24(tmp25, obj11), accessibilityValue: tmp28, onPress };
      const formatToPlainStringResult = formatToPlainString(AdyOTw, obj8);
      const UserProfileEditFormButton = tmp2(tmp3[19]).UserProfileEditFormButton;
      intl2 = tmp2(tmp3[18]).intl;
      obj10 = { showNewBadge: tmp11 };
      obj11 = { style: tmp.content, "aria-hidden": true, children: items5 };
      tmp24 = legacyIconUrlByBadgeId;
      tmp25 = onPress;
      if (null != substr1) {
        mapped1 = substr1.map((badge_id) => {
          let obj3;
          let tmp6;
          const value = closure_10.get(badge_id.badge_id);
          if (null != value) {
            const obj2 = { style: closure_1.badge, source: obj3 };
            obj3 = { uri: value };
            tmp6 = React4(hasOwnProperty, obj2, badge_id.badge_id);
          } else {
            const obj = { badge: badge_id, size: 32, style: closure_1.badge };
            tmp6 = React4(BadgeCatalogIconDefault, obj, badge_id.badge_id);
          }
          return tmp6;
        });
      } else {
        mapped1 = substr.map((id) => {
          let obj2;
          let obj3;
          const obj = { style: closure_1.badge, source: obj2 };
          obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
          obj3 = BadgeUtils;
          return React4(hasOwnProperty, obj, id.id);
        });
      }
      items5 = [mapped1, ];
      let tmp23Result = diff > 0;
      if (tmp23Result) {
        const _HermesInternal = HermesInternal;
        const obj12 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.overflowCount, children: "+" + diff };
        const Text = tmp2(tmp3[20]).Text;
        tmp23Result = tmp23(Text, obj12);
      }
      items5[1] = tmp23Result;
      tmp28 = undefined;
      if (mapped.length > 0) {
        tmp28 = { text: formatToPlainStringResult };
        const obj13 = { text: formatToPlainStringResult };
      }
      return ref(UserProfileEditFormButton, obj9);
    }
  } else {
    return null;
  }
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default tmp4;
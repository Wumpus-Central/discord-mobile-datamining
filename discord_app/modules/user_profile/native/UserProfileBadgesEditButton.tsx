// discord_app/modules/user_profile/native/UserProfileBadgesEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import BadgeCatalogIconDefault from "../../badges/native/BadgeCatalogIcon.tsx";
import BadgeUtils from "../../badges/BadgeUtils.tsx";
import openCustomizeBadgesSheet from "../../badges/native/openCustomizeBadgesSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  content: { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 },
  badge: { width: 32, height: 32 },
  overflowCount: { marginLeft: 2 },
};
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(70);
      ({ badges, catalogBadges, ownsAnyBadge, autoOpen } = arg0);
      _require = undefined !== autoOpen && autoOpen;
      let obj = require("c");
      importDefault = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "UserProfileBadgesEditButton" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp4 = closure_11();
      isBadgeManagementEnabled = require("BadgeManagementExperiment").useIsBadgeManagementEnabled(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { location: "UserProfileBadgesEditButton" };
        cResult[1] = obj3;
        let tmp7 = obj3;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = require("BadgeManagementExperiment");
      const isBadgeDirectoryUpdatesEnabled =
        require("BadgeDirectoryUpdatesExperiment").useIsBadgeDirectoryUpdatesEnabled(tmp7);
      const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
      let length;
      if (catalogBadges != null) {
        length = catalogBadges.length;
      }
      if (length == null) {
        length = badges.length;
      }
      let tmp11 = isBadgeManagementEnabled;
      if (isBadgeManagementEnabled) {
        tmp11 = length > 0 || ownsAnyBadge;
        const tmp12 = length > 0 || ownsAnyBadge;
      }
      if (cResult[2] !== tmp11) {
        if (tmp11) {
          const items = [tmp(tmp2[13]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
          let items1 = items;
        } else {
          items1 = [];
        }
        cResult[2] = tmp11;
        cResult[3] = items1;
      } else {
        const tmp15 = analyticsLocations(tmp(tmp2[14]).useSelectedDismissibleContent(cResult[3], undefined, true), 2);
        noop = tmp16;
        const tmp17 = tmp15[0] === tmp(tmp2[13]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
        closure_5 = tmp17;
        if (cResult[4] === analyticsLocations) {
          if (cResult[5] === tmp17) {
            if (cResult[6] === tmp16) {
              let tmp18 = cResult[7];
            }
            closure_6 = tmp18;
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor() {
                  obj = autoOpen(closure_2[16]);
                  result = obj.openBadgeDirectoryScreen();
                  return;
                }
              }
              cResult[8] = M;
            } else {
              class M {
                constructor() {
                  obj = autoOpen(closure_2[16]);
                  result = obj.openBadgeDirectoryScreen();
                  return;
                }
              }
            }
            field = field.useField("pendingCustomizeBadgesSheet");
            const tmp22 = tmp9(tmp2[17])();
            closure_8 = tmp22;
            if (cResult[9] === tmp18) {
              class M {
                constructor() {
                  obj = autoOpen(closure_2[16]);
                  result = obj.openBadgeDirectoryScreen();
                  return;
                }
              }
            }
            class U {
              constructor() {
                obj = closure_0(closure_2[15]);
                obj1 = { analyticsLocations };
                result = obj.openCustomizeBadgesSheet(obj1);
                if (closure_5) {
                  tmp2 = closure_4;
                  tmp3 = ContentDismissActionType;
                  tmp4 = closure_4(ContentDismissActionType.TAKE_ACTION);
                }
                return;
              }
            }
            const items2 = [field, tmp22, isBadgeManagementEnabled, tmp18];
            cResult[9] = tmp18;
            cResult[10] = tmp22;
            cResult[11] = isBadgeManagementEnabled;
            cResult[12] = field;
            cResult[13] = tmp25;
            cResult[14] = items2;
          }
        }
        class U {
          constructor() {
            obj = closure_0(closure_2[15]);
            obj1 = { analyticsLocations };
            result = obj.openCustomizeBadgesSheet(obj1);
            if (closure_5) {
              tmp2 = closure_4;
              tmp3 = ContentDismissActionType;
              tmp4 = closure_4(ContentDismissActionType.TAKE_ACTION);
            }
            return;
          }
        }
        cResult[4] = analyticsLocations;
        cResult[5] = tmp17;
        cResult[6] = tmp15[1];
        cResult[7] = U;
        tmp18 = U;
        const tmpResult4 = tmp(tmp2[14]);
      }
      tmp9 = importDefault;
      const tmpResult3 = require("BadgeDirectoryUpdatesExperiment");
    }
  : (arg0) => {
      ({ badges, catalogBadges, ownsAnyBadge, autoOpen } = arg0);
      if (autoOpen === undefined) {
        autoOpen = false;
      }
      let isBadgeManagementEnabled;
      noop = undefined;
      closure_5 = undefined;
      let onPress;
      let field;
      closure_8 = undefined;
      let ref;
      let legacyIconUrlByBadgeId;
      let tmp = closure_11();
      importDefault = tmp;
      isBadgeManagementEnabled = autoOpen(isBadgeManagementEnabled[10]).useIsBadgeManagementEnabled({
        location: "UserProfileBadgesEditButton",
      });
      let obj = autoOpen(isBadgeManagementEnabled[10]);
      const isBadgeDirectoryUpdatesEnabled = autoOpen(isBadgeManagementEnabled[11]).useIsBadgeDirectoryUpdatesEnabled({
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
      let obj2 = autoOpen(isBadgeManagementEnabled[11]);
      let tmp6 = importDefault;
      if (!isBadgeManagementEnabled) {
        let items = [];
      } else {
        const items1 = [tmp2(tmp3[13]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
        items = items1;
      }
      const tmp8 = analyticsLocations(
        autoOpen(isBadgeManagementEnabled[14]).useSelectedDismissibleContent(items, undefined, true),
        2,
      );
      noop = tmp9;
      const tmp10 = tmp8[0] === autoOpen(isBadgeManagementEnabled[13]).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
      closure_5 = tmp10;
      const items2 = [analyticsLocations, tmp10, tmp8[1]];
      onPress = noop.useCallback(() => {
        const result = openCustomizeBadgesSheet.openCustomizeBadgesSheet({ analyticsLocations });
        if (closure_5) {
          closure_4(ContentDismissActionType.TAKE_ACTION);
        }
        const obj2 = { analyticsLocations };
      }, items2);
      const callback1 = noop.useCallback(() => {
        const result = autoOpen(isBadgeManagementEnabled[16]).openBadgeDirectoryScreen();
      }, []);
      field = field.useField("pendingCustomizeBadgesSheet");
      const tmp14 = tmp6(isBadgeManagementEnabled[17])();
      closure_8 = tmp14;
      const items3 = [field, tmp14, isBadgeManagementEnabled, onPress];
      const effect = noop.useEffect(() => {
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
      ref = noop.useRef(false);
      const items4 = [autoOpen, isBadgeManagementEnabled, onPress];
      const effect1 = noop.useEffect(() => {
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
      }, items4);
      if (isBadgeManagementEnabled) {
        if (0 === length) {
          let tmp28 = !ownsAnyBadge;
          if (!ownsAnyBadge) {
            tmp28 = isBadgeDirectoryUpdatesEnabled;
          }
          let obj3 = {
            label: null,
            labelTrailing: null,
            content: null,
            accessibilityValue: null,
            disabled: null,
            onPress: null,
          };
          const intl3 = tmp2(tmp3[18]).intl;
          obj3.label = intl3.string(tmp2(tmp3[18]).t.l6w3Vj);
          const obj4 = { showNewBadge: tmp10 };
          obj3.labelTrailing = ref(tmp2(tmp3[19]).UserProfileEditFormLabelBadges, obj4);
          const obj5 = { style: tmp.content, "aria-hidden": true, children: null };
          const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
          const intl4 = tmp2(tmp3[18]).intl;
          obj6.children = intl4.string(tmp2(tmp3[18]).t.xfuQvv);
          obj5.children = ref(tmp2(tmp3[20]).Text, obj6);
          obj3.content = ref(onPress, obj5);
          const obj7 = { text: null };
          const intl5 = tmp2(tmp3[18]).intl;
          obj7.text = intl5.string(tmp2(tmp3[18]).t.xfuQvv);
          obj3.accessibilityValue = obj7;
          let tmp31 = !ownsAnyBadge;
          if (!ownsAnyBadge) {
            tmp31 = !tmp28;
          }
          obj3.disabled = tmp31;
          if (tmp28) {
            onPress = callback1;
          }
          obj3.onPress = onPress;
          return ref(tmp2(tmp3[19]).UserProfileEditFormButton, obj3);
        } else {
          legacyIconUrlByBadgeId = tmp2(tmp3[21]).getLegacyIconUrlByBadgeId(badges);
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
          const obj8 = { badge_names: mapped.join(", "), overflow_count: diff };
          const tmp2Result2 = tmp2(tmp3[21]);
          const obj9 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
          const intl2 = tmp2(tmp3[18]).intl;
          obj9.label = intl2.string(tmp2(tmp3[18]).t.l6w3Vj);
          const obj10 = { showNewBadge: tmp10 };
          obj9.labelTrailing = ref(tmp2(tmp3[19]).UserProfileEditFormLabelBadges, obj10);
          const obj11 = { style: tmp.content, "aria-hidden": true, children: null };
          if (null != substr1) {
            let mapped1 = substr1.map((badge_id) => {
              value = closure_10.get(badge_id.badge_id);
              if (null != value) {
                const obj2 = { style: closure_1.badge, source: null };
                const obj3 = { uri: value };
                obj2.source = obj3;
                let tmp6 = options(hasOwnProperty, obj2, badge_id.badge_id);
              } else {
                const obj = { badge: badge_id, size: 32, style: closure_1.badge };
                tmp6 = options(BadgeCatalogIconDefault, obj, badge_id.badge_id);
              }
              return tmp6;
            });
          } else {
            mapped1 = substr.map((id) => {
              const obj = { style: closure_1.badge, source: null };
              const obj2 = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
              obj.source = obj2;
              return options(hasOwnProperty, obj, id.id);
            });
          }
          const items5 = [mapped1];
          let tmp22Result = diff > 0;
          if (tmp22Result) {
            const obj12 = {
              variant: "text-md/normal",
              color: "mobile-text-heading-primary",
              style: tmp.overflowCount,
              children: null,
            };
            const _HermesInternal = HermesInternal;
            obj12.children = "+" + diff;
            tmp22Result = tmp22(tmp2(tmp3[20]).Text, obj12);
          }
          items5[1] = tmp22Result;
          obj11.children = items5;
          obj9.content = legacyIconUrlByBadgeId(onPress, obj11);
          let tmp27;
          if (mapped.length > 0) {
            const obj13 = { text: formatToPlainStringResult };
            tmp27 = obj13;
          }
          obj9.accessibilityValue = tmp27;
          obj9.onPress = onPress;
          return ref(tmp2(tmp3[19]).UserProfileEditFormButton, obj9);
        }
      } else {
        return null;
      }
      const tmp2Result = autoOpen(isBadgeManagementEnabled[14]);
    };

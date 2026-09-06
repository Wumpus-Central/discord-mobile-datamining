// discord_app/modules/user_profile/native/UserProfileBadgesEditButton.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { apexExperiment } from "../../badges/BadgeManagementExperiment.tsx";

const require = arg1;
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { content: null, badge: null, overflowCount: null };
createCacheKey = {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: ThemesDefault.space.PX_4,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 32, height: 32 };
createCacheKey[2] = { marginLeft: 2 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  ({ badges, catalogBadges, ownsAnyBadge } = arg0);
  let _require;
  let analyticsLocations;
  dependencyMap = undefined;
  let callback;
  let React;
  const tmp = callback3();
  _require = tmp;
  let obj = apexExperiment;
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
  let tmp6 = callback(tmp2Result.useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp7;
  const tmp8 =
    tmp6[0] ===
    require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx")
      .DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  callback = tmp8;
  const items2 = [analyticsLocations, tmp8, tmp6[1]];
  callback = React.useCallback(() => {
    let obj = analyticsLocations(lib2[11]);
    obj = { analyticsLocations };
    obj.openLazy(lib(lib2[13])(lib2[12], lib2.paths), "Customize Badges", obj);
    if (closure_3) {
      lib2(closure_1_7.TAKE_ACTION);
    }
  }, items2);
  if (isBadgeManagementEnabled) {
    if (0 === length) {
      obj = {
        label: null,
        labelTrailing: null,
        content: null,
        accessibilityValue: null,
        disabled: null,
        onPress: null,
      };
      const intl3 = tmp2(1114).intl;
      obj[0] = intl3.string(tmp2(1114).t.l6w3Vj);
      obj = { showNewBadge: null };
      obj[0] = tmp8;
      obj[1] = callback2(tmp2(14618).UserProfileEditFormLabelBadges, obj);
      obj1 = { style: null, "aria-hidden": true, children: null };
      obj1[0] = tmp.content;
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl4 = tmp2(1114).intl;
      obj2[2] = intl4.string(tmp2(1114).t.xfuQvv);
      obj1[2] = callback2(tmp2(4556).Text, obj2);
      obj[2] = callback2(closure_6, obj1);
      const obj3 = { text: null };
      const intl5 = tmp2(1114).intl;
      obj3[0] = intl5.string(tmp2(1114).t.xfuQvv);
      obj[3] = obj3;
      obj[4] = !ownsAnyBadge;
      obj[5] = callback;
      return callback2(tmp2(14618).UserProfileEditFormButton, obj);
    } else {
      tmp2Result = tmp2(11199);
      React = tmp2Result.getLegacyIconUrlByBadgeId(badges);
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
      const obj4 = { badge_names: null, overflow_count: null };
      obj4[0] = mapped.join(", ");
      obj4[1] = diff;
      const obj5 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
      const intl2 = tmp2(1114).intl;
      obj5[0] = intl2.string(tmp2(1114).t.l6w3Vj);
      const obj6 = { showNewBadge: null };
      obj6[0] = tmp8;
      obj5[1] = callback2(tmp2(14618).UserProfileEditFormLabelBadges, obj6);
      const obj7 = { style: null, "aria-hidden": true, children: null };
      obj7[0] = tmp.content;
      if (null != substr1) {
        let mapped1 = substr1.map((badge_id) => {
          const value = closure_4.get(badge_id.badge_id);
          if (null != value) {
            let obj = { style: null, source: null };
            obj[0] = lib.badge;
            obj = { uri: null };
            obj[0] = value;
            obj[1] = obj;
            let tmp6 = closure_1_8(closure_1_5, obj, badge_id.badge_id);
          } else {
            obj = { badge: null, size: 32, style: null };
            obj[0] = badge_id;
            obj[2] = lib.badge;
            tmp6 = closure_1_8(analyticsLocations(lib2[18]), obj, badge_id.badge_id);
          }
          return tmp6;
        });
      } else {
        mapped1 = substr.map((id) => {
          let obj = { style: lib.badge, source: null };
          obj = { uri: lib(lib2[17]).getProfileBadgeIconUrl(id) };
          obj[1] = obj;
          return closure_1_8(closure_1_5, obj, id.id);
        });
      }
      const items3 = [mapped1];
      let tmp15Result = diff > 0;
      if (tmp15Result) {
        const obj8 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: null, children: null };
        obj8[2] = tmp.overflowCount;
        const _HermesInternal = HermesInternal;
        obj8[3] = "+" + diff;
        tmp15Result = tmp15(tmp2(4556).Text, obj8);
      }
      items3[1] = tmp15Result;
      obj7[2] = items3;
      obj5[2] = closure_9(closure_6, obj7);
      let tmp20;
      if (mapped.length > 0) {
        const obj9 = { text: null };
        obj9[0] = formatToPlainStringResult;
        tmp20 = obj9;
      }
      obj5[3] = tmp20;
      obj5[4] = callback;
      return callback2(tmp2(14618).UserProfileEditFormButton, obj5);
    }
  } else {
    return null;
  }
}

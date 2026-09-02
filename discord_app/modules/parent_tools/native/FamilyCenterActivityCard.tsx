// discord_app/modules/parent_tools/native/FamilyCenterActivityCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import getEmptyActivityFormatter from "../FamilyCenterUtils.tsx";
import useUserIdsForLinkStatus from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import renderDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import registerAssetDefault from "../../../../_runtime/12531_registerAsset.js";
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader.tsx";
import useSelectedTeenUser from "../hooks/useSelectedTeenUser.tsx";
import FamilyCenterTopActivityDefault from "FamilyCenterTopActivity.tsx";
import SpendingLimitRowDefault from "FamilyCenterSettingsControls.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import items from "../FamilyCenterConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { useActionsForDisplayType } from "../hooks/useFamilyCenterActivities.tsx";
import { useSelectedTeenUser } from "../hooks/useSelectedTeenUser.tsx";

require = arg1;
function FamilyCenterActivityCardPrefaceText() {
  const tmp = callback3();
  const tmp4 = useIsInAdultAgeGroupDefault();
  let obj = useUserIdsForLinkStatus;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  obj1 = getEmptyActivityFormatter;
  const activityWindowTimestampFormatter = obj1.getActivityWindowTimestampFormatter(tmp4);
  let obj2 = useUserIdsForLinkStatus;
  const activityWindowTimeStamp = obj2.useActivityWindowTimeStamp(activityWindowTimestampFormatter);
  let obj3 = useAgeSpecificText;
  const intl = getSystemLocale.intl;
  obj = { activeLinks: activeLinkUserIds.length };
  const intl2 = getSystemLocale.intl;
  const ageSpecificText = obj3.useAgeSpecificText(
    intl.formatToPlainString(messagesProxyDefault.tazvHQ, obj),
    intl2.string(messagesProxyDefault.KrLnkE),
  );
  obj = { style: tmp.container, children: null };
  let tmp12 = null;
  if (!tmp4) {
    obj1 = { color: null, source: null, style: null };
    obj1[0] = tmp.icon.color;
    obj1[1] = tmp2(14719);
    obj1[2] = tmp.icon;
    tmp12 = callback(tmp5(1296).Icon, obj1);
  }
  const items = [tmp12, ,];
  obj2 = { style: tmp.text, variant: "text-xs/semibold", color: "text-subtle", children: null };
  let tmp15 = ageSpecificText;
  if (activeLinkUserIds.length > 1) {
    tmp15 = ageSpecificText;
    if (tmp4) {
      tmp15 = activityWindowTimeStamp;
    }
  }
  obj2[3] = tmp15;
  items[1] = callback(Text.Text, obj2);
  obj3 = {
    onPress() {
      callback2(paths[17]).pushLazy(callback(paths[19])(paths[18], paths.paths));
    },
    children: null,
  };
  const formatToPlainStringResult = intl.formatToPlainString(messagesProxyDefault.tazvHQ, obj);
  const tmp10 = closure_9;
  const tmp11 = View;
  const tmp2Result = renderDefault;
  obj3[1] = callback(Button.Icon, {
    color: tmp.icon.color,
    source: registerAssetDefault,
    size: Button.Icon.Sizes.EXTRA_SMALL,
    style: tmp.icon,
  });
  items[2] = callback(tmp2Result, obj3);
  obj[1] = items;
  return tmp10(tmp11, obj);
}
function FamilyCenterHeaderSubText() {
  const tmp2 = useIsInAdultAgeGroupDefault();
  let obj = useUserIdsForLinkStatus;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const activityWindowTimestampFormatter = getEmptyActivityFormatter.getActivityWindowTimestampFormatter(tmp2);
  useUserIdsForLinkStatus;
  if (!tmp2) {
    obj = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj[2] = tmp6;
    let tmp7 = callback(Text.Text, obj);
  } else {
    tmp7 = null;
  }
  return tmp7;
}
class FamilyCenterActivityCardHeader {
  constructor() {
    obj = require("useUserIdsForLinkStatus");
    activeLinkUserIds = obj.useActiveLinkUserIds();
    tmp = require("useIsInAdultAgeGroup")();
    obj2 = require("useSelectedTeenUser");
    selectedTeenUser = obj2.useSelectedTeenUser();
    if (undefined === selectedTeenUser) {
      return null;
    } else {
      if (!tmp) {
        tmp3 = jsx;
        tmp4 = View;
        obj = { children: null };
        tmp5 = closure_15;
        obj1 = { user: null };
        obj1[0] = selectedTeenUser;
        obj[0] = jsx(closure_15, obj1);
        tmp6 = jsx(View, obj);
        tmp9 = tmp6;
      } else {
        num = 1;
      }
      tmp7 = jsx;
      tmp8 = FamilyCenterActivityCardAccountSelect;
      tmp6 = jsx(FamilyCenterActivityCardAccountSelect, {});
    }
    return;
  }
}
class FamilyCenterActivityCardAccountSelect {
  constructor() {
    tmp = closure_17();
    tmp2 = closure_0;
    tmp3 = selectTeenUser;
    obj = require("useUserIdsForLinkStatus");
    activeLinkUsers = obj.useActiveLinkUsers();
    closure_0 = activeLinkUsers;
    obj2 = require("useSelectedTeenUser");
    selectedTeenUser = obj2.useSelectedTeenUser();
    closure_1 = selectedTeenUser;
    obj3 = require("useFamilyCenterActions");
    obj = {
      onSuccess() {
        return selectedTeenUser(selectTeenUser[24]).hideActionSheet(closure_10);
      },
      onError() {
        const intl = activeLinkUsers(selectTeenUser[11]).intl;
        return activeLinkUsers(selectTeenUser[25]).presentFailedToast(
          intl.string(selectedTeenUser(selectTeenUser[12]).Wu8BK2),
        );
      },
    };
    selectTeenUser = obj3.useFamilyCenterActions(obj).selectTeenUser;
    items = [];
    items[0] = activeLinkUsers;
    closure_3 = closure_3.useMemo(
      () =>
        activeLinkUsers.map((id) => {
          const obj = { label: null, value: null };
          const name = callback(4322).getName(id);
          const obj2 = callback(4322);
          obj[0] = "" + name + " (" + callback(4322).getUserTag(id) + ")";
          obj[1] = id.id;
          return obj;
        }),
      items,
    );
    tmp6 = null;
    if (undefined !== selectedTeenUser) {
      tmp7 = jsx;
      tmp8 = View;
      obj1 = { children: null };
      tmp9 = jsxs;
      tmp10 = closure_1;
      obj2 = { style: null, accessibilityRole: "spinbutton", onPress: null, children: null };
      obj2[0] = tmp.touch;
      obj2[2] = function onPress() {
        if (undefined !== selectedTeenUser) {
          let obj = selectedTeenUser(selectTeenUser[24]);
          obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
          const intl = activeLinkUsers(selectTeenUser[11]).intl;
          obj[0] = intl.string(selectedTeenUser(selectTeenUser[12]).vORl9Q);
          obj[1] = closure_3;
          obj[2] = function onItemSelect(arg0) {
            let tmp = null != arg0;
            if (tmp) {
              tmp = arg0 !== id.id;
            }
            if (tmp) {
              callback(arg0);
              let obj = closure_1_1(closure_1_2[28]);
              obj = { action: null };
              obj[0] = closure_1_5.SelectTeen;
              obj.track(closure_1_7.FAMILY_CENTER_ACTION, obj);
            }
            setImmediate(() => {
              callback(table[24]).hideActionSheet(closure_10);
            });
          };
          obj[3] = tmp.id;
          obj.openLazy(
            activeLinkUsers(selectTeenUser[19])(selectTeenUser[27], selectTeenUser.paths),
            closure_1_10,
            obj,
          );
          const tmp5 = activeLinkUsers(selectTeenUser[19])(selectTeenUser[27], selectTeenUser.paths);
        }
      };
      tmp12 = closure_15;
      obj3 = { user: null, inSelector: true };
      obj3[0] = selectedTeenUser;
      tmp11 = require("render");
      items1 = [,];
      items1[0] = jsx(closure_15, obj3);
      obj4 = { style: null, size: null, source: null };
      obj4[0] = tmp.icon;
      obj4[1] = require("Button").Icon.Sizes.MEDIUM;
      obj4[2] = require("registerAsset");
      items1[1] = jsx(require("Button").Icon, obj4);
      obj2[3] = items1;
      obj1[0] = jsxs(tmp11, obj2);
      tmp6 = jsx(View, obj1);
    }
    return tmp6;
  }
}
let c3 = importAllResult;
({ FamilyCenterAction: c5, TeenActionDisplayType: closure_6 } = items);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const FamilyCenterTeenAccountSelect = "FamilyCenterTeenAccountSelect";
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center" }, icon: null, text: null };
obj = { color: ThemesDefault.colors.ICON_SUBTLE, width: ThemesDefault.space.PX_16, height: ThemesDefault.space.PX_16 };
obj[1] = obj;
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_4 };
obj[2] = createCacheKey;
let closure_11 = createCacheKey.createStyles(obj);
let obj2 = {
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: ThemesDefault.space.PX_12,
    flex: 1,
    backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
    borderTopLeftRadius: ThemesDefault.radii.md,
    borderTopRightRadius: ThemesDefault.radii.md,
  },
  avatar: null,
  avatarContainer: null,
  userHeader: null,
  nonSelectorHeader: null,
};
let obj3 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: ThemesDefault.space.PX_12,
  flex: 1,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopLeftRadius: ThemesDefault.radii.md,
  borderTopRightRadius: ThemesDefault.radii.md,
};
obj2[1] = {
  borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createCacheKey = { marginRight: ThemesDefault.space.PX_12, alignItems: "flex-start" };
obj2[2] = createCacheKey;
let obj4 = {
  borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2[3] = { display: "flex", flexDirection: "column", width: "100%", paddingRight: ThemesDefault.space.PX_16 };
const obj6 = { display: "flex", flexDirection: "column", width: "100%", paddingRight: ThemesDefault.space.PX_16 };
obj2[4] = { flex: 1, paddingRight: ThemesDefault.space.PX_16 };
let closure_14 = createCacheKey.createStyles(obj2);
const memoResult = importAllResult.memo((arg0) => {
  ({ user, inSelector } = arg0);
  const tmp = callback4();
  const AvatarSizes = Button.AvatarSizes;
  if (inSelector) {
    let NORMAL = AvatarSizes.SMALL;
    let tmp4 = tmp2;
  } else {
    NORMAL = AvatarSizes.NORMAL;
    tmp4 = tmp2;
  }
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.avatarContainer, children: callback(tmp4(1296).Avatar, obj) };
  obj = {
    avatarStyle: tmp.avatar,
    user,
    guildId: "HermesInternal",
    disablePlaceholder: null,
    avatarDecoration: user.avatarDecoration,
    size: 649.369,
  };
  obj[5] = NORMAL;
  const items = [callback(View, obj)];
  const items1 = [tmp.userHeader];
  let nonSelectorHeader;
  if (!inSelector) {
    nonSelectorHeader = tmp.nonSelectorHeader;
  }
  obj1 = { style: items1, children: null };
  items1[1] = nonSelectorHeader;
  const items2 = [callback(FamilyCenterUsernameHeaderDefault, { user }), callback(FamilyCenterHeaderSubText, {})];
  obj1[1] = items2;
  items[1] = closure_9(View, obj1);
  obj[1] = items;
  return closure_9(View, obj);
});
memoResult.displayName = "FamilyCenterActivityCardAccount";
const obj8 = { touch: null, icon: null };
const obj7 = { flex: 1, paddingRight: ThemesDefault.space.PX_16 };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
obj8[0] = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
const obj9 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
items = [{ rotate: "90deg" }];
obj8[1] = {
  color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  width: ThemesDefault.space.PX_24,
  height: ThemesDefault.space.PX_24,
  transform: items,
  marginHorizontal: ThemesDefault.space.PX_8,
};
let closure_17 = createCacheKey.createStyles(obj8);
const obj11 = {
  card: null,
  preface: null,
  container: null,
  content: null,
  totals: null,
  first: null,
  other: null,
  activities: null,
  settingsControls: null,
};
createCacheKey = { marginTop: ThemesDefault.space.PX_16 };
obj11[0] = createCacheKey;
const obj10 = {
  color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  width: ThemesDefault.space.PX_24,
  height: ThemesDefault.space.PX_24,
  transform: items,
  marginHorizontal: ThemesDefault.space.PX_8,
};
obj11[1] = { display: "flex", marginBottom: ThemesDefault.space.PX_12 };
const obj13 = { display: "flex", marginBottom: ThemesDefault.space.PX_12 };
obj11[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md };
const obj14 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md };
obj11[3] = {
  padding: ThemesDefault.space.PX_16,
  display: "flex",
  flexDirection: "column",
  gap: ThemesDefault.space.PX_32,
};
createCacheKey = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: ThemesDefault.space.PX_8,
};
obj11[4] = createCacheKey;
obj11[5] = { width: "100%" };
obj11[6] = { width: "48.5%" };
const obj15 = {
  padding: ThemesDefault.space.PX_16,
  display: "flex",
  flexDirection: "column",
  gap: ThemesDefault.space.PX_32,
};
obj11[7] = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_32 };
const obj17 = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_32 };
obj11[8] = { marginTop: ThemesDefault.space.PX_24 };
let closure_19 = createCacheKey.createStyles(obj11);
const obj18 = { marginTop: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityCard.tsx");

export default function FamilyCenterActivityCard() {
  const tmp = callback6();
  const _require = tmp;
  let obj = useSelectedTeenUser;
  const selectedTeenUser = obj.useSelectedTeenUser();
  useActionsForDisplayType;
  if (undefined === selectedTeenUser) {
    return null;
  } else {
    const sortedActivityTypeConfigs = tmp2(7347).getSortedActivityTypeConfigs();
    obj = { style: null, children: null };
    obj[0] = tmp.card;
    obj = { style: null, children: null };
    obj[0] = tmp.preface;
    obj[1] = callback(FamilyCenterActivityCardPrefaceText, {});
    const items = [callback(View, obj), ,];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    const items1 = [callback(FamilyCenterActivityCardHeader, {})];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.content;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.totals;
    const found = sortedActivityTypeConfigs.filter((arg0) => {
      [tmp] = arg0;
      return tmp !== constants.GIFTS;
    });
    obj3[1] = found.map((arg0, arg1) => {
      [tmp] = arg0;
      if (0 === arg1) {
        let other = closure_0.first;
      } else {
        other = closure_0.other;
      }
      return closure_1_8(
        closure_1_4,
        { style: other, children: closure_1_8(closure_1_1(closure_1_2[31]), { displayType: tmp }) },
        "total-" + tmp,
      );
    });
    const items2 = [callback(View, obj3), callback(FamilyCenterTopActivityDefault, {})];
    let tmp11Result = null;
    if (tmp6) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.activities;
      obj4[1] = sortedActivityTypeConfigs.map((arg0) => {
        [tmp] = arg0;
        return callback2(callback(table[33]), { displayType }, "section-" + displayType);
      });
      tmp11Result = tmp11(tmp10, obj4);
    }
    items2[2] = tmp11Result;
    obj2[1] = items2;
    items1[1] = closure_9(View, obj2);
    obj1[1] = items1;
    items[1] = closure_9(View, obj1);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.settingsControls;
    obj5[1] = callback(SpendingLimitRowDefault, {});
    items[2] = callback(View, obj5);
    obj[1] = items;
    return closure_9(View, obj);
  }
  tmp2 = _require;
}
export const FamilyCenterActivityCardAccount = memoResult;
export { FamilyCenterActivityCardHeader };
export { FamilyCenterActivityCardAccountSelect };

// === Module 15013: FamilyCenterActivityCard ===

// Module 15013 (FamilyCenterActivityCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import _modDef2397 from "module_2397" /* 2397 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import Text_Text from "Text/Text" /* 4636 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7706 */;
import useUserLinks from "useUserLinks" /* 8800 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8801 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9204 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12071 */;
import _modDef12920 from "module_12920" /* 12920 */;
import _modDef15014 from "module_15014" /* 15014 */;
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader" /* 15016 */;
import useSelectedTeenUser from "useSelectedTeenUser" /* 15017 */;
import FamilyCenterActivityTotalDefault from "FamilyCenterActivityTotal" /* 15019 */;
import FamilyCenterTopActivityDefault from "FamilyCenterTopActivity" /* 15020 */;
import FamilyCenterActivitySectionDefault from "FamilyCenterActivitySection" /* 15023 */;
import FamilyCenterSettingsControlsDefault from "FamilyCenterSettingsControls" /* 15030 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function FamilyCenterActivityCardPrefaceText() {
  const tmp = closure_11();
  const tmp4 = useIsInAdultAgeGroupDefault();
  const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
  const activityWindowTimestampFormatter = FamilyCenterUtils.getActivityWindowTimestampFormatter(tmp4);
  const activityWindowTimeStamp = useUserLinks.useActivityWindowTimeStamp(activityWindowTimestampFormatter);
  const intl = util.intl;
  const obj4 = useAgeSpecificText;
  const obj5 = { activeLinks: activeLinkUserIds.length };
  const intl2 = util.intl;
  const ageSpecificText = obj4.useAgeSpecificText(intl.formatToPlainString(_modDef2397.tazvHQ, { activeLinks: activeLinkUserIds.length }), intl2.string(_modDef2397.KrLnkE));
  const obj6 = { style: tmp.container, children: null };
  let tmp12 = null;
  if (!tmp4) {
    const obj7 = { color: tmp.icon.color, source: _modDef15014, style: tmp.icon };
    tmp12 = React6(native.Icon, obj7);
  }
  const items = [tmp12, , ];
  const obj8 = { style: tmp.text, variant: "text-xs/semibold", color: "text-subtle", children: null };
  let tmp15 = ageSpecificText;
  if (activeLinkUserIds.length > 1) {
    tmp15 = ageSpecificText;
    if (tmp4) {
      tmp15 = activityWindowTimeStamp;
    }
  }
  obj8.children = tmp15;
  items[1] = React6(Text_Text.Text, obj8);
  const obj9 = {
    onPress() {
      require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[18], paths.paths));
    },
    children: null
  };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2397.tazvHQ, { activeLinks: activeLinkUserIds.length });
  const tmp2Result = TouchableHitBoxDefault;
  obj9.children = React6(native.Icon, { color: tmp.icon.color, source: _modDef12920, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp.icon });
  items[2] = React6(tmp2Result, obj9);
  obj6.children = items;
  return React7(View, obj6);
}
function FamilyCenterHeaderSubText() {
  const tmp2 = useIsInAdultAgeGroupDefault();
  const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
  const activityWindowTimestampFormatter = FamilyCenterUtils.getActivityWindowTimestampFormatter(tmp2);
  useUserLinks;
  if (!tmp2) {
    const obj3 = { variant: "text-sm/medium", color: "text-muted", children: tmp6 };
    let tmp7 = React6(Text_Text.Text, obj3);
  } else {
    tmp7 = null;
  }
  return tmp7;
}
class FamilyCenterActivityCardHeader {
  constructor() {
    obj = closure_0(closure_2[8]);
    activeLinkUserIds = obj.useActiveLinkUserIds();
    tmp = closure_1(closure_2[7])();
    obj2 = closure_0(closure_2[22]);
    selectedTeenUser = obj2.useSelectedTeenUser();
    if (undefined === selectedTeenUser) {
      return null;
    } else {
      if (!tmp) {
        tmp3 = jsx;
        tmp4 = View;
        obj1 = { children: null };
        tmp5 = closure_15;
        obj5 = { user: null };
        obj5.user = selectedTeenUser;
        obj1.children = jsx(closure_15, obj5);
        tmp6 = jsx(View, obj1);
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
    obj = closure_0(selectTeenUser[8]);
    activeLinkUsers = obj.useActiveLinkUsers();
    closure_0 = activeLinkUsers;
    obj2 = closure_0(selectTeenUser[22]);
    selectedTeenUser = obj2.useSelectedTeenUser();
    closure_1 = selectedTeenUser;
    obj3 = closure_0(selectTeenUser[23]);
    obj1 = {
      onSuccess() {
            return selectedTeenUser(selectTeenUser[24]).hideActionSheet(FamilyCenterTeenAccountSelect);
          },
      onError() {
            const intl = activeLinkUsers(selectTeenUser[11]).intl;
            return activeLinkUsers(selectTeenUser[25]).presentFailedToast(intl.string(selectedTeenUser(selectTeenUser[12]).Wu8BK2));
          }
    };
    selectTeenUser = obj3.useFamilyCenterActions(obj1).selectTeenUser;
    items = [];
    items[0] = activeLinkUsers;
    closure_3 = closure_3.useMemo(() => activeLinkUsers.map((id) => {
      const obj = { label: null, value: null };
      const name = selectedTeenUser(4484).getName(id);
      const obj2 = selectedTeenUser(4484);
      obj.label = "" + name + " (" + selectedTeenUser(4484).getUserTag(id) + ")";
      obj.value = id.id;
      return obj;
    }), items);
    tmp6 = null;
    if (undefined !== selectedTeenUser) {
      tmp7 = jsx;
      tmp8 = View;
      obj9 = { children: null };
      tmp9 = jsxs;
      tmp10 = closure_1;
      obj10 = { style: null, accessibilityRole: "spinbutton", onPress: null, children: null };
      obj10.style = tmp.touch;
      obj10.onPress = function onPress() {
        if (undefined !== selectedTeenUser) {
          let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
          let obj = ActionSheetActionCreatorsDefault;
          const intl = util.intl;
          obj2.title = intl.string(_modDef2397.vORl9Q);
          obj2.items = items;
          obj2.onItemSelect = function onItemSelect(arg0) {
            let tmp = null != arg0;
            if (tmp) {
              tmp = arg0 !== id.id;
            }
            if (tmp) {
              closure_1_2(arg0);
              const obj2 = { action: SelectTeen.SelectTeen };
              selectedTeenUser(selectTeenUser[28]).track(constants.FAMILY_CENTER_ACTION, obj2);
              const obj = selectedTeenUser(selectTeenUser[28]);
            }
            setImmediate(() => {
              id(closure_1_2[24]).hideActionSheet(closure_1_10);
            });
          };
          obj2.selectedItem = tmp.id;
          obj.openLazy(asyncRequireImpl(9580, dependencyMap.paths), FamilyCenterTeenAccountSelect, obj2);
          const tmp5 = asyncRequireImpl(9580, dependencyMap.paths);
        }
      };
      tmp12 = closure_15;
      obj11 = { user: null, inSelector: true };
      obj11.user = selectedTeenUser;
      tmp11 = closure_1(tmp3[16]);
      items1 = [, ];
      items1[0] = jsx(closure_15, obj11);
      obj12 = { style: null, size: null, source: null };
      obj12.style = tmp.icon;
      obj12.size = tmp2(tmp3[13]).Icon.Sizes.MEDIUM;
      obj12.source = closure_1(tmp3[29]);
      items1[1] = jsx(tmp2(tmp3[13]).Icon, obj12);
      obj10.children = items1;
      obj9.children = jsxs(tmp11, obj10);
      tmp6 = jsx(View, obj9);
    }
    return tmp6;
  }
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7652);
({ FamilyCenterAction: hasOwnProperty, TeenActionDisplayType: metroRequire } = FamilyCenterConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const FamilyCenterTeenAccountSelect = "FamilyCenterTeenAccountSelect";
let createStyles = fn(4640);
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center" }, icon: null, text: null };
let size = { color: nativeDefault.colors.ICON_SUBTLE, width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj.icon = size;
obj.text = { marginHorizontal: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj);
createStyles = fn(4640);
let obj4 = { header: null, avatar: null, avatarContainer: null, userHeader: null, nonSelectorHeader: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_4 };
obj4.header = { display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
let obj5 = { display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
obj4.avatar = { borderRadius: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj7 = { borderRadius: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4.avatarContainer = { marginRight: nativeDefault.space.PX_12, alignItems: "flex-start" };
let obj8 = { marginRight: nativeDefault.space.PX_12, alignItems: "flex-start" };
obj4.userHeader = { display: "flex", flexDirection: "column", width: "100%", paddingRight: nativeDefault.space.PX_16 };
let obj9 = { display: "flex", flexDirection: "column", width: "100%", paddingRight: nativeDefault.space.PX_16 };
obj4.nonSelectorHeader = { flex: 1, paddingRight: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj4);
const memoResult = noop.memo((arg0) => {
  ({ user, inSelector } = arg0);
  const tmp = closure_14();
  const AvatarSizes = native.AvatarSizes;
  if (inSelector) {
    let NORMAL = AvatarSizes.SMALL;
    let tmp4 = require;
  } else {
    NORMAL = AvatarSizes.NORMAL;
    tmp4 = require;
  }
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.avatarContainer, children: null };
  const obj3 = { avatarStyle: tmp.avatar, user, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: user.avatarDecoration, size: NORMAL };
  obj2.children = React6(tmp4(1177).Avatar, obj3);
  const items = [React6(View, obj2), ];
  const items1 = [tmp.userHeader, ];
  let nonSelectorHeader;
  if (!inSelector) {
    nonSelectorHeader = tmp.nonSelectorHeader;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = nonSelectorHeader;
  const items2 = [React6(FamilyCenterUsernameHeaderDefault, { user }), React6(FamilyCenterHeaderSubText, {})];
  obj4.children = items2;
  items[1] = React7(View, obj4);
  obj.children = items;
  return React7(View, obj);
});
memoResult.displayName = "FamilyCenterActivityCardAccount";
createStyles = fn(4640);
const obj11 = { touch: null, icon: null };
const obj10 = { flex: 1, paddingRight: nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj11.touch = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
const size1 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, transform: null, marginHorizontal: nativeDefault.space.PX_8 };
let items = [{ rotate: "90deg" }];
size1.transform = items;
obj11.icon = size1;
let closure_17 = createStyles.createStyles(obj11);
createStyles = fn(4640);
const obj14 = { card: null, preface: null, container: null, content: null, totals: null, first: null, other: null, activities: null, settingsControls: null };
const obj12 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj14.card = { marginTop: nativeDefault.space.PX_16 };
const obj15 = { marginTop: nativeDefault.space.PX_16 };
obj14.preface = { display: "flex", marginBottom: nativeDefault.space.PX_12 };
const obj16 = { display: "flex", marginBottom: nativeDefault.space.PX_12 };
obj14.container = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
const obj18 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
obj14.content = { padding: nativeDefault.space.PX_16, display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
const obj19 = { padding: nativeDefault.space.PX_16, display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj14.totals = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj14.first = { width: "100%" };
obj14.other = { width: "48.5%" };
const obj20 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj14.activities = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
const obj21 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj14.settingsControls = { marginTop: nativeDefault.space.PX_24 };
let closure_19 = createStyles.createStyles(obj14);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityCard.tsx");

export default function FamilyCenterActivityCard() {
  const tmp = closure_19();
  _require = tmp;
  const selectedTeenUser = require("useSelectedTeenUser").useSelectedTeenUser();
  require("useFamilyCenterActivities");
  if (undefined === selectedTeenUser) {
    return null;
  } else {
    const sortedActivityTypeConfigs = tmp2(7706).getSortedActivityTypeConfigs();
    const obj2 = { style: tmp.card, children: null };
    const obj3 = { style: tmp.preface, children: closure_8(FamilyCenterActivityCardPrefaceText, {}) };
    const items = [closure_8(View, obj3), , ];
    const obj4 = { style: tmp.container, children: null };
    const items1 = [closure_8(FamilyCenterActivityCardHeader, {}), ];
    const obj5 = { style: tmp.content, children: null };
    const obj6 = { style: tmp.totals, children: null };
    const found = sortedActivityTypeConfigs.filter((item) => {
      [tmp] = item;
      return tmp !== constants.GIFTS;
    });
    obj6.children = found.map((item, index) => {
      [tmp, ] = item;
      if (0 === index) {
        let other = closure_0.first;
      } else {
        other = closure_0.other;
      }
      return React6(View, { style: other, children: React6(FamilyCenterActivityTotalDefault, { displayType: tmp }) }, "total-" + tmp);
    });
    const items2 = [closure_8(View, obj6), closure_8(FamilyCenterTopActivityDefault, {}), ];
    let tmp11Result = null;
    if (tmp6) {
      const obj7 = {
        style: tmp.activities,
        children: sortedActivityTypeConfigs.map((item) => {
              [tmp, ] = item;
              return closure_1_8(FamilyCenterActivitySectionDefault, { displayType }, "section-" + displayType);
            })
      };
      tmp11Result = closure_8(View, obj7);
    }
    items2[2] = tmp11Result;
    obj5.children = items2;
    items1[1] = closure_9(View, obj5);
    obj4.children = items1;
    items[1] = closure_9(View, obj4);
    const obj8 = { style: tmp.settingsControls, children: closure_8(FamilyCenterSettingsControlsDefault, {}) };
    items[2] = closure_8(View, obj8);
    obj2.children = items;
    return closure_9(View, obj2);
  }
  const obj = require("useSelectedTeenUser");
  tmp2 = _require;
};
export const FamilyCenterActivityCardAccount = memoResult;
export { FamilyCenterActivityCardHeader };
export { FamilyCenterActivityCardAccountSelect };
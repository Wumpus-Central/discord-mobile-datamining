// === Module 14889: FamilyCenterActivityCard ===

// Module 14889 (FamilyCenterActivityCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef2396 from "module_2396" /* 2396 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7593 */;
import useUserLinks from "useUserLinks" /* 8645 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8646 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11919 */;
import _modDef12769 from "module_12769" /* 12769 */;
import _modDef14890 from "module_14890" /* 14890 */;
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader" /* 14892 */;
import useSelectedTeenUser from "useSelectedTeenUser" /* 14893 */;
import FamilyCenterActivityTotalDefault from "FamilyCenterActivityTotal" /* 14895 */;
import FamilyCenterTopActivityDefault from "FamilyCenterTopActivity" /* 14896 */;
import FamilyCenterActivitySectionDefault from "FamilyCenterActivitySection" /* 14899 */;
import FamilyCenterSettingsControlsDefault from "FamilyCenterSettingsControls" /* 14906 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterActivityCardPrefaceText() {
  const tmp = closure_11();
  const tmp4 = useIsInAdultAgeGroupDefault();
  let obj = useUserLinks;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  let obj1 = FamilyCenterUtils;
  const activityWindowTimestampFormatter = obj1.getActivityWindowTimestampFormatter(tmp4);
  let obj2 = useUserLinks;
  const activityWindowTimeStamp = obj2.useActivityWindowTimeStamp(activityWindowTimestampFormatter);
  let obj3 = useAgeSpecificText;
  const intl = util.intl;
  obj = { activeLinks: activeLinkUserIds.length };
  const intl2 = util.intl;
  const ageSpecificText = obj3.useAgeSpecificText(intl.formatToPlainString(_modDef2396.tazvHQ, obj), intl2.string(_modDef2396.KrLnkE));
  obj = { style: tmp.container, children: null };
  let tmp12 = null;
  if (!tmp4) {
    obj1 = { color: tmp.icon.color, source: _modDef14890, style: tmp.icon };
    tmp12 = React6(native.Icon, obj1);
  }
  const items = [tmp12, , ];
  obj2 = { style: tmp.text, variant: "text-xs/semibold", color: "text-subtle", children: null };
  let tmp15 = ageSpecificText;
  if (activeLinkUserIds.length > 1) {
    tmp15 = ageSpecificText;
    if (tmp4) {
      tmp15 = activityWindowTimeStamp;
    }
  }
  obj2.children = tmp15;
  items[1] = React6(Text_Text.Text, obj2);
  obj3 = {
    onPress() {
      require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[18], paths.paths));
    },
    children: null
  };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2396.tazvHQ, obj);
  const tmp2Result = TouchableHitBoxDefault;
  obj3.children = React6(native.Icon, { color: tmp.icon.color, source: _modDef12769, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp.icon });
  items[2] = React6(tmp2Result, obj3);
  obj.children = items;
  return React7(View, obj);
}
function FamilyCenterHeaderSubText() {
  const tmp2 = useIsInAdultAgeGroupDefault();
  let obj = useUserLinks;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const activityWindowTimestampFormatter = FamilyCenterUtils.getActivityWindowTimestampFormatter(tmp2);
  useUserLinks;
  if (!tmp2) {
    obj = { variant: "text-sm/medium", color: "text-muted", children: tmp6 };
    let tmp7 = React6(Text_Text.Text, obj);
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
        obj = { children: null };
        tmp5 = closure_15;
        obj1 = { user: null };
        obj1.user = selectedTeenUser;
        obj.children = jsx(closure_15, obj1);
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
    obj = closure_0(selectTeenUser[8]);
    activeLinkUsers = obj.useActiveLinkUsers();
    closure_0 = activeLinkUsers;
    obj2 = closure_0(selectTeenUser[22]);
    selectedTeenUser = obj2.useSelectedTeenUser();
    closure_1 = selectedTeenUser;
    obj3 = closure_0(selectTeenUser[23]);
    obj = {
      onSuccess() {
            return selectedTeenUser(selectTeenUser[24]).hideActionSheet(FamilyCenterTeenAccountSelect);
          },
      onError() {
            const intl = activeLinkUsers(selectTeenUser[11]).intl;
            return activeLinkUsers(selectTeenUser[25]).presentFailedToast(intl.string(selectedTeenUser(selectTeenUser[12]).Wu8BK2));
          }
    };
    selectTeenUser = obj3.useFamilyCenterActions(obj).selectTeenUser;
    items = [];
    items[0] = activeLinkUsers;
    closure_3 = closure_3.useMemo(() => activeLinkUsers.map((id) => {
      const obj = { label: null, value: null };
      const name = selectedTeenUser(4404).getName(id);
      const obj2 = selectedTeenUser(4404);
      obj.label = "" + name + " (" + selectedTeenUser(4404).getUserTag(id) + ")";
      obj.value = id.id;
      return obj;
    }), items);
    tmp6 = null;
    if (undefined !== selectedTeenUser) {
      tmp7 = jsx;
      tmp8 = View;
      obj1 = { children: null };
      tmp9 = jsxs;
      tmp10 = closure_1;
      obj2 = { style: null, accessibilityRole: "spinbutton", onPress: null, children: null };
      obj2.style = tmp.touch;
      obj2.onPress = function onPress() {
        if (undefined !== selectedTeenUser) {
          let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
          const intl = util.intl;
          obj.title = intl.string(_modDef2396.vORl9Q);
          obj.items = items;
          obj.onItemSelect = function onItemSelect(arg0) {
            let tmp = null != arg0;
            if (tmp) {
              tmp = arg0 !== id.id;
            }
            if (tmp) {
              closure_1_2(arg0);
              selectedTeenUser(selectTeenUser[28]);
              const obj = { action: SelectTeen.SelectTeen };
              obj.track(constants.FAMILY_CENTER_ACTION, obj);
            }
            setImmediate(() => {
              id(closure_1_2[24]).hideActionSheet(closure_1_10);
            });
          };
          obj.selectedItem = tmp.id;
          obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), FamilyCenterTeenAccountSelect, obj);
          const tmp5 = asyncRequireImpl(9426, dependencyMap.paths);
        }
      };
      tmp12 = closure_15;
      obj3 = { user: null, inSelector: true };
      obj3.user = selectedTeenUser;
      tmp11 = closure_1(tmp3[16]);
      items1 = [, ];
      items1[0] = jsx(closure_15, obj3);
      obj4 = { style: null, size: null, source: null };
      obj4.style = tmp.icon;
      obj4.size = tmp2(tmp3[13]).Icon.Sizes.MEDIUM;
      obj4.source = closure_1(tmp3[29]);
      items1[1] = jsx(tmp2(tmp3[13]).Icon, obj4);
      obj2.children = items1;
      obj1.children = jsxs(tmp11, obj2);
      tmp6 = jsx(View, obj1);
    }
    return tmp6;
  }
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7538);
({ FamilyCenterAction: hasOwnProperty, TeenActionDisplayType: metroRequire } = FamilyCenterConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const FamilyCenterTeenAccountSelect = "FamilyCenterTeenAccountSelect";
let createStyles = fn(4560);
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center" }, icon: null, text: null };
let size = { color: nativeDefault.colors.ICON_SUBTLE, width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj.icon = size;
obj = { marginHorizontal: nativeDefault.space.PX_4 };
obj.text = obj;
let closure_11 = createStyles.createStyles(obj);
fn(4560);
createStyles = { header: { display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md }, avatar: null, avatarContainer: null, userHeader: null, nonSelectorHeader: null };
let obj2 = { display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
createStyles.avatar = { borderRadius: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj3 = { borderRadius: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.avatarContainer = { marginRight: nativeDefault.space.PX_12, alignItems: "flex-start" };
createStyles = { display: "flex", flexDirection: "column", width: "100%", paddingRight: nativeDefault.space.PX_16 };
createStyles.userHeader = createStyles;
let obj4 = { marginRight: nativeDefault.space.PX_12, alignItems: "flex-start" };
createStyles.nonSelectorHeader = { flex: 1, paddingRight: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(createStyles);
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
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.avatarContainer, children: null };
  obj = { avatarStyle: tmp.avatar, user, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: user.avatarDecoration, size: NORMAL };
  obj.children = React6(tmp4(1178).Avatar, obj);
  const items = [React6(View, obj), ];
  const items1 = [tmp.userHeader, ];
  let nonSelectorHeader;
  if (!inSelector) {
    nonSelectorHeader = tmp.nonSelectorHeader;
  }
  const obj1 = { style: items1, children: null };
  items1[1] = nonSelectorHeader;
  const items2 = [React6(FamilyCenterUsernameHeaderDefault, { user }), React6(FamilyCenterHeaderSubText, {})];
  obj1.children = items2;
  items[1] = React7(View, obj1);
  obj.children = items;
  return React7(View, obj);
});
memoResult.displayName = "FamilyCenterActivityCardAccount";
createStyles = fn(4560);
const obj7 = { touch: null, icon: null };
const obj6 = { flex: 1, paddingRight: nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj7.touch = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
const size1 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, transform: null, marginHorizontal: nativeDefault.space.PX_8 };
let items = [{ rotate: "90deg" }];
size1.transform = items;
obj7.icon = size1;
let closure_17 = createStyles.createStyles(obj7);
fn(4560);
const obj9 = { card: null, preface: null, container: null, content: null, totals: null, first: null, other: null, activities: null, settingsControls: null };
const obj8 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj9.card = { marginTop: nativeDefault.space.PX_16 };
const obj10 = { marginTop: nativeDefault.space.PX_16 };
obj9.preface = { display: "flex", marginBottom: nativeDefault.space.PX_12 };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
obj9.container = createStyles;
const obj11 = { display: "flex", marginBottom: nativeDefault.space.PX_12 };
obj9.content = { padding: nativeDefault.space.PX_16, display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
const obj13 = { padding: nativeDefault.space.PX_16, display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj9.totals = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj9.first = { width: "100%" };
obj9.other = { width: "48.5%" };
const obj14 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj9.activities = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
createStyles = { marginTop: nativeDefault.space.PX_24 };
obj9.settingsControls = createStyles;
let closure_19 = createStyles.createStyles(obj9);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityCard.tsx");

export default function FamilyCenterActivityCard() {
  const tmp = closure_19();
  _require = tmp;
  let obj = require("useSelectedTeenUser");
  const selectedTeenUser = obj.useSelectedTeenUser();
  require("useFamilyCenterActivities");
  if (undefined === selectedTeenUser) {
    return null;
  } else {
    const sortedActivityTypeConfigs = tmp2(7593).getSortedActivityTypeConfigs();
    obj = { style: tmp.card, children: null };
    obj = { style: tmp.preface, children: closure_8(FamilyCenterActivityCardPrefaceText, {}) };
    const items = [closure_8(View, obj), , ];
    const obj1 = { style: tmp.container, children: null };
    const items1 = [closure_8(FamilyCenterActivityCardHeader, {}), ];
    const obj2 = { style: tmp.content, children: null };
    const obj3 = { style: tmp.totals, children: null };
    const found = sortedActivityTypeConfigs.filter((item) => {
      [tmp] = item;
      return tmp !== constants.GIFTS;
    });
    obj3.children = found.map((item, index) => {
      [tmp, ] = item;
      if (0 === index) {
        let other = closure_0.first;
      } else {
        other = closure_0.other;
      }
      return React6(View, { style: other, children: React6(FamilyCenterActivityTotalDefault, { displayType: tmp }) }, "total-" + tmp);
    });
    const items2 = [closure_8(View, obj3), closure_8(FamilyCenterTopActivityDefault, {}), ];
    let tmp11Result = null;
    if (tmp6) {
      const obj4 = {
        style: tmp.activities,
        children: sortedActivityTypeConfigs.map((item) => {
              [tmp, ] = item;
              return closure_1_8(FamilyCenterActivitySectionDefault, { displayType }, "section-" + displayType);
            })
      };
      tmp11Result = closure_8(View, obj4);
    }
    items2[2] = tmp11Result;
    obj2.children = items2;
    items1[1] = closure_9(View, obj2);
    obj1.children = items1;
    items[1] = closure_9(View, obj1);
    const obj5 = { style: tmp.settingsControls, children: closure_8(FamilyCenterSettingsControlsDefault, {}) };
    items[2] = closure_8(View, obj5);
    obj.children = items;
    return closure_9(View, obj);
  }
  tmp2 = _require;
};
export const FamilyCenterActivityCardAccount = memoResult;
export { FamilyCenterActivityCardHeader };
export { FamilyCenterActivityCardAccountSelect };
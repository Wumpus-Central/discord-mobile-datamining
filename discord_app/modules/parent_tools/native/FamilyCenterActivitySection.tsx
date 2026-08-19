// === Module 14256: FamilyCenterActivitySectionHeader ===

// Module 14256 (FamilyCenterActivitySectionHeader)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import getEmptyActivityFormatter from "getEmptyActivityFormatter" /* 5363 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7622 */;
import useActionsForDisplayType from "useActionsForDisplayType" /* 14251 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import items from "items" /* 5297 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function FamilyCenterActivitySectionHeader(displayType) {
  displayType = displayType.displayType;
  const tmp = callback3();
  let flag = useIsInAdultAgeGroupDefault();
  let obj = getEmptyActivityFormatter;
  const activityTypeTextConfigs = obj.getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  const actionsForDisplayType = useActionsForDisplayType.useActionsForDisplayType(displayType);
  const formattedTotalForDisplayType = useActionsForDisplayType.useFormattedTotalForDisplayType(displayType);
  if (displayType === constants.PURCHASES) {
    let length = formattedTotalForDisplayType;
    let sectionHeaderResult;
    if (value != null) {
      sectionHeaderResult = value.sectionHeader(length);
    }
    let sectionDescription;
    if (value != null) {
      sectionDescription = value.sectionDescription;
    }
    let tmp10 = null;
    if (undefined !== sectionDescription) {
      let sectionDescriptionResult;
      if (value != null) {
        if (flag == null) {
          flag = false;
        }
        sectionDescriptionResult = value.sectionDescription(flag);
      }
      tmp10 = sectionDescriptionResult;
    }
    obj = { variant: "text-sm/semibold", style: null, children: null };
    obj[1] = tmp.header;
    obj[2] = sectionHeaderResult;
    const items = [callback2(Text.Text, obj), ];
    let tmp14Result = null;
    if (null !== tmp10) {
      obj = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      obj[2] = tmp.description;
      obj[3] = tmp10;
      tmp14Result = callback2(Text.Text, obj);
    }
    obj1 = { children: null };
    items[1] = tmp14Result;
    obj1[0] = items;
    return callback(closure_6, obj1);
  }
  length = actionsForDisplayType.length;
}
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: error, TeenActionDisplayType: closure_8 } = items);
({ jsx: c9, jsxs: c10 } = jsxProd);
let createCacheKey = { marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_8 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { container: { display: "flex" }, loadMoreContainer: { display: "flex", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }, loadMore: null, loadMoreButton: null };
obj2[2] = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomRightRadius: ThemesDefault.radii.sm, borderBottomLeftRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
obj2[3] = { paddingVertical: 4 };
let closure_13 = createCacheKey.createStyles(obj2);
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivitySection.tsx");

export default function FamilyCenterActivitySection(displayType) {
  displayType = displayType.displayType;
  let loadMoreButton = callback4();
  let obj = displayType(14251);
  const actionsForDisplayType = obj.useActionsForDisplayType(displayType);
  obj1 = displayType(14251);
  const actionTotalsForDisplayType = obj1.useActionTotalsForDisplayType(displayType);
  let obj2 = displayType(11104);
  const familyCenterActions = obj2.useFamilyCenterActions({});
  const loadMore = familyCenterActions.loadMore;
  const tmp6 = callback(React.useState(closure_7), 2);
  dependencyMap = tmp6[1];
  const substr = actionsForDisplayType.slice(0, tmp6[0]);
  const items = [loadMore, displayType];
  if (0 === actionsForDisplayType.length) {
    return null;
  } else {
    const intl = tmp(1236).intl;
    obj = { pageSize: null };
    const _Math = Math;
    obj[0] = Math.min(actionTotalsForDisplayType - substr.length, closure_7);
    const formatToPlainStringResult = intl.formatToPlainString(loadMore(2335)["7dMmJY"], obj);
    obj = { style: null, children: null };
    obj[0] = loadMoreButton.container;
    obj1 = { displayType: null };
    obj1[0] = displayType;
    const items1 = [callback2(FamilyCenterActivitySectionHeader, obj1), substr.map((item, index) => callback(loadMore(14257), { action: item }, item.event_id)), ];
    if (substr.length >= actionTotalsForDisplayType) {
      items1[2] = null;
      obj[1] = items1;
      return callback(closure_6, obj);
    } else {
      obj2 = { style: null, children: null };
      obj2[0] = loadMoreButton.loadMoreContainer;
      if (familyCenterActions.isMoreLoading) {
        const obj3 = { style: null, children: null };
        obj3[0] = loadMoreButton.loadMore;
        const obj4 = { style: null, animating: true, color: "#fff", size: "small" };
        loadMoreButton = loadMoreButton.loadMoreButton;
        obj4[0] = loadMoreButton;
        obj3[1] = callback2(closure_5, obj4);
        let tmp17Result = callback2(closure_6, obj3);
      } else {
        const obj5 = { style: null, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
        obj5[0] = loadMoreButton.loadMore;
        obj5[1] = formatToPlainStringResult;
        obj5[3] = tmp7;
        const obj6 = { style: null, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
        obj6[0] = loadMoreButton.loadMoreButton;
        obj6[3] = formatToPlainStringResult;
        obj5[4] = callback2(tmp(4734).Text, obj6);
        tmp17Result = callback2(tmp(5433).PressableOpacity, obj5);
      }
      obj2[1] = tmp17Result;
      tmp17Result = callback2(closure_6, obj2);
    }
  }
};
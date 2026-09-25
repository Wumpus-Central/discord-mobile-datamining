// === Module 14411: FamilyCenterActivitySection ===

// Module 14411 (FamilyCenterActivitySection)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4825 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7007 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8098 */;
import useFamilyCenterActivities from "useFamilyCenterActivities" /* 14406 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterActivitySectionHeader(displayType) {
  displayType = displayType.displayType;
  const tmp = closure_11();
  let flag = useIsInAdultAgeGroupDefault();
  const activityTypeTextConfigs = FamilyCenterUtils.getActivityTypeTextConfigs();
  value = activityTypeTextConfigs.get(displayType);
  const actionsForDisplayType = useFamilyCenterActivities.useActionsForDisplayType(displayType);
  const formattedTotalForDisplayType = useFamilyCenterActivities.useFormattedTotalForDisplayType(displayType);
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
    const obj2 = { variant: "text-sm/semibold", style: tmp.header, children: sectionHeaderResult };
    const items = [React7(Text_Text.Text, obj2), ];
    let tmp14Result = null;
    if (null !== tmp10) {
      const obj3 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: tmp10 };
      tmp14Result = React7(Text_Text.Text, obj3);
    }
    const obj6 = { children: null };
    items[1] = tmp14Result;
    obj6.children = items;
    return closure_1_10(timestampProducer, obj6);
  }
  length = actionsForDisplayType.length;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FamilyCenterConstants = fn(6953);
({ FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: closure_7, TeenActionDisplayType: closure_8 } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let createStyles = fn(4829);
let obj2 = { header: { marginBottom: nativeDefault.space.PX_4 }, description: null };
let obj3 = { marginBottom: nativeDefault.space.PX_4 };
obj2.description = { marginBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
createStyles = fn(4829);
let obj6 = { container: { display: "flex" }, loadMoreContainer: { display: "flex", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }, loadMore: null, loadMoreButton: null };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj6.loadMore = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomRightRadius: nativeDefault.radii.sm, borderBottomLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
obj6.loadMoreButton = { paddingVertical: 4 };
let closure_13 = createStyles.createStyles(obj6);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivitySection.tsx");

export default function FamilyCenterActivitySection(displayType) {
  displayType = displayType.displayType;
  let loadMoreButton = closure_13();
  const actionsForDisplayType = displayType(14406).useActionsForDisplayType(displayType);
  const obj = displayType(14406);
  const actionTotalsForDisplayType = displayType(14406).useActionTotalsForDisplayType(displayType);
  const obj2 = displayType(14406);
  const familyCenterActions = displayType(11381).useFamilyCenterActions({});
  const loadMore = familyCenterActions.loadMore;
  const tmp6 = _slicedToArray(noop.useState(closure_7), 2);
  dependencyMap = tmp6[1];
  const substr = actionsForDisplayType.slice(0, tmp6[0]);
  const items = [loadMore, displayType];
  if (0 === actionsForDisplayType.length) {
    return null;
  } else {
    const intl = tmp(1115).intl;
    const obj4 = { pageSize: null };
    const _Math = Math;
    obj4.pageSize = Math.min(actionTotalsForDisplayType - substr.length, closure_7);
    const formatToPlainStringResult = intl.formatToPlainString(loadMore(2486)["7dMmJY"], obj4);
    const obj5 = { style: loadMoreButton.container, children: null };
    const obj6 = { displayType };
    const items1 = [closure_9(FamilyCenterActivitySectionHeader, obj6), substr.map((action) => closure_1_9(loadMore(14412), { action }, action.event_id)), ];
    if (substr.length >= actionTotalsForDisplayType) {
      items1[2] = null;
      obj5.children = items1;
      return closure_10(closure_6, obj5);
    } else {
      const obj7 = { style: loadMoreButton.loadMoreContainer, children: null };
      if (familyCenterActions.isMoreLoading) {
        const obj8 = { style: loadMoreButton.loadMore, children: null };
        const obj9 = { style: null, animating: true, color: "#fff", size: "small" };
        loadMoreButton = loadMoreButton.loadMoreButton;
        obj9.style = loadMoreButton;
        obj8.children = closure_9(closure_5, obj9);
        let tmp17Result = closure_9(closure_6, obj8);
      } else {
        const obj10 = { style: loadMoreButton.loadMore, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "button", onPress: tmp7, children: null };
        const obj11 = { style: loadMoreButton.loadMoreButton, variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
        obj10.children = closure_9(tmp(4825).Text, obj11);
        tmp17Result = closure_9(tmp(5428).PressableOpacity, obj10);
      }
      obj7.children = tmp17Result;
      closure_9(closure_6, obj7);
    }
  }
  const obj3 = displayType(11381);
};
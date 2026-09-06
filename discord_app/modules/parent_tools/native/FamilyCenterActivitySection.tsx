// === Module 14899: FamilyCenterActivitySection ===

// Module 14899 (FamilyCenterActivitySection)
import nativeDefault from "native" /* 576 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7593 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8646 */;
import useFamilyCenterActivities from "useFamilyCenterActivities" /* 14894 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterActivitySectionHeader(displayType) {
  displayType = displayType.displayType;
  const tmp = closure_11();
  let flag = useIsInAdultAgeGroupDefault();
  let obj = FamilyCenterUtils;
  const activityTypeTextConfigs = obj.getActivityTypeTextConfigs();
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
    obj = { variant: "text-sm/semibold", style: tmp.header, children: sectionHeaderResult };
    const items = [React7(tmp3(4556).Text, obj), ];
    let tmp14Result = null;
    if (null !== tmp10) {
      obj = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: tmp10 };
      tmp14Result = React7(tmp3(4556).Text, obj);
    }
    const obj1 = { children: null };
    items[1] = tmp14Result;
    obj1.children = items;
    return closure_1_10(timestampProducer, obj1);
  }
  length = actionsForDisplayType.length;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7538);
({ FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: closure_7, TeenActionDisplayType: closure_8 } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { header: null, description: null };
createStyles = { marginBottom: nativeDefault.space.PX_4 };
createStyles.header = createStyles;
createStyles.description = { marginBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj2 = { container: { display: "flex" }, loadMoreContainer: { display: "flex", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }, loadMore: null, loadMoreButton: null };
let obj1 = { marginBottom: nativeDefault.space.PX_8 };
obj2.loadMore = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomRightRadius: nativeDefault.radii.sm, borderBottomLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
obj2.loadMoreButton = { paddingVertical: 4 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivitySection.tsx");

export default function FamilyCenterActivitySection(displayType) {
  displayType = displayType.displayType;
  let loadMoreButton = closure_13();
  let obj = displayType(14894);
  const actionsForDisplayType = obj.useActionsForDisplayType(displayType);
  let obj1 = displayType(14894);
  const actionTotalsForDisplayType = obj1.useActionTotalsForDisplayType(displayType);
  let obj2 = displayType(11916);
  const familyCenterActions = obj2.useFamilyCenterActions({});
  const loadMore = familyCenterActions.loadMore;
  const tmp6 = _slicedToArray(noop.useState(closure_7), 2);
  dependencyMap = tmp6[1];
  const substr = actionsForDisplayType.slice(0, tmp6[0]);
  const items = [loadMore, displayType];
  if (0 === actionsForDisplayType.length) {
    return null;
  } else {
    const intl = tmp(1114).intl;
    obj = { pageSize: null };
    const _Math = Math;
    obj.pageSize = Math.min(actionTotalsForDisplayType - substr.length, closure_7);
    const formatToPlainStringResult = intl.formatToPlainString(loadMore(2396)["7dMmJY"], obj);
    obj = { style: loadMoreButton.container, children: null };
    obj1 = { displayType };
    const items1 = [closure_9(FamilyCenterActivitySectionHeader, obj1), substr.map((action) => closure_1_9(loadMore(14900), { action }, action.event_id)), ];
    if (substr.length >= actionTotalsForDisplayType) {
      items1[2] = null;
      obj.children = items1;
      return tmp15(tmp16, obj);
    } else {
      obj2 = { style: loadMoreButton.loadMoreContainer, children: null };
      if (familyCenterActions.isMoreLoading) {
        const obj3 = { style: loadMoreButton.loadMore, children: null };
        const obj4 = { style: null, animating: true, color: "#fff", size: "small" };
        loadMoreButton = loadMoreButton.loadMoreButton;
        obj4.style = loadMoreButton;
        obj3.children = tmp17(closure_5, obj4);
        let tmp17Result = tmp17(tmp16, obj3);
      } else {
        const obj5 = { style: loadMoreButton.loadMore, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "button", onPress: tmp7, children: null };
        const obj6 = { style: loadMoreButton.loadMoreButton, variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
        obj5.children = tmp17(tmp(4556).Text, obj6);
        tmp17Result = tmp17(tmp(5123).PressableOpacity, obj5);
      }
      obj2.children = tmp17Result;
      tmp17Result = tmp17(tmp16, obj2);
    }
    tmp15 = closure_10;
  }
};
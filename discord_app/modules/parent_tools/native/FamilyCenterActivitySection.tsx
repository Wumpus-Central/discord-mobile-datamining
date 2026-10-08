// === Module 14984: FamilyCenterActivitySection ===

// Module 14984 (FamilyCenterActivitySection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5086 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7712 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7714 */;
import useFamilyCenterActivities from "useFamilyCenterActivities" /* 14979 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7248);
({ FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: closure_7, TeenActionDisplayType: closure_8 } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let createStyles = fn(5090);
let obj2 = { header: { marginBottom: nativeDefault.space.PX_4 }, description: null };
let obj3 = { marginBottom: nativeDefault.space.PX_4 };
obj2.description = { marginBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterActivitySectionHeader(displayType) {
  const cResult = c.c(9);
  displayType = displayType.displayType;
  const tmp4 = closure_11();
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
    let tmp11 = null;
    if (undefined !== sectionDescription) {
      let sectionDescriptionResult;
      if (value != null) {
        if (flag == null) {
          flag = false;
        }
        sectionDescriptionResult = value.sectionDescription(flag);
      }
      tmp11 = sectionDescriptionResult;
    }
    if (cResult[0] === sectionHeaderResult) {
      if (cResult[1] === tmp4.header) {
        let tmp13 = cResult[2];
      }
      if (cResult[3] === tmp11) {
        if (cResult[4] === tmp4.description) {
          let tmp16 = cResult[5];
        }
        if (cResult[6] === tmp13) {
          if (cResult[7] === tmp16) {
            let tmp19 = cResult[8];
          }
          return tmp19;
        }
        const obj3 = { children: null };
        const items = [tmp13, tmp16];
        obj3.children = items;
        const tmp22 = collapsed(timestampProducer, obj3);
        cResult[6] = tmp13;
        cResult[7] = tmp16;
        cResult[8] = tmp22;
        tmp19 = tmp22;
      }
      let tmp17 = null;
      if (null !== tmp11) {
        const obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: tmp11 };
        tmp17 = options(Text_Text.Text, obj4);
      }
      cResult[3] = tmp11;
      cResult[4] = tmp4.description;
      cResult[5] = tmp17;
      tmp16 = tmp17;
    }
    const obj7 = { variant: "text-sm/semibold", style: tmp4.header, children: sectionHeaderResult };
    const tmp15 = options(Text_Text.Text, obj7);
    cResult[0] = sectionHeaderResult;
    cResult[1] = tmp4.header;
    cResult[2] = tmp15;
    tmp13 = tmp15;
  }
  length = actionsForDisplayType.length;
}) : (function FamilyCenterActivitySectionHeader(displayType) {
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
    const items = [options(Text_Text.Text, obj2), ];
    let tmp14Result = null;
    if (null !== tmp10) {
      const obj3 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: tmp10 };
      tmp14Result = options(Text_Text.Text, obj3);
    }
    const obj6 = { children: null };
    items[1] = tmp14Result;
    obj6.children = items;
    return collapsed(timestampProducer, obj6);
  }
  length = actionsForDisplayType.length;
});
createStyles = fn(5090);
let obj7 = { container: { display: "flex" }, loadMoreContainer: { display: "flex", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }, loadMore: null, loadMoreButton: null };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj7.loadMore = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomRightRadius: nativeDefault.radii.sm, borderBottomLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
obj7.loadMoreButton = { paddingVertical: 4 };
let closure_13 = createStyles.createStyles(obj7);
ReactCompilerGating = fn(558);
let obj8 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomRightRadius: nativeDefault.radii.sm, borderBottomLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, width: "60%" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivitySection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterActivitySection(displayType) {
  const cResult = displayType(576).c(36);
  displayType = displayType.displayType;
  const tmp4 = closure_13();
  const obj = displayType(576);
  const actionsForDisplayType = displayType(14979).useActionsForDisplayType(displayType);
  const obj2 = displayType(14979);
  const actionTotalsForDisplayType = displayType(14979).useActionTotalsForDisplayType(displayType);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = {};
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const obj3 = displayType(14979);
  const familyCenterActions = displayType(11555).useFamilyCenterActions(first);
  const loadMore = familyCenterActions.loadMore;
  const isMoreLoading = familyCenterActions.isMoreLoading;
  const tmpResult = displayType(11555);
  [tmp10, dependencyMap] = noop.useState(closure_7);
  if (cResult[1] === actionsForDisplayType) {
    if (cResult[2] === displayType) {
      if (cResult[3] === tmp10) {
        if (cResult[4] === loadMore) {
          if (cResult[5] === tmp4) {
            if (cResult[6] === actionTotalsForDisplayType) {
              let arr2 = cResult[8];
              let tmp12 = cResult[9];
              let tmp17 = cResult[14];
            }
            const _Symbol2 = Symbol;
            if (tmp17 !== Symbol.for("react.early_return_sentinel")) {
              return tmp17;
            } else {
              if (cResult[21] === arr2.length) {
                if (cResult[22] === tmp12) {
                  if (cResult[23] === isMoreLoading) {
                    if (cResult[24] === tmp13) {
                      if (cResult[25] === tmp4.loadMore) {
                        if (cResult[26] === tmp4.loadMoreButton) {
                          if (cResult[27] === tmp4.loadMoreContainer) {
                            if (cResult[28] === actionTotalsForDisplayType) {
                              let tmp31 = cResult[29];
                            }
                            if (cResult[30] === tmp11) {
                              if (cResult[31] === tmp14) {
                                if (cResult[32] === tmp15) {
                                  if (cResult[33] === tmp16) {
                                  }
                                }
                              }
                            }
                            const obj5 = { style: tmp14, children: null };
                            const items = [tmp15, tmp16, tmp31];
                            obj5.children = items;
                            const tmp40 = closure_10(tmp11, obj5);
                            cResult[30] = tmp11;
                            cResult[31] = tmp14;
                            cResult[32] = tmp15;
                            cResult[33] = tmp16;
                            cResult[34] = tmp31;
                            cResult[35] = tmp40;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (arr2.length >= actionTotalsForDisplayType) {
                cResult[21] = arr2.length;
                cResult[22] = tmp12;
                cResult[23] = isMoreLoading;
                cResult[24] = tmp13;
                cResult[25] = tmp4.loadMore;
                cResult[26] = tmp4.loadMoreButton;
                cResult[27] = tmp4.loadMoreContainer;
                cResult[28] = actionTotalsForDisplayType;
                cResult[29] = null;
                tmp31 = null;
              } else {
                const obj6 = { style: tmp4.loadMoreContainer, children: null };
                if (isMoreLoading) {
                  const obj7 = { style: tmp4.loadMore, children: null };
                  const obj8 = { style: tmp4.loadMoreButton, animating: true, color: "#fff", size: "small" };
                  obj7.children = closure_9(closure_5, obj8);
                  let tmp33Result = closure_9(closure_6, obj7);
                } else {
                  const obj9 = { style: tmp4.loadMore, accessibilityLabel: tmp13, accessibilityRole: "button", onPress: tmp12, children: null };
                  const obj10 = { style: tmp4.loadMoreButton, variant: "text-xs/semibold", color: "text-overlay-light", children: tmp13 };
                  obj9.children = closure_9(tmp(5086).Text, obj10);
                  tmp33Result = closure_9(tmp(6189).PressableOpacity, obj9);
                }
                obj6.children = tmp33Result;
                closure_9(closure_6, obj6);
              }
            }
          }
        }
      }
    }
  }
  const tmp9 = _slicedToArray(noop.useState(closure_7), 2);
  const substr = actionsForDisplayType.slice(0, tmp10);
  if (cResult[15] === displayType) {
    if (cResult[16] === loadMore) {
      let tmp19 = cResult[17];
    }
    if (0 === actionsForDisplayType.length) {
      cResult[1] = actionsForDisplayType;
      cResult[2] = displayType;
      cResult[3] = tmp10;
      cResult[4] = loadMore;
      cResult[5] = tmp4;
      cResult[6] = actionTotalsForDisplayType;
      cResult[7] = undefined;
      cResult[8] = substr;
      cResult[9] = tmp19;
      cResult[10] = undefined;
      cResult[11] = undefined;
      cResult[12] = undefined;
      cResult[13] = undefined;
      cResult[14] = null;
      tmp17 = null;
      tmp12 = tmp19;
      arr2 = substr;
    } else {
      const intl = tmp(1126).intl;
      const obj11 = { pageSize: null };
      const _Math = Math;
      obj11.pageSize = Math.min(actionTotalsForDisplayType - substr.length, closure_7);
      if (cResult[18] !== displayType) {
        const obj12 = { displayType };
        const tmp24 = closure_9(closure_12, obj12);
        cResult[18] = displayType;
        cResult[19] = tmp24;
      }
      const _Symbol = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            obj = { action: displayType };
            return closure_1_9(loadMore(closure_2[16]), obj, displayType.event_id);
          }
        }
        cResult[20] = U;
      } else {
        class U {
          constructor(arg0) {
            obj = { action: displayType };
            return closure_1_9(loadMore(closure_2[16]), obj, displayType.event_id);
          }
        }
      }
      const mapped = substr.map(U);
      const container = tmp4.container;
      const formatToPlainStringResult = intl.formatToPlainString(loadMore(2565)["7dMmJY"], obj11);
    }
  }
  const fn = function z() {
    dependencyMap((arg0) => arg0 + closure_1_7);
    loadMore(displayType);
  };
  cResult[15] = displayType;
  cResult[16] = loadMore;
  cResult[17] = fn;
  tmp19 = fn;
  const forResult = Symbol.for("react.early_return_sentinel");
}) : (function FamilyCenterActivitySection(displayType) {
  displayType = displayType.displayType;
  let loadMoreButton = closure_13();
  const actionsForDisplayType = displayType(14979).useActionsForDisplayType(displayType);
  const obj = displayType(14979);
  const actionTotalsForDisplayType = displayType(14979).useActionTotalsForDisplayType(displayType);
  const obj2 = displayType(14979);
  const familyCenterActions = displayType(11555).useFamilyCenterActions({});
  const loadMore = familyCenterActions.loadMore;
  const tmp6 = _slicedToArray(noop.useState(closure_7), 2);
  dependencyMap = tmp6[1];
  const substr = actionsForDisplayType.slice(0, tmp6[0]);
  const items = [loadMore, displayType];
  if (0 === actionsForDisplayType.length) {
    return null;
  } else {
    const intl = tmp(1126).intl;
    const obj4 = { pageSize: null };
    const _Math = Math;
    obj4.pageSize = Math.min(actionTotalsForDisplayType - substr.length, closure_7);
    const formatToPlainStringResult = intl.formatToPlainString(loadMore(2565)["7dMmJY"], obj4);
    const obj5 = { style: loadMoreButton.container, children: null };
    const obj6 = { displayType };
    const items1 = [closure_9(closure_12, obj6), substr.map((action) => closure_1_9(loadMore(14985), { action }, action.event_id)), ];
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
        obj10.children = closure_9(tmp(5086).Text, obj11);
        tmp17Result = closure_9(tmp(6189).PressableOpacity, obj10);
      }
      obj7.children = tmp17Result;
      closure_9(closure_6, obj7);
    }
  }
  const obj3 = displayType(11555);
});
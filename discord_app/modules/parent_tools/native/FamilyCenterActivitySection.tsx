// discord_app/modules/parent_tools/native/FamilyCenterActivitySection.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import useFamilyCenterActivities from "../hooks/useFamilyCenterActivities.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, displayType;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj5;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: metroImportDefault, TeenActionDisplayType: metroImportAll } =
  FamilyCenterConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, description: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (displayType) => {
      let items;
      const obj = react2;
      const cResult = obj.c(9);
      displayType = displayType.displayType;
      const tmp4 = closure_11();
      let flag = useIsInAdultAgeGroupDefault();
      const obj2 = FamilyCenterUtils;
      const activityTypeTextConfigs = obj2.getActivityTypeTextConfigs();
      const value = activityTypeTextConfigs.get(displayType);
      const obj5 = useFamilyCenterActivities;
      const actionsForDisplayType = obj5.useActionsForDisplayType(displayType);
      const obj6 = useFamilyCenterActivities;
      const formattedTotalForDisplayType = obj6.useFormattedTotalForDisplayType(displayType);
      if (displayType === metroImportAll.PURCHASES) {
        let length = formattedTotalForDisplayType;
        let sectionHeaderResult;
        if (value != null) {
          sectionHeaderResult = value.sectionHeader(length);
        }
        let sectionDescription1;
        if (value != null) {
          sectionDescription1 = value.sectionDescription;
        }
        let tmp11 = null;
        if (undefined !== sectionDescription1) {
          let sectionDescriptionResult;
          if (value != null) {
            const sectionDescription = value.sectionDescription;
            if (flag == null) {
              flag = false;
            }
            sectionDescriptionResult = sectionDescription(flag);
          }
          tmp11 = sectionDescriptionResult;
        }
        if (cResult[0] === sectionHeaderResult) {
          let tmp13;
          if (cResult[1] === tmp4.header) {
            tmp13 = cResult[2];
          }
          if (cResult[3] === tmp11) {
            let tmp16;
            if (cResult[4] === tmp4.description) {
              tmp16 = cResult[5];
            }
            if (cResult[6] === tmp13) {
              let tmp19;
              if (cResult[7] === tmp16) {
                tmp19 = cResult[8];
              }
              return tmp19;
            }
            const obj3 = { children: items };
            items = [tmp13, tmp16];
            const tmp22 = authStore(metroRequire, obj3);
            cResult[6] = tmp13;
            cResult[7] = tmp16;
            cResult[8] = tmp22;
            tmp19 = tmp22;
          }
          let tmp17 = null;
          if (null !== tmp11) {
            const obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: tmp11 };
            tmp17 = React4(Text_Text.Text, obj4);
          }
          cResult[3] = tmp11;
          cResult[4] = tmp4.description;
          cResult[5] = tmp17;
          tmp16 = tmp17;
        }
        const obj7 = { variant: "text-sm/semibold", style: tmp4.header, children: sectionHeaderResult };
        const tmp15 = React4(Text_Text.Text, obj7);
        cResult[0] = sectionHeaderResult;
        cResult[1] = tmp4.header;
        cResult[2] = tmp15;
        tmp13 = tmp15;
      }
      length = actionsForDisplayType.length;
    }
  : (displayType) => {
      displayType = displayType.displayType;
      const tmp = closure_11();
      let flag = useIsInAdultAgeGroupDefault();
      const obj = FamilyCenterUtils;
      const activityTypeTextConfigs = obj.getActivityTypeTextConfigs();
      const value = activityTypeTextConfigs.get(displayType);
      const obj4 = useFamilyCenterActivities;
      const actionsForDisplayType = obj4.useActionsForDisplayType(displayType);
      const obj5 = useFamilyCenterActivities;
      const formattedTotalForDisplayType = obj5.useFormattedTotalForDisplayType(displayType);
      if (displayType === metroImportAll.PURCHASES) {
        let length = formattedTotalForDisplayType;
        let sectionHeaderResult;
        if (value != null) {
          sectionHeaderResult = value.sectionHeader(length);
        }
        let sectionDescription1;
        if (value != null) {
          sectionDescription1 = value.sectionDescription;
        }
        let tmp10 = null;
        if (undefined !== sectionDescription1) {
          let sectionDescriptionResult;
          if (value != null) {
            const sectionDescription = value.sectionDescription;
            if (flag == null) {
              flag = false;
            }
            sectionDescriptionResult = sectionDescription(flag);
          }
          tmp10 = sectionDescriptionResult;
        }
        const obj2 = { variant: "text-sm/semibold", style: tmp.header, children: sectionHeaderResult };
        const items = [React4(Text_Text.Text, obj2)];
        let tmp14Result = null;
        if (null !== tmp10) {
          const obj3 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: tmp10 };
          tmp14Result = React4(Text_Text.Text, obj3);
        }
        const obj6 = { children: items };
        items[1] = tmp14Result;
        return authStore(metroRequire, obj6);
      }
      length = actionsForDisplayType.length;
    };
createStyles = createStyles_mod;
let obj4 = {
  container: { display: "flex" },
  loadMoreContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loadMore: obj5,
  loadMoreButton: { paddingVertical: 4 },
};
obj5 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderBottomRightRadius: nativeDefault.radii.sm,
  borderBottomLeftRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  width: "60%",
};
let closure_13 = createStyles.createStyles(obj4);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (displayType) => {
      let arr2;
      let first;
      let items;
      let obj10;
      let obj8;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp33Result;
      let obj = displayType(576);
      const cResult = obj.c(36);
      displayType = displayType.displayType;
      const tmp4 = closure_13();
      const obj2 = displayType(14718);
      const actionsForDisplayType = obj2.useActionsForDisplayType(displayType);
      const obj3 = displayType(14718);
      const actionTotalsForDisplayType = obj3.useActionTotalsForDisplayType(displayType);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {};
        cResult[0] = obj4;
        first = obj4;
      } else {
        first = cResult[0];
      }
      const tmpResult = displayType(11541);
      const familyCenterActions = tmpResult.useFamilyCenterActions(first);
      const loadMore = familyCenterActions.loadMore;
      const isMoreLoading = familyCenterActions.isMoreLoading;
      [tmp10, dependencyMap] = react.useState(closure_7);
      _slicedToArray(react.useState(closure_7), 2);
      if (cResult[1] === actionsForDisplayType) {
        if (cResult[2] === displayType) {
          if (cResult[3] === tmp10) {
            if (cResult[4] === loadMore) {
              if (cResult[5] === tmp4) {
                if (cResult[6] === actionTotalsForDisplayType) {
                  tmp11 = cResult[7];
                  arr2 = cResult[8];
                  tmp12 = cResult[9];
                  tmp13 = cResult[10];
                  tmp14 = cResult[11];
                  tmp15 = cResult[12];
                  tmp16 = cResult[13];
                  tmp17 = cResult[14];
                }
                const _Symbol2 = Symbol;
                if (tmp17 === Symbol.for("react.early_return_sentinel")) {
                  if (cResult[21] === arr2.length) {
                    if (cResult[22] === tmp12) {
                      if (cResult[23] === isMoreLoading) {
                        if (cResult[24] === tmp13) {
                          if (cResult[25] === tmp4.loadMore) {
                            if (cResult[26] === tmp4.loadMoreButton) {
                              if (cResult[27] === tmp4.loadMoreContainer) {
                                let tmp31;
                                if (cResult[28] === actionTotalsForDisplayType) {
                                  tmp31 = cResult[29];
                                }
                                if (cResult[30] === tmp11) {
                                  if (cResult[31] === tmp14) {
                                    if (cResult[32] === tmp15) {
                                      if (cResult[33] === tmp16) {
                                        let tmp37;
                                        if (cResult[34] === tmp31) {
                                          tmp37 = cResult[35];
                                        }
                                        tmp17 = tmp37;
                                      }
                                    }
                                  }
                                }
                                const obj5 = { style: tmp14, children: items };
                                items = [tmp15, tmp16, tmp31];
                                const tmp39 = closure_10(tmp11, obj5);
                                cResult[30] = tmp11;
                                cResult[31] = tmp14;
                                cResult[32] = tmp15;
                                cResult[33] = tmp16;
                                cResult[34] = tmp31;
                                cResult[35] = tmp39;
                                tmp37 = tmp39;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  let tmp33Result2 = null;
                  if (arr2.length < actionTotalsForDisplayType) {
                    const obj6 = { style: tmp4.loadMoreContainer, children: tmp33Result };
                    if (isMoreLoading) {
                      const obj7 = { style: tmp4.loadMore, children: closure_9(closure_5, obj8) };
                      obj8 = { style: tmp4.loadMoreButton, animating: true, color: "#fff", size: "small" };
                      tmp33Result = closure_9(closure_6, obj7);
                    } else {
                      const obj9 = {
                        style: tmp4.loadMore,
                        accessibilityLabel: tmp13,
                        accessibilityRole: "button",
                        onPress: tmp12,
                        children: closure_9(displayType(4892).Text, obj10),
                      };
                      const PressableOpacity = tmp(5916).PressableOpacity;
                      obj10 = {
                        style: tmp4.loadMoreButton,
                        variant: "text-xs/semibold",
                        color: "text-overlay-light",
                        children: tmp13,
                      };
                      tmp33Result = closure_9(PressableOpacity, obj9);
                    }
                    tmp33Result2 = closure_9(closure_6, obj6);
                  }
                  cResult[21] = arr2.length;
                  cResult[22] = tmp12;
                  cResult[23] = isMoreLoading;
                  cResult[24] = tmp13;
                  cResult[25] = tmp4.loadMore;
                  cResult[26] = tmp4.loadMoreButton;
                  cResult[27] = tmp4.loadMoreContainer;
                  cResult[28] = actionTotalsForDisplayType;
                  cResult[29] = tmp33Result2;
                  tmp31 = tmp33Result2;
                }
                return tmp17;
              }
            }
          }
        }
      }
      const forResult = Symbol.for("react.early_return_sentinel");
      const substr = actionsForDisplayType.slice(0, tmp10);
      if (cResult[15] === displayType) {
        let tmp19;
        if (cResult[16] === loadMore) {
          tmp19 = cResult[17];
        }
        let tmp20 = null;
        let mapped;
        let tmp22;
        let tmp23;
        let tmp24;
        let tmp25;
        if (0 !== actionsForDisplayType.length) {
          let tmp26;
          const intl = tmp(1126).intl;
          const formatToPlainString = intl.formatToPlainString;
          const _Math = Math;
          const obj11 = { pageSize: Math.min(actionTotalsForDisplayType - substr.length, closure_7) };
          const v7dMmJY = loadMore(2521)["7dMmJY"];
          const container = tmp4.container;
          const formatToPlainStringResult = formatToPlainString(v7dMmJY, obj11);
          if (cResult[18] !== displayType) {
            const obj12 = { displayType };
            const tmp29 = closure_9(closure_12, obj12);
            cResult[18] = displayType;
            cResult[19] = tmp29;
            tmp26 = tmp29;
          } else {
            tmp26 = cResult[19];
          }
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor(action) {
                const obj = { action };
                return closure_1_9(loadMore(dependencyMap[16]), obj, action.event_id);
              }
            }
            cResult[20] = U;
          } else {
            class U {
              constructor(action) {
                const obj = { action };
                return closure_1_9(loadMore(dependencyMap[16]), obj, action.event_id);
              }
            }
          }
          mapped = substr.map(U);
          tmp20 = forResult;
          tmp22 = tmp26;
          tmp23 = container;
          tmp24 = formatToPlainStringResult;
          tmp25 = closure_6;
        }
        cResult[1] = actionsForDisplayType;
        cResult[2] = displayType;
        cResult[3] = tmp10;
        cResult[4] = loadMore;
        cResult[5] = tmp4;
        cResult[6] = actionTotalsForDisplayType;
        cResult[7] = tmp25;
        cResult[8] = substr;
        cResult[9] = tmp19;
        cResult[10] = tmp24;
        cResult[11] = tmp23;
        cResult[12] = tmp22;
        cResult[13] = mapped;
        cResult[14] = tmp20;
        tmp17 = tmp20;
        tmp16 = mapped;
        tmp15 = tmp22;
        tmp14 = tmp23;
        tmp13 = tmp24;
        tmp11 = tmp25;
        tmp12 = tmp19;
        arr2 = substr;
      }
      const fn = function z() {
        dependencyMap((arg0) => arg0 + closure_1_7);
        loadMore(displayType);
      };
      cResult[15] = displayType;
      cResult[16] = loadMore;
      cResult[17] = fn;
      tmp19 = fn;
    }
  : (displayType) => {
      let closure_2;
      let items1;
      let obj11;
      let obj9;
      let tmp19Result;
      displayType = displayType.displayType;
      const tmp = closure_13();
      let obj = displayType(14718);
      const actionsForDisplayType = obj.useActionsForDisplayType(displayType);
      const obj2 = displayType(14718);
      const actionTotalsForDisplayType = obj2.useActionTotalsForDisplayType(displayType);
      const obj3 = displayType(11541);
      const familyCenterActions = obj3.useFamilyCenterActions({});
      const loadMore = familyCenterActions.loadMore;
      const isMoreLoading = familyCenterActions.isMoreLoading;
      const tmp7 = _slicedToArray(react.useState(closure_7), 2);
      dependencyMap = tmp7[1];
      const substr = actionsForDisplayType.slice(0, tmp7[0]);
      const items = [loadMore, displayType];
      if (0 === actionsForDisplayType.length) {
        return null;
      } else {
        const intl = tmp2(1126).intl;
        const formatToPlainString = intl.formatToPlainString;
        const _Math = Math;
        const obj4 = { pageSize: Math.min(actionTotalsForDisplayType - substr.length, closure_7) };
        const v7dMmJY = loadMore(2521)["7dMmJY"];
        const formatToPlainStringResult = formatToPlainString(v7dMmJY, obj4);
        const obj5 = { style: tmp.container, children: items1 };
        const obj6 = { displayType };
        items1 = [
          closure_9(closure_12, obj6),
          substr.map((action) => {
            const obj = { action };
            return closure_1_9(loadMore(closure_2[16]), obj, action.event_id);
          }),
        ];
        let tmp19Result2 = null;
        if (substr.length < actionTotalsForDisplayType) {
          const obj7 = { style: tmp.loadMoreContainer, children: tmp19Result };
          if (isMoreLoading) {
            const obj8 = { style: tmp.loadMore, children: closure_9(closure_5, obj9) };
            obj9 = { style: tmp.loadMoreButton, animating: true, color: "#fff", size: "small" };
            tmp19Result = closure_9(closure_6, obj8);
          } else {
            const obj10 = {
              style: tmp.loadMore,
              accessibilityLabel: formatToPlainStringResult,
              accessibilityRole: "button",
              onPress: tmp8,
              children: closure_9(displayType(4892).Text, obj11),
            };
            const PressableOpacity = tmp2(5916).PressableOpacity;
            obj11 = {
              style: tmp.loadMoreButton,
              variant: "text-xs/semibold",
              color: "text-overlay-light",
              children: formatToPlainStringResult,
            };
            tmp19Result = closure_9(PressableOpacity, obj10);
          }
          tmp19Result2 = closure_9(closure_6, obj7);
        }
        items1[2] = tmp19Result2;
        return closure_10(closure_6, obj5);
      }
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivitySection.tsx");

export default tmp6;

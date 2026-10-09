// discord_app/modules/quests/native/useQuestHomeHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import QuestsIcon from "../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  const merged = Object.assign(isVirtualCurrencyEnabled, Object.assign({ isVirtualCurrencyEnabled: 0 }));
  let balance;
  const tmp2 = closure_10();
  const tmp3 = balance;
  balance = balance(9042).useFetchVirtualCurrencyBalance().balance;
  [][0] = balance;
  let obj2 = { style: tmp2.headerRightContainer, children: null };
  if (isVirtualCurrencyEnabled) {
    let obj3 = { balance, onPress: tmp5 };
    isVirtualCurrencyEnabled = closure_8(tmp3(12729).BalanceWidgetPillButton, obj3);
  }
  let items = [isVirtualCurrencyEnabled];
  const merged1 = Object.assign(merged);
  items[1] = closure_8(FiltersButton, {});
  obj2.children = items;
  return closure_9(View, obj2);
}
function FiltersButton(setSelectedSortMethod) {
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  let tmp = selectedFilters.length > 0;
  if (!tmp) {
    tmp = selectedSortMethod !== QuestHomeSortMethods.SUGGESTED;
  }
  const colors = setSelectedFilters(selectedFilters[7]).colors;
  if (tmp) {
    let INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    let tmp3 = tmp2;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp3 = tmp2;
  }
  let str = "tertiary";
  if (tmp) {
    str = "primary";
  }
  const items = [setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const callback = selectedSortMethod.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(15194, dependencyMap.paths),
      "QuestHomeSortingFilteringBottomSheet",
      {
        onSortMethodChange: setSelectedSortMethod,
        onFiltersChange: setSelectedFilters,
        initialSortMethod: selectedSortMethod,
        initialFilters: selectedFilters,
      },
    );
  }, items);
  const obj = {
    icon: closure_8(setSelectedSortMethod(tmp3[23]).FiltersHorizontalIcon, {
      size: "sm",
      color: INTERACTIVE_TEXT_DEFAULT,
    }),
    size: "sm",
    variant: str,
    onPress: callback,
    accessibilityLabel: null,
    scaleAmountInPx: 4,
  };
  const intl = setSelectedSortMethod(tmp3[11]).intl;
  obj.accessibilityLabel = intl.string(setSelectedSortMethod(tmp3[11]).t.UdhTtk);
  return closure_8(setSelectedSortMethod(tmp3[22]).BaseIconButton, obj);
}
const View = fn(17).View;
const QuestHomeSortMethods = fn(5979).QuestHomeSortMethods;
const AnalyticEvents = fn(1085).AnalyticEvents;
let closure_7 = fn(1087).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  headerTitleContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: nativeDefault.space.PX_8,
    paddingLeft: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
  },
  headerTitle: { flexShrink: 1 },
  headerRightContainer: null,
};
let obj3 = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  marginTop: nativeDefault.space.PX_8,
  paddingLeft: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
obj2.headerRightContainer = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestHomeHeaderTitle() {
      const cResult = c.c(7);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = closure_1_8(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.JALI2K);
        cResult[1] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.headerTitle) {
        const obj2 = {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          maxFontSizeMultiplier: 2,
          lineClamp: 1,
          style: tmp4.headerTitle,
          children: tmp8,
        };
        const tmp12 = closure_1_8(Text_Text.Heading, obj2);
        cResult[2] = tmp4.headerTitle;
        cResult[3] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp4.headerTitleContainer) {
        if (cResult[5] === tmp10) {
          let tmp13 = cResult[6];
        }
        return tmp13;
      }
      const obj3 = { style: tmp4.headerTitleContainer, children: null };
      const items = [first, tmp10];
      obj3.children = items;
      const tmp14 = options(View, obj3);
      cResult[4] = tmp4.headerTitleContainer;
      cResult[5] = tmp10;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    }
  : function QuestHomeHeaderTitle() {
      const tmp = closure_10();
      const obj = { style: tmp.headerTitleContainer, children: null };
      const items = [closure_1_8(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" })];
      const obj2 = {
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        maxFontSizeMultiplier: 2,
        lineClamp: 1,
        style: tmp.headerTitle,
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t.JALI2K);
      items[1] = closure_1_8(Text_Text.Heading, obj2);
      obj.children = items;
      return options(View, obj);
    };
ReactCompilerGating = fn(558);
let obj4 = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useQuestHomeHeader(setSelectedSortMethod) {
      const cResult = setSelectedSortMethod(selectedFilters[9]).c(8);
      setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
      const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
      selectedFilters = setSelectedSortMethod.selectedFilters;
      const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
      const obj = setSelectedSortMethod(selectedFilters[9]);
      const navigation = setSelectedSortMethod(selectedFilters[24]).useNavigation();
      const obj2 = setSelectedSortMethod(selectedFilters[24]);
      const enabled = setSelectedSortMethod(selectedFilters[25]).useVirtualCurrencyMobileEnabled().enabled;
      if (cResult[0] === enabled) {
        if (cResult[1] === navigation) {
          if (cResult[2] === selectedFilters) {
            if (cResult[3] === selectedSortMethod) {
              if (cResult[4] === setSelectedFilters) {
                if (cResult[5] === setSelectedSortMethod) {
                  let tmp3 = cResult[6];
                  let tmp4 = cResult[7];
                }
                const layoutEffect = selectedSortMethod.useLayoutEffect(tmp3, tmp4);
              }
            }
          }
        }
      }
      const fn = function l() {
        navigation.setOptions({
          headerTitle() {
            return closure_1_8(closure_1_11, {});
          },
          headerRight() {
            return closure_2_8(QuestHomeHeaderRight, {
              isVirtualCurrencyEnabled,
              setSelectedSortMethod,
              setSelectedFilters,
              selectedFilters,
              selectedSortMethod,
            });
          },
        });
      };
      const items = [
        navigation,
        enabled,
        setSelectedSortMethod,
        setSelectedFilters,
        selectedFilters,
        selectedSortMethod,
      ];
      cResult[0] = enabled;
      cResult[1] = navigation;
      cResult[2] = selectedFilters;
      cResult[3] = selectedSortMethod;
      cResult[4] = setSelectedFilters;
      cResult[5] = setSelectedSortMethod;
      cResult[6] = fn;
      cResult[7] = items;
      tmp4 = items;
      tmp3 = fn;
    }
  : function useQuestHomeHeader(setSelectedSortMethod) {
      setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
      const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
      const selectedFilters = setSelectedSortMethod.selectedFilters;
      const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
      const navigation = setSelectedSortMethod(selectedFilters[24]).useNavigation();
      const obj = setSelectedSortMethod(selectedFilters[24]);
      const enabled = setSelectedSortMethod(selectedFilters[25]).useVirtualCurrencyMobileEnabled().enabled;
      const items = [
        navigation,
        enabled,
        setSelectedSortMethod,
        setSelectedFilters,
        selectedFilters,
        selectedSortMethod,
      ];
      const layoutEffect = selectedSortMethod.useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle() {
            return closure_1_8(closure_1_11, {});
          },
          headerRight() {
            return closure_2_8(QuestHomeHeaderRight, {
              isVirtualCurrencyEnabled,
              setSelectedSortMethod,
              setSelectedFilters,
              selectedFilters,
              selectedSortMethod,
            });
          },
        });
      }, items);
    };

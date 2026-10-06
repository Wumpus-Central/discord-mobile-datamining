// discord_app/modules/quests/native/useQuestHomeHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import CollectiblesShopConstants from "../../collectibles/CollectiblesShopConstants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import QuestConstants from "../QuestConstants.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import QuestsIcon from "../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let navigation;

let c9;
let metroImportAll;
let obj2;
let obj3;
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  let constants2;
  let items;
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  const merged = Object.assign(isVirtualCurrencyEnabled, Object.assign({ isVirtualCurrencyEnabled: 0 }));
  let balance;
  const tmp3 = balance;
  const tmp2 = closure_10();
  let obj = balance(8542);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  [][0] = balance;
  let obj2 = { style: tmp2.headerRightContainer, children: items };
  if (isVirtualCurrencyEnabled) {
    let obj3 = { balance, onPress: tmp5 };
    isVirtualCurrencyEnabled = closure_8(tmp3(11013).BalanceWidgetPillButton, obj3);
  }
  items = [isVirtualCurrencyEnabled];
  let obj4 = {};
  const merged1 = Object.assign(merged);
  items[1] = closure_8(FiltersButton, obj4);
  return closure_9(View, obj2);
}
function FiltersButton(setSelectedSortMethod) {
  let INTERACTIVE_TEXT_DEFAULT;
  let intl;
  let tmp3;
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  const colors = setSelectedFilters(selectedFilters[7]).colors;
  if (selectedFilters.length > 0 || selectedSortMethod !== QuestHomeSortMethods.SUGGESTED) {
    INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    tmp3 = tmp2;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp3 = tmp2;
  }
  let str = "tertiary";
  if (selectedFilters.length > 0 || selectedSortMethod !== QuestHomeSortMethods.SUGGESTED) {
    str = "primary";
  }
  const items = [setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const callback = selectedSortMethod.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      onSortMethodChange: setSelectedSortMethod,
      onFiltersChange: setSelectedFilters,
      initialSortMethod: selectedSortMethod,
      initialFilters: selectedFilters,
    };
    obj.openLazy(asyncRequire(14823, dependencyMap.paths), "QuestHomeSortingFilteringBottomSheet", obj2);
  }, items);
  let obj = {
    icon: closure_8(setSelectedSortMethod(tmp3[23]).FiltersHorizontalIcon, {
      size: "sm",
      color: INTERACTIVE_TEXT_DEFAULT,
    }),
    size: "sm",
    variant: str,
    onPress: callback,
    accessibilityLabel: intl.string(setSelectedSortMethod(tmp3[11]).t.UdhTtk),
    scaleAmountInPx: 4,
  };
  const BaseIconButton = setSelectedSortMethod(tmp3[22]).BaseIconButton;
  intl = setSelectedSortMethod(tmp3[11]).intl;
  return closure_8(BaseIconButton, obj);
}
const View = react_native.View;
const QuestHomeSortMethods = QuestConstants.QuestHomeSortMethods;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_7 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerTitleContainer: obj2, headerTitle: { flexShrink: 1 }, headerRightContainer: obj3 };
obj2 = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  marginTop: nativeDefault.space.PX_8,
  paddingLeft: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let tmp10;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(7);
      const tmp4 = closure_10();
      const headerTitleContainer = tmp4.headerTitleContainer;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = metroImportAll(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      const headerTitle = tmp4.headerTitle;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.JALI2K);
        cResult[1] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.headerTitle) {
        const obj2 = {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          maxFontSizeMultiplier: 2,
          lineClamp: 1,
          style: headerTitle,
          children: tmp8,
        };
        const tmp12 = metroImportAll(Text_Text.Heading, obj2);
        cResult[2] = tmp4.headerTitle;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp4.headerTitleContainer) {
        let tmp13;
        if (cResult[5] === tmp10) {
          tmp13 = cResult[6];
        }
        return tmp13;
      }
      const obj3 = { style: headerTitleContainer, children: items };
      items = [first, tmp10];
      const tmp14 = React4(View, obj3);
      cResult[4] = tmp4.headerTitleContainer;
      cResult[5] = tmp10;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    }
  : () => {
      let intl;
      let items;
      const tmp = closure_10();
      const obj = { style: tmp.headerTitleContainer, children: items };
      items = [metroImportAll(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" })];
      const obj2 = {
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        maxFontSizeMultiplier: 2,
        lineClamp: 1,
        style: tmp.headerTitle,
        children: intl.string(intl3.t.JALI2K),
      };
      const Heading = Text_Text.Heading;
      intl = intl3.intl;
      items[1] = metroImportAll(Heading, obj2);
      return React4(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setSelectedSortMethod) => {
      let selectedFilters;
      let obj = setSelectedSortMethod(selectedFilters[9]);
      const cResult = obj.c(8);
      setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
      const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
      selectedFilters = setSelectedSortMethod.selectedFilters;
      const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
      const obj2 = setSelectedSortMethod(selectedFilters[24]);
      navigation = obj2.useNavigation();
      const obj3 = setSelectedSortMethod(selectedFilters[25]);
      const enabled = obj3.useVirtualCurrencyMobileEnabled().enabled;
      if (cResult[0] === enabled) {
        if (cResult[1] === navigation) {
          if (cResult[2] === selectedFilters) {
            if (cResult[3] === selectedSortMethod) {
              if (cResult[4] === setSelectedFilters) {
                let tmp3;
                let tmp4;
                if (cResult[5] === setSelectedSortMethod) {
                  tmp3 = cResult[6];
                  tmp4 = cResult[7];
                }
                const layoutEffect = selectedSortMethod.useLayoutEffect(tmp3, tmp4);
              }
            }
          }
        }
      }
      const fn = function l() {
        let isVirtualCurrencyEnabled;
        let obj = {
          headerTitle() {
            return closure_1_8(closure_1_11, {});
          },
          headerRight() {
            const obj = {
              isVirtualCurrencyEnabled,
              setSelectedSortMethod,
              setSelectedFilters,
              selectedFilters,
              selectedSortMethod,
            };
            return closure_2_8(QuestHomeHeaderRight, obj);
          },
        };
        navigation.setOptions(obj);
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
  : (setSelectedSortMethod) => {
      setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
      const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
      const selectedFilters = setSelectedSortMethod.selectedFilters;
      const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
      let obj = setSelectedSortMethod(selectedFilters[24]);
      navigation = obj.useNavigation();
      const obj2 = setSelectedSortMethod(selectedFilters[25]);
      const enabled = obj2.useVirtualCurrencyMobileEnabled().enabled;
      const items = [
        navigation,
        enabled,
        setSelectedSortMethod,
        setSelectedFilters,
        selectedFilters,
        selectedSortMethod,
      ];
      const layoutEffect = selectedSortMethod.useLayoutEffect(() => {
        let isVirtualCurrencyEnabled;
        let obj = {
          headerTitle() {
            return closure_1_8(closure_1_11, {});
          },
          headerRight() {
            const obj = {
              isVirtualCurrencyEnabled,
              setSelectedSortMethod,
              setSelectedFilters,
              selectedFilters,
              selectedSortMethod,
            };
            return closure_2_8(QuestHomeHeaderRight, obj);
          },
        };
        navigation.setOptions(obj);
      }, items);
    };
let result = size.fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

export default tmp4;

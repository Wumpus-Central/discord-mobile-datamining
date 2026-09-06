// discord_app/modules/quests/native/useQuestHomeHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import QuestsIcon from "../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function QuestHomeHeaderTitle() {
  const tmp = closure_10();
  let obj = { style: tmp.headerTitleContainer, children: null };
  const items = [React6(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" })];
  obj = {
    variant: "redesign/heading-18/bold",
    color: "mobile-text-heading-primary",
    maxFontSizeMultiplier: 2,
    lineClamp: 1,
    style: tmp.headerTitle,
    children: null,
  };
  const intl = util.intl;
  obj.children = intl.string(util.t.JALI2K);
  items[1] = React6(Text_Text.Heading, obj);
  obj.children = items;
  return React7(View, obj);
}
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  const merged = Object.assign(isVirtualCurrencyEnabled, Object.assign({ isVirtualCurrencyEnabled: 0 }));
  let balance;
  let obj = balance(8851);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  [][0] = balance;
  obj = { style: closure_10().headerRightContainer, children: null };
  if (isVirtualCurrencyEnabled) {
    obj = { balance, onPress: tmp5 };
    isVirtualCurrencyEnabled = closure_8(balance(11090).BalanceWidgetPillButton, obj);
  }
  let items = [isVirtualCurrencyEnabled];
  const merged1 = Object.assign(merged);
  items[1] = closure_8(FiltersButton, {});
  obj.children = items;
  return closure_9(View, obj);
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
    const obj = {
      onSortMethodChange: setSelectedSortMethod,
      onFiltersChange: setSelectedFilters,
      initialSortMethod: selectedSortMethod,
      initialFilters: selectedFilters,
    };
    obj.openLazy(asyncRequireImpl(14998, dependencyMap.paths), "QuestHomeSortingFilteringBottomSheet", obj);
  }, items);
  let obj = {
    icon: closure_8(setSelectedSortMethod(tmp3[21]).FiltersHorizontalIcon, {
      size: "sm",
      color: INTERACTIVE_TEXT_DEFAULT,
    }),
    size: "sm",
    variant: str,
    onPress: callback,
    accessibilityLabel: null,
    scaleAmountInPx: 4,
  };
  const intl = setSelectedSortMethod(tmp3[10]).intl;
  obj.accessibilityLabel = intl.string(setSelectedSortMethod(tmp3[10]).t.UdhTtk);
  return closure_8(setSelectedSortMethod(tmp3[20]).BaseIconButton, obj);
}
const View = fn(17).View;
const QuestHomeSortMethods = fn(5444).QuestHomeSortMethods;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_7 = fn(1076).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { headerTitleContainer: null, headerTitle: null, headerRightContainer: null };
createStyles = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  marginTop: nativeDefault.space.PX_8,
  paddingLeft: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
createStyles.headerTitleContainer = createStyles;
createStyles.headerTitle = { flexShrink: 1 };
createStyles.headerRightContainer = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

export default function useQuestHomeHeader(setSelectedSortMethod) {
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  const navigation = setSelectedSortMethod(selectedFilters[22]).useNavigation();
  const obj = setSelectedSortMethod(selectedFilters[22]);
  const enabled = setSelectedSortMethod(selectedFilters[23]).useVirtualCurrencyMobileEnabled().enabled;
  const items = [navigation, enabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
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
}

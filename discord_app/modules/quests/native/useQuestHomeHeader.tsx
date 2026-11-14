// === Module 17525: useQuestHomeHeader ===

// Module 17525 (useQuestHomeHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Text_Text from "Text/Text" /* 5929 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import QuestsIcon from "QuestsIcon" /* 10562 */;
import noop from "module_19" /* 19 */;

require = fn;
function QuestHomeHeaderTitle() {
  const tmp = closure_11();
  const obj = { style: tmp.headerTitleContainer, children: null };
  items = [React6(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" }), ];
  const obj2 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.JALI2K);
  items[1] = React6(Text_Text.Heading, obj2);
  obj.children = items;
  return refs(View, obj);
}
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  const merged = Object.assign(isVirtualCurrencyEnabled, Object.assign({ isVirtualCurrencyEnabled: 0 }));
  let balance;
  const tmp2 = closure_11();
  const tmp3 = balance;
  balance = balance(10038).useFetchVirtualCurrencyBalance().balance;
  let obj = balance(10038);
  const orbBalanceEntrypoint = balance(17526).useOrbBalanceEntrypoint({ location: "MobileQuestHomeHeader" });
  const openBalanceWidgetActionSheet = orbBalanceEntrypoint.openBalanceWidgetActionSheet;
  items = [balance, openBalanceWidgetActionSheet];
  let obj3 = { style: tmp2.headerRightContainer, children: null };
  if (isVirtualCurrencyEnabled) {
    const obj4 = { balance, onPress: tmp6, showNotificationBadge: orbBalanceEntrypoint.hasUnreadUpdate };
    isVirtualCurrencyEnabled = closure_9(tmp3(10043).BalanceWidgetPillButton, obj4);
  }
  const items1 = [isVirtualCurrencyEnabled, ];
  const merged1 = Object.assign(merged);
  items1[1] = closure_9(FiltersButton, {});
  obj3.children = items1;
  return closure_10(View, obj3);
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
  colors = setSelectedFilters(selectedFilters[7]).colors;
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
  items = [setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const callback = selectedSortMethod.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17540, dependencyMap.paths), "QuestHomeSortingFilteringBottomSheet", { onSortMethodChange: setSelectedSortMethod, onFiltersChange: setSelectedFilters, initialSortMethod: selectedSortMethod, initialFilters: selectedFilters });
  }, items);
  const obj = { icon: closure_9(setSelectedSortMethod(tmp3[21]).FiltersHorizontalIcon, { size: "sm", color: INTERACTIVE_TEXT_DEFAULT }), size: "sm", variant: str, onPress: callback, accessibilityLabel: null, scaleAmountInPx: 4 };
  const intl = setSelectedSortMethod(tmp3[10]).intl;
  obj.accessibilityLabel = intl.string(setSelectedSortMethod(tmp3[10]).t.UdhTtk);
  return closure_9(setSelectedSortMethod(tmp3[20]).BaseIconButton, obj);
}
const View = fn(17).View;
const QuestHomeSortMethods = fn(5338).QuestHomeSortMethods;
const Constants = fn(1072);
({ AnalyticEvents: closure_6, AnalyticsPages: metroImportDefault } = Constants);
let closure_8 = fn(1074).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { headerTitleContainer: { width: "100%", flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, headerTitle: { flexShrink: 1 }, headerRightContainer: null };
let obj3 = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.headerRightContainer = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
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
  items = [navigation, enabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const layoutEffect = selectedSortMethod.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return closure_1_9(closure_1_12, {});
      },
      headerRight() {
        return closure_2_9(QuestHomeHeaderRight, { isVirtualCurrencyEnabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod });
      }
    });
  }, items);
};
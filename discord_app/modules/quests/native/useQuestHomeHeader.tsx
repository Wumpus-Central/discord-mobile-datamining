// === Module 14452: QuestHomeHeaderTitle ===

// Module 14452 (QuestHomeHeaderTitle)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4376 */;
import QuestsIcon from "QuestsIcon" /* 14449 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { QuestHomeSortMethods } from "QuestsExperimentLocations" /* 5268 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { CollectiblesMobileShopScreen as closure_7 } from "items" /* 678 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function QuestHomeHeaderTitle() {
  const tmp = callback3();
  let obj = { style: tmp.headerTitleContainer, children: null };
  const items = [callback(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" }), ];
  obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: null };
  const intl = getSystemLocale.intl;
  obj[5] = intl.string(getSystemLocale.t.JALI2K);
  items[1] = callback(Text.Heading, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  const merged = Object.assign(isVirtualCurrencyEnabled, Object.create(null));
  let balance;
  let obj = balance(9569);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  [][0] = balance;
  obj = { style: callback3().headerRightContainer, children: null };
  if (isVirtualCurrencyEnabled) {
    obj = { balance: null, onPress: null };
    obj[0] = balance;
    obj[1] = tmp5;
    isVirtualCurrencyEnabled = callback(balance(10293).BalanceWidgetPillButton, obj);
  }
  let items = [isVirtualCurrencyEnabled, ];
  const merged1 = Object.assign(merged);
  items[1] = callback(FiltersButton, {});
  obj[1] = items;
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
    let obj = setSelectedFilters(selectedFilters[12]);
    obj = { onSortMethodChange: setSelectedSortMethod, onFiltersChange: setSelectedFilters, initialSortMethod: selectedSortMethod, initialFilters: selectedFilters };
    obj.openLazy(setSelectedSortMethod(selectedFilters[14])(selectedFilters[19], selectedFilters.paths), "QuestHomeSortingFilteringBottomSheet", obj);
  }, items);
  let obj = { icon: callback(setSelectedSortMethod(tmp3[21]).FiltersHorizontalIcon, { size: "sm", color: INTERACTIVE_TEXT_DEFAULT }), size: "sm", variant: str, onPress: callback, accessibilityLabel: null, scaleAmountInPx: 4 };
  const intl = setSelectedSortMethod(tmp3[10]).intl;
  obj[4] = intl.string(setSelectedSortMethod(tmp3[10]).t.UdhTtk);
  return callback(setSelectedSortMethod(tmp3[20]).BaseIconButton, obj);
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { headerTitleContainer: null, headerTitle: null, headerRightContainer: null };
createCacheKey = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: ThemesDefault.space.PX_8, paddingLeft: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

export default function useQuestHomeHeader(setSelectedSortMethod) {
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  let navigation;
  let enabled;
  navigation = setSelectedSortMethod(selectedFilters[22]).useNavigation();
  const obj = setSelectedSortMethod(selectedFilters[22]);
  enabled = setSelectedSortMethod(selectedFilters[23]).useVirtualCurrencyMobileEnabled().enabled;
  const items = [navigation, enabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const layoutEffect = selectedSortMethod.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return callback(closure_11, {});
      },
      headerRight() {
        return closure_1_8(closure_1_12, { isVirtualCurrencyEnabled: closure_5, setSelectedSortMethod: closure_0, setSelectedFilters: closure_1, selectedFilters: closure_2, selectedSortMethod: closure_3 });
      }
    });
  }, items);
};
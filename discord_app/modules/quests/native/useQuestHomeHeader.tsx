// discord_app/modules/quests/native/useQuestHomeHeader.tsx
import FilterFooter from "FilterFooter";
import { View } from "openCollectiblesShop";
import { QuestHomeSortMethods } from "QuestsExperimentLocations";
import { AnalyticEvents } from "ME";
import { CollectiblesMobileShopScreen as closure_7 } from "items";
import jsxProd from "FiltersHorizontalIcon";
import createCacheKey from "createCacheKey";
import { QuestsIcon } from "../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c9;
let metroImportAll;
const require = arg1;
function QuestHomeHeaderTitle() {
  const tmp = createCacheKey();
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
  let obj = balance(9341);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  [][0] = balance;
  obj = { style: createCacheKey().headerRightContainer, children: null };
  if (isVirtualCurrencyEnabled) {
    obj = { balance: null, onPress: null };
    obj[0] = balance;
    obj[1] = tmp5;
    isVirtualCurrencyEnabled = callback(balance(10054).BalanceWidgetPillButton, obj);
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
  let obj = { icon: null, size: "sm", variant: null, onPress: null, accessibilityLabel: null, scaleAmountInPx: 4 };
  obj[0] = callback(setSelectedSortMethod(tmp3[21]).FiltersHorizontalIcon, { size: "sm", color: INTERACTIVE_TEXT_DEFAULT });
  obj[2] = str;
  obj[3] = callback;
  const intl = setSelectedSortMethod(tmp3[10]).intl;
  obj[4] = intl.string(setSelectedSortMethod(tmp3[10]).t.UdhTtk);
  return callback(setSelectedSortMethod(tmp3[20]).BaseIconButton, obj);
}
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { headerTitleContainer: null, headerTitle: null, headerRightContainer: null };
createCacheKey = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: require("Themes").space.PX_8, paddingLeft: require("Themes").space.PX_8, gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8 };
let result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

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
        return outer1_8(outer1_12, { isVirtualCurrencyEnabled: closure_5, setSelectedSortMethod: closure_0, setSelectedFilters: closure_1, selectedFilters: closure_2, selectedSortMethod: FilterFooter });
      }
    });
  }, items);
};
// discord_app/modules/quests/native/useQuestHomeHeader.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import QuestsIcon from "../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { QuestHomeSortMethods } from "../QuestConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { CollectiblesMobileShopScreen as closure_7 } from "../../collectibles/CollectiblesShopConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function QuestHomeHeaderTitle() {
  const tmp = callback3();
  const items = [callback(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" }), ];
  const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: null };
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
  let obj = balance(9253);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  [][0] = balance;
  obj = { style: callback3().headerRightContainer, children: null };
  if (isVirtualCurrencyEnabled) {
    obj = { balance: null, onPress: null };
    obj[0] = balance;
    obj[1] = tmp5;
    isVirtualCurrencyEnabled = callback(balance(10399).BalanceWidgetPillButton, obj);
  }
  let items = [isVirtualCurrencyEnabled, ];
  const merged1 = Object.assign(merged);
  items[1] = callback(FiltersButton, {});
  obj[1] = items;
  return callback(View, obj);
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
    setSelectedFilters(selectedFilters[12]);
    const obj = { onSortMethodChange: setSelectedSortMethod, onFiltersChange: setSelectedFilters, initialSortMethod: selectedSortMethod, initialFilters: selectedFilters };
    obj.openLazy(setSelectedSortMethod(selectedFilters[14])(selectedFilters[19], selectedFilters.paths), "QuestHomeSortingFilteringBottomSheet", obj);
  }, items);
  let obj = { icon: callback(setSelectedSortMethod(tmp3[21]).FiltersHorizontalIcon, { size: "sm", color: INTERACTIVE_TEXT_DEFAULT }), size: "sm", variant: str, onPress: callback, accessibilityLabel: null, scaleAmountInPx: 4 };
  const intl = setSelectedSortMethod(tmp3[10]).intl;
  obj[4] = intl.string(setSelectedSortMethod(tmp3[10]).t.UdhTtk);
  return callback(setSelectedSortMethod(tmp3[20]).BaseIconButton, obj);
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: ThemesDefault.space.PX_8, paddingLeft: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

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
        return callback(closure_11, {});
      },
      headerRight() {
        return closure_1_8(closure_1_12, { isVirtualCurrencyEnabled: closure_5, setSelectedSortMethod: closure_0, setSelectedFilters: closure_1, selectedFilters: closure_2, selectedSortMethod: closure_3 });
      }
    });
  }, items);
};
// === Module 17009: PriceOptionRow ===

// Module 17009 (PriceOptionRow)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useCheckboxA11yNative from "useCheckboxA11yNative" /* 4105 */;
import Text from "Text" /* 4734 */;
import formatSingleCurrencyPrice from "formatSingleCurrencyPrice" /* 5316 */;
import preloadDefault from "preload" /* 5449 */;
import renderDefault from "render" /* 8910 */;
import getBenefitKey from "getBenefitKey" /* 14577 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { SubscriptionIntervalTypes } from "GuildFeatures" /* 1924 */;
import { CurrencyCodes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function PriceOptionRow(selected) {
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = callback4();
  let obj = useCheckboxA11yNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.rowContainer, ];
  let containerSelected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  items[1] = containerSelected;
  obj = { style: tmp.rowStatusIcon, source: null };
  const tmp7 = renderDefault;
  obj[1] = importDefault(selected ? 16913 : 15819);
  const items1 = [callback(preloadDefault, obj), ];
  obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  const obj2 = { price: null, interval: null };
  let tmp2Result = formatSingleCurrencyPrice;
  obj2[0] = tmp2Result.formatPrice(price, CurrencyCodes.USD);
  tmp2Result = getBenefitKey;
  obj2[1] = tmp2Result.formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj1[2] = intl.format(getSystemLocale.t.CgmBaG, obj2);
  items1[1] = callback(Text.Text, obj1);
  obj[4] = items1;
  return callback2(tmp7, obj);
}
({ TouchableOpacity: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: ThemesDefault.radii.md, borderTopRightRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[3] = { height: 20, width: 20, marginRight: 12 };
createCacheKey[4] = { borderRadius: ThemesDefault.radii.xs };
createCacheKey[5] = { alignSelf: "center" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  let callback;
  let React;
  const tmp = callback4();
  [c3, c4] = callback(React.useState(0), 2);
  let obj = { contentContainerStyle: { paddingBottom: importDefault(newPricesToPick[17])().bottom }, children: null };
  obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = selectedTemplate(newPricesToPick[14]).intl;
  obj1[2] = intl.format(selectedTemplate(newPricesToPick[14]).t["5WZ9Ct"], { tierName: selectedTemplate.listings[0].name });
  let items = [callback2(selectedTemplate(newPricesToPick[13]).Text, obj1), callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 12 }), , , , , , , ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = selectedTemplate(newPricesToPick[14]).intl;
  const obj4 = { price: null };
  let obj7 = selectedTemplate(newPricesToPick[15]);
  obj4[0] = obj7.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD);
  obj3[2] = intl2.format(selectedTemplate(newPricesToPick[14]).t["5i7Uhb"], obj4);
  items[2] = callback2(selectedTemplate(newPricesToPick[13]).Text, obj3);
  items[3] = callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  items[4] = newPricesToPick.map((item, index) => {
    closure_0 = index;
    return closure_1_9(PriceOptionRow, {
      price: item,
      selected: index === c3,
      onPress() {
        return closure_1_4(closure_0);
      }
    }, item);
  });
  items[5] = callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 36 });
  items[6] = callback2(selectedTemplate(newPricesToPick[21]).BaseTextButton, {
    text: "Confirm New Price",
    pillStyle: tmp.confirmButton,
    onPress() {
      const merged = Object.assign(selectedTemplate);
      const obj = {};
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      obj.price_tier = newPricesToPick[c3];
      const items = [obj];
      obj.listings = items;
      callback(obj, true);
    },
    grow: true
  });
  items[7] = callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  const obj6 = {
    onPress() {
      return callback(newPricesToPick[22]).hideActionSheet();
    },
    style: tmp.backToTemplates,
    activeOpacity: 0.5,
    children: null
  };
  obj7 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
  const intl3 = selectedTemplate(newPricesToPick[14]).intl;
  obj7[2] = intl3.string(selectedTemplate(newPricesToPick[14]).t.h26VOI);
  obj6[3] = callback2(selectedTemplate(newPricesToPick[13]).Text, obj7);
  items[8] = callback2(closure_5, obj6);
  obj[1] = items;
  obj[1] = callback3(selectedTemplate(newPricesToPick[19]).BottomSheetScrollView, obj);
  obj[2] = callback2(closure_6, obj);
  return callback2(selectedTemplate(newPricesToPick[18]).BottomSheet, obj);
};
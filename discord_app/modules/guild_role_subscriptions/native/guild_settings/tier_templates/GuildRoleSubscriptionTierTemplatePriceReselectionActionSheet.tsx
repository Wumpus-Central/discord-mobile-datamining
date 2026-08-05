// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import BottomSheetModal from "BottomSheetModal";
import get_ActivityIndicator from "useSafeAreaInsets";
import { SubscriptionIntervalTypes } from "GuildFeatures";
import { CurrencyCodes } from "sum";
import jsxProd from "CollapsingText";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
function PriceOptionRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  let onPress;
  let price;
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = createCacheKey();
  let obj = require(4003) /* useCheckboxA11yNative */;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.rowContainer, ];
  let containerSelected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  obj = { style: items, accessibilityRole, accessibilityState, onPress, children: null };
  items[1] = containerSelected;
  obj = { style: tmp.rowStatusIcon, source: null };
  const tmp5 = closure_10;
  const tmp7 = importDefault(8979);
  obj[1] = importDefault(selected ? 16652 : 15552);
  const items1 = [closure_9(importDefault(5236), obj), ];
  const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl = tmp2(1236).intl;
  const obj2 = { price: null, interval: null };
  let tmp2Result = tmp2(5764);
  obj2[0] = tmp2Result.formatPrice(price, CurrencyCodes.USD);
  tmp2Result = tmp2(14367);
  obj2[1] = tmp2Result.formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj1[2] = intl.format(require(1236) /* getSystemLocale */.t.CgmBaG, obj2);
  items1[1] = closure_9(require(4281) /* Text */.Text, obj1);
  obj[4] = items1;
  return tmp5(tmp7, obj);
}
({ TouchableOpacity: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, rowContainer: null, containerSelected: null, rowStatusIcon: null, confirmButton: null, backToTemplates: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: require("Themes").radii.md, borderTopRightRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: require("Themes").colors.BORDER_MUTED };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: require("Themes").colors.BORDER_MUTED };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[3] = { height: 20, width: 20, marginRight: 12 };
let obj2 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[4] = { borderRadius: require("Themes").radii.xs };
createCacheKey[5] = { alignSelf: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { borderRadius: require("Themes").radii.xs };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  let c3;
  let c4;
  let importDefault;
  let newPricesToPick;
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  let callback;
  let React;
  const tmp = createCacheKey();
  [c3, c4] = callback(React.useState(0), 2);
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: importDefault(newPricesToPick[17])().bottom }, children: null };
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
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
  items[4] = newPricesToPick.map((price) => {
    let closure_0 = arg1;
    return outer1_9(outer1_12, {
      price,
      selected: arg1 === c3,
      onPress() {
        return outer1_4(closure_0);
      }
    }, price);
  });
  items[5] = callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 36 });
  items[6] = callback2(selectedTemplate(newPricesToPick[21]).BaseTextButton, {
    text: "Confirm New Price",
    pillStyle: tmp.confirmButton,
    onPress() {
      let obj = {};
      const merged = Object.assign(selectedTemplate);
      obj = {};
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
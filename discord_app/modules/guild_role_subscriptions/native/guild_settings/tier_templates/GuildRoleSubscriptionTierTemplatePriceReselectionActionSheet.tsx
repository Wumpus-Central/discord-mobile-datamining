// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const CurrencyCodes = fn(1083).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    padding: 24,
    borderTopLeftRadius: nativeDefault.radii.md,
    borderTopRightRadius: nativeDefault.radii.md,
  },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx",
);

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  value = undefined;
  const tmp2 = value(noop.useState(0), 2);
  value = tmp2[0];
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: null };
  let obj2 = { style: closure_9().container, children: null };
  const obj3 = { contentContainerStyle: { paddingBottom: require("useSafeAreaInsets")().bottom }, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = selectedTemplate(newPricesToPick[11]).intl;
  obj4.children = intl.format(selectedTemplate(newPricesToPick[11]).t["5WZ9Ct"], {
    tierName: selectedTemplate.listings[0].name,
  });
  let items = [
    closure_7(selectedTemplate(newPricesToPick[10]).Text, obj4),
    closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 12 }),
    ,
    ,
    ,
    ,
  ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = selectedTemplate(newPricesToPick[11]).intl;
  const obj7 = { price: null };
  const obj5 = { tierName: selectedTemplate.listings[0].name };
  const tmp = closure_9();
  obj7.price = selectedTemplate(newPricesToPick[13]).formatPrice(
    selectedTemplate.listings[0].price_tier,
    CurrencyCodes.USD,
  );
  obj6.children = intl2.format(selectedTemplate(newPricesToPick[11]).t["5i7Uhb"], obj7);
  items[2] = closure_7(selectedTemplate(newPricesToPick[10]).Text, obj6);
  items[3] = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 24 });
  const obj8 = selectedTemplate(newPricesToPick[13]);
  items[4] = closure_7(selectedTemplate(newPricesToPick[14]).TableRadioGroup, {
    hasIcons: false,
    value,
    onChange: tmp2[1],
    children: newPricesToPick.map((item, value) => {
      const obj = { value, label: selectedTemplate(newPricesToPick[16]).formatMonthlyPriceLabel(item) };
      return closure_1_7(selectedTemplate(newPricesToPick[15]).TableRadioRow, obj, item);
    }),
  });
  items[5] = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 20 });
  const obj10 = { children: null };
  const obj11 = { text: null, onPress: null };
  const intl3 = selectedTemplate(newPricesToPick[11]).intl;
  obj11.text = intl3.string(selectedTemplate(newPricesToPick[11]).t.DVCXzm);
  obj11.onPress = function onPress() {
    const obj = {};
    const merged = Object.assign(selectedTemplate);
    const obj2 = {};
    const merged1 = Object.assign(selectedTemplate.listings[0]);
    obj2.price_tier = newPricesToPick[first];
    const items = [obj2];
    obj.listings = items;
    importDefault(obj, true);
  };
  const items1 = [closure_7(selectedTemplate(newPricesToPick[18]).Button, obj11)];
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl4 = selectedTemplate(newPricesToPick[11]).intl;
  obj12.text = intl4.string(selectedTemplate(newPricesToPick[11]).t.h26VOI);
  obj12.onPress = function onPress() {
    return require("ActionSheetActionCreators").hideActionSheet();
  };
  items1[1] = closure_7(selectedTemplate(newPricesToPick[18]).Button, obj12);
  obj10.children = items1;
  items[6] = closure_8(selectedTemplate(newPricesToPick[17]).ButtonGroup, obj10);
  obj3.children = items;
  obj2.children = closure_8(selectedTemplate(newPricesToPick[9]).BottomSheetScrollView, obj3);
  obj.children = closure_7(View, obj2);
  return closure_7(selectedTemplate(newPricesToPick[8]).BottomSheet, obj);
}

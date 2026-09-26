// === Module 17612: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet ===

// Module 17612 (GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4548 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import PriceUtils from "PriceUtils" /* 6655 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 14778 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function PriceOptionRow(selected) {
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = closure_11();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.rowContainer, ];
  let containerSelected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  const obj2 = { style: items, accessibilityRole, accessibilityState, onPress, children: null };
  items[1] = containerSelected;
  const obj3 = { style: tmp.rowStatusIcon, source: null };
  const tmp7 = TouchableHitBoxDefault;
  obj3.source = importDefault(selected ? 17516 : 16218);
  const items1 = [React7(FastImageDefault, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl = util.intl;
  const obj5 = { price: null, interval: null };
  const tmp6Result = FastImageDefault;
  obj5.price = PriceUtils.formatPrice(price, CurrencyCodes.USD);
  const tmp2Result = PriceUtils;
  obj5.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj4.children = intl.format(util.t.CgmBaG, obj5);
  items1[1] = React7(Text_Text.Text, obj4);
  obj2.children = items1;
  return closure_1_10(tmp7, obj2);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SubscriptionIntervalTypes = fn(1374).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1085).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md }, rowContainer: null, containerSelected: null, rowStatusIcon: null, confirmButton: null, backToTemplates: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
obj2.rowContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.containerSelected = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.rowStatusIcon = { height: 20, width: 20, marginRight: 12 };
let obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.confirmButton = { borderRadius: nativeDefault.radii.xs };
obj2.backToTemplates = { alignSelf: "center" };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_11();
  [c3, c4] = noop.useState(0);
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: null };
  let obj2 = { style: tmp.container, children: null };
  const obj3 = { contentContainerStyle: { paddingBottom: require("useSafeAreaInsets")().bottom }, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = selectedTemplate(newPricesToPick[14]).intl;
  obj4.children = intl.format(selectedTemplate(newPricesToPick[14]).t["5WZ9Ct"], { tierName: selectedTemplate.listings[0].name });
  let items = [closure_9(selectedTemplate(newPricesToPick[13]).Text, obj4), closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 12 }), , , , , , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = selectedTemplate(newPricesToPick[14]).intl;
  const obj7 = { price: null };
  const obj5 = { tierName: selectedTemplate.listings[0].name };
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  obj7.price = selectedTemplate(newPricesToPick[15]).formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD);
  obj6.children = intl2.format(selectedTemplate(newPricesToPick[14]).t["5i7Uhb"], obj7);
  items[2] = closure_9(selectedTemplate(newPricesToPick[13]).Text, obj6);
  items[3] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  items[4] = newPricesToPick.map((price, index) => {
    closure_0 = index;
    return closure_1_9(PriceOptionRow, {
      price,
      selected: index === c3,
      onPress() {
        return c4(closure_0);
      }
    }, price);
  });
  items[5] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 36 });
  items[6] = closure_9(selectedTemplate(newPricesToPick[21]).BaseTextButton, {
    text: "Confirm New Price",
    pillStyle: tmp.confirmButton,
    onPress() {
      const obj = {};
      const merged = Object.assign(selectedTemplate);
      const obj2 = {};
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      obj2.price_tier = newPricesToPick[c3];
      const items = [obj2];
      obj.listings = items;
      importDefault(obj, true);
    },
    grow: true
  });
  items[7] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  const obj10 = {
    onPress() {
      return require("ActionSheetActionCreators").hideActionSheet();
    },
    style: tmp.backToTemplates,
    activeOpacity: 0.5,
    children: null
  };
  const obj11 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
  const intl3 = selectedTemplate(newPricesToPick[14]).intl;
  obj11.children = intl3.string(selectedTemplate(newPricesToPick[14]).t.h26VOI);
  obj10.children = closure_9(selectedTemplate(newPricesToPick[13]).Text, obj11);
  items[8] = closure_9(closure_5, obj10);
  obj3.children = items;
  obj2.children = closure_10(selectedTemplate(newPricesToPick[19]).BottomSheetScrollView, obj3);
  obj.children = closure_9(closure_6, obj2);
  return closure_9(selectedTemplate(newPricesToPick[18]).BottomSheet, obj);
};
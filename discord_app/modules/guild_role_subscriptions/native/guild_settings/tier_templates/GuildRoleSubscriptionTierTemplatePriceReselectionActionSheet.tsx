// === Module 17788: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet ===

// Module 17788 (GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import PriceUtils from "PriceUtils" /* 7234 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15231 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function PriceOptionRow(selected) {
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = closure_11();
  let obj = useA11yRolesNative;
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
  const tmp7 = TouchableHitBoxDefault;
  obj.source = importDefault(selected ? 17692 : 16563);
  const items1 = [React7(FastImageDefault, obj), ];
  const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl = util.intl;
  const obj2 = { price: null, interval: null };
  let tmp2Result = PriceUtils;
  obj2.price = tmp2Result.formatPrice(price, CurrencyCodes.USD);
  tmp2Result = GuildRoleSubscriptionTypeUtils;
  obj2.interval = tmp2Result.formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj1.children = intl.format(util.t.CgmBaG, obj2);
  items1[1] = React7(Text_Text.Text, obj1);
  obj.children = items1;
  return closure_1_10(tmp7, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1085).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, rowContainer: null, containerSelected: null, rowStatusIcon: null, confirmButton: null, backToTemplates: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
createStyles.container = createStyles;
createStyles.rowContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles.containerSelected = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.rowStatusIcon = { height: 20, width: 20, marginRight: 12 };
let obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.confirmButton = { borderRadius: nativeDefault.radii.xs };
createStyles.backToTemplates = { alignSelf: "center" };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_11();
  [c3, c4] = _slicedToArray(noop.useState(0), 2);
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: require("useSafeAreaInsets")().bottom }, children: null };
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = selectedTemplate(newPricesToPick[14]).intl;
  obj1.children = intl.format(selectedTemplate(newPricesToPick[14]).t["5WZ9Ct"], { tierName: selectedTemplate.listings[0].name });
  let items = [closure_9(selectedTemplate(newPricesToPick[13]).Text, obj1), closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 12 }), , , , , , , ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = selectedTemplate(newPricesToPick[14]).intl;
  const obj4 = { price: null };
  let obj7 = selectedTemplate(newPricesToPick[15]);
  obj4.price = obj7.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD);
  obj3.children = intl2.format(selectedTemplate(newPricesToPick[14]).t["5i7Uhb"], obj4);
  items[2] = closure_9(selectedTemplate(newPricesToPick[13]).Text, obj3);
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
      let obj = {};
      const merged = Object.assign(selectedTemplate);
      obj = {};
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      obj.price_tier = newPricesToPick[c3];
      const items = [obj];
      obj.listings = items;
      importDefault(obj, true);
    },
    grow: true
  });
  items[7] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  const obj6 = {
    onPress() {
      return require("ActionSheetActionCreators").hideActionSheet();
    },
    style: tmp.backToTemplates,
    activeOpacity: 0.5,
    children: null
  };
  obj7 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
  const intl3 = selectedTemplate(newPricesToPick[14]).intl;
  obj7.children = intl3.string(selectedTemplate(newPricesToPick[14]).t.h26VOI);
  obj6.children = closure_9(selectedTemplate(newPricesToPick[13]).Text, obj7);
  items[8] = closure_9(closure_5, obj6);
  obj.children = items;
  obj.children = closure_10(selectedTemplate(newPricesToPick[19]).BottomSheetScrollView, obj);
  obj.children = closure_9(closure_6, obj);
  return closure_9(selectedTemplate(newPricesToPick[18]).BottomSheet, obj);
};
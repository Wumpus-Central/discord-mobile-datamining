// === Module 16249: GuildRoleSubscriptionTierTemplateUpsellActionSheet ===

// Module 16249 (GuildRoleSubscriptionTierTemplateUpsellActionSheet)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5126 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ GuildSettingsSections: closure_7, GuildSettingsSubsections: closure_8 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const src = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
fn(4560);
let createStyles = { container: null, videoContainer: null, info: null, title: null, subtitle: null, footer: null, button: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, paddingTop: 24, justifyContent: "center" };
createStyles.container = createStyles;
createStyles.videoContainer = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles.info = { marginTop: 16, alignItems: "center" };
createStyles.title = { marginTop: 24, textAlign: "center" };
createStyles.subtitle = { marginTop: 12, textAlign: "center" };
createStyles.footer = { marginTop: 32 };
createStyles.button = { marginBottom: 8 };
let closure_13 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_13();
  [tmp3, c2] = _slicedToArray(noop.useState(0), 2);
  let obj = useIsScreenLandscape;
  _slicedToArray = obj.useIsScreenLandscape();
  let obj1 = useStateFromStores;
  const items = [AccessibilityStore];
  const items1 = [markAsDismissed];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = noop.useEffect(() => () => markAsDismissed(constants.UNKNOWN), items1);
  obj = { startExpanded: true, children: null };
  obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      if (closure_3) {
        result = diff / 2;
      }
      _undefined(result);
    },
    children: null
  };
  obj1 = { accessibilityRole: "image", accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj1.accessibilityLabel = intl.string(util.t.gCgirr);
  const size = { style: tmp.videoContainer, src, width: tmp3, height: tmp3 / 1.7289156626506024, muted: true, paused: stateFromStores, ariaHidden: true };
  obj1.children = closure_10(markAsDismissed(8307), size);
  const items2 = [closure_10(View, obj1), , ];
  const obj2 = { style: tmp.info, children: null };
  const obj3 = { variant: "heading-lg/semibold", style: tmp.title, color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.gCgirr);
  const items3 = [closure_10(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t.fLMZFw);
  items3[1] = closure_10(Text_Text.Text, obj4);
  obj2.children = items3;
  items2[1] = closure_11(View, obj2);
  const obj5 = { style: null, children: null };
  const items4 = [tmp.footer];
  obj5.style = items4;
  const obj6 = { style: tmp.button, children: null };
  const obj7 = { text: null, onPress: null };
  const intl4 = util.intl;
  obj7.text = intl4.string(util.t.BQq86h);
  obj7.onPress = function onPress() {
    GuildSettingsActionCreatorsDefault.open(require, constants.ROLE_SUBSCRIPTIONS_TIERS, undefined, constants2.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  obj6.children = closure_10(components_Button_Button.Button, obj7);
  const items5 = [closure_10(View, obj6), ];
  const obj8 = { style: tmp.button, children: null };
  const obj9 = { text: null, onPress: null, variant: "secondary" };
  const intl5 = util.intl;
  obj9.text = intl5.string(util.t.WAI6xu);
  obj9.onPress = function onPress() {
    return markAsDismissed(_undefined[17]).hideActionSheet();
  };
  obj8.children = closure_10(components_Button_Button.Button, obj9);
  items5[1] = closure_10(View, obj8);
  obj5.children = items5;
  items2[2] = closure_11(View, obj5);
  obj.children = items2;
  obj.children = closure_11(View, obj);
  return closure_10(Sheet_BottomSheet.BottomSheet, obj);
};
// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx
import useStateFromStores from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import useIsScreenLandscape from "../../../../screen/useIsScreenLandscape.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../guild_settings/GuildSettingsActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ GuildSettingsSections: closure_7, GuildSettingsSubsections: closure_8 } = Constants);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const src = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
const createStyles = fn(4836);
const obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
  },
  videoContainer: null,
  info: null,
  title: null,
  subtitle: null,
  footer: null,
  button: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: 16,
  paddingTop: 24,
  justifyContent: "center",
};
obj2.videoContainer = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.info = { marginTop: 16, alignItems: "center" };
obj2.title = { marginTop: 24, textAlign: "center" };
obj2.subtitle = { marginTop: 12, textAlign: "center" };
obj2.footer = { marginTop: 32 };
obj2.button = { marginBottom: 8 };
let closure_13 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx",
);

export default function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_13();
  [tmp3, c2] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  _slicedToArray = useIsScreenLandscape.useIsScreenLandscape();
  const items = [AccessibilityStore];
  const items1 = [markAsDismissed];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = noop.useEffect(() => () => markAsDismissed(constants.UNKNOWN), items1);
  const obj3 = { startExpanded: true, children: null };
  const obj4 = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      if (closure_3) {
        result = diff / 2;
      }
      _undefined(result);
    },
    children: null,
  };
  const obj5 = { accessibilityRole: "image", accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj5.accessibilityLabel = intl.string(util.t.gCgirr);
  const size = {
    style: tmp.videoContainer,
    src,
    width: tmp3,
    height: tmp3 / 1.7289156626506024,
    muted: true,
    paused: stateFromStores,
    ariaHidden: true,
  };
  obj5.children = closure_10(markAsDismissed(7755), size);
  const items2 = [closure_10(View, obj5), ,];
  const obj6 = { style: tmp.info, children: null };
  const obj7 = {
    variant: "heading-lg/semibold",
    style: tmp.title,
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t.gCgirr);
  const items3 = [closure_10(Text_Text.Text, obj7)];
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl3 = util.intl;
  obj8.children = intl3.string(util.t.fLMZFw);
  items3[1] = closure_10(Text_Text.Text, obj8);
  obj6.children = items3;
  items2[1] = closure_11(View, obj6);
  const obj9 = { style: null, children: null };
  const items4 = [tmp.footer];
  obj9.style = items4;
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, onPress: null };
  const intl4 = util.intl;
  obj11.text = intl4.string(util.t.BQq86h);
  obj11.onPress = function onPress() {
    GuildSettingsActionCreatorsDefault.open(
      require,
      constants.ROLE_SUBSCRIPTIONS_TIERS,
      undefined,
      constants2.ROLE_SUBSCRIPTION_TIER_TEMPLATE,
    );
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  obj10.children = closure_10(components_Button_Button.Button, obj11);
  const items5 = [closure_10(View, obj10)];
  const obj12 = { style: tmp.button, children: null };
  const obj13 = { text: null, onPress: null, variant: "secondary" };
  const intl5 = util.intl;
  obj13.text = intl5.string(util.t.WAI6xu);
  obj13.onPress = function onPress() {
    return markAsDismissed(_undefined[17]).hideActionSheet();
  };
  obj12.children = closure_10(components_Button_Button.Button, obj13);
  items5[1] = closure_10(View, obj12);
  obj9.children = items5;
  items2[2] = closure_11(View, obj9);
  obj4.children = items2;
  obj3.children = closure_11(View, obj4);
  return closure_10(Sheet_BottomSheet.BottomSheet, obj3);
}

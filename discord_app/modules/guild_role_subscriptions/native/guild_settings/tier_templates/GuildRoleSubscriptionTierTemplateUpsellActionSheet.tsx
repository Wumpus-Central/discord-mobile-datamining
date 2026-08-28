// === Module 15770: GuildRoleSubscriptionTierTemplateUpsellActionSheet ===

// Module 15770 (GuildRoleSubscriptionTierTemplateUpsellActionSheet)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4442 */;
import Button from "Button" /* 4893 */;
import getIsScreenLandscape from "getIsScreenLandscape" /* 5036 */;
import Background from "Background" /* 5587 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import ME from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
({ GuildSettingsSections: error, GuildSettingsSubsections: closure_8 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
createCacheKey = { container: null, videoContainer: null, info: null, title: null, subtitle: null, footer: null, button: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: 16, paddingTop: 24, justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[2] = { marginTop: 16, alignItems: "center" };
createCacheKey[3] = { marginTop: 24, textAlign: "center" };
createCacheKey[4] = { marginTop: 12, textAlign: "center" };
createCacheKey[5] = { marginTop: 32 };
createCacheKey[6] = { marginBottom: 8 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed } = arg0);
  dependencyMap = undefined;
  let callback;
  const tmp = callback4();
  [tmp3, c2] = callback(React.useState(0), 2);
  let obj = getIsScreenLandscape;
  callback = obj.useIsScreenLandscape();
  obj1 = defaultAreStatesEqual;
  const items = [closure_6];
  const items1 = [markAsDismissed];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => () => callback(closure_1_9.UNKNOWN), items1);
  obj = { startExpanded: true, children: null };
  obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      if (closure_3) {
        result = diff / 2;
      }
      c2(result);
    },
    children: null
  };
  obj1 = { accessibilityRole: "image", accessibilityLabel: null, children: null };
  const intl = getSystemLocale.intl;
  obj1[1] = intl.string(getSystemLocale.t.gCgirr);
  obj1[2] = callback2(markAsDismissed(8548), { style: tmp.videoContainer, src: closure_12, width: tmp3, height: tmp3 / 1.7289156626506024, muted: true, paused: stateFromStores, ariaHidden: true });
  const items2 = [callback2(View, obj1), , ];
  const obj3 = { style: tmp.info, children: null };
  const obj4 = { variant: "heading-lg/semibold", style: tmp.title, color: "mobile-text-heading-primary", children: null };
  const intl2 = getSystemLocale.intl;
  obj4[3] = intl2.string(getSystemLocale.t.gCgirr);
  const items3 = [callback2(Text.Text, obj4), ];
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl3 = getSystemLocale.intl;
  obj5[3] = intl3.string(getSystemLocale.t.fLMZFw);
  items3[1] = callback2(Text.Text, obj5);
  obj3[1] = items3;
  items2[1] = callback3(View, obj3);
  const obj6 = { style: items4, children: null };
  items4 = [tmp.footer];
  const obj7 = { style: tmp.button, children: null };
  const obj8 = { text: null, onPress: null };
  const intl4 = getSystemLocale.intl;
  obj8[0] = intl4.string(getSystemLocale.t.BQq86h);
  obj8[1] = function onPress() {
    markAsDismissed(_undefined[16]).open(closure_0, closure_1_7.ROLE_SUBSCRIPTIONS_TIERS, undefined, closure_1_8.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
    markAsDismissed(closure_1_9.UNKNOWN);
  };
  obj7[1] = callback2(Button.Button, obj8);
  const items5 = [callback2(View, obj7), ];
  const obj9 = { style: tmp.button, children: null };
  const obj10 = { text: null, onPress: null, variant: "secondary" };
  const intl5 = getSystemLocale.intl;
  obj10[0] = intl5.string(getSystemLocale.t.WAI6xu);
  obj10[1] = function onPress() {
    return markAsDismissed(_undefined[17]).hideActionSheet();
  };
  obj9[1] = callback2(Button.Button, obj10);
  items5[1] = callback2(View, obj9);
  obj6[1] = items5;
  items2[2] = callback3(View, obj6);
  obj[2] = items2;
  obj[1] = callback3(View, obj);
  return callback2(Background.BottomSheet, obj);
};
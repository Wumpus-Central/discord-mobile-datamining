// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "ACTION_SHEET_HEIGHT_HALF";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { defaultAreStatesEqual } from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { Button } from "../../../../../design/components/Button/native/Button.native.tsx";
import { Background } from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { getIsScreenLandscape } from "../../../../screen/useIsScreenLandscape.native.tsx";

let c10;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ GuildSettingsSections: error, GuildSettingsSubsections: metroImportAll } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
createCacheKey = { container: null, videoContainer: null, info: null, title: null, subtitle: null, footer: null, button: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: 16, paddingTop: 24, justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[2] = { marginTop: 16, alignItems: "center" };
createCacheKey[3] = { marginTop: 24, textAlign: "center" };
createCacheKey[4] = { marginTop: 12, textAlign: "center" };
createCacheKey[5] = { marginTop: 32 };
createCacheKey[6] = { marginBottom: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  let c2;
  let markAsDismissed;
  let require;
  let tmp3;
  ({ guildId: require, markAsDismissed } = arg0);
  let dependencyMap;
  let callback;
  const tmp = createCacheKey();
  [tmp3, c2] = callback(React.useState(0), 2);
  let obj = getIsScreenLandscape /* getIsScreenLandscape */;
  callback = obj.useIsScreenLandscape();
  let obj1 = defaultAreStatesEqual /* defaultAreStatesEqual */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const items1 = [markAsDismissed];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => () => callback(outer1_9.UNKNOWN), items1);
  obj = { startExpanded: true, children: null };
  obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      if (_slicedToArray) {
        result = diff / 2;
      }
      c2(result);
    },
    children: null
  };
  obj1 = { accessibilityRole: "image", accessibilityLabel: null, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj1[1] = intl.string(getSystemLocale /* getSystemLocale */.t.gCgirr);
  obj1[2] = callback2(markAsDismissed(8792), { style: tmp.videoContainer, src: closure_12, width: tmp3, height: tmp3 / 1.7289156626506024, muted: true, paused: stateFromStores, ariaHidden: true });
  const items2 = [callback2(View, obj1), , ];
  const obj3 = { style: tmp.info, children: null };
  const obj4 = { variant: "heading-lg/semibold", style: tmp.title, color: "mobile-text-heading-primary", children: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj4[3] = intl2.string(getSystemLocale /* getSystemLocale */.t.gCgirr);
  const items3 = [callback2(Text /* Text */.Text, obj4), ];
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj5[3] = intl3.string(getSystemLocale /* getSystemLocale */.t.fLMZFw);
  items3[1] = callback2(Text /* Text */.Text, obj5);
  obj3[1] = items3;
  items2[1] = callback3(View, obj3);
  const obj6 = { style: items4, children: null };
  items4 = [tmp.footer];
  const obj7 = { style: tmp.button, children: null };
  const obj8 = { text: null, onPress: null };
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj8[0] = intl4.string(getSystemLocale /* getSystemLocale */.t.BQq86h);
  obj8[1] = function onPress() {
    markAsDismissed(_undefined[16]).open(closure_0, outer1_7.ROLE_SUBSCRIPTIONS_TIERS, undefined, outer1_8.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
    markAsDismissed(outer1_9.UNKNOWN);
  };
  obj7[1] = callback2(Button /* Button */.Button, obj8);
  const items5 = [callback2(View, obj7), ];
  const obj9 = { style: tmp.button, children: null };
  const obj10 = { text: null, onPress: null, variant: "secondary" };
  const intl5 = getSystemLocale /* getSystemLocale */.intl;
  obj10[0] = intl5.string(getSystemLocale /* getSystemLocale */.t.WAI6xu);
  obj10[1] = function onPress() {
    return markAsDismissed(_undefined[17]).hideActionSheet();
  };
  obj9[1] = callback2(Button /* Button */.Button, obj10);
  items5[1] = callback2(View, obj9);
  obj6[1] = items5;
  items2[2] = callback3(View, obj6);
  obj[2] = items2;
  obj[1] = callback3(View, obj);
  return callback2(Background /* Background */.BottomSheet, obj);
};
// === Module 16069: CreatorMonetizationOnboardingV2UpsellActionSheet ===

// Module 16069 (CreatorMonetizationOnboardingV2UpsellActionSheet)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import Button from "Button" /* 4928 */;
import preloadDefault from "preload" /* 5501 */;
import Background from "Background" /* 5630 */;
import registerAssetDefault from "registerAsset" /* 16070 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { GuildSettingsSections } from "ME" /* 673 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: { marginBottom: 24, width: "100%" }, dismissButton: { marginTop: 4 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default function CreatorMonetizationOnboardingV2UpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = callback3();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return callback(closure_1_5.UNKNOWN);
    },
    children: null
  };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["v+Jm6X"]);
  const items = [callback(Text.Text, obj), , , , ];
  obj1 = { style: tmp.description, accessibilityRole: "text", variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[4] = intl2.string(getSystemLocale.t.kUUFbG);
  items[1] = callback(Text.Text, obj1);
  const obj2 = { style: tmp.image, resizeMode: "contain", source: registerAssetDefault };
  items[2] = callback(preloadDefault, obj2);
  const obj3 = {
    onPress() {
      callback(closure_1_5.UNKNOWN);
      closure_1_1(closure_1_2[12]).open(closure_0, closure_1_4.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = getSystemLocale.intl;
  obj3[1] = intl3.string(getSystemLocale.t.OgQQbG);
  items[3] = callback(Button.Button, obj3);
  const obj4 = { style: tmp.dismissButton, children: null };
  const obj5 = {
    onPress() {
      return callback(closure_1_5.UNKNOWN);
    },
    text: null,
    variant: "secondary"
  };
  const intl4 = getSystemLocale.intl;
  obj5[1] = intl4.string(getSystemLocale.t.WAI6xu);
  obj4[1] = callback(Button.Button, obj5);
  items[4] = callback(View, obj4);
  obj[1] = items;
  obj[2] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
};
// discord_app/modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { GuildSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/15295_registerAsset.js";
import { preload } from "../../../../components_native/common/FastImage.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: { marginBottom: 24, width: "100%" }, dismissButton: { marginTop: 4 } });
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default function CreatorMonetizationOnboardingV2UpsellActionSheet(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = callback3();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return callback(outer1_5.UNKNOWN);
    },
    children: null
  };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["v+Jm6X"]);
  const items = [callback(Text.Text, obj), , , , ];
  const obj1 = { style: tmp.description, accessibilityRole: "text", variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[4] = intl2.string(getSystemLocale.t.kUUFbG);
  items[1] = callback(Text.Text, obj1);
  const obj2 = { style: tmp.image, resizeMode: "contain", source: null };
  obj2[2] = registerAsset;
  items[2] = callback(preload, obj2);
  const obj3 = {
    onPress() {
      callback(outer1_5.UNKNOWN);
      outer1_1(outer1_2[12]).open(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = getSystemLocale.intl;
  obj3[1] = intl3.string(getSystemLocale.t.OgQQbG);
  items[3] = callback(Button.Button, obj3);
  const obj4 = { style: tmp.dismissButton, children: null };
  const obj5 = {
    onPress() {
      return callback(outer1_5.UNKNOWN);
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
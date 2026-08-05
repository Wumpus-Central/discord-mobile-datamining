// discord_app/modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { GuildSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[4] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["v+Jm6X"]);
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), , , , ];
  const obj1 = { style: tmp.description, accessibilityRole: "text", variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[4] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.kUUFbG);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  const obj2 = { style: tmp.image, resizeMode: "contain", source: null };
  obj2[2] = require("../../../../../_runtime/15252_registerAsset.js");
  items[2] = callback(require("../../../../components_native/common/FastImage.tsx"), obj2);
  const obj3 = {
    onPress() {
      callback(outer1_5.UNKNOWN);
      outer1_1(outer1_2[12]).open(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj3[1] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.OgQQbG);
  items[3] = callback(require("../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj3);
  const obj4 = { style: tmp.dismissButton, children: null };
  const obj5 = {
    onPress() {
      return callback(outer1_5.UNKNOWN);
    },
    text: null,
    variant: "secondary"
  };
  const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj5[1] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.WAI6xu);
  obj4[1] = callback(require("../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj5);
  items[4] = callback(View, obj4);
  obj[1] = items;
  obj[2] = callback2(View, obj);
  return callback(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
};
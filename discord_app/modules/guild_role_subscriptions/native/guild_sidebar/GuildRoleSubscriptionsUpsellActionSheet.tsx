// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx
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
let closure_8 = createCacheKey.createStyles({ title: { marginTop: 24, textAlign: "center" }, description: { marginTop: 8, marginBottom: 24, textAlign: "center" }, dismissButton: { marginTop: 4 } });
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionsUpsellActionSheet(arg0) {
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
  obj = { source: null };
  obj[0] = require("../../../../../_runtime/15247_registerAsset.js");
  const items = [callback(require("../../../../components_native/common/FastImage.tsx"), obj), , , , ];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[4] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.C0m4rQ);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.zOHfEX);
  items[2] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  const obj2 = {
    onPress() {
      callback(outer1_5.UNKNOWN);
      outer1_1(outer1_2[12]).open(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[1] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.OgQQbG);
  items[3] = callback(require("../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj2);
  const obj3 = { style: tmp.dismissButton, children: null };
  const obj4 = {
    onPress() {
      return callback(outer1_5.UNKNOWN);
    },
    text: null,
    variant: "secondary"
  };
  const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj4[1] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.WAI6xu);
  obj3[1] = callback(require("../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj4);
  items[4] = callback(View, obj3);
  obj[2] = items;
  return callback2(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
};
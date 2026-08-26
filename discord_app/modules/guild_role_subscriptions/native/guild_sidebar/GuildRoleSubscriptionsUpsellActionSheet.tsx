// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import registerAssetDefault from "../../../../../_runtime/15682_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { GuildSettingsSections } from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ title: { marginTop: 24, textAlign: "center" }, description: { marginTop: 8, marginBottom: 24, textAlign: "center" }, dismissButton: { marginTop: 4 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionsUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = callback3();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return callback(closure_1_5.UNKNOWN);
    },
    children: null
  };
  obj = { source: registerAssetDefault };
  const items = [callback(preloadDefault, obj), , , , ];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.C0m4rQ);
  items[1] = callback(Text.Text, obj);
  obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t.zOHfEX);
  items[2] = callback(Text.Text, obj1);
  const obj2 = {
    onPress() {
      callback(closure_1_5.UNKNOWN);
      closure_1_1(closure_1_2[12]).open(closure_0, closure_1_4.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t.OgQQbG);
  items[3] = callback(Button.Button, obj2);
  const obj3 = { style: tmp.dismissButton, children: null };
  const obj4 = {
    onPress() {
      return callback(closure_1_5.UNKNOWN);
    },
    text: null,
    variant: "secondary"
  };
  const intl4 = getSystemLocale.intl;
  obj4[1] = intl4.string(getSystemLocale.t.WAI6xu);
  obj3[1] = callback(Button.Button, obj4);
  items[4] = callback(View, obj3);
  obj[2] = items;
  return callback2(Background.BottomSheet, obj);
};
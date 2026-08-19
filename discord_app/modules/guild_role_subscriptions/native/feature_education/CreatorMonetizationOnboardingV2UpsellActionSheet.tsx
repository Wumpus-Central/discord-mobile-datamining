// discord_app/modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import _modDef8874 from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import registerAssetDefault from "../../../../../_runtime/15511_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { GuildSettingsSections } from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: { marginBottom: 24, width: "100%" }, dismissButton: { marginTop: 4 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default function CreatorMonetizationOnboardingV2UpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = callback3();
  const obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
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
      callback(ContentDismissActionType.UNKNOWN);
      _modDef8874.open(closure_0, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = getSystemLocale.intl;
  obj3[1] = intl3.string(getSystemLocale.t.OgQQbG);
  items[3] = callback(Button.Button, obj3);
  const obj4 = { style: tmp.dismissButton, children: null };
  const obj5 = {
    onPress() {
      return callback(ContentDismissActionType.UNKNOWN);
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
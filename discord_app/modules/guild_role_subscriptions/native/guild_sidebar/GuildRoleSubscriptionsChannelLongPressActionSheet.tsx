// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { StaticChannelRoute } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/12014_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/15107_registerAsset.js";
import { ActionSheet } from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { Form } from "../../../../design/void/Form/native/index.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { headerIcon: null };
createCacheKey = { marginRight: 16, tintColor: require("Themes").colors.CHANNEL_ICON, width: 20, height: 20 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, onClose: importDefault } = arg0);
  let obj = { children: null };
  obj = { leading: null, title: null };
  obj = { style: createCacheKey().headerIcon, children: null };
  const obj1 = { disableColor: true, source: null };
  obj1[1] = registerAsset;
  obj[1] = callback(Button.Icon, obj1);
  obj[0] = callback(View, obj);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["KzCF/6"]);
  const items = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), ];
  const obj2 = { leading: null, label: null, onPress: null };
  const obj3 = { source: null };
  obj3[0] = registerAsset;
  obj2[0] = callback(Button.Icon, obj3);
  const obj4 = { text: null };
  const intl2 = getSystemLocale.intl;
  obj4[0] = intl2.string(getSystemLocale.t.WqhZss);
  obj2[1] = callback(Form.FormLabel, obj4);
  obj2[2] = function onPress() {
    callback();
    const result = outer1_0(outer1_2[13]).copyGuildChannelOrThreadLink(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(Form.FormRow, obj2);
  obj[0] = items;
  return callback2(ActionSheet.ActionSheet, obj);
};
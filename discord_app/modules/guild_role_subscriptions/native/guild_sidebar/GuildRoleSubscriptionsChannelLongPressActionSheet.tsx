// === Module 15468: GuildRoleSubscriptionsChannelLongPressActionSheet ===

// Module 15468 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import Form from "Form" /* 8083 */;
import copyGuildChannelOrThreadLink from "copyGuildChannelOrThreadLink" /* 9995 */;
import registerAssetDefault from "registerAsset" /* 11954 */;
import registerAssetDefault2 from "registerAsset" /* 15362 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { marginRight: 16, tintColor: ThemesDefault.colors.CHANNEL_ICON, width: 20, height: 20 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  ({ guildId: require, onClose: importDefault } = arg0);
  const obj = { style: callback3().headerIcon, children: null };
  const tmp = callback3();
  obj[1] = callback(Button.Icon, { disableColor: true, source: registerAssetDefault });
  obj[0] = callback(View, obj);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["KzCF/6"]);
  const items = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), ];
  const obj2 = { leading: null, label: null, onPress: null };
  obj2[0] = callback(Button.Icon, { source: registerAssetDefault2 });
  const obj4 = { text: null };
  const intl2 = getSystemLocale.intl;
  obj4[0] = intl2.string(getSystemLocale.t.WqhZss);
  obj2[1] = callback(Form.FormLabel, obj4);
  obj2[2] = function onPress() {
    callback();
    const result = copyGuildChannelOrThreadLink.copyGuildChannelOrThreadLink(closure_0, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(Form.FormRow, obj2);
  obj[0] = items;
  return callback2(ActionSheet.ActionSheet, obj);
};
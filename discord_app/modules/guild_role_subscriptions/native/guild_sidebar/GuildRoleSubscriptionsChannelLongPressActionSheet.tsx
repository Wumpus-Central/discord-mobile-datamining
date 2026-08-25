// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import registerAssetDefault from "../../../../../_runtime/12331_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/15456_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { StaticChannelRoute } from "../../../channel/ChannelConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { headerIcon: null };
createCacheKey = { marginRight: 16, tintColor: ThemesDefault.colors.CHANNEL_ICON, width: 20, height: 20 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  ({ guildId: require, onClose: importDefault } = arg0);
  let obj = { children: null };
  obj = { leading: null, title: null };
  obj = { style: callback3().headerIcon, children: null };
  const tmp = callback3();
  obj[1] = callback(Button.Icon, { disableColor: true, source: registerAssetDefault });
  obj[0] = callback(View, obj);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["KzCF/6"]);
  const items = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), ];
  const obj2 = { leading: null, label: null, onPress: null };
  obj1 = { disableColor: true, source: registerAssetDefault };
  obj2[0] = callback(Button.Icon, { source: registerAssetDefault2 });
  const obj4 = { text: null };
  const intl2 = getSystemLocale.intl;
  obj4[0] = intl2.string(getSystemLocale.t.WqhZss);
  obj2[1] = callback(Form.FormLabel, obj4);
  obj2[2] = function onPress() {
    callback();
    const result = closure_1_0(closure_1_2[13]).copyGuildChannelOrThreadLink(closure_0, closure_1_4.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(Form.FormRow, obj2);
  obj[0] = items;
  return callback2(ActionSheet.ActionSheet, obj);
};
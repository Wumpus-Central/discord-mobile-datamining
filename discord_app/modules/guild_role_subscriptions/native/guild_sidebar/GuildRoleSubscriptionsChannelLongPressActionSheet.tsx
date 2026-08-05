// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { StaticChannelRoute } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  obj1[1] = require("../../../../../_runtime/12042_registerAsset.js");
  obj[1] = callback(require("../../../../design/void/native.tsx") /* Button */.Icon, obj1);
  obj[0] = callback(View, obj);
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["KzCF/6"]);
  const items = [callback(require("../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx") /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), ];
  const obj2 = { leading: null, label: null, onPress: null };
  const obj3 = { source: null };
  obj3[0] = require("../../../../../_runtime/15127_registerAsset.js");
  obj2[0] = callback(require("../../../../design/void/native.tsx") /* Button */.Icon, obj3);
  const obj4 = { text: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj4[0] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.WqhZss);
  obj2[1] = callback(require("../../../../design/void/Form/native/index.tsx") /* Form */.FormLabel, obj4);
  obj2[2] = function onPress() {
    callback();
    const result = outer1_0(outer1_2[13]).copyGuildChannelOrThreadLink(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(require("../../../../design/void/Form/native/index.tsx") /* Form */.FormRow, obj2);
  obj[0] = items;
  return callback2(require("../../../../design/components/Sheet/native/ActionSheet.native.tsx") /* ActionSheet */.ActionSheet, obj);
};
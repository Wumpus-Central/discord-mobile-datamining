// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx
import noopAll from "noop" /* 19 */;
import _modDef38 from "module_38" /* 38 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Text from "Text" /* 4734 */;
import Button2 from "Button" /* 4745 */;
import Background from "Background" /* 6950 */;
import BottomSheetModal from "BottomSheetModal" /* 6952 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 16958 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, cancel: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

export default function GuildRoleSubscriptionTierArchiveOrDeleteActionSheet(groupListingId) {
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp = callback2();
  _modDef38(null != groupListingId, "group listing id cannot be null");
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
  let deleting = tmp4.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp4);
  let obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const items = [callback(Text.Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText }), callback(Button.Spacer, { size: 12 }), callback(Text.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }), callback(Button.Spacer, { size: 24 }), , , ];
  obj = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: null };
  if (!deleting) {
    deleting = archiving;
  }
  obj1 = { backdropOpacity: 0.8, children: null };
  obj[4] = deleting;
  items[4] = callback(Button2.Button, obj);
  items[5] = callback(Button.Spacer, { size: 24 });
  const obj2 = {
    onPress() {
      return callback(table[13]).hideActionSheet();
    },
    style: tmp.cancel,
    activeOpacity: 0.5,
    children: null
  };
  const obj3 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
  const intl = tmp6(1236).intl;
  obj3[2] = intl.string(getSystemLocale.t["ETE/oC"]);
  obj2[3] = callback(Text.Text, obj3);
  items[6] = callback(closure_3, obj2);
  obj[1] = items;
  obj[1] = closure_6(BottomSheetModal.BottomSheetScrollView, obj);
  obj1[1] = callback(closure_4, obj);
  return callback(Background.BottomSheet, obj1);
};
// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button2 from "../../../../design/components/Button/native/Button.native.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../../_runtime/05589_BottomSheetModal.js";
import useArchiveOrDeleteDefault from "useArchiveOrDelete.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
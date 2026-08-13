// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { BottomSheetModal } from "../../../../../_runtime/05439_BottomSheetModal.js";
import { 00038__ } from "../../../../../_runtime/metro/00038__.js";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { useArchiveOrDelete } from "useArchiveOrDelete.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, cancel: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

export default function GuildRoleSubscriptionTierArchiveOrDeleteActionSheet(groupListingId) {
  let archiving;
  let buttonText;
  let descriptionText;
  let editStateId;
  let guildId;
  let handleArchiveOrDelete;
  let headerText;
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp = createCacheKey();
  00038__(null != groupListingId, "group listing id cannot be null");
  const tmp4 = useArchiveOrDelete(guildId, groupListingId, editStateId);
  let deleting = tmp4.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp4);
  let obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsets().bottom }, children: null };
  const items = [callback(Text.Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText }), callback(Button.Spacer, { size: 12 }), callback(Text.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }), callback(Button.Spacer, { size: 24 }), , , ];
  obj = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: null };
  if (!deleting) {
    deleting = archiving;
  }
  const obj1 = { backdropOpacity: 0.8, children: null };
  obj[4] = deleting;
  items[4] = callback(Button.Button, obj);
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
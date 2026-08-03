// === Module 16599: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet ===

// Module 16599 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  importDefault(38)(null != groupListingId, "group listing id cannot be null");
  const tmp4 = importDefault(16600)(guildId, groupListingId, editStateId);
  let deleting = tmp4.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp4);
  let obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: importDefault(1581)().bottom }, children: null };
  const items = [callback(require(4189) /* Text */.Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText }), callback(require(1297) /* Button */.Spacer, { size: 12 }), callback(require(4189) /* Text */.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }), callback(require(1297) /* Button */.Spacer, { size: 24 }), , , ];
  obj = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: null };
  if (!deleting) {
    deleting = archiving;
  }
  const obj1 = { backdropOpacity: 0.8, children: null };
  obj[4] = deleting;
  items[4] = callback(require(4604) /* Button */.Button, obj);
  items[5] = callback(require(1297) /* Button */.Spacer, { size: 24 });
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
  obj3[2] = intl.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  obj2[3] = callback(require(4189) /* Text */.Text, obj3);
  items[6] = callback(closure_3, obj2);
  obj[1] = items;
  obj[1] = closure_6(require(5249) /* BottomSheetModal */.BottomSheetScrollView, obj);
  obj1[1] = callback(closure_4, obj);
  return callback(require(5247) /* Background */.BottomSheet, obj1);
};
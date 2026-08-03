// === Module 15505: GuildRoleSubscriptionPurchaseCard ===

// Module 15505 (GuildRoleSubscriptionPurchaseCard)
import _slicedToArray from "_slicedToArray";
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, header: null, content: null, headerText: null, headerDot: null, seperator: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16, paddingBottom: 24 };
createCacheKey[2] = { padding: 16, paddingTop: 24, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
let obj1 = { padding: 16, paddingTop: 24, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[4] = { width: 3, height: 3, borderRadius: 1.5, backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, marginHorizontal: 8 };
let obj2 = { width: 3, height: 3, borderRadius: 1.5, backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, marginHorizontal: 8 };
createCacheKey[5] = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx");

export default function GuildRoleSubscriptionPurchaseCard(guildId) {
  const listingId = guildId.listingId;
  const tmp = createCacheKey();
  let obj = importAll(14330);
  let obj1 = importAll(14330);
  let obj2 = require(15500) /* TruncatedText */;
  const formattedSubscriptionPlan = obj2.useFormattedSubscriptionPlan(listingId);
  obj = { scrollable: true, startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.header, children: null };
  obj2 = { style: tmp.headerText, children: null };
  const items = [callback2(require(4251) /* Text */.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: callback(obj1.useName(listingId), 1)[0] }), callback2(View, { style: tmp.headerDot }), callback2(require(4251) /* Text */.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: formattedSubscriptionPlan })];
  obj2[1] = items;
  const items1 = [callback3(View, obj2), callback2(require(1297) /* Button */.Spacer, { size: 16 }), callback2(require(15500) /* TruncatedText */.TruncatedText, { variant: "text-sm/normal", color: "text-default", lineClamp: 2, children: callback(obj.useDescription(listingId), 1)[0] }), callback2(require(1297) /* Button */.Spacer, { size: 24 }), callback2(importDefault(15506), { listingId })];
  obj1[1] = items1;
  const items2 = [callback3(View, obj1), callback2(View, { style: tmp.seperator }), ];
  const obj5 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj6, children: null };
  const obj7 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj7[3] = intl.string(require(1236) /* getSystemLocale */.t.UdEvUi);
  const items3 = [callback2(require(4251) /* Text */.Text, obj7), callback2(require(1297) /* Button */.Spacer, { size: 24 }), callback2(require(14340) /* SectionTitle */.Content, { listingId, guildId: guildId.guildId })];
  obj5[3] = items3;
  items2[2] = callback3(require(5311) /* BottomSheetModal */.BottomSheetScrollView, obj5);
  obj[1] = items2;
  obj[2] = callback3(View, obj);
  return callback2(require(5309) /* Background */.BottomSheet, obj);
};
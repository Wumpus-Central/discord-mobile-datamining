// === Module 13193: ? ===

// Module 13193
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, actions: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[0] = obj;
obj[1] = { paddingHorizontal: 16, gap: 24 };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function GuildActionSheet(arg0) {
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = callback();
  let obj = require(7313) /* useBottomSheetRef */;
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: null };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj[2] = { paddingBottom: importDefault(1581)().bottom + num };
  const items = [closure_4(importDefault(13188), { guild }), closure_4(importDefault(13194), { guild }), , ];
  const obj1 = { style: tmp.actions, children: null };
  const items1 = [closure_4(require(13131) /* HideMutedChannelsOption */.GuildUnreadAction, { guild }), closure_4(importDefault(13195), { guild }), closure_4(require(13131) /* HideMutedChannelsOption */.GuildActionSheetPrimaryActions, { guild }), closure_4(require(13131) /* HideMutedChannelsOption */.GuildActionSheetSecondaryActions, { guild }), closure_4(require(13131) /* HideMutedChannelsOption */.GuildDeveloperOptionAction, { guild }), closure_4(importDefault(13198), { guildId: guild.id })];
  obj1[1] = items1;
  items[2] = closure_5(View, obj1);
  items[3] = closure_4(require(5565) /* ActionSheetHeaderBar */.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj[3] = items;
  obj[5] = closure_5(require(5311) /* BottomSheetModal */.BottomSheetScrollView, obj);
  return closure_4(require(5309) /* Background */.BottomSheet, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;
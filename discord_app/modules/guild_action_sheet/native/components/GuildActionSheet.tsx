// === Module 13432: ? ===

// Module 13432
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Background from "Background" /* 6950 */;
import BottomSheetModal from "BottomSheetModal" /* 6952 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7124 */;
import useBottomSheetRef from "useBottomSheetRef" /* 7688 */;
import HideMutedChannelsOption from "HideMutedChannelsOption" /* 13370 */;
import CommunityPillDefault from "CommunityPill" /* 13427 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 13433 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 13434 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 13437 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[0] = obj;
obj[1] = { paddingHorizontal: 16, gap: 24 };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildActionSheet(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = callback();
  let obj = useBottomSheetRef;
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj[2] = { paddingBottom: useSafeAreaInsetsDefault().bottom + num };
  const items = [callback(CommunityPillDefault, { guild }), callback(GuildActionSheetTabItemsDefault, { guild }), , ];
  obj1 = { style: tmp.actions, children: null };
  const items1 = [callback(HideMutedChannelsOption.GuildUnreadAction, { guild }), callback(GuildActionSheetProgressDefault, { guild }), callback(HideMutedChannelsOption.GuildActionSheetPrimaryActions, { guild }), callback(HideMutedChannelsOption.GuildActionSheetSecondaryActions, { guild }), callback(HideMutedChannelsOption.GuildDeveloperOptionAction, { guild }), callback(GuildActionSheetEmojiSectionDefault, { guildId: guild.id })];
  obj1[1] = items1;
  items[2] = callback2(View, obj1);
  items[3] = callback(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj[3] = items;
  obj[5] = callback2(BottomSheetModal.BottomSheetScrollView, obj);
  return callback(Background.BottomSheet, obj);
});
const result = require("obj132").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;
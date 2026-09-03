// === Module 13950: ? ===

// Module 13950
import ThemesDefault from "Themes" /* 709 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Background from "Background" /* 5631 */;
import BottomSheetModal from "BottomSheetModal" /* 5633 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5946 */;
import useBottomSheetRef from "useBottomSheetRef" /* 8091 */;
import HideMutedChannelsOption from "HideMutedChannelsOption" /* 13888 */;
import CommunityPillDefault from "CommunityPill" /* 13945 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 13951 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 13952 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 13955 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, actions: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
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
  obj = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: null };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj[2] = { paddingBottom: useSafeAreaInsetsDefault().bottom + num };
  const items = [closure_4(CommunityPillDefault, { guild }), closure_4(GuildActionSheetTabItemsDefault, { guild }), , ];
  obj1 = { style: tmp.actions, children: null };
  const items1 = [closure_4(HideMutedChannelsOption.GuildUnreadAction, { guild }), closure_4(GuildActionSheetProgressDefault, { guild }), closure_4(HideMutedChannelsOption.GuildActionSheetPrimaryActions, { guild }), closure_4(HideMutedChannelsOption.GuildActionSheetSecondaryActions, { guild }), closure_4(HideMutedChannelsOption.GuildDeveloperOptionAction, { guild }), closure_4(GuildActionSheetEmojiSectionDefault, { guildId: guild.id })];
  obj1[1] = items1;
  items[2] = closure_5(View, obj1);
  items[3] = closure_4(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj[3] = items;
  obj[5] = closure_5(BottomSheetModal.BottomSheetScrollView, obj);
  return closure_4(Background.BottomSheet, obj);
});
const result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;
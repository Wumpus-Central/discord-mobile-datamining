// discord_app/modules/guild_action_sheet/native/components/GuildActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06952_BottomSheetModal.js";
import ActionSheetHeaderBar from "../../../../design/components/Sheet/native/ActionSheetHeaderBar.native.tsx";
import useBottomSheetRef from "../../../../design/components/Sheet/native/useBottomSheetRef.tsx";
import HideMutedChannelsOption from "GuildActionSheetActions.tsx";
import CommunityPillDefault from "GuildActionSheetHeader.tsx";
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems.tsx";
import GuildActionSheetProgressDefault from "GuildActionSheetProgress.tsx";
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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
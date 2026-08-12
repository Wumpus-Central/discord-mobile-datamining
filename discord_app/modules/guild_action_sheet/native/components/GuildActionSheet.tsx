// discord_app/modules/guild_action_sheet/native/components/GuildActionSheet.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { BottomSheetModal } from "../../../../../_runtime/05438_BottomSheetModal.js";
import { ActionSheetHeaderBar } from "../../../../design/components/Sheet/native/ActionSheetHeaderBar.native.tsx";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { useBottomSheetRef } from "../../../../design/components/Sheet/native/useBottomSheetRef.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { HideMutedChannelsOption } from "GuildActionSheetActions.tsx";
import { GuildActionSheetEmojiSection } from "GuildActionSheetEmojiSection.tsx";
import { CommunityPill } from "GuildActionSheetHeader.tsx";
import { GuildActionSheetProgress } from "GuildActionSheetProgress.tsx";
import { GuildActionSheetTabItems } from "GuildActionSheetTabItems.tsx";

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
  let obj = useBottomSheetRef;
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: null };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj[2] = { paddingBottom: useSafeAreaInsets().bottom + num };
  const items = [closure_4(CommunityPill, { guild }), closure_4(GuildActionSheetTabItems, { guild }), , ];
  const obj1 = { style: tmp.actions, children: null };
  const items1 = [closure_4(HideMutedChannelsOption.GuildUnreadAction, { guild }), closure_4(GuildActionSheetProgress, { guild }), closure_4(HideMutedChannelsOption.GuildActionSheetPrimaryActions, { guild }), closure_4(HideMutedChannelsOption.GuildActionSheetSecondaryActions, { guild }), closure_4(HideMutedChannelsOption.GuildDeveloperOptionAction, { guild }), closure_4(GuildActionSheetEmojiSection, { guildId: guild.id })];
  obj1[1] = items1;
  items[2] = closure_5(View, obj1);
  items[3] = closure_4(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj[3] = items;
  obj[5] = closure_5(BottomSheetModal.BottomSheetScrollView, obj);
  return closure_4(Background.BottomSheet, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;
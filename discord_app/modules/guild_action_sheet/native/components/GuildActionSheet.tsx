// discord_app/modules/guild_action_sheet/native/components/GuildActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06728_BottomSheetModal.js";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ActionSheetHeaderBar from "../../../../design/components/Sheet/native/ActionSheetHeaderBar.native.tsx";
import useBottomSheetRef from "../../../../design/components/Sheet/native/useBottomSheetRef.tsx";
import GuildActionSheetActions from "GuildActionSheetActions.tsx";
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader.tsx";
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems.tsx";
import GuildActionSheetProgressDefault from "GuildActionSheetProgress.tsx";
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  actions: { paddingHorizontal: 16, gap: 24 },
};
let closure_6 = createStyles.createStyles(obj);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default noop.memo(function GuildActionSheet(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottomSheetRef1 = useBottomSheetRef.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = {
    ref: bottomSheetRef,
    handleDisabled: true,
    showGradient: true,
    scrollable: true,
    startExpanded: expanded,
    children: null,
  };
  const obj3 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj3.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + num };
  const items = [
    React4(GuildActionSheetHeaderDefault, { guild }),
    React4(GuildActionSheetTabItemsDefault, { guild }),
    ,
  ];
  const obj5 = { style: tmp.actions, children: null };
  const items1 = [
    React4(GuildActionSheetActions.GuildUnreadAction, { guild }),
    React4(GuildActionSheetProgressDefault, { guild }),
    React4(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }),
    React4(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }),
    React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }),
    React4(GuildActionSheetEmojiSectionDefault, { guildId: guild.id }),
  ];
  obj5.children = items1;
  items[2] = hasOwnProperty(View, obj5);
  items[3] = React4(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj3.children = items;
  obj2.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj3);
  return React4(Sheet_BottomSheet.BottomSheet, obj2);
});

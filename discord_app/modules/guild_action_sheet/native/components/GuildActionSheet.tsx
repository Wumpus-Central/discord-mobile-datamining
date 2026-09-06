// === Module 13972: GuildActionSheet ===

// Module 13972 (GuildActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7154 */;
import useBottomSheetRef from "useBottomSheetRef" /* 8170 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13910 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 13967 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 13973 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 13974 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 13977 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null, actions: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
obj.actions = { paddingHorizontal: 16, gap: 24 };
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default noop.memo(function GuildActionSheet(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  let obj = useBottomSheetRef;
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: null };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + num };
  const items = [React4(GuildActionSheetHeaderDefault, { guild }), React4(GuildActionSheetTabItemsDefault, { guild }), , ];
  const obj1 = { style: tmp.actions, children: null };
  const items1 = [React4(GuildActionSheetActions.GuildUnreadAction, { guild }), React4(GuildActionSheetProgressDefault, { guild }), React4(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }), React4(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }), React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }), React4(GuildActionSheetEmojiSectionDefault, { guildId: guild.id })];
  obj1.children = items1;
  items[2] = hasOwnProperty(View, obj1);
  items[3] = React4(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj.children = items;
  obj.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
});
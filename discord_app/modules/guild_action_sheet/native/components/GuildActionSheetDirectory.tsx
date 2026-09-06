// === Module 13966: GuildActionSheetDirectory ===

// Module 13966 (GuildActionSheetDirectory)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13910 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 13967 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, actions: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
createStyles.actions = { paddingHorizontal: 16, gap: 24 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default function GuildActionSheetDirectory(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  let obj = { scrollable: true, startExpanded: expanded, children: null };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const items = [React4(GuildActionSheetHeaderDefault, { guild }), ];
  obj = { style: tmp.actions, children: null };
  const items1 = [React4(GuildActionSheetActions.GuildActionSheetDirectoryActions, { guild }), React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild })];
  obj.children = items1;
  items[1] = hasOwnProperty(View, obj);
  obj.children = items;
  obj.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
};
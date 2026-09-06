// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06627_BottomSheetModal.js";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import GuildActionSheetActions from "GuildActionSheetActions.tsx";
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  obj = {
    scrollsToTop: false,
    style: tmp.container,
    contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom },
    children: null,
  };
  const items = [React4(GuildActionSheetHeaderDefault, { guild })];
  obj = { style: tmp.actions, children: null };
  const items1 = [
    React4(GuildActionSheetActions.GuildActionSheetDirectoryActions, { guild }),
    React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }),
  ];
  obj.children = items1;
  items[1] = hasOwnProperty(View, obj);
  obj.children = items;
  obj.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
}

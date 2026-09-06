// discord_app/modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function EmptyStateWithSnowflakeQuery(onPressRow) {
  onPressRow = onPressRow.onPressRow;
  const obj = {
    contentContainerStyle: closure_6().emptyState,
    data: null,
    renderItem(label) {
      return jsx(TableRow.TableRow, { label: label.item, start: true, end: true, onPress: onPressRow });
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag",
  };
  const items = [onPressRow.query];
  obj.data = items;
  return jsx(onPressRow(12167).AppLauncherList, {
    contentContainerStyle: closure_6().emptyState,
    data: null,
    renderItem(label) {
      return jsx(TableRow.TableRow, { label: label.item, start: true, end: true, onPress: onPressRow });
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag",
  });
}
const DEFAULT_CONTENT_PADDING = fn(1482).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const AppLauncherUserListActionSheet = "AppLauncherUserListActionSheet";
fn(4560);
const createStyles = {
  emptyState: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 },
};
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx",
);

export default function AppLauncherUserListActionSheet(onUserPress) {
  onUserPress = onUserPress.onUserPress;
  const onActionSheetDismiss = onUserPress.onActionSheetDismiss;
  const channel = onUserPress.channel;
  let callback1;
  const id = channel.id;
  const items = [onActionSheetDismiss];
  const callback = callback1.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherUserListActionSheet);
    onActionSheetDismiss();
  }, items);
  const items1 = [callback, onUserPress];
  callback1 = callback1.useCallback((user) => {
    onUserPress({ user: user.user });
    callback();
  }, items1);
  const items2 = [callback1];
  const callback2 = callback1.useCallback((query) => {
    const user = query;
    let obj = onUserPress(callback[5]);
    if (obj.isSnowflake(query)) {
      obj = {
        query,
        onPressRow() {
          return callback1({ user });
        },
      };
      let tmp3Result = tmp3(EmptyStateWithSnowflakeQuery, obj);
    } else {
      obj = {
        style: { paddingTop: 80 },
        lightSource: onActionSheetDismiss(tmp2[7]),
        darkSource: onActionSheetDismiss(tmp2[7]),
        title: null,
        body: null,
      };
      const intl = tmp(tmp2[8]).intl;
      obj.title = intl.string(tmp(tmp2[8]).t.vYocDz);
      const intl2 = tmp(tmp2[8]).intl;
      obj.body = intl2.string(tmp(tmp2[8]).t.V6nAfF);
      tmp3Result = tmp3(tmp(tmp2[6]).EmptyState, obj);
    }
    return tmp3Result;
  }, items2);
  let obj = {
    onDismiss: onActionSheetDismiss,
    option: onUserPress.option,
    contentContainerStyles: { paddingHorizontal: 0 },
    children: null,
  };
  if (channel.isPrivate()) {
    obj = {
      channelId: id,
      disableStickySections: true,
      hideTitle: true,
      headerShown: false,
      inActionSheet: true,
      onUserPress: callback1,
      opensUserProfileOnUserPress: false,
    };
    let tmp4Result = tmp4(tmp6(tmp5[10]), obj);
  } else {
    obj = {
      channelId: id,
      guildId: channel.guild_id,
      searchable: true,
      searchableEmptyState: callback2,
      headerShown: false,
      opensUserProfileOnUserPress: false,
      onUserPress: callback1,
      inActionSheet: true,
      disableThemedGradient: true,
    };
    tmp4Result = tmp4(tmp6(tmp5[11]), obj);
  }
  obj.children = tmp4Result;
  return jsx(onUserPress(callback[9]).AppLauncherCommandOptionActionSheet, {
    onDismiss: onActionSheetDismiss,
    option: onUserPress.option,
    contentContainerStyles: { paddingHorizontal: 0 },
    children: null,
  });
}
export const APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY = "AppLauncherUserListActionSheet";

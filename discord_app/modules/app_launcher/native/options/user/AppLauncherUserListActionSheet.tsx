// discord_app/modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { DEFAULT_CONTENT_PADDING } from "../../AppLauncherNativeConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function EmptyStateWithSnowflakeQuery(onPressRow) {
  onPressRow = onPressRow.onPressRow;
  const tmp = callback();
  const items = [onPressRow.query];
  return jsx(onPressRow(11737).AppLauncherList, {
    contentContainerStyle: callback().emptyState,
    data: items,
    renderItem(item) {
      return closure_1_4(onPressRow(closure_1_2[13]).TableRow, {
        label: item.item,
        start: true,
        end: true,
        onPress: onPressRow,
      });
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag",
  });
}
const AppLauncherUserListActionSheet = "AppLauncherUserListActionSheet";
let closure_6 = createCacheKey.createStyles({
  emptyState: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 },
});
const result = require("set").fileFinishedImporting(
  "modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx",
);

export default function AppLauncherUserListActionSheet(onUserPress) {
  onUserPress = onUserPress.onUserPress;
  const onActionSheetDismiss = onUserPress.onActionSheetDismiss;
  const channel = onUserPress.channel;
  let callback;
  let callback1;
  const id = channel.id;
  const items = [onActionSheetDismiss];
  callback = callback1.useCallback(() => {
    onActionSheetDismiss(callback[4]).hideActionSheet(closure_1_5);
    onActionSheetDismiss();
  }, items);
  const items1 = [callback, onUserPress];
  callback1 = callback1.useCallback((user) => {
    onUserPress({ user: user.user });
    callback();
  }, items1);
  const items2 = [callback1];
  const callback2 = callback1.useCallback((text) => {
    closure_0 = text;
    let obj = onUserPress(callback[5]);
    if (obj.isSnowflake(text)) {
      obj = { query: null, onPressRow: null };
      obj[0] = text;
      obj[1] = function onPressRow(arg0) {
        return closure_1_3({ user: closure_0 });
      };
      let tmp3Result = tmp3(closure_1_7, obj);
    } else {
      obj = { style: null, lightSource: null, darkSource: null, title: null, body: null };
      obj[0] = { paddingTop: 80 };
      obj[1] = onActionSheetDismiss(tmp2[7]);
      obj[2] = onActionSheetDismiss(tmp2[7]);
      const intl = tmp(tmp2[8]).intl;
      obj[3] = intl.string(tmp(tmp2[8]).t.vYocDz);
      const intl2 = tmp(tmp2[8]).intl;
      obj[4] = intl2.string(tmp(tmp2[8]).t.V6nAfF);
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
      channelId: null,
      disableStickySections: true,
      hideTitle: true,
      headerShown: false,
      inActionSheet: true,
      onUserPress: null,
      opensUserProfileOnUserPress: false,
    };
    obj[0] = id;
    obj[5] = callback1;
    let tmp4Result = tmp4(tmp6(tmp5[10]), obj);
  } else {
    obj = {
      channelId: null,
      guildId: null,
      searchable: true,
      searchableEmptyState: null,
      headerShown: false,
      opensUserProfileOnUserPress: false,
      onUserPress: null,
      inActionSheet: true,
      disableThemedGradient: true,
    };
    obj[0] = id;
    obj[1] = channel.guild_id;
    obj[3] = callback2;
    obj[6] = callback1;
    tmp4Result = tmp4(tmp6(tmp5[11]), obj);
  }
  obj[3] = tmp4Result;
  return jsx(onUserPress(callback[9]).AppLauncherCommandOptionActionSheet, {
    onDismiss: onActionSheetDismiss,
    option: onUserPress.option,
    contentContainerStyles: { paddingHorizontal: 0 },
    children: null,
  });
}
export const APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY = "AppLauncherUserListActionSheet";

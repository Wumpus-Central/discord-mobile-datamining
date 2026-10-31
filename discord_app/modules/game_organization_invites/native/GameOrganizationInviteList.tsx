// discord_app/modules/game_organization_invites/native/GameOrganizationInviteList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GameOrganizationInviteRowDefault from "GameOrganizationInviteRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
function keyExtractor(id) {
  return id.id;
}
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = {
    content: { paddingBottom: arg0 + nativeDefault.space.PX_16 },
    emptyState: { backgroundColor: "transparent" },
  };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteList.tsx");

export default function GameOrganizationInviteList(users) {
  users = users.users;
  const getSendState = users.getSendState;
  const onInvite = users.onInvite;
  const tmp = closure_5(getSendState(onInvite[4])({ isKeyboardAwareOnAndroid: false }).insets.bottom);
  const items = [users.length, getSendState, onInvite];
  const callback = noop.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = {
      user: item,
      start: 0 === index,
      end: index === users.length - 1,
      sendState: getSendState(item.id),
      onInvite,
    };
    return jsx(GameOrganizationInviteRowDefault, {
      user: item,
      start: 0 === index,
      end: index === users.length - 1,
      sendState: getSendState(item.id),
      onInvite,
    });
  }, items);
  let obj = {
    maintainVisibleContentPosition: { disabled: true },
    contentContainerStyle: tmp.content,
    bounces: false,
    data: users,
    renderItem: callback,
    keyExtractor,
    keyboardShouldPersistTaps: "always",
    ListEmptyComponent: null,
  };
  const obj2 = { style: tmp.emptyState, title: null };
  const intl = users(onInvite[8]).intl;
  obj2.title = intl.string(users(onInvite[8]).t.ojoWgX);
  obj.ListEmptyComponent = jsx(users(onInvite[7]).EmptyState, { style: tmp.emptyState, title: null });
  return jsx(users(onInvite[6]).BottomSheetFlashList, {
    maintainVisibleContentPosition: { disabled: true },
    contentContainerStyle: tmp.content,
    bounces: false,
    data: users,
    renderItem: callback,
    keyExtractor,
    keyboardShouldPersistTaps: "always",
    ListEmptyComponent: null,
  });
}

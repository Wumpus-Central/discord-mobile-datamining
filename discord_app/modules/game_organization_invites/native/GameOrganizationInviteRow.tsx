// === Module 16293: GameOrganizationInviteRow ===

// Module 16293 (GameOrganizationInviteRow)
import native from "native" /* 1187 */;
import UserUtilsDefault from "UserUtils" /* 5309 */;
import TableRow from "TableRow" /* 7379 */;
import DiscordTagDefault from "DiscordTag" /* 10867 */;
import InviteButtonDefault from "InviteButton" /* 12477 */;
import noop from "module_19" /* 19 */;

require = fn;
const InviteSendStates = fn(8776).InviteSendStates;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteRow.tsx");

export default noop.memo(function GameOrganizationInviteRow(user) {
  user = user.user;
  ({ sendState, onInvite } = user);
  items = [onInvite, user];
  ({ start, end } = user);
  const callback = noop.useCallback(() => onInvite(user), items);
  const obj = { start, end, icon: jsx(native.Avatar, { source: user.getAvatarSource(undefined), size: native.AvatarSizes.REFRESH_MEDIUM_32 }), label: null, trailing: null, onPress: null, disabled: null };
  const obj3 = { nick: null, user: null };
  const obj2 = { source: user.getAvatarSource(undefined), size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  obj3.nick = UserUtilsDefault.getGlobalName(user);
  obj3.user = user;
  obj.label = <tmp3 nick={null} user={null} />;
  obj.trailing = jsx(InviteButtonDefault, { sendState, onPressSend: callback });
  obj.onPress = callback;
  obj.disabled = sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT;
  return jsx(TableRow.TableRow, { start, end, icon: jsx(native.Avatar, { source: user.getAvatarSource(undefined), size: native.AvatarSizes.REFRESH_MEDIUM_32 }), label: null, trailing: null, onPress: null, disabled: null });
});
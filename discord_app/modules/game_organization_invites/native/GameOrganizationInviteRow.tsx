// discord_app/modules/game_organization_invites/native/GameOrganizationInviteRow.tsx
import native from "../../../design/void/native.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import DiscordTagDefault from "../../user_profile/native/DiscordTag.tsx";
import InviteButtonDefault from "../../instant_invite/native/components/InviteButton.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const InviteSendStates = fn(7879).InviteSendStates;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteRow.tsx");

export default noop.memo(function GameOrganizationInviteRow(user) {
  user = user.user;
  ({ sendState, onInvite } = user);
  const items = [onInvite, user];
  ({ start, end } = user);
  const callback = noop.useCallback(() => onInvite(user), items);
  const obj = {
    start,
    end,
    icon: jsx(native.Avatar, { source: user.getAvatarSource(undefined), size: native.AvatarSizes.REFRESH_MEDIUM_32 }),
    label: null,
    trailing: null,
    onPress: null,
    disabled: null,
  };
  const obj3 = { nick: null, user: null };
  const obj2 = { source: user.getAvatarSource(undefined), size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  obj3.nick = UserUtilsDefault.getGlobalName(user);
  obj3.user = user;
  obj.label = <tmp3 nick={null} user={null} />;
  obj.trailing = jsx(InviteButtonDefault, { sendState, onPressSend: callback });
  obj.onPress = callback;
  obj.disabled = sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT;
  return jsx(TableRow.TableRow, {
    start,
    end,
    icon: jsx(native.Avatar, { source: user.getAvatarSource(undefined), size: native.AvatarSizes.REFRESH_MEDIUM_32 }),
    label: null,
    trailing: null,
    onPress: null,
    disabled: null,
  });
});

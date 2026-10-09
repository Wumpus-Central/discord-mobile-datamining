// === Module 14117: GameOrganizationInviteRow ===

// Module 14117 (GameOrganizationInviteRow)
import c from "c" /* 576 */;
import native from "native" /* 1200 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import TableRow from "TableRow" /* 6186 */;
import DiscordTagDefault from "DiscordTag" /* 8749 */;
import InviteButtonDefault from "InviteButton" /* 8752 */;
import noop from "module_19" /* 19 */;

require = fn;
const InviteSendStates = fn(7423).InviteSendStates;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationInviteRow(user) {
  const cResult = c.c(23);
  user = user.user;
  ({ sendState, onInvite } = user);
  ({ start, end } = user);
  if (cResult[0] === onInvite) {
    if (cResult[1] === user) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== user) {
      const avatarSource = user.getAvatarSource(undefined);
      cResult[3] = user;
      cResult[4] = avatarSource;
      let tmp5 = avatarSource;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] !== tmp5) {
      const obj2 = { source: tmp5, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
      const tmp9 = jsx(native.Avatar, { source: tmp5, size: native.AvatarSizes.REFRESH_MEDIUM_32 });
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== user) {
      const globalName = UserUtilsDefault.getGlobalName(user);
      cResult[7] = user;
      cResult[8] = globalName;
      let tmp10 = globalName;
    } else {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp10) {
      if (cResult[10] === user) {
        let tmp13 = cResult[11];
      }
      if (cResult[12] === tmp4) {
        if (cResult[13] === sendState) {
          let tmp17 = cResult[14];
        }
        if (cResult[15] === end) {
          if (cResult[16] === tmp4) {
            if (cResult[17] === start) {
              if (cResult[18] === tmp7) {
                if (cResult[19] === tmp13) {
                  if (cResult[20] === tmp17) {
                    if (cResult[21] === tmp21) {
                      let tmp22 = cResult[22];
                    }
                    return tmp22;
                  }
                }
              }
            }
          }
        }
        const obj4 = { start, end, icon: tmp7, label: tmp13, trailing: tmp17, onPress: tmp4, disabled: sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT };
        const tmp24 = jsx(TableRow.TableRow, { start, end, icon: tmp7, label: tmp13, trailing: tmp17, onPress: tmp4, disabled: sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT });
        cResult[15] = end;
        cResult[16] = tmp4;
        cResult[17] = start;
        cResult[18] = tmp7;
        cResult[19] = tmp13;
        cResult[20] = tmp17;
        cResult[21] = sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT;
        cResult[22] = tmp24;
        tmp22 = tmp24;
      }
      const obj5 = { sendState, onPressSend: tmp4 };
      const tmp20 = jsx(InviteButtonDefault, { sendState, onPressSend: tmp4 });
      cResult[12] = tmp4;
      cResult[13] = sendState;
      cResult[14] = tmp20;
      tmp17 = tmp20;
    }
    const obj6 = { nick: tmp10, user };
    const tmp16 = jsx(DiscordTagDefault, { nick: tmp10, user });
    cResult[9] = tmp10;
    cResult[10] = user;
    cResult[11] = tmp16;
    tmp13 = tmp16;
  }
  const fn = function o() {
    return onInvite(user);
  };
  cResult[0] = onInvite;
  cResult[1] = user;
  cResult[2] = fn;
  tmp4 = fn;
}) : (function GameOrganizationInviteRow(user) {
  user = user.user;
  ({ sendState, onInvite } = user);
  const items = [onInvite, user];
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
}));
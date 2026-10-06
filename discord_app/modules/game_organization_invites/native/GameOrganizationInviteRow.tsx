// === Module 13795: GameOrganizationInviteRow ===

// Module 13795 (GameOrganizationInviteRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import TableRow2 from "TableRow" /* 6000 */;
import Constants from "Constants" /* 7239 */;
import DiscordTagDefault from "DiscordTag" /* 9331 */;
import InviteButtonDefault from "InviteButton" /* 9569 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let end;
  let onInvite;
  let sendState;
  let start;
  const obj = react2;
  const cResult = obj.c(23);
  user = user.user;
  ({ sendState, onInvite } = user);
  ({ start, end } = user);
  if (cResult[0] === onInvite) {
    let tmp4;
    let tmp5;
    let tmp7;
    let tmp10;
    if (cResult[1] === user) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== user) {
      const avatarSource = user.getAvatarSource(undefined);
      cResult[3] = user;
      cResult[4] = avatarSource;
      tmp5 = avatarSource;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] !== tmp5) {
      const Avatar = native.Avatar;
      const tmp9 = <Avatar source={tmp5} size={native.AvatarSizes.REFRESH_MEDIUM_32} />;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== user) {
      const obj3 = UserUtilsDefault;
      const globalName = obj3.getGlobalName(user);
      cResult[7] = user;
      cResult[8] = globalName;
      tmp10 = globalName;
    } else {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp10) {
      let tmp13;
      if (cResult[10] === user) {
        tmp13 = cResult[11];
      }
      if (cResult[12] === tmp4) {
        let tmp17;
        if (cResult[13] === sendState) {
          tmp17 = cResult[14];
        }
        if (cResult[15] === end) {
          if (cResult[16] === tmp4) {
            if (cResult[17] === start) {
              if (cResult[18] === tmp7) {
                if (cResult[19] === tmp13) {
                  if (cResult[20] === tmp17) {
                    let tmp22;
                    if (cResult[21] === (sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT)) {
                      tmp22 = cResult[22];
                    }
                    return tmp22;
                  }
                }
              }
            }
          }
        }
        const tmp24 = jsx(TableRow2.TableRow, { start, end, icon: tmp7, label: tmp13, trailing: tmp17, onPress: tmp4, disabled: sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT });
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
      const tmp20 = jsx(InviteButtonDefault, { sendState, onPressSend: tmp4 });
      cResult[12] = tmp4;
      cResult[13] = sendState;
      cResult[14] = tmp20;
      tmp17 = tmp20;
    }
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
}) : ((user) => {
  let end;
  let obj4;
  let onInvite;
  let sendState;
  let start;
  user = user.user;
  ({ sendState, onInvite } = user);
  const items = [onInvite, user];
  ({ start, end } = user);
  const callback = react.useCallback(() => onInvite(user), items);
  const TableRow = TableRow2.TableRow;
  ({ source: user.getAvatarSource(undefined), size: native.AvatarSizes.REFRESH_MEDIUM_32 });
  const Avatar = native.Avatar;
  ({ nick: obj4.getGlobalName(user), user });
  DiscordTagDefault;
  obj4 = UserUtilsDefault;
  return <TableRow start={start} end={end} icon={null} label={null} trailing={null} onPress={callback} disabled={sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT} />;
}));
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteRow.tsx");

export default memoResult;
// === Module 10679: InstantInviteCreator ===

// Module 10679 (InstantInviteCreator)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import DetailedGuildIdentityUserRow from "DetailedGuildIdentityUserRow" /* 10680 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ identity: { flex: 1 } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let items;
  let user;
  const obj = react2;
  const cResult = obj.c(14);
  ({ guildId, user } = arg0);
  const tmp4 = closure_6();
  let tmp5 = null;
  if (null != user) {
    if (cResult[0] === guildId) {
      let tmp6;
      let tmp8;
      if (cResult[1] === user) {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp6) {
        const obj2 = { source: tmp6, size: native.AvatarSizes.SMALL };
        const Avatar = native.Avatar;
        const tmp10 = React3(Avatar, obj2);
        cResult[3] = tmp6;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === guildId) {
        let tmp11;
        if (cResult[6] === user) {
          tmp11 = cResult[7];
        }
        if (cResult[8] === tmp4.identity) {
          let tmp14;
          if (cResult[9] === tmp11) {
            tmp14 = cResult[10];
          }
          if (cResult[11] === tmp8) {
            let tmp18;
            if (cResult[12] === tmp14) {
              tmp18 = cResult[13];
            }
            tmp5 = tmp18;
          }
          const obj3 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: items };
          const Stack = Stack_Stack.Stack;
          items = [tmp8, tmp14];
          const tmp21 = hasOwnProperty(Stack, obj3);
          cResult[11] = tmp8;
          cResult[12] = tmp14;
          cResult[13] = tmp21;
          tmp18 = tmp21;
        }
        const obj4 = { style: tmp4.identity, children: tmp11 };
        const tmp17 = React3(View, obj4);
        cResult[8] = tmp4.identity;
        cResult[9] = tmp11;
        cResult[10] = tmp17;
        tmp14 = tmp17;
      }
      const obj5 = { user, guildId };
      const tmp13 = React3(DetailedGuildIdentityUserRow.DetailedGuildIdentityUser, obj5);
      cResult[5] = guildId;
      cResult[6] = user;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    }
    const avatarSource = user.getAvatarSource(guildId);
    cResult[0] = guildId;
    cResult[1] = user;
    cResult[2] = avatarSource;
    tmp6 = avatarSource;
  }
  return tmp5;
}) : ((arg0) => {
  let guildId;
  let items;
  let obj4;
  let user;
  ({ guildId, user } = arg0);
  let tmp2 = null;
  if (null != user) {
    const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: items };
    const Stack = Stack_Stack.Stack;
    const obj2 = { source: user.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
    const Avatar = native.Avatar;
    items = [React3(Avatar, obj2), ];
    const obj3 = { style: tmp.identity, children: React3(DetailedGuildIdentityUserRow.DetailedGuildIdentityUser, obj4) };
    obj4 = { user, guildId };
    items[1] = React3(View, obj3);
    tmp2 = hasOwnProperty(Stack, obj);
  }
  return tmp2;
}));
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCreator.tsx");

export default memoResult;
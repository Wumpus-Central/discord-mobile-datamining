// discord_app/modules/guild_instant_invites/native/InstantInviteCreator.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const native = Stack(1200);
const Stack_Stack = Stack(5374);
const DetailedGuildIdentityUserRow = Stack(10266);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({ identity: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCreator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function InstantInviteCreator(arg0) {
        let Stack = require;
        let items = dependencyMap;
        const cResult = c.c(14);
        ({ guildId, user } = arg0);
        const tmp2 = closure_6();
        if (null == user) {
          return null;
        } else {
          if (cResult[0] === guildId) {
            if (cResult[1] === user) {
              let tmp3 = cResult[2];
            }
            if (cResult[3] !== tmp3) {
              const obj2 = { source: tmp3, size: native.AvatarSizes.SMALL };
              const tmp7 = React4(native.Avatar, obj2);
              cResult[3] = tmp3;
              cResult[4] = tmp7;
              let tmp5 = tmp7;
            } else {
              tmp5 = cResult[4];
            }
            if (cResult[5] === guildId) {
              if (cResult[6] === user) {
                let tmp8 = cResult[7];
              }
              if (cResult[8] === tmp2.identity) {
                if (cResult[9] === tmp8) {
                  let tmp11 = cResult[10];
                }
                if (cResult[11] === tmp5) {
                }
                Stack = Stack_Stack.Stack;
                const obj3 = {
                  direction: "horizontal",
                  align: "center",
                  spacing: nativeDefault.space.PX_8,
                  children: null,
                };
                items = [tmp5, tmp11];
                obj3.children = items;
                const tmp18 = hasOwnProperty(Stack, obj3);
                cResult[11] = tmp5;
                cResult[12] = tmp11;
                cResult[13] = tmp18;
              }
              const obj4 = { style: tmp2.identity, children: tmp8 };
              const tmp14 = React4(View, obj4);
              cResult[8] = tmp2.identity;
              cResult[9] = tmp8;
              cResult[10] = tmp14;
              tmp11 = tmp14;
            }
            const obj5 = { user, guildId };
            const tmp10 = React4(DetailedGuildIdentityUserRow.DetailedGuildIdentityUser, obj5);
            cResult[5] = guildId;
            cResult[6] = user;
            cResult[7] = tmp10;
            tmp8 = tmp10;
          }
          const avatarSource = user.getAvatarSource(guildId);
          cResult[0] = guildId;
          cResult[1] = user;
          cResult[2] = avatarSource;
          tmp3 = avatarSource;
        }
      }
    : function InstantInviteCreator(arg0) {
        ({ guildId, user } = arg0);
        let tmp2 = null;
        if (null != user) {
          const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: null };
          const obj2 = { source: user.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
          const items = [React4(native.Avatar, obj2)];
          const obj3 = { style: tmp.identity, children: null };
          const obj4 = { user, guildId };
          obj3.children = React4(DetailedGuildIdentityUserRow.DetailedGuildIdentityUser, obj4);
          items[1] = React4(View, obj3);
          obj.children = items;
          tmp2 = hasOwnProperty(Stack_Stack.Stack, obj);
        }
        return tmp2;
      },
);

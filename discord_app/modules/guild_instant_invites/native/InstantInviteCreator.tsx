// === Module 11099: InstantInviteCreator ===

// Module 11099 (InstantInviteCreator)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Stack_Stack from "Stack/Stack" /* 5060 */;
import DetailedGuildIdentityUserRow from "DetailedGuildIdentityUserRow" /* 11100 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
let closure_6 = createStyles.createStyles({ identity: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCreator.tsx");

export default noop.memo((arg0) => {
  ({ guildId, user } = arg0);
  let tmp2 = null;
  if (null != user) {
    const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: null };
    const obj2 = { source: user.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
    const items = [React4(native.Avatar, obj2), ];
    const obj3 = { style: tmp.identity, children: null };
    const obj4 = { user, guildId };
    obj3.children = React4(DetailedGuildIdentityUserRow.DetailedGuildIdentityUser, obj4);
    items[1] = React4(View, obj3);
    obj.children = items;
    tmp2 = hasOwnProperty(Stack_Stack.Stack, obj);
  }
  return tmp2;
});
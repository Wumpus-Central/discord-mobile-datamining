// === Module 10212: LockedRecipientField ===

// Module 10212 (LockedRecipientField)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import Text_Text from "Text/Text" /* 5088 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_16 }, avatar: null };
let obj3 = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_16 };
obj2.avatar = { marginEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginEnd: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function LockedRecipientField(user) {
  const cResult = c.c(11);
  user = user.user;
  const tmp4 = closure_6();
  if (cResult[0] === tmp4.avatar) {
    if (cResult[1] === user) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== user) {
      const name = UserUtilsDefault.getName(user);
      cResult[3] = user;
      cResult[4] = name;
      let tmp8 = name;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== tmp8) {
      const obj2 = { variant: "text-md/semibold", children: tmp8 };
      const tmp13 = React4(Text_Text.Text, obj2);
      cResult[5] = tmp8;
      cResult[6] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp11) {
          let tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    const obj4 = { style: tmp5, children: null };
    const items = [tmp6, tmp11];
    obj4.children = items;
    const tmp17 = hasOwnProperty(View, obj4);
    cResult[7] = tmp4.container;
    cResult[8] = tmp6;
    cResult[9] = tmp11;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const obj5 = { style: tmp4.avatar, user, guildId: "Array", size: native.AvatarSizes.NORMAL };
  const tmp7 = React4(native.Avatar, obj5);
  cResult[0] = tmp4.avatar;
  cResult[1] = user;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function LockedRecipientField(user) {
  user = user.user;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.avatar, user, guildId: "Array", size: native.AvatarSizes.NORMAL };
  const items = [React4(native.Avatar, obj2), ];
  const obj3 = { variant: "text-md/semibold", children: UserUtilsDefault.getName(user) };
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
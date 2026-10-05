// discord_app/modules/checkout/native/gifting/LockedRecipientField.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let user;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, avatar: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let items;
      const obj = react2;
      const cResult = obj.c(11);
      user = user.user;
      const tmp4 = closure_6();
      if (cResult[0] === tmp4.avatar) {
        let tmp6;
        let tmp8;
        let tmp11;
        if (cResult[1] === user) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== user) {
          const obj3 = UserUtilsDefault;
          const name = obj3.getName(user);
          cResult[3] = user;
          cResult[4] = name;
          tmp8 = name;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== tmp8) {
          const obj2 = { variant: "text-md/semibold", children: tmp8 };
          const tmp13 = React3(Text_Text.Text, obj2);
          cResult[5] = tmp8;
          cResult[6] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp6) {
            let tmp14;
            if (cResult[9] === tmp11) {
              tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
        const obj4 = { style: tmp5, children: items };
        items = [tmp6, tmp11];
        const tmp17 = hasOwnProperty(View, obj4);
        cResult[7] = tmp4.container;
        cResult[8] = tmp6;
        cResult[9] = tmp11;
        cResult[10] = tmp17;
        tmp14 = tmp17;
      }
      const obj5 = { style: tmp4.avatar, user, guildId: "Array", size: native.AvatarSizes.NORMAL };
      const Avatar = native.Avatar;
      const tmp7 = React3(Avatar, obj5);
      cResult[0] = tmp4.avatar;
      cResult[1] = user;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (user) => {
      let items;
      let obj4;
      user = user.user;
      const tmp = closure_6();
      const obj = { style: tmp.container, children: items };
      const obj2 = { style: tmp.avatar, user, guildId: "Array", size: native.AvatarSizes.NORMAL };
      const Avatar = native.Avatar;
      items = [React3(Avatar, obj2)];
      const obj3 = { variant: "text-md/semibold", children: obj4.getName(user) };
      const Text = Text_Text.Text;
      obj4 = UserUtilsDefault;
      items[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default tmp5;

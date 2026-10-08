// discord_app/modules/parent_tools/native/FamilyCenterUsernameHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterUsernameHeader(user) {
      const cResult = c.c(10);
      user = user.user;
      const tmp4 = closure_6();
      const name = UserUtilsDefault.useName(user);
      if (cResult[0] !== user) {
        const userTag = UserUtilsDefault.getUserTag(user, { decoration: "never" });
        cResult[0] = user;
        cResult[1] = userTag;
        let tmp7 = userTag;
        const tmp5Result = UserUtilsDefault;
      } else {
        tmp7 = cResult[1];
      }
      const combined = " (@" + tmp7 + ")";
      if (cResult[2] !== combined) {
        const obj3 = { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined };
        const tmp12 = React4(Text_Text.Text, obj3);
        cResult[2] = combined;
        cResult[3] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === name) {
        if (cResult[5] === tmp10) {
          let tmp13 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp13) {
            let tmp15 = cResult[9];
          }
          return tmp15;
        }
        const obj4 = { style: tmp4.container, children: tmp13 };
        const tmp18 = React4(View, obj4);
        cResult[7] = tmp4.container;
        cResult[8] = tmp13;
        cResult[9] = tmp18;
        tmp15 = tmp18;
      }
      const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
      const items = [name, tmp10];
      obj5.children = items;
      const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[4] = name;
      cResult[5] = tmp10;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    }
  : function FamilyCenterUsernameHeader(user) {
      user = user.user;
      const tmp = closure_6();
      const name = UserUtilsDefault.useName(user);
      const obj3 = { style: tmp.container, children: null };
      const combined = " (@" + UserUtilsDefault.getUserTag(user, { decoration: "never" }) + ")";
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
      const items = [
        name,
        React4(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined }),
      ];
      obj4.children = items;
      obj3.children = hasOwnProperty(Text_Text.Text, obj4);
      return React4(View, obj3);
    };

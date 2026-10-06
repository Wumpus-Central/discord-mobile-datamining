// === Module 14716: FamilyCenterUsernameHeader ===

// Module 14716 (FamilyCenterUsernameHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let items;
  let tmp10;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(10);
  user = user.user;
  const tmp4 = closure_6();
  const obj2 = UserUtilsDefault;
  const name = obj2.useName(user);
  if (cResult[0] !== user) {
    const tmp5Result = UserUtilsDefault;
    const userTag = tmp5Result.getUserTag(user, { decoration: "never" });
    cResult[0] = user;
    cResult[1] = userTag;
    tmp7 = userTag;
  } else {
    tmp7 = cResult[1];
  }
  const combined = " (@" + tmp7 + ")";
  if (cResult[2] !== combined) {
    const obj3 = { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined };
    const tmp12 = React3(Text_Text.Text, obj3);
    cResult[2] = combined;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === name) {
    let tmp13;
    if (cResult[5] === tmp10) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      let tmp15;
      if (cResult[8] === tmp13) {
        tmp15 = cResult[9];
      }
      return tmp15;
    }
    const obj4 = { style: tmp4.container, children: tmp13 };
    const tmp18 = React3(View, obj4);
    cResult[7] = tmp4.container;
    cResult[8] = tmp13;
    cResult[9] = tmp18;
    tmp15 = tmp18;
  }
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: items };
  items = [name, tmp10];
  const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
  cResult[4] = name;
  cResult[5] = tmp10;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : ((user) => {
  let Text;
  let items;
  let obj4;
  user = user.user;
  const tmp = closure_6();
  const obj = UserUtilsDefault;
  const name = obj.useName(user);
  const obj3 = { style: tmp.container, children: hasOwnProperty(Text, obj4) };
  const obj2 = UserUtilsDefault;
  const combined = " (@" + obj2.getUserTag(user, { decoration: "never" }) + ")";
  obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: items };
  items = [name, ];
  Text = Text_Text.Text;
  items[1] = React3(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined });
  return React3(View, obj3);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default tmp4;
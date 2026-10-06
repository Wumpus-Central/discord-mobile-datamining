// === Module 11822: UsernameText ===

// Module 11822 (UsernameText)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import NicknameUtils from "NicknameUtils" /* 5048 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ jsxs: c2, Fragment: c3, jsx: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let guildId;
  let items;
  let items1;
  let items2;
  let items3;
  let user;
  let variant;
  const obj = react2;
  const cResult = obj.c(27);
  ({ user, guildId, variant, color } = arg0);
  let str = "text-md/medium";
  if (undefined !== variant) {
    str = variant;
  }
  let str2 = "text-default";
  if (undefined !== color) {
    str2 = color;
  }
  if (cResult[0] === str2) {
    let tmp4;
    if (cResult[1] === str) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === guildId) {
      let tmp5;
      if (cResult[4] === user) {
        tmp5 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp8;
        let tmp19;
        if (cResult[7] === user) {
          tmp8 = cResult[8];
        }
        if (user.hasUniqueUsername()) {
          let tmp23;
          if (cResult[9] !== user) {
            const str1 = user.toString();
            cResult[9] = user;
            cResult[10] = str1;
            tmp23 = str1;
          } else {
            tmp23 = cResult[10];
          }
          tmp19 = tmp23;
        } else {
          let tmp11;
          if (cResult[11] !== user) {
            const str7 = user.toString();
            cResult[11] = user;
            cResult[12] = str7;
            tmp11 = str7;
          } else {
            tmp11 = cResult[12];
          }
          if (cResult[13] === tmp4) {
            let tmp13;
            if (cResult[14] === user.discriminator) {
              tmp13 = cResult[15];
            }
            if (cResult[16] === tmp11) {
              if (cResult[17] === tmp13) {
                tmp19 = cResult[18];
              }
            }
            const obj2 = { children: items };
            items = [tmp11, tmp13];
            const tmp22 = React2(_false, obj2);
            cResult[16] = tmp11;
            cResult[17] = tmp13;
            cResult[18] = tmp22;
            tmp19 = tmp22;
          }
          const obj3 = { color: "text-muted", children: items1 };
          const Text = Text_Text.Text;
          const merged = Object.assign(tmp4);
          items1 = ["#", user.discriminator];
          const tmp18 = React2(Text, obj3);
          cResult[13] = tmp4;
          cResult[14] = user.discriminator;
          cResult[15] = tmp18;
          tmp13 = tmp18;
        }
        if (cResult[19] === tmp5) {
          if (cResult[20] === tmp8) {
            if (cResult[21] === tmp4) {
              let tmp25;
              if (cResult[22] === tmp19) {
                tmp25 = cResult[23];
              }
              if (cResult[24] === tmp25) {
                let tmp32;
                if (cResult[25] === tmp4) {
                  tmp32 = cResult[26];
                }
                return tmp32;
              }
              const obj4 = { children: tmp25 };
              const Text3 = Text_Text.Text;
              const merged1 = Object.assign(tmp4);
              const tmp37 = React3(Text3, obj4);
              cResult[24] = tmp25;
              cResult[25] = tmp4;
              cResult[26] = tmp37;
              tmp32 = tmp37;
            }
          }
        }
        let tmp26 = tmp19;
        if (tmp8) {
          const obj5 = { children: items2 };
          items2 = [tmp5, " ", ];
          const obj6 = { color: "text-muted", children: items3 };
          const Text2 = Text_Text.Text;
          const merged2 = Object.assign(tmp4);
          items3 = ["(", tmp19, ")"];
          items2[2] = React2(Text2, obj6);
          tmp26 = React2(_false, obj5);
        }
        cResult[19] = tmp5;
        cResult[20] = tmp8;
        cResult[21] = tmp4;
        cResult[22] = tmp19;
        cResult[23] = tmp26;
        tmp25 = tmp26;
      }
      const tmp10 = null != tmp5 && tmp5 !== user.toString();
      cResult[6] = tmp5;
      cResult[7] = user;
      cResult[8] = tmp10;
      tmp8 = tmp10;
    }
    const tmpResult = NicknameUtils;
    const name = tmpResult.getName(guildId, null, user);
    cResult[3] = guildId;
    cResult[4] = user;
    cResult[5] = name;
    tmp5 = name;
  }
  const obj7 = { variant: str, color: str2 };
  cResult[0] = str2;
  cResult[1] = str;
  cResult[2] = obj7;
  tmp4 = obj7;
}) : ((guildId) => {
  let items;
  let items1;
  let items2;
  let items3;
  let str1;
  let tmp13;
  let user;
  let variant;
  ({ user, variant } = guildId);
  guildId = guildId.guildId;
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  let str = guildId.color;
  if (str === undefined) {
    str = "text-default";
  }
  const obj = { variant, color: str };
  const obj2 = NicknameUtils;
  const name = obj2.getName(guildId, null, user);
  const tmp4 = null != name && name !== user.toString();
  if (user.hasUniqueUsername()) {
    str1 = user.toString();
  } else {
    const obj3 = { children: items };
    items = [user.toString(), ];
    const obj4 = { color: "text-muted", children: items1 };
    const Text = Text_Text.Text;
    const merged = Object.assign(obj);
    items1 = ["#", user.discriminator];
    items[1] = React2(Text, obj4);
    str1 = React2(_false, obj3);
  }
  const obj5 = { children: tmp13 };
  const Text2 = Text_Text.Text;
  const merged1 = Object.assign(obj);
  tmp13 = str1;
  if (tmp4) {
    const obj6 = { children: items2 };
    items2 = [name, " ", ];
    const obj7 = { color: "text-muted", children: items3 };
    const Text3 = Text_Text.Text;
    const merged2 = Object.assign(obj);
    items3 = ["(", str1, ")"];
    items2[2] = React2(Text3, obj7);
    tmp13 = React2(_false, obj6);
  }
  return React3(Text2, obj5);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/UsernameText.tsx");

export default tmp4;
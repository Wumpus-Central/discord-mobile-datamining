// === Module 11808: UsernameText ===

// Module 11808 (UsernameText)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import NicknameUtils from "NicknameUtils" /* 5042 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsxs: c2, Fragment: c3, jsx: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/UsernameText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(27);
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
    if (cResult[1] === str) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === guildId) {
      if (cResult[4] === user) {
        let tmp5 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === user) {
          let tmp8 = cResult[8];
        }
        if (user.hasUniqueUsername()) {
          if (cResult[9] !== user) {
            const str1 = user.toString();
            cResult[9] = user;
            cResult[10] = str1;
          }
        } else {
          if (cResult[11] !== user) {
            const str7 = user.toString();
            cResult[11] = user;
            cResult[12] = str7;
            let tmp11 = str7;
          } else {
            tmp11 = cResult[12];
          }
          if (cResult[13] === tmp4) {
            if (cResult[14] === user.discriminator) {
              let tmp13 = cResult[15];
            }
            if (cResult[16] === tmp11) {
              if (cResult[17] === tmp13) {
                let tmp19 = cResult[18];
              }
              if (cResult[19] === tmp5) {
                if (cResult[20] === tmp8) {
                  if (cResult[21] === tmp4) {
                    if (cResult[22] === tmp19) {
                      let tmp26 = cResult[23];
                    }
                    if (cResult[24] === tmp26) {
                      if (cResult[25] === tmp4) {
                        let tmp33 = cResult[26];
                      }
                      return tmp33;
                    }
                    const obj2 = {};
                    const merged = Object.assign(tmp4);
                    obj2.children = tmp26;
                    const tmp38 = React4(Text_Text.Text, obj2);
                    cResult[24] = tmp26;
                    cResult[25] = tmp4;
                    cResult[26] = tmp38;
                    tmp33 = tmp38;
                  }
                }
              }
              let tmp27 = tmp19;
              if (tmp8) {
                const obj3 = { children: null };
                const items = [tmp5, " ", ];
                const obj4 = {};
                const merged1 = Object.assign(tmp4);
                obj4.color = "text-muted";
                const items1 = ["(", tmp19, ")"];
                obj4.children = items1;
                items[2] = React2(Text_Text.Text, obj4);
                obj3.children = items;
                tmp27 = React2(React3, obj3);
              }
              cResult[19] = tmp5;
              cResult[20] = tmp8;
              cResult[21] = tmp4;
              cResult[22] = tmp19;
              cResult[23] = tmp27;
              tmp26 = tmp27;
            }
            const obj5 = { children: null };
            const items2 = [tmp11, tmp13];
            obj5.children = items2;
            const tmp22 = React2(React3, obj5);
            cResult[16] = tmp11;
            cResult[17] = tmp13;
            cResult[18] = tmp22;
            tmp19 = tmp22;
          }
          const obj6 = {};
          const merged2 = Object.assign(tmp4);
          obj6.color = "text-muted";
          const items3 = ["#", user.discriminator];
          obj6.children = items3;
          const tmp18 = React2(Text_Text.Text, obj6);
          cResult[13] = tmp4;
          cResult[14] = user.discriminator;
          cResult[15] = tmp18;
          tmp13 = tmp18;
        }
      }
      const tmp10 = null != tmp5 && tmp5 !== user.toString();
      cResult[6] = tmp5;
      cResult[7] = user;
      cResult[8] = tmp10;
      tmp8 = tmp10;
    }
    const name = NicknameUtils.getName(guildId, null, user);
    cResult[3] = guildId;
    cResult[4] = user;
    cResult[5] = name;
    tmp5 = name;
    const tmpResult = NicknameUtils;
  }
  const obj7 = { variant: str, color: str2 };
  cResult[0] = str2;
  cResult[1] = str;
  cResult[2] = obj7;
  tmp4 = obj7;
}) : ((color) => {
  ({ user, variant } = color);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-default";
  }
  const obj = { variant, color: str };
  const name = NicknameUtils.getName(color.guildId, null, user);
  if (user.hasUniqueUsername()) {
    let str1 = user.toString();
  } else {
    const obj3 = { children: null };
    const items = [user.toString(), ];
    const obj4 = {};
    const merged = Object.assign(obj);
    obj4.color = "text-muted";
    const items1 = ["#", user.discriminator];
    obj4.children = items1;
    items[1] = React2(Text_Text.Text, obj4);
    obj3.children = items;
    str1 = React2(React3, obj3);
  }
  const obj5 = {};
  const merged1 = Object.assign(obj);
  let tmp13 = str1;
  if (tmp4) {
    const obj6 = { children: null };
    const items2 = [name, " ", ];
    const obj7 = {};
    const merged2 = Object.assign(obj);
    obj7.color = "text-muted";
    const items3 = ["(", str1, ")"];
    obj7.children = items3;
    items2[2] = React2(Text_Text.Text, obj7);
    obj6.children = items2;
    tmp13 = React2(React3, obj6);
  }
  obj5.children = tmp13;
  return React4(Text_Text.Text, obj5);
});
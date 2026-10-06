// === Module 17986: EmojiAlias ===

// Module 17986 (EmojiAlias)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ emojiAlias: { alignItems: "center", flexDirection: "row" }, emojiColon: { width: 4 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let name;
  let style;
  const obj = react2;
  const cResult = obj.c(14);
  ({ name, style } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === style) {
    let tmp5;
    let tmp6;
    let tmp9;
    let tmp12;
    if (cResult[1] === tmp4.emojiAlias) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4.emojiColon) {
      const obj2 = { style: tmp4.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
      const tmp8 = _false(Text_Text.Text, obj2);
      cResult[3] = tmp4.emojiColon;
      cResult[4] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== name) {
      const obj3 = { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name };
      const tmp11 = _false(Text_Text.Text, obj3);
      cResult[5] = name;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp4.emojiColon) {
      const obj4 = { style: tmp4.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
      const tmp14 = _false(Text_Text.Text, obj4);
      cResult[7] = tmp4.emojiColon;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp9) {
          let tmp15;
          if (cResult[12] === tmp12) {
            tmp15 = cResult[13];
          }
          return tmp15;
        }
      }
    }
    const obj5 = { style: tmp5, children: items };
    items = [tmp6, tmp9, tmp12];
    const tmp18 = React3(View, obj5);
    cResult[9] = tmp5;
    cResult[10] = tmp6;
    cResult[11] = tmp9;
    cResult[12] = tmp12;
    cResult[13] = tmp18;
    tmp15 = tmp18;
  }
  const items1 = [tmp4.emojiAlias, style];
  cResult[0] = style;
  cResult[1] = tmp4.emojiAlias;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  let items;
  let items1;
  let name;
  let style;
  ({ name, style } = arg0);
  const tmp = closure_5();
  const obj = { style: items, children: items1 };
  items = [tmp.emojiAlias, style];
  items1 = [, , ];
  const obj2 = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[0] = _false(Text_Text.Text, obj2);
  items1[1] = _false(Text_Text.Text, { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name });
  const obj3 = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[2] = _false(Text_Text.Text, obj3);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default tmp4;
// discord_app/modules/guild_role_subscriptions/native/components/EmojiAlias.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5090);
let closure_5 = createStyles.createStyles({
  emojiAlias: { alignItems: "center", flexDirection: "row" },
  emojiColon: { width: 4 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiAlias(arg0) {
      const cResult = c.c(14);
      ({ name, style } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.emojiAlias) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] !== tmp4.emojiColon) {
          const obj2 = {
            style: tmp4.emojiColon,
            "aria-hidden": true,
            variant: "text-md/medium",
            color: "text-muted",
            children: ":",
          };
          const tmp8 = React3(Text_Text.Text, obj2);
          cResult[3] = tmp4.emojiColon;
          cResult[4] = tmp8;
          let tmp6 = tmp8;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] !== name) {
          const obj3 = { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name };
          const tmp11 = React3(Text_Text.Text, obj3);
          cResult[5] = name;
          cResult[6] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== tmp4.emojiColon) {
          const obj4 = {
            style: tmp4.emojiColon,
            "aria-hidden": true,
            variant: "text-md/medium",
            color: "text-muted",
            children: ":",
          };
          const tmp14 = React3(Text_Text.Text, obj4);
          cResult[7] = tmp4.emojiColon;
          cResult[8] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp9) {
              if (cResult[12] === tmp12) {
                let tmp15 = cResult[13];
              }
              return tmp15;
            }
          }
        }
        const obj5 = { style: tmp5, children: null };
        const items = [tmp6, tmp9, tmp12];
        obj5.children = items;
        const tmp18 = React4(View, obj5);
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
    }
  : function EmojiAlias(arg0) {
      ({ name, style } = arg0);
      const tmp = closure_5();
      const obj = { style: null, children: null };
      const items = [tmp.emojiAlias, style];
      obj.style = items;
      const items1 = [
        React3(Text_Text.Text, {
          style: tmp.emojiColon,
          "aria-hidden": true,
          variant: "text-md/medium",
          color: "text-muted",
          children: ":",
        }),
        React3(Text_Text.Text, {
          lineClamp: 1,
          variant: "text-md/bold",
          color: "interactive-text-active",
          children: name,
        }),
        React3(Text_Text.Text, {
          style: tmp.emojiColon,
          "aria-hidden": true,
          variant: "text-md/medium",
          color: "text-muted",
          children: ":",
        }),
      ];
      obj.children = items1;
      return React4(View, obj);
    };

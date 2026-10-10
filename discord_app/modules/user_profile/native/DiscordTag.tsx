// discord_app/modules/user_profile/native/DiscordTag.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const Text_Text = Text(5088);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: { flexGrow: 1, alignItems: "center", flexDirection: "row" },
  botTag: { marginLeft: nativeDefault.space.PX_4 },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DiscordTag(arg0) {
      let Text = require;
      const cResult = c.c(14);
      ({ user, nick, usernameStyle, nicknameStyle, discriminatorStyle, hideBotTag } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === discriminatorStyle) {
        if (cResult[1] === nick) {
          if (cResult[2] === nicknameStyle) {
            if (cResult[3] === user) {
              if (cResult[4] === usernameStyle) {
                if (cResult[6] === tmp3) {
                  if (cResult[7] === tmp4.botTag) {
                    if (cResult[8] === user) {
                      let tmp11 = cResult[9];
                    }
                    if (cResult[10] === tmp4.container) {
                      if (cResult[11] === tmp5) {
                        if (cResult[12] === tmp11) {
                          let tmp18 = cResult[13];
                        }
                        return tmp18;
                      }
                    }
                    const obj2 = { style: tmp4.container, children: null };
                    const items = [tmp5, tmp11];
                    obj2.children = items;
                    const tmp21 = hasOwnProperty(View, obj2);
                    cResult[10] = tmp4.container;
                    cResult[11] = tmp5;
                    cResult[12] = tmp11;
                    cResult[13] = tmp21;
                    tmp18 = tmp21;
                  }
                }
                let bot;
                if (user != null) {
                  bot = user.bot;
                }
                let tmp14 = null;
                if (true === bot) {
                  tmp14 = null;
                  if (!tmp3) {
                    const obj3 = { style: tmp4.botTag, verified: user.isVerifiedBot() };
                    tmp14 = React4(BotTagDefault, obj3);
                  }
                }
                cResult[6] = tmp3;
                cResult[7] = tmp4.botTag;
                cResult[8] = user;
                cResult[9] = tmp14;
                tmp11 = tmp14;
              }
            }
          }
        }
      }
      if (null != nick) {
        Text = Text_Text.Text;
        const obj4 = {
          variant: "text-md/semibold",
          maxFontSizeMultiplier: 2,
          style: nicknameStyle,
          lineClamp: 1,
          children: nick,
        };
        let tmp6Result2 = React4(Text, obj4);
      } else {
        tmp6Result2 = null;
        if (null != user) {
          const obj5 = {
            variant: "text-md/semibold",
            style: usernameStyle,
            lineClamp: 1,
            maxFontSizeMultiplier: 2,
            children: null,
          };
          const items1 = [user.toString()];
          const hasUniqueUsernameResult = user.hasUniqueUsername();
          let tmp6Result = !hasUniqueUsernameResult;
          if (!hasUniqueUsernameResult) {
            const obj6 = {
              variant: "text-md/semibold",
              color: "text-muted",
              style: discriminatorStyle,
              children: null,
            };
            const items2 = ["#", user.discriminator];
            obj6.children = items2;
            tmp6Result = hasOwnProperty(Text_Text.Text, obj6);
          }
          items1[1] = tmp6Result;
          obj5.children = items1;
          tmp6Result2 = hasOwnProperty(Text_Text.Text, obj5);
        }
      }
      cResult[0] = discriminatorStyle;
      cResult[1] = nick;
      cResult[2] = nicknameStyle;
      cResult[3] = user;
      cResult[4] = usernameStyle;
      cResult[5] = tmp6Result2;
    }
  : function DiscordTag(arg0) {
      ({ user, nick, hideBotTag } = arg0);
      ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
      if (hideBotTag === undefined) {
        hideBotTag = false;
      }
      const tmp = closure_6();
      const obj = { style: tmp.container, children: null };
      if (null != nick) {
        const obj2 = {
          variant: "text-md/semibold",
          maxFontSizeMultiplier: 2,
          style: nicknameStyle,
          lineClamp: 1,
          children: nick,
        };
        let tmp2Result2 = React4(Text_Text.Text, obj2);
      } else {
        tmp2Result2 = null;
        if (null != user) {
          const obj3 = {
            variant: "text-md/semibold",
            style: usernameStyle,
            lineClamp: 1,
            maxFontSizeMultiplier: 2,
            children: null,
          };
          const items = [user.toString()];
          const hasUniqueUsernameResult = user.hasUniqueUsername();
          let tmp2Result = !hasUniqueUsernameResult;
          if (!hasUniqueUsernameResult) {
            const obj4 = {
              variant: "text-md/semibold",
              color: "text-muted",
              style: discriminatorStyle,
              children: null,
            };
            const items1 = ["#", user.discriminator];
            obj4.children = items1;
            tmp2Result = hasOwnProperty(Text_Text.Text, obj4);
          }
          items[1] = tmp2Result;
          obj3.children = items;
          tmp2Result2 = hasOwnProperty(Text_Text.Text, obj3);
        }
      }
      const items2 = [tmp2Result2];
      let bot;
      if (user != null) {
        bot = user.bot;
      }
      let tmp13 = null;
      if (true === bot) {
        tmp13 = null;
        if (!hideBotTag) {
          const obj5 = { style: tmp.botTag, verified: user.isVerifiedBot() };
          tmp13 = React4(BotTagDefault, obj5);
        }
      }
      items2[1] = tmp13;
      obj.children = items2;
      return hasOwnProperty(View, obj);
    };

// === Module 9296: DiscordTag ===

// Module 9296 (DiscordTag)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import BotTagDefault from "BotTag" /* 8961 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { flexGrow: 1, alignItems: "center", flexDirection: "row" }, botTag: obj2 };
obj2 = { marginLeft: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let discriminatorStyle;
  let hideBotTag;
  let items;
  let items1;
  let items2;
  let nick;
  let nicknameStyle;
  let tmp7Result2;
  let user;
  let usernameStyle;
  const obj = react2;
  const cResult = obj.c(14);
  ({ user, nick, usernameStyle, nicknameStyle, discriminatorStyle, hideBotTag } = arg0);
  const tmp5 = closure_6();
  if (cResult[0] === discriminatorStyle) {
    if (cResult[1] === nick) {
      if (cResult[2] === nicknameStyle) {
        if (cResult[3] === user) {
          let tmp6;
          if (cResult[4] === usernameStyle) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === (undefined !== hideBotTag && hideBotTag)) {
            if (cResult[7] === tmp5.botTag) {
              let tmp12;
              if (cResult[8] === user) {
                tmp12 = cResult[9];
              }
              if (cResult[10] === tmp5.container) {
                if (cResult[11] === tmp6) {
                  let tmp19;
                  if (cResult[12] === tmp12) {
                    tmp19 = cResult[13];
                  }
                  return tmp19;
                }
              }
              const obj2 = { style: tmp5.container, children: items };
              items = [tmp6, tmp12];
              const tmp22 = hasOwnProperty(View, obj2);
              cResult[10] = tmp5.container;
              cResult[11] = tmp6;
              cResult[12] = tmp12;
              cResult[13] = tmp22;
              tmp19 = tmp22;
            }
          }
          let bot;
          if (user != null) {
            bot = user.bot;
          }
          let tmp15 = null;
          if (true === bot) {
            tmp15 = null;
            if (!(undefined !== hideBotTag && hideBotTag)) {
              const obj3 = { style: tmp5.botTag, verified: user.isVerifiedBot() };
              const tmp18 = BotTagDefault;
              tmp15 = React3(tmp18, obj3);
            }
          }
          cResult[6] = undefined !== hideBotTag && hideBotTag;
          cResult[7] = tmp5.botTag;
          cResult[8] = user;
          cResult[9] = tmp15;
          tmp12 = tmp15;
        }
      }
    }
  }
  if (null != nick) {
    const obj4 = { variant: "text-md/semibold", maxFontSizeMultiplier: 2, style: nicknameStyle, lineClamp: 1, children: nick };
    tmp7Result2 = React3(Text_Text.Text, obj4);
  } else {
    tmp7Result2 = null;
    if (null != user) {
      const obj5 = { variant: "text-md/semibold", style: usernameStyle, lineClamp: 1, maxFontSizeMultiplier: 2, children: items1 };
      const Text = Text_Text.Text;
      items1 = [user.toString(), ];
      let tmp7Result = !user.hasUniqueUsername();
      user.hasUniqueUsername();
      if (tmp7Result) {
        const obj6 = { variant: "text-md/semibold", color: "text-muted", style: discriminatorStyle, children: items2 };
        items2 = ["#", user.discriminator];
        tmp7Result = hasOwnProperty(Text_Text.Text, obj6);
      }
      items1[1] = tmp7Result;
      tmp7Result2 = hasOwnProperty(Text, obj5);
    }
  }
  cResult[0] = discriminatorStyle;
  cResult[1] = nick;
  cResult[2] = nicknameStyle;
  cResult[3] = user;
  cResult[4] = usernameStyle;
  cResult[5] = tmp7Result2;
  tmp6 = tmp7Result2;
}) : ((arg0) => {
  let discriminatorStyle;
  let hideBotTag;
  let items;
  let items1;
  let items2;
  let nick;
  let nicknameStyle;
  let tmp2Result2;
  let user;
  let usernameStyle;
  ({ user, nick, hideBotTag } = arg0);
  ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
  if (hideBotTag === undefined) {
    hideBotTag = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items2 };
  if (null != nick) {
    const obj2 = { variant: "text-md/semibold", maxFontSizeMultiplier: 2, style: nicknameStyle, lineClamp: 1, children: nick };
    tmp2Result2 = React3(Text_Text.Text, obj2);
  } else {
    tmp2Result2 = null;
    if (null != user) {
      const obj3 = { variant: "text-md/semibold", style: usernameStyle, lineClamp: 1, maxFontSizeMultiplier: 2, children: items };
      const Text = Text_Text.Text;
      items = [user.toString(), ];
      let tmp2Result = !user.hasUniqueUsername();
      user.hasUniqueUsername();
      if (tmp2Result) {
        const obj4 = { variant: "text-md/semibold", color: "text-muted", style: discriminatorStyle, children: items1 };
        items1 = ["#", user.discriminator];
        tmp2Result = hasOwnProperty(Text_Text.Text, obj4);
      }
      items[1] = tmp2Result;
      tmp2Result2 = hasOwnProperty(Text, obj3);
    }
  }
  items2 = [tmp2Result2, ];
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  let tmp13 = null;
  if (true === bot) {
    tmp13 = null;
    if (!hideBotTag) {
      const obj5 = { style: tmp.botTag, verified: user.isVerifiedBot() };
      const tmp17 = BotTagDefault;
      tmp13 = React3(tmp17, obj5);
    }
  }
  items2[1] = tmp13;
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default tmp4;
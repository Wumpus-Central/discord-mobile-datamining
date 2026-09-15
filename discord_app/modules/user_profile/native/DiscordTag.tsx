// === Module 9935: DiscordTag ===

// Module 9935 (DiscordTag)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4635 */;
import BotTagDefault from "BotTag" /* 9570 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { flexGrow: 1, alignItems: "center", flexDirection: "row" }, botTag: { marginLeft: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default function DiscordTag(arg0) {
  ({ user, nick, hideBotTag } = arg0);
  ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
  if (hideBotTag === undefined) {
    hideBotTag = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  if (null != nick) {
    const obj2 = { variant: "text-md/semibold", maxFontSizeMultiplier: 2, style: nicknameStyle, lineClamp: 1, children: nick };
    let tmp2Result2 = React4(Text_Text.Text, obj2);
  } else {
    tmp2Result2 = null;
    if (null != user) {
      const obj3 = { variant: "text-md/semibold", style: usernameStyle, lineClamp: 1, maxFontSizeMultiplier: 2, children: null };
      const items = [user.toString(), ];
      const hasUniqueUsernameResult = user.hasUniqueUsername();
      let tmp2Result = !hasUniqueUsernameResult;
      if (!hasUniqueUsernameResult) {
        const obj4 = { variant: "text-md/semibold", color: "text-muted", style: discriminatorStyle, children: null };
        const items1 = ["#", user.discriminator];
        obj4.children = items1;
        tmp2Result = hasOwnProperty(Text_Text.Text, obj4);
      }
      items[1] = tmp2Result;
      obj3.children = items;
      tmp2Result2 = hasOwnProperty(Text_Text.Text, obj3);
    }
  }
  const items2 = [tmp2Result2, ];
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
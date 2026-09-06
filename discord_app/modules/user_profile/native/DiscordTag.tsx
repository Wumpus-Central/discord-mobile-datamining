// discord_app/modules/user_profile/native/DiscordTag.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { flexGrow: 1, alignItems: "center", flexDirection: "row" }, botTag: null };
createStyles = { marginLeft: nativeDefault.space.PX_4 };
createStyles.botTag = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default function DiscordTag(arg0) {
  ({ user, nick, hideBotTag } = arg0);
  ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
  if (hideBotTag === undefined) {
    hideBotTag = false;
  }
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  if (null != nick) {
    obj = { variant: "text-md/semibold", maxFontSizeMultiplier: 2, style: nicknameStyle, lineClamp: 1, children: nick };
    let tmp2Result = React4(Text_Text.Text, obj);
  } else {
    tmp2Result = null;
    if (null != user) {
      obj = {
        variant: "text-md/semibold",
        style: usernameStyle,
        lineClamp: 1,
        maxFontSizeMultiplier: 2,
        children: null,
      };
      const items = [user.toString()];
      const hasUniqueUsernameResult = user.hasUniqueUsername();
      tmp2Result = !hasUniqueUsernameResult;
      if (!hasUniqueUsernameResult) {
        const obj1 = { variant: "text-md/semibold", color: "text-muted", style: discriminatorStyle, children: null };
        const items1 = ["#", user.discriminator];
        obj1.children = items1;
        tmp2Result = tmp2(tmp4(4556).Text, obj1);
      }
      items[1] = tmp2Result;
      obj.children = items;
      tmp2Result = tmp2(Text_Text.Text, obj);
      tmp4 = require;
    }
  }
  const items2 = [tmp2Result];
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  let tmp13 = null;
  if (true === bot) {
    tmp13 = null;
    if (!hideBotTag) {
      const obj2 = { style: tmp.botTag, verified: user.isVerifiedBot() };
      tmp13 = React4(BotTagDefault, obj2);
    }
  }
  items2[1] = tmp13;
  obj.children = items2;
  return hasOwnProperty(View, obj);
}

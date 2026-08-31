// === Module 9732: DiscordTag ===

// Module 9732 (DiscordTag)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4444 */;
import getBotLabelDefault from "getBotLabel" /* 8896 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flexGrow: 1, alignItems: "center", flexDirection: "row" }, botTag: null };
createCacheKey = { marginLeft: ThemesDefault.space.PX_4 };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default function DiscordTag(arg0) {
  ({ user, nick, hideBotTag } = arg0);
  ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
  if (hideBotTag === undefined) {
    hideBotTag = false;
  }
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  if (null != nick) {
    obj = { variant: "text-md/semibold", maxFontSizeMultiplier: 2, style: null, lineClamp: 1, children: null };
    obj[2] = nicknameStyle;
    obj[4] = nick;
    let tmp2Result = callback(Text.Text, obj);
  } else {
    tmp2Result = null;
    if (null != user) {
      obj = { variant: "text-md/semibold", style: null, lineClamp: 1, maxFontSizeMultiplier: 2, children: null };
      obj[1] = usernameStyle;
      const items = [user.toString(), ];
      const hasUniqueUsernameResult = user.hasUniqueUsername();
      tmp2Result = !hasUniqueUsernameResult;
      if (!hasUniqueUsernameResult) {
        obj1 = { variant: "text-md/semibold", color: "text-muted", style: null, children: null };
        obj1[2] = discriminatorStyle;
        const items1 = ["#", user.discriminator];
        obj1[3] = items1;
        tmp2Result = tmp2(tmp4(4444).Text, obj1);
      }
      items[1] = tmp2Result;
      obj[4] = items;
      tmp2Result = tmp2(Text.Text, obj);
      tmp4 = require;
    }
  }
  const items2 = [tmp2Result, ];
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  let tmp13 = null;
  if (true === bot) {
    tmp13 = null;
    if (!hideBotTag) {
      const obj2 = { style: null, verified: null };
      obj2[0] = tmp.botTag;
      obj2[1] = user.isVerifiedBot();
      tmp13 = callback(getBotLabelDefault, obj2);
      const tmp17 = getBotLabelDefault;
    }
  }
  items2[1] = tmp13;
  obj[1] = items2;
  return closure_5(View, obj);
};
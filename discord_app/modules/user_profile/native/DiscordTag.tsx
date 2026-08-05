// discord_app/modules/user_profile/native/DiscordTag.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getBotLabel } from "../../applications/native/BotTag.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flexGrow: 1, alignItems: "center", flexDirection: "row" }, botTag: null };
createCacheKey = { marginLeft: require("Themes").space.PX_4 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default function DiscordTag(arg0) {
  let discriminatorStyle;
  let hideBotTag;
  let nick;
  let nicknameStyle;
  let user;
  let usernameStyle;
  ({ user, nick, hideBotTag } = arg0);
  ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
  if (hideBotTag === undefined) {
    hideBotTag = false;
  }
  const tmp = createCacheKey();
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
        const obj1 = { variant: "text-md/semibold", color: "text-muted", style: null, children: null };
        obj1[2] = discriminatorStyle;
        const items1 = ["#", user.discriminator];
        obj1[3] = items1;
        tmp2Result = tmp2(tmp4(4281).Text, obj1);
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
      tmp13 = callback(getBotLabel, obj2);
      const tmp17 = getBotLabel;
    }
  }
  items2[1] = tmp13;
  obj[1] = items2;
  return closure_5(View, obj);
};
// === Module 12254: ? ===

// Module 12254
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getAvatarURL from "getAvatarURL" /* 1430 */;
import ArrowSmallLeftIcon from "ArrowSmallLeftIcon" /* 9395 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12248 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let obj = { icon: null };
obj = { height: 40, width: 40, resizeMode: "contain", borderRadius: ThemesDefault.radii.md };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  let tmp2Result;
  const tmp = callback();
  const tmp3 = importDefault;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    let obj = { style: null, source: null };
    obj[0] = tmp.icon;
    obj1 = getAvatarURL;
    obj[1] = obj1.makeSource(pendingGameProfileReturn.gameIconUrl);
    tmp2Result = tmp2(Image, obj);
  }
  obj = { type: "simple-action", icon: tmp2Result, message: null, actionLabel: null, actionIcon: null, actionOnPress: null };
  const intl = getSystemLocale.intl;
  obj = { gameName: pendingGameProfileReturn.gameName };
  obj[2] = intl.format(getSystemLocale.t.HRHaSF, obj);
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t.DjifDP);
  obj1 = { color: ThemesDefault.colors.WHITE };
  obj[4] = jsx(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { color: ThemesDefault.colors.WHITE });
  obj[5] = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return jsx(ChatInputGuardDefault, { gameName: pendingGameProfileReturn.gameName });
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default memoResult;
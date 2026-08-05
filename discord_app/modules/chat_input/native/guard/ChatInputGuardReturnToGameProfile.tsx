// discord_app/modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { ArrowSmallLeftIcon } from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallLeftIcon.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getAvatarURL } from "../../../../utils/AvatarUtils.tsx";
import { ChatInputGuard } from "ChatInputGuard.tsx";

const require = arg1;
let obj = { icon: null };
obj = { height: 40, width: 40, resizeMode: "contain", borderRadius: require("Themes").radii.md };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  let tmp2Result;
  const tmp = callback();
  const tmp3 = importDefault;
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    let obj = { style: null, source: null };
    obj[0] = tmp.icon;
    let obj1 = getAvatarURL /* getAvatarURL */;
    obj[1] = obj1.makeSource(pendingGameProfileReturn.gameIconUrl);
    tmp2Result = tmp2(Image, obj);
  }
  obj = { type: "simple-action", icon: tmp2Result, message: null, actionLabel: null, actionIcon: null, actionOnPress: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj = { gameName: pendingGameProfileReturn.gameName };
  obj[2] = intl.format(getSystemLocale /* getSystemLocale */.t.HRHaSF, obj);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl2.string(getSystemLocale /* getSystemLocale */.t.DjifDP);
  obj1 = { color: null };
  obj1[0] = tmp3(712).colors.WHITE;
  obj[4] = jsx(ArrowSmallLeftIcon /* ArrowSmallLeftIcon */.ArrowSmallLeftIcon, { color: null });
  obj[5] = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return jsx(ChatInputGuard, { gameName: pendingGameProfileReturn.gameName });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default memoResult;
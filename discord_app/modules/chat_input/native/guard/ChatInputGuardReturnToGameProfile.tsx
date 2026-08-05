// discord_app/modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

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
    let obj1 = require("../../../../utils/AvatarUtils.tsx") /* getAvatarURL */;
    obj[1] = obj1.makeSource(pendingGameProfileReturn.gameIconUrl);
    tmp2Result = tmp2(Image, obj);
  }
  obj = { type: "simple-action", icon: tmp2Result, message: null, actionLabel: null, actionIcon: null, actionOnPress: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { gameName: pendingGameProfileReturn.gameName };
  obj[2] = intl.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.HRHaSF, obj);
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.DjifDP);
  obj1 = { color: null };
  obj1[0] = tmp3(712).colors.WHITE;
  obj[4] = jsx(require("../../../../design/components/Icon/native/redesign/generated/ArrowSmallLeftIcon.tsx") /* ArrowSmallLeftIcon */.ArrowSmallLeftIcon, { color: null });
  obj[5] = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return jsx(require("ChatInputGuard.tsx"), { gameName: pendingGameProfileReturn.gameName });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default memoResult;
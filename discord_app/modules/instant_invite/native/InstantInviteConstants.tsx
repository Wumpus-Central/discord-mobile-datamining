let obj = { TWITTER: "twitter", WHATSAPP: "whatsapp", GMAIL: "googlegmail", LINE: "line", MESSENGER: "fb-messenger", TELEGRAM: "tg" };
obj = { [obj.TWITTER]: (arg0) => "twitter://post?message=" + arg0, [obj.WHATSAPP]: (arg0) => "whatsapp://send?text=" + arg0, [obj.GMAIL]: (arg0, arg1) => "googlegmail://co?subject=" + arg0 + "&body=" + arg1, [obj.LINE]: (arg0) => "https://line.me/R/msg/text/?" + arg0, [obj.MESSENGER]: (arg0) => "fb-messenger://share/?link=" + arg0, [obj.TELEGRAM]: (arg0, arg1) => "https://telegram.me/share/url?url=" + arg1 + "&text=" + arg0 };
const result = require("set").fileFinishedImporting("modules/instant_invite/native/InstantInviteConstants.tsx");

export const SHARE_APPS_KEY = obj;
export const SHARE_URLS = obj;
export const IOS_COPY_TO_PASTEBOARD = "CopyToPasteboard";
// discord_app/utils/FriendsUtils.tsx
import _slicedToArray from "_slicedToArray";
import ME from "ME";

let c4;
let c5;
const require = arg1;
function validateDiscordTag(arr) {
  let stringResult = null;
  if (!regex3.test(arr)) {
    if (!arr.includes("#")) {
      const tmp4 = callback(arr.split("#"), 2);
      let str2 = tmp4[1];
      let obj = importDefault(698);
      obj = { reason: "Invalid Username", query: null, discrim_len: null, username_len: null, is_email_like: null, is_invite_like: null, is_num_only: null };
      obj[1] = arr;
      if (str2 == null) {
        str2 = "";
      }
      obj[2] = str2.length;
      obj[3] = tmp4[0].length;
      let tmp5Result = tmp5(8210);
      obj[4] = tmp5Result.isEmail(arr);
      tmp5Result = tmp5(8210);
      obj[5] = tmp5Result.isInvite(arr);
      obj[6] = regex.test(arr);
      obj.track(constants2.FRIEND_REQUEST_FAILED, obj);
      const intl = require(1236) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1236) /* getSystemLocale */.t.paDJBM);
    } else {
      stringResult = null;
    }
  }
  return stringResult;
}
function humanizeAbortCode(arg0, substr) {
  if (constants.RELATIONSHIP_INCOMING_DISABLED === arg0) {
    const intl7 = require(1236) /* getSystemLocale */.intl;
    const obj = { discordTag: null };
    obj[0] = substr;
    return intl7.format(require(1236) /* getSystemLocale */.t.Oxe6Ur, obj);
  } else if (tmp.TOO_MANY_FRIENDS === arg0) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t.tnBalD);
  } else if (tmp.RELATIONSHIP_ALREADY_FRIENDS === arg0) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t.VNLneq);
  } else {
    if (tmp.USER_QUARANTINED !== arg0) {
      if (tmp.USER_FRIEND_REQUEST_LIMITED_ACCESS !== arg0) {
        if (tmp.TOO_MANY_BLOCKED_USERS === arg0) {
          const intl3 = require(1236) /* getSystemLocale */.intl;
          return intl3.string(require(1236) /* getSystemLocale */.t.sIGo1i);
        } else if (tmp.TOO_MANY_PENDING_OUTGOING === arg0) {
          const intl2 = require(1236) /* getSystemLocale */.intl;
          return intl2.string(require(1236) /* getSystemLocale */.t.k1K15p);
        } else {
          if (tmp.RELATIONSHIP_INCOMING_BLOCKED !== arg0) {
            if (tmp.RELATIONSHIP_INVALID_SELF !== arg0) {
              if (tmp.RELATIONSHIP_INVALUD_USER_BOT !== arg0) {
                const RELATIONSHIP_INVALID_DISCORD_TAG = tmp.RELATIONSHIP_INVALID_DISCORD_TAG;
              }
            }
          }
          const intl = require(1236) /* getSystemLocale */.intl;
          return intl.string(require(1236) /* getSystemLocale */.t.paDJBM);
        }
      }
    }
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.EouHwv);
  }
}
({ AbortCodes: c4, AnalyticEvents: c5 } = ME);
const re6 = /^\d+$/;
const re7 = /^(.+?@.+?\..+?|.+?#\d{4})$/;
const re8 = /^[a-zA-Z0-9_\\.]+$/;
const result = require("getSystemLocale").fileFinishedImporting("utils/FriendsUtils.tsx");

export { validateDiscordTag };
export const isValidDiscordTag = function isValidDiscordTag(arr) {
  return null == validateDiscordTag(arr);
};
export { humanizeAbortCode };
export const humanizeAbortCodeForA11y = function humanizeAbortCodeForA11y(arg0, substr) {
  let formatToPlainStringResult = humanizeAbortCode(arg0, substr);
  if (arg0 === constants.RELATIONSHIP_INCOMING_DISABLED) {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { discordTag: null };
    obj[0] = substr;
    formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["ihb+UW"], obj);
  }
  importDefault(38)(typeof formatToPlainStringResult === "y", "abortCode should be a string for a11y");
  return formatToPlainStringResult;
};
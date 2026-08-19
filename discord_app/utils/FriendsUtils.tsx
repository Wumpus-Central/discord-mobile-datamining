// === Module 9740: validateDiscordTag ===

// Module 9740 (validateDiscordTag)
import _modDef38 from "module_38" /* 38 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import obj132Default from "obj132" /* 8781 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ME from "ME" /* 676 */;

require = fn;
function validateDiscordTag(substr) {
  let stringResult = null;
  if (!regex3.test(substr)) {
    if (!substr.includes("#")) {
      const tmp4 = callback(substr.split("#"), 2);
      let str2 = tmp4[1];
      const obj = { reason: "Invalid Username", query: null, discrim_len: null, username_len: null, is_email_like: null, is_invite_like: null, is_num_only: null };
      obj[1] = substr;
      if (str2 == null) {
        str2 = "";
      }
      obj[2] = str2.length;
      obj[3] = tmp4[0].length;
      let tmp5Result = obj132Default;
      obj[4] = tmp5Result.isEmail(substr);
      tmp5Result = obj132Default;
      obj[5] = tmp5Result.isInvite(substr);
      obj[6] = regex.test(substr);
      obj.track(constants2.FRIEND_REQUEST_FAILED, obj);
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.paDJBM);
    } else {
      stringResult = null;
    }
  }
  return stringResult;
}
function humanizeAbortCode(arg0, substr) {
  if (constants.RELATIONSHIP_INCOMING_DISABLED === arg0) {
    const intl7 = getSystemLocale.intl;
    const obj = { discordTag: null };
    obj[0] = substr;
    return intl7.format(getSystemLocale.t.Oxe6Ur, obj);
  } else if (constants.TOO_MANY_FRIENDS === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.tnBalD);
  } else if (constants.RELATIONSHIP_ALREADY_FRIENDS === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.VNLneq);
  } else {
    if (constants.USER_QUARANTINED !== arg0) {
      if (constants.USER_FRIEND_REQUEST_LIMITED_ACCESS !== arg0) {
        if (constants.TOO_MANY_BLOCKED_USERS === arg0) {
          const intl3 = getSystemLocale.intl;
          return intl3.string(getSystemLocale.t.sIGo1i);
        } else if (constants.TOO_MANY_PENDING_OUTGOING === arg0) {
          const intl2 = getSystemLocale.intl;
          return intl2.string(getSystemLocale.t.k1K15p);
        } else {
          if (constants.RELATIONSHIP_INCOMING_BLOCKED !== arg0) {
            if (constants.RELATIONSHIP_INVALID_SELF !== arg0) {
              if (constants.RELATIONSHIP_INVALUD_USER_BOT !== arg0) {
                const RELATIONSHIP_INVALID_DISCORD_TAG = constants.RELATIONSHIP_INVALID_DISCORD_TAG;
              }
            }
          }
          const intl = getSystemLocale.intl;
          return intl.string(getSystemLocale.t.paDJBM);
        }
      }
    }
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.EouHwv);
  }
}
({ AbortCodes: c4, AnalyticEvents: c5 } = ME);
const re6 = /^\d+$/;
const re7 = /^(.+?@.+?\..+?|.+?#\d{4})$/;
const re8 = /^[a-zA-Z0-9_\\.]+$/;
const result = require("obj132").fileFinishedImporting("utils/FriendsUtils.tsx");

export { validateDiscordTag };
export const isValidDiscordTag = function isValidDiscordTag(substr) {
  return null == validateDiscordTag(substr);
};
export { humanizeAbortCode };
export const humanizeAbortCodeForA11y = function humanizeAbortCodeForA11y(arg0, substr) {
  let formatToPlainStringResult = humanizeAbortCode(arg0, substr);
  if (arg0 === constants.RELATIONSHIP_INCOMING_DISABLED) {
    const intl = getSystemLocale.intl;
    const obj = { discordTag: null };
    obj[0] = substr;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["ihb+UW"], obj);
  }
  _modDef38(typeof formatToPlainStringResult === "string", "abortCode should be a string for a11y");
  return formatToPlainStringResult;
};
// === Module 9438: FriendsUtils ===

// Module 9438 (FriendsUtils)
import _modDef38 from "module_38" /* 38 */;
import intl8 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ValidationUtilsDefault from "ValidationUtils" /* 8052 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function validateDiscordTag(substr) {
  let first;
  let str2;
  let tmp5Result;
  let tmp5Result2;
  let stringResult = null;
  if (!re8.test(substr)) {
    if (!substr.includes("#")) {
      [first, str2] = substr.split("#");
      const obj = { reason: "Invalid Username", query: substr, discrim_len: str2.length, username_len: first.length, is_email_like: tmp5Result.isEmail(substr), is_invite_like: tmp5Result2.isInvite(substr), is_num_only: re6.test(substr) };
      const track = AnalyticsUtilsDefault.track;
      const FRIEND_REQUEST_FAILED = hasOwnProperty.FRIEND_REQUEST_FAILED;
      AnalyticsUtilsDefault;
      tmp5Result = ValidationUtilsDefault;
      tmp5Result2 = ValidationUtilsDefault;
      track(FRIEND_REQUEST_FAILED, obj);
      const intl = intl8.intl;
      stringResult = intl.string(intl8.t.paDJBM);
    } else {
      stringResult = null;
    }
  }
  return stringResult;
}
function humanizeAbortCode(arg0, trimmed) {
  if (constants.RELATIONSHIP_INCOMING_DISABLED === arg0) {
    const intl7 = intl8.intl;
    const obj = { discordTag: trimmed };
    return intl7.format(intl8.t.Oxe6Ur, obj);
  } else if (constants.TOO_MANY_FRIENDS === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t.tnBalD);
  } else if (constants.RELATIONSHIP_ALREADY_FRIENDS === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t.VNLneq);
  } else {
    if (constants.USER_QUARANTINED !== arg0) {
      if (constants.USER_FRIEND_REQUEST_LIMITED_ACCESS !== arg0) {
        if (constants.TOO_MANY_BLOCKED_USERS === arg0) {
          const intl3 = intl8.intl;
          return intl3.string(intl8.t.sIGo1i);
        } else if (constants.TOO_MANY_PENDING_OUTGOING === arg0) {
          const intl2 = intl8.intl;
          return intl2.string(intl8.t.k1K15p);
        } else {
          if (constants.RELATIONSHIP_INCOMING_BLOCKED !== arg0) {
            if (constants.RELATIONSHIP_INVALID_SELF !== arg0) {
              if (constants.RELATIONSHIP_INVALUD_USER_BOT !== arg0) {
                const RELATIONSHIP_INVALID_DISCORD_TAG = constants.RELATIONSHIP_INVALID_DISCORD_TAG;
              }
            }
          }
          const intl = intl8.intl;
          return intl.string(intl8.t.paDJBM);
        }
      }
    }
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.EouHwv);
  }
}
({ AbortCodes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const re6 = /^\d+$/;
const re7 = /^(.+?@.+?\..+?|.+?#\d{4})$/;
const re8 = /^[a-zA-Z0-9_\\.]+$/;
const result = size.fileFinishedImporting("utils/FriendsUtils.tsx");

export { validateDiscordTag };
export const isValidDiscordTag = function isValidDiscordTag(substr) {
  return null == validateDiscordTag(substr);
};
export { humanizeAbortCode };
export const humanizeAbortCodeForA11y = function humanizeAbortCodeForA11y(arg0, trimmed) {
  let formatToPlainStringResult = humanizeAbortCode(arg0, trimmed);
  if (arg0 === constants.RELATIONSHIP_INCOMING_DISABLED) {
    const intl = intl8.intl;
    const obj = { discordTag: trimmed };
    formatToPlainStringResult = intl.formatToPlainString(intl8.t["ihb+UW"], obj);
  }
  _modDef38(typeof formatToPlainStringResult === "string", "abortCode should be a string for a11y");
  return formatToPlainStringResult;
};
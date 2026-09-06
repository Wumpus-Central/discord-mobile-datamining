// discord_app/utils/FriendsUtils.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import util from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "AnalyticsUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";

require = fn;
function validateDiscordTag(substr) {
  let stringResult = null;
  if (!re8.test(substr)) {
    if (!substr.includes("#")) {
      const tmp4 = _slicedToArray(substr.split("#"), 2);
      let str2 = tmp4[1];
      const obj = {
        reason: "Invalid Username",
        query: substr,
        discrim_len: null,
        username_len: null,
        is_email_like: null,
        is_invite_like: null,
        is_num_only: null,
      };
      if (str2 == null) {
        str2 = "";
      }
      obj.discrim_len = str2.length;
      obj.username_len = tmp4[0].length;
      let tmp5Result = tmp5(8376);
      obj.is_email_like = tmp5Result.isEmail(substr);
      tmp5Result = tmp5(8376);
      obj.is_invite_like = tmp5Result.isInvite(substr);
      obj.is_num_only = re6.test(substr);
      obj.track(constants2.FRIEND_REQUEST_FAILED, obj);
      const intl = util.intl;
      stringResult = intl.string(util.t.paDJBM);
    } else {
      stringResult = null;
    }
  }
  return stringResult;
}
function humanizeAbortCode(arg0, substr) {
  if (constants.RELATIONSHIP_INCOMING_DISABLED === arg0) {
    const intl7 = util.intl;
    const obj = { discordTag: substr };
    return intl7.format(util.t.Oxe6Ur, obj);
  } else if (tmp.TOO_MANY_FRIENDS === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.tnBalD);
  } else if (tmp.RELATIONSHIP_ALREADY_FRIENDS === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t.VNLneq);
  } else {
    if (tmp.USER_QUARANTINED !== arg0) {
      if (tmp.USER_FRIEND_REQUEST_LIMITED_ACCESS !== arg0) {
        if (tmp.TOO_MANY_BLOCKED_USERS === arg0) {
          const intl3 = util.intl;
          return intl3.string(util.t.sIGo1i);
        } else if (tmp.TOO_MANY_PENDING_OUTGOING === arg0) {
          const intl2 = util.intl;
          return intl2.string(util.t.k1K15p);
        } else {
          if (tmp.RELATIONSHIP_INCOMING_BLOCKED !== arg0) {
            if (tmp.RELATIONSHIP_INVALID_SELF !== arg0) {
              if (tmp.RELATIONSHIP_INVALUD_USER_BOT !== arg0) {
                const RELATIONSHIP_INVALID_DISCORD_TAG = tmp.RELATIONSHIP_INVALID_DISCORD_TAG;
              }
            }
          }
          const intl = util.intl;
          return intl.string(util.t.paDJBM);
        }
      }
    }
    const intl4 = util.intl;
    return intl4.string(util.t.EouHwv);
  }
}
const Constants = fn(1074);
({ AbortCodes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const re6 = /^\d+$/;
const re7 = /^(.+?@.+?\..+?|.+?#\d{4})$/;
const re8 = /^[a-zA-Z0-9_\\.]+$/;
const size = fn(2);
const result = size.fileFinishedImporting("utils/FriendsUtils.tsx");

export { validateDiscordTag };
export const isValidDiscordTag = function isValidDiscordTag(substr) {
  return null == validateDiscordTag(substr);
};
export { humanizeAbortCode };
export const humanizeAbortCodeForA11y = function humanizeAbortCodeForA11y(arg0, substr) {
  let formatToPlainStringResult = humanizeAbortCode(arg0, substr);
  if (arg0 === constants.RELATIONSHIP_INCOMING_DISABLED) {
    const intl = util.intl;
    const obj = { discordTag: substr };
    formatToPlainStringResult = intl.formatToPlainString(util.t["ihb+UW"], obj);
  }
  _modDef38(typeof formatToPlainStringResult === "string", "abortCode should be a string for a11y");
  return formatToPlainStringResult;
};

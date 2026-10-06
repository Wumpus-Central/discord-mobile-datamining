// === Module 17843: RoleIconUploadUtils ===

// Module 17843 (RoleIconUploadUtils)
import Constants from "Constants" /* 1085 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, closure_4, id, readFileAsBase64;

let obj = function _fetchCustomEmojiAsPngDataUri() {
  obj = _asyncToGenerator(async (id) => {
    let c5 = 0;
    let c6 = 0;
    return (async (arg0) => {
      let obj10;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_4 = tmp4;
              id = undefined;
              readFileAsBase64 = undefined;
              const _fetch = fetch;
              c5 = 1;
              c6 = 1;
              const obj4 = { id, animated: false, size, forcePNG: true };
              const obj5 = { value: fetch(obj10.getEmojiURL(obj4)), done: false };
              obj10 = AvatarUtils;
              return obj5;
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              id = value;
              const tmp16 = closure_131_0(closure_131_1[4]);
              closure_2 = tmp16;
              readFileAsBase64 = tmp16.readFileAsBase64;
              c5 = 2;
              c6 = 1;
              const obj7 = { value: id.blob(), done: false };
              return obj7;
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 3;
              c6 = 1;
              const obj9 = { value: readFileAsBase64(value), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            readFileAsBase64 = value;
            c6 = 3;
            obj = { value: closure_131_3 + readFileAsBase64.slice(readFileAsBase64.indexOf(",") + 1), done: true };
            return obj;
          }
        } catch (tmp18) {
          c6 = 3;
          throw tmp18;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Base64PNGPrefix = Constants.Base64PNGPrefix;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const result = size.fileFinishedImporting("modules/guild_settings/roles/RoleIconUploadUtils.tsx");

export const ROLE_ICON_MAX_FILE_SIZE = 256000;
export const fetchCustomEmojiAsPngDataUri = function fetchCustomEmojiAsPngDataUri() {
  return obj(...arguments);
};
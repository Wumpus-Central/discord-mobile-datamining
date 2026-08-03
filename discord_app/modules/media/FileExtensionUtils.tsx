// === Module 5266: decideFileExtension ===

// Module 5266 (decideFileExtension)
let closure_2 = { "image/avif": "avif", "image/gif": "gif", "image/heic": "heic", "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "video/mp4": "mp4", "video/quicktime": "mov", "video/webm": "webm" };
const result = require("set").fileFinishedImporting("modules/media/FileExtensionUtils.tsx");

export const decideFileExtension = function decideFileExtension(closure_0, contentType, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let tmp;
  if (flag) {
    const toURLSafeResult = importDefault(1467).toURLSafe(closure_0);
    let formatted;
    if (toURLSafeResult != null) {
      const searchParams = toURLSafeResult.searchParams;
      const str2 = searchParams.get("format");
      if (str2 != null) {
        formatted = str2.toLowerCase();
      }
    }
    let tmp7;
    if (null != formatted) {
      if ("" !== formatted) {
        let str4 = "jpg";
        if ("jpeg" !== formatted) {
          str4 = formatted;
        }
        tmp7 = str4;
      }
    }
    tmp = tmp7;
    const obj = importDefault(1467);
  }
  if (tmp == null) {
    let tmp9;
    if (null != contentType) {
      const str6 = contentType.toLowerCase();
      if (obj2.test(str6)) {
        tmp9 = table[str6];
        if (null == tmp9) {
          const tmp11 = str6.split("/")[1];
          let str8 = "jpg";
          if ("jpeg" !== tmp11) {
            let tmp12;
            if (null != tmp11) {
              tmp12 = tmp11;
            }
            str8 = tmp12;
          }
          tmp9 = str8;
        }
      }
      obj2 = /^(image|video)\//;
    }
    tmp = tmp9;
  }
  if (tmp == null) {
    const toURLSafeResult1 = importDefault(1467).toURLSafe(closure_0);
    let tmp15;
    if (null != toURLSafeResult1) {
      let formatted1;
      if (toURLSafeResult1.pathname != null) {
        const parts = str10.split(".");
        if (parts != null) {
          const str12 = parts.pop();
          if (str12 != null) {
            formatted1 = str12.toLowerCase();
          }
        }
      }
      let tmp14;
      if (null != formatted1) {
        if (formatted1.length <= 5) {
          tmp14 = formatted1;
        }
      }
      tmp15 = tmp14;
    }
    tmp = tmp15;
    const obj3 = importDefault(1467);
  }
  return tmp;
};
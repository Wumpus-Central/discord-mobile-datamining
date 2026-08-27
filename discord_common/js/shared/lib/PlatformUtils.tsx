// === Module 4707: isTablet ===

// Module 4707 (isTablet)
import importDefaultResult1 from "format" /* 669 */;
import set from "set" /* 2 */;

let set = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]);
const set1 = new Set(["Android", "iOS", "Windows Phone"]);
let platform;
if (window != null) {
  const _navigator = window.navigator;
  if (_navigator != null) {
    platform = _navigator.platform;
  }
}
let tmp3 = "MacIntel" === platform;
if (tmp3) {
  let standalone;
  if (window != null) {
    const _navigator2 = window.navigator;
    if (_navigator2 != null) {
      standalone = _navigator2.standalone;
    }
  }
  tmp3 = undefined !== standalone;
}
if (tmp3) {
  let maxTouchPoints;
  if (window != null) {
    const _navigator3 = window.navigator;
    if (_navigator3 != null) {
      maxTouchPoints = _navigator3.maxTouchPoints;
    }
  }
  tmp3 = maxTouchPoints > 1;
}
let str = importDefaultResult1.product;
if (str == null) {
  str = "";
}
const tmp6 = set.has(str) || tmp3;
let hasItem = !tmp6;
if (!tmp6) {
  const importDefaultResult = importDefaultResult1;
  let str2;
  if (importDefaultResult != null) {
    const os = importDefaultResult.os;
    if (os != null) {
      str2 = os.family;
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  hasItem = set1.has(str2);
}
let family;
if (importDefaultResult1 != null) {
  const os2 = importDefaultResult1.os;
  if (os2 != null) {
    family = os2.family;
  }
}
const importDefaultResult2 = importDefaultResult1;
let family1;
if (importDefaultResult2 != null) {
  const os3 = importDefaultResult2.os;
  if (os3 != null) {
    family1 = os3.family;
  }
}
const result = set.fileFinishedImporting("../discord_common/js/shared/lib/PlatformUtils.tsx");

export const isTablet = tmp6;
export const isMobile = hasItem;
export const isIOSWeb = "iOS" === family;
export const isAndroidWeb = "Android" === family1;
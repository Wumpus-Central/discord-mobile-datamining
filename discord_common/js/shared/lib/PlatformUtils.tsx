// === Module 4801: shared/PlatformUtils ===

// Module 4801 (shared/PlatformUtils)
import format from "format" /* 1341 */;

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
let str = format.product;
if (str == null) {
  str = "";
}
const tmp6 = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]).has(str) || tmp3;
let hasItem = !tmp6;
if (!tmp6) {
  const importDefaultResult = format;
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
if (format != null) {
  const os2 = format.os;
  if (os2 != null) {
    family = os2.family;
  }
}
let family1;
if (format != null) {
  const os3 = format.os;
  if (os3 != null) {
    family1 = os3.family;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/lib/PlatformUtils.tsx");

export const isTablet = tmp6;
export const isMobile = hasItem;
export const isIOSWeb = "iOS" === family;
export const isAndroidWeb = "Android" === family1;
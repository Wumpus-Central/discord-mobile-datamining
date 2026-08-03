import _slicedToArray from "_slicedToArray";
import set from "set";
import set from "set";
import set from "isIOSWithWebM";

const require = arg1;
const re3 = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
const re4 = /\.(webp|gif|avif)$/i;
if (set.isIOS()) {
  let tmp2 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
} else {
  tmp2 = require("set").isAndroid() ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
  let obj2 = require("set");
}
let c5 = tmp2;
const re6 = /\.(webm)$/i;
const re7 = /\.(riv)$/i;
if (set.isIOS()) {
  let tmp4 = /\.(mp4|mov|qt)$/i;
} else {
  require("set").isAndroid();
  tmp4 = /\.(mp4|webm|mov|qt)$/i;
  const obj4 = require("set");
}
const metroImportAll = tmp4;
function urlMatchesFileExtension(sourceURI, GIF_RE_IOS) {
  if (null == sourceURI) {
    return false;
  } else {
    const tmp3 = callback(sourceURI.split(/\?/, 1), 2);
    return GIF_RE_IOS.test(tmp3[0]);
  }
}
function isWebPlayerVideoUrl(mediaUrl) {
  let isIOSWithWebMResult = require(4444) /* isIOSWithWebM */.isIOSWithWebM();
  if (isIOSWithWebMResult) {
    let flag = false;
    if (null != mediaUrl) {
      const tmp5 = callback(mediaUrl.split(/\?/, 1), 2);
      flag = obj2.test(tmp5[0]);
    }
    isIOSWithWebMResult = flag;
    obj2 = closure_6;
  }
  return isIOSWithWebMResult;
}
function isWebPlayerVideoFile(filename) {
  let isIOSWithWebMResult = null != filename;
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = require(4444) /* isIOSWithWebM */.isIOSWithWebM();
    const obj = require(4444) /* isIOSWithWebM */;
  }
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = regex2.test(filename);
  }
  return isIOSWithWebMResult;
}
const result = set.fileFinishedImporting("modules/messages/MediaFormatTesters.tsx");

export { urlMatchesFileExtension };
export const isImageUrl = function isImageUrl(url) {
  let flag = false;
  if (null != url) {
    const tmp2 = callback(url.split(/\?/, 1), 2);
    flag = closure_3.test(tmp2[0]);
  }
  return flag;
};
export const isImageFile = function isImageFile(filename) {
  let isMatch = null != filename;
  if (isMatch) {
    isMatch = regex.test(filename);
  }
  return isMatch;
};
export const isImageContentType = function isImageContentType(contentType) {
  let flag = false;
  if (null != contentType) {
    const tmp2 = callback(contentType.split("/"), 2);
    flag = tmp2[0] === "image";
  }
  return flag;
};
export const isAnimatedImageUrl = function isAnimatedImageUrl(coverImage) {
  let flag = false;
  if (null != coverImage) {
    const tmp2 = callback(coverImage.split(/\?/, 1), 2);
    flag = closure_4.test(tmp2[0]);
  }
  return flag;
};
export const isAudioFile = function isAudioFile(filename) {
  let isMatch = null != filename;
  if (isMatch) {
    isMatch = tmp2.test(filename);
  }
  return isMatch;
};
export { isWebPlayerVideoUrl };
export const isVideoUrl = function isVideoUrl(url) {
  let flag = false;
  if (null != url) {
    const tmp2 = callback(url.split(/\?/, 1), 2);
    flag = closure_8.test(tmp2[0]);
  }
  if (!flag) {
    let isIOSWithWebMResult = require(4444) /* isIOSWithWebM */.isIOSWithWebM();
    if (isIOSWithWebMResult) {
      let flag2 = false;
      if (null != url) {
        const tmp8 = callback(url.split(/\?/, 1), 2);
        flag2 = obj3.test(tmp8[0]);
      }
      isIOSWithWebMResult = flag2;
      obj3 = closure_6;
    }
    flag = isIOSWithWebMResult;
    const obj2 = require(4444) /* isIOSWithWebM */;
  }
  return flag;
};
export { isWebPlayerVideoFile };
export const isVideoFile = function isVideoFile(filename) {
  let tmp = null != filename;
  if (tmp) {
    let isMatch = tmp4.test(filename);
    if (!isMatch) {
      let isIOSWithWebMResult = null != filename;
      if (isIOSWithWebMResult) {
        isIOSWithWebMResult = require(4444) /* isIOSWithWebM */.isIOSWithWebM();
        const obj = require(4444) /* isIOSWithWebM */;
      }
      if (isIOSWithWebMResult) {
        isIOSWithWebMResult = regex2.test(filename);
      }
      isMatch = isIOSWithWebMResult;
    }
    tmp = isMatch;
  }
  return tmp;
};
export const isRiveFile = function isRiveFile(arg0) {
  let isMatch = null != arg0;
  if (isMatch) {
    isMatch = regex3.test(arg0);
  }
  return isMatch;
};
export const isVideoContentType = function isVideoContentType(contentType) {
  let flag = false;
  if (null != contentType) {
    const tmp2 = callback(contentType.split("/"), 2);
    flag = tmp2[0] === "video";
  }
  return flag;
};
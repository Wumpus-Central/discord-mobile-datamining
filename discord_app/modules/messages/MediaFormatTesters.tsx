// === Module 5046: MediaFormatTesters ===

// Module 5046 (MediaFormatTesters)
import WebViewWebmSupportTest from "WebViewWebmSupportTest" /* 5047 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp4;
const re3 = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
const re4 = /\.(webp|gif|avif)$/i;
const re5 = /\.gif$/i;
let PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isIOS()) {
  tmp2 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
} else {
  const _module1 = PlatformUtils;
  tmp2 = _module1.isAndroid() ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
}
const regex = tmp2;
const re7 = /\.(webm)$/i;
const re8 = /\.(riv)$/i;
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isIOS()) {
  tmp4 = /\.(mp4|mov|qt)$/i;
} else {
  const _module3 = PlatformUtils;
  _module3.isAndroid();
  tmp4 = /\.(mp4|webm|mov|qt)$/i;
}
const re9 = tmp4;
function urlMatchesFileExtension(sourceURI, GIF_RE_IOS) {
  if (null == sourceURI) {
    return false;
  } else {
    const tmp3 = _slicedToArray(sourceURI.split(/\?/, 1), 2);
    return GIF_RE_IOS.test(tmp3[0]);
  }
}
function isWebPlayerVideoUrl(mediaUrl) {
  const obj = WebViewWebmSupportTest;
  let isIOSWithWebMResult = obj.isIOSWithWebM();
  if (isIOSWithWebMResult) {
    let flag = false;
    if (null != mediaUrl) {
      const tmp5 = _slicedToArray(mediaUrl.split(/\?/, 1), 2);
      flag = re7.test(tmp5[0]);
    }
    isIOSWithWebMResult = flag;
  }
  return isIOSWithWebMResult;
}
function isWebPlayerVideoFile(filename) {
  let isIOSWithWebMResult = null != filename;
  if (isIOSWithWebMResult) {
    const obj = WebViewWebmSupportTest;
    isIOSWithWebMResult = obj.isIOSWithWebM();
  }
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = re7.test(filename);
  }
  return isIOSWithWebMResult;
}
const result = size.fileFinishedImporting("modules/messages/MediaFormatTesters.tsx");

export { urlMatchesFileExtension };
export const isImageUrl = function isImageUrl(url) {
  let flag = false;
  if (null != url) {
    const tmp2 = _slicedToArray(url.split(/\?/, 1), 2);
    flag = re3.test(tmp2[0]);
  }
  return flag;
};
export const isImageFile = function isImageFile(filename) {
  const isMatch = null != filename && re3.test(filename);
  return isMatch;
};
export const isImageContentType = function isImageContentType(contentType) {
  let flag = false;
  if (null != contentType) {
    flag = _slicedToArray(contentType.split("/"), 2)[0] === "image";
    const tmp2 = _slicedToArray(contentType.split("/"), 2);
  }
  return flag;
};
export const isAnimatedImageUrl = function isAnimatedImageUrl(coverImage) {
  let flag = false;
  if (null != coverImage) {
    const tmp2 = _slicedToArray(coverImage.split(/\?/, 1), 2);
    flag = re4.test(tmp2[0]);
  }
  return flag;
};
export const isGifLikeFile = function isGifLikeFile(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    let isMatch = re5.test(arg0);
    if (!isMatch) {
      const isMatch1 = arg1 && re4.test(arg0);
      isMatch = isMatch1;
    }
    tmp = isMatch;
  }
  return tmp;
};
export const isAudioFile = function isAudioFile(filename) {
  const isMatch = null != filename && regex.test(filename);
  return isMatch;
};
export { isWebPlayerVideoUrl };
export const isVideoUrl = function isVideoUrl(proxyURL) {
  let flag = false;
  if (null != proxyURL) {
    const tmp2 = _slicedToArray(proxyURL.split(/\?/, 1), 2);
    flag = re9.test(tmp2[0]);
  }
  if (!flag) {
    const obj2 = WebViewWebmSupportTest;
    let isIOSWithWebMResult = obj2.isIOSWithWebM();
    if (isIOSWithWebMResult) {
      let flag2 = false;
      if (null != proxyURL) {
        const tmp8 = _slicedToArray(proxyURL.split(/\?/, 1), 2);
        flag2 = re7.test(tmp8[0]);
      }
      isIOSWithWebMResult = flag2;
    }
    flag = isIOSWithWebMResult;
  }
  return flag;
};
export { isWebPlayerVideoFile };
export const isVideoFile = function isVideoFile(filename) {
  let tmp = null != filename;
  if (tmp) {
    let isMatch = re9.test(filename);
    if (!isMatch) {
      let isIOSWithWebMResult = null != filename;
      if (isIOSWithWebMResult) {
        const obj = WebViewWebmSupportTest;
        isIOSWithWebMResult = obj.isIOSWithWebM();
      }
      if (isIOSWithWebMResult) {
        isIOSWithWebMResult = re7.test(filename);
      }
      isMatch = isIOSWithWebMResult;
    }
    tmp = isMatch;
  }
  return tmp;
};
export const isRiveFile = function isRiveFile(arg0) {
  const isMatch = null != arg0 && re8.test(arg0);
  return isMatch;
};
export const isVideoContentType = function isVideoContentType(contentType) {
  let flag = false;
  if (null != contentType) {
    flag = _slicedToArray(contentType.split("/"), 2)[0] === "video";
    const tmp2 = _slicedToArray(contentType.split("/"), 2);
  }
  return flag;
};
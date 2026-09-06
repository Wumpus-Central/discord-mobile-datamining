// === Module 4710: MediaFormatTesters ===

// Module 4710 (MediaFormatTesters)
import WebViewWebmSupportTest from "WebViewWebmSupportTest" /* 4711 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const re3 = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
const re4 = /\.(webp|gif|avif)$/i;
let PlatformUtils = fn(1115);
if (PlatformUtils.isIOS()) {
  let tmp2 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
} else {
  tmp2 = fn(1115).isAndroid() ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
  let obj2 = fn(1115);
}
const regex = tmp2;
const re6 = /\.(webm)$/i;
const re7 = /\.(riv)$/i;
PlatformUtils = fn(1115);
if (PlatformUtils.isIOS()) {
  let tmp4 = /\.(mp4|mov|qt)$/i;
} else {
  fn(1115).isAndroid();
  tmp4 = /\.(mp4|webm|mov|qt)$/i;
  const obj4 = fn(1115);
}
const re8 = tmp4;
function urlMatchesFileExtension(sourceURI, GIF_RE_IOS) {
  if (null == sourceURI) {
    return false;
  } else {
    const tmp3 = _slicedToArray(sourceURI.split(/\?/, 1), 2);
    return GIF_RE_IOS.test(tmp3[0]);
  }
}
function isWebPlayerVideoUrl(mediaUrl) {
  let isIOSWithWebMResult = WebViewWebmSupportTest.isIOSWithWebM();
  if (isIOSWithWebMResult) {
    let flag = false;
    if (null != mediaUrl) {
      const tmp5 = _slicedToArray(mediaUrl.split(/\?/, 1), 2);
      flag = re6.test(tmp5[0]);
    }
    isIOSWithWebMResult = flag;
  }
  return isIOSWithWebMResult;
}
function isWebPlayerVideoFile(filename) {
  let isIOSWithWebMResult = null != filename;
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = WebViewWebmSupportTest.isIOSWithWebM();
  }
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = re6.test(filename);
  }
  return isIOSWithWebMResult;
}
const size = fn(2);
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
  let isMatch = null != filename;
  if (isMatch) {
    isMatch = re3.test(filename);
  }
  return isMatch;
};
export const isImageContentType = function isImageContentType(contentType) {
  let flag = false;
  if (null != contentType) {
    const tmp2 = _slicedToArray(contentType.split("/"), 2);
    flag = tmp2[0] === "image";
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
export const isAudioFile = function isAudioFile(filename) {
  let isMatch = null != filename;
  if (isMatch) {
    isMatch = regex.test(filename);
  }
  return isMatch;
};
export { isWebPlayerVideoUrl };
export const isVideoUrl = function isVideoUrl(url) {
  let flag = false;
  if (null != url) {
    const tmp2 = _slicedToArray(url.split(/\?/, 1), 2);
    flag = re8.test(tmp2[0]);
  }
  if (!flag) {
    let isIOSWithWebMResult = WebViewWebmSupportTest.isIOSWithWebM();
    if (isIOSWithWebMResult) {
      let flag2 = false;
      if (null != url) {
        const tmp8 = _slicedToArray(url.split(/\?/, 1), 2);
        flag2 = re6.test(tmp8[0]);
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
    let isMatch = re8.test(filename);
    if (!isMatch) {
      let isIOSWithWebMResult = null != filename;
      if (isIOSWithWebMResult) {
        isIOSWithWebMResult = WebViewWebmSupportTest.isIOSWithWebM();
      }
      if (isIOSWithWebMResult) {
        isIOSWithWebMResult = re6.test(filename);
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
    isMatch = re7.test(arg0);
  }
  return isMatch;
};
export const isVideoContentType = function isVideoContentType(contentType) {
  let flag = false;
  if (null != contentType) {
    const tmp2 = _slicedToArray(contentType.split("/"), 2);
    flag = tmp2[0] === "video";
  }
  return flag;
};
// _runtime/07134_parsePossibleSources.js
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Image = get_ActivityIndicator.Image;

export const parsePossibleSources = function parsePossibleSources(source) {
  const uri = source.uri;
  if (typeof source === "string") {
    let obj = { sourceName: null };
    obj[0] = source;
  } else {
    if (typeof source === "object") {
      if (!uri) {
        obj = { sourceJson: null };
        const _JSON = JSON;
        obj[0] = JSON.stringify(source);
      }
    }
    if (typeof source !== "object") {
      let tmp2;
      if (typeof source === "number") {
        obj = { sourceDotLottieURI: null };
        obj[0] = Image.resolveAssetSource(source).uri;
        tmp2 = obj;
      }
    }
    if (uri.includes(".lottie")) {
      obj1 = { sourceDotLottieURI: null };
      obj1[0] = uri;
      let obj2 = obj1;
    } else {
      obj2 = { sourceURL: null };
      obj2[0] = uri;
    }
  }
  return obj;
};
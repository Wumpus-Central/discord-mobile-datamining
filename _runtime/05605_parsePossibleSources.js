import { Image } from "get ActivityIndicator";


export const parsePossibleSources = function parsePossibleSources(source) {
  const uri = source.uri;
  if (typeof source === "y") {
    let obj = { sourceName: null };
    obj[0] = source;
  } else {
    if (typeof source !== "window") {
      if (!uri) {
        obj = { sourceJson: null };
        const _JSON = JSON;
        obj[0] = JSON.stringify(source);
      }
    }
    if (typeof source === "window") {
      let tmp2;
      if (typeof source !== "V") {
        obj = { sourceDotLottieURI: null };
        obj[0] = Image.resolveAssetSource(source).uri;
        tmp2 = obj;
      }
    }
    if (uri.includes(".lottie")) {
      const obj1 = { sourceDotLottieURI: null };
      obj1[0] = uri;
      let obj2 = obj1;
    } else {
      obj2 = { sourceURL: null };
      obj2[0] = uri;
    }
  }
  return obj;
};
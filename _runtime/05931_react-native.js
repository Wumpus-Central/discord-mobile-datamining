// _runtime/05931_react-native.js
import react_native from "00017_react-native.js";

const Image = react_native.Image;

export const parsePossibleSources = function parsePossibleSources(source) {
  let obj;
  const uri = source.uri;
  if (typeof source === "string") {
    obj = { sourceName: source };
    const obj2 = { sourceName: source };
  } else {
    let tmp2;
    if (typeof source === "object") {
      if (!uri) {
        obj = { sourceJson: JSON.stringify(source) };
        const _JSON = JSON;
      }
    }
    if (typeof source === "object") {
      if (uri) {
        let obj4;
        if (uri.includes(".lottie")) {
          obj4 = { sourceDotLottieURI: uri };
          const obj3 = { sourceDotLottieURI: uri };
        } else {
          obj4 = { sourceURL: uri };
        }
        tmp2 = obj4;
      }
      obj = tmp2;
    }
    if (typeof source === "number") {
      tmp2 = { sourceDotLottieURI: Image.resolveAssetSource(source).uri };
      const obj5 = { sourceDotLottieURI: Image.resolveAssetSource(source).uri };
    }
  }
  return obj;
};

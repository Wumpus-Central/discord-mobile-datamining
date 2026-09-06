// === Module 5533: ? ===

// Module 5533
import _mod17 from "module_17" /* 17 */;

const Image = _mod17.Image;

export const parsePossibleSources = function parsePossibleSources(source) {
  const uri = source.uri;
  if (typeof source === "string") {
    let obj = { sourceName: source };
  } else {
    if (typeof source === "object") {
      if (!uri) {
        obj = { sourceJson: null };
        const _JSON = JSON;
        obj.sourceJson = JSON.stringify(source);
      }
    }
    if (typeof source !== "object") {
      if (typeof source === "number") {
        obj = { sourceDotLottieURI: Image.resolveAssetSource(source).uri };
      }
    }
    if (uri.includes(".lottie")) {
      const obj1 = { sourceDotLottieURI: uri };
    } else {
      const obj2 = { sourceURL: uri };
    }
  }
  return obj;
};
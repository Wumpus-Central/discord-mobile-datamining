// === Module 5840: ? ===

// Module 5840
import _mod17 from "module_17" /* 17 */;

const Image = _mod17.Image;

export const parsePossibleSources = function parsePossibleSources(source) {
  const uri = source.uri;
  if (typeof source === "string") {
    const obj2 = { sourceName: source };
    let obj = obj2;
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
        const obj3 = { sourceDotLottieURI: Image.resolveAssetSource(source).uri };
      }
    }
    if (uri.includes(".lottie")) {
      const obj4 = { sourceDotLottieURI: uri };
    } else {
      const obj5 = { sourceURL: uri };
    }
  }
  return obj;
};
// === Module 5003: ? ===

// Module 5003
import _mod17 from "module_17" /* 17 */;

const Image = _mod17.Image;

export const parseAndroidIconToNativeProps = function parseAndroidIconToNativeProps(icon) {
  if (icon) {
    if ("imageSource" === icon.type) {
      const assetSource = Image.resolveAssetSource(icon.imageSource);
      if (!assetSource) {
        const _console = console;
        console.error("[RNScreens] Failed to resolve an asset.");
      }
      let obj = { imageIconResource: assetSource };
      return obj;
    } else if ("drawableResource" === icon.type) {
      obj = { drawableIconResourceName: icon.name };
      return obj;
    } else {
      const _Error = Error;
      const error = new Error("[RNScreens] Incorrect icon format for Android. You must provide `imageSource` or `drawableResource`.");
      throw error;
    }
  } else {
    return {};
  }
};
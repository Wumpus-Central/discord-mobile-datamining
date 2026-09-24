// === Module 5218: ? ===

// Module 5218
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
      const obj2 = { imageIconResource: assetSource };
      return obj2;
    } else if ("drawableResource" === icon.type) {
      const obj = { drawableIconResourceName: icon.name };
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
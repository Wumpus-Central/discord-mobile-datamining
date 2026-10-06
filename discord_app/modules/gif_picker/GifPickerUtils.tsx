// === Module 10109: GifPickerUtils ===

// Module 10109 (GifPickerUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifPickerUtils.tsx");

export const filterFavoriteGIFsByQuery = function filterFavoriteGIFsByQuery(favorites, first3) {
  if ("" === first3) {
    return favorites;
  } else {
    let str = first3.toLowerCase();
    let closure_0 = str.replace(/[-_ ]/g, "");
    return favorites.filter((url) => {
      const str = url.url;
      const str2 = str.toLowerCase();
      const replaced = str2.replace(/[-_]/g, "");
      return replaced.includes(closure_0);
    });
  }
};
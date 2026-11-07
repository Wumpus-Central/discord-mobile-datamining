// === Module 10369: GifPickerUtils ===

// Module 10369 (GifPickerUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifPickerUtils.tsx");

export function filterFavoriteGIFsByQuery(favorites, first1) {
  if ("" === first1) {
    return favorites;
  } else {
    closure_0 = first1.toLowerCase().replace(/[-_ ]/g, "");
    return favorites.filter((url) => {
      const replaced = url.url.toLowerCase().replace(/[-_]/g, "");
      return replaced.includes(closure_0);
    });
  }
}
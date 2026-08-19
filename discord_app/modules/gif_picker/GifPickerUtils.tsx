// === Module 10201: filterFavoriteGIFsByQuery ===

// Module 10201 (filterFavoriteGIFsByQuery)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/gif_picker/GifPickerUtils.tsx");

export const filterFavoriteGIFsByQuery = function filterFavoriteGIFsByQuery(favorites, first2) {
  if ("" === first2) {
    return favorites;
  } else {
    closure_0 = first2.toLowerCase().replace(/[-_ ]/g, "");
    return favorites.filter((item, index) => {
      const replaced = item.url.toLowerCase().replace(/[-_]/g, "");
      return replaced.includes(closure_0);
    });
  }
};
// === Module 9763: filterFavoriteGIFsByQuery ===

// Module 9763 (filterFavoriteGIFsByQuery)
const result = require("set").fileFinishedImporting("modules/gif_picker/GifPickerUtils.tsx");

export const filterFavoriteGIFsByQuery = function filterFavoriteGIFsByQuery(favorites, first2) {
  if ("" === first2) {
    return favorites;
  } else {
    let closure_0 = first2.toLowerCase().replace(/[-_ ]/g, "");
    return favorites.filter((url) => {
      const replaced = url.url.toLowerCase().replace(/[-_]/g, "");
      return replaced.includes(closure_0);
    });
  }
};
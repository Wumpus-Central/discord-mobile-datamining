// discord_app/modules/gif_picker/GifPickerUtils.tsx
import size from "../../../_runtime/metro/00002__.js";

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

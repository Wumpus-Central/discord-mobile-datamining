// === Module 10384: FavoriteGIFHooks ===

// Module 10384 (FavoriteGIFHooks)
import applyDefault from "apply" /* 12 */;
import FrecencyUserSettingsHooks from "FrecencyUserSettingsHooks" /* 10385 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_4 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export function useFavoriteGIFs() {
  if (flag === undefined) {
    flag = true;
  }
  const favoriteGifs = FrecencyUserSettingsHooks.useFrecencySettings(flag).favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  return gifs;
}
export function useSortedFavoriteGIFs(transformFavoriteGifUrl) {
  _require = transformFavoriteGifUrl;
  const favoriteGifs = require("FrecencyUserSettingsHooks").useFrecencySettings(true).favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  items = [gifs, transformFavoriteGifUrl];
  return noop.useMemo(() => {
    const mapped = applyDefault(gifs).map((src, url) => {
      const obj = {};
      const merged = Object.assign(src);
      obj.url = url;
      src = undefined;
      if (transformFavoriteGifUrl != null) {
        src = tmp2(src.src, url);
      }
      if (src == null) {
        src = src.src;
      }
      obj.src = src;
      return obj;
    });
    const arr = applyDefault(gifs);
    const sortByResult = mapped.sortBy("order");
    return mapped.sortBy("order").reverse().value();
  }, items);
}
export function useShouldShowTooltipOnFavorite() {
  const favoriteGifs = FrecencyUserSettingsHooks.useFrecencySettings().favoriteGifs;
  let flag;
  if (favoriteGifs != null) {
    flag = favoriteGifs.hideTooltip;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function useIsFavoriteGIF(arg0) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const favoriteGifs = FrecencyUserSettingsHooks.useFrecencySettings(flag).favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  return null != gifs[arg0];
}
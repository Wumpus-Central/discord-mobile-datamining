// === Module 10370: FavoriteGIFHooks ===

// Module 10370 (FavoriteGIFHooks)
import _modDef12 from "module_12" /* 12 */;
import FrecencyUserSettingsHooks from "FrecencyUserSettingsHooks" /* 10371 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export const useFavoriteGIFs = function useFavoriteGIFs(flag) {
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
};
export const useSortedFavoriteGIFs = function useSortedFavoriteGIFs(transformFavoriteGifUrl) {
  _require = transformFavoriteGifUrl;
  const favoriteGifs = require("FrecencyUserSettingsHooks").useFrecencySettings(true).favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  const items = [gifs, transformFavoriteGifUrl];
  return noop.useMemo(() => {
    const mapped = _modDef12(gifs).map((src, url) => {
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
    const arr = _modDef12(gifs);
    const sortByResult = mapped.sortBy("order");
    return mapped.sortBy("order").reverse().value();
  }, items);
};
export const useShouldShowTooltipOnFavorite = function useShouldShowTooltipOnFavorite() {
  const favoriteGifs = FrecencyUserSettingsHooks.useFrecencySettings().favoriteGifs;
  let flag;
  if (favoriteGifs != null) {
    flag = favoriteGifs.hideTooltip;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useIsFavoriteGIF = function useIsFavoriteGIF(arg0, flag) {
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
};
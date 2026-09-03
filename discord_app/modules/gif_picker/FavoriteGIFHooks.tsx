// === Module 10388: useFavoriteGIFs ===

// Module 10388 (useFavoriteGIFs)
import useFrecencySettings from "useFrecencySettings" /* 10389 */;
import closure_3 from "noop" /* 19 */;

require = arg1;
let closure_4 = {};
const result = require("set").fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export const useFavoriteGIFs = function useFavoriteGIFs() {
  const favoriteGifs = useFrecencySettings.useFrecencySettings().favoriteGifs;
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
  const _require = transformFavoriteGifUrl;
  const favoriteGifs = _require(10389).useFrecencySettings().favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  const items = [gifs, transformFavoriteGifUrl];
  return React.useMemo(() => {
    const mapped = gifs(closure_1_2[2])(gifs).map((src, url) => {
      const obj = {};
      const merged = Object.assign(src);
      obj.url = url;
      src = undefined;
      if (closure_0 != null) {
        src = tmp2(src.src, url);
      }
      if (src == null) {
        src = src.src;
      }
      obj.src = src;
      return obj;
    });
    const arr = gifs(closure_1_2[2])(gifs);
    const sortByResult = mapped.sortBy("order");
    return mapped.sortBy("order").reverse().value();
  }, items);
};
export const useShouldShowTooltipOnFavorite = function useShouldShowTooltipOnFavorite() {
  const favoriteGifs = useFrecencySettings.useFrecencySettings().favoriteGifs;
  let flag;
  if (favoriteGifs != null) {
    flag = favoriteGifs.hideTooltip;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useIsFavoriteGIF = function useIsFavoriteGIF(arg0) {
  const favoriteGifs = useFrecencySettings.useFrecencySettings().favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  return null != gifs[arg0];
};
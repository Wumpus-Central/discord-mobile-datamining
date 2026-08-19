// === Module 10199: useFavoriteGIFs ===

// Module 10199 (useFavoriteGIFs)
import useFrecencySettings from "useFrecencySettings" /* 10200 */;
import noop from "noop" /* 19 */;

require = fn;
let closure_4 = {};
const result = require("obj132").fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

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
  const favoriteGifs = _require(10200).useFrecencySettings().favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  const items = [gifs, transformFavoriteGifUrl];
  return React.useMemo(() => {
    const mapped = gifs(dependencyMap[2])(gifs).map((item, index) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.url = index;
      let src;
      if (closure_0 != null) {
        src = tmp2(item.src, index);
      }
      if (src == null) {
        src = item.src;
      }
      obj.src = src;
      return obj;
    });
    const arr = gifs(dependencyMap[2])(gifs);
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
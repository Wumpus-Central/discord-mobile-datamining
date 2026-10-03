// === Module 10094: FavoriteGIFHooks ===

// Module 10094 (FavoriteGIFHooks)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import FrecencyUserSettingsHooks from "FrecencyUserSettingsHooks" /* 10095 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = {};
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const favoriteGifs = FrecencyUserSettingsHooks.useFrecencySettings(undefined === arg0 || arg0).favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  return gifs;
}) : (() => {
  let flag = arg0;
  if (arg0 === undefined) {
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
});
let closure_5 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  let valueResult = dependencyMap;
  const cResult = c.c(5);
  const tmp3 = closure_5();
  if (cResult[0] === tmp3) {
    if (cResult[1] === arg0) {
      return cResult[2];
    }
  }
  if (cResult[3] !== arg0) {
    const fn = function s(src, url) {
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
    };
    cResult[3] = arg0;
    cResult[4] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[4];
  }
  const mapped = _modDef12(tmp3).map(tmp4);
  const arr = _modDef12(tmp3);
  const sortByResult = mapped.sortBy("order");
  valueResult = mapped.sortBy("order").reverse().value();
  cResult[0] = tmp3;
  cResult[1] = arg0;
  cResult[2] = valueResult;
}) : ((arg0) => {
  closure_0 = arg0;
  const tmp = closure_5();
  closure_1 = tmp;
  const items = [tmp, arg0];
  return noop.useMemo(() => {
    const mapped = _modDef12(closure_1).map((src, url) => {
      const obj = {};
      const merged = Object.assign(src);
      obj.url = url;
      src = undefined;
      if (closure_1_0 != null) {
        src = tmp2(src.src, url);
      }
      if (src == null) {
        src = src.src;
      }
      obj.src = src;
      return obj;
    });
    const arr = _modDef12(closure_1);
    const sortByResult = mapped.sortBy("order");
    return mapped.sortBy("order").reverse().value();
  }, items);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const favoriteGifs = FrecencyUserSettingsHooks.useFrecencySettings().favoriteGifs;
  let flag;
  if (favoriteGifs != null) {
    flag = favoriteGifs.hideTooltip;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}) : (() => {
  const favoriteGifs = FrecencyUserSettingsHooks.useFrecencySettings().favoriteGifs;
  let flag;
  if (favoriteGifs != null) {
    flag = favoriteGifs.hideTooltip;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export const useFavoriteGIFs = tmp2;
export const useSortedFavoriteGIFs = tmp3;
export const useShouldShowTooltipOnFavorite = tmp4;
export const useIsFavoriteGIF = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp2 = undefined === arg1;
  if (!tmp2) {
    tmp2 = arg1;
  }
  return null != closure_5(tmp2)[arg0];
}) : ((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  return null != closure_5(flag)[arg0];
});
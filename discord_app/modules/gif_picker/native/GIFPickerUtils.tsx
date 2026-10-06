// === Module 10106: gif_picker/GIFPickerUtils ===

// Module 10106 (gif_picker/GIFPickerUtils)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import AttachmentUrlUtilsAll from "AttachmentUrlUtils" /* 7529 */;
import FavoriteGIFHooks from "FavoriteGIFHooks" /* 10107 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function transformFavoriteGifUrl(url, arg1) {
  let combined = url;
  const obj = URLUtilsDefault;
  const str = obj.toURLSafe(url);
  if (null != str) {
    const obj6 = AttachmentUrlUtilsAll;
    if (obj6.isExternalProxiedAttachmentUrl(str)) {
      const str2 = str.pathname;
      const formatted = str2.toLowerCase();
      const str4 = str.pathname;
      formatted.endsWith(".webp");
      const formatted1 = str4.toLowerCase();
      let endsWithResult1 = formatted1.endsWith(".avif");
      const str6 = str.pathname;
      const formatted2 = str6.toLowerCase();
      const endsWithResult2 = formatted2.endsWith(".gif");
      if (!endsWithResult1) {
        endsWithResult1 = endsWithResult2;
      }
      if (endsWithResult1) {
        const searchParams = str.searchParams;
        const result = searchParams.set("format", "webp");
      }
      const searchParams2 = str.searchParams;
      const result1 = searchParams2.set("animated", "true");
      return str.toString();
    } else {
      AttachmentUrlUtilsAll;
    }
  }
  if (re6.test(arg1)) {
    const match = re8.exec(arg1);
    let substr;
    if (match != null) {
      const first = match[0];
      if (first != null) {
        substr = first.slice(1);
      }
    }
    const _HermesInternal2 = HermesInternal;
    return "https://media.giphy.com/media/" + substr + "/giphy.gif";
  } else {
    if (re7.test(arg1)) {
      const _HermesInternal = HermesInternal;
      combined = "" + arg1 + ".gif";
    }
    return combined;
  }
}
const GIFPickerResultTypes = Constants.GIFPickerResultTypes;
const re6 = /(https?:\/\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
const re7 = /(tenor\.com)/;
const re8 = /-(?:.(?!-))+$/;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  const obj = react2;
  const cResult = obj.c(6);
  const obj2 = FavoriteGIFHooks;
  const sortedFavoriteGIFs = obj2.useSortedFavoriteGIFs(transformFavoriteGifUrl);
  if (cResult[0] === sortedFavoriteGIFs[0]) {
    let tmp4;
    if (cResult[1] === sortedFavoriteGIFs.length) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === sortedFavoriteGIFs) {
      let tmp7;
      if (cResult[4] === tmp4) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj3 = { favorites: sortedFavoriteGIFs, favoritesCategory: tmp4 };
    cResult[3] = sortedFavoriteGIFs;
    cResult[4] = tmp4;
    cResult[5] = obj3;
    tmp7 = obj3;
  }
  let tmp5;
  if (sortedFavoriteGIFs.length > 0) {
    const obj4 = { type: GIFPickerResultTypes.FAVORITES, name: intl.string(intl2.t.k8fFjp), src: sortedFavoriteGIFs[0].src, format: sortedFavoriteGIFs[0].format };
    intl = intl2.intl;
    tmp5 = obj4;
  }
  cResult[0] = sortedFavoriteGIFs[0];
  cResult[1] = sortedFavoriteGIFs.length;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (() => {
  let sortedFavoriteGIFs;
  let obj = sortedFavoriteGIFs(10107);
  sortedFavoriteGIFs = obj.useSortedFavoriteGIFs(transformFavoriteGifUrl);
  const items = [sortedFavoriteGIFs];
  const obj2 = {
    favorites: sortedFavoriteGIFs,
    favoritesCategory: react.useMemo(() => {
      let intl;
      let tmp2;
      if (sortedFavoriteGIFs.length > 0) {
        const obj = { type: GIFPickerResultTypes.FAVORITES, name: intl.string(intl2.t.k8fFjp), src: sortedFavoriteGIFs[0].src, format: sortedFavoriteGIFs[0].format };
        intl = intl2.intl;
        tmp2 = obj;
      }
      return tmp2;
    }, items)
  };
  return obj2;
});
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerUtils.tsx");

export const GIF_HEADER_HEIGHT = 56;
export const useFavoriteGIFsMobile = tmp2;
export const GIF_PICKER_ITEM_ESIMTATED_HEIGHT = 180;
export const GIF_PICKER_GUTTER_SPACING = 8;
export const DEFAULT_CATEGORY_ROWS = 20;
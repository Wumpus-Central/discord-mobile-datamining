// === Module 10369: gif_picker/GIFPickerUtils ===

// Module 10369 (gif_picker/GIFPickerUtils)
import util from "util" /* 1114 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import AttachmentUrlUtilsAll from "AttachmentUrlUtils" /* 9942 */;
import noop from "module_19" /* 19 */;

require = fn;
function transformFavoriteGifUrl(url, arg1) {
  let combined = url;
  const str = URLUtilsDefault.toURLSafe(url);
  if (null != str) {
    if (obj6.isExternalProxiedAttachmentUrl(str)) {
      const formatted = str.pathname.toLowerCase();
      formatted.endsWith(".webp");
      const formatted1 = str.pathname.toLowerCase();
      let endsWithResult1 = formatted1.endsWith(".avif");
      const formatted2 = str.pathname.toLowerCase();
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
    obj6 = AttachmentUrlUtilsAll;
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
fn(1074).GIFPickerResultTypes;
const re6 = /(https?:\/\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
const re7 = /(tenor\.com)/;
const re8 = /-(?:.(?!-))+$/;
const size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerUtils.tsx");

export const GIF_HEADER_HEIGHT = 56;
export const useFavoriteGIFsMobile = function useFavoriteGIFsMobile() {
  let obj = sortedFavoriteGIFs(10370);
  sortedFavoriteGIFs = obj.useSortedFavoriteGIFs(transformFavoriteGifUrl);
  const items = [sortedFavoriteGIFs];
  obj = {
    favorites: sortedFavoriteGIFs,
    favoritesCategory: noop.useMemo(() => {
      let tmp2;
      if (sortedFavoriteGIFs.length > 0) {
        const obj = { type: GIFPickerResultTypes.FAVORITES, name: null, src: null, format: null };
        const intl = util.intl;
        obj.name = intl.string(util.t.k8fFjp);
        obj.src = sortedFavoriteGIFs[0].src;
        obj.format = sortedFavoriteGIFs[0].format;
        tmp2 = obj;
      }
      return tmp2;
    }, items)
  };
  return obj;
};
export const GIF_PICKER_ITEM_ESIMTATED_HEIGHT = 180;
export const GIF_PICKER_GUTTER_SPACING = 8;
export const DEFAULT_CATEGORY_ROWS = 20;
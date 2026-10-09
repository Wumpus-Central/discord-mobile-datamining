// discord_app/modules/gif_picker/native/GIFPickerUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import AttachmentUrlUtilsAll from "../../messages/AttachmentUrlUtils.tsx";
import FavoriteGIFHooks from "../FavoriteGIFHooks.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
fn(1085).GIFPickerResultTypes;
const re6 = /(https?:\/\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
const re7 = /(tenor\.com)/;
const re8 = /-(?:.(?!-))+$/;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerUtils.tsx");

export const GIF_HEADER_HEIGHT = 56;
export const useFavoriteGIFsMobile = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoriteGIFsMobile() {
      const cResult = c.c(6);
      const sortedFavoriteGIFs = FavoriteGIFHooks.useSortedFavoriteGIFs(transformFavoriteGifUrl);
      if (cResult[0] === sortedFavoriteGIFs[0]) {
        if (cResult[1] === sortedFavoriteGIFs.length) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === sortedFavoriteGIFs) {
          if (cResult[4] === tmp4) {
            let tmp7 = cResult[5];
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
        const obj4 = { type: GIFPickerResultTypes.FAVORITES, name: null, src: null, format: null };
        const intl = util.intl;
        obj4.name = intl.string(util.t.k8fFjp);
        obj4.src = sortedFavoriteGIFs[0].src;
        obj4.format = sortedFavoriteGIFs[0].format;
        tmp5 = obj4;
      }
      cResult[0] = sortedFavoriteGIFs[0];
      cResult[1] = sortedFavoriteGIFs.length;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : function useFavoriteGIFsMobile() {
      sortedFavoriteGIFs = sortedFavoriteGIFs(9710).useSortedFavoriteGIFs(transformFavoriteGifUrl);
      const items = [sortedFavoriteGIFs];
      let obj = sortedFavoriteGIFs(9710);
      return {
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
        }, items),
      };
    };
export const GIF_PICKER_ITEM_ESIMTATED_HEIGHT = 180;
export const GIF_PICKER_GUTTER_SPACING = 8;
export const DEFAULT_CATEGORY_ROWS = 20;

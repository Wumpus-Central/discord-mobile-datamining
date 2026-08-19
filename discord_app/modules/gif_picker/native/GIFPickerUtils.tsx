// === Module 10198: transformFavoriteGifUrl ===

// Module 10198 (transformFavoriteGifUrl)
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import shouldRefreshAttachmentUrl from "shouldRefreshAttachmentUrl" /* 9085 */;
import noop from "noop" /* 19 */;

require = fn;
function transformFavoriteGifUrl(url) {
  let combined = url;
  const str = isDiscordProxiedAssetUrlDefault.toURLSafe(url);
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
      shouldRefreshAttachmentUrl;
    }
    obj6 = shouldRefreshAttachmentUrl;
  }
  if (regex.test(arg1)) {
    const match = regex3.exec(arg1);
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
    if (regex2.test(arg1)) {
      const _HermesInternal = HermesInternal;
      combined = "" + arg1 + ".gif";
    }
    return combined;
  }
}
require("ME").GIFPickerResultTypes;
const re5 = /(https?:\/\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
const re6 = /(tenor\.com)/;
const re7 = /-(?:.(?!-))+$/;
let result = require("obj132").fileFinishedImporting("modules/gif_picker/native/GIFPickerUtils.tsx");

export const GIF_HEADER_HEIGHT = 56;
export const useFavoriteGIFsMobile = function useFavoriteGIFsMobile() {
  let obj = sortedFavoriteGIFs(10199);
  sortedFavoriteGIFs = obj.useSortedFavoriteGIFs(transformFavoriteGifUrl);
  const items = [sortedFavoriteGIFs];
  obj = {
    favorites: sortedFavoriteGIFs,
    favoritesCategory: React.useMemo(() => {
      let tmp2;
      if (sortedFavoriteGIFs.length > 0) {
        const obj = { type: null, name: null, src: null, format: null };
        obj[0] = GIFPickerResultTypes.FAVORITES;
        const intl = sortedFavoriteGIFs(dependencyMap[5]).intl;
        obj[1] = intl.string(sortedFavoriteGIFs(dependencyMap[5]).t.k8fFjp);
        obj[2] = sortedFavoriteGIFs[0].src;
        obj[3] = sortedFavoriteGIFs[0].format;
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
// === Module 12966: ? ===

// Module 12966
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function GIFFavButton(source) {
  source = source.source;
  let uri;
  let isFavoriteGIF;
  uri = source.isGIFV ? source.embedURI : source.sourceURI;
  if (uri == null) {
    uri = source.uri;
  }
  let StarIcon = source;
  let YELLOW_300 = isFavoriteGIF;
  let obj = source(isFavoriteGIF[2]);
  isFavoriteGIF = obj.useIsFavoriteGIF(source(isFavoriteGIF[3]).gifUrlKey(uri));
  const items = [isFavoriteGIF, , , , , , , ];
  ({ embedProviderName: arr[1], height: arr[2], isGIFV: arr[3], thumbnail: arr[4], uri: arr[5], width: arr[6] } = source);
  items[7] = uri;
  const callback = importAllResult.useCallback(() => {
    if (isFavoriteGIF) {
      let tmpResult = tmp(tmp2[3]);
      tmpResult.removeFavoriteGIF(uri);
      let obj = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
      const intl2 = source(isFavoriteGIF[5]).intl;
      obj[1] = intl2.string(source(isFavoriteGIF[5]).t.in1rga);
      obj[2] = source(isFavoriteGIF[6]).GifIcon;
      uri(isFavoriteGIF[4]).open(obj);
      const obj8 = uri(isFavoriteGIF[4]);
    } else {
      tmpResult = tmp(tmp2[7]);
      obj = { providerName: null, thumbnail: null };
      ({ embedProviderName: obj2[0], thumbnail: obj2[1] } = source);
      const gIFThumbnailForFavorite = tmpResult.getGIFThumbnailForFavorite(obj);
      let obj2 = source(isFavoriteGIF[3]);
      obj1 = { url: null, src: null, gifSrc: null, width: null, height: null, format: null };
      obj1[0] = uri;
      obj1[1] = source.uri;
      obj1[2] = gIFThumbnailForFavorite;
      ({ width: obj4[3], height: obj4[4] } = source);
      const GIFType = source(isFavoriteGIF[8]).GIFType;
      obj1[5] = source.isGIFV ? GIFType.VIDEO : GIFType.IMAGE;
      obj2.addFavoriteGIF(obj1);
      obj2 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
      const intl = source(isFavoriteGIF[5]).intl;
      obj2[1] = intl.string(source(isFavoriteGIF[5]).t.okQonm);
      obj2[2] = source(isFavoriteGIF[6]).GifIcon;
      uri(isFavoriteGIF[4]).open(obj2);
      const obj5 = uri(isFavoriteGIF[4]);
    }
  }, items);
  let obj2 = source(isFavoriteGIF[3]);
  if (!obj3.isAnimatedImageSource(source)) {
    if (!source.isGIFV) {
      return null;
    }
  }
  obj3 = source(isFavoriteGIF[9]);
  const tmp5 = uri;
  let intl = StarIcon(YELLOW_300[5]).intl;
  const string = intl.string;
  const t = StarIcon(YELLOW_300[5]).t;
  if (isFavoriteGIF) {
    let stringResult = string(t["5/NS74"]);
  } else {
    stringResult = string(t.nIH0v8);
  }
  obj = { accessibilityLabel: stringResult, onPress: callback, icon: null };
  if (isFavoriteGIF) {
    StarIcon = StarIcon(YELLOW_300[11]).StarIcon;
    obj = { color: null, size: "md" };
    YELLOW_300 = tmp5(YELLOW_300[12]).unsafe_rawColors.YELLOW_300;
    obj[0] = YELLOW_300;
    let tmp4Result = tmp4(StarIcon, obj);
  } else {
    tmp4Result = tmp4(StarIcon(YELLOW_300[13]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
  }
  obj[2] = tmp4Result;
  tmp4Result = tmp4(uri(YELLOW_300[10]), obj);
});
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx");

export default memoResult;
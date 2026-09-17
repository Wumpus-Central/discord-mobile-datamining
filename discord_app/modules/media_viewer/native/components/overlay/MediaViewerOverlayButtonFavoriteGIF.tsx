// === Module 13118: MediaViewerOverlayButtonFavoriteGIF ===

// Module 13118 (MediaViewerOverlayButtonFavoriteGIF)
import util from "util" /* 1115 */;
import frecency_user_settings from "frecency_user_settings" /* 1221 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 10514 */;
import GIFPickerUtils from "GIFPickerUtils" /* 10516 */;
import GifIcon from "GifIcon" /* 10529 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx");

export default noop.memo(function GIFFavButton(source) {
  source = source.source;
  let isFavoriteGIF;
  let uri = source.isGIFV ? source.embedURI : source.sourceURI;
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
  const callback = noop.useCallback(() => {
    if (isFavoriteGIF) {
      GIFPickerActionCreators.removeFavoriteGIF(uri);
      const tmpResult = GIFPickerActionCreators;
      const obj = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
      const intl2 = util.intl;
      obj.content = intl2.string(util.t.in1rga);
      obj.IconComponent = GifIcon.GifIcon;
      ToastActionCreatorsDefault.open(obj);
    } else {
      ({ embedProviderName: obj2.providerName, thumbnail: obj2.thumbnail } = source);
      const gIFThumbnailForFavorite = GIFPickerUtils.getGIFThumbnailForFavorite({ providerName: null, thumbnail: null });
      const obj6 = { providerName: null, thumbnail: null };
      const tmpResult2 = GIFPickerUtils;
      const size = { url: uri, src: source.uri, gifSrc: gIFThumbnailForFavorite, width: null, height: null, format: null };
      ({ width: obj4.width, height: obj4.height } = source);
      const GIFType = frecency_user_settings.GIFType;
      size.format = source.isGIFV ? GIFType.VIDEO : GIFType.IMAGE;
      GIFPickerActionCreators.addFavoriteGIF(size);
      const obj7 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
      const intl = util.intl;
      obj7.content = intl.string(util.t.okQonm);
      obj7.IconComponent = GifIcon.GifIcon;
      ToastActionCreatorsDefault.open(obj7);
    }
  }, items);
  const obj2 = source(isFavoriteGIF[3]);
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
  const obj4 = { accessibilityLabel: stringResult, onPress: callback, icon: null };
  if (isFavoriteGIF) {
    StarIcon = StarIcon(YELLOW_300[11]).StarIcon;
    let obj5 = { color: null, size: "md" };
    YELLOW_300 = tmp5(YELLOW_300[12]).unsafe_rawColors.YELLOW_300;
    obj5.color = YELLOW_300;
    let tmp4Result = <StarIcon color={null} size="md" />;
  } else {
    tmp4Result = jsx(StarIcon(YELLOW_300[13]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
  }
  obj4.icon = tmp4Result;
  jsx(uri(YELLOW_300[10]), { accessibilityLabel: stringResult, onPress: callback, icon: null });
  const tmp6 = uri(YELLOW_300[10]);
});
// === Module 12782: MediaViewerOverlayButtonFavoriteGIF ===

// Module 12782 (MediaViewerOverlayButtonFavoriteGIF)
import util from "util" /* 1126 */;
import frecency_user_settings from "frecency_user_settings" /* 1232 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 10103 */;
import GIFPickerUtils from "GIFPickerUtils" /* 10105 */;
import GifIcon from "GifIcon" /* 10118 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  let StarIcon = source;
  let tmp = isFavoriteGIF;
  const cResult = source(isFavoriteGIF[3]).c(19);
  source = source.source;
  let uri = source.isGIFV ? source.embedURI : source.sourceURI;
  if (uri == null) {
    uri = source.uri;
  }
  if (cResult[0] !== uri) {
    const gifUrlKeyResult = StarIcon(tmp[4]).gifUrlKey(uri);
    cResult[0] = uri;
    cResult[1] = gifUrlKeyResult;
    let tmp3 = gifUrlKeyResult;
    const StarIconResult = StarIcon(tmp[4]);
  } else {
    tmp3 = cResult[1];
  }
  let obj = source(isFavoriteGIF[3]);
  isFavoriteGIF = StarIcon(tmp[5]).useIsFavoriteGIF(tmp3);
  if (cResult[2] === isFavoriteGIF) {
    if (cResult[3] === source.embedProviderName) {
      if (cResult[4] === source.height) {
        if (cResult[5] === source.isGIFV) {
          if (cResult[6] === source.thumbnail) {
            if (cResult[7] === source.uri) {
              if (cResult[8] === source.width) {
                if (cResult[9] === uri) {
                  let tmp6 = cResult[10];
                }
                if (!StarIconResult2.isAnimatedImageSource(source)) {
                  if (!source.isGIFV) {
                    return null;
                  }
                }
                if (cResult[11] !== isFavoriteGIF) {
                  let intl = StarIcon(tmp[7]).intl;
                  const string = intl.string;
                  let t = StarIcon(tmp[7]).t;
                  if (isFavoriteGIF) {
                    t = t["5/NS74"];
                    let stringResult = string(t);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  cResult[11] = isFavoriteGIF;
                  cResult[12] = stringResult;
                } else if (cResult[13] !== isFavoriteGIF) {
                  if (isFavoriteGIF) {
                    StarIcon = StarIcon(tmp[12]).StarIcon;
                    const obj2 = { color: uri(tmp[13]).unsafe_rawColors.YELLOW_300, size: "md" };
                    let tmp13Result = <StarIcon color={uri(tmp[13]).unsafe_rawColors.YELLOW_300} size="md" />;
                  } else {
                    tmp13Result = jsx(StarIcon(tmp[14]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
                  }
                  cResult[13] = isFavoriteGIF;
                  cResult[14] = tmp13Result;
                } else {
                  if (cResult[15] === tmp6) {
                    if (cResult[16] === tmp8) {
                    }
                  }
                  let obj3 = { accessibilityLabel: tmp8, onPress: tmp6, icon: cResult[14] };
                  tmp = jsx(uri(tmp[15]), { accessibilityLabel: tmp8, onPress: tmp6, icon: cResult[14] });
                  cResult[15] = tmp6;
                  cResult[16] = tmp8;
                  cResult[17] = cResult[14];
                  cResult[18] = tmp;
                }
                StarIconResult2 = StarIcon(tmp[11]);
              }
            }
          }
        }
      }
    }
  }
  const fn = function c() {
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
  };
  cResult[2] = isFavoriteGIF;
  cResult[3] = source.embedProviderName;
  cResult[4] = source.height;
  cResult[5] = source.isGIFV;
  cResult[6] = source.thumbnail;
  cResult[7] = source.uri;
  cResult[8] = source.width;
  cResult[9] = uri;
  cResult[10] = fn;
  tmp6 = fn;
  const StarIconResult1 = StarIcon(tmp[5]);
}) : ((source) => {
  source = source.source;
  let isFavoriteGIF;
  let uri = source.isGIFV ? source.embedURI : source.sourceURI;
  if (uri == null) {
    uri = source.uri;
  }
  let StarIcon = source;
  let YELLOW_300 = isFavoriteGIF;
  let obj = source(isFavoriteGIF[5]);
  isFavoriteGIF = obj.useIsFavoriteGIF(source(isFavoriteGIF[4]).gifUrlKey(uri));
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
  const obj2 = source(isFavoriteGIF[4]);
  if (!obj3.isAnimatedImageSource(source)) {
    if (!source.isGIFV) {
      return null;
    }
  }
  obj3 = source(isFavoriteGIF[11]);
  const tmp5 = uri;
  let intl = StarIcon(YELLOW_300[7]).intl;
  const string = intl.string;
  const t = StarIcon(YELLOW_300[7]).t;
  if (isFavoriteGIF) {
    let stringResult = string(t["5/NS74"]);
  } else {
    stringResult = string(t.nIH0v8);
  }
  const obj4 = { accessibilityLabel: stringResult, onPress: callback, icon: null };
  if (isFavoriteGIF) {
    StarIcon = StarIcon(YELLOW_300[12]).StarIcon;
    let obj5 = { color: null, size: "md" };
    YELLOW_300 = tmp5(YELLOW_300[13]).unsafe_rawColors.YELLOW_300;
    obj5.color = YELLOW_300;
    let tmp4Result = <StarIcon color={null} size="md" />;
  } else {
    tmp4Result = jsx(StarIcon(YELLOW_300[14]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
  }
  obj4.icon = tmp4Result;
  jsx(uri(YELLOW_300[15]), { accessibilityLabel: stringResult, onPress: callback, icon: null });
  const tmp6 = uri(YELLOW_300[15]);
}));
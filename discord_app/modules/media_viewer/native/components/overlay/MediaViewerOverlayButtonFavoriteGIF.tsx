// discord_app/modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx
import util from "../../../../../intl/index.native.tsx";
import frecency_user_settings from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import GIFPickerActionCreators from "../../../../../actions/GIFPickerActionCreators.tsx";
import GifIcon from "../../../../../design/components/Icon/native/redesign/generated/GifIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx",
);

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
  const items = [isFavoriteGIF, , , , , , ,];
  ({
    embedProviderName: arr[1],
    height: arr[2],
    isGIFV: arr[3],
    thumbnail: arr[4],
    uri: arr[5],
    width: arr[6],
  } = source);
  items[7] = uri;
  const callback = noop.useCallback(() => {
    if (isFavoriteGIF) {
      let tmpResult = tmp(10366);
      tmpResult.removeFavoriteGIF(uri);
      let obj = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
      const intl2 = util.intl;
      obj.content = intl2.string(util.t.in1rga);
      obj.IconComponent = GifIcon.GifIcon;
      ToastActionCreatorsDefault.open(obj);
    } else {
      tmpResult = tmp(10368);
      obj = { providerName: null, thumbnail: null };
      ({ embedProviderName: obj2.providerName, thumbnail: obj2.thumbnail } = source);
      const gIFThumbnailForFavorite = tmpResult.getGIFThumbnailForFavorite(obj);
      const size = {
        url: uri,
        src: source.uri,
        gifSrc: gIFThumbnailForFavorite,
        width: null,
        height: null,
        format: null,
      };
      ({ width: obj4.width, height: obj4.height } = source);
      const GIFType = frecency_user_settings.GIFType;
      size.format = source.isGIFV ? GIFType.VIDEO : GIFType.IMAGE;
      GIFPickerActionCreators.addFavoriteGIF(size);
      const obj1 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
      const intl = util.intl;
      obj1.content = intl.string(util.t.okQonm);
      obj1.IconComponent = GifIcon.GifIcon;
      ToastActionCreatorsDefault.open(obj1);
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
  obj = { accessibilityLabel: stringResult, onPress: callback, icon: null };
  if (isFavoriteGIF) {
    StarIcon = StarIcon(YELLOW_300[11]).StarIcon;
    obj = { color: null, size: "md" };
    YELLOW_300 = tmp5(YELLOW_300[12]).unsafe_rawColors.YELLOW_300;
    obj.color = YELLOW_300;
    let tmp4Result = tmp4(StarIcon, obj);
  } else {
    tmp4Result = tmp4(StarIcon(YELLOW_300[13]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
  }
  obj.icon = tmp4Result;
  tmp4Result = tmp4(uri(YELLOW_300[10]), obj);
});

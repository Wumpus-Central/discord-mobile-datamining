// discord_app/modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import intl3 from "../../../../../intl/index.native.tsx";
import frecency_user_settings from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import GIFPickerActionCreators from "../../../../../actions/GIFPickerActionCreators.tsx";
import GIFPickerUtils from "../../../../../utils/GIFPickerUtils.tsx";
import GifIcon from "../../../../../design/components/Icon/native/redesign/generated/GifIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let source;

const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (source) => {
        let isFavoriteGIF;
        let tmp4;
        let obj = source(isFavoriteGIF[3]);
        const cResult = obj.c(19);
        source = source.source;
        let uri = source.isGIFV ? source.embedURI : source.sourceURI;
        if (uri == null) {
          uri = source.uri;
        }
        if (cResult[0] !== uri) {
          let tmpResult = tmp(tmp2[4]);
          const gifUrlKeyResult = tmpResult.gifUrlKey(uri);
          cResult[0] = uri;
          cResult[1] = gifUrlKeyResult;
          tmp4 = gifUrlKeyResult;
        } else {
          tmp4 = cResult[1];
        }
        const tmpResult3 = source(isFavoriteGIF[5]);
        isFavoriteGIF = tmpResult3.useIsFavoriteGIF(tmp4);
        if (cResult[2] === isFavoriteGIF) {
          if (cResult[3] === source.embedProviderName) {
            if (cResult[4] === source.height) {
              if (cResult[5] === source.isGIFV) {
                if (cResult[6] === source.thumbnail) {
                  if (cResult[7] === source.uri) {
                    if (cResult[8] === source.width) {
                      let tmp7;
                      let tmp8;
                      if (cResult[9] === uri) {
                        tmp7 = cResult[10];
                      }
                      const tmpResult4 = source(isFavoriteGIF[11]);
                      if (tmpResult4.isAnimatedImageSource(source)) {
                        let tmp9;
                        let tmp11;
                        if (cResult[11] !== isFavoriteGIF) {
                          let stringResult;
                          let intl = tmp(tmp2[7]).intl;
                          const string = intl.string;
                          const t = tmp(tmp2[7]).t;
                          if (isFavoriteGIF) {
                            stringResult = string(t["5/NS74"]);
                          } else {
                            stringResult = string(t.nIH0v8);
                          }
                          cResult[11] = isFavoriteGIF;
                          cResult[12] = stringResult;
                          tmp9 = stringResult;
                        } else {
                          tmp9 = cResult[12];
                        }
                        if (cResult[13] !== isFavoriteGIF) {
                          let tmp12Result;
                          if (isFavoriteGIF) {
                            const StarIcon = tmp(tmp2[12]).StarIcon;
                            tmp12Result = (
                              <StarIcon color={uri(isFavoriteGIF[13]).unsafe_rawColors.YELLOW_300} size="md" />
                            );
                          } else {
                            tmp12Result = jsx(tmp(tmp2[14]).StarOutlineIcon, {
                              color: "interactive-text-default",
                              size: "md",
                            });
                          }
                          cResult[13] = isFavoriteGIF;
                          cResult[14] = tmp12Result;
                          tmp11 = tmp12Result;
                        } else {
                          tmp11 = cResult[14];
                        }
                        if (cResult[15] === tmp7) {
                          if (cResult[16] === tmp9) {
                            let tmp15;
                            if (cResult[17] === tmp11) {
                              tmp15 = cResult[18];
                            }
                            tmp8 = tmp15;
                          }
                        }
                        const tmp18 = jsx(uri(isFavoriteGIF[15]), {
                          accessibilityLabel: tmp9,
                          onPress: tmp7,
                          icon: tmp11,
                        });
                        cResult[15] = tmp7;
                        cResult[16] = tmp9;
                        cResult[17] = tmp11;
                        cResult[18] = tmp18;
                        tmp15 = tmp18;
                      } else {
                        tmp8 = null;
                      }
                      return tmp8;
                    }
                  }
                }
              }
            }
          }
        }
        const fn = function c() {
          let GIFType;
          let intl;
          let intl2;
          let isGIFV;
          if (isFavoriteGIF) {
            const tmpResult = GIFPickerActionCreators;
            tmpResult.removeFavoriteGIF(uri);
            const obj = {
              key: "REMOVED_FROM_FAVORITES",
              content: intl2.string(intl3.t.in1rga),
              IconComponent: GifIcon.GifIcon,
            };
            const open2 = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl2 = intl3.intl;
            open2(obj);
          } else {
            const obj4 = { providerName: null, thumbnail: null };
            ({ embedProviderName: obj2.providerName, thumbnail: obj2.thumbnail } = source);
            const tmpResult2 = GIFPickerUtils;
            const gIFThumbnailForFavorite = tmpResult2.getGIFThumbnailForFavorite(obj4);
            size = {
              url: uri,
              src: source.uri,
              gifSrc: gIFThumbnailForFavorite,
              width: null,
              height: null,
              format: isGIFV ? GIFType.VIDEO : GIFType.IMAGE,
            };
            ({ width: obj3.width, height: obj3.height } = source);
            const addFavoriteGIF = GIFPickerActionCreators.addFavoriteGIF;
            isGIFV = source.isGIFV;
            GIFPickerActionCreators;
            GIFType = frecency_user_settings.GIFType;
            addFavoriteGIF(size);
            const obj5 = {
              key: "ADDED_TO_FAVORITES",
              content: intl.string(intl3.t.okQonm),
              IconComponent: GifIcon.GifIcon,
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl3.intl;
            open(obj5);
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
        tmp7 = fn;
      }
    : (source) => {
        let tmp7Result2;
        source = source.source;
        let isFavoriteGIF;
        let uri = source.isGIFV ? source.embedURI : source.sourceURI;
        if (uri == null) {
          uri = source.uri;
        }
        const useIsFavoriteGIF = source(isFavoriteGIF[5]).useIsFavoriteGIF;
        source(isFavoriteGIF[5]);
        let obj = source(isFavoriteGIF[4]);
        isFavoriteGIF = useIsFavoriteGIF(obj.gifUrlKey(uri));
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
        const callback = react.useCallback(() => {
          let GIFType;
          let intl;
          let intl2;
          let isGIFV;
          if (isFavoriteGIF) {
            const tmpResult = GIFPickerActionCreators;
            tmpResult.removeFavoriteGIF(uri);
            const obj = {
              key: "REMOVED_FROM_FAVORITES",
              content: intl2.string(intl3.t.in1rga),
              IconComponent: GifIcon.GifIcon,
            };
            const open2 = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl2 = intl3.intl;
            open2(obj);
          } else {
            const obj4 = { providerName: null, thumbnail: null };
            ({ embedProviderName: obj2.providerName, thumbnail: obj2.thumbnail } = source);
            const tmpResult2 = GIFPickerUtils;
            const gIFThumbnailForFavorite = tmpResult2.getGIFThumbnailForFavorite(obj4);
            size = {
              url: uri,
              src: source.uri,
              gifSrc: gIFThumbnailForFavorite,
              width: null,
              height: null,
              format: isGIFV ? GIFType.VIDEO : GIFType.IMAGE,
            };
            ({ width: obj3.width, height: obj3.height } = source);
            const addFavoriteGIF = GIFPickerActionCreators.addFavoriteGIF;
            isGIFV = source.isGIFV;
            GIFPickerActionCreators;
            GIFType = frecency_user_settings.GIFType;
            addFavoriteGIF(size);
            const obj5 = {
              key: "ADDED_TO_FAVORITES",
              content: intl.string(intl3.t.okQonm),
              IconComponent: GifIcon.GifIcon,
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl3.intl;
            open(obj5);
          }
        }, items);
        const obj2 = source(isFavoriteGIF[11]);
        if (obj2.isAnimatedImageSource(source)) {
          let stringResult;
          let tmp7Result;
          uri(isFavoriteGIF[15]);
          let intl = tmp(tmp2[7]).intl;
          const string = intl.string;
          const t = tmp(tmp2[7]).t;
          const tmp8 = uri;
          if (isFavoriteGIF) {
            stringResult = string(t["5/NS74"]);
          } else {
            stringResult = string(t.nIH0v8);
          }
          if (isFavoriteGIF) {
            const StarIcon = tmp(tmp2[12]).StarIcon;
            tmp7Result = <StarIcon color={tmp8(isFavoriteGIF[13]).unsafe_rawColors.YELLOW_300} size="md" />;
          } else {
            tmp7Result = jsx(tmp(tmp2[14]).StarOutlineIcon, { color: "interactive-text-default", size: "md" });
          }
          tmp7Result2 = <tmp9 accessibilityLabel={stringResult} onPress={callback} icon={tmp7Result} />;
        } else {
          tmp7Result2 = null;
        }
        return tmp7Result2;
      },
);
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaViewerOverlayButtonFavoriteGIF.tsx",
);

export default memoResult;

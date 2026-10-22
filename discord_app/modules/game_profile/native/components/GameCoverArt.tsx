// === Module 9274: GameCoverArt ===

// Module 9274 (GameCoverArt)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5220 */;
import FastImageDefault from "FastImage" /* 5655 */;
import useGameArtworkDefault from "useGameArtwork" /* 9275 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4969);
let obj2 = { image: { width: "100%", height: "100%" }, iconContainer: { justifyContent: "center", alignItems: "center" }, icon: { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm }, fallback: null, placeholder: null };
let obj3 = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm };
obj2.fallback = { justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.placeholder = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameCoverArt.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameCoverArt(arg0) {
  const cResult = c.c(35);
  ({ game, coverImageSize, iconImageSize, coverContainerStyle, iconContainerStyle, loadingPlaceholder } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === coverImageSize) {
    if (cResult[1] === game) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === game) {
      if (cResult[4] === iconImageSize) {
        let tmp7 = cResult[5];
      }
      ({ imageUrl, isCover, isLoading, handleLoad, handleError } = useGameArtworkDefault(tmp5, tmp7));
      if (null == imageUrl) {
        if (cResult[6] === coverContainerStyle) {
          if (cResult[7] === tmp4.fallback) {
            let tmp27 = cResult[8];
          }
          if (cResult[9] !== game.name) {
            const obj2 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: game.name };
            const tmp30 = React4(Text_Text.Text, obj2);
            cResult[9] = game.name;
            cResult[10] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[10];
          }
          if (cResult[11] === tmp27) {
            if (cResult[12] === tmp28) {
              let tmp31 = cResult[13];
            }
            return tmp31;
          }
          const obj3 = { style: tmp27, children: tmp28 };
          const tmp34 = React4(View, obj3);
          cResult[11] = tmp27;
          cResult[12] = tmp28;
          cResult[13] = tmp34;
          tmp31 = tmp34;
        }
        const items = [coverContainerStyle, tmp4.fallback];
        cResult[6] = coverContainerStyle;
        cResult[7] = tmp4.fallback;
        cResult[8] = items;
        tmp27 = items;
      } else {
        if (cResult[14] === coverContainerStyle) {
          if (cResult[15] === iconContainerStyle) {
            if (cResult[16] === isCover) {
              if (cResult[17] === tmp4.iconContainer) {
                let tmp12 = cResult[18];
              }
              if (cResult[19] !== imageUrl) {
                const obj4 = { uri: imageUrl };
                cResult[19] = imageUrl;
                cResult[20] = obj4;
                let tmp14 = obj4;
              } else {
                tmp14 = cResult[20];
              }
              const tmp15 = isCover ? tmp4.image : tmp4.icon;
              if (cResult[21] === handleError) {
                if (cResult[22] === handleLoad) {
                  if (cResult[23] === imageUrl) {
                    if (cResult[24] === tmp14) {
                      if (cResult[25] === tmp15) {
                        let tmp16 = cResult[26];
                      }
                      if (cResult[27] === isLoading) {
                        if (cResult[28] === loadingPlaceholder) {
                          if (cResult[29] === tmp4.placeholder) {
                            let tmp19 = cResult[30];
                          }
                          if (cResult[31] === tmp12) {
                            if (cResult[32] === tmp16) {
                              if (cResult[33] === tmp19) {
                                let tmp23 = cResult[34];
                              }
                              return tmp23;
                            }
                          }
                          const obj5 = { style: tmp12, children: null };
                          const items1 = [tmp16, tmp19];
                          obj5.children = items1;
                          const tmp26 = hasOwnProperty(View, obj5);
                          cResult[31] = tmp12;
                          cResult[32] = tmp16;
                          cResult[33] = tmp19;
                          cResult[34] = tmp26;
                          tmp23 = tmp26;
                        }
                      }
                      let tmp20 = isLoading;
                      if (isLoading) {
                        tmp20 = null != loadingPlaceholder;
                      }
                      if (tmp20) {
                        const obj6 = { style: tmp4.placeholder, children: loadingPlaceholder };
                        tmp20 = React4(View, obj6);
                      }
                      cResult[27] = isLoading;
                      cResult[28] = loadingPlaceholder;
                      cResult[29] = tmp4.placeholder;
                      cResult[30] = tmp20;
                      tmp19 = tmp20;
                    }
                  }
                }
              }
              const obj7 = { source: tmp14, accessible: false, style: tmp15, onError: handleError, onLoad: handleLoad };
              const tmp18 = React4(FastImageDefault, obj7, imageUrl);
              cResult[21] = handleError;
              cResult[22] = handleLoad;
              cResult[23] = imageUrl;
              cResult[24] = tmp14;
              cResult[25] = tmp15;
              cResult[26] = tmp18;
              tmp16 = tmp18;
            }
          }
        }
        let tmp13 = coverContainerStyle;
        if (!isCover) {
          const items2 = [iconContainerStyle, tmp4.iconContainer];
          tmp13 = items2;
        }
        cResult[14] = coverContainerStyle;
        cResult[15] = iconContainerStyle;
        cResult[16] = isCover;
        cResult[17] = tmp4.iconContainer;
        cResult[18] = tmp13;
        tmp12 = tmp13;
      }
      const tmp10 = useGameArtworkDefault(tmp5, tmp7);
    }
    const iconURL = game.getIconURL(iconImageSize);
    cResult[3] = game;
    cResult[4] = iconImageSize;
    cResult[5] = iconURL;
    tmp7 = iconURL;
  }
  const coverURL = game.getCoverURL(coverImageSize);
  cResult[0] = coverImageSize;
  cResult[1] = game;
  cResult[2] = coverURL;
  tmp5 = coverURL;
}) : (function GameCoverArt(arg0) {
  ({ game, coverContainerStyle, loadingPlaceholder } = arg0);
  ({ coverImageSize, iconImageSize, iconContainerStyle } = arg0);
  const tmp = closure_6();
  const coverURL = game.getCoverURL(coverImageSize);
  const iconURL = game.getIconURL(iconImageSize);
  ({ imageUrl, isCover, isLoading } = useGameArtworkDefault(coverURL, iconURL));
  if (null == imageUrl) {
    const obj2 = { style: null, children: null };
    const items = [coverContainerStyle, tmp.fallback];
    obj2.style = items;
    const obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: game.name };
    obj2.children = React4(Text_Text.Text, obj3);
    let tmp15Result = React4(View, obj2);
  } else {
    let tmp9 = coverContainerStyle;
    if (!isCover) {
      const items1 = [iconContainerStyle, tmp.iconContainer];
      tmp9 = items1;
    }
    const obj = { style: tmp9, children: null };
    const obj4 = { source: null, accessible: false, style: null, onError: null, onLoad: null };
    const obj5 = { uri: imageUrl };
    obj4.source = obj5;
    obj4.style = isCover ? tmp.image : tmp.icon;
    obj4.onError = tmp8;
    obj4.onLoad = tmp7;
    const items2 = [React4(FastImageDefault, obj4, imageUrl), ];
    if (isLoading) {
      isLoading = null != loadingPlaceholder;
    }
    if (isLoading) {
      const obj6 = { style: tmp.placeholder, children: loadingPlaceholder };
      isLoading = React4(View, obj6);
    }
    items2[1] = isLoading;
    obj.children = items2;
    tmp15Result = hasOwnProperty(View, obj);
  }
  return tmp15Result;
});
// discord_app/modules/game_profile/native/components/GameCoverArt.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useGameArtworkDefault from "../../hooks/useGameArtwork.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["game", "imageSize"];
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const GameCoverArtSize = { SMALL: 0, [0]: "SMALL", LARGE: 1, [1]: "LARGE", COMPACT: 2, [2]: "COMPACT" };
const dependencyMap = {
  [GameCoverArtSize.SMALL]: { nameVariant: "text-xs/medium", nameLineClamp: 3, releaseYearVariant: "text-xxs/normal" },
  [GameCoverArtSize.LARGE]: { nameVariant: "text-md/medium", nameLineClamp: 4, releaseYearVariant: "text-sm/normal" },
};
const createStyles = fn(5005);
let obj3 = {
  container: { borderRadius: nativeDefault.radii.sm },
  image: null,
  iconContainer: null,
  backdropContainer: null,
  backdrop: null,
  icon: null,
  fallback: null,
  compactFallback: null,
  fallbackText: null,
  spacer: null,
  placeholder: null,
};
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
obj3.image = size;
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj3.iconContainer = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.borderRadius = nativeDefault.radii.sm;
obj6.overflow = "hidden";
obj3.backdropContainer = obj6;
let obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let items = [{ scale: 1.2 }];
obj7.transform = items;
obj3.backdrop = obj7;
let obj5 = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj3.icon = { width: "85%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm };
let obj8 = { width: "85%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm };
obj3.fallback = {
  alignItems: "center",
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj9 = {
  alignItems: "center",
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj3.compactFallback = {
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj3.fallbackText = { textAlign: "center" };
obj3.spacer = { flex: 1 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3.placeholder = {};
let closure_10 = createStyles.createStyles(obj3);
fn(558);
let obj10 = {
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
const obj11 = {};
let ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameCoverArtFromURLs(arg0) {
      const obj = c;
      const cResult = obj.c(38);
      ({ gameName, firstReleaseDate, size, style, accessible, loadingPlaceholder } = arg0);
      let tmp4 = undefined === accessible;
      ({ coverUrl, iconUrl } = arg0);
      if (!tmp4) {
        tmp4 = accessible;
      }
      const tmp5 = closure_10();
      ({ imageUrl, isCover, isLoading, handleLoad, handleError } = useGameArtworkDefault(coverUrl, iconUrl));
      if (null == imageUrl) {
        if (cResult[0] === tmp4) {
          if (cResult[1] === firstReleaseDate) {
            if (cResult[2] === gameName) {
              if (cResult[3] === size) {
                if (cResult[4] === style) {
                  let tmp29 = cResult[5];
                }
                return tmp29;
              }
            }
          }
        }
        const obj2 = { gameName, firstReleaseDate, size, style, accessible: tmp4 };
        const tmp32 = timestampProducer(closure_12, obj2);
        cResult[0] = tmp4;
        cResult[1] = firstReleaseDate;
        cResult[2] = gameName;
        cResult[3] = size;
        cResult[4] = style;
        cResult[5] = tmp32;
        tmp29 = tmp32;
      } else {
        if (cResult[6] === gameName) {
          if (cResult[7] === size) {
            let tmp8 = cResult[8];
          }
          let iconContainer = !isCover;
          if (!isCover) {
            iconContainer = tmp5.iconContainer;
          }
          if (cResult[9] === style) {
            if (cResult[10] === tmp5.container) {
              if (cResult[11] === iconContainer) {
                let tmp11 = cResult[12];
              }
              if (cResult[13] === imageUrl) {
                if (cResult[14] === isCover) {
                  if (cResult[15] === tmp5.backdrop) {
                    if (cResult[16] === tmp5.backdropContainer) {
                      let tmp12 = cResult[17];
                    }
                    if (cResult[18] !== imageUrl) {
                      const obj3 = { uri: imageUrl };
                      cResult[18] = imageUrl;
                      cResult[19] = obj3;
                      let tmp16 = obj3;
                    } else {
                      tmp16 = cResult[19];
                    }
                    const tmp17 = isCover ? tmp5.image : tmp5.icon;
                    let str = "cover";
                    if (isCover) {
                      str = "stretch";
                    }
                    if (cResult[20] === handleError) {
                      if (cResult[21] === handleLoad) {
                        if (cResult[22] === imageUrl) {
                          if (cResult[23] === tmp16) {
                            if (cResult[24] === tmp17) {
                              if (cResult[25] === str) {
                                let tmp18 = cResult[26];
                              }
                              if (cResult[27] === isLoading) {
                                if (cResult[28] === loadingPlaceholder) {
                                  if (cResult[29] === tmp5.placeholder) {
                                    let tmp21 = cResult[30];
                                  }
                                  if (cResult[31] === tmp4) {
                                    if (cResult[32] === tmp8) {
                                      if (cResult[33] === tmp21) {
                                        if (cResult[34] === tmp11) {
                                          if (cResult[35] === tmp12) {
                                            if (cResult[36] === tmp18) {
                                              let tmp25 = cResult[37];
                                            }
                                            return tmp25;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj4 = {
                                    style: tmp11,
                                    accessible: tmp4,
                                    accessibilityRole: "image",
                                    accessibilityLabel: tmp8,
                                    children: null,
                                  };
                                  const items = [tmp12, tmp18, tmp21];
                                  obj4.children = items;
                                  const tmp28 = React5(hasOwnProperty, obj4);
                                  cResult[31] = tmp4;
                                  cResult[32] = tmp8;
                                  cResult[33] = tmp21;
                                  cResult[34] = tmp11;
                                  cResult[35] = tmp12;
                                  cResult[36] = tmp18;
                                  cResult[37] = tmp28;
                                  tmp25 = tmp28;
                                }
                              }
                              let tmp22 = isLoading;
                              if (isLoading) {
                                tmp22 = null != loadingPlaceholder;
                              }
                              if (tmp22) {
                                const obj5 = { style: tmp5.placeholder, children: loadingPlaceholder };
                                tmp22 = timestampProducer(hasOwnProperty, obj5);
                              }
                              cResult[27] = isLoading;
                              cResult[28] = loadingPlaceholder;
                              cResult[29] = tmp5.placeholder;
                              cResult[30] = tmp22;
                              tmp21 = tmp22;
                            }
                          }
                        }
                      }
                    }
                    const obj6 = {
                      source: tmp16,
                      accessible: false,
                      style: tmp17,
                      resizeMode: str,
                      onError: handleError,
                      onLoad: handleLoad,
                    };
                    const tmp20 = timestampProducer(FastImageDefault, obj6, imageUrl);
                    cResult[20] = handleError;
                    cResult[21] = handleLoad;
                    cResult[22] = imageUrl;
                    cResult[23] = tmp16;
                    cResult[24] = tmp17;
                    cResult[25] = str;
                    cResult[26] = tmp20;
                    tmp18 = tmp20;
                  }
                }
              }
              let tmp13 = !isCover;
              if (!isCover) {
                const obj7 = { style: tmp5.backdropContainer, pointerEvents: "none", children: null };
                const obj8 = {
                  source: null,
                  style: null,
                  resizeMode: "cover",
                  blurRadius: 24,
                  accessible: false,
                  accessibilityElementsHidden: true,
                  importantForAccessibility: "no-hide-descendants",
                };
                const obj9 = { uri: imageUrl };
                obj8.source = obj9;
                obj8.style = tmp5.backdrop;
                obj7.children = timestampProducer(FastImageDefault, obj8);
                tmp13 = timestampProducer(hasOwnProperty, obj7);
              }
              cResult[13] = imageUrl;
              cResult[14] = isCover;
              cResult[15] = tmp5.backdrop;
              cResult[16] = tmp5.backdropContainer;
              cResult[17] = tmp13;
              tmp12 = tmp13;
            }
          }
          const items1 = [tmp5.container, iconContainer, style];
          cResult[9] = style;
          cResult[10] = tmp5.container;
          cResult[11] = iconContainer;
          cResult[12] = items1;
          tmp11 = items1;
        }
        let formatToPlainStringResult = gameName;
        if (size !== obj.COMPACT) {
          const intl = util.intl;
          const obj10 = { game: gameName };
          formatToPlainStringResult = intl.formatToPlainString(util.t["3ev90U"], obj10);
        }
        cResult[6] = gameName;
        cResult[7] = size;
        cResult[8] = formatToPlainStringResult;
        tmp8 = formatToPlainStringResult;
      }
      const tmp7 = useGameArtworkDefault(coverUrl, iconUrl);
    }
  : function GameCoverArtFromURLs(loadingPlaceholder) {
      ({ gameName, size, style, accessible } = loadingPlaceholder);
      ({ coverUrl, iconUrl, firstReleaseDate } = loadingPlaceholder);
      if (accessible === undefined) {
        accessible = true;
      }
      loadingPlaceholder = loadingPlaceholder.loadingPlaceholder;
      const tmp = closure_10();
      ({ imageUrl, isCover, isLoading } = useGameArtworkDefault(coverUrl, iconUrl));
      if (null == imageUrl) {
        const obj2 = { gameName, firstReleaseDate, size, style, accessible };
        return timestampProducer(closure_12, obj2);
      } else {
        let formatToPlainStringResult = gameName;
        if (size !== obj.COMPACT) {
          const intl = util.intl;
          obj = { game: gameName };
          formatToPlainStringResult = intl.formatToPlainString(util.t["3ev90U"], obj);
        }
        const items = [tmp.container, ,];
        let iconContainer = !isCover;
        if (!isCover) {
          iconContainer = tmp.iconContainer;
        }
        const obj3 = {
          style: null,
          accessible: null,
          accessibilityRole: "image",
          accessibilityLabel: null,
          children: null,
        };
        items[1] = iconContainer;
        items[2] = style;
        obj3.style = items;
        obj3.accessible = accessible;
        obj3.accessibilityLabel = formatToPlainStringResult;
        let tmp11 = !isCover;
        if (!isCover) {
          const obj4 = { style: tmp.backdropContainer, pointerEvents: "none", children: null };
          const obj5 = {
            source: null,
            style: null,
            resizeMode: "cover",
            blurRadius: 24,
            accessible: false,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
          };
          const obj6 = { uri: imageUrl };
          obj5.source = obj6;
          obj5.style = tmp.backdrop;
          obj4.children = timestampProducer(FastImageDefault, obj5);
          tmp11 = timestampProducer(hasOwnProperty, obj4);
        }
        const items1 = [tmp11, ,];
        const obj7 = { source: null, accessible: false, style: null, resizeMode: null, onError: null, onLoad: null };
        const obj8 = { uri: imageUrl };
        obj7.source = obj8;
        obj7.style = isCover ? tmp.image : tmp.icon;
        let str = "cover";
        if (isCover) {
          str = "stretch";
        }
        obj7.resizeMode = str;
        obj7.onError = tmp6;
        obj7.onLoad = tmp5;
        items1[1] = timestampProducer(FastImageDefault, obj7, imageUrl);
        if (isLoading) {
          isLoading = null != loadingPlaceholder;
        }
        if (isLoading) {
          const obj9 = { style: tmp.placeholder, children: loadingPlaceholder };
          isLoading = timestampProducer(hasOwnProperty, obj9);
        }
        items1[2] = isLoading;
        obj3.children = items1;
        return React5(hasOwnProperty, obj3);
      }
      const tmp4 = useGameArtworkDefault(coverUrl, iconUrl);
    };
let closure_11 = tmp9;
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameCoverArtFallback(arg0) {
      const obj = c;
      const cResult = obj.c(38);
      ({ gameName, firstReleaseDate, size, style, accessible } = arg0);
      const tmp4 = closure_10();
      if (size === obj.COMPACT) {
        if (cResult[0] === style) {
          if (cResult[1] === tmp4.compactFallback) {
            if (cResult[2] === tmp4.container) {
              let tmp36 = cResult[3];
            }
            if (cResult[4] === gameName) {
              if (cResult[5] === tmp4.fallbackText) {
                let tmp37 = cResult[6];
              }
              if (cResult[7] === accessible) {
                if (cResult[8] === gameName) {
                  if (cResult[9] === tmp36) {
                    if (cResult[10] === tmp37) {
                      let tmp40 = cResult[11];
                    }
                    return tmp40;
                  }
                }
              }
              const obj2 = {
                style: tmp36,
                accessible,
                accessibilityRole: "image",
                accessibilityLabel: gameName,
                children: tmp37,
              };
              const tmp43 = timestampProducer(hasOwnProperty, obj2);
              cResult[7] = accessible;
              cResult[8] = gameName;
              cResult[9] = tmp36;
              cResult[10] = tmp37;
              cResult[11] = tmp43;
              tmp40 = tmp43;
            }
            const obj3 = {
              variant: "text-xxs/medium",
              lineClamp: 3,
              style: tmp4.fallbackText,
              accessible: false,
              children: gameName,
            };
            const tmp39 = timestampProducer(Text_Text.Text, obj3);
            cResult[4] = gameName;
            cResult[5] = tmp4.fallbackText;
            cResult[6] = tmp39;
            tmp37 = tmp39;
          }
        }
        const items = [tmp4.container, style, tmp4.compactFallback];
        cResult[0] = style;
        cResult[1] = tmp4.compactFallback;
        cResult[2] = tmp4.container;
        cResult[3] = items;
        tmp36 = items;
      } else {
        ({ nameVariant, nameLineClamp, releaseYearVariant } = dependencyMap[size]);
        if (cResult[12] !== firstReleaseDate) {
          let date = null;
          if (null != firstReleaseDate) {
            const _Date = Date;
            date = new Date(firstReleaseDate);
          }
          let combined = null;
          if (null != date) {
            const _HermesInternal = HermesInternal;
            combined = "(" + date.getFullYear() + ")";
          }
          cResult[12] = firstReleaseDate;
          cResult[13] = combined;
          let tmp5 = combined;
        } else {
          tmp5 = cResult[13];
        }
        if (cResult[14] === style) {
          if (cResult[15] === tmp4.container) {
            if (cResult[16] === tmp4.fallback) {
              let tmp14 = cResult[17];
            }
            let combined1 = gameName;
            if (null != tmp5) {
              const _HermesInternal2 = HermesInternal;
              combined1 = "" + gameName + " " + tmp5;
            }
            if (cResult[18] !== tmp4.spacer) {
              const obj4 = { style: tmp4.spacer };
              const tmp21 = timestampProducer(hasOwnProperty, obj4);
              cResult[18] = tmp4.spacer;
              cResult[19] = tmp21;
              let tmp18 = tmp21;
            } else {
              tmp18 = cResult[19];
            }
            if (cResult[20] === gameName) {
              if (cResult[21] === nameLineClamp) {
                if (cResult[22] === nameVariant) {
                  if (cResult[23] === tmp4.fallbackText) {
                    let tmp22 = cResult[24];
                  }
                  if (cResult[25] !== tmp4.spacer) {
                    const obj5 = { style: tmp4.spacer };
                    const tmp28 = timestampProducer(hasOwnProperty, obj5);
                    cResult[25] = tmp4.spacer;
                    cResult[26] = tmp28;
                    let tmp25 = tmp28;
                  } else {
                    tmp25 = cResult[26];
                  }
                  if (cResult[27] === tmp5) {
                    if (cResult[28] === releaseYearVariant) {
                      let tmp29 = cResult[29];
                    }
                    if (cResult[30] === accessible) {
                      if (cResult[31] === tmp14) {
                        if (cResult[32] === combined1) {
                          if (cResult[33] === tmp18) {
                            if (cResult[34] === tmp22) {
                              if (cResult[35] === tmp25) {
                                if (cResult[36] === tmp29) {
                                  let tmp32 = cResult[37];
                                }
                                return tmp32;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj6 = {
                      style: tmp14,
                      accessible,
                      accessibilityRole: "image",
                      accessibilityLabel: combined1,
                      children: null,
                    };
                    const items1 = [tmp18, tmp22, tmp25, tmp29];
                    obj6.children = items1;
                    const tmp35 = React5(hasOwnProperty, obj6);
                    cResult[30] = accessible;
                    cResult[31] = tmp14;
                    cResult[32] = combined1;
                    cResult[33] = tmp18;
                    cResult[34] = tmp22;
                    cResult[35] = tmp25;
                    cResult[36] = tmp29;
                    cResult[37] = tmp35;
                    tmp32 = tmp35;
                  }
                  const obj7 = {
                    variant: releaseYearVariant,
                    color: "text-default",
                    accessible: false,
                    children: tmp5,
                  };
                  const tmp31 = timestampProducer(Text_Text.Text, obj7);
                  cResult[27] = tmp5;
                  cResult[28] = releaseYearVariant;
                  cResult[29] = tmp31;
                  tmp29 = tmp31;
                }
              }
            }
            const obj8 = {
              variant: nameVariant,
              color: "text-default",
              lineClamp: nameLineClamp,
              style: tmp4.fallbackText,
              accessible: false,
              children: gameName,
            };
            const tmp24 = timestampProducer(Text_Text.Text, obj8);
            cResult[20] = gameName;
            cResult[21] = nameLineClamp;
            cResult[22] = nameVariant;
            cResult[23] = tmp4.fallbackText;
            cResult[24] = tmp24;
            tmp22 = tmp24;
          }
        }
        const items2 = [tmp4.container, style, tmp4.fallback];
        cResult[14] = style;
        cResult[15] = tmp4.container;
        cResult[16] = tmp4.fallback;
        cResult[17] = items2;
        tmp14 = items2;
      }
    }
  : function GameCoverArtFallback(arg0) {
      ({ gameName, firstReleaseDate, size, style, accessible } = arg0);
      const tmp = closure_10();
      if (size === obj.COMPACT) {
        const obj2 = {
          style: null,
          accessible: null,
          accessibilityRole: "image",
          accessibilityLabel: null,
          children: null,
        };
        const items = [tmp.container, style, tmp.compactFallback];
        obj2.style = items;
        obj2.accessible = accessible;
        obj2.accessibilityLabel = gameName;
        const obj3 = {
          variant: "text-xxs/medium",
          lineClamp: 3,
          style: tmp.fallbackText,
          accessible: false,
          children: gameName,
        };
        obj2.children = timestampProducer(Text_Text.Text, obj3);
        return timestampProducer(hasOwnProperty, obj2);
      } else {
        let date = null;
        ({ nameVariant, nameLineClamp, releaseYearVariant } = dependencyMap[size]);
        if (null != firstReleaseDate) {
          const _Date = Date;
          date = new Date(firstReleaseDate);
        }
        let combined = null;
        if (null != date) {
          const _HermesInternal = HermesInternal;
          combined = "(" + date.getFullYear() + ")";
        }
        obj = { style: null, accessible: null, accessibilityRole: "image", accessibilityLabel: null, children: null };
        const items1 = [tmp.container, style, tmp.fallback];
        obj.style = items1;
        obj.accessible = accessible;
        let combined1 = gameName;
        if (null != combined) {
          const _HermesInternal2 = HermesInternal;
          combined1 = "" + gameName + " " + combined;
        }
        obj.accessibilityLabel = combined1;
        const obj4 = { style: tmp.spacer };
        const items2 = [timestampProducer(hasOwnProperty, obj4), , ,];
        const obj5 = {
          variant: nameVariant,
          color: "text-default",
          lineClamp: nameLineClamp,
          style: tmp.fallbackText,
          accessible: false,
          children: gameName,
        };
        items2[1] = timestampProducer(Text_Text.Text, obj5);
        const obj6 = { style: tmp.spacer };
        items2[2] = timestampProducer(hasOwnProperty, obj6);
        const obj7 = { variant: releaseYearVariant, color: "text-default", accessible: false, children: combined };
        items2[3] = timestampProducer(Text_Text.Text, obj7);
        obj.children = items2;
        return React5(hasOwnProperty, obj);
      }
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameCoverArt.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameCoverArt(arg0) {
      const cResult = c.c(16);
      if (cResult[0] !== arg0) {
        ({ game, imageSize } = arg0);
        const tmp6 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = game;
        cResult[2] = imageSize;
        cResult[3] = tmp6;
        let tmp3 = tmp6;
        let tmp2 = imageSize;
        let obj2 = game;
      } else {
        obj2 = cResult[1];
        tmp2 = cResult[2];
        tmp3 = cResult[3];
      }
      if (cResult[4] === obj2) {
        if (cResult[5] === tmp2) {
          let tmp7 = cResult[6];
        }
        if (cResult[7] === obj2) {
          if (cResult[8] === tmp2) {
            let tmp9 = cResult[9];
          }
          if (cResult[10] === obj2.firstReleaseDate) {
            if (cResult[11] === obj2.name) {
              if (cResult[12] === tmp3) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp9) {
                    let tmp12 = cResult[15];
                  }
                  return tmp12;
                }
              }
            }
          }
          const obj4 = {};
          const merged = Object.assign(tmp3);
          obj4.coverUrl = tmp7;
          obj4.iconUrl = tmp9;
          ({ name: obj3.gameName, firstReleaseDate: obj3.firstReleaseDate } = obj2);
          const tmp18 = timestampProducer(closure_11, obj4);
          cResult[10] = obj2.firstReleaseDate;
          cResult[11] = obj2.name;
          cResult[12] = tmp3;
          cResult[13] = tmp7;
          cResult[14] = tmp9;
          cResult[15] = tmp18;
          tmp12 = tmp18;
        }
        let num5 = tmp2;
        if (tmp2 == null) {
          num5 = 256;
        }
        const iconURL = obj2.getIconURL(num5);
        cResult[7] = obj2;
        cResult[8] = tmp2;
        cResult[9] = iconURL;
        tmp9 = iconURL;
      }
      const coverURL = obj2.getCoverURL(tmp2);
      cResult[4] = obj2;
      cResult[5] = tmp2;
      cResult[6] = coverURL;
      tmp7 = coverURL;
    }
  : function GameCoverArt(arg0) {
      ({ game, imageSize } = arg0);
      const obj = {};
      const merged = Object.assign(Object.assign(arg0, Object.assign({ game: 0, imageSize: 0 })));
      obj.coverUrl = game.getCoverURL(imageSize);
      if (imageSize == null) {
        imageSize = 256;
      }
      obj.iconUrl = game.getIconURL(imageSize);
      ({ name: obj.gameName, firstReleaseDate: obj.firstReleaseDate } = game);
      return timestampProducer(closure_11, obj);
    };
export { GameCoverArtSize };
export const GameCoverArtFromURLs = tmp9;

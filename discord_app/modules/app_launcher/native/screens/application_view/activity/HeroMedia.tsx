// === Module 11769: HeroMedia ===

// Module 11769 (HeroMedia)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6857 */;
import common_VideoDefault from "common/Video" /* 8425 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 10623 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 10962 */;
import getPreviewVideoAssetUrlDefault from "getPreviewVideoAssetUrl" /* 11734 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
const DEFAULT_CONTENT_PADDING = fn(1502).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ mediaBackground: { backgroundColor: "black" } });
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHeroMediaDimensions(arg0) {
  const cResult = c.c(5);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ width, contentWidth } = tmp4);
  if (contentWidth == null) {
    if (width == null) {
      width = tmpResult.useDefaultAppLauncherWidth();
    }
    contentWidth = width - 2 * DEFAULT_CONTENT_PADDING;
  }
  const rounded = Math.floor(9 * contentWidth / 16);
  if (cResult[2] === rounded) {
    if (cResult[3] === contentWidth) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const size = { width: contentWidth, height: rounded };
  cResult[2] = rounded;
  cResult[3] = contentWidth;
  cResult[4] = size;
  tmp7 = size;
  tmpResult = useDefaultAppLauncherWidth;
}) : (function useHeroMediaDimensions() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ width, contentWidth } = obj);
  if (contentWidth == null) {
    if (width == null) {
      width = obj2.useDefaultAppLauncherWidth();
    }
    contentWidth = width - 2 * DEFAULT_CONTENT_PADDING;
  }
  const size = { width: contentWidth, height: Math.floor(9 * contentWidth / 16) };
  return size;
});
let closure_7 = tmp3;
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HeroMedia(arg0) {
  const cResult = c.c(36);
  ({ applicationId, containerHeight, width, contentWidth } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === contentWidth) {
    if (cResult[1] === width) {
      let tmp5 = cResult[2];
    }
    const size = closure_7(tmp5);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = ["embedded_cover"];
      cResult[3] = items;
      let tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === applicationId) {
      if (cResult[5] === size.width) {
        let tmp9 = cResult[6];
      }
      const tmp11 = useEmbeddedActivityBackgroundDefault(tmp9);
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AccessibilityStore];
        const fn = function k() {
          return useReducedMotion.useReducedMotion;
        };
        const items2 = [];
        cResult[7] = items1;
        cResult[8] = fn;
        cResult[9] = items2;
        let tmp14 = items2;
        let tmp13 = fn;
        let tmp12 = items1;
      } else {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
        tmp14 = cResult[9];
      }
      const stateFromStores = initialize.useStateFromStores(tmp12, tmp13, tmp14);
      const tmpResult = initialize;
      const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(applicationId);
      let prop;
      if (getOrFetchApplication != null) {
        prop = getOrFetchApplication.embeddedActivityConfig;
      }
      if (cResult[10] === applicationId) {
        if (cResult[11] === prop) {
          let tmp20 = cResult[12];
        }
        if (null != tmp20) {
          if ("" !== tmp20) {
            if (cResult[13] === tmp11.url) {
              if (cResult[14] === tmp20) {
                let name;
                ({ height, width: width2 } = size);
                if (getOrFetchApplication != null) {
                  name = getOrFetchApplication.name;
                }
                if (cResult[16] !== name) {
                  const intl = util.intl;
                  let str3;
                  if (getOrFetchApplication != null) {
                    str3 = getOrFetchApplication.name;
                  }
                  if (str3 == null) {
                    str3 = "";
                  }
                  const obj2 = { applicationName: str3 };
                  const formatToPlainStringResult = intl.formatToPlainString(util.t["Af+EQD"], obj2);
                  let name1;
                  if (getOrFetchApplication != null) {
                    name1 = getOrFetchApplication.name;
                  }
                  cResult[16] = name1;
                  cResult[17] = formatToPlainStringResult;
                  let tmp26 = formatToPlainStringResult;
                } else {
                  tmp26 = cResult[17];
                }
                if (cResult[18] !== size.height) {
                  const obj3 = { maxHeight: size.height };
                  cResult[18] = size.height;
                  cResult[19] = obj3;
                  let tmp29 = obj3;
                } else {
                  tmp29 = cResult[19];
                }
                if (cResult[20] === containerHeight) {
                  if (cResult[21] === size.height) {
                    let tmp30 = cResult[22];
                  }
                  if (cResult[23] === tmp4.mediaBackground) {
                    if (cResult[24] === tmp29) {
                      if (cResult[25] === tmp30) {
                        let tmp32 = cResult[26];
                      }
                      if (cResult[27] === tmp11.url) {
                        if (cResult[28] === size.height) {
                          if (cResult[29] === size.width) {
                            if (cResult[30] === tmp4.mediaBackground) {
                              if (cResult[31] === tmp26) {
                                if (cResult[32] === tmp32) {
                                  if (cResult[33] === tmp23) {
                                    if (cResult[34] === stateFromStores) {
                                      let tmp33 = cResult[35];
                                    }
                                    return tmp33;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const size1 = { muted: true, paused: stateFromStores, src: tmp23, height, width: width2, poster: tmp11.url, resizeMode: "cover", accessibilityLabel: tmp26, style: tmp32, videoStyle: tmp4.mediaBackground, postponeRender: false };
                      const tmp35 = jsx(common_VideoDefault, { muted: true, paused: stateFromStores, src: tmp23, height, width: width2, poster: tmp11.url, resizeMode: "cover", accessibilityLabel: tmp26, style: tmp32, videoStyle: tmp4.mediaBackground, postponeRender: false });
                      cResult[27] = tmp11.url;
                      cResult[28] = size.height;
                      cResult[29] = size.width;
                      cResult[30] = tmp4.mediaBackground;
                      cResult[31] = tmp26;
                      cResult[32] = tmp32;
                      cResult[33] = tmp23;
                      cResult[34] = stateFromStores;
                      cResult[35] = tmp35;
                      tmp33 = tmp35;
                    }
                  }
                  const items3 = [tmp4.mediaBackground, tmp29, tmp30];
                  cResult[23] = tmp4.mediaBackground;
                  cResult[24] = tmp29;
                  cResult[25] = tmp30;
                  cResult[26] = items3;
                  tmp32 = items3;
                }
                let tmp31 = null != containerHeight;
                if (tmp31) {
                  const obj4 = { transform: null };
                  const obj5 = { translateY: (containerHeight - size.height) / 2 };
                  const items4 = [obj5];
                  obj4.transform = items4;
                  tmp31 = obj4;
                }
                cResult[20] = containerHeight;
                cResult[21] = size.height;
                cResult[22] = tmp31;
                tmp30 = tmp31;
              }
            }
            if (null == tmp20) {
              let str2 = tmp11.url;
              if (str2 == null) {
                str2 = "";
              }
              let obj6 = { uri: str2 };
              cResult[13] = tmp11.url;
              cResult[14] = tmp20;
              cResult[15] = obj6;
            }
            const obj7 = { videoURI: tmp20 };
            obj6 = obj7;
          }
        }
        return null;
      }
      let prop1;
      if (prop != null) {
        prop1 = prop.activity_preview_video_asset_id;
      }
      let tmp22 = null;
      if (null != prop1) {
        tmp22 = getPreviewVideoAssetUrlDefault(applicationId, prop.activity_preview_video_asset_id);
      }
      cResult[10] = applicationId;
      cResult[11] = prop;
      cResult[12] = tmp22;
      tmp20 = tmp22;
      const tmpResult2 = useGetOrFetchApplications;
    }
    const obj8 = { applicationId, size: size.width, names: tmp8 };
    cResult[4] = applicationId;
    cResult[5] = size.width;
    cResult[6] = obj8;
    tmp9 = obj8;
  }
  const obj9 = { width, contentWidth };
  cResult[0] = contentWidth;
  cResult[1] = width;
  cResult[2] = obj9;
  tmp5 = obj9;
}) : (function HeroMedia(arg0) {
  ({ applicationId, containerHeight } = arg0);
  ({ width, contentWidth } = arg0);
  const tmp = closure_6();
  const size = closure_7({ width, contentWidth });
  const tmp4 = useEmbeddedActivityBackgroundDefault({ applicationId, size: size.width, names: ["embedded_cover"] });
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  const obj = { applicationId, size: size.width, names: ["embedded_cover"] };
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(applicationId);
  let prop;
  if (getOrFetchApplication != null) {
    prop = getOrFetchApplication.embeddedActivityConfig;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.activity_preview_video_asset_id;
  }
  let tmp10 = null;
  if (null != prop1) {
    tmp10 = getPreviewVideoAssetUrlDefault(applicationId, prop.activity_preview_video_asset_id);
  }
  let tmp13Result = null;
  if (null != tmp10) {
    tmp13Result = null;
    if ("" !== tmp10) {
      const size1 = { muted: true, paused: stateFromStores, src: null, height: null, width: null, poster: null, resizeMode: "cover", accessibilityLabel: null, style: null, videoStyle: null, postponeRender: false };
      if (null != tmp10) {
        if ("" !== tmp10) {
          const obj4 = { videoURI: tmp10 };
          let obj9 = obj4;
        }
        size1.src = obj9;
        ({ height: obj10.height, width: obj10.width } = size);
        size1.poster = tmp4.url;
        const intl = util.intl;
        let str3;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        const obj5 = { applicationName: str3 };
        size1.accessibilityLabel = intl.formatToPlainString(util.t["Af+EQD"], obj5);
        const items1 = [tmp.mediaBackground, , ];
        const obj6 = { maxHeight: size.height };
        items1[1] = obj6;
        let tmp12 = null != containerHeight;
        if (tmp12) {
          const obj7 = { transform: null };
          const obj8 = { translateY: (containerHeight - size.height) / 2 };
          const items2 = [obj8];
          obj7.transform = items2;
          tmp12 = obj7;
        }
        items1[2] = tmp12;
        size1.style = items1;
        size1.videoStyle = tmp.mediaBackground;
        tmp13Result = <tmp14 {...size1} />;
      }
      let str2 = tmp4.url;
      if (str2 == null) {
        str2 = "";
      }
      obj9 = { uri: str2 };
    }
  }
  return tmp13Result;
});
export const useHeroMediaDimensions = tmp3;
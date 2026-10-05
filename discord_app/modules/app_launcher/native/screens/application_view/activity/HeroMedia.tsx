// === Module 11708: HeroMedia ===

// Module 11708 (HeroMedia)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6663 */;
import common_VideoDefault from "common/Video" /* 7983 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9149 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 10995 */;
import getPreviewVideoAssetUrlDefault from "getPreviewVideoAssetUrl" /* 11672 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ mediaBackground: { backgroundColor: "black" } });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let contentWidth;
  let tmp4;
  let width;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ width, contentWidth } = tmp4);
  const tmpResult = useDefaultAppLauncherWidth;
  if (contentWidth == null) {
    if (width == null) {
      width = tmpResult.useDefaultAppLauncherWidth();
    }
    contentWidth = width - 2 * DEFAULT_CONTENT_PADDING;
  }
  const rounded = Math.floor(9 * contentWidth / 16);
  if (cResult[2] === rounded) {
    let tmp7;
    if (cResult[3] === contentWidth) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  size = { width: contentWidth, height: rounded };
  cResult[2] = rounded;
  cResult[3] = contentWidth;
  cResult[4] = size;
  tmp7 = size;
}) : (() => {
  let contentWidth;
  let width;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ width, contentWidth } = obj);
  const obj2 = useDefaultAppLauncherWidth;
  if (contentWidth == null) {
    if (width == null) {
      width = obj2.useDefaultAppLauncherWidth();
    }
    contentWidth = width - 2 * DEFAULT_CONTENT_PADDING;
  }
  size = { width: contentWidth, height: Math.floor(9 * contentWidth / 16) };
  return size;
});
let closure_7 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let containerHeight;
  let contentWidth;
  let items4;
  let useReducedMotion;
  let width;
  const obj = react2;
  const cResult = obj.c(36);
  ({ applicationId, containerHeight, width, contentWidth } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === contentWidth) {
    let tmp5;
    let tmp8;
    if (cResult[1] === width) {
      tmp5 = cResult[2];
    }
    size = closure_7(tmp5);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = ["embedded_cover"];
      cResult[3] = items;
      tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === applicationId) {
      let tmp9;
      let tmp14;
      let tmp13;
      let tmp12;
      if (cResult[5] === size.width) {
        tmp9 = cResult[6];
      }
      const tmp11 = useEmbeddedActivityBackgroundDefault(tmp9);
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AccessibilityStore];
        class S {
          constructor() {
            return closure_1_3.useReducedMotion;
          }
        }
        const items2 = [];
        cResult[7] = items1;
        cResult[8] = S;
        cResult[9] = items2;
        tmp14 = items2;
        tmp13 = S;
        tmp12 = items1;
      } else {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
        tmp14 = cResult[9];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13, tmp14);
      const tmpResult2 = useGetOrFetchApplications;
      const getOrFetchApplication = tmpResult2.useGetOrFetchApplication(applicationId);
      let prop;
      if (getOrFetchApplication != null) {
        prop = getOrFetchApplication.embeddedActivityConfig;
      }
      if (cResult[10] === applicationId) {
        let tmp20;
        if (cResult[11] === prop) {
          tmp20 = cResult[12];
        }
        if (null != tmp20) {
          if ("" !== tmp20) {
            let tmp23;
            if (cResult[13] === tmp11.url) {
              let tmp27;
              let tmp31;
              if (cResult[14] === tmp20) {
                tmp23 = cResult[15];
              }
              let name;
              const height = size.height;
              class S {
                constructor() {
                  return closure_1_3.useReducedMotion;
                }
              }
              const url2 = tmp11.url;
              const tmp25 = cResult[16];
              if (getOrFetchApplication != null) {
                name = getOrFetchApplication.name;
              }
              if (tmp25 !== name) {
                const intl = intl2.intl;
                const formatToPlainString = intl.formatToPlainString;
                let str2;
                class S {
                  constructor() {
                    return closure_1_3.useReducedMotion;
                  }
                }
                if (getOrFetchApplication != null) {
                  str2 = getOrFetchApplication.name;
                }
                if (str2 == null) {
                  str2 = "";
                }
                const obj2 = { applicationName: str2 };
                const formatToPlainStringResult = formatToPlainString(tmp28, obj2);
                let name1;
                if (getOrFetchApplication != null) {
                  name1 = getOrFetchApplication.name;
                }
                cResult[16] = name1;
                cResult[17] = formatToPlainStringResult;
                tmp27 = formatToPlainStringResult;
              } else {
                tmp27 = cResult[17];
              }
              if (cResult[18] !== size.height) {
                const obj3 = { maxHeight: size.height };
                class S {
                  constructor() {
                    return closure_1_3.useReducedMotion;
                  }
                }
                cResult[19] = obj3;
                tmp31 = obj3;
              } else {
                tmp31 = cResult[19];
              }
              if (cResult[20] === containerHeight) {
                let tmp32;
                if (cResult[21] === size.height) {
                  tmp32 = cResult[22];
                }
                if (cResult[23] === tmp4.mediaBackground) {
                  if (cResult[24] === tmp31) {
                    let tmp34;
                    if (cResult[25] === tmp32) {
                      tmp34 = cResult[26];
                    }
                    if (cResult[27] === tmp11.url) {
                      if (cResult[28] === size.height) {
                        if (cResult[29] === size.width) {
                          if (cResult[30] === tmp4.mediaBackground) {
                            if (cResult[31] === tmp27) {
                              if (cResult[32] === tmp34) {
                                if (cResult[33] === tmp23) {
                                  let tmp35;
                                  if (cResult[34] === stateFromStores) {
                                    tmp35 = cResult[35];
                                  }
                                  return tmp35;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    class S {
                      constructor() {
                        return closure_1_3.useReducedMotion;
                      }
                    }
                    tmp37[1] = stateFromStores;
                    tmp37[2] = tmp23;
                    tmp37[3] = height;
                    tmp37[4] = tmp24;
                    tmp37[5] = url2;
                    tmp37[7] = tmp27;
                    tmp37[8] = tmp34;
                    tmp37[9] = tmp4.mediaBackground;
                    const tmp38 = jsx(common_VideoDefault, tmp37);
                    cResult[27] = tmp11.url;
                    cResult[28] = size.height;
                    cResult[29] = size.width;
                    cResult[30] = tmp4.mediaBackground;
                    cResult[31] = tmp27;
                    cResult[32] = tmp34;
                    cResult[33] = tmp23;
                    cResult[34] = stateFromStores;
                    cResult[35] = tmp38;
                    tmp35 = tmp38;
                  }
                }
                const items3 = [, , ];
                class S {
                  constructor() {
                    return closure_1_3.useReducedMotion;
                  }
                }
                items3[1] = tmp31;
                items3[2] = tmp32;
                cResult[23] = tmp4.mediaBackground;
                cResult[24] = tmp31;
                cResult[25] = tmp32;
                cResult[26] = items3;
                tmp34 = items3;
              }
              let tmp33 = null != containerHeight;
              if (tmp33) {
                const obj4 = { transform: items4 };
                const obj5 = { translateY: null };
                class S {
                  constructor() {
                    return closure_1_3.useReducedMotion;
                  }
                }
                items4 = [obj5];
                tmp33 = obj4;
              }
              cResult[20] = containerHeight;
              cResult[21] = size.height;
              cResult[22] = tmp33;
              tmp32 = tmp33;
            }
            if (null != tmp20) {
              let obj7;
              if ("" !== tmp20) {
                obj7 = { videoURI: tmp20 };
                const obj6 = { videoURI: tmp20 };
              }
              cResult[13] = tmp11.url;
              class S {
                constructor() {
                  return closure_1_3.useReducedMotion;
                }
              }
              cResult[14] = tmp20;
              cResult[15] = obj7;
              tmp23 = obj7;
            }
            const url = tmp11.url;
            class S {
              constructor() {
                return closure_1_3.useReducedMotion;
              }
            }
            obj7 = { uri: url };
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
}) : ((arg0) => {
  let applicationId;
  let containerHeight;
  let contentWidth;
  let items2;
  let useReducedMotion;
  let width;
  ({ applicationId, containerHeight } = arg0);
  ({ width, contentWidth } = arg0);
  const tmp = closure_6();
  size = closure_7({ width, contentWidth });
  const obj = { applicationId, size: size.width, names: ["embedded_cover"] };
  const tmp4 = useEmbeddedActivityBackgroundDefault(obj);
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  const obj3 = useGetOrFetchApplications;
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
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
  let tmp14Result = null;
  if (null != tmp10) {
    tmp14Result = null;
    if ("" !== tmp10) {
      const size1 = { muted: true, paused: stateFromStores, src: null, height: null, width: null, poster: null, resizeMode: "cover", accessibilityLabel: null, style: null, videoStyle: null, postponeRender: false };
      if (null != tmp10) {
        let obj9;
        if ("" !== tmp10) {
          obj9 = { videoURI: tmp10 };
          const obj4 = { videoURI: tmp10 };
        }
        size1.src = obj9;
        ({ height: obj10.height, width: obj10.width } = size);
        size1.poster = tmp4.url;
        const intl = intl2.intl;
        const formatToPlainString = intl.formatToPlainString;
        let str3;
        const prop2 = intl2.t["Af+EQD"];
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        const obj5 = { applicationName: str3 };
        size1.accessibilityLabel = formatToPlainString(prop2, obj5);
        const items1 = [tmp.mediaBackground, , ];
        const obj6 = { maxHeight: size.height };
        items1[1] = obj6;
        let tmp13 = null != containerHeight;
        if (tmp13) {
          const obj7 = { transform: items2 };
          items2 = [{ translateY: (containerHeight - size.height) / 2 }];
          tmp13 = obj7;
          const obj8 = { translateY: (containerHeight - size.height) / 2 };
        }
        items1[2] = tmp13;
        size1.style = items1;
        size1.videoStyle = tmp.mediaBackground;
        tmp14Result = <tmp15 {...size1} />;
      }
      let str2 = tmp4.url;
      if (str2 == null) {
        str2 = "";
      }
      obj9 = { uri: str2 };
    }
  }
  return tmp14Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx");

export default tmp4;
export const useHeroMediaDimensions = tmp3;
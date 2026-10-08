// === Module 11704: MediaPostGridThumbnail ===

// Module 11704 (MediaPostGridThumbnail)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import FastImageDefault from "FastImage" /* 6164 */;
import ForumPostMedia from "ForumPostMedia" /* 11702 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaPostGridThumbnailAndroid(arg0) {
  const cResult = c.c(33);
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource, resizeMode } = arg0);
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  if (cResult[0] !== androidStyle) {
    let flattenResult = hasOwnProperty.flatten(androidStyle);
    if (flattenResult == null) {
      flattenResult = {};
    }
    cResult[0] = androidStyle;
    cResult[1] = flattenResult;
    let tmp4 = flattenResult;
  } else {
    tmp4 = cResult[1];
  }
  ({ width, height } = tmp4);
  if (null == backgroundImagesource) {
    if (cResult[2] === height) {
      if (cResult[3] === width) {
        let tmp25 = cResult[4];
      }
      if (cResult[5] === num) {
        if (cResult[6] === source) {
          if (cResult[7] === tmp25) {
            let tmp27 = cResult[8];
          }
          if (cResult[9] === blurTheme) {
            if (cResult[10] === shouldSpoiler) {
              let tmp31 = cResult[11];
            }
            if (cResult[12] === androidStyle) {
              if (cResult[13] === tmp27) {
              }
            }
            const obj2 = { style: androidStyle, children: null };
            const items = [tmp27, tmp31];
            obj2.children = items;
            const tmp37 = React5(React4, obj2);
            cResult[12] = androidStyle;
            cResult[13] = tmp27;
            cResult[14] = tmp31;
            cResult[15] = tmp37;
          }
          const obj3 = { shouldSpoiler, blurTheme };
          const tmp33 = timestampProducer(ForumPostMedia.ForumPostMediaSpoiler, obj3);
          cResult[9] = blurTheme;
          cResult[10] = shouldSpoiler;
          cResult[11] = tmp33;
          tmp31 = tmp33;
        }
      }
      const obj4 = { style: tmp25, source, blurRadius: num, resizeMode: "cover" };
      const tmp30 = timestampProducer(FastImageDefault, obj4);
      cResult[5] = num;
      cResult[6] = source;
      cResult[7] = tmp25;
      cResult[8] = tmp30;
      tmp27 = tmp30;
    }
    const items1 = [hasOwnProperty.absoluteFill, ];
    const size = { width, height };
    items1[1] = size;
    cResult[2] = height;
    cResult[3] = width;
    cResult[4] = items1;
    tmp25 = items1;
  } else {
    if (cResult[16] === height) {
      if (cResult[17] === width) {
        let tmp7 = cResult[18];
      }
      if (cResult[19] === backgroundImagesource) {
        if (cResult[20] === tmp7) {
          let tmp9 = cResult[21];
        }
        if (cResult[22] === resizeMode) {
          if (cResult[23] === source) {
            let tmp13 = cResult[24];
          }
          if (cResult[25] === blurTheme) {
            if (cResult[26] === shouldSpoiler) {
              let tmp18 = cResult[27];
            }
            if (cResult[28] === androidStyle) {
              if (cResult[29] === tmp9) {
                if (cResult[30] === tmp13) {
                  if (cResult[31] === tmp18) {
                    let tmp21 = cResult[32];
                  }
                  return tmp21;
                }
              }
            }
            const obj5 = { style: androidStyle, children: null };
            const items2 = [tmp9, tmp13, tmp18];
            obj5.children = items2;
            const tmp24 = React5(React4, obj5);
            cResult[28] = androidStyle;
            cResult[29] = tmp9;
            cResult[30] = tmp13;
            cResult[31] = tmp18;
            cResult[32] = tmp24;
            tmp21 = tmp24;
          }
          const obj6 = { shouldSpoiler, blurTheme };
          const tmp20 = timestampProducer(ForumPostMedia.ForumPostMediaSpoiler, obj6);
          cResult[25] = blurTheme;
          cResult[26] = shouldSpoiler;
          cResult[27] = tmp20;
          tmp18 = tmp20;
        }
        const obj7 = { style: hasOwnProperty.absoluteFill, source, resizeMode };
        const tmp17 = timestampProducer(FastImageDefault, obj7);
        cResult[22] = resizeMode;
        cResult[23] = source;
        cResult[24] = tmp17;
        tmp13 = tmp17;
      }
      const obj8 = { style: tmp7, source: backgroundImagesource, resizeMode: "cover" };
      const tmp12 = timestampProducer(React3, obj8);
      cResult[19] = backgroundImagesource;
      cResult[20] = tmp7;
      cResult[21] = tmp12;
      tmp9 = tmp12;
    }
    const items3 = [hasOwnProperty.absoluteFill, ];
    const size1 = { width, height, opacity: 0.2 };
    items3[1] = size1;
    cResult[16] = height;
    cResult[17] = width;
    cResult[18] = items3;
    tmp7 = items3;
  }
}) : (function MediaPostGridThumbnailAndroid(resizeMode) {
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = resizeMode);
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  let flattenResult = hasOwnProperty.flatten(androidStyle);
  if (flattenResult == null) {
    flattenResult = {};
  }
  ({ width, height } = flattenResult);
  if (null == backgroundImagesource) {
    const obj = { style: androidStyle, children: null };
    const obj2 = { style: null, source: null, blurRadius: null, resizeMode: "cover" };
    const items = [hasOwnProperty.absoluteFill, ];
    const size = { width, height };
    items[1] = size;
    obj2.style = items;
    obj2.source = source;
    obj2.blurRadius = num;
    const items1 = [timestampProducer(FastImageDefault, obj2), ];
    const obj3 = { shouldSpoiler, blurTheme };
    items1[1] = timestampProducer(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    obj.children = items1;
    let obj4 = obj;
  } else {
    obj4 = { style: androidStyle, children: null };
    const obj5 = { style: null, source: null, resizeMode: "cover" };
    const items2 = [hasOwnProperty.absoluteFill, ];
    const size1 = { width, height, opacity: 0.2 };
    items2[1] = size1;
    obj5.style = items2;
    obj5.source = backgroundImagesource;
    const items3 = [timestampProducer(React3, obj5), , ];
    const obj6 = { style: hasOwnProperty.absoluteFill, source, resizeMode: resizeMode.resizeMode };
    items3[1] = timestampProducer(FastImageDefault, obj6);
    const obj7 = { shouldSpoiler, blurTheme };
    items3[2] = timestampProducer(ForumPostMedia.ForumPostMediaSpoiler, obj7);
    obj4.children = items3;
  }
  return React5(React4, obj4);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaPostGridThumbnailIOS(arg0) {
  const cResult = c.c(24);
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    if (cResult[0] === iosStyle) {
      if (cResult[1] === resizeMode) {
        if (cResult[2] === source) {
          let tmp21 = cResult[3];
        }
        if (cResult[4] === blurTheme) {
          if (cResult[5] === shouldSpoiler) {
            let tmp25 = cResult[6];
          }
          if (cResult[7] === tmp21) {
          }
          const obj2 = { children: null };
          const items = [tmp21, tmp25];
          obj2.children = items;
          const tmp31 = React5(closure_1_8, obj2);
          cResult[7] = tmp21;
          cResult[8] = tmp25;
          cResult[9] = tmp31;
        }
        const obj3 = { shouldSpoiler, blurTheme };
        const tmp27 = timestampProducer(ForumPostMedia.ForumPostMediaSpoiler, obj3);
        cResult[4] = blurTheme;
        cResult[5] = shouldSpoiler;
        cResult[6] = tmp27;
        tmp25 = tmp27;
      }
    }
    const obj4 = { style: iosStyle, source, resizeMode };
    const tmp24 = timestampProducer(FastImageDefault, obj4);
    cResult[0] = iosStyle;
    cResult[1] = resizeMode;
    cResult[2] = source;
    cResult[3] = tmp24;
    tmp21 = tmp24;
  } else {
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [hasOwnProperty.absoluteFill, { opacity: 0.2 }];
      cResult[10] = items1;
      let tmp4 = items1;
    } else {
      tmp4 = cResult[10];
    }
    if (cResult[11] !== backgroundImagesource) {
      const obj5 = { style: tmp4, source: backgroundImagesource, resizeMode: "cover" };
      const tmp9 = timestampProducer(FastImageDefault, obj5);
      cResult[11] = backgroundImagesource;
      cResult[12] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[12];
    }
    if (cResult[13] === iosStyle) {
      if (cResult[14] === resizeMode) {
        if (cResult[15] === source) {
          let tmp10 = cResult[16];
        }
        if (cResult[17] === blurTheme) {
          if (cResult[18] === shouldSpoiler) {
            let tmp14 = cResult[19];
          }
          if (cResult[20] === tmp6) {
            if (cResult[21] === tmp10) {
              if (cResult[22] === tmp14) {
                let tmp17 = cResult[23];
              }
              return tmp17;
            }
          }
          const obj6 = { children: null };
          const items2 = [tmp6, tmp10, tmp14];
          obj6.children = items2;
          const tmp20 = React5(closure_1_8, obj6);
          cResult[20] = tmp6;
          cResult[21] = tmp10;
          cResult[22] = tmp14;
          cResult[23] = tmp20;
          tmp17 = tmp20;
        }
        const obj7 = { shouldSpoiler, blurTheme };
        const tmp16 = timestampProducer(ForumPostMedia.ForumPostMediaSpoiler, obj7);
        cResult[17] = blurTheme;
        cResult[18] = shouldSpoiler;
        cResult[19] = tmp16;
        tmp14 = tmp16;
      }
    }
    const obj8 = { style: iosStyle, source, resizeMode };
    const tmp13 = timestampProducer(FastImageDefault, obj8);
    cResult[13] = iosStyle;
    cResult[14] = resizeMode;
    cResult[15] = source;
    cResult[16] = tmp13;
    tmp10 = tmp13;
  }
}) : (function MediaPostGridThumbnailIOS(arg0) {
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    const obj = { children: null };
    const obj2 = { style: iosStyle, source, resizeMode };
    const items = [timestampProducer(FastImageDefault, obj2), ];
    const obj3 = { shouldSpoiler, blurTheme };
    items[1] = timestampProducer(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    obj.children = items;
    let obj4 = obj;
  } else {
    obj4 = { children: null };
    const obj5 = { style: null, source: null, resizeMode: "cover" };
    const items1 = [hasOwnProperty.absoluteFill, { opacity: 0.2 }];
    obj5.style = items1;
    obj5.source = backgroundImagesource;
    const items2 = [timestampProducer(FastImageDefault, obj5), , ];
    const obj6 = { style: iosStyle, source, resizeMode };
    items2[1] = timestampProducer(FastImageDefault, obj6);
    const obj7 = { shouldSpoiler, blurTheme };
    items2[2] = timestampProducer(ForumPostMedia.ForumPostMediaSpoiler, obj7);
    obj4.children = items2;
  }
  return React5(closure_1_8, obj4);
});
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MediaPostGridThumbnail(isPortrait) {
  const cResult = c.c(4);
  let tmp4 = true === isPortrait.isPortrait;
  if (tmp4) {
    tmp4 = false === isPortrait.shouldSpoiler;
  }
  let str = "cover";
  let source;
  if (tmp4) {
    source = isPortrait.source;
    str = "contain";
  }
  if (cResult[0] === source) {
    if (cResult[1] === isPortrait) {
      if (cResult[2] === str) {
        return cResult[3];
      }
    }
  }
  let obj2 = {};
  const merged = Object.assign(isPortrait);
  obj2.backgroundImagesource = source;
  obj2.resizeMode = str;
  if (tmpResult.isAndroid()) {
    const obj3 = {};
    obj2 = Object.assign(obj2);
    let tmp7Result = timestampProducer(closure_9, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(obj2);
    tmp7Result = timestampProducer(closure_10, obj4);
  }
  cResult[0] = source;
  cResult[1] = isPortrait;
  cResult[2] = str;
  cResult[3] = tmp7Result;
  tmpResult = PlatformUtils;
}) : (function MediaPostGridThumbnail(isPortrait) {
  let tmp = true === isPortrait.isPortrait;
  if (tmp) {
    tmp = false === isPortrait.shouldSpoiler;
  }
  let str = "cover";
  let source;
  if (tmp) {
    source = isPortrait.source;
    str = "contain";
  }
  const obj = {};
  const merged = Object.assign(isPortrait);
  obj.backgroundImagesource = source;
  obj.resizeMode = str;
  if (obj2.isAndroid()) {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    let tmp4Result = timestampProducer(closure_9, obj3);
  } else {
    const obj4 = {};
    const merged2 = Object.assign(obj);
    tmp4Result = timestampProducer(closure_10, obj4);
  }
  return tmp4Result;
});
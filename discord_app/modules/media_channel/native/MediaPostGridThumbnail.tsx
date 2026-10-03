// === Module 11625: MediaPostGridThumbnail ===

// Module 11625 (MediaPostGridThumbnail)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import FastImageDefault from "FastImage" /* 5974 */;
import ForumPostMedia from "ForumPostMedia" /* 11623 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ImageBackground: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource, resizeMode } = arg0);
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  if (null == backgroundImagesource) {
    if (cResult[0] === blurTheme) {
      if (cResult[1] === shouldSpoiler) {
        let tmp17 = cResult[2];
      }
      if (cResult[3] === androidStyle) {
        if (cResult[4] === num) {
          if (cResult[5] === source) {
          }
        }
      }
      const obj2 = { style: androidStyle, source, blurRadius: num, resizeMode: "cover", children: tmp17 };
      const tmp23 = hasOwnProperty(React3, obj2);
      cResult[3] = androidStyle;
      cResult[4] = num;
      cResult[5] = source;
      cResult[6] = tmp17;
      cResult[7] = tmp23;
    }
    const obj3 = { shouldSpoiler, blurTheme };
    const tmp19 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    cResult[0] = blurTheme;
    cResult[1] = shouldSpoiler;
    cResult[2] = tmp19;
    tmp17 = tmp19;
  } else {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { opacity: 0.2 };
      cResult[8] = obj4;
      let tmp4 = obj4;
    } else {
      tmp4 = cResult[8];
    }
    if (cResult[9] === resizeMode) {
      if (cResult[10] === source) {
        let tmp5 = cResult[11];
      }
      if (cResult[12] === blurTheme) {
        if (cResult[13] === shouldSpoiler) {
          let tmp10 = cResult[14];
        }
        if (cResult[15] === androidStyle) {
          if (cResult[16] === backgroundImagesource) {
            if (cResult[17] === tmp5) {
              if (cResult[18] === tmp10) {
                let tmp13 = cResult[19];
              }
              return tmp13;
            }
          }
        }
        const obj5 = { style: androidStyle, source: backgroundImagesource, resizeMode: "cover", imageStyle: tmp4, children: null };
        const items = [tmp5, tmp10];
        obj5.children = items;
        const tmp16 = timestampProducer(React3, obj5);
        cResult[15] = androidStyle;
        cResult[16] = backgroundImagesource;
        cResult[17] = tmp5;
        cResult[18] = tmp10;
        cResult[19] = tmp16;
        tmp13 = tmp16;
      }
      const obj6 = { shouldSpoiler, blurTheme };
      const tmp12 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj6);
      cResult[12] = blurTheme;
      cResult[13] = shouldSpoiler;
      cResult[14] = tmp12;
      tmp10 = tmp12;
    }
    const obj7 = { style: React4.absoluteFill, source, resizeMode };
    const tmp9 = hasOwnProperty(FastImageDefault, obj7);
    cResult[9] = resizeMode;
    cResult[10] = source;
    cResult[11] = tmp9;
    tmp5 = tmp9;
  }
}) : ((arg0) => {
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = arg0);
  if (null == backgroundImagesource) {
    const obj = { style: androidStyle, source, blurRadius: null, resizeMode: "cover", children: null };
    let num = 0;
    if (shouldSpoiler) {
      num = 10;
    }
    obj.blurRadius = num;
    const obj2 = { shouldSpoiler, blurTheme };
    obj.children = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj2);
    let tmp2Result = hasOwnProperty(React3, obj);
  } else {
    const obj3 = { style: androidStyle, source: backgroundImagesource, resizeMode: "cover", imageStyle: { opacity: 0.2 }, children: null };
    const obj4 = { style: React4.absoluteFill, source, resizeMode: tmp };
    const items = [hasOwnProperty(FastImageDefault, obj4), ];
    const obj5 = { shouldSpoiler, blurTheme };
    items[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj5);
    obj3.children = items;
    tmp2Result = timestampProducer(React3, obj3);
  }
  return tmp2Result;
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
          const tmp31 = timestampProducer(React5, obj2);
          cResult[7] = tmp21;
          cResult[8] = tmp25;
          cResult[9] = tmp31;
        }
        const obj3 = { shouldSpoiler, blurTheme };
        const tmp27 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
        cResult[4] = blurTheme;
        cResult[5] = shouldSpoiler;
        cResult[6] = tmp27;
        tmp25 = tmp27;
      }
    }
    const obj4 = { style: iosStyle, source, resizeMode };
    const tmp24 = hasOwnProperty(FastImageDefault, obj4);
    cResult[0] = iosStyle;
    cResult[1] = resizeMode;
    cResult[2] = source;
    cResult[3] = tmp24;
    tmp21 = tmp24;
  } else {
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [React4.absoluteFill, { opacity: 0.2 }];
      cResult[10] = items1;
      let tmp4 = items1;
    } else {
      tmp4 = cResult[10];
    }
    if (cResult[11] !== backgroundImagesource) {
      const obj5 = { style: tmp4, source: backgroundImagesource, resizeMode: "cover" };
      const tmp9 = hasOwnProperty(FastImageDefault, obj5);
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
          const tmp20 = timestampProducer(React5, obj6);
          cResult[20] = tmp6;
          cResult[21] = tmp10;
          cResult[22] = tmp14;
          cResult[23] = tmp20;
          tmp17 = tmp20;
        }
        const obj7 = { shouldSpoiler, blurTheme };
        const tmp16 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj7);
        cResult[17] = blurTheme;
        cResult[18] = shouldSpoiler;
        cResult[19] = tmp16;
        tmp14 = tmp16;
      }
    }
    const obj8 = { style: iosStyle, source, resizeMode };
    const tmp13 = hasOwnProperty(FastImageDefault, obj8);
    cResult[13] = iosStyle;
    cResult[14] = resizeMode;
    cResult[15] = source;
    cResult[16] = tmp13;
    tmp10 = tmp13;
  }
}) : ((arg0) => {
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    const obj = { children: null };
    const obj2 = { style: iosStyle, source, resizeMode };
    const items = [hasOwnProperty(FastImageDefault, obj2), ];
    const obj3 = { shouldSpoiler, blurTheme };
    items[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    obj.children = items;
    let obj4 = obj;
  } else {
    obj4 = { children: null };
    const obj5 = { style: null, source: null, resizeMode: "cover" };
    const items1 = [React4.absoluteFill, { opacity: 0.2 }];
    obj5.style = items1;
    obj5.source = backgroundImagesource;
    const items2 = [hasOwnProperty(FastImageDefault, obj5), , ];
    const obj6 = { style: iosStyle, source, resizeMode };
    items2[1] = hasOwnProperty(FastImageDefault, obj6);
    const obj7 = { shouldSpoiler, blurTheme };
    items2[2] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj7);
    obj4.children = items2;
  }
  return timestampProducer(React5, obj4);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((isPortrait) => {
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
    let tmp7Result = hasOwnProperty(closure_8, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(obj2);
    tmp7Result = hasOwnProperty(closure_9, obj4);
  }
  cResult[0] = source;
  cResult[1] = isPortrait;
  cResult[2] = str;
  cResult[3] = tmp7Result;
  tmpResult = PlatformUtils;
}) : ((isPortrait) => {
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
    let tmp4Result = hasOwnProperty(closure_8, obj3);
  } else {
    const obj4 = {};
    const merged2 = Object.assign(obj);
    tmp4Result = hasOwnProperty(closure_9, obj4);
  }
  return tmp4Result;
});
// === Module 11639: MediaPostGridThumbnail ===

// Module 11639 (MediaPostGridThumbnail)
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import FastImageDefault from "FastImage" /* 5981 */;
import ForumPostMedia from "ForumPostMedia" /* 11637 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ ImageBackground: c3, StyleSheet: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let androidStyle;
  let backgroundImagesource;
  let blurTheme;
  let items;
  let resizeMode;
  let shouldSpoiler;
  let source;
  let tmp13;
  const obj = react2;
  const cResult = obj.c(20);
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource, resizeMode } = arg0);
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  if (null == backgroundImagesource) {
    if (cResult[0] === blurTheme) {
      let tmp17;
      if (cResult[1] === shouldSpoiler) {
        tmp17 = cResult[2];
      }
      if (cResult[3] === androidStyle) {
        if (cResult[4] === num) {
          if (cResult[5] === source) {
            let tmp20;
            if (cResult[6] === tmp17) {
              tmp20 = cResult[7];
            }
            tmp13 = tmp20;
          }
        }
      }
      const obj2 = { style: androidStyle, source, blurRadius: num, resizeMode: "cover", children: tmp17 };
      const tmp23 = hasOwnProperty(_false, obj2);
      cResult[3] = androidStyle;
      cResult[4] = num;
      cResult[5] = source;
      cResult[6] = tmp17;
      cResult[7] = tmp23;
      tmp20 = tmp23;
    }
    const obj3 = { shouldSpoiler, blurTheme };
    const tmp19 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    cResult[0] = blurTheme;
    cResult[1] = shouldSpoiler;
    cResult[2] = tmp19;
    tmp17 = tmp19;
  } else {
    let tmp4;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { opacity: 0.2 };
      cResult[8] = obj4;
      tmp4 = obj4;
    } else {
      tmp4 = cResult[8];
    }
    if (cResult[9] === resizeMode) {
      let tmp5;
      if (cResult[10] === source) {
        tmp5 = cResult[11];
      }
      if (cResult[12] === blurTheme) {
        let tmp10;
        if (cResult[13] === shouldSpoiler) {
          tmp10 = cResult[14];
        }
        if (cResult[15] === androidStyle) {
          if (cResult[16] === backgroundImagesource) {
            if (cResult[17] === tmp5) {
              if (cResult[18] === tmp10) {
                tmp13 = cResult[19];
              }
            }
          }
        }
        const obj5 = { style: androidStyle, source: backgroundImagesource, resizeMode: "cover", imageStyle: tmp4, children: items };
        items = [tmp5, tmp10];
        const tmp16 = metroRequire(_false, obj5);
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
    const obj7 = { style: React3.absoluteFill, source, resizeMode };
    const tmp9 = hasOwnProperty(FastImageDefault, obj7);
    cResult[9] = resizeMode;
    cResult[10] = source;
    cResult[11] = tmp9;
    tmp5 = tmp9;
  }
  return tmp13;
}) : ((arg0) => {
  let androidStyle;
  let backgroundImagesource;
  let blurTheme;
  let items;
  let num;
  let obj2;
  let shouldSpoiler;
  let source;
  let tmp2Result;
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = arg0);
  if (null == backgroundImagesource) {
    const obj = { style: androidStyle, source, blurRadius: num, resizeMode: "cover", children: hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj2) };
    num = 0;
    if (shouldSpoiler) {
      num = 10;
    }
    obj2 = { shouldSpoiler, blurTheme };
    tmp2Result = hasOwnProperty(_false, obj);
  } else {
    const obj3 = { style: androidStyle, source: backgroundImagesource, resizeMode: "cover", imageStyle: { opacity: 0.2 }, children: items };
    const obj4 = { style: React3.absoluteFill, source, resizeMode: tmp };
    items = [hasOwnProperty(FastImageDefault, obj4), ];
    const obj5 = { shouldSpoiler, blurTheme };
    items[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj5);
    tmp2Result = metroRequire(_false, obj3);
  }
  return tmp2Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundImagesource;
  let blurTheme;
  let iosStyle;
  let items;
  let items2;
  let resizeMode;
  let shouldSpoiler;
  let source;
  let tmp17;
  const obj = react2;
  const cResult = obj.c(24);
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    if (cResult[0] === iosStyle) {
      if (cResult[1] === resizeMode) {
        let tmp21;
        if (cResult[2] === source) {
          tmp21 = cResult[3];
        }
        if (cResult[4] === blurTheme) {
          let tmp25;
          if (cResult[5] === shouldSpoiler) {
            tmp25 = cResult[6];
          }
          if (cResult[7] === tmp21) {
            let tmp28;
            if (cResult[8] === tmp25) {
              tmp28 = cResult[9];
            }
            tmp17 = tmp28;
          }
          const obj2 = { children: items };
          items = [tmp21, tmp25];
          const tmp31 = metroRequire(metroImportDefault, obj2);
          cResult[7] = tmp21;
          cResult[8] = tmp25;
          cResult[9] = tmp31;
          tmp28 = tmp31;
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
    let tmp4;
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [React3.absoluteFill, { opacity: 0.2 }];
      cResult[10] = items1;
      tmp4 = items1;
    } else {
      tmp4 = cResult[10];
    }
    if (cResult[11] !== backgroundImagesource) {
      const obj5 = { style: tmp4, source: backgroundImagesource, resizeMode: "cover" };
      const tmp9 = hasOwnProperty(FastImageDefault, obj5);
      cResult[11] = backgroundImagesource;
      cResult[12] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[12];
    }
    if (cResult[13] === iosStyle) {
      if (cResult[14] === resizeMode) {
        let tmp10;
        if (cResult[15] === source) {
          tmp10 = cResult[16];
        }
        if (cResult[17] === blurTheme) {
          let tmp14;
          if (cResult[18] === shouldSpoiler) {
            tmp14 = cResult[19];
          }
          if (cResult[20] === tmp6) {
            if (cResult[21] === tmp10) {
              if (cResult[22] === tmp14) {
                tmp17 = cResult[23];
              }
            }
          }
          const obj6 = { children: items2 };
          items2 = [tmp6, tmp10, tmp14];
          const tmp20 = metroRequire(metroImportDefault, obj6);
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
  return tmp17;
}) : ((arg0) => {
  let backgroundImagesource;
  let blurTheme;
  let iosStyle;
  let items;
  let items1;
  let items2;
  let obj4;
  let resizeMode;
  let shouldSpoiler;
  let source;
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    const obj = { children: items };
    const obj2 = { style: iosStyle, source, resizeMode };
    items = [hasOwnProperty(FastImageDefault, obj2), ];
    const obj3 = { shouldSpoiler, blurTheme };
    items[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    obj4 = obj;
  } else {
    obj4 = { children: items2 };
    const obj5 = { style: items1, source: backgroundImagesource, resizeMode: "cover" };
    items1 = [React3.absoluteFill, { opacity: 0.2 }];
    items2 = [hasOwnProperty(FastImageDefault, obj5), , ];
    const obj6 = { style: iosStyle, source, resizeMode };
    items2[1] = hasOwnProperty(FastImageDefault, obj6);
    const obj7 = { shouldSpoiler, blurTheme };
    items2[2] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj7);
  }
  return metroRequire(metroImportDefault, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((isPortrait) => {
  let tmp8Result;
  const obj = react2;
  const cResult = obj.c(4);
  let str = "cover";
  let source;
  const tmp4 = true === isPortrait.isPortrait && false === isPortrait.shouldSpoiler;
  if (tmp4) {
    source = isPortrait.source;
    str = "contain";
  }
  if (cResult[0] === source) {
    if (cResult[1] === isPortrait) {
      let tmp6;
      if (cResult[2] === str) {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const obj2 = { backgroundImagesource: source, resizeMode: str };
  const merged = Object.assign(isPortrait);
  const tmpResult = PlatformUtils;
  if (tmpResult.isAndroid()) {
    const obj3 = {};
    const merged1 = Object.assign(obj2);
    tmp8Result = hasOwnProperty(closure_8, obj3);
  } else {
    const obj4 = {};
    const merged2 = Object.assign(obj2);
    tmp8Result = hasOwnProperty(closure_9, obj4);
  }
  cResult[0] = source;
  cResult[1] = isPortrait;
  cResult[2] = str;
  cResult[3] = tmp8Result;
  tmp6 = tmp8Result;
}) : ((isPortrait) => {
  let tmp4Result;
  let str = "cover";
  let source;
  const tmp = true === isPortrait.isPortrait && false === isPortrait.shouldSpoiler;
  if (tmp) {
    source = isPortrait.source;
    str = "contain";
  }
  const obj = { backgroundImagesource: source, resizeMode: str };
  const merged = Object.assign(isPortrait);
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    tmp4Result = hasOwnProperty(closure_8, obj3);
  } else {
    const obj4 = {};
    const merged2 = Object.assign(obj);
    tmp4Result = hasOwnProperty(closure_9, obj4);
  }
  return tmp4Result;
});
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

export default tmp5;
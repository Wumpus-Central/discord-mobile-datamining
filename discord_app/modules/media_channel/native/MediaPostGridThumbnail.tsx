// === Module 11583: MediaPostGridThumbnailAndroid ===

// Module 11583 (MediaPostGridThumbnailAndroid)
import noopAll from "noop" /* 19 */;
import preloadDefault from "preload" /* 5493 */;
import ForumPostMediaAndroid from "ForumPostMediaAndroid" /* 11581 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function MediaPostGridThumbnailAndroid(arg0) {
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = arg0);
  if (null == backgroundImagesource) {
    let obj = { style: null, source: null, blurRadius: null, resizeMode: "cover", children: null };
    obj[0] = androidStyle;
    obj[1] = source;
    let num = 0;
    if (shouldSpoiler) {
      num = 10;
    }
    obj[2] = num;
    obj = { shouldSpoiler: null, blurTheme: null };
    obj[0] = shouldSpoiler;
    obj[1] = blurTheme;
    obj[4] = callback(ForumPostMediaAndroid.ForumPostMediaSpoiler, obj);
    let tmp2Result = tmp2(closure_3, obj);
    const tmp3 = closure_3;
  } else {
    obj = { style: null, source: null, resizeMode: "cover", imageStyle: null, children: null };
    obj[0] = androidStyle;
    obj[1] = backgroundImagesource;
    obj[3] = { opacity: 0.2 };
    obj1 = { style: null, source: null, resizeMode: null };
    obj1[0] = closure_4.absoluteFill;
    obj1[1] = source;
    obj1[2] = tmp;
    const items = [callback(preloadDefault, obj1), ];
    const obj2 = { shouldSpoiler: null, blurTheme: null };
    obj2[0] = shouldSpoiler;
    obj2[1] = blurTheme;
    items[1] = callback(ForumPostMediaAndroid.ForumPostMediaSpoiler, obj2);
    obj[4] = items;
    tmp2Result = callback2(closure_3, obj);
  }
  return tmp2Result;
}
function MediaPostGridThumbnailIOS(arg0) {
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    let obj = { children: null };
    obj = { style: null, source: null, resizeMode: null };
    obj[0] = iosStyle;
    obj[1] = source;
    obj[2] = resizeMode;
    const items = [callback(preloadDefault, obj), ];
    obj = { shouldSpoiler: null, blurTheme: null };
    obj[0] = shouldSpoiler;
    obj[1] = blurTheme;
    items[1] = callback(ForumPostMediaAndroid.ForumPostMediaSpoiler, obj);
    obj[0] = items;
    obj1 = obj;
  } else {
    obj1 = { children: null };
    const obj2 = { style: null, source: null, resizeMode: "cover" };
    const items1 = [closure_4.absoluteFill, { opacity: 0.2 }];
    obj2[0] = items1;
    obj2[1] = backgroundImagesource;
    const items2 = [callback(preloadDefault, obj2), , ];
    const obj3 = { style: null, source: null, resizeMode: null };
    obj3[0] = iosStyle;
    obj3[1] = source;
    obj3[2] = resizeMode;
    items2[1] = callback(preloadDefault, obj3);
    const obj4 = { shouldSpoiler: null, blurTheme: null };
    obj4[0] = shouldSpoiler;
    obj4[1] = blurTheme;
    items2[2] = callback(ForumPostMediaAndroid.ForumPostMediaSpoiler, obj4);
    obj1[0] = items2;
  }
  return closure_6(closure_7, obj1);
}
noopAll;
({ ImageBackground: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
const result = require("set").fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

export default function MediaPostGridThumbnail(isPortrait) {
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
  let obj = {};
  const merged = Object.assign(isPortrait);
  obj.backgroundImagesource = source;
  obj.resizeMode = str;
  if (obj2.isAndroid()) {
    obj = {};
    const merged1 = Object.assign(obj);
    let tmp4Result = tmp4(MediaPostGridThumbnailAndroid, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(obj);
    tmp4Result = tmp4(MediaPostGridThumbnailIOS, obj);
  }
  return tmp4Result;
};
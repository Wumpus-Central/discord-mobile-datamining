// === Module 13724: MediaPostGridThumbnail ===

// Module 13724 (MediaPostGridThumbnail)
import FastImageDefault from "FastImage" /* 5712 */;
import ForumPostMedia from "ForumPostMedia" /* 13722 */;
import noop from "module_19" /* 19 */;

require = fn;
function MediaPostGridThumbnailAndroid(resizeMode) {
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = resizeMode);
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  let flattenResult = React4.flatten(androidStyle);
  if (flattenResult == null) {
    flattenResult = {};
  }
  ({ width, height } = flattenResult);
  if (null == backgroundImagesource) {
    const obj = { style: androidStyle, children: null };
    const obj2 = { style: null, source: null, blurRadius: null, resizeMode: "cover" };
    const items = [React4.absoluteFill, ];
    const size = { width, height };
    items[1] = size;
    obj2.style = items;
    obj2.source = source;
    obj2.blurRadius = num;
    const items1 = [hasOwnProperty(FastImageDefault, obj2), ];
    const obj3 = { shouldSpoiler, blurTheme };
    items1[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    obj.children = items1;
    let obj4 = obj;
  } else {
    obj4 = { style: androidStyle, children: null };
    const obj5 = { style: null, source: null, resizeMode: "cover" };
    const items2 = [React4.absoluteFill, ];
    const size1 = { width, height, opacity: 0.2 };
    items2[1] = size1;
    obj5.style = items2;
    obj5.source = backgroundImagesource;
    const items3 = [hasOwnProperty(FastImageDefault, obj5), , ];
    const obj6 = { style: React4.absoluteFill, source, resizeMode: resizeMode.resizeMode };
    items3[1] = hasOwnProperty(FastImageDefault, obj6);
    const obj7 = { shouldSpoiler, blurTheme };
    items3[2] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj7);
    obj4.children = items3;
  }
  return timestampProducer(React3, obj4);
}
function MediaPostGridThumbnailIOS(arg0) {
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
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
let size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

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
  const obj = {};
  const merged = Object.assign(isPortrait);
  obj.backgroundImagesource = source;
  obj.resizeMode = str;
  if (obj2.isAndroid()) {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    let tmp4Result = hasOwnProperty(MediaPostGridThumbnailAndroid, obj3);
  } else {
    const obj4 = {};
    const merged2 = Object.assign(obj);
    tmp4Result = hasOwnProperty(MediaPostGridThumbnailIOS, obj4);
  }
  return tmp4Result;
};
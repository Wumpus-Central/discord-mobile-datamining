// === Module 12011: MediaPostGridThumbnail ===

// Module 12011 (MediaPostGridThumbnail)
import FastImageDefault from "FastImage" /* 5587 */;
import ForumPostMedia from "ForumPostMedia" /* 12009 */;
import noop from "module_19" /* 19 */;

require = fn;
function MediaPostGridThumbnailAndroid(arg0) {
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = arg0);
  if (null == backgroundImagesource) {
    let obj = { style: androidStyle, source, blurRadius: null, resizeMode: "cover", children: null };
    let num = 0;
    if (shouldSpoiler) {
      num = 10;
    }
    obj.blurRadius = num;
    obj = { shouldSpoiler, blurTheme };
    obj.children = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj);
    let tmp2Result = hasOwnProperty(React3, obj);
  } else {
    obj = { style: androidStyle, source: backgroundImagesource, resizeMode: "cover", imageStyle: { opacity: 0.2 }, children: null };
    const obj1 = { style: React4.absoluteFill, source, resizeMode: tmp };
    const items = [hasOwnProperty(FastImageDefault, obj1), ];
    const obj2 = { shouldSpoiler, blurTheme };
    items[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj2);
    obj.children = items;
    tmp2Result = timestampProducer(React3, obj);
  }
  return tmp2Result;
}
function MediaPostGridThumbnailIOS(arg0) {
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    let obj = { children: null };
    obj = { style: iosStyle, source, resizeMode };
    const items = [hasOwnProperty(FastImageDefault, obj), ];
    obj = { shouldSpoiler, blurTheme };
    items[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj);
    obj.children = items;
    let obj1 = obj;
  } else {
    obj1 = { children: null };
    const obj2 = { style: null, source: null, resizeMode: "cover" };
    const items1 = [React4.absoluteFill, { opacity: 0.2 }];
    obj2.style = items1;
    obj2.source = backgroundImagesource;
    const items2 = [hasOwnProperty(FastImageDefault, obj2), , ];
    const obj3 = { style: iosStyle, source, resizeMode };
    items2[1] = hasOwnProperty(FastImageDefault, obj3);
    const obj4 = { shouldSpoiler, blurTheme };
    items2[2] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj4);
    obj1.children = items2;
  }
  return timestampProducer(React5, obj1);
}
get_ActivityIndicator = fn(17);
({ ImageBackground: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const size = fn(2);
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
  let obj = {};
  const merged = Object.assign(isPortrait);
  obj.backgroundImagesource = source;
  obj.resizeMode = str;
  if (obj2.isAndroid()) {
    obj = {};
    const merged1 = Object.assign(obj);
    let tmp4Result = hasOwnProperty(MediaPostGridThumbnailAndroid, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(obj);
    tmp4Result = hasOwnProperty(MediaPostGridThumbnailIOS, obj);
  }
  return tmp4Result;
};
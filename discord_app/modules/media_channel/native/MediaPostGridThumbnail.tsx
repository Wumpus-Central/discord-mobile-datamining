// === Module 12253: MediaPostGridThumbnail ===

// Module 12253 (MediaPostGridThumbnail)
import FastImageDefault from "FastImage" /* 5757 */;
import ForumPostMedia from "ForumPostMedia" /* 12251 */;
import noop from "module_19" /* 19 */;

require = fn;
function MediaPostGridThumbnailAndroid(arg0) {
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
// discord_app/modules/media_channel/native/MediaPostGridThumbnail.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { preload } from "../../../components_native/common/FastImage.tsx";
import { ForumPostMediaAndroid } from "../../forums/native/posts/ForumPostMedia.tsx";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function MediaPostGridThumbnailAndroid(arg0) {
  let androidStyle;
  let backgroundImagesource;
  let blurTheme;
  let shouldSpoiler;
  let source;
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
    const obj1 = { style: null, source: null, resizeMode: null };
    obj1[0] = closure_4.absoluteFill;
    obj1[1] = source;
    obj1[2] = tmp;
    const items = [callback(preload, obj1), ];
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
  let backgroundImagesource;
  let blurTheme;
  let iosStyle;
  let resizeMode;
  let shouldSpoiler;
  let source;
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    let obj = { children: null };
    obj = { style: null, source: null, resizeMode: null };
    obj[0] = iosStyle;
    obj[1] = source;
    obj[2] = resizeMode;
    const items = [callback(preload, obj), ];
    obj = { shouldSpoiler: null, blurTheme: null };
    obj[0] = shouldSpoiler;
    obj[1] = blurTheme;
    items[1] = callback(ForumPostMediaAndroid.ForumPostMediaSpoiler, obj);
    obj[0] = items;
    let obj1 = obj;
  } else {
    obj1 = { children: null };
    const obj2 = { style: null, source: null, resizeMode: "cover" };
    const items1 = [closure_4.absoluteFill, { opacity: 0.2 }];
    obj2[0] = items1;
    obj2[1] = backgroundImagesource;
    const items2 = [callback(preload, obj2), , ];
    const obj3 = { style: null, source: null, resizeMode: null };
    obj3[0] = iosStyle;
    obj3[1] = source;
    obj3[2] = resizeMode;
    items2[1] = callback(preload, obj3);
    const obj4 = { shouldSpoiler: null, blurTheme: null };
    obj4[0] = shouldSpoiler;
    obj4[1] = blurTheme;
    items2[2] = callback(ForumPostMediaAndroid.ForumPostMediaSpoiler, obj4);
    obj1[0] = items2;
  }
  return closure_6(closure_7, obj1);
}
({ ImageBackground: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

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
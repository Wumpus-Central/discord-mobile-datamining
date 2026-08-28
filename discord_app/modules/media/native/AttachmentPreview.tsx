// === Module 10216: AttachmentIcon ===

// Module 10216 (AttachmentIcon)
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4442 */;
import preloadDefault from "preload" /* 5458 */;
import registerAssetDefault from "registerAsset" /* 10217 */;
import registerAssetDefault2 from "registerAsset" /* 10218 */;
import registerAssetDefault3 from "registerAsset" /* 10219 */;
import registerAssetDefault4 from "registerAsset" /* 10220 */;
import registerAssetDefault5 from "registerAsset" /* 10221 */;
import registerAssetDefault6 from "registerAsset" /* 10222 */;
import registerAssetDefault7 from "registerAsset" /* 10223 */;
import registerAssetDefault8 from "registerAsset" /* 10224 */;
import registerAssetDefault9 from "registerAsset" /* 10225 */;
import registerAssetDefault10 from "registerAsset" /* 10226 */;
import registerAssetDefault11 from "registerAsset" /* 10227 */;
import registerAssetDefault12 from "registerAsset" /* 10228 */;
import registerAssetDefault13 from "registerAsset" /* 10229 */;
import registerAssetDefault14 from "registerAsset" /* 10230 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
class AttachmentIcon {
  constructor(arg0) {
    fileName = global.fileName;
    items = [];
    items[0] = fileName;
    tmp = closure_8();
    obj = {
      style: tmp.attachmentFileIcon,
      source: closure_3.useMemo(() => {
            const obj = fileName(closure_1_2[19]);
            let str = fileName;
            if (fileName == null) {
              str = "";
            }
            let tmp2 = closure_1_9[obj.classifyFileName(obj, str)];
            if (tmp2 == null) {
              tmp2 = closure_1_1(closure_1_2[16]);
            }
            return tmp2;
          }, items)
    };
    return jsx(Image, obj);
  }
}
function FilenameText(fileName) {
  fileName = fileName.fileName;
  const tmp = callback3();
  let obj = /(?:\.([^.]+))?$/;
  let str = fileName;
  if (fileName == null) {
    str = "";
  }
  const match = obj.exec(str);
  let tmp5 = null != fileName;
  if (tmp5) {
    tmp5 = "" !== fileName;
  }
  if (tmp5) {
    obj = { style: null, ellipsizeMode: "middle", lineClamp: 1, variant: "text-xs/medium", color: "mobile-text-heading-primary", children: null };
    obj[0] = tmp.attachmentFileName;
    obj[5] = fileName;
    tmp5 = callback(Text.Text, obj);
  }
  const items = [tmp5, ];
  obj = { style: tmp.attachmentFileName, lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: null };
  let str3 = "UNKNOWN";
  if (null != match) {
    str3 = "UNKNOWN";
    if (null != match[1]) {
      str3 = match[1].toUpperCase();
      const str4 = match[1];
    }
  }
  obj1 = { children: null };
  obj[4] = str3;
  items[1] = callback(Text.Text, obj);
  obj1[0] = items;
  return closure_7(closure_5, obj1);
}
function DefaultAttachmentPreview(fileName) {
  fileName = fileName.fileName;
  ({ maxFileWidth, borderRadius } = fileName);
  const obj = { style: null, children: null };
  const items = [callback3().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
  obj[0] = items;
  const items1 = [callback(AttachmentIcon, { fileName }), callback(FilenameText, { fileName })];
  obj[1] = items1;
  return callback2(closure_5, obj);
}
let c3 = importAllResult;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { fileInfoAttachmentPreviewFile: null, attachmentFileIcon: null, attachmentFileName: null, videoIcon: null };
obj = { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: ThemesDefault.radii.sm, height: 75, padding: 12, flex: 1, gap: ThemesDefault.space.PX_8 };
obj[0] = obj;
obj[1] = { height: 32, width: 24 };
obj[2] = { paddingRight: 4, paddingLeft: 4, maxWidth: 136 };
obj[3] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" };
let closure_8 = createCacheKey.createStyles(obj);
createCacheKey = { archive: registerAssetDefault, acrobat: registerAssetDefault2, ae: registerAssetDefault3, ai: registerAssetDefault4, audio: registerAssetDefault5, code: registerAssetDefault6, document: registerAssetDefault7, image: registerAssetDefault8, photoshop: registerAssetDefault9, sketch: registerAssetDefault10, spreadsheet: registerAssetDefault11, unknown: registerAssetDefault12, video: registerAssetDefault13, webcode: registerAssetDefault14 };
let closure_13 = importAllResult.memo((borderRadius) => {
  ({ uri, width, height, style, fileName } = borderRadius);
  let obj = { uri, width, height };
  obj = { width, height, borderRadius: borderRadius.borderRadius };
  let isMatch = null != fileName;
  if (isMatch) {
    isMatch = "" !== fileName;
  }
  if (isMatch) {
    let obj2 = /\.gif$/i;
    isMatch = obj2.test(fileName);
  }
  if (isMatch) {
    let isIOSResult = set.isIOS();
    if (isIOSResult) {
      isIOSResult = uri.startsWith("ph://");
    }
    if (!isIOSResult) {
      let isAndroidResult = tmp2(500).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = uri.startsWith("content://");
      }
      isIOSResult = isAndroidResult;
      const tmp2Result = tmp2(500);
    }
    isMatch = isIOSResult;
    const obj4 = set;
    tmp2 = require;
  }
  obj = { style: items, children: null };
  items = [obj, style, { overflow: "hidden" }];
  if (isMatch) {
    obj1 = { style: null, source: null, resizeMode: "cover", enableAnimation: true };
    const items1 = [obj, style];
    obj1[0] = items1;
    obj1[1] = obj;
    obj[1] = tmp6(preloadDefault, obj1);
    let tmp10 = obj;
  } else {
    obj2 = { style: null, source: null, localImageSource: null };
    const items2 = [obj, style];
    obj2[0] = items2;
    obj2[1] = obj;
    obj2[2] = obj;
    obj[1] = tmp6(Button.ThumbnailImage, obj2);
    tmp10 = obj;
  }
  return closure_6(closure_5, tmp10);
});
const result = require("set").fileFinishedImporting("modules/media/native/AttachmentPreview.tsx");

export default function AttachmentPreview(height) {
  ({ uri, isVideo, width } = height);
  if (width === undefined) {
    width = 75;
  }
  let num = height.height;
  if (num === undefined) {
    num = 75;
  }
  ({ fileName, borderRadius, maxFileWidth } = height);
  if (borderRadius === undefined) {
    borderRadius = ThemesDefault.radii.sm;
  }
  let flag = height.showPlayOnVideoPreview;
  if (flag === undefined) {
    flag = false;
  }
  let defaultPreview = height.defaultPreview;
  if (defaultPreview === undefined) {
    let obj = { fileName: null, maxFileWidth: null, borderRadius: null };
    obj[0] = fileName;
    obj[1] = maxFileWidth;
    obj[2] = borderRadius;
    defaultPreview = callback(DefaultAttachmentPreview, obj);
  }
  const style = height.style;
  let videoIcon = callback3();
  if (height.isImage) {
    obj = { uri: null, width: null, height: null, borderRadius: null, style: null, fileName: null };
    obj[0] = uri;
    obj[1] = width;
    obj[2] = num;
    obj[3] = borderRadius;
    obj[4] = style;
    obj[5] = fileName;
    let tmp9 = callback(closure_13, obj);
  } else {
    if (!isVideo) {
      let obj2 = set;
      if (obj2.isIOS()) {
        let tmp6 = tmp8;
        let CirclePlayIcon = tmp7;
      }
      tmp9 = defaultPreview;
      if (isVideo) {
        tmp9 = defaultPreview;
        if (tmp7Result.isIOS()) {
          obj = { style: null, children: null };
          obj[0] = style;
          obj1 = { style: null, source: null, muted: true, paused: true, resizeMode: "cover", preventsDisplaySleepDuringVideoPlayback: false };
          obj2 = { height: null, width: null };
          obj2[0] = num;
          obj2[1] = width;
          obj1[0] = obj2;
          const obj3 = { uri: null };
          obj3[0] = uri;
          obj1[1] = obj3;
          obj[1] = callback(tmp7(8548).VideoComponent, obj1);
          tmp9 = callback(closure_5, obj);
        }
        tmp7Result = tmp7(500);
      }
      tmp8 = dependencyMap;
    } else {
      tmp6 = dependencyMap;
      obj1 = set;
      CirclePlayIcon = require;
    }
    if (flag) {
      const obj4 = { style: null, children: null };
      obj4[0] = style;
      const obj5 = { uri: null, width: null, height: null, borderRadius: null, style: null, fileName: null };
      obj5[0] = uri;
      obj5[1] = width;
      obj5[2] = num;
      obj5[3] = borderRadius;
      obj5[4] = style;
      obj5[5] = fileName;
      const items = [callback(closure_13, obj5), ];
      const obj6 = { style: null, children: null };
      videoIcon = videoIcon.videoIcon;
      obj6[0] = videoIcon;
      CirclePlayIcon = CirclePlayIcon(10151).CirclePlayIcon;
      tmp6 = callback(CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" });
      obj6[1] = tmp6;
      items[1] = callback(closure_5, obj6);
      obj4[1] = items;
      let tmp14 = callback2(closure_5, obj4);
    } else {
      const obj7 = { uri: null, width: null, height: null, borderRadius: null, style: null, fileName: null };
      obj7[0] = uri;
      obj7[1] = width;
      obj7[2] = num;
      obj7[3] = borderRadius;
      obj7[4] = style;
      obj7[5] = fileName;
      tmp14 = callback(closure_13, obj7);
    }
  }
  return tmp9;
};
export { AttachmentIcon };
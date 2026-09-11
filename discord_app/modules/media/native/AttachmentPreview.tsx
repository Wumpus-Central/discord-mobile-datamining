// === Module 10285: AttachmentPreview ===

// Module 10285 (AttachmentPreview)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4602 */;
import FileUtils from "FileUtils" /* 5185 */;
import FastImageDefault from "FastImage" /* 5638 */;
import common_Video from "common/Video" /* 8393 */;
import _modDef10286 from "module_10286" /* 10286 */;
import _modDef10287 from "module_10287" /* 10287 */;
import _modDef10288 from "module_10288" /* 10288 */;
import _modDef10289 from "module_10289" /* 10289 */;
import _modDef10290 from "module_10290" /* 10290 */;
import _modDef10291 from "module_10291" /* 10291 */;
import _modDef10292 from "module_10292" /* 10292 */;
import _modDef10293 from "module_10293" /* 10293 */;
import _modDef10294 from "module_10294" /* 10294 */;
import _modDef10295 from "module_10295" /* 10295 */;
import _modDef10296 from "module_10296" /* 10296 */;
import _modDef10297 from "module_10297" /* 10297 */;
import _modDef10298 from "module_10298" /* 10298 */;
import _modDef10299 from "module_10299" /* 10299 */;
import noop from "module_19" /* 19 */;

require = fn;
class AttachmentIcon {
  constructor(arg0) {
    fileName = global.fileName;
    items = [];
    items[0] = fileName;
    tmp = closure_8();
    obj = {
      style: tmp.attachmentFileIcon,
      source: closure_3.useMemo(() => {
            const obj = FileUtils;
            let str = fileName;
            if (fileName == null) {
              str = "";
            }
            let tmp2 = createStyles[obj.classifyFileName(obj, str)];
            if (tmp2 == null) {
              tmp2 = _modDef10297;
            }
            return tmp2;
          }, items)
    };
    return jsx(Image, obj);
  }
}
function FilenameText(fileName) {
  fileName = fileName.fileName;
  const tmp = closure_8();
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
    obj = { style: tmp.attachmentFileName, ellipsizeMode: "middle", lineClamp: 1, variant: "text-xs/medium", color: "mobile-text-heading-primary", children: fileName };
    tmp5 = timestampProducer(Text_Text.Text, obj);
  }
  const items = [tmp5, ];
  obj = { style: tmp.attachmentFileName, lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: null };
  let str3 = "UNKNOWN";
  if (null != match) {
    str3 = "UNKNOWN";
    if (null != match[1]) {
      str3 = match[1].toUpperCase();
    }
  }
  const obj1 = { children: null };
  obj.children = str3;
  items[1] = timestampProducer(Text_Text.Text, obj);
  obj1.children = items;
  return React5(hasOwnProperty, obj1);
}
function DefaultAttachmentPreview(fileName) {
  fileName = fileName.fileName;
  ({ maxFileWidth, borderRadius } = fileName);
  const obj = { style: null, children: null };
  const items = [closure_8().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
  obj.style = items;
  const items1 = [timestampProducer(AttachmentIcon, { fileName }), timestampProducer(FilenameText, { fileName })];
  obj.children = items1;
  return React5(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4606);
let obj = { fileInfoAttachmentPreviewFile: null, attachmentFileIcon: null, attachmentFileName: null, videoIcon: null };
obj = { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm, height: 75, padding: 12, flex: 1, gap: nativeDefault.space.PX_8 };
obj.fileInfoAttachmentPreviewFile = obj;
obj.attachmentFileIcon = { height: 32, width: 24 };
obj.attachmentFileName = { paddingRight: 4, paddingLeft: 4, maxWidth: 136 };
obj.videoIcon = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" };
const React6 = createStyles.createStyles(obj);
createStyles = { archive: _modDef10286, acrobat: _modDef10287, ae: _modDef10288, ai: _modDef10289, audio: _modDef10290, code: _modDef10291, document: _modDef10292, image: _modDef10293, photoshop: _modDef10294, sketch: _modDef10295, spreadsheet: _modDef10296, unknown: _modDef10297, video: _modDef10298, webcode: _modDef10299 };
let closure_13 = noop.memo((borderRadius) => {
  ({ uri, width, height, style, fileName } = borderRadius);
  const size = { uri, width, height };
  const size1 = { width, height, borderRadius: borderRadius.borderRadius };
  let isMatch = null != fileName;
  if (isMatch) {
    isMatch = "" !== fileName;
  }
  if (isMatch) {
    isMatch = /\.gif$/i.test(fileName);
    const obj3 = /\.gif$/i;
  }
  if (isMatch) {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = uri.startsWith("ph://");
    }
    if (!isIOSResult) {
      let isAndroidResult = PlatformUtils.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = uri.startsWith("content://");
      }
      isIOSResult = isAndroidResult;
      const tmp2Result = PlatformUtils;
    }
    isMatch = isIOSResult;
  }
  let obj = { style: null, children: null };
  const items = [size1, style, { overflow: "hidden" }];
  obj.style = items;
  if (isMatch) {
    obj = { style: null, source: null, resizeMode: "cover", enableAnimation: true };
    const items1 = [size1, style];
    obj.style = items1;
    obj.source = size;
    obj.children = timestampProducer(FastImageDefault, obj);
    let tmp10 = obj;
  } else {
    const obj1 = { style: null, source: null, localImageSource: null };
    const items2 = [size1, style];
    obj1.style = items2;
    obj1.source = size;
    obj1.localImageSource = size;
    obj.children = timestampProducer(native.ThumbnailImage, obj1);
    tmp10 = obj;
  }
  return timestampProducer(hasOwnProperty, tmp10);
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/media/native/AttachmentPreview.tsx");

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
    borderRadius = nativeDefault.radii.sm;
  }
  let flag = height.showPlayOnVideoPreview;
  if (flag === undefined) {
    flag = false;
  }
  let defaultPreview = height.defaultPreview;
  if (defaultPreview === undefined) {
    let obj = { fileName, maxFileWidth, borderRadius };
    defaultPreview = timestampProducer(DefaultAttachmentPreview, obj);
  }
  const style = height.style;
  let videoIcon = closure_8();
  if (height.isImage) {
    const size = { uri, width, height: num, borderRadius, style, fileName };
    let tmp9 = timestampProducer(closure_13, size);
  } else {
    if (!isVideo) {
      let obj2 = PlatformUtils;
      if (obj2.isIOS()) {
        let tmp6 = dependencyMap;
        let CirclePlayIcon = require;
      }
      tmp9 = defaultPreview;
      if (isVideo) {
        tmp9 = defaultPreview;
        if (tmp7Result.isIOS()) {
          obj = { style, children: null };
          obj = { style: null, source: null, muted: true, paused: true, resizeMode: "cover", preventsDisplaySleepDuringVideoPlayback: false };
          const size1 = { height: num, width };
          obj.style = size1;
          let obj1 = { uri };
          obj.source = obj1;
          obj.children = timestampProducer(common_Video.VideoComponent, obj);
          tmp9 = timestampProducer(hasOwnProperty, obj);
        }
        tmp7Result = PlatformUtils;
      }
    } else {
      tmp6 = dependencyMap;
      obj1 = PlatformUtils;
      CirclePlayIcon = require;
    }
    if (flag) {
      obj2 = { style, children: null };
      const size2 = { uri, width, height: num, borderRadius, style, fileName };
      const items = [timestampProducer(closure_13, size2), ];
      const obj3 = { style: null, children: null };
      videoIcon = videoIcon.videoIcon;
      obj3.style = videoIcon;
      CirclePlayIcon = CirclePlayIcon(10221).CirclePlayIcon;
      tmp6 = timestampProducer(CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" });
      obj3.children = tmp6;
      items[1] = timestampProducer(hasOwnProperty, obj3);
      obj2.children = items;
      let tmp14 = React5(hasOwnProperty, obj2);
    } else {
      const size3 = { uri, width, height: num, borderRadius, style, fileName };
      tmp14 = timestampProducer(closure_13, size3);
    }
  }
  return tmp9;
};
export { AttachmentIcon };
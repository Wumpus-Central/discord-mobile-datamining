// === Module 11073: AttachmentPreview ===

// Module 11073 (AttachmentPreview)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import Text_Text from "Text/Text" /* 5385 */;
import FastImageDefault from "FastImage" /* 5481 */;
import FileUtils from "FileUtils" /* 8350 */;
import common_Video from "common/Video" /* 9134 */;
import _modDef11074 from "module_11074" /* 11074 */;
import _modDef11075 from "module_11075" /* 11075 */;
import _modDef11076 from "module_11076" /* 11076 */;
import _modDef11077 from "module_11077" /* 11077 */;
import _modDef11078 from "module_11078" /* 11078 */;
import _modDef11079 from "module_11079" /* 11079 */;
import _modDef11080 from "module_11080" /* 11080 */;
import _modDef11081 from "module_11081" /* 11081 */;
import _modDef11082 from "module_11082" /* 11082 */;
import _modDef11083 from "module_11083" /* 11083 */;
import _modDef11084 from "module_11084" /* 11084 */;
import _modDef11085 from "module_11085" /* 11085 */;
import _modDef11086 from "module_11086" /* 11086 */;
import _modDef11087 from "module_11087" /* 11087 */;
import noop from "module_19" /* 19 */;

require = fn;
class AttachmentIcon {
  constructor(arg0) {
    fileName = global.fileName;
    items = [];
    items[0] = fileName;
    tmp = closure_7();
    memo = closure_3.useMemo(() => {
      const obj = FileUtils;
      let str = fileName;
      if (fileName == null) {
        str = "";
      }
      let tmp2 = obj4[obj.classifyFileName(obj, str)];
      if (tmp2 == null) {
        tmp2 = _modDef11085;
      }
      return tmp2;
    }, items);
    obj = { style: tmp.attachmentFileIcon, source: memo };
    return jsx(closure_1(closure_2[20]), obj);
  }
}
function FilenameText(fileName) {
  fileName = fileName.fileName;
  const tmp = closure_7();
  let str = fileName;
  if (fileName == null) {
    str = "";
  }
  const match = /(?:\.([^.]+))?$/.exec(str);
  let tmp5 = null != fileName;
  if (tmp5) {
    tmp5 = "" !== fileName;
  }
  if (tmp5) {
    const obj2 = { style: tmp.attachmentFileName, ellipsizeMode: "middle", lineClamp: 1, variant: "body-xs/medium", color: "mobile-text-heading-primary", children: fileName };
    tmp5 = hasOwnProperty(Text_Text.Text, obj2);
  }
  items = [tmp5, ];
  const obj3 = { style: tmp.attachmentFileName, lineClamp: 1, variant: "body-xs/medium", color: "text-muted", children: null };
  let str3 = "UNKNOWN";
  if (null != match) {
    str3 = "UNKNOWN";
    if (null != match[1]) {
      str3 = match[1].toUpperCase();
    }
  }
  obj4 = { children: null };
  obj3.children = str3;
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj4.children = items;
  return timestampProducer(View, obj4);
}
function DefaultAttachmentPreview(fileName) {
  fileName = fileName.fileName;
  ({ maxFileWidth, borderRadius } = fileName);
  const obj = { style: null, children: null };
  items = [closure_7().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
  obj.style = items;
  const items1 = [hasOwnProperty(AttachmentIcon, { fileName }), hasOwnProperty(FilenameText, { fileName })];
  obj.children = items1;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(4794);
let obj = { fileInfoAttachmentPreviewFile: { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm, height: 75, padding: 12, flex: 1, gap: nativeDefault.space.PX_8 }, attachmentFileIcon: { height: 32, width: 24 }, attachmentFileName: { paddingRight: 4, paddingLeft: 4, maxWidth: 136 }, videoIcon: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" } };
const metroImportDefault = createStyles.createStyles(obj);
let obj4 = { archive: _modDef11074, acrobat: _modDef11075, ae: _modDef11076, ai: _modDef11077, audio: _modDef11078, code: _modDef11079, document: _modDef11080, image: _modDef11081, photoshop: _modDef11082, sketch: _modDef11083, spreadsheet: _modDef11084, unknown: _modDef11085, video: _modDef11086, webcode: _modDef11087 };
let closure_12 = noop.memo(function ImageThumbnail(borderRadius) {
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
  const obj = { style: null, children: null };
  items = [size1, style, { overflow: "hidden" }];
  obj.style = items;
  if (isMatch) {
    const obj2 = { style: null, source: null, resizeMode: "cover", enableAnimation: true };
    const items1 = [size1, style];
    obj2.style = items1;
    const obj5 = { uri };
    obj2.source = obj5;
    obj.children = hasOwnProperty(FastImageDefault, obj2);
    let tmp10 = obj;
  } else {
    const obj6 = { style: null, source: null, localImageSource: null };
    const items2 = [size1, style];
    obj6.style = items2;
    obj6.source = size;
    obj6.localImageSource = size;
    obj.children = hasOwnProperty(native.ThumbnailImage, obj6);
    tmp10 = obj;
  }
  return hasOwnProperty(View, tmp10);
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
    const obj = { fileName, maxFileWidth, borderRadius };
    defaultPreview = hasOwnProperty(DefaultAttachmentPreview, obj);
  }
  const style = height.style;
  let videoIcon = closure_7();
  if (height.isImage) {
    const size = { uri, width, height: num, borderRadius, style, fileName };
    let tmp9 = hasOwnProperty(closure_12, size);
  } else {
    if (!isVideo) {
      if (obj3.isIOS()) {
        let tmp6 = dependencyMap;
        let CirclePlayIcon = require;
      }
      tmp9 = defaultPreview;
      if (isVideo) {
        tmp9 = defaultPreview;
        if (tmp7Result.isIOS()) {
          obj4 = { style, children: null };
          const obj5 = { style: null, source: null, muted: true, paused: true, resizeMode: "cover", preventsDisplaySleepDuringVideoPlayback: false };
          const size1 = { height: num, width };
          obj5.style = size1;
          const obj6 = { uri };
          obj5.source = obj6;
          obj4.children = hasOwnProperty(common_Video.VideoComponent, obj5);
          tmp9 = hasOwnProperty(View, obj4);
        }
        tmp7Result = PlatformUtils;
      }
      obj3 = PlatformUtils;
    } else {
      tmp6 = dependencyMap;
      PlatformUtils;
      CirclePlayIcon = require;
    }
    if (flag) {
      const obj7 = { style, children: null };
      const size2 = { uri, width, height: num, borderRadius, style, fileName };
      items = [hasOwnProperty(closure_12, size2), ];
      const obj8 = { style: null, children: null };
      videoIcon = videoIcon.videoIcon;
      obj8.style = videoIcon;
      CirclePlayIcon = CirclePlayIcon(9698).CirclePlayIcon;
      tmp6 = hasOwnProperty(CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" });
      obj8.children = tmp6;
      items[1] = hasOwnProperty(View, obj8);
      obj7.children = items;
      let tmp14 = timestampProducer(View, obj7);
    } else {
      const size3 = { uri, width, height: num, borderRadius, style, fileName };
      tmp14 = hasOwnProperty(closure_12, size3);
    }
  }
  return tmp9;
};
export { AttachmentIcon };
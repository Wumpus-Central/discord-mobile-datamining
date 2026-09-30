// === Module 9858: AttachmentPreview ===

// Module 9858 (AttachmentPreview)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Text_Text from "Text/Text" /* 4862 */;
import FileUtils from "FileUtils" /* 5643 */;
import FastImageDefault from "FastImage" /* 6095 */;
import common_Video from "common/Video" /* 7950 */;
import _modDef9859 from "module_9859" /* 9859 */;
import _modDef9860 from "module_9860" /* 9860 */;
import _modDef9861 from "module_9861" /* 9861 */;
import _modDef9862 from "module_9862" /* 9862 */;
import _modDef9863 from "module_9863" /* 9863 */;
import _modDef9864 from "module_9864" /* 9864 */;
import _modDef9865 from "module_9865" /* 9865 */;
import _modDef9866 from "module_9866" /* 9866 */;
import _modDef9867 from "module_9867" /* 9867 */;
import _modDef9868 from "module_9868" /* 9868 */;
import _modDef9869 from "module_9869" /* 9869 */;
import _modDef9870 from "module_9870" /* 9870 */;
import _modDef9871 from "module_9871" /* 9871 */;
import _modDef9872 from "module_9872" /* 9872 */;
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
            let tmp2 = obj4[obj.classifyFileName(obj, str)];
            if (tmp2 == null) {
              tmp2 = _modDef9870;
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
    const obj2 = { style: tmp.attachmentFileName, ellipsizeMode: "middle", lineClamp: 1, variant: "text-xs/medium", color: "mobile-text-heading-primary", children: fileName };
    tmp5 = timestampProducer(Text_Text.Text, obj2);
  }
  const items = [tmp5, ];
  const obj3 = { style: tmp.attachmentFileName, lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: null };
  let str3 = "UNKNOWN";
  if (null != match) {
    str3 = "UNKNOWN";
    if (null != match[1]) {
      str3 = match[1].toUpperCase();
    }
  }
  obj4 = { children: null };
  obj3.children = str3;
  items[1] = timestampProducer(Text_Text.Text, obj3);
  obj4.children = items;
  return React5(hasOwnProperty, obj4);
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
const createStyles = fn(4866);
let obj = { fileInfoAttachmentPreviewFile: { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm, height: 75, padding: 12, flex: 1, gap: nativeDefault.space.PX_8 }, attachmentFileIcon: { height: 32, width: 24 }, attachmentFileName: { paddingRight: 4, paddingLeft: 4, maxWidth: 136 }, videoIcon: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" } };
const React6 = createStyles.createStyles(obj);
let obj4 = { archive: _modDef9859, acrobat: _modDef9860, ae: _modDef9861, ai: _modDef9862, audio: _modDef9863, code: _modDef9864, document: _modDef9865, image: _modDef9866, photoshop: _modDef9867, sketch: _modDef9868, spreadsheet: _modDef9869, unknown: _modDef9870, video: _modDef9871, webcode: _modDef9872 };
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
  const obj = { style: null, children: null };
  const items = [size1, style, { overflow: "hidden" }];
  obj.style = items;
  if (isMatch) {
    const obj2 = { style: null, source: null, resizeMode: "cover", enableAnimation: true };
    const items1 = [size1, style];
    obj2.style = items1;
    obj2.source = size;
    obj.children = timestampProducer(FastImageDefault, obj2);
    let tmp10 = obj;
  } else {
    const obj5 = { style: null, source: null, localImageSource: null };
    const items2 = [size1, style];
    obj5.style = items2;
    obj5.source = size;
    obj5.localImageSource = size;
    obj.children = timestampProducer(native.ThumbnailImage, obj5);
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
    const obj = { fileName, maxFileWidth, borderRadius };
    defaultPreview = timestampProducer(DefaultAttachmentPreview, obj);
  }
  const style = height.style;
  let videoIcon = closure_8();
  if (height.isImage) {
    const size = { uri, width, height: num, borderRadius, style, fileName };
    let tmp9 = timestampProducer(closure_13, size);
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
          obj4.children = timestampProducer(common_Video.VideoComponent, obj5);
          tmp9 = timestampProducer(hasOwnProperty, obj4);
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
      const items = [timestampProducer(closure_13, size2), ];
      const obj8 = { style: null, children: null };
      videoIcon = videoIcon.videoIcon;
      obj8.style = videoIcon;
      CirclePlayIcon = CirclePlayIcon(8372).CirclePlayIcon;
      tmp6 = timestampProducer(CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" });
      obj8.children = tmp6;
      items[1] = timestampProducer(hasOwnProperty, obj8);
      obj7.children = items;
      let tmp14 = React5(hasOwnProperty, obj7);
    } else {
      const size3 = { uri, width, height: num, borderRadius, style, fileName };
      tmp14 = timestampProducer(closure_13, size3);
    }
  }
  return tmp9;
};
export { AttachmentIcon };
// discord_app/modules/media/native/AttachmentPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FileUtils from "../../../utils/FileUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import _modDef10197 from "../../../../_runtime/metro/10197__.js";
import _modDef10198 from "../../../../_runtime/metro/10198__.js";
import _modDef10199 from "../../../../_runtime/metro/10199__.js";
import _modDef10200 from "../../../../_runtime/metro/10200__.js";
import _modDef10201 from "../../../../_runtime/metro/10201__.js";
import _modDef10202 from "../../../../_runtime/metro/10202__.js";
import _modDef10203 from "../../../../_runtime/metro/10203__.js";
import _modDef10204 from "../../../../_runtime/metro/10204__.js";
import _modDef10205 from "../../../../_runtime/metro/10205__.js";
import _modDef10206 from "../../../../_runtime/metro/10206__.js";
import _modDef10207 from "../../../../_runtime/metro/10207__.js";
import _modDef10208 from "../../../../_runtime/metro/10208__.js";
import _modDef10209 from "../../../../_runtime/metro/10209__.js";
import _modDef10210 from "../../../../_runtime/metro/10210__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
          tmp2 = _modDef10208;
        }
        return tmp2;
      }, items),
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
    obj = {
      style: tmp.attachmentFileName,
      ellipsizeMode: "middle",
      lineClamp: 1,
      variant: "text-xs/medium",
      color: "mobile-text-heading-primary",
      children: fileName,
    };
    tmp5 = timestampProducer(Text_Text.Text, obj);
  }
  const items = [tmp5];
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
let createStyles = fn(4560);
let obj = { fileInfoAttachmentPreviewFile: null, attachmentFileIcon: null, attachmentFileName: null, videoIcon: null };
obj = {
  flexDirection: "row",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
  height: 75,
  padding: 12,
  flex: 1,
  gap: nativeDefault.space.PX_8,
};
obj.fileInfoAttachmentPreviewFile = obj;
obj.attachmentFileIcon = { height: 32, width: 24 };
obj.attachmentFileName = { paddingRight: 4, paddingLeft: 4, maxWidth: 136 };
obj.videoIcon = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
};
const React6 = createStyles.createStyles(obj);
createStyles = {
  archive: _modDef10197,
  acrobat: _modDef10198,
  ae: _modDef10199,
  ai: _modDef10200,
  audio: _modDef10201,
  code: _modDef10202,
  document: _modDef10203,
  image: _modDef10204,
  photoshop: _modDef10205,
  sketch: _modDef10206,
  spreadsheet: _modDef10207,
  unknown: _modDef10208,
  video: _modDef10209,
  webcode: _modDef10210,
};
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
          obj = {
            style: null,
            source: null,
            muted: true,
            paused: true,
            resizeMode: "cover",
            preventsDisplaySleepDuringVideoPlayback: false,
          };
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
      const items = [timestampProducer(closure_13, size2)];
      const obj3 = { style: null, children: null };
      videoIcon = videoIcon.videoIcon;
      obj3.style = videoIcon;
      CirclePlayIcon = CirclePlayIcon(10132).CirclePlayIcon;
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
}
export { AttachmentIcon };

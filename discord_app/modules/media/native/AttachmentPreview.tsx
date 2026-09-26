// discord_app/modules/media/native/AttachmentPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FileUtils from "../../../utils/FileUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import _modDef9658 from "../../../../_runtime/metro/09658__.js";
import _modDef9659 from "../../../../_runtime/metro/09659__.js";
import _modDef9660 from "../../../../_runtime/metro/09660__.js";
import _modDef9661 from "../../../../_runtime/metro/09661__.js";
import _modDef9662 from "../../../../_runtime/metro/09662__.js";
import _modDef9663 from "../../../../_runtime/metro/09663__.js";
import _modDef9664 from "../../../../_runtime/metro/09664__.js";
import _modDef9665 from "../../../../_runtime/metro/09665__.js";
import _modDef9666 from "../../../../_runtime/metro/09666__.js";
import _modDef9667 from "../../../../_runtime/metro/09667__.js";
import _modDef9668 from "../../../../_runtime/metro/09668__.js";
import _modDef9669 from "../../../../_runtime/metro/09669__.js";
import _modDef9670 from "../../../../_runtime/metro/09670__.js";
import _modDef9671 from "../../../../_runtime/metro/09671__.js";
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
        let tmp2 = obj4[obj.classifyFileName(obj, str)];
        if (tmp2 == null) {
          tmp2 = _modDef9669;
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
    const obj2 = {
      style: tmp.attachmentFileName,
      ellipsizeMode: "middle",
      lineClamp: 1,
      variant: "text-xs/medium",
      color: "mobile-text-heading-primary",
      children: fileName,
    };
    tmp5 = timestampProducer(Text_Text.Text, obj2);
  }
  const items = [tmp5];
  const obj3 = {
    style: tmp.attachmentFileName,
    lineClamp: 1,
    variant: "text-xs/medium",
    color: "text-muted",
    children: null,
  };
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
const createStyles = fn(4836);
let obj = {
  fileInfoAttachmentPreviewFile: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: nativeDefault.radii.sm,
    height: 75,
    padding: 12,
    flex: 1,
    gap: nativeDefault.space.PX_8,
  },
  attachmentFileIcon: { height: 32, width: 24 },
  attachmentFileName: { paddingRight: 4, paddingLeft: 4, maxWidth: 136 },
  videoIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
};
const React6 = createStyles.createStyles(obj);
let obj4 = {
  archive: _modDef9658,
  acrobat: _modDef9659,
  ae: _modDef9660,
  ai: _modDef9661,
  audio: _modDef9662,
  code: _modDef9663,
  document: _modDef9664,
  image: _modDef9665,
  photoshop: _modDef9666,
  sketch: _modDef9667,
  spreadsheet: _modDef9668,
  unknown: _modDef9669,
  video: _modDef9670,
  webcode: _modDef9671,
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
          const obj5 = {
            style: null,
            source: null,
            muted: true,
            paused: true,
            resizeMode: "cover",
            preventsDisplaySleepDuringVideoPlayback: false,
          };
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
      const items = [timestampProducer(closure_13, size2)];
      const obj8 = { style: null, children: null };
      videoIcon = videoIcon.videoIcon;
      obj8.style = videoIcon;
      CirclePlayIcon = CirclePlayIcon(8176).CirclePlayIcon;
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
}
export { AttachmentIcon };

// discord_app/modules/media/native/AttachmentPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import FileUtils from "../../../utils/FileUtils.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import _modDef11262 from "../../../../_runtime/metro/11262__.js";
import _modDef11263 from "../../../../_runtime/metro/11263__.js";
import _modDef11264 from "../../../../_runtime/metro/11264__.js";
import _modDef11265 from "../../../../_runtime/metro/11265__.js";
import _modDef11266 from "../../../../_runtime/metro/11266__.js";
import _modDef11267 from "../../../../_runtime/metro/11267__.js";
import _modDef11268 from "../../../../_runtime/metro/11268__.js";
import _modDef11269 from "../../../../_runtime/metro/11269__.js";
import _modDef11270 from "../../../../_runtime/metro/11270__.js";
import _modDef11271 from "../../../../_runtime/metro/11271__.js";
import _modDef11272 from "../../../../_runtime/metro/11272__.js";
import _modDef11273 from "../../../../_runtime/metro/11273__.js";
import _modDef11274 from "../../../../_runtime/metro/11274__.js";
import _modDef11275 from "../../../../_runtime/metro/11275__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
        tmp2 = _modDef11273;
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
    const obj2 = {
      style: tmp.attachmentFileName,
      ellipsizeMode: "middle",
      lineClamp: 1,
      variant: "body-xs/medium",
      color: "mobile-text-heading-primary",
      children: fileName,
    };
    tmp5 = hasOwnProperty(Text_Text.Text, obj2);
  }
  items = [tmp5];
  const obj3 = {
    style: tmp.attachmentFileName,
    lineClamp: 1,
    variant: "body-xs/medium",
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
const createStyles = fn(5170);
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
const metroImportDefault = createStyles.createStyles(obj);
let obj4 = {
  archive: _modDef11262,
  acrobat: _modDef11263,
  ae: _modDef11264,
  ai: _modDef11265,
  audio: _modDef11266,
  code: _modDef11267,
  document: _modDef11268,
  image: _modDef11269,
  photoshop: _modDef11270,
  sketch: _modDef11271,
  spreadsheet: _modDef11272,
  unknown: _modDef11273,
  video: _modDef11274,
  webcode: _modDef11275,
};
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
      items = [hasOwnProperty(closure_12, size2)];
      const obj8 = { style: null, children: null };
      videoIcon = videoIcon.videoIcon;
      obj8.style = videoIcon;
      CirclePlayIcon = CirclePlayIcon(9481).CirclePlayIcon;
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
}
export { AttachmentIcon };

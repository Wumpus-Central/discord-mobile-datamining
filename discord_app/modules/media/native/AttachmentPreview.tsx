// === Module 11056: AttachmentPreview ===

// Module 11056 (AttachmentPreview)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import FileUtils from "FileUtils" /* 7283 */;
import common_Video from "common/Video" /* 7993 */;
import _modDef11057 from "module_11057" /* 11057 */;
import _modDef11058 from "module_11058" /* 11058 */;
import _modDef11059 from "module_11059" /* 11059 */;
import _modDef11060 from "module_11060" /* 11060 */;
import _modDef11061 from "module_11061" /* 11061 */;
import _modDef11062 from "module_11062" /* 11062 */;
import _modDef11063 from "module_11063" /* 11063 */;
import _modDef11064 from "module_11064" /* 11064 */;
import _modDef11065 from "module_11065" /* 11065 */;
import _modDef11066 from "module_11066" /* 11066 */;
import _modDef11067 from "module_11067" /* 11067 */;
import _modDef11068 from "module_11068" /* 11068 */;
import _modDef11069 from "module_11069" /* 11069 */;
import _modDef11070 from "module_11070" /* 11070 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj = { fileInfoAttachmentPreviewFile: { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm, height: 75, padding: 12, flex: 1, gap: nativeDefault.space.PX_8 }, attachmentFileIcon: { height: 32, width: 24 }, attachmentFileName: { paddingRight: 4, paddingLeft: 4, maxWidth: 136 }, videoIcon: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" } };
let closure_8 = createStyles.createStyles(obj);
let obj4 = { archive: _modDef11057, acrobat: _modDef11058, ae: _modDef11059, ai: _modDef11060, audio: _modDef11061, code: _modDef11062, document: _modDef11063, image: _modDef11064, photoshop: _modDef11065, sketch: _modDef11066, spreadsheet: _modDef11067, unknown: _modDef11068, video: _modDef11069, webcode: _modDef11070 };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((fileName) => {
  const cResult = c.c(3);
  let str = fileName.fileName;
  const tmp3 = closure_8();
  const obj2 = FileUtils;
  if (str == null) {
    str = "";
  }
  let tmp4 = obj4[obj2.classifyFileName(obj2, str)];
  if (tmp4 == null) {
    tmp4 = _modDef11068;
  }
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp3.attachmentFileIcon) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  const tmp7 = timestampProducer(React4, { style: tmp3.attachmentFileIcon, source: tmp4 });
  cResult[0] = tmp4;
  cResult[1] = tmp3.attachmentFileIcon;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const obj3 = { style: tmp3.attachmentFileIcon, source: tmp4 };
}) : ((fileName) => {
  fileName = fileName.fileName;
  const items = [fileName];
  const tmp = closure_8();
  return closure_6(closure_4, {
    style: closure_8().attachmentFileIcon,
    source: noop.useMemo(() => {
      const obj = FileUtils;
      let str = fileName;
      if (fileName == null) {
        str = "";
      }
      let tmp2 = obj4[obj.classifyFileName(obj, str)];
      if (tmp2 == null) {
        tmp2 = _modDef11068;
      }
      return tmp2;
    }, items)
  });
});
let closure_10 = tmp4;
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((fileName) => {
  const cResult = c.c(21);
  fileName = fileName.fileName;
  const tmp4 = closure_8();
  if (cResult[0] === fileName) {
    if (cResult[1] === tmp4.attachmentFileName) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
      let num = cResult[5];
      let str = cResult[6];
      let str2 = cResult[7];
      let tmp8 = cResult[8];
      let tmp9 = cResult[9];
    }
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp7) {
        if (cResult[12] === num) {
          if (cResult[13] === str) {
            if (cResult[14] === str2) {
              if (cResult[15] === tmp8) {
                let tmp14 = cResult[16];
              }
              if (cResult[17] === tmp6) {
                if (cResult[18] === tmp9) {
                  if (cResult[19] === tmp14) {
                    let tmp17 = cResult[20];
                  }
                  return tmp17;
                }
              }
              const obj3 = { children: null };
              const items = [tmp9, tmp14];
              obj3.children = items;
              const tmp19 = React5(tmp6, obj3);
              cResult[17] = tmp6;
              cResult[18] = tmp9;
              cResult[19] = tmp14;
              cResult[20] = tmp19;
              tmp17 = tmp19;
            }
          }
        }
      }
    }
    obj4 = { style: tmp7, lineClamp: num, variant: str, color: str2, children: tmp8 };
    const tmp16 = timestampProducer(tmp5, obj4);
    cResult[10] = tmp5;
    cResult[11] = tmp7;
    cResult[12] = num;
    cResult[13] = str;
    cResult[14] = str2;
    cResult[15] = tmp8;
    cResult[16] = tmp16;
    tmp14 = tmp16;
  }
  let str3 = fileName;
  if (fileName == null) {
    str3 = "";
  }
  const match = /(?:\.([^.]+))?$/.exec(str3);
  let tmp12 = null != fileName;
  if (tmp12) {
    tmp12 = "" !== fileName;
  }
  if (tmp12) {
    const obj5 = { style: tmp4.attachmentFileName, ellipsizeMode: "middle", lineClamp: 1, variant: "text-xs/medium", color: "mobile-text-heading-primary", children: fileName };
    tmp12 = timestampProducer(Text_Text.Text, obj5);
  }
  const Text = Text_Text.Text;
  const attachmentFileName = tmp4.attachmentFileName;
  let str5 = "UNKNOWN";
  if (null != match) {
    str5 = "UNKNOWN";
    if (null != match[1]) {
      str5 = match[1].toUpperCase();
    }
  }
  cResult[0] = fileName;
  cResult[1] = tmp4.attachmentFileName;
  cResult[2] = Text;
  cResult[3] = hasOwnProperty;
  cResult[4] = attachmentFileName;
  cResult[5] = 1;
  cResult[6] = "text-xs/medium";
  cResult[7] = "text-muted";
  cResult[8] = str5;
  cResult[9] = tmp12;
  tmp8 = str5;
  tmp9 = tmp12;
  str2 = "text-muted";
  str = "text-xs/medium";
  num = 1;
  tmp7 = attachmentFileName;
  tmp6 = hasOwnProperty;
  tmp5 = Text;
  const obj2 = /(?:\.([^.]+))?$/;
}) : ((fileName) => {
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
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ fileName, maxFileWidth, borderRadius } = arg0);
  const tmp2 = closure_8();
  if (cResult[0] === borderRadius) {
    if (cResult[1] === maxFileWidth) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === tmp2.fileInfoAttachmentPreviewFile) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
      }
      if (cResult[6] !== fileName) {
        const obj2 = { fileName };
        const tmp9 = timestampProducer(closure_10, obj2);
        const obj3 = { fileName };
        const tmp11 = timestampProducer(closure_11, obj3);
        cResult[6] = fileName;
        cResult[7] = tmp9;
        cResult[8] = tmp11;
        let tmp6 = tmp11;
        let tmp5 = tmp9;
      } else {
        tmp5 = cResult[7];
        tmp6 = cResult[8];
      }
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp6) {
            let tmp12 = cResult[12];
          }
          return tmp12;
        }
      }
      obj4 = { style: tmp4, children: null };
      const items = [tmp5, tmp6];
      obj4.children = items;
      const tmp15 = React5(hasOwnProperty, obj4);
      cResult[9] = tmp4;
      cResult[10] = tmp5;
      cResult[11] = tmp6;
      cResult[12] = tmp15;
      tmp12 = tmp15;
    }
    const items1 = [tmp2.fileInfoAttachmentPreviewFile, tmp3];
    cResult[3] = tmp2.fileInfoAttachmentPreviewFile;
    cResult[4] = tmp3;
    cResult[5] = items1;
    tmp4 = items1;
  }
  const obj5 = { maxWidth: maxFileWidth, borderRadius };
  cResult[0] = borderRadius;
  cResult[1] = maxFileWidth;
  cResult[2] = obj5;
  tmp3 = obj5;
}) : ((fileName) => {
  fileName = fileName.fileName;
  ({ maxFileWidth, borderRadius } = fileName);
  const obj = { style: null, children: null };
  const items = [closure_8().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
  obj.style = items;
  const items1 = [timestampProducer(closure_10, { fileName }), timestampProducer(closure_11, { fileName })];
  obj.children = items1;
  return React5(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(34);
  ({ uri, width, height, borderRadius, style, fileName } = arg0);
  if (cResult[0] === height) {
    if (cResult[1] === uri) {
      if (cResult[2] === width) {
        let tmp4 = cResult[3];
      }
      if (cResult[4] === borderRadius) {
        if (cResult[5] === height) {
          if (cResult[6] === width) {
            let tmp5 = cResult[7];
          }
          let isMatch = null != fileName;
          if (isMatch) {
            isMatch = "" !== fileName;
          }
          if (isMatch) {
            isMatch = /\.gif$/i.test(fileName);
            obj4 = /\.gif$/i;
          }
          if (isMatch) {
            if (!tmpResult.isIOS()) {
              const tmpResult2 = PlatformUtils;
            }
            const _Symbol2 = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { overflow: "hidden" };
              cResult[8] = obj2;
              let tmp20 = obj2;
            } else {
              tmp20 = cResult[8];
            }
            if (cResult[9] === style) {
              if (cResult[10] === tmp5) {
                let tmp21 = cResult[11];
              }
              if (cResult[12] === style) {
                if (cResult[13] === tmp5) {
                  let tmp22 = cResult[14];
                }
                if (cResult[15] === tmp4) {
                  if (cResult[16] === tmp22) {
                    let tmp23 = cResult[17];
                  }
                  if (cResult[18] === tmp21) {
                  }
                  const obj3 = { style: tmp21, children: tmp23 };
                  const tmp30 = timestampProducer(hasOwnProperty, obj3);
                  cResult[18] = tmp21;
                  cResult[19] = tmp23;
                  cResult[20] = tmp30;
                }
                const obj5 = { style: tmp22, source: tmp4, resizeMode: "cover", enableAnimation: true };
                const tmp26 = timestampProducer(FastImageDefault, obj5);
                cResult[15] = tmp4;
                cResult[16] = tmp22;
                cResult[17] = tmp26;
                tmp23 = tmp26;
              }
              const items = [tmp5, style];
              cResult[12] = style;
              cResult[13] = tmp5;
              cResult[14] = items;
              tmp22 = items;
            }
            const items1 = [tmp5, style, tmp20];
            cResult[9] = style;
            cResult[10] = tmp5;
            cResult[11] = items1;
            tmp21 = items1;
            tmpResult = PlatformUtils;
          }
          const _Symbol = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { overflow: "hidden" };
            cResult[21] = obj6;
            let tmp9 = obj6;
          } else {
            tmp9 = cResult[21];
          }
          if (cResult[22] === style) {
            if (cResult[23] === tmp5) {
              let tmp10 = cResult[24];
            }
            if (cResult[25] === style) {
              if (cResult[26] === tmp5) {
                let tmp11 = cResult[27];
              }
              if (cResult[28] === tmp4) {
                if (cResult[29] === tmp11) {
                  let tmp12 = cResult[30];
                }
                if (cResult[31] === tmp10) {
                  if (cResult[32] === tmp12) {
                    let tmp15 = cResult[33];
                  }
                  return tmp15;
                }
                const obj7 = { style: tmp10, children: tmp12 };
                const tmp18 = timestampProducer(hasOwnProperty, obj7);
                cResult[31] = tmp10;
                cResult[32] = tmp12;
                cResult[33] = tmp18;
                tmp15 = tmp18;
              }
              const obj8 = { style: tmp11, source: tmp4, localImageSource: tmp4 };
              const tmp14 = timestampProducer(native.ThumbnailImage, obj8);
              cResult[28] = tmp4;
              cResult[29] = tmp11;
              cResult[30] = tmp14;
              tmp12 = tmp14;
            }
            const items2 = [tmp5, style];
            cResult[25] = style;
            cResult[26] = tmp5;
            cResult[27] = items2;
            tmp11 = items2;
          }
          const items3 = [tmp5, style, tmp9];
          cResult[22] = style;
          cResult[23] = tmp5;
          cResult[24] = items3;
          tmp10 = items3;
        }
      }
      const size = { width, height, borderRadius };
      cResult[4] = borderRadius;
      cResult[5] = height;
      cResult[6] = width;
      cResult[7] = size;
      tmp5 = size;
    }
  }
  const size1 = { uri, width, height };
  cResult[0] = height;
  cResult[1] = uri;
  cResult[2] = width;
  cResult[3] = size1;
  tmp4 = size1;
}) : ((borderRadius) => {
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
}));
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
    defaultPreview = timestampProducer(closure_12, obj);
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
      CirclePlayIcon = CirclePlayIcon(8401).CirclePlayIcon;
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
export const AttachmentIcon = tmp4;
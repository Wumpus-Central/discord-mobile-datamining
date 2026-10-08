// discord_app/modules/media/native/AttachmentPreview.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import FileUtils from "../../../utils/FileUtils.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import _modDef11885 from "../../../../_runtime/metro/11885__.js";
import _modDef11886 from "../../../../_runtime/metro/11886__.js";
import _modDef11887 from "../../../../_runtime/metro/11887__.js";
import _modDef11888 from "../../../../_runtime/metro/11888__.js";
import _modDef11889 from "../../../../_runtime/metro/11889__.js";
import _modDef11890 from "../../../../_runtime/metro/11890__.js";
import _modDef11891 from "../../../../_runtime/metro/11891__.js";
import _modDef11892 from "../../../../_runtime/metro/11892__.js";
import _modDef11893 from "../../../../_runtime/metro/11893__.js";
import _modDef11894 from "../../../../_runtime/metro/11894__.js";
import _modDef11895 from "../../../../_runtime/metro/11895__.js";
import _modDef11896 from "../../../../_runtime/metro/11896__.js";
import _modDef11897 from "../../../../_runtime/metro/11897__.js";
import _modDef11898 from "../../../../_runtime/metro/11898__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
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
let closure_8 = createStyles.createStyles(obj);
let obj4 = {
  archive: _modDef11885,
  acrobat: _modDef11886,
  ae: _modDef11887,
  ai: _modDef11888,
  audio: _modDef11889,
  code: _modDef11890,
  document: _modDef11891,
  image: _modDef11892,
  photoshop: _modDef11893,
  sketch: _modDef11894,
  spreadsheet: _modDef11895,
  unknown: _modDef11896,
  video: _modDef11897,
  webcode: _modDef11898,
};
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AttachmentIcon(fileName) {
      const cResult = c.c(3);
      let str = fileName.fileName;
      const tmp3 = closure_8();
      const obj2 = FileUtils;
      if (str == null) {
        str = "";
      }
      let tmp4 = obj4[obj2.classifyFileName(obj2, str)];
      if (tmp4 == null) {
        tmp4 = _modDef11896;
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
    }
  : function AttachmentIcon(fileName) {
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
            tmp2 = _modDef11896;
          }
          return tmp2;
        }, items),
      });
    };
let closure_10 = tmp4;
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FilenameText(fileName) {
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
        const obj5 = {
          style: tmp4.attachmentFileName,
          ellipsizeMode: "middle",
          lineClamp: 1,
          variant: "text-xs/medium",
          color: "mobile-text-heading-primary",
          children: fileName,
        };
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
    }
  : function FilenameText(fileName) {
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
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DefaultAttachmentPreview(arg0) {
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
    }
  : function DefaultAttachmentPreview(fileName) {
      fileName = fileName.fileName;
      ({ maxFileWidth, borderRadius } = fileName);
      const obj = { style: null, children: null };
      const items = [closure_8().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
      obj.style = items;
      const items1 = [timestampProducer(closure_10, { fileName }), timestampProducer(closure_11, { fileName })];
      obj.children = items1;
      return React5(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let closure_13 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ImageThumbnail(arg0) {
        const cResult = c.c(36);
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
                      if (cResult[15] !== uri) {
                        const obj3 = { uri };
                        cResult[15] = uri;
                        cResult[16] = obj3;
                        let tmp23 = obj3;
                      } else {
                        tmp23 = cResult[16];
                      }
                      if (cResult[17] === tmp22) {
                        if (cResult[18] === tmp23) {
                          let tmp24 = cResult[19];
                        }
                        if (cResult[20] === tmp21) {
                        }
                        const obj5 = { style: tmp21, children: tmp24 };
                        const tmp31 = timestampProducer(hasOwnProperty, obj5);
                        cResult[20] = tmp21;
                        cResult[21] = tmp24;
                        cResult[22] = tmp31;
                      }
                      const obj6 = { style: tmp22, source: tmp23, resizeMode: "cover", enableAnimation: true };
                      const tmp27 = timestampProducer(FastImageDefault, obj6);
                      cResult[17] = tmp22;
                      cResult[18] = tmp23;
                      cResult[19] = tmp27;
                      tmp24 = tmp27;
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
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj7 = { overflow: "hidden" };
                  cResult[23] = obj7;
                  let tmp9 = obj7;
                } else {
                  tmp9 = cResult[23];
                }
                if (cResult[24] === style) {
                  if (cResult[25] === tmp5) {
                    let tmp10 = cResult[26];
                  }
                  if (cResult[27] === style) {
                    if (cResult[28] === tmp5) {
                      let tmp11 = cResult[29];
                    }
                    if (cResult[30] === tmp4) {
                      if (cResult[31] === tmp11) {
                        let tmp12 = cResult[32];
                      }
                      if (cResult[33] === tmp10) {
                        if (cResult[34] === tmp12) {
                          let tmp15 = cResult[35];
                        }
                        return tmp15;
                      }
                      const obj8 = { style: tmp10, children: tmp12 };
                      const tmp18 = timestampProducer(hasOwnProperty, obj8);
                      cResult[33] = tmp10;
                      cResult[34] = tmp12;
                      cResult[35] = tmp18;
                      tmp15 = tmp18;
                    }
                    const obj9 = { style: tmp11, source: tmp4, localImageSource: tmp4 };
                    const tmp14 = timestampProducer(native.ThumbnailImage, obj9);
                    cResult[30] = tmp4;
                    cResult[31] = tmp11;
                    cResult[32] = tmp14;
                    tmp12 = tmp14;
                  }
                  const items2 = [tmp5, style];
                  cResult[27] = style;
                  cResult[28] = tmp5;
                  cResult[29] = items2;
                  tmp11 = items2;
                }
                const items3 = [tmp5, style, tmp9];
                cResult[24] = style;
                cResult[25] = tmp5;
                cResult[26] = items3;
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
      }
    : function ImageThumbnail(borderRadius) {
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
          const obj5 = { uri };
          obj2.source = obj5;
          obj.children = timestampProducer(FastImageDefault, obj2);
          let tmp10 = obj;
        } else {
          const obj6 = { style: null, source: null, localImageSource: null };
          const items2 = [size1, style];
          obj6.style = items2;
          obj6.source = size;
          obj6.localImageSource = size;
          obj.children = timestampProducer(native.ThumbnailImage, obj6);
          tmp10 = obj;
        }
        return timestampProducer(hasOwnProperty, tmp10);
      },
);
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
      CirclePlayIcon = CirclePlayIcon(8899).CirclePlayIcon;
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
export const AttachmentIcon = tmp4;

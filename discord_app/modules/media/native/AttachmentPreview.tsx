// discord_app/modules/media/native/AttachmentPreview.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import FileUtils from "../../../utils/FileUtils.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import AssetRegistryDefault from "../../../../_runtime/11044_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/11045_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../_runtime/11046_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../_runtime/11047_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../_runtime/11048_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../../_runtime/11049_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../../_runtime/11050_AssetRegistry.js";
import AssetRegistryDefault8 from "../../../../_runtime/11051_AssetRegistry.js";
import AssetRegistryDefault9 from "../../../../_runtime/11052_AssetRegistry.js";
import AssetRegistryDefault10 from "../../../../_runtime/11053_AssetRegistry.js";
import AssetRegistryDefault11 from "../../../../_runtime/11054_AssetRegistry.js";
import AssetRegistryDefault12 from "../../../../_runtime/11055_AssetRegistry.js";
import AssetRegistryDefault13 from "../../../../_runtime/11056_AssetRegistry.js";
import AssetRegistryDefault14 from "../../../../_runtime/11057_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  fileInfoAttachmentPreviewFile: obj2,
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
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
  height: 75,
  padding: 12,
  flex: 1,
  gap: nativeDefault.space.PX_8,
};
let closure_8 = createStyles.createStyles(obj);
let obj3 = {
  archive: AssetRegistryDefault,
  acrobat: AssetRegistryDefault2,
  ae: AssetRegistryDefault3,
  ai: AssetRegistryDefault4,
  audio: AssetRegistryDefault5,
  code: AssetRegistryDefault6,
  document: AssetRegistryDefault7,
  image: AssetRegistryDefault8,
  photoshop: AssetRegistryDefault9,
  sketch: AssetRegistryDefault10,
  spreadsheet: AssetRegistryDefault11,
  unknown: AssetRegistryDefault12,
  video: AssetRegistryDefault13,
  webcode: AssetRegistryDefault14,
};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (fileName) => {
      const obj = react2;
      const cResult = obj.c(3);
      let str = fileName.fileName;
      const tmp3 = closure_8();
      const tmp4 = FileUtils;
      const classifyFileName = tmp4.classifyFileName;
      if (str == null) {
        str = "";
      }
      let tmp5 = obj3[classifyFileName(tmp4, str)];
      if (tmp5 == null) {
        tmp5 = AssetRegistryDefault12;
      }
      if (cResult[0] === tmp5) {
        let tmp7;
        if (cResult[1] === tmp3.attachmentFileIcon) {
          tmp7 = cResult[2];
        }
        return tmp7;
      }
      const obj2 = { style: tmp3.attachmentFileIcon, source: tmp5 };
      const tmp8 = metroRequire(React3, obj2);
      cResult[0] = tmp5;
      cResult[1] = tmp3.attachmentFileIcon;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : (fileName) => {
      fileName = fileName.fileName;
      const items = [fileName];
      const tmp = closure_8();
      const obj = {
        style: tmp.attachmentFileIcon,
        source: react.useMemo(() => {
          const tmp2 = FileUtils;
          let str = fileName;
          const classifyFileName = tmp2.classifyFileName;
          if (fileName == null) {
            str = "";
          }
          let tmp3 = obj3[classifyFileName(tmp2, str)];
          if (tmp3 == null) {
            tmp3 = AssetRegistryDefault12;
          }
          return tmp3;
        }, items),
      };
      return closure_6(closure_4, obj);
    };
let closure_10 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (fileName) => {
      let items;
      const obj = react2;
      const cResult = obj.c(21);
      fileName = fileName.fileName;
      const tmp4 = closure_8();
      if (cResult[0] === fileName) {
        let tmp5;
        let tmp6;
        let tmp7;
        let num;
        let str;
        let str2;
        let tmp8;
        let tmp9;
        if (cResult[1] === tmp4.attachmentFileName) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          num = cResult[5];
          str = cResult[6];
          str2 = cResult[7];
          tmp8 = cResult[8];
          tmp9 = cResult[9];
        }
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp7) {
            if (cResult[12] === num) {
              if (cResult[13] === str) {
                if (cResult[14] === str2) {
                  let tmp15;
                  if (cResult[15] === tmp8) {
                    tmp15 = cResult[16];
                  }
                  if (cResult[17] === tmp6) {
                    if (cResult[18] === tmp9) {
                      let tmp18;
                      if (cResult[19] === tmp15) {
                        tmp18 = cResult[20];
                      }
                      return tmp18;
                    }
                  }
                  const obj2 = { children: items };
                  items = [tmp9, tmp15];
                  const tmp20 = metroImportDefault(tmp6, obj2);
                  cResult[17] = tmp6;
                  cResult[18] = tmp9;
                  cResult[19] = tmp15;
                  cResult[20] = tmp20;
                  tmp18 = tmp20;
                }
              }
            }
          }
        }
        obj3 = { style: tmp7, lineClamp: num, variant: str, color: str2, children: tmp8 };
        const tmp17 = metroRequire(tmp5, obj3);
        cResult[10] = tmp5;
        cResult[11] = tmp7;
        cResult[12] = num;
        cResult[13] = str;
        cResult[14] = str2;
        cResult[15] = tmp8;
        cResult[16] = tmp17;
        tmp15 = tmp17;
      }
      let str3 = fileName;
      const exec = /(?:\.([^.]+))?$/.exec;
      if (fileName == null) {
        str3 = "";
      }
      const match = exec(str3);
      let tmp13 = null != fileName && "" !== fileName;
      if (tmp13) {
        const obj4 = {
          style: tmp4.attachmentFileName,
          ellipsizeMode: "middle",
          lineClamp: 1,
          variant: "text-xs/medium",
          color: "mobile-text-heading-primary",
          children: fileName,
        };
        tmp13 = metroRequire(Text_Text.Text, obj4);
      }
      const Text = Text_Text.Text;
      const attachmentFileName = tmp4.attachmentFileName;
      let str5 = "UNKNOWN";
      if (null != match) {
        str5 = "UNKNOWN";
        if (null != match[1]) {
          const str6 = match[1];
          str5 = str6.toUpperCase();
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
      cResult[9] = tmp13;
      tmp8 = str5;
      tmp9 = tmp13;
      str2 = "text-muted";
      str = "text-xs/medium";
      num = 1;
      tmp7 = attachmentFileName;
      tmp6 = hasOwnProperty;
      tmp5 = Text;
    }
  : (fileName) => {
      let str3;
      fileName = fileName.fileName;
      const tmp = closure_8();
      let str = fileName;
      const exec = /(?:\.([^.]+))?$/.exec;
      if (fileName == null) {
        str = "";
      }
      const match = exec(str);
      let tmp6 = null != fileName && "" !== fileName;
      if (tmp6) {
        const obj = {
          style: tmp.attachmentFileName,
          ellipsizeMode: "middle",
          lineClamp: 1,
          variant: "text-xs/medium",
          color: "mobile-text-heading-primary",
          children: fileName,
        };
        tmp6 = metroRequire(Text_Text.Text, obj);
      }
      const items = [tmp6];
      const obj2 = {
        style: tmp.attachmentFileName,
        lineClamp: 1,
        variant: "text-xs/medium",
        color: "text-muted",
        children: str3,
      };
      str3 = "UNKNOWN";
      const Text = Text_Text.Text;
      if (null != match) {
        str3 = "UNKNOWN";
        if (null != match[1]) {
          const str4 = match[1];
          str3 = str4.toUpperCase();
        }
      }
      obj3 = { children: items };
      items[1] = metroRequire(Text, obj2);
      return metroImportDefault(hasOwnProperty, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let borderRadius;
      let fileName;
      let items;
      let maxFileWidth;
      const obj = react2;
      const cResult = obj.c(13);
      ({ fileName, maxFileWidth, borderRadius } = arg0);
      const tmp2 = closure_8();
      if (cResult[0] === borderRadius) {
        let tmp3;
        if (cResult[1] === maxFileWidth) {
          tmp3 = cResult[2];
        }
        if (cResult[3] === tmp2.fileInfoAttachmentPreviewFile) {
          let tmp4;
          let tmp6;
          let tmp5;
          if (cResult[4] === tmp3) {
            tmp4 = cResult[5];
          }
          if (cResult[6] !== fileName) {
            const obj2 = { fileName };
            const tmp9 = metroRequire(closure_10, obj2);
            obj3 = { fileName };
            const tmp11 = metroRequire(closure_11, obj3);
            cResult[6] = fileName;
            cResult[7] = tmp9;
            cResult[8] = tmp11;
            tmp6 = tmp11;
            tmp5 = tmp9;
          } else {
            tmp5 = cResult[7];
            tmp6 = cResult[8];
          }
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp5) {
              let tmp12;
              if (cResult[11] === tmp6) {
                tmp12 = cResult[12];
              }
              return tmp12;
            }
          }
          const obj4 = { style: tmp4, children: items };
          items = [tmp5, tmp6];
          const tmp15 = metroImportDefault(hasOwnProperty, obj4);
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
  : (fileName) => {
      let borderRadius;
      let items;
      let items1;
      let maxFileWidth;
      fileName = fileName.fileName;
      ({ maxFileWidth, borderRadius } = fileName);
      const obj = { style: items, children: items1 };
      items = [closure_8().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
      items1 = [metroRequire(closure_10, { fileName }), metroRequire(closure_11, { fileName })];
      return metroImportDefault(hasOwnProperty, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let borderRadius;
        let fileName;
        let height;
        let style;
        let tmp15;
        let uri;
        let width;
        const obj = react2;
        const cResult = obj.c(34);
        ({ uri, width, height, borderRadius, style, fileName } = arg0);
        if (cResult[0] === height) {
          if (cResult[1] === uri) {
            let tmp4;
            if (cResult[2] === width) {
              tmp4 = cResult[3];
            }
            if (cResult[4] === borderRadius) {
              if (cResult[5] === height) {
                let tmp5;
                let tmp9;
                if (cResult[6] === width) {
                  tmp5 = cResult[7];
                }
                let isMatch = null != fileName && "" !== fileName;
                if (isMatch) {
                  const obj4 = /\.gif$/i;
                  isMatch = obj4.test(fileName);
                }
                if (isMatch) {
                  let tmp20;
                  const tmpResult = PlatformUtils;
                  if (!tmpResult.isIOS()) {
                    const tmpResult2 = PlatformUtils;
                    if (tmpResult2.isAndroid()) {
                      return tmp15;
                    }
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj2 = { overflow: "hidden" };
                    cResult[8] = obj2;
                    tmp20 = obj2;
                  } else {
                    tmp20 = cResult[8];
                  }
                  if (cResult[9] === style) {
                    let tmp21;
                    if (cResult[10] === tmp5) {
                      tmp21 = cResult[11];
                    }
                    if (cResult[12] === style) {
                      let tmp22;
                      if (cResult[13] === tmp5) {
                        tmp22 = cResult[14];
                      }
                      if (cResult[15] === tmp4) {
                        let tmp23;
                        if (cResult[16] === tmp22) {
                          tmp23 = cResult[17];
                        }
                        if (cResult[18] === tmp21) {
                          let tmp27;
                          if (cResult[19] === tmp23) {
                            tmp27 = cResult[20];
                          }
                          tmp15 = tmp27;
                        }
                        obj3 = { style: tmp21, children: tmp23 };
                        const tmp30 = metroRequire(hasOwnProperty, obj3);
                        cResult[18] = tmp21;
                        cResult[19] = tmp23;
                        cResult[20] = tmp30;
                        tmp27 = tmp30;
                      }
                      const obj5 = { style: tmp22, source: tmp4, resizeMode: "cover", enableAnimation: true };
                      const tmp26 = metroRequire(FastImageDefault, obj5);
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
                }
                const _Symbol = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj6 = { overflow: "hidden" };
                  cResult[21] = obj6;
                  tmp9 = obj6;
                } else {
                  tmp9 = cResult[21];
                }
                if (cResult[22] === style) {
                  let tmp10;
                  if (cResult[23] === tmp5) {
                    tmp10 = cResult[24];
                  }
                  if (cResult[25] === style) {
                    let tmp11;
                    if (cResult[26] === tmp5) {
                      tmp11 = cResult[27];
                    }
                    if (cResult[28] === tmp4) {
                      let tmp12;
                      if (cResult[29] === tmp11) {
                        tmp12 = cResult[30];
                      }
                      if (cResult[31] === tmp10) {
                        if (cResult[32] === tmp12) {
                          tmp15 = cResult[33];
                        }
                      }
                      const obj7 = { style: tmp10, children: tmp12 };
                      const tmp18 = metroRequire(hasOwnProperty, obj7);
                      cResult[31] = tmp10;
                      cResult[32] = tmp12;
                      cResult[33] = tmp18;
                      tmp15 = tmp18;
                    }
                    const obj8 = { style: tmp11, source: tmp4, localImageSource: tmp4 };
                    const tmp14 = metroRequire(native.ThumbnailImage, obj8);
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
            size = { width, height, borderRadius };
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
    : (borderRadius) => {
        let fileName;
        let height;
        let items;
        let items1;
        let items2;
        let style;
        let tmp10;
        let uri;
        let width;
        ({ uri, width, height, style, fileName } = borderRadius);
        size = { uri, width, height };
        const size1 = { width, height, borderRadius: borderRadius.borderRadius };
        let isMatch = null != fileName && "" !== fileName;
        if (isMatch) {
          obj3 = /\.gif$/i;
          isMatch = obj3.test(fileName);
        }
        if (isMatch) {
          const obj4 = PlatformUtils;
          let isIOSResult = obj4.isIOS() && uri.startsWith("ph://");
          if (!isIOSResult) {
            const tmp2Result = PlatformUtils;
            isIOSResult = tmp2Result.isAndroid() && uri.startsWith("content://");
            const isAndroidResult = tmp2Result.isAndroid() && uri.startsWith("content://");
          }
          isMatch = isIOSResult;
        }
        const obj = { style: items, children: null };
        items = [size1, style, { overflow: "hidden" }];
        if (isMatch) {
          const obj2 = { style: items1, source: size, resizeMode: "cover", enableAnimation: true };
          items1 = [size1, style];
          obj.children = metroRequire(FastImageDefault, obj2);
          tmp10 = obj;
        } else {
          const obj5 = { style: items2, source: size, localImageSource: size };
          items2 = [size1, style];
          obj.children = metroRequire(native.ThumbnailImage, obj5);
          tmp10 = obj;
        }
        return metroRequire(hasOwnProperty, tmp10);
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/media/native/AttachmentPreview.tsx");

export default function AttachmentPreview(isImage) {
  let borderRadius;
  let fileName;
  let isVideo;
  let items;
  let maxFileWidth;
  let obj5;
  let obj6;
  let size1;
  let tmp11;
  let uri;
  let width;
  ({ uri, isVideo, width } = isImage);
  isImage = isImage.isImage;
  if (width === undefined) {
    width = 75;
  }
  let num = isImage.height;
  if (num === undefined) {
    num = 75;
  }
  ({ fileName, borderRadius, maxFileWidth } = isImage);
  if (borderRadius === undefined) {
    borderRadius = nativeDefault.radii.sm;
  }
  let flag = isImage.showPlayOnVideoPreview;
  if (flag === undefined) {
    flag = false;
  }
  let defaultPreview = isImage.defaultPreview;
  if (defaultPreview === undefined) {
    const obj = { fileName, maxFileWidth, borderRadius };
    defaultPreview = metroRequire(closure_12, obj);
  }
  const style = isImage.style;
  if (isImage) {
    size = { uri, width, height: num, borderRadius, style, fileName };
    tmp11 = metroRequire(closure_13, size);
  } else {
    let tmp8;
    let tmp16;
    if (!isVideo) {
      obj3 = PlatformUtils;
      if (obj3.isIOS()) {
        tmp8 = require;
      }
      tmp11 = defaultPreview;
      if (isVideo) {
        tmp11 = defaultPreview;
        const tmp9Result = PlatformUtils;
        if (tmp9Result.isIOS()) {
          const obj4 = { style, children: metroRequire(common_Video.VideoComponent, obj5) };
          obj5 = {
            style: size1,
            source: obj6,
            muted: true,
            paused: true,
            resizeMode: "cover",
            preventsDisplaySleepDuringVideoPlayback: false,
          };
          size1 = { height: num, width };
          obj6 = { uri };
          tmp11 = metroRequire(hasOwnProperty, obj4);
        }
      }
    } else {
      PlatformUtils;
      tmp8 = require;
    }
    if (flag) {
      const size2 = { uri, width, height: num, borderRadius, style, fileName };
      const obj7 = { style, children: items };
      items = [metroRequire(closure_13, size2)];
      const obj8 = {
        style: tmp5.videoIcon,
        children: metroRequire(tmp8(8368).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }),
      };
      items[1] = metroRequire(hasOwnProperty, obj8);
      tmp16 = metroImportDefault(hasOwnProperty, obj7);
    } else {
      const size3 = { uri, width, height: num, borderRadius, style, fileName };
      tmp16 = metroRequire(closure_13, size3);
    }
    tmp11 = tmp16;
  }
  return tmp11;
}
export const AttachmentIcon = tmp5;

// === Module 11781: ConjureFileThumbnail ===

// Module 11781 (ConjureFileThumbnail)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5655 */;
import ConjureAttachmentTypes from "ConjureAttachmentTypes" /* 11723 */;
import FileIcon2 from "FileIcon" /* 11782 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 11784 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageThumbnail(arg0) {
  let FileIcon = require;
  let tmp = dependencyMap;
  const cResult = c.c(9);
  ({ style, iconColor, projectId, attachmentId } = arg0);
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, attachmentId);
  ({ src, handleError } = conjureAttachmentImage);
  if (null != src) {
    if (!conjureAttachmentImage.gone) {
      if (cResult[3] !== src) {
        const obj3 = { uri: src };
        cResult[3] = src;
        cResult[4] = obj3;
        let tmp4 = obj3;
      } else {
        tmp4 = cResult[4];
      }
      if (cResult[5] === handleError) {
        if (cResult[6] === style) {
          if (cResult[7] === tmp4) {
            let tmp5 = cResult[8];
          }
          return tmp5;
        }
      }
      const obj4 = { source: tmp4, style, resizeMode: "cover", onError: handleError };
      const tmp8 = jsx(FastImageDefault, { source: tmp4, style, resizeMode: "cover", onError: handleError });
      cResult[5] = handleError;
      cResult[6] = style;
      cResult[7] = tmp4;
      cResult[8] = tmp8;
      tmp5 = tmp8;
    }
  }
  if (cResult[0] === iconColor) {
  }
  FileIcon = FileIcon2.FileIcon;
  tmp = <FileIcon size="xs" color={iconColor} style={style} />;
  cResult[0] = iconColor;
  cResult[1] = style;
  cResult[2] = tmp;
}) : (function ImageThumbnail(style) {
  style = style.style;
  ({ projectId, attachmentId, iconColor } = style);
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, attachmentId);
  const src = conjureAttachmentImage.src;
  if (null != src) {
    if (!conjureAttachmentImage.gone) {
      const obj2 = { source: null, style: null, resizeMode: "cover", onError: null };
      const obj3 = { uri: src };
      obj2.source = obj3;
      obj2.style = style;
      obj2.onError = tmp4;
      let tmp7 = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover", onError: null });
    }
    return tmp7;
  }
  tmp7 = jsx(FileIcon2.FileIcon, { size: "xs", color: iconColor, style });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureFileThumbnail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureFileThumbnail(arg0) {
  const cResult = c.c(8);
  ({ projectId, file, style, iconColor } = arg0);
  if (undefined === iconColor) {
    iconColor = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  if (null != projectId) {
    if (null != file) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = ConjureAttachmentTypes.CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(file.content_type)) {
        if (cResult[3] === file.id) {
          if (cResult[4] === iconColor) {
            if (cResult[5] === projectId) {
            }
          }
        }
        const obj2 = { projectId, attachmentId: file.id, style, iconColor };
        const tmp10 = <closure_4 projectId={projectId} attachmentId={file.id} style={style} iconColor={iconColor} />;
        file = file.id;
        cResult[3] = file;
        cResult[4] = iconColor;
        cResult[5] = projectId;
        cResult[6] = style;
        cResult[7] = tmp10;
      }
    }
  }
  if (cResult[0] === iconColor) {
    if (cResult[1] === style) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(FileIcon2.FileIcon, { size: "xs", color: iconColor, style });
  cResult[0] = iconColor;
  cResult[1] = style;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ConjureFileThumbnail(arg0) {
  ({ projectId, file, style, iconColor } = arg0);
  if (iconColor === undefined) {
    iconColor = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  if (null != projectId) {
    if (null != file) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = ConjureAttachmentTypes.CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(file.content_type)) {
        const obj = { projectId, attachmentId: file.id, style, iconColor };
        let tmp5 = <closure_4 projectId={projectId} attachmentId={file.id} style={style} iconColor={iconColor} />;
      }
      return tmp5;
    }
  }
  tmp5 = jsx(FileIcon2.FileIcon, { size: "xs", color: iconColor, style });
});
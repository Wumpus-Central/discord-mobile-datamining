// discord_app/modules/conjure/chat/native/ConjureFileThumbnail.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import FileIcon from "../../../../design/components/Icon/native/redesign/generated/FileIcon.tsx";
import ConjureAttachmentTypes from "../ConjureAttachmentTypes.tsx";
import useConjureAttachmentImage from "../useConjureAttachmentImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ImageThumbnail(style) {
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
  tmp7 = jsx(FileIcon.FileIcon, { size: "xs", color: iconColor, style });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureFileThumbnail.tsx");

export default function ConjureFileThumbnail(arg0) {
  ({ projectId, file, style, iconColor } = arg0);
  if (iconColor === undefined) {
    iconColor = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  if (null != projectId) {
    if (null != file) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = ConjureAttachmentTypes.CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(file.content_type)) {
        const obj = { projectId, attachmentId: file.id, style, iconColor };
        let tmp5 = <ImageThumbnail projectId={projectId} attachmentId={file.id} style={style} iconColor={iconColor} />;
      }
      return tmp5;
    }
  }
  tmp5 = jsx(FileIcon.FileIcon, { size: "xs", color: iconColor, style });
}

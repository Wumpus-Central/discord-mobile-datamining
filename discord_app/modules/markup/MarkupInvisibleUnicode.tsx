// discord_app/modules/markup/MarkupInvisibleUnicode.tsx
import size from "../../../_runtime/metro/00002__.js";

const re0 = /^[\u200B-\u200D\uFEFF\u180E\u061C]+/;
const result = size.fileFinishedImporting("modules/markup/MarkupInvisibleUnicode.tsx");

export const INVISIBLE_CHAR_REGEX = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
export const stripLeadingInvisibleUnicode = function stripLeadingInvisibleUnicode(str) {
  return str.replace(re0, "");
};

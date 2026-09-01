// discord_app/modules/markup/MarkupInvisibleUnicode.tsx
import set from "../../../_runtime/00002_set.js";

const re0 = /^[\u200B-\u200D\uFEFF\u180E\u061C]+/;
const result = set.fileFinishedImporting("modules/markup/MarkupInvisibleUnicode.tsx");

export const INVISIBLE_CHAR_REGEX = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
export const stripLeadingInvisibleUnicode = function stripLeadingInvisibleUnicode(str) {
  return str.replace(closure_0, "");
};

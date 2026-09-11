// === Module 16761: MarkupSearchResultLinkPreviewReactRules ===

// Module 16761 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10206 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return MarkupMessagePreviewReactRules.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
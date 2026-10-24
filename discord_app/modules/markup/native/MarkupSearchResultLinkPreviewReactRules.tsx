// === Module 18116: MarkupSearchResultLinkPreviewReactRules ===

// Module 18116 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 12058 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return MarkupMessagePreviewReactRules.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
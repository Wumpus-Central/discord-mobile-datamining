// === Module 18927: MarkupSearchResultLinkPreviewReactRules ===

// Module 18927 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10604 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  return MarkupMessagePreviewReactRules.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
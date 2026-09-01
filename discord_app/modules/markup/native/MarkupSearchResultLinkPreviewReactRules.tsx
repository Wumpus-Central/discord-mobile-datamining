// discord_app/modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx
import set from "../../../../_runtime/00002_set.js";
import defaultReactFn from "MarkupMessagePreviewReactRules.tsx";

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};

// discord_app/modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return MarkupMessagePreviewReactRules.createMessagePreviewReactRules({ customEmojiSize: 16 });
};

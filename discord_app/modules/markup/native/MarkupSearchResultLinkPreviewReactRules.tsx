// discord_app/modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx
import { defaultReactFn } from "MarkupMessagePreviewReactRules.tsx";
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
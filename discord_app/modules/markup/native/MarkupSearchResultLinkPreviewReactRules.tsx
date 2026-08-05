// discord_app/modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx
import { Button } from "../../../design/void/native.tsx";
import { defaultReactFn } from "MarkupMessagePreviewReactRules.tsx";
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = defaultReactFn /* defaultReactFn */;
  obj = { iconColor: "mobile-text-heading-primary", iconSize: "xs", channelIconSize: Button /* Button */.IconSizes.SMALL_14, customEmojiSize: 16 };
  return obj.createMessagePreviewReactRules(obj);
};
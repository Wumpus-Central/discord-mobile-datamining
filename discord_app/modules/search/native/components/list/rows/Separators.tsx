// discord_app/modules/search/native/components/list/rows/Separators.tsx
import "noop";
import { View } from "get ActivityIndicator";
import MessageEmbedTypes from "MessageEmbedTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let FILES_OR_LINKS_GAP_WIDTH;
let MEDIA_ITEM_GAP_WIDTH;
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = MessageEmbedTypes);
let closure_2 = createCacheKey.createStyles({ filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } });
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = function MessageVerticalSeparator() {
  return <View style={callback().messageSeparator} />;
};
export const MediaVerticalSeparator = function MediaVerticalSeparator() {
  return <View style={callback().mediaSeparator} />;
};
export const CardVerticalSeparator = function CardVerticalSeparator() {
  return <View style={callback().filesOrLinksSeparator} />;
};
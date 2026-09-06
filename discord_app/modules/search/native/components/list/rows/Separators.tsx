// discord_app/modules/search/native/components/list/rows/Separators.tsx
import noop from "../../../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const SearchConstants = fn(7878);
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchConstants);
const jsx = fn(21).jsx;
fn(4560);
const createStyles = {
  filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH },
  mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH },
  messageSeparator: { height: 4 },
};
let closure_2 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = function MessageVerticalSeparator() {
  return <View style={closure_2().messageSeparator} />;
};
export const MediaVerticalSeparator = function MediaVerticalSeparator() {
  return <View style={closure_2().mediaSeparator} />;
};
export const CardVerticalSeparator = function CardVerticalSeparator() {
  return <View style={closure_2().filesOrLinksSeparator} />;
};

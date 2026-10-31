// discord_app/modules/search/native/components/list/rows/Separators.tsx
import noop from "../../../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const SearchConstants = fn(9827);
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_2 = createStyles.createStyles({
  filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH },
  mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH },
  messageSeparator: { height: 4 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export function MessageVerticalSeparator() {
  return <View style={closure_2().messageSeparator} />;
}
export function MediaVerticalSeparator() {
  return <View style={closure_2().mediaSeparator} />;
}
export function CardVerticalSeparator() {
  return <View style={closure_2().filesOrLinksSeparator} />;
}

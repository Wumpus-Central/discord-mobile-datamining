// === Module 17269: Separators ===

// Module 17269 (Separators)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const SearchConstants = fn(9285);
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_4 = createStyles.createStyles({ filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } });
fn(558);
let ReactCompilerGating = fn(558);
let obj2 = { filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageVerticalSeparator() {
  const cResult = c.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.messageSeparator) {
    const obj2 = { style: tmp2.messageSeparator };
    const tmp6 = <View style={tmp2.messageSeparator} />;
    cResult[0] = tmp2.messageSeparator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function MessageVerticalSeparator() {
  return <View style={closure_4().messageSeparator} />;
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaVerticalSeparator() {
  const cResult = c.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.mediaSeparator) {
    const obj2 = { style: tmp2.mediaSeparator };
    const tmp6 = <View style={tmp2.mediaSeparator} />;
    cResult[0] = tmp2.mediaSeparator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function MediaVerticalSeparator() {
  return <View style={closure_4().mediaSeparator} />;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = tmp4;
export const MediaVerticalSeparator = tmp5;
export const CardVerticalSeparator = ReactCompilerGating.isReactCompilerEnabled() ? (function CardVerticalSeparator() {
  const cResult = c.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.filesOrLinksSeparator) {
    const obj2 = { style: tmp2.filesOrLinksSeparator };
    const tmp6 = <View style={tmp2.filesOrLinksSeparator} />;
    cResult[0] = tmp2.filesOrLinksSeparator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function CardVerticalSeparator() {
  return <View style={closure_4().filesOrLinksSeparator} />;
});
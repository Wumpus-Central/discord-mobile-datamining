// === Module 16819: Separators ===

// Module 16819 (Separators)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let FILES_OR_LINKS_GAP_WIDTH;
let MEDIA_ITEM_GAP_WIDTH;
const View = react_native.View;
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchConstants);
const jsx = Fragment.jsx;
let obj = { filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH }, mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH }, messageSeparator: { height: 4 } };
let closure_4 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.messageSeparator) {
    const tmp6 = <View style={tmp2.messageSeparator} />;
    cResult[0] = tmp2.messageSeparator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => <View style={closure_4().messageSeparator} />);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.mediaSeparator) {
    const tmp6 = <View style={tmp2.mediaSeparator} />;
    cResult[0] = tmp2.mediaSeparator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => <View style={closure_4().mediaSeparator} />);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.filesOrLinksSeparator) {
    const tmp6 = <View style={tmp2.filesOrLinksSeparator} />;
    cResult[0] = tmp2.filesOrLinksSeparator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => <View style={closure_4().filesOrLinksSeparator} />);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = tmp4;
export const MediaVerticalSeparator = tmp5;
export const CardVerticalSeparator = tmp6;
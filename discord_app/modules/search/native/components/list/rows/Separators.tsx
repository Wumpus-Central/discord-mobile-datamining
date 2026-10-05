// discord_app/modules/search/native/components/list/rows/Separators.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import react from "../../../../../../../_runtime/00019_react.js";
import SearchConstants from "../../../../SearchConstants.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let FILES_OR_LINKS_GAP_WIDTH;
let MEDIA_ITEM_GAP_WIDTH;
const View = react_native.View;
({ MEDIA_ITEM_GAP_WIDTH, FILES_OR_LINKS_GAP_WIDTH } = SearchConstants);
const jsx = Fragment.jsx;
let obj = {
  filesOrLinksSeparator: { height: FILES_OR_LINKS_GAP_WIDTH },
  mediaSeparator: { height: MEDIA_ITEM_GAP_WIDTH },
  messageSeparator: { height: 4 },
};
let closure_4 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => <View style={closure_4().messageSeparator} />;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => <View style={closure_4().mediaSeparator} />;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => <View style={closure_4().filesOrLinksSeparator} />;
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/Separators.tsx");

export const MessageVerticalSeparator = tmp4;
export const MediaVerticalSeparator = tmp5;
export const CardVerticalSeparator = tmp6;

// discord_app/modules/search/native/hooks/useFileOrLinkImageDimensions.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import SearchConstants from "../../SearchConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({
  FILES_OR_LINKS_GAP_WIDTH: c3,
  FILES_OR_LINKS_NUM_COLUMNS: closure_4,
  FILE_OR_LINK_IMAGE_RATIO: hasOwnProperty,
  SEARCH_LIST_HORIZONTAL_PADDING: metroRequire,
} = SearchConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react2;
      const cResult = obj.c(3);
      const diff = (arg0 - 2 * metroRequire - (React3 - 1) * _false) / React3 - 2;
      const result = diff * hasOwnProperty;
      if (cResult[0] === result) {
        let tmp4;
        if (cResult[1] === diff) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      size = { width: diff, height: result };
      cResult[0] = result;
      cResult[1] = diff;
      cResult[2] = size;
      tmp4 = size;
    }
  : (arg0) => {
      const diff = (arg0 - 2 * metroRequire - (React3 - 1) * _false) / React3 - 2;
      const result = diff * hasOwnProperty;
      const items = [result, diff];
      return react.useMemo(() => {
        size = { width: diff, height: result };
        return size;
      }, items);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export const useFileOrLinkImageDimensions = tmp3;

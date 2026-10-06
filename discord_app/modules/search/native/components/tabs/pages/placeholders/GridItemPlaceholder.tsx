// === Module 16839: GridItemPlaceholder ===

// Module 16839 (GridItemPlaceholder)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { imageContainer: obj2 };
obj2 = { flex: 1, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let height;
  let style;
  let width;
  const obj = react2;
  const cResult = obj.c(7);
  ({ width, height, style } = arg0);
  const tmp2 = closure_4();
  if (cResult[0] === height) {
    let tmp3;
    if (cResult[1] === width) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === style) {
      if (cResult[4] === tmp2.imageContainer) {
        let tmp4;
        if (cResult[5] === tmp3) {
          tmp4 = cResult[6];
        }
        return tmp4;
      }
    }
    const items = [tmp3, tmp2.imageContainer, style];
    const tmp7 = <View style={items} />;
    cResult[3] = style;
    cResult[4] = tmp2.imageContainer;
    cResult[5] = tmp3;
    cResult[6] = tmp7;
    tmp4 = tmp7;
  }
  size = { width, height };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = size;
  tmp3 = size;
}) : ((arg0) => {
  let height;
  let style;
  let width;
  ({ width, height, style } = arg0);
  const items = [{ width, height }, closure_4().imageContainer, style];
  return <View style={items} />;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default memoResult;
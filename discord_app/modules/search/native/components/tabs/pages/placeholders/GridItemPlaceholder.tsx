// === Module 16799: GridItemPlaceholder ===

// Module 16799 (GridItemPlaceholder)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { imageContainer: { flex: 1, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const obj3 = { flex: 1, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ width, height, style } = arg0);
  const tmp2 = closure_4();
  if (cResult[0] === height) {
    if (cResult[1] === width) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === style) {
      if (cResult[4] === tmp2.imageContainer) {
        if (cResult[5] === tmp3) {
          let tmp4 = cResult[6];
        }
        return tmp4;
      }
    }
    const obj2 = { style: null };
    const items = [tmp3, tmp2.imageContainer, style];
    obj2.style = items;
    const tmp7 = <View style={null} />;
    cResult[3] = style;
    cResult[4] = tmp2.imageContainer;
    cResult[5] = tmp3;
    cResult[6] = tmp7;
    tmp4 = tmp7;
  }
  const size = { width, height };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = size;
  tmp3 = size;
}) : ((arg0) => {
  ({ width, height, style } = arg0);
  const obj = { style: null };
  const items = [{ width, height }, closure_4().imageContainer, style];
  obj.style = items;
  return <View style={null} />;
}));
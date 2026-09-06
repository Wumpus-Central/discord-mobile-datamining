// === Module 16648: GridItemPlaceholder ===

// Module 16648 (GridItemPlaceholder)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { imageContainer: null };
obj = { flex: 1, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.imageContainer = obj;
let closure_2 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default noop.memo((arg0) => {
  ({ width, height, style } = arg0);
  const obj = { style: null };
  const items = [{ width, height }, closure_2().imageContainer, style];
  obj.style = items;
  return <View style={null} />;
});
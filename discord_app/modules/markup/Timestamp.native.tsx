// === Module 10259: Timestamp ===

// Module 10259 (Timestamp)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 10260 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
const obj2 = { timestamp: { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  const tmp = closure_4();
  let style = tmp.timestamp;
  if (style == null) {
    style = node.style;
  }
  const tmp2 = useFormattedTimestampDefault(node);
  return jsx(node(1177).LegacyText, {
    style,
    onPress() {
      ToastActionCreatorsDefault.open({ key: "TIMESTAMP", content: node.full });
    },
    children: useFormattedTimestampDefault(node)
  });
};
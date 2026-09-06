// === Module 10129: Timestamp ===

// Module 10129 (Timestamp)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import useFormattedTimestampDefault from "useFormattedTimestamp" /* 10130 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { timestamp: null };
createStyles = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.timestamp = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
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
  return jsx(node(1178).LegacyText, {
    style,
    onPress() {
      const obj = { key: "TIMESTAMP", content: node.full };
      obj.open(obj);
    },
    children: useFormattedTimestampDefault(node)
  });
};
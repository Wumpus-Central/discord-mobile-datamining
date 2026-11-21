// discord_app/modules/markup/Timestamp.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../toast/native/ToastActionCreators.tsx";
import useFormattedTimestampDefault from "useFormattedTimestamp.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4913);
let obj2 = {
  timestamp: { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  ({ style, variant, interactive } = node);
  if (interactive === undefined) {
    interactive = true;
  }
  const tmp = closure_4();
  const tmp3 = useFormattedTimestampDefault(node);
  if (interactive) {
    const fn = () => ToastActionCreatorsDefault.open("TIMESTAMP", { text: node.full });
  }
  if (null != variant) {
    const obj2 = { variant, color: "none", style: null, onPress: null, children: null };
    let timestamp2 = tmp.timestamp;
    if (timestamp2 == null) {
      timestamp2 = style;
    }
    obj2.style = timestamp2;
    obj2.onPress = fn;
    obj2.children = tmp3;
    let tmp4Result = jsx(node(5504).Text, { variant, color: "none", style: null, onPress: null, children: null });
  } else {
    let timestamp = tmp.timestamp;
    if (timestamp == null) {
      timestamp = style;
    }
    const obj = { style: timestamp, onPress: fn, children: tmp3 };
    tmp4Result = jsx(node(1186).LegacyText, { style: timestamp, onPress: fn, children: tmp3 });
  }
  return tmp4Result;
}

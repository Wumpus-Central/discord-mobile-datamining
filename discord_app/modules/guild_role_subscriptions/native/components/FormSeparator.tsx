// === Module 15217: FormSeparator ===

// Module 15217 (FormSeparator)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 }, separator: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.separator = size;
let closure_2 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default function FormSeparator(arg0) {
  ({ style, withoutMargins } = arg0);
  const tmp = closure_2();
  const items = [tmp.container, , ];
  let margins;
  if (!withoutMargins) {
    margins = tmp.margins;
  }
  let obj = { style: items, children: null };
  items[1] = margins;
  items[2] = style;
  obj = { style: tmp.separator };
  obj.children = <View style={tmp.separator} />;
  return <View style={tmp.separator} />;
};
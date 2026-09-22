// discord_app/modules/guild_role_subscriptions/native/components/FormSeparator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
const obj2 = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 }, separator: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.separator = size;
let closure_2 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default function FormSeparator(arg0) {
  ({ style, withoutMargins } = arg0);
  const tmp = closure_2();
  const items = [tmp.container, ,];
  let margins;
  if (!withoutMargins) {
    margins = tmp.margins;
  }
  const obj = { style: items, children: <View style={tmp.separator} /> };
  items[1] = margins;
  items[2] = style;
  return (
    <View style={items}>
      <View style={tmp.separator} />
    </View>
  );
}

// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_0 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4636);
let obj = { container: { height: PX_12 }, separator: null };
const obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.top = undefined;
obj.separator = obj3;
let closure_2 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default noop.memo(function MessagesItemSeperator() {
  const tmp = closure_2();
  const obj = { style: tmp.container, collapsable: false, children: <React style={tmp.separator} /> };
  return (
    <React style={tmp.container} collapsable={false}>
      <React style={tmp.separator} />
    </React>
  );
});
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;

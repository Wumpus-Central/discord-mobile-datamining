// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_0 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4560);
let obj = { container: { height: PX_12 }, separator: null };
obj = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = undefined;
obj.separator = obj;
let closure_2 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default noop.memo(function MessagesItemSeperator() {
  const tmp = closure_2();
  let obj = { style: tmp.container, collapsable: false, children: null };
  obj = { style: tmp.separator };
  obj.children = <React style={tmp.separator} />;
  return <React style={tmp.separator} />;
});
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;

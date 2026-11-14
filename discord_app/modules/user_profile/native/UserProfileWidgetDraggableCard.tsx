// discord_app/modules/user_profile/native/UserProfileWidgetDraggableCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj = { content: { gap: nativeDefault.space.PX_12 } };
let closure_4 = createStyles.createStyles(obj);
const obj3 = { gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetDraggableCard.tsx");

export default noop.memo(function UserProfileWidgetDraggableCard(arg0) {
  ({ children, contentRef, onContentLayout } = arg0);
  const obj = { radius: 12, children: null };
  const tmp = closure_4();
  obj.children = (
    <View ref={contentRef} onLayout={onContentLayout} style={closure_4().content} pointerEvents="none" accessible>
      {children}
    </View>
  );
  return jsx(Card.Card, { radius: 12, children: null });
});

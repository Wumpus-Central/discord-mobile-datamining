// discord_app/modules/user_profile/native/UserProfileWidgetDraggableCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import UserProfileCardTitleDefault from "UserProfileCardTitle.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4917);
let obj = { content: { gap: nativeDefault.space.PX_12 } };
let closure_6 = createStyles.createStyles(obj);
const obj3 = { gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetDraggableCard.tsx");

export default noop.memo(function UserProfileWidgetDraggableCard(title) {
  title = title.title;
  ({ titleLeadingIcon, children, contentRef, onContentLayout } = title);
  const obj = { ref: contentRef, onLayout: onContentLayout, style: closure_6().content, children: null };
  let tmp2Result = null != title;
  if (tmp2Result) {
    const obj2 = { title, leadingIcon: titleLeadingIcon };
    tmp2Result = React4(UserProfileCardTitleDefault, obj2);
  }
  const tmp = closure_6();
  items = [tmp2Result, children];
  obj.children = items;
  return React4(Card.Card, { radius: 12, draggable: true, children: hasOwnProperty(View, obj) });
});

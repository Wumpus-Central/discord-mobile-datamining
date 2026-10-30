// discord_app/modules/user_profile/native/UserProfileWidgetContainer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserProfileCardDefault from "UserProfileCard.tsx";
import UserProfileWidgetReportButtonDefault from "UserProfileWidgetReportButton.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { actions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetContainer.tsx");

export default function UserProfileWidgetContainer(style) {
  const userId = style.userId;
  ({ widget, title, actionButtons, disableInteraction } = style);
  ({ children, titleLeadingIcon } = style);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  let actions = closure_6();
  const items = [AuthenticationStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  const obj2 = { style: style.style, title: null, titleLeadingIcon: null, trailingAction: null, children: null };
  const obj = userId(504);
  const tmp = userId;
  if (title == null) {
    title = tmp(14919).getWidgetTitle(widget);
    const tmpResult = tmp(14919);
  }
  obj2.title = title;
  obj2.titleLeadingIcon = titleLeadingIcon;
  if (disableInteraction) {
    obj2.trailingAction = null;
    obj2.children = children;
    return <tmp6 {...obj2} />;
  } else if (stateFromStores) {
    let tmp4Result = null;
    if (null != actionButtons) {
      tmp4Result = null;
      if (actionButtons.length > 0) {
        const obj3 = { style: null, children: null };
        actions = actions.actions;
        obj3.style = actions;
        obj3.children = actionButtons;
        tmp4Result = <View style={null}>{null}</View>;
      }
    }
    let tmp4Result2 = tmp4Result;
  } else {
    const obj4 = { userId, widget };
    tmp4Result2 = jsx(UserProfileWidgetReportButtonDefault, { userId, widget });
  }
}

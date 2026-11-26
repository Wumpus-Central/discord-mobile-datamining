// discord_app/modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import UserProfileSharedStylesDefault from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import UserProfileWidgetsBoard from "../../../user_profile/native/UserProfileWidgetsBoard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  title: { lineHeight: 16, marginBottom: 8 },
  card: { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx",
);

export default function WidgetPreview(widget) {
  widget = widget.widget;
  const tmp = closure_6();
  const tmp3 = UserProfileSharedStylesDefault();
  let tmp5 = null;
  if (obj.isGameWidget(widget)) {
    tmp5 = null;
    if (widget.games.length > 0) {
      const obj2 = { userId: widget.userId, widget, disableInteraction: true, cardStyle: null };
      items = [tmp3.card, tmp.card];
      obj2.cardStyle = items;
      tmp5 = React4(UserProfileWidgetsBoard.WidgetSection, obj2);
    }
  }
  let tmp7 = null;
  if (null !== tmp5) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.SpsnDY);
    const items1 = [React4(Text_Text.Text, obj4), tmp5];
    obj3.children = items1;
    tmp7 = hasOwnProperty(View, obj3);
  }
  return tmp7;
}

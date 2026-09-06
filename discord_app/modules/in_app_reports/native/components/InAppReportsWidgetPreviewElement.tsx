// discord_app/modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import UserProfileGameWidgetTypes from "../../../user_profile/UserProfileGameWidgetTypes.tsx";
import UserProfilePersonalWidget from "../../../user_profile/UserProfilePersonalWidget.tsx";
import UserProfileSharedStylesDefault from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import UserProfilePersonalWidgetCardDefault from "../../../user_profile/native/UserProfilePersonalWidgetCard.tsx";
import UserProfileWidgetsBoard from "../../../user_profile/native/UserProfileWidgetsBoard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  title: { lineHeight: 16, marginBottom: 8 },
  card: null,
};
createStyles = { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
createStyles.card = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx",
);

export default function WidgetPreview(arg0) {
  ({ widget, userId } = arg0);
  const tmp = closure_6();
  const tmp4 = UserProfileSharedStylesDefault();
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    let obj = { userId, widget, disableInteraction: true, cardStyle: null };
    const items = [tmp4.card, tmp.card];
    obj.cardStyle = items;
    let tmp6 = React4(UserProfilePersonalWidgetCardDefault, obj);
  } else {
    tmp6 = null;
    if (tmp5Result.isGameWidget(widget)) {
      tmp6 = null;
      if (widget.games.length > 0) {
        obj = { userId, widget, disableInteraction: true, cardStyle: null };
        const items1 = [tmp4.card, tmp.card];
        obj.cardStyle = items1;
        tmp6 = React4(UserProfileWidgetsBoard.WidgetSection, obj);
      }
    }
    tmp5Result = UserProfileGameWidgetTypes;
  }
  let tmp9 = null;
  if (null !== tmp6) {
    const obj1 = { style: tmp.container, children: null };
    const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.SpsnDY).toUpperCase();
    const items2 = [React4(Text_Text.Text, obj2), tmp6];
    obj1.children = items2;
    tmp9 = hasOwnProperty(View, obj1);
    const str = intl.string(util.t.SpsnDY);
  }
  return tmp9;
}

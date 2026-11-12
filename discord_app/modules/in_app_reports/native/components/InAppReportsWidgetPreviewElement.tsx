// === Module 12017: InAppReportsWidgetPreviewElement ===

// Module 12017 (InAppReportsWidgetPreviewElement)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5866 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7290 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7294 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8540 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 12018 */;
import UserProfileWidgetsBoard from "UserProfileWidgetsBoard" /* 12041 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  ({ widget, userId } = arg0);
  const tmp = closure_6();
  const tmp4 = UserProfileSharedStylesDefault();
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj = { userId, widget, disableInteraction: true, cardStyle: null };
    items = [tmp4.card, tmp.card];
    obj.cardStyle = items;
    let tmp6 = React4(UserProfilePersonalWidgetCardDefault, obj);
  } else {
    tmp6 = null;
    if (tmp5Result.isGameWidget(widget)) {
      tmp6 = null;
      if (widget.games.length > 0) {
        const obj2 = { userId, widget, disableInteraction: true, cardStyle: null };
        const items1 = [tmp4.card, tmp.card];
        obj2.cardStyle = items1;
        tmp6 = React4(UserProfileWidgetsBoard.WidgetSection, obj2);
      }
    }
    tmp5Result = UserProfileGameWidgetTypes;
  }
  let tmp9 = null;
  if (null !== tmp6) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.SpsnDY);
    const items2 = [React4(Text_Text.Text, obj4), tmp6];
    obj3.children = items2;
    tmp9 = hasOwnProperty(View, obj3);
  }
  return tmp9;
};
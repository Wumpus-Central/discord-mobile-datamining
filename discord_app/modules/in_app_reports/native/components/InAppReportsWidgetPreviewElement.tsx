// === Module 8657: InAppReportsWidgetPreviewElement ===

// Module 8657 (InAppReportsWidgetPreviewElement)
import nativeDefault from "native" /* 576 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7630 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8241 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 8658 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: null };
createStyles = { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
createStyles.card = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

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
        tmp6 = React4(tmp5(8674).WidgetSection, obj);
      }
    }
    tmp5Result = tmp5(7623);
  }
  let tmp9 = null;
  if (null !== tmp6) {
    const obj1 = { style: tmp.container, children: null };
    const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    const intl = tmp5(1114).intl;
    obj2.children = intl.string(tmp5(1114).t.SpsnDY).toUpperCase();
    const items2 = [React4(tmp5(4556).Text, obj2), tmp6];
    obj1.children = items2;
    tmp9 = hasOwnProperty(View, obj1);
    const str = intl.string(tmp5(1114).t.SpsnDY);
  }
  return tmp9;
};
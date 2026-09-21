// === Module 8935: InAppReportsWidgetPreviewElement ===

// Module 8935 (InAppReportsWidgetPreviewElement)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7224 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7859 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7866 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8510 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 8936 */;
import UserProfileWidgetsBoard from "UserProfileWidgetsBoard" /* 8945 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  ({ widget, userId } = arg0);
  const tmp = closure_6();
  let SpsnDY = dependencyMap;
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsWidgetPreview", "text-xs/bold");
  const tmp5 = UserProfileSharedStylesDefault();
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj2 = { userId, widget, disableInteraction: true, cardStyle: null };
    const items = [tmp5.card, tmp.card];
    obj2.cardStyle = items;
    let tmp6 = React4(UserProfilePersonalWidgetCardDefault, obj2);
  } else {
    tmp6 = null;
    if (tmp2Result.isGameWidget(widget)) {
      tmp6 = null;
      if (widget.games.length > 0) {
        const obj3 = { userId, widget, disableInteraction: true, cardStyle: null };
        const items1 = [tmp5.card, tmp.card];
        obj3.cardStyle = items1;
        tmp6 = React4(UserProfileWidgetsBoard.WidgetSection, obj3);
      }
    }
    tmp2Result = UserProfileGameWidgetTypes;
  }
  if (null === tmp6) {
    return null;
  } else {
    const obj4 = { style: tmp.container, children: null };
    let Text = Text_Text.Text;
    if (null != typeConsolidationEyebrow.style) {
      const items2 = [tmp.title, typeConsolidationEyebrow.style];
      let title = items2;
    } else {
      title = tmp.title;
    }
    let obj5 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
    if (null != typeConsolidationEyebrow.style) {
      const intl2 = util.intl;
      SpsnDY = util.t.SpsnDY;
      let stringResult = intl2.string(SpsnDY);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.SpsnDY).toUpperCase();
      const str = intl.string(util.t.SpsnDY);
    }
    obj5.children = stringResult;
    Text = React4(Text, obj5);
    obj5 = [Text, tmp6];
    obj4.children = obj5;
    hasOwnProperty(View, obj4);
  }
};
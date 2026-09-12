// === Module 8780: InAppReportsWidgetPreviewElement ===

// Module 8780 (InAppReportsWidgetPreviewElement)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4632 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7082 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7725 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7732 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8357 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 8781 */;
import UserProfileWidgetsBoard from "UserProfileWidgetsBoard" /* 8797 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4636);
let createStyles = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: null };
createStyles = { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
createStyles.card = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  ({ widget, userId } = arg0);
  const tmp = closure_6();
  let SpsnDY = dependencyMap;
  let obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsWidgetPreview", "text-xs/bold");
  const tmp5 = UserProfileSharedStylesDefault();
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    obj = { userId, widget, disableInteraction: true, cardStyle: null };
    const items = [tmp5.card, tmp.card];
    obj.cardStyle = items;
    let tmp6 = React4(UserProfilePersonalWidgetCardDefault, obj);
  } else {
    tmp6 = null;
    if (tmp2Result.isGameWidget(widget)) {
      tmp6 = null;
      if (widget.games.length > 0) {
        obj = { userId, widget, disableInteraction: true, cardStyle: null };
        const items1 = [tmp5.card, tmp.card];
        obj.cardStyle = items1;
        tmp6 = React4(UserProfileWidgetsBoard.WidgetSection, obj);
      }
    }
    tmp2Result = UserProfileGameWidgetTypes;
  }
  if (null === tmp6) {
    return null;
  } else {
    const obj1 = { style: tmp.container, children: null };
    let Text = Text_Text.Text;
    if (null != typeConsolidationEyebrow.style) {
      const items2 = [tmp.title, typeConsolidationEyebrow.style];
      let title = items2;
    } else {
      title = tmp.title;
    }
    let obj2 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
    if (null != typeConsolidationEyebrow.style) {
      const intl2 = util.intl;
      SpsnDY = util.t.SpsnDY;
      let stringResult = intl2.string(SpsnDY);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.SpsnDY).toUpperCase();
      const str = intl.string(util.t.SpsnDY);
    }
    obj2.children = stringResult;
    Text = React4(Text, obj2);
    obj2 = [Text, tmp6];
    obj1.children = obj2;
    hasOwnProperty(View, obj1);
  }
};
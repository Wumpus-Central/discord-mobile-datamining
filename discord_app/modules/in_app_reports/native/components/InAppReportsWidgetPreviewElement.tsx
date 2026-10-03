// === Module 8308: InAppReportsWidgetPreviewElement ===

// Module 8308 (InAppReportsWidgetPreviewElement)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6469 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7113 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7116 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7913 */;
import UserProfileWidgetsBoard from "UserProfileWidgetsBoard" /* 8318 */;
import noop from "module_19" /* 19 */;

const UserProfilePersonalWidgetCardDefault = tmp5(8309);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ widget, userId } = arg0);
  let container = closure_6();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsWidgetPreview", "text-xs/bold");
  let tmp5 = importDefault;
  const tmp6 = UserProfileSharedStylesDefault();
  if (cResult[0] === tmp6) {
    if (cResult[1] === container) {
      if (cResult[2] === userId) {
        if (cResult[3] === widget) {
          if (null === cResult[4]) {
            return null;
          } else {
            if (cResult[5] === typeConsolidationEyebrow.style) {
              if (cResult[6] === container.title) {
                if (cResult[8] !== typeConsolidationEyebrow.style) {
                  if (null != typeConsolidationEyebrow.style) {
                    const intl2 = util.intl;
                    let stringResult = intl2.string(util.t.SpsnDY);
                  } else {
                    const intl = util.intl;
                    stringResult = intl.string(util.t.SpsnDY).toUpperCase();
                    const str = intl.string(util.t.SpsnDY);
                  }
                  cResult[8] = typeConsolidationEyebrow.style;
                  cResult[9] = stringResult;
                } else {
                  if (cResult[10] === typeConsolidationEyebrow.variant) {
                    if (cResult[11] === tmp13) {
                      if (cResult[12] === tmp15) {
                        let tmp18 = cResult[13];
                      }
                      if (cResult[14] === tmp7) {
                        if (cResult[15] === container.container) {
                        }
                      }
                      const obj3 = { style: container.container, children: null };
                      const items = [tmp18, tmp7];
                      obj3.children = items;
                      const tmp24 = hasOwnProperty(View, obj3);
                      cResult[14] = tmp7;
                      container = container.container;
                      cResult[15] = container;
                      cResult[16] = tmp18;
                      cResult[17] = tmp24;
                    }
                  }
                  const obj4 = { style: tmp13, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: cResult[9] };
                  const tmp20 = React4(Text_Text.Text, obj4);
                  cResult[10] = typeConsolidationEyebrow.variant;
                  cResult[11] = tmp13;
                  cResult[12] = cResult[9];
                  cResult[13] = tmp20;
                  tmp18 = tmp20;
                }
              }
            }
            if (null != typeConsolidationEyebrow.style) {
              const items1 = [container.title, typeConsolidationEyebrow.style];
              let title = items1;
            } else {
              title = container.title;
            }
            cResult[5] = typeConsolidationEyebrow.style;
            cResult[6] = container.title;
            cResult[7] = title;
          }
        }
      }
    }
  }
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    tmp5 = UserProfilePersonalWidgetCardDefault;
    const obj5 = { userId, widget, disableInteraction: true, cardStyle: null };
    const items2 = [tmp6.card, container.card];
    obj5.cardStyle = items2;
    let tmp8 = React4(tmp5, obj5);
  } else {
    tmp8 = null;
    if (tmpResult.isGameWidget(widget)) {
      tmp8 = null;
      if (widget.games.length > 0) {
        const obj6 = { userId, widget, disableInteraction: true, cardStyle: null };
        const items3 = [tmp6.card, container.card];
        obj6.cardStyle = items3;
        tmp8 = React4(UserProfileWidgetsBoard.WidgetSection, obj6);
      }
    }
    tmpResult = UserProfileGameWidgetTypes;
  }
  cResult[0] = tmp6;
  cResult[1] = container;
  cResult[2] = userId;
  cResult[3] = widget;
  cResult[4] = tmp8;
}) : ((arg0) => {
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
});
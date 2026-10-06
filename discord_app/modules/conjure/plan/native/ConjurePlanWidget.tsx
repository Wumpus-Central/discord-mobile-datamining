// === Module 16691: ConjurePlanWidget ===

// Module 16691 (ConjurePlanWidget)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7128 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7924 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 8626 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let applicationId;
  let id;
  let intl;
  let intl2;
  let items1;
  let rendererProps;
  let tmp11;
  let tmp15;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(16);
  ({ applicationId, rendererProps } = arg0);
  const tmp4 = closure_7();
  const tmp6 = UserProfileSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function p() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] !== applicationId) {
    const self = this;
    const self2 = this;
    const obj2 = { applicationId };
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj2);
    cResult[2] = applicationId;
    cResult[3] = applicationWidget;
    tmp11 = applicationWidget;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3753.ove4zH) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    const tmp17 = hasOwnProperty(Text, obj3);
    cResult[4] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === tmp6.card) {
    let tmp18;
    if (cResult[6] === tmp4.card) {
      tmp18 = cResult[7];
    }
    if (cResult[8] === rendererProps) {
      if (cResult[9] === tmp18) {
        if (cResult[10] === stateFromStores) {
          let tmp19;
          let tmp22;
          let tmp25;
          if (cResult[11] === tmp11) {
            tmp19 = cResult[12];
          }
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(_modDef3753.XcIrHx) };
            const Text2 = Text_Text.Text;
            intl2 = intl3.intl;
            const tmp24 = hasOwnProperty(Text2, obj4);
            cResult[13] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp22 = cResult[13];
          }
          if (cResult[14] !== tmp19) {
            const obj5 = { direction: "vertical", spacing: 4, children: items1 };
            items1 = [tmp15, tmp19, tmp22];
            const tmp27 = metroRequire(Stack_Stack.Stack, obj5);
            cResult[14] = tmp19;
            cResult[15] = tmp27;
            tmp25 = tmp27;
          } else {
            tmp25 = cResult[15];
          }
          return tmp25;
        }
      }
    }
    const obj6 = { userId: stateFromStores, widget: tmp11, rendererProps, cardStyle: tmp18 };
    const tmp21 = hasOwnProperty(UserProfileApplicationWidgetCardDefault, obj6);
    cResult[8] = rendererProps;
    cResult[9] = tmp18;
    cResult[10] = stateFromStores;
    cResult[11] = tmp11;
    cResult[12] = tmp21;
    tmp19 = tmp21;
  }
  const items2 = [tmp6.card, tmp4.card];
  cResult[5] = tmp6.card;
  cResult[6] = tmp4.card;
  cResult[7] = items2;
  tmp18 = items2;
}) : ((applicationId) => {
  let id;
  let intl;
  let intl2;
  let items2;
  let items3;
  applicationId = applicationId.applicationId;
  const rendererProps = applicationId.rendererProps;
  const tmp = closure_7();
  const tmp2 = UserProfileSharedStylesDefault();
  let obj = applicationId(504);
  const items = [AuthenticationStore];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const memo = react.useMemo(() => {
    const obj = { applicationId };
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj);
    return applicationWidget;
  }, items1);
  const obj2 = { direction: "vertical", spacing: 4, children: items2 };
  const Stack = applicationId(5600).Stack;
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3753.ove4zH) };
  const Text = applicationId(4892).Text;
  intl = applicationId(1126).intl;
  items2 = [closure_5(Text, obj3), , ];
  const obj4 = { userId: stateFromStores, widget: memo, rendererProps, cardStyle: items3 };
  items3 = [tmp2.card, tmp.card];
  items2[1] = closure_5(UserProfileApplicationWidgetCardDefault, obj4);
  const obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(_modDef3753.XcIrHx) };
  const Text2 = applicationId(4892).Text;
  intl2 = applicationId(1126).intl;
  items2[2] = closure_5(Text2, obj5);
  return closure_6(Stack, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanWidget.tsx");

export default tmp3;
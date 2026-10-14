// === Module 11943: ConjurePlanWidget ===

// Module 11943 (ConjurePlanWidget)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import Text_Text from "Text/Text" /* 5092 */;
import Stack_Stack from "Stack/Stack" /* 5382 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7332 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8375 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 11408 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5096);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanWidget.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanWidget(arg0) {
  const cResult = c.c(13);
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
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  if (cResult[2] !== applicationId) {
    const obj2 = { applicationId };
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj2);
    cResult[2] = applicationId;
    cResult[3] = applicationWidget;
    let tmp11 = applicationWidget;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(_modDef3849.ove4zH);
    const tmp19 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[4] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] === tmp6.card) {
    if (cResult[6] === tmp4.card) {
      let tmp20 = cResult[7];
    }
    if (cResult[8] === rendererProps) {
      if (cResult[9] === tmp20) {
        if (cResult[10] === stateFromStores) {
          if (cResult[11] === tmp11) {
            let tmp21 = cResult[12];
          }
          return tmp21;
        }
      }
    }
    const obj4 = { direction: "vertical", spacing: 4, children: null };
    const items1 = [tmp17, ];
    const obj5 = { userId: stateFromStores, widget: tmp11, rendererProps, cardStyle: tmp20 };
    items1[1] = hasOwnProperty(UserProfileApplicationWidgetCardDefault, obj5);
    obj4.children = items1;
    const tmp24 = timestampProducer(Stack_Stack.Stack, obj4);
    cResult[8] = rendererProps;
    cResult[9] = tmp20;
    cResult[10] = stateFromStores;
    cResult[11] = tmp11;
    cResult[12] = tmp24;
    tmp21 = tmp24;
  }
  const items2 = [tmp6.card, tmp4.card];
  cResult[5] = tmp6.card;
  cResult[6] = tmp4.card;
  cResult[7] = items2;
  tmp20 = items2;
  const tmpResult = initialize;
}) : (function ConjurePlanWidget(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = closure_7();
  const tmp2 = UserProfileSharedStylesDefault();
  const items = [AuthenticationStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => id.getId());
  const memo = noop.useMemo(() => {
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget({ applicationId });
    return applicationWidget;
  }, items1);
  const obj2 = { direction: "vertical", spacing: 4, children: null };
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = applicationId(1126).intl;
  obj3.children = intl.string(_modDef3849.ove4zH);
  const items2 = [closure_5(applicationId(5092).Text, obj3), ];
  const obj4 = { userId: stateFromStores, widget: memo, rendererProps: applicationId.rendererProps, cardStyle: null };
  const items3 = [tmp2.card, tmp.card];
  obj4.cardStyle = items3;
  items2[1] = closure_5(UserProfileApplicationWidgetCardDefault, obj4);
  obj2.children = items2;
  return closure_6(applicationId(5382).Stack, obj2);
});
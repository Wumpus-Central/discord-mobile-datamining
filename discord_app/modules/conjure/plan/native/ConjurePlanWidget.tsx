// === Module 12423: ConjurePlanWidget ===

// Module 12423 (ConjurePlanWidget)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7706 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8730 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 11877 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4969);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanWidget.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanWidget(arg0) {
  const cResult = c.c(12);
  ({ applicationId, rendererProps } = arg0);
  const tmp4 = closure_6();
  const tmp6 = UserProfileSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
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
  if (cResult[4] === tmp6.card) {
    if (cResult[5] === tmp4.card) {
      let tmp17 = cResult[6];
    }
    if (cResult[7] === rendererProps) {
      if (cResult[8] === tmp17) {
        if (cResult[9] === stateFromStores) {
          if (cResult[10] === tmp11) {
            let tmp18 = cResult[11];
          }
          return tmp18;
        }
      }
    }
    const obj3 = { userId: stateFromStores, widget: tmp11, rendererProps, cardStyle: tmp17 };
    const tmp20 = jsx(UserProfileApplicationWidgetCardDefault, { userId: stateFromStores, widget: tmp11, rendererProps, cardStyle: tmp17 });
    cResult[7] = rendererProps;
    cResult[8] = tmp17;
    cResult[9] = stateFromStores;
    cResult[10] = tmp11;
    cResult[11] = tmp20;
    tmp18 = tmp20;
  }
  const items1 = [tmp6.card, tmp4.card];
  cResult[4] = tmp6.card;
  cResult[5] = tmp4.card;
  cResult[6] = items1;
  tmp17 = items1;
  const tmpResult = initialize;
}) : (function ConjurePlanWidget(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = closure_6();
  const tmp2 = UserProfileSharedStylesDefault();
  const items = [AuthenticationStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => id.getId());
  const memo = noop.useMemo(() => {
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget({ applicationId });
    return applicationWidget;
  }, items1);
  const obj2 = { userId: stateFromStores, widget: memo, rendererProps: applicationId.rendererProps, cardStyle: null };
  const items2 = [tmp2.card, tmp.card];
  obj2.cardStyle = items2;
  return jsx(UserProfileApplicationWidgetCardDefault, { userId: stateFromStores, widget: memo, rendererProps: applicationId.rendererProps, cardStyle: null });
});
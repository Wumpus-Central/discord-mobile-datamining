// === Module 12879: ConjurePlanWidget ===

// Module 12879 (ConjurePlanWidget)
import nativeDefault from "native" /* 575 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7901 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8938 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12394 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanWidget.tsx");

export default function ConjurePlanWidget(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = closure_6();
  const tmp2 = UserProfileSharedStylesDefault();
  items = [AuthenticationStore];
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
};
// discord_app/modules/conjure/plan/native/ConjurePlanWidget.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UserProfileApplicationWidgetTypes from "../../../user_profile/UserProfileApplicationWidgetTypes.tsx";
import UserProfileSharedStylesDefault from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import UserProfileApplicationWidgetCardDefault from "../../../user_profile/native/UserProfileApplicationWidgetCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanWidget.tsx");

export default function ConjurePlanWidget(applicationId) {
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
  return jsx(UserProfileApplicationWidgetCardDefault, {
    userId: stateFromStores,
    widget: memo,
    rendererProps: applicationId.rendererProps,
    cardStyle: null,
  });
}

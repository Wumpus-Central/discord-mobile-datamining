// discord_app/modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageStore from "../../../../stores/MessageStore.tsx";

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx",
);

export default function DeleteMessageElement(message) {
  message = message.message;
  const reportId = message.reportId;
  let stateFromStores;
  const tmp = stateFromStores(noop.useState(false), 2);
  dependencyMap = tmp[1];
  const items = [MessageStore];
  const items1 = [message];
  stateFromStores = message(504).useStateFromStores(
    items,
    () => null == MessageStore.getMessage(message.getChannelId(), message.id),
    items1,
  );
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    closure_2(stateFromStores);
  }, items2);
  const items3 = [message, reportId];
  const callback = noop.useCallback(() => {
    closure_2(true);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
      report_id: reportId,
    });
    const obj2 = { report_id: reportId };
    MessageActionCreatorsDefault.deleteMessage(message.getChannelId(), message.id);
  }, items3);
  let obj2 = {
    title: null,
    disabledTitle: null,
    description: null,
    disabled: null,
    variant: "danger",
    onPress: null,
    icon: null,
  };
  let obj = message(504);
  const intl = message(1115).intl;
  obj2.title = intl.string(message(1115).t.c9BHL9);
  const intl2 = message(1115).intl;
  obj2.disabledTitle = intl2.string(message(1115).t.AT2KSd);
  const intl3 = message(1115).intl;
  obj2.description = intl3.string(message(1115).t.dK8S0w);
  obj2.disabled = tmp[0];
  obj2.onPress = callback;
  obj2.icon = jsx(message(4786).TrashIcon, { color: "text-feedback-critical" });
  return jsx(reportId(12450), {
    title: null,
    disabledTitle: null,
    description: null,
    disabled: null,
    variant: "danger",
    onPress: null,
    icon: null,
  });
}

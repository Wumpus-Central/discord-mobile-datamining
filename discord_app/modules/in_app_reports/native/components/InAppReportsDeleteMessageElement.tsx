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
  let obj = message(504);
  const items = [MessageStore];
  const items1 = [message];
  stateFromStores = obj.useStateFromStores(
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
    const obj = { report_id: reportId };
    obj.trackWithMetadata(AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, obj);
    MessageActionCreatorsDefault.deleteMessage(message.getChannelId(), message.id);
  }, items3);
  obj = {
    title: null,
    disabledTitle: null,
    description: null,
    disabled: null,
    variant: "danger",
    onPress: null,
    icon: null,
  };
  const intl = message(1114).intl;
  obj.title = intl.string(message(1114).t.c9BHL9);
  const intl2 = message(1114).intl;
  obj.disabledTitle = intl2.string(message(1114).t.AT2KSd);
  const intl3 = message(1114).intl;
  obj.description = intl3.string(message(1114).t.dK8S0w);
  obj.disabled = tmp[0];
  obj.onPress = callback;
  obj.icon = jsx(message(4518).TrashIcon, { color: "text-feedback-critical" });
  return jsx(reportId(9051), {
    title: null,
    disabledTitle: null,
    description: null,
    disabled: null,
    variant: "danger",
    onPress: null,
    icon: null,
  });
}

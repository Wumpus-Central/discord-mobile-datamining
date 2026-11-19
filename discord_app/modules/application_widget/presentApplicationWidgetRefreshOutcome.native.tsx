// === Module 10281: presentApplicationWidgetRefreshOutcome ===

// Module 10281 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5473 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5474 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 10282 */;
import RetryIcon from "RetryIcon" /* 10283 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    ToastActionCreatorsDefault.open("APPLICATION_WIDGET_REFRESH", obj2);
    const tmpResult = ToastActionCreatorsDefault;
  } else {
    ToastUtils.presentError(text);
  }
};
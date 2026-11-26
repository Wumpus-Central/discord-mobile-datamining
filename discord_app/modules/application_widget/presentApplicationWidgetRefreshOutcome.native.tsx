// === Module 14671: presentApplicationWidgetRefreshOutcome ===

// Module 14671 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5724 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import RetryIcon from "RetryIcon" /* 10685 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 14672 */;
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
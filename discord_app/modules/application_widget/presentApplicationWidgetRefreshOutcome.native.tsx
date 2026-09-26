// === Module 12454: presentApplicationWidgetRefreshOutcome ===

// Module 12454 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4527 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import RetryIcon from "RetryIcon" /* 9640 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12455 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { key: "APPLICATION_WIDGET_REFRESH", content: text, IconComponent: RetryIcon.RetryIcon };
    ToastActionCreatorsDefault.open(obj2);
    const tmpResult = ToastActionCreatorsDefault;
  } else {
    ToastUtils.presentError(text);
  }
};
// === Module 11501: presentApplicationWidgetRefreshOutcome ===

// Module 11501 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4808 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import RetryIcon from "RetryIcon" /* 11303 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11502 */;
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
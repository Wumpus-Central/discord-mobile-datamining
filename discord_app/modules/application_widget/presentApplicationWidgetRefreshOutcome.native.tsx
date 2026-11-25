// === Module 14618: presentApplicationWidgetRefreshOutcome ===

// Module 14618 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5693 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
import RetryIcon from "RetryIcon" /* 10640 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 14619 */;
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
// === Module 12715: presentApplicationWidgetRefreshOutcome ===

// Module 12715 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4573 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import RetryIcon from "RetryIcon" /* 11377 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12716 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { key: "APPLICATION_WIDGET_REFRESH", content: text, IconComponent: RetryIcon.RetryIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    open(obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
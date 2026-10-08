// === Module 13205: presentApplicationWidgetRefreshOutcome ===

// Module 13205 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4765 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import RetryIcon from "RetryIcon" /* 12633 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 13206 */;
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
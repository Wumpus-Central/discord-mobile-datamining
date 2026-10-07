// discord_app/modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx
import ToastUtils from "../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../toast/native/ToastActionCreators.tsx";
import RetryIcon from "../../design/components/Icon/native/redesign/generated/RetryIcon.tsx";
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx",
);

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
}

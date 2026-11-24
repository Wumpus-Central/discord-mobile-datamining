// === Module 14827: turnOnConjureServerWidget ===

// Module 14827 (turnOnConjureServerWidget)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import toastUtils from "toastUtils" /* 5600 */;
import ApplicationUtils from "ApplicationUtils" /* 9970 */;
import conjureServerWidgetConsent from "conjureServerWidgetConsent" /* 14828 */;
import ActionSheetStore from "ActionSheetStore" /* 5132 */;

require = fn;
const ConjureServerWidgetConsentSheet = "ConjureServerWidgetConsentSheet";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_widgets/native/turnOnConjureServerWidget.tsx");

export default function turnOnConjureServerWidget(clientId, onTurnedOn) {
  const obj = conjureServerWidgetConsent;
  const conjureServerWidgetConsentRequest = obj.getConjureServerWidgetConsentRequest(clientId, { onTurnedOn, showToast: toastUtils.showToast });
  if (null != conjureServerWidgetConsentRequest) {
    if (ActionSheetStore.isOpen()) {
      const obj4 = ActionSheetActionCreatorsDefault;
      const tmp6 = asyncRequireImpl(7596, dependencyMap.paths);
      const obj3 = {};
      const merged = Object.assign(conjureServerWidgetConsentRequest);
      obj3.sheetKey = ConjureServerWidgetConsentSheet;
      obj3.disableHapticOnOpen = true;
      obj4.openLazy(tmp6, ConjureServerWidgetConsentSheet, obj3, "stack");
    } else {
      ApplicationUtils.openOAuth2Modal(conjureServerWidgetConsentRequest);
      const tmpResult = ApplicationUtils;
    }
  }
  const obj2 = { onTurnedOn, showToast: toastUtils.showToast };
};
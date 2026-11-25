// === Module 14949: turnOnConjureServerWidget ===

// Module 14949 (turnOnConjureServerWidget)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import toastUtils from "toastUtils" /* 5695 */;
import ApplicationUtils from "ApplicationUtils" /* 10069 */;
import conjureServerWidgetConsent from "conjureServerWidgetConsent" /* 14950 */;
import ActionSheetStore from "ActionSheetStore" /* 5227 */;

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
      const tmp6 = asyncRequireImpl(7695, dependencyMap.paths);
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
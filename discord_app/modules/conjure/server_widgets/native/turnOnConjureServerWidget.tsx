// === Module 15849: turnOnConjureServerWidget ===

// Module 15849 (turnOnConjureServerWidget)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import toastUtils from "toastUtils" /* 6010 */;
import ApplicationUtils from "ApplicationUtils" /* 11373 */;
import conjureServerWidgetConsent from "conjureServerWidgetConsent" /* 15850 */;
import ActionSheetStore from "ActionSheetStore" /* 5547 */;

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
      const tmp6 = asyncRequireImpl(7408, dependencyMap.paths);
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
// === Module 13225: confirmConjureYouBarPin ===

// Module 13225 (confirmConjureYouBarPin)
import DispatcherDefault from "Dispatcher" /* 572 */;
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import useAlertStore from "useAlertStore" /* 6092 */;
import PinIcon from "PinIcon" /* 11109 */;
import PinUprightSlashIcon2 from "PinUprightSlashIcon" /* 13226 */;
import noop from "module_19" /* 19 */;

require = fn;
function ConjureYouBarPinAlert(pin) {
  pin = pin.pin;
  let intl = pin(1113).intl;
  let tmp5 = _modDef4026;
  if (pin) {
    let D9HywZ = tmp5.M0Nuhc;
    let tmp6 = importDefault;
  } else {
    D9HywZ = tmp5.D9HywZ;
    tmp6 = importDefault;
  }
  let obj = { title: intl.string(D9HywZ), content: null, actions: null };
  const intl2 = tmp2(1113).intl;
  const tmp6Result = tmp6(4026);
  obj.content = intl2.string(pin ? tmp6Result.nLv5dy : tmp6Result.f0k4Er);
  const intl3 = tmp2(1113).intl;
  const tmp6Result2 = tmp6(4026);
  let obj2 = { children: null };
  items = [
    closure_3(pin(6096).AlertActionButton, {
      variant: "primary",
      text: intl3.string(pin ? tmp6Result2.I9ZELO : tmp6Result2["7FCFOy"]),
      onPress: function confirm() {
        DispatcherDefault.dispatch({ type: "CONJURE_YOU_BAR_PIN_SET", pinned: pin });
        const obj2 = { type: "CONJURE_YOU_BAR_PIN_SET", pinned: pin };
        const intl = util.intl;
        const tmp5 = _modDef4026;
        const obj4 = { text: intl.string(pin ? tmp5["VM+k4c"] : tmp5["0EEfRN"]), icon: null };
        if (pin) {
          let PinUprightSlashIcon = PinIcon.PinIcon;
        } else {
          PinUprightSlashIcon = PinUprightSlashIcon2.PinUprightSlashIcon;
        }
        obj4.icon = PinUprightSlashIcon;
        ToastActionCreatorsDefault.open("CONJURE_YOU_BAR_PIN", obj4);
      }
    }),

  ];
  let obj4 = { variant: "secondary", text: null };
  const intl4 = tmp2(1113).intl;
  obj4.text = intl4.string(pin(1113).t["ETE/oC"]);
  items[1] = closure_3(pin(6096).AlertActionButton, obj4);
  obj2.children = items;
  obj.actions = closure_5(closure_4, obj2);
  return closure_3(pin(6096).AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/confirmConjureYouBarPin.tsx");

export default function confirmConjureYouBarPin(pin) {
  useAlertStore.openAlert("ConjureYouBarPin", React3(ConjureYouBarPinAlert, { pin }));
};
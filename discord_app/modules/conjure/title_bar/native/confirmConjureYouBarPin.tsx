// === Module 14638: confirmConjureYouBarPin ===

// Module 14638 (confirmConjureYouBarPin)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import useAlertStore from "useAlertStore" /* 5948 */;
import PinIcon from "PinIcon" /* 10935 */;
import PinUprightSlashIcon2 from "PinUprightSlashIcon" /* 14639 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureYouBarPinAlert(pin) {
  const cResult = pin(576).c(18);
  pin = pin.pin;
  if (cResult[0] !== pin) {
    function confirm() {
      DispatcherDefault.dispatch({ type: "CONJURE_YOU_BAR_PIN_SET", pinned: pin });
      const obj2 = { type: "CONJURE_YOU_BAR_PIN_SET", pinned: pin };
      const intl = util.intl;
      const tmp5 = _modDef3864;
      const obj4 = { text: intl.string(pin ? tmp5["VM+k4c"] : tmp5["0EEfRN"]), icon: null };
      if (pin) {
        let PinUprightSlashIcon = PinIcon.PinIcon;
      } else {
        PinUprightSlashIcon = PinUprightSlashIcon2.PinUprightSlashIcon;
      }
      obj4.icon = PinUprightSlashIcon;
      ToastActionCreatorsDefault.open("CONJURE_YOU_BAR_PIN", obj4);
    }
    cResult[0] = pin;
    cResult[1] = confirm;
    let tmp4 = confirm;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== pin) {
    let intl = tmp(1125).intl;
    const tmp7 = _modDef3864;
    const stringResult = intl.string(pin ? tmp7.M0Nuhc : tmp7.D9HywZ);
    cResult[2] = pin;
    cResult[3] = stringResult;
  } else if (cResult[4] !== pin) {
    const intl2 = tmp(1125).intl;
    const tmp12 = _modDef3864;
    const stringResult1 = intl2.string(pin ? tmp12.nLv5dy : tmp12.f0k4Er);
    cResult[4] = pin;
    cResult[5] = stringResult1;
  } else if (cResult[6] !== pin) {
    const intl3 = tmp(1125).intl;
    const tmp17 = _modDef3864;
    const stringResult2 = intl3.string(pin ? tmp17.I9ZELO : tmp17["7FCFOy"]);
    cResult[6] = pin;
    cResult[7] = stringResult2;
  } else {
    if (cResult[8] === tmp4) {
      if (cResult[9] === tmp15) {
        let tmp20 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { variant: "secondary", text: null };
        const intl4 = tmp(1125).intl;
        obj2.text = intl4.string(tmp(1125).t["ETE/oC"]);
        const tmp26 = closure_3(tmp(5952).AlertActionButton, obj2);
        cResult[11] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[11];
      }
      if (cResult[12] !== tmp20) {
        let obj3 = { children: null };
        const items = [tmp20, tmp24];
        obj3.children = items;
        const tmp30 = closure_5(closure_4, obj3);
        cResult[12] = tmp20;
        cResult[13] = tmp30;
        let tmp27 = tmp30;
      } else {
        tmp27 = cResult[13];
      }
      if (cResult[14] === tmp5) {
        if (cResult[15] === tmp10) {
          if (cResult[16] === tmp27) {
            let tmp31 = cResult[17];
          }
          return tmp31;
        }
      }
      let obj4 = { title: tmp5, content: tmp10, actions: tmp27 };
      const tmp33 = closure_3(tmp(5952).AlertModal, obj4);
      cResult[14] = tmp5;
      cResult[15] = tmp10;
      cResult[16] = tmp27;
      cResult[17] = tmp33;
      tmp31 = tmp33;
    }
    const obj5 = { variant: "primary", text: cResult[7], onPress: tmp4 };
    const tmp22 = closure_3(tmp(5952).AlertActionButton, obj5);
    cResult[8] = tmp4;
    cResult[9] = cResult[7];
    cResult[10] = tmp22;
    tmp20 = tmp22;
  }
  let obj = pin(576);
}) : (function ConjureYouBarPinAlert(pin) {
  pin = pin.pin;
  let intl = pin(1125).intl;
  let tmp5 = _modDef3864;
  if (pin) {
    let D9HywZ = tmp5.M0Nuhc;
    let tmp6 = importDefault;
  } else {
    D9HywZ = tmp5.D9HywZ;
    tmp6 = importDefault;
  }
  let obj = { title: intl.string(D9HywZ), content: null, actions: null };
  const intl2 = tmp2(1125).intl;
  const tmp6Result = tmp6(3864);
  obj.content = intl2.string(pin ? tmp6Result.nLv5dy : tmp6Result.f0k4Er);
  const intl3 = tmp2(1125).intl;
  const tmp6Result2 = tmp6(3864);
  let obj2 = { children: null };
  const items = [
    closure_3(pin(5952).AlertActionButton, {
      variant: "primary",
      text: intl3.string(pin ? tmp6Result2.I9ZELO : tmp6Result2["7FCFOy"]),
      onPress: function confirm() {
        DispatcherDefault.dispatch({ type: "CONJURE_YOU_BAR_PIN_SET", pinned: pin });
        const obj2 = { type: "CONJURE_YOU_BAR_PIN_SET", pinned: pin };
        const intl = util.intl;
        const tmp5 = _modDef3864;
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
  const intl4 = tmp2(1125).intl;
  obj4.text = intl4.string(pin(1125).t["ETE/oC"]);
  items[1] = closure_3(pin(5952).AlertActionButton, obj4);
  obj2.children = items;
  obj.actions = closure_5(closure_4, obj2);
  return closure_3(pin(5952).AlertModal, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/confirmConjureYouBarPin.tsx");

export default function confirmConjureYouBarPin(pin) {
  useAlertStore.openAlert("ConjureYouBarPin", React3(closure_6, { pin }));
};
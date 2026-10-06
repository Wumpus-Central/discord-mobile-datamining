// === Module 13704: ActivateDeviceModal ===

// Module 13704 (ActivateDeviceModal)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let userCode;

function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
const jsx = Fragment.jsx;
const constants = { ACTIVATE_DEVICE: "activate-device" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userCode) => {
  let tmp4;
  let tmp6;
  let tmp8;
  const obj = userCode(576);
  const cResult = obj.c(5);
  userCode = userCode.userCode;
  if (cResult[0] !== userCode) {
    function onClose() {
      const obj = onClose(closure_1_2[2]);
      return obj.hideModal();
    }
    const obj2 = {};
    const obj3 = {
      fullscreen: true,
      headerTitle,
      headerLeft() {
          let intl;
          const obj = { source: closure_2_1(closure_2_2[4]), onPress: onClose, accessibilityLabel: intl.string(userCode(closure_2_2[5]).t.cpT0Cq) };
          const HeaderActionButton = userCode(closure_2_2[3]).HeaderActionButton;
          intl = userCode(closure_2_2[5]).intl;
          return closure_2_4(HeaderActionButton, obj);
        },
      headerRight,
      render() {
          const obj = { onClose, prefilledUserCode };
          return closure_2_4(userCode(closure_2_2[6]).ActivateDevice, obj);
        }
    };
    obj2[constants.ACTIVATE_DEVICE] = obj3;
    cResult[0] = userCode;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(userCode(1126).t["13/7kX"]);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const tmp11 = jsx(userCode(6503).Navigator, { screens: tmp4, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: tmp6 });
    cResult[3] = tmp4;
    cResult[4] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((userCode) => {
  userCode = userCode.userCode;
  const items = [userCode];
  const memo = react.useMemo(() => {
    function onClose() {
      const obj = onClose(closure_1_2[2]);
      return obj.hideModal();
    }
    let obj = {
      fullscreen: true,
      headerTitle,
      headerLeft() {
        let intl;
        const obj = { source: closure_2_1(closure_2_2[4]), onPress: onClose, accessibilityLabel: intl.string(userCode(closure_2_2[5]).t.cpT0Cq) };
        const HeaderActionButton = userCode(closure_2_2[3]).HeaderActionButton;
        intl = userCode(closure_2_2[5]).intl;
        return closure_2_4(HeaderActionButton, obj);
      },
      headerRight,
      render() {
        const obj = { onClose, prefilledUserCode };
        return closure_2_4(userCode(closure_2_2[6]).ActivateDevice, obj);
      }
    };
    return { [closure_2_5.ACTIVATE_DEVICE]: obj };
  }, items);
  const Navigator = userCode(6503).Navigator;
  let intl = userCode(1126).intl;
  return <Navigator screens={memo} initialRouteName={constants.ACTIVATE_DEVICE} headerBackTitle={intl.string(userCode(1126).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default tmp2;
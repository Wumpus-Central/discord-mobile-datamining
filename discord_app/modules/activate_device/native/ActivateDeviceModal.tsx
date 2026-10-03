// === Module 13684: ActivateDeviceModal ===

// Module 13684 (ActivateDeviceModal)
import _modDef4809 from "module_4809" /* 4809 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const constants = { ACTIVATE_DEVICE: "activate-device" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userCode) => {
  const cResult = userCode(576).c(5);
  userCode = userCode.userCode;
  if (cResult[0] !== userCode) {
    function onClose() {
      return onClose(dependencyMap[2]).hideModal();
    }
    const obj2 = {};
    const obj3 = {
      fullscreen: true,
      headerTitle() {
          return null;
        },
      headerLeft() {
          const obj = { source: _modDef4809, onPress: onClose, accessibilityLabel: null };
          const intl = userCode(1126).intl;
          obj.accessibilityLabel = intl.string(userCode(1126).t.cpT0Cq);
          return jsx(userCode(6880).HeaderActionButton, { source: _modDef4809, onPress: onClose, accessibilityLabel: null });
        },
      headerRight() {
          return null;
        },
      render() {
          return jsx(userCode(13685).ActivateDevice, { onClose, prefilledUserCode });
        }
    };
    obj2[constants.ACTIVATE_DEVICE] = obj3;
    cResult[0] = userCode;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["13/7kX"]);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj4 = { screens: tmp4, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: tmp6 };
    const tmp11 = jsx(tmp(6496).Navigator, { screens: tmp4, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: tmp6 });
    cResult[3] = tmp4;
    cResult[4] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((userCode) => {
  userCode = userCode.userCode;
  const items = [userCode];
  const memo = noop.useMemo(() => {
    const prefilledUserCode = userCode;
    function onClose() {
      return onClose(dependencyMap[2]).hideModal();
    }
    return {
      [closure_2_5.ACTIVATE_DEVICE]: {
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          const obj = { source: _modDef4809, onPress: onClose, accessibilityLabel: null };
          const intl = userCode(1126).intl;
          obj.accessibilityLabel = intl.string(userCode(1126).t.cpT0Cq);
          return jsx(userCode(6880).HeaderActionButton, { source: _modDef4809, onPress: onClose, accessibilityLabel: null });
        },
        headerRight() {
          return null;
        },
        render() {
          return jsx(userCode(13685).ActivateDevice, { onClose, prefilledUserCode });
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null };
  let intl = userCode(1126).intl;
  obj.headerBackTitle = intl.string(userCode(1126).t["13/7kX"]);
  return jsx(userCode(6496).Navigator, { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null });
});
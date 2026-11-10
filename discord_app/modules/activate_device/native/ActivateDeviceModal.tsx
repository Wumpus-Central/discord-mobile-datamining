// === Module 16038: ActivateDeviceModal ===

// Module 16038 (ActivateDeviceModal)
import _modDef8433 from "module_8433" /* 8433 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const constants = { ACTIVATE_DEVICE: "activate-device" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default function ActivateDeviceModal(userCode) {
  userCode = userCode.userCode;
  items = [userCode];
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
          const obj = { source: _modDef8433, onPress: onClose, accessibilityLabel: null };
          const intl = userCode(1113).intl;
          obj.accessibilityLabel = intl.string(userCode(1113).t.cpT0Cq);
          return jsx(userCode(7633).HeaderActionButton, { source: _modDef8433, onPress: onClose, accessibilityLabel: null });
        },
        headerRight() {
          return null;
        },
        render() {
          return jsx(userCode(16039).ActivateDevice, { onClose, prefilledUserCode });
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null };
  let intl = userCode(1113).intl;
  obj.headerBackTitle = intl.string(userCode(1113).t["13/7kX"]);
  return jsx(userCode(7234).Navigator, { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null });
};
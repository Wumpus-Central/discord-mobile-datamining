// === Module 13527: ActivateDeviceModal ===

// Module 13527 (ActivateDeviceModal)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_5 = { ACTIVATE_DEVICE: "activate-device" };
const result = require("set").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default function ActivateDeviceModal(userCode) {
  userCode = userCode.userCode;
  const items = [userCode];
  const memo = React.useMemo(() => {
    function onClose() {
      return onClose(table[2]).hideModal();
    }
    return {
      [closure_1_5.ACTIVATE_DEVICE]: {
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          const obj = { source: onClose(closure_1_2[4]), onPress: onClose, accessibilityLabel: null };
          const intl = callback(closure_1_2[5]).intl;
          obj[2] = intl.string(callback(closure_1_2[5]).t.cpT0Cq);
          return closure_1_4(callback(closure_1_2[3]).HeaderActionButton, obj);
        },
        headerRight() {
          return null;
        },
        render() {
          return closure_1_4(callback(closure_1_2[6]).ActivateDevice, { onClose, prefilledUserCode: callback });
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null };
  let intl = userCode(1236).intl;
  obj[2] = intl.string(userCode(1236).t["13/7kX"]);
  return jsx(userCode(5960).Navigator, { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null });
};
// discord_app/modules/activate_device/native/ActivateDeviceModal.tsx
import _modDef6992 from "../../../../_runtime/metro/06992__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const constants = { ACTIVATE_DEVICE: "activate-device" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default function ActivateDeviceModal(userCode) {
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
          const obj = { source: _modDef6992, onPress: onClose, accessibilityLabel: null };
          const intl = userCode(1114).intl;
          obj.accessibilityLabel = intl.string(userCode(1114).t.cpT0Cq);
          return jsx(userCode(7377).HeaderActionButton, {
            source: _modDef6992,
            onPress: onClose,
            accessibilityLabel: null,
          });
        },
        headerRight() {
          return null;
        },
        render() {
          return jsx(userCode(13875).ActivateDevice, { onClose, prefilledUserCode });
        },
      },
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null };
  let intl = userCode(1114).intl;
  obj.headerBackTitle = intl.string(userCode(1114).t["13/7kX"]);
  return jsx(userCode(7000).Navigator, {
    screens: memo,
    initialRouteName: constants.ACTIVATE_DEVICE,
    headerBackTitle: null,
  });
}

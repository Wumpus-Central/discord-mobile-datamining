// === Module 10524: transferToXbox ===

// Module 10524 (transferToXbox)
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils" /* 10515 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_8 = async function _transferToXbox() {
  closure_2 = tmp2;
  closure_129_0 = closure_0;
  await GameConsoleAlertUtilsDefault.maybeShowPTTAlert(constants.XBOX);
  await closure_130_2(closure_130_3[6]).disconnectRemote();
  await closure_130_2(closure_130_3[6]).getConnectNonce();
  closure_129_1 = value;
  closure_129_2 = closure_130_1(closure_130_3[7])(closure_129_0, { nonce: closure_129_1, forQRCode: false });
  await closure_130_5.openURL(closure_129_2);
  closure_130_1(closure_130_3[11])(closure_129_0.id, closure_130_6.XBOX);
  closure_130_2(closure_130_3[6]).waitForSession(closure_130_6.XBOX, closure_129_0.id, closure_129_1);
  closure_130_2(closure_130_3[6]);
  closure_130_2(closure_130_3[12]).stopOwnStream(false);
  await "HermesInternal";
  return closure_130_1(closure_130_3[8]).openLazy({
    importer() {
      return closure_1_0(paths[10])(paths[9], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_2_7(closure_0, {});
        };
      });
    },
    isDismissable: false
  });
};
const Linking = fn(17).Linking;
const PlatformTypes = fn(1071).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/transferToXbox.tsx");

export default function transferToXbox() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
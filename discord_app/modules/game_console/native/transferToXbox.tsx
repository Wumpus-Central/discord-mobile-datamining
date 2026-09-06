// === Module 9460: transferToXbox ===

// Module 9460 (transferToXbox)
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils" /* 9451 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_8 = async function _transferToXbox(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          c3 = 1;
          c4 = 1;
          const obj1 = { value: GameConsoleAlertUtilsDefault.maybeShowPTTAlert(constants.XBOX), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c3 = 2;
          c4 = 1;
          let obj3 = { value: closure_130_2(closure_130_3[6]).disconnectRemote(), done: false };
          return obj3;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          let obj9 = closure_130_2(closure_130_3[6]);
          c3 = 3;
          c4 = 1;
          const obj5 = { value: obj9.getConnectNonce(), done: false };
          return obj5;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_1 = value;
          const obj7 = { nonce: closure_129_1, forQRCode: false };
          closure_129_2 = closure_130_1(closure_130_3[7])(closure_129_0, obj7);
          c3 = 4;
          c4 = 1;
          const obj8 = { value: closure_130_5.canOpenURL(closure_129_2), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj9 = { value, done: true };
        return obj9;
      } else if (value) {
        closure_130_1(closure_130_3[11])(closure_129_0.id, closure_130_6.XBOX);
        obj3 = closure_130_2(closure_130_3[6]);
        obj3.waitForSession(closure_130_6.XBOX, closure_129_0.id, closure_129_1);
        obj4 = closure_130_2(closure_130_3[12]);
        obj4.stopOwnStream(false);
        closure_130_5.openURL(closure_129_2);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } else {
        const obj10 = {
          importer() {
                  return closure_1_0(paths[10])(paths[9], paths.paths).then((result) => {
                    closure_0 = result.default;
                    return (arg0) => {
                      const merged = Object.assign(arg0);
                      return closure_2_7(closure_0, {});
                    };
                  });
                }
        };
        c4 = 3;
        const obj11 = { value: closure_130_1(closure_130_3[8]).openLazy(obj10), done: true };
        return obj11;
      }
    } catch (tmp39) {
      c4 = tmp;
      throw tmp39;
    }
  }
};
const Linking = fn(17).Linking;
const PlatformTypes = fn(1074).PlatformTypes;
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
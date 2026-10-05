// === Module 9460: transferToXbox ===

// Module 9460 (transferToXbox)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils" /* 9451 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2, nonce;

let obj = function _transferToXbox() {
  obj = _asyncToGenerator(async (arg0) => {
    const user = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj10;
      let obj13;
      let obj16;
      let paths;
      let tmp44Result;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              nonce = undefined;
              closure_2 = undefined;
              c3 = 1;
              c4 = 1;
              const obj3 = { value: obj16.maybeShowPTTAlert(constants.XBOX), done: false };
              obj16 = GameConsoleAlertUtilsDefault;
              return obj3;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj7 = { value: obj13.disconnectRemote(), done: false };
              obj13 = closure_130_2(closure_130_3[6]);
              return obj7;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 3;
              c4 = 1;
              const obj9 = { value: obj10.getConnectNonce(), done: false };
              obj10 = closure_130_2(closure_130_3[6]);
              return obj9;
            }
          } else if (3 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              nonce = value;
              const obj12 = { nonce, forQRCode: false };
              closure_2 = closure_130_1(closure_130_3[7])(user, obj12);
              c3 = 4;
              c4 = 1;
              const obj14 = { value: closure_130_5.canOpenURL(closure_2), done: false };
              return obj14;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else if (value) {
            closure_130_1(closure_130_3[11])(user.id, closure_130_6.XBOX);
            const obj4 = closure_130_2(closure_130_3[6]);
            obj4.waitForSession(closure_130_6.XBOX, user.id, nonce);
            const obj5 = closure_130_2(closure_130_3[12]);
            obj5.stopOwnStream(false);
            closure_130_5.openURL(closure_2);
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else {
            c4 = 3;
            const obj17 = {
              importer() {
                      const promise = user(paths[10])(paths[9], paths.paths);
                      return promise.then((result) => {
                        let closure_0 = result.default;
                        return (arg0) => {
                          obj = {};
                          const merged = Object.assign(arg0);
                          return closure_2_7(closure_0, obj);
                        };
                      });
                    },
              isDismissable: false
            };
            const obj18 = { value: tmp44Result.openLazy(obj17), done: true };
            tmp44Result = closure_130_1(closure_130_3[8]);
            return obj18;
          }
        } catch (tmp38) {
          c4 = 3;
          throw tmp38;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Linking = react_native.Linking;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_console/native/transferToXbox.tsx");

export default function transferToXbox() {
  return obj(...arguments);
};
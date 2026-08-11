// discord_app/modules/game_console/native/transferToXbox.tsx
import set from "set";
import "noop";
import { Linking } from "get ActivityIndicator";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function _transferToXbox() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback2 = tmp5;
              let callback = tmp2;
              callback = undefined;
              callback2 = undefined;
              dependencyMap = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_1(10887).maybeShowPTTAlert(outer1_6.XBOX);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              dependencyMap = 2;
              c4 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = callback2(10884).disconnectRemote();
              return obj3;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              let obj9 = callback2(10884);
              dependencyMap = 3;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = obj9.getConnectNonce();
              return obj5;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              callback = arg1;
              const obj7 = { nonce: null, forQRCode: false };
              obj7[0] = callback;
              callback2 = callback(10896)(user, obj7);
              dependencyMap = 4;
              c4 = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = closure_5.canOpenURL(callback2);
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          } else if (arg1) {
            tmp47(10890)(user.id, constants.XBOX);
            obj3 = callback2(10884);
            obj3.waitForSession(constants.XBOX, user.id, callback);
            obj4 = callback2(4483);
            obj4.stopOwnStream(false);
            closure_5.openURL(callback2);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const obj10 = { importer: null };
            obj10[0] = function importer() {
              return callback(paths[10])(paths[9], paths.paths).then((arg0) => {
                let closure_0 = arg0.default;
                return () => { ... };
              });
            };
            c4 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = tmp47(4643).openLazy(obj10);
            return obj11;
          }
        } catch (tmp39) {
          c4 = tmp;
          throw tmp39;
        }
      }
    })();
  });
  const _transferToXbox = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("get ActivityIndicator").fileFinishedImporting("modules/game_console/native/transferToXbox.tsx");

export default function transferToXbox() {
  const self = this;
  const apply = _transferToXbox.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
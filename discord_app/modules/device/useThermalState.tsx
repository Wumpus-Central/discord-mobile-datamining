// === Module 8763: useThermalState ===

// Module 8763 (useThermalState)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import NativeModulesDefault from "NativeModules" /* 8720 */;

let obj = { NONE: 0, [0]: "NONE", LIGHT: 1, [1]: "LIGHT", MODERATE: 2, [2]: "MODERATE", SEVERE: 3, [3]: "SEVERE", CRITICAL: 4, [4]: "CRITICAL", EMERGENCY: 5, [5]: "EMERGENCY", SHUTDOWN: 6, [6]: "SHUTDOWN" };
const result = obj132.fileFinishedImporting("modules/device/useThermalState.tsx");

export default function useThermalState() {
  obj = NativeModulesDefault;
  const rawThermalState = obj.useRawThermalState();
  if (null == rawThermalState) {
    let UNHANDLED = obj.UNHANDLED;
  } else {
    UNHANDLED = rawThermalState;
    if (!obj3.isIOS()) {
      if (tmp11Result.isAndroid()) {
        if (obj.NONE === rawThermalState) {
          UNHANDLED = obj.NOMINAL;
        } else {
          if (tmp4.LIGHT !== rawThermalState) {
            if (tmp4.MODERATE !== rawThermalState) {
              if (tmp4.SEVERE === rawThermalState) {
                UNHANDLED = obj.SERIOUS;
              } else {
                if (tmp4.CRITICAL !== rawThermalState) {
                  if (tmp4.EMERGENCY !== rawThermalState) {
                    if (tmp4.SHUTDOWN !== rawThermalState) {
                      UNHANDLED = obj.UNHANDLED;
                    }
                  }
                }
                UNHANDLED = obj.CRITICAL;
              }
            }
          }
          UNHANDLED = obj.FAIR;
        }
      } else {
        UNHANDLED = obj.UNHANDLED;
      }
      tmp11Result = obj1322;
    }
    obj3 = obj1322;
  }
  return UNHANDLED;
};
export const ThermalStates = obj;
export const AndroidThermalStates = obj;
export const getThermalState = function getThermalState() {
  obj = NativeModulesDefault;
  const rawThermalState = obj.getRawThermalState();
  if (null == rawThermalState) {
    let UNHANDLED = obj.UNHANDLED;
  } else {
    UNHANDLED = rawThermalState;
    if (!obj3.isIOS()) {
      if (tmp11Result.isAndroid()) {
        if (obj.NONE === rawThermalState) {
          UNHANDLED = obj.NOMINAL;
        } else {
          if (tmp4.LIGHT !== rawThermalState) {
            if (tmp4.MODERATE !== rawThermalState) {
              if (tmp4.SEVERE === rawThermalState) {
                UNHANDLED = obj.SERIOUS;
              } else {
                if (tmp4.CRITICAL !== rawThermalState) {
                  if (tmp4.EMERGENCY !== rawThermalState) {
                    if (tmp4.SHUTDOWN !== rawThermalState) {
                      UNHANDLED = obj.UNHANDLED;
                    }
                  }
                }
                UNHANDLED = obj.CRITICAL;
              }
            }
          }
          UNHANDLED = obj.FAIR;
        }
      } else {
        UNHANDLED = obj.UNHANDLED;
      }
      tmp11Result = obj1322;
    }
    obj3 = obj1322;
  }
  return UNHANDLED;
};
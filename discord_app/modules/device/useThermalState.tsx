// === Module 11127: useThermalState ===

// Module 11127 (useThermalState)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5294 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ThermalStates = { UNHANDLED: -1, [-1]: "UNHANDLED", NOMINAL: 0, [0]: "NOMINAL", FAIR: 1, [1]: "FAIR", SERIOUS: 2, [2]: "SERIOUS", CRITICAL: 3, [3]: "CRITICAL" };
let obj2 = { NONE: 0, [0]: "NONE", LIGHT: 1, [1]: "LIGHT", MODERATE: 2, [2]: "MODERATE", SEVERE: 3, [3]: "SEVERE", CRITICAL: 4, [4]: "CRITICAL", EMERGENCY: 5, [5]: "EMERGENCY", SHUTDOWN: 6, [6]: "SHUTDOWN" };
const result = size.fileFinishedImporting("modules/device/useThermalState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useThermalState() {
  const obj = c;
  const cResult = obj.c(2);
  obj2 = ThermalUtilsDefault;
  const rawThermalState = obj2.useRawThermalState();
  if (cResult[0] !== rawThermalState) {
    if (null == rawThermalState) {
      let FAIR = obj.UNHANDLED;
    } else {
      FAIR = rawThermalState;
      if (!tmpResult.isIOS()) {
        if (!tmpResult2.isAndroid()) {
          FAIR = obj.UNHANDLED;
        }
        tmpResult2 = PlatformUtils;
      }
      if (obj2.NONE === rawThermalState) {
        FAIR = obj.NOMINAL;
      } else {
        if (tmp7.LIGHT !== rawThermalState) {
          if (tmp7.MODERATE !== rawThermalState) {
            if (tmp7.SEVERE === rawThermalState) {
              FAIR = obj.SERIOUS;
            } else {
              if (tmp7.CRITICAL !== rawThermalState) {
                if (tmp7.EMERGENCY !== rawThermalState) {
                  if (tmp7.SHUTDOWN !== rawThermalState) {
                    FAIR = obj.UNHANDLED;
                  }
                }
              }
              FAIR = obj.CRITICAL;
            }
          }
        }
        FAIR = obj.FAIR;
      }
      tmpResult = PlatformUtils;
    }
    cResult[0] = rawThermalState;
    cResult[1] = FAIR;
  } else {
    return cResult[1];
  }
}) : (function useThermalState() {
  const obj = ThermalUtilsDefault;
  const rawThermalState = obj.useRawThermalState();
  if (null == rawThermalState) {
    let UNHANDLED = obj.UNHANDLED;
  } else {
    UNHANDLED = rawThermalState;
    if (!obj3.isIOS()) {
      if (tmp11Result.isAndroid()) {
        if (obj2.NONE === rawThermalState) {
          UNHANDLED = obj.NOMINAL;
        } else {
          if (obj2.LIGHT !== rawThermalState) {
            if (obj2.MODERATE !== rawThermalState) {
              if (obj2.SEVERE === rawThermalState) {
                UNHANDLED = obj.SERIOUS;
              } else {
                if (obj2.CRITICAL !== rawThermalState) {
                  if (obj2.EMERGENCY !== rawThermalState) {
                    if (obj2.SHUTDOWN !== rawThermalState) {
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
      tmp11Result = PlatformUtils;
    }
    obj3 = PlatformUtils;
  }
  return UNHANDLED;
});
export { ThermalStates };
export const AndroidThermalStates = obj2;
export const getThermalState = function getThermalState() {
  const obj = ThermalUtilsDefault;
  const rawThermalState = obj.getRawThermalState();
  if (null == rawThermalState) {
    let UNHANDLED = obj.UNHANDLED;
  } else {
    UNHANDLED = rawThermalState;
    if (!obj3.isIOS()) {
      if (tmp11Result.isAndroid()) {
        if (obj2.NONE === rawThermalState) {
          UNHANDLED = obj.NOMINAL;
        } else {
          if (obj2.LIGHT !== rawThermalState) {
            if (obj2.MODERATE !== rawThermalState) {
              if (obj2.SEVERE === rawThermalState) {
                UNHANDLED = obj.SERIOUS;
              } else {
                if (obj2.CRITICAL !== rawThermalState) {
                  if (obj2.EMERGENCY !== rawThermalState) {
                    if (obj2.SHUTDOWN !== rawThermalState) {
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
      tmp11Result = PlatformUtils;
    }
    obj3 = PlatformUtils;
  }
  return UNHANDLED;
};
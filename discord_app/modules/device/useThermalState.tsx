// === Module 9025: useThermalState ===

// Module 9025 (useThermalState)
import react from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ThermalUtilsDefault from "ThermalUtils" /* 9017 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ThermalStates = { UNHANDLED: -1, [-1]: "UNHANDLED", NOMINAL: 0, [0]: "NOMINAL", FAIR: 1, [1]: "FAIR", SERIOUS: 2, [2]: "SERIOUS", CRITICAL: 3, [3]: "CRITICAL" };
let obj2 = { NONE: 0, [0]: "NONE", LIGHT: 1, [1]: "LIGHT", MODERATE: 2, [2]: "MODERATE", SEVERE: 3, [3]: "SEVERE", CRITICAL: 4, [4]: "CRITICAL", EMERGENCY: 5, [5]: "EMERGENCY", SHUTDOWN: 6, [6]: "SHUTDOWN" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  obj2 = ThermalUtilsDefault;
  const rawThermalState = obj2.useRawThermalState();
  if (cResult[0] !== rawThermalState) {
    let UNHANDLED;
    if (null == rawThermalState) {
      UNHANDLED = obj.UNHANDLED;
    } else {
      UNHANDLED = rawThermalState;
      const tmpResult = PlatformUtils;
      if (!tmpResult.isIOS()) {
        const tmpResult2 = PlatformUtils;
        if (tmpResult2.isAndroid()) {
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
      }
    }
    cResult[0] = rawThermalState;
    cResult[1] = UNHANDLED;
    tmp5 = UNHANDLED;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  let UNHANDLED;
  const obj = ThermalUtilsDefault;
  const rawThermalState = obj.useRawThermalState();
  if (null == rawThermalState) {
    UNHANDLED = obj.UNHANDLED;
  } else {
    UNHANDLED = rawThermalState;
    const obj3 = PlatformUtils;
    if (!obj3.isIOS()) {
      const tmp11Result = PlatformUtils;
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
    }
  }
  return UNHANDLED;
});
const result = size.fileFinishedImporting("modules/device/useThermalState.tsx");

export default tmp2;
export { ThermalStates };
export const AndroidThermalStates = obj2;
export const getThermalState = function getThermalState() {
  let UNHANDLED;
  const obj = ThermalUtilsDefault;
  const rawThermalState = obj.getRawThermalState();
  if (null == rawThermalState) {
    UNHANDLED = obj.UNHANDLED;
  } else {
    UNHANDLED = rawThermalState;
    const obj3 = PlatformUtils;
    if (!obj3.isIOS()) {
      const tmp11Result = PlatformUtils;
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
    }
  }
  return UNHANDLED;
};
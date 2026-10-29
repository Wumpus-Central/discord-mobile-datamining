// === Module 16212: useThermalState ===

// Module 16212 (useThermalState)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5942 */;
import ThermalStates from "ThermalStates" /* 16213 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function _getThermalState(rawThermalState) {
  if (null == rawThermalState) {
    return ThermalStates.ThermalStates.UNHANDLED;
  } else {
    if (obj2.isIOS()) {
      return rawThermalState;
    } else {
      if (tmp4Result.isAndroid()) {
        if (obj.NONE === rawThermalState) {
          return ThermalStates.ThermalStates.NOMINAL;
        } else {
          if (obj.LIGHT !== rawThermalState) {
            if (obj.MODERATE !== rawThermalState) {
              if (obj.SEVERE === rawThermalState) {
                return ThermalStates.ThermalStates.SERIOUS;
              } else {
                if (obj.CRITICAL !== rawThermalState) {
                  if (obj.EMERGENCY !== rawThermalState) {
                    if (obj.SHUTDOWN !== rawThermalState) {
                      return ThermalStates.ThermalStates.UNHANDLED;
                    }
                  }
                }
                return ThermalStates.ThermalStates.CRITICAL;
              }
            }
          }
          return ThermalStates.ThermalStates.FAIR;
        }
      } else {
        return ThermalStates.ThermalStates.UNHANDLED;
      }
      tmp4Result = PlatformUtils;
    }
    obj2 = PlatformUtils;
  }
}
const AndroidThermalStates = { NONE: 0, [0]: "NONE", LIGHT: 1, [1]: "LIGHT", MODERATE: 2, [2]: "MODERATE", SEVERE: 3, [3]: "SEVERE", CRITICAL: 4, [4]: "CRITICAL", EMERGENCY: 5, [5]: "EMERGENCY", SHUTDOWN: 6, [6]: "SHUTDOWN" };
const result = size.fileFinishedImporting("modules/device/useThermalState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useThermalState() {
  const cResult = c.c(2);
  const rawThermalState = ThermalUtilsDefault.useRawThermalState();
  if (cResult[0] !== rawThermalState) {
    const tmp5 = _getThermalState(rawThermalState);
    cResult[0] = rawThermalState;
    cResult[1] = tmp5;
    let tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useThermalState() {
  return _getThermalState(ThermalUtilsDefault.useRawThermalState());
});
export const ThermalStates = ThermalStates.ThermalStates;
export { AndroidThermalStates };
export function getThermalState() {
  return _getThermalState(ThermalUtilsDefault.getRawThermalState());
}
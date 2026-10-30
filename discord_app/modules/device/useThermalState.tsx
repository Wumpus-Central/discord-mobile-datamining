// discord_app/modules/device/useThermalState.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import ThermalUtilsDefault from "ThermalUtils.native.tsx";
import ThermalStates from "../../../discord_common/js/shared/constants/ThermalStates.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const AndroidThermalStates = {
  NONE: 0,
  [0]: "NONE",
  LIGHT: 1,
  [1]: "LIGHT",
  MODERATE: 2,
  [2]: "MODERATE",
  SEVERE: 3,
  [3]: "SEVERE",
  CRITICAL: 4,
  [4]: "CRITICAL",
  EMERGENCY: 5,
  [5]: "EMERGENCY",
  SHUTDOWN: 6,
  [6]: "SHUTDOWN",
};
const result = size.fileFinishedImporting("modules/device/useThermalState.tsx");

export default function useThermalState() {
  return _getThermalState(ThermalUtilsDefault.useRawThermalState());
}
export const ThermalStates = ThermalStates.ThermalStates;
export { AndroidThermalStates };
export function getThermalState() {
  return _getThermalState(ThermalUtilsDefault.getRawThermalState());
}

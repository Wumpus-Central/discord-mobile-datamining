// === Module 5842: classifyOutputDevice ===

// Module 5842 (classifyOutputDevice)
import Constants from "Constants" /* 5658 */;
import size from "module_2" /* 2 */;

const DEFAULT_DEVICE_ID = Constants.DEFAULT_DEVICE_ID;
const OutputDeviceClass = { HEADPHONES: "headphones", SPEAKERS: "speakers", BLUETOOTH_UNKNOWN: "bluetooth_unknown", BUILTIN_AMBIGUOUS: "builtin_ambiguous", UNKNOWN: "unknown" };
const result = size.fileFinishedImporting("modules/media_engine/classifyOutputDevice.tsx");

export default function classifyOutputDevice(disabled) {
  if (null != disabled) {
    if (!disabled.disabled) {
      if (disabled.id !== DEFAULT_DEVICE_ID) {
        const windowsEndpointFormFactor = disabled.windowsEndpointFormFactor;
        if ("Headphones" !== windowsEndpointFormFactor) {
          if ("Headset" !== windowsEndpointFormFactor) {
            if ("Speakers" !== windowsEndpointFormFactor) {
              if ("DigitalAudioDisplayDevice" !== windowsEndpointFormFactor) {
                if ("SPDIF" !== windowsEndpointFormFactor) {
                  const hardwareId = disabled.hardwareId;
                  let startsWithResult;
                  if (hardwareId != null) {
                    startsWithResult = hardwareId.startsWith("BTHENUM");
                  }
                  if (true === startsWithResult) {
                    return obj.BLUETOOTH_UNKNOWN;
                  } else {
                    const macosTransportType = disabled.macosTransportType;
                    if ("bluetooth" !== macosTransportType) {
                      if ("bluetoothle" !== macosTransportType) {
                        if ("hdmi" !== macosTransportType) {
                          if ("displayport" !== macosTransportType) {
                            if ("airplay" !== macosTransportType) {
                              if ("builtin" === macosTransportType) {
                                return obj.BUILTIN_AMBIGUOUS;
                              } else {
                                return obj.UNKNOWN;
                              }
                            }
                          }
                        }
                        return obj.SPEAKERS;
                      }
                    }
                    return obj.BLUETOOTH_UNKNOWN;
                  }
                }
              }
            }
            return obj.SPEAKERS;
          }
        }
        return obj.HEADPHONES;
      }
    }
  }
  return obj.UNKNOWN;
};
export { OutputDeviceClass };
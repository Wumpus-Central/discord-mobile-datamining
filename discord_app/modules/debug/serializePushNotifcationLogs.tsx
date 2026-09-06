// === Module 10192: serializePushNotificationLogs ===

// Module 10192 (serializePushNotificationLogs)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

({ DEVICE_TOKEN: obj1, DEVICE_VOIP_TOKEN: c3 } = ME);
const result = set.fileFinishedImporting("modules/debug/serializePushNotifcationLogs.tsx");

export default function serializePushNotificationLogs(arr) {
  const _require = arg1;
  if (0 === arr.length) {
    return "No logs";
  } else {
    const Storage = _require(510).Storage;
    let value = Storage.get(closure_2);
    const Storage2 = _require(510).Storage;
    value = Storage2.get(closure_3);
    let str2 = "";
    if (null != value) {
      let _HermesInternal = HermesInternal;
      str2 = "Device Token: " + value;
    }
    let str3 = "";
    if (null != value) {
      let _HermesInternal2 = HermesInternal;
      str3 = "Device Voip Token: " + value;
    }
    const mapped = arr.map((silent) => {
      let str = "Displayed";
      if (silent.silent) {
        str = "Silent";
      }
      if (closure_0) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + silent.channelId + " - " + silent.messageId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + silent.title + " - " + silent.content;
      }
      return "" + new Date(silent.receivedTimestamp).toISOString() + " [" + silent.type + "] " + str + " - " + combined;
    });
    const _HermesInternal3 = HermesInternal;
    return "" + str2 + "\n" + str3 + "\n\n" + mapped.join("\n");
  }
};
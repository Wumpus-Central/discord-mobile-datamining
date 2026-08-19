// === Module 10135: serializePushNotificationLogs ===

// Module 10135 (serializePushNotificationLogs)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

({ DEVICE_TOKEN: obj1, DEVICE_VOIP_TOKEN: c3 } = ME);
const result = obj132.fileFinishedImporting("modules/debug/serializePushNotifcationLogs.tsx");

export default function serializePushNotificationLogs(arr) {
  const _require = arg1;
  if (0 === arr.length) {
    return "No logs";
  } else {
    const Storage = _require(595).Storage;
    Storage.get(closure_2);
    const Storage2 = _require(595).Storage;
    const value = Storage2.get(closure_3);
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
    const mapped = arr.map((item, index) => {
      let str = "Displayed";
      if (item.silent) {
        str = "Silent";
      }
      if (closure_0) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + item.channelId + " - " + item.messageId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + item.title + " - " + item.content;
      }
      return "" + new Date(item.receivedTimestamp).toISOString() + " [" + item.type + "] " + str + " - " + combined;
    });
    const _HermesInternal3 = HermesInternal;
    return "" + str2 + "\n" + str3 + "\n\n" + mapped.join("\n");
  }
};
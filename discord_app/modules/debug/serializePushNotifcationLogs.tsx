// discord_app/modules/debug/serializePushNotifcationLogs.tsx
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ DEVICE_TOKEN: c2, DEVICE_VOIP_TOKEN: c3 } = Constants);
const result = size.fileFinishedImporting("modules/debug/serializePushNotifcationLogs.tsx");

export default function serializePushNotificationLogs(arr, arg1) {
  closure_0 = arg1;
  if (0 === arr.length) {
    return "No logs";
  } else {
    const Storage = Storage3.Storage;
    Storage.get(React2);
    const Storage2 = Storage3.Storage;
    value = Storage2.get(React3);
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
}

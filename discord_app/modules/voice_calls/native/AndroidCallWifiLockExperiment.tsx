// discord_app/modules/voice_calls/native/AndroidCallWifiLockExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-10-android-call-wifi-lock",
  defaultConfig: { acquireWifiLock: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { acquireWifiLock: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/AndroidCallWifiLockExperiment.tsx");

export function shouldAcquireCallWifiLock() {
  return config.getConfig({ location: "VoiceNotificationManager" }).acquireWifiLock;
}

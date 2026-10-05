// discord_app/modules/rpc/native/events/voiceSettingsEventHandlers.tsx
import NativeRPCHelpers from "../server/NativeRPCHelpers.tsx";
import VoiceSettingsEventsFactory from "../../server/events/VoiceSettingsEventsFactory.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const importDefaultResultResult = VoiceSettingsEventsFactory(
  NativeRPCHelpers.getDeprecatedVoiceSettings,
  NativeRPCHelpers.getVoiceSettings,
);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;

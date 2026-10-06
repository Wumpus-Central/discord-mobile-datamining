// === Module 14384: voiceSettingsEventHandlers ===

// Module 14384 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 9063 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14385 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
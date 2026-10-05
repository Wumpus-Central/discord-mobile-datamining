// === Module 14366: voiceSettingsEventHandlers ===

// Module 14366 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 9030 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14367 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
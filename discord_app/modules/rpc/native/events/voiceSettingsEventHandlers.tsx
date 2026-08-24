// discord_app/modules/rpc/native/events/voiceSettingsEventHandlers.tsx
import importDefaultResult from "../../server/events/VoiceSettingsEventsFactory.tsx";

const importDefaultResultResult = importDefaultResult(require("validateSocketClient").getDeprecatedVoiceSettings, require("validateSocketClient").getVoiceSettings);
const result = require("set").fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
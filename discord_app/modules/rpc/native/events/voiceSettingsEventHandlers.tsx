// discord_app/modules/rpc/native/events/voiceSettingsEventHandlers.tsx
import VoiceSettingsEventsFactory from "../../server/events/VoiceSettingsEventsFactory.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(
  fn(8966).getDeprecatedVoiceSettings,
  fn(8966).getVoiceSettings,
);

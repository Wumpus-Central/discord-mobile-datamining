// discord_app/modules/rpc/native/events/voiceSettingsEventHandlers.tsx
import VoiceSettingsEventsFactory from "../../server/events/VoiceSettingsEventsFactory.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(
  fn(9712).getDeprecatedVoiceSettings,
  fn(9712).getVoiceSettings,
);

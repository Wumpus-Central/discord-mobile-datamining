// discord_app/modules/voice_messages/VoiceMessageConstants.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/voice_messages/VoiceMessageConstants.tsx");

export const VoiceMessageAnimationState = { SENDING: 0, [0]: "SENDING", CANCELLING: 1, [1]: "CANCELLING", LOCKING: 2, [2]: "LOCKING", LOCKED: 3, [3]: "LOCKED" };
export const VOICE_RECORDING_MIN_DB = -100;
export const VOICE_RECORDING_MAX_DB = 0;
export const VOICE_RECORDING_MIN_DURATION_MILLIS = 500;
export const VOICE_RECORDING_MAX_DURATION_OFFSET = 500;
export const VOICE_RECORDING_MAX_DURATION_MILLIS = 1199500;
export const VOICE_RECORDING_WARN_DURATION_MILLIS = 1169500;
export const VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS = 1184500;
export const WAVEFORM_WAVE_MAX_VALUE = 255;
export const WAVEFORM_MAX_SAMPLES = 256;
export const PLAYBACK_RATES = [0.75, 1, 1.5, 2];
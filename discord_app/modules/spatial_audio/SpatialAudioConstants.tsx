// === Module 13997: DEFAULT_ROOM_SIZE ===

// Module 13997 (DEFAULT_ROOM_SIZE)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/spatial_audio/SpatialAudioConstants.tsx");

export const DEFAULT_ROOM_SIZE = 25;
export const DEFAULT_AUDIO_MIXER_SETTINGS = { enabled: true, spatialBlend: 1, reflectionsEnabled: false, roomSize: 25, distanceAttenuationEnabled: false, mode: "arc", spread: 2, arcAngle: 20, gridColumns: 3, gridSpacing: 1, buckets: 10, listenerHeight: 0.15, distance: 5 };
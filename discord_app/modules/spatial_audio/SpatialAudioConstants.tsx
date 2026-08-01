// === Module 12907: DEFAULT_ROOM_SIZE ===

// Module 12907 (DEFAULT_ROOM_SIZE)
const result = require("set").fileFinishedImporting("modules/spatial_audio/SpatialAudioConstants.tsx");

export const DEFAULT_ROOM_SIZE = 25;
export const DEFAULT_AUDIO_MIXER_SETTINGS = { enabled: true, spatialBlend: 1, reflectionsEnabled: false, roomSize: 25, mode: "arc", spread: 2, arcAngle: 20, gridColumns: 3, gridSpacing: 1, buckets: 10, listenerHeight: 0.15, distance: 5 };
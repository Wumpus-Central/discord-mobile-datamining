// === Module 5307: SpatialAudioConstants ===

// Module 5307 (SpatialAudioConstants)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioConstants.tsx");
const obj = { isSpatial: false, limiterEnabled: true, binaural: { spatialBlend: 1, bilinearInterpolation: false, hrtfVolume: 1, hrtfNormalization: false }, distanceAttenuation: { enabled: false, minDistance: 1 }, airAbsorption: { enabled: false, coefficients: { low: 0.0002, mid: 0.0017, high: 0.0182 } }, reflections: null };
const obj2 = { enabled: false, durationSeconds: 1, numRays: 4096, numBounces: 4, irradianceMinDistance: 1, binauralDecode: true, mixLevel: 1, room: { minCorner: { x: -8, y: -1.2, z: -6 }, maxCorner: { x: 12, y: 1.6, z: 10 }, floor: { absorption: { low: 0.15, mid: 0.5, high: 0.6 }, scattering: 0.5 }, ceiling: { absorption: { low: 0.5, mid: 0.75, high: 0.75 }, scattering: 0.1 }, walls: { absorption: { low: 0.2, mid: 0.25, high: 0.25 }, scattering: 0.6 } } };
obj.reflections = obj2;

export const DEFAULT_SPATIAL_AUDIO_OPTIONS = obj;
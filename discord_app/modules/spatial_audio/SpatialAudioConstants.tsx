// === Module 5243: SpatialAudioConstants ===

// Module 5243 (SpatialAudioConstants)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioConstants.tsx");
const obj = { isSpatial: false, limiterEnabled: true, binaural: { spatialBlend: 1, bilinearInterpolation: false, hrtfVolume: 1, hrtfNormalization: false }, distanceAttenuation: { enabled: false, minDistance: 1 }, airAbsorption: { enabled: false, coefficients: { low: 0.0002, mid: 0.0017, high: 0.0182 } }, reflections: null };
const obj2 = { enabled: false, durationSeconds: 2, numRays: 4096, numBounces: 32, irradianceMinDistance: 1, binauralDecode: true, room: { minCorner: { x: -2.5, y: -2.5, z: -2.5 }, maxCorner: { x: 2.5, y: 2.5, z: 2.5 }, floor: { absorption: { low: 0.24, mid: 0.69, high: 0.73 }, scattering: 0.05 }, ceiling: { absorption: { low: 0.05, mid: 0.07, high: 0.08 }, scattering: 0.05 }, walls: { absorption: { low: 0.1, mid: 0.2, high: 0.3 }, scattering: 0.05 } } };
obj.reflections = obj2;

export const DEFAULT_SPATIAL_AUDIO_OPTIONS = obj;
// === Module 16250: ConjureVoiceAcoustics ===

// Module 16250 (ConjureVoiceAcoustics)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/voice/ConjureVoiceAcoustics.tsx");

export function toSpatialAudioOverrides(acoustics) {
  ({ binaural, distance_attenuation, air_absorption, reflections } = acoustics);
  if (reflections != null) {
    const room = reflections.room;
  }
  let tmp;
  if (null != binaural) {
    const obj = { spatialBlend: null, bilinearInterpolation: null, hrtfVolume: null, hrtfNormalization: null };
    ({ spatial_blend: obj.spatialBlend, bilinear_interpolation: obj.bilinearInterpolation, hrtf_volume: obj.hrtfVolume, hrtf_normalization: obj.hrtfNormalization } = binaural);
    tmp = obj;
  }
  const obj2 = { binaural: tmp, distanceAttenuation: null, airAbsorption: null, reflections: null };
  let tmp2;
  if (null != distance_attenuation) {
    ({ enabled: obj3.enabled, min_distance: obj3.minDistance } = distance_attenuation);
    tmp2 = { enabled: null, minDistance: null };
    const obj11 = { enabled: null, minDistance: null };
  }
  obj2.distanceAttenuation = tmp2;
  let tmp3;
  if (null != air_absorption) {
    ({ enabled: obj4.enabled, coefficients: obj4.coefficients } = air_absorption);
    tmp3 = { enabled: null, coefficients: null };
    const obj12 = { enabled: null, coefficients: null };
  }
  obj2.airAbsorption = tmp3;
  let tmp4;
  if (null != reflections) {
    const obj13 = { enabled: null, durationSeconds: null, numRays: null, numBounces: null, irradianceMinDistance: null, binauralDecode: null, mixLevel: null, room: null };
    ({ enabled: obj5.enabled, duration_seconds: obj5.durationSeconds, num_rays: obj5.numRays, num_bounces: obj5.numBounces, irradiance_min_distance: obj5.irradianceMinDistance, binaural_decode: obj5.binauralDecode, mix_level: obj5.mixLevel } = reflections);
    let tmp5;
    if (null != room) {
      ({ min_corner: obj6.minCorner, max_corner: obj6.maxCorner, floor: obj6.floor, ceiling: obj6.ceiling, walls: obj6.walls } = room);
      tmp5 = { minCorner: null, maxCorner: null, floor: null, ceiling: null, walls: null };
      const obj14 = { minCorner: null, maxCorner: null, floor: null, ceiling: null, walls: null };
    }
    obj13.room = tmp5;
    tmp4 = obj13;
  }
  obj2.reflections = tmp4;
  return obj2;
}
export function getRoomError(reflections) {
  reflections = reflections.reflections;
  let min_corner;
  if (reflections != null) {
    const room = reflections.room;
    if (room != null) {
      min_corner = room.min_corner;
    }
  }
  const reflections2 = reflections.reflections;
  if (reflections2 != null) {
    const room2 = reflections2.room;
    if (room2 != null) {
      const max_corner = room2.max_corner;
    }
  }
  if (null != min_corner) {
    let str2 = "A room needs both min_corner and max_corner";
    if (null != min_corner) {
      str2 = "A room needs both min_corner and max_corner";
      if (null != max_corner) {
        if (min_corner.x < max_corner.x) {
          if (min_corner.y < max_corner.y) {
            let str3 = null;
          }
          str2 = str3;
        }
        str3 = "A room min_corner must be below its max_corner on every axis";
      }
    }
    let tmp2 = str2;
  } else {
    tmp2 = null;
  }
  return tmp2;
}
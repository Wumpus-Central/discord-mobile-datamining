// discord_app/modules/perceptual_volume/PerceptualVolumeUtils.tsx
let result = require("set").fileFinishedImporting("modules/perceptual_volume/PerceptualVolumeUtils.tsx");

export const perceptualToAmplitude = function perceptualToAmplitude(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 100;
  }
  if (0 === arg0) {
    return 0;
  } else {
    const result = arg0 / num;
    if (result < 1) {
      const _Math2 = Math;
      let powResult = Math.pow(result, 2.8);
    } else {
      const _Math = Math;
      powResult = Math.pow(10, 6 * (result - 1) / 20);
    }
    return powResult * num;
  }
};
export const amplitudeToPerceptual = function amplitudeToPerceptual(USER) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 100;
  }
  if (0 === USER) {
    return 0;
  } else {
    const result = USER / num;
    if (result < 1) {
      const _Math2 = Math;
      let powResult = Math.pow(result, 0.35714285714285715);
    } else {
      const _Math = Math;
      powResult = 20 * Math.log10(result) / 6 + 1;
    }
    return powResult * num;
  }
};
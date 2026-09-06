// _runtime/metro/00378__.js

export const fromOrigamiTensionAndFriction = function fromOrigamiTensionAndFriction(
  overshootClamping,
  overshootClamping,
) {
  return { stiffness: 3.62 * (overshootClamping - 30) + 194, damping: 3 * (overshootClamping - 8) + 25 };
};
export const fromBouncinessAndSpeed = function fromBouncinessAndSpeed(overshootClamping, overshootClamping) {
  const sum = 0.5 + (overshootClamping / 1.7 / 20) * 199.5;
  const result = overshootClamping / 1.7;
  if (sum <= 18) {
    const _Math5 = Math;
    const _Math6 = Math;
    const result1 = 0.0007 * Math.pow(sum, 3);
    let sum1 = result1 - 0.031 * Math.pow(sum, 2) + 0.64 * sum + 1.28;
  } else {
    if (18 < sum) {
      if (sum <= 44) {
        const _Math3 = Math;
        const _Math4 = Math;
        const result2 = 0.000044 * Math.pow(sum, 3);
        sum1 = result2 - 0.006 * Math.pow(sum, 2) + 0.36 * sum + 2;
      }
    }
    const _Math = Math;
    const _Math2 = Math;
    const result3 = 0.00000045 * Math.pow(sum, 3);
    sum1 = result3 - 0.000332 * Math.pow(sum, 2) + 0.1078 * sum + 5.84;
  }
  const result4 = (result / 20) * 0.8;
  const diff = 2 * result4 - result4 * result4;
  return { stiffness: 3.62 * (sum - 30) + 194, damping: 3 * (diff * 0.01 + (1 - diff) * sum1 - 8) + 25 };
};

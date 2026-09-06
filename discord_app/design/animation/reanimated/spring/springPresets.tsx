// === Module 4978: springPresets ===

// Module 4978 (springPresets)
import SUBTLE_SPRING from "SUBTLE_SPRING" /* 4979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/animation/reanimated/spring/springPresets.tsx");

export const SUBTLE_SPRING = SUBTLE_SPRING.SUBTLE_SPRING;
export const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
export const springSlow = { mass: 1, damping: 30, stiffness: 380 };
export const springUnclamped = { mass: 0.35, damping: 13, stiffness: 250 };
export const springUnclampedBounce = { mass: 0.3, damping: 13, stiffness: 250 };
export const springStandard = { mass: 0.35, damping: 13, stiffness: 250, overshootClamping: true };
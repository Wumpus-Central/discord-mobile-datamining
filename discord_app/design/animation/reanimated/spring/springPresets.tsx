// discord_app/design/animation/reanimated/spring/springPresets.tsx
import set from "../../../../../_runtime/00002_set.js";
import SUBTLE_SPRING from "../../../../../discord_common/js/packages/tokens/motion/generated/generated-definitions.tsx";

const result = set.fileFinishedImporting("design/animation/reanimated/spring/springPresets.tsx");

export const SUBTLE_SPRING = SUBTLE_SPRING.SUBTLE_SPRING;
export const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
export const springSlow = { mass: 1, damping: 30, stiffness: 380 };
export const springUnclamped = { mass: 0.35, damping: 13, stiffness: 250 };
export const springUnclampedBounce = { mass: 0.3, damping: 13, stiffness: 250 };
export const springStandard = { mass: 0.35, damping: 13, stiffness: 250, overshootClamping: true };

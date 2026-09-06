// discord_app/design/animation/reanimated/spring/springPresets.tsx
import SUBTLE_SPRING from "../../../../../discord_common/js/packages/tokens/motion/generated/generated-definitions.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/animation/reanimated/spring/springPresets.tsx");

export const SUBTLE_SPRING = SUBTLE_SPRING.SUBTLE_SPRING;
export const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
export const springSlow = { mass: 1, damping: 30, stiffness: 380 };
export const springUnclamped = { mass: 0.35, damping: 13, stiffness: 250 };
export const springUnclampedBounce = { mass: 0.3, damping: 13, stiffness: 250 };
export const springStandard = { mass: 0.35, damping: 13, stiffness: 250, overshootClamping: true };

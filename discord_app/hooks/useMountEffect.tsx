// discord_app/hooks/useMountEffect.tsx
import set from "../../_runtime/00002_set.js";
import useMountEffect from "../../discord_common/js/shared/hooks/useMountEffect.tsx";
import useMountEffectDefault from "../../discord_common/js/shared/hooks/useMountEffect.tsx";

const result = set.fileFinishedImporting("hooks/useMountEffect.tsx");

export default useMountEffectDefault;
export const useMountLayoutEffect = useMountEffect.useMountLayoutEffect;
export const useUnmountEffect = useMountEffect.useUnmountEffect;
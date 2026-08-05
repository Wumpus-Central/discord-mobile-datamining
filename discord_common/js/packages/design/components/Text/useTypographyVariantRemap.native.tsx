// discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx
import { context } from "../ManaContext/ManaContext.native.tsx";
import { remapTypographyVariant } from "typographyVariantRemap.tsx";
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = context.useManaContext().experiments;
  let enabledExperiments;
  if (experiments != null) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  const obj = context;
  const tmp = require;
  return remapTypographyVariant.remapTypographyVariant(enabledExperiments, variant, arg1);
};
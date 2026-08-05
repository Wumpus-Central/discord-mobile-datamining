import { context } from "../ManaContext/ManaContext.native.tsx";
import { remapTypographyVariant } from "typographyVariantRemap.tsx";
// discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = context /* context */.useManaContext().experiments;
  let enabledExperiments;
  if (experiments != null) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  const obj = context /* context */;
  const tmp = require;
  return remapTypographyVariant /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
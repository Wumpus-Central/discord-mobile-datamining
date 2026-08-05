// discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  const experiments = require("../ManaContext/ManaContext.native.tsx") /* context */.useManaContext().experiments;
  let enabledExperiments;
  if (experiments != null) {
    enabledExperiments = experiments.enabledExperiments;
  }
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  const obj = require("../ManaContext/ManaContext.native.tsx") /* context */;
  const tmp = require;
  return require("typographyVariantRemap.tsx") /* remapTypographyVariant */.remapTypographyVariant(enabledExperiments, variant, arg1);
};
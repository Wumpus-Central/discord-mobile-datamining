// discord_app/modules/intelligence_layer/search/IntelligenceSearchTypes.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/intelligence_layer/search/IntelligenceSearchTypes.tsx");

export const IntelligenceSearchStatus = {
  LOADING: "loading",
  LOADED: "loaded",
  EMPTY: "empty",
  NOT_QUALIFIED: "not_qualified",
  ERROR: "error",
};
export const IntelligenceSearchEmptyTreatment = {
  NONE: "none",
  DEFER: "defer",
  EMPTY_SCREEN: "empty_screen",
  HAS_ANSWER: "has_answer",
};

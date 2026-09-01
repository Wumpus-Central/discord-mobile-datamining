// discord_common/js/shared/shared-constants/ProgramCurrentState.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ProgramCurrentState.tsx");

export const ProgramCurrentState = {
  ACTIVE: "active",
  PAYMENT_PROCESSING: "payment_processing",
  PAYMENT_ERROR: "payment_error",
  PROGRAM_ROLLBACK: "program_rollback",
  PREMIUM_CHURNING: "premium_churning",
};

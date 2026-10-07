// discord_common/js/packages/apex/ApexTypes.tsx
import ExperimentsConstants from "../../shared/shared-constants/ExperimentsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { User: 1, [1]: "User", Installation: 2, [2]: "Installation", Guild: 3, [3]: "Guild" };
const result = size.fileFinishedImporting("../discord_common/js/packages/apex/ApexTypes.tsx");

export const UnitType = obj;
export const UnitTypeToKind = { [obj.User]: "user", [obj.Installation]: "installation", [obj.Guild]: "guild" };
export const ExperimentFlags = {
  IsOverride: 1,
  [1]: "IsOverride",
  ExposureTrackingEnabled: 2,
  [2]: "ExposureTrackingEnabled",
  DependentExperiment: 4,
  [4]: "DependentExperiment",
  UseAsEligibility: 8,
  [8]: "UseAsEligibility",
};
export const LOGGED_OUT_USER_ID_SENTINEL = ExperimentsConstants.LOGGED_OUT_USER_ID_SENTINEL;

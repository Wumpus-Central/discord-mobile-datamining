// === Module 1215: UnitType ===

// Module 1215 (UnitType)
import obj132 from "obj132" /* 2 */;
import LOGGED_OUT_USER_ID_SENTINEL from "LOGGED_OUT_USER_ID_SENTINEL" /* 1216 */;

const obj = { User: 1, [1]: "User", Installation: 2, [2]: "Installation", Guild: 3, [3]: "Guild" };
const result = obj132.fileFinishedImporting("../discord_common/js/packages/apex/ApexTypes.tsx");

export const UnitType = obj;
export const UnitTypeToKind = { [obj.User]: "user", [obj.Installation]: "installation", [obj.Guild]: "guild" };
export const ExperimentFlags = { IsOverride: 1, [1]: "IsOverride", ExposureTrackingEnabled: 2, [2]: "ExposureTrackingEnabled", DependentExperiment: 4, [4]: "DependentExperiment", UseAsEligibility: 8, [8]: "UseAsEligibility" };
export const LOGGED_OUT_USER_ID_SENTINEL = LOGGED_OUT_USER_ID_SENTINEL.LOGGED_OUT_USER_ID_SENTINEL;
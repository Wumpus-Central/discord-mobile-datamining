// === Module 14766: SafetyHubAccountStandingLabels ===

// Module 14766 (SafetyHubAccountStandingLabels)
import util from "util" /* 1114 */;
import SafetyHubModels from "SafetyHubModels" /* 8420 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[SafetyHubModels.AccountStandingState.ALL_GOOD] = util.t["/Idfao"];
obj[SafetyHubModels.AccountStandingState.LIMITED] = util.t.umleq4;
obj[SafetyHubModels.AccountStandingState.VERY_LIMITED] = util.t.WBtMHf;
obj[SafetyHubModels.AccountStandingState.AT_RISK] = util.t["7f+4Lg"];
obj[SafetyHubModels.AccountStandingState.SUSPENDED] = util.t["0OONGB"];
const result = size.fileFinishedImporting("modules/safety_hub/SafetyHubAccountStandingLabels.tsx");

export const ACCOUNT_STANDING_SHORT_STATUS = obj;
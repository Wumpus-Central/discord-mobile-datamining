// discord_app/modules/safety_hub/SafetyHubAccountStandingLabels.tsx
import set from "../../../_runtime/00002_set.js";
import getSystemLocale from "../../intl/index.native.tsx";
import ContentIdType from "SafetyHubModels.tsx";

const obj = {};
obj[ContentIdType.AccountStandingState.ALL_GOOD] = getSystemLocale.t["/Idfao"];
obj[ContentIdType.AccountStandingState.LIMITED] = getSystemLocale.t.umleq4;
obj[ContentIdType.AccountStandingState.VERY_LIMITED] = getSystemLocale.t.WBtMHf;
obj[ContentIdType.AccountStandingState.AT_RISK] = getSystemLocale.t["7f+4Lg"];
obj[ContentIdType.AccountStandingState.SUSPENDED] = getSystemLocale.t["0OONGB"];
const result = set.fileFinishedImporting("modules/safety_hub/SafetyHubAccountStandingLabels.tsx");

export const ACCOUNT_STANDING_SHORT_STATUS = obj;

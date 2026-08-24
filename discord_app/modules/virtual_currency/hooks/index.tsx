// discord_app/modules/virtual_currency/hooks/index.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/virtual_currency/hooks/index.tsx");
for (const key10018 in require("useFetchVirtualCurrencyBalance")) {
  let tmp3 = key10018;
  arg5[key10018] = require("useFetchVirtualCurrencyBalance")[key10018];
  continue;
}
for (const key10022 in require("useRedeemVirtualCurrency")) {
  let tmp4 = key10022;
  arg5[key10022] = require("useRedeemVirtualCurrency")[key10022];
  continue;
}
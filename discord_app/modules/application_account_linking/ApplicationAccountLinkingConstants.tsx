// discord_app/modules/application_account_linking/ApplicationAccountLinkingConstants.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/application_account_linking/ApplicationAccountLinkingConstants.tsx");

export const AuthorizeFlow = { RPC: "rpc", WEB: "web" };
export const AccountLinkingCampaignEndpoints = {
  ACCOUNT_LINKING_CAMPAIGNS: "/oauth2/account-linking-campaigns",
  ACCOUNT_LINKING_CAMPAIGN_DETECTABLE_APPS: "/oauth2/account-linking-campaigns/detectable-apps",
  ACCOUNT_LINKING_CAMPAIGN_DISMISS(arg0) {
    return "/oauth2/account-linking-campaigns/" + arg0 + "/dismiss";
  },
};
export const ApplicationAccountLinkingConstants = {
  ACTIVISION_APPLICATION_ID: "1526711602038968440",
  CALL_OF_DUTY_APPLICATION_ID: "1554868854029811803",
  IMGUI_APPLICATION_ID: "1412940519742636124",
  BLOONS_TD_BATTLES_2_APPLICATION_ID: "939116807078420520",
};

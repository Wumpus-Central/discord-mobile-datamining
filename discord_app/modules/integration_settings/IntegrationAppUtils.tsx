// discord_app/modules/integration_settings/IntegrationAppUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import util from "../../intl/index.native.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/integration_settings/IntegrationAppUtils.tsx");

export function integrationHasBot(application, integration) {
  let tmp = null != application.bot;
  if (tmp) {
    const scopes = integration.scopes;
    let flag;
    if (scopes != null) {
      flag = scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT);
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
}
export function integrationHasCommandsScope(integration) {
  const scopes = integration.scopes;
  let flag;
  if (scopes != null) {
    flag = scopes.includes(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function integrationHasCommands(application, integration, arg2) {
  const scopes = integration.scopes;
  let flag;
  if (scopes != null) {
    flag = scopes.includes(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    let commands;
    if (arg2 != null) {
      if (arg2[application.id] != null) {
        commands = tmp6.commands;
      }
    }
    if (commands == null) {
      commands = {};
    }
    flag = Object.keys(commands).length > 0;
  }
  return flag;
}
export function getIntegrationAddedLabel(integration) {
  const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(integration.id);
  if (null != integration.user) {
    const intl2 = util.intl;
    const obj2 = { timestamp: extractTimestampResult, user: UserUtilsDefault.getUserTag(integration.user) };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.Nu9sat, obj2);
    const tmpResult = UserUtilsDefault;
  } else {
    const intl = util.intl;
    const obj3 = { timestamp: extractTimestampResult };
    formatToPlainStringResult = intl.formatToPlainString(util.t.gcdJ8J, obj3);
  }
  return formatToPlainStringResult;
}

// discord_app/modules/app_launcher/hooks/useAppLauncherFrecents.tsx
import findCommandInSectionAll from "../../application_commands/ApplicationCommandQueryApi.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import recomputeFromAppTokens from "../../oauth2/AuthorizedAppsStore.tsx";
import { FetchState } from "../../oauth2/AuthorizedAppsStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import initialize from "../AppLauncherLastUsedCommandStore.tsx";
import { WATCH_YOUTUBE_PROD_APP_ID } from "../../activities/Constants.tsx";
import TRUE_OPTION_NAME from "../../application_commands/ApplicationCommandConstants.tsx";

const require = fn;
function useFrecentApps(onlyActivityApps) {
  ({ sectionDescriptors, context } = onlyActivityApps);
  onlyActivityApps = onlyActivityApps.onlyActivityApps;
  const includeAuthorizedAppsAndFetch = onlyActivityApps.includeAuthorizedAppsAndFetch;
  let stateFromStores;
  let React;
  let memo;
  let stateFromStores1;
  let items = [memo];
  stateFromStores = context(stateFromStores[8]).useStateFromStores(items, () => memo.getFetchState());
  const items1 = [includeAuthorizedAppsAndFetch, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = includeAuthorizedAppsAndFetch;
    if (includeAuthorizedAppsAndFetch) {
      tmp = stateFromStores === sortApplicationsViaFrecency.NOT_FETCHED;
    }
    if (tmp) {
      const response = onlyActivityApps(stateFromStores[9]).fetch();
      obj = onlyActivityApps(stateFromStores[9]);
    }
  }, items1);
  obj = context(stateFromStores[8]);
  const items2 = [memo];
  const stateFromStoresArray = context(stateFromStores[8]).useStateFromStoresArray(items2, () => {
    if (includeAuthorizedAppsAndFetch) {
      const newestTokens = memo.getNewestTokens();
      let found = newestTokens.filter((item, index) => {
        const scopes = item.scopes;
        return scopes.includes(callback(table[10]).OAuth2Scopes.APPLICATIONS_COMMANDS);
      });
    } else {
      found = [];
    }
    return found;
  });
  React = tmp5;
  const items3 = ["contextless" === context.type];
  let found = sectionDescriptors.filter((item, index) => item.id !== constants.FRECENCY && item.id !== tmp.BUILT_IN);
  memo = React.useMemo(() => {
    const items = [];
    if (closure_4) {
      items.push(WATCH_YOUTUBE_PROD_APP_ID);
    }
    return items;
  }, items3);
  let obj2 = context(stateFromStores[8]);
  const sortApplicationsViaFrecency = context(stateFromStores[11]).useSortApplicationsViaFrecency(found, stateFromStoresArray);
  const obj3 = context(stateFromStores[11]);
  const items4 = [stateFromStores1];
  stateFromStores1 = context(stateFromStores[8]).useStateFromStores(items4, () => {
    const currentUser = stateFromStores1.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items5 = [onlyActivityApps, sortApplicationsViaFrecency, context, memo, stateFromStores1];
  return React.useMemo(() => {
    function hideAgeRestricted(item, index) {
      let tmp = false === closure_7;
      if (tmp) {
        tmp = onlyActivityApps(stateFromStores[12])(item.id);
      }
      return !tmp;
    }
    const filter = sortApplicationsViaFrecency.filter;
    if (onlyActivityApps) {
      const found = filter((application) => {
        let isEmbeddedAppResult = null != application.application;
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = context(stateFromStores[13]).isEmbeddedApp(application.application);
          obj = context(stateFromStores[13]);
        }
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = null != context(stateFromStores[14]).queryForPrimaryAppCommand(closure_0, application.id);
          const obj2 = context(stateFromStores[14]);
        }
        return isEmbeddedAppResult;
      });
      const found1 = found.filter((item, index) => !closure_5.includes(item.id));
      let found2 = found1.filter(hideAgeRestricted);
    } else {
      const found3 = filter((id) => !closure_5.includes(id.id));
      found2 = found3.filter(hideAgeRestricted);
    }
    return found2;
  }, items5);
}
const BuiltInSectionId = TRUE_OPTION_NAME.BuiltInSectionId;
let obj = { commandTypes: null };
let items = [require("PermissionOverwriteType").ApplicationCommandType.CHAT, require("PermissionOverwriteType").ApplicationCommandType.PRIMARY_ENTRY_POINT];
obj[0] = items;
let closure_12 = { placeholderCount: 0, limit: TRUE_OPTION_NAME.DISCOVERY_COMMANDS_QUERY_LIMIT, includeFrecency: true };
const result = require("obj132").fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default function useAppLauncherFrecentCommandsAndApps(arg0) {
  ({ context, onlyActivityApps } = arg0);
  let commandsByActiveSection;
  filterSection = undefined;
  let stateFromStores;
  obj = commandsByActiveSection(filterSection[7]);
  obj = { context, filters: obj, options: closure_12, allowFetch: true };
  const discovery = obj.useDiscovery(obj);
  const commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  ({ sectionDescriptors, filterSection } = discovery);
  let items = [filterSection];
  const effect = stateFromStores.useEffect(() => {
    filterSection(BuiltInSectionId.FRECENCY);
  }, items);
  const items1 = [closure_8];
  stateFromStores = onlyActivityApps(filterSection[8]).useStateFromStores(items1, () => lastUsedCommandId.getLastUsedCommandId());
  obj = {
    loading: discovery.loading,
    frecencyCommands: stateFromStores.useMemo(() => {
      if (onlyActivityApps) {
        return [];
      } else {
        const first = commandsByActiveSection[0];
        let data;
        if (first != null) {
          data = first.data;
        }
        if (data == null) {
          data = [];
        }
        const found = commands.find((item, index) => item.id === closure_4);
        let tmp6 = data;
        if (null != found) {
          const items = [found];
          HermesBuiltin.arraySpread(data.filter((item, index) => item.id !== closure_4), 1);
          tmp6 = items;
        }
        return tmp6;
      }
    }, items2),
    frecentApps: useFrecentApps({ sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch: true }),
    sectionDescriptors
  };
  items2 = [commands, commandsByActiveSection, stateFromStores, onlyActivityApps];
  return obj;
};
export const useAppLauncherFrecentApps = function useAppLauncherFrecentApps(context) {
  context = context.context;
  ({ onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = context);
  obj = findCommandInSectionAll;
  obj = { context, filters: obj, options: closure_12, allowFetch: allowCommandFetch };
  const discovery = obj.useDiscovery(obj);
  obj = { loading: discovery.loading, frecentApps: useFrecentApps(obj1) };
  return obj;
};
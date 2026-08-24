// === Module 11296: useFrecentApps ===

// Module 11296 (useFrecentApps)
import findCommandInSectionAll from "findCommandInSection" /* 9555 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "recomputeFromAppTokens" /* 5289 */;
import { FetchState } from "recomputeFromAppTokens" /* 5289 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import closure_8 from "initialize" /* 11297 */;
import { WATCH_YOUTUBE_PROD_APP_ID } from "items3" /* 4481 */;
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME" /* 5246 */;

const require = arg1;
function useFrecentApps(onlyActivityApps) {
  ({ sectionDescriptors, context } = onlyActivityApps);
  onlyActivityApps = onlyActivityApps.onlyActivityApps;
  const includeAuthorizedAppsAndFetch = onlyActivityApps.includeAuthorizedAppsAndFetch;
  let stateFromStores;
  let React;
  let memo;
  let sortApplicationsViaFrecency;
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
      let found = newestTokens.filter((scopes) => {
        scopes = scopes.scopes;
        return scopes.includes(callback(table[10]).OAuth2Scopes.APPLICATIONS_COMMANDS);
      });
    } else {
      found = [];
    }
    return found;
  });
  React = tmp5;
  const items3 = ["contextless" === context.type];
  let found = sectionDescriptors.filter((id) => id.id !== constants.FRECENCY && id.id !== tmp.BUILT_IN);
  memo = React.useMemo(() => {
    const items = [];
    if (closure_4) {
      items.push(closure_1_9);
    }
    return items;
  }, items3);
  let obj2 = context(stateFromStores[8]);
  sortApplicationsViaFrecency = context(stateFromStores[11]).useSortApplicationsViaFrecency(found, stateFromStoresArray);
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
    function hideAgeRestricted(id) {
      let tmp = false === closure_7;
      if (tmp) {
        tmp = closure_1_1(closure_1_3[12])(id.id);
      }
      return !tmp;
    }
    const filter = sortApplicationsViaFrecency.filter;
    if (onlyActivityApps) {
      const found = filter((application) => {
        let isEmbeddedAppResult = null != application.application;
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = closure_1_0(closure_1_3[13]).isEmbeddedApp(application.application);
          obj = closure_1_0(closure_1_3[13]);
        }
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = null != closure_1_0(closure_1_3[14]).queryForPrimaryAppCommand(closure_0, application.id);
          const obj2 = closure_1_0(closure_1_3[14]);
        }
        return isEmbeddedAppResult;
      });
      const found1 = found.filter((id) => !closure_5.includes(id.id));
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
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default function useAppLauncherFrecentCommandsAndApps(arg0) {
  ({ context, onlyActivityApps } = arg0);
  let commands;
  let commandsByActiveSection;
  filterSection = undefined;
  let stateFromStores;
  obj = commandsByActiveSection(filterSection[7]);
  obj = { context, filters: obj, options: closure_12, allowFetch: true };
  const discovery = obj.useDiscovery(obj);
  commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  ({ sectionDescriptors, filterSection } = discovery);
  let items = [filterSection];
  const effect = stateFromStores.useEffect(() => {
    filterSection(closure_1_10.FRECENCY);
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
        const found = commands.find((id) => id.id === closure_4);
        let tmp6 = data;
        if (null != found) {
          const items = [found];
          HermesBuiltin.arraySpread(data.filter((id) => id.id !== closure_4), 1);
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
import noop from "noop";
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { FetchState } from "recomputeFromAppTokens";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import { WATCH_YOUTUBE_PROD_APP_ID } from "items3";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";

const require = arg1;
function useFrecentApps(onlyActivityApps) {
  let context;
  let sectionDescriptors;
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
      const obj = onlyActivityApps(stateFromStores[9]);
    }
  }, items1);
  let obj = context(stateFromStores[8]);
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
    if (c4) {
      items.push(outer1_9);
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
      let tmp = false === mergeGuildAvatar;
      if (tmp) {
        tmp = outer1_1(outer1_3[12])(id.id);
      }
      return !tmp;
    }
    const filter = sortApplicationsViaFrecency.filter;
    if (onlyActivityApps) {
      const found = filter((application) => {
        let isEmbeddedAppResult = null != application.application;
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = outer1_0(outer1_3[13]).isEmbeddedApp(application.application);
          const obj = outer1_0(outer1_3[13]);
        }
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = null != outer1_0(outer1_3[14]).queryForPrimaryAppCommand(closure_0, application.id);
          const obj2 = outer1_0(outer1_3[14]);
        }
        return isEmbeddedAppResult;
      });
      const found1 = found.filter((id) => !recomputeFromAppTokens.includes(id.id));
      let found2 = found1.filter(hideAgeRestricted);
    } else {
      const found3 = filter((id) => !recomputeFromAppTokens.includes(id.id));
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
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default function useAppLauncherFrecentCommandsAndApps(arg0) {
  let context;
  let filterSection;
  let onlyActivityApps;
  let sectionDescriptors;
  ({ context, onlyActivityApps } = arg0);
  let commands;
  let commandsByActiveSection;
  filterSection = undefined;
  let stateFromStores;
  let obj = commandsByActiveSection(filterSection[7]);
  obj = { context, filters: obj, options: closure_12, allowFetch: true };
  const discovery = obj.useDiscovery(obj);
  commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  ({ sectionDescriptors, filterSection } = discovery);
  let items = [filterSection];
  const effect = stateFromStores.useEffect(() => {
    filterSection(outer1_10.FRECENCY);
  }, items);
  const items1 = [initialize];
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
        const found = commands.find((id) => id.id === noop);
        let tmp6 = data;
        if (null != found) {
          const items = [found];
          HermesBuiltin.arraySpread(data.filter((id) => id.id !== noop), 1);
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
  let allowCommandFetch;
  let includeAuthorizedAppsAndFetch;
  let onlyActivityApps;
  context = context.context;
  ({ onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = context);
  let obj = importAll(9455);
  obj = { context, filters: obj, options: closure_12, allowFetch: allowCommandFetch };
  const discovery = obj.useDiscovery(obj);
  obj = { loading: discovery.loading, frecentApps: useFrecentApps(obj1) };
  return obj;
};
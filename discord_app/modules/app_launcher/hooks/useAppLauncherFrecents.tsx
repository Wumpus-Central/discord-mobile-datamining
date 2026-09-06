// discord_app/modules/app_launcher/hooks/useAppLauncherFrecents.tsx
import AuthorizedAppsActionCreatorsDefault from "../../oauth2/AuthorizedAppsActionCreators.tsx";
import ApplicationCommandQueryApiAll from "../../application_commands/ApplicationCommandQueryApi.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthorizedAppsStore from "../../oauth2/AuthorizedAppsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AppLauncherLastUsedCommandStore from "../AppLauncherLastUsedCommandStore.tsx";

const require = fn;
function useFrecentApps(onlyActivityApps) {
  ({ sectionDescriptors, context } = onlyActivityApps);
  onlyActivityApps = onlyActivityApps.onlyActivityApps;
  const includeAuthorizedAppsAndFetch = onlyActivityApps.includeAuthorizedAppsAndFetch;
  let stateFromStores;
  noop = undefined;
  let memo;
  let stateFromStores1;
  let items = [memo];
  stateFromStores = context(stateFromStores[8]).useStateFromStores(items, () => memo.getFetchState());
  const items1 = [includeAuthorizedAppsAndFetch, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = includeAuthorizedAppsAndFetch;
    if (includeAuthorizedAppsAndFetch) {
      tmp = stateFromStores === FetchState.NOT_FETCHED;
    }
    if (tmp) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch();
    }
  }, items1);
  let obj = context(stateFromStores[8]);
  const items2 = [memo];
  const stateFromStoresArray = context(stateFromStores[8]).useStateFromStoresArray(items2, () => {
    if (includeAuthorizedAppsAndFetch) {
      const newestTokens = AuthorizedAppsStore.getNewestTokens();
      let found = newestTokens.filter((scopes) => {
        scopes = scopes.scopes;
        return scopes.includes(context(stateFromStores[10]).OAuth2Scopes.APPLICATIONS_COMMANDS);
      });
    } else {
      found = [];
    }
    return found;
  });
  noop = tmp5;
  const items3 = ["contextless" === context.type];
  let found = sectionDescriptors.filter((id) => id.id !== constants.FRECENCY && id.id !== tmp.BUILT_IN);
  memo = noop.useMemo(() => {
    const items = [];
    if (closure_4) {
      items.push(WATCH_YOUTUBE_PROD_APP_ID);
    }
    return items;
  }, items3);
  let obj2 = context(stateFromStores[8]);
  const sortApplicationsViaFrecency = context(stateFromStores[11]).useSortApplicationsViaFrecency(
    found,
    stateFromStoresArray,
  );
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
  return noop.useMemo(() => {
    function hideAgeRestricted(id) {
      let tmp = false === stateFromStores1;
      if (tmp) {
        tmp = onlyActivityApps(stateFromStores[12])(id.id);
      }
      return !tmp;
    }
    const filter = sortApplicationsViaFrecency.filter;
    if (onlyActivityApps) {
      const found = filter((application) => {
        let isEmbeddedAppResult = null != application.application;
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = context(stateFromStores[13]).isEmbeddedApp(application.application);
          const obj = context(stateFromStores[13]);
        }
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult =
            null != context(stateFromStores[14]).queryForPrimaryAppCommand(closure_1_0, application.id);
          const obj2 = context(stateFromStores[14]);
        }
        return isEmbeddedAppResult;
      });
      const found1 = found.filter((id) => !memo.includes(id.id));
      let found2 = found1.filter(hideAgeRestricted);
    } else {
      const found3 = filter((id) => !memo.includes(id.id));
      found2 = found3.filter(hideAgeRestricted);
    }
    return found2;
  }, items5);
}
const FetchState = fn(7107).FetchState;
const WATCH_YOUTUBE_PROD_APP_ID = fn(1920).WATCH_YOUTUBE_PROD_APP_ID;
const ApplicationCommandConstants = fn(4999);
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let filters = { commandTypes: null };
let items = [fn(1894).ApplicationCommandType.CHAT, fn(1894).ApplicationCommandType.PRIMARY_ENTRY_POINT];
filters.commandTypes = items;
const options = {
  placeholderCount: 0,
  limit: ApplicationCommandConstants.DISCOVERY_COMMANDS_QUERY_LIMIT,
  includeFrecency: true,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default function useAppLauncherFrecentCommandsAndApps(arg0) {
  ({ context, onlyActivityApps } = arg0);
  let commandsByActiveSection;
  filterSection = undefined;
  let stateFromStores;
  filters = commandsByActiveSection(filterSection[7]);
  filters = { context, filters, options, allowFetch: true };
  const discovery = filters.useDiscovery(filters);
  const commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  ({ sectionDescriptors, filterSection } = discovery);
  let items = [filterSection];
  const effect = stateFromStores.useEffect(() => {
    filterSection(BuiltInSectionId.FRECENCY);
  }, items);
  const items1 = [AppLauncherLastUsedCommandStore];
  stateFromStores = onlyActivityApps(filterSection[8]).useStateFromStores(items1, () =>
    lastUsedCommandId.getLastUsedCommandId(),
  );
  filters = {
    loading: discovery.loading,
    frecencyCommands: null,
    frecentApps: useFrecentApps({ sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch: true }),
    sectionDescriptors,
  };
  const items2 = [commands, commandsByActiveSection, stateFromStores, onlyActivityApps];
  filters.frecencyCommands = stateFromStores.useMemo(() => {
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
      const found = commands.find((id) => id.id === stateFromStores);
      let tmp6 = data;
      if (null != found) {
        const items = [found];
        HermesBuiltin.arraySpread(
          data.filter((id) => id.id !== stateFromStores),
          1,
        );
        tmp6 = items;
      }
      return tmp6;
    }
  }, items2);
  return filters;
}
export const useAppLauncherFrecentApps = function useAppLauncherFrecentApps(context) {
  context = context.context;
  ({ onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = context);
  filters = ApplicationCommandQueryApiAll;
  filters = { context, filters, options, allowFetch: allowCommandFetch };
  const discovery = filters.useDiscovery(filters);
  filters = {
    loading: discovery.loading,
    frecentApps: useFrecentApps({
      sectionDescriptors: discovery.sectionDescriptors,
      context,
      onlyActivityApps,
      includeAuthorizedAppsAndFetch,
    }),
  };
  return filters;
};

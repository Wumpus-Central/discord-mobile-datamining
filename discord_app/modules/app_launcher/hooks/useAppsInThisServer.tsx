// === Module 12122: useAppsInThisServer ===

// Module 12122 (useAppsInThisServer)
import _modDef12 from "module_12" /* 12 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const useGuildIndexState = fn(9290).useGuildIndexState;
const limit = fn(4999).DISCOVERY_COMMANDS_QUERY_LIMIT;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/hooks/useAppsInThisServer.tsx");

export default function useAppsInThisServer(context) {
  context = context.context;
  _require = undefined;
  let stateFromStores;
  let commandsByActiveSection;
  let memo;
  let sortApplicationsViaFrecency;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp2Result = useGuildIndexState(guild_id, true);
  _require = tmp2Result;
  let obj = require("initialize");
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  commandsByActiveSection(memo[5]);
  obj = { context, filters: null, options: null, allowFetch: true };
  obj = { commandTypes: null };
  const items1 = [require("Server").ApplicationCommandType.CHAT, require("Server").ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj.commandTypes = items1;
  obj.filters = obj;
  const obj1 = { placeholderCount: 0, limit, includeFrecency: true };
  obj.options = obj1;
  const discovery = obj1.useDiscovery(obj);
  commandsByActiveSection = discovery.commandsByActiveSection;
  const items2 = [commandsByActiveSection];
  memo = sortApplicationsViaFrecency.useMemo(() => commandsByActiveSection.reduce((add, data) => {
    if (data.data.length > 0) {
      add.add(tmp.id);
    }
    return add;
  }, new Set()), items2);
  let result = tmp2Result.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  const items3 = [sections, memo];
  const memo1 = sortApplicationsViaFrecency.useMemo(() => {
    result = result.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const values = Object.values(sections);
    const mapped = values.map((descriptor) => descriptor.descriptor);
    return mapped.filter((id) => {
      let hasItem = !(id.id in closure_0(memo[7]).BUILT_IN_SECTIONS);
      if (hasItem) {
        hasItem = set.has(id.id);
      }
      return hasItem;
    });
  }, items3);
  sortApplicationsViaFrecency = require("ApplicationFrecencyHooks").useSortApplicationsViaFrecency(memo1);
  const obj2 = { appsInThisServer: null, isLoading: tmp2Result.fetchState.fetching || discovery.loading };
  const items4 = [stateFromStores, sortApplicationsViaFrecency];
  obj2.appsInThisServer = sortApplicationsViaFrecency.useMemo(() => {
    const found = _modDef12.compact(sortApplicationsViaFrecency.map((application) => application.application)).filter((id) => {
      let tmp = false === closure_1_1;
      if (tmp) {
        tmp = stateFromStores(memo[10])(id.id);
      }
      return !tmp;
    });
    return found.map((application) => ({ application }));
  }, items4);
  return obj2;
};
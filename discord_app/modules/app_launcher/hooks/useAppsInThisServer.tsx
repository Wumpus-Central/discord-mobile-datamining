// discord_app/modules/app_launcher/hooks/useAppsInThisServer.tsx
import noop from "noop";
import { useGuildIndexState } from "getIndexKey";
import mergeGuildAvatar from "mergeGuildAvatar";
import { DISCOVERY_COMMANDS_QUERY_LIMIT as closure_7 } from "TRUE_OPTION_NAME";

const require = arg1;
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/app_launcher/hooks/useAppsInThisServer.tsx");

export default function useAppsInThisServer(context) {
  context = context.context;
  let _require;
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
  let obj = _require(memo[4]);
  const items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  let obj1 = commandsByActiveSection(memo[5]);
  obj = { context, filters: null, options: null, allowFetch: true };
  obj = { commandTypes: null };
  const items1 = [_require(memo[6]).ApplicationCommandType.CHAT, _require(memo[6]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj[0] = items1;
  obj[1] = obj;
  obj1 = { placeholderCount: 0, limit: closure_7, includeFrecency: true };
  obj[2] = obj1;
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
    const result = _undefined.result;
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
      let hasItem = !(id.id in outer1_0(outer1_3[7]).BUILT_IN_SECTIONS);
      if (hasItem) {
        hasItem = set.has(id.id);
      }
      return hasItem;
    });
  }, items3);
  sortApplicationsViaFrecency = _require(memo[8]).useSortApplicationsViaFrecency(memo1);
  const obj6 = sortApplicationsViaFrecency;
  const tmp2 = useGuildIndexState;
  const tmp5 = _require;
  const tmp5Result = _require(memo[8]);
  const tmp6 = memo;
  const items4 = [stateFromStores, sortApplicationsViaFrecency];
  return {
    appsInThisServer: sortApplicationsViaFrecency.useMemo(() => {
      const obj = stateFromStores(memo[9]);
      const found = stateFromStores(memo[9]).compact(sortApplicationsViaFrecency.map((application) => application.application)).filter((id) => {
        let tmp = false === closure_1;
        if (tmp) {
          tmp = outer1_1(outer1_3[10])(id.id);
        }
        return !tmp;
      });
      return found.map((application) => ({ application }));
    }, items4),
    isLoading: tmp13
  };
};
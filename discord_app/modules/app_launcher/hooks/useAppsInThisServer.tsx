// discord_app/modules/app_launcher/hooks/useAppsInThisServer.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { useGuildIndexState } from "../../application_commands/ApplicationCommandIndexStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { DISCOVERY_COMMANDS_QUERY_LIMIT as closure_7 } from "../../application_commands/ApplicationCommandConstants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/app_launcher/hooks/useAppsInThisServer.tsx");

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
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  commandsByActiveSection(memo[5]);
  obj = { commandTypes: null };
  const items1 = [_require(memo[6]).ApplicationCommandType.CHAT, _require(memo[6]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj[0] = items1;
  obj[1] = obj;
  obj1 = { placeholderCount: 0, limit: closure_7, includeFrecency: true };
  obj[2] = obj1;
  const discovery = obj1.useDiscovery(obj);
  commandsByActiveSection = discovery.commandsByActiveSection;
  const items2 = [commandsByActiveSection];
  memo = sortApplicationsViaFrecency.useMemo(() => commandsByActiveSection.reduce((acc, item, index) => {
    if (item.data.length > 0) {
      acc.add(tmp.id);
    }
    return acc;
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
    const mapped = values.map((item, index) => item.descriptor);
    return mapped.filter((item, index) => {
      let hasItem = !(item.id in closure_1_0(memo[7]).BUILT_IN_SECTIONS);
      if (hasItem) {
        hasItem = set.has(item.id);
      }
      return hasItem;
    });
  }, items3);
  sortApplicationsViaFrecency = _require(memo[8]).useSortApplicationsViaFrecency(memo1);
  const tmp5Result = _require(memo[8]);
  const items4 = [stateFromStores, sortApplicationsViaFrecency];
  return {
    appsInThisServer: sortApplicationsViaFrecency.useMemo(() => {
      const obj = stateFromStores(memo[9]);
      const found = stateFromStores(memo[9]).compact(sortApplicationsViaFrecency.map((item, index) => item.application)).filter((item, index) => {
        let tmp = false === closure_1;
        if (tmp) {
          tmp = stateFromStores(memo[10])(item.id);
        }
        return !tmp;
      });
      return found.map((item, index) => ({ application: item }));
    }, items4),
    isLoading: tmp13
  };
};
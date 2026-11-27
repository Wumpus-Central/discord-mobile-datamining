// === Module 20082: useAddCommandPermissions ===

// Module 20082 (useAddCommandPermissions)
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6991 */;
import IntegrationPermissionUtils from "IntegrationPermissionUtils" /* 8185 */;
import useIntegrationPermissionChannelSearch from "useIntegrationPermissionChannelSearch" /* 20083 */;
import useIntegrationPermissionMemberSearch from "useIntegrationPermissionMemberSearch" /* 20085 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_5 = fn(7073).APPLICATION_COMMAND_PERMISSIONS_LIMIT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useAddCommandPermissions.tsx");

export default function useAddCommandPermissions(editPermissions) {
  editPermissions = editPermissions.editPermissions;
  const guildId = editPermissions.guildId;
  const hasMemberSearch = editPermissions.hasMemberSearch;
  const overwrittenKeys = editPermissions.overwrittenKeys;
  let first;
  ({ search, selectedPermissionCount } = editPermissions);
  const tmp = overwrittenKeys(first.useState(null), 2);
  first = tmp[0];
  closure_5 = tmp3;
  const query = search(guildId);
  const results = query.results;
  const setQuery = query.setQuery;
  const tmp5 = overwrittenKeys(first.useState({}), 2);
  const first1 = tmp5[0];
  closure_9 = tmp7;
  items = [first1];
  const newSelectedOverwriteCount = first.useMemo(() => Object.keys(first1).length, items);
  const maximumPermissionsSelected = newSelectedOverwriteCount + selectedPermissionCount >= closure_5;
  const items1 = [overwrittenKeys, results];
  const items2 = [maximumPermissionsSelected, tmp5[1]];
  const items3 = [first1];
  const onSelect = first.useCallback((id, type) => {
    closure_9((arg0) => {
      const toPermissionKeyResult = IntegrationPermissionUtils.toPermissionKey(id, type);
      const obj2 = {};
      const merged = Object.assign(arg0);
      if (toPermissionKeyResult in arg0) {
        delete tmp[tmp2];
      } else if (!maximumPermissionsSelected) {
        const obj3 = { id, permission: true, type };
        obj2[toPermissionKeyResult] = obj3;
      }
      return obj2;
    });
  }, items2);
  const items4 = [editPermissions, first1];
  const isSelected = first.useCallback((id, CHANNEL) => IntegrationPermissionUtils.toPermissionKey(id, CHANNEL) in first1, items3);
  const items5 = [first];
  const submit = first.useCallback(() => {
    editPermissions(first1, []);
  }, items4);
  const effect = first.useEffect(() => () => clearTimeout(first), items5);
  const items6 = [guildId, hasMemberSearch, setQuery, tmp[1]];
  const items7 = [guildId];
  const setSearchQuery = first.useCallback((query) => {
    setQuery(query);
    if (hasMemberSearch) {
      closure_5((arg0) => {
        clearTimeout(arg0);
        let timerId = null;
        if (0 !== query.length) {
          const _setTimeout = setTimeout;
          timerId = setTimeout(() => {
            const members = guildId(hasMemberSearch[7]).requestMembers(closure_2_1, query, 200, false);
          }, 500);
        }
        return timerId;
      });
    }
  }, items6);
  const effect1 = first.useEffect(() => {
    const members = GuildActionCreatorsDefault.requestMembers(guildId, undefined, 200, false);
  }, items7);
  return { query: query.query, setQuery, setSearchQuery, filteredResults: first.useMemo(() => results.filter((id) => !overwrittenKeys.includes(editPermissions(hasMemberSearch[6]).toPermissionKey(id.id, id.type))), items1), onSelect, isSelected, submit, newSelectedOverwriteCount, maximumPermissionsSelected };
};
export function useCommandPermissionChannelSearch(arg0) {
  const integrationPermissionChannelSearch = useIntegrationPermissionChannelSearch.useIntegrationPermissionChannelSearch(arg0);
  const obj2 = {};
  let merged = Object.assign(integrationPermissionChannelSearch);
  const results = integrationPermissionChannelSearch.results;
  obj2.results = results.map((item) => {
    const obj = {};
    const merged = Object.assign(item);
    obj.type = ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL;
    return obj;
  });
  return obj2;
}
export function useCommandPermissionMemberRoleSearch(arg0) {
  const integrationPermissionMemberSearch = useIntegrationPermissionMemberSearch.useIntegrationPermissionMemberSearch(arg0);
  const obj2 = {};
  let merged = Object.assign(integrationPermissionMemberSearch);
  const roles = integrationPermissionMemberSearch.results.roles;
  const mapped = roles.map((item) => {
    const obj = {};
    const merged = Object.assign(item);
    obj.type = ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE;
    return obj;
  });
  const members = integrationPermissionMemberSearch.results.members;
  obj2.results = mapped.concat(members.map((item) => {
    const obj = {};
    const merged = Object.assign(item);
    obj.type = ApplicationCommandTypes.ApplicationCommandPermissionType.USER;
    return obj;
  }));
  return obj2;
}
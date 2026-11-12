// === Module 13412: AppLauncherMentionableListActionSheet ===

// Module 13412 (AppLauncherMentionableListActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6899 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8657 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;

const require = globalThis.__r;

require = fn;
const RelationshipTypes = fn(1072).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const AppLauncherMentionableListActionSheet = "AppLauncherMentionableListActionSheet";
const MentionableItemTypes = { USER: "user", ROLE: "role", GLOBAL: "global" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx");

export default function AppLauncherMentionableListActionSheet(channel) {
  ({ onMentionablePress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let query;
  const tmp = option(query.useState(""), 2);
  query = tmp[0];
  const memberVersion = tmp[1];
  const ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  closure_8 = tmp4[1];
  const guild_id = channel.guild_id;
  items = [memberVersion];
  const stateFromStores = require("initialize").useStateFromStores(items, () => memberVersion.getMemberVersion());
  let tmp8 = onActionSheetDismiss(channel[6])();
  constants = tmp8;
  let items1 = [first1];
  const memo = query.useMemo(() => first1.flatMap((type) => {
    if (type.type === constants.USER) {
      items = [type.result.user.id];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }), items1);
  onActionSheetDismiss(channel[7])(guild_id, memo);
  const items2 = [query, option, channel, stateFromStores, tmp8];
  const effect = query.useEffect(() => {
    const applicationCommandOptionQueryOptions = ApplicationCommandUtils.getApplicationCommandOptionQueryOptions(option);
    const tmp2 = constants(query);
    const queryMentionResultsResult = AutocompleteUtilsDefault.queryMentionResults({ query, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, canMentionOtherGlobals: applicationCommandOptionQueryOptions.canMentionOtherGlobals, request: tmp2, limit: 10, allowSnowflake: true });
    const users = queryMentionResultsResult.users;
    items = [...users.map((item) => ({ type: constants.USER, result: item })), ...roles.map((item) => ({ type: constants.ROLE, result: item })), ...globals.map((item) => ({ type: constants.GLOBAL, result: item }))];
    ({ roles, globals } = queryMentionResultsResult);
    closure_8(items);
  }, items2);
  const obj2 = { option, onDismiss: onActionSheetDismiss, children: null };
  const items3 = [
    first1(require("AppLauncherList").AppLauncherListSearchBar, {
      onChange: function handleQueryUpdate(str) {
        memberVersion(str.toLowerCase());
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }
    }),

  ];
  if (0 === first1.length) {
    let tmp13Result = tmp13(require("AppLauncherList").AppLauncherListEmptyState, {});
  } else {
    let obj4 = {
      ref,
      data: first1,
      renderItem: function Item(item) {
          item = item.item;
          const index = item.index;
          const obj = {
            onPress() {
              require({ mentionable: item });
              ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherMentionableListActionSheet);
              onActionSheetDismiss();
            },
            start: 0 === index,
            end: index === first1.length - 1
          };
          const type = item.type;
          if (constants.USER === type) {
            const result3 = item.result;
            const user = result3.user;
            const obj3 = { type: ref.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: null };
            const obj4 = { color: "text-subtle", variant: "body-xs/normal", children: null };
            const tmp25 = onActionSheetDismiss(channel[13]);
            obj4.children = require("UserUtils").getUserTag(user);
            obj3.subLabel = first1(require("Text/Text").Text, obj4);
            const merged = Object.assign(obj);
            return first1(tmp25, obj3, user.id);
          } else if (constants.ROLE === type) {
            const result2 = item.result;
            const obj5 = { guildRole: result2, guildId: guild_id };
            const merged1 = Object.assign(obj);
            return first1(require("AppLauncherRoleListActionSheet").RoleRow, obj5, result2.id);
          } else if (constants.GLOBAL === type) {
            const result = item.result;
            if (result.text === obj2.MENTION_EVERYONE().text) {
              let tmp7 = first1(require("AppLauncherRoleListActionSheet").RoleIcon, {});
              let tmp8 = require;
              let tmp9 = first1;
            } else {
              const obj6 = { icon: first1(require("UserCircleIcon").UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
              tmp7 = first1(onActionSheetDismiss(channel[18]), obj6);
              tmp8 = require;
              tmp9 = first1;
              const tmp2Result = onActionSheetDismiss(channel[18]);
            }
            const obj7 = { label: null, icon: null };
            const obj8 = { lineClamp: 1, variant: "body-md/semibold", color: "mobile-text-heading-primary", children: result.text };
            obj7.label = tmp9(tmp8(channel[14]).Text, obj8);
            obj7.icon = tmp7;
            const merged2 = Object.assign(obj);
            return tmp9(tmp8(channel[20]).TableRow, obj7, result.text);
          }
        }
    };
    tmp13Result = tmp13(require("AppLauncherList").AppLauncherList, obj4);
  }
  items3[1] = tmp13Result;
  obj2.children = items3;
  return closure_8(require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet, obj2);
};
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export { MentionableItemTypes };
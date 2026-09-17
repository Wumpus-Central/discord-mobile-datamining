// === Module 12331: AppLauncherMentionableListActionSheet ===

// Module 12331 (AppLauncherMentionableListActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5530 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7635 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
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
  closure_5 = tmp[1];
  const ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  closure_8 = tmp4[1];
  const guild_id = channel.guild_id;
  let items = [query, option, channel];
  const effect = query.useEffect(() => {
    const applicationCommandOptionQueryOptions = ApplicationCommandUtils.getApplicationCommandOptionQueryOptions(option);
    const queryMentionResultsResult = AutocompleteUtilsDefault.queryMentionResults({ query, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, canMentionOtherGlobals: applicationCommandOptionQueryOptions.canMentionOtherGlobals, request: true, limit: 10, allowSnowflake: true });
    const users = queryMentionResultsResult.users;
    const items = [...users.map((item) => ({ type: constants.USER, result: item })), ...roles.map((item) => ({ type: constants.ROLE, result: item })), ...globals.map((item) => ({ type: constants.GLOBAL, result: item }))];
    ({ roles, globals } = queryMentionResultsResult);
    closure_8(items);
  }, items);
  let obj = { option, onDismiss: onActionSheetDismiss, children: null };
  const items1 = [
    ref(require("AppLauncherList").AppLauncherListSearchBar, {
      onChange(str) {
        closure_5(str.toLowerCase());
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }
    }),

  ];
  if (0 === first1.length) {
    let tmp9Result = tmp9(require("AppLauncherList").AppLauncherListEmptyState, {});
  } else {
    let obj3 = {
      ref,
      data: first1,
      renderItem(item) {
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
          if (guild_id.USER === type) {
            const result3 = item.result;
            const user = result3.user;
            const obj3 = { type: closure_5.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: null };
            const obj4 = { color: "text-subtle", variant: "text-xs/normal", children: null };
            const tmp25 = onActionSheetDismiss(channel[9]);
            obj4.children = require("UserUtils").getUserTag(user);
            obj3.subLabel = ref(require("Text/Text").Text, obj4);
            const merged = Object.assign(obj);
            return ref(tmp25, obj3, user.id);
          } else if (guild_id.ROLE === type) {
            const result2 = item.result;
            const obj5 = { guildRole: result2, guildId: guild_id };
            const merged1 = Object.assign(obj);
            return ref(require("AppLauncherRoleListActionSheet").RoleRow, obj5, result2.id);
          } else if (guild_id.GLOBAL === type) {
            const result = item.result;
            if (result.text === obj2.MENTION_EVERYONE().text) {
              let tmp7 = ref(require("AppLauncherRoleListActionSheet").RoleIcon, {});
              let tmp8 = require;
              let tmp9 = ref;
            } else {
              const obj6 = { icon: ref(require("UserCircleIcon").UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
              tmp7 = ref(onActionSheetDismiss(channel[14]), obj6);
              tmp8 = require;
              tmp9 = ref;
              const tmp2Result = onActionSheetDismiss(channel[14]);
            }
            const obj7 = { label: null, icon: null };
            const obj8 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: result.text };
            obj7.label = tmp9(tmp8(channel[10]).Text, obj8);
            obj7.icon = tmp7;
            const merged2 = Object.assign(obj);
            return tmp9(tmp8(channel[16]).TableRow, obj7, result.text);
          }
        }
    };
    tmp9Result = tmp9(require("AppLauncherList").AppLauncherList, obj3);
  }
  items1[1] = tmp9Result;
  obj.children = items1;
  return first1(require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export { MentionableItemTypes };
// discord_app/modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AutocompleteUtilsDefault from "../../../../../utils/AutocompleteUtils.tsx";
import ApplicationCommandUtils from "../../../../application_commands/ApplicationCommandUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const AppLauncherMentionableListActionSheet = "AppLauncherMentionableListActionSheet";
const MentionableItemTypes = { USER: "user", ROLE: "role", GLOBAL: "global" };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx",
);

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
    let obj = ApplicationCommandUtils;
    const applicationCommandOptionQueryOptions = obj.getApplicationCommandOptionQueryOptions(option);
    obj = {
      query,
      channel,
      canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone,
      canMentionHere: applicationCommandOptionQueryOptions.canMentionHere,
      canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers,
      canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles,
      includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser,
      includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles,
      request: true,
      limit: 10,
      allowSnowflake: true,
    };
    const queryMentionResultsResult = AutocompleteUtilsDefault.queryMentionResults(obj);
    const users = queryMentionResultsResult.users;
    const items = [
      ...users.map((item) => ({ type: constants.USER, result: item })),
      ...roles.map((item) => ({ type: constants.ROLE, result: item })),
      ...globals.map((item) => ({ type: constants.GLOBAL, result: item })),
    ];
    ({ roles, globals } = queryMentionResultsResult);
    closure_8(items);
  }, items);
  let obj = { option, onDismiss: onActionSheetDismiss, children: null };
  obj = {
    onChange(str) {
      closure_5(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    },
  };
  const items1 = [ref(require("AppLauncherList").AppLauncherListSearchBar, obj)];
  if (0 === first1.length) {
    let tmp9Result = tmp9(tmp7(tmp8[8]).AppLauncherListEmptyState, {});
  } else {
    obj = {
      ref,
      data: first1,
      renderItem(item) {
        item = item.item;
        const index = item.index;
        let obj = {
          onPress() {
            require({ mentionable: item });
            ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherMentionableListActionSheet);
            onActionSheetDismiss();
          },
          start: 0 === index,
          end: index === first1.length - 1,
        };
        const type = item.type;
        if (guild_id.USER === type) {
          const result3 = item.result;
          const user = result3.user;
          obj = { type: closure_5.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: null };
          obj = { color: "text-subtle", variant: "text-xs/normal", children: null };
          const tmp25 = onActionSheetDismiss(channel[9]);
          obj.children = require("UserUtils").getUserTag(user);
          obj.subLabel = ref(require("Text/Text").Text, obj);
          const merged = Object.assign(obj);
          return ref(tmp25, obj, user.id);
        } else if (tmp.ROLE === type) {
          const result2 = item.result;
          let obj1 = { guildRole: result2, guildId: guild_id };
          const merged1 = Object.assign(obj);
          return ref(require("AppLauncherRoleListActionSheet").RoleRow, obj1, result2.id);
        } else if (tmp.GLOBAL === type) {
          const result = item.result;
          obj1 = onActionSheetDismiss(channel[13]);
          if (result.text === obj1.MENTION_EVERYONE().text) {
            let tmp7 = ref(require("AppLauncherRoleListActionSheet").RoleIcon, {});
            let tmp8 = require;
            let tmp9 = ref;
          } else {
            const obj2 = {
              icon: ref(require("UserCircleIcon").UserCircleIcon, { size: "sm", color: "interactive-text-default" }),
            };
            tmp7 = ref(onActionSheetDismiss(tmp3[14]), obj2);
            tmp8 = require;
            tmp9 = ref;
            const tmp2Result = onActionSheetDismiss(tmp3[14]);
          }
          const obj3 = { label: null, icon: null };
          const obj4 = {
            lineClamp: 1,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: result.text,
          };
          obj3.label = tmp9(tmp8(channel[10]).Text, obj4);
          obj3.icon = tmp7;
          const merged2 = Object.assign(obj);
          return tmp9(tmp8(channel[16]).TableRow, obj3, result.text);
        }
      },
    };
    tmp9Result = tmp9(tmp7(tmp8[8]).AppLauncherList, obj);
  }
  items1[1] = tmp9Result;
  obj.children = items1;
  return first1(require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet, obj);
}
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export { MentionableItemTypes };

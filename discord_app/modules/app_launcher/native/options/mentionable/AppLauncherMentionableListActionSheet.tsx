// === Module 11765: AppLauncherMentionableListActionSheet ===

// Module 11765 (AppLauncherMentionableListActionSheet)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { RelationshipTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
const AppLauncherMentionableListActionSheet = "AppLauncherMentionableListActionSheet";
let obj = { USER: "user", ROLE: "role", GLOBAL: "global" };
let result = require("set").fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx");

export default function AppLauncherMentionableListActionSheet(channel) {
  ({ onMentionablePress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let first;
  closure_5 = undefined;
  let ref;
  let first1;
  closure_8 = undefined;
  let guild_id;
  const tmp = option(first.useState(""), 2);
  first = tmp[0];
  closure_5 = tmp[1];
  ref = first.useRef(null);
  const tmp4 = option(first.useState([]), 2);
  first1 = tmp4[0];
  closure_8 = tmp4[1];
  guild_id = channel.guild_id;
  let items = [first, option, channel];
  const effect = first.useEffect(() => {
    obj = closure_1_0(channel[4]);
    const applicationCommandOptionQueryOptions = obj.getApplicationCommandOptionQueryOptions(option);
    obj = { query: first, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, request: true, limit: 10, allowSnowflake: true };
    const queryMentionResultsResult = onActionSheetDismiss(channel[5]).queryMentionResults(obj);
    const users = queryMentionResultsResult.users;
    const items = [...users.map((result) => ({ type: constants.USER, result })), ...roles.map((result) => ({ type: constants.ROLE, result })), ...globals.map((result) => ({ type: constants.GLOBAL, result }))];
    ({ roles, globals } = queryMentionResultsResult);
    callback(items);
  }, items);
  obj = { option, onDismiss: onActionSheetDismiss, children: null };
  obj = {
    onChange(str) {
      lib(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  const items1 = [ref(require(channel[8]).AppLauncherListSearchBar, obj), ];
  if (0 === first1.length) {
    let tmp9Result = tmp9(tmp7(tmp8[8]).AppLauncherListEmptyState, {});
  } else {
    obj = { ref: null, data: null, renderItem: null };
    obj[0] = ref;
    obj[1] = first1;
    obj[2] = function renderItem(item) {
      item = item.item;
      const index = item.index;
      obj = {
        onPress() {
          item({ mentionable: item });
          onActionSheetDismiss(channel[6]).hideActionSheet(closure_8);
          closure_1_1();
        },
        start: 0 === index,
        end: index === first1.length - 1
      };
      const type = item.type;
      if (guild_id.USER === type) {
        const result3 = item.result;
        const user = result3.user;
        obj = { type: null, user: null, nickname: null, guildId: null, subLabel: null };
        obj[0] = lib.NONE;
        obj[1] = user;
        obj[2] = result3.nick;
        obj[3] = guild_id;
        obj = { color: "text-subtle", variant: "text-xs/normal", children: null };
        const tmp25 = onActionSheetDismiss(channel[9]);
        obj[2] = closure_1_0(channel[11]).getUserTag(user);
        obj[4] = ref(closure_1_0(channel[10]).Text, obj);
        const merged = Object.assign(obj);
        return ref(tmp25, obj, user.id);
      } else if (tmp.ROLE === type) {
        const result2 = item.result;
        obj1 = { guildRole: null, guildId: null };
        obj1[0] = result2;
        obj1[1] = guild_id;
        const merged1 = Object.assign(obj);
        return ref(closure_1_0(channel[12]).RoleRow, obj1, result2.id);
      } else if (tmp.GLOBAL === type) {
        const result = item.result;
        obj1 = onActionSheetDismiss(channel[13]);
        if (result.text === obj1.MENTION_EVERYONE().text) {
          let tmp7 = ref(closure_1_0(tmp3[12]).RoleIcon, {});
          let tmp8 = closure_1_0;
          let tmp9 = ref;
        } else {
          const obj2 = { icon: null };
          obj2[0] = ref(closure_1_0(tmp3[15]).UserCircleIcon, { size: "sm", color: "interactive-text-default" });
          tmp7 = ref(onActionSheetDismiss(tmp3[14]), obj2);
          tmp8 = closure_1_0;
          tmp9 = ref;
          const tmp2Result = onActionSheetDismiss(tmp3[14]);
        }
        const obj3 = { label: null, icon: null };
        const obj4 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
        obj4[3] = result.text;
        obj3[0] = tmp9(tmp8(channel[10]).Text, obj4);
        obj3[1] = tmp7;
        const merged2 = Object.assign(obj);
        return tmp9(tmp8(channel[16]).TableRow, obj3, result.text);
      }
    };
    tmp9Result = tmp9(tmp7(tmp8[8]).AppLauncherList, obj);
  }
  items1[1] = tmp9Result;
  obj[2] = items1;
  return first1(require(channel[7]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export const MentionableItemTypes = obj;
// === Module 11804: AppLauncherMentionableListActionSheet ===

// Module 11804 (AppLauncherMentionableListActionSheet)
import Constants from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5621 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let onMentionablePress;

let metroImportDefault;
let metroRequire;
let RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const AppLauncherMentionableListActionSheet = "AppLauncherMentionableListActionSheet";
const MentionableItemTypes = { USER: "user", ROLE: "role", GLOBAL: "global" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onMentionablePress) => {
  let channel;
  let closure_5;
  let first1;
  let items1;
  let query;
  let obj = onMentionablePress(channel[5]);
  const cResult = obj.c(23);
  onMentionablePress = onMentionablePress.onMentionablePress;
  const onActionSheetDismiss = onMentionablePress.onActionSheetDismiss;
  channel = onMentionablePress.channel;
  const option = onMentionablePress.option;
  let obj2 = query;
  const tmp5 = option(query.useState(""), 2);
  query = tmp5[0];
  RelationshipTypes = tmp5[1];
  const ref = query.useRef(null);
  const tmp4 = option;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  const tmp4Result = tmp4(obj2.useState(first1), 2);
  const first2 = tmp4Result[0];
  let closure_8 = tmp4Result[1];
  const guild_id = channel.guild_id;
  if (cResult[1] === channel) {
    if (cResult[2] === option) {
      let tmp11;
      let tmp12;
      let tmp14;
      let tmp15;
      if (cResult[3] === query) {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const effect = obj2.useEffect(tmp11, tmp12);
      if (cResult[6] !== onActionSheetDismiss) {
        const fn2 = function _() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(AppLauncherMentionableListActionSheet);
          onActionSheetDismiss();
        };
        cResult[6] = onActionSheetDismiss;
        cResult[7] = fn2;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[7];
      }
      let closure_10 = tmp14;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function w(str) {
          closure_5(str.toLowerCase());
          const current = ref.current;
          if (current != null) {
            current.scrollToOffset({ offset: 0, animated: false });
          }
        };
        cResult[8] = fn3;
        tmp15 = fn3;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === guild_id) {
        if (cResult[10] === tmp14) {
          if (cResult[11] === first2.length) {
            let tmp16;
            let tmp17;
            let tmp22Result;
            if (cResult[12] === onMentionablePress) {
              tmp16 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              let obj3 = { onChange: tmp15 };
              const tmp19 = ref(onMentionablePress(channel[17]).AppLauncherListSearchBar, obj3);
              cResult[14] = tmp19;
              tmp17 = tmp19;
            } else {
              tmp17 = cResult[14];
            }
            if (cResult[15] === tmp16) {
              if (cResult[16] === first2) {
                let tmp21;
                if (cResult[17] === 0 === tmp10) {
                  tmp21 = cResult[18];
                }
                if (cResult[19] === onActionSheetDismiss) {
                  if (cResult[20] === option) {
                    let tmp25;
                    if (cResult[21] === tmp21) {
                      tmp25 = cResult[22];
                    }
                    return tmp25;
                  }
                }
                let obj4 = { option, onDismiss: onActionSheetDismiss, children: items1 };
                items1 = [tmp17, ];
                class P {
                  constructor(item) {
                    let Text;
                    let obj4;
                    let obj8;
                    let obj9;
                    item = item.item;
                    const index = item.index;
                    let obj = {
                      onPress() {
                        const obj = { mentionable: item };
                        onMentionablePress(obj);
                        closure_10();
                      },
                      start: 0 === index,
                      end: index === first2.length - 1
                    };
                    const type = item.type;
                    if (guild_id.USER === type) {
                      const result3 = item.result;
                      const user = result3.user;
                      const obj3 = { type: closure_5.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: ref(Text, obj4) };
                      obj4 = { color: "text-subtle", variant: "text-xs/normal", children: obj9.getUserTag(user) };
                      const tmp25 = onActionSheetDismiss(channel[9]);
                      Text = onMentionablePress(channel[10]).Text;
                      obj9 = onMentionablePress(channel[11]);
                      const merged = Object.assign(obj);
                      return ref(tmp25, obj3, user.id);
                    } else if (guild_id.ROLE === type) {
                      const result2 = item.result;
                      const obj5 = { guildRole: result2, guildId: guild_id };
                      const RoleRow = onMentionablePress(channel[12]).RoleRow;
                      const merged1 = Object.assign(obj);
                      return ref(RoleRow, obj5, result2.id);
                    } else if (guild_id.GLOBAL === type) {
                      let tmp7;
                      let tmp8;
                      let tmp9;
                      const result = item.result;
                      const text = result.text;
                      const obj2 = onActionSheetDismiss(channel[13]);
                      if (text === obj2.MENTION_EVERYONE().text) {
                        tmp7 = ref(onMentionablePress(channel[12]).RoleIcon, {});
                        tmp8 = onMentionablePress;
                        tmp9 = ref;
                      } else {
                        const obj6 = { icon: ref(onMentionablePress(channel[15]).UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
                        const tmp2Result = onActionSheetDismiss(channel[14]);
                        tmp7 = ref(tmp2Result, obj6);
                        tmp8 = onMentionablePress;
                        tmp9 = ref;
                      }
                      const obj7 = { label: tmp9(tmp8(channel[10]).Text, obj8), icon: tmp7 };
                      const TableRow = tmp8(channel[16]).TableRow;
                      obj8 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: result.text };
                      const merged2 = Object.assign(obj);
                      return tmp9(TableRow, obj7, result.text);
                    }
                  }
                }
                const tmp27 = first2(onMentionablePress(channel[18]).AppLauncherCommandOptionActionSheet, obj4);
                cResult[19] = onActionSheetDismiss;
                cResult[20] = option;
                cResult[21] = tmp21;
                cResult[22] = tmp27;
                tmp25 = tmp27;
              }
            }
            class P {
              constructor(item) {
                let Text;
                let obj4;
                let obj8;
                let obj9;
                item = item.item;
                const index = item.index;
                let obj = {
                  onPress() {
                    const obj = { mentionable: item };
                    onMentionablePress(obj);
                    closure_10();
                  },
                  start: 0 === index,
                  end: index === first2.length - 1
                };
                const type = item.type;
                if (guild_id.USER === type) {
                  const result3 = item.result;
                  const user = result3.user;
                  const obj3 = { type: closure_5.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: ref(Text, obj4) };
                  obj4 = { color: "text-subtle", variant: "text-xs/normal", children: obj9.getUserTag(user) };
                  const tmp25 = onActionSheetDismiss(channel[9]);
                  Text = onMentionablePress(channel[10]).Text;
                  obj9 = onMentionablePress(channel[11]);
                  const merged = Object.assign(obj);
                  return ref(tmp25, obj3, user.id);
                } else if (guild_id.ROLE === type) {
                  const result2 = item.result;
                  const obj5 = { guildRole: result2, guildId: guild_id };
                  const RoleRow = onMentionablePress(channel[12]).RoleRow;
                  const merged1 = Object.assign(obj);
                  return ref(RoleRow, obj5, result2.id);
                } else if (guild_id.GLOBAL === type) {
                  let tmp7;
                  let tmp8;
                  let tmp9;
                  const result = item.result;
                  const text = result.text;
                  const obj2 = onActionSheetDismiss(channel[13]);
                  if (text === obj2.MENTION_EVERYONE().text) {
                    tmp7 = ref(onMentionablePress(channel[12]).RoleIcon, {});
                    tmp8 = onMentionablePress;
                    tmp9 = ref;
                  } else {
                    const obj6 = { icon: ref(onMentionablePress(channel[15]).UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
                    const tmp2Result = onActionSheetDismiss(channel[14]);
                    tmp7 = ref(tmp2Result, obj6);
                    tmp8 = onMentionablePress;
                    tmp9 = ref;
                  }
                  const obj7 = { label: tmp9(tmp8(channel[10]).Text, obj8), icon: tmp7 };
                  const TableRow = tmp8(channel[16]).TableRow;
                  obj8 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: result.text };
                  const merged2 = Object.assign(obj);
                  return tmp9(TableRow, obj7, result.text);
                }
              }
            }
            if (0 === tmp10) {
              tmp22Result = tmp22(tmp23.AppLauncherListEmptyState, {});
            } else {
              let obj5 = { ref, data: first2, renderItem: tmp16 };
              tmp22Result = tmp22(tmp23.AppLauncherList, obj5);
            }
            cResult[15] = tmp16;
            cResult[16] = first2;
            cResult[17] = 0 === tmp10;
            cResult[18] = tmp22Result;
            tmp21 = tmp22Result;
          }
        }
      }
      class P {
        constructor(item) {
          let Text;
          let obj4;
          let obj8;
          let obj9;
          item = item.item;
          const index = item.index;
          let obj = {
            onPress() {
              const obj = { mentionable: item };
              onMentionablePress(obj);
              closure_10();
            },
            start: 0 === index,
            end: index === first2.length - 1
          };
          const type = item.type;
          if (guild_id.USER === type) {
            const result3 = item.result;
            const user = result3.user;
            const obj3 = { type: closure_5.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: ref(Text, obj4) };
            obj4 = { color: "text-subtle", variant: "text-xs/normal", children: obj9.getUserTag(user) };
            const tmp25 = onActionSheetDismiss(channel[9]);
            Text = onMentionablePress(channel[10]).Text;
            obj9 = onMentionablePress(channel[11]);
            const merged = Object.assign(obj);
            return ref(tmp25, obj3, user.id);
          } else if (guild_id.ROLE === type) {
            const result2 = item.result;
            const obj5 = { guildRole: result2, guildId: guild_id };
            const RoleRow = onMentionablePress(channel[12]).RoleRow;
            const merged1 = Object.assign(obj);
            return ref(RoleRow, obj5, result2.id);
          } else if (guild_id.GLOBAL === type) {
            let tmp7;
            let tmp8;
            let tmp9;
            const result = item.result;
            const text = result.text;
            const obj2 = onActionSheetDismiss(channel[13]);
            if (text === obj2.MENTION_EVERYONE().text) {
              tmp7 = ref(onMentionablePress(channel[12]).RoleIcon, {});
              tmp8 = onMentionablePress;
              tmp9 = ref;
            } else {
              const obj6 = { icon: ref(onMentionablePress(channel[15]).UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
              const tmp2Result = onActionSheetDismiss(channel[14]);
              tmp7 = ref(tmp2Result, obj6);
              tmp8 = onMentionablePress;
              tmp9 = ref;
            }
            const obj7 = { label: tmp9(tmp8(channel[10]).Text, obj8), icon: tmp7 };
            const TableRow = tmp8(channel[16]).TableRow;
            obj8 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: result.text };
            const merged2 = Object.assign(obj);
            return tmp9(TableRow, obj7, result.text);
          }
        }
      }
      cResult[9] = guild_id;
      cResult[10] = tmp14;
      cResult[11] = first2.length;
      cResult[12] = onMentionablePress;
      cResult[13] = P;
      tmp16 = P;
    }
  }
  const fn = function x() {
    let globals;
    let roles;
    const obj = ApplicationCommandUtils;
    const applicationCommandOptionQueryOptions = obj.getApplicationCommandOptionQueryOptions(option);
    const obj2 = AutocompleteUtilsDefault;
    const obj3 = { query, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, canMentionOtherGlobals: applicationCommandOptionQueryOptions.canMentionOtherGlobals, request: true, limit: 10, allowSnowflake: true };
    const queryMentionResultsResult = obj2.queryMentionResults(obj3);
    const users = queryMentionResultsResult.users;
    const items = [...users.map((item) => ({ type: constants.USER, result: item })), ...roles.map((item) => ({ type: constants.ROLE, result: item })), ...globals.map((item) => ({ type: constants.GLOBAL, result: item }))];
    ({ roles, globals } = queryMentionResultsResult);
    closure_8(items);
  };
  const items2 = [query, option, channel];
  cResult[1] = channel;
  cResult[2] = option;
  cResult[3] = query;
  cResult[4] = fn;
  cResult[5] = items2;
  tmp12 = items2;
  tmp11 = fn;
}) : ((channel) => {
  let items1;
  let onActionSheetDismiss;
  let tmp9Result;
  ({ onMentionablePress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let query;
  const tmp = option(query.useState(""), 2);
  query = tmp[0];
  let closure_5 = tmp[1];
  const ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const guild_id = channel.guild_id;
  let items = [query, option, channel];
  const length = first1.length;
  const effect = query.useEffect(() => {
    let globals;
    let roles;
    const obj = ApplicationCommandUtils;
    const applicationCommandOptionQueryOptions = obj.getApplicationCommandOptionQueryOptions(option);
    const obj2 = AutocompleteUtilsDefault;
    const obj3 = { query, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, canMentionOtherGlobals: applicationCommandOptionQueryOptions.canMentionOtherGlobals, request: true, limit: 10, allowSnowflake: true };
    const queryMentionResultsResult = obj2.queryMentionResults(obj3);
    const users = queryMentionResultsResult.users;
    const items = [...users.map((item) => ({ type: constants.USER, result: item })), ...roles.map((item) => ({ type: constants.ROLE, result: item })), ...globals.map((item) => ({ type: constants.GLOBAL, result: item }))];
    ({ roles, globals } = queryMentionResultsResult);
    closure_8(items);
  }, items);
  let tmp8 = channel;
  let obj = { option, onDismiss: onActionSheetDismiss, children: items1 };
  let tmp9 = ref;
  const AppLauncherCommandOptionActionSheet = require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet;
  let obj2 = {
    onChange(str) {
      closure_5(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  items1 = [ref(require("AppLauncherList").AppLauncherListSearchBar, obj2), ];
  const tmp6 = first1;
  if (0 === length) {
    tmp9Result = tmp9(require("AppLauncherList").AppLauncherListEmptyState, {});
  } else {
    let obj3 = {
      ref,
      data: first1,
      renderItem(item) {
          let Text;
          let obj4;
          let obj8;
          let obj9;
          item = item.item;
          const index = item.index;
          let obj = {
            onPress() {
              const obj = { mentionable: item };
              require(obj);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(AppLauncherMentionableListActionSheet);
              onActionSheetDismiss();
            },
            start: 0 === index,
            end: index === first1.length - 1
          };
          const type = item.type;
          if (guild_id.USER === type) {
            const result3 = item.result;
            const user = result3.user;
            const obj3 = { type: closure_5.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: ref(Text, obj4) };
            obj4 = { color: "text-subtle", variant: "text-xs/normal", children: obj9.getUserTag(user) };
            const tmp25 = onActionSheetDismiss(channel[9]);
            Text = require("Text/Text").Text;
            obj9 = require("UserUtils");
            const merged = Object.assign(obj);
            return ref(tmp25, obj3, user.id);
          } else if (guild_id.ROLE === type) {
            const result2 = item.result;
            const obj5 = { guildRole: result2, guildId: guild_id };
            const RoleRow = require("AppLauncherRoleListActionSheet").RoleRow;
            const merged1 = Object.assign(obj);
            return ref(RoleRow, obj5, result2.id);
          } else if (guild_id.GLOBAL === type) {
            let tmp7;
            let tmp8;
            let tmp9;
            const result = item.result;
            const text = result.text;
            let obj2 = onActionSheetDismiss(channel[13]);
            if (text === obj2.MENTION_EVERYONE().text) {
              tmp7 = ref(require("AppLauncherRoleListActionSheet").RoleIcon, {});
              tmp8 = require;
              tmp9 = ref;
            } else {
              const obj6 = { icon: ref(require("UserCircleIcon").UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
              const tmp2Result = onActionSheetDismiss(channel[14]);
              tmp7 = ref(tmp2Result, obj6);
              tmp8 = require;
              tmp9 = ref;
            }
            const obj7 = { label: tmp9(tmp8(channel[10]).Text, obj8), icon: tmp7 };
            const TableRow = tmp8(channel[16]).TableRow;
            obj8 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: result.text };
            const merged2 = Object.assign(obj);
            return tmp9(TableRow, obj7, result.text);
          }
        }
    };
    tmp9Result = tmp9(require("AppLauncherList").AppLauncherList, obj3);
  }
  items1[1] = tmp9Result;
  return tmp6(AppLauncherCommandOptionActionSheet, obj);
});
let result = size.fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx");

export default tmp3;
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export { MentionableItemTypes };
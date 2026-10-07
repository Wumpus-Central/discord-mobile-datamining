// === Module 11818: AppLauncherMentionableListActionSheet ===

// Module 11818 (AppLauncherMentionableListActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5628 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7043 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let RelationshipTypes = fn(1085).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const AppLauncherMentionableListActionSheet = "AppLauncherMentionableListActionSheet";
const MentionableItemTypes = { USER: "user", ROLE: "role", GLOBAL: "global" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onMentionablePress) => {
  const cResult = onMentionablePress(channel[5]).c(23);
  onMentionablePress = onMentionablePress.onMentionablePress;
  const onActionSheetDismiss = onMentionablePress.onActionSheetDismiss;
  channel = onMentionablePress.channel;
  const option = onMentionablePress.option;
  const tmp5 = option(query.useState(""), 2);
  query = tmp5[0];
  RelationshipTypes = tmp5[1];
  const ref = query.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  const tmp4Result = option(query.useState(first1), 2);
  const first2 = tmp4Result[0];
  closure_8 = tmp4Result[1];
  const guild_id = channel.guild_id;
  if (cResult[1] === channel) {
    if (cResult[2] === option) {
      if (cResult[3] === query) {
        let tmp11 = cResult[4];
        let tmp12 = cResult[5];
      }
      const effect = obj2.useEffect(tmp11, tmp12);
      if (cResult[6] !== onActionSheetDismiss) {
        const fn2 = function _() {
          ActionSheetActionCreatorsDefault.hideActionSheet(AppLauncherMentionableListActionSheet);
          onActionSheetDismiss();
        };
        cResult[6] = onActionSheetDismiss;
        cResult[7] = fn2;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[7];
      }
      closure_10 = tmp14;
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
        let tmp15 = fn3;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === guild_id) {
        if (cResult[10] === tmp14) {
          if (cResult[11] === first2.length) {
            if (cResult[12] === onMentionablePress) {
              let tmp16 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              let obj3 = { onChange: tmp15 };
              const tmp19 = ref(tmp(tmp2[17]).AppLauncherListSearchBar, obj3);
              cResult[14] = tmp19;
              let tmp17 = tmp19;
            } else {
              tmp17 = cResult[14];
            }
            if (cResult[15] === tmp16) {
              if (cResult[16] === first2) {
                if (cResult[17] === tmp20) {
                  if (cResult[19] === onActionSheetDismiss) {
                    if (cResult[20] === option) {
                      if (cResult[21] === tmp21) {
                        let tmp25 = cResult[22];
                      }
                      return tmp25;
                    }
                  }
                  let obj4 = { option, onDismiss: onActionSheetDismiss, children: null };
                  const items1 = [tmp17, ];
                  class P {
                    constructor(arg0) {
                      item = onMentionablePress.item;
                      index = onMentionablePress.index;
                      obj = {
                        onPress() {
                                              onMentionablePress({ mentionable: item });
                                              closure_10();
                                            },
                        start: 0 === index,
                        end: index === closure_7.length - 1
                      };
                      type = item.type;
                      tmp = guild_id;
                      if (guild_id.USER === type) {
                        result3 = item.result;
                        user = result3.user;
                        tmp22 = closure_6;
                        tmp23 = onActionSheetDismiss;
                        tmp24 = channel;
                        obj1 = { type: null, user: null, nickname: null, guildId: null, subLabel: null };
                        tmp26 = closure_5;
                        obj1.type = closure_5.NONE;
                        obj1.user = user;
                        obj1.nickname = result3.nick;
                        tmp27 = guild_id;
                        obj1.guildId = guild_id;
                        tmp28 = onMentionablePress;
                        tmp25 = onActionSheetDismiss(channel[9]);
                        obj10 = { color: "text-subtle", variant: "text-xs/normal", children: null };
                        obj9 = onMentionablePress(channel[11]);
                        obj10.children = obj9.getUserTag(user);
                        obj1.subLabel = closure_6(onMentionablePress(channel[10]).Text, obj10);
                        tmp29 = obj1;
                        tmp30 = obj;
                        merged = Object.assign(obj);
                        return closure_6(tmp25, obj1, user.id);
                      } else if (tmp.ROLE === type) {
                        result2 = item.result;
                        tmp15 = closure_6;
                        tmp16 = onMentionablePress;
                        tmp17 = channel;
                        obj11 = { guildRole: null, guildId: null };
                        obj11.guildRole = result2;
                        tmp18 = guild_id;
                        obj11.guildId = guild_id;
                        tmp19 = obj11;
                        tmp20 = obj;
                        merged1 = Object.assign(obj);
                        return closure_6(onMentionablePress(channel[12]).RoleRow, obj11, result2.id);
                      } else if (tmp.GLOBAL === type) {
                        result = item.result;
                        tmp3 = channel;
                        tmp2 = onActionSheetDismiss;
                        obj2 = onActionSheetDismiss(channel[13]);
                        if (result.text === obj2.MENTION_EVERYONE().text) {
                          tmp10 = closure_6;
                          tmp11 = onMentionablePress;
                          tmp7 = closure_6(onMentionablePress(tmp3[12]).RoleIcon, {});
                          tmp8 = onMentionablePress;
                          tmp9 = closure_6;
                        } else {
                          tmp4 = closure_6;
                          obj12 = { icon: null };
                          tmp6 = onMentionablePress;
                          tmp2Result = tmp2(tmp3[14]);
                          obj12.icon = closure_6(onMentionablePress(tmp3[15]).UserCircleIcon, { size: "sm", color: "interactive-text-default" });
                          tmp7 = closure_6(tmp2Result, obj12);
                          tmp8 = onMentionablePress;
                          tmp9 = closure_6;
                        }
                        obj13 = { label: null, icon: null };
                        obj14 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
                        obj14.children = result.text;
                        obj13.label = tmp9(tmp8(tmp3[10]).Text, obj14);
                        obj13.icon = tmp7;
                        tmp12 = obj13;
                        tmp13 = obj;
                        merged2 = Object.assign(obj);
                        return tmp9(tmp8(tmp3[16]).TableRow, obj13, result.text);
                      } else {
                        return;
                      }
                    }
                  }
                  obj4.children = items1;
                  const tmp27 = first2(tmp(tmp2[18]).AppLauncherCommandOptionActionSheet, obj4);
                  cResult[19] = onActionSheetDismiss;
                  cResult[20] = option;
                  cResult[21] = cResult[18];
                  cResult[22] = tmp27;
                  tmp25 = tmp27;
                }
              }
            }
            class P {
              constructor(arg0) {
                item = onMentionablePress.item;
                index = onMentionablePress.index;
                obj = {
                  onPress() {
                                  onMentionablePress({ mentionable: item });
                                  closure_10();
                                },
                  start: 0 === index,
                  end: index === closure_7.length - 1
                };
                type = item.type;
                tmp = guild_id;
                if (guild_id.USER === type) {
                  result3 = item.result;
                  user = result3.user;
                  tmp22 = closure_6;
                  tmp23 = onActionSheetDismiss;
                  tmp24 = channel;
                  obj1 = { type: null, user: null, nickname: null, guildId: null, subLabel: null };
                  tmp26 = closure_5;
                  obj1.type = closure_5.NONE;
                  obj1.user = user;
                  obj1.nickname = result3.nick;
                  tmp27 = guild_id;
                  obj1.guildId = guild_id;
                  tmp28 = onMentionablePress;
                  tmp25 = onActionSheetDismiss(channel[9]);
                  obj10 = { color: "text-subtle", variant: "text-xs/normal", children: null };
                  obj9 = onMentionablePress(channel[11]);
                  obj10.children = obj9.getUserTag(user);
                  obj1.subLabel = closure_6(onMentionablePress(channel[10]).Text, obj10);
                  tmp29 = obj1;
                  tmp30 = obj;
                  merged = Object.assign(obj);
                  return closure_6(tmp25, obj1, user.id);
                } else if (tmp.ROLE === type) {
                  result2 = item.result;
                  tmp15 = closure_6;
                  tmp16 = onMentionablePress;
                  tmp17 = channel;
                  obj11 = { guildRole: null, guildId: null };
                  obj11.guildRole = result2;
                  tmp18 = guild_id;
                  obj11.guildId = guild_id;
                  tmp19 = obj11;
                  tmp20 = obj;
                  merged1 = Object.assign(obj);
                  return closure_6(onMentionablePress(channel[12]).RoleRow, obj11, result2.id);
                } else if (tmp.GLOBAL === type) {
                  result = item.result;
                  tmp3 = channel;
                  tmp2 = onActionSheetDismiss;
                  obj2 = onActionSheetDismiss(channel[13]);
                  if (result.text === obj2.MENTION_EVERYONE().text) {
                    tmp10 = closure_6;
                    tmp11 = onMentionablePress;
                    tmp7 = closure_6(onMentionablePress(tmp3[12]).RoleIcon, {});
                    tmp8 = onMentionablePress;
                    tmp9 = closure_6;
                  } else {
                    tmp4 = closure_6;
                    obj12 = { icon: null };
                    tmp6 = onMentionablePress;
                    tmp2Result = tmp2(tmp3[14]);
                    obj12.icon = closure_6(onMentionablePress(tmp3[15]).UserCircleIcon, { size: "sm", color: "interactive-text-default" });
                    tmp7 = closure_6(tmp2Result, obj12);
                    tmp8 = onMentionablePress;
                    tmp9 = closure_6;
                  }
                  obj13 = { label: null, icon: null };
                  obj14 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
                  obj14.children = result.text;
                  obj13.label = tmp9(tmp8(tmp3[10]).Text, obj14);
                  obj13.icon = tmp7;
                  tmp12 = obj13;
                  tmp13 = obj;
                  merged2 = Object.assign(obj);
                  return tmp9(tmp8(tmp3[16]).TableRow, obj13, result.text);
                } else {
                  return;
                }
              }
            }
            if (0 === tmp10) {
              let obj5 = {};
              let tmp22Result = tmp22(obj5.AppLauncherListEmptyState, obj5);
            } else {
              let obj6 = { ref, data: first2, renderItem: tmp16 };
              tmp22Result = tmp22(obj5.AppLauncherList, obj6);
            }
            cResult[15] = tmp16;
            cResult[16] = first2;
            cResult[17] = 0 === tmp10;
            cResult[18] = tmp22Result;
          }
        }
      }
      class P {
        constructor(arg0) {
          item = onMentionablePress.item;
          index = onMentionablePress.index;
          obj = {
            onPress() {
                      onMentionablePress({ mentionable: item });
                      closure_10();
                    },
            start: 0 === index,
            end: index === closure_7.length - 1
          };
          type = item.type;
          tmp = guild_id;
          if (guild_id.USER === type) {
            result3 = item.result;
            user = result3.user;
            tmp22 = closure_6;
            tmp23 = onActionSheetDismiss;
            tmp24 = channel;
            obj1 = { type: null, user: null, nickname: null, guildId: null, subLabel: null };
            tmp26 = closure_5;
            obj1.type = closure_5.NONE;
            obj1.user = user;
            obj1.nickname = result3.nick;
            tmp27 = guild_id;
            obj1.guildId = guild_id;
            tmp28 = onMentionablePress;
            tmp25 = onActionSheetDismiss(channel[9]);
            obj10 = { color: "text-subtle", variant: "text-xs/normal", children: null };
            obj9 = onMentionablePress(channel[11]);
            obj10.children = obj9.getUserTag(user);
            obj1.subLabel = closure_6(onMentionablePress(channel[10]).Text, obj10);
            tmp29 = obj1;
            tmp30 = obj;
            merged = Object.assign(obj);
            return closure_6(tmp25, obj1, user.id);
          } else if (tmp.ROLE === type) {
            result2 = item.result;
            tmp15 = closure_6;
            tmp16 = onMentionablePress;
            tmp17 = channel;
            obj11 = { guildRole: null, guildId: null };
            obj11.guildRole = result2;
            tmp18 = guild_id;
            obj11.guildId = guild_id;
            tmp19 = obj11;
            tmp20 = obj;
            merged1 = Object.assign(obj);
            return closure_6(onMentionablePress(channel[12]).RoleRow, obj11, result2.id);
          } else if (tmp.GLOBAL === type) {
            result = item.result;
            tmp3 = channel;
            tmp2 = onActionSheetDismiss;
            obj2 = onActionSheetDismiss(channel[13]);
            if (result.text === obj2.MENTION_EVERYONE().text) {
              tmp10 = closure_6;
              tmp11 = onMentionablePress;
              tmp7 = closure_6(onMentionablePress(tmp3[12]).RoleIcon, {});
              tmp8 = onMentionablePress;
              tmp9 = closure_6;
            } else {
              tmp4 = closure_6;
              obj12 = { icon: null };
              tmp6 = onMentionablePress;
              tmp2Result = tmp2(tmp3[14]);
              obj12.icon = closure_6(onMentionablePress(tmp3[15]).UserCircleIcon, { size: "sm", color: "interactive-text-default" });
              tmp7 = closure_6(tmp2Result, obj12);
              tmp8 = onMentionablePress;
              tmp9 = closure_6;
            }
            obj13 = { label: null, icon: null };
            obj14 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
            obj14.children = result.text;
            obj13.label = tmp9(tmp8(tmp3[10]).Text, obj14);
            obj13.icon = tmp7;
            tmp12 = obj13;
            tmp13 = obj;
            merged2 = Object.assign(obj);
            return tmp9(tmp8(tmp3[16]).TableRow, obj13, result.text);
          } else {
            return;
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
    const applicationCommandOptionQueryOptions = ApplicationCommandUtils.getApplicationCommandOptionQueryOptions(option);
    const queryMentionResultsResult = AutocompleteUtilsDefault.queryMentionResults({ query, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, canMentionOtherGlobals: applicationCommandOptionQueryOptions.canMentionOtherGlobals, request: true, limit: 10, allowSnowflake: true });
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
});
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export { MentionableItemTypes };
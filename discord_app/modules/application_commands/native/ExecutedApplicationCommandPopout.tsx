// === Module 10806: getCommandOptionComponents ===

// Module 10806 (getCommandOptionComponents)
import ThemesDefault from "Themes" /* 712 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import getIndexKey from "getIndexKey" /* 8448 */;
import { SUB_COMMAND_KEY_SEPARATOR } from "TRUE_OPTION_NAME" /* 5246 */;
import ME from "ME" /* 676 */;
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import regExp from "regExp" /* 6810 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
function getCommandOptionComponents(option) {
  let channel = option.channel;
  ({ guild, commandOptionSpec, styles } = option);
  const text = `${option.parentOptionName} ${iter.name}`;
  let items = [];
  let name_localized;
  ({ messageId, analyticsLocations } = option);
  if (commandOptionSpec != null) {
    name_localized = commandOptionSpec.name_localized;
  }
  if (name_localized == null) {
    name_localized = iter.name;
  }
  if (null != option.option.value) {
    const _HermesInternal2 = HermesInternal;
    let str = ":";
    let combined = " " + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = " " + name_localized;
  }
  if (option.option.type !== option.option(1954).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== tmp6(1954).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      if (null != iter.value) {
        function getUserComponent(user, styles) {
          let obj = {
            style: styles.commandOptionMentionText,
            onPress() {
              let obj = channel(dependencyMap[18]);
              obj.hideActionSheet();
              obj = { userId: user.id, channelId: null };
              let id;
              if (closure_1_1 != null) {
                id = closure_1_1.id;
              }
              obj[1] = id;
              channel(dependencyMap[19])(obj);
            },
            children: null
          };
          const items = [closure_1_20, channel(dependencyMap[20]).getUserTag(user, { decoration: "never" })];
          obj[2] = items;
          return closure_1_22(user(dependencyMap[17]).LegacyText, obj, "optionValue-" + user.name);
        }
        function getCommandValueText(intl) {
          return closure_1_21(iter(dependencyMap[21]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl }, "optionValue-" + iter.name);
        }
        const type = iter.type;
        if (tmp6(1954).ApplicationCommandOptionType.USER === type) {
          const user = authStore.getUser(iter.value.toString());
          let userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
        } else if (tmp6(1954).ApplicationCommandOptionType.CHANNEL === type) {
          channel = store.getChannel(iter.value.toString());
          userComponent = null;
          if (null != channel) {
            let obj = { style: null, children: null };
            obj[0] = styles.commandOptionMentionText;
            const items1 = [closure_18, tmp6(4984).computeChannelName(channel, authStore, closure_11)];
            obj[1] = items1;
            const _HermesInternal3 = HermesInternal;
            userComponent = callback2(tmp6(1297).LegacyText, obj, "optionValue-" + iter.name);
            const tmp6Result = tmp6(4984);
          }
        } else {
          function getRoleComponent(role) {
            const items = [closure_1_20, role.name];
            return closure_1_22(iter(dependencyMap[17]).LegacyText, { style: styles.commandOptionMentionText, children: items }, "optionValue-" + iter.name);
          }
          if (tmp6(1954).ApplicationCommandOptionType.ROLE === type) {
            const value = iter.value;
            let role;
            if (null != guild) {
              role = store2.getRole(guild.id, tmp14);
            }
            userComponent = null;
            if (null != role) {
              userComponent = getRoleComponent(role);
            }
          } else if (tmp6(1954).ApplicationCommandOptionType.MENTIONABLE === type) {
            str = iter.value.toString();
            let role1;
            if (null != guild) {
              role1 = store2.getRole(guild.id, str);
            }
            if (null != role1) {
              userComponent = getRoleComponent(role1);
            } else {
              const user1 = authStore.getUser(str);
              userComponent = null;
              if (null != user1) {
                userComponent = getUserComponent(user1, styles);
              }
            }
          } else {
            userComponent = null;
            if (tmp6(1954).ApplicationCommandOptionType.ATTACHMENT === type) {
              const intl = tmp6(1236).intl;
              userComponent = getCommandValueText(intl.string(tmp6(1236).t.nONJVc));
            }
          }
        }
        let str6 = true;
        if (null == userComponent) {
          let found;
          if (commandOptionSpec != null) {
            const choices = commandOptionSpec.choices;
            if (choices != null) {
              found = choices.find((item, index) => item.value === iter.value);
            }
          }
          let str1 = iter.value.toString();
          if (null != found) {
            let name = found.name_localized;
            if (name == null) {
              name = found.name;
            }
            str1 = name;
          }
          let tmp27 = str1.length > 0;
          if (tmp27) {
            tmp27 = !regex.test(str1[0]);
          }
          userComponent = getCommandValueText(str1);
          str6 = tmp27;
        }
        if (str6) {
          str6 = " ";
        }
        obj = { children: null };
        obj[0] = combined + str6;
        const _HermesInternal4 = HermesInternal;
        const items2 = [callback(tmp6(1297).LegacyText, obj, "optionKey-" + iter.name), userComponent];
        obj[0] = items2;
        items.push(callback2(React.Fragment, obj, text));
      }
      return items;
    }
  }
  items.push(callback(React.Fragment, { children: callback(option.option(1297).LegacyText, { children: combined }, "optionKey-" + option.option.name) }, text));
  if (null != option.option.options) {
    let options;
    if (commandOptionSpec != null) {
      options = commandOptionSpec.options;
    }
    if (options == null) {
      options = [];
    }
    options = iter.options;
    const iter2 = options[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let obj2 = { option: null, channel: null, guild: null, messageId: null, parentOptionName: null, commandOptionSpec: null, styles: null, analyticsLocations: null };
      obj2[0] = nextResult;
      obj2[1] = channel;
      obj2[2] = guild;
      obj2[3] = messageId;
      obj2[4] = text;
      obj2[5] = fromEntriesResult[nextResult.name];
      obj2[6] = styles;
      obj2[7] = analyticsLocations;
      items = items.concat(getCommandOptionComponents(obj2));
      continue;
    }
    fromEntriesResult = Object.fromEntries(options.map((item, index) => {
      const items = [item.name, item];
      return items;
    }));
  }
  return items;
}
function getCommandCopyText(item10118, channel, id, name_localized) {
  const _require = item10118;
  let items = [];
  name_localized = undefined;
  if (name_localized != null) {
    name_localized = name_localized.name_localized;
  }
  if (name_localized == null) {
    name_localized = item10118.name;
  }
  if (null != item10118.value) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    let str = "";
    combined = "" + name_localized;
  }
  if (item10118.type !== _require(1954).ApplicationCommandOptionType.SUB_COMMAND) {
    if (item10118.type !== tmp5(1954).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      let sum = null;
      if (null != item10118.value) {
        const type = item10118.type;
        if (tmp5(1954).ApplicationCommandOptionType.USER === type) {
          const user = authStore.getUser(item10118.value.toString());
          sum = null;
          if (null != user) {
            sum = closure_20 + nameFromUserDefault.getUserTag(user, { decoration: "never" });
          }
        } else if (tmp5(1954).ApplicationCommandOptionType.CHANNEL === type) {
          channel = store.getChannel(item10118.value.toString());
          sum = null;
          if (null != channel) {
            sum = closure_18 + tmp5(4984).computeChannelName(channel, authStore, closure_11);
            const tmp5Result = tmp5(4984);
          }
        } else if (tmp5(1954).ApplicationCommandOptionType.ROLE === type) {
          const value = item10118.value;
          let role;
          if (null != id) {
            role = store2.getRole(id.id, tmp15);
          }
          sum = null;
          if (null != role) {
            sum = closure_20 + role.name;
          }
        } else {
          sum = null;
          if (tmp5(1954).ApplicationCommandOptionType.MENTIONABLE === type) {
            str = item10118.value.toString();
            let role1;
            if (null != id) {
              role1 = store2.getRole(id.id, str);
            }
            if (null != role1) {
              sum = closure_20 + role1.name;
            } else {
              const user1 = authStore.getUser(str);
              sum = null;
              if (null != user1) {
                sum = closure_20 + nameFromUserDefault.getUserTag(user1, { decoration: "never" });
              }
            }
          }
        }
      }
      if (null != sum) {
        items.push(combined + sum);
        return items;
      } else {
        let found;
        if (name_localized != null) {
          const choices = name_localized.choices;
          if (choices != null) {
            found = choices.find((item, index) => item.value === item10118.value);
          }
        }
        if (null != found) {
          let name = found.name_localized;
          if (name == null) {
            name = found.name;
          }
          let StringResult = name;
        } else {
          const _String = String;
          StringResult = String(item10118.value);
        }
      }
    }
  }
  items.push(combined);
  if (null != item10118.options) {
    let options;
    const _Object = Object;
    if (name_localized != null) {
      options = name_localized.options;
    }
    if (options == null) {
      options = [];
    }
    options = item10118.options;
    for (const item10118 of options) {
      items = items.concat(getCommandCopyText(item10118, arg1, arg2, tmp35[item10118.name]));
      continue;
    }
  }
  return items;
}
function CommandContentContainer(channelId) {
  channelId = channelId.channelId;
  ({ author: importDefault, applicationUser: importAll, data } = channelId);
  ({ guildId: closure_4, messageType: closure_5, messageId } = channelId);
  let channel;
  let tmp = callback3();
  closure_7 = tmp;
  const analyticsLocations = importDefault(data[24])().analyticsLocations;
  let obj = channelId(data[25]);
  let items = [closure_7, channel];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    channel = channel.getChannel(channelId);
    const obj = { channel, guild: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[1] = channel.getGuild(guild_id);
    return obj;
  }, items1);
  channel = stateFromStoresObject.channel;
  const guild = stateFromStoresObject.guild;
  let application_command = data.application_command;
  let name_localized;
  if (application_command != null) {
    name_localized = application_command.name_localized;
  }
  if (name_localized == null) {
    name_localized = data.name;
  }
  const intl = tmp3(tmp2[23]).intl;
  const items2 = [channel, guild, messageId, , , , , , ];
  ({ name: arr3[3], options: arr3[4], application_command: arr3[5] } = data);
  items2[6] = name_localized;
  items2[7] = tmp;
  items2[8] = analyticsLocations;
  const memo = React.useMemo(() => {
    let obj = { children: `/${name_localized}` };
    let items = [closure_1_21(channelId(data[17]).LegacyText, obj, "integrationName-" + data.name)];
    let combined = items;
    if (null != data.options) {
      const application_command = data.application_command;
      let options;
      if (application_command != null) {
        options = application_command.options;
      }
      if (options == null) {
        options = [];
      }
      options = data.options;
      const iter = options[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        obj = { option: null, channel: null, guild: null, messageId: null, parentOptionName: "", commandOptionSpec: null, styles: null, analyticsLocations: null };
        obj[0] = nextResult;
        obj[1] = channel;
        obj[2] = guild;
        obj[3] = messageId;
        obj[5] = fromEntriesResult[nextResult.name];
        obj[6] = closure_7;
        obj[7] = analyticsLocations;
        combined = combined.concat(getCommandOptionComponents(obj));
        continue;
      }
      fromEntriesResult = Object.fromEntries(options.map((item, index) => {
        const items = [item.name, item];
        return items;
      }));
    }
    return combined;
  }, items2);
  obj = { children: null };
  const formatResult = intl.format(channelId(data[23]).t["sj/RT9"], obj);
  const items3 = [callback(channelId(data[21]).Text, { style: tmp.commandText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl.format(channelId(data[23]).t["sj/RT9"], obj) }, "commandName-" + data.name), callback(channelId(data[21]).Text, { style: tmp.commandOptionText, variant: "text-md/medium", color: "text-default", children: memo }, "commandOption-" + data.name)];
  obj[0] = items3;
  return callback2(channelId(data[28]).Card, obj);
}
function CommandActionsContainer(channelId) {
  channelId = channelId.channelId;
  const chatInputRef = channelId.chatInputRef;
  const data = channelId.data;
  let channel;
  let guild;
  closure_5 = undefined;
  let options = data.options;
  let someResult;
  if (options != null) {
    someResult = options.some((item, index) => item.type === channelId(channel[16]).ApplicationCommandOptionType.ATTACHMENT);
  }
  let obj = channelId(channel[25]);
  let items = [closure_7, closure_9];
  let items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    channel = closure_1_7.getChannel(channelId);
    const obj = { channel, guild: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[1] = closure_1_9.getGuild(guild_id);
    return obj;
  }, items1);
  channel = stateFromStoresObject.channel;
  guild = stateFromStoresObject.guild;
  let items2 = [data, channel, guild];
  closure_5 = guild.useCallback(() => {
    const application_command = data.application_command;
    let name_localized;
    if (application_command != null) {
      name_localized = application_command.name_localized;
    }
    if (name_localized == null) {
      name_localized = data.name;
    }
    let items = [closure_1_19 + name_localized];
    let combined = items;
    if (null != data.options) {
      const application_command2 = data.application_command;
      let options;
      const _Object = Object;
      if (application_command2 != null) {
        options = application_command2.options;
      }
      if (options == null) {
        options = [];
      }
      options = data.options;
      for (const item10021 of options) {
        combined = combined.concat(getCommandCopyText(item10021, channel, guild, tmp3[item10021.name]));
        continue;
      }
    }
    if (obj2.isAndroid()) {
      const obj3 = chatInputRef(channel[30]);
      if (obj3 != null) {
        const _JSON2 = JSON;
        const json = JSON.stringify(data);
        const result = obj3.setItem(json, "application/x-discord-interaction-data", combined.join(" "));
      }
    } else {
      const DCDClipboardManager = closure_1_6.DCDClipboardManager;
      const _JSON = JSON;
      const json1 = JSON.stringify(data);
      const result1 = DCDClipboardManager.setItem(json1, "application/x-discord-interaction-data", combined.join(" "));
    }
    if (null != channel) {
      let obj = { channel: null, type: "channel" };
      obj[0] = tmp27;
      obj = { commandTypes: null };
      const items1 = [channelId(channel[16]).ApplicationCommandType.CHAT];
      obj[0] = items1;
      const query = closure_1_13.query(obj, obj, { allowFetch: true });
    }
    obj2 = channelId(channel[29]);
    channelId(channel[31]).presentCommandCopied();
    const tmp13Result = channelId(channel[31]);
  }, items2);
  const items3 = [];
  if (!someResult) {
    obj = { label: null, onPress: null };
    const intl = tmp2(tmp3[23]).intl;
    obj[0] = intl.string(tmp2(tmp3[23]).t["42H+Nb"]);
    obj[1] = function onPress() {
      chatInputRef(channel[18]).hideActionSheet();
      callback();
    };
    items3.push(callback(tmp2(tmp3[32]).TableRow, obj));
  }
  if (null != chatInputRef) {
    obj = { label: null, onPress: null };
    const intl2 = tmp2(tmp3[23]).intl;
    obj[0] = intl2.string(tmp2(tmp3[23]).t.lNWC7s);
    obj[1] = function onPress() {
      let obj = chatInputRef(channel[18]);
      obj.hideActionSheet();
      if (null != data.options) {
        if (data.options.length > 0) {
          const items = [channelId(channel[16]).ApplicationCommandOptionType.SUB_COMMAND, channelId(channel[16]).ApplicationCommandOptionType.SUB_COMMAND_GROUP];
          if (items.includes(data.options[0].type)) {
            const items1 = [data.options[0].name];
            let options = data.options[0].options;
            let hasItem = null != options && options.length > 0;
            if (hasItem) {
              const items2 = [channelId(channel[16]).ApplicationCommandOptionType.SUB_COMMAND, channelId(channel[16]).ApplicationCommandOptionType.SUB_COMMAND_GROUP];
              hasItem = items2.includes(options[0].type);
            }
            if (hasItem) {
              items1.push(options[0].name);
              options = options[0].options;
            }
            if (chatInputRef != null) {
              const current2 = chatInputRef.current;
              if (current2 != null) {
                obj = { type: null, context: null };
                obj[0] = channelId(channel[33]).KeyboardTypes.APP_LAUNCHER;
                obj = { initialRouteName: null, analyticsLocation: null, preSelectedCommand: null };
                obj[0] = AppLauncherRouteName.COMMAND_VIEW;
                obj[1] = channelId(channel[34]).ApplicationCommandTriggerLocations.RECALL;
                obj1 = { commandId: null, prefilledOptions: null };
                const sum = data.id + SUB_COMMAND_KEY_SEPARATOR;
                obj1[0] = sum + items1.join(SUB_COMMAND_KEY_SEPARATOR);
                obj1[1] = options;
                obj[2] = obj1;
                obj[1] = obj;
                current2.openCustomKeyboard(obj);
              }
            }
          }
        }
      }
      if (chatInputRef != null) {
        const current = chatInputRef.current;
        if (current != null) {
          const obj2 = { type: null, context: null };
          obj2[0] = channelId(channel[33]).KeyboardTypes.APP_LAUNCHER;
          const obj3 = { initialRouteName: null, analyticsLocation: null, preSelectedCommand: null };
          obj3[0] = AppLauncherRouteName.COMMAND_VIEW;
          obj3[1] = channelId(channel[34]).ApplicationCommandTriggerLocations.RECALL;
          const obj4 = { commandId: null, prefilledOptions: null };
          ({ id: obj4[0], options: obj4[1] } = data);
          obj3[2] = obj4;
          obj2[1] = obj3;
          current.openCustomKeyboard(obj2);
        }
      }
    };
    items3.push(callback(tmp2(tmp3[32]).TableRow, obj));
  }
  let tmp9 = null;
  if (0 !== items3.length) {
    obj1 = { spacing: 8, children: null };
    let obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[23]).intl;
    obj2[2] = intl3.string(tmp2(tmp3[23]).t["3eF5/L"]);
    const items4 = [callback(tmp2(tmp3[21]).Text, obj2), ];
    let obj3 = { hasIcons: false, children: null };
    obj3[1] = items3.map((item, index) => callback2(guild.Fragment, { children: item }, index));
    items4[1] = callback(tmp2(tmp3[36]).TableRowGroup, obj3);
    obj1[1] = items4;
    tmp9 = callback2(tmp2(tmp3[35]).Stack, obj1);
  }
  return tmp9;
}
({ ActivityIndicator: c5, NativeModules: closure_6 } = get_ActivityIndicator);
({ MessageTypes: closure_15, WHITESPACE_RE: closure_16, Fonts } = ME);
({ CHANNEL_SENTINEL: closure_18, COMMAND_SENTINEL: closure_19, MENTION_SENTINEL: closure_20 } = regExp);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
createCacheKey = { fontFamily: Fonts.PRIMARY_SEMIBOLD };
createCacheKey[6] = { color: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[7] = { fontSize: 16, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_24 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default function ExecutedCommandPopout(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
  const tmp = callback3();
  let obj = channelId(589);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getMessage(channelId, messageId));
  const items1 = [channelId, messageId, ];
  let interactionData;
  if (stateFromStores != null) {
    interactionData = stateFromStores.interactionData;
  }
  items1[2] = interactionData;
  const effect = React.useEffect(() => {
    let interactionData;
    if (stateFromStores != null) {
      interactionData = stateFromStores.interactionData;
    }
    let tmp3 = null == interactionData;
    if (!tmp3) {
      let type;
      if (stateFromStores != null) {
        type = stateFromStores.interactionData.type;
      }
      let tmp7 = type === channelId(dependencyMap[16]).ApplicationCommandType.CHAT;
      if (tmp7) {
        let application_command;
        if (stateFromStores != null) {
          application_command = stateFromStores.interactionData.application_command;
        }
        tmp7 = undefined === application_command;
      }
      tmp3 = tmp7;
    }
    if (tmp3) {
      const messageInteractionData = stateFromStores(dependencyMap[38]).fetchMessageInteractionData(channelId, messageId);
      const obj = stateFromStores(dependencyMap[38]);
    }
  }, items1);
  { value: messageId(7139)(messageId(7159).EXECUTED_COMMAND).analyticsLocations, children: null };
  obj = { startExpanded: true, bodyStyles: tmp.container, children: null };
  let interactionData1;
  if (stateFromStores != null) {
    interactionData1 = stateFromStores.interactionData;
  }
  if (null != interactionData1) {
    obj1 = { guildId: null, user: null, channelId: null, messageId: null, author: null, applicationUser: null, data: null, messageType: null };
    obj1[0] = guildId;
    obj1[1] = user;
    obj1[2] = channelId;
    obj1[3] = messageId;
    obj1[4] = author;
    obj1[5] = applicationUser;
    let interactionData2;
    if (stateFromStores != null) {
      interactionData2 = stateFromStores.interactionData;
    }
    obj1[6] = interactionData2;
    obj1[7] = messageType;
    const items2 = [callback(CommandContentContainer, obj1), ];
    const obj2 = { channelId: null, chatInputRef: null, data: null };
    obj2[0] = channelId;
    obj2[1] = chatInputRef;
    let interactionData3;
    if (stateFromStores != null) {
      interactionData3 = stateFromStores.interactionData;
    }
    const obj3 = { children: null };
    obj2[2] = interactionData3;
    items2[1] = callback(CommandActionsContainer, obj2);
    obj3[0] = items2;
    let tmp9Result = callback2(closure_23, obj3);
  } else {
    const obj4 = { style: null, size: "large" };
    obj4[0] = tmp.activityIndicator;
    tmp9Result = callback(closure_5, obj4);
  }
  obj[2] = tmp9Result;
  obj[1] = callback(channelId(6950).BottomSheet, obj);
  return callback(channelId(7139).AnalyticsLocationProvider, obj);
};
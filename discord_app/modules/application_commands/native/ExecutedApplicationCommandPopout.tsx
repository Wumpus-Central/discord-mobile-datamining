// discord_app/modules/application_commands/native/ExecutedApplicationCommandPopout.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import nameFromUserDefault from "../../../utils/UserUtils.tsx";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/ChannelStore.tsx";
import closure_8 from "../../../stores/GuildRoleStore.tsx";
import closure_9 from "../../../stores/GuildStore.tsx";
import closure_10 from "../../../stores/MessageStore.tsx";
import closure_11 from "../../../stores/RelationshipStore.tsx";
import closure_12 from "../../../stores/UserStore.tsx";
import closure_13 from "../ApplicationCommandIndexStore.tsx";
import { SUB_COMMAND_KEY_SEPARATOR } from "../ApplicationCommandConstants.tsx";
import ME from "../../../Constants.tsx";
import { AppLauncherRouteName } from "../../app_launcher/native/AppLauncherNativeConstants.tsx";
import regExp from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { PermissionOverwriteType } from "../../../flow/Server.tsx";

const require = arg1;
function getCommandOptionComponents(option) {
  const iter = option.option;
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
  if (null != iter.value) {
    const _HermesInternal2 = HermesInternal;
    let str = ":";
    let combined = " " + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = " " + name_localized;
  }
  if (iter.type !== iter(1954).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== tmp6(1954).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      if (null != iter.value) {
        function getUserComponent(user, styles) {
          let obj = {
            style: styles.commandOptionMentionText,
            onPress() {
              let obj = channel(closure_2_3[18]);
              obj.hideActionSheet();
              obj = { userId: user.id, channelId: null };
              let id;
              if (closure_1_1 != null) {
                id = closure_1_1.id;
              }
              obj[1] = id;
              channel(closure_2_3[19])(obj);
            },
            children: null
          };
          const items = [closure_1_20, channel(closure_1_3[20]).getUserTag(user, { decoration: "never" })];
          obj[2] = items;
          return closure_1_22(user(closure_1_3[17]).LegacyText, obj, "optionValue-" + user.name);
        }
        function getCommandValueText(intl) {
          return closure_1_21(iter(closure_1_3[21]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl }, "optionValue-" + iter.name);
        }
        const type = iter.type;
        if (tmp6(1954).ApplicationCommandOptionType.USER === type) {
          const user = authStore.getUser(iter.value.toString());
          let userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
          const str5 = iter.value;
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
          const str3 = iter.value;
        } else {
          function getRoleComponent(role) {
            const items = [closure_1_20, role.name];
            return closure_1_22(iter(closure_1_3[17]).LegacyText, { style: styles.commandOptionMentionText, children: items }, "optionValue-" + iter.name);
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
            const str2 = iter.value;
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
              found = choices.find((value) => value.value === iter.value);
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
          const str7 = iter.value;
        }
        if (str6) {
          str6 = " ";
        }
        obj = { children: null };
        obj = { children: null };
        obj[0] = combined + str6;
        const _HermesInternal4 = HermesInternal;
        const items2 = [callback(tmp6(1297).LegacyText, obj, "optionKey-" + iter.name), userComponent];
        obj[0] = items2;
        items.push(callback2(React.Fragment, obj, text));
        const tmp30 = callback2;
        const tmp32 = callback;
      }
      return items;
    }
  }
  items.push(callback(React.Fragment, { children: callback(iter(1297).LegacyText, { children: combined }, "optionKey-" + iter.name) }, text));
  if (null != iter.options) {
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
      let tmp42 = items;
      let tmp43 = getCommandOptionComponents;
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
    fromEntriesResult = Object.fromEntries(options.map((name) => {
      const items = [name.name, name];
      return items;
    }));
  }
  return items;
}
function getCommandCopyText(item10118, arg1, id, name_localized) {
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
  if (item10118.type !== _PermissionOverwriteType.ApplicationCommandOptionType.SUB_COMMAND) {
    if (item10118.type !== tmp5(1954).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      let sum = null;
      if (null != item10118.value) {
        const type = item10118.type;
        if (tmp5(1954).ApplicationCommandOptionType.USER === type) {
          const user = authStore.getUser(item10118.value.toString());
          sum = null;
          if (null != user) {
            sum = closure_20 + nameFromUserDefault.getUserTag(user, { decoration: "never" });
            const obj3 = nameFromUserDefault;
          }
          const str5 = item10118.value;
        } else if (tmp5(1954).ApplicationCommandOptionType.CHANNEL === type) {
          const channel = store.getChannel(item10118.value.toString());
          sum = null;
          if (null != channel) {
            sum = closure_18 + tmp5(4984).computeChannelName(channel, authStore, closure_11);
            const tmp5Result = tmp5(4984);
          }
          const str4 = item10118.value;
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
                const obj = nameFromUserDefault;
              }
            }
            const str6 = item10118.value;
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
            found = choices.find((value) => value.value === item10118.value);
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
      let tmp38 = items;
      let tmp39 = getCommandCopyText;
      let num = 0;
      let tmp40 = item10118;
      let tmp41 = arg1;
      let tmp42 = arg2;
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
  closure_7 = undefined;
  let analyticsLocations;
  let channel;
  let guild;
  let name_localized;
  let tmp = callback3();
  closure_7 = tmp;
  analyticsLocations = importDefault(data[24])().analyticsLocations;
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
  guild = stateFromStoresObject.guild;
  let application_command = data.application_command;
  name_localized = undefined;
  if (application_command != null) {
    name_localized = application_command.name_localized;
  }
  if (name_localized == null) {
    name_localized = data.name;
  }
  const intl = tmp3(tmp2[23]).intl;
  obj = {
    userHook() {
      const items = [channel.commandUserText, ];
      let color = colorString.colorString;
      if (color == null) {
        color = channel.commandText.color;
      }
      items[1] = { color };
      return closure_1_21(channelId(data[17]).LegacyText, { style: items, children: colorString.nick }, "user");
    },
    commandHook() {
      if (closure_5 === closure_1_15.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let children = "" + closure_1_19 + name_localized;
      } else {
        children = name_localized;
      }
      return closure_1_21(channelId(data[21]).Text, { variant: "text-sm/semibold", children }, "command");
    },
    applicationHook() {
      let obj = { style: channel.applicationNameText, variant: "text-sm/semibold", children: null };
      obj = { style: channel.applicationIcon, source: null };
      const tmp = closure_1_1(data[26]);
      obj[1] = channelId(data[27]).ensureAvatarSource(avatarSource.getAvatarSource(closure_4));
      const items = [closure_1_21(tmp, obj, "icon-" + avatarSource.id), ` ${closure_2.username}`];
      obj[2] = items;
      return closure_1_22(channelId(data[21]).Text, obj, "application");
    }
  };
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
      const application_command = tmp.application_command;
      let options;
      if (application_command != null) {
        options = application_command.options;
      }
      if (options == null) {
        options = [];
      }
      options = tmp.options;
      const iter = options[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = combined;
        let tmp8 = closure_1_25;
        obj = { option: null, channel: null, guild: null, messageId: null, parentOptionName: "", commandOptionSpec: null, styles: null, analyticsLocations: null };
        obj[0] = nextResult;
        let tmp9 = channel;
        obj[1] = channel;
        let tmp10 = guild;
        obj[2] = guild;
        let tmp11 = messageId;
        obj[3] = messageId;
        obj[5] = fromEntriesResult[nextResult.name];
        let tmp12 = closure_7;
        obj[6] = closure_7;
        let tmp13 = analyticsLocations;
        obj[7] = analyticsLocations;
        combined = combined.concat(closure_1_25(obj));
        continue;
      }
      fromEntriesResult = Object.fromEntries(options.map((name) => {
        const items = [name.name, name];
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
    someResult = options.some((type) => type.type === channelId(channel[16]).ApplicationCommandOptionType.ATTACHMENT);
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
      name_localized = tmp.name;
    }
    let items = [closure_1_19 + name_localized];
    let combined = items;
    if (null != data.options) {
      const application_command2 = tmp.application_command;
      let options;
      const _Object = Object;
      if (application_command2 != null) {
        options = application_command2.options;
      }
      if (options == null) {
        options = [];
      }
      options = tmp.options;
      for (const item10021 of options) {
        let tmp6 = combined;
        let tmp7 = closure_1_26;
        let tmp8 = channel;
        let tmp9 = channel;
        let tmp10 = guild;
        let num = 0;
        let tmp11 = item10021;
        let tmp12 = channel;
        combined = combined.concat(closure_1_26(item10021, channel, guild, tmp3[item10021.name]));
        continue;
      }
    }
    if (obj2.isAndroid()) {
      const obj3 = chatInputRef(tmp14[30]);
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
      const items1 = [tmp13(tmp14[16]).ApplicationCommandType.CHAT];
      obj[0] = items1;
      const query = closure_1_13.query(obj, obj, { allowFetch: true });
    }
    obj2 = channelId(channel[29]);
    channelId(channel[31]).presentCommandCopied();
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
        if (tmp3.options.length > 0) {
          const items = [channelId(tmp[16]).ApplicationCommandOptionType.SUB_COMMAND, channelId(tmp[16]).ApplicationCommandOptionType.SUB_COMMAND_GROUP];
          if (items.includes(tmp3.options[0].type)) {
            const items1 = [tmp3.options[0].name];
            let options = tmp3.options[0].options;
            let hasItem = null != options && options.length > 0;
            if (hasItem) {
              const items2 = [tmp4(tmp[16]).ApplicationCommandOptionType.SUB_COMMAND, tmp4(tmp[16]).ApplicationCommandOptionType.SUB_COMMAND_GROUP];
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
                obj[0] = tmp4(tmp[33]).KeyboardTypes.APP_LAUNCHER;
                obj = { initialRouteName: null, analyticsLocation: null, preSelectedCommand: null };
                obj[0] = closure_1_17.COMMAND_VIEW;
                obj[1] = tmp4(tmp[34]).ApplicationCommandTriggerLocations.RECALL;
                obj1 = { commandId: null, prefilledOptions: null };
                const sum = tmp3.id + closure_1_14;
                obj1[0] = sum + items1.join(closure_1_14);
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
          obj2[0] = channelId(tmp[33]).KeyboardTypes.APP_LAUNCHER;
          const obj3 = { initialRouteName: null, analyticsLocation: null, preSelectedCommand: null };
          obj3[0] = closure_1_17.COMMAND_VIEW;
          obj3[1] = channelId(tmp[34]).ApplicationCommandTriggerLocations.RECALL;
          const obj4 = { commandId: null, prefilledOptions: null };
          ({ id: obj4[0], options: obj4[1] } = tmp3);
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
    obj3[1] = items3.map((children) => callback2(guild.Fragment, { children }, arg1));
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
createCacheKey = { container: { paddingVertical: 8, paddingHorizontal: 16, gap: 16 }, activityIndicator: { padding: 16 }, commandUserText: createCacheKey, applicationIcon: { width: 18, height: 18, borderRadius: 9, alignSelf: "center" }, applicationNameText: { textAlignVertical: "center" }, commandOptionText: { marginTop: 12 }, commandOptionMentionText: null, commandText: null };
createCacheKey = { fontFamily: Fonts.PRIMARY_SEMIBOLD };
createCacheKey[6] = { color: ThemesDefault.colors.BACKGROUND_BRAND };
let obj1 = { color: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[7] = { fontSize: 16, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_24 = createCacheKey.createStyles(createCacheKey);
let obj2 = { fontSize: 16, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("set").fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default function ExecutedCommandPopout(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let stateFromStores;
  ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
  const tmp = callback3();
  let obj = channelId(589);
  const items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getMessage(channelId, messageId));
  const items1 = [channelId, messageId, ];
  let interactionData;
  if (stateFromStores != null) {
    interactionData = stateFromStores.interactionData;
  }
  items1[2] = interactionData;
  const effect = React.useEffect(() => {
    let interactionData;
    if (stateFromStores != null) {
      interactionData = tmp.interactionData;
    }
    let tmp3 = null == interactionData;
    if (!tmp3) {
      let type;
      if (tmp != null) {
        type = tmp.interactionData.type;
      }
      let tmp7 = type === channelId(closure_1_3[16]).ApplicationCommandType.CHAT;
      if (tmp7) {
        let application_command;
        if (tmp != null) {
          application_command = tmp.interactionData.application_command;
        }
        tmp7 = undefined === application_command;
      }
      tmp3 = tmp7;
    }
    if (tmp3) {
      const messageInteractionData = stateFromStores(closure_1_3[38]).fetchMessageInteractionData(channelId, messageId);
      const obj = stateFromStores(closure_1_3[38]);
    }
  }, items1);
  obj = { value: messageId(7139)(messageId(7159).EXECUTED_COMMAND).analyticsLocations, children: null };
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
    const items2 = [tmp9(CommandContentContainer, obj1), ];
    const obj2 = { channelId: null, chatInputRef: null, data: null };
    obj2[0] = channelId;
    obj2[1] = chatInputRef;
    let interactionData3;
    if (stateFromStores != null) {
      interactionData3 = stateFromStores.interactionData;
    }
    const obj3 = { children: null };
    obj2[2] = interactionData3;
    items2[1] = tmp9(CommandActionsContainer, obj2);
    obj3[0] = items2;
    let tmp9Result = closure_22(closure_23, obj3);
    const tmp13 = closure_22;
    const tmp14 = closure_23;
    const tmp15 = CommandContentContainer;
    const tmp17 = CommandActionsContainer;
  } else {
    const obj4 = { style: null, size: "large" };
    obj4[0] = tmp.activityIndicator;
    tmp9Result = tmp9(closure_5, obj4);
  }
  obj[2] = tmp9Result;
  obj[1] = closure_21(channelId(6950).BottomSheet, obj);
  return closure_21(channelId(7139).AnalyticsLocationProvider, obj);
};
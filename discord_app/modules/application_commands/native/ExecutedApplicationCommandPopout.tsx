// === Module 11952: ExecutedApplicationCommandPopout ===

// Module 11952 (ExecutedApplicationCommandPopout)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import Server from "Server" /* 1978 */;
import ToastUtils from "ToastUtils" /* 4520 */;
import UserUtilsDefault from "UserUtils" /* 4671 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import Text_Text from "Text/Text" /* 4823 */;
import useChannelName from "useChannelName" /* 4980 */;
import FastImageDefault from "FastImage" /* 5890 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7851 */;
import InteractionActionCreatorsAll from "InteractionActionCreators" /* 8472 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8523 */;
import NativeCommandClipboardModuleDefault from "NativeCommandClipboardModule" /* 11953 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import GuildStore from "GuildStore" /* 2064 */;
import MessageStore from "MessageStore" /* 5047 */;
import RelationshipStore from "RelationshipStore" /* 4472 */;
import UserStore from "UserStore" /* 1372 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9481 */;

require = fn;
function getCommandOptionComponents(option) {
  const channel = option.channel;
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
    let combined = " " + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = " " + name_localized;
  }
  if (option.option.type !== option.option(1978).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== tmp6(1978).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      if (null != iter.value) {
        function getUserComponent(user, styles) {
          let obj = {
            style: styles.commandOptionMentionText,
            onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              const obj2 = { userId: user.id, channelId: null };
              let id;
              if (channel != null) {
                id = channel.id;
              }
              obj2.channelId = id;
              showUserProfileActionSheetDefault(obj2);
            },
            children: null
          };
          const items = [closure_1_22, channel(4671).getUserTag(user, { decoration: "never" })];
          obj.children = items;
          return closure_1_24(user(1177).LegacyText, obj, "optionValue-" + user.name);
        }
        function getCommandValueText(intl) {
          return __initData3(Text_Text.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl }, "optionValue-" + iter.name);
        }
        const type = iter.type;
        if (tmp6(1978).ApplicationCommandOptionType.USER === type) {
          const user = UserStore.getUser(iter.value.toString());
          let userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
        } else if (tmp6(1978).ApplicationCommandOptionType.CHANNEL === type) {
          const channel1 = ChannelStore.getChannel(iter.value.toString());
          userComponent = null;
          if (null != channel1) {
            let obj = { style: styles.commandOptionMentionText, children: null };
            const items1 = [closure_20, tmp6(4980).computeChannelName(channel1, UserStore, RelationshipStore)];
            obj.children = items1;
            const _HermesInternal3 = HermesInternal;
            userComponent = closure_24(tmp6(1177).LegacyText, obj, "optionValue-" + iter.name);
            const tmp6Result = tmp6(4980);
          }
        } else {
          function getRoleComponent(role) {
            const obj = { style: styles.commandOptionMentionText, children: null };
            const items = [__initData2, role.name];
            obj.children = items;
            return __initData4(native.LegacyText, obj, "optionValue-" + iter.name);
          }
          if (tmp6(1978).ApplicationCommandOptionType.ROLE === type) {
            value = iter.value;
            let role;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, tmp14);
            }
            userComponent = null;
            if (null != role) {
              userComponent = getRoleComponent(role);
            }
          } else if (tmp6(1978).ApplicationCommandOptionType.MENTIONABLE === type) {
            const str1 = iter.value.toString();
            let role1;
            if (null != guild) {
              role1 = GuildRoleStore.getRole(guild.id, str1);
            }
            if (null != role1) {
              userComponent = getRoleComponent(role1);
            } else {
              const user1 = UserStore.getUser(str1);
              userComponent = null;
              if (null != user1) {
                userComponent = getUserComponent(user1, styles);
              }
            }
          } else {
            userComponent = null;
            if (tmp6(1978).ApplicationCommandOptionType.ATTACHMENT === type) {
              const intl = tmp6(1115).intl;
              userComponent = getCommandValueText(intl.string(tmp6(1115).t.nONJVc));
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
          let str9 = iter.value.toString();
          if (null != found) {
            let name = found.name_localized;
            if (name == null) {
              name = found.name;
            }
            str9 = name;
          }
          let tmp27 = str9.length > 0;
          if (tmp27) {
            tmp27 = !regex.test(str9[0]);
          }
          userComponent = getCommandValueText(str9);
          str6 = tmp27;
        }
        if (str6) {
          str6 = " ";
        }
        let obj2 = { children: null };
        const obj3 = { children: combined + str6 };
        const _HermesInternal4 = HermesInternal;
        const items2 = [closure_23(tmp6(1177).LegacyText, obj3, "optionKey-" + iter.name), userComponent];
        obj2.children = items2;
        items.push(closure_24(noop.Fragment, obj2, text));
      }
      return items;
    }
  }
  items.push(closure_23(noop.Fragment, { children: closure_23(option.option(1177).LegacyText, { children: combined }, "optionKey-" + option.option.name) }, text));
  if (null != option.option.options) {
    let options1;
    if (commandOptionSpec != null) {
      options1 = commandOptionSpec.options;
    }
    if (options1 == null) {
      options1 = [];
    }
    const options = iter.options;
    const iter2 = options[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let obj5 = { option: nextResult, channel, guild, messageId, parentOptionName: text, commandOptionSpec: fromEntriesResult[nextResult.name], styles, analyticsLocations };
      items = items.concat(getCommandOptionComponents(obj5));
      continue;
    }
    fromEntriesResult = Object.fromEntries(options1.map((name) => {
      const items = [name.name, name];
      return items;
    }));
  }
  return items;
}
function getCommandCopyText(item10021, channel, guild, name_localized) {
  let items = [];
  name_localized = undefined;
  if (name_localized != null) {
    name_localized = name_localized.name_localized;
  }
  if (name_localized == null) {
    name_localized = item10021.name;
  }
  if (null != item10021.value) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + name_localized;
  }
  if (item10021.type !== Server.ApplicationCommandOptionType.SUB_COMMAND) {
    if (item10021.type !== Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      let sum = null;
      if (null != item10021.value) {
        const type = item10021.type;
        if (Server.ApplicationCommandOptionType.USER === type) {
          const user = UserStore.getUser(item10021.value.toString());
          sum = null;
          if (null != user) {
            sum = __initData2 + UserUtilsDefault.getUserTag(user, { decoration: "never" });
          }
        } else if (Server.ApplicationCommandOptionType.CHANNEL === type) {
          channel = ChannelStore.getChannel(item10021.value.toString());
          sum = null;
          if (null != channel) {
            sum = closure_1_20 + useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
            const tmp5Result = useChannelName;
          }
        } else if (Server.ApplicationCommandOptionType.ROLE === type) {
          value = item10021.value;
          let role;
          if (null != guild) {
            role = GuildRoleStore.getRole(guild.id, tmp15);
          }
          sum = null;
          if (null != role) {
            sum = __initData2 + role.name;
          }
        } else {
          sum = null;
          if (Server.ApplicationCommandOptionType.MENTIONABLE === type) {
            const str1 = item10021.value.toString();
            let role1;
            if (null != guild) {
              role1 = GuildRoleStore.getRole(guild.id, str1);
            }
            if (null != role1) {
              sum = __initData2 + role1.name;
            } else {
              const user1 = UserStore.getUser(str1);
              sum = null;
              if (null != user1) {
                sum = __initData2 + UserUtilsDefault.getUserTag(user1, { decoration: "never" });
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
            found = choices.find((value) => value.value === item10021.value);
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
          StringResult = String(item10021.value);
        }
      }
    }
  }
  items.push(combined);
  if (null != item10021.options) {
    let options1;
    const _Object = Object;
    if (name_localized != null) {
      options1 = name_localized.options;
    }
    if (options1 == null) {
      options1 = [];
    }
    const options = item10021.options;
    for (const item10118 of options) {
      items = items.concat(getCommandCopyText(item10118, arg1, arg2, tmp35[item10118.name]));
      continue;
    }
  }
  return items;
}
function CommandContentContainer(channelId) {
  channelId = channelId.channelId;
  const author = channelId.author;
  ({ applicationUser: importAll, data } = channelId);
  const guildId = channelId.guildId;
  ({ messageType: closure_5, messageId } = channelId);
  const user = channelId.user;
  let channel;
  let name_localized;
  closure_12 = undefined;
  let processColorStringsArray;
  closure_14 = undefined;
  let tmp = closure_26();
  const styles = tmp;
  const analyticsLocations = author(data[25])().analyticsLocations;
  let items = [channel, name_localized];
  const items1 = [channelId];
  const stateFromStoresObject = channelId(data[26]).useStateFromStoresObject(items, () => {
    channel = ChannelStore.getChannel(channelId);
    const obj = { channel, guild: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj.guild = GuildStore.getGuild(guild_id);
    return obj;
  }, items1);
  channel = stateFromStoresObject.channel;
  const guild = stateFromStoresObject.guild;
  let application_command = data.application_command;
  name_localized = undefined;
  if (application_command != null) {
    name_localized = application_command.name_localized;
  }
  if (name_localized == null) {
    name_localized = data.name;
  }
  let obj = channelId(data[26]);
  let obj2 = { userId: user.id, guildId };
  let tmp7 = author(data[27])({ userId: user.id, guildId });
  closure_12 = channelId(data[28]).useDisplayNameStylesFont({ displayNameStyles: tmp7 });
  const tmp4Result = channelId(data[28]);
  const items2 = [analyticsLocations];
  const stateFromStores = channelId(data[26]).useStateFromStores(items2, () => analyticsLocations.roleStyle);
  const tmp4Result4 = channelId(data[26]);
  processColorStringsArray = channelId(data[29]).useProcessColorStringsArray(author.colorStrings);
  const tmp4Result5 = channelId(data[29]);
  closure_14 = channelId(data[29]).useIsRoleStyleAndRoleColorsEligibleForERC(guildId, user.id, stateFromStores, processColorStringsArray);
  const intl = tmp4(tmp3[24]).intl;
  const items3 = [channel, guild, messageId, , , , , , ];
  ({ name: arr4[3], options: arr4[4], application_command: arr4[5] } = data);
  items3[6] = name_localized;
  items3[7] = tmp;
  items3[8] = analyticsLocations;
  const obj3 = {
    userHook() {
      let tmp2;
      if (closure_14) {
        tmp2 = processColorStringsArray;
      }
      const obj = { variant: "text-md/semibold", gradientColors: tmp2, style: null, children: null };
      let color = author.colorString;
      if (color == null) {
        color = styles.commandText.color;
      }
      const items = [{ color }, ];
      let tmp6 = null != closure_12;
      if (tmp6) {
        const obj2 = { fontFamily: tmp5 };
        tmp6 = obj2;
      }
      items[1] = tmp6;
      obj.style = items;
      obj.children = author.nick;
      return __initData3(Text_Text.Text, obj, "user");
    },
    commandHook() {
      if (closure_1_5 === constants.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let children = "" + __initData + name_localized;
      } else {
        children = name_localized;
      }
      return __initData3(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children }, "command");
    },
    applicationHook() {
      const obj = { style: styles.application, children: null };
      const obj2 = { style: styles.applicationIcon, source: null };
      const tmp = FastImageDefault;
      obj2.source = utils_AvatarUtils.ensureAvatarSource(avatarSource.getAvatarSource(guildId));
      const items = [__initData3(tmp, obj2, "icon-" + avatarSource.id), __initData3(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: avatarSource.username })];
      obj.children = items;
      return __initData4(React5, obj, "application");
    }
  };
  const tmp4Result6 = channelId(data[29]);
  const memo = guildId.useMemo(() => {
    let items = [__initData3(native.LegacyText, { children: `/${name_localized}` }, "integrationName-" + data.name)];
    let combined = items;
    if (null != data.options) {
      const application_command = data.application_command;
      let options1;
      if (application_command != null) {
        options1 = application_command.options;
      }
      if (options1 == null) {
        options1 = [];
      }
      const options = data.options;
      const iter = options[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj2 = { option: nextResult, channel, guild, messageId, parentOptionName: "", commandOptionSpec: fromEntriesResult[nextResult.name], styles, analyticsLocations };
        combined = combined.concat(getCommandOptionComponents(obj2));
        continue;
      }
      fromEntriesResult = Object.fromEntries(options1.map((name) => {
        const items = [name.name, name];
        return items;
      }));
    }
    return combined;
  }, items3);
  const obj4 = { children: null };
  const obj5 = { style: tmp.commandName, accessible: true, children: null };
  const Children = guildId.Children;
  obj5.children = Children.map(intl.format(channelId(data[24]).t["sj/RT9"], {
    userHook() {
      let tmp2;
      if (closure_14) {
        tmp2 = processColorStringsArray;
      }
      const obj = { variant: "text-md/semibold", gradientColors: tmp2, style: null, children: null };
      let color = author.colorString;
      if (color == null) {
        color = styles.commandText.color;
      }
      const items = [{ color }, ];
      let tmp6 = null != closure_12;
      if (tmp6) {
        const obj2 = { fontFamily: tmp5 };
        tmp6 = obj2;
      }
      items[1] = tmp6;
      obj.style = items;
      obj.children = author.nick;
      return __initData3(Text_Text.Text, obj, "user");
    },
    commandHook() {
      if (closure_1_5 === constants.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let children = "" + __initData + name_localized;
      } else {
        children = name_localized;
      }
      return __initData3(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children }, "command");
    },
    applicationHook() {
      const obj = { style: styles.application, children: null };
      const obj2 = { style: styles.applicationIcon, source: null };
      const tmp = FastImageDefault;
      obj2.source = utils_AvatarUtils.ensureAvatarSource(avatarSource.getAvatarSource(guildId));
      const items = [__initData3(tmp, obj2, "icon-" + avatarSource.id), __initData3(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: avatarSource.username })];
      obj.children = items;
      return __initData4(React5, obj, "application");
    }
  }), (children, arg1) => {
    let tmp = children;
    if (typeof children === "string") {
      const obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
      tmp = closure_1_23(channelId(data[22]).Text, obj, arg1);
    }
    return tmp;
  });
  const items4 = [closure_23(styles, obj5, "commandName-" + data.name), closure_23(channelId(data[22]).Text, { style: tmp.commandOptionText, variant: "text-md/medium", color: "text-default", children: memo }, "commandOption-" + data.name)];
  obj4.children = items4;
  return closure_24(channelId(data[32]).Card, obj4);
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
    someResult = options.some((type) => type.type === channelId(channel[17]).ApplicationCommandOptionType.ATTACHMENT);
  }
  let items = [ChannelStore, GuildStore];
  let items1 = [channelId];
  const stateFromStoresObject = channelId(channel[26]).useStateFromStoresObject(items, () => {
    channel = ChannelStore.getChannel(channelId);
    const obj = { channel, guild: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj.guild = GuildStore.getGuild(guild_id);
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
    let items = [__initData + name_localized];
    let combined = items;
    if (null != data.options) {
      const application_command2 = data.application_command;
      let options1;
      const _Object = Object;
      if (application_command2 != null) {
        options1 = application_command2.options;
      }
      if (options1 == null) {
        options1 = [];
      }
      const options = data.options;
      for (const item10021 of options) {
        combined = combined.concat(getCommandCopyText(item10021, channel, guild, tmp3[item10021.name]));
        continue;
      }
    }
    if (obj2.isAndroid()) {
      const obj3 = NativeCommandClipboardModuleDefault;
      if (obj3 != null) {
        const _JSON2 = JSON;
        const json = JSON.stringify(data);
        const result = obj3.setItem(json, "application/x-discord-interaction-data", combined.join(" "));
      }
    } else {
      DCDClipboardManager = DCDClipboardManager.DCDClipboardManager;
      const _JSON = JSON;
      const json1 = JSON.stringify(data);
      const result1 = DCDClipboardManager.setItem(json1, "application/x-discord-interaction-data", combined.join(" "));
    }
    if (null != channel) {
      const obj = { channel: tmp27, type: "channel" };
      const obj4 = { commandTypes: null };
      const items1 = [Server.ApplicationCommandType.CHAT];
      obj4.commandTypes = items1;
      const query = ApplicationCommandIndexStore.query(obj, obj4, { allowFetch: true });
    }
    obj2 = PlatformUtils;
    ToastUtils.presentCommandCopied();
    const tmp13Result = ToastUtils;
  }, items2);
  const items3 = [];
  if (!someResult) {
    let obj2 = { label: null, onPress: null };
    const intl = tmp2(tmp3[24]).intl;
    obj2.label = intl.string(tmp2(tmp3[24]).t["42H+Nb"]);
    obj2.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_5();
    };
    items3.push(closure_23(tmp2(tmp3[36]).TableRow, obj2));
  }
  if (null != chatInputRef) {
    let obj3 = { label: null, onPress: null };
    const intl2 = tmp2(tmp3[24]).intl;
    obj3.label = intl2.string(tmp2(tmp3[24]).t.lNWC7s);
    obj3.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      if (null != data.options) {
        if (data.options.length > 0) {
          const items = [Server.ApplicationCommandOptionType.SUB_COMMAND, Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP];
          if (items.includes(data.options[0].type)) {
            const items1 = [data.options[0].name];
            const options1 = data.options[0].options;
            let hasItem = null != options1 && options1.length > 0;
            if (hasItem) {
              const items2 = [Server.ApplicationCommandOptionType.SUB_COMMAND, Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP];
              hasItem = items2.includes(options1[0].type);
            }
            let options = options1;
            if (hasItem) {
              items1.push(options1[0].name);
              options = options1[0].options;
            }
            if (chatInputRef != null) {
              const current2 = chatInputRef.current;
              if (current2 != null) {
                const obj2 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                const obj3 = { initialRouteName: AppLauncherRouteName.COMMAND_VIEW, analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL, preSelectedCommand: null };
                const obj5 = { commandId: null, prefilledOptions: null };
                const sum = data.id + SUB_COMMAND_KEY_SEPARATOR;
                obj5.commandId = sum + items1.join(SUB_COMMAND_KEY_SEPARATOR);
                obj5.prefilledOptions = options;
                obj3.preSelectedCommand = obj5;
                obj2.context = obj3;
                current2.openCustomKeyboard(obj2);
              }
            }
          }
        }
      }
      if (chatInputRef != null) {
        const current = chatInputRef.current;
        if (current != null) {
          const obj6 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
          const obj7 = { initialRouteName: AppLauncherRouteName.COMMAND_VIEW, analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL, preSelectedCommand: null };
          ({ id: obj4.commandId, options: obj4.prefilledOptions } = data);
          obj7.preSelectedCommand = { commandId: null, prefilledOptions: null };
          obj6.context = obj7;
          current.openCustomKeyboard(obj6);
          const obj13 = { commandId: null, prefilledOptions: null };
        }
      }
    };
    items3.push(closure_23(tmp2(tmp3[36]).TableRow, obj3));
  }
  let tmp9 = null;
  if (0 !== items3.length) {
    let obj4 = { spacing: 8, children: null };
    let obj5 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[24]).intl;
    obj5.children = intl3.string(tmp2(tmp3[24]).t["3eF5/L"]);
    const items4 = [closure_23(tmp2(tmp3[22]).Text, obj5), ];
    let obj6 = { hasIcons: false, children: items3.map((children, index) => closure_1_23(guild.Fragment, { children }, index)) };
    items4[1] = closure_23(tmp2(tmp3[40]).TableRowGroup, obj6);
    obj4.children = items4;
    tmp9 = closure_24(tmp2(tmp3[39]).Stack, obj4);
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, NativeModules: metroRequire, View: closure_7 } = get_ActivityIndicator);
const SUB_COMMAND_KEY_SEPARATOR = fn(5295).SUB_COMMAND_KEY_SEPARATOR;
const Constants = fn(1074);
({ MessageTypes: closure_17, WHITESPACE_RE: closure_18 } = Constants);
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const ChannelAutocompleteConstants = fn(5296);
({ CHANNEL_SENTINEL: closure_20, COMMAND_SENTINEL: closure_21, MENTION_SENTINEL: closure_22 } = ChannelAutocompleteConstants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { container: { paddingVertical: 8, paddingHorizontal: 16, gap: 16 }, activityIndicator: { padding: 16 }, application: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, applicationIcon: null, commandName: null, commandOptionText: null, commandOptionMentionText: null, commandText: null };
let size = { width: 18, height: 18, borderRadius: nativeDefault.radii.round };
obj2.applicationIcon = size;
obj2.commandName = { flexDirection: "row", flexWrap: "wrap", alignItems: "center" };
obj2.commandOptionText = { marginTop: 12 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.commandOptionMentionText = { color: nativeDefault.colors.BACKGROUND_BRAND };
let obj4 = { color: nativeDefault.colors.BACKGROUND_BRAND };
obj2.commandText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_26 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default function ExecutedCommandPopout(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
  const tmp = closure_26();
  const items = [MessageStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  let obj = channelId(504);
  const items1 = [channelId, messageId, ];
  let interactionData;
  if (stateFromStores != null) {
    interactionData = stateFromStores.interactionData;
  }
  items1[2] = interactionData;
  const effect = noop.useEffect(() => {
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
      let tmp7 = type === Server.ApplicationCommandType.CHAT;
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
      const messageInteractionData = InteractionActionCreatorsAll.fetchMessageInteractionData(channelId, messageId);
    }
  }, items1);
  const obj2 = { value: messageId(7493)(messageId(7513).EXECUTED_COMMAND).analyticsLocations, children: null };
  const obj3 = { startExpanded: true, bodyStyles: tmp.container, children: null };
  let interactionData1;
  if (stateFromStores != null) {
    interactionData1 = stateFromStores.interactionData;
  }
  if (null != interactionData1) {
    const obj4 = { guildId, user, channelId, messageId, author, applicationUser, data: null, messageType: null };
    let interactionData2;
    if (stateFromStores != null) {
      interactionData2 = stateFromStores.interactionData;
    }
    obj4.data = interactionData2;
    obj4.messageType = messageType;
    const items2 = [closure_23(CommandContentContainer, obj4), ];
    const obj5 = { channelId, chatInputRef, data: null };
    let interactionData3;
    if (stateFromStores != null) {
      interactionData3 = stateFromStores.interactionData;
    }
    const obj6 = { children: null };
    obj5.data = interactionData3;
    items2[1] = closure_23(CommandActionsContainer, obj5);
    obj6.children = items2;
    let tmp9Result = closure_24(closure_25, obj6);
  } else {
    const obj7 = { style: tmp.activityIndicator, size: "large" };
    tmp9Result = closure_23(closure_5, obj7);
  }
  obj3.children = tmp9Result;
  obj2.children = closure_23(channelId(7481).BottomSheet, obj3);
  return closure_23(channelId(7493).AnalyticsLocationProvider, obj2);
};
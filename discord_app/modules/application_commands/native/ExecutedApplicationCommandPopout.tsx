// discord_app/modules/application_commands/native/ExecutedApplicationCommandPopout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import native from "../../../design/void/native.tsx";
import utils_AvatarUtils from "../../../utils/native/AvatarUtils.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import Server from "../../../flow/Server.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import ApplicationCommandTypes from "../ApplicationCommandTypes.tsx";
import InteractionActionCreatorsAll from "../../interactions/InteractionActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import NativeCommandClipboardModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeCommandClipboardModule.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ApplicationCommandIndexStore from "../ApplicationCommandIndexStore.tsx";

require = fn;
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
  if (iter.type !== iter(1894).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== tmp6(1894).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      if (null != iter.value) {
        function getUserComponent(user, styles) {
          let obj = {
            style: styles.commandOptionMentionText,
            onPress() {
              let obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              obj = { userId: user.id, channelId: null };
              let id;
              if (channel != null) {
                id = channel.id;
              }
              obj.channelId = id;
              showUserProfileActionSheetDefault(obj);
            },
            children: null,
          };
          const items = [closure_1_22, channel(4404).getUserTag(user, { decoration: "never" })];
          obj.children = items;
          return closure_1_24(user(1178).LegacyText, obj, "optionValue-" + user.name);
        }
        function getCommandValueText(intl) {
          return __initData3(
            Text_Text.Text,
            { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl },
            "optionValue-" + iter.name,
          );
        }
        const type = iter.type;
        if (tmp6(1894).ApplicationCommandOptionType.USER === type) {
          const user = UserStore.getUser(iter.value.toString());
          let userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
        } else if (tmp6(1894).ApplicationCommandOptionType.CHANNEL === type) {
          channel = ChannelStore.getChannel(iter.value.toString());
          userComponent = null;
          if (null != channel) {
            let obj = { style: styles.commandOptionMentionText, children: null };
            const items1 = [closure_20, tmp6(4713).computeChannelName(channel, UserStore, RelationshipStore)];
            obj.children = items1;
            const _HermesInternal3 = HermesInternal;
            userComponent = closure_24(tmp6(1178).LegacyText, obj, "optionValue-" + iter.name);
            const tmp6Result = tmp6(4713);
          }
        } else {
          function getRoleComponent(role) {
            const obj = { style: styles.commandOptionMentionText, children: null };
            const items = [__initData2, role.name];
            obj.children = items;
            return __initData4(native.LegacyText, obj, "optionValue-" + iter.name);
          }
          if (tmp6(1894).ApplicationCommandOptionType.ROLE === type) {
            value = iter.value;
            let role;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, tmp14);
            }
            userComponent = null;
            if (null != role) {
              userComponent = getRoleComponent(role);
            }
          } else if (tmp6(1894).ApplicationCommandOptionType.MENTIONABLE === type) {
            str = iter.value.toString();
            let role1;
            if (null != guild) {
              role1 = GuildRoleStore.getRole(guild.id, str);
            }
            if (null != role1) {
              userComponent = getRoleComponent(role1);
            } else {
              const user1 = UserStore.getUser(str);
              userComponent = null;
              if (null != user1) {
                userComponent = getUserComponent(user1, styles);
              }
            }
          } else {
            userComponent = null;
            if (tmp6(1894).ApplicationCommandOptionType.ATTACHMENT === type) {
              const intl = tmp6(1114).intl;
              userComponent = getCommandValueText(intl.string(tmp6(1114).t.nONJVc));
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
        }
        if (str6) {
          str6 = " ";
        }
        obj = { children: null };
        obj = { children: combined + str6 };
        const _HermesInternal4 = HermesInternal;
        const items2 = [closure_23(tmp6(1178).LegacyText, obj, "optionKey-" + iter.name), userComponent];
        obj.children = items2;
        items.push(closure_24(noop.Fragment, obj, text));
      }
      return items;
    }
  }
  items.push(
    closure_23(
      noop.Fragment,
      { children: closure_23(iter(1178).LegacyText, { children: combined }, "optionKey-" + iter.name) },
      text,
    ),
  );
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
      let obj2 = {
        option: nextResult,
        channel,
        guild,
        messageId,
        parentOptionName: text,
        commandOptionSpec: fromEntriesResult[nextResult.name],
        styles,
        analyticsLocations,
      };
      items = items.concat(getCommandOptionComponents(obj2));
      continue;
    }
    fromEntriesResult = Object.fromEntries(
      options.map((name) => {
        const items = [name.name, name];
        return items;
      }),
    );
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
    let str = "";
    combined = "" + name_localized;
  }
  if (item10021.type !== Server.ApplicationCommandOptionType.SUB_COMMAND) {
    if (item10021.type !== tmp5(1894).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      let sum = null;
      if (null != item10021.value) {
        const type = item10021.type;
        if (tmp5(1894).ApplicationCommandOptionType.USER === type) {
          const user = UserStore.getUser(item10021.value.toString());
          sum = null;
          if (null != user) {
            sum = __initData2 + UserUtilsDefault.getUserTag(user, { decoration: "never" });
          }
        } else if (tmp5(1894).ApplicationCommandOptionType.CHANNEL === type) {
          channel = ChannelStore.getChannel(item10021.value.toString());
          sum = null;
          if (null != channel) {
            sum = closure_1_20 + tmp5(4713).computeChannelName(channel, UserStore, RelationshipStore);
            const tmp5Result = tmp5(4713);
          }
        } else if (tmp5(1894).ApplicationCommandOptionType.ROLE === type) {
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
          if (tmp5(1894).ApplicationCommandOptionType.MENTIONABLE === type) {
            str = item10021.value.toString();
            let role1;
            if (null != guild) {
              role1 = GuildRoleStore.getRole(guild.id, str);
            }
            if (null != role1) {
              sum = __initData2 + role1.name;
            } else {
              const user1 = UserStore.getUser(str);
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
    let options;
    const _Object = Object;
    if (name_localized != null) {
      options = name_localized.options;
    }
    if (options == null) {
      options = [];
    }
    options = item10021.options;
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
  let obj = channelId(data[26]);
  let items = [channel, name_localized];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      channel = ChannelStore.getChannel(channelId);
      const obj = { channel, guild: null };
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj.guild = GuildStore.getGuild(guild_id);
      return obj;
    },
    items1,
  );
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
  obj = { userId: user.id, guildId };
  let tmp4Result = tmp4(tmp3[28]);
  closure_12 = tmp4Result.useDisplayNameStylesFont({ displayNameStyles: author(data[27])(obj) });
  tmp4Result = tmp4(tmp3[26]);
  const items2 = [analyticsLocations];
  const stateFromStores = tmp4Result.useStateFromStores(items2, () => analyticsLocations.roleStyle);
  let tmp7 = author(data[27])(obj);
  processColorStringsArray = channelId(data[29]).useProcessColorStringsArray(author.colorStrings);
  const tmp4Result1 = channelId(data[29]);
  closure_14 = channelId(data[29]).useIsRoleStyleAndRoleColorsEligibleForERC(
    guildId,
    user.id,
    stateFromStores,
    processColorStringsArray,
  );
  const intl = tmp4(tmp3[24]).intl;
  obj = {
    userHook() {
      let tmp2;
      if (closure_14) {
        tmp2 = processColorStringsArray;
      }
      let obj = { variant: "text-md/semibold", gradientColors: tmp2, style: null, children: null };
      let color = author.colorString;
      if (color == null) {
        color = styles.commandText.color;
      }
      const items = [{ color }];
      let tmp6 = null != closure_12;
      if (tmp6) {
        obj = { fontFamily: tmp5 };
        tmp6 = obj;
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
      return __initData3(
        Text_Text.Text,
        { variant: "text-md/semibold", color: "mobile-text-heading-primary", children },
        "command",
      );
    },
    applicationHook() {
      let obj = { style: styles.application, children: null };
      obj = { style: styles.applicationIcon, source: null };
      const tmp = FastImageDefault;
      obj.source = utils_AvatarUtils.ensureAvatarSource(avatarSource.getAvatarSource(guildId));
      const items = [__initData3(tmp, obj, "icon-" + avatarSource.id)];
      obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: avatarSource.username };
      items[1] = __initData3(Text_Text.Text, obj);
      obj.children = items;
      return __initData4(React5, obj, "application");
    },
  };
  const items3 = [channel, guild, messageId, , , , , ,];
  ({ name: arr4[3], options: arr4[4], application_command: arr4[5] } = data);
  items3[6] = name_localized;
  items3[7] = tmp;
  items3[8] = analyticsLocations;
  const tmp4Result2 = channelId(data[29]);
  const memo = guildId.useMemo(() => {
    let obj = { children: `/${name_localized}` };
    let items = [__initData3(native.LegacyText, obj, "integrationName-" + data.name)];
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
        obj = {
          option: nextResult,
          channel: null,
          guild: null,
          messageId: null,
          parentOptionName: "",
          commandOptionSpec: null,
          styles: null,
          analyticsLocations: null,
        };
        obj.channel = channel;
        obj.guild = guild;
        obj.messageId = messageId;
        obj.commandOptionSpec = fromEntriesResult[nextResult.name];
        obj.styles = styles;
        obj.analyticsLocations = analyticsLocations;
        combined = combined.concat(getCommandOptionComponents(obj));
        continue;
      }
      fromEntriesResult = Object.fromEntries(
        options.map((name) => {
          const items = [name.name, name];
          return items;
        }),
      );
    }
    return combined;
  }, items3);
  const obj1 = { children: null };
  const obj2 = { style: tmp.commandName, accessible: true, children: null };
  const Children = guildId.Children;
  obj2.children = Children.map(intl.format(channelId(data[24]).t["sj/RT9"], obj), (children, arg1) => {
    let tmp = children;
    if (typeof children === "string") {
      const obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
      tmp = closure_1_23(channelId(data[22]).Text, obj, arg1);
    }
    return tmp;
  });
  const items4 = [
    closure_23(styles, obj2, "commandName-" + data.name),
    closure_23(
      channelId(data[22]).Text,
      { style: tmp.commandOptionText, variant: "text-md/medium", color: "text-default", children: memo },
      "commandOption-" + data.name,
    ),
  ];
  obj1.children = items4;
  return closure_24(channelId(data[32]).Card, obj1);
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
  let obj = channelId(channel[26]);
  let items = [ChannelStore, GuildStore];
  let items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      channel = ChannelStore.getChannel(channelId);
      const obj = { channel, guild: null };
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj.guild = GuildStore.getGuild(guild_id);
      return obj;
    },
    items1,
  );
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
    let items = [__initData + name_localized];
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
      let obj = { channel: tmp27, type: "channel" };
      obj = { commandTypes: null };
      const items1 = [tmp13(1894).ApplicationCommandType.CHAT];
      obj.commandTypes = items1;
      const query = ApplicationCommandIndexStore.query(obj, obj, { allowFetch: true });
    }
    obj2 = PlatformUtils;
    ToastUtils.presentCommandCopied();
  }, items2);
  const items3 = [];
  if (!someResult) {
    obj = { label: null, onPress: null };
    const intl = tmp2(tmp3[24]).intl;
    obj.label = intl.string(tmp2(tmp3[24]).t["42H+Nb"]);
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_5();
    };
    items3.push(closure_23(tmp2(tmp3[36]).TableRow, obj));
  }
  if (null != chatInputRef) {
    obj = { label: null, onPress: null };
    const intl2 = tmp2(tmp3[24]).intl;
    obj.label = intl2.string(tmp2(tmp3[24]).t.lNWC7s);
    obj.onPress = function onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (null != data.options) {
        if (tmp3.options.length > 0) {
          const items = [
            Server.ApplicationCommandOptionType.SUB_COMMAND,
            Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
          ];
          if (items.includes(tmp3.options[0].type)) {
            const items1 = [tmp3.options[0].name];
            let options = tmp3.options[0].options;
            let hasItem = null != options && options.length > 0;
            if (hasItem) {
              const items2 = [
                tmp4(1894).ApplicationCommandOptionType.SUB_COMMAND,
                tmp4(1894).ApplicationCommandOptionType.SUB_COMMAND_GROUP,
              ];
              hasItem = items2.includes(options[0].type);
            }
            if (hasItem) {
              items1.push(options[0].name);
              options = options[0].options;
            }
            if (chatInputRef != null) {
              const current2 = chatInputRef.current;
              if (current2 != null) {
                obj = { type: tmp4(1609).KeyboardTypes.APP_LAUNCHER, context: null };
                obj = {
                  initialRouteName: AppLauncherRouteName.COMMAND_VIEW,
                  analyticsLocation: tmp4(7523).ApplicationCommandTriggerLocations.RECALL,
                  preSelectedCommand: null,
                };
                const obj1 = { commandId: null, prefilledOptions: null };
                const sum = tmp3.id + SUB_COMMAND_KEY_SEPARATOR;
                obj1.commandId = sum + items1.join(SUB_COMMAND_KEY_SEPARATOR);
                obj1.prefilledOptions = options;
                obj.preSelectedCommand = obj1;
                obj.context = obj;
                current2.openCustomKeyboard(obj);
              }
            }
          }
        }
      }
      if (chatInputRef != null) {
        const current = chatInputRef.current;
        if (current != null) {
          const obj2 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
          const obj3 = {
            initialRouteName: AppLauncherRouteName.COMMAND_VIEW,
            analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL,
            preSelectedCommand: null,
          };
          const obj4 = { commandId: null, prefilledOptions: null };
          ({ id: obj4.commandId, options: obj4.prefilledOptions } = tmp3);
          obj3.preSelectedCommand = obj4;
          obj2.context = obj3;
          current.openCustomKeyboard(obj2);
        }
      }
    };
    items3.push(closure_23(tmp2(tmp3[36]).TableRow, obj));
  }
  let tmp9 = null;
  if (0 !== items3.length) {
    let obj1 = { spacing: 8, children: null };
    let obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[24]).intl;
    obj2.children = intl3.string(tmp2(tmp3[24]).t["3eF5/L"]);
    const items4 = [closure_23(tmp2(tmp3[22]).Text, obj2)];
    let obj3 = {
      hasIcons: false,
      children: items3.map((children, index) => closure_1_23(guild.Fragment, { children }, index)),
    };
    items4[1] = closure_23(tmp2(tmp3[40]).TableRowGroup, obj3);
    obj1.children = items4;
    tmp9 = closure_24(tmp2(tmp3[39]).Stack, obj1);
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, NativeModules: metroRequire, View: closure_7 } = get_ActivityIndicator);
const SUB_COMMAND_KEY_SEPARATOR = fn(4999).SUB_COMMAND_KEY_SEPARATOR;
const Constants = fn(1074);
({ MessageTypes: closure_17, WHITESPACE_RE: closure_18 } = Constants);
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
const ChannelAutocompleteConstants = fn(5000);
({
  CHANNEL_SENTINEL: closure_20,
  COMMAND_SENTINEL: closure_21,
  MENTION_SENTINEL: closure_22,
} = ChannelAutocompleteConstants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
fn(4560);
let createStyles = {
  container: { paddingVertical: 8, paddingHorizontal: 16, gap: 16 },
  activityIndicator: { padding: 16 },
  application: null,
  applicationIcon: null,
  commandName: null,
  commandOptionText: null,
  commandOptionMentionText: null,
  commandText: null,
};
createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.application = createStyles;
let size = { width: 18, height: 18, borderRadius: nativeDefault.radii.round };
createStyles.applicationIcon = size;
createStyles.commandName = { flexDirection: "row", flexWrap: "wrap", alignItems: "center" };
createStyles.commandOptionText = { marginTop: 12 };
createStyles.commandOptionMentionText = { color: nativeDefault.colors.BACKGROUND_BRAND };
let obj1 = { color: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.commandText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_26 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default function ExecutedCommandPopout(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
  const tmp = closure_26();
  let obj = channelId(504);
  const items = [MessageStore];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  const items1 = [channelId, messageId];
  let interactionData;
  if (stateFromStores != null) {
    interactionData = stateFromStores.interactionData;
  }
  items1[2] = interactionData;
  const effect = noop.useEffect(() => {
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
      let tmp7 = type === Server.ApplicationCommandType.CHAT;
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
      const messageInteractionData = InteractionActionCreatorsAll.fetchMessageInteractionData(channelId, messageId);
    }
  }, items1);
  obj = { value: messageId(7162)(messageId(7182).EXECUTED_COMMAND).analyticsLocations, children: null };
  obj = { startExpanded: true, bodyStyles: tmp.container, children: null };
  let interactionData1;
  if (stateFromStores != null) {
    interactionData1 = stateFromStores.interactionData;
  }
  if (null != interactionData1) {
    const obj1 = { guildId, user, channelId, messageId, author, applicationUser, data: null, messageType: null };
    let interactionData2;
    if (stateFromStores != null) {
      interactionData2 = stateFromStores.interactionData;
    }
    obj1.data = interactionData2;
    obj1.messageType = messageType;
    const items2 = [tmp9(CommandContentContainer, obj1)];
    const obj2 = { channelId, chatInputRef, data: null };
    let interactionData3;
    if (stateFromStores != null) {
      interactionData3 = stateFromStores.interactionData;
    }
    const obj3 = { children: null };
    obj2.data = interactionData3;
    items2[1] = tmp9(CommandActionsContainer, obj2);
    obj3.children = items2;
    let tmp9Result = closure_24(closure_25, obj3);
  } else {
    const obj4 = { style: tmp.activityIndicator, size: "large" };
    tmp9Result = tmp9(closure_5, obj4);
  }
  obj.children = tmp9Result;
  obj.children = closure_23(channelId(7150).BottomSheet, obj);
  return closure_23(channelId(7162).AnalyticsLocationProvider, obj);
}

// discord_app/modules/application_commands/native/ExecutedApplicationCommandPopout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import utils_AvatarUtils from "../../../utils/native/AvatarUtils.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import Server from "../../../flow/Server.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
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
  if (option.option.type !== option.option(1997).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== tmp6(1997).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
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
            children: null,
          };
          const items = [closure_1_22, channel(4922).getUserTag(user, { decoration: "never" })];
          obj.children = items;
          return closure_1_24(user(1200).LegacyText, obj, "optionValue-" + user.name);
        }
        function getCommandValueText(intl) {
          return closure_2_23(
            Text_Text.Text,
            { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl },
            "optionValue-" + iter.name,
          );
        }
        const type = iter.type;
        if (tmp6(1997).ApplicationCommandOptionType.USER === type) {
          const user = UserStore.getUser(iter.value.toString());
          let userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
        } else if (tmp6(1997).ApplicationCommandOptionType.CHANNEL === type) {
          const channel1 = ChannelStore.getChannel(iter.value.toString());
          userComponent = null;
          if (null != channel1) {
            let obj = { style: styles.commandOptionMentionText, children: null };
            const items1 = [closure_20, tmp6(5417).computeChannelName(channel1, UserStore, RelationshipStore)];
            obj.children = items1;
            const _HermesInternal3 = HermesInternal;
            userComponent = closure_24(tmp6(1200).LegacyText, obj, "optionValue-" + iter.name);
            const tmp6Result = tmp6(5417);
          }
        } else {
          function getRoleComponent(role) {
            const obj = { style: styles.commandOptionMentionText, children: null };
            const items = [closure_2_22, role.name];
            obj.children = items;
            return dependencyMap(native.LegacyText, obj, "optionValue-" + iter.name);
          }
          if (tmp6(1997).ApplicationCommandOptionType.ROLE === type) {
            value = iter.value;
            let role;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, tmp14);
            }
            userComponent = null;
            if (null != role) {
              userComponent = getRoleComponent(role);
            }
          } else if (tmp6(1997).ApplicationCommandOptionType.MENTIONABLE === type) {
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
            if (tmp6(1997).ApplicationCommandOptionType.ATTACHMENT === type) {
              const intl = tmp6(1126).intl;
              userComponent = getCommandValueText(intl.string(tmp6(1126).t.nONJVc));
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
        const items2 = [closure_23(tmp6(1200).LegacyText, obj3, "optionKey-" + iter.name), userComponent];
        obj2.children = items2;
        items.push(closure_24(noop.Fragment, obj2, text));
      }
      return items;
    }
  }
  items.push(
    closure_23(
      noop.Fragment,
      {
        children: closure_23(option.option(1200).LegacyText, { children: combined }, "optionKey-" + option.option.name),
      },
      text,
    ),
  );
  if (null != option.option.options) {
    let options1;
    if (commandOptionSpec != null) {
      options1 = commandOptionSpec.options;
    }
    if (options1 == null) {
      options1 = [];
    }
    options = iter.options;
    const iter2 = options[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let obj5 = {
        option: nextResult,
        channel,
        guild,
        messageId,
        parentOptionName: text,
        commandOptionSpec: fromEntriesResult[nextResult.name],
        styles,
        analyticsLocations,
      };
      items = items.concat(getCommandOptionComponents(obj5));
      continue;
    }
    fromEntriesResult = Object.fromEntries(
      options1.map((name) => {
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
            sum = closure_1_22 + UserUtilsDefault.getUserTag(user, { decoration: "never" });
          }
        } else if (Server.ApplicationCommandOptionType.CHANNEL === type) {
          channel = ChannelStore.getChannel(item10021.value.toString());
          sum = null;
          if (null != channel) {
            sum = constants2 + useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
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
            sum = closure_1_22 + role.name;
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
              sum = closure_1_22 + role1.name;
            } else {
              const user1 = UserStore.getUser(str1);
              sum = null;
              if (null != user1) {
                sum = closure_1_22 + UserUtilsDefault.getUserTag(user1, { decoration: "never" });
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
    options = item10021.options;
    for (const item10118 of options) {
      items = items.concat(getCommandCopyText(item10118, arg1, arg2, tmp35[item10118.name]));
      continue;
    }
  }
  return items;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, NativeModules: metroRequire, View: closure_7 } = get_ActivityIndicator);
const SUB_COMMAND_KEY_SEPARATOR = fn(5399).SUB_COMMAND_KEY_SEPARATOR;
const Constants = fn(1085);
({ MessageTypes: closure_17, WHITESPACE_RE: closure_18 } = Constants);
const AppLauncherRouteName = fn(1501).AppLauncherRouteName;
const ChannelAutocompleteConstants = fn(5400);
({
  CHANNEL_SENTINEL: closure_20,
  COMMAND_SENTINEL: closure_21,
  MENTION_SENTINEL: closure_22,
} = ChannelAutocompleteConstants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { paddingVertical: 8, paddingHorizontal: 16, gap: 16 },
  activityIndicator: { padding: 16 },
  application: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 },
  applicationIcon: null,
  commandName: null,
  commandOptionText: null,
  commandOptionMentionText: null,
  commandText: null,
};
let size = { width: 18, height: 18, borderRadius: nativeDefault.radii.round };
obj2.applicationIcon = size;
obj2.commandName = { flexDirection: "row", flexWrap: "wrap", alignItems: "center" };
obj2.commandOptionText = { marginTop: 12 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.commandOptionMentionText = { color: nativeDefault.colors.BACKGROUND_BRAND };
let obj4 = { color: nativeDefault.colors.BACKGROUND_BRAND };
obj2.commandText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_26 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CommandContentContainer(channelId) {
      const cResult = channelId(guildId[26]).c(61);
      channelId = channelId.channelId;
      let flag = channelId.author;
      let colorString = channelId.applicationUser;
      ({ data, guildId } = channelId);
      const messageType = channelId.messageType;
      ({ messageId, user } = channelId);
      const tmp4 = closure_26();
      closure_5 = tmp4;
      const analyticsLocations = flag(guildId[27])().analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [num9, GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function i() {
          const channel = ChannelStore.getChannel(channelId);
          const obj = { channel, guild: null };
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          obj.guild = GuildStore.getGuild(guild_id);
          return obj;
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      let obj = channelId(guildId[26]);
      const tmp5 = flag;
      const stateFromStoresObject = channelId(guildId[28]).useStateFromStoresObject(first, tmp9, tmp10);
      ({ channel, guild } = stateFromStoresObject);
      const application_command = data.application_command;
      let name_localized;
      if (application_command != null) {
        name_localized = application_command.name_localized;
      }
      if (name_localized == null) {
        name_localized = data.name;
      }
      if (cResult[4] === guildId) {
        if (cResult[5] === user.id) {
          let tmp13 = cResult[6];
        }
        const tmp14 = tmp5(guildId[29])(tmp13);
        if (cResult[7] !== tmp14) {
          let obj2 = { displayNameStyles: tmp14 };
          cResult[7] = tmp14;
          cResult[8] = obj2;
          let tmp15 = obj2;
        } else {
          tmp15 = cResult[8];
        }
        const displayNameStylesFont = tmp(guildId[30]).useDisplayNameStylesFont(tmp15);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [processColorStringsArray];
          const fn2 = function j() {
            return processColorStringsArray.roleStyle;
          };
          cResult[9] = items2;
          cResult[10] = fn2;
          let tmp18 = fn2;
          let tmp17 = items2;
        } else {
          tmp17 = cResult[9];
          tmp18 = cResult[10];
        }
        const tmpResult5 = tmp(guildId[30]);
        const stateFromStores = tmp(guildId[28]).useStateFromStores(tmp17, tmp18);
        const tmpResult6 = tmp(guildId[28]);
        processColorStringsArray = tmp(guildId[31]).useProcessColorStringsArray(flag.colorStrings);
        const tmpResult8 = tmp(guildId[31]);
        num9 = tmpResult8.useIsRoleStyleAndRoleColorsEligibleForERC(
          guildId,
          user.id,
          stateFromStores,
          processColorStringsArray,
        );
        if (cResult[11] === analyticsLocations) {
          if (cResult[12] === colorString) {
            if (cResult[13] === flag.colorString) {
              if (cResult[14] === flag.nick) {
                if (cResult[15] === channel) {
                  if (cResult[16] === name_localized) {
                    if (cResult[17] === data) {
                      if (cResult[18] === displayNameStylesFont) {
                        if (cResult[19] === processColorStringsArray) {
                          if (cResult[20] === guildId) {
                            if (cResult[21] === guild) {
                              if (cResult[22] === messageId) {
                                if (cResult[23] === messageType) {
                                  if (cResult[24] === num9) {
                                    if (cResult[25] === tmp4) {
                                      if (cResult[47] === cResult[26]) {
                                        if (cResult[48] === tmp28) {
                                          if (cResult[49] === tmp29) {
                                            if (cResult[50] === tmp30) {
                                              if (cResult[51] === tmp31) {
                                                let tmp67 = cResult[52];
                                              }
                                              const _HermesInternal3 = HermesInternal;
                                              const combined = "commandOption-" + data.name;
                                              if (cResult[53] === tmp27) {
                                                if (cResult[54] === tmp4.commandOptionText) {
                                                  if (cResult[55] === combined) {
                                                    let tmp71 = cResult[56];
                                                  }
                                                  if (cResult[57] === tmp26) {
                                                    if (cResult[58] === tmp67) {
                                                      if (cResult[59] === tmp71) {
                                                        let tmp74 = cResult[60];
                                                      }
                                                      return tmp74;
                                                    }
                                                  }
                                                  const obj3 = { children: null };
                                                  const items3 = [tmp67, tmp71];
                                                  obj3.children = items3;
                                                  const tmp76 = closure_24(tmp26, obj3);
                                                  cResult[57] = tmp26;
                                                  cResult[58] = tmp67;
                                                  cResult[59] = tmp71;
                                                  cResult[60] = tmp76;
                                                  tmp74 = tmp76;
                                                }
                                              }
                                              const obj4 = {
                                                style: tmp4.commandOptionText,
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: tmp27,
                                              };
                                              const tmp73 = closure_23(tmp(guildId[22]).Text, obj4, combined);
                                              cResult[53] = tmp27;
                                              cResult[54] = tmp4.commandOptionText;
                                              cResult[55] = combined;
                                              cResult[56] = tmp73;
                                              tmp71 = tmp73;
                                            }
                                          }
                                        }
                                      }
                                      const obj5 = {
                                        style: cResult[32],
                                        accessible: cResult[29],
                                        children: cResult[30],
                                      };
                                      const tmp69 = closure_23(cResult[26], obj5, cResult[31]);
                                      cResult[47] = cResult[26];
                                      cResult[48] = cResult[29];
                                      cResult[49] = cResult[30];
                                      cResult[50] = cResult[31];
                                      cResult[51] = cResult[32];
                                      cResult[52] = tmp69;
                                      tmp67 = tmp69;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const intl = tmp(guildId[24]).intl;
        const obj6 = {
          userHook() {
            let tmp2;
            if (num9) {
              tmp2 = processColorStringsArray;
            }
            const obj = { variant: "text-md/semibold", gradientColors: tmp2, style: null, children: null };
            let color = flag.colorString;
            if (color == null) {
              color = closure_5.commandText.color;
            }
            const items = [{ color }];
            let tmp6 = null != displayNameStylesFont;
            if (tmp6) {
              const obj2 = { fontFamily: tmp5 };
              tmp6 = obj2;
            }
            items[1] = tmp6;
            obj.style = items;
            obj.children = flag.nick;
            return closure_2_23(Text_Text.Text, obj, "user");
          },
          commandHook() {
            if (messageType === constants.CHAT_INPUT_COMMAND) {
              const _HermesInternal = HermesInternal;
              let children = "" + guild + name_localized;
            } else {
              children = name_localized;
            }
            return closure_2_23(
              Text_Text.Text,
              { variant: "text-md/semibold", color: "mobile-text-heading-primary", children },
              "command",
            );
          },
          applicationHook() {
            const obj = { style: closure_5.application, children: null };
            const obj2 = { style: closure_5.applicationIcon, source: null };
            const tmp = FastImageDefault;
            obj2.source = utils_AvatarUtils.ensureAvatarSource(colorString.getAvatarSource(guildId));
            const items = [
              closure_2_23(tmp, obj2, "icon-" + colorString.id),
              closure_2_23(Text_Text.Text, {
                variant: "text-md/semibold",
                color: "mobile-text-heading-primary",
                children: colorString.username,
              }),
            ];
            obj.children = items;
            return dependencyMap(React5, obj, "application");
          },
        };
        let _HermesInternal = HermesInternal;
        const tmpResult7 = tmp(guildId[31]);
        const combined1 = "integrationName-" + data.name;
        const text = `/${tmp12}`;
        if (cResult[33] === combined1) {
          if (cResult[34] === `/${tmp12}`) {
            let tmp37 = cResult[35];
          }
          if (cResult[36] === analyticsLocations) {
            if (cResult[37] === channel) {
              const application_command2 = data.application_command;
              let options1;
              if (application_command2 != null) {
                options1 = application_command2.options;
              }
              if (cResult[38] === options1) {
                if (cResult[39] === data.options) {
                  if (cResult[40] === guild) {
                    if (cResult[41] === messageId) {
                      if (cResult[42] === tmp4) {
                        if (cResult[43] === tmp37) {
                          let combined3 = cResult[44];
                        }
                        const Card = channelId(guildId[34]).Card;
                        const _HermesInternal2 = HermesInternal;
                        const combined2 = "commandName-" + data.name;
                        const commandName = tmp4.commandName;
                        const _Symbol2 = Symbol;
                        if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                          function ee(children, arg1) {
                            let tmp = children;
                            if (typeof children === "string") {
                              const obj = {
                                variant: "text-md/semibold",
                                color: "mobile-text-heading-primary",
                                children,
                              };
                              tmp = closure_1_23(channelId(guildId[22]).Text, obj, arg1);
                            }
                            return tmp;
                          }
                          cResult[46] = ee;
                          let tmp56 = ee;
                        } else {
                          tmp56 = cResult[46];
                        }
                        const Children = messageType.Children;
                        const mapped = Children.map(formatResult, tmp56);
                        cResult[11] = analyticsLocations;
                        cResult[12] = colorString;
                        colorString = flag.colorString;
                        cResult[13] = colorString;
                        cResult[14] = flag.nick;
                        cResult[15] = channel;
                        cResult[16] = name_localized;
                        cResult[17] = data;
                        cResult[18] = displayNameStylesFont;
                        cResult[19] = processColorStringsArray;
                        cResult[20] = guildId;
                        cResult[21] = guild;
                        cResult[22] = messageId;
                        cResult[23] = messageType;
                        cResult[24] = num9;
                        cResult[25] = tmp4;
                        cResult[26] = displayNameStylesFont;
                        cResult[27] = Card;
                        cResult[28] = combined3;
                        flag = true;
                        cResult[29] = true;
                        cResult[30] = mapped;
                        cResult[31] = combined2;
                        num9 = 32;
                        cResult[32] = commandName;
                      }
                    }
                  }
                }
              }
            }
          }
          const items4 = [tmp37];
          combined3 = items4;
          if (null != data.options) {
            const _Symbol3 = Symbol;
            if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
              function oe(name) {
                const items = [name.name, name];
                return items;
              }
              cResult[45] = oe;
              let tmp41 = oe;
            } else {
              tmp41 = cResult[45];
            }
            const application_command3 = data.application_command;
            let options2;
            if (application_command3 != null) {
              options2 = application_command3.options;
            }
            if (options2 == null) {
              options2 = [];
            }
            options = data.options;
            const iter = options[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let obj7 = {
                option: nextResult,
                channel,
                guild,
                messageId,
                parentOptionName: "",
                commandOptionSpec: fromEntriesResult[nextResult.name],
                styles: tmp4,
                analyticsLocations,
              };
              combined3 = combined3.concat(getCommandOptionComponents(obj7));
              continue;
            }
            fromEntriesResult = Object.fromEntries(options2.map(tmp41));
          }
          cResult[36] = analyticsLocations;
          cResult[37] = channel;
          const application_command4 = data.application_command;
          let options3;
          if (application_command4 != null) {
            options3 = application_command4.options;
          }
          cResult[38] = options3;
          cResult[39] = data.options;
          cResult[40] = guild;
          cResult[41] = messageId;
          cResult[42] = tmp4;
          cResult[43] = tmp37;
          cResult[44] = combined3;
        }
        const obj8 = { children: text };
        const tmp39 = closure_23(tmp(guildId[18]).LegacyText, obj8, combined1);
        cResult[33] = combined1;
        cResult[34] = text;
        cResult[35] = tmp39;
        tmp37 = tmp39;
        formatResult = intl.format(tmp(guildId[24]).t["sj/RT9"], obj6);
      }
      const obj9 = { userId: user.id, guildId };
      cResult[4] = guildId;
      cResult[5] = user.id;
      cResult[6] = obj9;
      tmp13 = obj9;
      const tmpResult = channelId(guildId[28]);
    }
  : function CommandContentContainer(channelId) {
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
      const analyticsLocations = author(data[27])().analyticsLocations;
      let items = [channel, name_localized];
      const items1 = [channelId];
      const stateFromStoresObject = channelId(data[28]).useStateFromStoresObject(
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
      let application_command = data.application_command;
      name_localized = undefined;
      if (application_command != null) {
        name_localized = application_command.name_localized;
      }
      if (name_localized == null) {
        name_localized = data.name;
      }
      let obj = channelId(data[28]);
      let obj2 = { userId: user.id, guildId };
      let tmp7 = author(data[29])({ userId: user.id, guildId });
      closure_12 = channelId(data[30]).useDisplayNameStylesFont({ displayNameStyles: tmp7 });
      const tmp4Result = channelId(data[30]);
      const items2 = [analyticsLocations];
      const stateFromStores = channelId(data[28]).useStateFromStores(items2, () => analyticsLocations.roleStyle);
      const tmp4Result4 = channelId(data[28]);
      processColorStringsArray = channelId(data[31]).useProcessColorStringsArray(author.colorStrings);
      const tmp4Result5 = channelId(data[31]);
      closure_14 = channelId(data[31]).useIsRoleStyleAndRoleColorsEligibleForERC(
        guildId,
        user.id,
        stateFromStores,
        processColorStringsArray,
      );
      const intl = tmp4(tmp3[24]).intl;
      const items3 = [channel, guild, messageId, , , , , ,];
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
          const items = [{ color }];
          let tmp6 = null != closure_12;
          if (tmp6) {
            const obj2 = { fontFamily: tmp5 };
            tmp6 = obj2;
          }
          items[1] = tmp6;
          obj.style = items;
          obj.children = author.nick;
          return closure_2_23(Text_Text.Text, obj, "user");
        },
        commandHook() {
          if (closure_1_5 === constants.CHAT_INPUT_COMMAND) {
            const _HermesInternal = HermesInternal;
            let children = "" + guild + name_localized;
          } else {
            children = name_localized;
          }
          return closure_2_23(
            Text_Text.Text,
            { variant: "text-md/semibold", color: "mobile-text-heading-primary", children },
            "command",
          );
        },
        applicationHook() {
          const obj = { style: styles.application, children: null };
          const obj2 = { style: styles.applicationIcon, source: null };
          const tmp = FastImageDefault;
          obj2.source = utils_AvatarUtils.ensureAvatarSource(avatarSource.getAvatarSource(guildId));
          const items = [
            closure_2_23(tmp, obj2, "icon-" + avatarSource.id),
            closure_2_23(Text_Text.Text, {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              children: avatarSource.username,
            }),
          ];
          obj.children = items;
          return dependencyMap(React5, obj, "application");
        },
      };
      const tmp4Result6 = channelId(data[31]);
      const memo = guildId.useMemo(() => {
        let items = [
          closure_2_23(native.LegacyText, { children: `/${name_localized}` }, "integrationName-" + data.name),
        ];
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
          options = data.options;
          const iter = options[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let obj2 = {
              option: nextResult,
              channel,
              guild,
              messageId,
              parentOptionName: "",
              commandOptionSpec: fromEntriesResult[nextResult.name],
              styles,
              analyticsLocations,
            };
            combined = combined.concat(getCommandOptionComponents(obj2));
            continue;
          }
          fromEntriesResult = Object.fromEntries(
            options1.map((name) => {
              const items = [name.name, name];
              return items;
            }),
          );
        }
        return combined;
      }, items3);
      const obj4 = { children: null };
      const obj5 = { style: tmp.commandName, accessible: true, children: null };
      const Children = guildId.Children;
      obj5.children = Children.map(
        intl.format(channelId(data[24]).t["sj/RT9"], {
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
            const items = [{ color }];
            let tmp6 = null != closure_12;
            if (tmp6) {
              const obj2 = { fontFamily: tmp5 };
              tmp6 = obj2;
            }
            items[1] = tmp6;
            obj.style = items;
            obj.children = author.nick;
            return closure_2_23(Text_Text.Text, obj, "user");
          },
          commandHook() {
            if (closure_1_5 === constants.CHAT_INPUT_COMMAND) {
              const _HermesInternal = HermesInternal;
              let children = "" + guild + name_localized;
            } else {
              children = name_localized;
            }
            return closure_2_23(
              Text_Text.Text,
              { variant: "text-md/semibold", color: "mobile-text-heading-primary", children },
              "command",
            );
          },
          applicationHook() {
            const obj = { style: styles.application, children: null };
            const obj2 = { style: styles.applicationIcon, source: null };
            const tmp = FastImageDefault;
            obj2.source = utils_AvatarUtils.ensureAvatarSource(avatarSource.getAvatarSource(guildId));
            const items = [
              closure_2_23(tmp, obj2, "icon-" + avatarSource.id),
              closure_2_23(Text_Text.Text, {
                variant: "text-md/semibold",
                color: "mobile-text-heading-primary",
                children: avatarSource.username,
              }),
            ];
            obj.children = items;
            return dependencyMap(React5, obj, "application");
          },
        }),
        (children, arg1) => {
          let tmp = children;
          if (typeof children === "string") {
            const obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
            tmp = closure_1_23(channelId(data[22]).Text, obj, arg1);
          }
          return tmp;
        },
      );
      const items4 = [
        closure_23(styles, obj5, "commandName-" + data.name),
        closure_23(
          channelId(data[22]).Text,
          { style: tmp.commandOptionText, variant: "text-md/medium", color: "text-default", children: memo },
          "commandOption-" + data.name,
        ),
      ];
      obj4.children = items4;
      return closure_24(channelId(data[34]).Card, obj4);
    };
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CommandActionsContainer(channelId) {
      let TableRowGroup = channelId;
      let tmp = channel;
      const cResult = channelId(channel[26]).c(27);
      channelId = channelId.channelId;
      const chatInputRef = channelId.chatInputRef;
      const data = channelId.data;
      if (cResult[0] !== data.options) {
        options = data.options;
        let someResult;
        if (options != null) {
          someResult = options.some(
            (type) => type.type === channelId(channel[17]).ApplicationCommandOptionType.ATTACHMENT,
          );
        }
        cResult[0] = data.options;
        cResult[1] = someResult;
        let tmp3 = someResult;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ChannelStore, GuildStore];
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== channelId) {
        const fn = function h() {
          channel = ChannelStore.getChannel(channelId);
          const obj = { channel, guild: null };
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          obj.guild = GuildStore.getGuild(guild_id);
          return obj;
        };
        let items1 = [channelId];
        cResult[3] = channelId;
        cResult[4] = fn;
        cResult[5] = items1;
        let tmp11 = items1;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      let obj = channelId(channel[26]);
      const stateFromStoresObject = TableRowGroup(tmp[28]).useStateFromStoresObject(tmp7, tmp10, tmp11);
      channel = stateFromStoresObject.channel;
      guild = stateFromStoresObject.guild;
      if (cResult[6] === channel) {
        if (cResult[7] === data) {
          if (cResult[8] === guild) {
            let tmp13 = cResult[9];
          }
          closure_5 = tmp13;
          if (cResult[10] === chatInputRef) {
            if (cResult[11] === data.id) {
              if (cResult[12] === data.options) {
                if (cResult[13] === tmp13) {
                  if (cResult[14] === tmp6) {
                    let arr3 = cResult[15];
                  }
                  if (0 === arr3.length) {
                    return null;
                  } else {
                    const _Symbol3 = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
                      const intl3 = TableRowGroup(tmp[24]).intl;
                      obj2.children = intl3.string(TableRowGroup(tmp[24]).t["3eF5/L"]);
                      const tmp29 = closure_23(TableRowGroup(tmp[22]).Text, obj2);
                      cResult[24] = tmp29;
                      let tmp27 = tmp29;
                    } else {
                      tmp27 = cResult[24];
                    }
                    if (cResult[25] !== arr3) {
                      let obj3 = { spacing: 8, children: null };
                      let items2 = [tmp27];
                      tmp27 = closure_23;
                      TableRowGroup = TableRowGroup(tmp[42]).TableRowGroup;
                      let obj4 = {
                        hasIcons: false,
                        children: arr3.map((children, index) => closure_1_23(guild.Fragment, { children }, index)),
                      };
                      tmp = closure_23(TableRowGroup, obj4);
                      items2[1] = tmp;
                      obj3.children = items2;
                      const tmp32 = closure_24(TableRowGroup(tmp[41]).Stack, obj3);
                      cResult[25] = arr3;
                      cResult[26] = tmp32;
                    }
                  }
                }
              }
            }
          }
          const items3 = [];
          if (tmp3) {
            if (null == chatInputRef) {
              cResult[10] = chatInputRef;
              cResult[11] = data.id;
              cResult[12] = data.options;
              cResult[13] = tmp13;
              cResult[14] = tmp6;
              cResult[15] = items3;
              arr3 = items3;
            } else {
              const _Symbol2 = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = TableRowGroup(tmp[24]).intl;
                const stringResult = intl2.string(TableRowGroup(tmp[24]).t.lNWC7s);
                cResult[19] = stringResult;
                let tmp20 = stringResult;
              } else {
                tmp20 = cResult[19];
              }
              if (cResult[20] === chatInputRef) {
                if (cResult[21] === data.id) {
                  if (cResult[22] === data.options) {
                    let tmp22 = cResult[23];
                  }
                  items3.push(tmp22);
                }
              }
              let obj5 = {
                label: tmp20,
                onPress() {
                  ActionSheetActionCreatorsDefault.hideActionSheet();
                  if (null != data.options) {
                    if (data.options.length > 0) {
                      const items = [
                        Server.ApplicationCommandOptionType.SUB_COMMAND,
                        Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                      ];
                      if (items.includes(data.options[0].type)) {
                        const items1 = [data.options[0].name];
                        const options1 = data.options[0].options;
                        let hasItem = null != options1 && options1.length > 0;
                        if (hasItem) {
                          const items2 = [
                            Server.ApplicationCommandOptionType.SUB_COMMAND,
                            Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                          ];
                          hasItem = items2.includes(options1[0].type);
                        }
                        options = options1;
                        if (hasItem) {
                          items1.push(options1[0].name);
                          options = options1[0].options;
                        }
                        if (chatInputRef != null) {
                          const current2 = chatInputRef.current;
                          if (current2 != null) {
                            const obj2 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                            const obj3 = {
                              initialRouteName: AppLauncherRouteName.COMMAND_VIEW,
                              analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL,
                              preSelectedCommand: null,
                            };
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
                      const obj7 = {
                        initialRouteName: AppLauncherRouteName.COMMAND_VIEW,
                        analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL,
                        preSelectedCommand: null,
                      };
                      ({ id: obj4.commandId, options: obj4.prefilledOptions } = data);
                      obj7.preSelectedCommand = { commandId: null, prefilledOptions: null };
                      obj6.context = obj7;
                      current.openCustomKeyboard(obj6);
                      const obj13 = { commandId: null, prefilledOptions: null };
                    }
                  }
                },
              };
              const tmp24 = closure_23(TableRowGroup(tmp[38]).TableRow, obj5);
              cResult[20] = chatInputRef;
              cResult[21] = data.id;
              cResult[22] = data.options;
              cResult[23] = tmp24;
              tmp22 = tmp24;
            }
          } else {
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = TableRowGroup(tmp[24]).intl;
              const stringResult1 = intl.string(TableRowGroup(tmp[24]).t["42H+Nb"]);
              cResult[16] = stringResult1;
              let onPress = stringResult1;
            } else {
              onPress = cResult[16];
            }
            if (cResult[17] !== tmp13) {
              let obj6 = { label: onPress, onPress: null };
              onPress = function onPress() {
                ActionSheetActionCreatorsDefault.hideActionSheet();
                closure_5();
              };
              obj6.onPress = onPress;
              const tmp17 = closure_23(TableRowGroup(tmp[38]).TableRow, obj6);
              cResult[17] = tmp13;
              cResult[18] = tmp17;
              let tmp15 = tmp17;
            } else {
              tmp15 = cResult[18];
            }
            items3.push(tmp15);
          }
        }
      }
      class S {
        constructor() {
          tmp = data;
          application_command = data.application_command;
          name_localized = undefined;
          if (application_command != null) {
            name_localized = application_command.name_localized;
          }
          if (name_localized == null) {
            name_localized = tmp.name;
          }
          items = [];
          items[0] = COMMAND_SENTINEL + name_localized;
          combined = items;
          if (null != tmp.options) {
            tmp31 = globalThis;
            application_command2 = tmp.application_command;
            options1 = undefined;
            _Object = Object;
            fromEntries = Object.fromEntries;
            if (application_command2 != null) {
              options1 = application_command2.options;
            }
            if (options1 == null) {
              options1 = [];
            }
            options = tmp.options;
            tmp4 = options;
            tmp5 = options;
            for (const item10021 of options) {
              tmp6 = combined;
              tmp7 = getCommandCopyText;
              tmp8 = channel;
              tmp9 = channel;
              tmp10 = guild;
              num = 0;
              tmp11 = item10021;
              tmp12 = channel;
              combined = combined.concat(getCommandCopyText(item10021, channel, guild, tmp3[item10021.name]));
              continue;
            }
          }
          tmp13 = closure_0;
          tmp14 = closure_3;
          obj2 = closure_0(closure_3[35]);
          if (obj2.isAndroid()) {
            tmp21 = closure_1;
            obj3 = closure_1(tmp14[36]);
            if (obj3 != null) {
              tmp22 = globalThis;
              _JSON2 = JSON;
              tmp23 = data;
              tmp25 = combined;
              str3 = " ";
              json = JSON.stringify(data);
              str4 = "application/x-discord-interaction-data";
              result = obj3.setItem(json, "application/x-discord-interaction-data", combined.join(" "));
            }
          } else {
            tmp15 = NativeModules;
            DCDClipboardManager = NativeModules.DCDClipboardManager;
            tmp16 = globalThis;
            _JSON = JSON;
            tmp17 = data;
            tmp19 = combined;
            str = " ";
            json1 = JSON.stringify(data);
            str2 = "application/x-discord-interaction-data";
            result1 = DCDClipboardManager.setItem(json1, "application/x-discord-interaction-data", combined.join(" "));
          }
          if (null != channel) {
            tmp28 = closure_15;
            obj1 = { channel: null, type: "channel" };
            obj1.channel = tmp27;
            obj7 = { commandTypes: null };
            items1 = [];
            items1[0] = tmp13(tmp14[17]).ApplicationCommandType.CHAT;
            obj7.commandTypes = items1;
            query = closure_15.query(obj1, obj7, { allowFetch: true });
          }
          tmp13Result = tmp13(tmp14[37]);
          presentCommandCopiedResult = tmp13Result.presentCommandCopied();
          return;
        }
      }
      cResult[6] = channel;
      cResult[7] = data;
      cResult[8] = guild;
      cResult[9] = S;
      tmp13 = S;
      const TableRowGroupResult = TableRowGroup(tmp[28]);
    }
  : function CommandActionsContainer(channelId) {
      channelId = channelId.channelId;
      const chatInputRef = channelId.chatInputRef;
      const data = channelId.data;
      let channel;
      guild = undefined;
      closure_5 = undefined;
      options = data.options;
      let someResult;
      if (options != null) {
        someResult = options.some(
          (type) => type.type === channelId(channel[17]).ApplicationCommandOptionType.ATTACHMENT,
        );
      }
      let items = [ChannelStore, GuildStore];
      let items1 = [channelId];
      const stateFromStoresObject = channelId(channel[28]).useStateFromStoresObject(
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
          name_localized = data.name;
        }
        let items = [closure_2_21 + name_localized];
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
          options = data.options;
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
          const DCDClipboardManager = timestampProducer.DCDClipboardManager;
          const _JSON = JSON;
          const json1 = JSON.stringify(data);
          const result1 = DCDClipboardManager.setItem(
            json1,
            "application/x-discord-interaction-data",
            combined.join(" "),
          );
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
        items3.push(closure_23(tmp2(tmp3[38]).TableRow, obj2));
      }
      if (null != chatInputRef) {
        let obj3 = { label: null, onPress: null };
        const intl2 = tmp2(tmp3[24]).intl;
        obj3.label = intl2.string(tmp2(tmp3[24]).t.lNWC7s);
        obj3.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          if (null != data.options) {
            if (data.options.length > 0) {
              const items = [
                Server.ApplicationCommandOptionType.SUB_COMMAND,
                Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
              ];
              if (items.includes(data.options[0].type)) {
                const items1 = [data.options[0].name];
                const options1 = data.options[0].options;
                let hasItem = null != options1 && options1.length > 0;
                if (hasItem) {
                  const items2 = [
                    Server.ApplicationCommandOptionType.SUB_COMMAND,
                    Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                  ];
                  hasItem = items2.includes(options1[0].type);
                }
                options = options1;
                if (hasItem) {
                  items1.push(options1[0].name);
                  options = options1[0].options;
                }
                if (chatInputRef != null) {
                  const current2 = chatInputRef.current;
                  if (current2 != null) {
                    const obj2 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
                    const obj3 = {
                      initialRouteName: AppLauncherRouteName.COMMAND_VIEW,
                      analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL,
                      preSelectedCommand: null,
                    };
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
              const obj7 = {
                initialRouteName: AppLauncherRouteName.COMMAND_VIEW,
                analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL,
                preSelectedCommand: null,
              };
              ({ id: obj4.commandId, options: obj4.prefilledOptions } = data);
              obj7.preSelectedCommand = { commandId: null, prefilledOptions: null };
              obj6.context = obj7;
              current.openCustomKeyboard(obj6);
              const obj13 = { commandId: null, prefilledOptions: null };
            }
          }
        };
        items3.push(closure_23(tmp2(tmp3[38]).TableRow, obj3));
      }
      let tmp9 = null;
      if (0 !== items3.length) {
        let obj4 = { spacing: 8, children: null };
        let obj5 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
        const intl3 = tmp2(tmp3[24]).intl;
        obj5.children = intl3.string(tmp2(tmp3[24]).t["3eF5/L"]);
        const items4 = [closure_23(tmp2(tmp3[22]).Text, obj5)];
        let obj6 = {
          hasIcons: false,
          children: items3.map((children, index) => closure_1_23(guild.Fragment, { children }, index)),
        };
        items4[1] = closure_23(tmp2(tmp3[42]).TableRowGroup, obj6);
        obj4.children = items4;
        tmp9 = closure_24(tmp2(tmp3[41]).Stack, obj4);
      }
      return tmp9;
    };
ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ExecutedCommandPopout(arg0) {
      const cResult = channelId(576).c(29);
      ({ user, channelId } = arg0);
      ({ chatInputRef, messageId } = arg0);
      ({ author, applicationUser, guildId, messageType } = arg0);
      const tmp4 = closure_26();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === messageId) {
          let tmp7 = cResult[3];
        }
        const stateFromStores = channelId(504).useStateFromStores(first, tmp7);
        const tmpResult = channelId(504);
        const analyticsLocations = messageId(6841)(messageId(6865).EXECUTED_COMMAND).analyticsLocations;
        if (cResult[4] === channelId) {
          let interactionData1;
          if (stateFromStores != null) {
            interactionData1 = stateFromStores.interactionData;
          }
          if (cResult[5] === interactionData1) {
            if (cResult[6] === messageId) {
              let tmp13 = cResult[7];
            }
            let interactionData2;
            if (stateFromStores != null) {
              interactionData2 = stateFromStores.interactionData;
            }
            if (cResult[8] === channelId) {
              if (cResult[9] === messageId) {
                if (cResult[10] === interactionData2) {
                  let tmp18 = cResult[11];
                }
                const effect = noop.useEffect(tmp13, tmp18);
                if (cResult[12] === applicationUser) {
                  if (cResult[13] === author) {
                    if (cResult[14] === channelId) {
                      if (cResult[15] === chatInputRef) {
                        if (cResult[16] === guildId) {
                          let interactionData3;
                          if (stateFromStores != null) {
                            interactionData3 = stateFromStores.interactionData;
                          }
                          if (cResult[17] === interactionData3) {
                            if (cResult[18] === messageId) {
                              if (cResult[19] === messageType) {
                                if (cResult[20] === tmp4.activityIndicator) {
                                  if (cResult[21] === user) {
                                    let tmp22 = cResult[22];
                                  }
                                  if (cResult[23] === tmp4.container) {
                                    if (cResult[26] === analyticsLocations) {
                                      if (cResult[27] === tmp34) {
                                        const tmp37 = cResult[28];
                                      }
                                      return tmp37;
                                    }
                                    const obj2 = { value: analyticsLocations, children: tmp34 };
                                    cResult[26] = analyticsLocations;
                                    cResult[27] = tmp34;
                                    cResult[28] = closure_23(channelId(6841).AnalyticsLocationProvider, obj2);
                                    class S {
                                      constructor() {
                                        tmp = closure_2;
                                        interactionData = undefined;
                                        if (closure_2 != null) {
                                          interactionData = tmp.interactionData;
                                        }
                                        tmp3 = null == interactionData;
                                        if (!tmp3) {
                                          type = undefined;
                                          if (tmp != null) {
                                            type = tmp.interactionData.type;
                                          }
                                          tmp5 = closure_0;
                                          tmp6 = closure_3;
                                          tmp7 = type === closure_0(closure_3[17]).ApplicationCommandType.CHAT;
                                          if (tmp7) {
                                            application_command = undefined;
                                            if (tmp != null) {
                                              application_command = tmp.interactionData.application_command;
                                            }
                                            tmp7 = undefined === application_command;
                                          }
                                          tmp3 = tmp7;
                                        }
                                        if (tmp3) {
                                          tmp9 = closure_2;
                                          tmp10 = closure_3;
                                          obj = closure_2(closure_3[44]);
                                          tmp11 = channelId;
                                          tmp12 = messageId;
                                          messageInteractionData = obj.fetchMessageInteractionData(
                                            channelId,
                                            messageId,
                                          );
                                        }
                                        return;
                                      }
                                    }
                                    const tmp39 = closure_23(channelId(6841).AnalyticsLocationProvider, obj2);
                                  }
                                  const obj3 = { startExpanded: true, bodyStyles: tmp4.container, children: tmp22 };
                                  cResult[23] = tmp4.container;
                                  cResult[24] = tmp22;
                                  cResult[25] = closure_23(channelId(6829).BottomSheet, obj3);
                                  class S {
                                    constructor() {
                                      tmp = closure_2;
                                      interactionData = undefined;
                                      if (closure_2 != null) {
                                        interactionData = tmp.interactionData;
                                      }
                                      tmp3 = null == interactionData;
                                      if (!tmp3) {
                                        type = undefined;
                                        if (tmp != null) {
                                          type = tmp.interactionData.type;
                                        }
                                        tmp5 = closure_0;
                                        tmp6 = closure_3;
                                        tmp7 = type === closure_0(closure_3[17]).ApplicationCommandType.CHAT;
                                        if (tmp7) {
                                          application_command = undefined;
                                          if (tmp != null) {
                                            application_command = tmp.interactionData.application_command;
                                          }
                                          tmp7 = undefined === application_command;
                                        }
                                        tmp3 = tmp7;
                                      }
                                      if (tmp3) {
                                        tmp9 = closure_2;
                                        tmp10 = closure_3;
                                        obj = closure_2(closure_3[44]);
                                        tmp11 = channelId;
                                        tmp12 = messageId;
                                        messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
                                      }
                                      return;
                                    }
                                  }
                                  const tmp36 = closure_23(channelId(6829).BottomSheet, obj3);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let interactionData4;
                if (stateFromStores != null) {
                  interactionData4 = stateFromStores.interactionData;
                }
                if (null != interactionData4) {
                  const obj4 = {
                    guildId,
                    user,
                    channelId,
                    messageId,
                    author,
                    applicationUser,
                    data: null,
                    messageType: null,
                  };
                  if (stateFromStores != null) {
                    let interactionData = stateFromStores.interactionData;
                  }
                  class S {
                    constructor() {
                      tmp = closure_2;
                      interactionData = undefined;
                      if (closure_2 != null) {
                        interactionData = tmp.interactionData;
                      }
                      tmp3 = null == interactionData;
                      if (!tmp3) {
                        type = undefined;
                        if (tmp != null) {
                          type = tmp.interactionData.type;
                        }
                        tmp5 = closure_0;
                        tmp6 = closure_3;
                        tmp7 = type === closure_0(closure_3[17]).ApplicationCommandType.CHAT;
                        if (tmp7) {
                          application_command = undefined;
                          if (tmp != null) {
                            application_command = tmp.interactionData.application_command;
                          }
                          tmp7 = undefined === application_command;
                        }
                        tmp3 = tmp7;
                      }
                      if (tmp3) {
                        tmp9 = closure_2;
                        tmp10 = closure_3;
                        obj = closure_2(closure_3[44]);
                        tmp11 = channelId;
                        tmp12 = messageId;
                        messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
                      }
                      return;
                    }
                  }
                  obj4.messageType = messageType;
                  const items1 = [closure_23(closure_29, obj4)];
                  const obj5 = { channelId, chatInputRef, data: null };
                  let interactionData5;
                  if (stateFromStores != null) {
                    interactionData5 = stateFromStores.interactionData;
                  }
                  const obj6 = { children: null };
                  obj5.data = interactionData5;
                  items1[1] = closure_23(closure_30, obj5);
                  obj6.children = items1;
                  let tmp27Result = closure_24(closure_25, obj6);
                } else {
                  const obj7 = { style: tmp4.activityIndicator, size: "large" };
                  tmp27Result = closure_23(closure_5, obj7);
                }
                cResult[12] = applicationUser;
                cResult[13] = author;
                cResult[14] = channelId;
                class S {
                  constructor() {
                    tmp = closure_2;
                    interactionData = undefined;
                    if (closure_2 != null) {
                      interactionData = tmp.interactionData;
                    }
                    tmp3 = null == interactionData;
                    if (!tmp3) {
                      type = undefined;
                      if (tmp != null) {
                        type = tmp.interactionData.type;
                      }
                      tmp5 = closure_0;
                      tmp6 = closure_3;
                      tmp7 = type === closure_0(closure_3[17]).ApplicationCommandType.CHAT;
                      if (tmp7) {
                        application_command = undefined;
                        if (tmp != null) {
                          application_command = tmp.interactionData.application_command;
                        }
                        tmp7 = undefined === application_command;
                      }
                      tmp3 = tmp7;
                    }
                    if (tmp3) {
                      tmp9 = closure_2;
                      tmp10 = closure_3;
                      obj = closure_2(closure_3[44]);
                      tmp11 = channelId;
                      tmp12 = messageId;
                      messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
                    }
                    return;
                  }
                }
                cResult[15] = chatInputRef;
                cResult[16] = guildId;
                let interactionData6;
                if (stateFromStores != null) {
                  interactionData6 = stateFromStores.interactionData;
                }
                cResult[17] = interactionData6;
                cResult[18] = messageId;
                cResult[19] = messageType;
                cResult[20] = tmp4.activityIndicator;
                cResult[21] = user;
                cResult[22] = tmp27Result;
                tmp22 = tmp27Result;
              }
            }
            const items2 = [channelId, messageId, interactionData2];
            cResult[8] = channelId;
            cResult[9] = messageId;
            class S {
              constructor() {
                tmp = closure_2;
                interactionData = undefined;
                if (closure_2 != null) {
                  interactionData = tmp.interactionData;
                }
                tmp3 = null == interactionData;
                if (!tmp3) {
                  type = undefined;
                  if (tmp != null) {
                    type = tmp.interactionData.type;
                  }
                  tmp5 = closure_0;
                  tmp6 = closure_3;
                  tmp7 = type === closure_0(closure_3[17]).ApplicationCommandType.CHAT;
                  if (tmp7) {
                    application_command = undefined;
                    if (tmp != null) {
                      application_command = tmp.interactionData.application_command;
                    }
                    tmp7 = undefined === application_command;
                  }
                  tmp3 = tmp7;
                }
                if (tmp3) {
                  tmp9 = closure_2;
                  tmp10 = closure_3;
                  obj = closure_2(closure_3[44]);
                  tmp11 = channelId;
                  tmp12 = messageId;
                  messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
                }
                return;
              }
            }
            cResult[10] = interactionData2;
            cResult[11] = items2;
            tmp18 = items2;
          }
        }
        cResult[4] = channelId;
        let interactionData7;
        if (stateFromStores != null) {
          interactionData7 = stateFromStores.interactionData;
        }
        class S {
          constructor() {
            tmp = closure_2;
            interactionData = undefined;
            if (closure_2 != null) {
              interactionData = tmp.interactionData;
            }
            tmp3 = null == interactionData;
            if (!tmp3) {
              type = undefined;
              if (tmp != null) {
                type = tmp.interactionData.type;
              }
              tmp5 = closure_0;
              tmp6 = closure_3;
              tmp7 = type === closure_0(closure_3[17]).ApplicationCommandType.CHAT;
              if (tmp7) {
                application_command = undefined;
                if (tmp != null) {
                  application_command = tmp.interactionData.application_command;
                }
                tmp7 = undefined === application_command;
              }
              tmp3 = tmp7;
            }
            if (tmp3) {
              tmp9 = closure_2;
              tmp10 = closure_3;
              obj = closure_2(closure_3[44]);
              tmp11 = channelId;
              tmp12 = messageId;
              messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
            }
            return;
          }
        }
        cResult[5] = interactionData7;
        cResult[6] = messageId;
        cResult[7] = S;
        tmp13 = S;
        const tmp10 = messageId(6841);
      }
      const fn = function l() {
        return MessageStore.getMessage(channelId, messageId);
      };
      cResult[1] = channelId;
      cResult[2] = messageId;
      cResult[3] = fn;
      tmp7 = fn;
      let obj = channelId(576);
    }
  : function ExecutedCommandPopout(channelId) {
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
      const tmp = closure_26();
      const items = [MessageStore];
      const stateFromStores = channelId(504).useStateFromStores(items, () =>
        MessageStore.getMessage(channelId, messageId),
      );
      let obj = channelId(504);
      const items1 = [channelId, messageId];
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
      const obj2 = { value: messageId(6841)(messageId(6865).EXECUTED_COMMAND).analyticsLocations, children: null };
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
        const items2 = [closure_23(closure_29, obj4)];
        const obj5 = { channelId, chatInputRef, data: null };
        let interactionData3;
        if (stateFromStores != null) {
          interactionData3 = stateFromStores.interactionData;
        }
        const obj6 = { children: null };
        obj5.data = interactionData3;
        items2[1] = closure_23(closure_30, obj5);
        obj6.children = items2;
        let tmp9Result = closure_24(closure_25, obj6);
      } else {
        const obj7 = { style: tmp.activityIndicator, size: "large" };
        tmp9Result = closure_23(closure_5, obj7);
      }
      obj3.children = tmp9Result;
      obj2.children = closure_23(channelId(6829).BottomSheet, obj3);
      return closure_23(channelId(6841).AnalyticsLocationProvider, obj2);
    };

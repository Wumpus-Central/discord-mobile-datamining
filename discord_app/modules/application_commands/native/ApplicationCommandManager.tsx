// === Module 12664: ApplicationCommandManager ===

// Module 12664 (ApplicationCommandManager)
import _modDef12 from "module_12" /* 12 */;
import Server from "Server" /* 1978 */;
import HapticUtils from "HapticUtils" /* 4725 */;
import RegexUtilsDefault from "RegexUtils" /* 4744 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4937 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7766 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7768 */;
import ApplicationCommandActionCreators from "ApplicationCommandActionCreators" /* 8023 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9427 */;
import ApplicationCommandOptionUtils from "ApplicationCommandOptionUtils" /* 9532 */;
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi" /* 9536 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 10526 */;
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser" /* 12248 */;
import ChatInputParser from "ChatInputParser" /* 12249 */;
import ApplicationCommandOptionValueParser from "ApplicationCommandOptionValueParser" /* 12250 */;
import DraftCommandUtils from "DraftCommandUtils" /* 12251 */;
import useCommandContext from "useCommandContext" /* 12285 */;
import application_commands_ApplicationCommandValidationUtils from "application_commands/ApplicationCommandValidationUtils" /* 12414 */;
import _slicedToArray from "module_32" /* 32 */;
import DraftStore from "DraftStore" /* 5106 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8025 */;

const ApplicationCommandActionCreatorsAll = ApplicationCommandActionCreators;

require = fn;
const DraftType = fn(5106).DraftType;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AutoCompleteResultTypes: closure_9, WHITESPACE_RE: c10 } = Constants);
const ChannelAutocompleteConstants = fn(5212);
({ COMMAND_SENTINEL: closure_11, formatGameMentionRaw: closure_12 } = ChannelAutocompleteConstants);
const MediaKeyboardTarget = fn(1608).MediaKeyboardTarget;
const constants3 = { FULL_COMMAND: 0, [0]: "FULL_COMMAND", PARTIAL_COMMAND: 1, [1]: "PARTIAL_COMMAND" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandManager.tsx");
class ApplicationCommandManager {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.chatInputNodes = [];
    map = new Map();
    obj.optionsToNodes = map;
    map1 = new Map();
    obj.optionValueNodes = map1;
    map2 = new Map();
    obj.mentionGames = map2;
    map3 = new Map();
    obj.mentionTimestamps = map3;
    tmp5 = new closure_1(closure_3[6])();
    obj.parser = tmp5;
    obj.optionValues = {};
    obj.optionValidationResults = {};
    obj.canAutoInsertFirstOption = true;
    obj.preferredOptionValues = {};
    obj.setAutoCompleteResult = function setAutoCompleteResult(id, addTimestampMentionResult, arg2, type) {
      let insertOrJumpCommandOption = type;
      const activeOption = ApplicationCommandStore.getActiveOption(id);
      if (arg2) {
        if (null != obj.props.activeCommand) {
          if (null != activeOption) {
            if (insertOrJumpCommandOption.type === constants2.GAME_MENTION) {
              return false;
            } else if (insertOrJumpCommandOption.type === constants2.TIMESTAMP_MENTION) {
              return false;
            } else {
              type = insertOrJumpCommandOption.type;
              if (constants2.USER === type) {
                const obj3 = { type: "userMention", userId: insertOrJumpCommandOption.user.id };
                let tmp5 = obj3;
                insertOrJumpCommandOption = obj.insertOrJumpCommandOption;
                const obj4 = { displayText: addTimestampMentionResult, preferred: true, value: tmp5 };
                const result = insertOrJumpCommandOption(activeOption, undefined, false, obj4);
              } else if (constants2.ROLE !== type) {
                if (constants2.CHANNEL === type) {
                  const obj5 = { type: "channelMention", channelId: insertOrJumpCommandOption.channel.id };
                  tmp5 = obj5;
                }
              }
              const obj6 = { type: "roleMention", roleId: insertOrJumpCommandOption.id };
              tmp5 = obj6;
            }
          }
        }
      }
      if (insertOrJumpCommandOption.type !== constants2.SLASH) {
        return false;
      } else {
        const obj11 = { channelId: id, command: null, section: null, location: null, visualSection: null, query: null, addSpace: true };
        ({ command: obj2.command, section: obj2.section, location: obj2.location, visualSection: obj2.visualSection, query: obj2.query } = insertOrJumpCommandOption);
        obj.setCommand(obj11);
        return true;
      }
    };
    obj.setCommand = function setCommand(arg0) {
      ({ command, query, commandText } = arg0);
      const current = obj.ref.current;
      ({ channelId, section, location: _location, visualSection } = arg0);
      if (commandText == null) {
        const _HermesInternal = HermesInternal;
        let str = "";
        const combined = "" + closure_2_11 + command.displayName;
        if (tmp) {
          str = " ";
        }
        commandText = combined + str;
      }
      current.setText(commandText);
      const obj3 = { channelId, command, section, location: _location, triggerSection: null, queryLength: null };
      const obj2 = ApplicationCommandActionCreators;
      obj3.triggerSection = ApplicationCommandUtils.getCommandTriggerSection(visualSection);
      let length;
      if (query != null) {
        length = query.length;
      }
      obj3.queryLength = length;
      obj2.setActiveCommand(obj3);
      const preferredCommand = obj.preferredCommand;
      let id;
      if (preferredCommand != null) {
        id = preferredCommand.id;
      }
      if (command.id !== id) {
        const obj5 = { preferredCommand: null };
        const obj6 = {};
        const merged = Object.assign(command);
        obj6.preferredCommandType = constants.FULL_COMMAND;
        obj5.preferredCommand = obj6;
        const result = obj.updateApplicationCommandManagerState(obj5);
      }
    };
    obj.setPartialCommand = function setPartialCommand(commandId, commandName, MENTION) {
      const current = obj.ref.current;
      current.setText("" + closure_2_11 + commandName);
      const preferredCommand = obj.preferredCommand;
      let id;
      if (preferredCommand != null) {
        id = preferredCommand.id;
      }
      if (commandId !== id) {
        const obj2 = { preferredCommand: null, location: null };
        const obj3 = { id: commandId, untranslatedName: commandName, displayName: commandName, preferredCommandType: constants.PARTIAL_COMMAND };
        obj2.preferredCommand = obj3;
        obj2.location = MENTION;
        const result = obj.updateApplicationCommandManagerState(obj2);
      }
    };
    obj.setPastedCommand = function setPastedCommand(arg0, channel) {
      const parsed = JSON.parse(arg0);
      obj = ApplicationCommandUtils;
      const result = obj.extractInteractionDataProps(parsed);
      let interactionOptions = result.interactionOptions;
      const cachedCommand = ApplicationCommandQueryApiAll.getCachedCommand({ type: "channel", channel }, result.commandKey);
      ({ application, command } = cachedCommand);
      if (null != command) {
        let tmp8 = null;
        if (null != application) {
          const obj5 = { type: ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION, id: null, icon: null, name: null, application: null };
          ({ id: obj4.id, icon: obj4.icon, bot } = application);
          let username;
          if (bot != null) {
            username = bot.username;
          }
          if (username == null) {
            username = application.name;
          }
          obj5.name = username;
          obj5.application = application;
          tmp8 = obj5;
        }
        if (interactionOptions == null) {
          interactionOptions = [];
        }
        const initialValuesFromInteractionOptions = ApplicationCommandOptionUtils.getInitialValuesFromInteractionOptions(command, interactionOptions);
        const _Object = Object;
        const keys = Object.keys(initialValuesFromInteractionOptions);
        const mapped = keys.map((item) => {
          closure_0 = item;
          const options = command.options;
          let found;
          if (options != null) {
            found = options.find((name) => name.name === closure_0);
          }
          const iter = initialValuesFromInteractionOptions[item];
          if (null != found) {
            if (null != iter) {
              let str1;
              if (iter.value != null) {
                str1 = str.toString();
              }
              if (null != found.choices) {
                const choices = found.choices;
                const found1 = choices.find((value) => value.value === iter.value);
                let displayName;
                if (found1 != null) {
                  displayName = found1.displayName;
                }
                str1 = displayName;
              }
              const _HermesInternal = HermesInternal;
              return "" + found.displayName + ":" + str1;
            }
          }
          return null;
        });
        let found = mapped.filter((item) => null != item);
        const joined = found.join(" ");
        const obj6 = { channelId: channel.id, command, section: tmp8, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.PASTE, commandText: null };
        let _HermesInternal = HermesInternal;
        let str2 = "";
        const combined = "" + closure_2_11 + command.displayName;
        if (0 !== joined.length) {
          const _HermesInternal2 = HermesInternal;
          str2 = " " + joined;
        }
        obj6.commandText = combined + str2;
        obj.setCommand(obj6);
        const tmp2Result = ApplicationCommandOptionUtils;
      } else {
        ({ id, name } = parsed);
        obj.setPartialCommand(id, name, ApplicationCommandTypes.ApplicationCommandTriggerLocations.PASTE);
      }
      const obj3 = { type: "channel", channel };
    };
    obj.updateApplicationCommandManagerState = function updateApplicationCommandManagerState(newState) {
      let props = newState.newState;
      ({ preferredCommand, location: _location } = newState);
      if (props == null) {
        props = obj.props;
      }
      obj = {};
      const merged = Object.assign(props);
      obj.preferredCommand = preferredCommand;
      obj.location = _location;
      obj.mergePropsAndUpdate(obj);
    };
    obj.updateStyles = function updateStyles(styles) {
      obj.styles = styles;
      const chatInputNodes = obj.chatInputNodes;
      obj.chatInputNodes = chatInputNodes.map((style) => {
        if (null == style.style) {
          return style;
        } else {
          const type = style.type;
          if (obj(12249).ChatInputNodeType.COMMAND_OPTION !== type) {
            if (tmp30(12249).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE !== type) {
              if (tmp30(12249).ChatInputNodeType.GAME_HIGHLIGHT === type) {
                const obj2 = {};
                const merged = Object.assign(style);
                const styles4 = closure_1_0.styles;
                obj2.style = styles4.gameMention();
                return obj2;
              } else if (tmp30(12249).ChatInputNodeType.GAME_MENTION_INPUT === type) {
                const obj3 = {};
                const merged1 = Object.assign(style);
                const styles3 = closure_1_0.styles;
                obj3.style = styles3.commandOption();
                return obj3;
              } else if (tmp30(12249).ChatInputNodeType.ROLE_HIGHLIGHT === type) {
                const data = style.data;
                let color;
                if (data != null) {
                  color = data.color;
                }
                const obj4 = {};
                const merged2 = Object.assign(style);
                const styles2 = closure_1_0.styles;
                obj4.style = styles2.autocomplete(color);
                return obj4;
              } else {
                if (tmp30(12249).ChatInputNodeType.EMOJI_HIGHLIGHT !== type) {
                  if (tmp30(12249).ChatInputNodeType.USER_HIGHLIGHT !== type) {
                    if (tmp30(12249).ChatInputNodeType.CHANNEL_HIGHLIGHT !== type) {
                      if (tmp30(12249).ChatInputNodeType.SILENT_HIGHLIGHT !== type) {
                        return style;
                      }
                    }
                  }
                }
                obj = {};
                const merged3 = Object.assign(style);
                const styles = closure_1_0.styles;
                obj.style = styles.autocomplete();
                return obj;
              }
            }
          }
          const data2 = style.data;
          let option;
          if (data2 != null) {
            option = data2.option;
          }
          let tmp19 = null != option;
          if (tmp19) {
            const activeOption = closure_1_0.activeOption;
            let name;
            if (activeOption != null) {
              name = activeOption.name;
            }
            tmp19 = option.name !== name;
          }
          if (tmp19) {
            let success;
            if (closure_1_0.optionValidationResults[option.name] != null) {
              success = tmp23.success;
            }
            tmp19 = false === success;
          }
          const obj5 = {};
          const merged4 = Object.assign(style);
          const styles5 = closure_1_0.styles;
          if (tmp19) {
            let commandErrorOptionResult = styles5.commandErrorOption();
          } else {
            commandErrorOptionResult = styles5.commandOption();
          }
          obj5.style = commandErrorOptionResult;
          return obj5;
        }
      });
      if (obj.chatInputNodes.length > 0) {
        const current = obj.ref.current;
        const result = current.updateNativeTextBlocksThrottled(obj.chatInputNodes, obj.props.editId);
      }
    };
    obj.addCommandOptionParserRules = function addCommandOptionParserRules() {
      const parser = obj.parser;
      obj = {
        ruleId: "commandOptionParserRuleId",
        type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION,
        matchFunction(c22, activeCommand) {
          return obj(12248).getMatchedOptions(c22, activeCommand);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled: true
      };
      parser.addRule(obj);
      const parser2 = obj.parser;
      parser2.addRule({
        ruleId: "commandOptionValueParserRuleId",
        type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE,
        matchFunction(length2, activeCommand) {
          return obj(12248).getMatchedOptionsWithValue(length2, activeCommand);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        editDisabled(data) {
          data = data.data;
          let type;
          if (data != null) {
            type = data.option.type;
          }
          return type === obj(1978).ApplicationCommandOptionType.ATTACHMENT;
        }
      });
      const parser3 = obj.parser;
      const obj2 = {
        ruleId: "commandOptionValueParserRuleId",
        type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE,
        matchFunction(length2, activeCommand) {
          return obj(12248).getMatchedOptionsWithValue(length2, activeCommand);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        editDisabled(data) {
          data = data.data;
          let type;
          if (data != null) {
            type = data.option.type;
          }
          return type === obj(1978).ApplicationCommandOptionType.ATTACHMENT;
        }
      };
      parser3.addRule({
        ruleId: "emojiHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.EMOJI_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(12248);
          return obj.getEmojiHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      });
      const parser4 = obj.parser;
      const obj3 = {
        ruleId: "emojiHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.EMOJI_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(12248);
          return obj.getEmojiHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      };
      parser4.addRule({
        ruleId: "roleHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.ROLE_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(12248);
          return obj.getRoleHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style(data) {
          data = data.data;
          let color;
          if (data != null) {
            color = data.color;
          }
          const styles = obj.styles;
          return styles.autocomplete(color);
        },
        editDisabled() {
          return false;
        }
      });
      const parser5 = obj.parser;
      const obj4 = {
        ruleId: "roleHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.ROLE_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(12248);
          return obj.getRoleHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style(data) {
          data = data.data;
          let color;
          if (data != null) {
            color = data.color;
          }
          const styles = obj.styles;
          return styles.autocomplete(color);
        },
        editDisabled() {
          return false;
        }
      };
      parser5.addRule({
        ruleId: "userHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.USER_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(12248);
          return obj.getUsernameHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      });
      const parser6 = obj.parser;
      const obj5 = {
        ruleId: "userHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.USER_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(12248);
          return obj.getUsernameHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      };
      parser6.addRule({
        ruleId: "channelHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.CHANNEL_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(12248);
          return obj.getChannelHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      });
      const parser7 = obj.parser;
      const obj6 = {
        ruleId: "channelHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.CHANNEL_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(12248);
          return obj.getChannelHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      };
      parser7.addRule({
        ruleId: "silentHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.SILENT_HIGHLIGHT,
        matchFunction(arg0) {
          return obj(12248).getSilentHighlightNodes(arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      });
      const parser8 = obj.parser;
      const obj7 = {
        ruleId: "silentHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.SILENT_HIGHLIGHT,
        matchFunction(arg0) {
          return obj(12248).getSilentHighlightNodes(arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      };
      parser8.addRule({
        ruleId: "gameHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.GAME_HIGHLIGHT,
        matchFunction(text) {
          obj = obj(12248);
          return obj.getGameHighlightNodes(closure_1_0.mentionGames, text);
        },
        style() {
          const styles = obj.styles;
          return styles.gameMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      });
      const parser9 = obj.parser;
      const obj8 = {
        ruleId: "gameHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.GAME_HIGHLIGHT,
        matchFunction(text) {
          obj = obj(12248);
          return obj.getGameHighlightNodes(closure_1_0.mentionGames, text);
        },
        style() {
          const styles = obj.styles;
          return styles.gameMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      };
      parser9.addRule({
        ruleId: "gameMentionInputRuleId",
        type: ChatInputParser.ChatInputNodeType.GAME_MENTION_INPUT,
        matchFunction(arr) {
          return obj(12248).getGameMentionInputNodes(arr);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      });
      const parser10 = obj.parser;
      const obj9 = {
        ruleId: "gameMentionInputRuleId",
        type: ChatInputParser.ChatInputNodeType.GAME_MENTION_INPUT,
        matchFunction(arr) {
          return obj(12248).getGameMentionInputNodes(arr);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      };
      parser10.addRule({
        ruleId: "timestampHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.TIMESTAMP_HIGHLIGHT,
        matchFunction(text) {
          obj = obj(12248);
          return obj.getTimestampHighlightNodes(closure_1_0.mentionTimestamps, text);
        },
        style() {
          const styles = obj.styles;
          return styles.timestampMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      });
      const parser11 = obj.parser;
      const obj10 = {
        ruleId: "timestampHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.TIMESTAMP_HIGHLIGHT,
        matchFunction(text) {
          obj = obj(12248);
          return obj.getTimestampHighlightNodes(closure_1_0.mentionTimestamps, text);
        },
        style() {
          const styles = obj.styles;
          return styles.timestampMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      };
      parser11.addRule({
        ruleId: "timestampMentionInputRuleId",
        type: ChatInputParser.ChatInputNodeType.TIMESTAMP_MENTION_INPUT,
        matchFunction(arr) {
          return obj(12248).getTimestampMentionInputNodes(arr);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      });
    };
    obj.getCurrentCommand = function getCurrentCommand(text, channel, preferredCommand, preferredCommandSection) {
      let contextCommands = obj;
      if (null != text) {
        if (!obj.props.commandsDisabled) {
          if (text.startsWith(closure_2_11)) {
            obj = ChatInputCommandOptionParser;
            const textBeforeFirstOption = obj.getTextBeforeFirstOption(text);
            ({ match: closure_3, text } = textBeforeFirstOption);
            let flag = false;
            if (null != preferredCommand) {
              const _HermesInternal = HermesInternal;
              if (text.startsWith("" + closure_2_11 + preferredCommand.displayName)) {
                flag = true;
                if (preferredCommand.preferredCommandType === constants.FULL_COMMAND) {
                  let obj2 = { command: preferredCommand, section: preferredCommandSection };
                  return obj2;
                }
              } else {
                const _HermesInternal2 = HermesInternal;
                flag = false;
              }
            }
            if (null == tmp.contextCommands) {
              return null;
            } else {
              const obj3 = { channel, type: "channel" };
              const commandContext = useCommandContext.getCommandContext(obj3);
              let preferredCommandType;
              if (preferredCommand != null) {
                preferredCommandType = preferredCommand.preferredCommandType;
              }
              if (preferredCommandType === constants.PARTIAL_COMMAND) {
                contextCommands = tmp.contextCommands;
                let found = contextCommands.find((id) => id.id === preferredCommand.id);
                if (null != found) {
                  const obj4 = { channel, type: "channel" };
                  let cachedApplicationSection = ApplicationCommandQueryApiAll.getCachedApplicationSection(obj4, Server.ApplicationCommandType.CHAT, found.applicationId);
                  let tmp20 = null;
                  if (null != cachedApplicationSection) {
                    let obj6 = { command: null, section: null };
                    let obj7 = {};
                    let merged = Object.assign(found);
                    obj7.preferredCommandType = constants.FULL_COMMAND;
                    obj6.command = obj7;
                    obj6.section = cachedApplicationSection;
                    tmp20 = obj6;
                  }
                  return tmp20;
                }
              } else {
                const draftCommand = DraftCommandUtils.resolveDraftCommand(channel, text, DraftStore.getDraftCommand(channel.id, DraftType.ChannelMessage));
                if (null != draftCommand) {
                  const obj8 = { command: null, section: null };
                  const obj9 = {};
                  const merged1 = Object.assign(draftCommand.command);
                  obj9.preferredCommandType = constants.FULL_COMMAND;
                  obj8.command = obj9;
                  obj8.section = draftCommand.section;
                  return obj8;
                } else {
                  const parts = text.slice(1).split(" ", 3);
                  c6 = 0;
                  if (0 < parts.length) {
                    function _loop() {
                      const substr = parts.slice(0, parts.length - c6);
                      const joined = substr.join(" ");
                      const obj2 = obj(7766);
                      let tmp3 = obj;
                      const regExp = new RegExp("^" + RegexUtilsDefault.escape(joined), "i");
                      const matchingGroupCommands = obj2.getMatchingGroupCommands(contextCommands.contextCommands, regExp, closure_4, 2);
                      const found = matchingGroupCommands.filter((inputType) => {
                        let tmp = inputType.inputType !== joined(dependencyMap[11]).ApplicationCommandInputType.PLACEHOLDER;
                        if (tmp) {
                          tmp = inputType.displayName === joined || inputType.untranslatedName === tmp2;
                          const tmp3 = inputType.displayName === joined || inputType.untranslatedName === tmp2;
                        }
                        return tmp;
                      });
                      if (found.length > 0) {
                        const first = found[0];
                        let tmp7 = c6 > 0;
                        if (!tmp7) {
                          tmp7 = null != dependencyMap;
                        }
                        obj = { channel, type: "channel" };
                        const cachedApplicationSection = ApplicationCommandQueryApiAll.getCachedApplicationSection(obj, tmp3(1978).ApplicationCommandType.CHAT, first.applicationId);
                        if (null == cachedApplicationSection) {
                          let obj5 = { v: null };
                        } else {
                          obj5 = { v: null };
                          const obj6 = { command: null, section: null };
                          const obj7 = {};
                          const merged = Object.assign(first);
                          obj7.preferredCommandType = constants.FULL_COMMAND;
                          obj6.command = obj7;
                          obj6.section = cachedApplicationSection;
                          obj5.v = obj6;
                        }
                        return obj5;
                      }
                      return matchingGroupCommands.length > 0 ? 0 : undefined;
                    }
                    let _loopResult = _loop();
                    let num = 0;
                    if (0 !== _loopResult) {
                      while (!_loopResult) {
                        let sum = num + 1;
                        c6 = sum;
                        if (sum < parts.length) {
                          _loopResult = _loop();
                          num = sum;
                        }
                      }
                      return _loopResult.v;
                    }
                  }
                  const str2 = text.slice(1);
                }
                const tmp3Result2 = DraftCommandUtils;
              }
              let tmp17 = null;
              if (flag) {
                tmp17 = null;
                if (null != preferredCommand) {
                  const obj10 = { command: preferredCommand, section: null };
                  tmp17 = obj10;
                }
              }
              return tmp17;
            }
          }
        }
      }
      return null;
    };
    obj.getCurrentOption = function getCurrentOption(focused2, selectionStart) {
      closure_0 = selectionStart;
      if (focused2) {
        obj = _modDef12;
        const _Array = Array;
        const optionValueNodes = obj.optionValueNodes;
        const findLastResult = obj.findLast(Array.from(optionValueNodes.values()), (location) => location.location <= closure_0);
        if (findLastResult != null) {
          const data = findLastResult.data;
          if (data != null) {
            const option = data.option;
          }
        }
        if (null != findLastResult) {
          if (null != option) {
            return option;
          }
        }
        return null;
      } else {
        return null;
      }
    };
    obj.getAllCommandOptionValues = function getAllCommandOptionValues(activeCommand, text) {
      if (null == activeCommand.options) {
        return {};
      } else {
        obj = {};
        const optionValueNodes = obj.optionValueNodes;
        const tmp23 = optionValueNodes[Symbol.iterator]();
        while (tmp23 !== undefined) {
          let tmp5 = _slicedToArray(tmp2, 2);
          [tmp6, tmp7] = tmp5;
          let data = tmp7.data;
          let type;
          if (data != null) {
            type = data.type;
          }
          if (type === ChatInputParser.ChatInputParseResultDataType.COMMAND_OPTION) {
            let tmp26 = obj.preferredOptionValues[obj.props.channel.id];
            let optionValue;
            let tmp25 = obj;
            if (tmp26 != null) {
              let tmp12 = tmp26[tmp6];
              if (tmp12 != null) {
                optionValue = tmp12.optionValue;
              }
            }
            if (null != optionValue) {
              let items = [tmp14];
              obj[tmp6] = items;
            } else {
              let option = tmp7.data.option;
              let optionValueParser = tmp25.optionValueParser;
              let items1 = [optionValueParser.parse(text.substring(tmp7.location + option.displayName.length + 1, tmp7.location + tmp7.length), option)];
              obj[tmp6] = items1;
            }
          }
          continue;
        }
        return obj;
      }
    };
    obj.insertFirstOptionIfValid = function insertFirstOptionIfValid(text, activeCommand, displayName, arg3, arg4) {
      if (text.startsWith("" + closure_2_11 + displayName)) {
        if (text.length > displayName.length + 1) {
          if (regex.test(text[displayName.length + 1])) {
            const _Set = Set;
            const optionValueNodes = obj.optionValueNodes;
            c1 = true;
            const options = activeCommand.options;
            let found;
            if (options != null) {
              found = options.filter((required) => {
                let tmp = required.required || c1;
                if (tmp) {
                  tmp = !set.has(required.name);
                }
                return tmp;
              });
            }
            let first = null;
            if (null != found) {
              first = null;
              if (found.length > 0) {
                first = found[0];
              }
            }
            if (null != first) {
              const result = obj.insertOrJumpCommandOption(first, activeCommand.displayName.length + 2, true, undefined, activeCommand);
            }
            return true;
          }
        }
      }
      return false;
    };
    obj.insertOrJumpCommandOption = function insertOrJumpCommandOption(found, length, arg2) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      if (activeCommand == null) {
        activeCommand = obj.props.activeCommand;
      }
      if (null != activeCommand) {
        ({ text, selectionStart } = obj.props);
        const optionValueNodes2 = obj.optionValueNodes;
        if (optionValueNodes2 != null) {
          value = optionValueNodes2.get(found.name);
        }
        let displayText;
        if (displayText != null) {
          displayText = displayText.displayText;
        }
        let tmp4 = length;
        if (null == displayText) {
          if (null == value) {
            if (tmp4 == null) {
              tmp4 = selectionStart;
            }
            let tmp27 = null != text && tmp4 <= text.length;
            if (tmp27) {
              const _Math3 = Math;
              tmp27 = !regex.test(text[Math.min(Math, tmp4 - 1, text.length - 1)]);
            }
            const current3 = obj7.ref.current;
            obj = { location: tmp4, length: 0, text: null, nodes: null, keepCursorPosition: null, editId: null };
            let str8 = "";
            if (tmp27) {
              str8 = " ";
            }
            const _HermesInternal6 = HermesInternal;
            obj.text = "" + str8 + found.displayName + ":";
            const obj2 = { type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION, style: null, location: null, length: null };
            const styles3 = obj7.styles;
            obj2.style = styles3.commandOption();
            let num9 = 0;
            if (tmp27) {
              num9 = 1;
            }
            obj2.location = num9;
            obj2.length = found.displayName.length + 1;
            const items = [obj2];
            obj.nodes = items;
            obj.keepCursorPosition = flag;
            obj.editId = obj7.editId;
            current3.replaceRange(obj);
          } else {
            const current2 = obj7.ref.current;
            current2.setSelectedRange(value.location + found.displayName.length + 1, value.length - found.displayName.length - 1);
          }
        } else {
          if (null != value) {
            let _location = value.location;
          } else {
            _location = tmp4;
            if (tmp4 == null) {
              _location = selectionStart;
            }
          }
          let num2 = 0;
          if (null != value) {
            num2 = value.length;
          }
          let tmp5 = null != text && _location <= text.length;
          if (tmp5) {
            const _Math = Math;
            tmp5 = !regex.test(text[Math.min(Math, _location - 1, text.length - 1)]);
          }
          const _Set = Set;
          const optionValueNodes = obj7.optionValueNodes;
          const set = new Set(optionValueNodes.keys());
          set.add(found.name);
          c1 = undefined;
          const options = activeCommand.options;
          found = undefined;
          if (options != null) {
            found = options.filter((required) => {
              let tmp = required.required || c1;
              if (tmp) {
                tmp = !set.has(required.name);
              }
              return tmp;
            });
          }
          let first = null;
          if (null != found) {
            first = null;
            if (found.length > 0) {
              first = found[0];
            }
          }
          let tmp15 = null != displayText;
          if (tmp15) {
            let tmp16 = _location + num2 !== text.length;
            if (tmp16) {
              const _Math2 = Math;
              tmp16 = !regex.test(text[Math.min(Math, _location + num2, text.length - 1)]);
            }
            if (!tmp16) {
              tmp16 = null != first;
            }
            tmp15 = tmp16;
          }
          let displayText1;
          if (displayText != null) {
            displayText1 = displayText.displayText;
          }
          if ("" !== displayText1) {
            const _HermesInternal2 = HermesInternal;
            let combined = "" + found.displayName + ":" + displayText.displayText;
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + found.displayName + ":";
          }
          let str4 = "";
          if (tmp5) {
            str4 = " ";
          }
          let str5 = "";
          if (tmp15) {
            str5 = " ";
          }
          const _HermesInternal3 = HermesInternal;
          const combined1 = "" + str4 + combined + str5;
          if (null != first) {
            const _HermesInternal4 = HermesInternal;
            const combined2 = "" + first.displayName + ":";
            const _HermesInternal5 = HermesInternal;
            const obj3 = { type: null, style: null, location: null, length: null };
            const combined3 = "" + combined1 + combined2;
            obj3.type = ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE;
            const styles = obj7.styles;
            obj3.style = styles.commandOption();
            let num6 = 0;
            if (tmp5) {
              num6 = 1;
            }
            obj3.location = num6;
            obj3.length = combined.length;
            const items1 = [obj3, ];
            const obj4 = { type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION, style: null, location: null, length: null };
            const styles2 = obj7.styles;
            obj4.style = styles2.commandOption();
            obj4.location = combined1.length;
            obj4.length = combined2.length;
            items1[1] = obj4;
            const current = obj7.ref.current;
            const obj5 = { location: _location, length: num2, text: combined3, nodes: items1, editId: obj7.editId };
            current.replaceRange(obj5);
          } else {
            const current4 = obj7.ref.current;
            const obj6 = { location: _location, length: num2, text: combined1, nodes: null, keepCursorPosition: null, editId: null };
            const obj8 = { type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE, style: null, location: null, length: null };
            const styles4 = obj7.styles;
            obj8.style = styles4.commandOption();
            let num5 = 0;
            if (tmp5) {
              num5 = 1;
            }
            obj8.location = num5;
            obj8.length = combined.length;
            const items2 = [obj8];
            obj6.nodes = items2;
            obj6.keepCursorPosition = flag;
            obj6.editId = obj7.editId;
            current4.replaceRange(obj6);
          }
        }
        let preferred;
        if (displayText != null) {
          preferred = displayText.preferred;
        }
        if (preferred) {
          const result = obj7.setPreferredOptionValue(obj7.props.channel.id, found.name, displayText);
        }
      }
    };
    obj.sendCommand = function sendCommand(text, channel, fn) {
      const activeCommand = obj.props.activeCommand;
      if (null != activeCommand) {
        let prop = obj.optionValidationResults;
        if (prop == null) {
          prop = {};
        }
        const firstInvalidOption = application_commands_ApplicationCommandValidationUtils.getFirstInvalidOption(activeCommand, prop);
        const _Object = Object;
        const entries = Object.entries(ApplicationCommandStore.getOptionStates(channel.id));
        const item = entries.forEach((item) => {
          [tmp, tmp2] = item;
          if (null != tmp2.optionValue) {
            obj3[tmp] = tmp2.optionValue;
          }
        });
        if (null == firstInvalidOption) {
          fn(activeCommand, ApplicationCommandOptionValueParser.parseOptionValuesForSend(channel, activeCommand, obj3));
        } else {
          const result = obj.insertOrJumpCommandOption(firstInvalidOption);
          const result1 = obj.updateValidationResults();
          const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.NOTIFICATION_ERROR);
          let applicationId;
          if (activeCommand != null) {
            applicationId = activeCommand.applicationId;
          }
          const obj5 = { application_id: applicationId, command_id: null, argument_type: null, is_required: null };
          let id;
          if (activeCommand != null) {
            const rootCommand = activeCommand.rootCommand;
            if (rootCommand != null) {
              id = rootCommand.id;
            }
          }
          obj5.command_id = id;
          let num2 = firstInvalidOption.type;
          if (num2 == null) {
            num2 = 3;
          }
          obj5.argument_type = Server.ApplicationCommandOptionType[num2];
          let required;
          if (firstInvalidOption != null) {
            required = firstInvalidOption.required;
          }
          obj5.is_required = required;
          AppAnalyticsUtils.trackWithMetadata(constants.APPLICATION_COMMAND_VALIDATION_FAILED, obj5);
        }
        return true;
      } else {
        let query = null;
        if (obj9.getPrefix(text) === closure_2_11) {
          query = autocompleter_AutocompleteUtils.getQuery(text);
        }
        if (null != query) {
          const obj6 = { channel, type: "channel" };
          ({ commands, sections } = ApplicationCommandQueryApiAll.getCachedResults(obj6, Server.ApplicationCommandType.CHAT, query));
          if (null != commands) {
            if (commands.length > 0) {
              if (commands[0].inputType !== ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER) {
                const command = commands[0];
                let found = sections.find((application) => {
                  application = application.application;
                  let id;
                  if (application != null) {
                    id = application.id;
                  }
                  return id === first.applicationId;
                });
                const obj7 = { channelId: channel.id, command, section: null, location: null, query: null };
                if (found == null) {
                  found = null;
                }
                obj7.section = found;
                obj7.location = ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY;
                obj7.query = query;
                obj.setCommand(obj7);
                return true;
              }
            }
          }
          const cachedResults = ApplicationCommandQueryApiAll.getCachedResults(obj6, Server.ApplicationCommandType.CHAT, query);
        }
        return false;
      }
    };
    ({ props: obj.props, ref: obj.ref, optionValueParser: obj.optionValueParser, styles: obj.styles } = global);
    result = obj.addCommandOptionParserRules();
    return obj;
  }
}
const prototype = ApplicationCommandManager.prototype;
prototype["addGameMention"] = function addGameMention(game) {
  const mentionGames = this.mentionGames;
  const result = mentionGames.set(game.id, game);
};
prototype["getMentionGames"] = function getMentionGames() {
  return this.mentionGames;
};
prototype["buildGameMentionNode"] = function buildGameMentionNode(game) {
  const obj = { type: ChatInputParser.ChatInputNodeType.GAME_HIGHLIGHT, style: null, deleteNodeOnBackspace: true, editDisabled: true };
  const styles = this.styles;
  obj.style = styles.gameMention();
  const merged = Object.assign(ChatInputCommandOptionParser.buildGameMentionResult(game));
  return obj;
};
prototype["addTimestampMention"] = function addTimestampMention(formatted, mention) {
  const obj = ChatInputCommandOptionParser;
  const result = obj.uniqueTimestampPillText(this.mentionTimestamps, ChatInputCommandOptionParser.formatTimestampPillText(formatted), mention);
  const mentionTimestamps = this.mentionTimestamps;
  const result1 = mentionTimestamps.set(result, mention);
  return result;
};
prototype["getMentionTimestamps"] = function getMentionTimestamps() {
  return this.mentionTimestamps;
};
prototype["clearTimestampMentions"] = function clearTimestampMentions() {
  const mentionTimestamps = this.mentionTimestamps;
  mentionTimestamps.clear();
};
prototype["buildTimestampMentionNode"] = function buildTimestampMentionNode(addTimestampMentionResult) {
  const obj = { type: ChatInputParser.ChatInputNodeType.TIMESTAMP_HIGHLIGHT, style: null, deleteNodeOnBackspace: true, editDisabled: true, location: 0, length: addTimestampMentionResult.length };
  const styles = this.styles;
  obj.style = styles.timestampMention();
  return obj;
};
prototype["setPreferredOptionValue"] = function setPreferredOptionValue(id, name, displayText) {
  const self = this;
  if (null == this.preferredOptionValues[id]) {
    self.preferredOptionValues[id] = {};
  }
  self.preferredOptionValues[id][name] = displayText;
};
prototype["mergePropsAndUpdate"] = function mergePropsAndUpdate(editId) {
  const self = this;
  importDefault = editId;
  const props = this.props;
  ({ text, editId, channel } = props);
  let tmp3 = editId !== editId.editId;
  ({ selectionStart, selectionEnd, focused, queryCommands, lastCommandAutocompleteResponseNonce } = props);
  if (tmp3) {
    tmp3 = null != editId.editId;
  }
  if (tmp3) {
    self.editId = editId.editId;
  }
  importAll = tmp5;
  ({ activeCommand, activeCommandSection: section } = self);
  if (text === editId.text) {
    if (queryCommands === editId.queryCommands) {
      let flag = false;
      let tmp9 = section;
    }
    let id;
    if (activeCommand != null) {
      id = activeCommand.id;
    }
    const activeCommand3 = self.activeCommand;
    let id1;
    if (activeCommand3 != null) {
      id1 = activeCommand3.id;
    }
    let tmp83 = id !== id1;
    dependencyMap = tmp83;
    let activeOption = self.activeOption;
    let currentOption = activeOption;
    let tmp84 = tmp5;
    if (!tmp5) {
      tmp84 = tmp6;
    }
    if (!tmp84) {
      tmp84 = focused !== tmp7;
    }
    if (!tmp84) {
      tmp84 = tmp83;
    }
    if (tmp84) {
      let focused2 = editId.focused;
      if (!focused2) {
        const keyboardType = obj10(4625).getKeyboardType();
        focused2 = keyboardType !== obj10(1610).KeyboardTypes.SYSTEM;
        const obj6 = obj10(4625);
      }
      currentOption = self.getCurrentOption(focused2, editId.selectionStart);
      activeOption = currentOption;
    }
    let tmp91 = tmp83;
    if (tmp83) {
      tmp91 = null != self.activeCommand;
    }
    if (tmp91) {
      UploadAttachmentActionCreatorsDefault.clearAll(channel.id, self.SlashCommand);
    }
    let name1;
    if (activeOption != null) {
      name1 = activeOption.name;
    }
    const activeOption2 = self.activeOption;
    let name3;
    if (activeOption2 != null) {
      name3 = activeOption2.name;
    }
    closure_5 = tmp99;
    let tmp100 = tmp5;
    if (!tmp5) {
      tmp100 = tmp99;
    }
    if (!tmp100) {
      tmp100 = lastCommandAutocompleteResponseNonce !== editId.lastCommandAutocompleteResponseNonce;
    }
    if (tmp100) {
      let preferredCommandType;
      if (activeCommand != null) {
        preferredCommandType = activeCommand.preferredCommandType;
      }
      tmp100 = preferredCommandType === constants3.FULL_COMMAND;
    }
    if (tmp100) {
      self.optionValues = self.getAllCommandOptionValues(activeCommand, editId.text);
      const obj8 = obj10(12412);
      self.optionValidationResults = obj8.getValidationResults(activeCommand, self.optionValues, editId.channel.guild_id, editId.channel.id, false);
      const chatInputNodes = self.chatInputNodes;
      self.chatInputNodes = chatInputNodes.map((type) => {
        if (type.type === ChatInputParser.ChatInputNodeType.COMMAND_OPTION) {
          if (null != type.data) {
            const option = type.data.option;
            if (type.type === ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE) {
              let name;
              if (currentOption != null) {
                name = currentOption.name;
              }
              if (option.name === name) {
                if (closure_2) {
                  const obj = {};
                  const merged = Object.assign(type);
                  obj.style = undefined;
                  return obj;
                }
              }
            }
            const obj2 = {};
            const merged1 = Object.assign(type);
            let name1;
            if (currentOption != null) {
              name1 = currentOption.name;
            }
            if (option.name !== name1) {
              if (undefined !== tmp15) {
                if (!tmp15.success) {
                  const styles = self.styles;
                  obj2.style = styles.commandErrorOption();
                }
                let success;
                if (tmp15 != null) {
                  success = tmp15.success;
                }
                if (success) {
                  success = option.type === Server.ApplicationCommandOptionType.ATTACHMENT;
                }
                if (success) {
                  const obj3 = { action: "tapAttachment", channelId: editId.channel.id, optionName: option.name };
                  obj2.tapAction = obj3;
                  obj2.deleteNodeOnBackspace = true;
                }
                return obj2;
              }
            }
            const styles2 = self.styles;
            obj2.style = styles2.commandOption();
          }
        }
        return type;
      });
    }
    let tmp109 = tmp5;
    if (!tmp5) {
      tmp109 = tmp83;
    }
    if (!tmp109) {
      tmp109 = tmp99;
    }
    if (!tmp109) {
      tmp109 = editId !== editId.editId;
    }
    if (tmp109) {
      const current = self.ref.current;
      let result = current.updateNativeTextBlocksThrottled(self.chatInputNodes, editId.editId);
    }
    let tmp111 = tmp83;
    if (tmp83) {
      tmp111 = null != activeCommand;
    }
    if (tmp111) {
      self.canAutoInsertFirstOption = true;
    }
    if (!obj9.isEmpty(self.optionsToNodes)) {
      self.canAutoInsertFirstOption = false;
    }
    let preferredCommandType1;
    if (activeCommand != null) {
      preferredCommandType1 = activeCommand.preferredCommandType;
    }
    if (preferredCommandType1 === constants3.FULL_COMMAND) {
      let options;
      if (activeCommand != null) {
        options = activeCommand.options;
      }
      if (options == null) {
        options = [];
      }
      let items = options;
    } else {
      items = [];
    }
    const tmp118 = items.filter((required) => required.required).length > 0;
    let preferredCommandType2;
    if (activeCommand != null) {
      preferredCommandType2 = activeCommand.preferredCommandType;
    }
    if (preferredCommandType2 === constants3.FULL_COMMAND) {
      let options1;
      if (activeCommand != null) {
        options1 = activeCommand.options;
      }
      if (options1 == null) {
        options1 = [];
      }
      let items1 = options1;
    } else {
      items1 = [];
    }
    let canAutoInsertFirstOption = self.canAutoInsertFirstOption;
    if (canAutoInsertFirstOption) {
      let preferredCommandType3;
      if (activeCommand != null) {
        preferredCommandType3 = activeCommand.preferredCommandType;
      }
      canAutoInsertFirstOption = preferredCommandType3 === constants3.FULL_COMMAND;
    }
    if (canAutoInsertFirstOption) {
      canAutoInsertFirstOption = tmp113(12).isEmpty(self.optionsToNodes);
      const tmp113Result = tmp113(12);
    }
    if (canAutoInsertFirstOption) {
      canAutoInsertFirstOption = editId.text.length >= text.length;
    }
    if (canAutoInsertFirstOption) {
      const tmp123 = 1 === items1.filter((required) => !required.required).length;
      if (!self.insertFirstOptionIfValid(editId.text, activeCommand, activeCommand.displayName, tmp118, tmp123)) {
        let result1 = self.insertFirstOptionIfValid(editId.text, activeCommand, activeCommand.untranslatedName, tmp118, tmp123);
      }
    }
    if (name1 !== name3) {
      let type;
      if (activeOption != null) {
        type = activeOption.type;
      }
      if (type === tmp113(1978).ApplicationCommandOptionType.ATTACHMENT) {
        if (!self.optionValidationResults[activeOption.name].success) {
          const current2 = self.ref.current;
          let obj2 = { type: tmp113(1610).KeyboardTypes.MEDIA, context: null };
          let obj3 = { target: MediaKeyboardTarget.COMMAND, option: activeOption };
          obj2.context = obj3;
          current2.openCustomKeyboard(obj2);
        }
        self.props = editId;
        obj10 = {};
        let preferredCommandType4;
        if (activeCommand != null) {
          preferredCommandType4 = activeCommand.preferredCommandType;
        }
        if (preferredCommandType4 === constants3.FULL_COMMAND) {
          if (tmp99) {
            if (activeCommand != null) {
              const options2 = activeCommand.options;
              if (options2 != null) {
                const item = options2.forEach((name) => {
                  name = name.name;
                  let name1;
                  if (currentOption != null) {
                    name1 = currentOption.name;
                  }
                  const obj = { isActive: name === name1, optionValue: self.optionValues[name], hasValue: null, location: null, length: null };
                  let tmp4 = null != arr;
                  if (tmp4) {
                    tmp4 = arr.length > 0;
                  }
                  obj.hasValue = tmp4;
                  const optionsToNodes = self.optionsToNodes;
                  value = optionsToNodes.get(name);
                  let _location;
                  if (value != null) {
                    _location = value.location;
                  }
                  obj.location = _location;
                  const optionsToNodes2 = self.optionsToNodes;
                  value2 = optionsToNodes2.get(name);
                  let length;
                  if (value2 != null) {
                    length = value2.length;
                  }
                  obj.length = length;
                  obj10[name] = obj;
                });
              }
            }
            if (tmp99) {
              if (null != activeOption) {
                obj10[activeOption.name].hasValue = true;
              }
              if (null != self.activeOption) {
                let hasValue;
                if (obj10[self.activeOption.name] != null) {
                  hasValue = tmp150.hasValue;
                }
                if (hasValue) {
                  obj10[self.activeOption.name].lastValidationResult = self.optionValidationResults[self.activeOption.name];
                }
              }
            }
          }
        }
        const currentOption1 = self.getCurrentOption(true, editId.selectionStart);
        if (tmp5) {
          if (null != currentOption1) {
            const name2 = currentOption1.name;
            let obj11 = obj10[name2];
            if (obj11 == null) {
              obj11 = {};
            }
            let optionsToNodes2 = self.optionsToNodes;
            value = optionsToNodes2.get(name2);
            let _location;
            if (value != null) {
              _location = value.location;
            }
            obj11.location = _location;
            const optionsToNodes3 = self.optionsToNodes;
            const value3 = optionsToNodes3.get(name2);
            let length;
            if (value3 != null) {
              length = value3.length;
            }
            obj11.length = length;
            obj11.optionValue = self.optionValues[name2];
            obj11.hasValue = true;
            let success;
            if (self.optionValidationResults[name2] != null) {
              success = tmp156.success;
            }
            if (success) {
              obj11.lastValidationResult = tmp156;
            }
            obj10[name2] = obj11;
          }
        }
        self.activeCommand = activeCommand;
        self.activeCommandSection = tmp9;
        self.activeOption = activeOption;
        if (!tmp83) {
          const _Object = Object;
          tmp83 = Object.keys(obj10).length > 0;
        }
        if (!tmp83) {
          tmp83 = flag;
        }
        if (tmp83) {
          const obj12 = { channelId: editId.channel.id, command: null, section: null, preferredCommandId: null, location: null, changedOptionStates: null };
          const activeCommand4 = self.activeCommand;
          let preferredCommandType5;
          if (activeCommand4 != null) {
            preferredCommandType5 = activeCommand4.preferredCommandType;
          }
          let activeCommand1 = null;
          if (preferredCommandType5 === constants3.FULL_COMMAND) {
            activeCommand1 = self.activeCommand;
          }
          obj12.command = activeCommand1;
          let activeCommandSection = self.activeCommandSection;
          if (activeCommandSection == null) {
            activeCommandSection = null;
          }
          obj12.section = activeCommandSection;
          const preferredCommand6 = self.preferredCommand;
          let id2;
          if (preferredCommand6 != null) {
            id2 = preferredCommand6.id;
          }
          if (id2 == null) {
            id2 = null;
          }
          obj12.preferredCommandId = id2;
          obj12.location = self.location;
          obj12.changedOptionStates = obj10;
          ApplicationCommandActionCreatorsAll.updateChannelState(obj12);
        }
      }
    }
    let tmp140 = tmp99;
    if (name1 !== name3) {
      tmp140 = null != activeOption;
    }
    if (tmp140) {
      tmp140 = activeOption.type !== tmp113(1978).ApplicationCommandOptionType.ATTACHMENT;
    }
    if (tmp140) {
      const keyboardType1 = tmp113(4625).getKeyboardType();
      tmp140 = keyboardType1 !== tmp113(1610).KeyboardTypes.SYSTEM;
      const tmp113Result2 = tmp113(4625);
    }
    if (tmp140) {
      const current3 = self.ref.current;
      current3.closeCustomKeyboard();
      const current4 = self.ref.current;
      current4.focus();
    }
    obj9 = obj10(12);
  }
  self.contextCommands = editId.queryCommands;
  const preferredCommand = self.preferredCommand;
  if (null != editId.preferredCommand) {
    ({ preferredCommand: self.preferredCommand, location: self.location } = editId);
  }
  if (editId.commandsDisabled) {
    command = null;
    if (null != null) {
      ({ command, section } = null);
    }
    const preferredCommand2 = self.preferredCommand;
    let id3;
    if (preferredCommand2 != null) {
      id3 = preferredCommand2.id;
    }
    let id4;
    if (command != null) {
      id4 = command.id;
    }
    if (id3 !== id4) {
      if (tmp5) {
        self.preferredCommand = null;
        self.preferredCommandSection = null;
        self.location = undefined;
      }
    } else {
      const preferredCommand3 = self.preferredCommand;
      let preferredCommandType6;
      if (preferredCommand3 != null) {
        preferredCommandType6 = preferredCommand3.preferredCommandType;
      }
      let tmp17 = preferredCommandType6 === constants3.PARTIAL_COMMAND;
      if (tmp17) {
        let preferredCommandType7;
        if (command != null) {
          preferredCommandType7 = command.preferredCommandType;
        }
        tmp17 = preferredCommandType7 === tmp16.FULL_COMMAND;
      }
      if (tmp17) {
        self.preferredCommand = command;
      }
    }
    let id5;
    if (preferredCommand != null) {
      id5 = preferredCommand.id;
    }
    const preferredCommand4 = self.preferredCommand;
    let id6;
    if (preferredCommand4 != null) {
      id6 = preferredCommand4.id;
    }
    let tmp21 = id5 !== id6;
    if (!tmp21) {
      let preferredCommandType8;
      if (preferredCommand != null) {
        preferredCommandType8 = preferredCommand.preferredCommandType;
      }
      const preferredCommand5 = self.preferredCommand;
      let preferredCommandType9;
      if (preferredCommand5 != null) {
        preferredCommandType9 = preferredCommand5.preferredCommandType;
      }
      tmp21 = preferredCommandType8 !== preferredCommandType9;
    }
    let obj13 = self.preferredOptionValues[channel.id];
    if (obj13 == null) {
      obj13 = {};
    }
    const parser = self.parser;
    let preferredCommandType10;
    if (command != null) {
      preferredCommandType10 = command.preferredCommandType;
    }
    let tmp26 = null;
    if (preferredCommandType10 === constants3.FULL_COMMAND) {
      tmp26 = command;
    }
    const obj14 = { activeCommand: tmp26, preferredOptionValues: obj13 };
    self.chatInputNodes = parser.parse(editId.text, obj14);
    const mentionGames = self.mentionGames;
    const items2 = [];
    HermesBuiltin.arraySpread(mentionGames.values(), 0);
    const mentionGames2 = self.mentionGames;
    const mapped = items2.map((name) => name.name);
    const tmp31 = mentionGames2[Symbol.iterator]();
    while (tmp31 !== undefined) {
      let tmp36 = currentOption(tmp33, 2);
      let first = tmp36[0];
      let obj4 = obj10(12248);
      let hasItem = 0 !== obj4.findGameMentionTokens(editId.text, tmp36[1].name, mapped).locations.length;
      if (!hasItem) {
        let text2 = editId.text;
        hasItem = text2.includes(closure_12(first));
      }
      if (!hasItem) {
        let mentionGames3 = self.mentionGames;
        let deleteResult = mentionGames3.delete(first);
      }
      continue;
    }
    let optionsToNodes = self.optionsToNodes;
    optionsToNodes.clear();
    let optionValueNodes = self.optionValueNodes;
    optionValueNodes.clear();
    const chatInputNodes1 = self.chatInputNodes;
    const item1 = chatInputNodes1.forEach((type) => {
      if (type.type === ChatInputParser.ChatInputNodeType.COMMAND_OPTION) {
        const data = type.data;
        type = undefined;
        if (data != null) {
          type = data.type;
        }
        if (type === ChatInputParser.ChatInputParseResultDataType.COMMAND_OPTION) {
          const optionsToNodes = self.optionsToNodes;
          const result = optionsToNodes.set(type.data.option.name, type);
        }
      }
      let tmp5 = type.type === ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE;
      if (tmp5) {
        const data2 = type.data;
        let type1;
        if (data2 != null) {
          type1 = data2.type;
        }
        tmp5 = type1 === ChatInputParser.ChatInputParseResultDataType.COMMAND_OPTION;
      }
      if (tmp5) {
        const optionValueNodes = self.optionValueNodes;
        const result1 = optionValueNodes.set(type.data.option.name, type);
      }
    });
    if (tmp5) {
      const activeCommand2 = self.activeCommand;
      let preferredCommandType11;
      if (activeCommand2 != null) {
        preferredCommandType11 = activeCommand2.preferredCommandType;
      }
      if (preferredCommandType11 === constants3.FULL_COMMAND) {
        const items3 = [];
        const activeCommand5 = self.activeCommand;
        let options3;
        if (activeCommand5 != null) {
          options3 = activeCommand5.options;
        }
        if (options3 == null) {
          options3 = [];
        }
        const iter = options3[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp56 = nextResult;
          let name = nextResult.name;
          let tmp58 = obj13[name];
          let tmp59 = tmp58;
          let optionValueNodes2 = self.optionValueNodes;
          let tmp57 = name;
          let value4 = optionValueNodes2.get(name);
          let tmp60 = null == tmp58;
          if (!tmp60) {
            tmp60 = "" === tmp59.displayText;
          }
          if (!tmp60) {
            let tmp63 = null != value4;
            if (tmp63) {
              let str2 = editId.text;
              tmp63 = str2.substring(value4.location + tmp56.displayName.length + 1, value4.location + value4.length) === tmp59.displayText;
            }
            tmp60 = tmp63;
          }
          if (!tmp60) {
            delete tmp[tmp2];
            if (tmp56.type === obj10(1978).ApplicationCommandOptionType.ATTACHMENT) {
              let arr = items3.push(tmp57);
            }
          }
          continue;
        }
        if (items3.length > 0) {
          UploadAttachmentActionCreatorsDefault.removeFiles(channel.id, items3, self.SlashCommand);
        }
      }
    }
    self.preferredOptionValues[channel.id] = obj13;
    flag = tmp21;
    tmp9 = section;
    activeCommand = command;
  } else {
    if (!tmp5) {
      if (null != self.preferredCommand) {
        if (self.preferredCommand.preferredCommandType === constants3.FULL_COMMAND) {
          let currentCommand = { command: null, section: null };
          ({ preferredCommand: obj.command, preferredCommandSection: obj.section } = self);
        }
      }
    }
    currentCommand = self.getCurrentCommand(editId.text, editId.channel, self.preferredCommand, self.preferredCommandSection);
  }
  tmp6 = selectionStart !== editId.selectionStart || selectionEnd !== editId.selectionEnd;
};
prototype["updateValidationResults"] = function updateValidationResults() {
  const self = this;
  let obj = {};
  const activeCommand = this.activeCommand;
  let preferredCommandType;
  if (activeCommand != null) {
    preferredCommandType = activeCommand.preferredCommandType;
  }
  if (preferredCommandType === constants3.FULL_COMMAND) {
    const activeCommand2 = self.activeCommand;
    if (activeCommand2 != null) {
      const options = activeCommand2.options;
      if (options != null) {
        const item = options.forEach((name) => {
          name = name.name;
          obj = { lastValidationResult: self.optionValidationResults[name] };
          obj[name] = obj;
        });
      }
    }
  }
  ApplicationCommandActionCreatorsAll.updateOptionStates(self.props.channel.id, obj);
};

export default ApplicationCommandManager;
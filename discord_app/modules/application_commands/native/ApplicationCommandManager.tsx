// discord_app/modules/application_commands/native/ApplicationCommandManager.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import MediaKeyboardConstants from "../../media_keyboard/native/MediaKeyboardConstants.tsx";
import Server from "../../../flow/Server.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ApplicationCommandUtils from "../ApplicationCommandUtils.tsx";
import DraftStore2 from "../../../stores/DraftStore.tsx";
import ApplicationCommandTypes from "../ApplicationCommandTypes.tsx";
import ApplicationCommandActionCreators from "../ApplicationCommandActionCreators.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import ApplicationCommandOptionUtils from "../ApplicationCommandOptionUtils.tsx";
import ApplicationCommandQueryApiAll from "../ApplicationCommandQueryApi.tsx";
import autocompleter_AutocompleteUtils from "../../autocompleter/native/AutocompleteUtils.tsx";
import ChatInputCommandOptionParser from "../../chat_input/native/ChatInputCommandOptionParser.tsx";
import ChatInputParser from "../../chat_input/native/ChatInputParser.tsx";
import ApplicationCommandOptionValueParser from "../../chat_input/native/ApplicationCommandOptionValueParser.tsx";
import DraftCommandUtils from "../DraftCommandUtils.tsx";
import useCommandContext from "../../app_launcher/hooks/useCommandContext.tsx";
import application_commands_ApplicationCommandValidationUtils from "ApplicationCommandValidationUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import ApplicationCommandStore from "../ApplicationCommandStore.tsx";
import Constants from "../../../Constants.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ApplicationCommandActionCreatorsAll = ApplicationCommandActionCreators;
const ChatInputParserDefault = ChatInputParser;
const DraftStore = DraftStore2;
let dependencyMap, importAll, importDefault, set;

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const DraftType = DraftStore2.DraftType;
({ AnalyticEvents: metroImportAll, AutoCompleteResultTypes: c9, WHITESPACE_RE: c10 } = Constants);
({ COMMAND_SENTINEL: unpackModuleId, formatGameMentionRaw: closure_12 } = ChannelAutocompleteConstants);
const MediaKeyboardTarget = MediaKeyboardConstants.MediaKeyboardTarget;
const authStore2 = { FULL_COMMAND: 0, [0]: "FULL_COMMAND", PARTIAL_COMMAND: 1, [1]: "PARTIAL_COMMAND" };
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandManager.tsx");
class ApplicationCommandManager {
  constructor(arg0) {
    let obj = Object.create(new.target.prototype);
    obj.chatInputNodes = [];
    obj.optionsToNodes = new Map();
    new Map();
    obj.optionValueNodes = new Map();
    new Map();
    obj.mentionGames = new Map();
    new Map();
    obj.mentionTimestamps = new Map();
    new Map();
    let tmp5 = new ChatInputParserDefault();
    obj.parser = tmp5;
    obj.optionValues = {};
    obj.optionValidationResults = {};
    obj.canAutoInsertFirstOption = true;
    obj.preferredOptionValues = {};
    obj.setAutoCompleteResult = function setAutoCompleteResult(id, addTimestampMentionResult, arg2, type) {
      const activeCommand = obj.props.activeCommand;
      const activeOption = ApplicationCommandStore.getActiveOption(id);
      const tmp2 = arg2;
      if (tmp2) {
        if (null != activeCommand) {
          if (null != activeOption) {
            if (type.type === constants.GAME_MENTION) {
              return false;
            } else if (type.type === constants.TIMESTAMP_MENTION) {
              return false;
            } else {
              let tmp6;
              type = type.type;
              if (constants.USER === type) {
                tmp6 = { type: "userMention", userId: type.user.id };
                const obj3 = { type: "userMention", userId: type.user.id };
              } else if (constants.ROLE === type) {
                tmp6 = { type: "roleMention", roleId: type.id };
                const obj4 = { type: "roleMention", roleId: type.id };
              } else if (constants.CHANNEL === type) {
                tmp6 = { type: "channelMention", channelId: type.channel.id };
                const obj5 = { type: "channelMention", channelId: type.channel.id };
              }
              const obj6 = { displayText: addTimestampMentionResult, preferred: true, value: tmp6 };
              const result = obj.insertOrJumpCommandOption(activeOption, undefined, false, obj6);
            }
          }
          return true;
        }
      }
      if (type.type !== constants.SLASH) {
        return false;
      } else {
        const obj11 = {
          channelId: id,
          command: null,
          section: null,
          location: null,
          visualSection: null,
          query: null,
          addSpace: true,
        };
        ({
          command: obj2.command,
          section: obj2.section,
          location: obj2.location,
          visualSection: obj2.visualSection,
          query: obj2.query,
        } = type);
        obj.setCommand(obj11);
      }
    };
    obj.setCommand = function setCommand(arg0) {
      let _location;
      let channelId;
      let command;
      let commandText;
      let length;
      let obj2;
      let obj4;
      let query;
      let section;
      let visualSection;
      ({ command, query, commandText } = arg0);
      const current = obj.ref.current;
      ({ channelId, section, location: _location, visualSection } = arg0);
      const setText = current.setText;
      if (commandText == null) {
        const _HermesInternal = HermesInternal;
        let str = "";
        const combined = "" + unpackModuleId + command.displayName;
        if (tmp) {
          str = " ";
        }
        commandText = combined + str;
      }
      setText(commandText);
      obj = {
        channelId,
        command,
        section,
        location: _location,
        triggerSection: obj2.getCommandTriggerSection(visualSection),
        queryLength: length,
      };
      const setActiveCommand = ApplicationCommandActionCreators.setActiveCommand;
      ApplicationCommandActionCreators;
      length = undefined;
      obj2 = ApplicationCommandUtils;
      if (query != null) {
        length = query.length;
      }
      setActiveCommand(obj);
      const preferredCommand = tmp2.preferredCommand;
      let id1;
      const id = command.id;
      if (preferredCommand != null) {
        id1 = preferredCommand.id;
      }
      if (id !== id1) {
        const obj3 = { preferredCommand: obj4 };
        const updateApplicationCommandManagerState = tmp2.updateApplicationCommandManagerState;
        obj4 = { preferredCommandType: constants.FULL_COMMAND };
        const merged = Object.assign(command);
        const result = updateApplicationCommandManagerState(obj3);
      }
    };
    obj.setPartialCommand = function setPartialCommand(commandId, commandName, MENTION) {
      let obj3;
      const current = obj.ref.current;
      current.setText("" + unpackModuleId + commandName);
      const preferredCommand = obj.preferredCommand;
      let id;
      if (preferredCommand != null) {
        id = preferredCommand.id;
      }
      if (commandId !== id) {
        const obj2 = { preferredCommand: obj3, location: MENTION };
        obj3 = {
          id: commandId,
          untranslatedName: commandName,
          displayName: commandName,
          preferredCommandType: constants.PARTIAL_COMMAND,
        };
        const result = obj.updateApplicationCommandManagerState(obj2);
      }
    };
    obj.setPastedCommand = function setPastedCommand(arg0, channel) {
      let application;
      let bot;
      let combined;
      let command;
      let id;
      let name;
      let str2;
      let username;
      const parsed = JSON.parse(arg0);
      obj = ApplicationCommandUtils;
      const result = obj.extractInteractionDataProps(parsed);
      let interactionOptions = result.interactionOptions;
      const commandKey = result.commandKey;
      const obj2 = ApplicationCommandQueryApiAll;
      const obj3 = { type: "channel", channel };
      const cachedCommand = obj2.getCachedCommand(obj3, commandKey);
      ({ application, command } = cachedCommand);
      if (null != command) {
        let tmp8 = null;
        if (null != application) {
          ({ id: obj4.id, icon: obj4.icon, bot } = application);
          const obj5 = {
            type: ApplicationCommandTypes.ApplicationCommandSectionType.APPLICATION,
            id: null,
            icon: null,
            name: username,
            application,
          };
          username = undefined;
          if (bot != null) {
            username = bot.username;
          }
          if (username == null) {
            username = application.name;
          }
          tmp8 = obj5;
        }
        const getInitialValuesFromInteractionOptions =
          ApplicationCommandOptionUtils.getInitialValuesFromInteractionOptions;
        ApplicationCommandOptionUtils;
        if (interactionOptions == null) {
          interactionOptions = [];
        }
        const initialValuesFromInteractionOptions = getInitialValuesFromInteractionOptions(command, interactionOptions);
        const _Object = Object;
        const keys = Object.keys(initialValuesFromInteractionOptions);
        const mapped = keys.map((item) => {
          let closure_0 = item;
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
        const str = " ";
        const joined = found.join(" ");
        const setCommand = obj.setCommand;
        let _HermesInternal = HermesInternal;
        const obj6 = {
          channelId: channel.id,
          command,
          section: tmp8,
          location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.PASTE,
          commandText: combined + str2,
        };
        str2 = "";
        combined = "" + unpackModuleId + command.displayName;
        if (0 !== joined.length) {
          const _HermesInternal2 = HermesInternal;
          str2 = " " + joined;
        }
        setCommand(obj6);
      } else {
        ({ id, name } = parsed);
        obj.setPartialCommand(id, name, ApplicationCommandTypes.ApplicationCommandTriggerLocations.PASTE);
      }
    };
    obj.updateApplicationCommandManagerState = function updateApplicationCommandManagerState(newState) {
      let _location;
      let preferredCommand;
      let props = newState.newState;
      ({ preferredCommand, location: _location } = newState);
      const mergePropsAndUpdate = obj.mergePropsAndUpdate;
      const tmp = obj;
      if (props == null) {
        props = tmp.props;
      }
      obj = { preferredCommand, location: _location };
      const merged = Object.assign(props);
      mergePropsAndUpdate(obj);
    };
    obj.updateStyles = function updateStyles(styles) {
      obj.styles = styles;
      const chatInputNodes = obj.chatInputNodes;
      obj.chatInputNodes = chatInputNodes.map((style) => {
        let autocomplete;
        let commandErrorOptionResult;
        let styles;
        let styles3;
        let styles4;
        if (null == style.style) {
          return style;
        } else {
          const type = style.type;
          if (obj(dependencyMap[6]).ChatInputNodeType.COMMAND_OPTION !== type) {
            if (obj(dependencyMap[6]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE !== type) {
              if (obj(dependencyMap[6]).ChatInputNodeType.GAME_HIGHLIGHT === type) {
                const obj2 = { style: styles4.gameMention() };
                const merged = Object.assign(style);
                styles4 = closure_1_0.styles;
                return obj2;
              } else if (obj(dependencyMap[6]).ChatInputNodeType.GAME_MENTION_INPUT === type) {
                const obj3 = { style: styles3.commandOption() };
                const merged1 = Object.assign(style);
                styles3 = closure_1_0.styles;
                return obj3;
              } else if (obj(dependencyMap[6]).ChatInputNodeType.ROLE_HIGHLIGHT === type) {
                const data = style.data;
                let color;
                if (data != null) {
                  color = data.color;
                }
                const obj4 = { style: autocomplete(color) };
                const merged2 = Object.assign(style);
                const styles2 = closure_1_0.styles;
                autocomplete = styles2.autocomplete;
                return obj4;
              } else {
                if (obj(dependencyMap[6]).ChatInputNodeType.EMOJI_HIGHLIGHT !== type) {
                  if (obj(dependencyMap[6]).ChatInputNodeType.USER_HIGHLIGHT !== type) {
                    if (obj(dependencyMap[6]).ChatInputNodeType.CHANNEL_HIGHLIGHT !== type) {
                      if (obj(dependencyMap[6]).ChatInputNodeType.SILENT_HIGHLIGHT !== type) {
                        return style;
                      }
                    }
                  }
                }
                obj = { style: styles.autocomplete() };
                const merged3 = Object.assign(style);
                styles = closure_1_0.styles;
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
            let name1;
            const name = option.name;
            if (activeOption != null) {
              name1 = activeOption.name;
            }
            tmp19 = name !== name1;
          }
          if (tmp19) {
            let success;
            if (closure_1_0.optionValidationResults[option.name] != null) {
              success = tmp23.success;
            }
            tmp19 = false === success;
          }
          const obj5 = { style: commandErrorOptionResult };
          const merged4 = Object.assign(style);
          const styles5 = closure_1_0.styles;
          if (tmp19) {
            commandErrorOptionResult = styles5.commandErrorOption();
          } else {
            commandErrorOptionResult = styles5.commandOption();
          }
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
          obj = closure_1_0(closure_1_3[7]);
          return obj.getMatchedOptions(c22, activeCommand);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled: true,
      };
      parser.addRule(obj);
      const parser2 = obj.parser;
      const obj2 = {
        ruleId: "commandOptionValueParserRuleId",
        type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE,
        matchFunction(length2, activeCommand) {
          obj = closure_1_0(closure_1_3[7]);
          return obj.getMatchedOptionsWithValue(length2, activeCommand);
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
          return type === obj(closure_1_3[13]).ApplicationCommandOptionType.ATTACHMENT;
        },
      };
      parser2.addRule(obj2);
      const parser3 = obj.parser;
      const obj3 = {
        ruleId: "emojiHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.EMOJI_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(dependencyMap[7]);
          return obj.getEmojiHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        },
      };
      parser3.addRule(obj3);
      const parser4 = obj.parser;
      const obj4 = {
        ruleId: "roleHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.ROLE_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(dependencyMap[7]);
          return obj.getRoleHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style(data) {
          data = data.data;
          let color;
          if (data != null) {
            color = data.color;
          }
          const styles = obj.styles;
          const autocomplete = styles.autocomplete;
          return autocomplete(color);
        },
        editDisabled() {
          return false;
        },
      };
      parser4.addRule(obj4);
      const parser5 = obj.parser;
      const obj5 = {
        ruleId: "userHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.USER_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(dependencyMap[7]);
          return obj.getUsernameHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        },
      };
      parser5.addRule(obj5);
      const parser6 = obj.parser;
      const obj6 = {
        ruleId: "channelHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.CHANNEL_HIGHLIGHT,
        matchFunction(arg0) {
          obj = obj(dependencyMap[7]);
          return obj.getChannelHighlightNodes(closure_1_0.props.channel, arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        },
      };
      parser6.addRule(obj6);
      const parser7 = obj.parser;
      const obj7 = {
        ruleId: "silentHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.SILENT_HIGHLIGHT,
        matchFunction(arg0) {
          obj = closure_1_0(closure_1_3[7]);
          return obj.getSilentHighlightNodes(arg0);
        },
        style() {
          const styles = obj.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        },
      };
      parser7.addRule(obj7);
      const parser8 = obj.parser;
      const obj8 = {
        ruleId: "gameHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.GAME_HIGHLIGHT,
        matchFunction(text) {
          obj = obj(dependencyMap[7]);
          return obj.getGameHighlightNodes(closure_1_0.mentionGames, text);
        },
        style() {
          const styles = obj.styles;
          return styles.gameMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        },
      };
      parser8.addRule(obj8);
      const parser9 = obj.parser;
      const obj9 = {
        ruleId: "gameMentionInputRuleId",
        type: ChatInputParser.ChatInputNodeType.GAME_MENTION_INPUT,
        matchFunction(arr) {
          obj = closure_1_0(closure_1_3[7]);
          return obj.getGameMentionInputNodes(arr);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        },
      };
      parser9.addRule(obj9);
      const parser10 = obj.parser;
      const obj10 = {
        ruleId: "timestampHighlightRuleId",
        type: ChatInputParser.ChatInputNodeType.TIMESTAMP_HIGHLIGHT,
        matchFunction(text) {
          obj = obj(dependencyMap[7]);
          return obj.getTimestampHighlightNodes(closure_1_0.mentionTimestamps, text);
        },
        style() {
          const styles = obj.styles;
          return styles.timestampMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        },
      };
      parser10.addRule(obj10);
      const parser11 = obj.parser;
      const obj11 = {
        ruleId: "timestampMentionInputRuleId",
        type: ChatInputParser.ChatInputNodeType.TIMESTAMP_MENTION_INPUT,
        matchFunction(arr) {
          obj = closure_1_0(closure_1_3[7]);
          return obj.getTimestampMentionInputNodes(arr);
        },
        style() {
          const styles = obj.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        },
      };
      parser11.addRule(obj11);
    };
    obj.getCurrentCommand = function getCurrentCommand(text, channel, preferredCommand, preferredCommandSection) {
      let closure_129_3;
      let obj7;
      let obj9;
      let closure_0 = channel;
      let closure_1 = preferredCommand;
      let tmp = obj;
      let closure_2 = obj;
      if (null != text) {
        if (!obj.props.commandsDisabled) {
          if (text.startsWith(unpackModuleId)) {
            obj = ChatInputCommandOptionParser;
            const textBeforeFirstOption = obj.getTextBeforeFirstOption(text);
            ({ match: closure_129_3, text } = textBeforeFirstOption);
            let flag = false;
            if (null != preferredCommand) {
              const _HermesInternal = HermesInternal;
              if (text.startsWith("" + unpackModuleId + preferredCommand.displayName)) {
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
              let obj3 = { channel, type: "channel" };
              const tmp3Result = useCommandContext;
              const commandContext = tmp3Result.getCommandContext(obj3);
              let preferredCommandType;
              if (preferredCommand != null) {
                preferredCommandType = preferredCommand.preferredCommandType;
              }
              if (preferredCommandType === constants.PARTIAL_COMMAND) {
                let contextCommands = tmp.contextCommands;
                let found = contextCommands.find((id) => id.id === id.id);
                if (null != found) {
                  let obj5 = ApplicationCommandQueryApiAll;
                  let obj4 = { channel, type: "channel" };
                  let cachedApplicationSection = obj5.getCachedApplicationSection(
                    obj4,
                    Server.ApplicationCommandType.CHAT,
                    found.applicationId,
                  );
                  let tmp20 = null;
                  if (null != cachedApplicationSection) {
                    let obj6 = { command: obj7, section: cachedApplicationSection };
                    obj7 = { preferredCommandType: constants.FULL_COMMAND };
                    let merged = Object.assign(found);
                    tmp20 = obj6;
                  }
                  return tmp20;
                }
              } else {
                const tmp3Result2 = DraftCommandUtils;
                const draftCommand = tmp3Result2.resolveDraftCommand(
                  channel,
                  text,
                  DraftStore.getDraftCommand(channel.id, DraftType.ChannelMessage),
                );
                if (null != draftCommand) {
                  const obj8 = { command: obj9, section: draftCommand.section };
                  obj9 = { preferredCommandType: constants.FULL_COMMAND };
                  const merged1 = Object.assign(draftCommand.command);
                  return obj8;
                } else {
                  const str2 = text.slice(1);
                  const parts = str2.split(" ", 3);
                  let c6 = 0;
                  if (0 < parts.length) {
                    function _loop() {
                      let obj5;
                      let obj6;
                      const substr = parts.slice(0, parts.length - c6);
                      const joined = substr.join(" ");
                      contextCommands = contextCommands.contextCommands;
                      const getMatchingGroupCommands = closure_2_0(closure_2_3[9]).getMatchingGroupCommands;
                      closure_2_0(closure_2_3[9]);
                      const obj2 = closure_2_1(closure_2_3[21]);
                      const regExp = new RegExp("^" + obj2.escape(joined), "i");
                      const matchingGroupCommands = getMatchingGroupCommands(contextCommands, regExp, closure_4, 2);
                      const found = matchingGroupCommands.filter((inputType) => {
                        let tmp =
                          inputType.inputType !== channel(closure_2_3[11]).ApplicationCommandInputType.PLACEHOLDER;
                        if (tmp) {
                          tmp = inputType.displayName === joined || inputType.untranslatedName === tmp2;
                        }
                        return tmp;
                      });
                      if (found.length > 0) {
                        let obj4;
                        const first = found[0];
                        obj = { channel, type: "channel" };
                        const obj3 = closure_2_2(closure_2_3[10]);
                        const cachedApplicationSection = obj3.getCachedApplicationSection(
                          obj,
                          closure_2_0(closure_2_3[13]).ApplicationCommandType.CHAT,
                          first.applicationId,
                        );
                        if (null == cachedApplicationSection) {
                          obj4 = { v: null };
                        } else {
                          obj4 = { v: obj5 };
                          obj5 = { command: obj6, section: cachedApplicationSection };
                          obj6 = { preferredCommandType: constants.FULL_COMMAND };
                          const merged = Object.assign(first);
                        }
                        return obj4;
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
                }
              }
              let tmp17 = null;
              if (flag) {
                tmp17 = null;
                if (null != preferredCommand) {
                  tmp17 = { command: preferredCommand, section: null };
                  const obj10 = { command: preferredCommand, section: null };
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
      let closure_0 = selectionStart;
      const tmp = focused2;
      if (tmp) {
        let option;
        obj = _modDef12;
        const _Array = Array;
        const optionValueNodes = obj.optionValueNodes;
        const findLastResult = obj.findLast(
          Array.from(optionValueNodes.values()),
          (location) => location.location <= closure_0,
        );
        if (findLastResult != null) {
          const data = findLastResult.data;
          if (data != null) {
            option = data.option;
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
      let tmp6;
      let tmp7;
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
              let items1 = [
                optionValueParser.parse(
                  text.substring(tmp7.location + option.displayName.length + 1, tmp7.location + tmp7.length),
                  option,
                ),
              ];
              obj[tmp6] = items1;
            }
          }
          continue;
        }
        return obj;
      }
    };
    obj.insertFirstOptionIfValid = function insertFirstOptionIfValid(text, activeCommand, displayName, arg3, arg4) {
      if (text.startsWith("" + unpackModuleId + displayName)) {
        if (text.length > displayName.length + 1) {
          if (regex.test(text[displayName.length + 1])) {
            const _Set = Set;
            const optionValueNodes = obj.optionValueNodes;
            const self = this;
            const self2 = this;
            let c1 = true;
            const options = activeCommand.options;
            let found;
            new Set(optionValueNodes.keys());
            if (options != null) {
              found = options.filter((required) => {
                const tmp = (required.required || c1) && !set.has(required.name);
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
              const result = obj.insertOrJumpCommandOption(
                first,
                activeCommand.displayName.length + 2,
                true,
                undefined,
                activeCommand,
              );
            }
            return true;
          }
        }
      }
      return false;
    };
    obj.insertOrJumpCommandOption = function insertOrJumpCommandOption(found, length, arg2) {
      let activeCommand;
      let items;
      let items2;
      let num5;
      let num6;
      let num9;
      let selectionStart;
      let str8;
      let styles;
      let styles2;
      let styles3;
      let styles4;
      let text;
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      if (activeCommand == null) {
        let tmp = obj;
        activeCommand = obj.props.activeCommand;
      }
      if (null != activeCommand) {
        let value;
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
            let tmp25 = null != text && tmp4 <= text.length;
            if (tmp25) {
              const _Math3 = Math;
              tmp25 = !regex.test(text[Math.min(Math, tmp4 - 1, text.length - 1)]);
            }
            const current3 = obj7.ref.current;
            obj = {
              location: tmp4,
              length: 0,
              text: "" + str8 + found.displayName + ":",
              nodes: items,
              keepCursorPosition: flag,
              editId: obj.editId,
            };
            str8 = "";
            const replaceRange = current3.replaceRange;
            if (tmp25) {
              str8 = " ";
            }
            const _HermesInternal6 = HermesInternal;
            const obj2 = {
              type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION,
              style: styles3.commandOption(),
              location: num9,
              length: found.displayName.length + 1,
            };
            styles3 = obj7.styles;
            num9 = 0;
            if (tmp25) {
              num9 = 1;
            }
            items = [obj2];
            replaceRange(obj);
          } else {
            const current2 = obj7.ref.current;
            current2.setSelectedRange(
              value.location + found.displayName.length + 1,
              value.length - found.displayName.length - 1,
            );
          }
        } else {
          let _location;
          let combined;
          if (null != value) {
            _location = value.location;
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
          const self = this;
          const self2 = this;
          set = new Set(optionValueNodes.keys());
          set.add(found.name);
          let c1;
          const options = activeCommand.options;
          found = undefined;
          if (options != null) {
            found = options.filter((required) => {
              const tmp = (required.required || c1) && !set.has(required.name);
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
          let tmp13 = null != displayText;
          if (tmp13) {
            let tmp14 = _location + num2 !== text.length;
            if (tmp14) {
              const _Math2 = Math;
              tmp14 = !regex.test(text[Math.min(Math, _location + num2, text.length - 1)]);
            }
            if (!tmp14) {
              tmp14 = null != first;
            }
            tmp13 = tmp14;
          }
          let displayText1;
          if (displayText != null) {
            displayText1 = displayText.displayText;
          }
          if ("" !== displayText1) {
            const _HermesInternal2 = HermesInternal;
            combined = "" + found.displayName + ":" + displayText.displayText;
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + found.displayName + ":";
          }
          let str4 = "";
          if (tmp5) {
            str4 = " ";
          }
          let str5 = "";
          if (tmp13) {
            str5 = " ";
          }
          const _HermesInternal3 = HermesInternal;
          const combined1 = "" + str4 + combined + str5;
          if (null != first) {
            const _HermesInternal4 = HermesInternal;
            const combined2 = "" + first.displayName + ":";
            const _HermesInternal5 = HermesInternal;
            const obj3 = {
              type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE,
              style: styles.commandOption(),
              location: num6,
              length: combined.length,
            };
            const combined3 = "" + combined1 + combined2;
            styles = obj7.styles;
            num6 = 0;
            if (tmp5) {
              num6 = 1;
            }
            const items1 = [obj3];
            const obj4 = {
              type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION,
              style: styles2.commandOption(),
              location: combined1.length,
              length: combined2.length,
            };
            styles2 = obj7.styles;
            items1[1] = obj4;
            const current = obj7.ref.current;
            const obj5 = { location: _location, length: num2, text: combined3, nodes: items1, editId: obj.editId };
            current.replaceRange(obj5);
          } else {
            const current4 = obj7.ref.current;
            const obj6 = {
              location: _location,
              length: num2,
              text: combined1,
              nodes: items2,
              keepCursorPosition: flag,
              editId: obj.editId,
            };
            const replaceRange2 = current4.replaceRange;
            const obj8 = {
              type: ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE,
              style: styles4.commandOption(),
              location: num5,
              length: combined.length,
            };
            styles4 = obj7.styles;
            num5 = 0;
            if (tmp5) {
              num5 = 1;
            }
            items2 = [obj8];
            replaceRange2(obj6);
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
      let ApplicationCommandOptionType;
      let commands;
      let id;
      let num2;
      let required;
      let sections;
      const activeCommand = obj.props.activeCommand;
      if (null != activeCommand) {
        let prop = obj.optionValidationResults;
        const getFirstInvalidOption = application_commands_ApplicationCommandValidationUtils.getFirstInvalidOption;
        application_commands_ApplicationCommandValidationUtils;
        if (prop == null) {
          prop = {};
        }
        const firstInvalidOption = getFirstInvalidOption(activeCommand, prop);
        const obj3 = {};
        const _Object = Object;
        const entries = Object.entries(ApplicationCommandStore.getOptionStates(channel.id));
        const item = entries.forEach((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          if (null != tmp2.optionValue) {
            obj3[tmp] = tmp2.optionValue;
          }
        });
        if (null == firstInvalidOption) {
          const obj7 = ApplicationCommandOptionValueParser;
          fn(activeCommand, obj7.parseOptionValuesForSend(channel, activeCommand, obj3));
        } else {
          const result = obj.insertOrJumpCommandOption(firstInvalidOption);
          const result1 = obj.updateValidationResults();
          const obj11 = HapticUtils;
          const result2 = obj11.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.NOTIFICATION_ERROR);
          let applicationId;
          const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
          const APPLICATION_COMMAND_VALIDATION_FAILED = metroImportAll.APPLICATION_COMMAND_VALIDATION_FAILED;
          AppAnalyticsUtils;
          if (activeCommand != null) {
            applicationId = activeCommand.applicationId;
          }
          const obj4 = {
            application_id: applicationId,
            command_id: id,
            argument_type: ApplicationCommandOptionType[num2],
            is_required: required,
          };
          id = undefined;
          if (activeCommand != null) {
            const rootCommand = activeCommand.rootCommand;
            if (rootCommand != null) {
              id = rootCommand.id;
            }
          }
          num2 = firstInvalidOption.type;
          ApplicationCommandOptionType = Server.ApplicationCommandOptionType;
          if (num2 == null) {
            num2 = 3;
          }
          required = undefined;
          if (firstInvalidOption != null) {
            required = firstInvalidOption.required;
          }
          trackWithMetadata(APPLICATION_COMMAND_VALIDATION_FAILED, obj4);
        }
        return true;
      } else {
        let query = null;
        const obj8 = autocompleter_AutocompleteUtils;
        if (obj8.getPrefix(text) === unpackModuleId) {
          const obj2 = autocompleter_AutocompleteUtils;
          query = obj2.getQuery(text);
        }
        if (null != query) {
          const obj5 = { channel, type: "channel" };
          const obj9 = ApplicationCommandQueryApiAll;
          ({ commands, sections } = obj9.getCachedResults(obj5, Server.ApplicationCommandType.CHAT, query));
          obj9.getCachedResults(obj5, Server.ApplicationCommandType.CHAT, query);
          if (null != commands) {
            if (commands.length > 0) {
              if (commands[0].inputType !== ApplicationCommandTypes.ApplicationCommandInputType.PLACEHOLDER) {
                const first = commands[0];
                let found = sections.find((application) => {
                  application = application.application;
                  let id;
                  if (application != null) {
                    id = application.id;
                  }
                  return id === first.applicationId;
                });
                const setCommand = obj.setCommand;
                const obj6 = {
                  channelId: channel.id,
                  command: first,
                  section: found,
                  location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY,
                  query,
                };
                if (found == null) {
                  found = null;
                }
                setCommand(obj6);
                return true;
              }
            }
          }
        }
        return false;
      }
    };
    ({ props: obj.props, ref: obj.ref, optionValueParser: obj.optionValueParser, styles: obj.styles } = arg0);
    let result = obj.addCommandOptionParserRules();
    return obj;
  }
  addGameMention(game) {
    const mentionGames = this.mentionGames;
    const result = mentionGames.set(game.id, game);
  }
  getMentionGames() {
    return this.mentionGames;
  }
  buildGameMentionNode(game) {
    let styles;
    const obj = {
      type: ChatInputParser.ChatInputNodeType.GAME_HIGHLIGHT,
      style: styles.gameMention(),
      deleteNodeOnBackspace: true,
      editDisabled: true,
    };
    styles = this.styles;
    const obj2 = ChatInputCommandOptionParser;
    const merged = Object.assign(obj2.buildGameMentionResult(game));
    return obj;
  }
  addTimestampMention(formatted, mention) {
    const uniqueTimestampPillText = ChatInputCommandOptionParser.uniqueTimestampPillText;
    const mentionTimestamps = this.mentionTimestamps;
    ChatInputCommandOptionParser;
    const obj = ChatInputCommandOptionParser;
    const result = uniqueTimestampPillText(mentionTimestamps, obj.formatTimestampPillText(formatted), mention);
    const mentionTimestamps2 = this.mentionTimestamps;
    const result1 = mentionTimestamps2.set(result, mention);
    return result;
  }
  getMentionTimestamps() {
    return this.mentionTimestamps;
  }
  clearTimestampMentions() {
    const mentionTimestamps = this.mentionTimestamps;
    mentionTimestamps.clear();
  }
  buildTimestampMentionNode(addTimestampMentionResult) {
    let styles;
    const obj = {
      type: ChatInputParser.ChatInputNodeType.TIMESTAMP_HIGHLIGHT,
      style: styles.timestampMention(),
      deleteNodeOnBackspace: true,
      editDisabled: true,
      location: 0,
      length: addTimestampMentionResult.length,
    };
    styles = this.styles;
    return obj;
  }
  setPreferredOptionValue(id, name, displayText) {
    const self = this;
    if (null == this.preferredOptionValues[id]) {
      self.preferredOptionValues[id] = {};
    }
    self.preferredOptionValues[id][name] = displayText;
  }
  mergePropsAndUpdate(editId) {
    let activeCommand;
    let activeCommand1;
    let activeCommandSection;
    let channel;
    let closure_2;
    let closure_3;
    let command;
    let currentOption;
    let focused;
    let id2;
    let lastCommandAutocompleteResponseNonce;
    let obj10;
    let obj11;
    let queryCommands;
    let section;
    let selectionEnd;
    let selectionStart;
    let text;
    let tmp5;
    const self = this;
    importDefault = editId;
    const props = this.props;
    ({ text, editId, channel } = props);
    let tmp = editId !== editId.editId;
    ({ selectionStart, selectionEnd, focused, queryCommands, lastCommandAutocompleteResponseNonce } = props);
    if (tmp) {
      tmp = null != editId.editId;
    }
    if (tmp) {
      self.editId = editId.editId;
    }
    importAll = tmp3;
    let tmp4 = selectionStart !== editId.selectionStart || selectionEnd !== editId.selectionEnd;
    ({ activeCommand, activeCommandSection: section } = self);
    if (text === editId.text) {
      let flag;
      let tmp7;
      let items;
      let items1;
      if (queryCommands === editId.queryCommands) {
        flag = false;
        tmp7 = section;
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
      let tmp75 = id !== id1;
      dependencyMap = tmp75;
      let activeOption = self.activeOption;
      currentOption = activeOption;
      const tmp76 = text !== editId.text || tmp4 || focused !== tmp5 || tmp75;
      if (tmp76) {
        let focused2 = editId.focused;
        const getCurrentOption = self.getCurrentOption;
        if (!focused2) {
          const obj5 = obj11(4747);
          const keyboardType = obj5.getKeyboardType();
          focused2 = keyboardType !== obj11(1616).KeyboardTypes.SYSTEM;
        }
        currentOption = getCurrentOption(focused2, editId.selectionStart);
        activeOption = currentOption;
      }
      const tmp83 = tmp75 && null != self.activeCommand;
      if (tmp83) {
        const obj6 = UploadAttachmentActionCreatorsDefault;
        obj6.clearAll(channel.id, self.SlashCommand);
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
      let closure_5 = tmp91;
      let tmp92 = tmp3;
      const lastCommandAutocompleteResponseNonce2 = editId.lastCommandAutocompleteResponseNonce;
      if (text === editId.text) {
        tmp92 = tmp91;
      }
      if (!tmp92) {
        tmp92 = lastCommandAutocompleteResponseNonce !== lastCommandAutocompleteResponseNonce2;
      }
      if (tmp92) {
        let preferredCommandType;
        if (activeCommand != null) {
          preferredCommandType = activeCommand.preferredCommandType;
        }
        tmp92 = preferredCommandType === constants3.FULL_COMMAND;
      }
      if (tmp92) {
        self.optionValues = self.getAllCommandOptionValues(activeCommand, editId.text);
        const obj7 = obj11(11779);
        self.optionValidationResults = obj7.getValidationResults(
          activeCommand,
          self.optionValues,
          editId.channel.guild_id,
          editId.channel.id,
          false,
        );
        const chatInputNodes = self.chatInputNodes;
        self.chatInputNodes = chatInputNodes.map((type) => {
          let styles2;
          if (type.type === ChatInputParser.ChatInputNodeType.COMMAND_OPTION) {
            if (null != type.data) {
              const option = type.data.option;
              if (type.type === ChatInputParser.ChatInputNodeType.COMMAND_OPTION_WITH_VALUE) {
                let name1;
                const name = option.name;
                if (currentOption != null) {
                  name1 = currentOption.name;
                }
                if (name === name1) {
                  if (closure_2) {
                    const obj = { style: undefined };
                    const merged = Object.assign(type);
                    return obj;
                  }
                }
              }
              const obj2 = { style: styles2.commandOption() };
              const merged1 = Object.assign(type);
              let name3;
              const name2 = option.name;
              if (currentOption != null) {
                name3 = currentOption.name;
              }
              if (name2 !== name3) {
                if (undefined !== self.optionValidationResults[option.name]) {
                  if (!self.optionValidationResults[option.name].success) {
                    const styles = self.styles;
                    obj2.style = styles.commandErrorOption();
                  }
                  let success;
                  if (self.optionValidationResults[option.name] != null) {
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
              styles2 = self.styles;
            }
          }
          return type;
        });
      }
      const tmp101 = text !== editId.text || tmp75 || name1 !== name3 || editId !== editId.editId;
      if (tmp101) {
        const current = self.ref.current;
        let result = current.updateNativeTextBlocksThrottled(self.chatInputNodes, editId.editId);
      }
      const tmp103 = tmp75 && null != activeCommand;
      if (tmp103) {
        self.canAutoInsertFirstOption = true;
      }
      const obj8 = obj11(12);
      if (!obj8.isEmpty(self.optionsToNodes)) {
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
        items = options;
      } else {
        items = [];
      }
      const tmp110 = items.filter((required) => required.required).length > 0;
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
        items1 = options1;
      } else {
        items1 = [];
      }
      let canAutoInsertFirstOption = self.canAutoInsertFirstOption;
      let length = items1.filter((required) => !required.required).length;
      if (canAutoInsertFirstOption) {
        let preferredCommandType3;
        if (activeCommand != null) {
          preferredCommandType3 = activeCommand.preferredCommandType;
        }
        canAutoInsertFirstOption = preferredCommandType3 === constants3.FULL_COMMAND;
      }
      if (canAutoInsertFirstOption) {
        const tmp105Result = obj11(12);
        canAutoInsertFirstOption = tmp105Result.isEmpty(self.optionsToNodes);
      }
      if (canAutoInsertFirstOption) {
        canAutoInsertFirstOption = editId.text.length >= text.length;
      }
      if (canAutoInsertFirstOption) {
        if (
          !self.insertFirstOptionIfValid(editId.text, activeCommand, activeCommand.displayName, tmp110, 1 === length)
        ) {
          let result1 = self.insertFirstOptionIfValid(
            editId.text,
            activeCommand,
            activeCommand.untranslatedName,
            tmp110,
            tmp115,
          );
        }
      }
      if (name1 !== name3) {
        let type;
        if (activeOption != null) {
          type = activeOption.type;
        }
        if (type === obj11(1985).ApplicationCommandOptionType.ATTACHMENT) {
          if (!self.optionValidationResults[activeOption.name].success) {
            const current2 = self.ref.current;
            const openCustomKeyboard = current2.openCustomKeyboard;
            const obj9 = { type: obj11(1616).KeyboardTypes.MEDIA, context: obj10 };
            obj10 = { target: MediaKeyboardTarget.COMMAND, option: activeOption };
            openCustomKeyboard(obj9);
          }
          self.props = editId;
          obj11 = {};
          let preferredCommandType4;
          if (activeCommand != null) {
            preferredCommandType4 = activeCommand.preferredCommandType;
          }
          if (preferredCommandType4 === constants3.FULL_COMMAND) {
            if (name1 !== name3) {
              if (activeCommand != null) {
                const options2 = activeCommand.options;
                if (options2 != null) {
                  const item = options2.forEach((name) => {
                    let _location;
                    let length;
                    let tmp4;
                    name = name.name;
                    let name1;
                    if (currentOption != null) {
                      name1 = currentOption.name;
                    }
                    const obj = {
                      isActive: name === name1,
                      optionValue: self.optionValues[name],
                      hasValue: tmp4,
                      location: _location,
                      length,
                    };
                    const optionsToNodes = self.optionsToNodes;
                    tmp4 = null != arr && arr.length > 0;
                    const value = optionsToNodes.get(name);
                    _location = undefined;
                    if (value != null) {
                      _location = value.location;
                    }
                    const optionsToNodes2 = self.optionsToNodes;
                    const value2 = optionsToNodes2.get(name);
                    length = undefined;
                    if (value2 != null) {
                      length = value2.length;
                    }
                    obj11[name] = obj;
                  });
                }
              }
              if (name1 !== name3) {
                if (null != activeOption) {
                  obj11[activeOption.name].hasValue = true;
                }
                if (null != self.activeOption) {
                  let hasValue;
                  if (obj11[self.activeOption.name] != null) {
                    hasValue = tmp142.hasValue;
                  }
                  if (hasValue) {
                    obj11[self.activeOption.name].lastValidationResult =
                      self.optionValidationResults[self.activeOption.name];
                  }
                }
              }
            }
          }
          const currentOption1 = self.getCurrentOption(true, editId.selectionStart);
          if (text !== editId.text) {
            if (null != currentOption1) {
              let name2 = currentOption1.name;
              let obj12 = obj11[name2];
              if (obj12 == null) {
                obj12 = {};
              }
              let optionsToNodes2 = self.optionsToNodes;
              let value = optionsToNodes2.get(name2);
              let _location;
              if (value != null) {
                _location = value.location;
              }
              obj12.location = _location;
              const optionsToNodes3 = self.optionsToNodes;
              const value3 = optionsToNodes3.get(name2);
              let length1;
              if (value3 != null) {
                length1 = value3.length;
              }
              obj12.length = length1;
              obj12.optionValue = self.optionValues[name2];
              obj12.hasValue = true;
              let success;
              if (self.optionValidationResults[name2] != null) {
                success = tmp148.success;
              }
              if (success) {
                obj12.lastValidationResult = self.optionValidationResults[name2];
              }
              obj11[name2] = obj12;
            }
          }
          self.activeCommand = activeCommand;
          self.activeCommandSection = tmp7;
          self.activeOption = activeOption;
          if (!tmp75) {
            const _Object = Object;
            tmp75 = Object.keys(obj11).length > 0;
          }
          if (!tmp75) {
            tmp75 = flag;
          }
          if (tmp75) {
            const activeCommand4 = self.activeCommand;
            let preferredCommandType5;
            const obj13 = {
              channelId: editId.channel.id,
              command: activeCommand1,
              section: activeCommandSection,
              preferredCommandId: id2,
              location: self.location,
              changedOptionStates: obj11,
            };
            const updateChannelState = ApplicationCommandActionCreatorsAll.updateChannelState;
            ApplicationCommandActionCreatorsAll;
            if (activeCommand4 != null) {
              preferredCommandType5 = activeCommand4.preferredCommandType;
            }
            activeCommand1 = null;
            if (preferredCommandType5 === constants3.FULL_COMMAND) {
              activeCommand1 = self.activeCommand;
            }
            activeCommandSection = self.activeCommandSection;
            if (activeCommandSection == null) {
              activeCommandSection = null;
            }
            const preferredCommand6 = self.preferredCommand;
            id2 = undefined;
            if (preferredCommand6 != null) {
              id2 = preferredCommand6.id;
            }
            if (id2 == null) {
              id2 = null;
            }
            updateChannelState(obj13);
          }
        }
      }
      let tmp132 =
        tmp91 && null != activeOption && activeOption.type !== tmp105(1985).ApplicationCommandOptionType.ATTACHMENT;
      if (tmp132) {
        const tmp105Result2 = obj11(4747);
        const keyboardType1 = tmp105Result2.getKeyboardType();
        tmp132 = keyboardType1 !== tmp105(1616).KeyboardTypes.SYSTEM;
      }
      if (tmp132) {
        const current3 = self.ref.current;
        current3.closeCustomKeyboard();
        const current4 = self.ref.current;
        current4.focus();
      }
    }
    self.contextCommands = editId.queryCommands;
    const preferredCommand = self.preferredCommand;
    if (null != editId.preferredCommand) {
      ({ preferredCommand: self.preferredCommand, location: self.location } = editId);
    }
    let tmp8 = null;
    if (!editId.commandsDisabled) {
      if (text === editId.text) {
        if (null != self.preferredCommand) {
          let currentCommand;
          if (self.preferredCommand.preferredCommandType === constants3.FULL_COMMAND) {
            currentCommand = { command: null, section: null };
            ({ preferredCommand: obj.command, preferredCommandSection: obj.section } = self);
          }
          tmp8 = currentCommand;
        }
      }
      currentCommand = self.getCurrentCommand(
        editId.text,
        editId.channel,
        self.preferredCommand,
        self.preferredCommandSection,
      );
    }
    command = null;
    if (null != tmp8) {
      ({ command, section } = tmp8);
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
      if (text !== editId.text) {
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
      let tmp15 = preferredCommandType6 === constants3.PARTIAL_COMMAND;
      if (tmp15) {
        let preferredCommandType7;
        if (command != null) {
          preferredCommandType7 = command.preferredCommandType;
        }
        tmp15 = preferredCommandType7 === tmp14.FULL_COMMAND;
      }
      if (tmp15) {
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
    let tmp19 = id5 !== id6;
    if (!tmp19) {
      let preferredCommandType8;
      if (preferredCommand != null) {
        preferredCommandType8 = preferredCommand.preferredCommandType;
      }
      const preferredCommand5 = self.preferredCommand;
      let preferredCommandType9;
      if (preferredCommand5 != null) {
        preferredCommandType9 = preferredCommand5.preferredCommandType;
      }
      tmp19 = preferredCommandType8 !== preferredCommandType9;
    }
    let obj14 = self.preferredOptionValues[channel.id];
    if (obj14 == null) {
      obj14 = {};
    }
    const parser = self.parser;
    let preferredCommandType10;
    const parse = parser.parse;
    const text2 = editId.text;
    if (command != null) {
      preferredCommandType10 = command.preferredCommandType;
    }
    let tmp23 = null;
    if (preferredCommandType10 === constants3.FULL_COMMAND) {
      tmp23 = command;
    }
    self.chatInputNodes = parse(text2, { activeCommand: tmp23, preferredOptionValues: obj14 });
    const mentionGames = self.mentionGames;
    const items2 = [...mentionGames.values()];
    const mentionGames2 = self.mentionGames;
    const mapped = items2.map((name) => name.name);
    const tmp25 = mentionGames2[Symbol.iterator]();
    while (tmp25 !== undefined) {
      let tmp28 = currentOption(tmp26, 2);
      let first = tmp28[0];
      let tmp30 = tmp28[1];
      let obj3 = obj11(11605);
      let hasItem = 0 !== obj3.findGameMentionTokens(editId.text, tmp30.name, mapped).locations.length;
      if (!hasItem) {
        let text3 = editId.text;
        hasItem = text3.includes(closure_12(first));
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
    if (text !== editId.text) {
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
          let tmp49 = nextResult;
          let name = nextResult.name;
          let tmp51 = obj14[name];
          let tmp52 = tmp51;
          let optionValueNodes2 = self.optionValueNodes;
          let tmp50 = name;
          let value4 = optionValueNodes2.get(name);
          let tmp53 = null == tmp51;
          if (!tmp53) {
            tmp53 = "" === tmp52.displayText;
          }
          if (!tmp53) {
            let tmp56 = null != value4;
            if (tmp56) {
              let str2 = editId.text;
              tmp56 =
                str2.substring(value4.location + tmp49.displayName.length + 1, value4.location + value4.length) ===
                tmp52.displayText;
            }
            tmp53 = tmp56;
          }
          if (!tmp53) {
            delete obj2[name];
            if (tmp49.type === obj11(1985).ApplicationCommandOptionType.ATTACHMENT) {
              let arr = items3.push(tmp50);
            }
          }
          continue;
        }
        if (items3.length > 0) {
          const obj4 = UploadAttachmentActionCreatorsDefault;
          obj4.removeFiles(channel.id, items3, self.SlashCommand);
        }
      }
    }
    self.preferredOptionValues[channel.id] = obj14;
    flag = tmp19;
    tmp7 = section;
    activeCommand = command;
  }
  updateValidationResults() {
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
    const obj2 = ApplicationCommandActionCreatorsAll;
    obj2.updateOptionStates(self.props.channel.id, obj);
  }
}
const prototype = ApplicationCommandManager.prototype;

export default ApplicationCommandManager;

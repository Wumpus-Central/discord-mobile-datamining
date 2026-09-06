// === Module 12406: addGameMention ===

// Module 12406 (addGameMention)
import setActiveCommandAll from "setActiveCommand" /* 7778 */;
import _modDef9307 from "module_9307" /* 9307 */;
import findTokenLocations from "findTokenLocations" /* 11991 */;
import addRule from "addRule" /* 11992 */;
import addRuleDefault from "addRule" /* 11992 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "handleChanged" /* 4901 */;
import { DraftType } from "handleChanged" /* 4901 */;
import closure_7 from "handleInit" /* 7780 */;
import ME from "ME" /* 1074 */;
import regExp from "regExp" /* 5000 */;
import { MediaKeyboardTarget } from "DRAG_HANDLE" /* 1607 */;

require = arg1;
({ AnalyticEvents: closure_8, AutoCompleteResultTypes: c9, WHITESPACE_RE: c10 } = ME);
({ COMMAND_SENTINEL: unpackModuleId, formatGameMentionRaw: closure_12 } = regExp);
let closure_14 = { FULL_COMMAND: 0, [0]: "FULL_COMMAND", PARTIAL_COMMAND: 1, [1]: "PARTIAL_COMMAND" };
let result = require("set").fileFinishedImporting("modules/application_commands/native/ApplicationCommandManager.tsx");
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
    tmp5 = new require("addRule")();
    obj.parser = tmp5;
    obj.optionValues = {};
    obj.optionValidationResults = {};
    obj.canAutoInsertFirstOption = true;
    obj.preferredOptionValues = {};
    obj.setAutoCompleteResult = function setAutoCompleteResult(id, arg1, arg2, type) {
      let insertOrJumpCommandOption = type;
      const activeOption = closure_1_7.getActiveOption(id);
      if (arg2) {
        if (null != obj.props.activeCommand) {
          if (null != activeOption) {
            if (insertOrJumpCommandOption.type === closure_1_9.GAME_MENTION) {
              return false;
            } else if (insertOrJumpCommandOption.type === tmp4.TIMESTAMP_MENTION) {
              return false;
            } else {
              type = insertOrJumpCommandOption.type;
              if (tmp4.USER === type) {
                obj = { type: "userMention", userId: null };
                obj[1] = insertOrJumpCommandOption.user.id;
                let tmp5 = obj;
                insertOrJumpCommandOption = obj.insertOrJumpCommandOption;
                obj = { displayText: null, preferred: true, value: null };
                obj[0] = arg1;
                obj[2] = tmp5;
                const result = insertOrJumpCommandOption(activeOption, undefined, false, obj);
              } else if (tmp4.ROLE !== type) {
                if (tmp4.CHANNEL === type) {
                  obj1 = { type: "channelMention", channelId: null };
                  obj1[1] = insertOrJumpCommandOption.channel.id;
                  tmp5 = obj1;
                }
              }
              const obj2 = { type: "roleMention", roleId: null };
              obj2[1] = insertOrJumpCommandOption.id;
              tmp5 = obj2;
            }
          }
        }
      }
      if (insertOrJumpCommandOption.type !== closure_1_9.SLASH) {
        return false;
      } else {
        const obj3 = { channelId: null, command: null, section: null, location: null, visualSection: null, query: null, addSpace: true };
        obj3[0] = id;
        ({ command: obj2[1], section: obj2[2], location: obj2[3], visualSection: obj2[4], query: obj2[5] } = insertOrJumpCommandOption);
        obj.setCommand(obj3);
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
        const combined = "" + closure_1_11 + command.displayName;
        if (tmp) {
          str = " ";
        }
        commandText = combined + str;
      }
      current.setText(commandText);
      obj1 = obj(closure_1_3[8]);
      obj = { channelId, command, section, location: _location, triggerSection: obj(closure_1_3[9]).getCommandTriggerSection(visualSection), queryLength: null };
      let length;
      if (query != null) {
        length = query.length;
      }
      obj[5] = length;
      obj1.setActiveCommand(obj);
      const preferredCommand = obj.preferredCommand;
      let id;
      if (preferredCommand != null) {
        id = preferredCommand.id;
      }
      if (command.id !== id) {
        obj = { preferredCommand: null };
        obj1 = {};
        const merged = Object.assign(command);
        obj1.preferredCommandType = closure_1_14.FULL_COMMAND;
        obj[0] = obj1;
        const result = obj.updateApplicationCommandManagerState(obj);
      }
    };
    obj.setPartialCommand = function setPartialCommand(commandId, commandName, MENTION) {
      const current = obj.ref.current;
      current.setText("" + closure_1_11 + commandName);
      const preferredCommand = obj.preferredCommand;
      let id;
      if (preferredCommand != null) {
        id = preferredCommand.id;
      }
      if (commandId !== id) {
        obj = { preferredCommand: null, location: null };
        obj = { id: null, untranslatedName: null, displayName: null, preferredCommandType: null };
        obj[0] = commandId;
        obj[1] = commandName;
        obj[2] = commandName;
        obj[3] = closure_1_14.PARTIAL_COMMAND;
        obj[0] = obj;
        obj[1] = MENTION;
        const result = obj.updateApplicationCommandManagerState(obj);
      }
    };
    obj.setPastedCommand = function setPastedCommand(arg0, channel) {
      const parsed = JSON.parse(arg0);
      obj = obj(closure_1_3[9]);
      const result = obj.extractInteractionDataProps(parsed);
      let interactionOptions = result.interactionOptions;
      obj1 = closure_1_2(closure_1_3[10]);
      obj = { type: "channel", channel };
      const cachedCommand = obj1.getCachedCommand(obj, result.commandKey);
      ({ application, command } = cachedCommand);
      if (null != command) {
        let tmp8 = null;
        if (null != application) {
          obj = { type: null, id: null, icon: null, name: null, application: null };
          obj[0] = tmp2(tmp3[11]).ApplicationCommandSectionType.APPLICATION;
          ({ id: obj4[1], icon: obj4[2], bot } = application);
          let username;
          if (bot != null) {
            username = bot.username;
          }
          if (username == null) {
            username = application.name;
          }
          obj[3] = username;
          obj[4] = application;
          tmp8 = obj;
        }
        if (interactionOptions == null) {
          interactionOptions = [];
        }
        const initialValuesFromInteractionOptions = tmp2(tmp3[12]).getInitialValuesFromInteractionOptions(command, interactionOptions);
        const _Object = Object;
        const keys = Object.keys(initialValuesFromInteractionOptions);
        const mapped = keys.map((arg0) => {
          let options = arg0;
          options = options.options;
          let found;
          if (options != null) {
            found = options.find((name) => name.name === closure_0);
          }
          iter = iter[arg0];
          if (null != found) {
            if (null != iter) {
              let str = iter.value;
              str = undefined;
              if (str != null) {
                str = str.toString();
              }
              if (null != found.choices) {
                const choices = found.choices;
                const found1 = choices.find((value) => value.value === iter.value);
                let displayName;
                if (found1 != null) {
                  displayName = found1.displayName;
                }
                str = displayName;
              }
              const _HermesInternal = HermesInternal;
              return "" + found.displayName + ":" + str;
            }
          }
          return null;
        });
        let found = mapped.filter((arg0) => null != arg0);
        const joined = found.join(" ");
        obj1 = { channelId: null, command: null, section: null, location: null, commandText: null };
        obj1[0] = channel.id;
        obj1[1] = command;
        obj1[2] = tmp8;
        obj1[3] = tmp2(tmp3[11]).ApplicationCommandTriggerLocations.PASTE;
        let _HermesInternal = HermesInternal;
        let str2 = "";
        const combined = "" + closure_1_11 + command.displayName;
        if (0 !== joined.length) {
          const _HermesInternal2 = HermesInternal;
          str2 = " " + joined;
        }
        obj1[4] = combined + str2;
        command.setCommand(obj1);
        const tmp2Result = tmp2(tmp3[12]);
      } else {
        ({ id, name } = parsed);
        command.setPartialCommand(id, name, tmp2(tmp3[11]).ApplicationCommandTriggerLocations.PASTE);
      }
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
          if (closure_1_0(closure_1_3[6]).ChatInputNodeType.COMMAND_OPTION !== type) {
            if (tmp30(tmp31[6]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE !== type) {
              if (tmp30(tmp31[6]).ChatInputNodeType.GAME_HIGHLIGHT === type) {
                obj = {};
                const merged = Object.assign(style);
                const styles4 = closure_0.styles;
                obj.style = styles4.gameMention();
                return obj;
              } else if (tmp30(tmp31[6]).ChatInputNodeType.GAME_MENTION_INPUT === type) {
                obj = {};
                const merged1 = Object.assign(style);
                const styles3 = closure_0.styles;
                obj.style = styles3.commandOption();
                return obj;
              } else if (tmp30(tmp31[6]).ChatInputNodeType.ROLE_HIGHLIGHT === type) {
                const data = style.data;
                let color;
                if (data != null) {
                  color = data.color;
                }
                obj1 = {};
                const merged2 = Object.assign(style);
                const styles2 = closure_0.styles;
                obj1.style = styles2.autocomplete(color);
                return obj1;
              } else {
                if (tmp30(tmp31[6]).ChatInputNodeType.EMOJI_HIGHLIGHT !== type) {
                  if (tmp30(tmp31[6]).ChatInputNodeType.USER_HIGHLIGHT !== type) {
                    if (tmp30(tmp31[6]).ChatInputNodeType.CHANNEL_HIGHLIGHT !== type) {
                      if (tmp30(tmp31[6]).ChatInputNodeType.SILENT_HIGHLIGHT !== type) {
                        return style;
                      }
                    }
                  }
                }
                obj = {};
                const merged3 = Object.assign(style);
                const styles = closure_0.styles;
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
            const activeOption = closure_0.activeOption;
            let name;
            if (activeOption != null) {
              name = activeOption.name;
            }
            tmp19 = option.name !== name;
          }
          if (tmp19) {
            let success;
            if (closure_0.optionValidationResults[option.name] != null) {
              success = tmp23.success;
            }
            tmp19 = false === success;
          }
          const obj2 = {};
          const merged4 = Object.assign(style);
          const styles5 = closure_0.styles;
          if (tmp19) {
            let commandErrorOptionResult = styles5.commandErrorOption();
          } else {
            commandErrorOptionResult = styles5.commandOption();
          }
          obj2.style = commandErrorOptionResult;
          return obj2;
        }
      });
      if (obj.chatInputNodes.length > 0) {
        const current = tmp.ref.current;
        const result = current.updateNativeTextBlocksThrottled(tmp.chatInputNodes, tmp.props.editId);
      }
    };
    obj.addCommandOptionParserRules = function addCommandOptionParserRules() {
      const parser = obj.parser;
      obj = {
        ruleId: "commandOptionParserRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.COMMAND_OPTION,
        matchFunction(arg0, arg1) {
          return lib(11991).getMatchedOptions(arg0, arg1);
        },
        style() {
          const styles = lib.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled: true
      };
      parser.addRule(obj);
      const parser2 = obj.parser;
      obj = {
        ruleId: "commandOptionValueParserRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE,
        matchFunction(arg0, arg1) {
          return lib(11991).getMatchedOptionsWithValue(arg0, arg1);
        },
        style() {
          const styles = lib.styles;
          return styles.commandOption();
        },
        editDisabled(data) {
          data = data.data;
          let type;
          if (data != null) {
            type = data.option.type;
          }
          return type === lib(1894).ApplicationCommandOptionType.ATTACHMENT;
        }
      };
      parser2.addRule(obj);
      const parser3 = obj.parser;
      obj = {
        ruleId: "emojiHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.EMOJI_HIGHLIGHT,
        matchFunction(arg0) {
          return closure_1_0(closure_1_3[7]).getEmojiHighlightNodes(lib.props.channel, arg0);
        },
        style() {
          const styles = lib.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      };
      parser3.addRule(obj);
      const parser4 = obj.parser;
      parser4.addRule({
        ruleId: "roleHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.ROLE_HIGHLIGHT,
        matchFunction(arg0) {
          return closure_1_0(closure_1_3[7]).getRoleHighlightNodes(lib.props.channel, arg0);
        },
        style(data) {
          data = data.data;
          let color;
          if (data != null) {
            color = data.color;
          }
          const styles = lib.styles;
          return styles.autocomplete(color);
        },
        editDisabled() {
          return false;
        }
      });
      const parser5 = obj.parser;
      obj1 = {
        ruleId: "roleHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.ROLE_HIGHLIGHT,
        matchFunction(arg0) {
          return closure_1_0(closure_1_3[7]).getRoleHighlightNodes(lib.props.channel, arg0);
        },
        style(data) {
          data = data.data;
          let color;
          if (data != null) {
            color = data.color;
          }
          const styles = lib.styles;
          return styles.autocomplete(color);
        },
        editDisabled() {
          return false;
        }
      };
      parser5.addRule({
        ruleId: "userHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.USER_HIGHLIGHT,
        matchFunction(arg0) {
          return closure_1_0(closure_1_3[7]).getUsernameHighlightNodes(lib.props.channel, arg0);
        },
        style() {
          const styles = lib.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      });
      const parser6 = obj.parser;
      const obj2 = {
        ruleId: "userHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.USER_HIGHLIGHT,
        matchFunction(arg0) {
          return closure_1_0(closure_1_3[7]).getUsernameHighlightNodes(lib.props.channel, arg0);
        },
        style() {
          const styles = lib.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      };
      parser6.addRule({
        ruleId: "channelHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.CHANNEL_HIGHLIGHT,
        matchFunction(arg0) {
          return closure_1_0(closure_1_3[7]).getChannelHighlightNodes(lib.props.channel, arg0);
        },
        style() {
          const styles = lib.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      });
      const parser7 = obj.parser;
      const obj3 = {
        ruleId: "channelHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.CHANNEL_HIGHLIGHT,
        matchFunction(arg0) {
          return closure_1_0(closure_1_3[7]).getChannelHighlightNodes(lib.props.channel, arg0);
        },
        style() {
          const styles = lib.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      };
      parser7.addRule({
        ruleId: "silentHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.SILENT_HIGHLIGHT,
        matchFunction(arg0) {
          return lib(11991).getSilentHighlightNodes(arg0);
        },
        style() {
          const styles = lib.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      });
      const parser8 = obj.parser;
      const obj4 = {
        ruleId: "silentHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.SILENT_HIGHLIGHT,
        matchFunction(arg0) {
          return lib(11991).getSilentHighlightNodes(arg0);
        },
        style() {
          const styles = lib.styles;
          return styles.autocomplete();
        },
        editDisabled() {
          return false;
        }
      };
      parser8.addRule({
        ruleId: "gameHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.GAME_HIGHLIGHT,
        matchFunction(text) {
          return closure_1_0(closure_1_3[7]).getGameHighlightNodes(lib.mentionGames, text);
        },
        style() {
          const styles = lib.styles;
          return styles.gameMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      });
      const parser9 = obj.parser;
      const obj5 = {
        ruleId: "gameHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.GAME_HIGHLIGHT,
        matchFunction(text) {
          return closure_1_0(closure_1_3[7]).getGameHighlightNodes(lib.mentionGames, text);
        },
        style() {
          const styles = lib.styles;
          return styles.gameMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      };
      parser9.addRule({
        ruleId: "gameMentionInputRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.GAME_MENTION_INPUT,
        matchFunction(arr) {
          return lib(11991).getGameMentionInputNodes(arr);
        },
        style() {
          const styles = lib.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      });
      const parser10 = obj.parser;
      const obj6 = {
        ruleId: "gameMentionInputRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.GAME_MENTION_INPUT,
        matchFunction(arr) {
          return lib(11991).getGameMentionInputNodes(arr);
        },
        style() {
          const styles = lib.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      };
      parser10.addRule({
        ruleId: "timestampHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.TIMESTAMP_HIGHLIGHT,
        matchFunction(content) {
          return closure_1_0(closure_1_3[7]).getTimestampHighlightNodes(lib.mentionTimestamps, content);
        },
        style() {
          const styles = lib.styles;
          return styles.timestampMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      });
      const parser11 = obj.parser;
      const obj7 = {
        ruleId: "timestampHighlightRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.TIMESTAMP_HIGHLIGHT,
        matchFunction(content) {
          return closure_1_0(closure_1_3[7]).getTimestampHighlightNodes(lib.mentionTimestamps, content);
        },
        style() {
          const styles = lib.styles;
          return styles.timestampMention();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      };
      parser11.addRule({
        ruleId: "timestampMentionInputRuleId",
        type: obj(closure_1_3[6]).ChatInputNodeType.TIMESTAMP_MENTION_INPUT,
        matchFunction(arr) {
          return lib(11991).getTimestampMentionInputNodes(arr);
        },
        style() {
          const styles = lib.styles;
          return styles.commandOption();
        },
        deleteNodeOnBackspace: true,
        editDisabled() {
          return true;
        }
      });
    };
    obj.getCurrentCommand = function getCurrentCommand(text, channel, preferredCommand, preferredCommandSection) {
      obj = channel;
      closure_1 = preferredCommand;
      closure_2 = obj;
      if (null != text) {
        if (!obj.props.commandsDisabled) {
          if (text.startsWith(closure_1_11)) {
            obj = obj(closure_1_3[7]);
            const textBeforeFirstOption = obj.getTextBeforeFirstOption(text);
            ({ match: closure_3, text } = textBeforeFirstOption);
            let flag = false;
            if (null != preferredCommand) {
              const _HermesInternal = HermesInternal;
              if (text.startsWith("" + tmp2 + preferredCommand.displayName)) {
                flag = true;
                if (preferredCommand.preferredCommandType === closure_1_14.FULL_COMMAND) {
                  obj = { command: null, section: null };
                  obj[0] = preferredCommand;
                  obj[1] = preferredCommandSection;
                  return obj;
                }
              } else {
                const _HermesInternal2 = HermesInternal;
                flag = false;
              }
            }
            if (null == tmp.contextCommands) {
              return null;
            } else {
              let tmp3Result = tmp3(tmp4[19]);
              obj = { channel: null, type: "channel" };
              obj[0] = channel;
              const commandContext = tmp3Result.getCommandContext(obj);
              let preferredCommandType;
              if (preferredCommand != null) {
                preferredCommandType = preferredCommand.preferredCommandType;
              }
              if (preferredCommandType === closure_1_14.PARTIAL_COMMAND) {
                const contextCommands = tmp.contextCommands;
                let found = contextCommands.find((id) => id.id === preferredCommand.id);
                if (null != found) {
                  let obj4 = closure_1_2(tmp4[10]);
                  obj1 = { channel: null, type: "channel" };
                  obj1[0] = channel;
                  let cachedApplicationSection = obj4.getCachedApplicationSection(obj1, tmp3(tmp4[13]).ApplicationCommandType.CHAT, found.applicationId);
                  let tmp20 = null;
                  if (null != cachedApplicationSection) {
                    let obj2 = { command: null, section: null };
                    const obj3 = {};
                    let merged = Object.assign(found);
                    obj3.preferredCommandType = tmp9.FULL_COMMAND;
                    obj2[0] = obj3;
                    obj2[1] = cachedApplicationSection;
                    tmp20 = obj2;
                  }
                  return tmp20;
                }
              } else {
                tmp3Result = tmp3(tmp4[20]);
                const draftCommand = tmp3Result.resolveDraftCommand(channel, text, closure_1_5.getDraftCommand(channel.id, closure_1_6.ChannelMessage));
                if (null != draftCommand) {
                  obj4 = { command: null, section: null };
                  const obj5 = {};
                  const merged1 = Object.assign(draftCommand.command);
                  obj5.preferredCommandType = tmp9.FULL_COMMAND;
                  obj4[0] = obj5;
                  obj4[1] = draftCommand.section;
                  return obj4;
                } else {
                  const parts = text.slice(1).split(" ", 3);
                  c6 = 0;
                  if (0 < parts.length) {
                    function _loop() {
                      const substr = parts.slice(0, parts.length - c6);
                      const joined = substr.join(" ");
                      obj1 = channel(closure_1_3[9]);
                      let obj2 = preferredCommand(closure_1_3[21]);
                      const regExp = new RegExp("^" + obj2.escape(joined), "i");
                      const matchingGroupCommands = obj1.getMatchingGroupCommands(lib.contextCommands, regExp, closure_4, 2);
                      const found = matchingGroupCommands.filter((inputType) => {
                        let tmp = inputType.inputType !== joined(closure_1_3[11]).ApplicationCommandInputType.PLACEHOLDER;
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
                          tmp7 = null != closure_3;
                        }
                        obj = { channel: null, type: "channel" };
                        obj[0] = joined;
                        const cachedApplicationSection = lib(tmp4[10]).getCachedApplicationSection(obj, channel(tmp4[13]).ApplicationCommandType.CHAT, first.applicationId);
                        if (null == cachedApplicationSection) {
                          obj = { v: null };
                        } else {
                          obj = { v: null };
                          obj1 = { command: null, section: null };
                          obj2 = {};
                          const merged = Object.assign(first);
                          obj2.preferredCommandType = closure_1_14.FULL_COMMAND;
                          obj1[0] = obj2;
                          obj1[1] = cachedApplicationSection;
                          obj[0] = obj1;
                        }
                        return obj;
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
              }
              let tmp17 = null;
              if (flag) {
                tmp17 = null;
                if (null != preferredCommand) {
                  const obj6 = { command: null, section: null };
                  obj6[0] = preferredCommand;
                  tmp17 = obj6;
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
      obj = selectionStart;
      if (focused2) {
        obj = closure_1_1(closure_1_3[18]);
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
            let tmp8;
            if (tmp5.preferredOptionValues[tmp5.props.channel.id] != null) {
              tmp8 = tmp7[option.name];
            }
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
          let tmp4 = closure_1_4;
          let tmp5 = closure_1_4(tmp2, 2);
          [tmp6, tmp7] = tmp5;
          let arr = tmp7;
          let data = tmp7.data;
          let type;
          if (data != null) {
            type = data.type;
          }
          let tmp9 = obj;
          let tmp10 = closure_1_3;
          if (type === obj(closure_1_3[6]).ChatInputParseResultDataType.COMMAND_OPTION) {
            let tmp26 = obj.preferredOptionValues[obj.props.channel.id];
            let optionValue;
            let tmp24 = obj;
            let tmp25 = obj;
            if (tmp26 != null) {
              let tmp11 = tmp6;
              let tmp12 = tmp26[tmp6];
              if (tmp12 != null) {
                optionValue = tmp12.optionValue;
              }
            }
            if (null != optionValue) {
              let tmp18 = tmp6;
              let tmp19 = optionValue;
              let items = [tmp14];
              obj[tmp6] = items;
            } else {
              let tmp15 = tmp7;
              let option = arr.data.option;
              let tmp16 = tmp6;
              let tmp17 = tmp24;
              let optionValueParser = tmp25.optionValueParser;
              let items1 = [optionValueParser.parse(text.substring(arr.location + option.displayName.length + 1, arr.location + arr.length), option)];
              obj[tmp6] = items1;
            }
          }
          continue;
        }
        return obj;
      }
    };
    obj.insertFirstOptionIfValid = function insertFirstOptionIfValid(text, activeCommand, displayName, preferredCommandType, preferredCommandType2) {
      if (text.startsWith("" + closure_1_11 + displayName)) {
        if (text.length > displayName.length + 1) {
          if (closure_1_10.test(text[displayName.length + 1])) {
            const _Set = Set;
            const optionValueNodes = set.optionValueNodes;
            set = new Set(optionValueNodes.keys());
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
    obj.insertOrJumpCommandOption = function insertOrJumpCommandOption(activeOption, length, arg2, displayText, activeCommand) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      if (activeCommand == null) {
        activeCommand = set.props.activeCommand;
      }
      if (null != activeCommand) {
        ({ text, selectionStart } = set.props);
        const optionValueNodes2 = set.optionValueNodes;
        if (optionValueNodes2 != null) {
          const value = optionValueNodes2.get(activeOption.name);
        }
        displayText = undefined;
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
              tmp27 = !closure_1_10.test(text[Math.min(Math, tmp4 - 1, text.length - 1)]);
            }
            const current3 = obj7.ref.current;
            obj = { location: null, length: 0, text: null, nodes: null, keepCursorPosition: null, editId: null };
            obj[0] = tmp4;
            let str8 = "";
            if (tmp27) {
              str8 = " ";
            }
            const _HermesInternal6 = HermesInternal;
            obj[2] = "" + str8 + activeOption.displayName + ":";
            obj = { type: null, style: null, location: null, length: null };
            obj[0] = obj(closure_1_3[6]).ChatInputNodeType.COMMAND_OPTION;
            const styles3 = obj7.styles;
            obj[1] = styles3.commandOption();
            let num9 = 0;
            if (tmp27) {
              num9 = 1;
            }
            obj[2] = num9;
            obj[3] = activeOption.displayName.length + 1;
            const items = [obj];
            obj[3] = items;
            obj[4] = flag;
            obj[5] = obj7.editId;
            current3.replaceRange(obj);
          } else {
            const current2 = obj7.ref.current;
            current2.setSelectedRange(value.location + activeOption.displayName.length + 1, value.length - activeOption.displayName.length - 1);
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
            tmp5 = !closure_1_10.test(text[Math.min(Math, _location - 1, text.length - 1)]);
          }
          const _Set = Set;
          const optionValueNodes = obj7.optionValueNodes;
          set = new Set(optionValueNodes.keys());
          set.add(activeOption.name);
          c1 = undefined;
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
          let tmp15 = null != displayText;
          if (tmp15) {
            let tmp16 = _location + num2 !== text.length;
            if (tmp16) {
              const _Math2 = Math;
              tmp16 = !closure_1_10.test(text[Math.min(Math, _location + num2, text.length - 1)]);
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
            let combined = "" + activeOption.displayName + ":" + displayText.displayText;
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + activeOption.displayName + ":";
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
            obj1 = { type: null, style: null, location: null, length: null };
            const combined3 = "" + combined1 + combined2;
            obj1[0] = obj(closure_1_3[6]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE;
            const styles = obj7.styles;
            obj1[1] = styles.commandOption();
            let num6 = 0;
            if (tmp5) {
              num6 = 1;
            }
            obj1[2] = num6;
            obj1[3] = combined.length;
            const items1 = [obj1, ];
            const obj2 = { type: null, style: null, location: null, length: null };
            obj2[0] = obj(closure_1_3[6]).ChatInputNodeType.COMMAND_OPTION;
            const styles2 = obj7.styles;
            obj2[1] = styles2.commandOption();
            obj2[2] = combined1.length;
            obj2[3] = combined2.length;
            items1[1] = obj2;
            const current = obj7.ref.current;
            const obj3 = { location: null, length: null, text: null, nodes: null, editId: null };
            obj3[0] = _location;
            obj3[1] = num2;
            obj3[2] = combined3;
            obj3[3] = items1;
            obj3[4] = obj7.editId;
            current.replaceRange(obj3);
          } else {
            const current4 = obj7.ref.current;
            const obj4 = { location: null, length: null, text: null, nodes: null, keepCursorPosition: null, editId: null };
            obj4[0] = _location;
            obj4[1] = num2;
            obj4[2] = combined1;
            const obj5 = { type: null, style: null, location: null, length: null };
            obj5[0] = obj(closure_1_3[6]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE;
            const styles4 = obj7.styles;
            obj5[1] = styles4.commandOption();
            let num5 = 0;
            if (tmp5) {
              num5 = 1;
            }
            obj5[2] = num5;
            obj5[3] = combined.length;
            const items2 = [obj5];
            obj4[3] = items2;
            obj4[4] = flag;
            obj4[5] = obj7.editId;
            current4.replaceRange(obj4);
          }
        }
        let preferred;
        if (displayText != null) {
          preferred = displayText.preferred;
        }
        if (preferred) {
          const result = obj7.setPreferredOptionValue(obj7.props.channel.id, activeOption.name, displayText);
        }
      }
    };
    obj.sendCommand = function sendCommand(text, channel, arg2) {
      const activeCommand = obj.props.activeCommand;
      if (null != activeCommand) {
        let prop = obj.optionValidationResults;
        if (prop == null) {
          prop = {};
        }
        const firstInvalidOption = obj(closure_1_3[22]).getFirstInvalidOption(activeCommand, prop);
        obj = {};
        const _Object = Object;
        const entries = Object.entries(closure_1_7.getOptionStates(channel.id));
        const item = entries.forEach((arg0) => {
          [tmp, tmp2] = arg0;
          if (null != tmp2.optionValue) {
            obj[tmp] = tmp2.optionValue;
          }
        });
        if (null == firstInvalidOption) {
          arg2(activeCommand, obj(closure_1_3[23]).parseOptionValuesForSend(channel, activeCommand, obj));
          const obj8 = obj(closure_1_3[23]);
        } else {
          const result = obj.insertOrJumpCommandOption(firstInvalidOption);
          const result1 = obj.updateValidationResults();
          const result2 = obj(closure_1_3[24]).triggerHapticFeedback(obj(closure_1_3[24]).HapticFeedbackTypes.NOTIFICATION_ERROR);
          const obj12 = obj(closure_1_3[24]);
          let applicationId;
          if (activeCommand != null) {
            applicationId = activeCommand.applicationId;
          }
          obj = { application_id: null, command_id: null, argument_type: null, is_required: null };
          obj[0] = applicationId;
          let id;
          if (activeCommand != null) {
            const rootCommand = activeCommand.rootCommand;
            if (rootCommand != null) {
              id = rootCommand.id;
            }
          }
          obj[1] = id;
          let num2 = firstInvalidOption.type;
          if (num2 == null) {
            num2 = 3;
          }
          obj[2] = obj(closure_1_3[13]).ApplicationCommandOptionType[num2];
          let required;
          if (firstInvalidOption != null) {
            required = firstInvalidOption.required;
          }
          obj[3] = required;
          obj(closure_1_3[25]).trackWithMetadata(closure_1_8.APPLICATION_COMMAND_VALIDATION_FAILED, obj);
          const obj13 = obj(closure_1_3[25]);
        }
        return true;
      } else {
        let query = null;
        if (obj9.getPrefix(text) === closure_1_11) {
          obj1 = obj(closure_1_3[26]);
          query = obj1.getQuery(text);
        }
        if (null != query) {
          obj1 = { channel: null, type: "channel" };
          obj1[0] = channel;
          const obj10 = closure_1_2(closure_1_3[10]);
          ({ commands, sections } = closure_1_2(closure_1_3[10]).getCachedResults(obj1, obj(closure_1_3[13]).ApplicationCommandType.CHAT, query));
          if (null != commands) {
            if (commands.length > 0) {
              if (commands[0].inputType !== obj(closure_1_3[11]).ApplicationCommandInputType.PLACEHOLDER) {
                const first = commands[0];
                let found = sections.find((application) => {
                  application = application.application;
                  let id;
                  if (application != null) {
                    id = application.id;
                  }
                  return id === first.applicationId;
                });
                const obj2 = { channelId: null, command: null, section: null, location: null, query: null };
                obj2[0] = channel.id;
                obj2[1] = first;
                if (found == null) {
                  found = null;
                }
                obj2[2] = found;
                obj2[3] = obj(closure_1_3[11]).ApplicationCommandTriggerLocations.DISCOVERY;
                obj2[4] = query;
                obj.setCommand(obj2);
                return true;
              }
            }
          }
          const cachedResults = closure_1_2(closure_1_3[10]).getCachedResults(obj1, obj(closure_1_3[13]).ApplicationCommandType.CHAT, query);
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
  const styles = this.styles;
  const obj = { type: addRule.ChatInputNodeType.GAME_HIGHLIGHT, style: styles.gameMention(), deleteNodeOnBackspace: true, editDisabled: true };
  const merged = Object.assign(findTokenLocations.buildGameMentionResult(game));
  return obj;
};
prototype["addTimestampMention"] = function addTimestampMention(formatted, mention) {
  const obj = findTokenLocations;
  const result = obj.uniqueTimestampPillText(this.mentionTimestamps, findTokenLocations.formatTimestampPillText(formatted), mention);
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
  const styles = this.styles;
  return { type: addRule.ChatInputNodeType.TIMESTAMP_HIGHLIGHT, style: styles.timestampMention(), deleteNodeOnBackspace: true, editDisabled: true, location: 0, length: addTimestampMentionResult.length };
};
prototype["setPreferredOptionValue"] = function setPreferredOptionValue(id, name, displayText) {
  const self = this;
  if (null == this.preferredOptionValues[id]) {
    self.preferredOptionValues[id] = {};
  }
  self.preferredOptionValues[id][name] = displayText;
};
prototype["mergePropsAndUpdate"] = function mergePropsAndUpdate(editId) {
  let self = this;
  self = this;
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
        let obj5 = obj1(4427);
        const keyboardType = obj5.getKeyboardType();
        focused2 = keyboardType !== obj1(1609).KeyboardTypes.SYSTEM;
      }
      currentOption = self.getCurrentOption(focused2, editId.selectionStart);
      activeOption = currentOption;
    }
    let tmp91 = tmp83;
    if (tmp83) {
      tmp91 = null != self.activeCommand;
    }
    if (tmp91) {
      _modDef9307.clearAll(channel.id, self.SlashCommand);
      const obj7 = _modDef9307;
    }
    let name;
    if (activeOption != null) {
      name = activeOption.name;
    }
    const activeOption2 = self.activeOption;
    let name1;
    if (activeOption2 != null) {
      name1 = activeOption2.name;
    }
    closure_5 = tmp99;
    let preferredCommandType = tmp5;
    if (!tmp5) {
      preferredCommandType = tmp99;
    }
    if (!preferredCommandType) {
      preferredCommandType = lastCommandAutocompleteResponseNonce !== editId.lastCommandAutocompleteResponseNonce;
    }
    if (preferredCommandType) {
      preferredCommandType = undefined;
      if (activeCommand != null) {
        preferredCommandType = activeCommand.preferredCommandType;
      }
      preferredCommandType = constants;
      preferredCommandType = preferredCommandType === constants.FULL_COMMAND;
    }
    if (preferredCommandType) {
      self.optionValues = self.getAllCommandOptionValues(activeCommand, editId.text);
      preferredCommandType = obj1;
      preferredCommandType = obj1;
      preferredCommandType = dependencyMap;
      preferredCommandType = dependencyMap;
      const obj8 = obj1(12155);
      preferredCommandType = obj8;
      preferredCommandType = activeCommand;
      self.optionValidationResults = obj8.getValidationResults(activeCommand, self.optionValues, editId.channel.guild_id, editId.channel.id, false);
      const chatInputNodes = self.chatInputNodes;
      self.chatInputNodes = chatInputNodes.map((type) => {
        if (type.type === obj1(11992).ChatInputNodeType.COMMAND_OPTION) {
          if (null != type.data) {
            const option = type.data.option;
            if (type.type === tmp(11992).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE) {
              let name;
              if (currentOption != null) {
                name = currentOption.name;
              }
              if (option.name === name) {
                if (closure_2) {
                  let obj = {};
                  const merged = Object.assign(type);
                  obj.style = undefined;
                  return obj;
                }
              }
            }
            obj = {};
            const merged1 = Object.assign(type);
            let name1;
            if (currentOption != null) {
              name1 = currentOption.name;
            }
            if (option.name !== name1) {
              if (undefined !== tmp15) {
                if (!tmp15.success) {
                  const styles = tmp14.styles;
                  obj.style = styles.commandErrorOption();
                }
                let success;
                if (tmp15 != null) {
                  success = tmp15.success;
                }
                if (success) {
                  success = option.type === tmp(1894).ApplicationCommandOptionType.ATTACHMENT;
                }
                if (success) {
                  obj = { action: "tapAttachment", channelId: null, optionName: null };
                  obj[1] = editId.channel.id;
                  obj[2] = option.name;
                  obj.tapAction = obj;
                  obj.deleteNodeOnBackspace = true;
                }
                return obj;
              }
            }
            const styles2 = tmp14.styles;
            obj.style = styles2.commandOption();
          }
        }
        return type;
      });
    }
    preferredCommandType = tmp5;
    if (!tmp5) {
      preferredCommandType = tmp83;
    }
    if (!preferredCommandType) {
      preferredCommandType = tmp99;
    }
    if (!preferredCommandType) {
      preferredCommandType = editId !== editId.editId;
    }
    if (preferredCommandType) {
      const current = self.ref.current;
      preferredCommandType = current.updateNativeTextBlocksThrottled(self.chatInputNodes, editId.editId);
    }
    preferredCommandType = tmp83;
    if (tmp83) {
      preferredCommandType = null != activeCommand;
    }
    if (preferredCommandType) {
      self.canAutoInsertFirstOption = true;
    }
    preferredCommandType = obj1;
    preferredCommandType = obj1;
    preferredCommandType = dependencyMap;
    preferredCommandType = dependencyMap;
    if (!obj9.isEmpty(self.optionsToNodes)) {
      self.canAutoInsertFirstOption = false;
    }
    preferredCommandType = undefined;
    if (activeCommand != null) {
      preferredCommandType = activeCommand.preferredCommandType;
    }
    preferredCommandType = constants;
    if (preferredCommandType === constants.FULL_COMMAND) {
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
    preferredCommandType = items.filter((required) => required.required).length > 0;
    preferredCommandType = undefined;
    if (activeCommand != null) {
      preferredCommandType = activeCommand.preferredCommandType;
    }
    if (preferredCommandType === preferredCommandType.FULL_COMMAND) {
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
      preferredCommandType = undefined;
      if (activeCommand != null) {
        preferredCommandType = activeCommand.preferredCommandType;
      }
      canAutoInsertFirstOption = preferredCommandType === preferredCommandType.FULL_COMMAND;
    }
    if (canAutoInsertFirstOption) {
      canAutoInsertFirstOption = preferredCommandType(12).isEmpty(self.optionsToNodes);
      const preferredCommandTypeResult = preferredCommandType(12);
    }
    if (canAutoInsertFirstOption) {
      canAutoInsertFirstOption = editId.text.length >= text.length;
    }
    if (canAutoInsertFirstOption) {
      preferredCommandType = 1 === items1.filter((required) => !required.required).length;
      preferredCommandType = self;
      preferredCommandType = activeCommand;
      if (!self.insertFirstOptionIfValid(editId.text, activeCommand, activeCommand.displayName, preferredCommandType, preferredCommandType)) {
        preferredCommandType = self;
        preferredCommandType = activeCommand;
        preferredCommandType = self.insertFirstOptionIfValid(editId.text, activeCommand, activeCommand.untranslatedName, preferredCommandType, preferredCommandType);
      }
    }
    if (name !== name1) {
      preferredCommandType = undefined;
      if (activeOption != null) {
        preferredCommandType = activeOption.type;
      }
      if (preferredCommandType === preferredCommandType(1894).ApplicationCommandOptionType.ATTACHMENT) {
        if (!self.optionValidationResults[activeOption.name].success) {
          const current2 = self.ref.current;
          let obj = { type: null, context: null };
          obj[0] = preferredCommandType(1609).KeyboardTypes.MEDIA;
          obj = { target: null, option: null };
          preferredCommandType = MediaKeyboardTarget;
          obj[0] = MediaKeyboardTarget.COMMAND;
          obj[1] = activeOption;
          obj[1] = obj;
          preferredCommandType = current2.openCustomKeyboard(obj);
        }
        self.props = editId;
        obj1 = {};
        preferredCommandType = undefined;
        if (activeCommand != null) {
          preferredCommandType = activeCommand.preferredCommandType;
        }
        if (preferredCommandType === preferredCommandType.FULL_COMMAND) {
          if (tmp99) {
            if (activeCommand != null) {
              const options2 = activeCommand.options;
              if (options2 != null) {
                preferredCommandType = options2.forEach((name) => {
                  name = name.name;
                  name = undefined;
                  if (currentOption != null) {
                    name = currentOption.name;
                  }
                  const obj = { isActive: name === name, optionValue: self.optionValues[name], hasValue: null, location: null, length: null };
                  let tmp4 = null != arr;
                  if (tmp4) {
                    tmp4 = arr.length > 0;
                  }
                  obj[2] = tmp4;
                  const optionsToNodes = tmp.optionsToNodes;
                  let value = optionsToNodes.get(name);
                  let _location;
                  if (value != null) {
                    _location = value.location;
                  }
                  obj[3] = _location;
                  const optionsToNodes2 = tmp.optionsToNodes;
                  value = optionsToNodes2.get(name);
                  let length;
                  if (value != null) {
                    length = value.length;
                  }
                  obj[4] = length;
                  obj1[name] = obj;
                });
              }
            }
            if (tmp99) {
              if (null != activeOption) {
                obj1[activeOption.name].hasValue = true;
              }
              if (null != self.activeOption) {
                preferredCommandType = obj1[self.activeOption.name];
                preferredCommandType = undefined;
                if (preferredCommandType != null) {
                  preferredCommandType = preferredCommandType.hasValue;
                }
                if (preferredCommandType) {
                  obj1[self.activeOption.name].lastValidationResult = self.optionValidationResults[self.activeOption.name];
                }
              }
            }
          }
        }
        preferredCommandType = self.getCurrentOption(true, editId.selectionStart);
        if (tmp5) {
          if (null != preferredCommandType) {
            const name2 = preferredCommandType.name;
            let obj2 = obj1[name2];
            if (obj2 == null) {
              obj2 = {};
            }
            let optionsToNodes2 = self.optionsToNodes;
            preferredCommandType = optionsToNodes2.get(name2);
            preferredCommandType = undefined;
            if (preferredCommandType != null) {
              preferredCommandType = preferredCommandType.location;
            }
            obj2.location = preferredCommandType;
            const optionsToNodes3 = self.optionsToNodes;
            let value = optionsToNodes3.get(name2);
            preferredCommandType = undefined;
            if (value != null) {
              preferredCommandType = value.length;
            }
            obj2.length = preferredCommandType;
            obj2.optionValue = self.optionValues[name2];
            obj2.hasValue = true;
            preferredCommandType = self.optionValidationResults[name2];
            preferredCommandType = undefined;
            if (preferredCommandType != null) {
              preferredCommandType = preferredCommandType.success;
            }
            if (preferredCommandType) {
              obj2.lastValidationResult = preferredCommandType;
            }
            obj1[name2] = obj2;
          }
        }
        self.activeCommand = activeCommand;
        self.activeCommandSection = tmp9;
        self.activeOption = activeOption;
        if (!tmp83) {
          preferredCommandType = globalThis;
          const _Object = Object;
          tmp83 = Object.keys(obj1).length > 0;
        }
        if (!tmp83) {
          tmp83 = flag;
        }
        if (tmp83) {
          preferredCommandType = importAll;
          let obj3 = { channelId: null, command: null, section: null, preferredCommandId: null, location: null, changedOptionStates: null };
          obj3[0] = editId.channel.id;
          const activeCommand4 = self.activeCommand;
          preferredCommandType = undefined;
          if (activeCommand4 != null) {
            preferredCommandType = activeCommand4.preferredCommandType;
          }
          preferredCommandType = null;
          if (preferredCommandType === preferredCommandType.FULL_COMMAND) {
            preferredCommandType = self.activeCommand;
          }
          obj3[1] = preferredCommandType;
          preferredCommandType = self.activeCommandSection;
          if (preferredCommandType == null) {
            preferredCommandType = null;
          }
          obj3[2] = preferredCommandType;
          const preferredCommand6 = self.preferredCommand;
          preferredCommandType = undefined;
          if (preferredCommand6 != null) {
            preferredCommandType = preferredCommand6.id;
          }
          if (preferredCommandType == null) {
            preferredCommandType = null;
          }
          obj3[3] = preferredCommandType;
          obj3[4] = self.location;
          obj3[5] = obj1;
          preferredCommandType = setActiveCommandAll.updateChannelState(obj3);
          const obj16 = setActiveCommandAll;
        }
      }
    }
    preferredCommandType = tmp99;
    if (name !== name1) {
      preferredCommandType = null != activeOption;
    }
    if (preferredCommandType) {
      preferredCommandType = activeOption.type !== preferredCommandType(1894).ApplicationCommandOptionType.ATTACHMENT;
    }
    if (preferredCommandType) {
      preferredCommandType = preferredCommandType(4427).getKeyboardType();
      preferredCommandType = preferredCommandType !== preferredCommandType(1609).KeyboardTypes.SYSTEM;
      const preferredCommandTypeResult1 = preferredCommandType(4427);
    }
    if (preferredCommandType) {
      const current3 = self.ref.current;
      preferredCommandType = current3.closeCustomKeyboard();
      const current4 = self.ref.current;
      preferredCommandType = current4.focus();
    }
    obj9 = obj1(12);
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
    let id2;
    if (preferredCommand2 != null) {
      id2 = preferredCommand2.id;
    }
    let id3;
    if (command != null) {
      id3 = command.id;
    }
    if (id2 !== id3) {
      if (tmp5) {
        self.preferredCommand = null;
        self.preferredCommandSection = null;
        self.location = undefined;
      }
    } else {
      const preferredCommand3 = self.preferredCommand;
      let preferredCommandType1;
      if (preferredCommand3 != null) {
        preferredCommandType1 = preferredCommand3.preferredCommandType;
      }
      let tmp17 = preferredCommandType1 === constants.PARTIAL_COMMAND;
      if (tmp17) {
        let preferredCommandType2;
        if (command != null) {
          preferredCommandType2 = command.preferredCommandType;
        }
        tmp17 = preferredCommandType2 === tmp16.FULL_COMMAND;
      }
      if (tmp17) {
        self.preferredCommand = command;
      }
    }
    let id4;
    if (preferredCommand != null) {
      id4 = preferredCommand.id;
    }
    const preferredCommand4 = self.preferredCommand;
    let id5;
    if (preferredCommand4 != null) {
      id5 = preferredCommand4.id;
    }
    let tmp21 = id4 !== id5;
    if (!tmp21) {
      let preferredCommandType3;
      if (preferredCommand != null) {
        preferredCommandType3 = preferredCommand.preferredCommandType;
      }
      const preferredCommand5 = self.preferredCommand;
      let preferredCommandType4;
      if (preferredCommand5 != null) {
        preferredCommandType4 = preferredCommand5.preferredCommandType;
      }
      tmp21 = preferredCommandType3 !== preferredCommandType4;
    }
    let obj4 = self.preferredOptionValues[channel.id];
    if (obj4 == null) {
      obj4 = {};
    }
    const parser = self.parser;
    let preferredCommandType5;
    if (command != null) {
      preferredCommandType5 = command.preferredCommandType;
    }
    let tmp26 = null;
    if (preferredCommandType5 === constants.FULL_COMMAND) {
      tmp26 = command;
    }
    obj5 = { activeCommand: null, preferredOptionValues: null };
    obj5[0] = tmp26;
    obj5[1] = obj4;
    self.chatInputNodes = parser.parse(editId.text, obj5);
    const mentionGames = self.mentionGames;
    const items2 = [];
    HermesBuiltin.arraySpread(mentionGames.values(), 0);
    const mentionGames2 = self.mentionGames;
    const mapped = items2.map((name) => name.name);
    const tmp31 = mentionGames2[Symbol.iterator]();
    while (tmp31 !== undefined) {
      let tmp35 = currentOption;
      let tmp36 = currentOption(tmp33, 2);
      let first = tmp36[0];
      let tmp38 = obj1;
      let tmp39 = obj1;
      let tmp40 = dependencyMap;
      let tmp41 = dependencyMap;
      obj3 = obj1(11991);
      let hasItem = 0 !== obj3.findGameMentionTokens(editId.text, tmp36[1].name, mapped).locations.length;
      if (!hasItem) {
        let text2 = editId.text;
        let tmp43 = callback;
        let tmp44 = first;
        hasItem = text2.includes(callback(first));
      }
      if (!hasItem) {
        let mentionGames3 = self.mentionGames;
        let tmp45 = first;
        let deleteResult = mentionGames3.delete(first);
      }
      continue;
    }
    let optionsToNodes = self.optionsToNodes;
    optionsToNodes.clear();
    let optionValueNodes = self.optionValueNodes;
    optionValueNodes.clear();
    const chatInputNodes1 = self.chatInputNodes;
    const item = chatInputNodes1.forEach((type) => {
      if (type.type === obj1(11992).ChatInputNodeType.COMMAND_OPTION) {
        const data = type.data;
        type = undefined;
        if (data != null) {
          type = data.type;
        }
        if (type === tmp(11992).ChatInputParseResultDataType.COMMAND_OPTION) {
          const optionsToNodes = self.optionsToNodes;
          const result = optionsToNodes.set(type.data.option.name, type);
        }
      }
      let tmp5 = type.type === tmp(11992).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE;
      if (tmp5) {
        const data2 = type.data;
        let type1;
        if (data2 != null) {
          type1 = data2.type;
        }
        tmp5 = type1 === tmp(11992).ChatInputParseResultDataType.COMMAND_OPTION;
      }
      if (tmp5) {
        const optionValueNodes = self.optionValueNodes;
        const result1 = optionValueNodes.set(type.data.option.name, type);
      }
    });
    if (tmp5) {
      const activeCommand2 = self.activeCommand;
      let preferredCommandType6;
      if (activeCommand2 != null) {
        preferredCommandType6 = activeCommand2.preferredCommandType;
      }
      if (preferredCommandType6 === constants.FULL_COMMAND) {
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
          name = nextResult.name;
          let tmp58 = obj4[name];
          let tmp59 = tmp58;
          let optionValueNodes2 = self.optionValueNodes;
          let tmp57 = name;
          value = optionValueNodes2.get(name);
          let tmp60 = null == tmp58;
          if (!tmp60) {
            let tmp61 = tmp58;
            tmp60 = "" === tmp59.displayText;
          }
          if (!tmp60) {
            let tmp62 = value;
            let tmp63 = null != value;
            if (tmp63) {
              let str2 = editId.text;
              let tmp64 = value;
              let tmp65 = nextResult;
              let tmp66 = tmp58;
              tmp63 = str2.substring(value.location + tmp56.displayName.length + 1, value.location + value.length) === tmp59.displayText;
            }
            tmp60 = tmp63;
          }
          if (!tmp60) {
            let tmp67 = name;
            delete tmp[tmp2];
            let tmp68 = nextResult;
            let tmp69 = obj1;
            let tmp70 = obj1;
            let tmp71 = dependencyMap;
            let tmp72 = dependencyMap;
            if (tmp56.type === obj1(1894).ApplicationCommandOptionType.ATTACHMENT) {
              let tmp73 = name;
              let arr = items3.push(tmp57);
            }
          }
          continue;
        }
        if (items3.length > 0) {
          obj4 = _modDef9307;
          obj4.removeFiles(channel.id, items3, self.SlashCommand);
        }
      }
    }
    self.preferredOptionValues[channel.id] = obj4;
    flag = tmp21;
    tmp9 = section;
    activeCommand = command;
  } else {
    if (!tmp5) {
      if (null != self.preferredCommand) {
        if (self.preferredCommand.preferredCommandType === constants.FULL_COMMAND) {
          let currentCommand = { command: null, section: null };
          ({ preferredCommand: obj[0], preferredCommandSection: obj[1] } = self);
        }
      }
    }
    currentCommand = self.getCurrentCommand(editId.text, editId.channel, self.preferredCommand, self.preferredCommandSection);
  }
};
prototype["updateValidationResults"] = function updateValidationResults() {
  let self = this;
  self = this;
  let obj = {};
  const activeCommand = this.activeCommand;
  let preferredCommandType;
  if (activeCommand != null) {
    preferredCommandType = activeCommand.preferredCommandType;
  }
  if (preferredCommandType === constants.FULL_COMMAND) {
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
  setActiveCommandAll.updateOptionStates(self.props.channel.id, obj);
};

export default ApplicationCommandManager;
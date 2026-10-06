// === Module 8963: executeCommand ===

// Module 8963 (executeCommand)
import MessageConstants from "MessageConstants" /* 4889 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import UploadUtils from "UploadUtils" /* 7256 */;
import FileUtils from "FileUtils" /* 7283 */;
import UploadLimits from "UploadLimits" /* 7308 */;
import MessageQueue from "MessageQueue" /* 7473 */;
import InteractionActionCreatorsAll from "InteractionActionCreators" /* 7811 */;
import UserActionCreatorsAll from "UserActionCreators" /* 7863 */;
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi" /* 8968 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import GuildStore from "GuildStore" /* 2074 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import UserStore from "UserStore" /* 1377 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7419 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const MessageQueueDefault = MessageQueue;
let c15, c16, ok;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
let obj = function _executeCommand() {
  obj = _asyncToGenerator(async function(command) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c6;
    let commandOrigin;
    let interactionLifecycleOptionsFactory;
    let untranslatedName;
    let value;
    if (c16 === 2) {
      c16 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (command === 1) {
        throw value;
      } else if (command === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let attachments;
        let context;
        let target_id;
        let maxSizeCallback;
        let sectionName;
        let source;
        let items;
        let commandAttachmentDraftType;
        let user;
        let focused;
        let closure_18;
        let closure_19;
        let closure_20;
        let closure_21;
        let closure_22;
        let closure_23;
        let closure_24;
        let upload;
        let length;
        let closure_27;
        let closure_28;
        let closure_29;
        let name2;
        let obj25;
        c16 = 2;
        let tmp4 = c15;
        if (0 === c15) {
          if (command === 1) {
            c16 = 3;
            throw value;
          } else if (command === 2) {
            c16 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            attachments = tmp;
            let closure_11 = tmp4;
            command = undefined;
            c1 = undefined;
            context = undefined;
            target_id = undefined;
            maxSizeCallback = undefined;
            commandOrigin = undefined;
            sectionName = undefined;
            interactionLifecycleOptionsFactory = undefined;
            source = undefined;
            ({ command: c0, optionValues: c1, context: c2, commandTargetId: c3, maxSizeCallback: c4, commandOrigin } = command);
            if (commandOrigin === undefined) {
              commandOrigin = ApplicationCommandTypes.CommandOrigin.CHAT;
            }
            ({ sectionName: c6, interactionLifecycleOptionsFactory } = command);
            if (interactionLifecycleOptionsFactory === undefined) {
              interactionLifecycleOptionsFactory = displayInteractionLifecycleInChat;
            }
            source = undefined;
            commandOrigin = undefined;
            items = undefined;
            attachments = undefined;
            commandAttachmentDraftType = undefined;
            user = undefined;
            focused = undefined;
            value = undefined;
            closure_18 = undefined;
            closure_19 = undefined;
            closure_20 = undefined;
            closure_21 = undefined;
            closure_22 = undefined;
            closure_23 = undefined;
            closure_24 = undefined;
            upload = undefined;
            length = undefined;
            closure_27 = undefined;
            closure_28 = undefined;
            closure_29 = undefined;
            name2 = undefined;
            obj25 = undefined;
            c15 = 1;
            c16 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === tmp4) {
            if (command === 1) {
              c16 = 3;
              throw value;
            } else if (command === 2) {
              c16 = 3;
              let obj12 = { value, done: true };
              return obj12;
            } else if (null != context.channel) {
              source = closure_140_10.getSource(context.channel.id);
              let closure_1 = source;
              if (source == null) {
                closure_1 = source;
              }
              source = closure_1;
              let commandOrigin1 = closure_140_10.getCommandOrigin(context.channel.id);
              let closure_2 = commandOrigin1;
              if (commandOrigin1 == null) {
                closure_2 = commandOrigin;
              }
              commandOrigin = closure_2;
              if (null == context.autocomplete) {
                let obj19 = closure_140_1(closure_140_3[10]);
                let obj13 = { type: "APPLICATION_COMMAND_USED", context, command, commandOrigin };
                let dispatchResult = obj19.dispatch(obj13);
              }
              let obj21 = closure_140_1(closure_140_3[11]);
              c15 = 2;
              c16 = 1;
              let obj14 = { value: obj21.unarchiveThreadIfNecessary(context.channel.id), done: false };
              return obj14;
            }
          } else {
            let obj34;
            if (2 === tmp4) {
              if (command === 1) {
                c16 = 3;
                throw value;
              } else if (command === 2) {
                c16 = 3;
                let obj16 = { value, done: true };
                return obj16;
              } else {
                let id2;
                items = [];
                attachments = [];
                let obj26 = closure_140_0(closure_140_3[12]);
                commandAttachmentDraftType = obj26.getCommandAttachmentDraftType(commandOrigin);
                if (null != command.options) {
                  let options = command.options;
                  target_id = options[Symbol.iterator]();
                  while (target_id !== undefined) {
                    let c13 = 1;
                    user = tmp13;
                    if (user.type !== closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.SUB_COMMAND) {
                      if (user.type !== closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
                        if (user.name in c1) {
                          let autocomplete = context.autocomplete;
                          let name;
                          if (autocomplete != null) {
                            name = autocomplete.name;
                          }
                          let tmp19 = name === user.name || undefined;
                          focused = tmp19;
                          value = undefined;
                          if (user.type !== closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.STRING) {
                            if (user.type !== closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.ATTACHMENT) {
                              let obj6 = closure_140_2(closure_140_3[14]);
                              length = obj6.filterEmpty(c1[user.name]);
                              let tmp102 = null != context.autocomplete;
                              let tmp100 = closure_140_1(closure_140_3[16]);
                              if (!tmp102) {
                                tmp102 = 1 === length.length;
                              }
                              let _HermesInternal2 = HermesInternal;
                              let tmp100Result = tmp100(tmp102, "Option \"" + user.name + "\" expects a single option type");
                              if (null != length[0]) {
                                let first = length[0];
                                let closure_6 = first;
                                if (first == null) {
                                  closure_6 = { type: "text", text: "" };
                                }
                                closure_18 = closure_6;
                                let type = user.type;
                                if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.CHANNEL === type) {
                                  if ("channelMention" === closure_18.type) {
                                    value = closure_18.channelId;
                                  } else if ("text" === closure_18.type) {
                                    let obj33 = closure_140_0(closure_140_3[12]);
                                    if (obj33.isSnowflake(closure_18.text)) {
                                      let str4 = closure_18.text;
                                      value = str4.trim();
                                    } else {
                                      let tmp290 = closure_140_0(closure_140_3[17]);
                                      let guild7 = context.guild;
                                      let id;
                                      let resolveApplicationCommandOption4 = tmp290.resolveApplicationCommandOption;
                                      let text4 = closure_18.text;
                                      if (guild7 != null) {
                                        id = guild7.id;
                                      }
                                      closure_19 = resolveApplicationCommandOption4(text4, id, context.channel.id);
                                      let type1;
                                      let tmp299 = closure_140_1(closure_140_3[16]);
                                      if (closure_19 != null) {
                                        type1 = closure_19.type;
                                      }
                                      let _HermesInternal7 = HermesInternal;
                                      let tmp299Result = tmp299("channelMention" === type1, "Failed to resolve " + closure_18.text);
                                      value = closure_19.channelId;
                                    }
                                  }
                                } else if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.ROLE === type) {
                                  if ("roleMention" === closure_18.type) {
                                    value = closure_18.roleId;
                                  } else if ("text" === closure_18.type) {
                                    let obj11 = closure_140_0(closure_140_3[12]);
                                    if (obj11.isSnowflake(closure_18.text)) {
                                      let str3 = closure_18.text;
                                      value = str3.trim();
                                    } else {
                                      let tmp264 = closure_140_0(closure_140_3[17]);
                                      let text3 = closure_18.text;
                                      let guild6 = context.guild;
                                      let id1;
                                      let resolveApplicationCommandOption3 = tmp264.resolveApplicationCommandOption;
                                      if (guild6 != null) {
                                        id1 = guild6.id;
                                      }
                                      closure_20 = resolveApplicationCommandOption3(text3, id1, context.channel.id, { allowUsers: false });
                                      let type2;
                                      let tmp276 = closure_140_1(closure_140_3[16]);
                                      if (closure_20 != null) {
                                        type2 = closure_20.type;
                                      }
                                      let _HermesInternal6 = HermesInternal;
                                      let tmp276Result = tmp276("roleMention" === type2, "Failed to resolve " + closure_18.text);
                                      value = closure_20.roleId;
                                    }
                                  } else {
                                    let tmp248 = "textMention" === closure_18.type;
                                    if (tmp248) {
                                      tmp248 = "@everyone" === closure_18.text;
                                    }
                                    if (tmp248) {
                                      let guild5 = context.guild;
                                      id2 = undefined;
                                      if (guild5 != null) {
                                        id2 = guild5.id;
                                      }
                                      value = id2;
                                    }
                                  }
                                } else if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.USER === type) {
                                  if ("userMention" === closure_18.type) {
                                    value = closure_18.userId;
                                  } else if ("text" === closure_18.type) {
                                    let obj32 = closure_140_0(closure_140_3[12]);
                                    if (obj32.isSnowflake(closure_18.text)) {
                                      let str2 = closure_18.text;
                                      value = str2.trim();
                                    } else {
                                      let tmp223 = closure_140_0(closure_140_3[17]);
                                      let text2 = closure_18.text;
                                      let guild4 = context.guild;
                                      let id3;
                                      let resolveApplicationCommandOption2 = tmp223.resolveApplicationCommandOption;
                                      if (guild4 != null) {
                                        id3 = guild4.id;
                                      }
                                      closure_21 = resolveApplicationCommandOption2(text2, id3, context.channel.id, { allowRoles: false });
                                      let type3;
                                      let tmp235 = closure_140_1(closure_140_3[16]);
                                      if (closure_21 != null) {
                                        type3 = closure_21.type;
                                      }
                                      let _HermesInternal5 = HermesInternal;
                                      let tmp235Result = tmp235("userMention" === type3, "Failed to resolve " + closure_18.text);
                                      value = closure_21.userId;
                                    }
                                  }
                                } else if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.MENTIONABLE === type) {
                                  if ("userMention" === closure_18.type) {
                                    value = closure_18.userId;
                                  } else if ("roleMention" === closure_18.type) {
                                    value = closure_18.roleId;
                                  } else {
                                    if ("textMention" === closure_18.type) {
                                      if ("@everyone" === closure_18.text) {
                                        let guild3 = context.guild;
                                        let id4;
                                        if (guild3 != null) {
                                          id4 = guild3.id;
                                        }
                                        value = id4;
                                      }
                                    }
                                    if ("text" === closure_18.type) {
                                      let obj31 = closure_140_0(closure_140_3[12]);
                                      if (obj31.isSnowflake(closure_18.text)) {
                                        let str = closure_18.text;
                                        value = str.trim();
                                      } else {
                                        let tmp183 = closure_140_0(closure_140_3[17]);
                                        let guild = context.guild;
                                        let id5;
                                        let resolveApplicationCommandOption = tmp183.resolveApplicationCommandOption;
                                        let text = closure_18.text;
                                        if (guild != null) {
                                          id5 = guild.id;
                                        }
                                        closure_22 = resolveApplicationCommandOption(text, id5, context.channel.id);
                                        let type4;
                                        if (closure_22 != null) {
                                          type4 = closure_22.type;
                                        }
                                        if ("userMention" === type4) {
                                          value = closure_22.userId;
                                        } else {
                                          let type5;
                                          if (closure_22 != null) {
                                            type5 = closure_22.type;
                                          }
                                          if ("roleMention" === type5) {
                                            value = closure_22.roleId;
                                          } else {
                                            let type6;
                                            if (closure_22 != null) {
                                              type6 = closure_22.type;
                                            }
                                            if ("textMention" === type6) {
                                              if ("@everyone" === closure_22.text) {
                                                let guild2 = context.guild;
                                                let id6;
                                                if (guild2 != null) {
                                                  id6 = guild2.id;
                                                }
                                                value = id6;
                                              }
                                            }
                                            let _HermesInternal4 = HermesInternal;
                                            let tmp198 = closure_140_1(closure_140_3[16]);
                                            let tmp198Result = tmp198(false, "Failed to resolve " + closure_18.text);
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.BOOLEAN === type) {
                                  if ("text" === closure_18.type) {
                                    let obj30 = closure_140_0(closure_140_3[15]);
                                    let str23 = closure_18.text;
                                    value = obj30.toChoiceBooleanValue(str23.trim());
                                  }
                                } else if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.INTEGER === type) {
                                  if ("text" === closure_18.type) {
                                    let str22 = closure_18.text;
                                    closure_23 = str22.trim();
                                    if (null != user.choices) {
                                      let obj10 = closure_140_0(closure_140_3[15]);
                                      value = obj10.findChoiceNumberValue(user.choices, closure_23);
                                    } else if (user.autocomplete) {
                                      if (null != context.autocomplete) {
                                        let tmp153 = focused;
                                        if (tmp153) {
                                          value = context.autocomplete.query;
                                        }
                                      }
                                      let obj9 = closure_140_0(closure_140_3[15]);
                                      let result = obj9.findAutocompleteChoiceNumberValue(context.channel.id, user.name, closure_23);
                                    }
                                    if (null == value) {
                                      let _Number2 = Number;
                                      let obj29 = closure_140_2(closure_140_3[14]);
                                      value = Number(obj29.normalizeNumericString(closure_140_6.locale, closure_23));
                                    }
                                  }
                                } else if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.NUMBER === type) {
                                  if ("text" === closure_18.type) {
                                    let str21 = closure_18.text;
                                    closure_24 = str21.trim();
                                    if (null != user.choices) {
                                      let obj8 = closure_140_0(closure_140_3[15]);
                                      value = obj8.findChoiceNumberValue(user.choices, closure_24);
                                    } else if (user.autocomplete) {
                                      if (null != context.autocomplete) {
                                        let tmp129 = focused;
                                        if (tmp129) {
                                          value = context.autocomplete.query;
                                        }
                                      }
                                      let obj7 = closure_140_0(closure_140_3[15]);
                                      let result1 = obj7.findAutocompleteChoiceNumberValue(context.channel.id, user.name, closure_24);
                                    }
                                    if (null == value) {
                                      let _Number = Number;
                                      let obj28 = closure_140_2(closure_140_3[14]);
                                      value = Number(obj28.normalizeNumericString(closure_140_6.locale, closure_24));
                                    }
                                  }
                                } else {
                                  let _Error = Error;
                                  let _HermesInternal3 = HermesInternal;
                                  let self = this;
                                  let self2 = this;
                                  let error = new Error("Unsupported option type: " + user.type);
                                  throw error;
                                }
                                let tmp310 = "" !== value;
                                if (!tmp310) {
                                  tmp310 = null == context.autocomplete;
                                }
                                if (!tmp310) {
                                  tmp310 = focused;
                                }
                                if (tmp310) {
                                  let tmp319 = null != context.autocomplete;
                                  let tmp317 = closure_140_1(closure_140_3[16]);
                                  if (!tmp319) {
                                    tmp319 = null != value;
                                  }
                                  let _HermesInternal8 = HermesInternal;
                                  let tmp317Result = tmp317(tmp319, "Unexpected value for option \"" + user.name + "\"");
                                  if (null != value) {
                                    let obj17 = { type: user.type, name: user.name, value, focused };
                                    let arr = items.push(obj17);
                                  }
                                }
                              }
                            } else {
                              if (null != context.autocomplete) {
                                c13 = 0;
                                continue;
                              } else {
                                upload = closure_140_8.getUpload(context.channel.id, user.name, commandAttachmentDraftType);
                                if (null == upload) {
                                  c13 = 0;
                                  continue;
                                } else {
                                  length = attachments.length;
                                  let arr5 = attachments.push(upload);
                                  let obj18 = { type: user.type, name: user.name, value: length, focused };
                                  let arr6 = items.push(obj18);
                                }
                              }
                              continue;
                            }
                            continue;
                          } else {
                            let obj27 = closure_140_2(closure_140_3[14]);
                            let str20 = obj27.getOptionalString(c1, user.name);
                            let trimmed;
                            if (str20 != null) {
                              trimmed = str20.trim();
                            }
                            let c5 = trimmed;
                            if (trimmed == null) {
                              c5 = "";
                            }
                            closure_27 = c5;
                            if (null != user.choices) {
                              let obj3 = closure_140_0(closure_140_3[15]);
                              value = obj3.findChoiceStringValue(user.choices, closure_27);
                            } else if (user.autocomplete) {
                              if (null != context.autocomplete) {
                                let tmp32 = focused;
                                if (tmp32) {
                                  value = context.autocomplete.query;
                                }
                              }
                              let obj2 = closure_140_0(closure_140_3[15]);
                              let result2 = obj2.findAutocompleteChoiceStringValue(context.channel.id, user.name, closure_27);
                            }
                            if (null == value) {
                              value = closure_27;
                            }
                            if ("" === value) {
                              if (null != context.autocomplete) {
                                let tmp57 = focused;
                                if (!tmp57) {
                                  c13 = 0;
                                  continue;
                                }
                                continue;
                              }
                            }
                            let tmp64 = null != context.autocomplete;
                            let tmp62 = closure_140_1(closure_140_3[16]);
                            if (!tmp64) {
                              tmp64 = null != value;
                            }
                            let _HermesInternal = HermesInternal;
                            let tmp62Result = tmp62(tmp64, "Option \"" + user.name + "\" expects a value");
                            let obj20 = { type: user.type, name: user.name, value, focused };
                            let arr7 = items.push(obj20);
                          }
                        }
                        continue;
                      }
                    }
                    c13 = 0;
                    continue;
                  }
                }
                if (null != command.subCommandPath) {
                  closure_28 = command.subCommandPath.length - 1;
                  if (closure_28 >= 0) {
                    do {
                      closure_29 = command.subCommandPath[closure_28];
                      name2 = closure_29.name;
                      let obj22 = { type: closure_29.type, name: name2, options: items };
                      items = [obj22];
                      closure_28 = closure_28 - 1;
                    } while (closure_28 >= 0);
                  }
                }
                if (null != command.execute) {
                  let tmp380 = closure_140_1(closure_140_3[18]);
                  let obj23 = { command_id: command.id, application_id: command.applicationId, command_type: command.type, location: closure_140_21(commandOrigin), source };
                  let trackWithMetadata = tmp380.trackWithMetadata;
                  let APPLICATION_COMMAND_USED = closure_140_12.APPLICATION_COMMAND_USED;
                  let trackWithMetadataResult = trackWithMetadata(APPLICATION_COMMAND_USED, obj23);
                  c16 = 3;
                  let obj24 = { value: command.execute(items, context), done: true };
                  return obj24;
                } else if (command.inputType !== closure_140_0(closure_140_3[9]).ApplicationCommandInputType.BUILT_IN) {
                  if (command.inputType !== closure_140_0(closure_140_3[9]).ApplicationCommandInputType.BUILT_IN_TEXT) {
                    if (command.inputType !== closure_140_0(closure_140_3[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION) {
                      obj25 = { version: command.version, id: id2, guild_id: command.guildId, name: untranslatedName, type: command.type, options: items, application_command: command.rootCommand };
                      let rootCommand2 = command.rootCommand;
                      let id7;
                      if (rootCommand2 != null) {
                        id7 = rootCommand2.id;
                      }
                      id2 = id7;
                      if (id7 == null) {
                        id2 = command.id;
                      }
                      let rootCommand = command.rootCommand;
                      let name1;
                      if (rootCommand != null) {
                        name1 = rootCommand.name;
                      }
                      untranslatedName = name1;
                      if (name1 == null) {
                        untranslatedName = command.untranslatedName;
                      }
                      if (null != target_id) {
                        obj25.target_id = target_id;
                      }
                      if (null != context.autocomplete) {
                        let obj15 = closure_140_0(closure_140_3[19]);
                        let performAutocompleteResult = obj15.performAutocomplete(command, context, obj25);
                      } else {
                        let obj35 = closure_140_1(closure_140_3[20]);
                        let clearAllResult = obj35.clearAll(context.channel.id, commandAttachmentDraftType);
                        commandOrigin = closure_140_18;
                        obj34 = {
                          applicationId: command.applicationId,
                          data: obj25,
                          context,
                          attachments,
                          maxSizeCallback,
                          onMessageSuccess() {
                                                const values = Object.values(closure_1_1);
                                                const flatMapResult = values.flatMap((arr) => {
                                                  let customEmojiById;
                                                  const mapped = arr.map(function(type) {
                                                    let emoji;
                                                    let items;
                                                    if ("emoji" === type.type) {
                                                      const name = type.name;
                                                      obj = { names: items, surrogates: "", unicodeVersion: 6 };
                                                      const Emoji = closure_1_0(closure_1_3[21]).Emoji;
                                                      items = [name.replaceAll(":", "")];
                                                      const self = this;
                                                      const self2 = this;
                                                      emoji = new Emoji(obj);
                                                    } else {
                                                      emoji = null;
                                                      if ("customEmoji" === type.type) {
                                                        emoji = customEmojiById.getCustomEmojiById(type.emojiId);
                                                      }
                                                    }
                                                    return emoji;
                                                  });
                                                  return mapped.filter(closure_1_0(closure_1_3[22]).isNotNullish);
                                                });
                                                if (flatMapResult.length > 0) {
                                                  obj = { type: "EMOJI_TRACK_USAGE", emojiUsed: flatMapResult };
                                                  const obj2 = closure_1(target_id[10]);
                                                  obj2.dispatch(obj);
                                                }
                                              },
                          analytics_location: closure_140_21(commandOrigin),
                          sectionName,
                          source
                        };
                        c15 = 4;
                        c16 = 1;
                        let obj36 = { value: interactionLifecycleOptionsFactory(command, context, obj25), done: false };
                        return obj36;
                      }
                    }
                  }
                }
              }
            } else if (3 === tmp4) {
              c13 = 0;
              target_id.return();
              throw closure_1_14;
            } else if (command === 1) {
              c16 = 3;
              throw value;
            } else if (command === 2) {
              c16 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              obj34.interactionLifecycleOptions = value;
              let tmp7 = commandOrigin(obj34);
            }
          }
          c16 = 3;
          return { value: "IconComponent", done: null };
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _retryCommandMessage() {
  obj = _asyncToGenerator(async (arg0, channel, arg2) => {
    const commandType = arg0;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else if (commandType.isCommandType()) {
              if (null != commandType.interactionData) {
                if (null != closure_2.command) {
                  const obj4 = { channel, guild };
                  guild = null;
                  if (null != channel.guild_id) {
                    guild = guild.getGuild(channel.guild_id);
                  }
                  closure_4 = enqueueCommandInteraction;
                  obj5 = { applicationId: closure_2.command.applicationId, data: commandType.interactionData, context: obj4 };
                  c5 = 1;
                  c6 = 1;
                  const obj6 = { value: displayInteractionLifecycleInChat(closure_2.command, obj4, commandType.interactionData), done: false };
                  return obj6;
                }
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            obj5.interactionLifecycleOptions = value;
            closure_4(obj5);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp12) {
          c6 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
function enqueueCommandInteraction(interactionLifecycleOptions) {
  let applicationId;
  let attachments;
  let context;
  let maxSizeCallback;
  let nonce;
  let obj5;
  let onMessageSuccess;
  let tmp;
  function stageAttachments() {
    return obj(...arguments);
  }
  ({ applicationId, context, attachments, maxSizeCallback, onMessageSuccess } = interactionLifecycleOptions);
  interactionLifecycleOptions = interactionLifecycleOptions.interactionLifecycleOptions;
  let message;
  if (null != context.channel) {
    const guild = context.guild;
    const id = context.channel.id;
    let id1;
    if (guild != null) {
      id1 = guild.id;
    }
    message = { applicationId, channelId: id, guildId: id1, data: tmp, nonce, attachments, maxSizeCallback, analytics_location: tmp2, sectionName: tmp3, source: tmp4 };
    nonce = interactionLifecycleOptions.nonce;
    if (nonce == null) {
      const obj2 = onMessageSuccess(7262);
      nonce = obj2.createNonce();
    }
    const obj4 = { messageId: null, onCreate: null, onSuccess: null, onFailure: null, data: obj5 };
    ({ messageId: obj3.messageId, onCreate: obj3.onCreate, onSuccess: obj3.onSuccess, onFailure: obj3.onFailure } = interactionLifecycleOptions);
    obj5 = { interactionType: onMessageSuccess(5126).InteractionTypes.APPLICATION_COMMAND, applicationId, channelId: id };
    const addQueued = InteractionActionCreatorsAll.addQueued;
    const nonce2 = message.nonce;
    InteractionActionCreatorsAll;
    addQueued(nonce2, obj4);
    if (null != attachments) {
      if (attachments.length > 0) {
        const promise = stageAttachments(attachments, message.nonce, id1, maxSizeCallback);
        promise.then((result) => {
          const tmp = result;
          if (tmp) {
            let closure_0 = message;
            let closure_1 = onMessageSuccess;
            message = { type: MessageQueue.MessageDataType.COMMAND, message };
            const enqueue = MessageQueueDefault.enqueue;
            MessageQueueDefault;
            enqueue(message, (ok) => {
              let applicationId;
              let channelId;
              let guildId;
              let nonce;
              ({ nonce, applicationId, channelId, guildId } = closure_0);
              const handleInteractionResponse = onMessageSuccess(closure_2_3[27]).handleInteractionResponse;
              onMessageSuccess(closure_2_3[27]);
              if (guildId == null) {
                guildId = null;
              }
              const result = handleInteractionResponse(nonce, ok, applicationId, channelId, guildId);
              ok = ok.ok && null != closure_1;
              if (ok) {
                closure_1();
              }
            });
          }
        });
      }
    }
    const obj8 = { type: onMessageSuccess(7473).MessageDataType.COMMAND, message };
    let enqueue = message(7473).enqueue;
    message(7473);
    enqueue(obj8, (ok) => {
      let applicationId;
      let channelId;
      let guildId;
      let nonce;
      ({ nonce, applicationId, channelId, guildId } = closure_0);
      const handleInteractionResponse = onMessageSuccess(closure_2_3[27]).handleInteractionResponse;
      onMessageSuccess(closure_2_3[27]);
      if (guildId == null) {
        guildId = null;
      }
      const result = handleInteractionResponse(nonce, ok, applicationId, channelId, guildId);
      ok = ok.ok && null != closure_1;
      if (ok) {
        closure_1();
      }
    });
  }
}
function displayInteractionLifecycleInChat() {
  return obj(...arguments);
}
obj = function _displayInteractionLifecycleInChat() {
  obj = _asyncToGenerator(async (command, arg1, interaction_data) => {
    let closure_5;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj13;
      let obj7;
      let tmp59Result;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let user;
          let cachedApplicationSection;
          let bot;
          let obj12;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              user = tmp;
              cachedApplicationSection = undefined;
              bot = undefined;
              obj12 = undefined;
              if (null == closure_1.channel) {
                c8 = 3;
                let obj4 = { value: {}, done: true };
                return obj4;
              } else {
                const obj5 = { channel: tmp57.channel, type: "channel" };
                const obj17 = ApplicationCommandQueryApiAll;
                cachedApplicationSection = obj17.getCachedApplicationSection(obj5, tmp58.type, tmp56.applicationId);
                if (null == cachedApplicationSection) {
                  c8 = 3;
                  return { value: {}, done: true };
                } else {
                  const application = cachedApplicationSection.application;
                  bot = undefined;
                  if (application != null) {
                    bot = application.bot;
                  }
                  if (null == bot) {
                    if (null != cachedApplicationSection.botId) {
                      c6 = 1;
                      c7 = 2;
                      c8 = 1;
                      const obj9 = { value: tmp59Result.getUser(cachedApplicationSection.botId), done: false };
                      tmp59Result = UserActionCreatorsAll;
                      return obj9;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c6 = 0;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
          }
          let tmp7 = user;
          const obj10 = { channelId: closure_1.channel.id, content: "", type, author: obj11 };
          type = interaction_data.type;
          const tmp10 = closure_133_1(closure_133_3[30]);
          if (type === closure_133_0(closure_133_3[13]).ApplicationCommandType.CHAT) {
            type = closure_133_13.CHAT_INPUT_COMMAND;
          } else {
            type = closure_133_13.CONTEXT_MENU_COMMAND;
          }
          obj11 = bot;
          if (bot == null) {
            obj11 = { id: cachedApplicationSection.id, username: cachedApplicationSection.name, discriminator: closure_133_14, avatar: null, bot: true };
            type = closure_133_14;
          }
          obj12 = { application: cachedApplicationSection.application, interaction: obj13, interaction_data };
          const merged = Object.assign(tmp10(obj10));
          obj13 = { id: interaction_data.id, name: interaction_data.name, name_localized: command.displayName, type: closure_133_0(closure_133_3[25]).InteractionTypes.APPLICATION_COMMAND, user: obj7.userRecordToServer(closure_133_9.getCurrentUser()) };
          obj7 = closure_133_0(closure_133_3[30]);
          const obj14 = { applicationId: command.applicationId, command };
          const obj8 = closure_133_1(closure_133_3[31]);
          obj8.receiveMessage(closure_1.channel.id, obj12, true, obj14);
          type = {
            onCreate(id) {
                  if (null != user.interaction) {
                    user.interaction.id = id;
                  }
                },
            onSuccess() {

                },
            onFailure(code, arg1, arg2, reason) {
                  if (null != closure_1_1.channel) {
                    let result = arg1;
                    const tmp2 = null == arg1 && null != code;
                    if (tmp2) {
                      obj = closure_1(obj11[31]);
                      obj.sendClydeError(closure_1_1.channel.id, code);
                    }
                    const tmp7 = null == result && null != reason;
                    if (tmp7) {
                      const obj2 = closure_0(obj11[27]);
                      result = obj2.interactionCallbackErrorReason(reason, closure_1_0.applicationId);
                    }
                    const obj4 = { type: "MESSAGE_SEND_FAILED", messageId: user.id, channelId: closure_1_1.channel.id, reason: result };
                    const obj3 = closure_1(obj11[10]);
                    obj3.dispatch(obj4);
                  }
                }
          };
          Object.defineProperty(type, "messageId", { get: () => user.id, set: undefined });
          Object.defineProperty(type, "nonce", { get: () => user.id, set: undefined });
          c8 = 3;
          return { value: type, done: true };
        } catch (tmp50) {
          if (0 === c6) {
            c8 = 3;
            throw tmp50;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function getAnalyticsLocationFromCommandOrigin(arg0) {
  if (ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER;
  } else if (ApplicationCommandTypes.CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
  } else if (ApplicationCommandTypes.CommandOrigin.IMAGE_RECS_MENU === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.IMAGE_RECS_MENU;
  } else if (ApplicationCommandTypes.CommandOrigin.IMAGE_RECS_SUBMENU === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.IMAGE_RECS_SUBMENU;
  } else if (ApplicationCommandTypes.CommandOrigin.ACTIVITY_INSTANCE_EMBED === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.ACTIVITY_INSTANCE_EMBED;
  } else if (ApplicationCommandTypes.CommandOrigin.ACTIVITY_BOOKMARK_EMBED === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.ACTIVITY_BOOKMARK_EMBED;
  } else if (ApplicationCommandTypes.CommandOrigin.MINI_SHELF === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.ACTIVITIES_MINI_SHELF;
  } else if (ApplicationCommandTypes.CommandOrigin.VOICE_TILE_ACTIVITY_SUGGESTIONS === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.VC_TILE_ACTIVITY_SUGGESTION;
  } else if (ApplicationCommandTypes.CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON === arg0) {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
  } else {
    return ApplicationCommandTypes.ApplicationCommandTriggerLocations.SLASH_UI;
  }
}
function getMaxAndTotalFileSize() {
  return obj(...arguments);
}
obj = function _getMaxAndTotalFileSize() {
  obj = _asyncToGenerator(async (arg0, totalSize) => {
    let closure_0 = arg0;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async (arg0, value) => {
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let closure_4;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_5 = tmp;
              closure_0 = totalSize;
              let c3;
              closure_4 = undefined;
              totalSize = 0;
              closure_3 = closure_0;
              largestUploadedFileSize = closure_0[Symbol.iterator]();
              if (largestUploadedFileSize === undefined) {
                let obj4 = { totalSize, largestUploadedFileSize };
                c10 = 3;
                let obj5 = { value: obj4, done: true };
                return obj5;
              } else {
                c8 = 1;
                c3 = tmp11;
                let obj7 = c3;
                if (closure_0) {
                  let currentSize = obj7.currentSize;
                  c4 = currentSize;
                  if (currentSize == null) {
                    c4 = 0;
                  }
                  closure_6 = c4;
                } else {
                  c9 = 2;
                  c10 = 1;
                  let obj6 = { value: obj7.getSize(), done: false };
                  return obj6;
                }
              }
            }
          } else if (1 === tmp4) {
            c8 = 0;
            largestUploadedFileSize.return();
            throw closure_1_7;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            largestUploadedFileSize.return();
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_6 = value;
          }
          closure_4 = closure_6;
          if (closure_4 > largestUploadedFileSize) {
            largestUploadedFileSize = closure_4;
          }
          totalSize = totalSize + closure_4;
          c8 = 0;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _stageAttachments() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_5;
    let largestUploadedFileSize;
    let setFailed;
    let totalSize;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    let closure_2 = closure_3;
    function handleUploadsTooLarge(largestUploadedFileSize) {
      let obj2;
      if (closure_2 != null) {
        tmp(closure_3, largestUploadedFileSize);
      }
      setFailed = closure_2_2(closure_2_3[24]).setFailed;
      const ENTITY_TOO_LARGE = constants.ENTITY_TOO_LARGE;
      closure_2_2(closure_2_3[24]);
      const intl = closure_2_0(closure_2_3[35]).intl;
      const formatToPlainString = intl.formatToPlainString;
      obj = { maxSize: obj2.sizeString(closure_3) };
      const fxEKdS = closure_2_0(closure_2_3[35]).t.fxEKdS;
      obj2 = closure_2_0(closure_2_3[33]);
      setFailed(closure_1, ENTITY_TOO_LARGE, formatToPlainString(fxEKdS, obj));
    }
    const getEffectiveUploadLimit = UploadLimits.getEffectiveUploadLimit;
    const obj11 = FileUtils;
    closure_3 = getEffectiveUploadLimit(obj11.maxFileSize(closure_2));
    const obj12 = UploadUtils;
    const maxTotalAttachmentSize = obj12.getMaxTotalAttachmentSize({ location: "executeCommand.stageAttachments" });
    await getMaxAndTotalFileSize(closure_0, false);
    if (2 === c7) {
      let c6 = 0;
      setFailed = closure_133_2(closure_133_3[24]).setFailed;
      const tmp15 = closure_133_2(closure_133_3[24]);
      let intl = closure_133_0(closure_133_3[35]).intl;
      const obj7 = { count: closure_0.length };
      const setFailedResult = setFailed(closure_1, undefined, intl.formatToPlainString(closure_133_0(closure_133_3[35]).t["9h1/1p"], obj7));
    } else if (3 === c7) {
      if (arg0 === 1) {
        let c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        let closure_9 = value;
        totalSize = closure_9.totalSize;
        largestUploadedFileSize = closure_9.largestUploadedFileSize;
        setFailed = closure_0;
        let someResult = closure_0.some((error) => error.error === constants.ENTITY_TOO_LARGE);
        if (!someResult) {
          setFailed = totalSize;
          someResult = totalSize > maxTotalAttachmentSize;
        }
        let flag = !someResult;
        if (!flag) {
          setFailed = handleUploadsTooLarge;
          handleUploadsTooLarge(largestUploadedFileSize);
          flag = false;
        }
        c8 = 3;
        const obj9 = { value: flag, done: true };
        return obj9;
      }
    } else if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 0;
      c8 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      c6 = 0;
    }
    await closure_133_22(closure_0, true);
    let closure_6 = value;
    totalSize = closure_6.totalSize;
    largestUploadedFileSize = closure_6.largestUploadedFileSize;
    const _Math = Math;
    setFailed = closure_3;
    if (largestUploadedFileSize <= Math.max(closure_3, closure_133_15)) {
      if (totalSize <= maxTotalAttachmentSize) {
        c6 = 1;
        setFailed = closure_133_1;
        c7 = 4;
        c8 = 1;
        const obj6 = { value: closure_133_1(closure_133_3[36])(closure_0), done: false };
        return obj6;
      }
    }
    handleUploadsTooLarge(largestUploadedFileSize);
    return false;
  });
  return obj(...arguments);
};
({ AbortCodes: unpackModuleId, AnalyticEvents: closure_12, MessageTypes: map1, NON_USER_BOT_DISCRIMINATOR: closure_14 } = Constants);
let closure_15 = MessageConstants.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
let result = size.fileFinishedImporting("modules/application_commands/executeCommand.tsx");

export default function executeCommand() {
  return obj(...arguments);
};
export const retryCommandMessage = function retryCommandMessage() {
  return obj(...arguments);
};
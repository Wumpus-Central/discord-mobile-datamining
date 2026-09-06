// discord_app/modules/application_commands/executeCommand.tsx
import UploadUtils from "../../utils/UploadUtils.tsx";
import FileUtils from "../../utils/FileUtils.tsx";
import ApplicationCommandTypes from "ApplicationCommandTypes.tsx";
import MessageQueue from "../../lib/MessageQueue.tsx";
import InteractionActionCreatorsAll from "../interactions/InteractionActionCreators.tsx";
import UserActionCreatorsAll from "../../actions/UserActionCreators.tsx";
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import EmojiStore from "../emojis/EmojiStore.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UploadAttachmentStore from "../../stores/UploadAttachmentStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ApplicationCommandStore from "ApplicationCommandStore.tsx";

require = fn;
let closure_16 = async function _executeCommand(arg0) {
  let source = arg0;
  c15 = 0;
  c16 = 0;
  c13 = 0;
  let iter = (async (arg0) => {
    if (c16 === 2) {
      c16 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c16 = 2;
        let tmp4 = c15;
        if (0 === c15) {
          if (arg0 === 1) {
            c16 = 3;
            throw value;
          } else if (arg0 === 2) {
            c16 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_12 = tmp;
            closure_11 = tmp4;
            closure_139_0 = undefined;
            closure_139_1 = undefined;
            closure_139_2 = undefined;
            closure_139_3 = undefined;
            closure_139_4 = undefined;
            closure_139_5 = undefined;
            closure_139_6 = undefined;
            closure_139_7 = undefined;
            let source2;
            ({
              command: closure_139_0,
              optionValues: closure_139_1,
              context: closure_139_2,
              commandTargetId: closure_139_3,
              maxSizeCallback: closure_139_4,
              commandOrigin,
            } = source);
            if (commandOrigin === undefined) {
              commandOrigin = ApplicationCommandTypes.CommandOrigin.CHAT;
            }
            closure_139_5 = commandOrigin;
            ({ sectionName: closure_139_6, interactionLifecycleOptionsFactory } = source);
            if (interactionLifecycleOptionsFactory === undefined) {
              interactionLifecycleOptionsFactory = displayInteractionLifecycleInChat;
            }
            closure_139_7 = interactionLifecycleOptionsFactory;
            source2 = source.source;
            closure_139_9 = undefined;
            closure_139_10 = undefined;
            closure_139_11 = undefined;
            closure_139_12 = undefined;
            let commandAttachmentDraftType;
            closure_139_14 = undefined;
            closure_139_15 = undefined;
            let channelId;
            closure_139_17 = undefined;
            closure_139_18 = undefined;
            closure_139_19 = undefined;
            closure_139_20 = undefined;
            closure_139_21 = undefined;
            closure_139_22 = undefined;
            closure_139_23 = undefined;
            closure_139_24 = undefined;
            let upload;
            closure_139_26 = undefined;
            closure_139_27 = undefined;
            closure_139_28 = undefined;
            closure_139_29 = undefined;
            let name2;
            closure_139_31 = undefined;
            c15 = 1;
            c16 = 1;
            return { value: "PX_16", done: true };
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c16 = 3;
              throw value;
            } else if (arg0 === 2) {
              c16 = 3;
              let obj1 = { value, done: true };
              return obj1;
            } else if (null != closure_139_2.channel) {
              source = closure_140_10.getSource(closure_139_2.channel.id);
              closure_1 = source;
              if (source == null) {
                closure_1 = source2;
              }
              closure_139_9 = closure_1;
              commandOrigin = closure_140_10.getCommandOrigin(closure_139_2.channel.id);
              closure_2 = commandOrigin;
              if (commandOrigin == null) {
                closure_2 = closure_139_5;
              }
              closure_139_10 = closure_2;
              if (null == closure_139_2.autocomplete) {
                let obj24 = closure_140_1(closure_140_3[10]);
                let obj2 = { type: "APPLICATION_COMMAND_USED", context: null, command: null, commandOrigin: null };
                obj2.context = closure_139_2;
                obj2.command = closure_139_0;
                obj2.commandOrigin = closure_139_10;
                let dispatchResult = obj24.dispatch(obj2);
              }
              let obj26 = closure_140_1(closure_140_3[11]);
              c15 = 2;
              c16 = 1;
              let obj3 = { value: obj26.unarchiveThreadIfNecessary(closure_139_2.channel.id), done: false };
              return obj3;
            } else {
              c16 = 3;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c16 = 3;
              throw value;
            } else if (arg0 === 2) {
              c16 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_139_11 = [];
              closure_139_12 = [];
              let obj31 = closure_140_0(closure_140_3[12]);
              commandAttachmentDraftType = obj31.getCommandAttachmentDraftType(closure_139_10);
              if (null != closure_139_0.options) {
                options = closure_139_0.options;
                dependencyMap = options[Symbol.iterator]();
                while (dependencyMap !== undefined) {
                  c13 = 1;
                  closure_139_14 = tmp13;
                  if (
                    closure_139_14.type !== closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.SUB_COMMAND
                  ) {
                    if (
                      closure_139_14.type !==
                      closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.SUB_COMMAND_GROUP
                    ) {
                      if (closure_139_14.name in closure_139_1) {
                        let autocomplete = closure_139_2.autocomplete;
                        let name;
                        if (autocomplete != null) {
                          name = autocomplete.name;
                        }
                        let tmp19 = name === closure_139_14.name || undefined;
                        closure_139_15 = tmp19;
                        channelId = undefined;
                        if (
                          closure_139_14.type !== closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.STRING
                        ) {
                          if (
                            closure_139_14.type !==
                            closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.ATTACHMENT
                          ) {
                            let obj5 = closure_140_2(closure_140_3[14]);
                            closure_139_17 = obj5.filterEmpty(closure_139_1[closure_139_14.name]);
                            let tmp102 = null != closure_139_2.autocomplete;
                            let tmp100 = closure_140_1(closure_140_3[16]);
                            if (!tmp102) {
                              tmp102 = 1 === closure_139_17.length;
                            }
                            let _HermesInternal2 = HermesInternal;
                            let tmp100Result = tmp100(
                              tmp102,
                              'Option "' + closure_139_14.name + '" expects a single option type',
                            );
                            if (null != closure_139_17[0]) {
                              let first = closure_139_17[0];
                              closure_6 = first;
                              if (first == null) {
                                closure_6 = { type: "text", text: "" };
                              }
                              closure_139_18 = closure_6;
                              let type = closure_139_14.type;
                              if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.CHANNEL === type) {
                                if ("channelMention" === closure_139_18.type) {
                                  channelId = closure_139_18.channelId;
                                } else if ("text" === closure_139_18.type) {
                                  let obj38 = closure_140_0(closure_140_3[12]);
                                  if (obj38.isSnowflake(closure_139_18.text)) {
                                    let str4 = closure_139_18.text;
                                    channelId = str4.trim();
                                  } else {
                                    let obj15 = closure_140_0(closure_140_3[17]);
                                    let guild7 = closure_139_2.guild;
                                    id = undefined;
                                    if (guild7 != null) {
                                      id = guild7.id;
                                    }
                                    closure_139_19 = obj15.resolveApplicationCommandOption(
                                      closure_139_18.text,
                                      id,
                                      closure_139_2.channel.id,
                                    );
                                    type = undefined;
                                    let tmp297 = closure_140_1(closure_140_3[16]);
                                    if (closure_139_19 != null) {
                                      type = closure_139_19.type;
                                    }
                                    let _HermesInternal7 = HermesInternal;
                                    let tmp297Result = tmp297(
                                      "channelMention" === type,
                                      "Failed to resolve " + closure_139_18.text,
                                    );
                                    channelId = closure_139_19.channelId;
                                  }
                                }
                              } else if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.ROLE === type) {
                                if ("roleMention" === closure_139_18.type) {
                                  channelId = closure_139_18.roleId;
                                } else if ("text" === closure_139_18.type) {
                                  obj12 = closure_140_0(closure_140_3[12]);
                                  if (obj12.isSnowflake(closure_139_18.text)) {
                                    let str3 = closure_139_18.text;
                                    channelId = str3.trim();
                                  } else {
                                    let obj13 = closure_140_0(closure_140_3[17]);
                                    let text2 = closure_139_18.text;
                                    let guild6 = closure_139_2.guild;
                                    let id1;
                                    if (guild6 != null) {
                                      id1 = guild6.id;
                                    }
                                    closure_139_20 = obj13.resolveApplicationCommandOption(
                                      text2,
                                      id1,
                                      closure_139_2.channel.id,
                                      { allowUsers: false },
                                    );
                                    let type1;
                                    let tmp275 = closure_140_1(closure_140_3[16]);
                                    if (closure_139_20 != null) {
                                      type1 = closure_139_20.type;
                                    }
                                    let _HermesInternal6 = HermesInternal;
                                    let tmp275Result = tmp275(
                                      "roleMention" === type1,
                                      "Failed to resolve " + closure_139_18.text,
                                    );
                                    channelId = closure_139_20.roleId;
                                  }
                                } else {
                                  let tmp248 = "textMention" === closure_139_18.type;
                                  if (tmp248) {
                                    tmp248 = "@everyone" === closure_139_18.text;
                                  }
                                  if (tmp248) {
                                    let guild5 = closure_139_2.guild;
                                    let id2;
                                    if (guild5 != null) {
                                      id2 = guild5.id;
                                    }
                                    channelId = id2;
                                  }
                                }
                              } else if (closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.USER === type) {
                                if ("userMention" === closure_139_18.type) {
                                  channelId = closure_139_18.userId;
                                } else if ("text" === closure_139_18.type) {
                                  let obj37 = closure_140_0(closure_140_3[12]);
                                  if (obj37.isSnowflake(closure_139_18.text)) {
                                    let str2 = closure_139_18.text;
                                    channelId = str2.trim();
                                  } else {
                                    let obj11 = closure_140_0(closure_140_3[17]);
                                    let text = closure_139_18.text;
                                    let guild4 = closure_139_2.guild;
                                    let id3;
                                    if (guild4 != null) {
                                      id3 = guild4.id;
                                    }
                                    closure_139_21 = obj11.resolveApplicationCommandOption(
                                      text,
                                      id3,
                                      closure_139_2.channel.id,
                                      { allowRoles: false },
                                    );
                                    let type2;
                                    let tmp235 = closure_140_1(closure_140_3[16]);
                                    if (closure_139_21 != null) {
                                      type2 = closure_139_21.type;
                                    }
                                    let _HermesInternal5 = HermesInternal;
                                    let tmp235Result = tmp235(
                                      "userMention" === type2,
                                      "Failed to resolve " + closure_139_18.text,
                                    );
                                    channelId = closure_139_21.userId;
                                  }
                                }
                              } else if (
                                closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.MENTIONABLE === type
                              ) {
                                if ("userMention" === closure_139_18.type) {
                                  channelId = closure_139_18.userId;
                                } else if ("roleMention" === closure_139_18.type) {
                                  channelId = closure_139_18.roleId;
                                } else {
                                  if ("textMention" === closure_139_18.type) {
                                    if ("@everyone" === closure_139_18.text) {
                                      let guild3 = closure_139_2.guild;
                                      let id4;
                                      if (guild3 != null) {
                                        id4 = guild3.id;
                                      }
                                      channelId = id4;
                                    }
                                  }
                                  if ("text" === closure_139_18.type) {
                                    let obj36 = closure_140_0(closure_140_3[12]);
                                    if (obj36.isSnowflake(closure_139_18.text)) {
                                      let str = closure_139_18.text;
                                      channelId = str.trim();
                                    } else {
                                      let obj10 = closure_140_0(closure_140_3[17]);
                                      let guild = closure_139_2.guild;
                                      let id5;
                                      if (guild != null) {
                                        id5 = guild.id;
                                      }
                                      closure_139_22 = obj10.resolveApplicationCommandOption(
                                        closure_139_18.text,
                                        id5,
                                        closure_139_2.channel.id,
                                      );
                                      let type3;
                                      if (closure_139_22 != null) {
                                        type3 = closure_139_22.type;
                                      }
                                      if ("userMention" === type3) {
                                        channelId = closure_139_22.userId;
                                      } else {
                                        let type4;
                                        if (closure_139_22 != null) {
                                          type4 = closure_139_22.type;
                                        }
                                        if ("roleMention" === type4) {
                                          channelId = closure_139_22.roleId;
                                        } else {
                                          let type5;
                                          if (closure_139_22 != null) {
                                            type5 = closure_139_22.type;
                                          }
                                          if ("textMention" === type5) {
                                            if ("@everyone" === closure_139_22.text) {
                                              let guild2 = closure_139_2.guild;
                                              let id6;
                                              if (guild2 != null) {
                                                id6 = guild2.id;
                                              }
                                              channelId = id6;
                                            }
                                          }
                                          let _HermesInternal4 = HermesInternal;
                                          let tmp199 = closure_140_1(closure_140_3[16]);
                                          let tmp199Result = tmp199(false, "Failed to resolve " + closure_139_18.text);
                                        }
                                      }
                                    }
                                  }
                                }
                              } else if (
                                closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.BOOLEAN === type
                              ) {
                                if ("text" === closure_139_18.type) {
                                  let obj35 = closure_140_0(closure_140_3[15]);
                                  let str23 = closure_139_18.text;
                                  channelId = obj35.toChoiceBooleanValue(str23.trim());
                                }
                              } else if (
                                closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.INTEGER === type
                              ) {
                                if ("text" === closure_139_18.type) {
                                  let str22 = closure_139_18.text;
                                  closure_139_23 = str22.trim();
                                  if (null != closure_139_14.choices) {
                                    let obj9 = closure_140_0(closure_140_3[15]);
                                    channelId = obj9.findChoiceNumberValue(closure_139_14.choices, closure_139_23);
                                  } else if (closure_139_14.autocomplete) {
                                    if (null != closure_139_2.autocomplete) {
                                      if (closure_139_15) {
                                        channelId = closure_139_2.autocomplete.query;
                                      }
                                    }
                                    let obj8 = closure_140_0(closure_140_3[15]);
                                    let result = obj8.findAutocompleteChoiceNumberValue(
                                      closure_139_2.channel.id,
                                      closure_139_14.name,
                                      closure_139_23,
                                    );
                                  }
                                  if (null == channelId) {
                                    let _Number2 = Number;
                                    let obj34 = closure_140_2(closure_140_3[14]);
                                    channelId = Number(
                                      obj34.normalizeNumericString(closure_140_6.locale, closure_139_23),
                                    );
                                  }
                                }
                              } else if (
                                closure_140_0(closure_140_3[13]).ApplicationCommandOptionType.NUMBER === type
                              ) {
                                if ("text" === closure_139_18.type) {
                                  let str21 = closure_139_18.text;
                                  closure_139_24 = str21.trim();
                                  if (null != closure_139_14.choices) {
                                    let obj7 = closure_140_0(closure_140_3[15]);
                                    channelId = obj7.findChoiceNumberValue(closure_139_14.choices, closure_139_24);
                                  } else if (closure_139_14.autocomplete) {
                                    if (null != closure_139_2.autocomplete) {
                                      if (closure_139_15) {
                                        channelId = closure_139_2.autocomplete.query;
                                      }
                                    }
                                    let obj6 = closure_140_0(closure_140_3[15]);
                                    let result1 = obj6.findAutocompleteChoiceNumberValue(
                                      closure_139_2.channel.id,
                                      closure_139_14.name,
                                      closure_139_24,
                                    );
                                  }
                                  if (null == channelId) {
                                    let _Number = Number;
                                    let obj33 = closure_140_2(closure_140_3[14]);
                                    channelId = Number(
                                      obj33.normalizeNumericString(closure_140_6.locale, closure_139_24),
                                    );
                                  }
                                }
                              } else {
                                let _Error = Error;
                                let _HermesInternal3 = HermesInternal;
                                let tmp122 = new.target;
                                let tmp123 = new.target;
                                let error = new Error("Unsupported option type: " + closure_139_14.type);
                                throw error;
                              }
                              let tmp308 = "" !== channelId;
                              if (!tmp308) {
                                tmp308 = null == closure_139_2.autocomplete;
                              }
                              if (!tmp308) {
                                tmp308 = closure_139_15;
                              }
                              if (tmp308) {
                                let tmp317 = null != closure_139_2.autocomplete;
                                let tmp315 = closure_140_1(closure_140_3[16]);
                                if (!tmp317) {
                                  tmp317 = null != channelId;
                                }
                                let _HermesInternal8 = HermesInternal;
                                let tmp315Result = tmp315(
                                  tmp317,
                                  'Unexpected value for option "' + closure_139_14.name + '"',
                                );
                                if (null != channelId) {
                                  obj5 = { type: null, name: null, value: null, focused: null };
                                  obj5.type = closure_139_14.type;
                                  obj5.name = closure_139_14.name;
                                  obj5.value = channelId;
                                  obj5.focused = closure_139_15;
                                  let arr = closure_139_11.push(obj5);
                                }
                              }
                            }
                          } else {
                            if (null != closure_139_2.autocomplete) {
                              c13 = 0;
                              continue;
                            } else {
                              upload = closure_140_8.getUpload(
                                closure_139_2.channel.id,
                                closure_139_14.name,
                                commandAttachmentDraftType,
                              );
                              if (null == upload) {
                                c13 = 0;
                                continue;
                              } else {
                                closure_139_26 = closure_139_12.length;
                                arr = closure_139_12.push(upload);
                                obj6 = { type: null, name: null, value: null, focused: null };
                                obj6.type = closure_139_14.type;
                                obj6.name = closure_139_14.name;
                                obj6.value = closure_139_26;
                                obj6.focused = closure_139_15;
                                let arr1 = closure_139_11.push(obj6);
                              }
                            }
                            continue;
                          }
                          continue;
                        } else {
                          let obj32 = closure_140_2(closure_140_3[14]);
                          let str20 = obj32.getOptionalString(closure_139_1, closure_139_14.name);
                          let trimmed;
                          if (str20 != null) {
                            trimmed = str20.trim();
                          }
                          c5 = trimmed;
                          if (trimmed == null) {
                            c5 = "";
                          }
                          closure_139_27 = c5;
                          if (null != closure_139_14.choices) {
                            obj2 = closure_140_0(closure_140_3[15]);
                            channelId = obj2.findChoiceStringValue(closure_139_14.choices, closure_139_27);
                          } else if (closure_139_14.autocomplete) {
                            if (null != closure_139_2.autocomplete) {
                              if (closure_139_15) {
                                channelId = closure_139_2.autocomplete.query;
                              }
                            }
                            obj1 = closure_140_0(closure_140_3[15]);
                            let result2 = obj1.findAutocompleteChoiceStringValue(
                              closure_139_2.channel.id,
                              closure_139_14.name,
                              closure_139_27,
                            );
                          }
                          if (null == channelId) {
                            channelId = closure_139_27;
                          }
                          if ("" === channelId) {
                            if (null != closure_139_2.autocomplete) {
                              if (!closure_139_15) {
                                c13 = 0;
                                continue;
                              }
                              continue;
                            }
                          }
                          let tmp64 = null != closure_139_2.autocomplete;
                          let tmp62 = closure_140_1(closure_140_3[16]);
                          if (!tmp64) {
                            tmp64 = null != channelId;
                          }
                          let _HermesInternal = HermesInternal;
                          let tmp62Result = tmp62(tmp64, 'Option "' + closure_139_14.name + '" expects a value');
                          obj7 = { type: null, name: null, value: null, focused: null };
                          obj7.type = closure_139_14.type;
                          obj7.name = closure_139_14.name;
                          obj7.value = channelId;
                          obj7.focused = closure_139_15;
                          let arr2 = closure_139_11.push(obj7);
                        }
                      }
                      continue;
                    }
                  }
                  c13 = 0;
                  continue;
                }
              }
              if (null != closure_139_0.subCommandPath) {
                closure_139_28 = closure_139_0.subCommandPath.length - 1;
                if (closure_139_28 >= 0) {
                  do {
                    closure_139_29 = closure_139_0.subCommandPath[closure_139_28];
                    name2 = closure_139_29.name;
                    obj8 = { type: null, name: null, options: null };
                    obj8.type = closure_139_29.type;
                    obj8.name = name2;
                    obj8.options = closure_139_11;
                    let items = [obj8];
                    closure_139_11 = items;
                    closure_139_28 = closure_139_28 - 1;
                  } while (closure_139_28 >= 0);
                }
              }
              if (null != closure_139_0.execute) {
                let obj20 = closure_140_1(closure_140_3[18]);
                obj9 = { command_id: null, application_id: null, command_type: null, location: null, source: null };
                obj9.command_id = closure_139_0.id;
                obj9.application_id = closure_139_0.applicationId;
                obj9.command_type = closure_139_0.type;
                obj9.location = closure_140_21(closure_139_10);
                obj9.source = closure_139_9;
                let trackWithMetadataResult = obj20.trackWithMetadata(closure_140_12.APPLICATION_COMMAND_USED, obj9);
                c16 = 3;
                obj10 = { value: closure_139_0.execute(closure_139_11, closure_139_2), done: true };
                return obj10;
              } else if (
                closure_139_0.inputType !== closure_140_0(closure_140_3[9]).ApplicationCommandInputType.BUILT_IN
              ) {
                if (
                  closure_139_0.inputType !== closure_140_0(closure_140_3[9]).ApplicationCommandInputType.BUILT_IN_TEXT
                ) {
                  if (
                    closure_139_0.inputType !==
                    closure_140_0(closure_140_3[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION
                  ) {
                    obj11 = {
                      version: null,
                      id: null,
                      guild_id: null,
                      name: null,
                      type: null,
                      options: null,
                      application_command: null,
                    };
                    obj11.version = closure_139_0.version;
                    let rootCommand2 = closure_139_0.rootCommand;
                    let id7;
                    if (rootCommand2 != null) {
                      id7 = rootCommand2.id;
                    }
                    id = id7;
                    if (id7 == null) {
                      id = closure_139_0.id;
                    }
                    obj11.id = id;
                    obj11.guild_id = closure_139_0.guildId;
                    let rootCommand = closure_139_0.rootCommand;
                    let name1;
                    if (rootCommand != null) {
                      name1 = rootCommand.name;
                    }
                    untranslatedName = name1;
                    if (name1 == null) {
                      untranslatedName = closure_139_0.untranslatedName;
                    }
                    obj11.name = untranslatedName;
                    obj11.type = closure_139_0.type;
                    obj11.options = closure_139_11;
                    obj11.application_command = closure_139_0.rootCommand;
                    closure_139_31 = obj11;
                    if (null != closure_139_3) {
                      closure_139_31.target_id = closure_139_3;
                    }
                    if (null != closure_139_2.autocomplete) {
                      let obj19 = closure_140_0(closure_140_3[19]);
                      let performAutocompleteResult = obj19.performAutocomplete(
                        closure_139_0,
                        closure_139_2,
                        closure_139_31,
                      );
                    } else {
                      let obj40 = closure_140_1(closure_140_3[20]);
                      let clearAllResult = obj40.clearAll(closure_139_2.channel.id, commandAttachmentDraftType);
                      closure_10 = closure_140_18;
                      obj12 = {};
                      obj12.applicationId = closure_139_0.applicationId;
                      obj12.data = closure_139_31;
                      obj12.context = closure_139_2;
                      obj12.attachments = closure_139_12;
                      obj12.maxSizeCallback = closure_139_4;
                      obj12.onMessageSuccess = function onMessageSuccess() {
                        const values = Object.values(closure_1_1);
                        const flatMapResult = values.flatMap((arr) => {
                          const mapped = arr.map((type) => {
                            if ("emoji" === type.type) {
                              const obj = { names: null, surrogates: "", unicodeVersion: 6 };
                              const name = type.name;
                              const items = [name.replaceAll(":", "")];
                              obj.names = items;
                              let emoji = new closure_1_0(closure_1_3[21]).Emoji(obj);
                            } else {
                              emoji = null;
                              if ("customEmoji" === type.type) {
                                emoji = customEmojiById.getCustomEmojiById(type.emojiId);
                              }
                            }
                            return emoji;
                          });
                          return mapped.filter(closure_1_0(dependencyMap[22]).isNotNullish);
                        });
                        if (flatMapResult.length > 0) {
                          let obj = { type: "EMOJI_TRACK_USAGE", emojiUsed: flatMapResult };
                          closure_1(dependencyMap[10]).dispatch(obj);
                          const obj2 = closure_1(dependencyMap[10]);
                        }
                      };
                      obj12.analytics_location = closure_140_21(closure_139_10);
                      obj12.sectionName = closure_139_6;
                      obj12.source = closure_139_9;
                      c15 = 4;
                      c16 = 1;
                      obj13 = { value: closure_139_7(closure_139_0, closure_139_2, closure_139_31), done: false };
                      return obj13;
                    }
                  }
                }
              }
            }
          } else if (3 === tmp4) {
            c13 = 0;
            dependencyMap.return();
            throw closure_1_14;
          } else if (arg0 === 1) {
            c16 = 3;
            throw value;
          } else if (arg0 !== 2) {
            obj12.interactionLifecycleOptions = value;
            let tmp7 = closure_10(obj12);
          }
          c16 = 3;
          obj = { value, done: true };
          return obj;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
let closure_17 = async function _retryCommandMessage(arg0) {
  let commandType = arg0;
  closure_2 = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            if (commandType.isCommandType()) {
              if (null != commandType.interactionData) {
                if (null != closure_2.command) {
                  const obj1 = { channel, guild: null };
                  guild = null;
                  if (null != channel.guild_id) {
                    guild = guild.getGuild(channel.guild_id);
                  }
                  obj1.guild = guild;
                  closure_4 = enqueueCommandInteraction;
                  obj2 = {
                    applicationId: closure_2.command.applicationId,
                    data: commandType.interactionData,
                    context: obj1,
                  };
                  c5 = 1;
                  c6 = 1;
                  const obj3 = {
                    value: displayInteractionLifecycleInChat(closure_2.command, obj1, commandType.interactionData),
                    done: false,
                  };
                  return obj3;
                }
              }
            }
            c6 = 3;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj2.interactionLifecycleOptions = value;
          closure_4(obj2);
        }
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        c6 = tmp;
        throw tmp13;
      }
    }
  })();
};
function enqueueCommandInteraction(interactionLifecycleOptions) {
  ({ applicationId, context, attachments, maxSizeCallback, onMessageSuccess } = interactionLifecycleOptions);
  interactionLifecycleOptions = interactionLifecycleOptions.interactionLifecycleOptions;
  let message;
  if (null != context.channel) {
    const guild = context.guild;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    message = {
      applicationId,
      channelId: id,
      guildId: id,
      data: tmp,
      nonce: null,
      attachments: null,
      maxSizeCallback: null,
      analytics_location: null,
      sectionName: null,
      source: null,
    };
    let nonce = interactionLifecycleOptions.nonce;
    if (nonce == null) {
      let obj1 = onMessageSuccess(7753);
      nonce = obj1.createNonce();
    }
    message.nonce = nonce;
    message.attachments = attachments;
    message.maxSizeCallback = maxSizeCallback;
    message.analytics_location = tmp2;
    message.sectionName = tmp3;
    message.source = tmp4;
    message = { messageId: null, onCreate: null, onSuccess: null, onFailure: null, data: null };
    ({
      messageId: obj4.messageId,
      onCreate: obj4.onCreate,
      onSuccess: obj4.onSuccess,
      onFailure: obj4.onFailure,
    } = interactionLifecycleOptions);
    message = {
      interactionType: onMessageSuccess(1894).InteractionTypes.APPLICATION_COMMAND,
      applicationId,
      channelId: id,
    };
    message.data = message;
    InteractionActionCreatorsAll.addQueued(message.nonce, message);
    if (null != attachments) {
      if (attachments.length > 0) {
        (function stageAttachments() {
          const self = this;
          const apply = closure_1_24.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(attachments, message.nonce, id, maxSizeCallback).then((result) => {
          if (result) {
            closure_0 = message;
            closure_1 = onMessageSuccess;
            message = { type: MessageQueue.MessageDataType.COMMAND, message: null };
            message.message = message;
            message.enqueue(message, (ok) => {
              ({ nonce, applicationId, channelId, guildId } = closure_0);
              if (guildId == null) {
                guildId = null;
              }
              const result = onMessageSuccess(dependencyMap[26]).handleInteractionResponse(
                nonce,
                ok,
                applicationId,
                channelId,
                guildId,
              );
              ok = ok.ok;
              if (ok) {
                ok = null != closure_1;
              }
              if (ok) {
                closure_1();
              }
              obj = onMessageSuccess(dependencyMap[26]);
            });
          }
        });
        const promise = (function stageAttachments() {
          const self = this;
          const apply = closure_1_24.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(attachments, message.nonce, id, maxSizeCallback);
      }
    }
    closure_129_0 = message;
    closure_129_1 = onMessageSuccess;
    obj1 = { type: onMessageSuccess(7834).MessageDataType.COMMAND, message };
    message(7834).enqueue(obj1, (ok) => {
      ({ nonce, applicationId, channelId, guildId } = closure_0);
      if (guildId == null) {
        guildId = null;
      }
      const result = onMessageSuccess(dependencyMap[26]).handleInteractionResponse(
        nonce,
        ok,
        applicationId,
        channelId,
        guildId,
      );
      ok = ok.ok;
      if (ok) {
        ok = null != closure_1;
      }
      if (ok) {
        closure_1();
      }
      obj = onMessageSuccess(dependencyMap[26]);
    });
    const obj6 = message(7834);
  }
}
function displayInteractionLifecycleInChat() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _displayInteractionLifecycleInChat(arg0, arg1, arg2) {
  closure_0 = arg0;
  let channel = arg1;
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const user = tmp3;
            closure_4 = tmp5;
            closure_132_0 = closure_0;
            closure_132_1 = channel;
            closure_132_2 = closure_2;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            if (null == channel.channel) {
              c8 = 3;
              const obj1 = { value: {}, done: true };
              return obj1;
            } else {
              let obj2 = { channel: tmp63.channel, type: "channel" };
              const cachedApplicationSection = ApplicationCommandQueryApiAll.getCachedApplicationSection(
                obj2,
                tmp64.type,
                tmp62.applicationId,
              );
              closure_132_3 = cachedApplicationSection;
              if (null == cachedApplicationSection) {
                c8 = 3;
                let obj3 = { value: {}, done: true };
                return obj3;
              } else {
                const application = cachedApplicationSection.application;
                let bot;
                if (application != null) {
                  bot = application.bot;
                }
                closure_132_4 = bot;
                if (null == bot) {
                  if (null != cachedApplicationSection.botId) {
                    c6 = 1;
                    c7 = 2;
                    c8 = 1;
                    const obj4 = { value: UserActionCreatorsAll.getUser(cachedApplicationSection.botId), done: false };
                    return obj4;
                  }
                }
              }
            }
          }
        } else if (1 === tmp8) {
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
        let obj5 = { channelId: closure_132_1.channel.id, content: "", type: null, author: null };
        if (closure_132_2.type === closure_133_0(closure_133_3[13]).ApplicationCommandType.CHAT) {
          let CONTEXT_MENU_COMMAND = closure_133_13.CHAT_INPUT_COMMAND;
        } else {
          CONTEXT_MENU_COMMAND = closure_133_13.CONTEXT_MENU_COMMAND;
        }
        obj5.type = CONTEXT_MENU_COMMAND;
        obj6 = closure_132_4;
        if (closure_132_4 == null) {
          obj6 = {
            id: closure_132_3.id,
            username: closure_132_3.name,
            discriminator: closure_133_14,
            avatar: null,
            bot: true,
          };
        }
        const obj7 = {};
        obj5.author = obj6;
        const merged = Object.assign(closure_133_1(closure_133_3[29])(obj5));
        obj7.application = closure_132_3.application;
        const obj8 = {
          id: closure_132_2.id,
          name: closure_132_2.name,
          name_localized: closure_132_0.displayName,
          type: closure_133_0(closure_133_3[13]).InteractionTypes.APPLICATION_COMMAND,
          user: null,
        };
        obj5 = closure_133_0(closure_133_3[29]);
        obj8.user = obj5.userRecordToServer(closure_133_9.getCurrentUser());
        obj7.interaction = obj8;
        obj7.interaction_data = closure_132_2;
        closure_132_5 = obj7;
        obj6 = closure_133_1(closure_133_3[30]);
        const obj9 = { applicationId: closure_132_0.applicationId, command: closure_132_0 };
        obj6.receiveMessage(closure_132_1.channel.id, closure_132_5, true, obj9);
        const obj10 = {};
        Object.defineProperty(obj10, "messageId", { get: () => user.id, set: undefined });
        Object.defineProperty(obj10, "nonce", { get: () => user.id, set: undefined });
        obj10.onCreate = function onCreate(id) {
          if (null != user.interaction) {
            user.interaction.id = id;
          }
        };
        obj10.onSuccess = function onSuccess() {};
        obj10.onFailure = function onFailure(code, arg1, arg2, reason) {
          if (null != channel.channel) {
            let result = arg1;
            if (tmp2) {
              let obj = closure_1(obj6[30]);
              obj.sendClydeError(channel.channel.id, code);
            }
            if (tmp7) {
              result = closure_0(obj6[26]).interactionCallbackErrorReason(reason, closure_1_0.applicationId);
              const obj2 = closure_0(obj6[26]);
            }
            obj = { type: "MESSAGE_SEND_FAILED", messageId: user.id, channelId: channel.channel.id, reason: result };
            closure_1(obj6[10]).dispatch(obj);
            const obj3 = closure_1(obj6[10]);
            tmp2 = null == arg1 && null != code;
            tmp7 = null == result && null != reason;
          }
        };
        c8 = 3;
        const obj11 = { value: obj10, done: true };
        return obj11;
      } catch (tmp55) {
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp55;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
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
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _getMaxAndTotalFileSize(arg0, arg1) {
  dependencyMap = arg0;
  closure_1 = arg1;
  c9 = 0;
  c10 = 0;
  c8 = 0;
  return (async (arg0, value) => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp;
            closure_133_0 = closure_1;
            closure_133_3 = undefined;
            closure_133_4 = undefined;
            closure_133_1 = 0;
            closure_133_2 = 0;
            closure_3 = dependencyMap;
            closure_2 = dependencyMap[Symbol.iterator]();
            if (closure_2 === undefined) {
              let obj1 = { totalSize: null, largestUploadedFileSize: null };
              obj1.totalSize = closure_133_1;
              obj1.largestUploadedFileSize = closure_133_2;
              c10 = 3;
              let obj2 = { value: obj1, done: true };
              return obj2;
            } else {
              c8 = 1;
              closure_133_3 = tmp11;
              let obj7 = closure_133_3;
              if (closure_133_0) {
                let currentSize = obj7.currentSize;
                c4 = currentSize;
                if (currentSize == null) {
                  c4 = 0;
                }
                closure_6 = c4;
              } else {
                c9 = 2;
                c10 = 1;
                let obj3 = { value: obj7.getSize(), done: false };
                return obj3;
              }
            }
          }
        } else if (1 === tmp4) {
          c8 = 0;
          closure_2.return();
          throw closure_1_7;
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          closure_2.return();
          c10 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = value;
        }
        closure_133_4 = closure_6;
        if (closure_133_4 > closure_133_2) {
          closure_133_2 = closure_133_4;
        }
        closure_133_1 = closure_133_1 + closure_133_4;
        c8 = 0;
      }
    }
  })();
};
let closure_24 = async function _stageAttachments(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp5;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = dependencyMap;
          closure_132_3 = undefined;
          let maxTotalAttachmentSize;
          closure_132_6 = undefined;
          let totalSize;
          closure_132_8 = undefined;
          closure_132_9 = undefined;
          closure_132_5 = function handleUploadsTooLarge(arg0) {
            if (closure_1_2 != null) {
              tmp(dependencyMap, arg0);
            }
            closure_2(8117);
            const intl = closure_0(1114).intl;
            const obj = { maxSize: closure_0(5134).sizeString(dependencyMap) };
            obj.setFailed(
              closure_1_1,
              constants.ENTITY_TOO_LARGE,
              intl.formatToPlainString(closure_0(1114).t.fxEKdS, obj),
            );
            const obj3 = closure_0(5134);
          };
          closure_132_3 = FileUtils.maxFileSize(closure_2);
          maxTotalAttachmentSize = UploadUtils.getMaxTotalAttachmentSize({
            location: "executeCommand.stageAttachments",
          });
          c7 = 1;
          c8 = 1;
          const obj1 = { value: getMaxAndTotalFileSize(closure_0, false), done: false };
          return obj1;
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_132_6 = value;
          totalSize = closure_132_6.totalSize;
          closure_132_8 = closure_132_6.largestUploadedFileSize;
          const _Math = Math;
          if (closure_132_8 <= Math.max(closure_132_3, closure_133_15)) {
            if (totalSize <= maxTotalAttachmentSize) {
              c6 = 1;
              c7 = 4;
              c8 = 1;
              let obj3 = { value: closure_133_1(closure_133_3[34])(closure_132_0), done: false };
              return obj3;
            }
          }
          closure_132_5(closure_132_8);
          c8 = 3;
          return { value: false, done: true };
        }
      } else {
        if (2 === tmp8) {
          c6 = 0;
          obj3 = closure_133_2(closure_133_3[24]);
          let intl = closure_133_0(closure_133_3[33]).intl;
          const obj4 = { count: closure_132_0.length };
          obj3.setFailed(
            closure_132_1,
            undefined,
            intl.formatToPlainString(closure_133_0(closure_133_3[33]).t["9h1/1p"], obj4),
          );
          closure_133_22(closure_132_0, true);
          c7 = 3;
          c8 = 1;
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_132_9 = value;
            totalSize = closure_132_9.totalSize;
            closure_132_8 = closure_132_9.largestUploadedFileSize;
            let someResult = closure_132_0.some((error) => error.error === constants.ENTITY_TOO_LARGE);
            if (!someResult) {
              someResult = totalSize > maxTotalAttachmentSize;
            }
            let flag = !someResult;
            if (someResult) {
              closure_132_5(closure_132_8);
              flag = false;
            }
            c8 = 3;
            const obj6 = { value: flag, done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c6 = 0;
        }
        c6 = 0;
        c8 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp45) {
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp45;
      } else {
        c7 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({
  AbortCodes: closure_11,
  AnalyticEvents: closure_12,
  MessageTypes: map1,
  NON_USER_BOT_DISCRIMINATOR: closure_14,
} = Constants);
let closure_15 = fn(4553).DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_commands/executeCommand.tsx");

export default function executeCommand() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export const retryCommandMessage = function retryCommandMessage() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};

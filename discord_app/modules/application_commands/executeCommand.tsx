// discord_app/modules/application_commands/executeCommand.tsx
import ApplicationCommandSectionType from "ApplicationCommandTypes.tsx";
import _fetchMessageInteractionDataAll from "../interactions/InteractionActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import getEmojiToGroupId from "../emojis/EmojiStore.tsx";
import _getSystemLocale from "../user_settings/LocaleStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import map from "../../stores/UploadAttachmentStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import handleInit from "ApplicationCommandStore.tsx";
import ME from "../../Constants.tsx";
import { DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE as closure_15 } from "../messages/MessageConstants.tsx";

require = fn;
function _executeCommand() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c15 = 0;
    c16 = 0;
    c13 = 0;
    const iter = (function*(arg0, interactionLifecycleOptions) {
      if (channelId === 2) {
        channelId = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw interactionLifecycleOptions;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = interactionLifecycleOptions;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          channelId = 2;
          let tmp4 = c15;
          if (0 === c15) {
            if (arg0 === 1) {
              channelId = 3;
              throw interactionLifecycleOptions;
            } else if (arg0 === 2) {
              channelId = 3;
              obj = { value: null, done: true };
              obj[0] = interactionLifecycleOptions;
              return obj;
            } else {
              let arr = tmp;
              let items = tmp4;
              let lib;
              dependencyMap = undefined;
              let lib2;
              closure_3 = undefined;
              options = undefined;
              c5 = undefined;
              closure_6 = undefined;
              let id;
              let untranslatedName;
              let tmp586 = lib;
              ({ command: c0, optionValues: closure_1, context: closure_2, commandTargetId: closure_3, maxSizeCallback: options, commandOrigin } = lib);
              if (commandOrigin === undefined) {
                commandOrigin = lib(closure_1_3[9]).CommandOrigin.CHAT;
              }
              c5 = commandOrigin;
              ({ sectionName: closure_6, interactionLifecycleOptionsFactory } = tmp586);
              if (interactionLifecycleOptionsFactory === undefined) {
                interactionLifecycleOptionsFactory = closure_1_19;
              }
              id = interactionLifecycleOptionsFactory;
              untranslatedName = tmp586.source;
              let obj12;
              let store;
              items = undefined;
              arr = undefined;
              let commandAttachmentDraftType;
              let user;
              closure_18 = undefined;
              closure_19 = undefined;
              closure_20 = undefined;
              let lib3;
              closure_22 = undefined;
              closure_23 = undefined;
              closure_24 = undefined;
              let upload;
              let length;
              closure_27 = undefined;
              closure_28 = undefined;
              closure_29 = undefined;
              let name;
              let obj11;
              c15 = 1;
              channelId = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                channelId = 3;
                throw interactionLifecycleOptions;
              } else if (arg0 === 2) {
                channelId = 3;
                obj1 = { value: null, done: true };
                obj1[0] = interactionLifecycleOptions;
                return obj1;
              } else if (null != lib2.channel) {
                let source = store.getSource(lib2.channel.id);
                dependencyMap = source;
                if (source == null) {
                  dependencyMap = untranslatedName;
                }
                obj12 = dependencyMap;
                commandOrigin = store.getCommandOrigin(lib2.channel.id);
                lib2 = commandOrigin;
                if (commandOrigin == null) {
                  lib2 = c5;
                }
                store = lib2;
                if (null == lib2.autocomplete) {
                  let obj24 = dependencyMap(closure_3[10]);
                  let obj2 = { type: "APPLICATION_COMMAND_USED", context: null, command: null, commandOrigin: null };
                  obj2[1] = lib2;
                  obj2[2] = lib;
                  obj2[3] = store;
                  let dispatchResult = obj24.dispatch(obj2);
                }
                let obj26 = dependencyMap(closure_3[11]);
                c15 = 2;
                channelId = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = obj26.unarchiveThreadIfNecessary(lib2.channel.id);
                return obj3;
              } else {
                channelId = 3;
              }
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                channelId = 3;
                throw interactionLifecycleOptions;
              } else if (arg0 === 2) {
                channelId = 3;
                let obj4 = { value: null, done: true };
                obj4[0] = interactionLifecycleOptions;
                return obj4;
              } else {
                items = [];
                arr = [];
                let obj31 = lib(closure_3[12]);
                commandAttachmentDraftType = obj31.getCommandAttachmentDraftType(store);
                if (null != lib.options) {
                  options = lib.options;
                  closure_3 = options[Symbol.iterator]();
                  while (closure_3 !== undefined) {
                    commandAttachmentDraftType = 1;
                    user = tmp13;
                    if (user.type !== lib(closure_3[13]).ApplicationCommandOptionType.SUB_COMMAND) {
                      if (user.type !== lib(closure_3[13]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
                        if (user.name in dependencyMap) {
                          let autocomplete = lib2.autocomplete;
                          name = undefined;
                          if (autocomplete != null) {
                            name = autocomplete.name;
                          }
                          let tmp19 = name === user.name || undefined;
                          c15 = tmp19;
                          channelId = undefined;
                          if (user.type !== lib(closure_3[13]).ApplicationCommandOptionType.STRING) {
                            if (user.type !== lib(closure_3[13]).ApplicationCommandOptionType.ATTACHMENT) {
                              let obj5 = lib2(closure_3[14]);
                              length = obj5.filterEmpty(dependencyMap[user.name]);
                              let tmp102 = null != lib2.autocomplete;
                              let tmp100 = dependencyMap(closure_3[16]);
                              if (!tmp102) {
                                tmp102 = 1 === length.length;
                              }
                              let _HermesInternal2 = HermesInternal;
                              let tmp100Result = tmp100(tmp102, "Option \"" + user.name + "\" expects a single option type");
                              if (null != length[0]) {
                                let first = length[0];
                                closure_6 = first;
                                if (first == null) {
                                  closure_6 = { type: "text", text: "" };
                                }
                                closure_18 = closure_6;
                                let type = user.type;
                                if (lib(closure_3[13]).ApplicationCommandOptionType.CHANNEL === type) {
                                  if ("channelMention" === closure_18.type) {
                                    channelId = closure_18.channelId;
                                  } else if ("text" === closure_18.type) {
                                    let obj38 = lib(closure_3[12]);
                                    if (obj38.isSnowflake(closure_18.text)) {
                                      let str4 = closure_18.text;
                                      channelId = str4.trim();
                                    } else {
                                      let obj15 = lib(closure_3[17]);
                                      let guild7 = lib2.guild;
                                      id = undefined;
                                      if (guild7 != null) {
                                        id = guild7.id;
                                      }
                                      closure_19 = obj15.resolveApplicationCommandOption(closure_18.text, id, lib2.channel.id);
                                      type = undefined;
                                      let tmp297 = dependencyMap(closure_3[16]);
                                      if (closure_19 != null) {
                                        type = closure_19.type;
                                      }
                                      let _HermesInternal7 = HermesInternal;
                                      let tmp297Result = tmp297("channelMention" === type, "Failed to resolve " + closure_18.text);
                                      channelId = closure_19.channelId;
                                    }
                                  }
                                } else if (lib(closure_3[13]).ApplicationCommandOptionType.ROLE === type) {
                                  if ("roleMention" === closure_18.type) {
                                    channelId = closure_18.roleId;
                                  } else if ("text" === closure_18.type) {
                                    obj12 = lib(closure_3[12]);
                                    if (obj12.isSnowflake(closure_18.text)) {
                                      let str3 = closure_18.text;
                                      channelId = str3.trim();
                                    } else {
                                      let obj13 = lib(closure_3[17]);
                                      let text2 = closure_18.text;
                                      let guild6 = lib2.guild;
                                      let id1;
                                      if (guild6 != null) {
                                        id1 = guild6.id;
                                      }
                                      closure_20 = obj13.resolveApplicationCommandOption(text2, id1, lib2.channel.id, { allowUsers: false });
                                      let type1;
                                      let tmp275 = dependencyMap(closure_3[16]);
                                      if (closure_20 != null) {
                                        type1 = closure_20.type;
                                      }
                                      let _HermesInternal6 = HermesInternal;
                                      let tmp275Result = tmp275("roleMention" === type1, "Failed to resolve " + closure_18.text);
                                      channelId = closure_20.roleId;
                                    }
                                  } else {
                                    let tmp248 = "textMention" === closure_18.type;
                                    if (tmp248) {
                                      tmp248 = "@everyone" === closure_18.text;
                                    }
                                    if (tmp248) {
                                      let guild5 = lib2.guild;
                                      let id2;
                                      if (guild5 != null) {
                                        id2 = guild5.id;
                                      }
                                      channelId = id2;
                                    }
                                  }
                                } else if (lib(closure_3[13]).ApplicationCommandOptionType.USER === type) {
                                  if ("userMention" === closure_18.type) {
                                    channelId = closure_18.userId;
                                  } else if ("text" === closure_18.type) {
                                    let obj37 = lib(closure_3[12]);
                                    if (obj37.isSnowflake(closure_18.text)) {
                                      let str2 = closure_18.text;
                                      channelId = str2.trim();
                                    } else {
                                      obj11 = lib(closure_3[17]);
                                      let text = closure_18.text;
                                      let guild4 = lib2.guild;
                                      let id3;
                                      if (guild4 != null) {
                                        id3 = guild4.id;
                                      }
                                      lib3 = obj11.resolveApplicationCommandOption(text, id3, lib2.channel.id, { allowRoles: false });
                                      let type2;
                                      let tmp235 = dependencyMap(closure_3[16]);
                                      if (lib3 != null) {
                                        type2 = lib3.type;
                                      }
                                      let _HermesInternal5 = HermesInternal;
                                      let tmp235Result = tmp235("userMention" === type2, "Failed to resolve " + closure_18.text);
                                      channelId = lib3.userId;
                                    }
                                  }
                                } else if (lib(closure_3[13]).ApplicationCommandOptionType.MENTIONABLE === type) {
                                  if ("userMention" === closure_18.type) {
                                    channelId = closure_18.userId;
                                  } else if ("roleMention" === closure_18.type) {
                                    channelId = closure_18.roleId;
                                  } else {
                                    if ("textMention" === closure_18.type) {
                                      if ("@everyone" === closure_18.text) {
                                        let guild3 = lib2.guild;
                                        let id4;
                                        if (guild3 != null) {
                                          id4 = guild3.id;
                                        }
                                        channelId = id4;
                                      }
                                    }
                                    if ("text" === closure_18.type) {
                                      let obj36 = lib(closure_3[12]);
                                      if (obj36.isSnowflake(closure_18.text)) {
                                        let str = closure_18.text;
                                        channelId = str.trim();
                                      } else {
                                        let obj10 = lib(closure_3[17]);
                                        let guild = lib2.guild;
                                        let id5;
                                        if (guild != null) {
                                          id5 = guild.id;
                                        }
                                        closure_22 = obj10.resolveApplicationCommandOption(closure_18.text, id5, lib2.channel.id);
                                        let type3;
                                        if (closure_22 != null) {
                                          type3 = closure_22.type;
                                        }
                                        if ("userMention" === type3) {
                                          channelId = closure_22.userId;
                                        } else {
                                          let type4;
                                          if (closure_22 != null) {
                                            type4 = closure_22.type;
                                          }
                                          if ("roleMention" === type4) {
                                            channelId = closure_22.roleId;
                                          } else {
                                            let type5;
                                            if (closure_22 != null) {
                                              type5 = closure_22.type;
                                            }
                                            if ("textMention" === type5) {
                                              if ("@everyone" === closure_22.text) {
                                                let guild2 = lib2.guild;
                                                let id6;
                                                if (guild2 != null) {
                                                  id6 = guild2.id;
                                                }
                                                channelId = id6;
                                              }
                                            }
                                            let _HermesInternal4 = HermesInternal;
                                            let tmp199 = dependencyMap(closure_3[16]);
                                            let tmp199Result = tmp199(false, "Failed to resolve " + closure_18.text);
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else if (lib(closure_3[13]).ApplicationCommandOptionType.BOOLEAN === type) {
                                  if ("text" === closure_18.type) {
                                    let obj35 = lib(closure_3[15]);
                                    let str23 = closure_18.text;
                                    channelId = obj35.toChoiceBooleanValue(str23.trim());
                                  }
                                } else if (lib(closure_3[13]).ApplicationCommandOptionType.INTEGER === type) {
                                  if ("text" === closure_18.type) {
                                    let str22 = closure_18.text;
                                    closure_23 = str22.trim();
                                    if (null != user.choices) {
                                      let obj9 = lib(closure_3[15]);
                                      channelId = obj9.findChoiceNumberValue(user.choices, closure_23);
                                    } else if (user.autocomplete) {
                                      if (null != lib2.autocomplete) {
                                        if (c15) {
                                          channelId = lib2.autocomplete.query;
                                        }
                                      }
                                      let obj8 = lib(closure_3[15]);
                                      let result = obj8.findAutocompleteChoiceNumberValue(lib2.channel.id, user.name, closure_23);
                                    }
                                    if (null == channelId) {
                                      let _Number2 = Number;
                                      let obj34 = lib2(closure_3[14]);
                                      channelId = Number(obj34.normalizeNumericString(closure_6.locale, closure_23));
                                    }
                                  }
                                } else if (lib(closure_3[13]).ApplicationCommandOptionType.NUMBER === type) {
                                  if ("text" === closure_18.type) {
                                    let str21 = closure_18.text;
                                    closure_24 = str21.trim();
                                    if (null != user.choices) {
                                      let obj7 = lib(closure_3[15]);
                                      channelId = obj7.findChoiceNumberValue(user.choices, closure_24);
                                    } else if (user.autocomplete) {
                                      if (null != lib2.autocomplete) {
                                        if (c15) {
                                          channelId = lib2.autocomplete.query;
                                        }
                                      }
                                      let obj6 = lib(closure_3[15]);
                                      let result1 = obj6.findAutocompleteChoiceNumberValue(lib2.channel.id, user.name, closure_24);
                                    }
                                    if (null == channelId) {
                                      let _Number = Number;
                                      let obj33 = lib2(closure_3[14]);
                                      channelId = Number(obj33.normalizeNumericString(closure_6.locale, closure_24));
                                    }
                                  }
                                } else {
                                  let _Error = Error;
                                  let _HermesInternal3 = HermesInternal;
                                  error = new Error("Unsupported option type: " + user.type);
                                  throw error;
                                }
                                let tmp308 = "" !== channelId;
                                if (!tmp308) {
                                  tmp308 = null == lib2.autocomplete;
                                }
                                if (!tmp308) {
                                  tmp308 = c15;
                                }
                                if (tmp308) {
                                  let tmp317 = null != lib2.autocomplete;
                                  let tmp315 = dependencyMap(closure_3[16]);
                                  if (!tmp317) {
                                    tmp317 = null != channelId;
                                  }
                                  let _HermesInternal8 = HermesInternal;
                                  let tmp315Result = tmp315(tmp317, "Unexpected value for option \"" + user.name + "\"");
                                  if (null != channelId) {
                                    obj5 = { type: null, name: null, value: null, focused: null };
                                    obj5[0] = user.type;
                                    obj5[1] = user.name;
                                    obj5[2] = channelId;
                                    obj5[3] = c15;
                                    arr = items.push(obj5);
                                  }
                                }
                              }
                            } else {
                              if (null != lib2.autocomplete) {
                                commandAttachmentDraftType = 0;
                                continue;
                              } else {
                                upload = untranslatedName.getUpload(lib2.channel.id, user.name, commandAttachmentDraftType);
                                if (null == upload) {
                                  commandAttachmentDraftType = 0;
                                  continue;
                                } else {
                                  length = arr.length;
                                  arr = arr.push(upload);
                                  obj6 = { type: null, name: null, value: null, focused: null };
                                  obj6[0] = user.type;
                                  obj6[1] = user.name;
                                  obj6[2] = length;
                                  obj6[3] = c15;
                                  let arr1 = items.push(obj6);
                                }
                              }
                              continue;
                            }
                            continue;
                          } else {
                            let obj32 = lib2(closure_3[14]);
                            let str20 = obj32.getOptionalString(dependencyMap, user.name);
                            let trimmed;
                            if (str20 != null) {
                              trimmed = str20.trim();
                            }
                            c5 = trimmed;
                            if (trimmed == null) {
                              c5 = "";
                            }
                            closure_27 = c5;
                            if (null != user.choices) {
                              obj2 = lib(closure_3[15]);
                              channelId = obj2.findChoiceStringValue(user.choices, closure_27);
                            } else if (user.autocomplete) {
                              if (null != lib2.autocomplete) {
                                if (c15) {
                                  channelId = lib2.autocomplete.query;
                                }
                              }
                              obj1 = lib(closure_3[15]);
                              let result2 = obj1.findAutocompleteChoiceStringValue(lib2.channel.id, user.name, closure_27);
                            }
                            if (null == channelId) {
                              channelId = closure_27;
                            }
                            if ("" === channelId) {
                              if (null != lib2.autocomplete) {
                                if (!c15) {
                                  commandAttachmentDraftType = 0;
                                  continue;
                                }
                                continue;
                              }
                            }
                            let tmp64 = null != lib2.autocomplete;
                            let tmp62 = dependencyMap(closure_3[16]);
                            if (!tmp64) {
                              tmp64 = null != channelId;
                            }
                            let _HermesInternal = HermesInternal;
                            let tmp62Result = tmp62(tmp64, "Option \"" + user.name + "\" expects a value");
                            obj7 = { type: null, name: null, value: null, focused: null };
                            obj7[0] = user.type;
                            obj7[1] = user.name;
                            obj7[2] = channelId;
                            obj7[3] = c15;
                            let arr2 = items.push(obj7);
                          }
                        }
                        continue;
                      }
                    }
                    commandAttachmentDraftType = 0;
                    continue;
                  }
                }
                if (null != lib.subCommandPath) {
                  closure_28 = lib.subCommandPath.length - 1;
                  if (closure_28 >= 0) {
                    do {
                      closure_29 = lib.subCommandPath[closure_28];
                      name = closure_29.name;
                      obj8 = { type: null, name: null, options: null };
                      obj8[0] = closure_29.type;
                      obj8[1] = name;
                      obj8[2] = items;
                      items = [obj8];
                      closure_28 = closure_28 - 1;
                    } while (closure_28 >= 0);
                  }
                }
                if (null != lib.execute) {
                  let obj20 = dependencyMap(closure_3[18]);
                  obj9 = { command_id: null, application_id: null, command_type: null, location: null, source: null };
                  obj9[0] = lib.id;
                  obj9[1] = lib.applicationId;
                  obj9[2] = lib.type;
                  obj9[3] = lib3(store);
                  obj9[4] = obj12;
                  let trackWithMetadataResult = obj20.trackWithMetadata(arr.APPLICATION_COMMAND_USED, obj9);
                  channelId = 3;
                  obj10 = { value: null, done: true };
                  obj10[0] = lib.execute(items, lib2);
                  return obj10;
                } else if (lib.inputType !== lib(closure_3[9]).ApplicationCommandInputType.BUILT_IN) {
                  if (lib.inputType !== lib(closure_3[9]).ApplicationCommandInputType.BUILT_IN_TEXT) {
                    if (lib.inputType !== lib(closure_3[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION) {
                      obj11 = { version: null, id: null, guild_id: null, name: null, type: null, options: null, application_command: null };
                      obj11[0] = lib.version;
                      let rootCommand2 = lib.rootCommand;
                      let id7;
                      if (rootCommand2 != null) {
                        id7 = rootCommand2.id;
                      }
                      id = id7;
                      if (id7 == null) {
                        id = lib.id;
                      }
                      obj11[1] = id;
                      obj11[2] = lib.guildId;
                      let rootCommand = lib.rootCommand;
                      let name1;
                      if (rootCommand != null) {
                        name1 = rootCommand.name;
                      }
                      untranslatedName = name1;
                      if (name1 == null) {
                        untranslatedName = lib.untranslatedName;
                      }
                      obj11[3] = untranslatedName;
                      obj11[4] = lib.type;
                      obj11[5] = items;
                      obj11[6] = lib.rootCommand;
                      if (null != closure_3) {
                        obj11.target_id = closure_3;
                      }
                      if (null != lib2.autocomplete) {
                        let obj19 = lib(closure_3[19]);
                        let performAutocompleteResult = obj19.performAutocomplete(lib, lib2, obj11);
                      } else {
                        let obj40 = dependencyMap(closure_3[20]);
                        let clearAllResult = obj40.clearAll(lib2.channel.id, commandAttachmentDraftType);
                        store = closure_18;
                        obj12 = {};
                        obj12.applicationId = lib.applicationId;
                        obj12.data = obj11;
                        obj12.context = lib2;
                        obj12.attachments = arr;
                        obj12.maxSizeCallback = options;
                        obj12.onMessageSuccess = function onMessageSuccess(closure_1_3) {
                          const values = Object.values(callback);
                          const flatMapResult = values.flatMap((item, index) => {
                            const mapped = item.map(() => { ... });
                            return mapped.filter(callback(table[22]).isNotNullish);
                          });
                          if (flatMapResult.length > 0) {
                            let obj = { type: "EMOJI_TRACK_USAGE", emojiUsed: null };
                            obj[1] = flatMapResult;
                            callback(table[10]).dispatch(obj);
                            const obj2 = callback(table[10]);
                          }
                        };
                        obj12.analytics_location = lib3(store);
                        obj12.sectionName = closure_6;
                        obj12.source = obj12;
                        c15 = 4;
                        channelId = 1;
                        obj13 = { value: null, done: false };
                        obj13[0] = id(lib, lib2, obj11);
                        return obj13;
                      }
                    }
                  }
                }
              }
            } else if (3 === tmp4) {
              commandAttachmentDraftType = 0;
              closure_3.return();
              throw user;
            } else if (arg0 === 1) {
              channelId = 3;
              throw interactionLifecycleOptions;
            } else if (arg0 !== 2) {
              obj12.interactionLifecycleOptions = interactionLifecycleOptions;
              let tmp7 = store(obj12);
            }
            channelId = 3;
            obj = { value: null, done: true };
            obj[0] = interactionLifecycleOptions;
            return obj;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _retryCommandMessage() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, interactionLifecycleOptions) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw interactionLifecycleOptions;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = interactionLifecycleOptions;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw interactionLifecycleOptions;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = interactionLifecycleOptions;
              return obj;
            } else {
              if (commandType.isCommandType()) {
                if (null != commandType.interactionData) {
                  if (null != closure_2.command) {
                    obj1 = { channel: null, guild: null };
                    obj1[0] = closure_1;
                    let guild = null;
                    if (null != closure_1.guild_id) {
                      guild = closure_1_7.getGuild(closure_1.guild_id);
                    }
                    obj1[1] = guild;
                    const callback = closure_1_18;
                    const obj2 = { applicationId: closure_2.command.applicationId, data: commandType.interactionData, context: obj1 };
                    c5 = 1;
                    c6 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = closure_1_19(closure_2.command, obj1, commandType.interactionData);
                    return obj3;
                  }
                }
              }
              c6 = 3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw interactionLifecycleOptions;
          } else if (arg0 !== 2) {
            obj2.interactionLifecycleOptions = interactionLifecycleOptions;
            callback(obj2);
          }
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = interactionLifecycleOptions;
          return obj;
        } catch (tmp13) {
          c6 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function enqueueCommandInteraction(interactionLifecycleOptions) {
  ({ applicationId, context, attachments, maxSizeCallback, onMessageSuccess } = interactionLifecycleOptions);
  let obj = onMessageSuccess;
  interactionLifecycleOptions = interactionLifecycleOptions.interactionLifecycleOptions;
  onMessageSuccess = undefined;
  if (null != context.channel) {
    const guild = context.guild;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    obj = { applicationId: null, channelId: null, guildId: null, data: null, nonce: null, attachments: null, maxSizeCallback: null, analytics_location: null, sectionName: null, source: null };
    obj[0] = applicationId;
    obj[1] = id;
    obj[2] = id;
    obj[3] = tmp;
    let nonce = interactionLifecycleOptions.nonce;
    if (nonce == null) {
      obj1 = obj(7501);
      nonce = obj1.createNonce();
    }
    obj[4] = nonce;
    obj[5] = attachments;
    obj[6] = maxSizeCallback;
    obj[7] = tmp2;
    obj[8] = tmp3;
    obj[9] = tmp4;
    onMessageSuccess = obj;
    ({ messageId: obj4[0], onCreate: obj4[1], onSuccess: obj4[2], onFailure: obj4[3] } = interactionLifecycleOptions);
    obj = { interactionType: null, applicationId: null, channelId: null };
    obj[0] = obj(1954).InteractionTypes.APPLICATION_COMMAND;
    obj[1] = applicationId;
    obj[2] = id;
    obj[4] = obj;
    _fetchMessageInteractionDataAll.addQueued(obj.nonce, obj);
    if (null != attachments) {
      if (attachments.length > 0) {
        (function stageAttachments(attachments, nonce, id, maxSizeCallback) {
          const self = this;
          const apply = closure_24.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(attachments, obj.nonce, id, maxSizeCallback).then((result) => {
          if (result) {
            closure_0 = closure_1;
            closure_1 = closure_0;
            onMessageSuccess(dependencyMap[25]);
            obj = { type: null, message: null };
            obj[0] = obj(dependencyMap[25]).MessageDataType.COMMAND;
            obj[1] = closure_1;
            obj.enqueue(obj, (ok) => {
              ({ nonce, applicationId, channelId, guildId } = callback);
              if (guildId == null) {
                guildId = null;
              }
              const result = callback(closure_1_3[26]).handleInteractionResponse(nonce, ok, applicationId, channelId, guildId);
              ok = ok.ok;
              if (ok) {
                ok = null != callback2;
              }
              if (ok) {
                callback2();
              }
              obj = callback(closure_1_3[26]);
            });
          }
        });
        const promise = (function stageAttachments(attachments, nonce, id, maxSizeCallback) {
          const self = this;
          const apply = closure_24.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(attachments, obj.nonce, id, maxSizeCallback);
      }
    }
    const tmp10 = obj;
    obj1 = { type: null, message: null };
    obj1[0] = tmp10(5040).MessageDataType.COMMAND;
    obj1[1] = obj;
    onMessageSuccess(5040).enqueue(obj1, (ok) => {
      ({ nonce, applicationId, channelId, guildId } = callback);
      if (guildId == null) {
        guildId = null;
      }
      const result = callback(closure_1_3[26]).handleInteractionResponse(nonce, ok, applicationId, channelId, guildId);
      ok = ok.ok;
      if (ok) {
        ok = null != callback2;
      }
      if (ok) {
        callback2();
      }
      obj = callback(closure_1_3[26]);
    });
    const obj6 = onMessageSuccess(5040);
  }
}
function displayInteractionLifecycleInChat() {
  const self = this;
  const apply = _displayInteractionLifecycleInChat.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _displayInteractionLifecycleInChat() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj7 = tmp3;
              let bot = tmp5;
              let obj6;
              bot = undefined;
              obj7 = undefined;
              if (null == lib2.channel) {
                c8 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = {};
                return obj1;
              } else {
                let obj2 = { channel: null, type: "channel" };
                obj2[0] = tmp64.channel;
                const cachedApplicationSection = lib3(closure_1_3[27]).getCachedApplicationSection(obj2, tmp65.type, tmp63.applicationId);
                obj6 = cachedApplicationSection;
                if (null == cachedApplicationSection) {
                  c8 = 3;
                  let obj3 = { value: null, done: true };
                  obj3[0] = {};
                  return obj3;
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
                      const obj4 = { value: null, done: false };
                      obj4[0] = lib3(closure_1_3[28]).getUser(cachedApplicationSection.botId);
                      return obj4;
                    }
                  }
                }
                const obj17 = lib3(closure_1_3[27]);
              }
            }
          } else if (1 === tmp8) {
            c6 = 0;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c6 = 0;
          }
          let obj5 = { channelId: null, content: "", type: null, author: null };
          obj5[0] = lib2.channel.id;
          if (lib3.type === lib(obj6[13]).ApplicationCommandType.CHAT) {
            let CONTEXT_MENU_COMMAND = constants.CHAT_INPUT_COMMAND;
          } else {
            CONTEXT_MENU_COMMAND = constants.CONTEXT_MENU_COMMAND;
          }
          obj5[2] = CONTEXT_MENU_COMMAND;
          obj6 = bot;
          if (bot == null) {
            obj6 = { id: null, username: null, discriminator: null, avatar: null, bot: true };
            obj6[0] = obj6.id;
            obj6[1] = obj6.name;
            obj6[2] = closure_14;
          }
          obj7 = {};
          obj5[3] = obj6;
          const merged = Object.assign(lib2(obj6[29])(obj5));
          obj7.application = obj6.application;
          const obj8 = { id: null, name: null, name_localized: null, type: null, user: null };
          obj8[0] = lib3.id;
          obj8[1] = lib3.name;
          obj8[2] = lib.displayName;
          obj8[3] = lib(obj6[13]).InteractionTypes.APPLICATION_COMMAND;
          obj5 = lib(obj6[29]);
          obj8[4] = obj5.userRecordToServer(currentUser.getCurrentUser());
          obj7.interaction = obj8;
          obj7.interaction_data = lib3;
          obj6 = lib2(obj6[30]);
          const obj9 = { applicationId: null, command: null };
          obj9[0] = lib.applicationId;
          obj9[1] = lib;
          obj6.receiveMessage(lib2.channel.id, obj7, true, obj9);
          const obj10 = {};
          Object.defineProperty(obj10, "messageId", { get: () => obj7.id, set: undefined });
          Object.defineProperty(obj10, "nonce", { get: () => obj7.id, set: undefined });
          obj10.onCreate = function onCreate(id) {
            if (null != obj7.interaction) {
              obj7.interaction.id = id;
            }
          };
          obj10.onSuccess = function onSuccess() {

          };
          obj10.onFailure = function onFailure(code, arg1, arg2, reason) {
            if (null != lib2.channel) {
              let result = arg1;
              if (tmp2) {
                let obj = lib2(obj6[30]);
                obj.sendClydeError(lib2.channel.id, code);
              }
              if (tmp7) {
                result = lib(obj6[26]).interactionCallbackErrorReason(reason, lib.applicationId);
                const obj2 = lib(obj6[26]);
              }
              obj = { type: "MESSAGE_SEND_FAILED", messageId: null, channelId: null, reason: null };
              obj[1] = obj7.id;
              obj[2] = lib2.channel.id;
              obj[3] = result;
              lib2(obj6[10]).dispatch(obj);
              const obj3 = lib2(obj6[10]);
              tmp2 = null == arg1 && null != code;
              tmp7 = null == result && null != reason;
            }
          };
          c8 = 3;
          const obj11 = { value: null, done: true };
          obj11[0] = obj10;
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
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getAnalyticsLocationFromCommandOrigin(arg0) {
  if (ApplicationCommandSectionType.CommandOrigin.APPLICATION_LAUNCHER === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.APP_LAUNCHER;
  } else if (ApplicationCommandSectionType.CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
  } else if (ApplicationCommandSectionType.CommandOrigin.IMAGE_RECS_MENU === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.IMAGE_RECS_MENU;
  } else if (ApplicationCommandSectionType.CommandOrigin.IMAGE_RECS_SUBMENU === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.IMAGE_RECS_SUBMENU;
  } else if (ApplicationCommandSectionType.CommandOrigin.ACTIVITY_INSTANCE_EMBED === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.ACTIVITY_INSTANCE_EMBED;
  } else if (ApplicationCommandSectionType.CommandOrigin.ACTIVITY_BOOKMARK_EMBED === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.ACTIVITY_BOOKMARK_EMBED;
  } else if (ApplicationCommandSectionType.CommandOrigin.MINI_SHELF === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.ACTIVITIES_MINI_SHELF;
  } else if (ApplicationCommandSectionType.CommandOrigin.VOICE_TILE_ACTIVITY_SUGGESTIONS === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.VC_TILE_ACTIVITY_SUGGESTION;
  } else if (ApplicationCommandSectionType.CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON === arg0) {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
  } else {
    return ApplicationCommandSectionType.ApplicationCommandTriggerLocations.SLASH_UI;
  }
}
function getMaxAndTotalFileSize() {
  const self = this;
  const apply = _getMaxAndTotalFileSize.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getMaxAndTotalFileSize() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c9 = 0;
    c10 = 0;
    c8 = 0;
    return (function*(arg0, arg1) {
      if (c10 === 2) {
        c10 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp;
              dependencyMap = closure_1;
              closure_4 = undefined;
              closure_1 = 0;
              closure_3 = dependencyMap;
              closure_2 = dependencyMap[Symbol.iterator]();
              if (closure_2 === undefined) {
                obj1 = { totalSize: null, largestUploadedFileSize: null };
                obj1[0] = closure_1;
                obj1[1] = closure_2;
                c10 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = obj1;
                return obj2;
              } else {
                c8 = 1;
                closure_3 = tmp11;
                let obj7 = closure_3;
                if (dependencyMap) {
                  let currentSize = obj7.currentSize;
                  closure_4 = currentSize;
                  if (currentSize == null) {
                    closure_4 = 0;
                  }
                  closure_6 = closure_4;
                } else {
                  c9 = 2;
                  c10 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = obj7.getSize();
                  return obj3;
                }
              }
            }
          } else if (1 === tmp4) {
            c8 = 0;
            closure_2.return();
            throw closure_7;
          } else if (arg0 === 1) {
            c10 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 0;
            closure_2.return();
            c10 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_6 = arg1;
          }
          closure_4 = closure_6;
          if (closure_4 > closure_2) {
            closure_2 = closure_4;
          }
          closure_1 = closure_1 + closure_4;
          c8 = 0;
        }
      }
    })();
  });
  closure_23 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _stageAttachments() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === largestUploadedFileSize) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp3;
              let handleUploadsTooLarge = tmp5;
              const callback2 = dependencyMap;
              dependencyMap = undefined;
              closure_5 = undefined;
              let totalSize;
              largestUploadedFileSize = undefined;
              c8 = undefined;
              handleUploadsTooLarge = function handleUploadsTooLarge(arg0) {
                if (callback2 != null) {
                  tmp(dependencyMap, arg0);
                }
                callback2(8331);
                const intl = callback(1236).intl;
                const obj = { maxSize: callback(4834).sizeString(dependencyMap) };
                obj.setFailed(closure_1, closure_1_11.ENTITY_TOO_LARGE, intl.formatToPlainString(callback(1236).t.fxEKdS, obj));
                const obj3 = callback(4834);
              };
              dependencyMap = lib(4834).maxFileSize(callback2);
              largestUploadedFileSize = 1;
              c8 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_22(lib, false);
              return obj1;
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_5 = arg1;
              totalSize = closure_5.totalSize;
              largestUploadedFileSize = closure_5.largestUploadedFileSize;
              const _Math = Math;
              if (largestUploadedFileSize <= Math.max(dependencyMap, closure_1_15)) {
                if (totalSize <= lib(4830).MAX_TOTAL_ATTACHMENT_SIZE) {
                  totalSize = 1;
                  largestUploadedFileSize = 4;
                  c8 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = callback(7586)(lib);
                  return obj3;
                }
              }
              closure_1_4(c7);
              c8 = 3;
              return { value: false, done: true };
            }
          } else {
            if (2 === tmp8) {
              totalSize = 0;
              obj3 = callback2(8331);
              let intl = lib(1236).intl;
              const obj4 = { count: null };
              obj4[0] = lib.length;
              obj3.setFailed(callback, undefined, intl.formatToPlainString(lib(1236).t["9h1/1p"], obj4));
              callback3(lib, true);
              largestUploadedFileSize = 3;
              c8 = 1;
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                c8 = arg1;
                totalSize = c8.totalSize;
                largestUploadedFileSize = c8.largestUploadedFileSize;
                let someResult = lib.some((item, index) => item.error === constants.ENTITY_TOO_LARGE);
                if (!someResult) {
                  someResult = totalSize > lib(4830).MAX_TOTAL_ATTACHMENT_SIZE;
                }
                let flag = !someResult;
                if (someResult) {
                  closure_1_4(c7);
                  flag = false;
                }
                c8 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = flag;
                return obj6;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              totalSize = 0;
            }
            totalSize = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp49) {
          if (tmp4 === totalSize) {
            c8 = tmp2;
            throw tmp49;
          } else {
            largestUploadedFileSize = tmp;
          }
        }
      }
    })();
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AbortCodes: unpackModuleId, AnalyticEvents: closure_12, MessageTypes: map1, NON_USER_BOT_DISCRIMINATOR: closure_14 } = ME);
let result = require("obj132").fileFinishedImporting("modules/application_commands/executeCommand.tsx");

export default function executeCommand() {
  const self = this;
  const apply = _executeCommand.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const retryCommandMessage = function retryCommandMessage(id2, id, arg2) {
  const self = this;
  const apply = _retryCommandMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
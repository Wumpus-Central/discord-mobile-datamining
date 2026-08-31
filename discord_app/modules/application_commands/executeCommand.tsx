// === Module 8406: _executeCommand ===

// Module 8406 (_executeCommand)
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 7236 */;
import _fetchMessageInteractionDataAll from "_fetchMessageInteractionData" /* 7994 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "getEmojiToGroupId" /* 5369 */;
import closure_6 from "_getSystemLocale" /* 1996 */;
import closure_7 from "createGuildRecordFromRust" /* 1909 */;
import closure_8 from "map" /* 4821 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import closure_10 from "handleInit" /* 7492 */;
import ME from "ME" /* 676 */;
import { DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE as closure_15 } from "MESSAGE_GROUP_SPACING" /* 4441 */;

require = arg1;
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
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = interactionLifecycleOptions;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp2;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp3 === 3) {
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
            let num = 2;
            channelId = 2;
            let tmp4 = c15;
            if (0 === c15) {
              if (arg0 === 1) {
                let num13 = 3;
                channelId = 3;
                throw interactionLifecycleOptions;
              } else if (arg0 === 2) {
                let num12 = 3;
                channelId = 3;
                obj = { value: null, done: true };
                obj[0] = interactionLifecycleOptions;
                return obj;
              } else {
                let arr = throwTypeErrorResult;
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
                throwTypeErrorResult = lib;
                ({ command: c0, optionValues: closure_1, context: closure_2, commandTargetId: closure_3, maxSizeCallback: options, commandOrigin } = lib);
                if (commandOrigin === undefined) {
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = closure_1_3;
                  commandOrigin = lib(closure_1_3[9]).CommandOrigin.CHAT;
                }
                c5 = commandOrigin;
                ({ sectionName: closure_6, interactionLifecycleOptionsFactory } = throwTypeErrorResult);
                if (interactionLifecycleOptionsFactory === undefined) {
                  interactionLifecycleOptionsFactory = closure_1_19;
                }
                id = interactionLifecycleOptionsFactory;
                untranslatedName = throwTypeErrorResult.source;
                let obj12;
                let store;
                items = undefined;
                arr = undefined;
                let commandAttachmentDraftType;
                let user;
                c15 = undefined;
                channelId = undefined;
                let length;
                closure_18 = undefined;
                closure_19 = undefined;
                closure_20 = undefined;
                let lib3;
                closure_22 = undefined;
                closure_23 = undefined;
                closure_24 = undefined;
                let upload;
                length = undefined;
                closure_27 = undefined;
                closure_28 = undefined;
                closure_29 = undefined;
                let name;
                let obj11;
                c15 = 1;
                let num11 = 1;
                channelId = 1;
                return { value: "Object", done: true };
              }
            } else {
              if (1 === tmp4) {
                if (arg0 === 1) {
                  let num10 = 3;
                  channelId = 3;
                  throw interactionLifecycleOptions;
                } else if (arg0 === 2) {
                  let num9 = 3;
                  channelId = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = interactionLifecycleOptions;
                  return obj1;
                } else {
                  throwTypeErrorResult = items;
                  throwTypeErrorResult = lib2;
                  if (null != lib2.channel) {
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = arr;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = lib2;
                    throwTypeErrorResult = store.getSource(lib2.channel.id);
                    dependencyMap = throwTypeErrorResult;
                    if (throwTypeErrorResult == null) {
                      throwTypeErrorResult = items;
                      throwTypeErrorResult = untranslatedName;
                      dependencyMap = untranslatedName;
                    }
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = arr;
                    throwTypeErrorResult = dependencyMap;
                    obj12 = dependencyMap;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = lib2;
                    throwTypeErrorResult = store.getCommandOrigin(lib2.channel.id);
                    lib2 = throwTypeErrorResult;
                    if (throwTypeErrorResult == null) {
                      throwTypeErrorResult = items;
                      throwTypeErrorResult = c5;
                      lib2 = c5;
                    }
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = lib2;
                    store = lib2;
                    throwTypeErrorResult = lib2;
                    if (null == lib2.autocomplete) {
                      throwTypeErrorResult = items;
                      throwTypeErrorResult = arr;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = closure_3;
                      let obj24 = dependencyMap(closure_3[10]);
                      let obj2 = { type: "APPLICATION_COMMAND_USED", context: null, command: null, commandOrigin: null };
                      throwTypeErrorResult = lib2;
                      obj2[1] = lib2;
                      throwTypeErrorResult = lib;
                      obj2[2] = lib;
                      throwTypeErrorResult = store;
                      obj2[3] = store;
                      throwTypeErrorResult = obj24.dispatch(obj2);
                    }
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = arr;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_3;
                    let obj26 = dependencyMap(closure_3[11]);
                    throwTypeErrorResult = lib2;
                    c15 = 2;
                    let num8 = 1;
                    channelId = 1;
                    let obj3 = { value: null, done: false };
                    obj3[0] = obj26.unarchiveThreadIfNecessary(lib2.channel.id);
                    return obj3;
                  } else {
                    let num7 = 3;
                    channelId = 3;
                  }
                }
              } else if (2 === tmp4) {
                if (arg0 === 1) {
                  let num6 = 3;
                  channelId = 3;
                  throw interactionLifecycleOptions;
                } else if (arg0 === 2) {
                  let num5 = 3;
                  channelId = 3;
                  let obj4 = { value: null, done: true };
                  obj4[0] = interactionLifecycleOptions;
                  return obj4;
                } else {
                  throwTypeErrorResult = items;
                  throwTypeErrorResult = arr;
                  items = [];
                  arr = [];
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = closure_3;
                  let obj31 = lib(closure_3[12]);
                  throwTypeErrorResult = store;
                  commandAttachmentDraftType = obj31.getCommandAttachmentDraftType(store);
                  throwTypeErrorResult = lib;
                  if (null != lib.options) {
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = lib;
                    options = lib.options;
                    throwTypeErrorResult = options;
                    closure_3 = options[Symbol.iterator]();
                    let tmp11 = options;
                    let tmp12 = closure_3;
                    while (closure_3 !== undefined) {
                      throwTypeErrorResult = items;
                      throwTypeErrorResult = arr;
                      commandAttachmentDraftType = 1;
                      user = tmp13;
                      throwTypeErrorResult = user;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = closure_3;
                      if (user.type !== lib(closure_3[13]).ApplicationCommandOptionType.SUB_COMMAND) {
                        throwTypeErrorResult = items;
                        throwTypeErrorResult = arr;
                        throwTypeErrorResult = user;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = closure_3;
                        if (user.type !== lib(closure_3[13]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
                          throwTypeErrorResult = items;
                          throwTypeErrorResult = user;
                          throwTypeErrorResult = dependencyMap;
                          if (user.name in dependencyMap) {
                            let tmp14 = items;
                            let tmp15 = lib2;
                            let autocomplete = lib2.autocomplete;
                            name = undefined;
                            if (autocomplete != null) {
                              name = autocomplete.name;
                            }
                            let tmp17 = items;
                            let tmp18 = user;
                            let tmp19 = name === user.name || undefined;
                            let tmp20 = items;
                            let tmp21 = arr;
                            c15 = tmp19;
                            channelId = undefined;
                            let tmp22 = user;
                            let tmp23 = lib;
                            let tmp24 = closure_3;
                            if (user.type !== lib(closure_3[13]).ApplicationCommandOptionType.STRING) {
                              let tmp76 = items;
                              let tmp77 = arr;
                              let tmp78 = user;
                              let tmp79 = lib;
                              let tmp80 = closure_3;
                              if (user.type !== lib(closure_3[13]).ApplicationCommandOptionType.ATTACHMENT) {
                                let tmp92 = items;
                                let tmp93 = arr;
                                let tmp94 = lib2;
                                let tmp95 = closure_3;
                                let obj5 = lib2(closure_3[14]);
                                let tmp96 = dependencyMap;
                                let tmp97 = user;
                                length = obj5.filterEmpty(dependencyMap[user.name]);
                                let tmp98 = dependencyMap;
                                let tmp99 = closure_3;
                                throwTypeErrorResult = lib2;
                                throwTypeErrorResult = null != lib2.autocomplete;
                                throwTypeErrorResult = dependencyMap(closure_3[16]);
                                if (!throwTypeErrorResult) {
                                  throwTypeErrorResult = items;
                                  throwTypeErrorResult = length;
                                  throwTypeErrorResult = 1 === length.length;
                                }
                                throwTypeErrorResult = items;
                                throwTypeErrorResult = user;
                                let _HermesInternal2 = HermesInternal;
                                throwTypeErrorResult = throwTypeErrorResult(throwTypeErrorResult, "Option \"" + user.name + "\" expects a single option type");
                                throwTypeErrorResult = length;
                                if (null != length[0]) {
                                  throwTypeErrorResult = items;
                                  throwTypeErrorResult = length;
                                  throwTypeErrorResult = length[0];
                                  closure_6 = throwTypeErrorResult;
                                  if (throwTypeErrorResult == null) {
                                    closure_6 = { type: "text", text: "" };
                                  }
                                  throwTypeErrorResult = items;
                                  throwTypeErrorResult = arr;
                                  throwTypeErrorResult = closure_6;
                                  closure_18 = closure_6;
                                  throwTypeErrorResult = user;
                                  let type = user.type;
                                  throwTypeErrorResult = lib;
                                  throwTypeErrorResult = closure_3;
                                  if (lib(closure_3[13]).ApplicationCommandOptionType.CHANNEL === type) {
                                    throwTypeErrorResult = items;
                                    throwTypeErrorResult = closure_18;
                                    if ("channelMention" === closure_18.type) {
                                      throwTypeErrorResult = items;
                                      throwTypeErrorResult = closure_18;
                                      channelId = closure_18.channelId;
                                    } else {
                                      throwTypeErrorResult = items;
                                      throwTypeErrorResult = closure_18;
                                      if ("text" === closure_18.type) {
                                        throwTypeErrorResult = items;
                                        throwTypeErrorResult = arr;
                                        throwTypeErrorResult = lib;
                                        throwTypeErrorResult = closure_3;
                                        let obj38 = lib(closure_3[12]);
                                        throwTypeErrorResult = closure_18;
                                        throwTypeErrorResult = items;
                                        if (obj38.isSnowflake(closure_18.text)) {
                                          throwTypeErrorResult = closure_18;
                                          let str4 = closure_18.text;
                                          channelId = str4.trim();
                                        } else {
                                          throwTypeErrorResult = arr;
                                          throwTypeErrorResult = lib;
                                          throwTypeErrorResult = closure_3;
                                          let obj15 = lib(closure_3[17]);
                                          throwTypeErrorResult = closure_18;
                                          throwTypeErrorResult = lib2;
                                          let guild7 = lib2.guild;
                                          throwTypeErrorResult = undefined;
                                          if (guild7 != null) {
                                            throwTypeErrorResult = guild7.id;
                                          }
                                          throwTypeErrorResult = items;
                                          throwTypeErrorResult = arr;
                                          throwTypeErrorResult = lib2;
                                          closure_19 = obj15.resolveApplicationCommandOption(closure_18.text, throwTypeErrorResult, lib2.channel.id);
                                          throwTypeErrorResult = dependencyMap;
                                          throwTypeErrorResult = closure_3;
                                          throwTypeErrorResult = undefined;
                                          throwTypeErrorResult = dependencyMap(closure_3[16]);
                                          if (closure_19 != null) {
                                            throwTypeErrorResult = closure_19.type;
                                          }
                                          throwTypeErrorResult = items;
                                          throwTypeErrorResult = closure_18;
                                          let _HermesInternal7 = HermesInternal;
                                          throwTypeErrorResult = throwTypeErrorResult("channelMention" === throwTypeErrorResult, "Failed to resolve " + closure_18.text);
                                          throwTypeErrorResult = closure_19;
                                          channelId = closure_19.channelId;
                                        }
                                      }
                                    }
                                  } else {
                                    throwTypeErrorResult = arr;
                                    throwTypeErrorResult = lib;
                                    throwTypeErrorResult = closure_3;
                                    if (lib(closure_3[13]).ApplicationCommandOptionType.ROLE === type) {
                                      throwTypeErrorResult = items;
                                      throwTypeErrorResult = closure_18;
                                      if ("roleMention" === closure_18.type) {
                                        throwTypeErrorResult = items;
                                        throwTypeErrorResult = closure_18;
                                        channelId = closure_18.roleId;
                                      } else {
                                        throwTypeErrorResult = items;
                                        throwTypeErrorResult = closure_18;
                                        if ("text" === closure_18.type) {
                                          throwTypeErrorResult = items;
                                          throwTypeErrorResult = arr;
                                          throwTypeErrorResult = lib;
                                          throwTypeErrorResult = closure_3;
                                          obj12 = lib(closure_3[12]);
                                          throwTypeErrorResult = closure_18;
                                          throwTypeErrorResult = items;
                                          if (obj12.isSnowflake(closure_18.text)) {
                                            throwTypeErrorResult = closure_18;
                                            let str3 = closure_18.text;
                                            channelId = str3.trim();
                                          } else {
                                            throwTypeErrorResult = arr;
                                            throwTypeErrorResult = lib;
                                            throwTypeErrorResult = closure_3;
                                            let obj13 = lib(closure_3[17]);
                                            throwTypeErrorResult = closure_18;
                                            let text2 = closure_18.text;
                                            throwTypeErrorResult = lib2;
                                            let guild6 = lib2.guild;
                                            throwTypeErrorResult = undefined;
                                            if (guild6 != null) {
                                              throwTypeErrorResult = guild6.id;
                                            }
                                            throwTypeErrorResult = items;
                                            throwTypeErrorResult = arr;
                                            throwTypeErrorResult = lib2;
                                            throwTypeErrorResult = obj13;
                                            throwTypeErrorResult = text2;
                                            closure_20 = obj13.resolveApplicationCommandOption(text2, throwTypeErrorResult, lib2.channel.id, { allowUsers: false });
                                            throwTypeErrorResult = dependencyMap;
                                            throwTypeErrorResult = closure_3;
                                            throwTypeErrorResult = undefined;
                                            throwTypeErrorResult = dependencyMap(closure_3[16]);
                                            if (closure_20 != null) {
                                              throwTypeErrorResult = closure_20.type;
                                            }
                                            throwTypeErrorResult = items;
                                            throwTypeErrorResult = closure_18;
                                            let _HermesInternal6 = HermesInternal;
                                            throwTypeErrorResult = throwTypeErrorResult("roleMention" === throwTypeErrorResult, "Failed to resolve " + closure_18.text);
                                            throwTypeErrorResult = closure_20;
                                            channelId = closure_20.roleId;
                                          }
                                        } else {
                                          throwTypeErrorResult = items;
                                          throwTypeErrorResult = closure_18;
                                          throwTypeErrorResult = "textMention" === closure_18.type;
                                          if (throwTypeErrorResult) {
                                            throwTypeErrorResult = items;
                                            throwTypeErrorResult = closure_18;
                                            throwTypeErrorResult = "@everyone" === closure_18.text;
                                          }
                                          if (throwTypeErrorResult) {
                                            throwTypeErrorResult = items;
                                            throwTypeErrorResult = lib2;
                                            let guild5 = lib2.guild;
                                            throwTypeErrorResult = undefined;
                                            if (guild5 != null) {
                                              throwTypeErrorResult = guild5.id;
                                            }
                                            throwTypeErrorResult = items;
                                            channelId = throwTypeErrorResult;
                                          }
                                        }
                                      }
                                    } else {
                                      throwTypeErrorResult = arr;
                                      throwTypeErrorResult = lib;
                                      throwTypeErrorResult = closure_3;
                                      if (lib(closure_3[13]).ApplicationCommandOptionType.USER === type) {
                                        throwTypeErrorResult = items;
                                        throwTypeErrorResult = closure_18;
                                        if ("userMention" === closure_18.type) {
                                          throwTypeErrorResult = items;
                                          throwTypeErrorResult = closure_18;
                                          channelId = closure_18.userId;
                                        } else {
                                          throwTypeErrorResult = items;
                                          throwTypeErrorResult = closure_18;
                                          if ("text" === closure_18.type) {
                                            throwTypeErrorResult = items;
                                            throwTypeErrorResult = arr;
                                            throwTypeErrorResult = lib;
                                            throwTypeErrorResult = closure_3;
                                            let obj37 = lib(closure_3[12]);
                                            throwTypeErrorResult = closure_18;
                                            throwTypeErrorResult = items;
                                            if (obj37.isSnowflake(closure_18.text)) {
                                              throwTypeErrorResult = closure_18;
                                              let str2 = closure_18.text;
                                              channelId = str2.trim();
                                            } else {
                                              throwTypeErrorResult = arr;
                                              throwTypeErrorResult = lib;
                                              throwTypeErrorResult = closure_3;
                                              obj11 = lib(closure_3[17]);
                                              throwTypeErrorResult = closure_18;
                                              let text = closure_18.text;
                                              throwTypeErrorResult = lib2;
                                              let guild4 = lib2.guild;
                                              throwTypeErrorResult = undefined;
                                              if (guild4 != null) {
                                                throwTypeErrorResult = guild4.id;
                                              }
                                              throwTypeErrorResult = items;
                                              throwTypeErrorResult = arr;
                                              throwTypeErrorResult = lib2;
                                              throwTypeErrorResult = obj11;
                                              throwTypeErrorResult = text;
                                              lib3 = obj11.resolveApplicationCommandOption(text, throwTypeErrorResult, lib2.channel.id, { allowRoles: false });
                                              throwTypeErrorResult = dependencyMap;
                                              throwTypeErrorResult = closure_3;
                                              throwTypeErrorResult = undefined;
                                              throwTypeErrorResult = dependencyMap(closure_3[16]);
                                              if (lib3 != null) {
                                                throwTypeErrorResult = lib3.type;
                                              }
                                              throwTypeErrorResult = items;
                                              throwTypeErrorResult = closure_18;
                                              let _HermesInternal5 = HermesInternal;
                                              throwTypeErrorResult = throwTypeErrorResult("userMention" === throwTypeErrorResult, "Failed to resolve " + closure_18.text);
                                              throwTypeErrorResult = lib3;
                                              channelId = lib3.userId;
                                            }
                                          }
                                        }
                                      } else {
                                        throwTypeErrorResult = arr;
                                        throwTypeErrorResult = lib;
                                        throwTypeErrorResult = closure_3;
                                        if (lib(closure_3[13]).ApplicationCommandOptionType.MENTIONABLE === type) {
                                          throwTypeErrorResult = items;
                                          throwTypeErrorResult = closure_18;
                                          if ("userMention" === closure_18.type) {
                                            throwTypeErrorResult = items;
                                            throwTypeErrorResult = closure_18;
                                            channelId = closure_18.userId;
                                          } else {
                                            throwTypeErrorResult = items;
                                            throwTypeErrorResult = closure_18;
                                            if ("roleMention" === closure_18.type) {
                                              throwTypeErrorResult = items;
                                              throwTypeErrorResult = closure_18;
                                              channelId = closure_18.roleId;
                                            } else {
                                              throwTypeErrorResult = items;
                                              throwTypeErrorResult = closure_18;
                                              if ("textMention" === closure_18.type) {
                                                throwTypeErrorResult = items;
                                                throwTypeErrorResult = closure_18;
                                                if ("@everyone" === closure_18.text) {
                                                  throwTypeErrorResult = items;
                                                  throwTypeErrorResult = lib2;
                                                  let guild3 = lib2.guild;
                                                  throwTypeErrorResult = undefined;
                                                  if (guild3 != null) {
                                                    throwTypeErrorResult = guild3.id;
                                                  }
                                                  throwTypeErrorResult = items;
                                                  channelId = throwTypeErrorResult;
                                                }
                                              }
                                              throwTypeErrorResult = items;
                                              throwTypeErrorResult = closure_18;
                                              if ("text" === closure_18.type) {
                                                throwTypeErrorResult = items;
                                                throwTypeErrorResult = arr;
                                                throwTypeErrorResult = lib;
                                                throwTypeErrorResult = closure_3;
                                                let obj36 = lib(closure_3[12]);
                                                throwTypeErrorResult = closure_18;
                                                throwTypeErrorResult = items;
                                                if (obj36.isSnowflake(closure_18.text)) {
                                                  throwTypeErrorResult = closure_18;
                                                  let str = closure_18.text;
                                                  channelId = str.trim();
                                                } else {
                                                  throwTypeErrorResult = arr;
                                                  throwTypeErrorResult = lib;
                                                  throwTypeErrorResult = closure_3;
                                                  let obj10 = lib(closure_3[17]);
                                                  throwTypeErrorResult = closure_18;
                                                  throwTypeErrorResult = lib2;
                                                  let guild = lib2.guild;
                                                  throwTypeErrorResult = undefined;
                                                  if (guild != null) {
                                                    throwTypeErrorResult = guild.id;
                                                  }
                                                  throwTypeErrorResult = items;
                                                  throwTypeErrorResult = lib2;
                                                  closure_22 = obj10.resolveApplicationCommandOption(closure_18.text, throwTypeErrorResult, lib2.channel.id);
                                                  throwTypeErrorResult = undefined;
                                                  if (closure_22 != null) {
                                                    throwTypeErrorResult = closure_22.type;
                                                  }
                                                  if ("userMention" === throwTypeErrorResult) {
                                                    throwTypeErrorResult = items;
                                                    throwTypeErrorResult = closure_22;
                                                    channelId = closure_22.userId;
                                                  } else {
                                                    throwTypeErrorResult = items;
                                                    throwTypeErrorResult = undefined;
                                                    if (closure_22 != null) {
                                                      throwTypeErrorResult = closure_22.type;
                                                    }
                                                    if ("roleMention" === throwTypeErrorResult) {
                                                      throwTypeErrorResult = items;
                                                      throwTypeErrorResult = closure_22;
                                                      channelId = closure_22.roleId;
                                                    } else {
                                                      throwTypeErrorResult = items;
                                                      throwTypeErrorResult = undefined;
                                                      if (closure_22 != null) {
                                                        throwTypeErrorResult = closure_22.type;
                                                      }
                                                      if ("textMention" === throwTypeErrorResult) {
                                                        throwTypeErrorResult = items;
                                                        throwTypeErrorResult = closure_22;
                                                        if ("@everyone" === closure_22.text) {
                                                          throwTypeErrorResult = items;
                                                          throwTypeErrorResult = lib2;
                                                          let guild2 = lib2.guild;
                                                          throwTypeErrorResult = undefined;
                                                          if (guild2 != null) {
                                                            throwTypeErrorResult = guild2.id;
                                                          }
                                                          throwTypeErrorResult = items;
                                                          channelId = throwTypeErrorResult;
                                                        }
                                                      }
                                                      throwTypeErrorResult = items;
                                                      throwTypeErrorResult = arr;
                                                      throwTypeErrorResult = dependencyMap;
                                                      throwTypeErrorResult = closure_3;
                                                      throwTypeErrorResult = closure_18;
                                                      let _HermesInternal4 = HermesInternal;
                                                      throwTypeErrorResult = dependencyMap(closure_3[16]);
                                                      throwTypeErrorResult = throwTypeErrorResult(false, "Failed to resolve " + closure_18.text);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          throwTypeErrorResult = arr;
                                          throwTypeErrorResult = lib;
                                          throwTypeErrorResult = closure_3;
                                          if (lib(closure_3[13]).ApplicationCommandOptionType.BOOLEAN === type) {
                                            throwTypeErrorResult = items;
                                            throwTypeErrorResult = closure_18;
                                            if ("text" === closure_18.type) {
                                              throwTypeErrorResult = items;
                                              throwTypeErrorResult = arr;
                                              throwTypeErrorResult = lib;
                                              throwTypeErrorResult = closure_3;
                                              let obj35 = lib(closure_3[15]);
                                              throwTypeErrorResult = closure_18;
                                              let str23 = closure_18.text;
                                              channelId = obj35.toChoiceBooleanValue(str23.trim());
                                            }
                                          } else {
                                            throwTypeErrorResult = arr;
                                            throwTypeErrorResult = lib;
                                            throwTypeErrorResult = closure_3;
                                            if (lib(closure_3[13]).ApplicationCommandOptionType.INTEGER === type) {
                                              throwTypeErrorResult = items;
                                              throwTypeErrorResult = closure_18;
                                              if ("text" === closure_18.type) {
                                                throwTypeErrorResult = items;
                                                throwTypeErrorResult = closure_18;
                                                let str22 = closure_18.text;
                                                closure_23 = str22.trim();
                                                throwTypeErrorResult = user;
                                                if (null != user.choices) {
                                                  throwTypeErrorResult = items;
                                                  throwTypeErrorResult = arr;
                                                  throwTypeErrorResult = lib;
                                                  throwTypeErrorResult = closure_3;
                                                  let obj9 = lib(closure_3[15]);
                                                  throwTypeErrorResult = user;
                                                  throwTypeErrorResult = closure_23;
                                                  channelId = obj9.findChoiceNumberValue(user.choices, closure_23);
                                                } else {
                                                  throwTypeErrorResult = items;
                                                  throwTypeErrorResult = user;
                                                  if (user.autocomplete) {
                                                    throwTypeErrorResult = items;
                                                    throwTypeErrorResult = lib2;
                                                    if (null != lib2.autocomplete) {
                                                      throwTypeErrorResult = items;
                                                      throwTypeErrorResult = c15;
                                                      if (c15) {
                                                        throwTypeErrorResult = lib2;
                                                        throwTypeErrorResult = items;
                                                        channelId = lib2.autocomplete.query;
                                                      }
                                                    }
                                                    throwTypeErrorResult = items;
                                                    throwTypeErrorResult = arr;
                                                    throwTypeErrorResult = lib;
                                                    throwTypeErrorResult = closure_3;
                                                    let obj8 = lib(closure_3[15]);
                                                    throwTypeErrorResult = lib2;
                                                    throwTypeErrorResult = user;
                                                    throwTypeErrorResult = closure_23;
                                                    throwTypeErrorResult = obj8.findAutocompleteChoiceNumberValue(lib2.channel.id, user.name, closure_23);
                                                  }
                                                }
                                                throwTypeErrorResult = items;
                                                throwTypeErrorResult = channelId;
                                                if (null == channelId) {
                                                  throwTypeErrorResult = items;
                                                  throwTypeErrorResult = arr;
                                                  let _Number2 = Number;
                                                  throwTypeErrorResult = lib2;
                                                  throwTypeErrorResult = closure_3;
                                                  let obj34 = lib2(closure_3[14]);
                                                  throwTypeErrorResult = closure_6;
                                                  throwTypeErrorResult = closure_23;
                                                  channelId = Number(obj34.normalizeNumericString(closure_6.locale, closure_23));
                                                }
                                              }
                                            } else {
                                              throwTypeErrorResult = arr;
                                              throwTypeErrorResult = lib;
                                              throwTypeErrorResult = closure_3;
                                              if (lib(closure_3[13]).ApplicationCommandOptionType.NUMBER === type) {
                                                throwTypeErrorResult = items;
                                                throwTypeErrorResult = closure_18;
                                                if ("text" === closure_18.type) {
                                                  throwTypeErrorResult = items;
                                                  throwTypeErrorResult = closure_18;
                                                  let str21 = closure_18.text;
                                                  closure_24 = str21.trim();
                                                  throwTypeErrorResult = user;
                                                  if (null != user.choices) {
                                                    throwTypeErrorResult = items;
                                                    throwTypeErrorResult = arr;
                                                    throwTypeErrorResult = lib;
                                                    throwTypeErrorResult = closure_3;
                                                    let obj7 = lib(closure_3[15]);
                                                    throwTypeErrorResult = user;
                                                    throwTypeErrorResult = closure_24;
                                                    channelId = obj7.findChoiceNumberValue(user.choices, closure_24);
                                                  } else {
                                                    throwTypeErrorResult = items;
                                                    throwTypeErrorResult = user;
                                                    if (user.autocomplete) {
                                                      throwTypeErrorResult = items;
                                                      throwTypeErrorResult = lib2;
                                                      if (null != lib2.autocomplete) {
                                                        throwTypeErrorResult = items;
                                                        throwTypeErrorResult = c15;
                                                        if (c15) {
                                                          throwTypeErrorResult = lib2;
                                                          throwTypeErrorResult = items;
                                                          channelId = lib2.autocomplete.query;
                                                        }
                                                      }
                                                      throwTypeErrorResult = items;
                                                      throwTypeErrorResult = arr;
                                                      throwTypeErrorResult = lib;
                                                      throwTypeErrorResult = closure_3;
                                                      let obj6 = lib(closure_3[15]);
                                                      throwTypeErrorResult = lib2;
                                                      throwTypeErrorResult = user;
                                                      throwTypeErrorResult = closure_24;
                                                      throwTypeErrorResult = obj6.findAutocompleteChoiceNumberValue(lib2.channel.id, user.name, closure_24);
                                                    }
                                                  }
                                                  throwTypeErrorResult = items;
                                                  throwTypeErrorResult = channelId;
                                                  if (null == channelId) {
                                                    throwTypeErrorResult = items;
                                                    throwTypeErrorResult = arr;
                                                    let _Number = Number;
                                                    throwTypeErrorResult = lib2;
                                                    throwTypeErrorResult = closure_3;
                                                    let obj33 = lib2(closure_3[14]);
                                                    throwTypeErrorResult = closure_6;
                                                    throwTypeErrorResult = closure_24;
                                                    channelId = Number(obj33.normalizeNumericString(closure_6.locale, closure_24));
                                                  }
                                                }
                                              } else {
                                                throwTypeErrorResult = items;
                                                let _Error = Error;
                                                throwTypeErrorResult = user;
                                                let _HermesInternal3 = HermesInternal;
                                                throwTypeErrorResult = new.target;
                                                throwTypeErrorResult = new.target;
                                                throwTypeErrorResult = new Error("Unsupported option type: " + user.type);
                                                throw throwTypeErrorResult;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  throwTypeErrorResult = items;
                                  throwTypeErrorResult = channelId;
                                  throwTypeErrorResult = "" !== channelId;
                                  if (!throwTypeErrorResult) {
                                    throwTypeErrorResult = lib2;
                                    throwTypeErrorResult = null == lib2.autocomplete;
                                  }
                                  if (!throwTypeErrorResult) {
                                    throwTypeErrorResult = items;
                                    throwTypeErrorResult = c15;
                                  }
                                  if (throwTypeErrorResult) {
                                    throwTypeErrorResult = items;
                                    throwTypeErrorResult = arr;
                                    throwTypeErrorResult = dependencyMap;
                                    throwTypeErrorResult = closure_3;
                                    throwTypeErrorResult = lib2;
                                    throwTypeErrorResult = null != lib2.autocomplete;
                                    throwTypeErrorResult = dependencyMap(closure_3[16]);
                                    if (!throwTypeErrorResult) {
                                      throwTypeErrorResult = items;
                                      throwTypeErrorResult = channelId;
                                      throwTypeErrorResult = null != channelId;
                                    }
                                    throwTypeErrorResult = items;
                                    throwTypeErrorResult = user;
                                    let _HermesInternal8 = HermesInternal;
                                    throwTypeErrorResult = throwTypeErrorResult(throwTypeErrorResult, "Unexpected value for option \"" + user.name + "\"");
                                    throwTypeErrorResult = channelId;
                                    if (null != channelId) {
                                      throwTypeErrorResult = items;
                                      throwTypeErrorResult = items;
                                      obj5 = { type: null, name: null, value: null, focused: null };
                                      throwTypeErrorResult = user;
                                      obj5[0] = user.type;
                                      throwTypeErrorResult = user;
                                      obj5[1] = user.name;
                                      throwTypeErrorResult = channelId;
                                      obj5[2] = channelId;
                                      throwTypeErrorResult = c15;
                                      obj5[3] = c15;
                                      throwTypeErrorResult = items.push(obj5);
                                    }
                                  }
                                } else {
                                  throwTypeErrorResult = items;
                                  throwTypeErrorResult = c15;
                                }
                              } else {
                                throwTypeErrorResult = items;
                                throwTypeErrorResult = lib2;
                                if (null != lib2.autocomplete) {
                                  commandAttachmentDraftType = 0;
                                  continue;
                                } else {
                                  throwTypeErrorResult = items;
                                  throwTypeErrorResult = arr;
                                  throwTypeErrorResult = untranslatedName;
                                  throwTypeErrorResult = lib2;
                                  throwTypeErrorResult = user;
                                  throwTypeErrorResult = commandAttachmentDraftType;
                                  upload = untranslatedName.getUpload(lib2.channel.id, user.name, commandAttachmentDraftType);
                                  throwTypeErrorResult = upload;
                                  if (null == upload) {
                                    commandAttachmentDraftType = 0;
                                    continue;
                                  } else {
                                    let tmp81 = items;
                                    let tmp82 = arr;
                                    length = arr.length;
                                    let tmp83 = arr;
                                    let tmp84 = upload;
                                    arr = arr.push(upload);
                                    let tmp86 = items;
                                    obj6 = { type: null, name: null, value: null, focused: null };
                                    let tmp87 = user;
                                    obj6[0] = user.type;
                                    let tmp88 = user;
                                    obj6[1] = user.name;
                                    let tmp89 = length;
                                    obj6[2] = length;
                                    let tmp90 = c15;
                                    obj6[3] = c15;
                                    arr = items.push(obj6);
                                  }
                                }
                                continue;
                              }
                              continue;
                            } else {
                              throwTypeErrorResult = items;
                              throwTypeErrorResult = arr;
                              throwTypeErrorResult = lib2;
                              throwTypeErrorResult = closure_3;
                              let obj32 = lib2(closure_3[14]);
                              throwTypeErrorResult = dependencyMap;
                              throwTypeErrorResult = user;
                              let str20 = obj32.getOptionalString(dependencyMap, user.name);
                              let trimmed;
                              if (str20 != null) {
                                trimmed = str20.trim();
                              }
                              c5 = trimmed;
                              if (trimmed == null) {
                                c5 = "";
                              }
                              let tmp26 = items;
                              let tmp27 = c5;
                              closure_27 = c5;
                              let tmp28 = user;
                              if (null != user.choices) {
                                let tmp43 = items;
                                let tmp44 = arr;
                                let tmp45 = lib;
                                let tmp46 = closure_3;
                                obj2 = lib(closure_3[15]);
                                let tmp47 = user;
                                let tmp48 = closure_27;
                                channelId = obj2.findChoiceStringValue(user.choices, closure_27);
                              } else {
                                throwTypeErrorResult = items;
                                throwTypeErrorResult = user;
                                if (user.autocomplete) {
                                  let tmp29 = items;
                                  let tmp30 = lib2;
                                  if (null != lib2.autocomplete) {
                                    let tmp31 = items;
                                    let tmp32 = c15;
                                    if (c15) {
                                      let tmp41 = lib2;
                                      let tmp42 = items;
                                      channelId = lib2.autocomplete.query;
                                    }
                                  }
                                  let tmp33 = items;
                                  let tmp34 = arr;
                                  let tmp35 = lib;
                                  let tmp36 = closure_3;
                                  obj1 = lib(closure_3[15]);
                                  let tmp37 = lib2;
                                  let tmp38 = user;
                                  let tmp39 = closure_27;
                                  let result = obj1.findAutocompleteChoiceStringValue(lib2.channel.id, user.name, closure_27);
                                }
                              }
                              let tmp49 = items;
                              let tmp50 = channelId;
                              if (null == channelId) {
                                let tmp51 = items;
                                let tmp52 = closure_27;
                                channelId = closure_27;
                              }
                              let tmp53 = items;
                              let tmp54 = channelId;
                              if ("" === channelId) {
                                let tmp55 = lib2;
                                if (null != lib2.autocomplete) {
                                  let tmp56 = items;
                                  let tmp57 = c15;
                                  if (!c15) {
                                    commandAttachmentDraftType = 0;
                                    continue;
                                  }
                                  continue;
                                }
                              }
                              let tmp58 = items;
                              let tmp59 = arr;
                              let tmp60 = dependencyMap;
                              let tmp61 = closure_3;
                              let tmp63 = lib2;
                              let tmp64 = null != lib2.autocomplete;
                              let tmp62 = dependencyMap(closure_3[16]);
                              if (!tmp64) {
                                let tmp65 = items;
                                let tmp66 = channelId;
                                tmp64 = null != channelId;
                              }
                              let tmp67 = items;
                              let tmp68 = user;
                              let _HermesInternal = HermesInternal;
                              let tmp62Result = tmp62(tmp64, "Option \"" + user.name + "\" expects a value");
                              let tmp70 = items;
                              obj7 = { type: null, name: null, value: null, focused: null };
                              let tmp71 = user;
                              obj7[0] = user.type;
                              let tmp72 = user;
                              obj7[1] = user.name;
                              let tmp73 = channelId;
                              obj7[2] = channelId;
                              let tmp74 = c15;
                              obj7[3] = c15;
                              let arr1 = items.push(obj7);
                            }
                          }
                          continue;
                        }
                      }
                      commandAttachmentDraftType = 0;
                      continue;
                    }
                  }
                  throwTypeErrorResult = items;
                  throwTypeErrorResult = lib;
                  if (null != lib.subCommandPath) {
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = lib;
                    closure_28 = lib.subCommandPath.length - 1;
                    throwTypeErrorResult = closure_28;
                    if (closure_28 >= 0) {
                      do {
                        throwTypeErrorResult = items;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = closure_28;
                        closure_29 = lib.subCommandPath[closure_28];
                        throwTypeErrorResult = closure_29;
                        name = closure_29.name;
                        obj8 = { type: null, name: null, options: null };
                        throwTypeErrorResult = closure_29;
                        obj8[0] = closure_29.type;
                        throwTypeErrorResult = name;
                        obj8[1] = name;
                        throwTypeErrorResult = items;
                        obj8[2] = items;
                        items = [obj8];
                        throwTypeErrorResult = items;
                        throwTypeErrorResult = closure_28;
                        closure_28 = closure_28 - 1;
                        throwTypeErrorResult = closure_28;
                      } while (closure_28 >= 0);
                    }
                  }
                  throwTypeErrorResult = items;
                  throwTypeErrorResult = lib;
                  if (null != lib.execute) {
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = arr;
                    throwTypeErrorResult = dependencyMap;
                    throwTypeErrorResult = closure_3;
                    let obj20 = dependencyMap(closure_3[18]);
                    throwTypeErrorResult = arr;
                    obj9 = { command_id: null, application_id: null, command_type: null, location: null, source: null };
                    throwTypeErrorResult = lib;
                    obj9[0] = lib.id;
                    throwTypeErrorResult = lib;
                    obj9[1] = lib.applicationId;
                    throwTypeErrorResult = lib;
                    obj9[2] = lib.type;
                    throwTypeErrorResult = lib3;
                    throwTypeErrorResult = store;
                    obj9[3] = lib3(store);
                    throwTypeErrorResult = obj12;
                    obj9[4] = obj12;
                    throwTypeErrorResult = obj20.trackWithMetadata(arr.APPLICATION_COMMAND_USED, obj9);
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = lib2;
                    let num4 = 3;
                    channelId = 3;
                    obj10 = { value: null, done: true };
                    obj10[0] = lib.execute(items, lib2);
                    return obj10;
                  } else {
                    throwTypeErrorResult = items;
                    throwTypeErrorResult = arr;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = closure_3;
                    if (lib.inputType !== lib(closure_3[9]).ApplicationCommandInputType.BUILT_IN) {
                      throwTypeErrorResult = items;
                      throwTypeErrorResult = arr;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = closure_3;
                      if (lib.inputType !== lib(closure_3[9]).ApplicationCommandInputType.BUILT_IN_TEXT) {
                        throwTypeErrorResult = items;
                        throwTypeErrorResult = arr;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = closure_3;
                        if (lib.inputType !== lib(closure_3[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION) {
                          throwTypeErrorResult = items;
                          obj11 = { version: null, id: null, guild_id: null, name: null, type: null, options: null, application_command: null };
                          throwTypeErrorResult = lib;
                          obj11[0] = lib.version;
                          throwTypeErrorResult = lib;
                          let rootCommand2 = lib.rootCommand;
                          throwTypeErrorResult = undefined;
                          if (rootCommand2 != null) {
                            throwTypeErrorResult = rootCommand2.id;
                          }
                          id = throwTypeErrorResult;
                          if (throwTypeErrorResult == null) {
                            throwTypeErrorResult = items;
                            throwTypeErrorResult = lib;
                            id = lib.id;
                          }
                          throwTypeErrorResult = items;
                          throwTypeErrorResult = id;
                          obj11[1] = id;
                          throwTypeErrorResult = lib;
                          obj11[2] = lib.guildId;
                          throwTypeErrorResult = lib;
                          let rootCommand = lib.rootCommand;
                          throwTypeErrorResult = undefined;
                          if (rootCommand != null) {
                            throwTypeErrorResult = rootCommand.name;
                          }
                          untranslatedName = throwTypeErrorResult;
                          if (throwTypeErrorResult == null) {
                            throwTypeErrorResult = items;
                            throwTypeErrorResult = lib;
                            untranslatedName = lib.untranslatedName;
                          }
                          throwTypeErrorResult = items;
                          throwTypeErrorResult = untranslatedName;
                          obj11[3] = untranslatedName;
                          throwTypeErrorResult = lib;
                          obj11[4] = lib.type;
                          throwTypeErrorResult = items;
                          obj11[5] = items;
                          throwTypeErrorResult = lib;
                          obj11[6] = lib.rootCommand;
                          throwTypeErrorResult = closure_3;
                          if (null != closure_3) {
                            throwTypeErrorResult = items;
                            throwTypeErrorResult = obj11;
                            throwTypeErrorResult = closure_3;
                            obj11.target_id = closure_3;
                          }
                          throwTypeErrorResult = items;
                          throwTypeErrorResult = lib2;
                          if (null != lib2.autocomplete) {
                            throwTypeErrorResult = items;
                            throwTypeErrorResult = arr;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = closure_3;
                            let obj19 = lib(closure_3[19]);
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = lib2;
                            throwTypeErrorResult = obj11;
                            throwTypeErrorResult = obj19.performAutocomplete(lib, lib2, obj11);
                          } else {
                            throwTypeErrorResult = items;
                            throwTypeErrorResult = arr;
                            throwTypeErrorResult = dependencyMap;
                            throwTypeErrorResult = closure_3;
                            let obj40 = dependencyMap(closure_3[20]);
                            throwTypeErrorResult = lib2;
                            throwTypeErrorResult = commandAttachmentDraftType;
                            throwTypeErrorResult = obj40.clearAll(lib2.channel.id, commandAttachmentDraftType);
                            throwTypeErrorResult = closure_18;
                            store = closure_18;
                            obj12 = {};
                            throwTypeErrorResult = lib;
                            obj12.applicationId = lib.applicationId;
                            throwTypeErrorResult = obj11;
                            obj12.data = obj11;
                            throwTypeErrorResult = lib2;
                            obj12.context = lib2;
                            throwTypeErrorResult = arr;
                            obj12.attachments = arr;
                            throwTypeErrorResult = options;
                            obj12.maxSizeCallback = options;
                            obj12.onMessageSuccess = function onMessageSuccess(arg0) {
                              const values = Object.values(callback);
                              const flatMapResult = values.flatMap((arr) => {
                                const mapped = arr.map(() => { ... });
                                return mapped.filter(callback(table[22]).isNotNullish);
                              });
                              if (flatMapResult.length > 0) {
                                let obj = { type: "EMOJI_TRACK_USAGE", emojiUsed: null };
                                obj[1] = flatMapResult;
                                callback(table[10]).dispatch(obj);
                                const obj2 = callback(table[10]);
                              }
                            };
                            throwTypeErrorResult = lib3;
                            throwTypeErrorResult = store;
                            obj12.analytics_location = lib3(store);
                            throwTypeErrorResult = closure_6;
                            obj12.sectionName = closure_6;
                            throwTypeErrorResult = obj12;
                            obj12.source = obj12;
                            throwTypeErrorResult = id;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = lib2;
                            throwTypeErrorResult = obj11;
                            c15 = 4;
                            let num20 = 1;
                            channelId = 1;
                            obj13 = { value: null, done: false };
                            obj13[0] = id(lib, lib2, obj11);
                            return obj13;
                          }
                        }
                      }
                    }
                  }
                }
              } else if (3 === tmp4) {
                let tmp8 = user;
                let tmp9 = user;
                commandAttachmentDraftType = 0;
                let tmp10 = closure_3;
                closure_3.return();
                throw user;
              } else if (arg0 === 1) {
                let num3 = 3;
                channelId = 3;
                throw interactionLifecycleOptions;
              } else if (arg0 !== 2) {
                let tmp5 = obj12;
                let tmp6 = store;
                obj12.interactionLifecycleOptions = interactionLifecycleOptions;
                let tmp7 = store(obj12);
              }
              let num2 = 3;
              channelId = 3;
              obj = { value: null, done: true };
              obj[0] = interactionLifecycleOptions;
              return obj;
            }
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
                if (null != tmp19.interactionData) {
                  if (null != tmp21.command) {
                    obj1 = { channel: null, guild: null };
                    obj1[0] = tmp20;
                    let guild = null;
                    if (null != tmp20.guild_id) {
                      guild = closure_1_7.getGuild(tmp20.guild_id);
                    }
                    obj1[1] = guild;
                    const callback = closure_1_18;
                    const obj2 = { applicationId: tmp21.command.applicationId, data: tmp19.interactionData, context: obj1 };
                    c5 = 1;
                    c6 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = closure_1_19(tmp21.command, obj1, tmp19.interactionData);
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
    let id = context.channel.id;
    id = undefined;
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
      obj1 = obj(7466);
      nonce = obj1.createNonce();
    }
    obj[4] = nonce;
    obj[5] = attachments;
    obj[6] = maxSizeCallback;
    obj[7] = tmp2;
    obj[8] = tmp3;
    obj[9] = tmp4;
    onMessageSuccess = obj;
    obj = { messageId: null, onCreate: null, onSuccess: null, onFailure: null, data: null };
    ({ messageId: obj4[0], onCreate: obj4[1], onSuccess: obj4[2], onFailure: obj4[3] } = interactionLifecycleOptions);
    obj = { interactionType: null, applicationId: null, channelId: null };
    obj[0] = obj(1955).InteractionTypes.APPLICATION_COMMAND;
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
        })(attachments, obj.nonce, id, maxSizeCallback).then((arg0) => {
          if (arg0) {
            closure_0 = closure_1;
            closure_1 = closure_0;
            obj = onMessageSuccess(closure_1_3[25]);
            obj = { type: null, message: null };
            obj[0] = obj(closure_1_3[25]).MessageDataType.COMMAND;
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
    const obj3 = _fetchMessageInteractionDataAll;
    const tmp10 = obj;
    obj1 = { type: null, message: null };
    obj1[0] = tmp10(7546).MessageDataType.COMMAND;
    obj1[1] = obj;
    onMessageSuccess(7546).enqueue(obj1, (ok) => {
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
    });
    const obj6 = onMessageSuccess(7546);
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
                      obj4[0] = tmp66(closure_1_3[28]).getUser(cachedApplicationSection.botId);
                      return obj4;
                    }
                  }
                }
                const obj17 = lib3(closure_1_3[27]);
                tmp66 = lib3;
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
                obj.sendClydeError(tmp.channel.id, code);
              }
              if (tmp7) {
                result = lib(obj6[26]).interactionCallbackErrorReason(reason, lib.applicationId);
                const obj2 = lib(obj6[26]);
              }
              obj = { type: "MESSAGE_SEND_FAILED", messageId: null, channelId: null, reason: null };
              obj[1] = obj7.id;
              obj[2] = tmp.channel.id;
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
    return tmp(7236).ApplicationCommandTriggerLocations.APP_LAUNCHER;
  } else if (tmp(7236).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW === arg0) {
    return tmp(7236).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
  } else if (tmp(7236).CommandOrigin.IMAGE_RECS_MENU === arg0) {
    return tmp(7236).ApplicationCommandTriggerLocations.IMAGE_RECS_MENU;
  } else if (tmp(7236).CommandOrigin.IMAGE_RECS_SUBMENU === arg0) {
    return tmp(7236).ApplicationCommandTriggerLocations.IMAGE_RECS_SUBMENU;
  } else if (tmp(7236).CommandOrigin.ACTIVITY_INSTANCE_EMBED === arg0) {
    return tmp(7236).ApplicationCommandTriggerLocations.ACTIVITY_INSTANCE_EMBED;
  } else if (tmp(7236).CommandOrigin.ACTIVITY_BOOKMARK_EMBED === arg0) {
    return tmp(7236).ApplicationCommandTriggerLocations.ACTIVITY_BOOKMARK_EMBED;
  } else if (tmp(7236).CommandOrigin.MINI_SHELF === arg0) {
    return tmp(7236).ApplicationCommandTriggerLocations.ACTIVITIES_MINI_SHELF;
  } else if (tmp(7236).CommandOrigin.VOICE_TILE_ACTIVITY_SUGGESTIONS === arg0) {
    return tmp(7236).ApplicationCommandTriggerLocations.VC_TILE_ACTIVITY_SUGGESTION;
  } else if (tmp(7236).CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON === arg0) {
    return tmp(7236).ApplicationCommandTriggerLocations.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
  } else {
    return tmp(7236).ApplicationCommandTriggerLocations.SLASH_UI;
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
          let num = 2;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              let num7 = 3;
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp;
              let tmp30 = dependencyMap;
              let tmp31 = closure_1;
              dependencyMap = closure_1;
              closure_3 = undefined;
              closure_4 = undefined;
              closure_1 = 0;
              closure_2 = 0;
              closure_3 = dependencyMap;
              let tmp32 = dependencyMap;
              closure_3 = dependencyMap;
              closure_2 = dependencyMap[Symbol.iterator]();
              let tmp9 = closure_3;
              let tmp10 = closure_2;
              if (closure_2 === undefined) {
                let tmp23 = closure_5;
                obj1 = { totalSize: null, largestUploadedFileSize: null };
                let tmp24 = closure_1;
                obj1[0] = closure_1;
                let tmp25 = closure_2;
                obj1[1] = closure_2;
                let num5 = 3;
                c10 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = obj1;
                return obj2;
              } else {
                let tmp33 = closure_5;
                c8 = 1;
                closure_3 = tmp11;
                let tmp34 = dependencyMap;
                let obj7 = closure_3;
                if (dependencyMap) {
                  let currentSize = obj7.currentSize;
                  closure_4 = currentSize;
                  let tmp12 = null;
                  if (currentSize == null) {
                    closure_4 = 0;
                  }
                  let tmp13 = closure_4;
                  closure_6 = closure_4;
                } else {
                  c9 = 2;
                  let num4 = 1;
                  c10 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = obj7.getSize();
                  return obj3;
                }
              }
            }
          } else if (1 === tmp4) {
            let tmp6 = closure_7;
            let tmp7 = closure_7;
            c8 = 0;
            let tmp8 = closure_2;
            closure_2.return();
            throw closure_7;
          } else if (arg0 === 1) {
            let num3 = 3;
            c10 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 0;
            let tmp5 = closure_2;
            closure_2.return();
            let num2 = 3;
            c10 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_6 = arg1;
          }
          let tmp14 = closure_5;
          let tmp15 = closure_6;
          closure_4 = closure_6;
          let tmp16 = closure_4;
          let tmp17 = closure_2;
          if (closure_4 > closure_2) {
            let tmp18 = closure_5;
            let tmp19 = closure_4;
            closure_2 = closure_4;
          }
          let tmp20 = closure_5;
          let tmp21 = closure_1;
          let tmp22 = closure_4;
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
                let obj = callback2(7994);
                const intl = callback(1236).intl;
                obj = { maxSize: callback(5046).sizeString(dependencyMap) };
                obj.setFailed(closure_1, closure_1_11.ENTITY_TOO_LARGE, intl.formatToPlainString(callback(1236).t.fxEKdS, obj));
              };
              dependencyMap = lib(5046).maxFileSize(callback2);
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
                if (totalSize <= lib(5042).MAX_TOTAL_ATTACHMENT_SIZE) {
                  totalSize = 1;
                  largestUploadedFileSize = 4;
                  c8 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = callback(7554)(lib);
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
              obj3 = callback2(7994);
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
                let someResult = lib.some((error) => error.error === constants.ENTITY_TOO_LARGE);
                if (!someResult) {
                  someResult = totalSize > lib(5042).MAX_TOTAL_ATTACHMENT_SIZE;
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
let result = require("set").fileFinishedImporting("modules/application_commands/executeCommand.tsx");

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
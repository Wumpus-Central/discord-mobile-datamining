// discord_app/modules/coded_links/MessageCodedLinkManager.tsx
import findCodedLinksDefault from "findCodedLinks.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../messages/setupLoadFromMessageManagerHandlers.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildTemplateStore from "../guild_templates/GuildTemplateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import InviteStore from "../../stores/InviteStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

const require = fn;
function resolveMessageCodedLinks(content) {
  closure_0 = content;
  content = content.content;
  if (content == null) {
    content = null;
  }
  let arr = findCodedLinksDefault(content);
  let tmp2 = null != arr;
  if (tmp2) {
    tmp2 = 0 !== arr.length;
  }
  if (tmp2) {
    let item = arr.forEach((item) => {
      ({ type, code } = item);
      if (code(dependencyMap[5]).CodedLinkType.INVITE === type) {
        let tmpResult = tmp(tmp2[6]);
        const result = tmpResult.queueMessageLinkFetch(
          closure_3(function* (arg0, value) {
            if (c0 === 2) {
              c0 = 3;
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
                c0 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    if (null == invite.getInvite(code)) {
                      let obj1 = v1(dependencyMap[7]);
                      v1 = 1;
                      c0 = 1;
                      obj1 = { value: null, done: false };
                      obj1.value = obj1.resolveInvite(tmp6);
                      return obj1;
                    }
                    tmp6 = code;
                  }
                } else if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  obj = { value, done: true };
                  return obj;
                }
                c0 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp10) {
                c0 = tmp;
                throw tmp10;
              }
            }
          }),
        );
      } else if (tmp(tmp2[5]).CodedLinkType.TEMPLATE === type) {
        tmpResult = tmp(tmp2[6]);
        const result1 = tmpResult.queueMessageLinkFetch(
          closure_3(function* (arg0, value) {
            if (c0 === 2) {
              c0 = 3;
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
                c0 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    if (null == guildTemplate.getGuildTemplate(code)) {
                      let obj1 = v1(dependencyMap[8]);
                      v1 = 1;
                      c0 = 1;
                      obj1 = { value: null, done: false };
                      obj1.value = obj1.resolveGuildTemplate(tmp6);
                      return obj1;
                    }
                    tmp6 = code;
                  }
                } else if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  obj = { value, done: true };
                  return obj;
                }
                c0 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp10) {
                c0 = tmp;
                throw tmp10;
              }
            }
          }),
        );
      } else if (tmp(tmp2[5]).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (tmp(tmp2[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (tmp(tmp2[5]).CodedLinkType.EVENT !== type) {
            if (tmp(tmp2[5]).CodedLinkType.CHANNEL_LINK !== type) {
              if (tmp(tmp2[5]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (tmp(tmp2[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (tmp(tmp2[5]).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (tmp(tmp2[5]).CodedLinkType.SERVER_SHOP !== type) {
                      if (tmp(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                        if (tmp(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                          if (tmp(tmp2[5]).CodedLinkType.QUESTS_EMBED !== type) {
                            if (tmp(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (tmp(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (tmp(tmp2[5]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (tmp(tmp2[5]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (tmp(tmp2[5]).CodedLinkType.EXPERIMENT !== type) {
                                      if (tmp(tmp2[5]).CodedLinkType.GAME_PROFILE !== type) {
                                        if (tmp(tmp2[5]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (tmp(tmp2[5]).CodedLinkType.USER_PROFILE !== type) {
                                            if (tmp(tmp2[5]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                              const embedApplication = tmp(tmp2[9]).getEmbedApplication(code);
                                              const tmpResult1 = tmp(tmp2[9]);
                                            } else {
                                              const _Error = Error;
                                              const _HermesInternal = HermesInternal;
                                              throw Error("Unknown coded link type: " + type);
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
              }
            }
          }
        }
      }
    });
  }
  const message_snapshots = content.message_snapshots;
  if (message_snapshots != null) {
    const item1 = message_snapshots.forEach((message) => {
      const arr = findCodedLinksDefault(message.message.content);
      let tmp = null != arr;
      if (tmp) {
        tmp = 0 !== arr.length;
      }
      if (tmp) {
        const item = arr.forEach((item) => {
          ({ type, code } = item);
          if (code(dependencyMap[5]).CodedLinkType.INVITE === type) {
            let tmpResult = tmp(tmp2[6]);
            const result = tmpResult.queueMessageLinkFetch(
              closure_3(function* (arg0, value) {
                if (c0 === 2) {
                  c0 = 3;
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
                    c0 = 2;
                    if (0 === v1) {
                      if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        if (null == invite.getInvite(code)) {
                          let obj1 = v1(dependencyMap[7]);
                          v1 = 1;
                          c0 = 1;
                          obj1 = { value: null, done: false };
                          obj1.value = obj1.resolveInvite(tmp6);
                          return obj1;
                        }
                        tmp6 = code;
                      }
                    } else if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value, done: true };
                      return obj;
                    }
                    c0 = 3;
                    return { value: "HermesInternal", done: null };
                  } catch (tmp10) {
                    c0 = tmp;
                    throw tmp10;
                  }
                }
              }),
            );
          } else if (tmp(tmp2[5]).CodedLinkType.TEMPLATE === type) {
            tmpResult = tmp(tmp2[6]);
            const result1 = tmpResult.queueMessageLinkFetch(
              closure_3(function* (arg0, value) {
                if (c0 === 2) {
                  c0 = 3;
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
                    c0 = 2;
                    if (0 === v1) {
                      if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        if (null == guildTemplate.getGuildTemplate(code)) {
                          let obj1 = v1(dependencyMap[8]);
                          v1 = 1;
                          c0 = 1;
                          obj1 = { value: null, done: false };
                          obj1.value = obj1.resolveGuildTemplate(tmp6);
                          return obj1;
                        }
                        tmp6 = code;
                      }
                    } else if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value, done: true };
                      return obj;
                    }
                    c0 = 3;
                    return { value: "HermesInternal", done: null };
                  } catch (tmp10) {
                    c0 = tmp;
                    throw tmp10;
                  }
                }
              }),
            );
          } else if (tmp(tmp2[5]).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (tmp(tmp2[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (tmp(tmp2[5]).CodedLinkType.EVENT !== type) {
                if (tmp(tmp2[5]).CodedLinkType.CHANNEL_LINK !== type) {
                  if (tmp(tmp2[5]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                    if (tmp(tmp2[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (tmp(tmp2[5]).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (tmp(tmp2[5]).CodedLinkType.SERVER_SHOP !== type) {
                          if (tmp(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (tmp(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (tmp(tmp2[5]).CodedLinkType.QUESTS_EMBED !== type) {
                                if (tmp(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (tmp(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (tmp(tmp2[5]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                      if (tmp(tmp2[5]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (tmp(tmp2[5]).CodedLinkType.EXPERIMENT !== type) {
                                          if (tmp(tmp2[5]).CodedLinkType.GAME_PROFILE !== type) {
                                            if (tmp(tmp2[5]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                              if (tmp(tmp2[5]).CodedLinkType.USER_PROFILE !== type) {
                                                if (tmp(tmp2[5]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                  const embedApplication = tmp(tmp2[9]).getEmbedApplication(code);
                                                  const tmpResult1 = tmp(tmp2[9]);
                                                } else {
                                                  const _Error = Error;
                                                  const _HermesInternal = HermesInternal;
                                                  throw Error("Unknown coded link type: " + type);
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
                  }
                }
              }
            }
          }
        });
      }
    });
  }
}
class MessageCodedLinkManager extends tmp7 {
  constructor() {
    tmp3 = new MessageCodedLinkManager(tmp2, tmp, new.target);
    tmp4 = closure_1(closure_2[11])(tmp3, resolveMessageCodedLinks);
    return tmp3;
  }
}
tmp = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, MessageCodedLinkManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp, resolveMessageCodedLinks);
const size = fn(2);
let result = size.fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp;

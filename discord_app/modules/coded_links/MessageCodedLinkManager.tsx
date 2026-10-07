// === Module 17591: MessageCodedLinkManager ===

// Module 17591 (MessageCodedLinkManager)
import findCodedLinksDefault from "findCodedLinks" /* 4876 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17605 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6979 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import InviteStore from "InviteStore" /* 4877 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;

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
      if (code(4881).CodedLinkType.INVITE === type) {
        const result = code(17592).queueMessageLinkFetch(closure_3(function*() {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
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
                  const obj4 = { value, done: true };
                  return obj4;
                } else if (null == invite.getInvite(code)) {
                  v1 = 1;
                  c0 = 1;
                  const obj5 = { value: v1(dependencyMap[7]).resolveInvite(code), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
        const tmpResult = code(17592);
      } else if (code(4881).CodedLinkType.TEMPLATE === type) {
        const result1 = code(17592).queueMessageLinkFetch(closure_3(function*() {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
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
                  const obj4 = { value, done: true };
                  return obj4;
                } else if (null == guildTemplate.getGuildTemplate(code)) {
                  v1 = 1;
                  c0 = 1;
                  const obj5 = { value: v1(dependencyMap[8]).resolveGuildTemplate(code), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
        const tmpResult5 = code(17592);
      } else if (code(4881).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (code(4881).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (code(4881).CodedLinkType.EVENT !== type) {
            if (code(4881).CodedLinkType.CHANNEL_LINK !== type) {
              if (code(4881).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (code(4881).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (code(4881).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (code(4881).CodedLinkType.SERVER_SHOP !== type) {
                      if (code(4881).CodedLinkType.QUESTS_EMBED !== type) {
                        if (code(4881).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                          if (code(4881).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                            if (code(4881).CodedLinkType.APP_OAUTH2_LINK !== type) {
                              if (code(4881).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                if (code(4881).CodedLinkType.EXPERIMENT !== type) {
                                  if (code(4881).CodedLinkType.GAME_PROFILE !== type) {
                                    if (code(4881).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                      if (code(4881).CodedLinkType.USER_PROFILE !== type) {
                                        if (code(4881).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                          if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                            const result2 = code(17592).queueMessageLinkFetch(() => {
                                              const useGameOrganizationInviteFetch = content(17599).useGameOrganizationInviteFetch;
                                              const items = [code];
                                              return useGameOrganizationInviteFetch.fetchMany(items);
                                            });
                                            const tmpResult7 = code(17592);
                                          }
                                          tmpResult6 = code(13083);
                                        } else {
                                          if (code(4881).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                            if (code(4881).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                              if (code(4881).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                const embedApplication = code(11699).getEmbedApplication(code);
                                                const tmpResult8 = code(11699);
                                              } else {
                                                const _Error = Error;
                                                const _HermesInternal = HermesInternal;
                                                throw Error("Unknown coded link type: " + type);
                                              }
                                            }
                                          }
                                          closure_1(17602)(type, code);
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
          if (code(4881).CodedLinkType.INVITE === type) {
            const result = code(17592).queueMessageLinkFetch(closure_3(function*() {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
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
                      const obj4 = { value, done: true };
                      return obj4;
                    } else if (null == invite.getInvite(code)) {
                      v1 = 1;
                      c0 = 1;
                      const obj5 = { value: v1(dependencyMap[7]).resolveInvite(code), done: false };
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c0 = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp10) {
                  c0 = tmp;
                  throw tmp10;
                }
              }
            }));
            const tmpResult = code(17592);
          } else if (code(4881).CodedLinkType.TEMPLATE === type) {
            const result1 = code(17592).queueMessageLinkFetch(closure_3(function*() {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
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
                      const obj4 = { value, done: true };
                      return obj4;
                    } else if (null == guildTemplate.getGuildTemplate(code)) {
                      v1 = 1;
                      c0 = 1;
                      const obj5 = { value: v1(dependencyMap[8]).resolveGuildTemplate(code), done: false };
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c0 = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp10) {
                  c0 = tmp;
                  throw tmp10;
                }
              }
            }));
            const tmpResult5 = code(17592);
          } else if (code(4881).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (code(4881).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (code(4881).CodedLinkType.EVENT !== type) {
                if (code(4881).CodedLinkType.CHANNEL_LINK !== type) {
                  if (code(4881).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                    if (code(4881).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (code(4881).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (code(4881).CodedLinkType.SERVER_SHOP !== type) {
                          if (code(4881).CodedLinkType.QUESTS_EMBED !== type) {
                            if (code(4881).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (code(4881).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (code(4881).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (code(4881).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (code(4881).CodedLinkType.EXPERIMENT !== type) {
                                      if (code(4881).CodedLinkType.GAME_PROFILE !== type) {
                                        if (code(4881).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (code(4881).CodedLinkType.USER_PROFILE !== type) {
                                            if (code(4881).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                              if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                                const result2 = code(17592).queueMessageLinkFetch(() => {
                                                  const useGameOrganizationInviteFetch = content(17599).useGameOrganizationInviteFetch;
                                                  const items = [code];
                                                  return useGameOrganizationInviteFetch.fetchMany(items);
                                                });
                                                const tmpResult7 = code(17592);
                                              }
                                              tmpResult6 = code(13083);
                                            } else {
                                              if (code(4881).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                                if (code(4881).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                                  if (code(4881).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                    const embedApplication = code(11699).getEmbedApplication(code);
                                                    const tmpResult8 = code(11699);
                                                  } else {
                                                    const _Error = Error;
                                                    const _HermesInternal = HermesInternal;
                                                    throw Error("Unknown coded link type: " + type);
                                                  }
                                                }
                                              }
                                              closure_1(17602)(type, code);
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
    tmp4 = closure_1(closure_2[14])(tmp3, resolveMessageCodedLinks);
    return tmp3;
  }
}
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, MessageCodedLinkManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, resolveMessageCodedLinks);
const size = fn(2);
let result = size.fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp5;
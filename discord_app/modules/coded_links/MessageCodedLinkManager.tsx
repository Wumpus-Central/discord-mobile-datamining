// === Module 20142: MessageCodedLinkManager ===

// Module 20142 (MessageCodedLinkManager)
import findCodedLinksDefault from "findCodedLinks" /* 5988 */;
import resolveUserProfileCodedLinkDefault from "resolveUserProfileCodedLink" /* 20150 */;
import resolveStorefrontCodedLinkDefault from "resolveStorefrontCodedLink" /* 20153 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 20154 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildTemplateStore from "GuildTemplateStore" /* 8395 */;
import InviteStore from "InviteStore" /* 5989 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;

const require = fn;
function resolveMessageCodedLinks(content) {
  let channel_id = content;
  content = content.content;
  if (content == null) {
    content = null;
  }
  const channel_id2 = content.channel_id;
  let arr = findCodedLinksDefault(content);
  let tmp2 = null != arr;
  if (tmp2) {
    tmp2 = 0 !== arr.length;
  }
  if (tmp2) {
    let item = arr.forEach((item) => {
      ({ type, code } = item);
      if (channel_id(dependencyMap[5]).CodedLinkType.INVITE === type) {
        const result = channel_id(dependencyMap[6]).queueMessageLinkFetch(asyncGeneratorStep(async () => {
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
              return { value: "HermesInternal", done: null };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
        const tmpResult = channel_id(dependencyMap[6]);
      } else if (channel_id(dependencyMap[5]).CodedLinkType.TEMPLATE === type) {
        const result1 = channel_id(dependencyMap[6]).queueMessageLinkFetch(asyncGeneratorStep(async () => {
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
              return { value: "HermesInternal", done: null };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
        const tmpResult5 = channel_id(dependencyMap[6]);
      } else if (channel_id(dependencyMap[5]).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (channel_id(dependencyMap[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (channel_id(dependencyMap[5]).CodedLinkType.EVENT !== type) {
            if (channel_id(dependencyMap[5]).CodedLinkType.CHANNEL_LINK !== type) {
              if (channel_id(dependencyMap[5]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (channel_id(dependencyMap[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (channel_id(dependencyMap[5]).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (channel_id(dependencyMap[5]).CodedLinkType.SERVER_SHOP !== type) {
                      if (channel_id(dependencyMap[5]).CodedLinkType.QUESTS_EMBED !== type) {
                        if (channel_id(dependencyMap[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                          if (channel_id(dependencyMap[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                            if (channel_id(dependencyMap[5]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                              if (channel_id(dependencyMap[5]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                if (channel_id(dependencyMap[5]).CodedLinkType.EXPERIMENT !== type) {
                                  if (channel_id(dependencyMap[5]).CodedLinkType.GAME_PROFILE !== type) {
                                    if (channel_id(dependencyMap[5]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                      if (channel_id(dependencyMap[5]).CodedLinkType.CONJURE_PROJECT !== type) {
                                        if (channel_id(dependencyMap[5]).CodedLinkType.USER_WISHLIST !== type) {
                                          if (channel_id(dependencyMap[5]).CodedLinkType.USER_PROFILE === type) {
                                            resolveUserProfileCodedLinkDefault(code, channel_id);
                                          } else if (channel_id(dependencyMap[5]).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                            if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                              const result2 = channel_id(dependencyMap[6]).queueMessageLinkFetch(asyncGeneratorStep(async () => {
                                                if (dependencyMap === 2) {
                                                  dependencyMap = 3;
                                                  throw new TypeError("Generator functions may not be called on executing generators");
                                                } else if (tmp3 === 3) {
                                                  if (arg0 === 1) {
                                                    throw value;
                                                  } else if (arg0 === 2) {
                                                    const obj2 = { value, done: true };
                                                    return obj2;
                                                  } else {
                                                    return { value: "HermesInternal", done: null };
                                                  }
                                                } else {
                                                  try {
                                                    dependencyMap = 2;
                                                    if (0 === v1) {
                                                      if (arg0 === 1) {
                                                        dependencyMap = 3;
                                                        throw value;
                                                      } else if (arg0 === 2) {
                                                        dependencyMap = 3;
                                                        const obj3 = { value, done: true };
                                                        return obj3;
                                                      } else {
                                                        const useGameOrganizationInviteFetch = tmp4(20152).useGameOrganizationInviteFetch;
                                                        items = [code];
                                                        v1 = 1;
                                                        dependencyMap = 1;
                                                        const obj4 = { value: useGameOrganizationInviteFetch.fetchMany(items), done: false };
                                                        return obj4;
                                                      }
                                                    } else if (arg0 === 1) {
                                                      dependencyMap = 3;
                                                      throw value;
                                                    } else if (arg0 === 2) {
                                                      dependencyMap = 3;
                                                      const obj = { value, done: true };
                                                      return obj;
                                                    } else {
                                                      v1(13998)(closure_128_0).catch(closure_1_6);
                                                      dependencyMap = 3;
                                                      return { value: "HermesInternal", done: null };
                                                    }
                                                  } catch (tmp14) {
                                                    dependencyMap = tmp;
                                                    throw tmp14;
                                                  }
                                                }
                                              }));
                                              const tmpResult7 = channel_id(dependencyMap[6]);
                                            }
                                            tmpResult6 = channel_id(dependencyMap[10]);
                                          } else {
                                            if (channel_id(dependencyMap[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                              if (channel_id(dependencyMap[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                                if (channel_id(dependencyMap[5]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                  const embedApplication = channel_id(dependencyMap[14]).getEmbedApplication(code);
                                                  const tmpResult8 = channel_id(dependencyMap[14]);
                                                } else {
                                                  const _Error = Error;
                                                  const _HermesInternal = HermesInternal;
                                                  throw Error("Unknown coded link type: " + type);
                                                }
                                              }
                                            }
                                            resolveStorefrontCodedLinkDefault(type, code);
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
      channel_id = channel_id.channel_id;
      const arr = findCodedLinksDefault(message.message.content);
      let tmp = null != arr;
      if (tmp) {
        tmp = 0 !== arr.length;
      }
      if (tmp) {
        const item = arr.forEach((item) => {
          ({ type, code } = item);
          if (channel_id(dependencyMap[5]).CodedLinkType.INVITE === type) {
            const result = channel_id(dependencyMap[6]).queueMessageLinkFetch(asyncGeneratorStep(async () => {
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
                  return { value: "HermesInternal", done: null };
                } catch (tmp10) {
                  c0 = tmp;
                  throw tmp10;
                }
              }
            }));
            const tmpResult = channel_id(dependencyMap[6]);
          } else if (channel_id(dependencyMap[5]).CodedLinkType.TEMPLATE === type) {
            const result1 = channel_id(dependencyMap[6]).queueMessageLinkFetch(asyncGeneratorStep(async () => {
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
                  return { value: "HermesInternal", done: null };
                } catch (tmp10) {
                  c0 = tmp;
                  throw tmp10;
                }
              }
            }));
            const tmpResult5 = channel_id(dependencyMap[6]);
          } else if (channel_id(dependencyMap[5]).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (channel_id(dependencyMap[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (channel_id(dependencyMap[5]).CodedLinkType.EVENT !== type) {
                if (channel_id(dependencyMap[5]).CodedLinkType.CHANNEL_LINK !== type) {
                  if (channel_id(dependencyMap[5]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                    if (channel_id(dependencyMap[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (channel_id(dependencyMap[5]).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (channel_id(dependencyMap[5]).CodedLinkType.SERVER_SHOP !== type) {
                          if (channel_id(dependencyMap[5]).CodedLinkType.QUESTS_EMBED !== type) {
                            if (channel_id(dependencyMap[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (channel_id(dependencyMap[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (channel_id(dependencyMap[5]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (channel_id(dependencyMap[5]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (channel_id(dependencyMap[5]).CodedLinkType.EXPERIMENT !== type) {
                                      if (channel_id(dependencyMap[5]).CodedLinkType.GAME_PROFILE !== type) {
                                        if (channel_id(dependencyMap[5]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (channel_id(dependencyMap[5]).CodedLinkType.CONJURE_PROJECT !== type) {
                                            if (channel_id(dependencyMap[5]).CodedLinkType.USER_WISHLIST !== type) {
                                              if (channel_id(dependencyMap[5]).CodedLinkType.USER_PROFILE === type) {
                                                resolveUserProfileCodedLinkDefault(code, channel_id);
                                              } else if (channel_id(dependencyMap[5]).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                                if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                                  const result2 = channel_id(dependencyMap[6]).queueMessageLinkFetch(asyncGeneratorStep(async () => {
                                                    if (dependencyMap === 2) {
                                                      dependencyMap = 3;
                                                      throw new TypeError("Generator functions may not be called on executing generators");
                                                    } else if (tmp3 === 3) {
                                                      if (arg0 === 1) {
                                                        throw value;
                                                      } else if (arg0 === 2) {
                                                        const obj2 = { value, done: true };
                                                        return obj2;
                                                      } else {
                                                        return { value: "HermesInternal", done: null };
                                                      }
                                                    } else {
                                                      try {
                                                        dependencyMap = 2;
                                                        if (0 === v1) {
                                                          if (arg0 === 1) {
                                                            dependencyMap = 3;
                                                            throw value;
                                                          } else if (arg0 === 2) {
                                                            dependencyMap = 3;
                                                            const obj3 = { value, done: true };
                                                            return obj3;
                                                          } else {
                                                            const useGameOrganizationInviteFetch = tmp4(20152).useGameOrganizationInviteFetch;
                                                            items = [code];
                                                            v1 = 1;
                                                            dependencyMap = 1;
                                                            const obj4 = { value: useGameOrganizationInviteFetch.fetchMany(items), done: false };
                                                            return obj4;
                                                          }
                                                        } else if (arg0 === 1) {
                                                          dependencyMap = 3;
                                                          throw value;
                                                        } else if (arg0 === 2) {
                                                          dependencyMap = 3;
                                                          const obj = { value, done: true };
                                                          return obj;
                                                        } else {
                                                          v1(13998)(closure_128_0).catch(closure_1_6);
                                                          dependencyMap = 3;
                                                          return { value: "HermesInternal", done: null };
                                                        }
                                                      } catch (tmp14) {
                                                        dependencyMap = tmp;
                                                        throw tmp14;
                                                      }
                                                    }
                                                  }));
                                                  const tmpResult7 = channel_id(dependencyMap[6]);
                                                }
                                                tmpResult6 = channel_id(dependencyMap[10]);
                                              } else {
                                                if (channel_id(dependencyMap[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                                  if (channel_id(dependencyMap[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                                    if (channel_id(dependencyMap[5]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                      const embedApplication = channel_id(dependencyMap[14]).getEmbedApplication(code);
                                                      const tmpResult8 = channel_id(dependencyMap[14]);
                                                    } else {
                                                      const _Error = Error;
                                                      const _HermesInternal = HermesInternal;
                                                      throw Error("Unknown coded link type: " + type);
                                                    }
                                                  }
                                                }
                                                resolveStorefrontCodedLinkDefault(type, code);
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
const NOOP = fn(1083).NOOP;
class MessageCodedLinkManager extends tmp6 {
  constructor() {
    tmp3 = new MessageCodedLinkManager(tmp2, tmp, new.target);
    tmp4 = closure_1(closure_2[16])(tmp3, resolveMessageCodedLinks);
    return tmp3;
  }
}
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, MessageCodedLinkManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, resolveMessageCodedLinks);
const size = fn(2);
let result = size.fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp5;
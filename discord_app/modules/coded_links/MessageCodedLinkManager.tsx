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
      if (code(dependencyMap[6]).CodedLinkType.INVITE === type) {
        const result = code(dependencyMap[7]).queueMessageLinkFetch(
          closure_3(function* () {
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
                    const obj5 = { value: v1(dependencyMap[8]).resolveInvite(code), done: false };
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
          }),
        );
        const tmpResult = code(dependencyMap[7]);
      } else if (code(dependencyMap[6]).CodedLinkType.TEMPLATE === type) {
        const result1 = code(dependencyMap[7]).queueMessageLinkFetch(
          closure_3(function* () {
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
                    const obj5 = { value: v1(dependencyMap[9]).resolveGuildTemplate(code), done: false };
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
          }),
        );
        const tmpResult5 = code(dependencyMap[7]);
      } else if (code(dependencyMap[6]).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (code(dependencyMap[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (code(dependencyMap[6]).CodedLinkType.EVENT !== type) {
            if (code(dependencyMap[6]).CodedLinkType.CHANNEL_LINK !== type) {
              if (code(dependencyMap[6]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (code(dependencyMap[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (code(dependencyMap[6]).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (code(dependencyMap[6]).CodedLinkType.SERVER_SHOP !== type) {
                      if (code(dependencyMap[6]).CodedLinkType.QUESTS_EMBED !== type) {
                        if (code(dependencyMap[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                          if (code(dependencyMap[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                            if (code(dependencyMap[6]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                              if (code(dependencyMap[6]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                if (code(dependencyMap[6]).CodedLinkType.EXPERIMENT !== type) {
                                  if (code(dependencyMap[6]).CodedLinkType.GAME_PROFILE !== type) {
                                    if (code(dependencyMap[6]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                      if (code(dependencyMap[6]).CodedLinkType.USER_PROFILE !== type) {
                                        if (code(dependencyMap[6]).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                          if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                            const result2 = code(dependencyMap[7]).queueMessageLinkFetch(
                                              closure_3(function* () {
                                                if (dependencyMap === 2) {
                                                  dependencyMap = 3;
                                                  throw new TypeError(
                                                    "Generator functions may not be called on executing generators",
                                                  );
                                                } else if (tmp3 === 3) {
                                                  if (arg0 === 1) {
                                                    throw value;
                                                  } else if (arg0 === 2) {
                                                    const obj2 = { value, done: true };
                                                    return obj2;
                                                  } else {
                                                    return { value: "IconComponent", done: null };
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
                                                        const useGameOrganizationInviteFetch =
                                                          tmp4(18787).useGameOrganizationInviteFetch;
                                                        const items = [code];
                                                        v1 = 1;
                                                        dependencyMap = 1;
                                                        const obj4 = {
                                                          value: useGameOrganizationInviteFetch.fetchMany(items),
                                                          done: false,
                                                        };
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
                                                      v1(12673)(closure_128_0).catch(closure_1_6);
                                                      dependencyMap = 3;
                                                      return { value: "IconComponent", done: null };
                                                    }
                                                  } catch (tmp14) {
                                                    dependencyMap = tmp;
                                                    throw tmp14;
                                                  }
                                                }
                                              }),
                                            );
                                            const tmpResult7 = code(dependencyMap[7]);
                                          }
                                          tmpResult6 = code(dependencyMap[10]);
                                        } else {
                                          if (code(dependencyMap[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                            if (
                                              code(dependencyMap[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type
                                            ) {
                                              if (code(dependencyMap[6]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                const embedApplication = code(dependencyMap[14]).getEmbedApplication(
                                                  code,
                                                );
                                                const tmpResult8 = code(dependencyMap[14]);
                                              } else {
                                                const _Error = Error;
                                                const _HermesInternal = HermesInternal;
                                                throw Error("Unknown coded link type: " + type);
                                              }
                                            }
                                          }
                                          closure_1(dependencyMap[13])(type, code);
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
          if (code(dependencyMap[6]).CodedLinkType.INVITE === type) {
            const result = code(dependencyMap[7]).queueMessageLinkFetch(
              closure_3(function* () {
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
                        const obj5 = { value: v1(dependencyMap[8]).resolveInvite(code), done: false };
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
              }),
            );
            const tmpResult = code(dependencyMap[7]);
          } else if (code(dependencyMap[6]).CodedLinkType.TEMPLATE === type) {
            const result1 = code(dependencyMap[7]).queueMessageLinkFetch(
              closure_3(function* () {
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
                        const obj5 = { value: v1(dependencyMap[9]).resolveGuildTemplate(code), done: false };
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
              }),
            );
            const tmpResult5 = code(dependencyMap[7]);
          } else if (code(dependencyMap[6]).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (code(dependencyMap[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (code(dependencyMap[6]).CodedLinkType.EVENT !== type) {
                if (code(dependencyMap[6]).CodedLinkType.CHANNEL_LINK !== type) {
                  if (code(dependencyMap[6]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                    if (code(dependencyMap[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (code(dependencyMap[6]).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (code(dependencyMap[6]).CodedLinkType.SERVER_SHOP !== type) {
                          if (code(dependencyMap[6]).CodedLinkType.QUESTS_EMBED !== type) {
                            if (code(dependencyMap[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (code(dependencyMap[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (code(dependencyMap[6]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (code(dependencyMap[6]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (code(dependencyMap[6]).CodedLinkType.EXPERIMENT !== type) {
                                      if (code(dependencyMap[6]).CodedLinkType.GAME_PROFILE !== type) {
                                        if (code(dependencyMap[6]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (code(dependencyMap[6]).CodedLinkType.USER_PROFILE !== type) {
                                            if (
                                              code(dependencyMap[6]).CodedLinkType.GAME_ORGANIZATION_INVITE === type
                                            ) {
                                              if (
                                                tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")
                                              ) {
                                                const result2 = code(dependencyMap[7]).queueMessageLinkFetch(
                                                  closure_3(function* () {
                                                    if (dependencyMap === 2) {
                                                      dependencyMap = 3;
                                                      throw new TypeError(
                                                        "Generator functions may not be called on executing generators",
                                                      );
                                                    } else if (tmp3 === 3) {
                                                      if (arg0 === 1) {
                                                        throw value;
                                                      } else if (arg0 === 2) {
                                                        const obj2 = { value, done: true };
                                                        return obj2;
                                                      } else {
                                                        return { value: "IconComponent", done: null };
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
                                                            const useGameOrganizationInviteFetch =
                                                              tmp4(18787).useGameOrganizationInviteFetch;
                                                            const items = [code];
                                                            v1 = 1;
                                                            dependencyMap = 1;
                                                            const obj4 = {
                                                              value: useGameOrganizationInviteFetch.fetchMany(items),
                                                              done: false,
                                                            };
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
                                                          v1(12673)(closure_128_0).catch(closure_1_6);
                                                          dependencyMap = 3;
                                                          return { value: "IconComponent", done: null };
                                                        }
                                                      } catch (tmp14) {
                                                        dependencyMap = tmp;
                                                        throw tmp14;
                                                      }
                                                    }
                                                  }),
                                                );
                                                const tmpResult7 = code(dependencyMap[7]);
                                              }
                                              tmpResult6 = code(dependencyMap[10]);
                                            } else {
                                              if (
                                                code(dependencyMap[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type
                                              ) {
                                                if (
                                                  code(dependencyMap[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !==
                                                  type
                                                ) {
                                                  if (
                                                    code(dependencyMap[6]).CodedLinkType.APP_DIRECTORY_PROFILE === type
                                                  ) {
                                                    const embedApplication = code(
                                                      dependencyMap[14],
                                                    ).getEmbedApplication(code);
                                                    const tmpResult8 = code(dependencyMap[14]);
                                                  } else {
                                                    const _Error = Error;
                                                    const _HermesInternal = HermesInternal;
                                                    throw Error("Unknown coded link type: " + type);
                                                  }
                                                }
                                              }
                                              closure_1(dependencyMap[13])(type, code);
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
const NOOP = fn(1098).NOOP;
class MessageCodedLinkManager extends tmp7 {
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

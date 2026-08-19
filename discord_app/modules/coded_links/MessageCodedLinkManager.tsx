// discord_app/modules/coded_links/MessageCodedLinkManager.tsx
import trimTrailingPunctuationDefault from "findCodedLinks.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../messages/setupLoadFromMessageManagerHandlers.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import handleGuildTemplateResolveSuccess from "../guild_templates/GuildTemplateStore.tsx";
import updateInvite from "../../stores/InviteStore.tsx";

const require = fn;
function resolveMessageCodedLinks(content) {
  const arr = trimTrailingPunctuationDefault(content.content);
  let tmp = null != arr;
  if (tmp) {
    tmp = 0 !== arr.length;
  }
  if (tmp) {
    const item = arr.forEach((item, index) => {
      ({ type, code } = item);
      if (code(table[4]).CodedLinkType.INVITE === type) {
        let tmpResult = code(table[5]);
        const result = tmpResult.queueMessageLinkFetch(callback(function*() {
          if (c0 === 2) {
            c0 = 3;
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
            try {
              c0 = 2;
              if (0 === v0) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  if (null == closure_1_5.getInvite(c0)) {
                    obj1 = v0(closure_1_2[6]);
                    v0 = 1;
                    c0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.resolveInvite(tmp6);
                    return obj1;
                  }
                  tmp6 = c0;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c0 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
      } else if (code(table[4]).CodedLinkType.TEMPLATE === type) {
        tmpResult = code(table[5]);
        const result1 = tmpResult.queueMessageLinkFetch(callback(function*() {
          if (c0 === 2) {
            c0 = 3;
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
            try {
              c0 = 2;
              if (0 === v0) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  if (null == closure_1_4.getGuildTemplate(c0)) {
                    obj1 = v0(closure_1_2[7]);
                    v0 = 1;
                    c0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.resolveGuildTemplate(tmp6);
                    return obj1;
                  }
                  tmp6 = c0;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c0 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
      } else if (code(table[4]).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (code(table[4]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (code(table[4]).CodedLinkType.EVENT !== type) {
            if (code(table[4]).CodedLinkType.CHANNEL_LINK !== type) {
              if (code(table[4]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (code(table[4]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (code(table[4]).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (code(table[4]).CodedLinkType.SERVER_SHOP !== type) {
                      if (code(table[4]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                        if (code(table[4]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                          if (code(table[4]).CodedLinkType.QUESTS_EMBED !== type) {
                            if (code(table[4]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (code(table[4]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (code(table[4]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (code(table[4]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (code(table[4]).CodedLinkType.EXPERIMENT !== type) {
                                      if (code(table[4]).CodedLinkType.GAME_PROFILE !== type) {
                                        if (code(table[4]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (code(table[4]).CodedLinkType.USER_PROFILE !== type) {
                                            if (code(table[4]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                              const embedApplication = code(table[8]).getEmbedApplication(code);
                                              const tmpResult1 = code(table[8]);
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
}
initializeDefault;
class MessageCodedLinkManager extends tmp6 {
  constructor() {
    tmp3 = new MessageCodedLinkManager(tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp4 = require("setupLoadFromMessageManagerHandlers")(tmp3, resolveMessageCodedLinks);
    return tmp3;
  }
}
tmp = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, MessageCodedLinkManager, importDefault);
// ThrowIfThisInitialized (0x7c)
setupLoadFromMessageManagerHandlersDefault(tmp, resolveMessageCodedLinks);
let result = require("obj132").fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp;
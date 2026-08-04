// discord_app/modules/coded_links/MessageCodedLinkManager.tsx
import queueMessageLinkFetch from "queueMessageLinkFetch";
import handleGuildTemplateResolveSuccess from "handleGuildTemplateResolveSuccess";
import updateInvite from "updateInvite";
import "initialize";

const require = arg1;
function resolveMessageCodedLinks(content) {
  const arr = importDefault(4177)(content.content);
  let tmp = null != arr;
  if (tmp) {
    tmp = 0 !== arr.length;
  }
  if (tmp) {
    const item = arr.forEach((arg0) => {
      let code;
      let type;
      ({ type, code } = arg0);
      if (code(table[4]).CodedLinkType.INVITE === type) {
        let tmpResult = tmp(tmp2[5]);
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
              return { value: "HermesInternal", done: null };
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
                  if (null == outer1_5.getInvite(c0)) {
                    let obj1 = v0(outer1_2[6]);
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
              return { value: "HermesInternal", done: null };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
      } else if (tmp(tmp2[4]).CodedLinkType.TEMPLATE === type) {
        tmpResult = tmp(tmp2[5]);
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
              return { value: "HermesInternal", done: null };
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
                  if (null == outer1_4.getGuildTemplate(c0)) {
                    let obj1 = v0(outer1_2[7]);
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
              return { value: "HermesInternal", done: null };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
      } else if (tmp(tmp2[4]).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (tmp(tmp2[4]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (tmp(tmp2[4]).CodedLinkType.EVENT !== type) {
            if (tmp(tmp2[4]).CodedLinkType.CHANNEL_LINK !== type) {
              if (tmp(tmp2[4]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (tmp(tmp2[4]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (tmp(tmp2[4]).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (tmp(tmp2[4]).CodedLinkType.SERVER_SHOP !== type) {
                      if (tmp(tmp2[4]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                        if (tmp(tmp2[4]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                          if (tmp(tmp2[4]).CodedLinkType.QUESTS_EMBED !== type) {
                            if (tmp(tmp2[4]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (tmp(tmp2[4]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (tmp(tmp2[4]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (tmp(tmp2[4]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (tmp(tmp2[4]).CodedLinkType.EXPERIMENT !== type) {
                                      if (tmp(tmp2[4]).CodedLinkType.GAME_PROFILE !== type) {
                                        if (tmp(tmp2[4]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (tmp(tmp2[4]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                            const embedApplication = tmp(tmp2[8]).getEmbedApplication(code);
                                            const tmpResult1 = tmp(tmp2[8]);
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
    });
  }
}
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
require("setupLoadFromMessageManagerHandlers")(tmp, resolveMessageCodedLinks);
let result = require("updateInvite").fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp;
// discord_app/modules/messages/MarkupPostProcessors.tsx
import Constants from "../../Constants.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import EmojiConstants from "../emojis/EmojiConstants.tsx";
import RedundantLinkUtils from "RedundantLinkUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const f95063 = (content) => {
  let someResult;
  let closure_0 = fn;
  if (content instanceof Array) {
    someResult = content.some(f95063);
  } else {
    someResult = fn(content);
    if (null == someResult) {
      let someResult3;
      const _Array5 = Array;
      if (content.content instanceof Array) {
        let someResult1;
        content = content.content;
        closure_0 = fn;
        const _Array2 = Array;
        if (content instanceof Array) {
          someResult1 = content.some(f95063);
        } else {
          someResult1 = fn(content);
          if (null == someResult1) {
            let someResult2;
            const _Array3 = Array;
            if (content.content instanceof Array) {
              someResult2 = closure_2_7(content.content, fn);
            } else {
              const _Array4 = Array;
              someResult2 = content.items instanceof Array;
              if (someResult2) {
                const items2 = content.items;
                someResult2 = items2.some(f95064);
              }
            }
            someResult1 = someResult2;
          }
        }
        someResult3 = someResult1;
      } else {
        const _Array = Array;
        someResult3 = content.items instanceof Array;
        if (someResult3) {
          const items = content.items;
          someResult3 = items.some(f95064);
        }
      }
      someResult = someResult3;
    }
  }
  return someResult;
};
const f95064 = (content) => {
  let someResult;
  let closure_0 = fn;
  if (content instanceof Array) {
    someResult = content.some(f95063);
  } else {
    someResult = fn(content);
    if (null == someResult) {
      let someResult3;
      const _Array5 = Array;
      if (content.content instanceof Array) {
        let someResult1;
        content = content.content;
        closure_0 = fn;
        const _Array2 = Array;
        if (content instanceof Array) {
          someResult1 = content.some(f95063);
        } else {
          someResult1 = fn(content);
          if (null == someResult1) {
            let someResult2;
            const _Array3 = Array;
            if (content.content instanceof Array) {
              someResult2 = closure_2_7(content.content, fn);
            } else {
              const _Array4 = Array;
              someResult2 = content.items instanceof Array;
              if (someResult2) {
                const items2 = content.items;
                someResult2 = items2.some(f95064);
              }
            }
            someResult1 = someResult2;
          }
        }
        someResult3 = someResult1;
      } else {
        const _Array = Array;
        someResult3 = content.items instanceof Array;
        if (someResult3) {
          const items = content.items;
          someResult3 = items.some(f95064);
        }
      }
      someResult = someResult3;
    }
  }
  return someResult;
};
const f95069 = (type) => {
  const hasItem = set.has(type.type) && null != type.content;
  if (hasItem) {
    const _Array = Array;
    const content = type.content;
    if (Array.isArray(type.content)) {
      const item = content.forEach(f95069);
    } else if (typeof content === "string") {
      const str = type.content;
      type.content = str.replace(/\n/g, " ");
    } else {
      type = type.type;
      const _Object = Object;
      const _HermesInternal = HermesInternal;
      const obj = SentryUtilsDefault;
      obj.captureMessage(
        "AST node type:" + type + " with content typeof " + typeof type.content + ". Keys " + Object.keys(type),
      );
    }
  }
};
function checkSpoilerEmbeds(ast1, inline) {
  let tmp2;
  const f95065 = (content) => {
    let tmp = null;
    if ("spoiler" === content.type) {
      let someResult;
      fn = (content) => "link" === content.type || "attachmentLink" === content.type || null;
      let _Array5 = Array;
      if (content instanceof Array) {
        someResult = content.some(f95063);
      } else {
        someResult = "link" === content.type || "attachmentLink" === content.type || null;
        if (null == someResult) {
          let someResult3;
          const _Array6 = Array;
          if (content.content instanceof Array) {
            let someResult1;
            content = content.content;
            let _Array2 = Array;
            if (content instanceof Array) {
              someResult1 = content.some(f95063);
            } else {
              someResult1 = fn(content);
              if (null == someResult1) {
                let someResult2;
                let _Array3 = Array;
                if (content.content instanceof Array) {
                  someResult2 = closure_7(content.content, fn);
                } else {
                  let _Array4 = Array;
                  someResult2 = content.items instanceof Array;
                  if (someResult2) {
                    let items2 = content.items;
                    someResult2 = items2.some(f95064);
                  }
                }
                someResult1 = someResult2;
              }
            }
            someResult3 = someResult1;
          } else {
            let _Array = Array;
            someResult3 = content.items instanceof Array;
            if (someResult3) {
              let items = content.items;
              someResult3 = items.some(f95064);
            }
          }
          someResult = someResult3;
        }
      }
      tmp = someResult;
    }
    return tmp;
  };
  let tmp = inline;
  if (tmp) {
    let someResult;
    const fn2 = f95065;
    const _Array7 = Array;
    if (ast1 instanceof Array) {
      someResult = ast1.some(f95063);
    } else {
      someResult = fn2(ast1);
      if (null == someResult) {
        let someResult3;
        const _Array13 = Array;
        if (ast1.content instanceof Array) {
          let someResult1;
          const content3 = ast1.content;
          const _Array9 = Array;
          if (content3 instanceof Array) {
            someResult1 = content3.some(f95063);
          } else {
            someResult1 = fn2(content3);
            if (null == someResult1) {
              let someResult2;
              const _Array10 = Array;
              if (content3.content instanceof Array) {
                someResult2 = containsMatchingNode(content3.content, fn2);
              } else {
                const _Array11 = Array;
                someResult2 = content3.items instanceof Array;
                if (someResult2) {
                  const items4 = content3.items;
                  someResult2 = items4.some(f95064);
                }
              }
              someResult1 = someResult2;
            }
          }
          someResult3 = someResult1;
        } else {
          const _Array8 = Array;
          someResult3 = ast1.items instanceof Array;
          if (someResult3) {
            const items3 = ast1.items;
            someResult3 = items3.some(f95064);
          }
        }
        someResult = someResult3;
      }
    }
    tmp2 = someResult;
  } else {
    const str = "paragraph";
    tmp2 = "paragraph" === ast1[0].type;
    if (tmp2) {
      let _Array = Array;
      tmp2 = ast1[0].content instanceof Array;
    }
    if (tmp2) {
      let someResult4;
      let content = ast1[0].content;
      let fn = f95065;
      let _Array2 = Array;
      if (content instanceof Array) {
        someResult4 = content.some(f95063);
      } else {
        someResult4 = fn(content);
        if (null == someResult4) {
          let someResult7;
          const _Array12 = Array;
          if (content.content instanceof Array) {
            let someResult5;
            const content2 = content.content;
            let _Array4 = Array;
            if (content2 instanceof Array) {
              someResult5 = content2.some(f95063);
            } else {
              someResult5 = fn(content2);
              if (null == someResult5) {
                let someResult6;
                let _Array5 = Array;
                if (content2.content instanceof Array) {
                  someResult6 = containsMatchingNode(content2.content, fn);
                } else {
                  let _Array6 = Array;
                  someResult6 = content2.items instanceof Array;
                  if (someResult6) {
                    let items2 = content2.items;
                    someResult6 = items2.some(f95064);
                  }
                }
                someResult5 = someResult6;
              }
            }
            someResult7 = someResult5;
          } else {
            let _Array3 = Array;
            someResult7 = content.items instanceof Array;
            if (someResult7) {
              let items = content.items;
              someResult7 = items.some(f95064);
            }
          }
          someResult4 = someResult7;
        }
      }
      tmp2 = someResult4;
    }
  }
  return tmp2;
}
function containsMatchingNode(content, fn) {
  let closure_0 = fn;
  if (content instanceof Array) {
    return content.some(f95063);
  } else {
    let tmp = fn(content);
    if (null == tmp) {
      let someResult;
      const _Array = Array;
      if (content.content instanceof Array) {
        someResult = containsMatchingNode(content.content, fn);
      } else {
        const _Array2 = Array;
        someResult = content.items instanceof Array;
        if (someResult) {
          const items = content.items;
          someResult = items.some(f95064);
        }
      }
      tmp = someResult;
    }
    return tmp;
  }
}
function isLinkNode(type) {
  return "link" === type.type || "attachmentLink" === type.type;
}
const MessageTypes = Constants.MessageTypes;
const MAX_EMOJI_TO_BE_JUMBO = EmojiConstants.MAX_EMOJI_TO_BE_JUMBO;
const set = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
const result = size.fileFinishedImporting("modules/messages/MarkupPostProcessors.tsx");

export { checkSpoilerEmbeds };
export const checkForSimpleEmbedMessage = function checkForSimpleEmbedMessage(found1, embeds) {
  let items = found1;
  const obj = RedundantLinkUtils;
  if (obj.hasOnlySimpleEmbed(embeds)) {
    const isSingleLinkContent = RedundantLinkUtils.isSingleLinkContent;
    RedundantLinkUtils;
    items = found1;
    const tmpResult2 = RedundantLinkUtils;
    if (isSingleLinkContent(tmpResult2.readContentLinks(found1, isLinkNode))) {
      items = [];
    }
  }
  return items;
};
export const removeBuildOverrideLinks = function removeBuildOverrideLinks(arr) {
  return arr.filter((type) => {
    let tmp = "link" !== type.type;
    if (!tmp) {
      const obj = v0(dependencyMap[3]);
      tmp = !obj.isBuildOverrideLink(type.target);
    }
    return tmp;
  });
};
export const removeExperimentLinks = function removeExperimentLinks(arr) {
  return arr.filter((type) => {
    let tmp = "link" !== type.type;
    if (!tmp) {
      const obj = v0(dependencyMap[4]);
      tmp = !obj.isExperimentEmbedURL(type.target);
    }
    return tmp;
  });
};
export const removeRedundantLinks = function removeRedundantLinks(arr) {
  let obj2;
  const obj = { onlyLinkContent: obj2.readContentLinks(arr, isLinkNode).onlyLinks, stripGameServerShareLinks: false };
  obj2 = obj(7533);
  return arr.filter((type) => {
    let tmp = null;
    if ("link" === type.type) {
      let target = type.target;
      if (target == null) {
        target = null;
      }
      tmp = target;
    }
    let tmp3 = null == tmp;
    if (!tmp3) {
      const obj = obj4(dependencyMap[2]);
      tmp3 = !obj.isRedundantLink(tmp, obj4);
    }
    return tmp3;
  });
};
export const convertNewlinesInContent = function convertNewlinesInContent(arr) {
  const item = arr.forEach(f95069);
  return arr;
};
export const runMessageMarkupPostProcessors = function runMessageMarkupPostProcessors(arg0) {
  let ast;
  let contentMessage;
  let formatInline;
  let hasBailedAst;
  let hideSimpleEmbedContent;
  let inline;
  let message;
  let messageContent;
  let obj2;
  let obj6;
  let toAST;
  const f95060 = (type) => {
    let tmp = "emoji" !== type.type && "customEmoji" !== type.type;
    if (tmp) {
      let tmp2 = typeof type.content !== "string";
      if (!tmp2) {
        const str2 = type.content;
        tmp2 = "" !== str2.trim();
      }
      tmp = tmp2;
    }
    return tmp;
  };
  const f95061 = (type) => {
    const tmp = "emoji" !== type.type && "customEmoji" !== type.type;
    if (!tmp) {
      closure_0 = closure_0 + 1;
    }
    if (closure_0 > MAX_EMOJI_TO_BE_JUMBO) {
      return false;
    }
  };
  const f95062 = (item) => {
    item.jumboable = true;
  };
  ({ ast, inline, message, contentMessage, messageContent, formatInline } = arg0);
  ({ hasBailedAst, hideSimpleEmbedContent, toAST } = arg0);
  let tmp = ast;
  if (!Array.isArray(ast)) {
    const items = [ast];
    tmp = items;
  }
  if (hasBailedAst) {
    let obj = { type: "text", content: messageContent, originalMatch: obj2 };
    obj2 = { index: 0, 0: null };
    obj2[0] = messageContent;
    const items1 = [obj];
    tmp = items1;
  }
  let arr3 = tmp;
  if (hideSimpleEmbedContent) {
    let tmp2 = null;
    let tmp3 = contentMessage;
    if (contentMessage == null) {
      tmp3 = message;
    }
    const embeds = tmp3.embeds;
    let items2 = tmp;
    const obj3 = require("RedundantLinkUtils");
    if (obj3.hasOnlySimpleEmbed(embeds)) {
      const isSingleLinkContent = require("RedundantLinkUtils").isSingleLinkContent;
      require("RedundantLinkUtils");
      items2 = tmp;
      const tmp4Result2 = require("RedundantLinkUtils");
      if (isSingleLinkContent(tmp4Result2.readContentLinks(tmp, isLinkNode))) {
        items2 = [];
      }
    }
    arr3 = items2;
  }
  const tmp8 = formatInline || message.type === MessageTypes.MEDIA_MENTION_MESSAGE;
  if (!tmp8) {
    if (inline) {
      if (!arr3.some(f95060)) {
        const v0 = 0;
        let item = arr3.forEach(f95061);
        if (v0 <= MAX_EMOJI_TO_BE_JUMBO) {
          const item1 = arr3.forEach(f95062);
        }
      }
    } else {
      let str = "paragraph";
      let tmp10 = "paragraph" === arr3[0].type;
      if (tmp10) {
        let _Array = Array;
        tmp10 = arr3[0].content instanceof Array;
      }
      if (tmp10) {
        let content = arr3[0].content;
        _require = undefined;
        const first = arr3[0];
        if (!content.some(f95060)) {
          _require = 0;
          const item2 = content.forEach(f95061);
          if (_require <= MAX_EMOJI_TO_BE_JUMBO) {
            const item3 = content.forEach(f95062);
          }
        }
        first.content = content;
      }
    }
  }
  let found1 = arr3;
  if (toAST) {
    const found = arr3.filter((type) => {
      let tmp = "link" !== type.type;
      if (!tmp) {
        const obj = v0(dependencyMap[3]);
        tmp = !obj.isBuildOverrideLink(type.target);
      }
      return tmp;
    });
    found1 = found.filter((type) => {
      let tmp = "link" !== type.type;
      if (!tmp) {
        const obj = v0(dependencyMap[4]);
        tmp = !obj.isExperimentEmbedURL(type.target);
      }
      return tmp;
    });
  }
  const obj4 = {
    onlyLinkContent: obj6.readContentLinks(found1, isLinkNode).onlyLinks,
    stripGameServerShareLinks: false,
  };
  obj6 = require("RedundantLinkUtils");
  const ast1 = found1.filter((type) => {
    let tmp = null;
    if ("link" === type.type) {
      let target = type.target;
      if (target == null) {
        target = null;
      }
      tmp = target;
    }
    let tmp3 = null == tmp;
    if (!tmp3) {
      const obj = obj4(dependencyMap[2]);
      tmp3 = !obj.isRedundantLink(tmp, obj4);
    }
    return tmp3;
  });
  if (contentMessage == null) {
    contentMessage = message;
  }
  let hasSpoilerEmbeds = false;
  if (contentMessage.embeds.length > 0) {
    hasSpoilerEmbeds = checkSpoilerEmbeds(ast1, inline);
  }
  if (formatInline) {
    const item4 = ast1.forEach(f95069);
  }
  return { ast: ast1, hasSpoilerEmbeds };
};

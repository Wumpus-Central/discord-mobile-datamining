// === Module 7533: RedundantLinkUtils ===

// Module 7533 (RedundantLinkUtils)
import findCodedLinks from "findCodedLinks" /* 4870 */;
import EmbedUtils from "EmbedUtils" /* 5426 */;
import EmbedConstants from "EmbedConstants" /* 5427 */;
import size from "module_2" /* 2 */;

const SIMPLE_EMBED_TYPES = EmbedConstants.SIMPLE_EMBED_TYPES;
const result = size.fileFinishedImporting("modules/messages/RedundantLinkUtils.tsx");

export const NO_LINK_CONTENT = { linkCount: 0, onlyLinks: false };
export const readContentLinks = function readContentLinks(found1, isLinkNode) {
  let linkCount = 0;
  const iter = found1[Symbol.iterator]();
  while (iter !== undefined) {
    if (isLinkNode(iter.next())) {
      linkCount = linkCount + 1;
      continue;
    } else {
      let obj = { linkCount, onlyLinks: false };
      iter.return();
      return obj;
    }
  }
  return { linkCount, onlyLinks: true };
};
export const hasOnlySimpleEmbed = function hasOnlySimpleEmbed(embeds) {
  if (1 !== embeds.length) {
    return false;
  } else {
    const first = embeds[0];
    let hasItem = SIMPLE_EMBED_TYPES.has(first.type);
    if (hasItem) {
      const obj = EmbedUtils;
      hasItem = obj.isEmbedInline(first);
    }
    return hasItem;
  }
};
export const isSingleLinkContent = function isSingleLinkContent(contentLinks) {
  const onlyLinks = contentLinks.onlyLinks && 1 === tmp;
  return onlyLinks;
};
export const isRedundantLink = function isRedundantLink(target, arg1) {
  let onlyLinkContent;
  let stripGameServerShareLinks;
  ({ onlyLinkContent, stripGameServerShareLinks } = arg1);
  let tmp = !onlyLinkContent;
  if (onlyLinkContent) {
    const obj = findCodedLinks;
    tmp = null == obj.parseQuestsEmbedCode(target);
  }
  let tmp5 = !tmp;
  if (tmp) {
    if (stripGameServerShareLinks) {
      const obj2 = findCodedLinks;
      stripGameServerShareLinks = null != obj2.parseGameServerShareCode(target);
    }
    tmp5 = stripGameServerShareLinks;
  }
  return tmp5;
};
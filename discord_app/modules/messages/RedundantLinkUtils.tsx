// === Module 8576: RedundantLinkUtils ===

// Module 8576 (RedundantLinkUtils)
import findCodedLinks from "findCodedLinks" /* 5743 */;
import EmbedUtils from "EmbedUtils" /* 6552 */;
import EmbedConstants from "EmbedConstants" /* 6553 */;
import size from "module_2" /* 2 */;

const SIMPLE_EMBED_TYPES = EmbedConstants.SIMPLE_EMBED_TYPES;
const result = size.fileFinishedImporting("modules/messages/RedundantLinkUtils.tsx");

export const NO_LINK_CONTENT = { linkCount: 0, onlyLinks: false };
export function readContentLinks(found1, isLinkNode) {
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
}
export function hasOnlySimpleEmbed(embeds) {
  if (1 !== embeds.length) {
    return false;
  } else {
    const first = embeds[0];
    let hasItem = SIMPLE_EMBED_TYPES.has(first.type);
    if (hasItem) {
      hasItem = EmbedUtils.isEmbedInline(first);
    }
    return hasItem;
  }
}
export function isSingleLinkContent(contentLinks) {
  let onlyLinks = contentLinks.onlyLinks;
  if (onlyLinks) {
    onlyLinks = 1 === tmp;
  }
  return onlyLinks;
}
export function isRedundantLink(target, arg1) {
  ({ onlyLinkContent, stripGameServerShareLinks } = arg1);
  let tmp = !onlyLinkContent;
  if (onlyLinkContent) {
    tmp = null == findCodedLinks.parseQuestsEmbedCode(target);
  }
  let tmp5 = !tmp;
  if (tmp) {
    if (stripGameServerShareLinks) {
      stripGameServerShareLinks = null != findCodedLinks.parseGameServerShareCode(target);
    }
    tmp5 = stripGameServerShareLinks;
  }
  return tmp5;
}
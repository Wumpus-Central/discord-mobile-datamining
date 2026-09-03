// === Module 4963: regExp ===

// Module 4963 (regExp)
import set from "set" /* 2 */;
import tDefault from "t" /* 4192 */;
import set2 from "set" /* 4964 */;

const mapped = Array.from(set2.ATTACHMENT_PATH_PREFIXES).map((str) => str.replaceAll("/", ""));
const regExp = new RegExp("^https://(?:[A-Za-z0-9-]+\\.)*(?:(?:media|images)" + "(?:-[A-Za-z0-9]+)?" + "\\.discordapp\\.net|(?:cdn" + "(?:-[A-Za-z0-9]+)?" + "\\.discordapp\\.com))/(?:" + mapped.join("|") + ")/\\d+/\\d+/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?");
let obj = { attachmentLink: null };
obj = {
  order: tDefault.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    return regExp.exec(arg0);
  },
  parse(attachmentUrl) {
    const items = [{ type: "text", content: attachmentUrl[1] }];
    return { type: "attachmentLink", content: items, attachmentUrl: attachmentUrl[0], attachmentName: attachmentUrl[1] };
  }
};
obj[0] = obj;
const arr = Array.from(set2.ATTACHMENT_PATH_PREFIXES);
const result = set.fileFinishedImporting("modules/markup/MarkupAttachmentLinkRule.tsx");

export default obj;
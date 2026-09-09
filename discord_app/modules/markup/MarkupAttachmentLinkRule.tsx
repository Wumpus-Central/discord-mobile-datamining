// === Module 5023: MarkupAttachmentLinkRule ===

// Module 5023 (MarkupAttachmentLinkRule)
import _modDef4270 from "module_4270" /* 4270 */;
import AttachmentUrlConstants from "AttachmentUrlConstants" /* 5024 */;
import size from "module_2" /* 2 */;

const mapped = Array.from(AttachmentUrlConstants.ATTACHMENT_PATH_PREFIXES).map((item) => item.replaceAll("/", ""));
const regExp = new RegExp("^https://(?:[A-Za-z0-9-]+\\.)*(?:(?:media|images)" + "(?:-[A-Za-z0-9]+)?" + "\\.discordapp\\.net|(?:cdn" + "(?:-[A-Za-z0-9]+)?" + "\\.discordapp\\.com))/(?:" + mapped.join("|") + ")/\\d+/\\d+/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?");
let obj = { attachmentLink: null };
obj = {
  order: _modDef4270.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    return regExp.exec(arg0);
  },
  parse(attachmentUrl) {
    const obj = { type: "attachmentLink", content: null, attachmentUrl: attachmentUrl[0], attachmentName: attachmentUrl[1] };
    const items = [{ type: "text", content: attachmentUrl[1] }];
    obj.content = items;
    return obj;
  }
};
obj.attachmentLink = obj;
const result = size.fileFinishedImporting("modules/markup/MarkupAttachmentLinkRule.tsx");

export default obj;
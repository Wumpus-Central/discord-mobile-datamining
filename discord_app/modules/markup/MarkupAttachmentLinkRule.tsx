// === Module 5799: MarkupAttachmentLinkRule ===

// Module 5799 (MarkupAttachmentLinkRule)
import _modDef1936 from "module_1936" /* 1936 */;
import AttachmentUrlConstants from "AttachmentUrlConstants" /* 5800 */;
import size from "module_2" /* 2 */;

function match(arg0) {
  return regExp.exec(arg0);
}
function parse(attachmentUrl) {
  let items;
  const obj = { type: "attachmentLink", content: items, attachmentUrl: attachmentUrl[0], attachmentName: attachmentUrl[1] };
  items = [{ type: "text", content: attachmentUrl[1] }];
  return obj;
}
const arr = Array.from(AttachmentUrlConstants.ATTACHMENT_PATH_PREFIXES);
const mapped = arr.map((item) => item.replaceAll("/", ""));
const regExp = new RegExp("^https://(?:[A-Za-z0-9-]+\\.)*(?:(?:media|images)" + "(?:-[A-Za-z0-9]+)?" + "\\.discordapp\\.net|(?:cdn" + "(?:-[A-Za-z0-9]+)?" + "\\.discordapp\\.com))/(?:" + mapped.join("|") + ")/\\d+/\\d+/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?");
let obj = { attachmentLink: { order: _modDef1936.defaultRules.url.order - 0.5, requiredFirstCharacters: ["h"], match, parse } };
({ order: _modDef1936.defaultRules.url.order - 0.5, requiredFirstCharacters: ["h"], match, parse });
const result = size.fileFinishedImporting("modules/markup/MarkupAttachmentLinkRule.tsx");

export default obj;
export const matchAttachmentUrl = function matchAttachmentUrl(url) {
  const match = regExp.exec(url);
  let tmp2 = null;
  if (null != match) {
    tmp2 = null;
    if (match[0] === url) {
      tmp2 = { name: match[1] };
      const obj = { name: match[1] };
    }
  }
  return tmp2;
};
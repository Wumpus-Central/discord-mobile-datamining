// discord_app/modules/markup/MarkupAttachmentLinkRule.tsx
const re0 = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;
let obj = { attachmentLink: null };
obj = {
  order: require("t").defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    return regex.exec(arg0);
  },
  parse(attachmentUrl) {
    const items = [{ type: "text", content: attachmentUrl[1] }];
    return { type: "attachmentLink", content: items, attachmentUrl: attachmentUrl[0], attachmentName: attachmentUrl[1] };
  }
};
obj[0] = obj;
const result = require("set").fileFinishedImporting("modules/markup/MarkupAttachmentLinkRule.tsx");

export default obj;
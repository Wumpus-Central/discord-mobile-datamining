const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx");

export const hasAttachmentsEmbedsComponentsOrSnapshots = function hasAttachmentsEmbedsComponentsOrSnapshots(message) {
  if (null == message) {
    return false;
  } else {
    const obj = "messageSnapshots" in message ? message.messageSnapshots : message.message_snapshots;
    let tmp = null != message.attachments;
    if (tmp) {
      tmp = message.attachments.length > 0;
    }
    if (!tmp) {
      let tmp2 = null != message.embeds;
      if (tmp2) {
        tmp2 = message.embeds.length > 0;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      let tmp3 = null != message.components;
      if (tmp3) {
        tmp3 = message.components.length > 0;
      }
      tmp = tmp3;
    }
    if (!tmp) {
      let tmp4 = null != obj;
      if (tmp4) {
        let someResult;
        if (obj != null) {
          someResult = obj.some((message) => {
            message = message.message;
            let tmp = null != message.attachments;
            if (tmp) {
              tmp = message.attachments.length > 0;
            }
            if (!tmp) {
              let tmp2 = null != message.embeds;
              if (tmp2) {
                tmp2 = message.embeds.length > 0;
              }
              tmp = tmp2;
            }
            if (!tmp) {
              let tmp3 = null != message.components;
              if (tmp3) {
                tmp3 = message.components.length > 0;
              }
              tmp = tmp3;
            }
            return tmp;
          });
        }
        tmp4 = someResult;
      }
      tmp = tmp4;
    }
    return tmp;
  }
};
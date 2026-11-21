// === Module 14273: formatPollMessageChatData ===

// Module 14273 (formatPollMessageChatData)
import MarkupParsers from "MarkupParsers" /* 8791 */;
import chat_formatPollMessageChatDataDefault from "chat/formatPollMessageChatData" /* 12146 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/native/formatPollMessageChatData.tsx");

export default function formatNativePollMessageChatData(arg0, arg1) {
  const tmp2 = chat_formatPollMessageChatDataDefault(arg0, undefined, arg1);
  if (null != tmp2) {
    let obj = {};
    let merged = Object.assign(tmp2);
    let obj2 = {};
    let merged1 = Object.assign(tmp2.question);
    obj2.text = MarkupParsers.parsePollMarkup(tmp2.question.text);
    obj.question = obj2;
    const answers = tmp2.answers;
    obj.answers = answers.map((pollMedia) => {
      const obj = {};
      const merged = Object.assign(pollMedia);
      const obj2 = {};
      const merged1 = Object.assign(pollMedia.pollMedia);
      obj2.text = MarkupParsers.parsePollMarkup(pollMedia.pollMedia.text, false);
      obj.pollMedia = obj2;
      return obj;
    });
    return obj;
  }
};
// === Module 8159: parsePollResultSystemMessageEmbed ===

// Module 8159 (parsePollResultSystemMessageEmbed)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/parsePollResultSystemMessageEmbed.tsx");

export default function parsePollResultSystemMessageEmbed(fields) {
  let fields1;
  if (fields != null) {
    fields1 = fields.fields;
  }
  if (null == fields1) {
    return null;
  } else {
    const obj = {};
    const obj2 = {};
    fields = fields.fields;
    const iter = fields[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let rawName = nextResult.rawName;
      if ("poll_question_text" === rawName) {
        obj.questionText = tmp5.rawValue;
      } else if ("victor_answer_id" === rawName) {
        obj.victorAnswerId = tmp5.rawValue;
      } else if ("victor_answer_text" === rawName) {
        obj.victorAnswerText = tmp5.rawValue;
      } else if ("victor_answer_votes" === rawName) {
        let _parseInt2 = parseInt;
        obj.victorAnswerVotes = parseInt(tmp5.rawValue, 10);
      } else if ("total_votes" === rawName) {
        let _parseInt = parseInt;
        obj.totalVotes = parseInt(tmp5.rawValue, 10);
      } else if ("victor_answer_emoji_id" === rawName) {
        obj2.id = tmp5.rawValue;
      } else if ("victor_answer_emoji_name" === rawName) {
        obj2.name = tmp5.rawValue;
      } else if ("victor_answer_emoji_animated" === rawName) {
        obj2.animated = "true" === tmp5.rawValue;
      }
      continue;
    }
    if (null != obj2.name) {
      let flag = obj2.animated;
      if (flag == null) {
        flag = false;
      }
      obj2.animated = flag;
      obj.victorEmoji = obj2;
    }
    return obj;
  }
};
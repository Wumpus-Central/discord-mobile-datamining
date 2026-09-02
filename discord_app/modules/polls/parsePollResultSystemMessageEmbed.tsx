// === Module 7960: parsePollResultSystemMessageEmbed ===

// Module 7960 (parsePollResultSystemMessageEmbed)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/polls/parsePollResultSystemMessageEmbed.tsx");

export default function parsePollResultSystemMessageEmbed(fields) {
  fields = undefined;
  if (fields != null) {
    fields = fields.fields;
  }
  if (null == fields) {
    return null;
  } else {
    let obj = {};
    obj = {};
    fields = fields.fields;
    const iter = fields[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let rawName = nextResult.rawName;
      if ("poll_question_text" === rawName) {
        let tmp12 = nextResult;
        obj.questionText = tmp5.rawValue;
      } else if ("victor_answer_id" === rawName) {
        let tmp11 = nextResult;
        obj.victorAnswerId = tmp5.rawValue;
      } else if ("victor_answer_text" === rawName) {
        let tmp10 = nextResult;
        obj.victorAnswerText = tmp5.rawValue;
      } else if ("victor_answer_votes" === rawName) {
        let _parseInt2 = parseInt;
        let tmp9 = nextResult;
        obj.victorAnswerVotes = parseInt(tmp5.rawValue, 10);
      } else if ("total_votes" === rawName) {
        let _parseInt = parseInt;
        let tmp8 = nextResult;
        obj.totalVotes = parseInt(tmp5.rawValue, 10);
      } else if ("victor_answer_emoji_id" === rawName) {
        let tmp7 = nextResult;
        obj.id = tmp5.rawValue;
      } else if ("victor_answer_emoji_name" === rawName) {
        let tmp6 = nextResult;
        obj.name = tmp5.rawValue;
      } else if ("victor_answer_emoji_animated" === rawName) {
        let tmp15 = nextResult;
        obj.animated = "true" === tmp5.rawValue;
      }
      continue;
    }
    if (null != obj.name) {
      let flag = obj.animated;
      if (flag == null) {
        flag = false;
      }
      obj.animated = flag;
      obj.victorEmoji = obj;
    }
    return obj;
  }
};
// discord_app/modules/polls/parsePollResultSystemMessageEmbed.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/parsePollResultSystemMessageEmbed.tsx");

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
        obj.id = tmp5.rawValue;
      } else if ("victor_answer_emoji_name" === rawName) {
        obj.name = tmp5.rawValue;
      } else if ("victor_answer_emoji_animated" === rawName) {
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
}

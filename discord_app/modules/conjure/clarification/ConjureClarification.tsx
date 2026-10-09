// === Module 17171: ConjureClarification ===

// Module 17171 (ConjureClarification)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
let closure_0 = { [ChannelTypes.GUILD_TEXT]: "text", [ChannelTypes.GUILD_VOICE]: "voice", [ChannelTypes.GUILD_ANNOUNCEMENT]: "announcement", [ChannelTypes.GUILD_STAGE_VOICE]: "stage", [ChannelTypes.GUILD_FORUM]: "forum", [ChannelTypes.GUILD_MEDIA]: "media" };
let closure_1 = { channel: "#", role: "@", user: "@" };
let result = size.fileFinishedImporting("modules/conjure/clarification/ConjureClarification.tsx");

export const isClarificationComplete = function isClarificationComplete(questions, arg1) {
  closure_0 = arg1;
  questions = questions.questions;
  return questions.every((item) => {
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = "" !== tmp.text.trim();
    }
    return tmp2;
  });
};
export const nextClarificationStep = function nextClarificationStep(questions, arg1, arg2) {
  questions = questions.questions;
  let num = 1;
  if (1 <= questions.length) {
    const result = (arg2 + num) % questions.length;
    while (null != arg1[questions[result].id]) {
      let str = tmp2.text;
      if ("" === str.trim()) {
        break;
      } else {
        num = num + 1;
      }
    }
    return result;
  }
  return null;
};
export const followingClarificationStep = function followingClarificationStep(clarification, arg1, bound) {
  if (bound < clarification.questions.length - 1) {
    let sum = bound + 1;
  } else {
    const questions = clarification.questions;
    let num = 1;
    sum = null;
    if (1 <= questions.length) {
      const result = (bound + num) % questions.length;
      sum = result;
      while (null != arg1[questions[result].id]) {
        let str2 = tmp4.text;
        sum = result;
        if ("" === str2.trim()) {
          break;
        } else {
          let sum1 = num + 1;
          num = sum1;
          sum = null;
          if (sum1 > questions.length) {
            break;
          }
        }
      }
    }
  }
  return sum;
};
export const formatClarificationAnswers = function formatClarificationAnswers(clarification, arg1) {
  closure_0 = arg1;
  const questions = clarification.questions;
  const mapped = questions.map((question, index) => ({ question, index, answer: closure_0[question.id] }));
  const found = mapped.filter((answer) => {
    let tmp = null != answer.answer;
    if (tmp) {
      tmp = "" !== answer.answer.text.trim();
    }
    return tmp;
  });
  const mapped1 = found.map((answer) => {
    const sum = answer.index + 1;
    return "" + sum + ". " + answer.question.question + " \u2192 " + answer.answer.text.trim();
  });
  return mapped1.join("\n");
};
export const toggleClarificationOption = function toggleClarificationOption(options, arr, id) {
  closure_0 = id;
  if (arr.includes(id)) {
    let found = arr.filter((item) => item !== closure_0);
  } else {
    const items = [];
    items[HermesBuiltin.arraySpread(arr, 0)] = id;
    found = items;
  }
  options = options.options;
  const found1 = options.filter((id) => found.includes(id.id));
  return found1.map((id) => id.id);
};
export const multiSelectAnswer = function multiSelectAnswer(options, answeredOptionIdsResult, str, conjureOwnImages) {
  const trimmed = str.trim();
  options = options.options;
  const found = options.filter((id) => answeredOptionIdsResult.includes(id.id));
  const mapped = found.map((label) => label.label);
  const obj = { kind: "multi", optionIds: answeredOptionIdsResult };
  if ("" === trimmed) {
    let obj2 = {};
  } else {
    obj2 = { custom: trimmed };
  }
  const merged = Object.assign(obj2);
  if (null == conjureOwnImages) {
    let obj3 = {};
  } else {
    obj3 = { attachment: conjureOwnImages.attachment };
  }
  const merged1 = Object.assign(obj3);
  const items = [...mapped];
  if (null == conjureOwnImages) {
    let items1 = [];
  } else {
    items1 = [conjureOwnImages.text];
  }
  if ("" === trimmed) {
    let items2 = [];
  } else {
    items2 = [trimmed];
  }
  HermesBuiltin.arraySpread(items2, HermesBuiltin.arraySpread(items1, tmp6));
  obj.text = items.join(", ");
  return obj;
};
export const clarificationChannelType = function clarificationChannelType(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = closure_0[arg0];
  }
  return tmp;
};
export const MAX_CLARIFICATION_ENTITY_PICKS = 10;
export const entityAnswer = function entityAnswer(arg0, entities, str, guildId) {
  closure_0 = arg0;
  const trimmed = str.trim();
  const obj = { kind: "entities", entities };
  if (null == guildId) {
    let obj2 = {};
  } else {
    obj2 = { guildId };
  }
  const merged = Object.assign(obj2);
  if ("" === trimmed) {
    let obj3 = {};
  } else {
    obj3 = { custom: trimmed };
  }
  const merged1 = Object.assign(obj3);
  const items = [...entities.map((name) => "" + closure_1[closure_0] + name.name)];
  if ("" === trimmed) {
    let items1 = [];
  } else {
    items1 = [trimmed];
  }
  HermesBuiltin.arraySpread(items1, tmp5);
  obj.text = items.join(", ");
  return obj;
};
export const clarificationAnswerAttachments = function clarificationAnswerAttachments(clarification, arg1) {
  closure_0 = arg1;
  const questions = clarification.questions;
  return questions.flatMap((item) => {
    if (null != closure_0[item.id]) {
      if ("" !== str.trim()) {
        if ("image" === tmp.kind) {
          const items = [tmp.attachment];
          let items1 = items;
        } else {
          items1 = [];
        }
      }
      return [];
    }
  });
};
export const clarificationAnswersPayload = function clarificationAnswersPayload(clarification, arg1) {
  closure_0 = arg1;
  const questions = clarification.questions;
  const flatMapResult = questions.flatMap((id) => {
    if (null != closure_0[id.id]) {
      if ("" !== str9.trim()) {
        if ("option" === tmp.kind) {
          const items = [tmp.optionId];
          let tmp2 = items;
        } else {
          tmp2 = "multi" === tmp.kind ? tmp.optionIds : [];
        }
        if ("custom" === tmp.kind) {
          let custom = tmp.text.trim();
        } else if ("multi" === tmp.kind) {
          custom = tmp.custom;
        }
        const arr2 = "entities" === tmp.kind ? tmp.entities : [];
        if ("entities" === tmp.kind) {
          if (arr2.length > 0) {
            const guildId = tmp.guildId;
          }
        }
        if ("image" === tmp.kind) {
          const attachment = tmp.attachment;
        }
        const obj = { question_id: id.id, option_ids: tmp2 };
        if (null != custom) {
          if ("" !== custom) {
            const obj2 = { custom };
            let obj9 = obj2;
          }
          const merged = Object.assign(obj9);
          if (null != attachment) {
            const obj3 = { attachment_id: attachment.id };
            let obj4 = obj3;
          } else {
            obj4 = {};
          }
          const merged1 = Object.assign(obj4);
          if (arr2.length > 0) {
            const obj5 = { entities: arr2 };
            let obj6 = obj5;
          } else {
            obj6 = {};
          }
          const merged2 = Object.assign(obj6);
          if (null != guildId) {
            const obj7 = { guild_id: guildId };
            let obj8 = obj7;
          } else {
            obj8 = {};
          }
          const merged3 = Object.assign(obj8);
          const items1 = [obj];
          return items1;
        }
        obj9 = {};
      }
      str9 = tmp.text;
    }
    return [];
  });
  let tmp = null;
  if (flatMapResult.length > 0) {
    let obj = { clarification_id: clarification.id, answers: flatMapResult };
    tmp = obj;
  }
  return tmp;
};
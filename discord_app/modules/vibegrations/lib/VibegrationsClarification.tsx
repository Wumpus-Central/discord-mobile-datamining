// discord_app/modules/vibegrations/lib/VibegrationsClarification.tsx
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsClarification.tsx");

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
export const nextClarificationStep = function nextClarificationStep(clarification, arg1, bound) {
  const questions = clarification.questions;
  let num = 1;
  if (1 <= questions.length) {
    const result = (bound + num) % questions.length;
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

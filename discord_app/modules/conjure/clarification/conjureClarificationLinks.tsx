// === Module 12476: conjureClarificationLinks ===

// Module 12476 (conjureClarificationLinks)
import conjureLinkedApps from "conjureLinkedApps" /* 11844 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/clarification/conjureClarificationLinks.tsx");

export const sendAfterLinkingApps = function sendAfterLinkingApps(projectId, questions, arg2, first1, fn) {
  closure_0 = projectId;
  closure_1 = arg2;
  closure_2 = first1;
  questions = questions.questions;
  const flatMapResult = questions.flatMap((link) => {
    if (true === link.link) {
      let kind;
      if (tmp != null) {
        kind = tmp.kind;
      }
      if ("entities" === kind) {
        const entities = tmp.entities;
        const mapped = entities.map((id) => ({ target: id.id, build: closure_2[link.id] }));
      }
      return [];
    }
  });
  if (0 !== flatMapResult.length) {
    Promise.allSettled(flatMapResult.map((item) => {
      ({ target, build } = item);
      return conjureLinkedApps.linkConjureApp(target, closure_0, build);
    })).then(fn);
    const allSettledResult = Promise.allSettled(flatMapResult.map((item) => {
      ({ target, build } = item);
      return conjureLinkedApps.linkConjureApp(target, closure_0, build);
    }));
  } else {
    fn();
  }
};
// discord_app/modules/conjure/clarification/conjureClarificationLinks.tsx
import conjureLinkedApps from "../linked_apps/conjureLinkedApps.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/clarification/conjureClarificationLinks.tsx");

export const sendAfterLinkingApps = function sendAfterLinkingApps(arg0, result1, arg2, first1, fn) {
  closure_0 = arg0;
  closure_1 = arg2;
  closure_2 = first1;
  const questions = result1.questions;
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
    Promise.allSettled(
      flatMapResult.map((item) => {
        ({ target, build } = item);
        return conjureLinkedApps.linkConjureApp(target, closure_0, build);
      }),
    ).then(fn);
    const allSettledResult = Promise.allSettled(
      flatMapResult.map((item) => {
        ({ target, build } = item);
        return conjureLinkedApps.linkConjureApp(target, closure_0, build);
      }),
    );
  } else {
    fn();
  }
};

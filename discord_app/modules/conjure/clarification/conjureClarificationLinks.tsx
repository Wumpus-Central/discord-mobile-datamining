// === Module 13572: conjureClarificationLinks ===

// Module 13572 (conjureClarificationLinks)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/clarification/conjureClarificationLinks.tsx");

export function linkedPair(caller, link, items) {
  const first = items[0];
  let id;
  if (first != null) {
    id = first.id;
  }
  if (null == id) {
    return null;
  } else if (true === link.link) {
    const obj2 = { target: id, caller, key: null };
    const _HermesInternal2 = HermesInternal;
    obj2.key = "" + id + ":" + caller;
  } else if ("incoming" === link.link) {
    const obj = { target: caller, caller: id, key: null };
    const _HermesInternal = HermesInternal;
    obj.key = "" + caller + ":" + id;
  }
}
export function sendAfterLinkingApps(projectId, questions, arg2, builds, fn) {
  dependencyMap = arg2;
  closure_2 = builds;
  questions = questions.questions;
  const flatMapResult = questions.flatMap((item) => {
    let kind;
    if (dependencyMap[item.id] != null) {
      kind = tmp.kind;
    }
    if ("entities" !== kind) {
      items = [];
    } else {
      const entities = tmp.entities;
      items = entities.flatMap((item) => {
        items = [item];
        const first = items[0];
        let id;
        if (first != null) {
          id = first.id;
        }
        if (null == id) {
          if (null == null) {
            let items1 = [];
          } else {
            const obj2 = {};
            const merged = Object.assign(null);
            obj2.build = closure_2[item.id];
            ({ link_purpose: obj3.purpose, link_flow: obj3.flow } = item);
            items1 = [obj2];
          }
          return items1;
        } else if (true === item.link) {
          const obj5 = { target: id, caller: item, key: null };
          const _HermesInternal2 = HermesInternal;
          obj5.key = "" + id + ":" + item;
        } else if ("incoming" === item.link) {
          const obj = { target: item, caller: id, key: null };
          const _HermesInternal = HermesInternal;
          obj.key = "" + item + ":" + id;
        }
      });
    }
    return items;
  });
  if (0 !== flatMapResult.length) {
    Promise.allSettled(flatMapResult.map((item) => {
      ({ target, caller } = item);
      const merged = Object.assign(item, Object.assign({ target: 0, caller: 0 }));
      return projectId(13243).linkConjureApp(target, caller, merged);
    })).then(fn);
    const allSettledResult = Promise.allSettled(flatMapResult.map((item) => {
      ({ target, caller } = item);
      const merged = Object.assign(item, Object.assign({ target: 0, caller: 0 }));
      return projectId(13243).linkConjureApp(target, caller, merged);
    }));
  } else {
    fn();
  }
}
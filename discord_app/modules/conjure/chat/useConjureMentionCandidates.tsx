// discord_app/modules/conjure/chat/useConjureMentionCandidates.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureMentionCandidates.tsx");

export default function useConjureMentionCandidates(arg0) {
  _require = arg0;
  let items = [ConjureProjectStore];
  let items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(closure_0),
    items1,
  );
  const obj = require("initialize");
  const conjureProjectPeople = require("useConjureProjectCreator").useConjureProjectPeople(stateFromStores);
  creator = conjureProjectPeople.creator;
  const collaborators = conjureProjectPeople.collaborators;
  const obj2 = require("useConjureProjectCreator");
  let items2 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => stateFromStores1.getId());
  const items3 = [creator, collaborators, stateFromStores1];
  return collaborators.useMemo(() => {
    if (null != creator) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [...collaborators];
    return items2.filter((id) => id.id !== stateFromStores1 && !id.bot);
  }, items3);
}

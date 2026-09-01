// discord_app/modules/quests/QuestHomeNavigationStore.tsx
import set from "../../../_runtime/00002_set.js";
import defaultStatesAreEqual from "../../lib/ZustandStore.tsx";

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({
  sort: null,
  filter: null,
  scrollToQuestId: null,
}));
const result = set.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;

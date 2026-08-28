// === Module 11269: zustandStore ===

// Module 11269 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4312 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = set.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
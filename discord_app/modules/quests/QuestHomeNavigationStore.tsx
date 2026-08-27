// === Module 11251: zustandStore ===

// Module 11251 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4311 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = set.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
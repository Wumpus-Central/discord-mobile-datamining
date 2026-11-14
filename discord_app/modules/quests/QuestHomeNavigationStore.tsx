// === Module 10129: QuestHomeNavigationStore ===

// Module 10129 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5505 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToQuestsSection: false }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
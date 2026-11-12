// === Module 10061: QuestHomeNavigationStore ===

// Module 10061 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5442 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToQuestsSection: false }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
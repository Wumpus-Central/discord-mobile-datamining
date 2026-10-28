// === Module 9602: QuestHomeNavigationStore ===

// Module 9602 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5199 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
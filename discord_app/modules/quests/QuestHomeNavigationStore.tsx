// === Module 11799: QuestHomeNavigationStore ===

// Module 11799 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4443 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
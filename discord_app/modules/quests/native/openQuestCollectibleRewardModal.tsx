// discord_app/modules/quests/native/openQuestCollectibleRewardModal.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import getQuestLogger from "../lib/getQuestLogger.tsx";
import MODAL_KEYDefault from "../../collectibles/native/ProductPurchaseSuccessActionCreators.tsx";
import _getDefaultRewardName from "../utils/QuestRewardUtils.tsx";
import useQuests from "../hooks/QuestHooks.tsx";
import closure_3 from "../../../stores/UserStore.tsx";
import { QuestsExperimentLocations } from "../QuestConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function QuestCollectibleRewardModalMessages(quest) {
  quest = quest.quest;
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = _getDefaultRewardName;
  const defaultRewardNameWithArticle = obj1.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  obj = { children: null };
  const claimedCollectibleRewardMessage = useQuests.useClaimedCollectibleRewardMessage(quest.config);
  obj = { variant: "heading-xl/bold", style: tmp.title, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.format(getSystemLocale.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  const items1 = [callback(Text.Text, obj)];
  obj1 = { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage };
  items1[1] = callback(Text.Text, obj1);
  obj[0] = items1;
  return callback2(closure_6, obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: null };
createCacheKey = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export const openQuestCollectibleRewardModal = function openQuestCollectibleRewardModal(onSuccess) {
  ({ quest: require, product } = onSuccess);
  let obj = getQuestLogger;
  obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const questLogger = obj.getQuestLogger(obj);
  if (null != product) {
    obj = { product: null, renderMessages: null, onSuccess: null };
    obj[0] = product;
    obj[1] = function renderMessages() {
      return closure_1_5(closure_1_9, { quest: closure_0 });
    };
    obj[2] = onSuccess.onSuccess;
    MODAL_KEYDefault.open(obj);
    const obj4 = MODAL_KEYDefault;
  } else {
    questLogger.warn("Product is null");
  }
};

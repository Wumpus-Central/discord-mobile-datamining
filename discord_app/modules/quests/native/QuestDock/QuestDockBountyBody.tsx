// === Module 15206: QuestDockBountyBody ===

// Module 15206 (QuestDockBountyBody)
import util from "util" /* 1114 */;
import _modDef11302 from "module_11302" /* 11302 */;
import QuestDockHooks from "QuestDockHooks" /* 15095 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15105 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 15185 */;
import QuestDockInsetHeaderBody from "QuestDockInsetHeaderBody" /* 15203 */;
import noop from "module_19" /* 19 */;

const QuestDockInsetHeaderBodyDefault = QuestDockInsetHeaderBody;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(function QuestDockBountyBody() {
  const isRendered = noop.useContext(QuestDockVisibilityContextDefault).isRendered;
  let obj = QuestDockCreativeContext;
  const questDockBounty = obj.useQuestDockBounty();
  let isQuestDockExpanded = QuestDockHooks.useIsQuestDockExpanded();
  const callback = noop.useCallback(() => {

  }, []);
  obj = { assetUrl: _modDef11302, isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp8 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp8 = !isRendered;
  }
  obj.paused = tmp8;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  obj = { rewardTile: jsx(QuestDockInsetHeaderBody.QuestDockBodyRewardTile, { assetUrl: _modDef11302, isAnimatedAsset: true, paused: null, withAnimation: null }), title: null, description: null, ctaText: null, onCtaPress: null, withAnimation: isQuestDockExpanded };
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj.title = str;
  const intl = util.intl;
  obj.description = intl.string(util.t["1uzE2S"]);
  const intl2 = util.intl;
  obj.ctaText = intl2.string(util.t["1IPUq9"]);
  obj.onCtaPress = callback;
  return jsx(QuestDockInsetHeaderBodyDefault, { rewardTile: jsx(QuestDockInsetHeaderBody.QuestDockBodyRewardTile, { assetUrl: _modDef11302, isAnimatedAsset: true, paused: null, withAnimation: null }), title: null, description: null, ctaText: null, onCtaPress: null, withAnimation: isQuestDockExpanded });
});
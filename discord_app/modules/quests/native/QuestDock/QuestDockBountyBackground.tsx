// === Module 15549: QuestDockBountyBackground ===

// Module 15549 (QuestDockBountyBackground)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import AssetUtils from "AssetUtils" /* 11634 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 15429 */;

require = fn;
function QuestDockBackgroundSmokeArt() {
  const tmp = closure_9();
  const items = [QuestDockStore];
  const stateFromStores = width(563).useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const obj = width(563);
  const tmp4 = height;
  const tmp6 = height(15539)(QuestDockMode.EXPANDED);
  let size = width(15540).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items1 = [width, height];
  let tmp8 = null;
  if (tmp6) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.smokeArtWrapper, tmp7];
    obj3.style = items2;
    const obj4 = { paused: stateFromStores !== QuestDockMode.EXPANDED };
    obj3.children = jsx(tmp4(15540), { paused: stateFromStores !== QuestDockMode.EXPANDED });
    tmp8 = <View style={null}>{null}</View>;
  }
  return tmp8;
}
const View = fn(17).View;
const QuestDockMode = fn(5749).QuestDockMode;
const expandedHeight = fn(15431).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  let token;
  questDockBounty = questDockBounty(15438).useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  let obj = questDockBounty(15438);
  token = questDockBounty(4526).useToken(token(576).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(() => _modDef672.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(), items1);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null };
  const obj2 = questDockBounty(4526);
  obj3.collapsedMediaMode = questDockBounty(15538).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  obj3.foregroundContent = <QuestDockBackgroundSmokeArt />;
  return jsx(token(15538), { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null });
});
// === Module 14747: QuestDockBountyBackground ===

// Module 14747 (QuestDockBountyBackground)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14622 */;

require = fn;
function QuestDockBackgroundSmokeArt() {
  const tmp = closure_9();
  const tmp2 = width;
  const items = [QuestDockStore];
  const stateFromStores = width(563).useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const obj = width(563);
  const tmp5 = height;
  const tmp7 = height(14734)(QuestDockMode.EXPANDED);
  let size = width(14735).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items1 = [width, height];
  let tmp9 = null;
  if (tmp7) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.smokeArtWrapper, tmp8];
    obj3.style = items2;
    const obj4 = { surface: tmp2(14735).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED };
    obj3.children = jsx(tmp5(14735), { surface: tmp2(14735).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED });
    tmp9 = <View style={null}>{null}</View>;
    const tmp5Result = tmp5(14735);
  }
  return tmp9;
}
const View = fn(17).View;
const QuestDockMode = fn(5756).QuestDockMode;
const expandedHeight = fn(14624).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  let token;
  questDockBounty = questDockBounty(14631).useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  let obj = questDockBounty(14631);
  token = questDockBounty(4531).useToken(token(576).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(() => _modDef672.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(), items1);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null };
  const obj2 = questDockBounty(4531);
  obj3.collapsedMediaMode = questDockBounty(14733).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  obj3.foregroundContent = <QuestDockBackgroundSmokeArt />;
  return jsx(token(14733), { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null });
});
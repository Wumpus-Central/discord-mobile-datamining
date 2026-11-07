// === Module 17501: QuestDockPlayableBackground ===

// Module 17501 (QuestDockPlayableBackground)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import AssetUtils from "AssetUtils" /* 9785 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17380 */;

require = fn;
function QuestDockBackgroundSmokeArt() {
  const tmp = closure_9();
  const tmp2 = width;
  items = [QuestDockStore];
  const stateFromStores = width(563).useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const obj = width(563);
  const tmp5 = height;
  const tmp7 = height(17486)(QuestDockMode.EXPANDED);
  let size = width(17487).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items1 = [width, height];
  let tmp9 = null;
  if (tmp7) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.smokeArtWrapper, tmp8];
    obj3.style = items2;
    const obj4 = { surface: tmp2(17487).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED };
    obj3.children = jsx(tmp5(17487), { surface: tmp2(17487).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED });
    tmp9 = <View style={null}>{null}</View>;
    const tmp5Result = tmp5(17487);
  }
  return tmp9;
}
const View = fn(17).View;
const QuestDockMode = fn(6836).QuestDockMode;
const expandedHeight = fn(17382).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBackground.tsx");

export default noop.memo(function QuestDockPlayableBackground(imageUrl) {
  let questDockPlayable;
  let token;
  questDockPlayable = questDockPlayable(17411).useQuestDockPlayable();
  items = [questDockPlayable.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockPlayable.videoPreview), items);
  let obj = questDockPlayable(17411);
  token = questDockPlayable(5724).useToken(token(575).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(() => _modDef671.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(), items1);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockPlayable.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null };
  const obj2 = questDockPlayable(5724);
  obj3.collapsedMediaMode = questDockPlayable(17485).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  obj3.foregroundContent = <QuestDockBackgroundSmokeArt />;
  return jsx(token(17485), { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockPlayable.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null });
});
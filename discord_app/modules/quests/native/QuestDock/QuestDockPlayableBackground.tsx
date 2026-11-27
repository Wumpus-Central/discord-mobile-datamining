// === Module 16818: QuestDockPlayableBackground ===

// Module 16818 (QuestDockPlayableBackground)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import AssetUtils from "AssetUtils" /* 9904 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16685 */;

require = fn;
function QuestDockBackgroundSmokeArt() {
  const tmp = closure_9();
  const tmp2 = width;
  items = [QuestDockStore];
  const stateFromStores = width(563).useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const obj = width(563);
  const tmp5 = height;
  const tmp7 = height(16804)(QuestDockMode.EXPANDED);
  let size = width(16806).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items1 = [width, height];
  let tmp9 = null;
  if (tmp7) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.smokeArtWrapper, tmp8];
    obj3.style = items2;
    const obj4 = { surface: tmp2(16806).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED };
    obj3.children = jsx(tmp5(16806), { surface: tmp2(16806).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED });
    tmp9 = <View style={null}>{null}</View>;
    const tmp5Result = tmp5(16806);
  }
  return tmp9;
}
const View = fn(17).View;
const QuestDockMode = fn(6871).QuestDockMode;
const expandedHeight = fn(16687).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBackground.tsx");

export default noop.memo(function QuestDockPlayableBackground(imageUrl) {
  let questDockPlayable;
  let token;
  questDockPlayable = questDockPlayable(16721).useQuestDockPlayable();
  items = [questDockPlayable.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockPlayable.videoPreview), items);
  let obj = questDockPlayable(16721);
  token = questDockPlayable(5607).useToken(token(575).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(() => _modDef671.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(), items1);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockPlayable.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null };
  const obj2 = questDockPlayable(5607);
  obj3.collapsedMediaMode = questDockPlayable(16803).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  obj3.foregroundContent = <QuestDockBackgroundSmokeArt />;
  return jsx(token(16803), { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockPlayable.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null });
});
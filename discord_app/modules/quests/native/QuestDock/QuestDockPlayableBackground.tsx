// discord_app/modules/quests/native/QuestDock/QuestDockPlayableBackground.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import AssetUtils from "../../lib/AssetUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
function QuestDockBackgroundSmokeArt() {
  const tmp = closure_9();
  const tmp2 = width;
  const items = [QuestDockStore];
  const stateFromStores = width(563).useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const obj = width(563);
  const tmp5 = height;
  const tmp7 = height(17162)(QuestDockMode.EXPANDED);
  let size = width(17163).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items1 = [width, height];
  let tmp9 = null;
  if (tmp7) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.smokeArtWrapper, tmp8];
    obj3.style = items2;
    const obj4 = {
      surface: tmp2(17163).QuestDockBountySmokeSurface.EXPANDED,
      paused: stateFromStores !== QuestDockMode.EXPANDED,
    };
    obj3.children = jsx(tmp5(17163), {
      surface: tmp2(17163).QuestDockBountySmokeSurface.EXPANDED,
      paused: stateFromStores !== QuestDockMode.EXPANDED,
    });
    tmp9 = <View style={null}>{null}</View>;
    const tmp5Result = tmp5(17163);
  }
  return tmp9;
}
const View = fn(17).View;
const QuestDockMode = fn(6781).QuestDockMode;
const expandedHeight = fn(17059).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBackground.tsx");

export default noop.memo(function QuestDockPlayableBackground(imageUrl) {
  let questDockPlayable;
  let token;
  questDockPlayable = questDockPlayable(17087).useQuestDockPlayable();
  const items = [questDockPlayable.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockPlayable.videoPreview), items);
  let obj = questDockPlayable(17087);
  token = questDockPlayable(5596).useToken(token(575).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(
    () => _modDef671.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(),
    items1,
  );
  const obj3 = {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockPlayable.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    backdropColor: null,
    expandedHeight: null,
    foregroundContent: null,
  };
  const obj2 = questDockPlayable(5596);
  obj3.collapsedMediaMode = questDockPlayable(17161).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  obj3.foregroundContent = <QuestDockBackgroundSmokeArt />;
  return jsx(token(17161), {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockPlayable.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    backdropColor: null,
    expandedHeight: null,
    foregroundContent: null,
  });
});

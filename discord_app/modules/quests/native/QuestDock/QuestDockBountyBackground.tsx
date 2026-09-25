// discord_app/modules/quests/native/QuestDock/QuestDockBountyBackground.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import AssetUtils from "../../lib/AssetUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
function QuestDockBackgroundSmokeArt() {
  const tmp = closure_9();
  const items = [QuestDockStore];
  const stateFromStores = width(563).useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const obj = width(563);
  const tmp4 = height;
  const tmp6 = height(14709)(QuestDockMode.EXPANDED);
  let size = width(14710).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items1 = [width, height];
  let tmp8 = null;
  if (tmp6) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.smokeArtWrapper, tmp7];
    obj3.style = items2;
    const obj4 = { paused: stateFromStores !== QuestDockMode.EXPANDED };
    obj3.children = jsx(tmp4(14710), { paused: stateFromStores !== QuestDockMode.EXPANDED });
    tmp8 = <View style={null}>{null}</View>;
  }
  return tmp8;
}
const View = fn(17).View;
const QuestDockMode = fn(5751).QuestDockMode;
const expandedHeight = fn(14599).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  let token;
  questDockBounty = questDockBounty(14606).useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  let obj = questDockBounty(14606);
  token = questDockBounty(4528).useToken(token(576).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(
    () => _modDef672.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(),
    items1,
  );
  const obj3 = {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockBounty.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    backdropColor: null,
    expandedHeight: null,
    foregroundContent: null,
  };
  const obj2 = questDockBounty(4528);
  obj3.collapsedMediaMode = questDockBounty(14708).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  obj3.foregroundContent = <QuestDockBackgroundSmokeArt />;
  return jsx(token(14708), {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockBounty.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    backdropColor: null,
    expandedHeight: null,
    foregroundContent: null,
  });
});

// discord_app/modules/quests/native/QuestDock/QuestDockBountyBackground.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import AssetUtils from "../../lib/AssetUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const expandedHeight = fn(15362).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  let questDockBounty;
  let token;
  questDockBounty = questDockBounty(15369).useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  let obj = questDockBounty(15369);
  token = questDockBounty(4457).useToken(token(576).colors.BACKGROUND_BRAND);
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
  };
  const obj2 = questDockBounty(4457);
  obj3.collapsedMediaMode = questDockBounty(15469).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  return jsx(token(15469), {
    imageUrl: imageUrl.previewImageUrl,
    videoUrl: questDockBounty.videoPreview,
    videoMimetype: memo,
    collapsedMediaMode: null,
    gradientBaseColor: null,
    backdropColor: null,
    expandedHeight: null,
  });
});

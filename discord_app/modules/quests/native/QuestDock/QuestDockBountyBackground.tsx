// === Module 16807: QuestDockBountyBackground ===

// Module 16807 (QuestDockBountyBackground)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import AssetUtils from "AssetUtils" /* 9903 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16678 */;

const require = globalThis.__r;

require = fn;
function QuestDockBackgroundSmokeArt() {
  const tmp = closure_9();
  const tmp2 = width;
  items = [QuestDockStore];
  const stateFromStores = width(563).useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const obj = width(563);
  const tmp5 = height;
  const tmp7 = height(16797)(QuestDockMode.EXPANDED);
  let size = width(16799).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items1 = [width, height];
  let tmp9 = null;
  if (tmp7) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.smokeArtWrapper, tmp8];
    obj3.style = items2;
    const obj4 = { surface: tmp2(16799).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED };
    obj3.children = jsx(tmp5(16799), { surface: tmp2(16799).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED });
    tmp9 = <View style={null}>{null}</View>;
    const tmp5Result = tmp5(16799);
  }
  return tmp9;
}
const View = fn(17).View;
const QuestDockMode = fn(6871).QuestDockMode;
const expandedHeight = fn(16680).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(function QuestDockBountyBackground(imageUrl) {
  _require = undefined;
  let token;
  const questDockBounty = require("QuestDockCreativeContext").useQuestDockBounty();
  let obj = require("QuestDockCreativeContext");
  const pickBountyPreviewUrlResult = require("pickBountyVideoRendition").pickBountyPreviewUrl(questDockBounty, require("BountyAspectRatio").BountyAspectRatio.PORTRAIT);
  _require = pickBountyPreviewUrlResult;
  items = [pickBountyPreviewUrlResult];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(c0), items);
  const obj2 = require("pickBountyVideoRendition");
  token = require("useToken").useToken(token(575).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(() => _modDef671.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(), items1);
  const obj4 = { imageUrl: imageUrl.previewImageUrl, videoUrl: pickBountyPreviewUrlResult, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null };
  const obj3 = require("useToken");
  obj4.collapsedMediaMode = require("QuestDockVideoBackground").QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj4.gradientBaseColor = memo1;
  obj4.backdropColor = memo1;
  obj4.expandedHeight = expandedHeight;
  obj4.foregroundContent = <QuestDockBackgroundSmokeArt />;
  return jsx(token(16796), { imageUrl: imageUrl.previewImageUrl, videoUrl: pickBountyPreviewUrlResult, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null });
});
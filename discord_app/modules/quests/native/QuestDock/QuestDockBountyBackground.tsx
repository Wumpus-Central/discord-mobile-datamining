// === Module 15033: QuestDockBountyBackground ===

// Module 15033 (QuestDockBountyBackground)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4586 */;
import AssetUtils from "AssetUtils" /* 10013 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 14940 */;
import QuestDockVideoBackground from "QuestDockVideoBackground" /* 15019 */;
import useIsQuestDockModeActiveOrExitingDefault from "useIsQuestDockModeActiveOrExiting" /* 15020 */;
import QuestDockBountySmokeLayer from "QuestDockBountySmokeLayer" /* 15021 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14910 */;

const QuestDockVideoBackgroundDefault = QuestDockVideoBackground;
const QuestDockBountySmokeLayerDefault = QuestDockBountySmokeLayer;

require = fn;
const View = fn(17).View;
const QuestDockMode = fn(5630).QuestDockMode;
const expandedHeight = fn(14912).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(13);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestDockStore];
    const fn = function n() {
      return QuestDockStore.prevRestingQuestDockMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
  const tmpResult = useStateFromStores;
  const tmp11 = useIsQuestDockModeActiveOrExitingDefault(QuestDockMode.EXPANDED);
  const smokeArtSize = QuestDockBountySmokeLayer.useSmokeArtSize();
  ({ width, height } = smokeArtSize);
  if (cResult[2] === height) {
    if (cResult[3] === width) {
      let tmp13 = cResult[4];
    }
    if (tmp11) {
      if (cResult[5] === tmp13) {
        if (cResult[6] === tmp4.smokeArtWrapper) {
          let tmp15 = cResult[7];
        }
        if (cResult[8] !== (stateFromStores !== QuestDockMode.EXPANDED)) {
          const obj2 = { surface: QuestDockBountySmokeLayer.QuestDockBountySmokeSurface.EXPANDED, paused: tmp16 };
          const tmp20 = jsx(QuestDockBountySmokeLayerDefault, { surface: QuestDockBountySmokeLayer.QuestDockBountySmokeSurface.EXPANDED, paused: tmp16 });
          cResult[8] = tmp16;
          cResult[9] = tmp20;
          let tmp17 = tmp20;
          const tmp9Result = QuestDockBountySmokeLayerDefault;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] === tmp15) {
          if (cResult[11] === tmp17) {
            let tmp21 = cResult[12];
          }
          return tmp21;
        }
        const obj3 = { style: tmp15, children: tmp17 };
        const tmp24 = <View style={tmp15}>{tmp17}</View>;
        cResult[10] = tmp15;
        cResult[11] = tmp17;
        cResult[12] = tmp24;
        tmp21 = tmp24;
      }
      const items1 = [tmp4.smokeArtWrapper, tmp13];
      cResult[5] = tmp13;
      cResult[6] = tmp4.smokeArtWrapper;
      cResult[7] = items1;
      tmp15 = items1;
    } else {
      return null;
    }
  }
  const size = { width, height };
  cResult[2] = height;
  cResult[3] = width;
  cResult[4] = size;
  tmp13 = size;
  const tmpResult2 = QuestDockBountySmokeLayer;
}) : (() => {
  const tmp = closure_9();
  const tmp2 = width;
  const items = [QuestDockStore];
  const stateFromStores = width(573).useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const obj = width(573);
  const tmp5 = height;
  const tmp7 = height(15020)(QuestDockMode.EXPANDED);
  let size = width(15021).useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items1 = [width, height];
  let tmp9 = null;
  if (tmp7) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.smokeArtWrapper, tmp8];
    obj3.style = items2;
    const obj4 = { surface: tmp2(15021).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED };
    obj3.children = jsx(tmp5(15021), { surface: tmp2(15021).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED });
    tmp9 = <View style={null}>{null}</View>;
    const tmp5Result = tmp5(15021);
  }
  return tmp9;
});
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((previewImageUrl) => {
  const cResult = c.c(10);
  previewImageUrl = previewImageUrl.previewImageUrl;
  const questDockBounty = QuestDockCreativeContext.useQuestDockBounty();
  if (cResult[0] !== questDockBounty.videoPreview) {
    const mimetype = AssetUtils.getMimetype(questDockBounty.videoPreview);
    cResult[0] = questDockBounty.videoPreview;
    cResult[1] = mimetype;
    let tmp5 = mimetype;
    const tmpResult = AssetUtils;
  } else {
    tmp5 = cResult[1];
  }
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  if (cResult[2] !== token) {
    const tmp7Result = _modDef683;
    const hexResult = tmp7Result.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex();
    cResult[2] = token;
    cResult[3] = hexResult;
    let tmp9 = hexResult;
    const mixResult = tmp7Result.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb");
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = <closure_10 />;
    cResult[4] = tmp16;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp9) {
    if (cResult[6] === questDockBounty.videoPreview) {
      if (cResult[7] === previewImageUrl) {
        if (cResult[8] === tmp5) {
          let tmp17 = cResult[9];
        }
        return tmp17;
      }
    }
  }
  const obj3 = { imageUrl: previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: tmp5, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null };
  const tmpResult2 = useToken;
  obj3.collapsedMediaMode = QuestDockVideoBackground.QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = tmp9;
  obj3.backdropColor = tmp9;
  obj3.expandedHeight = expandedHeight;
  obj3.foregroundContent = tmp13;
  const tmp19 = jsx(QuestDockVideoBackgroundDefault, { imageUrl: previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: tmp5, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null });
  cResult[5] = tmp9;
  cResult[6] = questDockBounty.videoPreview;
  cResult[7] = previewImageUrl;
  cResult[8] = tmp5;
  cResult[9] = tmp19;
  tmp17 = tmp19;
  const tmp7Result2 = QuestDockVideoBackgroundDefault;
}) : ((imageUrl) => {
  let questDockBounty;
  let token;
  questDockBounty = questDockBounty(14940).useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  let obj = questDockBounty(14940);
  token = questDockBounty(4586).useToken(token(587).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(() => _modDef683.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(), items1);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null };
  const obj2 = questDockBounty(4586);
  obj3.collapsedMediaMode = questDockBounty(15019).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  obj3.foregroundContent = <closure_10 />;
  return jsx(token(15019), { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null, foregroundContent: null });
}));
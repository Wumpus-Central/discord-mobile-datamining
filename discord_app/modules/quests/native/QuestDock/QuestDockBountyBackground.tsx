// === Module 15018: QuestDockBountyBackground ===

// Module 15018 (QuestDockBountyBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4580 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import QuestDockConstants from "QuestDockConstants" /* 14896 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 14925 */;
import QuestDockVideoBackground from "QuestDockVideoBackground" /* 15004 */;
import useIsQuestDockModeActiveOrExitingDefault from "useIsQuestDockModeActiveOrExiting" /* 15005 */;
import QuestDockBountySmokeLayer from "QuestDockBountySmokeLayer" /* 15006 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14894 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const QuestDockVideoBackgroundDefault = QuestDockVideoBackground;
const QuestDockBountySmokeLayerDefault = QuestDockBountySmokeLayer;
let previewImageUrl;

const View = react_native.View;
const QuestDockMode = QuestConstants.QuestDockMode;
const expandedHeight = QuestDockConstants.QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let height;
  let tmp5;
  let tmp6;
  let width;
  const obj = react2;
  const cResult = obj.c(13);
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
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp11 = useIsQuestDockModeActiveOrExitingDefault(QuestDockMode.EXPANDED);
  const tmpResult2 = QuestDockBountySmokeLayer;
  const smokeArtSize = tmpResult2.useSmokeArtSize();
  ({ width, height } = smokeArtSize);
  if (cResult[2] === height) {
    let tmp13;
    if (cResult[3] === width) {
      tmp13 = cResult[4];
    }
    if (tmp11) {
      if (cResult[5] === tmp13) {
        let tmp15;
        let tmp17;
        if (cResult[6] === tmp4.smokeArtWrapper) {
          tmp15 = cResult[7];
        }
        if (cResult[8] !== (stateFromStores !== QuestDockMode.EXPANDED)) {
          QuestDockBountySmokeLayerDefault;
          const tmp20 = <tmp9Result surface={QuestDockBountySmokeLayer.QuestDockBountySmokeSurface.EXPANDED} paused={stateFromStores !== QuestDockMode.EXPANDED} />;
          cResult[8] = stateFromStores !== QuestDockMode.EXPANDED;
          cResult[9] = tmp20;
          tmp17 = tmp20;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] === tmp15) {
          let tmp21;
          if (cResult[11] === tmp17) {
            tmp21 = cResult[12];
          }
          return tmp21;
        }
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
  size = { width, height };
  cResult[2] = height;
  cResult[3] = width;
  cResult[4] = size;
  tmp13 = size;
}) : (() => {
  let height;
  let width;
  const items = [QuestDockStore];
  const tmp = closure_9();
  const obj = width(573);
  const stateFromStores = obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const tmp7 = height(15005)(QuestDockMode.EXPANDED);
  const obj2 = width(15006);
  size = obj2.useSmokeArtSize();
  const tmp2 = width;
  width = size.width;
  const tmp5 = height;
  height = size.height;
  const items1 = [width, height];
  let tmp9 = null;
  if (tmp7) {
    const items2 = [tmp.smokeArtWrapper, tmp8];
    ({ surface: tmp2(15006).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== QuestDockMode.EXPANDED });
    tmp5(15006);
    tmp9 = <View style={items2}>{null}</View>;
  }
  return tmp9;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((previewImageUrl) => {
  let tmp13;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  previewImageUrl = previewImageUrl.previewImageUrl;
  const obj2 = QuestDockCreativeContext;
  const questDockBounty = obj2.useQuestDockBounty();
  if (cResult[0] !== questDockBounty.videoPreview) {
    const tmpResult = AssetUtils;
    const mimetype = tmpResult.getMimetype(questDockBounty.videoPreview);
    cResult[0] = questDockBounty.videoPreview;
    cResult[1] = mimetype;
    tmp5 = mimetype;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult2 = useToken;
  const token = tmpResult2.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  if (cResult[2] !== token) {
    const tmp7Result = _modDef683;
    const mixResult = tmp7Result.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb");
    const hexResult = mixResult.hex();
    cResult[2] = token;
    cResult[3] = hexResult;
    tmp9 = hexResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = <closure_10 />;
    cResult[4] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp9) {
    if (cResult[6] === questDockBounty.videoPreview) {
      if (cResult[7] === previewImageUrl) {
        let tmp17;
        if (cResult[8] === tmp5) {
          tmp17 = cResult[9];
        }
        return tmp17;
      }
    }
  }
  QuestDockVideoBackgroundDefault;
  const tmp19 = <tmp7Result2 imageUrl={previewImageUrl} videoUrl={questDockBounty.videoPreview} videoMimetype={tmp5} collapsedMediaMode={QuestDockVideoBackground.QuestDockBackgroundCollapsedMediaMode.HIDDEN} gradientBaseColor={tmp9} backdropColor={tmp9} expandedHeight={expandedHeight} foregroundContent={tmp13} />;
  cResult[5] = tmp9;
  cResult[6] = questDockBounty.videoPreview;
  cResult[7] = previewImageUrl;
  cResult[8] = tmp5;
  cResult[9] = tmp19;
  tmp17 = tmp19;
}) : ((previewImageUrl) => {
  let questDockBounty;
  let token;
  previewImageUrl = previewImageUrl.previewImageUrl;
  let obj = questDockBounty(14925);
  questDockBounty = obj.useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getMimetype(questDockBounty.videoPreview);
  }, items);
  const obj2 = questDockBounty(4580);
  token = obj2.useToken(token(587).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = react.useMemo(() => {
    const obj = _modDef683;
    const mixResult = obj.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb");
    return mixResult.hex();
  }, items1);
  token(15004);
  return <tmp5 imageUrl={previewImageUrl} videoUrl={questDockBounty.videoPreview} videoMimetype={memo} collapsedMediaMode={questDockBounty(15004).QuestDockBackgroundCollapsedMediaMode.HIDDEN} gradientBaseColor={memo1} backdropColor={memo1} expandedHeight={expandedHeight} foregroundContent={null} />;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default memoResult;
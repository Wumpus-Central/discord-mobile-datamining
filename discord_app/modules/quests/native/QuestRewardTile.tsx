// discord_app/modules/quests/native/QuestRewardTile.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { useMemo } from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ AppState: closure_6, View: error } = get_ActivityIndicator);
let closure_10 = createCacheKey.createStyles(() => {
  const obj = { borderRadius: ThemesDefault.radii.sm, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
  obj[0] = obj;
  obj[1] = { overflow: "hidden", height: "100%", width: "100%" };
  obj[2] = { height: "100%", width: "100%" };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default function QuestRewardTile(quest) {
  quest = quest.quest;
  const height = quest.height;
  const width = quest.width;
  let flag = quest.paused;
  if (flag === undefined) {
    flag = false;
  }
  let withAnimation = quest.withAnimation;
  if (withAnimation === undefined) {
    let obj = quest(width[7]);
    withAnimation = obj.isIOS();
  }
  let callback;
  let React;
  obj1 = quest(width[8]);
  const items = [closure_8];
  const items1 = [quest];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp7 = useMemo(() => quest(width[9]).getQuestPrimaryReward(quest), items1);
  if (null != tmp7.name) {
    let name = tmp7.name;
  } else {
    name = tmp7.messages.name;
  }
  const items2 = [quest];
  const tmp6Result = useMemo(() => quest(width[10]).getQuestAsset(quest, quest(width[10]).QuestAssetType.REWARD, undefined, true), items2);
  callback = tmp6Result;
  const tmp9 = callback2();
  [tmp11, c4] = callback(React.useState("active" === currentState.currentState), 2);
  const items3 = [tmp6Result.isAnimated];
  const effect = React.useEffect(() => {
    if (closure_3.isAnimated) {
      closure_0 = closure_1_6.addEventListener("change", (event) => {
        callback("active" === event);
      });
      return () => {
        closure_0.remove();
      };
    }
  }, items3);
  const items4 = [tmp6Result, width, height];
  const memo = React.useMemo(() => {
    quest(width[10]);
    const obj = { assetUrl: closure_3.url, width, height };
    return obj.getScaledImageUrl(obj);
  }, items4);
  const items5 = [quest.accessibilityLabelPrefix, name];
  const found = items5.filter(Boolean);
  obj = { accessibilityLabel: found.join(", "), style: items6, children: null };
  items6 = [tmp9.container, { height, width }, quest.style];
  if (tmp6Result.isAnimated) {
    if (withAnimation) {
      obj = { style: null, source: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: null, resizeMode: "cover", paused: null, muted: true };
      obj[0] = tmp9.video;
      obj1 = { uri: null };
      obj1[0] = tmp6Result.url;
      obj[1] = obj1;
      obj[5] = memo;
      let tmp17 = !tmp11;
      if (tmp11) {
        tmp17 = flag;
      }
      if (!tmp17) {
        tmp17 = stateFromStores;
      }
      obj[7] = tmp17;
      let tmp14Result = jsx(tmp3(tmp4[11]).VideoComponent, { style: null, source: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: null, resizeMode: "cover", paused: null, muted: true });
    }
    obj[2] = tmp14Result;
    return <tmp15 {...obj} />;
  }
  tmp14Result = jsx(height(tmp4[12]), { source: { uri: memo }, style: tmp9.image });
  const tmp10 = callback(React.useState("active" === currentState.currentState), 2);
  tmp3 = quest;
};
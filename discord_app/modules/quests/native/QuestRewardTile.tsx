// discord_app/modules/quests/native/QuestRewardTile.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { useMemo } from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ AppState: closure_6, View: error } = get_ActivityIndicator);
let closure_10 = createCacheKey.createStyles(() => {
  let obj = { container: null, video: null, image: null };
  obj = { borderRadius: require("../../../../discord_common/js/packages/tokens/native.tsx").radii.sm, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
  obj[0] = obj;
  obj[1] = { overflow: "hidden", height: "100%", width: "100%" };
  obj[2] = { height: "100%", width: "100%" };
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default function QuestRewardTile(quest) {
  let c4;
  let tmp11;
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
  let obj1 = quest(width[8]);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
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
    if (_undefined.isAnimated) {
      let closure_0 = outer1_6.addEventListener("change", (arg0) => {
        callback("active" === arg0);
      });
      return () => {
        closure_0.remove();
      };
    }
  }, items3);
  const items4 = [tmp6Result, width, height];
  const memo = React.useMemo(() => {
    let obj = quest(width[10]);
    obj = { assetUrl: _undefined.url, width, height };
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
      let tmp14Result = tmp14(quest(tmp4[11]).VideoComponent, obj);
    }
    obj[2] = tmp14Result;
    return tmp14(tmp15, obj);
  }
  tmp14Result = tmp14(height(tmp4[12]), { source: { uri: memo }, style: tmp9.image });
};
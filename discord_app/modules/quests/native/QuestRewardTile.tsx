// === Module 12973: QuestRewardTile ===

// Module 12973 (QuestRewardTile)
import c from "c" /* 576 */;
import AssetUtils from "AssetUtils" /* 9184 */;
import QuestRewardUtils from "QuestRewardUtils" /* 9189 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 12974 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["quest", "accessibilityLabelPrefix"];
const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestRewardTile(arg0) {
  const cResult = c.c(18);
  if (cResult[0] !== arg0) {
    ({ quest, accessibilityLabelPrefix } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabelPrefix;
    cResult[2] = quest;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
    let tmp5 = quest;
    let tmp4 = accessibilityLabelPrefix;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const questPrimaryReward = QuestRewardUtils.getQuestPrimaryReward(tmp5);
    cResult[4] = tmp5;
    cResult[5] = questPrimaryReward;
    let tmp10 = questPrimaryReward;
    const tmpResult = QuestRewardUtils;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    if (null != tmp10.name) {
      let name = tmp10.name;
    } else {
      name = tmp10.messages.name;
    }
    cResult[6] = tmp10;
    cResult[7] = name;
  } else {
    if (cResult[8] !== tmp5) {
      const tmpResult2 = AssetUtils;
      const questAsset = tmpResult2.getQuestAsset(tmp5, AssetUtils.QuestAssetType.REWARD, undefined, true);
      cResult[8] = tmp5;
      cResult[9] = questAsset;
      let tmp15 = questAsset;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp4) {
      if (cResult[11] === tmp12) {
        let obj4 = cResult[12];
      }
      const joined = obj4.join(", ");
      let tmp22;
      if ("" !== joined) {
        tmp22 = joined;
      }
      if (cResult[13] === tmp6) {
        if (cResult[14] === tmp15.isAnimated) {
          if (cResult[15] === tmp15.url) {
            if (cResult[16] === tmp22) {
              let tmp23 = cResult[17];
            }
            return tmp23;
          }
        }
      }
      const obj2 = { assetUrl: null, isAnimatedAsset: null, accessibilityLabel: null };
      ({ url: obj5.assetUrl, isAnimated: obj5.isAnimatedAsset } = tmp15);
      obj2.accessibilityLabel = tmp22;
      const merged = Object.assign(tmp6);
      const tmp30 = jsx(QuestDockRewardTileDefault, { assetUrl: null, isAnimatedAsset: null, accessibilityLabel: null });
      cResult[13] = tmp6;
      cResult[14] = tmp15.isAnimated;
      cResult[15] = tmp15.url;
      cResult[16] = tmp22;
      cResult[17] = tmp30;
      tmp23 = tmp30;
    }
    const items = [tmp4, cResult[7]];
    const _Boolean = Boolean;
    const found = items.filter(Boolean);
    cResult[10] = tmp4;
    cResult[11] = cResult[7];
    cResult[12] = found;
    obj4 = found;
  }
}) : (function QuestRewardTile(quest) {
  quest = quest.quest;
  const merged = Object.assign(quest, Object.assign({ quest: 0, accessibilityLabelPrefix: 0 }));
  const items = [quest];
  const tmp3 = useMemo(() => QuestRewardUtils.getQuestPrimaryReward(quest), items);
  if (null != tmp3.name) {
    let name = tmp3.name;
  } else {
    name = tmp3.messages.name;
  }
  const items1 = [quest];
  const tmp2Result = useMemo(() => AssetUtils.getQuestAsset(quest, AssetUtils.QuestAssetType.REWARD, undefined, true), items1);
  const items2 = [quest.accessibilityLabelPrefix, name];
  const found = items2.filter(Boolean);
  const joined = found.join(", ");
  const obj = { assetUrl: tmp2Result.url, isAnimatedAsset: tmp2Result.isAnimated, accessibilityLabel: null };
  let tmp8;
  if ("" !== joined) {
    tmp8 = joined;
  }
  obj.accessibilityLabel = tmp8;
  const merged1 = Object.assign(merged);
  return jsx(QuestDockRewardTileDefault, { assetUrl: tmp2Result.url, isAnimatedAsset: tmp2Result.isAnimated, accessibilityLabel: null });
});
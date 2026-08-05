// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { useVideoQuestUIStore } from "_toPropertyKey";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { videoContentHeaderWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, videoContentHeading: null, subheader: null, textShadow: null };
createCacheKey = { flexDirection: "column", flexShrink: 1, gap: require("Themes").space.PX_4 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { opacity: 0.6 };
createCacheKey[3] = { margin: -15, padding: 15, textShadowColor: require("Themes").colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { margin: -15, padding: 15, textShadowColor: require("Themes").colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
let result = require("_toPropertyKey").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

export default function VideoQuestModalHeader(showCurrentVideoTime) {
  let closeButtonIconColor;
  let onClose;
  let style;
  showCurrentVideoTime = showCurrentVideoTime.showCurrentVideoTime;
  let tmp = undefined !== showCurrentVideoTime;
  ({ closeButtonIconColor, onClose, style } = showCurrentVideoTime);
  if (tmp) {
    tmp = showCurrentVideoTime;
  }
  const withTextShadow = showCurrentVideoTime.withTextShadow;
  let textShadow = undefined !== withTextShadow && withTextShadow;
  const tmp2 = createCacheKey();
  let obj = quest(14268);
  quest = obj.useVideoQuestModalContext().quest;
  let obj1 = quest(10374);
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const tmp6 = useVideoQuestUIStore((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      ({ progressSeconds: obj[0], targetSeconds: obj[1], progressSeconds: obj[2] } = questTaskDetails);
      tmp = obj;
    }
    const result = quest(outer1_2[8]).parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    const obj2 = quest(outer1_2[8]);
    return quest(outer1_2[8]).formatWatchTaskTime(result.minutes, result.seconds);
  }, quest(3898).shallow);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null == completedAt) {
    const videoQuestProgressRemainingAccessibilityLabel = tmp3(10501).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp8);
    const tmp3Result = tmp3(10501);
  }
  obj = { style: items, children: null };
  items = [tmp2.videoContentHeaderWrapper, style];
  obj = { style: tmp2.videoContentHeading, children: null };
  let textShadow2 = textShadow;
  if (textShadow) {
    textShadow2 = tmp2.textShadow;
  }
  obj1 = { variant: "heading-md/semibold", color: "text-overlay-light", style: textShadow2, children: null };
  const intl = tmp3(1236).intl;
  obj1[3] = intl.formatToPlainString(quest(1236).t.EQa7os, { questName: quest.config.messages.questName });
  const items1 = [closure_5(quest(4281).Text, obj1), ];
  const obj3 = { variant: "heading-sm/semibold", color: "text-overlay-light", accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel, style: null, children: null };
  const items2 = [tmp2.subheader, ];
  if (textShadow) {
    textShadow = tmp2.textShadow;
  }
  items2[1] = textShadow;
  obj3[3] = items2;
  let gamePublisher = tmp6;
  if (null != completedAt) {
    gamePublisher = tmp6;
    if (!tmp) {
      gamePublisher = quest.config.messages.gamePublisher;
    }
  }
  obj3[4] = gamePublisher;
  items1[1] = closure_5(quest(4281).Text, obj3);
  obj[1] = items1;
  const items3 = [closure_6(View, obj), closure_5(questTaskDetails(14291), { iconColor: closeButtonIconColor, onClose })];
  obj[1] = items3;
  return closure_6(View, obj);
};
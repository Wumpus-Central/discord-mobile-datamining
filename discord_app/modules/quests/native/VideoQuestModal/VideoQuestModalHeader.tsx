// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { useVideoQuestUIStore } from "../../VideoQuestUIStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { flexDirection: "column", flexShrink: 1, gap: ThemesDefault.space.PX_4 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { opacity: 0.6 };
createCacheKey[3] = { margin: -15, padding: 15, textShadowColor: ThemesDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

export default function VideoQuestModalHeader(showCurrentVideoTime) {
  showCurrentVideoTime = showCurrentVideoTime.showCurrentVideoTime;
  let tmp = undefined !== showCurrentVideoTime;
  ({ closeButtonIconColor, onClose, style } = showCurrentVideoTime);
  if (tmp) {
    tmp = showCurrentVideoTime;
  }
  const withTextShadow = showCurrentVideoTime.withTextShadow;
  let textShadow = undefined !== withTextShadow && withTextShadow;
  const tmp2 = callback();
  let obj = quest(14478);
  quest = obj.useVideoQuestModalContext().quest;
  obj1 = quest(10684);
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const tmp6 = useVideoQuestUIStore((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      ({ progressSeconds: obj[0], targetSeconds: obj[1], progressSeconds: obj[2] } = questTaskDetails);
      tmp = obj;
    }
    const time = quest(dependencyMap[8]).parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    const obj2 = quest(dependencyMap[8]);
    return quest(dependencyMap[8]).formatWatchTaskTime(time.minutes, time.seconds);
  }, quest(4006).shallow);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null == completedAt) {
    const videoQuestProgressRemainingAccessibilityLabel = tmp3(10704).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp8);
    const tmp3Result = tmp3(10704);
  }
  const items = [tmp2.videoContentHeaderWrapper, style];
  obj = { style: tmp2.videoContentHeading, children: null };
  let textShadow2 = textShadow;
  if (textShadow) {
    textShadow2 = tmp2.textShadow;
  }
  obj1 = { variant: "heading-md/semibold", color: "text-overlay-light", style: textShadow2, children: null };
  const intl = tmp3(1236).intl;
  obj1[3] = intl.formatToPlainString(quest(1236).t.EQa7os, { questName: quest.config.messages.questName });
  const items1 = [callback(quest(4734).Text, obj1), ];
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
  items1[1] = callback(quest(4734).Text, obj3);
  obj[1] = items1;
  const items3 = [callback2(View, obj), callback(questTaskDetails(14501), { iconColor: closeButtonIconColor, onClose })];
  obj[1] = items3;
  return callback2(View, obj);
};
// === Module 15153: VideoQuestModalHeader ===

// Module 15153 (VideoQuestModalHeader)
import nativeDefault from "native" /* 576 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const useVideoQuestUIStore = fn(7705).useVideoQuestUIStore;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { videoContentHeaderWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, videoContentHeading: null, subheader: null, textShadow: null };
createStyles = { flexDirection: "column", flexShrink: 1, gap: nativeDefault.space.PX_4 };
createStyles.videoContentHeading = createStyles;
createStyles.subheader = { opacity: 0.6 };
createStyles.textShadow = { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

export default function VideoQuestModalHeader(showCurrentVideoTime) {
  showCurrentVideoTime = showCurrentVideoTime.showCurrentVideoTime;
  let tmp = undefined !== showCurrentVideoTime;
  ({ closeButtonIconColor, onClose, style } = showCurrentVideoTime);
  if (tmp) {
    tmp = showCurrentVideoTime;
  }
  const withTextShadow = showCurrentVideoTime.withTextShadow;
  let textShadow = undefined !== withTextShadow && withTextShadow;
  const tmp2 = closure_7();
  let obj = quest(15126);
  quest = obj.useVideoQuestModalContext().quest;
  let obj1 = quest(11483);
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const tmp6 = useVideoQuestUIStore((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      ({ progressSeconds: obj.timestampSec, targetSeconds: obj.duration, progressSeconds: obj.maxTimestampSec } = questTaskDetails);
      tmp = obj;
    }
    const time = QuestTaskUtils.parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    return QuestTaskUtils.formatWatchTaskTime(time.minutes, time.seconds);
  }, quest(4184).shallow);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null == completedAt) {
    const videoQuestProgressRemainingAccessibilityLabel = tmp3(11512).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp8);
    const tmp3Result = tmp3(11512);
  }
  obj = { style: null, children: null };
  const items = [tmp2.videoContentHeaderWrapper, style];
  obj.style = items;
  obj = { style: tmp2.videoContentHeading, children: null };
  let textShadow2 = textShadow;
  if (textShadow) {
    textShadow2 = tmp2.textShadow;
  }
  obj1 = { variant: "heading-md/semibold", color: "text-overlay-light", style: textShadow2, children: null };
  const intl = tmp3(1114).intl;
  obj1.children = intl.formatToPlainString(quest(1114).t.EQa7os, { questName: quest.config.messages.questName });
  const items1 = [closure_5(quest(4556).Text, obj1), ];
  const obj3 = { variant: "heading-sm/semibold", color: "text-overlay-light", accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel, style: null, children: null };
  const items2 = [tmp2.subheader, ];
  if (textShadow) {
    textShadow = tmp2.textShadow;
  }
  items2[1] = textShadow;
  obj3.style = items2;
  let gamePublisher = tmp6;
  if (null != completedAt) {
    gamePublisher = tmp6;
    if (!tmp) {
      gamePublisher = quest.config.messages.gamePublisher;
    }
  }
  obj3.children = gamePublisher;
  items1[1] = closure_5(quest(4556).Text, obj3);
  obj.children = items1;
  const items3 = [closure_6(View, obj), closure_5(questTaskDetails(15148), { iconColor: closeButtonIconColor, onClose })];
  obj.children = items3;
  return closure_6(View, obj);
};
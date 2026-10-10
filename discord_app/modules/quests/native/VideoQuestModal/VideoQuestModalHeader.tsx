// === Module 15409: VideoQuestModalHeader ===

// Module 15409 (VideoQuestModalHeader)
import nativeDefault from "native" /* 587 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7412 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const useVideoQuestUIStore = fn(7392).useVideoQuestUIStore;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { videoContentHeaderWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, videoContentHeading: { flexDirection: "column", flexShrink: 1, gap: nativeDefault.space.PX_4 }, textShadow: null };
let obj3 = { flexDirection: "column", flexShrink: 1, gap: nativeDefault.space.PX_4 };
obj2.textShadow = { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VideoQuestModalHeader(arg0) {
  const cResult = quest(576).c(30);
  ({ closeButtonIconColor, onClose, style, showCurrentVideoTime, withTextShadow } = arg0);
  let textShadow = undefined !== withTextShadow && withTextShadow;
  const tmp5 = closure_7();
  let obj = quest(576);
  quest = quest(15382).useVideoQuestModalContext().quest;
  const tmpResult = quest(15382);
  const questTaskDetails = quest(9170).useQuestTaskDetails(quest);
  if (cResult[0] === quest.id) {
    if (cResult[1] === questTaskDetails) {
      let tmp7 = cResult[2];
    }
    const tmp9 = useVideoQuestUIStore(tmp7, tmp(4733).shallow);
    const userStatus = quest.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    let tmp13 = tmp12;
    if (null != completedAt) {
      tmp13 = !tmp4;
    }
    if (cResult[3] === null != completedAt) {
      if (cResult[4] === tmp14) {
        if (cResult[5] === questTaskDetails) {
          let tmp15 = cResult[6];
        }
        if (cResult[7] === style) {
          if (cResult[8] === tmp5.videoContentHeaderWrapper) {
            let tmp17 = cResult[9];
          }
          let textShadow2 = textShadow;
          if (textShadow) {
            textShadow2 = tmp5.textShadow;
          }
          if (cResult[10] !== quest.config.messages.questName) {
            const intl = tmp(1126).intl;
            let obj2 = { questName: quest.config.messages.questName };
            const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.EQa7os, obj2);
            cResult[10] = quest.config.messages.questName;
            cResult[11] = formatToPlainStringResult;
            let tmp18 = formatToPlainStringResult;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] === textShadow2) {
            if (cResult[13] === tmp18) {
              let tmp20 = cResult[14];
            }
            if (textShadow) {
              textShadow = tmp5.textShadow;
            }
            let gamePublisher = tmp9;
            if (tmp12) {
              gamePublisher = tmp9;
              if (!tmp4) {
                gamePublisher = quest.config.messages.gamePublisher;
              }
            }
            if (cResult[15] === gamePublisher) {
              if (cResult[16] === textShadow) {
                if (cResult[17] === tmp15) {
                  let tmp23 = cResult[18];
                }
                if (cResult[19] === tmp5.videoContentHeading) {
                  if (cResult[20] === tmp23) {
                    if (cResult[21] === tmp20) {
                      let tmp26 = cResult[22];
                    }
                    if (cResult[23] === closeButtonIconColor) {
                      if (cResult[24] === onClose) {
                        let tmp30 = cResult[25];
                      }
                      if (cResult[26] === tmp26) {
                        if (cResult[27] === tmp30) {
                          if (cResult[28] === tmp17) {
                            let tmp34 = cResult[29];
                          }
                          return tmp34;
                        }
                      }
                      const obj3 = { style: tmp17, children: null };
                      const items = [tmp26, tmp30];
                      obj3.children = items;
                      const tmp37 = closure_6(View, obj3);
                      cResult[26] = tmp26;
                      cResult[27] = tmp30;
                      cResult[28] = tmp17;
                      cResult[29] = tmp37;
                      tmp34 = tmp37;
                    }
                    const obj4 = { iconColor: closeButtonIconColor, onClose };
                    const tmp33 = closure_5(questTaskDetails(15404), obj4);
                    cResult[23] = closeButtonIconColor;
                    cResult[24] = onClose;
                    cResult[25] = tmp33;
                    tmp30 = tmp33;
                  }
                }
                const obj5 = { style: tmp5.videoContentHeading, children: null };
                const items1 = [tmp20, tmp23];
                obj5.children = items1;
                const tmp29 = closure_6(View, obj5);
                cResult[19] = tmp5.videoContentHeading;
                cResult[20] = tmp23;
                cResult[21] = tmp20;
                cResult[22] = tmp29;
                tmp26 = tmp29;
              }
            }
            const obj6 = { variant: "heading-sm/semibold", color: "text-overlay-light", accessibilityLabel: tmp15, style: textShadow, children: gamePublisher };
            const tmp25 = closure_5(tmp(5088).Text, obj6);
            cResult[15] = gamePublisher;
            cResult[16] = textShadow;
            cResult[17] = tmp15;
            cResult[18] = tmp25;
            tmp23 = tmp25;
          }
          const obj7 = { variant: "heading-md/semibold", color: "text-overlay-light", style: textShadow2, children: tmp18 };
          const tmp22 = closure_5(tmp(5088).Text, obj7);
          cResult[12] = textShadow2;
          cResult[13] = tmp18;
          cResult[14] = tmp22;
          tmp20 = tmp22;
        }
        const items2 = [tmp5.videoContentHeaderWrapper, style];
        cResult[7] = style;
        cResult[8] = tmp5.videoContentHeaderWrapper;
        cResult[9] = items2;
        tmp17 = items2;
      }
    }
    let videoQuestProgressRemainingAccessibilityLabel;
    if (!tmp13) {
      videoQuestProgressRemainingAccessibilityLabel = tmp(12964).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp12);
      const tmpResult4 = tmp(12964);
    }
    cResult[3] = null != completedAt;
    cResult[4] = !tmp13;
    cResult[5] = questTaskDetails;
    cResult[6] = videoQuestProgressRemainingAccessibilityLabel;
    tmp15 = videoQuestProgressRemainingAccessibilityLabel;
  }
  const fn = function u(arg0) {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      ({ progressSeconds: obj.timestampSec, targetSeconds: obj.duration, progressSeconds: obj.maxTimestampSec } = questTaskDetails);
      tmp = obj;
    }
    const time = QuestTaskUtils.parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    return QuestTaskUtils.formatWatchTaskTime(time.minutes, time.seconds);
  };
  cResult[0] = quest.id;
  cResult[1] = questTaskDetails;
  cResult[2] = fn;
  tmp7 = fn;
  const tmpResult3 = quest(9170);
}) : (function VideoQuestModalHeader(showCurrentVideoTime) {
  showCurrentVideoTime = showCurrentVideoTime.showCurrentVideoTime;
  let tmp = undefined !== showCurrentVideoTime;
  ({ closeButtonIconColor, onClose, style } = showCurrentVideoTime);
  if (tmp) {
    tmp = showCurrentVideoTime;
  }
  const withTextShadow = showCurrentVideoTime.withTextShadow;
  let textShadow = undefined !== withTextShadow && withTextShadow;
  const tmp2 = closure_7();
  quest = quest(15382).useVideoQuestModalContext().quest;
  let obj = quest(15382);
  const questTaskDetails = quest(9170).useQuestTaskDetails(quest);
  const tmp6 = useVideoQuestUIStore((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      ({ progressSeconds: obj.timestampSec, targetSeconds: obj.duration, progressSeconds: obj.maxTimestampSec } = questTaskDetails);
      tmp = obj;
    }
    const time = QuestTaskUtils.parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    return QuestTaskUtils.formatWatchTaskTime(time.minutes, time.seconds);
  }, quest(4733).shallow);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null == completedAt) {
    const videoQuestProgressRemainingAccessibilityLabel = tmp3(12964).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp8);
    const tmp3Result = tmp3(12964);
  }
  const obj3 = { style: null, children: null };
  const items = [tmp2.videoContentHeaderWrapper, style];
  obj3.style = items;
  const obj4 = { style: tmp2.videoContentHeading, children: null };
  let textShadow2 = textShadow;
  if (textShadow) {
    textShadow2 = tmp2.textShadow;
  }
  const obj5 = { variant: "heading-md/semibold", color: "text-overlay-light", style: textShadow2, children: null };
  const intl = tmp3(1126).intl;
  obj5.children = intl.formatToPlainString(quest(1126).t.EQa7os, { questName: quest.config.messages.questName });
  const items1 = [closure_5(quest(5088).Text, obj5), ];
  const obj7 = { variant: "heading-sm/semibold", color: "text-overlay-light", accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel, style: null, children: null };
  if (textShadow) {
    textShadow = tmp2.textShadow;
  }
  obj7.style = textShadow;
  let gamePublisher = tmp6;
  if (null != completedAt) {
    gamePublisher = tmp6;
    if (!tmp) {
      gamePublisher = quest.config.messages.gamePublisher;
    }
  }
  obj7.children = gamePublisher;
  items1[1] = closure_5(quest(5088).Text, obj7);
  obj4.children = items1;
  const items2 = [closure_6(View, obj4), closure_5(questTaskDetails(15404), { iconColor: closeButtonIconColor, onClose })];
  obj3.children = items2;
  return closure_6(View, obj3);
});
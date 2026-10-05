// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import VideoQuestUIStore from "../../VideoQuestUIStore.tsx";
import QuestTaskUtils from "../../utils/QuestTaskUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const useVideoQuestUIStore = VideoQuestUIStore.useVideoQuestUIStore;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  videoContentHeaderWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  videoContentHeading: obj2,
  textShadow: obj3,
};
obj2 = { flexDirection: "column", flexShrink: 1, gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = {
  margin: -15,
  padding: 15,
  textShadowColor: nativeDefault.colors.BLACK,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 15,
};
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closeButtonIconColor;
      let items;
      let items1;
      let onClose;
      let quest;
      let showCurrentVideoTime;
      let style;
      let withTextShadow;
      let tmp = quest;
      let obj = quest(576);
      const cResult = obj.c(30);
      ({ closeButtonIconColor, onClose, style, showCurrentVideoTime, withTextShadow } = arg0);
      let textShadow = undefined !== withTextShadow && withTextShadow;
      const tmp5 = closure_7();
      const tmpResult = tmp(14930);
      quest = tmpResult.useVideoQuestModalContext().quest;
      const tmpResult3 = tmp(10911);
      const questTaskDetails = tmpResult3.useQuestTaskDetails(quest);
      if (cResult[0] === quest.id) {
        let tmp7;
        if (cResult[1] === questTaskDetails) {
          tmp7 = cResult[2];
        }
        const tmp9 = useVideoQuestUIStore(tmp7, tmp(4492).shallow);
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        const tmp14 = !(null != completedAt && !(undefined !== showCurrentVideoTime && showCurrentVideoTime));
        if ((cResult[3] === null) != completedAt) {
          if (cResult[4] === tmp14) {
            let tmp15;
            if (cResult[5] === questTaskDetails) {
              tmp15 = cResult[6];
            }
            if (cResult[7] === style) {
              let tmp17;
              let tmp18;
              if (cResult[8] === tmp5.videoContentHeaderWrapper) {
                tmp17 = cResult[9];
              }
              let textShadow2 = textShadow;
              const videoContentHeading = tmp5.videoContentHeading;
              if (textShadow) {
                textShadow2 = tmp5.textShadow;
              }
              if (cResult[10] !== quest.config.messages.questName) {
                const intl = tmp(1126).intl;
                let obj2 = { questName: quest.config.messages.questName };
                const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.EQa7os, obj2);
                cResult[10] = quest.config.messages.questName;
                cResult[11] = formatToPlainStringResult;
                tmp18 = formatToPlainStringResult;
              } else {
                tmp18 = cResult[11];
              }
              if (cResult[12] === textShadow2) {
                let tmp20;
                if (cResult[13] === tmp18) {
                  tmp20 = cResult[14];
                }
                if (textShadow) {
                  textShadow = tmp5.textShadow;
                }
                let gamePublisher = tmp9;
                if (null != completedAt) {
                  gamePublisher = tmp9;
                  if (!(undefined !== showCurrentVideoTime && showCurrentVideoTime)) {
                    gamePublisher = quest.config.messages.gamePublisher;
                  }
                }
                if (cResult[15] === gamePublisher) {
                  if (cResult[16] === textShadow) {
                    let tmp23;
                    if (cResult[17] === tmp15) {
                      tmp23 = cResult[18];
                    }
                    if (cResult[19] === tmp5.videoContentHeading) {
                      if (cResult[20] === tmp23) {
                        let tmp26;
                        if (cResult[21] === tmp20) {
                          tmp26 = cResult[22];
                        }
                        if (cResult[23] === closeButtonIconColor) {
                          let tmp30;
                          if (cResult[24] === onClose) {
                            tmp30 = cResult[25];
                          }
                          if (cResult[26] === tmp26) {
                            if (cResult[27] === tmp30) {
                              let tmp34;
                              if (cResult[28] === tmp17) {
                                tmp34 = cResult[29];
                              }
                              return tmp34;
                            }
                          }
                          let obj3 = { style: tmp17, children: items };
                          items = [tmp26, tmp30];
                          const tmp37 = closure_6(View, obj3);
                          cResult[26] = tmp26;
                          cResult[27] = tmp30;
                          cResult[28] = tmp17;
                          cResult[29] = tmp37;
                          tmp34 = tmp37;
                        }
                        const obj4 = { iconColor: closeButtonIconColor, onClose };
                        const tmp33 = closure_5(questTaskDetails(14952), obj4);
                        cResult[23] = closeButtonIconColor;
                        cResult[24] = onClose;
                        cResult[25] = tmp33;
                        tmp30 = tmp33;
                      }
                    }
                    const obj5 = { style: videoContentHeading, children: items1 };
                    items1 = [tmp20, tmp23];
                    const tmp29 = closure_6(View, obj5);
                    cResult[19] = tmp5.videoContentHeading;
                    cResult[20] = tmp23;
                    cResult[21] = tmp20;
                    cResult[22] = tmp29;
                    tmp26 = tmp29;
                  }
                }
                const obj6 = {
                  variant: "heading-sm/semibold",
                  color: "text-overlay-light",
                  accessibilityLabel: tmp15,
                  style: textShadow,
                  children: gamePublisher,
                };
                const tmp25 = closure_5(tmp(4886).Text, obj6);
                cResult[15] = gamePublisher;
                cResult[16] = textShadow;
                cResult[17] = tmp15;
                cResult[18] = tmp25;
                tmp23 = tmp25;
              }
              const obj7 = {
                variant: "heading-md/semibold",
                color: "text-overlay-light",
                style: textShadow2,
                children: tmp18,
              };
              const tmp22 = closure_5(tmp(4886).Text, obj7);
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
        if (tmp14) {
          const tmpResult4 = tmp(10940);
          videoQuestProgressRemainingAccessibilityLabel = tmpResult4.getVideoQuestProgressRemainingAccessibilityLabel(
            questTaskDetails,
            tmp12,
          );
        }
        cResult[3] = null != completedAt;
        cResult[4] = tmp14;
        cResult[5] = questTaskDetails;
        cResult[6] = videoQuestProgressRemainingAccessibilityLabel;
        tmp15 = videoQuestProgressRemainingAccessibilityLabel;
      }
      const fn = function u(arg0) {
        let tmp = arg0.videoProgress[quest.id];
        if (tmp == null) {
          const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
          ({
            progressSeconds: obj.timestampSec,
            targetSeconds: obj.duration,
            progressSeconds: obj.maxTimestampSec,
          } = questTaskDetails);
          tmp = obj;
        }
        const obj2 = QuestTaskUtils;
        const time = obj2.parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
        const obj3 = QuestTaskUtils;
        return obj3.formatWatchTaskTime(time.minutes, time.seconds);
      };
      cResult[0] = quest.id;
      cResult[1] = questTaskDetails;
      cResult[2] = fn;
      tmp7 = fn;
    }
  : (showCurrentVideoTime) => {
      let closeButtonIconColor;
      let gamePublisher;
      let intl;
      let items;
      let items1;
      let items2;
      let obj6;
      let onClose;
      let quest;
      let style;
      let videoQuestProgressRemainingAccessibilityLabel;
      showCurrentVideoTime = showCurrentVideoTime.showCurrentVideoTime;
      let tmp = undefined !== showCurrentVideoTime;
      ({ closeButtonIconColor, onClose, style } = showCurrentVideoTime);
      if (tmp) {
        tmp = showCurrentVideoTime;
      }
      const withTextShadow = showCurrentVideoTime.withTextShadow;
      let textShadow = undefined !== withTextShadow && withTextShadow;
      const tmp2 = closure_7();
      let obj = quest(14930);
      quest = obj.useVideoQuestModalContext().quest;
      let obj2 = quest(10911);
      const questTaskDetails = obj2.useQuestTaskDetails(quest);
      const tmp6 = useVideoQuestUIStore((arg0) => {
        let tmp = arg0.videoProgress[quest.id];
        if (tmp == null) {
          const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
          ({
            progressSeconds: obj.timestampSec,
            targetSeconds: obj.duration,
            progressSeconds: obj.maxTimestampSec,
          } = questTaskDetails);
          tmp = obj;
        }
        const obj2 = QuestTaskUtils;
        const time = obj2.parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
        const obj3 = QuestTaskUtils;
        return obj3.formatWatchTaskTime(time.minutes, time.seconds);
      }, quest(4492).shallow);
      const userStatus = quest.userStatus;
      let completedAt;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      if (null == completedAt) {
        const tmp3Result = quest(10940);
        videoQuestProgressRemainingAccessibilityLabel = tmp3Result.getVideoQuestProgressRemainingAccessibilityLabel(
          questTaskDetails,
          tmp8,
        );
      }
      let obj3 = { style: items, children: items2 };
      items = [tmp2.videoContentHeaderWrapper, style];
      let textShadow2 = textShadow;
      const obj4 = { style: tmp2.videoContentHeading, children: items1 };
      const Text = tmp3(4886).Text;
      if (textShadow) {
        textShadow2 = tmp2.textShadow;
      }
      const obj5 = {
        variant: "heading-md/semibold",
        color: "text-overlay-light",
        style: textShadow2,
        children: intl.formatToPlainString(quest(1126).t.EQa7os, obj6),
      };
      intl = tmp3(1126).intl;
      obj6 = { questName: quest.config.messages.questName };
      items1 = [closure_5(Text, obj5)];
      const obj7 = {
        variant: "heading-sm/semibold",
        color: "text-overlay-light",
        accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel,
        style: textShadow,
        children: gamePublisher,
      };
      const Text2 = tmp3(4886).Text;
      if (textShadow) {
        textShadow = tmp2.textShadow;
      }
      gamePublisher = tmp6;
      if (null != completedAt) {
        gamePublisher = tmp6;
        if (!tmp) {
          gamePublisher = quest.config.messages.gamePublisher;
        }
      }
      items1[1] = closure_5(Text2, obj7);
      items2 = [
        closure_6(View, obj4),
        closure_5(questTaskDetails(14952), { iconColor: closeButtonIconColor, onClose }),
      ];
      return closure_6(View, obj3);
    };
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

export default tmp5;

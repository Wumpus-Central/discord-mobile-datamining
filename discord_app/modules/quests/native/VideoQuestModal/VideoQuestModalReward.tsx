// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestProgressIndicatorDefault from "../QuestProgressIndicator.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ questName: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = quest(576).c(22);
        ({ style, withQuestName, withRewardAvailableCopy, size, withRewardTileAnimation, onTextBlockLayout } = arg0);
        let str = "lg";
        if (undefined !== size) {
          str = size;
        }
        const obj = quest(576);
        quest = quest(14945).useVideoQuestModalContext().quest;
        const tmpResult = quest(14945);
        const questTaskDetails = quest(10924).useQuestTaskDetails(quest);
        if (cResult[0] !== quest.id) {
          const fn = function s() {
            const result = QuestUtils.openRewardDetailsBottomSheet({ questId: quest.id });
          };
          cResult[0] = quest.id;
          cResult[1] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[1];
        }
        const tmp8 = closure_6();
        if (cResult[2] === tmp7) {
          if (cResult[3] === quest) {
            if (cResult[4] === str) {
              if (cResult[5] === questTaskDetails.percentComplete) {
                if (cResult[6] === withRewardTileAnimation) {
                  let tmp9 = cResult[7];
                }
                if (cResult[8] === quest.config) {
                  if (cResult[9] === tmp8) {
                    if (cResult[10] === tmp4) {
                      let tmp11 = cResult[11];
                    }
                    if (cResult[12] !== tmp5) {
                      let tmp15 = tmp5;
                      if (tmp5) {
                        const obj2 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
                        const intl2 = tmp(1126).intl;
                        obj2.children = intl2.string(tmp(1126).t["1Wvve2"]);
                        tmp15 = closure_4(tmp(4892).Text, obj2);
                      }
                      cResult[12] = tmp5;
                      cResult[13] = tmp15;
                      let tmp14 = tmp15;
                    } else {
                      tmp14 = cResult[13];
                    }
                    if (cResult[14] === onTextBlockLayout) {
                      if (cResult[15] === tmp11) {
                        if (cResult[16] === tmp14) {
                          let tmp17 = cResult[17];
                        }
                        if (cResult[18] === style) {
                          if (cResult[19] === tmp9) {
                            if (cResult[20] === tmp17) {
                              let tmp21 = cResult[21];
                            }
                            return tmp21;
                          }
                        }
                        const obj3 = {
                          justify: "center",
                          align: "center",
                          spacing: nativeDefault.space.PX_24,
                          style,
                          children: null,
                        };
                        const items = [tmp9, tmp17];
                        obj3.children = items;
                        const tmp24 = closure_5(tmp(5600).Stack, obj3);
                        cResult[18] = style;
                        cResult[19] = tmp9;
                        cResult[20] = tmp17;
                        cResult[21] = tmp24;
                        tmp21 = tmp24;
                      }
                    }
                    const obj4 = {
                      align: "center",
                      spacing: nativeDefault.space.PX_4,
                      onLayout: onTextBlockLayout,
                      children: null,
                    };
                    const items1 = [tmp11, tmp14];
                    obj4.children = items1;
                    const tmp20 = closure_5(tmp(5600).Stack, obj4);
                    cResult[14] = onTextBlockLayout;
                    cResult[15] = tmp11;
                    cResult[16] = tmp14;
                    cResult[17] = tmp20;
                    tmp17 = tmp20;
                  }
                }
                let tmp12 = tmp4;
                if (tmp4) {
                  const obj5 = {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    style: tmp8.questName,
                    children: null,
                  };
                  const intl = tmp(1126).intl;
                  const obj6 = { questName: quest.config.messages.questName };
                  obj5.children = intl.formatToPlainString(tmp(1126).t.EAYZAr, obj6);
                  tmp12 = closure_4(tmp(4892).Text, obj5);
                }
                cResult[8] = quest.config;
                cResult[9] = tmp8;
                cResult[10] = tmp4;
                cResult[11] = tmp12;
                tmp11 = tmp12;
              }
            }
          }
        }
        const tmp10 = closure_4(QuestProgressIndicatorDefault, {
          hasConfetti: true,
          quest,
          size: str,
          progress: questTaskDetails.percentComplete,
          onPress: tmp7,
          withAnimation: withRewardTileAnimation,
        });
        cResult[2] = tmp7;
        cResult[3] = quest;
        cResult[4] = str;
        cResult[5] = questTaskDetails.percentComplete;
        cResult[6] = withRewardTileAnimation;
        cResult[7] = tmp10;
        tmp9 = tmp10;
        const obj7 = {
          hasConfetti: true,
          quest,
          size: str,
          progress: questTaskDetails.percentComplete,
          onPress: tmp7,
          withAnimation: withRewardTileAnimation,
        };
        const tmpResult2 = quest(10924);
      }
    : (style) => {
        const withQuestName = style.withQuestName;
        let tmp = undefined === withQuestName;
        if (!tmp) {
          tmp = withQuestName;
        }
        const withRewardAvailableCopy = style.withRewardAvailableCopy;
        let tmp9Result = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
        const size = style.size;
        let str = "lg";
        if (undefined !== size) {
          str = size;
        }
        ({ withRewardTileAnimation, onTextBlockLayout } = style);
        quest = quest(14945).useVideoQuestModalContext().quest;
        const obj = quest(14945);
        const items = [quest.id];
        const questTaskDetails = quest(10924).useQuestTaskDetails(quest);
        const callback = noop.useCallback(() => {
          const result = QuestUtils.openRewardDetailsBottomSheet({ questId: quest.id });
        }, items);
        const obj2 = quest(10924);
        const obj3 = {
          justify: "center",
          align: "center",
          spacing: nativeDefault.space.PX_24,
          style: style.style,
          children: null,
        };
        const items1 = [
          closure_4(QuestProgressIndicatorDefault, {
            hasConfetti: true,
            quest,
            size: str,
            progress: questTaskDetails.percentComplete,
            onPress: callback,
            withAnimation: withRewardTileAnimation,
          }),
        ];
        const obj5 = {
          align: "center",
          spacing: nativeDefault.space.PX_4,
          onLayout: onTextBlockLayout,
          children: null,
        };
        if (tmp) {
          const obj6 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp7.questName, children: null };
          const intl = tmp3(1126).intl;
          const obj7 = { questName: quest.config.messages.questName };
          obj6.children = intl.formatToPlainString(tmp3(1126).t.EAYZAr, obj7);
          tmp = closure_4(tmp3(4892).Text, obj6);
        }
        const items2 = [tmp];
        if (tmp9Result) {
          const obj8 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
          const intl2 = tmp3(1126).intl;
          obj8.children = intl2.string(tmp3(1126).t["1Wvve2"]);
          tmp9Result = closure_4(tmp3(4892).Text, obj8);
        }
        items2[1] = tmp9Result;
        obj5.children = items2;
        items1[1] = closure_5(quest(5600).Stack, obj5);
        obj3.children = items1;
        return closure_5(quest(5600).Stack, obj3);
      },
);

// === Module 10923: QuestRewardDetailsBottomSheet ===

// Module 10923 (QuestRewardDetailsBottomSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7205 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10018 */;
import QuestUtils from "QuestUtils" /* 10921 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10924 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 10963 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, quest, questId;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, rewardDetailsCopy: { flexShrink: 1 }, separator: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  let first;
  let obj = react2;
  const cResult = obj.c(3);
  questId = questId.questId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = QuestUtils;
      const result = obj.showQuestUnavailableAlert();
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = hooks_QuestHooks;
  const nonNullableQuest = tmpResult.useNonNullableQuest(questId, first);
  let tmp6 = null;
  if (null != nonNullableQuest) {
    let tmp7;
    if (cResult[1] !== nonNullableQuest) {
      let obj2 = { quest: nonNullableQuest };
      const tmp10 = metroRequire(closure_10, obj2);
      cResult[1] = nonNullableQuest;
      cResult[2] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[2];
    }
    tmp6 = tmp7;
  }
  return tmp6;
}) : ((questId) => {
  questId = questId.questId;
  const callback = react.useCallback(() => {
    const obj = QuestUtils;
    const result = obj.showQuestUnavailableAlert();
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, []);
  let obj = hooks_QuestHooks;
  const nonNullableQuest = obj.useNonNullableQuest(questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    let obj2 = { quest: nonNullableQuest };
    tmp3 = metroRequire(closure_10, obj2);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  let currentUser;
  let items1;
  let items2;
  let items4;
  let tmp12;
  let tmp13;
  let tmp40;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(28);
  quest = quest.quest;
  const tmp4 = closure_9();
  if (cResult[0] !== quest.config) {
    const tmpResult = QuestRewardUtils;
    const result = tmpResult.isCollectibleQuestRewardPremiumExtendable(quest.config);
    cResult[0] = quest.config;
    cResult[1] = result;
    tmp5 = result;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult4 = QuestRewardUtils;
  const type = tmpResult4.getQuestPrimaryReward(quest).type;
  if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
    let tmp10;
    if (cResult[2] !== tmp5) {
      const intl2 = intl3.intl;
      const string = intl2.string;
      const t = intl3.t;
      const stringResult = string(tmp5 ? t["66YyBJ"] : t.ABD2CN);
      cResult[2] = tmp5;
      cResult[3] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[3];
    }
    tmp9 = tmp10;
  } else {
    tmp9 = null;
    if (QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      let tmp7;
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult1 = intl.string(intl3.t.maMtqM);
        cResult[4] = stringResult1;
        tmp7 = stringResult1;
      } else {
        tmp7 = cResult[4];
      }
      tmp9 = tmp7;
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class S {
      constructor() {
        return closure_1_5.getCurrentUser();
      }
    }
    cResult[5] = items;
    cResult[6] = S;
    tmp13 = S;
    tmp12 = items;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult5 = get_initialized;
  const stateFromStores = tmpResult5.useStateFromStores(tmp12, tmp13);
  if (cResult[7] === stateFromStores) {
    let tmp16;
    let tmp18;
    let tmp23;
    let tmp26;
    if (cResult[8] === quest.config) {
      tmp16 = cResult[9];
    }
    if (cResult[10] !== quest) {
      size = { quest: null, height: 56, width: 56, withAnimation: true };
      class S {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      const tmp21 = metroRequire(QuestRewardTileDefault, size);
      cResult[10] = quest;
      cResult[11] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[11];
    }
    const _Symbol = Symbol;
    class S {
      constructor() {
        return closure_1_5.getCurrentUser();
      }
    }
    if (tmp22 === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "eyebrow", color: "text-subtle", children: obj8.string(intl3.t["jyYgZ+"]) };
      const Text = Text_Text.Text;
      class S {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      const tmp25 = metroRequire(Text, obj2);
      cResult[12] = tmp25;
      tmp23 = tmp25;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] !== tmp16) {
      class S {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      cResult[13] = tmp16;
      cResult[14] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[14];
    }
    if (cResult[15] === tmp4.rewardDetailsCopy) {
      let tmp29;
      if (cResult[16] === tmp26) {
        tmp29 = cResult[17];
      }
      if (cResult[18] === tmp18) {
        let tmp33;
        if (cResult[19] === tmp29) {
          tmp33 = cResult[20];
        }
        if (cResult[21] === tmp9) {
          let tmp38;
          if (cResult[22] === tmp4.separator) {
            tmp38 = cResult[23];
          }
          if (cResult[24] === tmp4.wrapper) {
            if (cResult[25] === tmp33) {
              let tmp44;
              if (cResult[26] === tmp38) {
                tmp44 = cResult[27];
              }
              return tmp44;
            }
          }
          class S {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          BottomSheet = Sheet_BottomSheet.BottomSheet;
          const obj4 = { direction: "vertical", spacing: nativeDefault.space.PX_16, style: tmp4.wrapper, children: items1 };
          const Stack3 = Stack_Stack.Stack;
          items1 = [tmp33, tmp38];
          tmp46[1] = metroImportDefault(Stack3, obj4);
          const tmp49 = metroRequire(BottomSheet, tmp46);
          cResult[24] = tmp4.wrapper;
          cResult[25] = tmp33;
          cResult[26] = tmp38;
          cResult[27] = tmp49;
          tmp44 = tmp49;
        }
        class S {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        if (tmp40) {
          const obj5 = { children: items2 };
          class S {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          const obj6 = { style: tmp4.separator };
          items2 = [metroRequire(View, obj6), ];
          const obj7 = { variant: "text-md/normal", color: "text-subtle", children: tmp9 };
          items2[1] = metroRequire(Text_Text.Text, obj7);
          tmp40 = metroImportDefault(metroImportAll, obj5);
        }
        cResult[21] = tmp9;
        cResult[22] = tmp4.separator;
        cResult[23] = tmp40;
        tmp38 = tmp40;
      }
      class S {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      const Stack2 = Stack_Stack.Stack;
      tmp35[2] = nativeDefault.space.PX_16;
      const items3 = [tmp18, tmp29];
      tmp35[3] = items3;
      const tmp37 = metroImportDefault(Stack2, tmp35);
      cResult[18] = tmp18;
      cResult[19] = tmp29;
      cResult[20] = tmp37;
      tmp33 = tmp37;
    }
    const obj9 = { direction: "vertical", spacing: nativeDefault.space.PX_4, style: tmp4.rewardDetailsCopy, children: items4 };
    const Stack = Stack_Stack.Stack;
    items4 = [tmp23, tmp26];
    const tmp32 = metroImportDefault(Stack, obj9);
    cResult[15] = tmp4.rewardDetailsCopy;
    cResult[16] = tmp26;
    cResult[17] = tmp32;
    tmp29 = tmp32;
  }
  const tmpResult6 = QuestRewardUtils;
  const defaultRewardName = tmpResult6.getDefaultRewardName(quest.config, stateFromStores);
  cResult[7] = stateFromStores;
  cResult[8] = quest.config;
  cResult[9] = defaultRewardName;
  tmp16 = defaultRewardName;
}) : ((quest) => {
  let currentUser;
  let intl;
  let items3;
  let items4;
  let items5;
  let items6;
  quest = quest.quest;
  const tmp = closure_9();
  const items = [quest.config];
  const memo = react.useMemo(() => {
    const obj = QuestRewardUtils;
    return obj.isCollectibleQuestRewardPremiumExtendable(quest.config);
  }, items);
  const items1 = [quest, memo];
  const memo1 = react.useMemo(() => {
    const obj = QuestRewardUtils;
    const type = obj.getQuestPrimaryReward(quest).type;
    if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = intl3.intl;
      const string = intl2.string;
      const t = intl3.t;
      return string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = intl3.intl;
      return intl.string(intl3.t.maMtqM);
    } else {
      return null;
    }
  }, items1);
  let obj = quest(504);
  const items2 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj2 = quest(10018);
  const defaultRewardName = obj2.getDefaultRewardName(quest.config, stateFromStores);
  BottomSheet = quest(6652).BottomSheet;
  const obj3 = { direction: "vertical", spacing: memo(587).space.PX_16, style: tmp.wrapper, children: items5 };
  const Stack = quest(5600).Stack;
  const obj4 = { align: "center", direction: "horizontal", spacing: memo(587).space.PX_16, children: items3 };
  const Stack2 = quest(5600).Stack;
  items3 = [closure_6(memo(10963), { quest, height: 56, width: 56, withAnimation: true }), ];
  const obj5 = { direction: "vertical", spacing: memo(587).space.PX_4, style: tmp.rewardDetailsCopy, children: items4 };
  const Stack3 = quest(5600).Stack;
  const obj6 = { variant: "eyebrow", color: "text-subtle", children: intl.string(quest(1126).t["jyYgZ+"]) };
  const Text = quest(4892).Text;
  intl = quest(1126).intl;
  items4 = [closure_6(Text, obj6), closure_6(quest(4892).Text, { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName })];
  items3[1] = closure_7(Stack3, obj5);
  items5 = [closure_7(Stack2, obj4), ];
  let tmp9Result = null != memo1;
  const tmp4 = quest;
  if (tmp9Result) {
    const obj7 = { children: items6 };
    const obj8 = { style: tmp.separator };
    items6 = [closure_6(View, obj8), ];
    const obj9 = { variant: "text-md/normal", color: "text-subtle", children: memo1 };
    items6[1] = closure_6(tmp4(4892).Text, obj9);
    tmp9Result = closure_7(closure_8, obj7);
  }
  items5[1] = tmp9Result;
  const obj10 = { startExpanded: true, children: closure_7(Stack, obj3) };
  return closure_6(BottomSheet, obj10);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default tmp4;
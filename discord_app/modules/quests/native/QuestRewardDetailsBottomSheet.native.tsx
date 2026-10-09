// discord_app/modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import QuestRewardTypes from "../../../../discord_common/js/shared/shared-constants/QuestRewardTypes.tsx";
import QuestUtils from "QuestUtils.native.tsx";
import hooks_QuestHooks from "../hooks/QuestHooks.tsx";
import QuestRewardUtils from "../utils/QuestRewardUtils.tsx";
import QuestRewardTileDefault from "QuestRewardTile.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { wrapper: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 }, rewardDetailsCopy: { flexShrink: 1 }, separator: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_9 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestRewardDetailsBottomSheet(quest) {
  const cResult = c.c(28);
  quest = quest.quest;
  const tmp4 = closure_9();
  if (cResult[0] !== quest.config) {
    const result = QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config);
    cResult[0] = quest.config;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = QuestRewardUtils;
  } else {
    tmp5 = cResult[1];
  }
  const type = QuestRewardUtils.getQuestPrimaryReward(quest).type;
  if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
    const intl2 = util.intl;
    const t = util.t;
    const stringResult = intl2.string(tmp5 ? t["66YyBJ"] : t.ABD2CN);
    cResult[2] = tmp5;
    cResult[3] = stringResult;
  } else {
    let tmp9 = null;
    if (QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const _Symbol3 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult1 = intl.string(util.t.maMtqM);
        cResult[4] = stringResult1;
        let tmp7 = stringResult1;
      } else {
        tmp7 = cResult[4];
      }
      tmp9 = tmp7;
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserStore];
      class C {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      cResult[5] = items;
      cResult[6] = C;
      let tmp15 = C;
      let tmp14 = items;
    } else {
      tmp14 = cResult[5];
      tmp15 = cResult[6];
    }
    const stateFromStores = initialize.useStateFromStores(tmp14, tmp15);
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === quest.config) {
        let tmp18 = cResult[9];
      }
      if (cResult[10] !== quest) {
        const size = { quest: null, height: 56, width: 56, withAnimation: true };
        class C {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        const tmp23 = timestampProducer(QuestRewardTileDefault, size);
        cResult[10] = quest;
        cResult[11] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[11];
      }
      const _Symbol2 = Symbol;
      class C {
        constructor() {
          return closure_1_5.getCurrentUser();
        }
      }
      if (tmp24 === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "eyebrow", color: "text-subtle", children: null };
        class C {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        obj2.children = obj8.string(util.t["jyYgZ+"]);
        const tmp27 = timestampProducer(Text_Text.Text, obj2);
        cResult[12] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] !== tmp18) {
        { variant: "heading-lg/semibold", color: "text-strong", children: null }.children = tmp18;
        class C {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[13] = tmp18;
        cResult[14] = tmp30;
        let tmp28 = tmp30;
        const obj3 = { variant: "heading-lg/semibold", color: "text-strong", children: null };
      } else {
        tmp28 = cResult[14];
      }
      if (cResult[15] === tmp4.rewardDetailsCopy) {
        if (cResult[16] === tmp28) {
          let tmp31 = cResult[17];
        }
        if (cResult[18] === tmp20) {
          if (cResult[19] === tmp31) {
            let tmp35 = cResult[20];
          }
          if (cResult[21] === tmp9) {
            if (cResult[22] === tmp4.separator) {
              let tmp40 = cResult[23];
            }
            if (cResult[24] === tmp4.wrapper) {
              if (cResult[25] === tmp35) {
                if (cResult[26] === tmp40) {
                  let tmp46 = cResult[27];
                }
                return tmp46;
              }
            }
            class C {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            const obj4 = { direction: "vertical", spacing: nativeDefault.space.PX_16, style: tmp4.wrapper, children: null };
            const items1 = [tmp35, tmp40];
            obj4.children = items1;
            tmp48[1] = React5(Stack_Stack.Stack, obj4);
            const tmp51 = timestampProducer(Sheet_BottomSheet.BottomSheet, tmp48);
            cResult[24] = tmp4.wrapper;
            cResult[25] = tmp35;
            cResult[26] = tmp40;
            cResult[27] = tmp51;
            tmp46 = tmp51;
          }
          class C {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          if (tmp42) {
            const obj5 = { children: null };
            class C {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            const obj6 = { style: tmp4.separator };
            const items2 = [timestampProducer(View, obj6), ];
            const obj7 = { variant: "text-md/normal", color: "text-subtle", children: tmp9 };
            items2[1] = timestampProducer(Text_Text.Text, obj7);
            obj5.children = items2;
            tmp42 = React5(closure_1_8, obj5);
          }
          cResult[21] = tmp9;
          cResult[22] = tmp4.separator;
          cResult[23] = tmp42;
          tmp40 = tmp42;
        }
        class C {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        tmp37[2] = nativeDefault.space.PX_16;
        const items3 = [tmp20, tmp31];
        tmp37[3] = items3;
        const tmp39 = React5(Stack_Stack.Stack, tmp37);
        cResult[18] = tmp20;
        cResult[19] = tmp31;
        cResult[20] = tmp39;
        tmp35 = tmp39;
      }
      const obj9 = { direction: "vertical", spacing: nativeDefault.space.PX_4, style: tmp4.rewardDetailsCopy, children: null };
      const items4 = [tmp25, tmp28];
      obj9.children = items4;
      const tmp34 = React5(Stack_Stack.Stack, obj9);
      cResult[15] = tmp4.rewardDetailsCopy;
      cResult[16] = tmp28;
      cResult[17] = tmp34;
      tmp31 = tmp34;
    }
    const tmpResult5 = initialize;
    const defaultRewardName = QuestRewardUtils.getDefaultRewardName(quest.config, stateFromStores);
    cResult[7] = stateFromStores;
    cResult[8] = quest.config;
    cResult[9] = defaultRewardName;
    tmp18 = defaultRewardName;
    const tmpResult6 = QuestRewardUtils;
  }
  const tmpResult4 = QuestRewardUtils;
}) : (function QuestRewardDetailsBottomSheet(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  const items = [quest.config];
  const memo = noop.useMemo(() => QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config), items);
  const items1 = [quest, memo];
  const memo1 = noop.useMemo(() => {
    const type = QuestRewardUtils.getQuestPrimaryReward(quest).type;
    if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = util.intl;
      const t = util.t;
      return intl2.string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = util.intl;
      return intl.string(util.t.maMtqM);
    } else {
      return null;
    }
  }, items1);
  const items2 = [UserStore];
  const stateFromStores = quest(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  let obj = quest(504);
  const tmp4 = quest;
  const defaultRewardName = quest(9162).getDefaultRewardName(quest.config, stateFromStores);
  const obj3 = { direction: "vertical", spacing: memo(587).space.PX_16, style: tmp.wrapper, children: null };
  const obj4 = { align: "center", direction: "horizontal", spacing: memo(587).space.PX_16, children: null };
  const items3 = [closure_6(memo(12925), { quest, height: 56, width: 56, withAnimation: true }), ];
  const obj5 = { direction: "vertical", spacing: memo(587).space.PX_4, style: tmp.rewardDetailsCopy, children: null };
  const obj6 = { variant: "eyebrow", color: "text-subtle", children: null };
  let intl = quest(1126).intl;
  obj6.children = intl.string(quest(1126).t["jyYgZ+"]);
  const items4 = [closure_6(quest(5087).Text, obj6), closure_6(quest(5087).Text, { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName })];
  obj5.children = items4;
  items3[1] = closure_7(quest(5374).Stack, obj5);
  obj4.children = items3;
  const items5 = [closure_7(quest(5374).Stack, obj4), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj7 = { children: null };
    const obj8 = { style: tmp.separator };
    const items6 = [closure_6(View, obj8), ];
    const obj9 = { variant: "text-md/normal", color: "text-subtle", children: memo1 };
    items6[1] = closure_6(tmp4(5087).Text, obj9);
    obj7.children = items6;
    tmp9Result = closure_7(closure_8, obj7);
  }
  const obj2 = quest(9162);
  items5[1] = tmp9Result;
  obj3.children = items5;
  return closure_6(quest(6836).BottomSheet, { startExpanded: true, children: closure_7(quest(5374).Stack, obj3) });
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestRewardDetailsBottomSheetConnected(questId) {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const result = QuestUtils.showQuestUnavailableAlert();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const nonNullableQuest = hooks_QuestHooks.useNonNullableQuest(questId.questId, first);
  if (null == nonNullableQuest) {
    return null;
  } else if (cResult[1] !== nonNullableQuest) {
    const obj2 = { quest: nonNullableQuest };
    const tmp9 = timestampProducer(closure_10, obj2);
    cResult[1] = nonNullableQuest;
    cResult[2] = tmp9;
  }
  const tmpResult = hooks_QuestHooks;
}) : (function QuestRewardDetailsBottomSheetConnected(questId) {
  const callback = noop.useCallback(() => {
    const result = QuestUtils.showQuestUnavailableAlert();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, []);
  const nonNullableQuest = hooks_QuestHooks.useNonNullableQuest(questId.questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    const obj2 = { quest: nonNullableQuest };
    tmp3 = timestampProducer(closure_10, obj2);
  }
  return tmp3;
});
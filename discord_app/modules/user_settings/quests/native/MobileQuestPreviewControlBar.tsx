// === Module 14992: MobileQuestPreviewControlBar ===

// Module 14992 (MobileQuestPreviewControlBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl5 from "intl" /* 1126 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6701 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7200 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c1, c4, config;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
class MobileQuestPreviewControlBar {
  constructor(questId) {
    let MobileSearchableSelect;
    let c3;
    let intl;
    let intl2;
    let intl3;
    let items10;
    let items11;
    let items12;
    let obj7;
    let tmp18;
    let tmp3;
    questId = questId.questId;
    const setQuestId = questId.setQuestId;
    let refreshQuest = questId.refreshQuest;
    _asyncToGenerator = undefined;
    let questsWithPreviewAccess;
    let callback1;
    let callback3;
    let tmp = closure_11();
    let tmp2 = questsWithPreviewAccess(callback1.useState(false), 2);
    [tmp3, c3] = tmp2;
    const tmp4 = questId;
    let obj = questId(refreshQuest[9]);
    questsWithPreviewAccess = obj.useQuestsWithPreviewAccess();
    let obj2 = questId(refreshQuest[10]);
    let items = [callback3];
    const items1 = [questId];
    const stateFromStores = obj2.useStateFromStores(items, () => {
      let fetchQuestPreviewError = null;
      if (null != questId) {
        fetchQuestPreviewError = QuestStore.getFetchQuestPreviewError(tmp);
      }
      return fetchQuestPreviewError;
    }, items1);
    let obj3 = questId(refreshQuest[10]);
    const items2 = [callback3];
    const items3 = [questId];
    let stateFromStores1 = obj3.useStateFromStores(items2, () => {
      const result = null != questId && QuestStore.isFetchingQuestPreview(tmp);
      return result;
    }, items3);
    const items4 = [questsWithPreviewAccess, questId];
    const items5 = [setQuestId];
    const memo = callback1.useMemo(() => {
      const mapped = questsWithPreviewAccess.map((config) => {
        config = config.config;
        let questName;
        if (config != null) {
          const messages = config.messages;
          if (messages != null) {
            questName = messages.questName;
          }
        }
        if (questName == null) {
          questName = config.id;
        }
        const obj = { label: "" + questName + " (" + config.id + ")", value: config.id };
        return obj;
      });
      const tmp2 = null == questId || mapped.some((value) => value.value === questId);
      if (!tmp2) {
        let obj = { label: questId, value: questId };
        mapped.unshift(obj);
      }
      return mapped;
    }, items4);
    const callback = callback1.useCallback((arg0) => {
      if (null != setQuestId) {
        tmp(arg0);
      }
    }, items5);
    const items6 = [questId, refreshQuest];
    callback1 = callback1.useCallback(_asyncToGenerator(async () => {
      let closure_0;
      let closure_2;
      let obj2;
      let v0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (null != questId) {
              v0(true);
              v0 = 1;
              c1 = 2;
              c4 = 1;
              const obj5 = { value: obj2.completeQuestPreview(tmp19, 1), done: false };
              obj2 = tmp(refreshQuest[11]);
              return obj5;
            }
          } else if (1 === tmp4) {
            v0 = 0;
            closure_128_3(false);
            throw refreshQuest;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_2();
            v0 = 0;
            closure_128_3(false);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp24) {
          refreshQuest = tmp24;
          if (0 === v0) {
            c4 = 3;
            throw tmp24;
          } else {
            c1 = 1;
          }
        }
      }
    }), items6);
    const items7 = [questId, refreshQuest];
    const callback2 = callback1.useCallback(_asyncToGenerator(async () => {
      let closure_0;
      let closure_2;
      let obj2;
      let v0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (null != questId) {
              v0(true);
              v0 = 1;
              c1 = 2;
              c4 = 1;
              const obj5 = { value: obj2.resetQuestPreviewStatus(tmp19), done: false };
              obj2 = tmp(refreshQuest[11]);
              return obj5;
            }
          } else if (1 === tmp4) {
            v0 = 0;
            closure_128_3(false);
            throw refreshQuest;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_2();
            v0 = 0;
            closure_128_3(false);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp24) {
          refreshQuest = tmp24;
          if (0 === v0) {
            c4 = 3;
            throw tmp24;
          } else {
            c1 = 1;
          }
        }
      }
    }), items7);
    const items8 = [questId, refreshQuest];
    callback3 = callback1.useCallback(_asyncToGenerator(async () => {
      let closure_0;
      let closure_2;
      let obj2;
      let v0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (null != questId) {
              v0(true);
              v0 = 1;
              const _Math = Math;
              const random = Math.random();
              c1 = 2;
              c4 = 1;
              const obj5 = { value: obj2.completeQuestPreview(tmp19, random), done: false };
              obj2 = tmp(refreshQuest[11]);
              return obj5;
            }
          } else if (1 === tmp4) {
            v0 = 0;
            closure_128_3(false);
            throw refreshQuest;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_2();
            v0 = 0;
            closure_128_3(false);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp25) {
          refreshQuest = tmp25;
          if (0 === v0) {
            c4 = 3;
            throw tmp25;
          } else {
            c1 = 1;
          }
        }
      }
    }), items8);
    const items9 = [questId, callback1, callback2, callback3];
    let obj4 = { style: tmp.container, children: items10 };
    const callback4 = callback1.useCallback(() => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      const tmp = Sheet_showSimpleActionSheet;
      let obj = { key: "quest-preview-menu", options: items, hasIcons: false };
      const showSimpleActionSheet = tmp.showSimpleActionSheet;
      const obj2 = { label: intl.string(intl5.t.jQEfRT), onPress: callback1 };
      intl = intl5.intl;
      items = [obj2, , , ];
      const obj3 = { label: intl2.string(intl5.t.taqkwK), onPress: callback2 };
      intl2 = intl5.intl;
      items[1] = obj3;
      const obj4 = { label: intl3.string(intl5.t.cKSLr4), onPress: callback3 };
      intl3 = intl5.intl;
      items[2] = obj4;
      const obj5 = {
        label: intl4.string(intl5.t.rNGQfD),
        onPress() {
          if (null != closure_1_0) {
            const obj = questId(refreshQuest[14]);
            obj.copy(AppRoutes.QUEST_PREVIEW_TOOL_2(tmp));
          }
        }
      };
      intl4 = intl5.intl;
      items[3] = obj5;
      const result = showSimpleActionSheet(obj);
    }, items9);
    items10 = [closure_9(setQuestId(refreshQuest[15]), {}), , ];
    let obj5 = { style: tmp.questInputContainer, children: items11 };
    const obj6 = { style: tmp.searchField, children: closure_9(MobileSearchableSelect, obj7) };
    obj7 = { options: memo, value: questId, onChange: callback, placeholder: intl.string(questId(refreshQuest[13]).t.Zw8jxn), allowCustomValue: true, isDisabled: stateFromStores1 || tmp3 };
    MobileSearchableSelect = questId(refreshQuest[16]).MobileSearchableSelect;
    intl = questId(refreshQuest[13]).intl;
    items11 = [closure_9(tmp16, obj6), ];
    const obj8 = { style: tmp.iconsColumn, children: items12 };
    const obj9 = { icon: closure_9(tmp4(refreshQuest[18]).RefreshIcon, {}), accessibilityLabel: intl2.string(tmp4(refreshQuest[13]).t.wzzjk9), onPress: refreshQuest, disabled: tmp18, loading: stateFromStores1, size: "sm", variant: "secondary" };
    const IconButton = tmp4(tmp5[17]).IconButton;
    intl2 = tmp4(tmp5[13]).intl;
    tmp18 = stateFromStores1;
    if (!tmp18) {
      const tmp19 = null;
      tmp18 = null == questId;
    }
    items12 = [closure_9(IconButton, obj9), ];
    let tmp17Result = null != questId;
    if (tmp17Result) {
      const obj10 = { icon: closure_9(tmp4(refreshQuest[19]).MoreVerticalIcon, {}), size: "sm", variant: "secondary", accessibilityLabel: intl3.string(tmp4(refreshQuest[13]).t["+1H47t"]), disabled: stateFromStores1, onPress: callback4 };
      const IconButton2 = tmp4(tmp5[17]).IconButton;
      intl3 = tmp4(tmp5[13]).intl;
      if (!stateFromStores1) {
        stateFromStores1 = tmp3;
      }
      tmp17Result = closure_9(IconButton2, obj10);
    }
    items12[1] = tmp17Result;
    items11[1] = closure_10(callback2, obj8);
    items10[1] = closure_10(callback2, obj5);
    let tmp17Result2 = null != stateFromStores;
    if (tmp17Result2) {
      const obj11 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.errorText, children: stateFromStores.message };
      tmp17Result2 = closure_9(tmp4(tmp5[20]).Text, obj11);
    }
    items10[2] = tmp17Result2;
    return closure_10(callback2, obj4);
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
const AppRoutes = Constants.AppRoutes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { overflow: "visible", zIndex: 1 }, questInputContainer: obj2, searchField: { flex: 1, zIndex: 3, overflow: "visible" }, iconsColumn: obj3, errorText: obj4 };
obj2 = { flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: nativeDefault.space.PX_8, zIndex: 2, overflow: "visible" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_4 };
obj4 = { marginTop: nativeDefault.space.PX_4, zIndex: 1 };
const unpackModuleId = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewControlBar.tsx");

export default MobileQuestPreviewControlBar;
export { MobileQuestPreviewControlBar };
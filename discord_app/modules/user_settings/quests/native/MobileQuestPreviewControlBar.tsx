// === Module 14594: MobileQuestPreviewControlBar ===

// Module 14594 (MobileQuestPreviewControlBar)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "initializeState" /* 7491 */;
import { AppRoutes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
class MobileQuestPreviewControlBar {
  constructor(arg0) {
    questId = global.questId;
    setQuestId = global.setQuestId;
    refreshQuest = global.refreshQuest;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    tmp = closure_11();
    tmp2 = closure_4(closure_5.useState(false), 2);
    [tmp3, closure_3] = tmp2;
    tmp4 = questId;
    tmp5 = refreshQuest;
    obj = require("useQuests");
    questsWithPreviewAccess = obj.useQuestsWithPreviewAccess();
    closure_4 = questsWithPreviewAccess;
    obj2 = require("initialize");
    items = [];
    items[0] = closure_7;
    items1 = [];
    items1[0] = questId;
    stateFromStores = obj2.useStateFromStores(items, () => {
      let fetchQuestPreviewError = null;
      if (null != questId) {
        fetchQuestPreviewError = callback3.getFetchQuestPreviewError(tmp);
      }
      return fetchQuestPreviewError;
    }, items1);
    obj3 = require("initialize");
    items2 = [];
    items2[0] = closure_7;
    items3 = [];
    items3[0] = questId;
    stateFromStores1 = obj3.useStateFromStores(items2, () => {
      let result = null != questId;
      if (result) {
        result = callback3.isFetchingQuestPreview(tmp);
      }
      return result;
    }, items3);
    items4 = [, ];
    items4[0] = questsWithPreviewAccess;
    items4[1] = questId;
    items5 = [];
    items5[0] = setQuestId;
    memo = closure_5.useMemo(() => {
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
        return { label: "" + questName + " (" + config.id + ")", value: config.id };
      });
      if (!tmp2) {
        const obj = { label: null, value: null };
        obj[0] = tmp;
        obj[1] = tmp;
        mapped.unshift(obj);
      }
      return mapped;
    }, items4);
    callback = closure_5.useCallback((arg0) => {
      if (null != setQuestId) {
        tmp(arg0);
      }
    }, items5);
    items6 = [, ];
    items6[0] = questId;
    items6[1] = refreshQuest;
    callback1 = closure_5.useCallback(closure_3(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              if (null != closure_1_0) {
                v0(true);
                v0 = 1;
                obj1 = closure_1_0(closure_1_2[11]);
                c1 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.completeQuestPreview(tmp22, 1);
                return obj1;
              } else {
                c4 = 3;
              }
            }
          } else if (1 === tmp7) {
            v0 = 0;
            v0(false);
            throw callback;
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback();
            v0 = 0;
            v0(false);
          }
          v0 = 0;
          v0(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp27) {
          callback = tmp27;
          if (tmp4 === v0) {
            c4 = tmp2;
            throw tmp27;
          } else {
            c1 = tmp;
          }
        }
      }
    }), items6);
    closure_5 = callback1;
    items7 = [, ];
    items7[0] = questId;
    items7[1] = refreshQuest;
    callback2 = closure_5.useCallback(closure_3(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              if (null != closure_1_0) {
                v0(true);
                v0 = 1;
                obj1 = closure_1_0(closure_1_2[11]);
                c1 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.resetQuestPreviewStatus(tmp22);
                return obj1;
              } else {
                c4 = 3;
              }
            }
          } else if (1 === tmp7) {
            v0 = 0;
            v0(false);
            throw callback;
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback();
            v0 = 0;
            v0(false);
          }
          v0 = 0;
          v0(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp27) {
          callback = tmp27;
          if (tmp4 === v0) {
            c4 = tmp2;
            throw tmp27;
          } else {
            c1 = tmp;
          }
        }
      }
    }), items7);
    closure_6 = callback2;
    items8 = [, ];
    items8[0] = questId;
    items8[1] = refreshQuest;
    callback3 = closure_5.useCallback(closure_3(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              if (null != closure_1_0) {
                v0(true);
                v0 = 1;
                const _Math = Math;
                const random = Math.random();
                obj1 = closure_1_0(closure_1_2[11]);
                c1 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.completeQuestPreview(tmp22, random);
                return obj1;
              } else {
                c4 = 3;
              }
            }
          } else if (1 === tmp7) {
            v0 = 0;
            v0(false);
            throw callback;
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback();
            v0 = 0;
            v0(false);
          }
          v0 = 0;
          v0(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp28) {
          callback = tmp28;
          if (tmp4 === v0) {
            c4 = tmp2;
            throw tmp28;
          } else {
            c1 = tmp;
          }
        }
      }
    }), items8);
    closure_7 = callback3;
    items9 = [, , , ];
    items9[0] = questId;
    items9[1] = callback1;
    items9[2] = callback2;
    items9[3] = callback3;
    tmp15 = jsxs;
    tmp16 = closure_6;
    obj = { style: tmp.container, children: null };
    tmp17 = jsx;
    callback4 = closure_5.useCallback(() => {
      let obj = questId(refreshQuest[12]);
      obj = { key: "quest-preview-menu", options: null, hasIcons: false };
      obj = { label: null, onPress: null };
      const intl = questId(refreshQuest[13]).intl;
      obj[0] = intl.string(questId(refreshQuest[13]).t.jQEfRT);
      obj[1] = callback1;
      const items = [obj, , , ];
      obj1 = { label: null, onPress: null };
      const intl2 = questId(refreshQuest[13]).intl;
      obj1[0] = intl2.string(questId(refreshQuest[13]).t.taqkwK);
      obj1[1] = callback2;
      items[1] = obj1;
      const obj2 = { label: null, onPress: null };
      const intl3 = questId(refreshQuest[13]).intl;
      obj2[0] = intl3.string(questId(refreshQuest[13]).t.cKSLr4);
      obj2[1] = callback3;
      items[2] = obj2;
      const obj3 = { label: null, onPress: null };
      const intl4 = questId(refreshQuest[13]).intl;
      obj3[0] = intl4.string(questId(refreshQuest[13]).t.rNGQfD);
      obj3[1] = function onPress() {
        if (null != closure_0) {
          closure_1_0(closure_1_2[14]).copy(closure_1_8.QUEST_PREVIEW_TOOL_2(tmp));
          const obj = closure_1_0(closure_1_2[14]);
        }
      };
      items[3] = obj3;
      obj[1] = items;
      const result = obj.showSimpleActionSheet(obj);
    }, items9);
    items10 = [, , ];
    items10[0] = jsx(require("QuestThemePicker"), {});
    obj1 = { style: tmp.questInputContainer, children: null };
    obj2 = { style: tmp.searchField, children: null };
    obj3 = { options: memo, value: questId, onChange: callback, placeholder: null, allowCustomValue: true, isDisabled: null };
    intl = require("getSystemLocale").intl;
    obj3[3] = intl.string(require("getSystemLocale").t.Zw8jxn);
    tmp18 = stateFromStores1;
    if (!stateFromStores1) {
      tmp18 = tmp3;
    }
    obj3[5] = tmp18;
    obj2[1] = tmp17(require("MobileSearchableSelect").MobileSearchableSelect, obj3);
    items11 = [, ];
    items11[0] = tmp17(tmp16, obj2);
    obj4 = { style: tmp.iconsColumn, children: null };
    obj5 = { icon: tmp17(require("RefreshIcon").RefreshIcon, {}), accessibilityLabel: null, onPress: null, disabled: null, loading: null, size: "sm", variant: "secondary" };
    intl2 = require("getSystemLocale").intl;
    obj5[1] = intl2.string(require("getSystemLocale").t.wzzjk9);
    obj5[2] = refreshQuest;
    tmp19 = stateFromStores1;
    if (!stateFromStores1) {
      tmp20 = null;
      tmp19 = null == questId;
    }
    obj5[3] = tmp19;
    obj5[4] = stateFromStores1;
    items12 = [, ];
    items12[0] = tmp17(require("IconButton").IconButton, obj5);
    tmp17Result = null != questId;
    if (tmp17Result) {
      obj6 = { icon: null, size: "sm", variant: "secondary", accessibilityLabel: null, disabled: null, onPress: null };
      obj6[0] = tmp17(require("MoreVerticalIcon").MoreVerticalIcon, {});
      intl3 = require("getSystemLocale").intl;
      obj6[3] = intl3.string(require("getSystemLocale").t["+1H47t"]);
      if (!stateFromStores1) {
        stateFromStores1 = tmp3;
      }
      obj6[4] = stateFromStores1;
      obj6[5] = callback4;
      tmp17Result = tmp17(require("IconButton").IconButton, obj6);
    }
    items12[1] = tmp17Result;
    obj4[1] = items12;
    items11[1] = tmp15(tmp16, obj4);
    obj1[1] = items11;
    items10[1] = tmp15(tmp16, obj1);
    tmp17Result1 = null != stateFromStores;
    if (tmp17Result1) {
      obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", style: null, children: null };
      obj7[2] = tmp.errorText;
      obj7[3] = stateFromStores.message;
      tmp17Result1 = tmp17(require("Text").Text, obj7);
    }
    items10[2] = tmp17Result1;
    obj[1] = items10;
    return tmp15(tmp16, obj);
  }
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: { overflow: "visible", zIndex: 1 }, questInputContainer: null, searchField: null, iconsColumn: null, errorText: null };
createCacheKey = { flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: ThemesDefault.space.PX_8, zIndex: 2, overflow: "visible" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1, zIndex: 3, overflow: "visible" };
createCacheKey[3] = { flexDirection: "row", gap: ThemesDefault.space.PX_8, paddingTop: ThemesDefault.space.PX_4 };
let obj1 = { flexDirection: "row", gap: ThemesDefault.space.PX_8, paddingTop: ThemesDefault.space.PX_4 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_4, zIndex: 1 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginTop: ThemesDefault.space.PX_4, zIndex: 1 };
let result = require("set").fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewControlBar.tsx");

export default MobileQuestPreviewControlBar;
export { MobileQuestPreviewControlBar };
// discord_app/modules/user_settings/quests/native/SettingsQuestPreviewScreen.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import QuestActionCreators from "../../../quests/QuestActionCreators.tsx";
import QuestCardPreview from "QuestCardPreview.tsx";
import QuestEmbedPreview from "QuestEmbedPreview.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import QuestStore from "../../../quests/QuestStore.tsx";
import ThemeStore from "../../ThemeStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  controlBarContainer: obj3,
  segmentedControlContainer: { paddingHorizontal: PX_16 },
  pagesContainer: { flex: 1, width: "100%" },
  activityIndicator: obj4,
  allSectionsContainer: obj5,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: PX_16, paddingTop: PX_16 / 2, paddingBottom: PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_32 };
obj5 = { marginBottom: nativeDefault.space.PX_80 };
let closure_13 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_2;
      let first1;
      let params;
      let stateFromStores;
      let stateFromStores1;
      let theme;
      let tmp11;
      let tmp12;
      let tmp14;
      let tmp15;
      const tmp = params;
      let tmp2 = dependencyMap;
      let obj = params(576);
      const cResult = obj.c(88);
      const obj2 = params(1491);
      params = obj2.useRoute().params;
      closure_13();
      let questId;
      const useState = stateFromStores1.useState;
      if (params != null) {
        questId = params.questId;
      }
      const tmp7 = stateFromStores(useState(questId), 2);
      questId = tmp7[0];
      dependencyMap = tmp7[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first1 = items;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] !== questId) {
        const fn = function v() {
          let quest;
          if (null != first) {
            quest = QuestStore.getQuest(tmp);
          }
          return quest;
        };
        const items1 = [questId];
        cResult[1] = questId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp12 = items1;
        tmp11 = fn;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(first1, tmp11, tmp12);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ThemeStore];
        class A {
          constructor() {
            return theme.theme;
          }
        }
        cResult[4] = items2;
        cResult[5] = A;
        tmp15 = A;
        tmp14 = items2;
      } else {
        tmp14 = cResult[4];
        tmp15 = cResult[5];
      }
      const tmpResult2 = tmp(504);
      stateFromStores1 = tmpResult2.useStateFromStores(tmp14, tmp15);
      if (cResult[6] !== stateFromStores) {
        class F {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const obj = { quest: tmp };
              tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
            }
            return tmp2;
          }
        }
        cResult[6] = stateFromStores;
        class A {
          constructor() {
            return theme.theme;
          }
        }
        cResult[7] = F;
      } else {
        class F {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const obj = { quest: tmp };
              tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
            }
            return tmp2;
          }
        }
      }
      if (cResult[8] === stateFromStores1) {
        class F {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const obj = { quest: tmp };
              tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
            }
            return tmp2;
          }
        }
        if (stateFromStores != null) {
          class F {
            constructor() {
              let tmp2 = null;
              if (null != stateFromStores) {
                const obj = { quest: tmp };
                tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
              }
              return tmp2;
            }
          }
          if (tmp20 != null) {
            class F {
              constructor() {
                let tmp2 = null;
                if (null != stateFromStores) {
                  const obj = { quest: tmp };
                  tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
                }
                return tmp2;
              }
            }
          }
        }
        class A {
          constructor() {
            return theme.theme;
          }
        }
      }
      cResult[8] = stateFromStores1;
      if (stateFromStores != null) {
        class F {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const obj = { quest: tmp };
              tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
            }
            return tmp2;
          }
        }
        if (tmp22 != null) {
          class F {
            constructor() {
              let tmp2 = null;
              if (null != stateFromStores) {
                const obj = { quest: tmp };
                tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
              }
              return tmp2;
            }
          }
        }
      }
      cResult[9] = undefined;
      if (stateFromStores != null) {
        class F {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const obj = { quest: tmp };
              tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
            }
            return tmp2;
          }
        }
        if (tmp24 != null) {
          class F {
            constructor() {
              let tmp2 = null;
              if (null != stateFromStores) {
                const obj = { quest: tmp };
                tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
              }
              return tmp2;
            }
          }
        }
      }
      class T {
        constructor() {
          if (null == questId) {
            return null;
          } else {
            let completedAt;
            if (stateFromStores != null) {
              const userStatus = stateFromStores.userStatus;
              if (userStatus != null) {
                completedAt = userStatus.completedAt;
              }
            }
            let progress;
            if (stateFromStores != null) {
              const userStatus2 = stateFromStores.userStatus;
              if (userStatus2 != null) {
                progress = userStatus2.progress;
              }
            }
            const _HermesInternal = HermesInternal;
            const combined = "" + questId + "-" + stateFromStores1 + "-" + completedAt + "-" + progress;
            const obj = { questId };
            return authStore(QuestEmbedPreview.QuestEmbedPreview, obj, combined);
          }
        }
      }
      cResult[10] = undefined;
      cResult[11] = questId;
      cResult[12] = T;
    }
  : () => {
      let callback2;
      let closure_10;
      let closure_3;
      let first1;
      let items15;
      let items16;
      let memo;
      let obj11;
      let obj4;
      let obj9;
      let params;
      let questId;
      let stateFromStores;
      let tmp18;
      let tmp21;
      let tmp8;
      const tmp = params;
      let tmp2 = questId;
      let obj = params(questId[10]);
      params = obj.useRoute().params;
      let tmp3 = closure_13();
      let closure_1 = tmp3;
      let obj2 = stateFromStores;
      questId = undefined;
      const useState = stateFromStores.useState;
      if (params != null) {
        questId = params.questId;
      }
      [questId, tmp8] = useState(questId);
      _slicedToArray = tmp8;
      let items = [callback2];
      let items1 = [questId];
      const tmpResult = tmp(tmp2[11]);
      stateFromStores = tmpResult.useStateFromStores(
        items,
        () => {
          let quest;
          if (null != first) {
            quest = QuestStore.getQuest(tmp);
          }
          return quest;
        },
        items1,
      );
      const items2 = [memo];
      const tmpResult5 = tmp(tmp2[11]);
      const stateFromStores1 = tmpResult5.useStateFromStores(items2, () => memo.theme);
      const items3 = [stateFromStores];
      const callback = obj2.useCallback(() => {
        let tmp2 = null;
        if (null != stateFromStores) {
          const obj = { quest: tmp };
          tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
        }
        return tmp2;
      }, items3);
      const items4 = [questId, stateFromStores1];
      let userStatus;
      const useCallback = obj2.useCallback;
      if (stateFromStores != null) {
        userStatus = stateFromStores.userStatus;
      }
      items4[2] = userStatus;
      const callback1 = useCallback(() => {
        if (null == first) {
          return null;
        } else {
          let completedAt;
          if (stateFromStores != null) {
            const userStatus = stateFromStores.userStatus;
            if (userStatus != null) {
              completedAt = userStatus.completedAt;
            }
          }
          let progress;
          if (stateFromStores != null) {
            const userStatus2 = stateFromStores.userStatus;
            if (userStatus2 != null) {
              progress = userStatus2.progress;
            }
          }
          const _HermesInternal = HermesInternal;
          const combined = "" + first + "-" + stateFromStores1 + "-" + completedAt + "-" + progress;
          const obj = { questId: first };
          return authStore(QuestEmbedPreview.QuestEmbedPreview, obj, combined);
        }
      }, items4);
      callback2 = obj2.useCallback(() => null, []);
      const items5 = [stateFromStores, questId, callback, callback1, callback2, tmp3.allSectionsContainer];
      memo = obj2.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let items;
        let tmp3;
        const obj = { id: "all", label: intl.string(intl5.t.Y9DnPa), page: tmp3 };
        intl = intl5.intl;
        tmp3 = null;
        if (null != stateFromStores) {
          tmp3 = null;
          if (null != first) {
            const obj2 = { style: closure_1.allSectionsContainer, children: items };
            items = [callback(), callback1()];
            tmp3 = unpackModuleId(hasOwnProperty, obj2);
          }
        }
        const items1 = [obj, , ,];
        const obj3 = { id: "bar", label: intl2.string(intl5.t.uL4oBf), page: callback2() };
        intl2 = intl5.intl;
        items1[1] = obj3;
        const obj4 = { id: "card", label: intl3.string(intl5.t.MAvIf1), page: callback() };
        intl3 = intl5.intl;
        items1[2] = obj4;
        const obj5 = { id: "embed", label: intl4.string(intl5.t.AswoU2), page: callback1() };
        intl4 = intl5.intl;
        items1[3] = obj5;
        return items1;
      }, items5);
      [tmp18, closure_10] = obj2.useState(0);
      _slicedToArray(obj2.useState(0), 2);
      [first1, tmp21] = obj2.useState(0);
      const callback3 = obj2.useCallback((nativeEvent) => {
        closure_10(nativeEvent.nativeEvent.layout.width);
      }, []);
      const tmpResult6 = tmp(tmp2[15]);
      const segmentedControlState = tmpResult6.useSegmentedControlState({
        items: memo,
        pageWidth: tmp18,
        defaultIndex: 0,
        onPageChange: tmp21,
      });
      const items6 = [first1, memo];
      let questId1;
      const memo1 = obj2.useMemo(() => {
        let id;
        if (memo[first1] != null) {
          id = tmp.id;
        }
        return "all" === id || "bar" === id;
      }, items6);
      const useEffect = obj2.useEffect;
      if (params != null) {
        questId1 = params.questId;
      }
      const items7 = [questId1];
      const effect = useEffect(() => {
        questId = undefined;
        if (params != null) {
          questId = params.questId;
        }
        if (null != questId) {
          closure_3(params.questId);
        }
      }, items7);
      const items8 = [questId];
      const effect1 = obj2.useEffect(() => {
        if (null != first) {
          const obj = QuestActionCreators;
          const questPreview = obj.fetchQuestPreview(tmp);
        }
      }, items8);
      const items9 = [questId];
      const effect2 = obj2.useEffect(() => {
        function listener(quest_id) {
          const tmp2 = null != questId && quest_id.quest_id === questId;
          if (tmp2) {
            const obj = params(first[16]);
            const questPreview = obj.fetchQuestPreview(questId);
          }
        }
        let obj = closure_1(first[17]);
        const subscription = obj.subscribe("QUEST_PREVIEW_UPDATE", listener);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("QUEST_PREVIEW_UPDATE", listener);
        };
      }, items9);
      const items10 = [questId];
      const callback4 = obj2.useCallback(() => {
        if (null != first) {
          const obj = QuestActionCreators;
          const questPreview = obj.fetchQuestPreview(tmp);
        }
      }, items10);
      const items11 = [callback2];
      const items12 = [questId];
      const tmpResult7 = tmp(tmp2[11]);
      const stateFromStores2 = tmpResult7.useStateFromStores(
        items11,
        () => {
          const result = null != first && QuestStore.isFetchingQuestPreview(tmp);
          return result;
        },
        items12,
      );
      const items13 = [callback2];
      const items14 = [questId];
      const tmpResult8 = tmp(tmp2[11]);
      const stateFromStores3 = tmpResult8.useStateFromStores(
        items13,
        () => {
          let fetchQuestPreviewError = null;
          if (null != first) {
            fetchQuestPreviewError = QuestStore.getFetchQuestPreviewError(tmp);
          }
          return fetchQuestPreviewError;
        },
        items14,
      );
      if (stateFromStores2) {
        let tmp32Result2;
        if (null == stateFromStores) {
          let obj3 = { style: tmp3.container, children: closure_10(callback, obj4) };
          obj4 = { animating: true, size: "large", style: tmp3.activityIndicator };
          tmp32Result2 = closure_10(stateFromStores1, obj3);
        }
        return tmp32Result2;
      }
      let obj5 = { style: tmp3.container, children: items15 };
      items15 = [, ,];
      const obj6 = {
        style: tmp3.controlBarContainer,
        children: closure_10(tmp(tmp2[18]).MobileQuestPreviewControlBar, {
          questId,
          setQuestId: tmp8,
          refreshQuest: callback4,
        }),
      };
      items15[0] = closure_10(stateFromStores1, obj6);
      let tmp32Result = null != stateFromStores && null == stateFromStores3;
      if (tmp32Result) {
        const obj7 = { children: items16 };
        const obj8 = {
          style: tmp3.segmentedControlContainer,
          children: closure_10(tmp(tmp2[19]).SegmentedControl, obj9),
        };
        obj9 = { state: segmentedControlState };
        items16 = [closure_10(stateFromStores1, obj8)];
        const obj10 = {
          style: tmp3.pagesContainer,
          onLayout: callback3,
          children: closure_10(tmp(tmp2[20]).SegmentedControlPages, obj11),
        };
        obj11 = { state: segmentedControlState };
        items16[1] = closure_10(callback1, obj10);
        tmp32Result = tmp32(closure_12, obj7);
      }
      items15[1] = tmp32Result;
      items15[2] = closure_10(tmp(tmp2[21]).QuestBarPreview, { quest: stateFromStores, isVisible: memo1 });
      tmp32Result2 = tmp32(tmp33, obj5);
    };
let result = size.fileFinishedImporting("modules/user_settings/quests/native/SettingsQuestPreviewScreen.tsx");

export default tmp5;

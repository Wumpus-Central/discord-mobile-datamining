// === Module 15432: SettingsQuestPreviewScreen ===

// Module 15432 (SettingsQuestPreviewScreen)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import QuestActionCreators from "QuestActionCreators" /* 11540 */;
import QuestCardPreview from "QuestCardPreview" /* 15433 */;
import QuestEmbedPreview from "QuestEmbedPreview" /* 15435 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7937 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, controlBarContainer: { paddingHorizontal: PX_16, paddingTop: PX_16 / 2, paddingBottom: PX_16 }, segmentedControlContainer: { paddingHorizontal: PX_16 }, pagesContainer: { flex: 1, width: "100%" }, activityIndicator: null, allSectionsContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj4 = { paddingHorizontal: PX_16, paddingTop: PX_16 / 2, paddingBottom: PX_16 };
obj2.activityIndicator = { marginTop: nativeDefault.space.PX_32 };
let obj5 = { marginTop: nativeDefault.space.PX_32 };
obj2.allSectionsContainer = { marginBottom: nativeDefault.space.PX_80 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/quests/native/SettingsQuestPreviewScreen.tsx");

export default function SettingsQuestPreviewScreen() {
  params = params(questId[8]).useRoute().params;
  let tmp3 = closure_13();
  closure_1 = tmp3;
  questId = undefined;
  if (params != null) {
    questId = params.questId;
  }
  const tmp6 = _slicedToArray(stateFromStores.useState(questId), 2);
  questId = tmp6[0];
  _slicedToArray = tmp8;
  let obj = params(questId[8]);
  let items = [callback2];
  let items1 = [questId];
  stateFromStores = params(questId[9]).useStateFromStores(items, () => {
    let quest;
    if (null != first) {
      quest = QuestStore.getQuest(tmp);
    }
    return quest;
  }, items1);
  const tmpResult = params(questId[9]);
  const items2 = [memo];
  const stateFromStores1 = params(questId[9]).useStateFromStores(items2, () => memo.theme);
  const items3 = [stateFromStores];
  const callback = obj2.useCallback(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { quest: tmp };
      tmp2 = closure_2_10(QuestCardPreview.QuestCardPreview, obj);
    }
    return tmp2;
  }, items3);
  const items4 = [questId, stateFromStores1, ];
  let userStatus;
  if (stateFromStores != null) {
    userStatus = stateFromStores.userStatus;
  }
  items4[2] = userStatus;
  const callback1 = obj2.useCallback(() => {
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
      return closure_2_10(QuestEmbedPreview.QuestEmbedPreview, obj, combined);
    }
  }, items4);
  callback2 = obj2.useCallback(() => null, []);
  const items5 = [stateFromStores, questId, callback, callback1, callback2, tmp3.allSectionsContainer];
  memo = obj2.useMemo(() => {
    const obj = { id: "all", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Y9DnPa);
    let tmp3 = null;
    if (null != stateFromStores) {
      tmp3 = null;
      if (null != first) {
        const obj2 = { style: closure_1.allSectionsContainer, children: null };
        const items = [callback(), callback1()];
        obj2.children = items;
        tmp3 = closure_2_11(hasOwnProperty, obj2);
      }
    }
    obj.page = tmp3;
    const items1 = [obj, , , ];
    const obj3 = { id: "bar", label: null, page: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.uL4oBf);
    obj3.page = callback2();
    items1[1] = obj3;
    const obj4 = { id: "card", label: null, page: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.MAvIf1);
    obj4.page = callback();
    items1[2] = obj4;
    const obj5 = { id: "embed", label: null, page: null };
    const intl4 = util.intl;
    obj5.label = intl4.string(util.t.AswoU2);
    obj5.page = callback1();
    items1[3] = obj5;
    return items1;
  }, items5);
  const tmpResult5 = params(questId[9]);
  [tmp18, closure_10] = stateFromStores.useState(0);
  const tmp5Result2 = _slicedToArray(stateFromStores.useState(0), 2);
  const first1 = tmp5Result2[0];
  const callback3 = obj2.useCallback((nativeEvent) => {
    closure_1_10(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp5Result = _slicedToArray(stateFromStores.useState(0), 2);
  const segmentedControlState = params(questId[13]).useSegmentedControlState({ items: memo, pageWidth: tmp18, defaultIndex: 0, onPageChange: tmp5Result2[1] });
  const items6 = [first1, memo];
  let questId1;
  const memo1 = obj2.useMemo(() => {
    let id;
    if (memo[first1] != null) {
      id = tmp.id;
    }
    let tmp3 = "all" === id;
    if (!tmp3) {
      tmp3 = "bar" === id;
    }
    return tmp3;
  }, items6);
  if (params != null) {
    questId1 = params.questId;
  }
  const items7 = [questId1];
  const effect = obj2.useEffect(() => {
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
      const questPreview = QuestActionCreators.fetchQuestPreview(tmp);
    }
  }, items8);
  const items9 = [questId];
  const effect2 = obj2.useEffect(() => {
    function listener(quest_id) {
      if (tmp2) {
        const questPreview = params(first[14]).fetchQuestPreview(questId);
        const obj = params(first[14]);
      }
      tmp2 = null != questId && quest_id.quest_id === questId;
    }
    const subscription = closure_1(first[15]).subscribe("QUEST_PREVIEW_UPDATE", listener);
    return () => {
      DispatcherDefault.unsubscribe("QUEST_PREVIEW_UPDATE", listener);
    };
  }, items9);
  const items10 = [questId];
  const callback4 = obj2.useCallback(() => {
    if (null != first) {
      const questPreview = QuestActionCreators.fetchQuestPreview(tmp);
    }
  }, items10);
  const tmpResult6 = params(questId[13]);
  const items11 = [callback2];
  const items12 = [questId];
  const stateFromStores2 = params(questId[9]).useStateFromStores(items11, () => {
    let result = null != first;
    if (result) {
      result = QuestStore.isFetchingQuestPreview(tmp);
    }
    return result;
  }, items12);
  const tmpResult7 = params(questId[9]);
  const items13 = [callback2];
  const items14 = [questId];
  const stateFromStores3 = params(questId[9]).useStateFromStores(items13, () => {
    let fetchQuestPreviewError = null;
    if (null != first) {
      fetchQuestPreviewError = QuestStore.getFetchQuestPreviewError(tmp);
    }
    return fetchQuestPreviewError;
  }, items14);
  if (stateFromStores2) {
    if (null == stateFromStores) {
      let obj3 = { style: tmp3.container, children: null };
      let obj4 = { animating: true, size: "large", style: tmp3.activityIndicator };
      obj3.children = closure_10(callback, obj4);
      let tmp31Result2 = closure_10(stateFromStores1, obj3);
    }
    return tmp31Result2;
  }
  let obj5 = { style: tmp3.container, children: null };
  const tmpResult8 = params(questId[9]);
  const items15 = [closure_10(stateFromStores1, { style: tmp3.controlBarContainer, children: closure_10(params(questId[16]).MobileQuestPreviewControlBar, { questId, setQuestId: tmp6[1], refreshQuest: callback4 }) }), , ];
  let tmp31Result = null != stateFromStores && null == stateFromStores3;
  if (tmp31Result) {
    const obj7 = { children: null };
    const obj8 = { style: tmp3.segmentedControlContainer, children: null };
    const obj9 = { state: segmentedControlState };
    obj8.children = closure_10(tmp(tmp2[17]).SegmentedControl, obj9);
    const items16 = [closure_10(tmp32, obj8), ];
    const obj10 = { style: tmp3.pagesContainer, onLayout: callback3, children: null };
    const obj11 = { state: segmentedControlState };
    obj10.children = closure_10(tmp(tmp2[18]).SegmentedControlPages, obj11);
    items16[1] = closure_10(callback1, obj10);
    obj7.children = items16;
    tmp31Result = tmp31(closure_12, obj7);
  }
  items15[1] = tmp31Result;
  items15[2] = closure_10(params(questId[19]).QuestBarPreview, { quest: stateFromStores, isVisible: memo1 });
  obj5.children = items15;
  tmp31Result2 = tmp31(tmp32, obj5);
  const obj6 = { style: tmp3.controlBarContainer, children: closure_10(params(questId[16]).MobileQuestPreviewControlBar, { questId, setQuestId: tmp6[1], refreshQuest: callback4 }) };
};
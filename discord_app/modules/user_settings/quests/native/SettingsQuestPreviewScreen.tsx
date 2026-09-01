// discord_app/modules/user_settings/quests/native/SettingsQuestPreviewScreen.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../quests/QuestStore.tsx";
import closure_9 from "../../ThemeStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, ActivityIndicator: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const PX_16 = ThemesDefault.space.PX_16;
createCacheKey = {
  container: null,
  controlBarContainer: null,
  segmentedControlContainer: null,
  pagesContainer: null,
  activityIndicator: null,
  allSectionsContainer: null,
};
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: PX_16, paddingTop: PX_16 / 2, paddingBottom: PX_16 };
createCacheKey[2] = { paddingHorizontal: PX_16 };
createCacheKey[3] = { flex: 1, width: "100%" };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_32 };
let obj1 = { paddingHorizontal: PX_16, paddingTop: PX_16 / 2, paddingBottom: PX_16 };
let obj2 = { marginTop: ThemesDefault.space.PX_32 };
createCacheKey[5] = { marginBottom: ThemesDefault.space.PX_80 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginBottom: ThemesDefault.space.PX_80 };
let result = require("set").fileFinishedImporting("modules/user_settings/quests/native/SettingsQuestPreviewScreen.tsx");

export default function SettingsQuestPreviewScreen() {
  let obj = params(first[8]);
  params = obj.useRoute().params;
  let tmp3 = callback3();
  closure_1 = tmp3;
  obj1 = stateFromStores;
  let questId;
  if (params != null) {
    questId = params.questId;
  }
  const tmp6 = callback(stateFromStores.useState(questId), 2);
  first = tmp6[0];
  callback = tmp8;
  let tmpResult = tmp(tmp2[9]);
  let items = [callback2];
  let items1 = [first];
  stateFromStores = tmpResult.useStateFromStores(
    items,
    () => {
      let quest;
      if (null != first) {
        quest = callback2.getQuest(tmp);
      }
      return quest;
    },
    items1,
  );
  tmpResult = tmp(tmp2[9]);
  const items2 = [memo];
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => memo.theme);
  const items3 = [stateFromStores];
  callback = obj1.useCallback(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { quest: null };
      obj[0] = tmp;
      tmp2 = closure_1_10(params(first[10]).QuestCardPreview, obj);
    }
    return tmp2;
  }, items3);
  const items4 = [first, stateFromStores1];
  let userStatus;
  if (stateFromStores != null) {
    userStatus = stateFromStores.userStatus;
  }
  items4[2] = userStatus;
  const callback1 = obj1.useCallback(() => {
    if (null == first) {
      return null;
    } else {
      let completedAt;
      if (stateFromStores != null) {
        const userStatus = tmp14.userStatus;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
      }
      let progress;
      if (stateFromStores != null) {
        const userStatus2 = tmp14.userStatus;
        if (userStatus2 != null) {
          progress = userStatus2.progress;
        }
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp + "-" + tmp13 + "-" + completedAt + "-" + progress;
      const obj = { questId: null };
      obj[0] = tmp;
      return closure_1_10(params(first[11]).QuestEmbedPreview, obj, combined);
    }
  }, items4);
  callback2 = obj1.useCallback(() => null, []);
  const items5 = [stateFromStores, first, callback, callback1, callback2, tmp3.allSectionsContainer];
  memo = obj1.useMemo(() => {
    let obj = { id: "all", label: null, page: null };
    const intl = params(first[12]).intl;
    obj[1] = intl.string(params(first[12]).t.Y9DnPa);
    let tmp3 = null;
    if (null != stateFromStores) {
      tmp3 = null;
      if (null != first) {
        obj = { style: null, children: null };
        obj[0] = lib.allSectionsContainer;
        const items = [callback(), callback1()];
        obj[1] = items;
        tmp3 = first1(stateFromStores1, obj);
      }
    }
    obj[2] = tmp3;
    const items1 = [obj, , ,];
    obj = { id: "bar", label: null, page: null };
    const intl2 = tmp(tmp2[12]).intl;
    obj[1] = intl2.string(params(first[12]).t.uL4oBf);
    obj[2] = callback2();
    items1[1] = obj;
    obj1 = { id: "card", label: null, page: null };
    const intl3 = tmp(tmp2[12]).intl;
    obj1[1] = intl3.string(params(first[12]).t.MAvIf1);
    obj1[2] = callback();
    items1[2] = obj1;
    const obj2 = { id: "embed", label: null, page: null };
    const intl4 = tmp(tmp2[12]).intl;
    obj2[1] = intl4.string(params(first[12]).t.AswoU2);
    obj2[2] = callback1();
    items1[3] = obj2;
    return items1;
  }, items5);
  let tmp5Result = tmp5(obj1.useState(0), 2);
  [tmp18, closure_10] = tmp5Result;
  tmp5Result = tmp5(obj1.useState(0), 2);
  const first1 = tmp5Result[0];
  callback3 = obj1.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const segmentedControlState = params(first[13]).useSegmentedControlState({
    items: memo,
    pageWidth: tmp18,
    defaultIndex: 0,
    onPageChange: tmp5Result[1],
  });
  const items6 = [first1, memo];
  let questId1;
  const memo1 = obj1.useMemo(() => {
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
  const effect = obj1.useEffect(() => {
    let questId;
    if (params != null) {
      questId = tmp.questId;
    }
    if (null != questId) {
      callback(tmp.questId);
    }
  }, items7);
  const items8 = [first];
  const effect1 = obj1.useEffect(() => {
    if (null != first) {
      const questPreview = params(first[14]).fetchQuestPreview(tmp);
      const obj = params(first[14]);
    }
  }, items8);
  const items9 = [first];
  const effect2 = obj1.useEffect(() => {
    function listener(quest_id) {
      if (tmp2) {
        const questPreview = listener(closure_1_2[14]).fetchQuestPreview(tmp);
        const obj = listener(closure_1_2[14]);
      }
    }
    const subscription = lib(first[15]).subscribe("QUEST_PREVIEW_UPDATE", listener);
    return () => {
      callback(first[15]).unsubscribe("QUEST_PREVIEW_UPDATE", listener);
    };
  }, items9);
  const items10 = [first];
  const callback4 = obj1.useCallback(() => {
    if (null != first) {
      const questPreview = params(first[14]).fetchQuestPreview(tmp);
      const obj = params(first[14]);
    }
  }, items10);
  const tmpResult1 = params(first[13]);
  const items11 = [callback2];
  const items12 = [first];
  const stateFromStores2 = params(first[9]).useStateFromStores(
    items11,
    () => {
      let result = null != first;
      if (result) {
        result = callback2.isFetchingQuestPreview(tmp);
      }
      return result;
    },
    items12,
  );
  const tmpResult2 = params(first[9]);
  const items13 = [callback2];
  const items14 = [first];
  const stateFromStores3 = params(first[9]).useStateFromStores(
    items13,
    () => {
      let fetchQuestPreviewError = null;
      if (null != first) {
        fetchQuestPreviewError = callback2.getFetchQuestPreviewError(tmp);
      }
      return fetchQuestPreviewError;
    },
    items14,
  );
  if (stateFromStores2) {
    if (null == stateFromStores) {
      obj = { style: null, children: null };
      obj[0] = tmp3.container;
      obj = { animating: true, size: "large", style: null };
      obj[2] = tmp3.activityIndicator;
      obj[1] = callback2(callback, obj);
      let tmp31Result = callback2(stateFromStores1, obj);
    }
    return tmp31Result;
  }
  obj1 = { style: tmp3.container, children: null };
  const tmpResult3 = params(first[9]);
  const items15 = [
    callback2(stateFromStores1, {
      style: tmp3.controlBarContainer,
      children: callback2(params(first[16]).MobileQuestPreviewControlBar, {
        questId: first,
        setQuestId: tmp6[1],
        refreshQuest: callback4,
      }),
    }),
    ,
  ];
  tmp31Result = null != stateFromStores && null == stateFromStores3;
  if (tmp31Result) {
    const obj3 = { children: null };
    const obj4 = { style: null, children: null };
    obj4[0] = tmp3.segmentedControlContainer;
    const obj5 = { state: null };
    obj5[0] = segmentedControlState;
    obj4[1] = tmp33(tmp(tmp2[17]).SegmentedControl, obj5);
    const items16 = [tmp33(tmp32, obj4)];
    const obj6 = { style: null, onLayout: null, children: null };
    obj6[0] = tmp3.pagesContainer;
    obj6[1] = callback3;
    const obj7 = { state: null };
    obj7[0] = segmentedControlState;
    obj6[2] = tmp33(tmp(tmp2[18]).SegmentedControlPages, obj7);
    items16[1] = tmp33(callback1, obj6);
    obj3[0] = items16;
    tmp31Result = tmp31(closure_12, obj3);
  }
  items15[1] = tmp31Result;
  items15[2] = callback2(params(first[19]).QuestBarPreview, { quest: stateFromStores, isVisible: memo1 });
  obj1[1] = items15;
  tmp31Result = tmp31(tmp32, obj1);
}

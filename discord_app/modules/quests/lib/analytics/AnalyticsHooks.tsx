// === Module 10954: AnalyticsHooks ===

// Module 10954 (AnalyticsHooks)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import v1 from "v1" /* 1266 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7161 */;
import QuestDataUtils from "QuestDataUtils" /* 7183 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import QuestHomeSearchSession from "QuestHomeSearchSession" /* 7214 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, advertisingId, dependencyMap, questHomeHero;

let AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let getQuestImpressionId;
  let tmp3;
  let obj = getQuestImpressionId(576);
  const cResult = obj.c(2);
  let obj2 = getQuestImpressionId(10916);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  if (cResult[0] !== getQuestImpressionId) {
    const fn = function t(properties) {
      let obj2;
      const obj = { properties: obj2 };
      const trackQuestEvent = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      const merged = Object.assign(properties);
      obj2 = { impression_id: getQuestImpressionId() };
      const merged1 = Object.assign(properties.properties);
      trackQuestEvent(obj);
    };
    cResult[0] = getQuestImpressionId;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let getQuestImpressionId;
  let obj = getQuestImpressionId(10916);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return react.useCallback((properties) => {
    let obj2;
    const obj = { properties: obj2 };
    const trackQuestEvent = AnalyticsActions.trackQuestEvent;
    AnalyticsActions;
    const merged = Object.assign(properties);
    obj2 = { impression_id: getQuestImpressionId() };
    const merged1 = Object.assign(properties.properties);
    trackQuestEvent(obj);
  }, items);
});
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let tmp3;
  let obj = require("react");
  const cResult = obj.c(2);
  const tmp2 = closure_5();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t(questId) {
      let closure_2;
      let closure_3;
      let closure_4;
      let closure_7;
      let closure_8;
      let cta_name;
      let sourceQuestContent;
      let trackGuildAndChannelMetadata;
      questId = questId.questId;
      const questContent = questId.questContent;
      ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
      let obj = questId(dependencyMap[6]);
      const adMetadataSealed = obj.getAdMetadataSealed(sourceQuestContent);
      let obj2 = questId(dependencyMap[6]);
      const adTrafficMetadataSealed = obj2.getAdTrafficMetadataSealed(sourceQuestContent, questId);
      const getAdUser = questId(dependencyMap[7]).getAdUser;
      questId(dependencyMap[7]);
      let obj3 = questId(dependencyMap[8]);
      const adUser = getAdUser(obj3.getQuestContentName(questContent));
      adUser.then((advertisingId) => {
        let advertisingId1;
        let obj2;
        let obj4;
        let tmp10;
        let tmp2Result6;
        let tmp9;
        let uuid;
        const obj = { questId, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: obj2, trackGuildAndChannelMetadata, shouldExtendSession: tmp2Result6.isBillableQuestContent(questContent), sourceQuestContent };
        obj2 = { cta_name, click_id: obj4.v4(), apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, metadata_sealed: tmp9, traffic_metadata_sealed: tmp10, search_session_id: uuid };
        const obj3 = AnalyticsTypes;
        const merged = Object.assign(obj3.getContentProperties(questContent, closure_3, closure_4));
        const merged1 = Object.assign(getDeviceMetadataDefault());
        advertisingId = null;
        obj4 = v1;
        if (null != advertisingId) {
          advertisingId = null;
          const tmp2Result = PlatformUtils;
          if (tmp2Result.isIOS()) {
            advertisingId = advertisingId.advertisingId;
          }
        }
        advertisingId1 = null;
        if (null != advertisingId) {
          advertisingId1 = null;
          const tmp2Result4 = PlatformUtils;
          if (tmp2Result4.isAndroid()) {
            advertisingId1 = advertisingId.advertisingId;
          }
        }
        tmp9 = null;
        if (null != closure_7) {
          tmp9 = closure_7;
        }
        tmp10 = null;
        if (null != closure_8) {
          tmp10 = closure_8;
        }
        const tmp2Result5 = QuestHomeSearchSession;
        const currentQuestHomeSearchSession = tmp2Result5.getCurrentQuestHomeSearchSession();
        uuid = undefined;
        if (currentQuestHomeSearchSession != null) {
          uuid = currentQuestHomeSearchSession.uuid;
        }
        if (uuid == null) {
          uuid = null;
        }
        tmp2Result6 = QuestDataUtils;
        questId(obj);
      });
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const tmp = closure_5();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useCallback((questId) => {
    let closure_2;
    let closure_3;
    let closure_4;
    let closure_7;
    let closure_8;
    let cta_name;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    let obj = questId(dependencyMap[6]);
    const adMetadataSealed = obj.getAdMetadataSealed(sourceQuestContent);
    let obj2 = questId(dependencyMap[6]);
    const adTrafficMetadataSealed = obj2.getAdTrafficMetadataSealed(sourceQuestContent, questId);
    const getAdUser = questId(dependencyMap[7]).getAdUser;
    questId(dependencyMap[7]);
    let obj3 = questId(dependencyMap[8]);
    const adUser = getAdUser(obj3.getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let advertisingId1;
      let obj2;
      let obj4;
      let tmp10;
      let tmp2Result6;
      let tmp9;
      let uuid;
      const obj = { questId, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: obj2, trackGuildAndChannelMetadata, shouldExtendSession: tmp2Result6.isBillableQuestContent(questContent), sourceQuestContent };
      obj2 = { cta_name, click_id: obj4.v4(), apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, metadata_sealed: tmp9, traffic_metadata_sealed: tmp10, search_session_id: uuid };
      const obj3 = AnalyticsTypes;
      const merged = Object.assign(obj3.getContentProperties(questContent, closure_3, closure_4));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      advertisingId = null;
      obj4 = v1;
      if (null != advertisingId) {
        advertisingId = null;
        const tmp2Result = PlatformUtils;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
      }
      advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        const tmp2Result4 = PlatformUtils;
        if (tmp2Result4.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
      }
      tmp9 = null;
      if (null != closure_7) {
        tmp9 = closure_7;
      }
      tmp10 = null;
      if (null != closure_8) {
        tmp10 = closure_8;
      }
      const tmp2Result5 = QuestHomeSearchSession;
      const currentQuestHomeSearchSession = tmp2Result5.getCurrentQuestHomeSearchSession();
      uuid = undefined;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      tmp2Result6 = QuestDataUtils;
      questId(obj);
    });
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let getQuestImpressionId;
  let tmp3;
  let obj = getQuestImpressionId(576);
  const cResult = obj.c(2);
  let obj2 = getQuestImpressionId(10916);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  if (cResult[0] !== getQuestImpressionId) {
    const fn = function t(properties) {
      let obj2;
      const obj = { properties: obj2 };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      const merged = Object.assign(properties);
      obj2 = { impression_id: getQuestImpressionId() };
      const merged1 = Object.assign(properties.properties);
      trackAdContentEvent(obj);
    };
    cResult[0] = getQuestImpressionId;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let getQuestImpressionId;
  let obj = getQuestImpressionId(10916);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return react.useCallback((properties) => {
    let obj2;
    const obj = { properties: obj2 };
    const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
    AnalyticsActions;
    const merged = Object.assign(properties);
    obj2 = { impression_id: getQuestImpressionId() };
    const merged1 = Object.assign(properties.properties);
    trackAdContentEvent(obj);
  }, items);
});
let closure_6 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let tmp3;
  let obj = require("react");
  const cResult = obj.c(2);
  const tmp2 = closure_6();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t(arg0) {
      let adCreativeType;
      let closure_1;
      let closure_2;
      let closure_4;
      let closure_7;
      let closure_8;
      let cta_name;
      let questContent;
      let relatedQuestId;
      let sourceQuestContent;
      let trackGuildAndChannelMetadata;
      ({ adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
      ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
      const getAdUser = adContentId(dependencyMap[7]).getAdUser;
      adContentId(dependencyMap[7]);
      let obj = adContentId(dependencyMap[8]);
      const adUser = getAdUser(obj.getQuestContentName(questContent));
      adUser.then((advertisingId) => {
        let advertisingId1;
        let obj2;
        let obj4;
        let tmp2Result6;
        let uuid;
        const obj = { adContentId, relatedQuestId, adCreativeType, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: obj2, trackGuildAndChannelMetadata, shouldExtendSession: tmp2Result6.isBillableQuestContent(questContent), sourceQuestContent };
        obj2 = { cta_name, click_id: obj4.v4(), apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, search_session_id: uuid };
        const obj3 = AnalyticsTypes;
        const merged = Object.assign(obj3.getContentProperties(questContent, closure_5, closure_6));
        const merged1 = Object.assign(getDeviceMetadataDefault());
        advertisingId = null;
        obj4 = v1;
        if (null != advertisingId) {
          advertisingId = null;
          const tmp2Result = PlatformUtils;
          if (tmp2Result.isIOS()) {
            advertisingId = advertisingId.advertisingId;
          }
        }
        advertisingId1 = null;
        if (null != advertisingId) {
          advertisingId1 = null;
          const tmp2Result4 = PlatformUtils;
          if (tmp2Result4.isAndroid()) {
            advertisingId1 = advertisingId.advertisingId;
          }
        }
        const tmp2Result5 = QuestHomeSearchSession;
        const currentQuestHomeSearchSession = tmp2Result5.getCurrentQuestHomeSearchSession();
        uuid = undefined;
        if (currentQuestHomeSearchSession != null) {
          uuid = currentQuestHomeSearchSession.uuid;
        }
        if (uuid == null) {
          uuid = null;
        }
        tmp2Result6 = QuestDataUtils;
        adContentId(obj);
      });
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const tmp = closure_6();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useCallback((arg0) => {
    let adCreativeType;
    let closure_1;
    let closure_2;
    let closure_4;
    let closure_7;
    let closure_8;
    let cta_name;
    let questContent;
    let relatedQuestId;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    ({ adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    const getAdUser = adContentId(dependencyMap[7]).getAdUser;
    adContentId(dependencyMap[7]);
    let obj = adContentId(dependencyMap[8]);
    const adUser = getAdUser(obj.getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let advertisingId1;
      let obj2;
      let obj4;
      let tmp2Result6;
      let uuid;
      const obj = { adContentId, relatedQuestId, adCreativeType, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: obj2, trackGuildAndChannelMetadata, shouldExtendSession: tmp2Result6.isBillableQuestContent(questContent), sourceQuestContent };
      obj2 = { cta_name, click_id: obj4.v4(), apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, search_session_id: uuid };
      const obj3 = AnalyticsTypes;
      const merged = Object.assign(obj3.getContentProperties(questContent, closure_5, closure_6));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      advertisingId = null;
      obj4 = v1;
      if (null != advertisingId) {
        advertisingId = null;
        const tmp2Result = PlatformUtils;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
      }
      advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        const tmp2Result4 = PlatformUtils;
        if (tmp2Result4.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
      }
      const tmp2Result5 = QuestHomeSearchSession;
      const currentQuestHomeSearchSession = tmp2Result5.getCurrentQuestHomeSearchSession();
      uuid = undefined;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      tmp2Result6 = QuestDataUtils;
      adContentId(obj);
    });
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === arg1) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
  }
  const fn = function o() {
    const obj = AnalyticsActions;
    const result = obj.trackQuestEmbedFallbackViewed(closure_1, closure_0);
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    const obj = AnalyticsActions;
    const result = obj.trackQuestEmbedFallbackViewed(closure_1, closure_0);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      if (null != closure_0) {
        const obj = AnalyticsActions;
        const result = obj.trackBountyCarouselEmptyStateViewed(tmp);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const obj = AnalyticsActions;
      const result = obj.trackBountyCarouselEmptyStateViewed(tmp);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((questHomeHero) => {
  let closure_4;
  let sourceQuestContent;
  let tmp5;
  const tmp = questHomeHero;
  let obj = questHomeHero(576);
  const cResult = obj.c(19);
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  const QuestContent = questHomeHero(5626).QuestContent;
  const tmp4 = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp4;
  if (cResult[0] !== tmp4) {
    const tmpResult = tmp(7212);
    const contentProperties = tmpResult.getContentProperties(tmp4);
    delete tmp6["row_index"];
    cResult[0] = tmp4;
    cResult[1] = contentProperties;
    tmp5 = contentProperties;
  } else {
    tmp5 = cResult[1];
  }
  properties = tmp5;
  if (cResult[2] === tmp5) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === questHomeHero) {
        let tmp7;
        let tmp8;
        let tmp9;
        if (cResult[5] === shouldShowQuestHomeHeroContent) {
          tmp7 = cResult[6];
        }
        AnalyticEvents = tmp7;
        if (cResult[7] !== tmp7) {
          const fn = function _() {
            closure_4(AnalyticEvents.QUEST_HOVER);
          };
          cResult[7] = tmp7;
          cResult[8] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp7) {
          const fn2 = function v() {
            closure_4(AnalyticEvents.QUEST_HOVER_OFF);
          };
          cResult[9] = tmp7;
          cResult[10] = fn2;
          tmp9 = fn2;
        } else {
          tmp9 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
              obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }
          }
          cResult[11] = T;
        } else {
          class T {
            constructor() {
              const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
              obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }
          }
        }
        if (cResult[12] === tmp5) {
          class T {
            constructor() {
              const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
              obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }
          }
          if (cResult[15] === tmp12) {
            class T {
              constructor() {
                const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
                obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
              }
            }
          }
          let obj2 = { handleMouseEnter: tmp8, handleMouseLeave: tmp9, handleOnboardingPopoutRender: T, handleEntrypointClick: tmp12 };
          cResult[15] = tmp12;
          cResult[16] = tmp8;
          cResult[17] = tmp9;
          cResult[18] = obj2;
        }
        const fn3 = function k() {
          let obj3;
          const track = AnalyticsUtilsDefault.track;
          const QUEST_CONTENT_CLICKED = AnalyticEvents.QUEST_CONTENT_CLICKED;
          const obj = { is_targeted: false };
          AnalyticsUtilsDefault;
          const merged = Object.assign(properties);
          if (null != questHomeHero) {
            obj3 = { ad_content_id: tmp3.id };
            const obj2 = { ad_content_id: tmp3.id };
          } else {
            obj3 = {};
          }
          const merged1 = Object.assign(obj3);
          track(QUEST_CONTENT_CLICKED, obj);
        };
        cResult[12] = tmp5;
        cResult[13] = questHomeHero;
        cResult[14] = fn3;
        class C {
          constructor(event) {
            if (null != questHomeHero) {
              if (shouldShowQuestHomeHeroContent) {
                const obj2 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event, properties, sourceQuestContent };
                const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
                AnalyticsActions;
                trackAdContentEvent(obj2);
              }
            }
            const obj = AnalyticsUtilsDefault;
            obj.track(event, properties);
          }
        }
      }
    }
  }
  class C {
    constructor(event) {
      if (null != questHomeHero) {
        if (shouldShowQuestHomeHeroContent) {
          const obj2 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event, properties, sourceQuestContent };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          trackAdContentEvent(obj2);
        }
      }
      const obj = AnalyticsUtilsDefault;
      obj.track(event, properties);
    }
  }
  cResult[2] = tmp5;
  cResult[3] = tmp4;
  cResult[4] = questHomeHero;
  cResult[5] = shouldShowQuestHomeHeroContent;
  cResult[6] = C;
  tmp7 = C;
}) : ((questHomeHero) => {
  let sourceQuestContent;
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  let memo;
  const QuestContent = questHomeHero(5626).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp;
  const items = [tmp];
  memo = memo.useMemo(() => {
    const obj = AnalyticsTypes;
    const contentProperties = obj.getContentProperties(sourceQuestContent);
    delete tmp["row_index"];
    return contentProperties;
  }, items);
  const items1 = [questHomeHero, shouldShowQuestHomeHeroContent, tmp, memo];
  const callback = memo.useCallback((event) => {
    if (null != questHomeHero) {
      if (shouldShowQuestHomeHeroContent) {
        const obj2 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event, properties: memo, sourceQuestContent };
        const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
        AnalyticsActions;
        trackAdContentEvent(obj2);
      }
    }
    const obj = AnalyticsUtilsDefault;
    obj.track(event, memo);
  }, items1);
  const items2 = [callback];
  const callback1 = memo.useCallback(() => {
    callback(AnalyticEvents.QUEST_HOVER);
  }, items2);
  const items3 = [callback];
  const callback2 = memo.useCallback(() => {
    callback(AnalyticEvents.QUEST_HOVER_OFF);
  }, items3);
  const callback3 = memo.useCallback(() => {
    const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
    obj.track(callback.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
  }, []);
  const items4 = [memo, questHomeHero];
  const callback4 = memo.useCallback(() => {
    let obj3;
    const track = AnalyticsUtilsDefault.track;
    const QUEST_CONTENT_CLICKED = AnalyticEvents.QUEST_CONTENT_CLICKED;
    const obj = { is_targeted: false };
    AnalyticsUtilsDefault;
    const merged = Object.assign(memo);
    if (null != questHomeHero) {
      obj3 = { ad_content_id: tmp3.id };
      const obj2 = { ad_content_id: tmp3.id };
    } else {
      obj3 = {};
    }
    const merged1 = Object.assign(obj3);
    track(QUEST_CONTENT_CLICKED, obj);
  }, items4);
  const items5 = [callback1, callback2, callback3, callback4];
  return memo.useMemo(() => ({ handleMouseEnter: callback1, handleMouseLeave: callback2, handleOnboardingPopoutRender: callback3, handleEntrypointClick: callback4 }), items5);
});
let result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export const useTrackQuestEventWithImpression = tmp2;
export const useTrackQuestContentClickedWithImpression = tmp3;
export const useTrackAdContentEventWithImpression = tmp4;
export const useTrackAdContentClickedWithImpression = tmp5;
export const useQuestsEmbedFallbackAnalytics = tmp6;
export const useBountyCarouselEmptyStateAnalytics = tmp7;
export const useQuestHomeEntrypointAnalyticsEvents = tmp8;
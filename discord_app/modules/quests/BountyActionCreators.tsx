// === Module 11524: BountyActionCreators ===

// Module 11524 (BountyActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7461 */;
import QuestDataUtils from "QuestDataUtils" /* 7699 */;
import SessionAdGenerator from "SessionAdGenerator" /* 7721 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7700 */;
import NetworkStore from "NetworkStore" /* 4609 */;
import BountyStore from "BountyStore" /* 7702 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
function fetchBountiesAndDispatch() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _fetchBountiesAndDispatch(arg0) {
  closure_3 = tmp3;
  const request_id = tmp5;
  closure_130_0 = closure_0;
  DispatcherDefault.dispatch({ type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN" });
  const _Date = Date;
  closure_130_1 = Date.now();
  await fetchedAt();
  if (1 === tmp8) {
    c5 = 0;
    closure_130_5 = closure_4;
    const obj2 = { type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE", placement: closure_130_0, error: null };
    obj2.error = new closure_131_1(closure_131_2[11])(closure_130_5);
    closure_131_1(closure_131_2[7]).dispatch(obj2);
    c7 = 3;
    new closure_131_1(closure_131_2[11])(closure_130_5);
    const obj1 = closure_131_1(closure_131_2[7]);
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_130_2 = value;
    const _Map = Map;
    closure_130_3 = new Map();
    const decisions = closure_130_2.decisions;
    closure_130_4 = decisions.flatMap((creative) => {
      if (null != creative.creative) {
        if (creative.creative.creative_type === closure_0(request_id[8]).AdCreativeType.BOUNTY) {
          let tmpResult = closure_0(request_id[9]);
          const bountyFromServerResult = tmpResult.bountyFromServer(creative.creative.creative_content);
          tmpResult = closure_0(request_id[10]);
          let obj = { fetchedAt, requestId: request_id.request_id, creative: null };
          obj = { type: closure_0(request_id[8]).AdCreativeType.BOUNTY, bounty: bountyFromServerResult };
          obj.creative = obj;
          const result = closure_1_3.set(bountyFromServerResult.id, tmpResult.questAdDecisionFromAdDecision(creative, obj));
          const items = [bountyFromServerResult];
          return items;
        }
      }
      return [];
    });
    closure_131_1(closure_131_2[7]).dispatch({ type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS", bounties: closure_130_4, placement: closure_130_0, adDecisionsByAdCreativeId: closure_130_3, fetchedAt: closure_130_1 });
    c5 = 0;
    closure_131_1(closure_131_2[7]);
    new Map();
  }
  return value;
};
let closure_12 = async function _fetchQuestHomeBounties(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else if (!BountyStore.isFetchingQuestHomeBounties) {
          c2 = 1;
          c1 = 1;
          const obj1 = {
            value: fetchBountiesAndDispatch(tmp5, asyncGeneratorStep(async () => {
                      await tmp2(7461).getSession();
                      closure_128_0 = value;
                      const orRefreshAdSession = tmp2(7721).getOrRefreshAdSession();
                      const HTTP = tmp2(1272).HTTP;
                      const request = { url: constants.QUESTS_GET_DECISIONS, query: null, rejectWithError: false, context: null };
                      const obj3 = { placement: closure_129_0, client_ad_session_id: orRefreshAdSession.uuid, client_heartbeat_session_id: null, num_decisions_requested: 5 };
                      if (closure_128_0 != null) {
                        const uuid = closure_128_0.uuid;
                      }
                      obj3.client_heartbeat_session_id = uuid;
                      request.query = obj3;
                      request.context = { connection_type: type.getType() };
                      await HTTP.get(request);
                      return value.body;
                    })),
            done: false
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
let closure_13 = async function _fetchBountyPreview(arg0) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else if (!BountyStore.isFetchingQuestHomeBounties) {
          c3 = 1;
          c2 = 1;
          const obj1 = {
            value: fetchBountiesAndDispatch(tmp6, asyncGeneratorStep(async () => {
                      const _URLSearchParams = URLSearchParams;
                      closure_0 = 0;
                      let items = [];
                      closure_0 = HermesBuiltin.arraySpread(closure_0.map((item) => {
                        const items = ["ad_creative_ids", item];
                        return items;
                      }), closure_0);
                      const _String = String;
                      const items1 = ["placement", String(closure_1)];
                      items[closure_0] = items1;
                      closure_0 = closure_0 + 1;
                      const HTTP = closure_0(c2[14]).HTTP;
                      const _HermesInternal = HermesInternal;
                      await HTTP.get({ url: "" + constants.QUESTS_CREATIVE_PREVIEW + "?" + new URLSearchParams(items).toString(), rejectWithError: false });
                      return value.body;
                    })),
            done: false
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      }
      c2 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
};
let closure_14 = async function _fetchDockCreativePreview(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          let body;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          const MOBILE_HOME_DOCK_AREA = QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA;
          closure_131_1 = MOBILE_HOME_DOCK_AREA;
          const _Date = Date;
          closure_131_2 = Date.now();
          if (!fetchingAdToDeliverByPlacement.isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
            let obj10 = DispatcherDefault;
            const obj1 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: MOBILE_HOME_DOCK_AREA };
            obj10.dispatch(obj1);
            c6 = 1;
            const _URLSearchParams = URLSearchParams;
            const items = ["ad_creative_ids", closure_0];
            const items1 = [items, ];
            const _String = String;
            const items2 = ["placement", String(MOBILE_HOME_DOCK_AREA)];
            items1[1] = items2;
            const str = new URLSearchParams(items1);
            const HTTP = HTTPUtils.HTTP;
            let obj2 = { url: null, rejectWithError: false };
            const _HermesInternal = HermesInternal;
            obj2.url = "" + constants.QUESTS_CREATIVE_PREVIEW + "?" + str.toString();
            c7 = 2;
            c8 = 1;
            const obj3 = { value: HTTP.get(obj2), done: false };
            return obj3;
          }
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          closure_131_7 = closure_5;
          const obj4 = { error: closure_131_7, adCreativeId: closure_131_0, status: null };
          let status;
          if (closure_131_7 != null) {
            status = closure_131_7.status;
          }
          obj4.status = status;
          closure_132_9.error("Failed to fetch dock creative preview for adCreativeId", obj4);
          let obj8 = closure_132_1(closure_132_2[7]);
          const obj5 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: closure_131_1, error: null };
          const tmp82 = new closure_132_1(closure_132_2[11])(closure_131_7);
          obj5.error = tmp82;
          obj8.dispatch(obj5);
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_131_3 = value;
          body = closure_131_3.body;
          const decisions = body.decisions;
          let first;
          if (decisions != null) {
            first = decisions[0];
          }
          c1 = first;
          if (first == null) {
            c1 = null;
          }
          closure_131_5 = c1;
          let creative;
          if (closure_131_5 != null) {
            creative = closure_131_5.creative;
          }
          c2 = creative;
          if (creative == null) {
            c2 = null;
          }
          closure_131_6 = c2;
          if (null != closure_131_6) {
            if (closure_131_6.creative_type === closure_132_0(closure_132_2[8]).AdCreativeType.BOUNTY) {
              const obj7 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS", creative: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null, responseTtlSeconds: 300, placement: null, fetchedAt: null };
              obj8 = { type: closure_132_0(closure_132_2[8]).AdCreativeType.BOUNTY, bounty: null };
              const obj17 = closure_132_1(closure_132_2[7]);
              obj8.bounty = closure_132_0(closure_132_2[9]).bountyFromServer(closure_131_6.creative_content);
              obj7.creative = obj8;
              let ad_id;
              if (closure_131_5 != null) {
                let ad_identifiers = closure_131_5.ad_identifiers;
                if (ad_identifiers != null) {
                  ad_id = ad_identifiers.ad_id;
                }
              }
              obj = { ad_id, adset_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
              let adset_id;
              if (closure_131_5 != null) {
                const ad_identifiers2 = closure_131_5.ad_identifiers;
                if (ad_identifiers2 != null) {
                  adset_id = ad_identifiers2.adset_id;
                }
              }
              obj.adset_id = adset_id;
              let ad_set_id;
              if (closure_131_5 != null) {
                const ad_identifiers3 = closure_131_5.ad_identifiers;
                if (ad_identifiers3 != null) {
                  ad_set_id = ad_identifiers3.ad_set_id;
                }
              }
              obj.ad_set_id = ad_set_id;
              let campaign_id;
              if (closure_131_5 != null) {
                const ad_identifiers4 = closure_131_5.ad_identifiers;
                if (ad_identifiers4 != null) {
                  campaign_id = ad_identifiers4.campaign_id;
                }
              }
              obj.campaign_id = campaign_id;
              let creative_id;
              if (closure_131_5 != null) {
                const ad_identifiers5 = closure_131_5.ad_identifiers;
                if (ad_identifiers5 != null) {
                  creative_id = ad_identifiers5.creative_id;
                }
              }
              obj.creative_id = creative_id;
              let creative_type;
              if (closure_131_5 != null) {
                const ad_identifiers6 = closure_131_5.ad_identifiers;
                if (ad_identifiers6 != null) {
                  creative_type = ad_identifiers6.creative_type;
                }
              }
              obj.creative_type = creative_type;
              obj.decision_id = body.request_id;
              ad_identifiers = undefined;
              if (closure_131_5 != null) {
                ad_identifiers = closure_131_5.ad_identifiers;
              }
              obj.is_targeted = null != ad_identifiers;
              obj7.adDecisionData = obj;
              let ad_context;
              if (closure_131_5 != null) {
                ad_context = closure_131_5.ad_context;
              }
              obj7.adContext = ad_context;
              let metadata_sealed;
              if (closure_131_5 != null) {
                metadata_sealed = closure_131_5.metadata_sealed;
              }
              obj7.metadataSealed = metadata_sealed;
              let prop;
              if (closure_131_5 != null) {
                prop = closure_131_5.traffic_metadata_sealed;
              }
              obj7.trafficMetadataSealed = prop;
              let prop1;
              if (closure_131_5 != null) {
                prop1 = closure_131_5.provenance_metadata_sealed;
              }
              obj7.provenanceMetadataSealed = prop1;
              obj7.placement = closure_131_1;
              obj7.fetchedAt = closure_131_2;
              obj17.dispatch(obj7);
              c6 = 0;
              const obj20 = closure_132_0(closure_132_2[9]);
            }
          }
        }
        const obj9 = { adCreativeId: closure_131_0, creativeType: null };
        let creative_type1;
        if (closure_131_6 != null) {
          creative_type1 = closure_131_6.creative_type;
        }
        obj9.creativeType = creative_type1;
        closure_132_9.error("Creative preview returned no renderable bounty", obj9);
        obj2 = closure_132_1(closure_132_2[7]);
        obj10 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: closure_131_1, error: null };
        const obj11 = { status: closure_131_3.status, body: closure_131_3.body };
        const tmp60 = new closure_132_1(closure_132_2[11])(obj11);
        obj10.error = tmp60;
        obj2.dispatch(obj10);
        c6 = 0;
        c8 = 3;
        const obj12 = { value: undefined, done: true };
        return obj12;
      }
      c8 = 3;
    } catch (tmp95) {
      closure_5 = tmp95;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp95;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_15 = async function _claimBountyReward() {
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = bountyId;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            let orRefreshAdSession;
            let adMetadataSealed;
            let adTrafficMetadataSealed;
            closure_130_6 = undefined;
            if (claimingBountyReward.isClaimingBountyReward(bountyId)) {
              c7 = 3;
            } else {
              let obj8 = DispatcherDefault;
              const obj1 = { type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId };
              obj8.dispatch(obj1);
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj2 = { value: SessionHeartbeatScheduler.getSession(), done: false };
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_7 = closure_4;
          const tmp32 = new closure_131_1(closure_131_2[11])(closure_130_7);
          closure_130_6 = tmp32;
          let obj6 = closure_131_1(closure_131_2[7]);
          const obj3 = { type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: closure_130_0, error: closure_130_6 };
          obj6.dispatch(obj3);
          throw closure_130_6;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_130_2 = value;
            orRefreshAdSession = closure_131_0(closure_131_2[13]).getOrRefreshAdSession();
            const obj15 = closure_131_0(closure_131_2[13]);
            adMetadataSealed = closure_131_0(closure_131_2[16]).getAdMetadataSealed(closure_130_1, closure_130_0);
            const obj16 = closure_131_0(closure_131_2[16]);
            adTrafficMetadataSealed = closure_131_0(closure_131_2[16]).getAdTrafficMetadataSealed(closure_130_1, undefined, closure_130_0);
            const HTTP = closure_131_0(closure_131_2[14]).HTTP;
            const request = { url: closure_131_8.QUESTS_CREATIVES_CLAIM_REWARD(closure_130_0), body: null, rejectWithError: false };
            let tmp15 = null;
            if (null != adMetadataSealed) {
              tmp15 = adMetadataSealed;
            }
            const obj5 = { decision_metadata_sealed: tmp15, traffic_metadata_sealed: null, client_ad_session_id: null, client_heartbeat_session_id: null };
            let tmp18 = null;
            if (null != adTrafficMetadataSealed) {
              tmp18 = adTrafficMetadataSealed;
            }
            obj5.traffic_metadata_sealed = tmp18;
            obj5.client_ad_session_id = orRefreshAdSession.uuid;
            let uuid;
            if (closure_130_2 != null) {
              uuid = closure_130_2.uuid;
            }
            obj5.client_heartbeat_session_id = uuid;
            request.body = obj5;
            c6 = 3;
            c7 = 1;
            obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj = closure_131_1(closure_131_2[7]);
          const obj7 = { type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId: closure_130_0 };
          obj.dispatch(obj7);
          c5 = 0;
        }
        c5 = 0;
        c7 = 3;
        obj8 = { value, done: true };
        return obj8;
      } catch (tmp45) {
        closure_4 = tmp45;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp45;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_16 = async function _dismissAdContent(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_0 = undefined;
          const adCreativeId = _require.adCreativeId;
          closure_130_0 = adCreativeId;
          const adCreativeType = _require.adCreativeType;
          if (obj16.isDismissible(closure_1)) {
            if (!dismissingContent.isDismissingContent(adCreativeId)) {
              let obj5 = DispatcherDefault;
              const obj1 = { type: "AD_CONTENT_DISMISS_BEGIN", adCreativeType, adCreativeId };
              obj5.dispatch(obj1);
              c5 = 1;
              let tmp55Result = QuestDataUtils;
              const adMetadataSealed = tmp55Result.getAdMetadataSealed(closure_1, adCreativeId);
              tmp55Result = QuestDataUtils;
              const adTrafficMetadataSealed = tmp55Result.getAdTrafficMetadataSealed(closure_1, undefined, adCreativeId);
              const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(closure_1);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.QUESTS_CREATIVES_DISMISS(adCreativeId), body: null, rejectWithError: false };
              let tmp42 = null;
              if (null != adMetadataSealed) {
                tmp42 = adMetadataSealed;
              }
              const obj2 = { decision_metadata_sealed: tmp42, traffic_metadata_sealed: null, placement: null, ad_creative_type: null };
              let tmp43 = null;
              if (null != adTrafficMetadataSealed) {
                tmp43 = adTrafficMetadataSealed;
              }
              obj2.traffic_metadata_sealed = tmp43;
              let tmp44 = null;
              if (null != questPlacementFromQuestContent) {
                tmp44 = questPlacementFromQuestContent;
              }
              obj2.placement = tmp44;
              obj2.ad_creative_type = adCreativeType;
              request.body = obj2;
              c6 = 2;
              c7 = 1;
              let obj3 = { value: HTTP.post(request), done: false };
              return obj3;
            }
          }
          obj16 = QuestDataUtils;
        }
      } else {
        if (1 === tmp8) {
          c5 = 0;
          closure_130_1 = closure_4;
          obj3 = closure_131_1(closure_131_2[7]);
          const obj4 = { type: "AD_CONTENT_DISMISS_FAILURE", adCreativeId: closure_130_0, error: null };
          const tmp27 = new closure_131_1(closure_131_2[11])(closure_130_1);
          obj4.error = tmp27;
          obj3.dispatch(obj4);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj = closure_131_1(closure_131_2[7]);
          obj5 = { type: "AD_CONTENT_DISMISS_SUCCESS", adCreativeId: closure_130_0 };
          obj.dispatch(obj5);
          c5 = 0;
        }
        c5 = 0;
        c7 = 3;
        const obj6 = { value, done: true };
        return obj6;
      }
      c7 = 3;
    } catch (tmp45) {
      closure_4 = tmp45;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp45;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_9 = new LoggerDefault("BountyActionCreators");
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/BountyActionCreators.tsx");

export const fetchQuestHomeBounties = function fetchQuestHomeBounties() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchBountyPreview = function fetchBountyPreview() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDockCreativePreview = function fetchDockCreativePreview() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setBountyVideoProgress = function setBountyVideoProgress(bountyId, arg1) {
  let obj = SessionAdGenerator;
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = SessionAdGenerator.getOrRefreshAdSession(true);
    const tmpResult = SessionAdGenerator;
    obj = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId, timestampSec: null, maxTimestampSec: null, duration: null };
    ({ timestampSec: obj4.timestampSec, maxTimestampSec: obj4.maxTimestampSec, duration: obj4.duration } = arg1);
    DispatcherDefault.dispatch(obj);
  }
};
export const claimBountyReward = function claimBountyReward() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissAdContent = function dismissAdContent() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
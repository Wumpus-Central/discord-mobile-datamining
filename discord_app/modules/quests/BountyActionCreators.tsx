// === Module 11862: BountyActionCreators ===

// Module 11862 (BountyActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import QuestTypes from "QuestTypes" /* 5752 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7791 */;
import QuestDataUtils from "QuestDataUtils" /* 8022 */;
import SessionAdGenerator from "SessionAdGenerator" /* 8044 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8023 */;
import NetworkStore from "NetworkStore" /* 4878 */;
import BountyStore from "BountyStore" /* 8025 */;
import QuestStore from "QuestStore" /* 8026 */;

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
    const obj6 = { type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE", placement: closure_130_0, error: null };
    obj6.error = new closure_131_1(closure_131_2[11])(closure_130_5);
    closure_131_1(closure_131_2[7]).dispatch(obj6);
    c7 = 3;
    closure_131_1(closure_131_2[7]);
    new closure_131_1(closure_131_2[11])(closure_130_5);
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
          const bountyFromServerResult = closure_0(request_id[9]).bountyFromServer(creative.creative.creative_content);
          const tmpResult = closure_0(request_id[9]);
          const obj = { fetchedAt, requestId: request_id.request_id, creative: null };
          const obj2 = { type: closure_0(request_id[8]).AdCreativeType.BOUNTY, bounty: bountyFromServerResult };
          obj.creative = obj2;
          const result = closure_1_3.set(bountyFromServerResult.id, closure_0(request_id[10]).questAdDecisionFromAdDecision(creative, obj));
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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else if (!BountyStore.isFetchingQuestHomeBounties) {
          c2 = 1;
          c1 = 1;
          const obj4 = {
            value: fetchBountiesAndDispatch(tmp5, asyncGeneratorStep(async () => {
                      await tmp2(7791).getSession();
                      closure_128_0 = value;
                      const orRefreshAdSession = tmp2(8044).getOrRefreshAdSession();
                      const HTTP = tmp2(1271).HTTP;
                      const request = { url: constants.QUESTS_GET_DECISIONS, query: null, rejectWithError: false, context: null };
                      const obj7 = { placement: closure_129_0, client_ad_session_id: orRefreshAdSession.uuid, client_heartbeat_session_id: null, num_decisions_requested: 5 };
                      if (closure_128_0 != null) {
                        const uuid = closure_128_0.uuid;
                      }
                      obj7.client_heartbeat_session_id = uuid;
                      request.query = obj7;
                      request.context = { connection_type: type.getType() };
                      await HTTP.get(request);
                      return value.body;
                    })),
            done: false
          };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else if (!BountyStore.isFetchingQuestHomeBounties) {
          c3 = 1;
          c2 = 1;
          const obj4 = {
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
          return obj4;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj = { value, done: true };
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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
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
            const obj5 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: MOBILE_HOME_DOCK_AREA };
            DispatcherDefault.dispatch(obj5);
            c6 = 1;
            const _URLSearchParams = URLSearchParams;
            const items = ["ad_creative_ids", closure_0];
            const items1 = [items, ];
            const _String = String;
            const items2 = ["placement", String(MOBILE_HOME_DOCK_AREA)];
            items1[1] = items2;
            const str = new URLSearchParams(items1);
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: null, rejectWithError: false };
            const _HermesInternal = HermesInternal;
            obj6.url = "" + constants.QUESTS_CREATIVE_PREVIEW + "?" + str.toString();
            c7 = 2;
            c8 = 1;
            const obj7 = { value: HTTP.get(obj6), done: false };
            return obj7;
          }
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          closure_131_7 = closure_5;
          const obj8 = { error: closure_131_7, adCreativeId: closure_131_0, status: null };
          let status;
          if (closure_131_7 != null) {
            status = closure_131_7.status;
          }
          obj8.status = status;
          closure_132_9.error("Failed to fetch dock creative preview for adCreativeId", obj8);
          const obj10 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: closure_131_1, error: null };
          const tmp82 = new closure_132_1(closure_132_2[11])(closure_131_7);
          obj10.error = tmp82;
          closure_132_1(closure_132_2[7]).dispatch(obj10);
          const obj9 = closure_132_1(closure_132_2[7]);
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj12 = { value, done: true };
          return obj12;
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
              const obj13 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS", creative: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null, responseTtlSeconds: 300, placement: null, fetchedAt: null };
              const obj14 = { type: closure_132_0(closure_132_2[8]).AdCreativeType.BOUNTY, bounty: null };
              const obj17 = closure_132_1(closure_132_2[7]);
              obj14.bounty = closure_132_0(closure_132_2[9]).bountyFromServer(closure_131_6.creative_content);
              obj13.creative = obj14;
              let ad_id;
              if (closure_131_5 != null) {
                const ad_identifiers = closure_131_5.ad_identifiers;
                if (ad_identifiers != null) {
                  ad_id = ad_identifiers.ad_id;
                }
              }
              const obj = { ad_id, adset_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
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
              let ad_identifiers1;
              if (closure_131_5 != null) {
                ad_identifiers1 = closure_131_5.ad_identifiers;
              }
              obj.is_targeted = null != ad_identifiers1;
              obj13.adDecisionData = obj;
              let ad_context;
              if (closure_131_5 != null) {
                ad_context = closure_131_5.ad_context;
              }
              obj13.adContext = ad_context;
              let metadata_sealed;
              if (closure_131_5 != null) {
                metadata_sealed = closure_131_5.metadata_sealed;
              }
              obj13.metadataSealed = metadata_sealed;
              let prop;
              if (closure_131_5 != null) {
                prop = closure_131_5.traffic_metadata_sealed;
              }
              obj13.trafficMetadataSealed = prop;
              let prop1;
              if (closure_131_5 != null) {
                prop1 = closure_131_5.provenance_metadata_sealed;
              }
              obj13.provenanceMetadataSealed = prop1;
              obj13.placement = closure_131_1;
              obj13.fetchedAt = closure_131_2;
              obj17.dispatch(obj13);
              c6 = 0;
              const obj20 = closure_132_0(closure_132_2[9]);
            }
          }
        }
        const obj15 = { adCreativeId: closure_131_0, creativeType: null };
        let creative_type1;
        if (closure_131_6 != null) {
          creative_type1 = closure_131_6.creative_type;
        }
        obj15.creativeType = creative_type1;
        closure_132_9.error("Creative preview returned no renderable bounty", obj15);
        const obj16 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: closure_131_1, error: null };
        const obj18 = { status: closure_131_3.status, body: closure_131_3.body };
        const tmp60 = new closure_132_1(closure_132_2[11])(obj18);
        obj16.error = tmp60;
        closure_132_1(closure_132_2[7]).dispatch(obj16);
        c6 = 0;
        c8 = 3;
        const obj19 = { value: undefined, done: true };
        return obj19;
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
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
              const obj4 = { type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId };
              DispatcherDefault.dispatch(obj4);
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj5 = { value: SessionHeartbeatScheduler.getSession(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_7 = closure_4;
          const tmp32 = new closure_131_1(closure_131_2[11])(closure_130_7);
          closure_130_6 = tmp32;
          const obj6 = { type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: closure_130_0, error: closure_130_6 };
          closure_131_1(closure_131_2[7]).dispatch(obj6);
          throw closure_130_6;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
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
            const obj10 = { decision_metadata_sealed: tmp15, traffic_metadata_sealed: null, client_ad_session_id: null, client_heartbeat_session_id: null };
            let tmp18 = null;
            if (null != adTrafficMetadataSealed) {
              tmp18 = adTrafficMetadataSealed;
            }
            obj10.traffic_metadata_sealed = tmp18;
            obj10.client_ad_session_id = orRefreshAdSession.uuid;
            let uuid;
            if (closure_130_2 != null) {
              uuid = closure_130_2.uuid;
            }
            obj10.client_heartbeat_session_id = uuid;
            request.body = obj10;
            c6 = 3;
            c7 = 1;
            const obj12 = { value: HTTP.post(request), done: false };
            return obj12;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const obj13 = { type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId: closure_130_0 };
          closure_131_1(closure_131_2[7]).dispatch(obj13);
          c5 = 0;
          const obj = closure_131_1(closure_131_2[7]);
        }
        c5 = 0;
        c7 = 3;
        const obj14 = { value, done: true };
        return obj14;
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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_0 = undefined;
          const adCreativeId = _require.adCreativeId;
          closure_130_0 = adCreativeId;
          const adCreativeType = _require.adCreativeType;
          if (obj16.isDismissible(closure_1)) {
            if (!dismissingContent.isDismissingContent(adCreativeId)) {
              const obj5 = { type: "AD_CONTENT_DISMISS_BEGIN", adCreativeType, adCreativeId };
              DispatcherDefault.dispatch(obj5);
              c5 = 1;
              const adMetadataSealed = QuestDataUtils.getAdMetadataSealed(closure_1, adCreativeId);
              const tmp55Result = QuestDataUtils;
              const adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(closure_1, undefined, adCreativeId);
              const tmp55Result3 = QuestDataUtils;
              const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(closure_1);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.QUESTS_CREATIVES_DISMISS(adCreativeId), body: null, rejectWithError: false };
              let tmp42 = null;
              if (null != adMetadataSealed) {
                tmp42 = adMetadataSealed;
              }
              const obj7 = { decision_metadata_sealed: tmp42, traffic_metadata_sealed: null, placement: null, ad_creative_type: null };
              let tmp43 = null;
              if (null != adTrafficMetadataSealed) {
                tmp43 = adTrafficMetadataSealed;
              }
              obj7.traffic_metadata_sealed = tmp43;
              let tmp44 = null;
              if (null != questPlacementFromQuestContent) {
                tmp44 = questPlacementFromQuestContent;
              }
              obj7.placement = tmp44;
              obj7.ad_creative_type = adCreativeType;
              request.body = obj7;
              c6 = 2;
              c7 = 1;
              const obj8 = { value: HTTP.post(request), done: false };
              return obj8;
            }
          }
          obj16 = QuestDataUtils;
        }
      } else {
        if (1 === tmp8) {
          c5 = 0;
          closure_130_1 = closure_4;
          const obj9 = { type: "AD_CONTENT_DISMISS_FAILURE", adCreativeId: closure_130_0, error: null };
          const tmp27 = new closure_131_1(closure_131_2[11])(closure_130_1);
          obj9.error = tmp27;
          closure_131_1(closure_131_2[7]).dispatch(obj9);
          const obj4 = closure_131_1(closure_131_2[7]);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const obj10 = { type: "AD_CONTENT_DISMISS_SUCCESS", adCreativeId: closure_130_0 };
          closure_131_1(closure_131_2[7]).dispatch(obj10);
          c5 = 0;
          const obj = closure_131_1(closure_131_2[7]);
        }
        c5 = 0;
        c7 = 3;
        const obj11 = { value, done: true };
        return obj11;
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
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = SessionAdGenerator.getOrRefreshAdSession(true);
    const tmpResult = SessionAdGenerator;
    const obj2 = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId, timestampSec: null, maxTimestampSec: null, duration: null };
    ({ timestampSec: obj4.timestampSec, maxTimestampSec: obj4.maxTimestampSec, duration: obj4.duration } = arg1);
    DispatcherDefault.dispatch(obj2);
  }
  obj = SessionAdGenerator;
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
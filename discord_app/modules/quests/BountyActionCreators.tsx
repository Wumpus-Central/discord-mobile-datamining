// === Module 12923: BountyActionCreators ===

// Module 12923 (BountyActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import QuestTypes from "QuestTypes" /* 5982 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7177 */;
import QuestDataUtils from "QuestDataUtils" /* 7380 */;
import SessionAdGenerator from "SessionAdGenerator" /* 7403 */;
import BountiesDesktopQuestBarExperiment2 from "BountiesDesktopQuestBarExperiment" /* 12924 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7381 */;
import NetworkStore from "NetworkStore" /* 5281 */;
import BountyStore from "BountyStore" /* 7383 */;
import QuestStore from "QuestStore" /* 7384 */;

require = fn;
function fetchBountiesAndDispatch() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _fetchBountiesAndDispatch(arg0) {
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
    obj6.error = new closure_131_1(closure_131_2[12])(closure_130_5);
    closure_131_1(closure_131_2[8]).dispatch(obj6);
    c7 = 3;
    closure_131_1(closure_131_2[8]);
    new closure_131_1(closure_131_2[12])(closure_130_5);
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
        if (creative.creative.creative_type === closure_0(request_id[9]).AdCreativeType.BOUNTY) {
          const bountyFromServerResult = closure_0(request_id[10]).bountyFromServer(creative.creative.creative_content);
          const tmpResult = closure_0(request_id[10]);
          const obj = { fetchedAt, requestId: request_id.request_id, creative: null };
          const obj2 = { type: closure_0(request_id[9]).AdCreativeType.BOUNTY, bounty: bountyFromServerResult };
          obj.creative = obj2;
          const result = closure_1_3.set(bountyFromServerResult.id, closure_0(request_id[11]).questAdDecisionFromAdDecision(creative, obj));
          const items = [bountyFromServerResult];
          return items;
        }
      }
      return [];
    });
    closure_131_1(closure_131_2[8]).dispatch({ type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS", bounties: closure_130_4, placement: closure_130_0, adDecisionsByAdCreativeId: closure_130_3, fetchedAt: closure_130_1 });
    c5 = 0;
    closure_131_1(closure_131_2[8]);
    new Map();
  }
  return value;
};
let closure_13 = async function _fetchQuestHomeBounties(arg0) {
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
      return { value: "IconComponent", done: null };
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
                      await tmp2(7177).getSession();
                      closure_128_0 = value;
                      const orRefreshAdSession = tmp2(7403).getOrRefreshAdSession();
                      const HTTP = tmp2(1295).HTTP;
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
      return { value: "IconComponent", done: null };
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
let closure_14 = async function _fetchBountyPreview(arg0) {
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
      return { value: "IconComponent", done: null };
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
                      const HTTP = closure_0(c2[15]).HTTP;
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
      return { value: "IconComponent", done: null };
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
};
let closure_15 = async function _fetchQuestBarCreativePreview(arg0) {
  closure_0 = arg0;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp5;
            closure_132_0 = closure_0;
            closure_132_1 = placement;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            let body;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            closure_132_7 = undefined;
            const _Date = Date;
            closure_132_2 = Date.now();
            if (fetchingAdToDeliverByPlacement.isFetchingAdToDeliverByPlacement(placement)) {
              c9 = 3;
              return { value: null, done: true };
            } else {
              if (placement === QuestTypes.AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA) {
                const BountiesDesktopQuestBarExperiment = BountiesDesktopQuestBarExperiment2.BountiesDesktopQuestBarExperiment;
                const obj5 = { location: constants.BOUNTY_PREVIEW_LINK };
                if (!BountiesDesktopQuestBarExperiment.getConfig(obj5).enabled) {
                  c9 = 3;
                  return { value: null, done: true };
                }
              }
              const obj6 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement };
              DispatcherDefault.dispatch(obj6);
              c7 = 1;
              const _URLSearchParams = URLSearchParams;
              const items = ["ad_creative_ids", closure_0];
              const items1 = [items, ];
              const _String = String;
              const items2 = ["placement", String(placement)];
              items1[1] = items2;
              const str = new URLSearchParams(items1);
              const HTTP = HTTPUtils.HTTP;
              const obj7 = { url: null, rejectWithError: false };
              const _HermesInternal = HermesInternal;
              obj7.url = "" + constants2.QUESTS_CREATIVE_PREVIEW + "?" + str.toString();
              c8 = 2;
              c9 = 1;
              const obj8 = { value: HTTP.get(obj7), done: false };
              return obj8;
            }
          }
        } else if (1 === tmp8) {
          c7 = 0;
          closure_132_8 = closure_6;
          const obj10 = { error: closure_132_8, adCreativeId: closure_132_0, status: null };
          let status;
          if (closure_132_8 != null) {
            status = closure_132_8.status;
          }
          obj10.status = status;
          closure_133_10.error("Failed to fetch dock creative preview for adCreativeId", obj10);
          const obj11 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: closure_132_1, error: null };
          const tmp82 = new closure_133_1(closure_133_2[12])(closure_132_8);
          obj11.error = tmp82;
          closure_133_1(closure_133_2[8]).dispatch(obj11);
          c9 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_132_3 = value;
          body = closure_132_3.body;
          const decisions = body.decisions;
          let first;
          if (decisions != null) {
            first = decisions[0];
          }
          c2 = first;
          if (first == null) {
            c2 = null;
          }
          closure_132_5 = c2;
          let creative;
          if (closure_132_5 != null) {
            creative = closure_132_5.creative;
          }
          c3 = creative;
          if (creative == null) {
            c3 = null;
          }
          closure_132_6 = c3;
          if (null != closure_132_6) {
            if (closure_132_6.creative_type === closure_133_0(closure_133_2[9]).AdCreativeType.BOUNTY) {
              closure_132_7 = closure_133_0(closure_133_2[10]).bountyFromServer(closure_132_6.creative_content);
              const obj18 = closure_133_0(closure_133_2[10]);
              const obj14 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS", creative: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null, responseTtlSeconds: 300, placement: null, fetchedAt: null };
              const obj15 = { type: closure_133_0(closure_133_2[9]).AdCreativeType.BOUNTY, bounty: closure_132_7 };
              obj14.creative = obj15;
              let ad_id;
              if (closure_132_5 != null) {
                const ad_identifiers = closure_132_5.ad_identifiers;
                if (ad_identifiers != null) {
                  ad_id = ad_identifiers.ad_id;
                }
              }
              const obj = { ad_id, adset_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
              let adset_id;
              if (closure_132_5 != null) {
                const ad_identifiers2 = closure_132_5.ad_identifiers;
                if (ad_identifiers2 != null) {
                  adset_id = ad_identifiers2.adset_id;
                }
              }
              obj.adset_id = adset_id;
              let ad_set_id;
              if (closure_132_5 != null) {
                const ad_identifiers3 = closure_132_5.ad_identifiers;
                if (ad_identifiers3 != null) {
                  ad_set_id = ad_identifiers3.ad_set_id;
                }
              }
              obj.ad_set_id = ad_set_id;
              let campaign_id;
              if (closure_132_5 != null) {
                const ad_identifiers4 = closure_132_5.ad_identifiers;
                if (ad_identifiers4 != null) {
                  campaign_id = ad_identifiers4.campaign_id;
                }
              }
              obj.campaign_id = campaign_id;
              let creative_id;
              if (closure_132_5 != null) {
                const ad_identifiers5 = closure_132_5.ad_identifiers;
                if (ad_identifiers5 != null) {
                  creative_id = ad_identifiers5.creative_id;
                }
              }
              obj.creative_id = creative_id;
              let creative_type;
              if (closure_132_5 != null) {
                const ad_identifiers6 = closure_132_5.ad_identifiers;
                if (ad_identifiers6 != null) {
                  creative_type = ad_identifiers6.creative_type;
                }
              }
              obj.creative_type = creative_type;
              obj.decision_id = body.request_id;
              let ad_identifiers1;
              if (closure_132_5 != null) {
                ad_identifiers1 = closure_132_5.ad_identifiers;
              }
              obj.is_targeted = null != ad_identifiers1;
              obj14.adDecisionData = obj;
              let ad_context;
              if (closure_132_5 != null) {
                ad_context = closure_132_5.ad_context;
              }
              obj14.adContext = ad_context;
              let metadata_sealed;
              if (closure_132_5 != null) {
                metadata_sealed = closure_132_5.metadata_sealed;
              }
              obj14.metadataSealed = metadata_sealed;
              let prop;
              if (closure_132_5 != null) {
                prop = closure_132_5.traffic_metadata_sealed;
              }
              obj14.trafficMetadataSealed = prop;
              let prop1;
              if (closure_132_5 != null) {
                prop1 = closure_132_5.provenance_metadata_sealed;
              }
              obj14.provenanceMetadataSealed = prop1;
              obj14.placement = closure_132_1;
              obj14.fetchedAt = closure_132_2;
              closure_133_1(closure_133_2[8]).dispatch(obj14);
              c7 = 0;
              c9 = 3;
              const obj16 = { value: closure_132_7, done: true };
              return obj16;
            }
          }
          const obj17 = { adCreativeId: closure_132_0, creativeType: null };
          let creative_type1;
          if (closure_132_6 != null) {
            creative_type1 = closure_132_6.creative_type;
          }
          obj17.creativeType = creative_type1;
          closure_133_10.error("Creative preview returned no renderable bounty", obj17);
          const obj20 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: closure_132_1, error: null };
          const obj21 = { status: closure_132_3.status, body: closure_132_3.body };
          const tmp60 = new closure_133_1(closure_133_2[12])(obj21);
          obj20.error = tmp60;
          closure_133_1(closure_133_2[8]).dispatch(obj20);
          c7 = 0;
          c9 = 3;
          return { value: null, done: true };
        }
      } catch (tmp100) {
        closure_6 = tmp100;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp100;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
let closure_16 = async function _claimBountyReward() {
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
        return { value: "IconComponent", done: null };
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
          const tmp32 = new closure_131_1(closure_131_2[12])(closure_130_7);
          closure_130_6 = tmp32;
          const obj6 = { type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: closure_130_0, error: closure_130_6 };
          closure_131_1(closure_131_2[8]).dispatch(obj6);
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
            orRefreshAdSession = closure_131_0(closure_131_2[14]).getOrRefreshAdSession();
            const obj15 = closure_131_0(closure_131_2[14]);
            adMetadataSealed = closure_131_0(closure_131_2[18]).getAdMetadataSealed(closure_130_1, closure_130_0);
            const obj16 = closure_131_0(closure_131_2[18]);
            adTrafficMetadataSealed = closure_131_0(closure_131_2[18]).getAdTrafficMetadataSealed(closure_130_1, undefined, closure_130_0);
            const HTTP = closure_131_0(closure_131_2[15]).HTTP;
            const request = { url: closure_131_9.QUESTS_CREATIVES_CLAIM_REWARD(closure_130_0), body: null, rejectWithError: false };
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
          closure_131_1(closure_131_2[8]).dispatch(obj13);
          c5 = 0;
          const obj = closure_131_1(closure_131_2[8]);
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
let closure_17 = async function _dismissAdContent(arg0) {
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
      return { value: "IconComponent", done: null };
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
          const tmp27 = new closure_131_1(closure_131_2[12])(closure_130_1);
          obj9.error = tmp27;
          closure_131_1(closure_131_2[8]).dispatch(obj9);
          const obj4 = closure_131_1(closure_131_2[8]);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const obj10 = { type: "AD_CONTENT_DISMISS_SUCCESS", adCreativeId: closure_130_0 };
          closure_131_1(closure_131_2[8]).dispatch(obj10);
          c5 = 0;
          const obj = closure_131_1(closure_131_2[8]);
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
let closure_18 = async function _resetCreativePreviewDeliveryState(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            closure_2 = tmp5;
            closure_130_0 = closure_0;
            let tmp12;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.ADS_CREATIVES_PREVIEW_DELIVERY_STATE(closure_0), query: null, rejectWithError: false };
            if (null != placement) {
              const obj4 = { placement };
              tmp12 = obj4;
            }
            request.query = tmp12;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: HTTP.del(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj7 = { type: "ADS_CREATIVE_PREVIEW_DELIVERY_STATE_RESET", adCreativeId: closure_130_0 };
          closure_131_1(closure_131_2[8]).dispatch(obj7);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c5 = tmp;
        throw tmp13;
      }
    }
  })();
};
let closure_19 = async function _resetPreviewDeliveryStateLookback() {
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp2;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.ADS_CREATIVES_PREVIEW_DELIVERY_STATE_LOOKBACK, query: null, rejectWithError: false };
            const obj4 = { lookback_minutes };
            request.query = obj4;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: HTTP.del(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_1(closure_129_2[8]).dispatch({ type: "ADS_PREVIEW_DELIVERY_STATE_LOOKBACK_RESET" });
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  })();
};
const QuestsExperimentLocations = fn(5979).QuestsExperimentLocations;
const Endpoints = fn(1085).Endpoints;
let closure_10 = new LoggerDefault("BountyActionCreators");
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/BountyActionCreators.tsx");

export const fetchQuestHomeBounties = function fetchQuestHomeBounties() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchBountyPreview = function fetchBountyPreview() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestBarCreativePreview = function fetchQuestBarCreativePreview() {
  const self = this;
  const apply = closure_15.apply;
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
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissAdContent = function dismissAdContent() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetCreativePreviewDeliveryState = function resetCreativePreviewDeliveryState() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetPreviewDeliveryStateLookback = function resetPreviewDeliveryStateLookback() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
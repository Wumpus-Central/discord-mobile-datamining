// discord_app/modules/quests/BountyActionCreators.tsx
import timestampDefault from "../debug/Logger.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import getOrRefreshAdSession from "../analytics_sessions/SessionAdGenerator.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../ads/AdDeliveryStore.tsx";
import closure_5 from "../../stores/NetworkStore.tsx";
import closure_6 from "BountyStore.tsx";
import closure_7 from "QuestStore.tsx";
import { Endpoints } from "../../Constants.tsx";

require = arg1;
function fetchBountiesAndDispatch() {
  const self = this;
  const apply = _fetchBountiesAndDispatch.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchBountiesAndDispatch() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
      let map = tmp3;
      let decisions = tmp5;
      callback(closure_1_2[7]).dispatch({ type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN" });
      c5 = 1;
      const _Date = Date;
      callback = Date.now();
      yield callback();
      if (1 === tmp8) {
        c5 = 0;
        c5 = closure_4;
        obj1 = callback(decisions[7]);
        const obj2 = { type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE", placement: null, error: null };
        obj2[1] = closure_0;
        const tmp21 = new callback(decisions[11])(c5);
        obj2[2] = tmp21;
        obj1.dispatch(obj2);
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        decisions = arg1;
        const _Map = Map;
        map = new Map();
        decisions = decisions.decisions;
        closure_4 = decisions.flatMap((creative) => {
          if (null != creative.creative) {
            if (creative.creative.creative_type === callback(request_id[8]).AdCreativeType.BOUNTY) {
              let tmpResult = tmp(tmp2[9]);
              const bountyFromServerResult = tmpResult.bountyFromServer(creative.creative.creative_content);
              tmpResult = tmp(tmp2[10]);
              let obj = { fetchedAt: null, requestId: null, creative: null };
              obj[0] = closure_1;
              obj[1] = request_id.request_id;
              obj = { type: null, bounty: null };
              obj[0] = tmp(tmp2[8]).AdCreativeType.BOUNTY;
              obj[1] = bountyFromServerResult;
              obj[2] = obj;
              const result = map.set(bountyFromServerResult.id, tmpResult.questAdDecisionFromAdDecision(creative, obj));
              const items = [bountyFromServerResult];
              return items;
            }
          }
          return [];
        });
        const obj3 = {
          type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS",
          bounties: null,
          placement: null,
          adDecisionsByAdCreativeId: null,
          fetchedAt: null,
        };
        obj3[1] = closure_4;
        obj3[2] = closure_0;
        obj3[3] = map;
        obj3[4] = callback;
        callback(decisions[7]).dispatch(obj3);
        c5 = 0;
        const obj7 = callback(decisions[7]);
      }
      c5 = 0;
      return arg1;
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchQuestHomeBounties() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (!closure_1_6.isFetchingQuestHomeBounties) {
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_10(
                tmp5,
                closure_1_3(function* () {
                  let uuid = tmp2;
                  let obj5 = closure_1_0(7461);
                  uuid = yield obj5.getSession();
                  const uuid2 = closure_1_0(7721).getOrRefreshAdSession();
                  const HTTP = closure_1_0(1272).HTTP;
                  const obj3 = { url: null, query: null, rejectWithError: false, context: null };
                  obj3[0] = closure_1_8.QUESTS_GET_DECISIONS;
                  const obj4 = {
                    placement: null,
                    client_ad_session_id: null,
                    client_heartbeat_session_id: null,
                    num_decisions_requested: 5,
                  };
                  obj4[0] = uuid;
                  obj4[1] = uuid2.uuid;
                  if (uuid != null) {
                    uuid = uuid.uuid;
                  }
                  obj4[2] = uuid;
                  obj3[1] = obj4;
                  obj5 = { connection_type: null };
                  obj5[0] = closure_1_5.getType();
                  obj3[3] = obj5;
                  yield HTTP.get(obj3);
                  return arg1.body;
                }),
              );
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchBountyPreview() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function* (arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c2 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (!closure_1_6.isFetchingQuestHomeBounties) {
              v0 = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_10(
                tmp6,
                v0(function* () {
                  const _URLSearchParams = URLSearchParams;
                  closure_0 = 0;
                  let items = [];
                  closure_0 = HermesBuiltin.arraySpread(
                    closure_1_0.map((arg0) => {
                      const items = ["ad_creative_ids", arg0];
                      return items;
                    }),
                    closure_0,
                  );
                  const _String = String;
                  const items1 = ["placement", String(c1)];
                  items[closure_0] = items1;
                  closure_0 = closure_0 + 1;
                  const str2 = new URLSearchParams(items);
                  const HTTP = closure_1_0(table[14]).HTTP;
                  obj1 = { url: null, rejectWithError: false };
                  const _HermesInternal = HermesInternal;
                  obj1[0] = "" + closure_1_8.QUESTS_CREATIVE_PREVIEW + "?" + str2.toString();
                  yield HTTP.get(obj1);
                  return arg1.body;
                }),
              );
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchDockCreativePreview() {
  const self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function* (arg0) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else {
        let tmp = arg1;
        tmp = arg0;
        tmp = tmp6;
        tmp = globalThis;
        tmp = null;
        if (tmp7 === 3) {
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
            constants = 2;
            if (0 === status) {
              if (arg0 === 1) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                constants = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let body = tmp3;
                closure_3 = tmp5;
                let callback2;
                dependencyMap = undefined;
                closure_3 = undefined;
                body = undefined;
                closure_5 = undefined;
                c6 = undefined;
                tmp = callback;
                tmp = closure_1_2;
                tmp = callback;
                const MOBILE_HOME_DOCK_AREA = callback(closure_1_2[15]).AdPlacement.MOBILE_HOME_DOCK_AREA;
                callback2 = MOBILE_HOME_DOCK_AREA;
                const _Date = Date;
                dependencyMap = Date.now();
                tmp = closure_1_4;
                if (!closure_1_4.isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
                  let obj10 = closure_1_1(closure_1_2[7]);
                  obj1 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: null };
                  obj1[1] = MOBILE_HOME_DOCK_AREA;
                  obj10.dispatch(obj1);
                  c6 = 1;
                  const _URLSearchParams = URLSearchParams;
                  const items = ["ad_creative_ids", tmp];
                  const items1 = [items];
                  const _String = String;
                  const items2 = ["placement", String(MOBILE_HOME_DOCK_AREA)];
                  items1[1] = items2;
                  const str = new URLSearchParams(items1);
                  const HTTP = callback(closure_1_2[14]).HTTP;
                  let obj2 = { url: null, rejectWithError: false };
                  const _HermesInternal = HermesInternal;
                  obj2[0] = "" + constants.QUESTS_CREATIVE_PREVIEW + "?" + str.toString();
                  status = 2;
                  constants = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = HTTP.get(obj2);
                  return obj3;
                }
              }
            } else {
              if (1 === tmp8) {
                c6 = 0;
                status = closure_5;
                const obj4 = { error: null, adCreativeId: null, status: null };
                obj4[0] = status;
                obj4[1] = callback;
                status = undefined;
                if (status != null) {
                  status = status.status;
                }
                obj4[2] = status;
                logger.error("Failed to fetch dock creative preview for adCreativeId", obj4);
                let obj8 = callback2(573);
                const obj5 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: null, error: null };
                obj5[1] = callback2;
                const tmp82 = new callback2(4462)(status);
                obj5[2] = tmp82;
                obj8.dispatch(obj5);
              } else if (arg0 === 1) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                constants = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                tmp = closure_3;
                closure_3 = arg1;
                tmp = closure_3;
                body = closure_3.body;
                tmp = body;
                const decisions = body.decisions;
                let first;
                if (decisions != null) {
                  first = decisions[0];
                }
                callback2 = first;
                if (first == null) {
                  callback2 = null;
                }
                closure_5 = callback2;
                let creative;
                if (closure_5 != null) {
                  creative = closure_5.creative;
                }
                dependencyMap = creative;
                if (creative == null) {
                  dependencyMap = null;
                }
                c6 = dependencyMap;
                if (null != c6) {
                  tmp = closure_3;
                  tmp = body;
                  tmp = c6;
                  tmp = callback;
                  tmp = dependencyMap;
                  if (c6.creative_type === callback(5451).AdCreativeType.BOUNTY) {
                    tmp = closure_3;
                    tmp = body;
                    tmp = callback2;
                    tmp = dependencyMap;
                    const obj7 = {
                      type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                      creative: null,
                      adDecisionData: null,
                      adContext: null,
                      metadataSealed: null,
                      trafficMetadataSealed: null,
                      provenanceMetadataSealed: null,
                      responseTtlSeconds: 300,
                      placement: null,
                      fetchedAt: null,
                    };
                    obj8 = { type: null, bounty: null };
                    tmp = callback;
                    tmp = dependencyMap;
                    obj8[0] = callback(5451).AdCreativeType.BOUNTY;
                    tmp = callback;
                    tmp = dependencyMap;
                    const obj17 = callback2(573);
                    tmp = c6;
                    obj8[1] = callback(11284).bountyFromServer(c6.creative_content);
                    obj7[1] = obj8;
                    let ad_id;
                    if (closure_5 != null) {
                      let ad_identifiers = closure_5.ad_identifiers;
                      if (ad_identifiers != null) {
                        ad_id = ad_identifiers.ad_id;
                      }
                    }
                    obj = {
                      ad_id: null,
                      adset_id: null,
                      ad_set_id: null,
                      campaign_id: null,
                      creative_id: null,
                      creative_type: null,
                      decision_id: null,
                      is_targeted: null,
                    };
                    obj[0] = ad_id;
                    let adset_id;
                    if (closure_5 != null) {
                      const ad_identifiers2 = closure_5.ad_identifiers;
                      if (ad_identifiers2 != null) {
                        adset_id = ad_identifiers2.adset_id;
                      }
                    }
                    obj[1] = adset_id;
                    let ad_set_id;
                    if (closure_5 != null) {
                      const ad_identifiers3 = closure_5.ad_identifiers;
                      if (ad_identifiers3 != null) {
                        ad_set_id = ad_identifiers3.ad_set_id;
                      }
                    }
                    obj[2] = ad_set_id;
                    let campaign_id;
                    if (closure_5 != null) {
                      const ad_identifiers4 = closure_5.ad_identifiers;
                      if (ad_identifiers4 != null) {
                        campaign_id = ad_identifiers4.campaign_id;
                      }
                    }
                    obj[3] = campaign_id;
                    let creative_id;
                    if (closure_5 != null) {
                      const ad_identifiers5 = closure_5.ad_identifiers;
                      if (ad_identifiers5 != null) {
                        creative_id = ad_identifiers5.creative_id;
                      }
                    }
                    obj[4] = creative_id;
                    let creative_type;
                    if (closure_5 != null) {
                      const ad_identifiers6 = closure_5.ad_identifiers;
                      if (ad_identifiers6 != null) {
                        creative_type = ad_identifiers6.creative_type;
                      }
                    }
                    obj[5] = creative_type;
                    obj[6] = body.request_id;
                    ad_identifiers = undefined;
                    if (closure_5 != null) {
                      ad_identifiers = closure_5.ad_identifiers;
                    }
                    obj[7] = null != ad_identifiers;
                    obj7[2] = obj;
                    let ad_context;
                    if (closure_5 != null) {
                      ad_context = closure_5.ad_context;
                    }
                    obj7[3] = ad_context;
                    let metadata_sealed;
                    if (closure_5 != null) {
                      metadata_sealed = closure_5.metadata_sealed;
                    }
                    obj7[4] = metadata_sealed;
                    let prop;
                    if (closure_5 != null) {
                      prop = closure_5.traffic_metadata_sealed;
                    }
                    obj7[5] = prop;
                    let prop1;
                    if (closure_5 != null) {
                      prop1 = closure_5.provenance_metadata_sealed;
                    }
                    obj7[6] = prop1;
                    obj7[8] = callback2;
                    obj7[9] = dependencyMap;
                    obj17.dispatch(obj7);
                    c6 = 0;
                    const obj20 = callback(11284);
                  }
                }
              }
              const obj9 = { adCreativeId: null, creativeType: null };
              obj9[0] = callback;
              let creative_type1;
              if (c6 != null) {
                creative_type1 = c6.creative_type;
              }
              obj9[1] = creative_type1;
              logger.error("Creative preview returned no renderable bounty", obj9);
              obj2 = callback2(573);
              obj10 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: null, error: null };
              obj10[1] = callback2;
              const obj11 = { status: null, body: null };
              obj11[0] = closure_3.status;
              obj11[1] = closure_3.body;
              const tmp60 = new callback2(4462)(obj11);
              obj10[2] = tmp60;
              obj2.dispatch(obj10);
              c6 = 0;
              constants = 3;
              const obj12 = { value: null, done: true };
              obj12[0] = undefined;
              return obj12;
            }
            constants = 3;
          } catch (tmp95) {
            closure_5 = tmp95;
            if (tmp4 === c6) {
              constants = tmp2;
              throw tmp95;
            } else {
              status = tmp;
            }
          }
        }
      }
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _claimBountyReward() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === claimingBountyReward) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let uuid2 = tmp3;
              let uuid = tmp7;
              uuid = undefined;
              uuid2 = undefined;
              let adMetadataSealed;
              let adTrafficMetadataSealed;
              claimingBountyReward = undefined;
              if (claimingBountyReward.isClaimingBountyReward(callback)) {
                c7 = 3;
              } else {
                let obj8 = callback2(closure_1_2[7]);
                obj1 = { type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId: null };
                obj1[1] = tmp71;
                obj8.dispatch(obj1);
                adTrafficMetadataSealed = 1;
                claimingBountyReward = 2;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(closure_1_2[12]).getSession();
                return obj2;
              }
              tmp71 = callback;
            }
          } else if (1 === tmp7) {
            adTrafficMetadataSealed = 0;
            c7 = adMetadataSealed;
            const tmp32 = new callback2(uuid[11])(c7);
            claimingBountyReward = tmp32;
            let obj6 = callback2(uuid[7]);
            const obj3 = { type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: null, error: null };
            obj3[1] = callback;
            obj3[2] = claimingBountyReward;
            obj6.dispatch(obj3);
            throw claimingBountyReward;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              adTrafficMetadataSealed = 0;
              c7 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              uuid = arg1;
              uuid2 = callback(uuid[13]).getOrRefreshAdSession();
              const obj15 = callback(uuid[13]);
              adMetadataSealed = callback(uuid[16]).getAdMetadataSealed(callback2, callback);
              const obj16 = callback(uuid[16]);
              adTrafficMetadataSealed = callback(uuid[16]).getAdTrafficMetadataSealed(callback2, undefined, callback);
              const HTTP = callback(uuid[14]).HTTP;
              const obj5 = { url: null, body: null, rejectWithError: false };
              obj5[0] = closure_8.QUESTS_CREATIVES_CLAIM_REWARD(callback);
              let tmp15 = null;
              if (null != adMetadataSealed) {
                tmp15 = adMetadataSealed;
              }
              obj6 = {
                decision_metadata_sealed: null,
                traffic_metadata_sealed: null,
                client_ad_session_id: null,
                client_heartbeat_session_id: null,
              };
              obj6[0] = tmp15;
              let tmp18 = null;
              if (null != adTrafficMetadataSealed) {
                tmp18 = adTrafficMetadataSealed;
              }
              obj6[1] = tmp18;
              obj6[2] = uuid2.uuid;
              uuid = undefined;
              if (uuid != null) {
                uuid = uuid.uuid;
              }
              obj6[3] = uuid;
              obj5[1] = obj6;
              claimingBountyReward = 3;
              c7 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = HTTP.post(obj5);
              return obj7;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = callback2(uuid[7]);
            obj8 = { type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId: null };
            obj8[1] = callback;
            obj.dispatch(obj8);
            adTrafficMetadataSealed = 0;
          }
          adTrafficMetadataSealed = 0;
          c7 = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = arg1;
          return obj9;
        } catch (tmp45) {
          adMetadataSealed = tmp45;
          if (tmp4 === adTrafficMetadataSealed) {
            c7 = tmp2;
            throw tmp45;
          } else {
            claimingBountyReward = tmp;
          }
        }
      }
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _dismissAdContent() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
      if (dismissingContent === 2) {
        dismissingContent = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          dismissingContent = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              dismissingContent = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dismissingContent = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp5;
              let adCreativeId;
              adCreativeId = adCreativeId.adCreativeId;
              const adCreativeType = adCreativeId.adCreativeType;
              if (obj16.isDismissible(callback2)) {
                if (!dismissingContent.isDismissingContent(adCreativeId)) {
                  let obj5 = callback2(closure_1_2[7]);
                  obj1 = { type: "AD_CONTENT_DISMISS_BEGIN", adCreativeType: null, adCreativeId: null };
                  obj1[1] = adCreativeType;
                  obj1[2] = adCreativeId;
                  obj5.dispatch(obj1);
                  c5 = 1;
                  let tmp56Result = tmp56(closure_1_2[16]);
                  const adMetadataSealed = tmp56Result.getAdMetadataSealed(tmp55, adCreativeId);
                  tmp56Result = tmp56(closure_1_2[16]);
                  const adTrafficMetadataSealed = tmp56Result.getAdTrafficMetadataSealed(
                    tmp55,
                    undefined,
                    adCreativeId,
                  );
                  const questPlacementFromQuestContent = tmp56(closure_1_2[16]).getQuestPlacementFromQuestContent(
                    tmp55,
                  );
                  const HTTP = tmp56(closure_1_2[14]).HTTP;
                  const obj2 = { url: null, body: null, rejectWithError: false };
                  obj2[0] = closure_1_8.QUESTS_CREATIVES_DISMISS(adCreativeId);
                  let tmp42 = null;
                  if (null != adMetadataSealed) {
                    tmp42 = adMetadataSealed;
                  }
                  let obj3 = {
                    decision_metadata_sealed: null,
                    traffic_metadata_sealed: null,
                    placement: null,
                    ad_creative_type: null,
                  };
                  obj3[0] = tmp42;
                  let tmp43 = null;
                  if (null != adTrafficMetadataSealed) {
                    tmp43 = adTrafficMetadataSealed;
                  }
                  obj3[1] = tmp43;
                  let tmp44 = null;
                  if (null != questPlacementFromQuestContent) {
                    tmp44 = questPlacementFromQuestContent;
                  }
                  obj3[2] = tmp44;
                  obj3[3] = adCreativeType;
                  obj2[1] = obj3;
                  c6 = 2;
                  dismissingContent = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = HTTP.post(obj2);
                  return obj4;
                }
              }
              obj16 = callback(closure_1_2[16]);
            }
          } else {
            if (1 === tmp8) {
              c5 = 0;
              callback2 = closure_4;
              obj3 = callback2(573);
              obj5 = { type: "AD_CONTENT_DISMISS_FAILURE", adCreativeId: null, error: null };
              obj5[1] = adCreativeId;
              const tmp27 = new callback2(4462)(callback2);
              obj5[2] = tmp27;
              obj3.dispatch(obj5);
            } else if (arg0 === 1) {
              dismissingContent = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              obj = callback2(573);
              const obj6 = { type: "AD_CONTENT_DISMISS_SUCCESS", adCreativeId: null };
              obj6[1] = adCreativeId;
              obj.dispatch(obj6);
              c5 = 0;
            }
            c5 = 0;
            dismissingContent = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
          dismissingContent = 3;
        } catch (tmp45) {
          closure_4 = tmp45;
          if (tmp4 === c5) {
            dismissingContent = tmp2;
            throw tmp45;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = new timestampDefault("BountyActionCreators");
const tmp2 = new timestampDefault("BountyActionCreators");
let result = require("set").fileFinishedImporting("modules/quests/BountyActionCreators.tsx");

export const fetchQuestHomeBounties = function fetchQuestHomeBounties(c3) {
  const self = this;
  const apply = _fetchQuestHomeBounties.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchBountyPreview = function fetchBountyPreview(arr, c3) {
  const self = this;
  const apply = _fetchBountyPreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchDockCreativePreview = function fetchDockCreativePreview(adCreativeId) {
  const self = this;
  const apply = _fetchDockCreativePreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setBountyVideoProgress = function setBountyVideoProgress(bountyId, arg1) {
  let obj = getOrRefreshAdSession;
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = getOrRefreshAdSession.getOrRefreshAdSession(true);
    const tmpResult = getOrRefreshAdSession;
    obj = {
      type: "BOUNTIES_VIDEO_PROGRESS_UPDATE",
      bountyId: null,
      timestampSec: null,
      maxTimestampSec: null,
      duration: null,
    };
    obj[1] = bountyId;
    ({ timestampSec: obj4[2], maxTimestampSec: obj4[3], duration: obj4[4] } = arg1);
    dispatcherDefault.dispatch(obj);
    const obj3 = dispatcherDefault;
  }
};
export const claimBountyReward = function claimBountyReward(id, closure_1_1) {
  const self = this;
  const apply = _claimBountyReward.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissAdContent = function dismissAdContent(c1, QUEST_BAR_MOBILE) {
  const self = this;
  const apply = _dismissAdContent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};

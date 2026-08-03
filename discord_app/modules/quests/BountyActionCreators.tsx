// === Module 10899: fetchBountiesAndDispatch ===

// Module 10899 (fetchBountiesAndDispatch)
import AdCreativeType from "AdCreativeType";
import handleConnectionInfoChange from "handleConnectionInfoChange";
import set from "set";
import { Endpoints } from "ME";

const require = arg1;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let map = tmp3;
              let decisions = tmp5;
              let callback;
              decisions = undefined;
              map = undefined;
              let handleConnectionInfoChange;
              callback(outer1_2[4]).dispatch({ type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN" });
              let c5 = 1;
              const _Date = Date;
              callback = Date.now();
              c6 = 2;
              c7 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = callback();
              return obj1;
            }
          } else {
            if (1 === tmp8) {
              c5 = 0;
              c5 = handleConnectionInfoChange;
              obj1 = callback(decisions[4]);
              const obj2 = { type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE", placement: null, error: null };
              obj2[1] = closure_0;
              const tmp21 = new callback(decisions[8])(c5);
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
              handleConnectionInfoChange = decisions.flatMap((creative) => {
                if (null != creative.creative) {
                  if (creative.creative.creative_type === callback(request_id[5]).AdCreativeType.BOUNTY) {
                    let tmpResult = tmp(tmp2[6]);
                    const bountyFromServerResult = tmpResult.bountyFromServer(creative.creative.creative_content);
                    tmpResult = tmp(tmp2[7]);
                    const obj = { fetchedAt: null, requestId: null, adCreativeId: null };
                    obj[0] = closure_1;
                    obj[1] = request_id.request_id;
                    obj[2] = bountyFromServerResult.id;
                    const result = map.set(bountyFromServerResult.id, tmpResult.questAdDecisionFromAdDecision(creative, obj));
                    const items = [bountyFromServerResult];
                    return items;
                  }
                }
                return [];
              });
              const obj3 = { type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS", bounties: null, placement: null, adDecisionsByAdCreativeId: null, fetchedAt: null };
              obj3[1] = handleConnectionInfoChange;
              obj3[2] = closure_0;
              obj3[3] = map;
              obj3[4] = callback;
              callback(decisions[4]).dispatch(obj3);
              c5 = 0;
              const obj7 = callback(decisions[4]);
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp24) {
          handleConnectionInfoChange = tmp24;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp24;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _fetchBountiesAndDispatch = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
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
            } else if (!outer1_5.isFetchingQuestHomeBounties) {
              c2 = 1;
              c1 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_7(tmp5, outer1_3(function*() {
                if (c3 === 2) {
                  c3 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp4 === 3) {
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
                    c3 = 2;
                    if (0 === dependencyMap) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        let uuid2 = tmp5;
                        let uuid = tmp2;
                        uuid = undefined;
                        uuid2 = undefined;
                        let obj5 = outer1_0(5726);
                        dependencyMap = 1;
                        c3 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = obj5.getSession();
                        return obj1;
                      }
                    } else if (1 === tmp5) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj2 = { value: null, done: true };
                        obj2[0] = arg1;
                        return obj2;
                      } else {
                        uuid = arg1;
                        uuid = undefined;
                        uuid2 = outer1_0(6009).getOrRefreshAdSession();
                        const HTTP = outer1_0(530).HTTP;
                        const obj3 = { url: null, query: null, rejectWithError: false, context: null };
                        obj3[0] = outer1_6.QUESTS_GET_DECISIONS;
                        const obj4 = { placement: null, client_ad_session_id: null, client_heartbeat_session_id: null, num_decisions_requested: 5 };
                        obj4[0] = uuid;
                        obj4[1] = uuid2.uuid;
                        if (uuid != null) {
                          uuid = uuid.uuid;
                        }
                        obj4[2] = uuid;
                        obj3[1] = obj4;
                        obj5 = { connection_type: null };
                        obj5[0] = outer1_4.getType();
                        obj3[3] = obj5;
                        dependencyMap = 2;
                        c3 = 1;
                        const obj6 = { value: null, done: false };
                        obj6[0] = HTTP.get(obj3);
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj7 = { value: null, done: true };
                      obj7[0] = arg1;
                      return obj7;
                    } else {
                      c3 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1.body;
                      return obj;
                    }
                  } catch (tmp11) {
                    c3 = tmp;
                    throw tmp11;
                  }
                }
              }));
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
  const _fetchQuestHomeBounties = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1) {
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
            } else if (!outer1_5.isFetchingQuestHomeBounties) {
              v0 = 1;
              c2 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_7(tmp6, v0(function*() {
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
                    if (0 === table) {
                      if (arg0 === 1) {
                        c1 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        const _URLSearchParams = URLSearchParams;
                        let closure_0 = 0;
                        let items = [];
                        closure_0 = HermesBuiltin.arraySpread(outer1_0.map((arg0) => {
                          const items = ["ad_creative_ids", arg0];
                          return items;
                        }), closure_0);
                        const _String = String;
                        const items1 = ["placement", String(c1)];
                        items[closure_0] = items1;
                        closure_0 = closure_0 + 1;
                        const str2 = new URLSearchParams(items);
                        const HTTP = outer1_0(table[11]).HTTP;
                        const obj1 = { url: null, rejectWithError: false };
                        const _HermesInternal = HermesInternal;
                        obj1[0] = "" + outer1_6.QUESTS_CREATIVE_PREVIEW + "?" + str2.toString();
                        table = 1;
                        c1 = 1;
                        const obj2 = { value: null, done: false };
                        obj2[0] = HTTP.get(obj1);
                        return obj2;
                      }
                    } else if (arg0 === 1) {
                      c1 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      const obj3 = { value: null, done: true };
                      obj3[0] = arg1;
                      return obj3;
                    } else {
                      c1 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1.body;
                      return obj;
                    }
                  } catch (tmp5) {
                    c1 = tmp;
                    throw tmp5;
                  }
                }
              }));
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
  const _fetchBountyPreview = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
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
          if (0 === c6) {
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
              let claimingBountyReward;
              c6 = undefined;
              if (claimingBountyReward.isClaimingBountyReward(callback)) {
                c7 = 3;
              } else {
                let obj8 = callback2(outer1_2[4]);
                const obj1 = { type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId: null };
                obj1[1] = tmp71;
                obj8.dispatch(obj1);
                claimingBountyReward = 1;
                c6 = 2;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(outer1_2[9]).getSession();
                return obj2;
              }
              tmp71 = callback;
            }
          } else if (1 === tmp7) {
            claimingBountyReward = 0;
            c7 = adMetadataSealed;
            const tmp32 = new callback2(uuid[8])(c7);
            c6 = tmp32;
            let obj6 = callback2(uuid[4]);
            const obj3 = { type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId: null, error: null };
            obj3[1] = callback;
            obj3[2] = c6;
            obj6.dispatch(obj3);
            throw c6;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              claimingBountyReward = 0;
              c7 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              uuid = arg1;
              uuid2 = callback(uuid[10]).getOrRefreshAdSession();
              const obj15 = callback(uuid[10]);
              adMetadataSealed = callback(uuid[12]).getAdMetadataSealed(callback2, callback);
              const obj16 = callback(uuid[12]);
              claimingBountyReward = callback(uuid[12]).getAdTrafficMetadataSealed(callback2, undefined, callback);
              const HTTP = callback(uuid[11]).HTTP;
              const obj5 = { url: null, body: null, rejectWithError: false };
              obj5[0] = c6.QUESTS_CREATIVES_CLAIM_REWARD(callback);
              let tmp15 = null;
              if (null != adMetadataSealed) {
                tmp15 = adMetadataSealed;
              }
              obj6 = { decision_metadata_sealed: null, traffic_metadata_sealed: null, client_ad_session_id: null, client_heartbeat_session_id: null };
              obj6[0] = tmp15;
              let tmp18 = null;
              if (null != claimingBountyReward) {
                tmp18 = claimingBountyReward;
              }
              obj6[1] = tmp18;
              obj6[2] = uuid2.uuid;
              uuid = undefined;
              if (uuid != null) {
                uuid = uuid.uuid;
              }
              obj6[3] = uuid;
              obj5[1] = obj6;
              c6 = 3;
              c7 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = HTTP.post(obj5);
              return obj7;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = callback2(uuid[4]);
            obj8 = { type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId: null };
            obj8[1] = callback;
            obj.dispatch(obj8);
            claimingBountyReward = 0;
          }
          claimingBountyReward = 0;
          c7 = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = arg1;
          return obj9;
        } catch (tmp45) {
          adMetadataSealed = tmp45;
          if (tmp4 === claimingBountyReward) {
            c7 = tmp2;
            throw tmp45;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _claimBountyReward = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
export const setBountyVideoProgress = function setBountyVideoProgress(bountyId, arg1) {
  let obj = require(6009) /* getOrRefreshAdSession */;
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = require(6009) /* getOrRefreshAdSession */.getOrRefreshAdSession(true);
    const tmpResult = require(6009) /* getOrRefreshAdSession */;
    obj = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId: null, timestampSec: null, maxTimestampSec: null, duration: null };
    obj[1] = bountyId;
    ({ timestampSec: obj4[2], maxTimestampSec: obj4[3], duration: obj4[4] } = arg1);
    importDefault(709).dispatch(obj);
    const obj3 = importDefault(709);
  }
};
export const claimBountyReward = function claimBountyReward(id, outer1_1) {
  const self = this;
  const apply = _claimBountyReward.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
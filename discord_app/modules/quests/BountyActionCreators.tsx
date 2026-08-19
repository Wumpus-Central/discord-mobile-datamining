// discord_app/modules/quests/BountyActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import getOrRefreshAdSession from "../analytics_sessions/SessionAdGenerator.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import handleConnectionInfoChange from "../../stores/NetworkStore.tsx";
import set from "BountyStore.tsx";
import { Endpoints } from "../../Constants.tsx";

require = fn;
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
    return (function*(arg0, arg1) {
      let map = tmp3;
      let decisions = tmp5;
      callback(closure_1_2[4]).dispatch({ type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN" });
      c5 = 1;
      const _Date = Date;
      callback = Date.now();
      yield callback();
      if (1 === tmp8) {
        c5 = closure_4;
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
        closure_4 = decisions.flatMap((item, index) => {
          if (null != item.creative) {
            if (item.creative.creative_type === callback(request_id[5]).AdCreativeType.BOUNTY) {
              let tmpResult = callback(request_id[6]);
              const bountyFromServerResult = tmpResult.bountyFromServer(item.creative.creative_content);
              tmpResult = callback(request_id[7]);
              let obj = { fetchedAt: null, requestId: null, creative: null };
              obj[0] = closure_1;
              obj[1] = request_id.request_id;
              obj = { type: null, bounty: null };
              obj[0] = callback(request_id[5]).AdCreativeType.BOUNTY;
              obj[1] = bountyFromServerResult;
              obj[2] = obj;
              const result = map.set(bountyFromServerResult.id, tmpResult.questAdDecisionFromAdDecision(item, obj));
              const items = [bountyFromServerResult];
              return items;
            }
          }
          return [];
        });
        const obj3 = { type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS", bounties: null, placement: null, adDecisionsByAdCreativeId: null, fetchedAt: null };
        obj3[1] = closure_4;
        obj3[2] = closure_0;
        obj3[3] = map;
        obj3[4] = callback;
        callback(decisions[4]).dispatch(obj3);
        c5 = 0;
        const obj7 = callback(decisions[4]);
      }
      c5 = 0;
      return arg1;
    })();
  });
  closure_8 = tmp;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            } else if (!closure_1_5.isFetchingQuestHomeBounties) {
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_7(tmp5, closure_1_3(function*() {
                let obj5 = closure_1_0(5054);
                yield obj5.getSession();
                let uuid = body;
                const uuid2 = closure_1_0(7473).getOrRefreshAdSession();
                const HTTP = closure_1_0(530).HTTP;
                const obj3 = { url: null, query: null, rejectWithError: false, context: null };
                obj3[0] = closure_1_6.QUESTS_GET_DECISIONS;
                const obj4 = { placement: null, client_ad_session_id: null, client_heartbeat_session_id: null, num_decisions_requested: 5 };
                obj4[0] = uuid;
                obj4[1] = uuid2.uuid;
                if (uuid != null) {
                  uuid = uuid.uuid;
                }
                obj4[2] = uuid;
                obj3[1] = obj4;
                obj5 = { connection_type: null };
                obj5[0] = closure_1_4.getType();
                obj3[3] = obj5;
                yield HTTP.get(obj3);
                return body.body;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_9 = tmp;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            } else if (!closure_1_5.isFetchingQuestHomeBounties) {
              v0 = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_7(tmp6, v0(function*() {
                const _URLSearchParams = URLSearchParams;
                closure_0 = 0;
                let items = [];
                closure_0 = HermesBuiltin.arraySpread(closure_1_0.map((item, index) => {
                  const items = ["ad_creative_ids", item];
                  return items;
                }), closure_0);
                const _String = String;
                const items1 = ["placement", String(c1)];
                items[closure_0] = items1;
                closure_0 = closure_0 + 1;
                const str2 = new URLSearchParams(items);
                const HTTP = closure_1_0(table[11]).HTTP;
                obj1 = { url: null, rejectWithError: false };
                const _HermesInternal = HermesInternal;
                obj1[0] = "" + closure_1_6.QUESTS_CREATIVE_PREVIEW + "?" + str2.toString();
                yield HTTP.get(obj1);
                return body.body;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_10 = tmp;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                let obj8 = callback2(closure_1_2[4]);
                obj1 = { type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId: null };
                obj1[1] = callback;
                obj8.dispatch(obj1);
                claimingBountyReward = 1;
                c6 = 2;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(closure_1_2[9]).getSession();
                return obj2;
              }
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
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("obj132").fileFinishedImporting("modules/quests/BountyActionCreators.tsx");

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
  let obj = getOrRefreshAdSession;
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = getOrRefreshAdSession.getOrRefreshAdSession(true);
    const tmpResult = getOrRefreshAdSession;
    obj = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId: null, timestampSec: null, maxTimestampSec: null, duration: null };
    obj[1] = bountyId;
    ({ timestampSec: obj4[2], maxTimestampSec: obj4[3], duration: obj4[4] } = arg1);
    dispatcherDefault.dispatch(obj);
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
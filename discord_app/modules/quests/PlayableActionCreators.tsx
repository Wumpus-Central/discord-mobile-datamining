// === Module 20733: PlayableActionCreators ===

// Module 20733 (PlayableActionCreators)
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 8598 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _claimPlayableReward(arg0) {
  if (c9 === 2) {
    c9 = 3;
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
          closure_4 = tmp7;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = undefined;
          let orRefreshAdSession;
          let adMetadataSealed;
          let adTrafficMetadataSealed;
          c7 = 1;
          c8 = 2;
          c9 = 1;
          const obj4 = { value: SessionHeartbeatScheduler.getSession(), done: false };
          return obj4;
        }
      } else if (1 === tmp7) {
        c7 = 0;
        closure_132_6 = closure_6;
        const tmp30 = new closure_133_1(closure_133_2[7])(closure_132_6);
        throw tmp30;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_132_2 = value;
          orRefreshAdSession = closure_133_0(closure_133_2[3]).getOrRefreshAdSession();
          const obj11 = closure_133_0(closure_133_2[3]);
          adMetadataSealed = closure_133_0(closure_133_2[4]).getAdMetadataSealed(closure_132_1, closure_132_0);
          const obj12 = closure_133_0(closure_133_2[4]);
          adTrafficMetadataSealed = closure_133_0(closure_133_2[4]).getAdTrafficMetadataSealed(closure_132_1, undefined, closure_132_0);
          const HTTP = closure_133_0(closure_133_2[5]).HTTP;
          const request = { url: closure_133_4.QUESTS_CREATIVES_CLAIM_REWARD(closure_132_0), body: null, rejectWithError: false };
          let decision_metadata_sealed = adMetadataSealed;
          if (adMetadataSealed == null) {
            decision_metadata_sealed = null;
          }
          const obj6 = { decision_metadata_sealed, traffic_metadata_sealed: null, client_ad_session_id: null, client_heartbeat_session_id: null };
          let traffic_metadata_sealed = adTrafficMetadataSealed;
          if (adTrafficMetadataSealed == null) {
            traffic_metadata_sealed = null;
          }
          obj6.traffic_metadata_sealed = traffic_metadata_sealed;
          obj6.client_ad_session_id = orRefreshAdSession.uuid;
          let uuid;
          if (closure_132_2 != null) {
            uuid = closure_132_2.uuid;
          }
          obj6.client_heartbeat_session_id = uuid;
          request.body = obj6;
          c8 = 3;
          c9 = 1;
          const obj8 = { value: HTTP.post(request), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        c9 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        const obj10 = { type: "PLAYABLE_REWARD_CLAIM_SUCCESS", playableId: closure_132_0 };
        closure_133_1(closure_133_2[6]).dispatch(obj10);
        c7 = 0;
        c9 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp36) {
      closure_6 = tmp36;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp36;
      } else {
        c8 = tmp;
      }
    }
  }
};
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/PlayableActionCreators.tsx");

export function claimPlayableReward() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
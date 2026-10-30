// === Module 17650: OrbChallengeActionCreators ===

// Module 17650 (OrbChallengeActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _claimOrbChallenge() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = achievementIdentifier;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            const obj4 = { type: "ORB_CHALLENGE_CLAIM", achievementIdentifier };
            DispatcherDefault.dispatch(obj4);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: Endpoints.ORB_USER_CHALLENGE_CLAIM(achievementIdentifier), rejectWithError: false };
            c5 = 2;
            c6 = 1;
            const obj8 = { value: HTTP.post(obj6), done: false };
            return obj8;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_3 = closure_3;
          if (closure_129_3 instanceof closure_130_0(closure_130_2[4]).APIError) {
            let aPIError = closure_129_3;
          } else {
            aPIError = new closure_130_0(closure_130_2[4]).APIError(closure_129_3);
          }
          closure_129_2 = aPIError;
          const obj9 = { tags: { app_context: "achievements" } };
          closure_130_1(closure_130_2[5]).captureException(closure_129_2, obj9);
          const obj5 = closure_130_1(closure_130_2[5]);
          const obj10 = { type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: closure_129_0, error: closure_129_2 };
          closure_130_1(closure_130_2[2]).dispatch(obj10);
          c6 = 3;
          const obj7 = closure_130_1(closure_130_2[2]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_129_1 = value;
          const obj13 = { type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: closure_129_0, response: closure_129_1.body };
          closure_130_1(closure_130_2[2]).dispatch(obj13);
          c4 = 0;
          c6 = 3;
          const obj14 = { value: closure_129_1.body, done: true };
          return obj14;
        }
      } catch (tmp42) {
        closure_3 = tmp42;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp42;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_6 = async function _fetchOrbChallenges(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          DispatcherDefault.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj6 = { url: constants.ORB_USER_CHALLENGES_LIST, rejectWithError: false };
          c5 = 2;
          c6 = 1;
          const obj7 = { value: HTTP.get(obj6), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_3 = closure_3;
        if (closure_129_3 instanceof closure_130_0(closure_130_2[4]).APIError) {
          let aPIError = closure_129_3;
        } else {
          aPIError = new closure_130_0(closure_130_2[4]).APIError(closure_129_3);
        }
        closure_129_2 = aPIError;
        const obj8 = { tags: { app_context: "achievements" } };
        closure_130_1(closure_130_2[5]).captureException(closure_129_2, obj8);
        const obj3 = closure_130_1(closure_130_2[5]);
        const obj9 = { type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: closure_129_2 };
        closure_130_1(closure_130_2[2]).dispatch(obj9);
        c6 = 3;
        const obj5 = closure_130_1(closure_130_2[2]);
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        closure_129_1 = value;
        const obj13 = { type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: closure_129_1.body };
        closure_130_1(closure_130_2[2]).dispatch(obj13);
        if (null != closure_129_0) {
          closure_129_0(closure_129_1.body);
        }
        c4 = 0;
        c6 = 3;
        const obj = { value: closure_129_1.body, done: true };
        return obj;
      }
    } catch (tmp39) {
      closure_3 = tmp39;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp39;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_7 = async function _fetchOrbChallengesUnread() {
  closure_1 = tmp3;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.ORB_USER_CHALLENGES_UNREAD_STATE, rejectWithError: false });
  await "HermesInternal";
  closure_128_0 = value;
  closure_129_1(closure_129_2[2]).dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: closure_128_0.body });
  return closure_128_0.body;
};
let closure_8 = async function _ackOrbChallengesUnread() {
  closure_1 = tmp3;
  DispatcherDefault.dispatch({ type: "ORB_CHALLENGES_UNREAD_ACK" });
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: constants.ORB_USER_CHALLENGES_UNREAD_STATE_ACK, rejectWithError: false });
  await "HermesInternal";
  closure_128_0 = value;
  closure_129_1(closure_129_2[2]).dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: closure_128_0.body });
  return closure_128_0.body;
};
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/stores/OrbChallengeActionCreators.tsx");

export function claimOrbChallenge() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchOrbChallenges() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchOrbChallengesUnread() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function ackOrbChallengesUnread() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
// === Module 19601: VoicePanelDockStatusStore ===

// Module 19601 (VoicePanelDockStatusStore)
import _mod5055 from "module_5055" /* 5055 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function endMoment() {
  c4 = null;
  state = closure_7.getState();
  ({ moment, speakerUserId } = state);
  closure_8.cancel();
  if (null != moment) {
    if (closure_5.includes(moment.userId)) {
      closure_8(moment.userId);
    }
    if (null != c6) {
      closure_8(c6);
    }
    closure_7.setState({ moment: null });
  }
  if (null != speakerUserId) {
    if (closure_5.includes(speakerUserId)) {
      closure_8(speakerUserId);
    }
  }
  closure_8(c6);
}
let closure_3 = { joined: 3000, left: 1500, streaming: 3000 };
let c4 = null;
let closure_5 = [];
let c6 = null;
const identity = fn(1254);
let closure_7 = identity.createWithEqualityFn(() => ({ channelId: null, moment: null, speakerUserId: null, hasStreamers: false }));
let apply = fn(12);
let closure_8 = apply.throttle((speakerUserId) => {
  let hasItem = null == speakerUserId;
  if (!hasItem) {
    hasItem = closure_5.includes(speakerUserId);
  }
  if (hasItem) {
    const obj = { speakerUserId };
    closure_7.setState(obj);
  }
}, 1500);
apply = fn(12);
let closure_9 = apply.debounce(() => {
  closure_8.cancel();
  closure_7.setState({ speakerUserId: null });
}, 1500);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusStore.tsx");

export function useDockSubject(arg0) {
  closure_0 = arg0;
  return closure_7((channelId) => {
    if (channelId.channelId !== closure_0) {
      return null;
    } else if (null != channelId.moment) {
      let moment = channelId.moment;
    } else {
      moment = null;
      if (null != channelId.speakerUserId) {
        const obj = { kind: "speaker", userId: channelId.speakerUserId };
        moment = obj;
      }
    }
  }, _mod5055.shallow);
}
export function useDockHasStreamers(arg0) {
  closure_0 = arg0;
  return closure_7((channelId) => channelId.channelId === closure_0 && channelId.hasStreamers);
}
export function setDockHasStreamers(arg0, hasStreamers) {
  if (closure_7.getState().channelId === arg0) {
    const obj2 = { hasStreamers };
    closure_7.setState(obj2);
  }
}
export function setDockSpeakingIds(arg0, arr) {
  if (closure_7.getState().channelId === arg0) {
    closure_5 = arr;
    let atResult = arr.at(-1);
    if (atResult == null) {
      atResult = null;
    }
    if (atResult !== c6) {
      c6 = atResult;
      if (null == atResult) {
        closure_8.cancel();
        closure_9();
      } else {
        closure_9.cancel();
        closure_8(atResult);
      }
    }
  }
}
export function showVoiceMoment(arg0, userId, kind) {
  if (closure_7.getState().channelId === arg0) {
    if (null != UserStore.getUser(userId)) {
      const moment = closure_7.getState().moment;
      kind = undefined;
      if (moment != null) {
        kind = moment.kind;
      }
      if (!tmp3) {
        const obj2 = { moment: null };
        const obj3 = { userId, kind };
        obj2.moment = obj3;
        closure_7.setState(obj2);
        if (null != timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
        }
        const _setTimeout = setTimeout;
        timeout = setTimeout(endMoment, closure_3[kind]);
      }
      tmp3 = kind === kind && moment.userId === userId;
    }
  }
}
export function initDockStatus(channelId) {
  if (null != c4) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c4);
    c4 = null;
  }
  closure_8.cancel();
  closure_9.cancel();
  closure_5 = [];
  c6 = null;
  closure_7.setState({ channelId, moment: null, speakerUserId: null, hasStreamers: false });
}
export function releaseDockStatus(arg0) {
  if (closure_7.getState().channelId === arg0) {
    if (null != c4) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c4);
      c4 = null;
    }
    closure_8.cancel();
    closure_9.cancel();
    closure_5 = [];
    c6 = null;
    closure_7.setState({ channelId: null, moment: null, speakerUserId: null, hasStreamers: false });
  }
}
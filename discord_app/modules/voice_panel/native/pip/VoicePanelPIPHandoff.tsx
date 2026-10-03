// === Module 11908: VoicePanelPIPHandoff ===

// Module 11908 (VoicePanelPIPHandoff)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((subscribe) => {
  const cResult = c.c(2);
  if (cResult[0] !== subscribe) {
    const fn = function n() {
      return subscribe.arePIPCardsSettled();
    };
    cResult[0] = subscribe;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return noop.useSyncExternalStore(subscribe.subscribe, tmp2);
}) : ((subscribe) => {
  const items = [subscribe];
  return noop.useSyncExternalStore(subscribe.subscribe, noop.useCallback(() => subscribe.arePIPCardsSettled(), items));
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPHandoff.tsx");
class VoicePanelPIPHandoff {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    map = new Map();
    obj.cards = map;
    set = new Set();
    obj.listeners = set;
    obj.inPIPLayout = 0;
    obj.inFlight = 0;
    obj.subscribe = function subscribe(arg0) {
      closure_0 = arg0;
      let listeners = closure_0.listeners;
      listeners.add(arg0);
      return () => {
        const listeners = obj.listeners;
        listeners.delete(closure_0);
      };
    };
    return obj;
  }
}
const prototype = VoicePanelPIPHandoff.prototype;
prototype["syncCardPIPLayout"] = function syncCardPIPLayout(id, inPIPLayout) {
  const self = this;
  const cards = this.cards;
  value = cards.get(id);
  if (null == value) {
    const cards3 = self.cards;
    const obj2 = { inPIPLayout, arrived: true };
    const result = cards3.set(id, obj2);
    self.recount();
  } else if (value.inPIPLayout !== inPIPLayout) {
    const cards2 = self.cards;
    const obj = { inPIPLayout, arrived: !inPIPLayout };
    const result1 = cards2.set(id, obj);
    self.recount();
  }
};
prototype["setCardArrivedInPIP"] = function setCardArrivedInPIP(id) {
  const self = this;
  const cards = this.cards;
  value = cards.get(id);
  if (!tmp2) {
    const cards2 = self.cards;
    const obj = {};
    const merged = Object.assign(value);
    obj.arrived = true;
    const result = cards2.set(id, obj);
    self.recount();
  }
};
prototype["removeCard"] = function removeCard(id) {
  const self = this;
  const cards = this.cards;
  if (cards.delete(id)) {
    self.recount();
  }
};
prototype["arePIPCardsSettled"] = function arePIPCardsSettled() {
  return 0 === this.inFlight;
};
prototype["isPanelLayoutCommitted"] = function isPanelLayoutCommitted() {
  return 0 === this.inPIPLayout;
};
prototype["recount"] = function recount() {
  const self = this;
  let num = 0;
  let num2 = 0;
  const cards = this.cards;
  const values = cards.values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (nextResult.inPIPLayout) {
      num = num + 1;
      if (!tmp3.arrived) {
        num2 = num2 + 1;
      }
    }
    continue;
  }
  if (num !== self.inPIPLayout) {
    self.inPIPLayout = num;
    self.inFlight = num2;
    const listeners = self.listeners;
    for (const item10029 of listeners) {
      let item10029Result = item10029();
      continue;
    }
  }
};

export default VoicePanelPIPHandoff;
export const usePIPCardsSettled = tmp2;
export const usePIPPanelLayoutCommitted = ReactCompilerGating.isReactCompilerEnabled() ? ((subscribe) => {
  const cResult = c.c(2);
  if (cResult[0] !== subscribe) {
    const fn = function n() {
      return subscribe.isPanelLayoutCommitted();
    };
    cResult[0] = subscribe;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return noop.useSyncExternalStore(subscribe.subscribe, tmp2);
}) : ((subscribe) => {
  const items = [subscribe];
  return noop.useSyncExternalStore(subscribe.subscribe, noop.useCallback(() => subscribe.isPanelLayoutCommitted(), items));
});
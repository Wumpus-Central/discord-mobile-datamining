// === Module 11908: VoicePanelPIPHandoff ===

// Module 11908 (VoicePanelPIPHandoff)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((subscribe) => {
  let tmp2;
  let closure_0 = subscribe;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== subscribe) {
    const fn = function n() {
      return closure_0.arePIPCardsSettled();
    };
    cResult[0] = subscribe;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return react.useSyncExternalStore(subscribe.subscribe, tmp2);
}) : ((subscribe) => {
  let closure_0 = subscribe;
  const items = [subscribe];
  return react.useSyncExternalStore(subscribe.subscribe, react.useCallback(() => closure_0.arePIPCardsSettled(), items));
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((subscribe) => {
  let tmp2;
  let closure_0 = subscribe;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== subscribe) {
    const fn = function n() {
      return panelLayoutCommitted.isPanelLayoutCommitted();
    };
    cResult[0] = subscribe;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return react.useSyncExternalStore(subscribe.subscribe, tmp2);
}) : ((subscribe) => {
  let closure_0 = subscribe;
  const items = [subscribe];
  return react.useSyncExternalStore(subscribe.subscribe, react.useCallback(() => panelLayoutCommitted.isPanelLayoutCommitted(), items));
});
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPHandoff.tsx");
class VoicePanelPIPHandoff {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.cards = new Map();
    new Map();
    obj.listeners = new Set();
    obj.inPIPLayout = 0;
    obj.inFlight = 0;
    obj.subscribe = function subscribe(arg0) {
      let closure_0;
      listeners = arg0;
      listeners = listeners.listeners;
      listeners.add(arg0);
      return () => {
        listeners = obj.listeners;
        listeners.delete(closure_0);
      };
    };
    new Set();
    return obj;
  }
  syncCardPIPLayout(id, inPIPLayout) {
    const self = this;
    const cards = this.cards;
    const value = cards.get(id);
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
  }
  setCardArrivedInPIP(id) {
    const self = this;
    const cards = this.cards;
    const value = cards.get(id);
    const tmp2 = null == value || value.arrived;
    if (!tmp2) {
      const cards2 = self.cards;
      const obj = { arrived: true };
      set = cards2.set;
      const merged = Object.assign(value);
      const result = set(id, obj);
      self.recount();
    }
  }
  removeCard(id) {
    const self = this;
    const cards = this.cards;
    if (cards.delete(id)) {
      self.recount();
    }
  }
  arePIPCardsSettled() {
    return 0 === this.inFlight;
  }
  isPanelLayoutCommitted() {
    return 0 === this.inPIPLayout;
  }
  recount() {
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
  }
}
const prototype = VoicePanelPIPHandoff.prototype;

export default VoicePanelPIPHandoff;
export const usePIPCardsSettled = tmp2;
export const usePIPPanelLayoutCommitted = tmp3;
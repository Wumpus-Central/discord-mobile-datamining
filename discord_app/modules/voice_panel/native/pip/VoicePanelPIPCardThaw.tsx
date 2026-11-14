// discord_app/modules/voice_panel/native/pip/VoicePanelPIPCardThaw.tsx
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import _mod1708 from "../../../../../_runtime/metro/01708__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = { code: "(function VoicePanelPIPCardThawTsx1(){let[pipCardSize,pipScale,pipWidth,pipHeight,MAX_FRAMES,scheduleOnRN,finish]=this.__closure;let frames=0;const waitForCards=function(){const{width:width,height:height}=pipCardSize.get();const scale=pipScale.get();const caughtUp=Math.abs(width-pipWidth*scale)<1&&Math.abs(height-pipHeight*scale)<1;if(caughtUp&&frames>0||frames>=MAX_FRAMES){scheduleOnRN(finish);return;}frames++;requestAnimationFrame(waitForCards);};requestAnimationFrame(waitForCards);})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPCardThaw.tsx");
class VoicePanelPIPCardThaw {
  constructor() {
    obj1 = Object.create(new.target.prototype);
    closure_0 = obj1;
    obj1.cardsFrozen = false;
    obj1.onThawed = null;
    set = new Set();
    obj1.listeners = set;
    obj = closure_0(closure_1[1]);
    obj1.thawing = obj.makeMutable(false);
    obj2 = closure_0(closure_1[1]);
    obj1.pipCardSize = obj2.makeMutable({ width: 0, height: 0 });
    obj1.finish = function finish() {
      const onThawed = obj3.onThawed;
      obj3.cancel();
      if (onThawed != null) {
        onThawed();
      }
    };
    obj1.subscribe = function subscribe(arg0) {
      let listeners = arg0.listeners;
      listeners.add(arg0);
      return () => {
        const listeners = obj3.listeners;
        listeners.delete(closure_0);
      };
    };
    return obj1;
  }
}
const prototype = VoicePanelPIPCardThaw.prototype;
prototype["setCardsFrozen"] = function setCardsFrozen(cardsFrozen) {
  this.cardsFrozen = cardsFrozen;
};
prototype["start"] = function start(onThawed) {
  const self = this;
  const cardsFrozen = this.cardsFrozen;
  let tmp = !cardsFrozen;
  if (!cardsFrozen) {
    tmp = null == self.onThawed;
  }
  let flag = !tmp;
  if (!tmp) {
    self.onThawed = onThawed;
    const thawing = self.thawing;
    const result = thawing.set(true);
    self.notify();
    flag = true;
  }
  return flag;
};
prototype["cancel"] = function cancel() {
  this.onThawed = null;
  const thawing = this.thawing;
  const result = thawing.set(false);
  this.notify();
};
prototype["isRequested"] = function isRequested() {
  return null != this.onThawed;
};
prototype["notify"] = function notify() {
  for (const item10006 of tmp) {
    let item10006Result = item10006();
    continue;
  }
};

export default VoicePanelPIPCardThaw;
export function usePIPCardThawRequested(subscribe) {
  closure_0 = subscribe;
  items = [subscribe];
  return noop.useSyncExternalStore(subscribe.subscribe, noop.useCallback(() => cardThaw.isRequested(), items));
}
export function usePIPCardThaw(cardThaw, arg1) {
  _require = cardThaw;
  dependencyMap = arg1;
  const size = require("VoicePanelPIPStateContext").usePIPState();
  const width = size.width;
  const height = size.height;
  const scale = size.scale;
  _require = cardThaw;
  items = [cardThaw];
  const syncExternalStore = width.useSyncExternalStore(cardThaw.subscribe, width.useCallback(() => cardThaw.isRequested(), items));
  const finish = cardThaw.finish;
  const pipCardSize = cardThaw.pipCardSize;
  let items1 = [cardThaw, arg1];
  const layoutEffect = width.useLayoutEffect(() => {
    cardThaw.setCardsFrozen(closure_1);
    return () => cardsFrozen.setCardsFrozen(false);
  }, items1);
  const items2 = [finish, arg1, pipCardSize, height, scale, width, syncExternalStore];
  const layoutEffect1 = width.useLayoutEffect(() => {
    let tmp = syncExternalStore;
    if (syncExternalStore) {
      tmp = !closure_1;
    }
    if (tmp) {
      items = [closure_3, pipCardSize, scale, width, height, 10, _mod1708.scheduleOnRN, finish];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items;
      class VoicePanelPIPCardThawTsx1 {
        constructor() {
          closure_0 = 0;
          waitForCards = function waitForCards() { ... };
          animationFrame = requestAnimationFrame(waitForCards);
          return;
        }
      }
      const items1 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
      VoicePanelPIPCardThawTsx1.__closure = items1;
      VoicePanelPIPCardThawTsx1.__workletHash = 6411568076857;
      VoicePanelPIPCardThawTsx1.__initData = tmp12;
      _mod1708.scheduleOnUI(VoicePanelPIPCardThawTsx1);
    }
  }, items2);
  const items3 = [finish];
  const effect = width.useEffect(() => () => finish(), items3);
}
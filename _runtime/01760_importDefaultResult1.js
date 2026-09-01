// _runtime/01760_importDefaultResult1.js
import _createClassDefault from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "00090__classPrivateFieldBase.js";
import importDefaultResult1 from "00091__classPrivateFieldKey.js";

const NativeEventsManager = arg1;
let closure_4 = importDefaultResult1("managedComponent");
let closure_5 = importDefaultResult1("componentOptions");
let closure_6 = importDefaultResult1("eventViewTag");
class NativeEventsManager {
  constructor(arg0, arg1) {
    tmp = closure_2(this, NativeEventsManager);
    definePropertyResult = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    definePropertyResult2 = Object.defineProperty(this, closure_6, { writable: true, value: -1 });
    closure_3(this, closure_4)[closure_4] = global;
    closure_3(this, closure_5)[closure_5] = arg1;
    tmp5 = closure_3(this, closure_6);
    tmp5[closure_6] = this.getEventViewTag();
    return;
  }
}
const items = [
  {
    key: "attachEvents",
    value: function attachEvents() {
      const props = callback2(this, closure_4)[closure_4].props;
      for (const key10010 in props) {
        let tmp5 = key10010;
        let tmp6 = props[key10010];
        let tmp7 = NativeEventsManager;
        let tmp8 = dependencyMap;
        let obj = NativeEventsManager(1750);
        let hasItem = obj.has("workletEventHandler", tmp6);
        if (hasItem) {
          hasItem = tmp6.workletEventHandler instanceof tmp7(1758).WorkletEventHandler;
        }
        if (!hasItem) {
          continue;
        } else {
          let workletEventHandler = tmp6.workletEventHandler;
          let tmp2 = callback2;
          let tmp3 = closure_6;
          let registerForEventsResult = workletEventHandler.registerForEvents(
            callback2(this, closure_6)[closure_6],
            key10010,
          );
          continue;
        }
        continue;
      }
    },
  },
  {
    key: "detachEvents",
    value: function detachEvents() {
      const props = callback2(this, closure_4)[closure_4].props;
      for (const key10010 in props) {
        let tmp5 = key10010;
        let tmp6 = props[key10010];
        let tmp7 = NativeEventsManager;
        let tmp8 = dependencyMap;
        let obj = NativeEventsManager(1750);
        let hasItem = obj.has("workletEventHandler", tmp6);
        if (hasItem) {
          hasItem = tmp6.workletEventHandler instanceof tmp7(1758).WorkletEventHandler;
        }
        if (!hasItem) {
          continue;
        } else {
          let workletEventHandler = tmp6.workletEventHandler;
          let tmp2 = callback2;
          let tmp3 = closure_6;
          let unregisterFromEventsResult = workletEventHandler.unregisterFromEvents(
            callback2(this, closure_6)[closure_6],
          );
          continue;
        }
        continue;
      }
    },
  },
  {
    key: "updateEvents",
    value: function updateEvents(current) {
      const self = this;
      const eventViewTag = this.getEventViewTag(true);
      if (callback2(this, closure_6)[closure_6] !== eventViewTag) {
        for (const key10071 in arg0) {
          let tmp36 = key10071;
          let tmp37 = arg0[key10071];
          let tmp38 = NativeEventsManager;
          let tmp39 = dependencyMap;
          let obj4 = NativeEventsManager(1750);
          let hasItem = obj4.has("workletEventHandler", tmp37);
          if (hasItem) {
            hasItem = tmp37.workletEventHandler instanceof tmp38(1758).WorkletEventHandler;
          }
          if (!hasItem) {
            continue;
          } else {
            let workletEventHandler4 = tmp37.workletEventHandler;
            let tmp21 = callback2;
            let tmp22 = closure_6;
            let unregisterFromEventsResult = workletEventHandler4.unregisterFromEvents(
              callback2(self, closure_6)[closure_6],
            );
            continue;
          }
          continue;
        }
        callback2(self, closure_6)[closure_6] = eventViewTag;
        self.attachEvents();
      } else {
        for (const key10010 in arg0) {
          let tmp28 = key10010;
          let tmp29 = arg0[key10010];
          let tmp30 = NativeEventsManager;
          let tmp31 = dependencyMap;
          let obj2 = NativeEventsManager(1750);
          let hasItem1 = obj2.has("workletEventHandler", tmp29);
          if (hasItem1) {
            hasItem1 = tmp29.workletEventHandler instanceof tmp30(1758).WorkletEventHandler;
          }
          if (!hasItem1) {
            continue;
          } else {
            let workletEventHandler = tmp29.workletEventHandler;
            let tmp3 = callback2;
            let tmp4 = closure_4;
            let tmp5 = callback2(self, closure_4)[closure_4].props[key10010];
            if (tmp5) {
              let tmp30Result = tmp30(1750);
              let hasItem2 = tmp30Result.has("workletEventHandler", tmp5);
              if (hasItem2) {
                hasItem2 = tmp5.workletEventHandler instanceof tmp30(1758).WorkletEventHandler;
              }
              if (hasItem2) {
                hasItem2 = tmp5.workletEventHandler !== workletEventHandler;
              }
              if (!hasItem2) {
                continue;
              } else {
                let tmp9 = closure_6;
                let unregisterFromEventsResult1 = workletEventHandler.unregisterFromEvents(
                  tmp3(self, closure_6)[closure_6],
                );
                let workletEventHandler2 = tmp5.workletEventHandler;
                let registerForEventsResult = workletEventHandler2.registerForEvents(tmp3(self, closure_6)[closure_6]);
                continue;
              }
              continue;
            } else {
              let tmp6 = closure_6;
              let unregisterFromEventsResult2 = workletEventHandler.unregisterFromEvents(
                tmp3(self, closure_6)[closure_6],
              );
              continue;
            }
            continue;
          }
          continue;
        }
        const props = callback2(self, closure_4)[closure_4].props;
        for (const key10054 in props) {
          let tmp32 = key10054;
          let tmp33 = props[key10054];
          let tmp34 = NativeEventsManager;
          let tmp35 = dependencyMap;
          let obj3 = NativeEventsManager(1750);
          let hasItem3 = obj3.has("workletEventHandler", tmp33);
          if (hasItem3) {
            hasItem3 = tmp33.workletEventHandler instanceof tmp34(1758).WorkletEventHandler;
          }
          if (!hasItem3) {
            continue;
          } else {
            let workletEventHandler3 = tmp33.workletEventHandler;
            if (arg0[key10054]) {
              continue;
            } else {
              let tmp16 = callback2;
              let tmp17 = closure_6;
              let registerForEventsResult1 = workletEventHandler3.registerForEvents(
                callback2(self, closure_6)[closure_6],
              );
              continue;
            }
            continue;
          }
          continue;
        }
      }
    },
  },
  {
    key: "getEventViewTag",
    value: function getEventViewTag(arg0) {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const self = this;
      const _componentRef = callback2(this, closure_4)[closure_4]._componentRef;
      let getScrollableNode;
      if (_componentRef != null) {
        getScrollableNode = _componentRef.getScrollableNode;
      }
      if (getScrollableNode) {
        const scrollableNode = _componentRef.getScrollableNode();
        let tmp16 = scrollableNode;
        if (typeof scrollableNode !== "number") {
          let num4 = NativeEventsManager(1761).findNodeHandle(scrollableNode);
          if (num4 == null) {
            num4 = -1;
          }
          tmp16 = num4;
          const obj4 = NativeEventsManager(1761);
        }
        return tmp16;
      } else {
        const tmp5 = tmp(self, closure_5)[closure_5];
        let setNativeProps;
        if (tmp5 != null) {
          setNativeProps = tmp5.setNativeProps;
        }
        if (setNativeProps) {
          let num3 = NativeEventsManager(1761).findNodeHandle(tmp(self, tmp2)[tmp2]);
          if (num3 == null) {
            num3 = -1;
          }
          let componentViewTag = num3;
          const obj3 = NativeEventsManager(1761);
        } else if (flag) {
          let __nativeTag;
          if (_componentRef != null) {
            __nativeTag = _componentRef.__nativeTag;
          }
          if (!__nativeTag) {
            let _nativeTag;
            if (_componentRef != null) {
              _nativeTag = _componentRef._nativeTag;
            }
            if (!_nativeTag) {
              let num = NativeEventsManager(1761).findNodeHandle(_componentRef);
              if (num == null) {
                num = -1;
              }
              const obj2 = NativeEventsManager(1761);
            }
          }
          let num2 = _componentRef.__nativeTag;
          if (num2 == null) {
            num2 = _componentRef._nativeTag;
          }
          if (num2 == null) {
            num2 = -1;
          }
          num = num2;
        } else {
          componentViewTag = tmp(self, tmp2)[tmp2].getComponentViewTag();
          const obj = tmp(self, tmp2)[tmp2];
        }
        return componentViewTag;
      }
    },
  },
];

export const NativeEventsManager = _createClassDefault(NativeEventsManager, items);

// === Module 1743: NativeEventsManager ===

// Module 1743 (NativeEventsManager)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;

const NativeEventsManager = arg1;
let closure_4 = _classPrivateFieldKey("managedComponent");
let closure_5 = _classPrivateFieldKey("componentOptions");
let closure_6 = _classPrivateFieldKey("eventViewTag");
class NativeEventsManager {
  constructor(arg0, arg1) {
    tmp = c2(this, NativeEventsManager);
    definePropertyResult = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "a" });
    definePropertyResult2 = Object.defineProperty(this, metroRequire, { writable: true, value: -1 });
    closure_3(this, closure_4)[closure_4] = global;
    closure_3(this, hasOwnProperty)[hasOwnProperty] = arg1;
    tmp5 = closure_3(this, metroRequire);
    tmp5[metroRequire] = this.getEventViewTag();
    return;
  }
}
const entry = {
  key: "attachEvents",
  value: function attachEvents() {
    const props = _classPrivateFieldBase(this, closure_4)[closure_4].props;
    for (const key10010 in props) {
      let tmp6 = props[key10010];
      let tmp7 = NativeEventsManager;
      let obj = NativeEventsManager(1733);
      let hasItem = obj.has("workletEventHandler", tmp6);
      if (hasItem) {
        hasItem = tmp6.workletEventHandler instanceof tmp7(1741).WorkletEventHandler;
      }
      if (!hasItem) {
        continue;
      } else {
        let workletEventHandler = tmp6.workletEventHandler;
        let registerForEventsResult = workletEventHandler.registerForEvents(_classPrivateFieldBase(this, closure_6)[closure_6], key10010);
        continue;
      }
      continue;
    }
  }
};
const items = [
  entry,
  {
    key: "detachEvents",
    value: function detachEvents() {
      const props = _classPrivateFieldBase(this, closure_4)[closure_4].props;
      for (const key10010 in props) {
        let tmp6 = props[key10010];
        let tmp7 = NativeEventsManager;
        let obj = NativeEventsManager(1733);
        let hasItem = obj.has("workletEventHandler", tmp6);
        if (hasItem) {
          hasItem = tmp6.workletEventHandler instanceof tmp7(1741).WorkletEventHandler;
        }
        if (!hasItem) {
          continue;
        } else {
          let workletEventHandler = tmp6.workletEventHandler;
          let unregisterFromEventsResult = workletEventHandler.unregisterFromEvents(_classPrivateFieldBase(this, closure_6)[closure_6]);
          continue;
        }
        continue;
      }
    }
  },
  {
    key: "updateEvents",
    value: function updateEvents(current) {
      const self = this;
      const eventViewTag = this.getEventViewTag(true);
      if (_classPrivateFieldBase(this, closure_6)[closure_6] !== eventViewTag) {
        for (const key10071 in arg0) {
          let tmp37 = arg0[key10071];
          let tmp38 = NativeEventsManager;
          let obj4 = NativeEventsManager(1733);
          let hasItem = obj4.has("workletEventHandler", tmp37);
          if (hasItem) {
            hasItem = tmp37.workletEventHandler instanceof tmp38(1741).WorkletEventHandler;
          }
          if (!hasItem) {
            continue;
          } else {
            let workletEventHandler4 = tmp37.workletEventHandler;
            let unregisterFromEventsResult = workletEventHandler4.unregisterFromEvents(_classPrivateFieldBase(self, closure_6)[closure_6]);
            continue;
          }
          continue;
        }
        _classPrivateFieldBase(self, closure_6)[closure_6] = eventViewTag;
        self.attachEvents();
      } else {
        for (const key10010 in arg0) {
          let tmp29 = arg0[key10010];
          let tmp30 = NativeEventsManager;
          let obj2 = NativeEventsManager(1733);
          let hasItem1 = obj2.has("workletEventHandler", tmp29);
          if (hasItem1) {
            hasItem1 = tmp29.workletEventHandler instanceof tmp30(1741).WorkletEventHandler;
          }
          if (!hasItem1) {
            continue;
          } else {
            let workletEventHandler = tmp29.workletEventHandler;
            let tmp3 = _classPrivateFieldBase;
            let tmp5 = _classPrivateFieldBase(self, closure_4)[closure_4].props[key10010];
            if (tmp5) {
              let tmp30Result = tmp30(1733);
              let hasItem2 = tmp30Result.has("workletEventHandler", tmp5);
              if (hasItem2) {
                hasItem2 = tmp5.workletEventHandler instanceof tmp30(1741).WorkletEventHandler;
              }
              if (hasItem2) {
                hasItem2 = tmp5.workletEventHandler !== workletEventHandler;
              }
              if (!hasItem2) {
                continue;
              } else {
                let unregisterFromEventsResult1 = workletEventHandler.unregisterFromEvents(tmp3(self, closure_6)[closure_6]);
                let workletEventHandler2 = tmp5.workletEventHandler;
                let registerForEventsResult = workletEventHandler2.registerForEvents(tmp3(self, closure_6)[closure_6]);
                continue;
              }
              continue;
            } else {
              let unregisterFromEventsResult2 = workletEventHandler.unregisterFromEvents(tmp3(self, closure_6)[closure_6]);
              continue;
            }
            continue;
          }
          continue;
        }
        const props = _classPrivateFieldBase(self, closure_4)[closure_4].props;
        for (const key10054 in props) {
          let tmp33 = props[key10054];
          let tmp34 = NativeEventsManager;
          let obj3 = NativeEventsManager(1733);
          let hasItem3 = obj3.has("workletEventHandler", tmp33);
          if (hasItem3) {
            hasItem3 = tmp33.workletEventHandler instanceof tmp34(1741).WorkletEventHandler;
          }
          if (!hasItem3) {
            continue;
          } else {
            let workletEventHandler3 = tmp33.workletEventHandler;
            if (arg0[key10054]) {
              continue;
            } else {
              let registerForEventsResult1 = workletEventHandler3.registerForEvents(_classPrivateFieldBase(self, closure_6)[closure_6]);
              continue;
            }
            continue;
          }
          continue;
        }
      }
    }
  },
  {
    key: "getEventViewTag",
    value: function getEventViewTag(arg0) {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const self = this;
      const _componentRef = _classPrivateFieldBase(this, closure_4)[closure_4]._componentRef;
      let getScrollableNode;
      if (_componentRef != null) {
        getScrollableNode = _componentRef.getScrollableNode;
      }
      if (getScrollableNode) {
        const scrollableNode = _componentRef.getScrollableNode();
        let tmp16 = scrollableNode;
        if (typeof scrollableNode !== "number") {
          let num4 = NativeEventsManager(1744).findNodeHandle(scrollableNode);
          if (num4 == null) {
            num4 = -1;
          }
          tmp16 = num4;
          const obj4 = NativeEventsManager(1744);
        }
        return tmp16;
      } else {
        const tmp5 = tmp(self, closure_5)[closure_5];
        let setNativeProps;
        if (tmp5 != null) {
          setNativeProps = tmp5.setNativeProps;
        }
        if (setNativeProps) {
          let num3 = NativeEventsManager(1744).findNodeHandle(tmp(self, tmp2)[tmp2]);
          if (num3 == null) {
            num3 = -1;
          }
          let componentViewTag = num3;
          const obj3 = NativeEventsManager(1744);
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
              let num = NativeEventsManager(1744).findNodeHandle(_componentRef);
              if (num == null) {
                num = -1;
              }
              const obj2 = NativeEventsManager(1744);
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
    }
  }
];

export const NativeEventsManager = _createClass(NativeEventsManager, items);
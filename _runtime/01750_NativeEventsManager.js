// _runtime/01750_NativeEventsManager.js
import flattenArray from "01740_flattenArray.js";
import WorkletEventHandler from "01748_WorkletEventHandler.js";
import react_native from "01751_react-native.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "00091__classPrivateFieldKey.js";

let closure_4 = _classPrivateFieldKey("managedComponent");
let closure_5 = _classPrivateFieldKey("componentOptions");
let closure_6 = _classPrivateFieldKey("eventViewTag");
class NativeEventsManager {
  constructor(self, disableReactSync) {
    _classCallCheck(this, NativeEventsManager);
    Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    Object.defineProperty(this, closure_6, { writable: true, value: -1 });
    _classPrivateFieldBase(this, closure_4)[closure_4] = self;
    _classPrivateFieldBase(this, closure_5)[closure_5] = disableReactSync;
    const tmp5 = _classPrivateFieldBase(this, closure_6);
    tmp5[closure_6] = this.getEventViewTag();
  }
}
const entry = {
  key: "attachEvents",
  value: function attachEvents() {
    const props = _classPrivateFieldBase(this, closure_4)[closure_4].props;
    for (const key10010 in props) {
      let tmp6 = props[key10010];
      let obj = flattenArray;
      let hasItem =
        obj.has("workletEventHandler", tmp6) &&
        tmp6.workletEventHandler instanceof WorkletEventHandler.WorkletEventHandler;
      if (!hasItem) {
        continue;
      } else {
        let workletEventHandler = tmp6.workletEventHandler;
        let registerForEventsResult = workletEventHandler.registerForEvents(
          _classPrivateFieldBase(this, closure_6)[closure_6],
          key10010,
        );
        continue;
      }
      continue;
    }
  },
};
const items = [
  entry,
  {
    key: "detachEvents",
    value: function detachEvents() {
      const props = _classPrivateFieldBase(this, closure_4)[closure_4].props;
      for (const key10010 in props) {
        let tmp6 = props[key10010];
        let obj = flattenArray;
        let hasItem =
          obj.has("workletEventHandler", tmp6) &&
          tmp6.workletEventHandler instanceof WorkletEventHandler.WorkletEventHandler;
        if (!hasItem) {
          continue;
        } else {
          let workletEventHandler = tmp6.workletEventHandler;
          let unregisterFromEventsResult = workletEventHandler.unregisterFromEvents(
            _classPrivateFieldBase(this, closure_6)[closure_6],
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
      if (_classPrivateFieldBase(this, closure_6)[closure_6] !== eventViewTag) {
        for (const key10071 in current) {
          let tmp37 = current[key10071];
          let obj4 = flattenArray;
          let hasItem =
            obj4.has("workletEventHandler", tmp37) &&
            tmp37.workletEventHandler instanceof WorkletEventHandler.WorkletEventHandler;
          if (!hasItem) {
            continue;
          } else {
            let workletEventHandler4 = tmp37.workletEventHandler;
            let unregisterFromEventsResult = workletEventHandler4.unregisterFromEvents(
              _classPrivateFieldBase(self, closure_6)[closure_6],
            );
            continue;
          }
          continue;
        }
        _classPrivateFieldBase(self, closure_6)[closure_6] = eventViewTag;
        self.attachEvents();
      } else {
        for (const key10010 in current) {
          let tmp29 = current[key10010];
          let obj2 = flattenArray;
          let hasItem1 =
            obj2.has("workletEventHandler", tmp29) &&
            tmp29.workletEventHandler instanceof WorkletEventHandler.WorkletEventHandler;
          if (!hasItem1) {
            continue;
          } else {
            let workletEventHandler = tmp29.workletEventHandler;
            let tmp5 = _classPrivateFieldBase(self, closure_4)[closure_4].props[key10010];
            if (tmp5) {
              let tmp30Result = flattenArray;
              let hasItem2 =
                tmp30Result.has("workletEventHandler", tmp5) &&
                tmp5.workletEventHandler instanceof WorkletEventHandler.WorkletEventHandler &&
                tmp5.workletEventHandler !== workletEventHandler;
              if (!hasItem2) {
                continue;
              } else {
                let unregisterFromEventsResult1 = workletEventHandler.unregisterFromEvents(
                  _classPrivateFieldBase(self, closure_6)[closure_6],
                );
                let workletEventHandler2 = tmp5.workletEventHandler;
                let registerForEventsResult = workletEventHandler2.registerForEvents(
                  _classPrivateFieldBase(self, closure_6)[closure_6],
                );
                continue;
              }
              continue;
            } else {
              let unregisterFromEventsResult2 = workletEventHandler.unregisterFromEvents(
                _classPrivateFieldBase(self, closure_6)[closure_6],
              );
              continue;
            }
            continue;
          }
          continue;
        }
        const props = _classPrivateFieldBase(self, closure_4)[closure_4].props;
        for (const key10054 in props) {
          let tmp33 = props[key10054];
          let obj3 = flattenArray;
          let hasItem3 =
            obj3.has("workletEventHandler", tmp33) &&
            tmp33.workletEventHandler instanceof WorkletEventHandler.WorkletEventHandler;
          if (!hasItem3) {
            continue;
          } else {
            let workletEventHandler3 = tmp33.workletEventHandler;
            if (current[key10054]) {
              continue;
            } else {
              let registerForEventsResult1 = workletEventHandler3.registerForEvents(
                _classPrivateFieldBase(self, closure_6)[closure_6],
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
      const _componentRef = _classPrivateFieldBase(this, closure_4)[closure_4]._componentRef;
      let getScrollableNode;
      if (_componentRef != null) {
        getScrollableNode = _componentRef.getScrollableNode;
      }
      if (getScrollableNode) {
        const scrollableNode = _componentRef.getScrollableNode();
        let tmp15 = scrollableNode;
        if (typeof scrollableNode !== "number") {
          const obj4 = react_native;
          let num4 = obj4.findNodeHandle(scrollableNode);
          if (num4 == null) {
            num4 = -1;
          }
          tmp15 = num4;
        }
        return tmp15;
      } else {
        let componentViewTag;
        const tmp5 = _classPrivateFieldBase(self, closure_5)[closure_5];
        let setNativeProps;
        if (tmp5 != null) {
          setNativeProps = tmp5.setNativeProps;
        }
        if (setNativeProps) {
          const obj3 = react_native;
          let num3 = obj3.findNodeHandle(_classPrivateFieldBase(self, closure_4)[closure_4]);
          if (num3 == null) {
            num3 = -1;
          }
          componentViewTag = num3;
        } else if (flag) {
          let __nativeTag;
          if (_componentRef != null) {
            __nativeTag = _componentRef.__nativeTag;
          }
          if (!__nativeTag) {
            let num;
            let _nativeTag;
            if (_componentRef != null) {
              _nativeTag = _componentRef._nativeTag;
            }
            if (!_nativeTag) {
              const obj2 = react_native;
              num = obj2.findNodeHandle(_componentRef);
              if (num == null) {
                num = -1;
              }
            }
            componentViewTag = num;
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
          const obj = _classPrivateFieldBase(self, closure_4)[closure_4];
          componentViewTag = obj.getComponentViewTag();
        }
        return componentViewTag;
      }
    },
  },
];
const NativeEventsManager_export = _createClass(NativeEventsManager, items);

export { NativeEventsManager_export as NativeEventsManager };

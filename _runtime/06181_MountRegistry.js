// _runtime/06181_MountRegistry.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

class MountRegistry {
  constructor() {
    _classCallCheck(this, MountRegistry);
  }
}
const entry = {
  key: "addMountListener",
  value: function addMountListener(arg0) {
    const self = this;
    let closure_0 = arg0;
    let mountListeners = this.mountListeners;
    mountListeners.add(arg0);
    return () => {
      const mountListeners = self.mountListeners;
      mountListeners.delete(closure_0);
    };
  },
};
const items = [
  entry,
  {
    key: "addUnmountListener",
    value: function addUnmountListener(arg0) {
      const self = this;
      let closure_0 = arg0;
      let unmountListeners = this.unmountListeners;
      unmountListeners.add(arg0);
      return () => {
        const unmountListeners = self.unmountListeners;
        unmountListeners.delete(closure_0);
      };
    },
  },
  {
    key: "gestureHandlerWillMount",
    value: function gestureHandlerWillMount(arg0) {
      let closure_0 = arg0;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((fn) => fn(closure_0));
    },
  },
  {
    key: "gestureHandlerWillUnmount",
    value: function gestureHandlerWillUnmount(self) {
      let closure_0 = self;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((fn) => fn(self));
    },
  },
  {
    key: "gestureWillMount",
    value: function gestureWillMount(item10067) {
      let closure_0 = item10067;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((fn) => fn(item10067));
    },
  },
  {
    key: "gestureWillUnmount",
    value: function gestureWillUnmount(item10006) {
      let closure_0 = item10006;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((fn) => fn(item10006));
    },
  },
];
const tmp2 = _createClassDefault(MountRegistry, null, items);
tmp2.mountListeners = new Set();
new Set();
tmp2.unmountListeners = new Set();
new Set();
const MountRegistry_export = tmp2;

export { MountRegistry_export as MountRegistry };

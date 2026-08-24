// _runtime/06442_MountRegistry.js
import _createClassDefault from "metro/00042__createClass.js";
import MountRegistry from "metro/00041__classCallCheck.js";

class MountRegistry {
  constructor() {
    tmp = MountRegistry(this, MountRegistry);
    return;
  }
}
const items = [
  {
    key: "addMountListener",
    value: function addMountListener(arg0) {
      const self = this;
      closure_0 = arg0;
      let mountListeners = this.mountListeners;
      mountListeners.add(arg0);
      return () => {
        const mountListeners = self.mountListeners;
        mountListeners.delete(closure_0);
      };
    }
  },
  {
    key: "addUnmountListener",
    value: function addUnmountListener(arg0) {
      const self = this;
      closure_0 = arg0;
      let unmountListeners = this.unmountListeners;
      unmountListeners.add(arg0);
      return () => {
        const unmountListeners = self.unmountListeners;
        unmountListeners.delete(closure_0);
      };
    }
  },
  {
    key: "gestureHandlerWillMount",
    value: function gestureHandlerWillMount(closure_0) {
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((arg0) => arg0(closure_0));
    }
  },
  {
    key: "gestureHandlerWillUnmount",
    value: function gestureHandlerWillUnmount(self) {
      closure_0 = self;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((arg0) => arg0(closure_0));
    }
  },
  {
    key: "gestureWillMount",
    value: function gestureWillMount(arg0) {
      closure_0 = arg0;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((arg0) => arg0(closure_0));
    }
  },
  {
    key: "gestureWillUnmount",
    value: function gestureWillUnmount(item10006) {
      closure_0 = item10006;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((arg0) => arg0(closure_0));
    }
  }
];
const tmp2 = _createClassDefault(MountRegistry, null, items);
tmp2.mountListeners = new Set();
const obj = {
  key: "addMountListener",
  value: function addMountListener(arg0) {
    const self = this;
    closure_0 = arg0;
    let mountListeners = this.mountListeners;
    mountListeners.add(arg0);
    return () => {
      const mountListeners = self.mountListeners;
      mountListeners.delete(closure_0);
    };
  }
};
const set = new Set();
tmp2.unmountListeners = new Set();

export const MountRegistry = tmp2;
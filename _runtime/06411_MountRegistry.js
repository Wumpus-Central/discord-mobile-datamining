// === Module 6411: MountRegistry ===

// Module 6411 (MountRegistry)
import _createClassDefault from "_createClass" /* 42 */;
import MountRegistry from "_classCallCheck" /* 41 */;

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
      const item = mountListeners.forEach((item, index) => item(closure_0));
    }
  },
  {
    key: "gestureHandlerWillUnmount",
    value: function gestureHandlerWillUnmount(self) {
      closure_0 = self;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((item, index) => item(closure_0));
    }
  },
  {
    key: "gestureWillMount",
    value: function gestureWillMount(item10067) {
      closure_0 = item10067;
      const mountListeners = this.mountListeners;
      const item = mountListeners.forEach((item, index) => item(closure_0));
    }
  },
  {
    key: "gestureWillUnmount",
    value: function gestureWillUnmount(item10006) {
      closure_0 = item10006;
      const unmountListeners = this.unmountListeners;
      const item = unmountListeners.forEach((item, index) => item(closure_0));
    }
  }
];
const tmp2 = _createClassDefault(MountRegistry, null, items);
tmp2.mountListeners = new Set();
const set = new Set();
tmp2.unmountListeners = new Set();

export const MountRegistry = tmp2;
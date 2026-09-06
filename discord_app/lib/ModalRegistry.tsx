// discord_app/lib/ModalRegistry.tsx
import size from "../../_runtime/metro/00002__.js";

class ModalRegistry {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.modals = global;
    obj.stores = (function calculateStores(modals) {
      const set = new Set();
      const iter = modals[Symbol.iterator]();
      while (iter !== undefined) {
        let stores = iter.next().stores;
        for (const item10016 of stores) {
          let addResult = set.add(item10016);
          continue;
        }
        continue;
      }
      return Array.from(set);
    })(global);
    return obj;
  }
}
const prototype = ModalRegistry.prototype;
prototype["getStores"] = function getStores() {
  return this.stores;
};
prototype["getOpenModal"] = function getOpenModal() {
  const modals = this.modals;
  const findIndexResult = modals.findIndex((isOpen) => isOpen.isOpen());
  if (-1 === findIndexResult) {
    return null;
  } else {
    const getProps = obj3.getProps;
    let props;
    if (getProps != null) {
      props = getProps();
    }
    if (props == null) {
      props = {};
    }
    const obj = {
      key: findIndexResult,
      component: this.modals[findIndexResult].getComponent(),
      props,
      closable: null == this.modals[findIndexResult].closable || this.modals[findIndexResult].closable,
      backdropInstant:
        null != this.modals[findIndexResult].backdropInstant && this.modals[findIndexResult].backdropInstant,
      backdropStyle: this.modals[findIndexResult].backdropStyle,
      disableAnimation:
        null != this.modals[findIndexResult].disableAnimation && this.modals[findIndexResult].disableAnimation,
    };
    return obj;
  }
};
const result = size.fileFinishedImporting("lib/ModalRegistry.tsx");

export default ModalRegistry;

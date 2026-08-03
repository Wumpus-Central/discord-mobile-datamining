class ModalRegistry {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.modals = global;
    obj.stores = (function calculateStores(modals) {
      const set = new Set();
      const iter = modals[Symbol.iterator]();
      while (iter !== undefined) {
        let stores = iter.next().stores;
        let tmp = stores;
        let tmp2 = stores;
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
    const obj = { key: null, component: null, props: null, closable: null, backdropInstant: null, backdropStyle: null, disableAnimation: null };
    obj[0] = findIndexResult;
    obj[1] = this.modals[findIndexResult].getComponent();
    obj[2] = props;
    obj[3] = null == this.modals[findIndexResult].closable || this.modals[findIndexResult].closable;
    obj[4] = null != this.modals[findIndexResult].backdropInstant && this.modals[findIndexResult].backdropInstant;
    obj[5] = this.modals[findIndexResult].backdropStyle;
    obj[6] = null != this.modals[findIndexResult].disableAnimation && this.modals[findIndexResult].disableAnimation;
    return obj;
  }
};
const result = require("set").fileFinishedImporting("lib/ModalRegistry.tsx");

export default ModalRegistry;
// _runtime/metro/16438__.js
import _mod16386 from "16386__.js";
import _mod16387 from "16387__.js";

export default _mod16386 &&
  _mod16387(() => 42 !== Object.defineProperty(() => {}, "prototype", { value: 42, writable: false }).prototype);

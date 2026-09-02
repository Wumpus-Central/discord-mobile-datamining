// _runtime/00774_stackDelete.js

export default function stackDelete(arg0) {
  const __data__ = this.__data__;
  this.size = __data__.size;
  return __data__.delete(arg0);
}

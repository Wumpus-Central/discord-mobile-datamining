// === Module 618: hashDelete ===

// Module 618 (hashDelete)
let size;


export default function hashDelete(arg0) {
  const self = this;
  const hasItem = this.has(arg0);
  const tmp = arg0;
  if (hasItem) {
    delete self.__data__[tmp];
  }
  let num = 0;
  size = self.size;
  if (hasItem) {
    num = 1;
  }
  self.size = size - num;
  return hasItem;
};
// === Module 128: ? ===

// Module 128
let closure_1, value;


export function createValueIterator(arg0) {
  const length = arg0;
  let c2 = 0;
  let c3 = 0;
  return (function* createValueIterator(arg0) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            closure_1 = 0;
            if (closure_1 >= length.length) {
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          return { value, done: true };
        } else {
          closure_1 = closure_1 + 1;
        }
        c2 = 1;
        c3 = 1;
        return { value: length[closure_1], done: false };
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  })();
}
export function createKeyIterator(arg0) {
  const length = arg0;
  let c2 = 0;
  let c3 = 0;
  return (function* createKeyIterator(arg0) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            value = 0;
            if (value >= length.length) {
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          return { value, done: true };
        } else {
          value = value + 1;
        }
        c2 = 1;
        c3 = 1;
        return { value, done: false };
      } catch (tmp12) {
        c3 = 3;
        throw tmp12;
      }
    }
  })();
}
export function createEntriesIterator(arg0) {
  const length = arg0;
  let c2 = 0;
  let c3 = 0;
  return (function* createEntriesIterator(arg0) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            closure_1 = 0;
            if (closure_1 >= length.length) {
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          return { value, done: true };
        } else {
          closure_1 = closure_1 + 1;
        }
        const items = [closure_1, length[closure_1]];
        c2 = 1;
        c3 = 1;
        return { value: items, done: false };
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  })();
}
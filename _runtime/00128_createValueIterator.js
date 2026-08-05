// _runtime/00128_createValueIterator.js
arg5.createValueIterator = function createValueIterator(arg0) {
  let closure_0 = arg0;
  let c2 = 0;
  let c3 = 0;
  return (function* createValueIterator(arg0) {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            closure_1 = 0;
            if (closure_1 < closure_0.length) {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = closure_0[closure_1];
              return obj1;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_1 = closure_1 + 1;
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  })();
};
arg5.createKeyIterator = function createKeyIterator(arg0) {
  let closure_0 = arg0;
  let c2 = 0;
  let c3 = 0;
  return (function* createKeyIterator(arg0) {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            closure_1 = 0;
            if (closure_1 < closure_0.length) {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = closure_1;
              return obj1;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_1 = closure_1 + 1;
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  })();
};
arg5.createEntriesIterator = function createEntriesIterator(arg0) {
  let closure_0 = arg0;
  let c2 = 0;
  let c3 = 0;
  return (function* createEntriesIterator(arg0) {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            closure_1 = 0;
            if (closure_1 < closure_0.length) {
              const items = [closure_1, closure_0[closure_1]];
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = items;
              return obj1;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_1 = closure_1 + 1;
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  })();
};
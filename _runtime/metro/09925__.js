// _runtime/metro/09925__.js
import "_classCallCheck";
import _createClass from "00042__createClass.js";

let c29;
let str2;
let closure_38;
let obj3;
let fn4;
let _moduleResult1;
let _moduleResult2;
let _moduleResult3;
let _moduleResult4;
let _moduleResult5;
let closure_77;
let _moduleResult6;
let closure_83;
let _moduleResult7;
let _moduleResult8;
let zr;
let _moduleResult9;
let Fr;
let _moduleResult10;
let _moduleResult11;
let _moduleResult12;
let fn = function e() {

};
function t(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  return tmp;
}
function u(fn) {
  return new Promise(fn);
}
function c(arg0) {
  closure_0 = arg0;
  return new Promise((fn) => fn(c0));
}
function d(arg0) {
  return closure_5(arg0);
}
function f(arg0, arg1, arg2) {
  const call = then.call;
  if (typeof call === "unknown") {
    let callResult = then(arg1, undefined);
  } else {
    callResult = call(arg0, arg1, undefined);
  }
  return callResult;
}
function _(arg0, arg1, arg2) {
  const call = then.call;
  if (typeof call === "unknown") {
    let callResult = then(arg1, undefined);
  } else {
    callResult = call(arg0, arg1, undefined);
  }
  return callResult;
}
function S(fn, arg1, arg2) {
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Argument is not a function");
    throw typeError;
  } else {
    const _Function = Function;
    const call = apply.call;
    return typeof call === "unknown" ? apply(arg1, arg2) : call(fn, arg1, arg2);
  }
}
function g(arg0, arg1, arg2) {
  try {
    return c(S(arg0, arg1, arg2));
  } catch (tmp6) {
    return d(tmp6);
  }
}
function q(_reader, _ownerReadableStream) {
  _reader._ownerReadableStream = _ownerReadableStream;
  _ownerReadableStream._reader = _reader;
  if ("readable" === _ownerReadableStream._state) {
    closure_0 = _reader;
    const tmp12 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    _reader._closedPromise = tmp12;
  } else if ("closed" === _ownerReadableStream._state) {
    closure_0 = _reader;
    const tmp6 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    _reader._closedPromise = tmp6;
    if (undefined !== _reader._closedPromise_resolve) {
      const result = _reader._closedPromise_resolve(undefined);
      _reader._closedPromise_resolve = undefined;
      _reader._closedPromise_reject = undefined;
    }
  } else {
    closure_0 = _reader;
    const tmp17 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    _reader._closedPromise = tmp17;
    if (undefined !== _reader._closedPromise_reject) {
      const call = then.call;
      if (typeof call === "unknown") {
        then(undefined, fn);
      } else {
        call(_closedPromise, undefined, fn);
      }
      const result1 = _reader._closedPromise_reject(_ownerReadableStream._storedError);
      _reader._closedPromise_resolve = undefined;
      _reader._closedPromise_reject = undefined;
      _closedPromise = _reader._closedPromise;
    }
  }
}
function W(_ownerReadableStream) {
  _ownerReadableStream = _ownerReadableStream._ownerReadableStream;
  if ("readable" === _ownerReadableStream._state) {
    const _TypeError = TypeError;
    let typeError = new TypeError("Reader was released and can no longer be used to monitor the stream's closedness");
    if (undefined !== _ownerReadableStream._closedPromise_reject) {
      let tmp9 = then;
      const call = then.call;
      if (typeof call === "unknown") {
        tmp9 = tmp9(undefined, fn);
      } else {
        call(_closedPromise, undefined, fn);
      }
      typeError = _ownerReadableStream._closedPromise_reject(typeError);
      _ownerReadableStream._closedPromise_resolve = undefined;
      _ownerReadableStream._closedPromise_reject = undefined;
      _closedPromise = _ownerReadableStream._closedPromise;
    }
  } else {
    const _TypeError2 = TypeError;
    const typeError1 = new TypeError("Reader was released and can no longer be used to monitor the stream's closedness");
    closure_0 = _ownerReadableStream;
    const tmp19 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    _ownerReadableStream._closedPromise = tmp19;
    if (undefined !== _ownerReadableStream._closedPromise_reject) {
      const call2 = then.call;
      if (typeof call2 === "unknown") {
        then(undefined, fn);
      } else {
        call2(_closedPromise2, undefined, fn);
      }
      const result = _ownerReadableStream._closedPromise_reject(typeError1);
      _ownerReadableStream._closedPromise_resolve = undefined;
      _ownerReadableStream._closedPromise_reject = undefined;
      _closedPromise2 = _ownerReadableStream._closedPromise;
    }
  }
  const _readableStreamController = _ownerReadableStream._readableStreamController;
  _readableStreamController[SymbolResult4]();
  _ownerReadableStream._reader = undefined;
  _ownerReadableStream._ownerReadableStream = undefined;
}
function O(arg0) {
  const typeError = new TypeError("Cannot " + "read from" + " a stream using a released reader");
  return typeError;
}
function V(_reader, arg1) {
  const _readRequests = _reader._reader._readRequests;
  _readRequests.push(arg1);
}
function U(_reader, arg1, arg2) {
  const _readRequests = _reader._reader._readRequests;
  _readRequests.shift()._chunkSteps(arg1);
}
function G(_reader) {
  return _reader._reader._readRequests.length;
}
function se(arr, arg1, arg2) {
  if (arr.slice) {
    return arr.slice(arg1, arg2);
  } else {
    const diff = arg2 - arg1;
    const _ArrayBuffer = ArrayBuffer;
    const arrayBuffer = new ArrayBuffer(diff);
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(arrayBuffer);
    const _Uint8Array2 = Uint8Array;
    const uint8Array1 = new Uint8Array(arr, arg1, diff);
    const result = uint8Array.set(uint8Array1, 0);
    return arrayBuffer;
  }
}
function ue(arg0, arg1) {
  const _return = arg0.return;
  if (null != _return) {
    if (typeof _return !== "function") {
      const _TypeError = TypeError;
      const _String = String;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("" + String("return") + " is not a function");
      throw typeError;
    } else {
      return _return;
    }
  }
}
function ce(done) {
  try {
    done = done.done;
    return f(_undefined(done.value), (value) => ({ done, value }));
  } catch (tmp4) {
    return d(tmp4);
  }
}
function fe(getReader) {
  let tmp = getReader2;
  if (undefined === getReader2) {
    if ("async" === sync) {
      let tmp13;
      if (null != getReader[str2]) {
        tmp13 = tmp11;
        if (typeof tmp11 !== "function") {
          const _TypeError6 = TypeError;
          const _String3 = String;
          const _HermesInternal3 = HermesInternal;
          let typeError = new TypeError("" + String(tmp10) + " is not a function");
          throw typeError;
        }
      }
      tmp = tmp13;
      if (undefined === tmp13) {
        const _Symbol2 = Symbol;
        let tmp32;
        if (null != getReader[iterator2]) {
          tmp32 = tmp31;
          if (typeof tmp31 !== "function") {
            const _TypeError5 = TypeError;
            const _String2 = String;
            const _HermesInternal2 = HermesInternal;
            const typeError1 = new TypeError("" + String(iterator2) + " is not a function");
            throw typeError1;
          }
        }
        let iterator = fe(getReader, "sync", tmp32);
        const obj2 = {
          next() {
                  try {
                    return ce(be(closure_0));
                  } catch (tmp4) {
                    return d(tmp4);
                  }
                },
          return(value) {
                  try {
                    const tmp4 = ue(iterator.iterator, "return");
                    if (undefined === tmp4) {
                      const obj = { done: true, value };
                      return c(obj);
                    } else {
                      items = [value];
                      const tmp8 = S(tmp5, iterator.iterator, items);
                      if (t(tmp8)) {
                        let tmp17 = ce(tmp8);
                      } else {
                        const _TypeError = TypeError;
                        const typeError = new TypeError("The iterator.return() method must return an object");
                        tmp17 = d(typeError);
                      }
                      return tmp17;
                    }
                  } catch (tmp20) {
                    return d(tmp20);
                  }
                }
        };
        obj3 = { iterator: obj2, nextMethod: obj2.next, done: false };
        return obj3;
      }
    } else {
      const _Symbol = Symbol;
      iterator = Symbol.iterator;
      let tmp5;
      if (null != getReader[iterator]) {
        tmp5 = tmp3;
        if (typeof tmp3 !== "function") {
          let _TypeError = TypeError;
          const _String = String;
          const _HermesInternal = HermesInternal;
          const typeError2 = new TypeError("" + String(iterator) + " is not a function");
          throw typeError2;
        }
      }
      tmp = tmp5;
    }
  }
  if (undefined === tmp) {
    const _TypeError4 = TypeError;
    const typeError3 = new TypeError("The object is not iterable");
    throw typeError3;
  } else if (typeof tmp !== "function") {
    const _TypeError3 = TypeError;
    const typeError4 = new TypeError("Argument is not a function");
    throw typeError4;
  } else {
    items = [];
    const _Function = Function;
    const call = apply.call;
    const iter = typeof call === "unknown" ? apply(getReader, items) : call(tmp, getReader, items);
    let tmp14 = typeof iter === "object";
    if (typeof iter === "object") {
      tmp14 = null !== iter;
    }
    if (!tmp14) {
      tmp14 = typeof iter === "function";
    }
    if (tmp14) {
      let obj = { iterator: iter, nextMethod: iter.next, done: false };
      return obj;
    } else {
      const _TypeError2 = TypeError;
      const typeError5 = new TypeError("The iterator method must return an object");
      throw typeError5;
    }
  }
}
function be(arg0) {
  ({ nextMethod, iterator } = arg0);
  if (typeof nextMethod !== "function") {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Argument is not a function");
    throw typeError;
  } else {
    items = [];
    const _Function = Function;
    const call = apply.call;
    const tmp = typeof call === "unknown" ? apply(iterator, items) : call(nextMethod, iterator, items);
    let tmp2 = typeof tmp === "object";
    if (typeof tmp === "object") {
      tmp2 = null !== tmp;
    }
    if (!tmp2) {
      tmp2 = typeof tmp === "function";
    }
    if (tmp2) {
      return tmp;
    } else {
      const _TypeError = TypeError;
      const typeError1 = new TypeError("The iterator.next() method must return an object");
      throw typeError1;
    }
  }
}
function _e(_asyncIteratorImpl) {
  if (t(_asyncIteratorImpl)) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty("_asyncIteratorImpl");
    } else {
      hasOwnPropertyResult = call(_asyncIteratorImpl, "_asyncIteratorImpl");
    }
    if (hasOwnPropertyResult) {
      try {
        return _asyncIteratorImpl._asyncIteratorImpl instanceof closure_38;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function Se(byteOffset) {
  ({ buffer, byteOffset } = byteOffset);
  const sum = byteOffset.byteOffset + byteOffset.byteLength;
  if (buffer.slice) {
    let substr = buffer.slice(byteOffset, sum);
  } else {
    const diff = sum - byteOffset;
    const _ArrayBuffer = ArrayBuffer;
    const arrayBuffer = new ArrayBuffer(diff);
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(arrayBuffer);
    const _Uint8Array2 = Uint8Array;
    const uint8Array1 = new Uint8Array(buffer, byteOffset, diff);
    const result = uint8Array.set(uint8Array1, 0);
    substr = arrayBuffer;
  }
  const uint8Array2 = new Uint8Array(substr);
  return uint8Array2;
}
function ve(_queue, value, size) {
  if (typeof size === "number") {
    if (!fn4(size)) {
      if (size >= 0) {
        if (size !== Infinity) {
          _queue = _queue._queue;
          const obj = { value, size };
          _queue.push(obj);
          _queue._queueTotalSize = _queue._queueTotalSize + size;
        }
      }
    }
  }
  const rangeError = new RangeError("Size must be a finite, non-NaN, non-negative number.");
  throw rangeError;
}
function Pe(_controlledReadableByteStream) {
  _controlledReadableByteStream = _controlledReadableByteStream._controlledReadableByteStream;
  let tmp = "readable" === _controlledReadableByteStream._state;
  if (tmp) {
    const _closeRequested = _controlledReadableByteStream._closeRequested;
    let tmp2 = !_closeRequested;
    if (!_closeRequested) {
      let _started = _controlledReadableByteStream._started;
      if (_started) {
        const _reader = _controlledReadableByteStream._reader;
        let tmp4 = undefined !== _reader;
        if (tmp4) {
          let tmp5 = typeof _reader === "object";
          if (typeof _reader === "object") {
            tmp5 = null !== _reader;
          }
          if (!tmp5) {
            tmp5 = typeof _reader === "function";
          }
          let tmp6 = tmp5;
          if (!tmp6) {
            if (tmp6) {
              tmp6 = _reader instanceof c29;
            }
            tmp4 = tmp6;
          } else {
            const _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            const call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty("_readRequests");
            } else {
              hasOwnPropertyResult = call(_reader, "_readRequests");
            }
          }
        }
        if (tmp4) {
          tmp4 = _controlledReadableByteStream._reader._readRequests.length > 0;
        }
        let tmp11 = tmp4;
        if (!tmp11) {
          const _reader2 = _controlledReadableByteStream._reader;
          let tmp12 = undefined !== _reader2;
          if (tmp12) {
            let tmp13 = typeof _reader2 === "object";
            if (typeof _reader2 === "object") {
              tmp13 = null !== _reader2;
            }
            if (!tmp13) {
              tmp13 = typeof _reader2 === "function";
            }
            let tmp14 = tmp13;
            if (!tmp14) {
              if (tmp14) {
                tmp14 = _reader2 instanceof _moduleResult3;
              }
              tmp12 = tmp14;
            } else {
              const _Object2 = Object;
              const call2 = hasOwnProperty2.call;
              if (typeof call2 === "unknown") {
                let hasOwnProperty2Result = hasOwnProperty2("_readIntoRequests");
              } else {
                hasOwnProperty2Result = call2(_reader2, "_readIntoRequests");
              }
            }
          }
          if (tmp12) {
            tmp12 = _controlledReadableByteStream._reader._readIntoRequests.length > 0;
          }
          let tmp19 = tmp12;
          if (!tmp19) {
            const _state = _controlledReadableByteStream._controlledReadableByteStream._state;
            let tmp20 = null;
            if ("errored" !== _state) {
              let num3 = 0;
              if ("closed" !== _state) {
                num3 = _controlledReadableByteStream._strategyHWM - _controlledReadableByteStream._queueTotalSize;
              }
              tmp20 = num3;
            }
            tmp19 = tmp20 > 0;
          }
          tmp11 = tmp19;
        }
        _started = tmp11;
      }
      tmp2 = _started;
    }
    tmp = tmp2;
  }
  if (tmp) {
    if (_controlledReadableByteStream._pulling) {
      _controlledReadableByteStream._pullAgain = true;
    } else {
      _controlledReadableByteStream._pulling = true;
      fn = () => {
        _controlledReadableByteStream._pulling = false;
        if (_controlledReadableByteStream._pullAgain) {
          _controlledReadableByteStream._pullAgain = false;
          Pe(_controlledReadableByteStream);
        }
        return null;
      };
      const fn2 = (typeError) => {
        _controlledReadableByteStream = _controlledReadableByteStream._controlledReadableByteStream;
        if ("readable" === _controlledReadableByteStream._state) {
          if (null !== tmp._byobRequest) {
            tmp._byobRequest._associatedReadableByteStreamController = undefined;
            tmp._byobRequest._view = null;
            tmp._byobRequest = null;
          }
          const tmp6 = new closure_15();
          tmp._pendingPullIntos = tmp6;
          const tmp10 = new closure_15();
          tmp._queue = tmp10;
          tmp._queueTotalSize = 0;
          tmp._pullAlgorithm = undefined;
          tmp._cancelAlgorithm = undefined;
          jr(_controlledReadableByteStream, typeError);
        }
        return null;
      };
      const call3 = then.call;
      const _pullAlgorithmResult = _controlledReadableByteStream._pullAlgorithm();
      const call4 = then.call;
      if (typeof call4 === "unknown") {
        then(undefined, tmp24);
      } else {
        call4(tmp23, undefined, tmp24);
      }
      tmp23 = typeof call3 === "unknown" ? then(fn, fn2) : call3(_controlledReadableByteStream._pullAlgorithm(), fn, fn2);
    }
  }
}
function Oe(viewConstructor) {
  viewConstructor = new viewConstructor.viewConstructor(viewConstructor.buffer, viewConstructor.byteOffset, viewConstructor.bytesFilled / viewConstructor.elementSize);
  return viewConstructor;
}
function Be(_queue, buffer, arg2, byteLength) {
  _queue = _queue._queue;
  _queue.push({ buffer, byteOffset: 0, byteLength });
  _queue._queueTotalSize = _queue._queueTotalSize + byteLength;
}
function je(_readableStreamController, buffer, byteOffset, bytesFilled) {
  try {
    const tmp6 = se(buffer, byteOffset, byteOffset + bytesFilled);
    Be(_readableStreamController, tmp6, 0, bytesFilled);
  } catch (tmp12) {
    Ne(tmp, tmp12);
    throw tmp12;
  }
}
function Ae(_queueTotalSize, peekResult1) {
  const bound = Math.min(_queueTotalSize._queueTotalSize, peekResult1.byteLength - peekResult1.bytesFilled);
  const sum = peekResult1.bytesFilled + bound;
  const diff = sum - sum % peekResult1.elementSize;
  let flag = false;
  let diff1 = bound;
  if (diff >= peekResult1.minimumFill) {
    diff1 = diff - peekResult1.bytesFilled;
    flag = true;
  }
  const _queue = _queueTotalSize._queue;
  if (diff1 > 0) {
    do {
      let peekResult = _queue.peek();
      let _Math = Math;
      let bound1 = Math.min(diff1, peekResult.byteLength);
      let buffer = peekResult.buffer;
      let _Uint8Array = Uint8Array;
      let tmp8 = new.target;
      let tmp9 = new.target;
      let sum1 = peekResult1.byteOffset + peekResult1.bytesFilled;
      let uint8Array = new Uint8Array(peekResult1.buffer);
      let _Uint8Array2 = Uint8Array;
      let tmp11 = new.target;
      let tmp12 = new.target;
      let uint8Array1 = new Uint8Array(buffer, peekResult.byteOffset, bound1);
      let result = uint8Array.set(uint8Array1, sum1);
      if (peekResult.byteLength === bound1) {
        let arr = _queue.shift();
      } else {
        peekResult.byteOffset = peekResult.byteOffset + bound1;
        peekResult.byteLength = peekResult.byteLength - bound1;
      }
      _queueTotalSize._queueTotalSize = _queueTotalSize._queueTotalSize - bound1;
      peekResult1.bytesFilled = peekResult1.bytesFilled + bound1;
      diff1 = diff1 - bound1;
    } while (diff1 > 0);
  }
  return flag;
}
function De(_queueTotalSize) {
  if (0 === _queueTotalSize._queueTotalSize) {
    if (_queueTotalSize._closeRequested) {
      _queueTotalSize._pullAlgorithm = undefined;
      _queueTotalSize._cancelAlgorithm = undefined;
      Br(_queueTotalSize._controlledReadableByteStream);
    }
  }
  Pe(_queueTotalSize);
}
function $e(_associatedReadableByteStreamController, byteLength) {
  let length;
  let length2;
  const _pendingPullIntos = _associatedReadableByteStreamController._pendingPullIntos;
  const peekResult = _pendingPullIntos.peek();
  if (null !== _associatedReadableByteStreamController._byobRequest) {
    _associatedReadableByteStreamController._byobRequest._associatedReadableByteStreamController = undefined;
    _associatedReadableByteStreamController._byobRequest._view = null;
    _associatedReadableByteStreamController._byobRequest = null;
  }
  if ("closed" === _associatedReadableByteStreamController._controlledReadableByteStream._state) {
    if ("none" === peekResult.readerType) {
      const _pendingPullIntos1 = _associatedReadableByteStreamController._pendingPullIntos;
      _pendingPullIntos1.shift();
    }
    const _controlledReadableByteStream4 = _associatedReadableByteStreamController._controlledReadableByteStream;
    const _reader = _controlledReadableByteStream4._reader;
    let tmp47 = undefined !== _reader;
    if (tmp47) {
      let tmp48 = typeof _reader === "object";
      if (typeof _reader === "object") {
        tmp48 = null !== _reader;
      }
      if (!tmp48) {
        tmp48 = typeof _reader === "function";
      }
      let tmp49 = tmp48;
      if (!tmp49) {
        if (tmp49) {
          tmp49 = _reader instanceof _moduleResult3;
        }
        tmp47 = tmp49;
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readIntoRequests");
        } else {
          hasOwnPropertyResult = call(_reader, "_readIntoRequests");
        }
      }
    }
    if (tmp47) {
      items = [];
      if (items.length < _controlledReadableByteStream4._reader._readIntoRequests.length) {
        do {
          let _pendingPullIntos4 = _associatedReadableByteStreamController._pendingPullIntos;
          let arr2 = items.push(_pendingPullIntos4.shift());
          length = items.length;
          length2 = _controlledReadableByteStream4._reader._readIntoRequests.length;
        } while (length < length2);
      }
      for (let num7 = 0; num7 < items.length; num7 = num7 + 1) {
        let tmp55 = items[num7];
        let flag4 = false;
        if ("closed" === _controlledReadableByteStream4._state) {
          flag4 = true;
        }
        let tmp57 = new.target;
        let tmp58 = new.target;
        let viewConstructor = new tmp55.viewConstructor(tmp55.buffer, tmp55.byteOffset, tmp55.bytesFilled / tmp55.elementSize);
        if ("default" === tmp55.readerType) {
          let _readRequests = _controlledReadableByteStream4._reader._readRequests;
          let arr3 = _readRequests.shift();
          if (flag4) {
            let _closeStepsResult = arr3._closeSteps();
          } else {
            let _chunkStepsResult = arr3._chunkSteps(viewConstructor);
          }
        } else {
          let _readIntoRequests = _controlledReadableByteStream4._reader._readIntoRequests;
          let arr4 = _readIntoRequests.shift();
          if (flag4) {
            let _closeStepsResult1 = arr4._closeSteps(viewConstructor);
          } else {
            let _chunkStepsResult1 = arr4._chunkSteps(viewConstructor);
          }
        }
      }
    }
  } else {
    peekResult.bytesFilled = peekResult.bytesFilled + byteLength;
    if ("none" !== peekResult.readerType) {
      if (peekResult.bytesFilled >= peekResult.minimumFill) {
        const _pendingPullIntos5 = _associatedReadableByteStreamController._pendingPullIntos;
        _pendingPullIntos5.shift();
        const result = peekResult.bytesFilled % peekResult.elementSize;
        if (result > 0) {
          je(_associatedReadableByteStreamController, peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled - result, result);
        }
        peekResult.bytesFilled = peekResult.bytesFilled - result;
        const items1 = [];
        if (_associatedReadableByteStreamController._pendingPullIntos.length > 0) {
          if (0 !== _associatedReadableByteStreamController._queueTotalSize) {
            while (true) {
              let _pendingPullIntos3 = _associatedReadableByteStreamController._pendingPullIntos;
              let peekResult1 = _pendingPullIntos3.peek();
              if (Ae(_associatedReadableByteStreamController, peekResult1)) {
                let _pendingPullIntos6 = _associatedReadableByteStreamController._pendingPullIntos;
                let arr6 = _pendingPullIntos6.shift();
                let arr7 = items1.push(peekResult1);
              }
              if (_associatedReadableByteStreamController._pendingPullIntos.length <= 0) {
                break;
              } else if (0 === _associatedReadableByteStreamController._queueTotalSize) {
                break;
              }
            }
          }
        }
        const _controlledReadableByteStream2 = _associatedReadableByteStreamController._controlledReadableByteStream;
        let flag2 = false;
        if ("closed" === _controlledReadableByteStream2._state) {
          flag2 = true;
        }
        const viewConstructor1 = new peekResult.viewConstructor(peekResult.buffer, peekResult.byteOffset, peekResult.bytesFilled / peekResult.elementSize);
        if ("default" === peekResult.readerType) {
          const _readRequests1 = _controlledReadableByteStream2._reader._readRequests;
          const arr8 = _readRequests1.shift();
          if (flag2) {
            arr8._closeSteps();
          } else {
            arr8._chunkSteps(viewConstructor1);
          }
        } else {
          const _readIntoRequests1 = _controlledReadableByteStream2._reader._readIntoRequests;
          const arr9 = _readIntoRequests1.shift();
          if (flag2) {
            arr9._closeSteps(viewConstructor1);
          } else {
            arr9._chunkSteps(viewConstructor1);
          }
        }
        const _controlledReadableByteStream3 = _associatedReadableByteStreamController._controlledReadableByteStream;
        for (let num6 = 0; num6 < items1.length; num6 = num6 + 1) {
          let tmp36 = items1[num6];
          let flag3 = false;
          if ("closed" === _controlledReadableByteStream3._state) {
            flag3 = true;
          }
          let tmp38 = new.target;
          let tmp39 = new.target;
          let viewConstructor2 = new tmp36.viewConstructor(tmp36.buffer, tmp36.byteOffset, tmp36.bytesFilled / tmp36.elementSize);
          if ("default" === tmp36.readerType) {
            let _readRequests2 = _controlledReadableByteStream3._reader._readRequests;
            let arr10 = _readRequests2.shift();
            if (flag3) {
              let _closeStepsResult4 = arr10._closeSteps();
            } else {
              let _chunkStepsResult4 = arr10._chunkSteps(viewConstructor2);
            }
          } else {
            let _readIntoRequests2 = _controlledReadableByteStream3._reader._readIntoRequests;
            let arr11 = _readIntoRequests2.shift();
            if (flag3) {
              let _closeStepsResult5 = arr11._closeSteps(viewConstructor2);
            } else {
              let _chunkStepsResult5 = arr11._chunkSteps(viewConstructor2);
            }
          }
        }
      }
    } else {
      if (peekResult.bytesFilled > 0) {
        je(_associatedReadableByteStreamController, peekResult.buffer, peekResult.byteOffset, peekResult.bytesFilled);
      }
      const _pendingPullIntos7 = _associatedReadableByteStreamController._pendingPullIntos;
      _pendingPullIntos7.shift();
      const items2 = [];
      if (_associatedReadableByteStreamController._pendingPullIntos.length > 0) {
        if (0 !== _associatedReadableByteStreamController._queueTotalSize) {
          while (true) {
            let _pendingPullIntos2 = _associatedReadableByteStreamController._pendingPullIntos;
            let peekResult2 = _pendingPullIntos2.peek();
            if (Ae(_associatedReadableByteStreamController, peekResult2)) {
              let _pendingPullIntos8 = _associatedReadableByteStreamController._pendingPullIntos;
              let arr13 = _pendingPullIntos8.shift();
              let arr14 = items2.push(peekResult2);
            }
            if (_associatedReadableByteStreamController._pendingPullIntos.length <= 0) {
              break;
            } else if (0 === _associatedReadableByteStreamController._queueTotalSize) {
              break;
            }
          }
        }
      }
      const _controlledReadableByteStream = _associatedReadableByteStreamController._controlledReadableByteStream;
      for (let num3 = 0; num3 < items2.length; num3 = num3 + 1) {
        let tmp10 = items2[num3];
        let flag = false;
        if ("closed" === _controlledReadableByteStream._state) {
          flag = true;
        }
        let tmp12 = new.target;
        let tmp13 = new.target;
        let viewConstructor3 = new tmp10.viewConstructor(tmp10.buffer, tmp10.byteOffset, tmp10.bytesFilled / tmp10.elementSize);
        if ("default" === tmp10.readerType) {
          let _readRequests3 = _controlledReadableByteStream._reader._readRequests;
          let arr15 = _readRequests3.shift();
          if (flag) {
            let _closeStepsResult6 = arr15._closeSteps();
          } else {
            let _chunkStepsResult6 = arr15._chunkSteps(viewConstructor3);
          }
        } else {
          let _readIntoRequests3 = _controlledReadableByteStream._reader._readIntoRequests;
          let arr16 = _readIntoRequests3.shift();
          if (flag) {
            let _closeStepsResult7 = arr16._closeSteps(viewConstructor3);
          } else {
            let _chunkStepsResult7 = arr16._chunkSteps(viewConstructor3);
          }
        }
      }
    }
  }
  Pe(_associatedReadableByteStreamController);
}
function Qe(_readableStreamController) {
  const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
  if (!_readableStreamController._closeRequested) {
    if ("readable" === _controlledReadableByteStream._state) {
      if (_readableStreamController._queueTotalSize > 0) {
        _readableStreamController._closeRequested = true;
      } else {
        if (_readableStreamController._pendingPullIntos.length > 0) {
          const _pendingPullIntos = _readableStreamController._pendingPullIntos;
          const peekResult = _pendingPullIntos.peek();
          if (peekResult.bytesFilled % peekResult.elementSize != 0) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Insufficient bytes to fill elements in the given buffer");
            const _controlledReadableByteStream2 = _readableStreamController._controlledReadableByteStream;
            if ("readable" === _controlledReadableByteStream2._state) {
              if (null !== _readableStreamController._byobRequest) {
                _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
                _readableStreamController._byobRequest._view = null;
                _readableStreamController._byobRequest = null;
              }
              const tmp13 = new closure_15();
              _readableStreamController._pendingPullIntos = tmp13;
              const tmp17 = new closure_15();
              _readableStreamController._queue = tmp17;
              _readableStreamController._queueTotalSize = 0;
              _readableStreamController._pullAlgorithm = undefined;
              _readableStreamController._cancelAlgorithm = undefined;
              jr(_controlledReadableByteStream2, typeError);
            }
            throw typeError;
          }
        }
        _readableStreamController._pullAlgorithm = undefined;
        _readableStreamController._cancelAlgorithm = undefined;
        Br(_controlledReadableByteStream);
      }
    }
  }
}
function xe(_readableStreamController, byteLength) {
  const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
  if (!_readableStreamController._closeRequested) {
    if ("readable" === _controlledReadableByteStream._state) {
      ({ buffer, byteOffset, byteLength } = byteLength);
      if (fn(buffer)) {
        const _TypeError2 = TypeError;
        const typeError = new TypeError("chunk's buffer is detached and so cannot be enqueued");
        throw typeError;
      } else {
        const tmp2 = fn(buffer);
        if (_readableStreamController._pendingPullIntos.length > 0) {
          const _pendingPullIntos2 = _readableStreamController._pendingPullIntos;
          const peekResult = _pendingPullIntos2.peek();
          if (fn(peekResult.buffer)) {
            const _TypeError = TypeError;
            const typeError1 = new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
            throw typeError1;
          } else {
            if (null !== _readableStreamController._byobRequest) {
              _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
              _readableStreamController._byobRequest._view = null;
              _readableStreamController._byobRequest = null;
            }
            peekResult.buffer = fn(peekResult.buffer);
            if ("none" === peekResult.readerType) {
              if (peekResult.bytesFilled > 0) {
                je(_readableStreamController, peekResult.buffer, peekResult.byteOffset, peekResult.bytesFilled);
              }
              const _pendingPullIntos1 = _readableStreamController._pendingPullIntos;
              _pendingPullIntos1.shift();
            }
          }
        }
        const _reader = _controlledReadableByteStream._reader;
        let tmp9 = undefined !== _reader;
        if (tmp9) {
          let tmp10 = typeof _reader === "object";
          if (typeof _reader === "object") {
            tmp10 = null !== _reader;
          }
          if (!tmp10) {
            tmp10 = typeof _reader === "function";
          }
          let tmp11 = tmp10;
          if (!tmp11) {
            if (tmp11) {
              tmp11 = _reader instanceof c29;
            }
            tmp9 = tmp11;
          } else {
            const _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            const call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty("_readRequests");
            } else {
              hasOwnPropertyResult = call(_reader, "_readRequests");
            }
          }
        }
        if (tmp9) {
          const _reader3 = _readableStreamController._controlledReadableByteStream._reader;
          if (_reader3._readRequests.length > 0) {
            while (0 !== _readableStreamController._queueTotalSize) {
              let _readRequests = _reader3._readRequests;
              let arr2 = _readRequests.shift();
              let _queue = _readableStreamController._queue;
              let arr3 = _queue.shift();
              _readableStreamController._queueTotalSize = _readableStreamController._queueTotalSize - arr3.byteLength;
              if (0 === _readableStreamController._queueTotalSize) {
                if (_readableStreamController._closeRequested) {
                  _readableStreamController._pullAlgorithm = undefined;
                  _readableStreamController._cancelAlgorithm = undefined;
                  let tmp42 = Br(_readableStreamController._controlledReadableByteStream);
                  let _Uint8Array = Uint8Array;
                  let tmp43 = new.target;
                  let tmp44 = new.target;
                  let uint8Array = new Uint8Array(arr3.buffer, arr3.byteOffset, arr3.byteLength);
                  let _chunkStepsResult = arr2._chunkSteps(uint8Array);
                  if (_reader3._readRequests.length <= 0) {
                    break;
                  }
                }
              }
              let tmp40 = Pe(_readableStreamController);
            }
          }
          if (0 === _controlledReadableByteStream._reader._readRequests.length) {
            const _queue1 = _readableStreamController._queue;
            const obj2 = { buffer: tmp2, byteOffset, byteLength };
            _queue1.push(obj2);
            _readableStreamController._queueTotalSize = _readableStreamController._queueTotalSize + byteLength;
          } else {
            if (_readableStreamController._pendingPullIntos.length > 0) {
              const _pendingPullIntos3 = _readableStreamController._pendingPullIntos;
              _pendingPullIntos3.shift();
            }
            const _Uint8Array2 = Uint8Array;
            const uint8Array1 = new Uint8Array(tmp2, byteOffset, byteLength);
            const _readRequests1 = _controlledReadableByteStream._reader._readRequests;
            _readRequests1.shift()._chunkSteps(uint8Array1);
            const arr6 = _readRequests1.shift();
          }
        } else {
          const _reader2 = _controlledReadableByteStream._reader;
          let tmp16 = undefined !== _reader2;
          if (tmp16) {
            let tmp17 = typeof _reader2 === "object";
            if (typeof _reader2 === "object") {
              tmp17 = null !== _reader2;
            }
            if (!tmp17) {
              tmp17 = typeof _reader2 === "function";
            }
            let tmp18 = tmp17;
            if (!tmp18) {
              if (tmp18) {
                tmp18 = _reader2 instanceof _moduleResult3;
              }
              tmp16 = tmp18;
            } else {
              const _Object2 = Object;
              const call2 = hasOwnProperty2.call;
              if (typeof call2 === "unknown") {
                let hasOwnProperty2Result = hasOwnProperty2("_readIntoRequests");
              } else {
                hasOwnProperty2Result = call2(_reader2, "_readIntoRequests");
              }
            }
          }
          const _queue2 = _readableStreamController._queue;
          const obj = { buffer: tmp2, byteOffset, byteLength };
          _queue2.push(obj);
          _readableStreamController._queueTotalSize = _readableStreamController._queueTotalSize + byteLength;
          if (tmp16) {
            items = [];
            if (_readableStreamController._pendingPullIntos.length > 0) {
              if (0 !== _readableStreamController._queueTotalSize) {
                while (true) {
                  let _pendingPullIntos = _readableStreamController._pendingPullIntos;
                  let peekResult1 = _pendingPullIntos.peek();
                  if (Ae(_readableStreamController, peekResult1)) {
                    let _pendingPullIntos4 = _readableStreamController._pendingPullIntos;
                    let arr8 = _pendingPullIntos4.shift();
                    let arr9 = items.push(peekResult1);
                  }
                  if (_readableStreamController._pendingPullIntos.length <= 0) {
                    break;
                  } else if (0 === _readableStreamController._queueTotalSize) {
                    break;
                  }
                }
              }
            }
            for (let num4 = 0; num4 < items.length; num4 = num4 + 1) {
              let tmp28 = items[num4];
              let flag = false;
              if ("closed" === _controlledReadableByteStream._state) {
                flag = true;
              }
              let tmp30 = new.target;
              let tmp31 = new.target;
              let viewConstructor = new tmp28.viewConstructor(tmp28.buffer, tmp28.byteOffset, tmp28.bytesFilled / tmp28.elementSize);
              if ("default" === tmp28.readerType) {
                let _readRequests2 = _controlledReadableByteStream._reader._readRequests;
                let arr10 = _readRequests2.shift();
                if (flag) {
                  let _closeStepsResult = arr10._closeSteps();
                } else {
                  let _chunkStepsResult2 = arr10._chunkSteps(viewConstructor);
                }
              } else {
                let _readIntoRequests = _controlledReadableByteStream._reader._readIntoRequests;
                let arr11 = _readIntoRequests.shift();
                if (flag) {
                  let _closeStepsResult1 = arr11._closeSteps(viewConstructor);
                } else {
                  let _chunkStepsResult3 = arr11._chunkSteps(viewConstructor);
                }
              }
            }
          }
        }
        Pe(_readableStreamController);
      }
    }
  }
}
function Ne(_readableStreamController, typeError) {
  const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
  if ("readable" === _controlledReadableByteStream._state) {
    if (null !== _readableStreamController._byobRequest) {
      _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
      _readableStreamController._byobRequest._view = null;
      _readableStreamController._byobRequest = null;
    }
    const tmp5 = new closure_15();
    _readableStreamController._pendingPullIntos = tmp5;
    const tmp9 = new closure_15();
    _readableStreamController._queue = tmp9;
    _readableStreamController._queueTotalSize = 0;
    _readableStreamController._pullAlgorithm = undefined;
    _readableStreamController._cancelAlgorithm = undefined;
    jr(_controlledReadableByteStream, typeError);
  }
}
function He(_queue, _chunkSteps) {
  _queue = _queue._queue;
  const arr = _queue.shift();
  _queue._queueTotalSize = _queue._queueTotalSize - arr.byteLength;
  if (0 === _queue._queueTotalSize) {
    if (_queue._closeRequested) {
      _queue._pullAlgorithm = undefined;
      _queue._cancelAlgorithm = undefined;
      Br(_queue._controlledReadableByteStream);
    }
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    _chunkSteps._chunkSteps(uint8Array);
  }
  Pe(_queue);
}
function Xe(_readableStreamController, byteLength) {
  const _pendingPullIntos = _readableStreamController._pendingPullIntos;
  const peekResult = _pendingPullIntos.peek();
  if ("closed" === _readableStreamController._controlledReadableByteStream._state) {
    if (0 !== byteLength.byteLength) {
      const _TypeError2 = TypeError;
      const typeError = new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
      throw typeError;
    }
  } else if (0 === byteLength.byteLength) {
    const _TypeError = TypeError;
    const typeError1 = new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
    throw typeError1;
  }
  if (peekResult.byteOffset + peekResult.bytesFilled !== byteLength.byteOffset) {
    const _RangeError3 = RangeError;
    const rangeError = new RangeError("The region specified by view does not match byobRequest");
    throw rangeError;
  } else if (peekResult.bufferByteLength !== byteLength.buffer.byteLength) {
    const _RangeError2 = RangeError;
    const rangeError1 = new RangeError("The buffer of view has different capacity than byobRequest");
    throw rangeError1;
  } else if (peekResult.bytesFilled + byteLength.byteLength > peekResult.byteLength) {
    const _RangeError = RangeError;
    const rangeError2 = new RangeError("The region specified by view is larger than byobRequest");
    throw rangeError2;
  } else {
    peekResult.buffer = fn(byteLength.buffer);
    $e(_readableStreamController, byteLength.byteLength);
  }
}
function Je(_controlledReadableByteStream, _readableStreamController, T, fn3, _cancelAlgorithm, _strategyHWM, _autoAllocateChunkSize) {
  _readableStreamController._controlledReadableByteStream = _controlledReadableByteStream;
  _readableStreamController._pullAgain = false;
  _readableStreamController._pulling = false;
  _readableStreamController._byobRequest = null;
  _readableStreamController._queueTotalSize = undefined;
  _readableStreamController._queue = undefined;
  _readableStreamController._queue = new closure_15();
  _readableStreamController._queueTotalSize = 0;
  _readableStreamController._closeRequested = false;
  _readableStreamController._started = false;
  _readableStreamController._strategyHWM = _strategyHWM;
  _readableStreamController._pullAlgorithm = fn3;
  _readableStreamController._cancelAlgorithm = _cancelAlgorithm;
  _readableStreamController._autoAllocateChunkSize = _autoAllocateChunkSize;
  const tmp = new closure_15();
  _readableStreamController._pendingPullIntos = new closure_15();
  _controlledReadableByteStream._readableStreamController = _readableStreamController;
  closure_0 = T();
  const tmp2 = new closure_15();
  fn = () => {
    closure_0._started = true;
    Pe(closure_0);
    return null;
  };
  const fn2 = (typeError) => {
    const _controlledReadableByteStream = closure_0._controlledReadableByteStream;
    if ("readable" === _controlledReadableByteStream._state) {
      if (null !== closure_0._byobRequest) {
        closure_0._byobRequest._associatedReadableByteStreamController = undefined;
        closure_0._byobRequest._view = null;
        closure_0._byobRequest = null;
      }
      const tmp6 = new closure_15();
      closure_0._pendingPullIntos = tmp6;
      const tmp10 = new closure_15();
      closure_0._queue = tmp10;
      closure_0._queueTotalSize = 0;
      closure_0._pullAlgorithm = undefined;
      closure_0._cancelAlgorithm = undefined;
      jr(_controlledReadableByteStream, typeError);
    }
    return null;
  };
  const call = then.call;
  const tmp3 = new Promise((fn) => fn(c0));
  const call2 = then.call;
  if (typeof call2 === "unknown") {
    then(undefined, tmp6);
  } else {
    call2(tmp5, undefined, tmp6);
  }
  tmp5 = typeof call === "unknown" ? then(fn, fn2) : call(new Promise((fn) => fn(c0)), fn, fn2);
}
function rt(_reader, arg1) {
  const _readIntoRequests = _reader._reader._readIntoRequests;
  _readIntoRequests.push(arg1);
}
function at(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  let tmp2 = tmp;
  if (!tmp2) {
    if (tmp2) {
      tmp2 = obj instanceof _moduleResult3;
    }
    return tmp2;
  } else {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty("_readIntoRequests");
    } else {
      hasOwnPropertyResult = call(obj, "_readIntoRequests");
    }
  }
}
function it(_ownerReadableStream, buffer, arg2, _errorSteps) {
  _ownerReadableStream = _ownerReadableStream._ownerReadableStream;
  _ownerReadableStream._disturbed = true;
  if ("errored" === _ownerReadableStream._state) {
    _errorSteps._errorSteps(_ownerReadableStream._storedError);
  } else {
    (function Ie(_readableStreamController, buffer, arg2, _chunkSteps) {
      const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
      const constructor = buffer.constructor;
      try {
        const tmp6 = closure_1_30(buffer.buffer);
        const obj2 = { buffer: tmp6, bufferByteLength: tmp6.byteLength, byteOffset: tmp2, byteLength: tmp3, bytesFilled: 0, minimumFill: tmp4, elementSize: tmp, viewConstructor: constructor, readerType: "byob" };
        if (_readableStreamController._pendingPullIntos.length > 0) {
          const _pendingPullIntos = _readableStreamController._pendingPullIntos;
          _pendingPullIntos.push(obj2);
          closure_1_59(_controlledReadableByteStream, _chunkSteps);
        } else if ("closed" !== _controlledReadableByteStream._state) {
          if (_readableStreamController._queueTotalSize > 0) {
            if (closure_1_50(_readableStreamController, obj2)) {
              closure_1_51(_readableStreamController);
              _chunkSteps._chunkSteps(closure_1_47(obj2));
              const tmp27 = closure_1_47(obj2);
            } else if (_readableStreamController._closeRequested) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Insufficient bytes to fill elements in the given buffer");
              closure_1_55(_readableStreamController, typeError);
              _chunkSteps._errorSteps(typeError);
            }
          }
          const _pendingPullIntos1 = _readableStreamController._pendingPullIntos;
          _pendingPullIntos1.push(obj2);
          closure_1_59(_controlledReadableByteStream, _chunkSteps);
          closure_1_46(_readableStreamController);
        } else {
          const constructor1 = new constructor(obj2.buffer, obj2.byteOffset, 0);
          _chunkSteps._closeSteps(constructor1);
        }
      } catch (tmp34) {
        obj._errorSteps(tmp34);
      }
      tmp = ((constructor) => {
        let num = 1;
        if (constructor !== DataView) {
          num = constructor.BYTES_PER_ELEMENT;
        }
        return num;
      })(constructor);
    })(_ownerReadableStream._readableStreamController, buffer, arg2, _errorSteps);
  }
}
function st(arg0) {
  const typeError = new TypeError("ReadableStreamBYOBReader.prototype." + "read" + " can only be used on a ReadableStreamBYOBReader");
  return typeError;
}
function dt(highWaterMark, arg1) {
  if (undefined !== highWaterMark) {
    if (typeof highWaterMark !== "object") {
      if (typeof highWaterMark !== "function") {
        const _TypeError2 = TypeError;
        const _HermesInternal3 = HermesInternal;
        const typeError = new TypeError("" + arg1 + " is not an object.");
        throw typeError;
      }
    }
  }
  highWaterMark = undefined;
  if (null != highWaterMark) {
    highWaterMark = highWaterMark.highWaterMark;
  }
  let size;
  if (null != highWaterMark) {
    size = highWaterMark.size;
  }
  let NumberResult;
  if (undefined !== highWaterMark) {
    const _Number = Number;
    NumberResult = Number(highWaterMark);
  }
  const obj = { highWaterMark: NumberResult, size: null };
  fn = undefined;
  if (undefined !== size) {
    const _HermesInternal = HermesInternal;
    if (typeof size !== "function") {
      const _TypeError = TypeError;
      const _HermesInternal2 = HermesInternal;
      const typeError1 = new TypeError("" + tmp6 + " is not a function.");
      throw typeError1;
    } else {
      fn = (arg0) => Number(size(arg0));
    }
  }
  obj.size = fn;
  return obj;
}
function gt(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  let tmp2 = tmp;
  if (!tmp2) {
    if (tmp2) {
      tmp2 = obj instanceof _moduleResult4;
    }
    return tmp2;
  } else {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty("_writableStreamController");
    } else {
      hasOwnPropertyResult = call(obj, "_writableStreamController");
    }
  }
}
function vt(_writer) {
  return undefined !== _writer._writer;
}
function wt(_ownerWritableStream, _abortReason) {
  closure_0 = _ownerWritableStream;
  c1 = _abortReason;
  if ("closed" !== _ownerWritableStream._state) {
    if ("errored" !== _ownerWritableStream._state) {
      _ownerWritableStream._writableStreamController._abortReason = _abortReason;
      const _abortController = _ownerWritableStream._writableStreamController._abortController;
      let tmp = null === _abortController;
      if (!tmp) {
        tmp = undefined === _abortController;
      }
      if (!tmp) {
        _abortController.abort(_abortReason);
      }
      const _state = _ownerWritableStream._state;
      if ("closed" !== _state) {
        if ("errored" !== _state) {
          if (undefined !== _ownerWritableStream._pendingAbortRequest) {
            return _ownerWritableStream._pendingAbortRequest._promise;
          } else {
            let flag2 = false;
            c2 = false;
            if ("erroring" === _state) {
              c2 = true;
              c1 = undefined;
              flag2 = true;
            }
            const tmp7 = new Promise((_resolve, _reject) => {
              const obj = { _promise: "y", _resolve, _reject, _reason, _wasAlreadyErroring };
              closure_0._pendingAbortRequest = obj;
            });
            _ownerWritableStream._pendingAbortRequest._promise = tmp7;
            if (!flag2) {
              _ownerWritableStream._state = "erroring";
              _ownerWritableStream._storedError = tmp3;
              ({ _writer, _writableStreamController } = _ownerWritableStream);
              if (undefined !== _writer) {
                kt(_writer, tmp3);
              }
              let _started = !tmp11;
              if (!(undefined !== _ownerWritableStream._inFlightWriteRequest || undefined !== _ownerWritableStream._inFlightCloseRequest)) {
                _started = _writableStreamController._started;
              }
              if (_started) {
                Pt(_ownerWritableStream);
              }
            }
            return tmp7;
          }
        }
      }
      const tmp17 = new Promise((fn) => fn(c0));
      return tmp17;
    }
  }
  return new Promise((fn) => fn(c0));
}
function Rt(_state) {
  closure_0 = _state;
  _state = _state._state;
  if ("closed" !== _state) {
    if ("errored" !== _state) {
      const tmp17 = new Promise((_resolve, _reject) => {
        closure_0._closeRequest = { _resolve, _reject };
      });
      const _writer = _state._writer;
      let tmp = undefined !== _writer && _state._backpressure;
      if (tmp) {
        tmp = "writable" === _state;
      }
      if (tmp) {
        if (undefined !== _writer._readyPromise_resolve) {
          const result = _writer._readyPromise_resolve(undefined);
          _writer._readyPromise_resolve = undefined;
          _writer._readyPromise_reject = undefined;
          _writer._readyPromiseState = "fulfilled";
        }
      }
      const _writableStreamController = _state._writableStreamController;
      if (typeof 0 === "number") {
        if (!fn4(0)) {
          const _queue = _writableStreamController._queue;
          const obj = { value: tmp3, size: 0 };
          _queue.push(obj);
          _writableStreamController._queueTotalSize = _writableStreamController._queueTotalSize;
          Mt(_writableStreamController);
          return tmp17;
        }
      }
      const _RangeError = RangeError;
      const rangeError = new RangeError("Size must be a finite, non-NaN, non-negative number.");
      throw rangeError;
    }
  }
  const typeError = new TypeError("The stream (in " + _state + " state) is not in the writable state and cannot be closed");
  return closure_5(typeError);
}
function Pt(_controlledWritableStream) {
  _controlledWritableStream._state = "errored";
  const _writableStreamController = _controlledWritableStream._writableStreamController;
  _writableStreamController[SymbolResult1]();
  const _storedError = _controlledWritableStream._storedError;
  const _writeRequests = _controlledWritableStream._writeRequests;
  const item = _writeRequests.forEach((_reject) => {
    _reject._reject(_storedError);
  });
  _controlledWritableStream._writeRequests = new closure_15();
  if (undefined !== _controlledWritableStream._pendingAbortRequest) {
    const _pendingAbortRequest = _controlledWritableStream._pendingAbortRequest;
    _controlledWritableStream._pendingAbortRequest = undefined;
    if (_pendingAbortRequest._wasAlreadyErroring) {
      _pendingAbortRequest._reject(_storedError);
      if (undefined !== _controlledWritableStream._closeRequest) {
        const _closeRequest2 = _controlledWritableStream._closeRequest;
        _closeRequest2._reject(_controlledWritableStream._storedError);
        _controlledWritableStream._closeRequest = undefined;
      }
      const _writer2 = _controlledWritableStream._writer;
      if (undefined !== _writer2) {
        if (undefined !== _writer2._closedPromise_reject) {
          str2 = then;
          const call3 = then.call;
          if (typeof call3 === "unknown") {
            str2(undefined, tmp16);
          } else {
            call3(_closedPromise, undefined, tmp16);
          }
          let result = _writer2._closedPromise_reject(tmp15);
          _writer2._closedPromise_resolve = undefined;
          _writer2._closedPromise_reject = undefined;
          str2 = "rejected";
          _writer2._closedPromiseState = "rejected";
          _closedPromise = _writer2._closedPromise;
        }
      }
    } else {
      const _writableStreamController2 = _controlledWritableStream._writableStreamController;
      fn = () => {
        _pendingAbortRequest._resolve();
        if (undefined !== _controlledWritableStream._closeRequest) {
          const _closeRequest = _controlledWritableStream._closeRequest;
          _closeRequest._reject(_controlledWritableStream._storedError);
          _controlledWritableStream._closeRequest = undefined;
        }
        const _writer = _controlledWritableStream._writer;
        if (undefined !== _writer) {
          if (undefined !== _writer._closedPromise_reject) {
            let str = then;
            const call = then.call;
            if (typeof call === "unknown") {
              str(undefined, fn);
            } else {
              call(_closedPromise, undefined, fn);
            }
            const result = _writer._closedPromise_reject(tmp4);
            _writer._closedPromise_resolve = undefined;
            _writer._closedPromise_reject = undefined;
            str = "rejected";
            _writer._closedPromiseState = "rejected";
            _closedPromise = _writer._closedPromise;
          }
        }
        return null;
      };
      const fn2 = (arg0) => {
        _pendingAbortRequest._reject(arg0);
        if (undefined !== _controlledWritableStream._closeRequest) {
          const _closeRequest = _controlledWritableStream._closeRequest;
          _closeRequest._reject(_controlledWritableStream._storedError);
          _controlledWritableStream._closeRequest = undefined;
        }
        const _writer = _controlledWritableStream._writer;
        if (undefined !== _writer) {
          if (undefined !== _writer._closedPromise_reject) {
            let str = then;
            const call = then.call;
            if (typeof call === "unknown") {
              str(undefined, fn);
            } else {
              call(_closedPromise, undefined, fn);
            }
            const result = _writer._closedPromise_reject(tmp4);
            _writer._closedPromise_resolve = undefined;
            _writer._closedPromise_reject = undefined;
            str = "rejected";
            _writer._closedPromiseState = "rejected";
            _closedPromise = _writer._closedPromise;
          }
        }
        return null;
      };
      let call = then.call;
      const tmp8 = _writableStreamController2[c16](_pendingAbortRequest._reason);
      const call2 = then.call;
      if (typeof call2 === "unknown") {
        then(undefined, tmp11);
      } else {
        call2(tmp10, undefined, tmp11);
      }
      tmp10 = typeof call === "unknown" ? then(fn, fn2) : call(_writableStreamController2[c16](_pendingAbortRequest._reason), fn, fn2);
    }
  } else {
    if (undefined !== _controlledWritableStream._closeRequest) {
      let _closeRequest = _controlledWritableStream._closeRequest;
      _closeRequest._reject(_controlledWritableStream._storedError);
      _controlledWritableStream._closeRequest = undefined;
    }
    let _writer = _controlledWritableStream._writer;
    if (undefined !== _writer) {
      if (undefined !== _writer._closedPromise_reject) {
        const call4 = then.call;
        if (typeof call4 === "unknown") {
          then(undefined, tmp20);
        } else {
          call4(_closedPromise2, undefined, tmp20);
        }
        const result1 = _writer._closedPromise_reject(tmp19);
        _writer._closedPromise_resolve = undefined;
        _writer._closedPromise_reject = undefined;
        _writer._closedPromiseState = "rejected";
        _closedPromise2 = _writer._closedPromise;
      }
    }
  }
  const tmp3 = new closure_15();
}
function qt(_closeRequest) {
  return undefined !== _closeRequest._closeRequest || undefined !== _closeRequest._inFlightCloseRequest;
}
function Wt(_writer, _backpressure) {
  _writer = _writer._writer;
  if (tmp) {
    if (_backpressure) {
      const tmp6 = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
        _writer._readyPromise_resolve = _readyPromise_resolve;
        _writer._readyPromise_reject = _readyPromise_reject;
      });
      _writer._readyPromise = tmp6;
      _writer._readyPromiseState = "pending";
    } else if (undefined !== _writer._readyPromise_resolve) {
      const result = _writer._readyPromise_resolve(undefined);
      _writer._readyPromise_resolve = undefined;
      _writer._readyPromise_reject = undefined;
      _writer._readyPromiseState = "fulfilled";
    }
  }
  _writer._backpressure = _backpressure;
  tmp = undefined !== _writer && _backpressure !== _writer._backpressure;
}
function kt(_writer, typeError) {
  if ("pending" === _writer._readyPromiseState) {
    if (undefined !== _writer._readyPromise_reject) {
      str2 = then;
      const call = then.call;
      if (typeof call === "unknown") {
        str2(undefined, fn);
      } else {
        call(_readyPromise, undefined, fn);
      }
      _writer._readyPromise_reject(typeError);
      _writer._readyPromise_resolve = undefined;
      _writer._readyPromise_reject = undefined;
      str2 = "rejected";
      _writer._readyPromiseState = "rejected";
      _readyPromise = _writer._readyPromise;
    }
  } else {
    closure_0 = _writer;
    const tmp9 = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
      _writer._readyPromise_resolve = _readyPromise_resolve;
      _writer._readyPromise_reject = _readyPromise_reject;
    });
    _writer._readyPromise = tmp9;
    _writer._readyPromiseState = "pending";
    if (undefined !== _writer._readyPromise_reject) {
      const call2 = then.call;
      if (typeof call2 === "unknown") {
        then(undefined, fn);
      } else {
        call2(_readyPromise2, undefined, fn);
      }
      _writer._readyPromise_reject(typeError);
      _writer._readyPromise_resolve = undefined;
      _writer._readyPromise_reject = undefined;
      _writer._readyPromiseState = "rejected";
      _readyPromise2 = _writer._readyPromise;
    }
  }
}
function At(_closedPromiseState) {
  const typeError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
  kt(_closedPromiseState, typeError);
  if ("pending" === _closedPromiseState._closedPromiseState) {
    if (undefined !== _closedPromiseState._closedPromise_reject) {
      str2 = then;
      const call = then.call;
      if (typeof call === "unknown") {
        str2(undefined, fn);
      } else {
        call(_closedPromise, undefined, fn);
      }
      const result = _closedPromiseState._closedPromise_reject(typeError);
      _closedPromiseState._closedPromise_resolve = undefined;
      _closedPromiseState._closedPromise_reject = undefined;
      str2 = "rejected";
      _closedPromiseState._closedPromiseState = "rejected";
      _closedPromise = _closedPromiseState._closedPromise;
    }
  } else {
    closure_0 = _closedPromiseState;
    const tmp11 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      self._closedPromise_resolve = _closedPromise_resolve;
      self._closedPromise_reject = _closedPromise_reject;
      self._closedPromiseState = "pending";
    });
    _closedPromiseState._closedPromise = tmp11;
    if (undefined !== _closedPromiseState._closedPromise_reject) {
      const call2 = then.call;
      if (typeof call2 === "unknown") {
        then(undefined, fn);
      } else {
        call2(_closedPromise2, undefined, fn);
      }
      const result1 = _closedPromiseState._closedPromise_reject(typeError);
      _closedPromiseState._closedPromise_resolve = undefined;
      _closedPromiseState._closedPromise_reject = undefined;
      _closedPromiseState._closedPromiseState = "rejected";
      _closedPromise2 = _closedPromiseState._closedPromise;
    }
  }
  _closedPromiseState._ownerWritableStream._writer = undefined;
  _closedPromiseState._ownerWritableStream = undefined;
}
function zt(self, arg1) {
  const _ownerWritableStream = self._ownerWritableStream;
  if (_ownerWritableStream !== self._ownerWritableStream) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Cannot write to a stream using a released writer");
    return closure_5(typeError);
  } else {
    const _state = _ownerWritableStream._state;
    if ("errored" === _state) {
      return closure_5(_ownerWritableStream._storedError);
    } else {
      if (!tmp2) {
        if ("closed" !== _state) {
          if ("erroring" === _state) {
            return closure_5(_ownerWritableStream._storedError);
          } else {
            const tmp6 = new Promise((_resolve, _reject) => {
              const _writeRequests = _ownerWritableStream._writeRequests;
              _writeRequests.push({ _resolve, _reject });
            });
            ((_writableStreamController, arg1, arg2) => {
              try {
                ve(_writableStreamController, arg1, arg2);
                const _controlledWritableStream = _writableStreamController._controlledWritableStream;
                let tmp7 = qt(_controlledWritableStream);
                if (!tmp7) {
                  tmp7 = "writable" !== _controlledWritableStream._state;
                }
                if (!tmp7) {
                  Wt(_controlledWritableStream, Qt(_writableStreamController));
                }
                Mt(_writableStreamController);
              } catch (tmp13) {
                Yt(tmp, tmp13);
              }
            })(_ownerWritableStream._writableStreamController, arg1, tmp);
            return tmp6;
          }
        }
      }
      const _TypeError = TypeError;
      const typeError1 = new TypeError("The stream is closing or closed and cannot be written to");
      return closure_5(typeError1);
    }
  }
}
function Ft(_controlledWritableStream, _writableStreamController, fn, _writeAlgorithm, _closeAlgorithm, _abortAlgorithm, _strategyHWM, _strategySizeAlgorithm) {
  let _state = _controlledWritableStream;
  closure_1 = _writableStreamController;
  _writableStreamController._controlledWritableStream = _controlledWritableStream;
  _controlledWritableStream._writableStreamController = _writableStreamController;
  _writableStreamController._queue = undefined;
  _writableStreamController._queueTotalSize = undefined;
  _writableStreamController._queue = new closure_15();
  _writableStreamController._queueTotalSize = 0;
  _writableStreamController._abortReason = undefined;
  let abortController;
  if (typeof AbortController === "function") {
    const _AbortController = AbortController;
    abortController = new AbortController();
  }
  _writableStreamController._abortController = abortController;
  _writableStreamController._started = false;
  _writableStreamController._strategySizeAlgorithm = _strategySizeAlgorithm;
  _writableStreamController._strategyHWM = _strategyHWM;
  _writableStreamController._writeAlgorithm = _writeAlgorithm;
  _writableStreamController._closeAlgorithm = _closeAlgorithm;
  _writableStreamController._abortAlgorithm = _abortAlgorithm;
  let _writer = _controlledWritableStream._writer;
  if (tmp4) {
    if (tmp3) {
      _state = _writer;
      const tmp9 = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
        _writer._readyPromise_resolve = _readyPromise_resolve;
        _writer._readyPromise_reject = _readyPromise_reject;
      });
      _writer._readyPromise = tmp9;
      _writer._readyPromiseState = "pending";
    } else if (undefined !== _writer._readyPromise_resolve) {
      const result = _writer._readyPromise_resolve(undefined);
      _writer._readyPromise_resolve = undefined;
      _writer._readyPromise_reject = undefined;
      _writer._readyPromiseState = "fulfilled";
    }
  }
  _controlledWritableStream._backpressure = _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0;
  _state = fn();
  const tmp = new closure_15();
  tmp4 = undefined !== _writer && _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0 !== _controlledWritableStream._backpressure;
  fn = () => {
    closure_1._started = true;
    Mt(closure_1);
    return null;
  };
  const fn2 = (_storedError) => {
    closure_1._started = true;
    if ("writable" !== _state._state) {
      Pt(_state);
    } else {
      _state._state = "erroring";
      _state._storedError = _storedError;
      const _writer = _state._writer;
      if (undefined !== _writer) {
        kt(_writer, _storedError);
      }
      let _started = !tmp5;
      if (!(undefined !== _state._inFlightWriteRequest || undefined !== _state._inFlightCloseRequest)) {
        _started = _state._writableStreamController._started;
      }
      if (_started) {
        Pt(_state);
      }
    }
    return null;
  };
  const call = then.call;
  const tmp11 = new Promise((fn) => fn(c0));
  const call2 = then.call;
  if (typeof call2 === "unknown") {
    then(undefined, tmp14);
  } else {
    call2(tmp13, undefined, tmp14);
  }
  tmp13 = typeof call === "unknown" ? then(fn, fn2) : call(new Promise((fn) => fn(c0)), fn, fn2);
}
function Mt(_writableStreamController) {
  const _controlledWritableStream = _writableStreamController._controlledWritableStream;
  if (_writableStreamController._started) {
    if (undefined === _controlledWritableStream._inFlightWriteRequest) {
      if ("erroring" !== _controlledWritableStream._state) {
        if (0 !== _writableStreamController._queue.length) {
          let _queue = _writableStreamController._queue;
          value2 = _queue.peek().value;
          if (value2 === closure_77) {
            const _controlledWritableStream2 = _writableStreamController._controlledWritableStream;
            closure_129_0 = _controlledWritableStream2;
            _controlledWritableStream2._inFlightCloseRequest = _controlledWritableStream2._closeRequest;
            _controlledWritableStream2._closeRequest = undefined;
            const _queue1 = _writableStreamController._queue;
            const iter = _queue1.shift();
            _writableStreamController._queueTotalSize = _writableStreamController._queueTotalSize - iter.size;
            if (_writableStreamController._queueTotalSize < 0) {
              _writableStreamController._queueTotalSize = 0;
            }
            value = iter.value;
            _writableStreamController._writeAlgorithm = undefined;
            _writableStreamController._closeAlgorithm = undefined;
            _writableStreamController._abortAlgorithm = undefined;
            _writableStreamController._strategySizeAlgorithm = undefined;
            fn = () => {
              const _inFlightCloseRequest = _writableStreamController._inFlightCloseRequest;
              _inFlightCloseRequest._resolve(undefined);
              _writableStreamController._inFlightCloseRequest = undefined;
              if ("erroring" === _writableStreamController._state) {
                _writableStreamController._storedError = undefined;
                if (undefined !== _writableStreamController._pendingAbortRequest) {
                  const _pendingAbortRequest = _writableStreamController._pendingAbortRequest;
                  _pendingAbortRequest._resolve();
                  _writableStreamController._pendingAbortRequest = undefined;
                }
              }
              _writableStreamController._state = "closed";
              const _writer = _writableStreamController._writer;
              if (undefined !== _writer) {
                if (undefined !== _writer._closedPromise_resolve) {
                  const result = _writer._closedPromise_resolve(undefined);
                  _writer._closedPromise_resolve = undefined;
                  _writer._closedPromise_reject = undefined;
                  _writer._closedPromiseState = "resolved";
                }
              }
              return null;
            };
            const fn2 = (_storedError) => {
              const _inFlightCloseRequest = _writableStreamController._inFlightCloseRequest;
              _inFlightCloseRequest._reject(_storedError);
              _writableStreamController._inFlightCloseRequest = undefined;
              if (undefined !== _writableStreamController._pendingAbortRequest) {
                const _pendingAbortRequest = _writableStreamController._pendingAbortRequest;
                _pendingAbortRequest._reject(_storedError);
                _writableStreamController._pendingAbortRequest = undefined;
              }
              if ("writable" !== _writableStreamController._state) {
                Pt(_writableStreamController);
              } else {
                _writableStreamController._state = "erroring";
                _writableStreamController._storedError = _storedError;
                ({ _writer, _writableStreamController } = _writableStreamController);
                if (undefined !== _writer) {
                  kt(_writer, _storedError);
                }
                let _started = !tmp6;
                if (!(undefined !== _writableStreamController._inFlightWriteRequest || undefined !== _writableStreamController._inFlightCloseRequest)) {
                  _started = _writableStreamController._started;
                }
                if (_started) {
                  Pt(_writableStreamController);
                }
              }
              return null;
            };
            const call2 = then.call;
            const _closeAlgorithmResult = _writableStreamController._closeAlgorithm();
            const call3 = then.call;
            if (typeof call3 === "unknown") {
              then(undefined, tmp9);
            } else {
              call3(tmp8, undefined, tmp9);
            }
            tmp8 = typeof call2 === "unknown" ? then(fn, fn2) : call2(_writableStreamController._closeAlgorithm(), fn, fn2);
          } else {
            const _controlledWritableStream3 = _writableStreamController._controlledWritableStream;
            const _writeRequests = _controlledWritableStream3._writeRequests;
            _controlledWritableStream3._inFlightWriteRequest = _writeRequests.shift();
            const fn3 = () => {
              const _inFlightWriteRequest = _controlledWritableStream3._inFlightWriteRequest;
              _inFlightWriteRequest._resolve(undefined);
              _controlledWritableStream3._inFlightWriteRequest = undefined;
              const _queue = _writableStreamController._queue;
              _writableStreamController._queueTotalSize = _writableStreamController._queueTotalSize - _queue.shift().size;
              if (_writableStreamController._queueTotalSize < 0) {
                _writableStreamController._queueTotalSize = 0;
              }
              if (!tmp5) {
                if ("writable" === _controlledWritableStream3._state) {
                  const _writer = _controlledWritableStream3._writer;
                  if (!tmp6) {
                    _controlledWritableStream3._backpressure = tmp14;
                  } else if (!tmp14) {
                    if (undefined !== _writer._readyPromise_resolve) {
                      const result = _writer._readyPromise_resolve(undefined);
                      _writer._readyPromise_resolve = undefined;
                      _writer._readyPromise_reject = undefined;
                      _writer._readyPromiseState = "fulfilled";
                    }
                  }
                  const tmp11 = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
                    _writer._readyPromise_resolve = _readyPromise_resolve;
                    _writer._readyPromise_reject = _readyPromise_reject;
                  });
                  _writer._readyPromise = tmp11;
                  _writer._readyPromiseState = "pending";
                  tmp6 = undefined !== _writer && _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0 !== _controlledWritableStream3._backpressure;
                }
              }
              Mt(_writableStreamController);
              return null;
            };
            fn4 = (_storedError) => {
              if ("writable" === _controlledWritableStream3._state) {
                closure_0._writeAlgorithm = undefined;
                closure_0._closeAlgorithm = undefined;
                closure_0._abortAlgorithm = undefined;
                closure_0._strategySizeAlgorithm = undefined;
              }
              const _inFlightWriteRequest = _controlledWritableStream3._inFlightWriteRequest;
              _inFlightWriteRequest._reject(_storedError);
              _controlledWritableStream3._inFlightWriteRequest = undefined;
              if ("writable" !== _controlledWritableStream3._state) {
                Pt(_controlledWritableStream3);
              } else {
                _controlledWritableStream3._state = "erroring";
                _controlledWritableStream3._storedError = _storedError;
                ({ _writer, _writableStreamController } = _controlledWritableStream3);
                if (undefined !== _writer) {
                  kt(_writer, _storedError);
                }
                let _started = !tmp6;
                if (!(undefined !== _controlledWritableStream3._inFlightWriteRequest || undefined !== _controlledWritableStream3._inFlightCloseRequest)) {
                  _started = _writableStreamController._started;
                }
                if (_started) {
                  Pt(_controlledWritableStream3);
                }
              }
              return null;
            };
            const call4 = then.call;
            const _writeAlgorithmResult = _writableStreamController._writeAlgorithm(value2);
            const call = then.call;
            if (typeof call === "unknown") {
              then(undefined, tmp4);
            } else {
              call(tmp3, undefined, tmp4);
            }
            tmp3 = typeof call4 === "unknown" ? then(fn3, fn4) : call4(_writableStreamController._writeAlgorithm(value2), fn3, fn4);
          }
        }
      } else {
        Pt(_controlledWritableStream);
      }
    }
  }
}
function Yt(_controlledWritableStream, _storedError) {
  if ("writable" === _controlledWritableStream._controlledWritableStream._state) {
    _controlledWritableStream = _controlledWritableStream._controlledWritableStream;
    _controlledWritableStream._writeAlgorithm = undefined;
    _controlledWritableStream._closeAlgorithm = undefined;
    _controlledWritableStream._abortAlgorithm = undefined;
    _controlledWritableStream._strategySizeAlgorithm = undefined;
    _controlledWritableStream._state = "erroring";
    _controlledWritableStream._storedError = _storedError;
    ({ _writer, _writableStreamController } = _controlledWritableStream);
    if (undefined !== _writer) {
      kt(_writer, _storedError);
    }
    let _started = !tmp3;
    if (!(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest)) {
      _started = _writableStreamController._started;
    }
    if (_started) {
      Pt(_controlledWritableStream);
    }
  }
}
function Qt(_strategyHWM) {
  return _strategyHWM._strategyHWM - _strategyHWM._queueTotalSize <= 0;
}
function ir(self, arg1, preventClose, preventAbort, preventCancel, signal) {
  closure_1 = arg1;
  closure_2 = preventClose;
  closure_3 = preventAbort;
  closure_4 = preventCancel;
  closure_5 = signal;
  closure_6 = new c29(self);
  const tmp = new c29(self);
  closure_7 = new _moduleResult5(arg1);
  self._disturbed = true;
  c8 = false;
  c0 = undefined;
  const tmp2 = new _moduleResult5(arg1);
  closure_9 = new closure_3((fn) => fn(c0));
  const tmp3 = new closure_3((fn) => fn(c0));
  return new closure_3((arg0, arg1) => {
    _undefined = arg0;
    writable = arg1;
    fn = function q(fn, arg1, _storedError) {
      closure_0 = fn;
      closure_1 = arg1;
      closure_2 = _storedError;
      if (!c8) {
        c8 = true;
        if ("writable" === closure_1._state) {
          if (!tmp2) {
            closure_129_0 = closure_1_9;
            fn = () => {
              if (closure_1_0 !== closure_3_9) {
                closure_0 = closure_1_9;
                let fn = () => {
                  if (closure_1_0 !== closure_3_9) {
                    closure_0 = closure_1_9;
                    let fn = /* F142343 */ function() { ... };
                    let call = closure_2_4.call;
                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                  }
                };
                let call = closure_2_4.call;
                typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
              }
            };
            let call = then.call;
            let fn2 = function n() {
              fn = () => {
                closure_2_75(closure_1_7);
                closure_2_22(closure_1_6);
                if (undefined !== closure_1_5) {
                  const removed = closure_1_5.removeEventListener("abort", closure_2);
                }
                if (closure_1_1) {
                  closure_1(_storedError);
                } else {
                  closure_0(undefined);
                }
                return null;
              };
              const fn2 = (arg0) => {
                closure_3_75(_readyPromise);
                closure_3_22(closure_2_6);
                if (undefined !== closure_2_5) {
                  const removed = closure_2_5.removeEventListener("abort", _storedError);
                }
                closure_1_1(arg0);
                return null;
              };
              const call = then.call;
              const tmp = closure_0();
              const call2 = then.call;
              if (typeof call2 === "unknown") {
                then(undefined, tmp4);
              } else {
                call2(tmp3, undefined, tmp4);
              }
              return null;
            };
            let call2 = then.call;
            const tmp5 = typeof call === "unknown" ? then(fn, undefined) : call(closure_1_9, fn, undefined);
            const call3 = then.call;
            if (typeof call3 === "unknown") {
              then(undefined, closure_2_2);
            } else {
              call3(tmp7, undefined, closure_2_2);
            }
            tmp7 = typeof call2 === "unknown" ? then(fn2, undefined) : call2(typeof call === "unknown" ? then(fn, undefined) : call(closure_1_9, fn, undefined), fn2, undefined);
          }
          tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
        }
        const fn3 = () => {
          closure_2_75(closure_1_7);
          closure_2_22(closure_1_6);
          if (undefined !== closure_1_5) {
            const removed = closure_1_5.removeEventListener("abort", closure_2);
          }
          if (closure_1_1) {
            closure_1(_storedError);
          } else {
            closure_0(undefined);
          }
          return null;
        };
        fn4 = (arg0) => {
          closure_3_75(_readyPromise);
          closure_3_22(closure_2_6);
          if (undefined !== closure_2_5) {
            const removed = closure_2_5.removeEventListener("abort", _storedError);
          }
          closure_1_1(arg0);
          return null;
        };
        const call4 = then.call;
        const tmp11 = fn();
        const call5 = then.call;
        if (typeof call5 === "unknown") {
          then(undefined, closure_2_2);
        } else {
          call5(tmp13, undefined, closure_2_2);
        }
        tmp13 = typeof call4 === "unknown" ? then(fn3, fn4) : call4(fn(), fn3, fn4);
      }
    };
    class E {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        if (!c8) {
          flag = true;
          c8 = true;
          tmp = closure_1;
          str = "writable";
          if ("writable" === closure_1._state) {
            tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
            if (!tmp2) {
              tmp3 = closure_1_9;
              closure_129_0 = closure_1_9;
              fn = () => {
                if (closure_1_0 !== closure_3_9) {
                  closure_0 = closure_1_9;
                  let fn = () => {
                    if (closure_1_0 !== closure_3_9) {
                      closure_0 = closure_1_9;
                      let fn = () => {
                        if (closure_1_0 !== closure_3_9) {
                          closure_0 = closure_1_9;
                          let fn = /* F142343 */ function() { ... };
                          let call = closure_2_4.call;
                          typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                        }
                      };
                      let call = closure_2_4.call;
                      typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                    }
                  };
                  let call = closure_2_4.call;
                  typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                }
              };
              tmp4 = preventCancel;
              call = preventCancel.call;
              tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
              fn2 = () => {
                closure_2_75(_readyPromise);
                closure_2_22(closure_1_6);
                if (undefined !== closure_1_5) {
                  const removed = closure_1_5.removeEventListener("abort", no);
                }
                if (closure_0) {
                  closure_1(closure_1);
                } else {
                  closure_0(undefined);
                }
                return null;
              };
              call2 = tmp4.call;
              tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
              tmp7 = preventClose;
              call3 = tmp4.call;
              if (typeof call3 === "unknown") {
                tmp4Result = tmp4(undefined, tmp7);
              } else {
                call3Result = call3(tmp6, undefined, tmp7);
              }
            }
          }
          tmp9 = closure_2_75;
          tmp10 = closure_1_7;
          num = 0;
          tmp11 = closure_2_75(closure_1_7);
          tmp12 = closure_2_22;
          tmp13 = closure_1_6;
          tmp14 = closure_2_22(closure_1_6);
          obj = E;
          if (undefined !== E) {
            tmp15 = no;
            str2 = "abort";
            removed = obj.removeEventListener("abort", no);
          }
          if (arg0) {
            tmp19 = closure_1;
            tmp20 = closure_1(arg1);
          } else {
            tmp17 = closure_0;
            tmp18 = closure_0(undefined);
          }
        }
        return;
      }
    }
    if (undefined !== E) {
      function no() {
        if (undefined !== closure_2_5.reason) {
          let reason = closure_2_5.reason;
        } else {
          reason = new closure_83("Aborted", "AbortError");
        }
        items = [];
        if (!Promise) {
          items.push(() => {
            if ("writable" === items._state) {
              let tmp5 = wt(tmp, reason);
            } else {
              tmp5 = new Promise((fn) => fn(c0));
            }
            return tmp5;
          });
        }
        if (!then) {
          items.push(() => {
            if ("readable" === _state._state) {
              let tmp5 = Or(tmp, reason);
            } else {
              tmp5 = new Promise((fn) => fn(c0));
            }
            return tmp5;
          });
        }
        fn(() => Promise.all(items.map((fn) => fn())), true, reason);
      }
      if (E.aborted) {
        if (undefined !== E.reason) {
          let reason = E.reason;
        } else {
          reason = new closure_1_83("Aborted", "AbortError");
        }
        closure_131_0 = reason;
        items = [];
        closure_131_1 = items;
        if (!typeError) {
          items.push(() => {
            if ("writable" === items._state) {
              let tmp5 = wt(tmp, reason);
            } else {
              tmp5 = new Promise((fn) => fn(c0));
            }
            return tmp5;
          });
        }
        class E {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            if (!c8) {
              flag = true;
              c8 = true;
              tmp = closure_1;
              str = "writable";
              if ("writable" === closure_1._state) {
                tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
                if (!tmp2) {
                  tmp3 = closure_1_9;
                  closure_129_0 = closure_1_9;
                  fn = () => {
                    if (closure_1_0 !== closure_3_9) {
                      closure_0 = closure_1_9;
                      let fn = () => {
                        if (closure_1_0 !== closure_3_9) {
                          closure_0 = closure_1_9;
                          let fn = () => {
                            if (closure_1_0 !== closure_3_9) {
                              closure_0 = closure_1_9;
                              let fn = /* F142343 */ function() { ... };
                              let call = closure_2_4.call;
                              typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                            }
                          };
                          let call = closure_2_4.call;
                          typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                        }
                      };
                      let call = closure_2_4.call;
                      typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                    }
                  };
                  tmp4 = preventCancel;
                  call = preventCancel.call;
                  tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                  fn2 = () => {
                    closure_2_75(_readyPromise);
                    closure_2_22(closure_1_6);
                    if (undefined !== closure_1_5) {
                      const removed = closure_1_5.removeEventListener("abort", no);
                    }
                    if (closure_0) {
                      closure_1(closure_1);
                    } else {
                      closure_0(undefined);
                    }
                    return null;
                  };
                  call2 = tmp4.call;
                  tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                  tmp7 = preventClose;
                  call3 = tmp4.call;
                  if (typeof call3 === "unknown") {
                    tmp4Result = tmp4(undefined, tmp7);
                  } else {
                    call3Result = call3(tmp6, undefined, tmp7);
                  }
                }
              }
              tmp9 = closure_2_75;
              tmp10 = closure_1_7;
              num = 0;
              tmp11 = closure_2_75(closure_1_7);
              tmp12 = closure_2_22;
              tmp13 = closure_1_6;
              tmp14 = closure_2_22(closure_1_6);
              obj = E;
              if (undefined !== E) {
                tmp15 = no;
                str2 = "abort";
                removed = obj.removeEventListener("abort", no);
              }
              if (arg0) {
                tmp19 = closure_1;
                tmp20 = closure_1(arg1);
              } else {
                tmp17 = closure_0;
                tmp18 = closure_0(undefined);
              }
            }
            return;
          }
        }
        if (!fn) {
          items.push(() => {
            if ("readable" === _state._state) {
              let tmp5 = Or(tmp, reason);
            } else {
              tmp5 = new Promise((fn) => fn(c0));
            }
            return tmp5;
          });
        }
        fn(() => Promise.all(items.map((fn) => fn())), true, reason);
      } else {
        const listener = E.addEventListener("abort", no);
      }
    }
    if ("errored" === _undefined._state) {
      const _storedError = tmp2._storedError;
      closure_129_0 = _storedError;
      if (typeError) {
        E(true, _storedError);
      } else {
        fn(() => wt(closure_1, closure_0), true, _storedError);
      }
    } else {
      let fn2 = (f) => {
        closure_0 = f;
        if (Promise) {
          E(true, f);
        } else {
          fn(() => wt(closure_1, closure_0), true, f);
        }
        return null;
      };
      let call = then.call;
      class E {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          if (!c8) {
            flag = true;
            c8 = true;
            tmp = closure_1;
            str = "writable";
            if ("writable" === closure_1._state) {
              tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
              if (!tmp2) {
                tmp3 = closure_1_9;
                closure_129_0 = closure_1_9;
                fn = () => {
                  if (closure_1_0 !== closure_3_9) {
                    closure_0 = closure_1_9;
                    let fn = () => {
                      if (closure_1_0 !== closure_3_9) {
                        closure_0 = closure_1_9;
                        let fn = () => {
                          if (closure_1_0 !== closure_3_9) {
                            closure_0 = closure_1_9;
                            let fn = /* F142343 */ function() { ... };
                            let call = closure_2_4.call;
                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                          }
                        };
                        let call = closure_2_4.call;
                        typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                      }
                    };
                    let call = closure_2_4.call;
                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                  }
                };
                tmp4 = preventCancel;
                call = preventCancel.call;
                tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                fn2 = () => {
                  closure_2_75(_readyPromise);
                  closure_2_22(closure_1_6);
                  if (undefined !== closure_1_5) {
                    const removed = closure_1_5.removeEventListener("abort", no);
                  }
                  if (closure_0) {
                    closure_1(closure_1);
                  } else {
                    closure_0(undefined);
                  }
                  return null;
                };
                call2 = tmp4.call;
                tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                tmp7 = preventClose;
                call3 = tmp4.call;
                if (typeof call3 === "unknown") {
                  tmp4Result = tmp4(undefined, tmp7);
                } else {
                  call3Result = call3(tmp6, undefined, tmp7);
                }
              }
            }
            tmp9 = closure_2_75;
            tmp10 = closure_1_7;
            num = 0;
            tmp11 = closure_2_75(closure_1_7);
            tmp12 = closure_2_22;
            tmp13 = closure_1_6;
            tmp14 = closure_2_22(closure_1_6);
            obj = E;
            if (undefined !== E) {
              tmp15 = no;
              str2 = "abort";
              removed = obj.removeEventListener("abort", no);
            }
            if (arg0) {
              tmp19 = closure_1;
              tmp20 = closure_1(arg1);
            } else {
              tmp17 = closure_0;
              tmp18 = closure_0(undefined);
            }
          }
          return;
        }
      }
      if (typeof tmp8 === "unknown") {
        then(undefined, closure_1_2);
      } else {
        tmp8(tmp5, undefined, closure_1_2);
      }
      tmp5 = typeof call === "unknown" ? then(undefined, fn2) : call(_closedPromise, undefined, fn2);
    }
    if ("errored" === writable._state) {
      const _storedError2 = tmp13._storedError;
      closure_130_0 = _storedError2;
      if (fn) {
        E(true, _storedError2);
      } else {
        fn(() => Or(closure_0, closure_0), true, _storedError2);
      }
    } else {
      let fn3 = (f) => {
        closure_0 = f;
        if (then) {
          E(true, f);
        } else {
          fn(() => Or(closure_0, closure_0), true, f);
        }
        return null;
      };
      let call2 = then.call;
      class E {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          if (!c8) {
            flag = true;
            c8 = true;
            tmp = closure_1;
            str = "writable";
            if ("writable" === closure_1._state) {
              tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
              if (!tmp2) {
                tmp3 = closure_1_9;
                closure_129_0 = closure_1_9;
                fn = () => {
                  if (closure_1_0 !== closure_3_9) {
                    closure_0 = closure_1_9;
                    let fn = () => {
                      if (closure_1_0 !== closure_3_9) {
                        closure_0 = closure_1_9;
                        let fn = () => {
                          if (closure_1_0 !== closure_3_9) {
                            closure_0 = closure_1_9;
                            let fn = /* F142343 */ function() { ... };
                            let call = closure_2_4.call;
                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                          }
                        };
                        let call = closure_2_4.call;
                        typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                      }
                    };
                    let call = closure_2_4.call;
                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                  }
                };
                tmp4 = preventCancel;
                call = preventCancel.call;
                tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                fn2 = () => {
                  closure_2_75(_readyPromise);
                  closure_2_22(closure_1_6);
                  if (undefined !== closure_1_5) {
                    const removed = closure_1_5.removeEventListener("abort", no);
                  }
                  if (closure_0) {
                    closure_1(closure_1);
                  } else {
                    closure_0(undefined);
                  }
                  return null;
                };
                call2 = tmp4.call;
                tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                tmp7 = preventClose;
                call3 = tmp4.call;
                if (typeof call3 === "unknown") {
                  tmp4Result = tmp4(undefined, tmp7);
                } else {
                  call3Result = call3(tmp6, undefined, tmp7);
                }
              }
            }
            tmp9 = closure_2_75;
            tmp10 = closure_1_7;
            num = 0;
            tmp11 = closure_2_75(closure_1_7);
            tmp12 = closure_2_22;
            tmp13 = closure_1_6;
            tmp14 = closure_2_22(closure_1_6);
            obj = E;
            if (undefined !== E) {
              tmp15 = no;
              str2 = "abort";
              removed = obj.removeEventListener("abort", no);
            }
            if (arg0) {
              tmp19 = closure_1;
              tmp20 = closure_1(arg1);
            } else {
              tmp17 = closure_0;
              tmp18 = closure_0(undefined);
            }
          }
          return;
        }
      }
      if (typeof tmp18 === "unknown") {
        then(undefined, closure_1_2);
      } else {
        tmp18(tmp15, undefined, closure_1_2);
      }
      tmp15 = typeof call2 === "unknown" ? then(undefined, fn3) : call2(_closedPromise2, undefined, fn3);
    }
    if ("closed" === _undefined._state) {
      if (no) {
        E();
      } else {
        fn(() => {
          _ownerWritableStream = _ownerWritableStream._ownerWritableStream;
          const _state = _ownerWritableStream._state;
          let tmp2 = undefined !== _ownerWritableStream._closeRequest;
          if (!tmp2) {
            tmp2 = undefined !== _ownerWritableStream._inFlightCloseRequest;
          }
          if (!tmp2) {
            if ("closed" !== _state) {
              if ("errored" === _state) {
                let tmp4 = closure_5(_ownerWritableStream._storedError);
              } else {
                tmp4 = closure_2_69(tmp._ownerWritableStream);
              }
            }
            return tmp4;
          }
          tmp4 = new typeError((fn) => fn(c0));
          tmp = _ownerWritableStream;
        });
      }
    } else {
      function lo() {
        if (closure_2_2) {
          E();
        } else {
          fn(() => {
            _ownerWritableStream = _ownerWritableStream._ownerWritableStream;
            const _state = _ownerWritableStream._state;
            let tmp2 = undefined !== _ownerWritableStream._closeRequest;
            if (!tmp2) {
              tmp2 = undefined !== _ownerWritableStream._inFlightCloseRequest;
            }
            if (!tmp2) {
              if ("closed" !== _state) {
                if ("errored" === _state) {
                  let tmp4 = closure_5(_ownerWritableStream._storedError);
                } else {
                  tmp4 = closure_2_69(tmp._ownerWritableStream);
                }
              }
              return tmp4;
            }
            tmp4 = new typeError((fn) => fn(c0));
            tmp = _ownerWritableStream;
          });
        }
        return null;
      }
      let call3 = then.call;
      class E {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          if (!c8) {
            flag = true;
            c8 = true;
            tmp = closure_1;
            str = "writable";
            if ("writable" === closure_1._state) {
              tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
              if (!tmp2) {
                tmp3 = closure_1_9;
                closure_129_0 = closure_1_9;
                fn = () => {
                  if (closure_1_0 !== closure_3_9) {
                    closure_0 = closure_1_9;
                    let fn = () => {
                      if (closure_1_0 !== closure_3_9) {
                        closure_0 = closure_1_9;
                        let fn = () => {
                          if (closure_1_0 !== closure_3_9) {
                            closure_0 = closure_1_9;
                            let fn = /* F142343 */ function() { ... };
                            let call = closure_2_4.call;
                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                          }
                        };
                        let call = closure_2_4.call;
                        typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                      }
                    };
                    let call = closure_2_4.call;
                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                  }
                };
                tmp4 = preventCancel;
                call = preventCancel.call;
                tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                fn2 = () => {
                  closure_2_75(_readyPromise);
                  closure_2_22(closure_1_6);
                  if (undefined !== closure_1_5) {
                    const removed = closure_1_5.removeEventListener("abort", no);
                  }
                  if (closure_0) {
                    closure_1(closure_1);
                  } else {
                    closure_0(undefined);
                  }
                  return null;
                };
                call2 = tmp4.call;
                tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                tmp7 = preventClose;
                call3 = tmp4.call;
                if (typeof call3 === "unknown") {
                  tmp4Result = tmp4(undefined, tmp7);
                } else {
                  call3Result = call3(tmp6, undefined, tmp7);
                }
              }
            }
            tmp9 = closure_2_75;
            tmp10 = closure_1_7;
            num = 0;
            tmp11 = closure_2_75(closure_1_7);
            tmp12 = closure_2_22;
            tmp13 = closure_1_6;
            tmp14 = closure_2_22(closure_1_6);
            obj = E;
            if (undefined !== E) {
              tmp15 = no;
              str2 = "abort";
              removed = obj.removeEventListener("abort", no);
            }
            if (arg0) {
              tmp19 = closure_1;
              tmp20 = closure_1(arg1);
            } else {
              tmp17 = closure_0;
              tmp18 = closure_0(undefined);
            }
          }
          return;
        }
      }
      if (typeof tmp27 === "unknown") {
        then(undefined, closure_1_2);
      } else {
        tmp27(tmp24, undefined, closure_1_2);
      }
      tmp24 = typeof call3 === "unknown" ? then(lo, undefined) : call3(_closedPromise3, lo, undefined);
    }
    if (tmp32) {
      const _TypeError = TypeError;
      typeError = new TypeError("the destination writable stream closed before all data could be piped to it");
      class E {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          if (!c8) {
            flag = true;
            c8 = true;
            tmp = closure_1;
            str = "writable";
            if ("writable" === closure_1._state) {
              tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
              if (!tmp2) {
                tmp3 = closure_1_9;
                closure_129_0 = closure_1_9;
                fn = () => {
                  if (closure_1_0 !== closure_3_9) {
                    closure_0 = closure_1_9;
                    let fn = () => {
                      if (closure_1_0 !== closure_3_9) {
                        closure_0 = closure_1_9;
                        let fn = () => {
                          if (closure_1_0 !== closure_3_9) {
                            closure_0 = closure_1_9;
                            let fn = /* F142343 */ function() { ... };
                            let call = closure_2_4.call;
                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                          }
                        };
                        let call = closure_2_4.call;
                        typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                      }
                    };
                    let call = closure_2_4.call;
                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                  }
                };
                tmp4 = preventCancel;
                call = preventCancel.call;
                tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                fn2 = () => {
                  closure_2_75(_readyPromise);
                  closure_2_22(closure_1_6);
                  if (undefined !== closure_1_5) {
                    const removed = closure_1_5.removeEventListener("abort", no);
                  }
                  if (closure_0) {
                    closure_1(closure_1);
                  } else {
                    closure_0(undefined);
                  }
                  return null;
                };
                call2 = tmp4.call;
                tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                tmp7 = preventClose;
                call3 = tmp4.call;
                if (typeof call3 === "unknown") {
                  tmp4Result = tmp4(undefined, tmp7);
                } else {
                  call3Result = call3(tmp6, undefined, tmp7);
                }
              }
            }
            tmp9 = closure_2_75;
            tmp10 = closure_1_7;
            num = 0;
            tmp11 = closure_2_75(closure_1_7);
            tmp12 = closure_2_22;
            tmp13 = closure_1_6;
            tmp14 = closure_2_22(closure_1_6);
            obj = E;
            if (undefined !== E) {
              tmp15 = no;
              str2 = "abort";
              removed = obj.removeEventListener("abort", no);
            }
            if (arg0) {
              tmp19 = closure_1;
              tmp20 = closure_1(arg1);
            } else {
              tmp17 = closure_0;
              tmp18 = closure_0(undefined);
            }
          }
          return;
        }
      }
      if (fn) {
        E(true, typeError);
      } else {
        fn(() => Or(c0, typeError), true, typeError);
      }
    }
    let call4 = then.call;
    if (typeof call4 === "unknown") {
      then(undefined, closure_1_2);
    } else {
      call4(tmp40, undefined, closure_1_2);
    }
    _closedPromise3 = _closedPromise._closedPromise._closedPromise._closedPromise;
    tmp32 = undefined !== writable._closeRequest || undefined !== writable._inFlightCloseRequest;
    tmp40 = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      fn = function o(arg0) {
        if (arg0) {
          closure_0();
        } else {
          if (c8) {
            c0 = true;
            let callResult = new Promise((fn) => fn(c0));
          } else {
            fn = () => new typeError(/* F143621 */ function() { ... });
            let call = then.call;
            if (typeof call === "unknown") {
              callResult = then(fn, undefined);
            } else {
              callResult = call(_readyPromise, fn, undefined);
            }
          }
          const call2 = then.call;
          if (typeof call2 === "unknown") {
            then(tmp8, closure_1);
          } else {
            call2(callResult, tmp8, closure_1);
          }
        }
      };
      fn(false);
    });
  });
}
function sr(_pulling) {
  closure_0 = _pulling;
  if (ur(_pulling)) {
    if (_pulling._pulling) {
      _pulling._pullAgain = true;
    } else {
      _pulling._pulling = true;
      fn = () => {
        self._pulling = false;
        if (self._pullAgain) {
          self._pullAgain = false;
          if (ur(self)) {
            if (self._pulling) {
              self._pullAgain = true;
            } else {
              self._pulling = true;
              fn = () => {
                self._pulling = false;
                if (self._pullAgain) {
                  self._pullAgain = false;
                  if (ur(self)) {
                    if (self._pulling) {
                      self._pullAgain = true;
                    } else {
                      self._pulling = true;
                      fn = () => {
                        self._pulling = false;
                        if (self._pullAgain) {
                          self._pullAgain = false;
                          if (ur(self)) {
                            if (self._pulling) {
                              self._pullAgain = true;
                            } else {
                              self._pulling = true;
                              fn = () => {
                                self._pulling = false;
                                if (self._pullAgain) {
                                  self._pullAgain = false;
                                  if (ur(self)) {
                                    if (self._pulling) {
                                      self._pullAgain = true;
                                    } else {
                                      self._pulling = true;
                                      fn = /* F127606 */ function() { ... };
                                      const fn2 = /* F127607 */ function() { ... };
                                      const call = then.call;
                                      const _pullAlgorithmResult = self._pullAlgorithm();
                                      const call2 = then.call;
                                      if (typeof call2 === "unknown") {
                                        then(undefined, tmp5);
                                      } else {
                                        call2(tmp4, undefined, tmp5);
                                      }
                                      tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                                    }
                                  }
                                }
                                return null;
                              };
                              const fn2 = (typeError) => {
                                const _controlledReadableStream = self._controlledReadableStream;
                                if ("readable" === _controlledReadableStream._state) {
                                  const tmp6 = new closure_15();
                                  self._queue = tmp6;
                                  self._queueTotalSize = 0;
                                  self._pullAlgorithm = undefined;
                                  self._cancelAlgorithm = undefined;
                                  self._strategySizeAlgorithm = undefined;
                                  jr(_controlledReadableStream, typeError);
                                }
                                return null;
                              };
                              const call = then.call;
                              const _pullAlgorithmResult = self._pullAlgorithm();
                              const call2 = then.call;
                              if (typeof call2 === "unknown") {
                                then(undefined, tmp5);
                              } else {
                                call2(tmp4, undefined, tmp5);
                              }
                              tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                            }
                          }
                        }
                        return null;
                      };
                      const fn2 = (typeError) => {
                        const _controlledReadableStream = self._controlledReadableStream;
                        if ("readable" === _controlledReadableStream._state) {
                          const tmp6 = new closure_15();
                          self._queue = tmp6;
                          self._queueTotalSize = 0;
                          self._pullAlgorithm = undefined;
                          self._cancelAlgorithm = undefined;
                          self._strategySizeAlgorithm = undefined;
                          jr(_controlledReadableStream, typeError);
                        }
                        return null;
                      };
                      const call = then.call;
                      const _pullAlgorithmResult = self._pullAlgorithm();
                      const call2 = then.call;
                      if (typeof call2 === "unknown") {
                        then(undefined, tmp5);
                      } else {
                        call2(tmp4, undefined, tmp5);
                      }
                      tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                    }
                  }
                }
                return null;
              };
              const fn2 = (typeError) => {
                const _controlledReadableStream = self._controlledReadableStream;
                if ("readable" === _controlledReadableStream._state) {
                  const tmp6 = new closure_15();
                  self._queue = tmp6;
                  self._queueTotalSize = 0;
                  self._pullAlgorithm = undefined;
                  self._cancelAlgorithm = undefined;
                  self._strategySizeAlgorithm = undefined;
                  jr(_controlledReadableStream, typeError);
                }
                return null;
              };
              const call = then.call;
              const _pullAlgorithmResult = self._pullAlgorithm();
              const call2 = then.call;
              if (typeof call2 === "unknown") {
                then(undefined, tmp5);
              } else {
                call2(tmp4, undefined, tmp5);
              }
              tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
            }
          }
        }
        return null;
      };
      const fn2 = (typeError) => {
        const _controlledReadableStream = self._controlledReadableStream;
        if ("readable" === _controlledReadableStream._state) {
          const tmp6 = new closure_15();
          self._queue = tmp6;
          self._queueTotalSize = 0;
          self._pullAlgorithm = undefined;
          self._cancelAlgorithm = undefined;
          self._strategySizeAlgorithm = undefined;
          jr(_controlledReadableStream, typeError);
        }
        return null;
      };
      const call = then.call;
      const _pullAlgorithmResult = _pulling._pullAlgorithm();
      const call2 = then.call;
      if (typeof call2 === "unknown") {
        then(undefined, tmp4);
      } else {
        call2(tmp3, undefined, tmp4);
      }
      tmp3 = typeof call === "unknown" ? then(fn, fn2) : call(_pulling._pullAlgorithm(), fn, fn2);
    }
  }
}
function ur(self) {
  ({ _controlledReadableStream, _closeRequested } = self);
  let tmp2 = !_closeRequested;
  if (!_closeRequested) {
    tmp2 = "readable" === tmp;
  }
  let tmp3 = tmp2;
  if (tmp3) {
    let _started = self._started;
    if (_started) {
      let tmp5 = undefined !== _controlledReadableStream._reader;
      if (tmp5) {
        tmp5 = _controlledReadableStream._reader._readRequests.length > 0;
      }
      let tmp6 = tmp5;
      if (!tmp6) {
        const _state = self._controlledReadableStream._state;
        let tmp7 = null;
        if ("errored" !== _state) {
          let num2 = 0;
          if ("closed" !== _state) {
            num2 = self._strategyHWM - self._queueTotalSize;
          }
          tmp7 = num2;
        }
        tmp6 = tmp7 > 0;
      }
      _started = tmp6;
    }
    tmp3 = _started;
  }
  return tmp3;
}
function fr(_controlledReadableStream, arg1) {
  if (mr(_controlledReadableStream)) {
    _controlledReadableStream = _controlledReadableStream._controlledReadableStream;
    if (Wr(_controlledReadableStream)) {
      if (G(_controlledReadableStream) > 0) {
        U(_controlledReadableStream, arg1, false);
      }
      sr(_controlledReadableStream);
      br(_controlledReadableStream, __exception);
      throw __exception;
    }
    try {
      try {
        ve(_controlledReadableStream, arg1, tmp6);
      } catch (__exception) {
      }
    } catch (tmp12) {
      br(tmp2, tmp12);
      throw tmp12;
    }
  }
}
function br(_controlledReadableStream, typeError) {
  _controlledReadableStream = _controlledReadableStream._controlledReadableStream;
  if ("readable" === _controlledReadableStream._state) {
    const tmp5 = new closure_15();
    _controlledReadableStream._queue = tmp5;
    _controlledReadableStream._queueTotalSize = 0;
    _controlledReadableStream._pullAlgorithm = undefined;
    _controlledReadableStream._cancelAlgorithm = undefined;
    _controlledReadableStream._strategySizeAlgorithm = undefined;
    jr(_controlledReadableStream, typeError);
  }
}
function mr(_closeRequested) {
  _closeRequested = _closeRequested._closeRequested;
  let tmp2 = !_closeRequested;
  if (!_closeRequested) {
    tmp2 = "readable" === tmp;
  }
  return tmp2;
}
function _r(_controlledReadableStream, _readableStreamController, S, fn, _cancelAlgorithm, _strategyHWM, _strategySizeAlgorithm) {
  _readableStreamController._controlledReadableStream = _controlledReadableStream;
  _readableStreamController._queue = undefined;
  _readableStreamController._queueTotalSize = undefined;
  _readableStreamController._queue = new closure_15();
  _readableStreamController._queueTotalSize = 0;
  _readableStreamController._started = false;
  _readableStreamController._closeRequested = false;
  _readableStreamController._pullAgain = false;
  _readableStreamController._pulling = false;
  _readableStreamController._strategySizeAlgorithm = _strategySizeAlgorithm;
  _readableStreamController._strategyHWM = _strategyHWM;
  _readableStreamController._pullAlgorithm = fn;
  _readableStreamController._cancelAlgorithm = _cancelAlgorithm;
  _controlledReadableStream._readableStreamController = _readableStreamController;
  closure_0 = S();
  const tmp = new closure_15();
  fn = () => {
    closure_0._started = true;
    if (ur(closure_0)) {
      if (closure_0._pulling) {
        closure_0._pullAgain = true;
      } else {
        closure_0._pulling = true;
        fn = () => {
          self._pulling = false;
          if (self._pullAgain) {
            self._pullAgain = false;
            if (ur(self)) {
              if (self._pulling) {
                self._pullAgain = true;
              } else {
                self._pulling = true;
                fn = () => {
                  self._pulling = false;
                  if (self._pullAgain) {
                    self._pullAgain = false;
                    if (ur(self)) {
                      if (self._pulling) {
                        self._pullAgain = true;
                      } else {
                        self._pulling = true;
                        fn = () => {
                          self._pulling = false;
                          if (self._pullAgain) {
                            self._pullAgain = false;
                            if (ur(self)) {
                              if (self._pulling) {
                                self._pullAgain = true;
                              } else {
                                self._pulling = true;
                                fn = /* F127606 */ function() { ... };
                                const fn2 = /* F127607 */ function() { ... };
                                const call = then.call;
                                const _pullAlgorithmResult = self._pullAlgorithm();
                                const call2 = then.call;
                                if (typeof call2 === "unknown") {
                                  then(undefined, tmp5);
                                } else {
                                  call2(tmp4, undefined, tmp5);
                                }
                                tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                              }
                            }
                          }
                          return null;
                        };
                        const fn2 = (typeError) => {
                          const _controlledReadableStream = self._controlledReadableStream;
                          if ("readable" === _controlledReadableStream._state) {
                            const tmp6 = new closure_15();
                            self._queue = tmp6;
                            self._queueTotalSize = 0;
                            self._pullAlgorithm = undefined;
                            self._cancelAlgorithm = undefined;
                            self._strategySizeAlgorithm = undefined;
                            jr(_controlledReadableStream, typeError);
                          }
                          return null;
                        };
                        const call = then.call;
                        const _pullAlgorithmResult = self._pullAlgorithm();
                        const call2 = then.call;
                        if (typeof call2 === "unknown") {
                          then(undefined, tmp5);
                        } else {
                          call2(tmp4, undefined, tmp5);
                        }
                        tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                      }
                    }
                  }
                  return null;
                };
                const fn2 = (typeError) => {
                  const _controlledReadableStream = self._controlledReadableStream;
                  if ("readable" === _controlledReadableStream._state) {
                    const tmp6 = new closure_15();
                    self._queue = tmp6;
                    self._queueTotalSize = 0;
                    self._pullAlgorithm = undefined;
                    self._cancelAlgorithm = undefined;
                    self._strategySizeAlgorithm = undefined;
                    jr(_controlledReadableStream, typeError);
                  }
                  return null;
                };
                const call = then.call;
                const _pullAlgorithmResult = self._pullAlgorithm();
                const call2 = then.call;
                if (typeof call2 === "unknown") {
                  then(undefined, tmp5);
                } else {
                  call2(tmp4, undefined, tmp5);
                }
                tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
              }
            }
          }
          return null;
        };
        const fn2 = (typeError) => {
          const _controlledReadableStream = self._controlledReadableStream;
          if ("readable" === _controlledReadableStream._state) {
            const tmp6 = new closure_15();
            self._queue = tmp6;
            self._queueTotalSize = 0;
            self._pullAlgorithm = undefined;
            self._cancelAlgorithm = undefined;
            self._strategySizeAlgorithm = undefined;
            jr(_controlledReadableStream, typeError);
          }
          return null;
        };
        const call = then.call;
        const _pullAlgorithmResult = closure_0._pullAlgorithm();
        const call2 = then.call;
        if (typeof call2 === "unknown") {
          then(undefined, tmp4);
        } else {
          call2(tmp3, undefined, tmp4);
        }
        tmp3 = typeof call === "unknown" ? then(fn, fn2) : call(closure_0._pullAlgorithm(), fn, fn2);
      }
    }
    return null;
  };
  let fn2 = (typeError) => {
    const _controlledReadableStream = closure_0._controlledReadableStream;
    if ("readable" === _controlledReadableStream._state) {
      const tmp6 = new closure_15();
      closure_0._queue = tmp6;
      closure_0._queueTotalSize = 0;
      closure_0._pullAlgorithm = undefined;
      closure_0._cancelAlgorithm = undefined;
      closure_0._strategySizeAlgorithm = undefined;
      jr(_controlledReadableStream, typeError);
    }
    return null;
  };
  let call = then.call;
  const tmp2 = new Promise((fn) => fn(c0));
  let call2 = then.call;
  if (typeof call2 === "unknown") {
    then(undefined, tmp5);
  } else {
    call2(tmp4, undefined, tmp5);
  }
  tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(new Promise((fn) => fn(c0)), fn, fn2);
}
function Tr(preventAbort, arg1) {
  if (undefined !== preventAbort) {
    if (typeof preventAbort !== "object") {
      if (typeof preventAbort !== "function") {
        const _TypeError2 = TypeError;
        const _HermesInternal3 = HermesInternal;
        const typeError = new TypeError("" + "Second parameter" + " is not an object.");
        throw typeError;
      }
    }
  }
  preventAbort = undefined;
  if (null != preventAbort) {
    preventAbort = preventAbort.preventAbort;
  }
  let preventCancel;
  if (null != preventAbort) {
    preventCancel = preventAbort.preventCancel;
  }
  let preventClose;
  if (null != preventAbort) {
    preventClose = preventAbort.preventClose;
  }
  let signal;
  if (null != preventAbort) {
    signal = preventAbort.signal;
  }
  if (undefined !== signal) {
    const _HermesInternal = HermesInternal;
    const combined = "" + "Second parameter" + " has member 'signal' that";
    if (!((signal) => {
      if (typeof signal === "object") {
        if (null !== signal) {
          try {
            return typeof signal.aborted === "boolean";
          } catch (err) {
            return false;
          }
        }
      }
      return false;
    })(signal)) {
      const _TypeError = TypeError;
      const _HermesInternal2 = HermesInternal;
      const typeError1 = new TypeError("" + combined + " is not an AbortSignal.");
      throw typeError1;
    }
  }
  return { preventAbort: Boolean(preventAbort), preventCancel: Boolean(preventCancel), preventClose: Boolean(preventClose), signal };
}
function Er(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  let tmp2 = tmp;
  if (!tmp2) {
    if (tmp2) {
      tmp2 = obj instanceof _moduleResult8;
    }
    return tmp2;
  } else {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
    } else {
      hasOwnPropertyResult = call(obj, "_readableStreamController");
    }
  }
}
function Wr(_controlledReadableStream) {
  return undefined !== _controlledReadableStream._reader;
}
function Or(self, typeError) {
  self._disturbed = true;
  if ("closed" === self._state) {
    const tmp22 = new Promise((fn) => fn(c0));
    return tmp22;
  } else if ("errored" === self._state) {
    return closure_5(self._storedError);
  } else {
    Br(self);
    const _reader = self._reader;
    if (undefined !== _reader) {
      let tmp = typeof _reader === "object";
      if (typeof _reader === "object") {
        tmp = null !== _reader;
      }
      if (!tmp) {
        tmp = typeof _reader === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = _reader instanceof _moduleResult3;
        }
        if (tmp2) {
          const _readIntoRequests = _reader._readIntoRequests;
          const tmp10 = new closure_15();
          _reader._readIntoRequests = tmp10;
          const item = _readIntoRequests.forEach((_closeSteps) => {
            _closeSteps._closeSteps(undefined);
          });
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readIntoRequests");
        } else {
          hasOwnPropertyResult = call(_reader, "_readIntoRequests");
        }
      }
    }
    const _readableStreamController = self._readableStreamController;
    const call2 = then.call;
    return typeof call2 === "unknown" ? then(_classCallCheck, undefined) : call2(_readableStreamController[SymbolResult2](typeError), _classCallCheck, undefined);
  }
}
function Br(_controlledReadableByteStream) {
  _controlledReadableByteStream._state = "closed";
  const _reader = _controlledReadableByteStream._reader;
  if (undefined !== _reader) {
    if (undefined !== _reader._closedPromise_resolve) {
      const result = _reader._closedPromise_resolve(undefined);
      _reader._closedPromise_resolve = undefined;
      _reader._closedPromise_reject = undefined;
    }
    let tmp2 = typeof _reader === "object";
    if (typeof _reader === "object") {
      tmp2 = null !== _reader;
    }
    if (!tmp2) {
      tmp2 = typeof _reader === "function";
    }
    let tmp3 = tmp2;
    if (!tmp3) {
      if (tmp3) {
        tmp3 = _reader instanceof c29;
      }
      if (tmp3) {
        const _readRequests = _reader._readRequests;
        const tmp11 = new closure_15();
        _reader._readRequests = tmp11;
        const item = _readRequests.forEach((_closeSteps) => {
          _closeSteps._closeSteps();
        });
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_readRequests");
      } else {
        hasOwnPropertyResult = call(_reader, "_readRequests");
      }
    }
  }
}
function jr(_controlledReadableStream, typeError) {
  _controlledReadableStream._state = "errored";
  _controlledReadableStream._storedError = typeError;
  const _reader = _controlledReadableStream._reader;
  if (undefined !== _reader) {
    if (undefined === _reader._closedPromise_reject) {
      let tmp4 = typeof _reader === "object";
      if (typeof _reader === "object") {
        tmp4 = null !== _reader;
      }
      if (!tmp4) {
        tmp4 = typeof _reader === "function";
      }
      let tmp5 = tmp4;
      if (!tmp5) {
        if (tmp5) {
          tmp5 = _reader instanceof c29;
        }
        if (tmp5) {
          closure_0 = typeError;
          const _readRequests = _reader._readRequests;
          const tmp19 = new closure_15();
          _reader._readRequests = tmp19;
          const item = _readRequests.forEach((_errorSteps) => {
            _errorSteps._errorSteps(typeError);
          });
        } else {
          closure_0 = typeError;
          const _readIntoRequests = _reader._readIntoRequests;
          const tmp13 = new closure_15();
          _reader._readIntoRequests = tmp13;
          const item1 = _readIntoRequests.forEach((_errorSteps) => {
            _errorSteps._errorSteps(typeError);
          });
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call2 = hasOwnProperty.call;
        if (typeof call2 === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readRequests");
        } else {
          hasOwnPropertyResult = call2(_reader, "_readRequests");
        }
      }
    } else {
      let result = then;
      const call = then.call;
      if (typeof call === "unknown") {
        result(undefined, fn);
      } else {
        call(_closedPromise, undefined, fn);
      }
      result = _reader._closedPromise_reject(typeError);
      _reader._closedPromise_resolve = undefined;
      _reader._closedPromise_reject = undefined;
      _closedPromise = _reader._closedPromise;
    }
  }
}
function kr(pipeTo) {
  const typeError = new TypeError("ReadableStream.prototype." + "pipeTo" + " can only be used on a ReadableStream");
  return typeError;
}
function Vr(_controlledTransformStream, typeError) {
  const _transformStreamController = _controlledTransformStream._transformStreamController;
  _transformStreamController._transformAlgorithm = undefined;
  _transformStreamController._flushAlgorithm = undefined;
  _transformStreamController._cancelAlgorithm = undefined;
  const _writableStreamController = _controlledTransformStream._writable._writableStreamController;
  if ("writable" === _writableStreamController._controlledWritableStream._state) {
    const _controlledWritableStream = _writableStreamController._controlledWritableStream;
    _writableStreamController._writeAlgorithm = undefined;
    _writableStreamController._closeAlgorithm = undefined;
    _writableStreamController._abortAlgorithm = undefined;
    _writableStreamController._strategySizeAlgorithm = undefined;
    _controlledWritableStream._state = "erroring";
    _controlledWritableStream._storedError = typeError;
    ({ _writer, _writableStreamController: _writableStreamController2 } = _controlledWritableStream);
    if (undefined !== _writer) {
      kt(_writer, typeError);
    }
    let _started = !tmp3;
    if (!(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest)) {
      _started = _writableStreamController2._started;
    }
    if (_started) {
      Pt(_controlledWritableStream);
    }
  }
  if (_controlledTransformStream._backpressure) {
    closure_0 = _controlledTransformStream;
    if (undefined !== _controlledTransformStream._backpressureChangePromise) {
      const result = _controlledTransformStream._backpressureChangePromise_resolve();
    }
    const tmp10 = new Promise((_backpressureChangePromise_resolve) => {
      obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
    });
    _controlledTransformStream._backpressureChangePromise = tmp10;
    _controlledTransformStream._backpressure = false;
  }
}
function Gr(_controlledTransformStream, arg1) {
  closure_0 = _controlledTransformStream;
  if (undefined !== _controlledTransformStream._backpressureChangePromise) {
    const result = _controlledTransformStream._backpressureChangePromise_resolve();
  }
  _controlledTransformStream._backpressureChangePromise = new Promise((_backpressureChangePromise_resolve) => {
    obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
  });
  _controlledTransformStream._backpressure = true;
}
function Kr(self, arg1) {
  const _controlledTransformStream = self._controlledTransformStream;
  const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
  if (mr(_readableStreamController)) {
    try {
      fr(_readableStreamController, arg1);
      if (((_readableStreamController) => !ur(_readableStreamController))(_readableStreamController) !== _controlledTransformStream._backpressure) {
        Gr(_controlledTransformStream, true);
      }
    } catch (tmp13) {
      Vr(tmp, tmp13);
      throw tmp._readable._storedError;
    }
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Readable side is not in a state that permits enqueue");
    throw typeError;
  }
}
let closure_5 = reject.bind(Promise);
let c6 = resolve.bind(Promise);
function y(arg0) {
  if (typeof queueMicrotask === "function") {
    const _queueMicrotask = queueMicrotask;
    fn = queueMicrotask;
    fn = queueMicrotask;
  } else {
    const tmp4 = new Promise((fn) => fn(c0));
    closure_0 = tmp4;
    fn = function y(arg0) {
      const call = then.call;
      if (typeof call === "unknown") {
        let callResult = then(arg0, undefined);
      } else {
        callResult = call(closure_0, arg0, undefined);
      }
      return callResult;
    };
  }
  return fn(arg0);
}
let fn2 = function v() {
  _classCallCheck(this, _classCallCheck);
  this._cursor = 0;
  this._size = 0;
  this._front = { _elements: [], _next: "r" };
  this._back = this._front;
  this._cursor = 0;
  this._size = 0;
};
let _classCallCheck = fn2;
let items = [
  {
    key: "length",
    get() {
      return this._size;
    }
  },
  {
    key: "push",
    value: function push(arg0) {
      const self = this;
      const _back = this._back;
      let tmp = _back;
      if (16383 === _back._elements.length) {
        const obj = { _elements: [], _next: "r" };
        tmp = obj;
      }
      const _elements = _back._elements;
      _elements.push(arg0);
      if (tmp !== _back) {
        self._back = tmp;
        _back._next = tmp;
      }
      self._size = self._size + 1;
    }
  },
  {
    key: "shift",
    value: function shift() {
      const self = this;
      ({ _front, _cursor } = this);
      let num = _cursor + 1;
      const _elements = _front._elements;
      let _next = _front;
      if (16384 === num) {
        _next = _front._next;
        num = 0;
      }
      self._size = self._size - 1;
      self._cursor = num;
      if (_front !== _next) {
        self._front = _next;
      }
      _elements[_cursor] = undefined;
      return _elements[_cursor];
    }
  },
  {
    key: "forEach",
    value: function forEach(fn) {
      ({ _cursor, _front } = this);
      let _elements = _front._elements;
      if (_cursor !== _elements.length) {
        let tmp = _front;
        if (_cursor !== _elements.length) {
          while (true) {
            let tmp2 = fn(_elements[_cursor]);
            let sum = _cursor + 1;
            if (sum !== _elements.length) {
              _cursor = sum;
              if (sum !== _elements.length) {
                continue;
              } else {
                let _next2 = tmp5._next;
                let _elements1 = _next2._elements;
                _elements = _elements1;
                tmp = _next2;
                _cursor = 0;
                if (0 === _elements1.length) {
                  break;
                }
              }
              continue;
            } else if (undefined === tmp._next) {
              break;
            }
            break;
          }
        } else {
          const _next = _front._next;
          const _elements2 = _next._elements;
          _elements = _elements2;
          tmp = _next;
          _cursor = 0;
        }
      }
    }
  },
  {
    key: "peek",
    value: function peek() {
      return this._front._elements[this._cursor];
    }
  }
];
let closure_15 = _createClass(fn2, items);
const SymbolResult = Symbol("[[AbortSteps]]");
let c16 = SymbolResult;
const SymbolResult1 = Symbol("[[ErrorSteps]]");
const SymbolResult2 = Symbol("[[CancelSteps]]");
const SymbolResult3 = Symbol("[[PullSteps]]");
const SymbolResult4 = Symbol("[[ReleaseSteps]]");
let closure_24 = Number.isFinite || ((scrollLength) => {
  let isFiniteResult = typeof scrollLength === "number";
  if (typeof scrollLength === "number") {
    const _isFinite = isFinite;
    isFiniteResult = isFinite(scrollLength);
  }
  return isFiniteResult;
});
let fn3 = function o(close, close2) {
  try {
    const _Object = Object;
    const obj = { value: close2, configurable: true };
    Object.defineProperty(close, "name", obj);
  } catch (err) {
  }
};
let closure_25 = Math.trunc || ((endImportTime) => {
  if (endImportTime < 0) {
    const _Math2 = Math;
    let rounded = Math.ceil(endImportTime);
  } else {
    const _Math = Math;
    rounded = Math.floor(endImportTime);
  }
  return rounded;
});
class ReadableStreamDefaultReader {
  constructor(arg0) {
    self = this;
    tmp = closure_3_0(this, TransformStreamDefaultController);
    if (undefined === global) {
      tmp25 = globalThis;
      _TypeError3 = TypeError;
      _HermesInternal2 = HermesInternal;
      str6 = "'.";
      str7 = "ReadableStreamDefaultReader";
      str8 = " is required in '";
      num2 = 1;
      str9 = "Parameter ";
      tmp26 = new.target;
      tmp27 = new.target;
      typeError = new TypeError("Parameter " + 1 + " is required in '" + "ReadableStreamDefaultReader" + "'.");
      tmp29 = typeError;
      throw typeError;
    } else {
      tmp2 = typeof global === "object";
      if (typeof global === "object") {
        tmp30 = null;
        tmp2 = null !== global;
      }
      if (!tmp2) {
        tmp2 = typeof global === "function";
      }
      tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp7 = closure_2_93;
          tmp3 = global instanceof closure_2_93;
        }
        if (tmp3) {
          if (undefined !== global._reader) {
            tmp20 = globalThis;
            _TypeError2 = TypeError;
            tmp21 = new.target;
            str5 = "This stream has already been locked for exclusive reading by another reader";
            tmp22 = new.target;
            typeError1 = new TypeError("This stream has already been locked for exclusive reading by another reader");
            tmp24 = typeError1;
            throw typeError1;
          } else {
            tmp13 = closure_2_21;
            num = 0;
            tmp14 = closure_2_21(self, global);
            tmp15 = closure_2_15;
            tmp16 = new.target;
            tmp17 = new.target;
            tmp18 = new closure_2_15();
            tmp19 = tmp18;
            self._readRequests = tmp18;
            return;
          }
        } else {
          tmp8 = globalThis;
          _TypeError = TypeError;
          _HermesInternal = HermesInternal;
          str2 = " is not a ReadableStream.";
          str3 = "First parameter";
          str4 = "";
          tmp9 = new.target;
          tmp10 = new.target;
          typeError2 = new TypeError("" + "First parameter" + " is not a ReadableStream.");
          tmp12 = typeError2;
          throw typeError2;
        }
      } else {
        tmp4 = globalThis;
        _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          str = "_readableStreamController";
          hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
        } else {
          str10 = "_readableStreamController";
          hasOwnPropertyResult = call(global, "_readableStreamController");
        }
        tmp6 = hasOwnPropertyResult;
      }
    }
    return;
  }
}
_classCallCheck = ReadableStreamDefaultReader;
let items1 = [
  {
    key: "closed",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof c29;
        }
        if (tmp2) {
          let _closedPromise = self._closedPromise;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableStreamDefaultReader.prototype." + "closed" + " can only be used on a ReadableStreamDefaultReader");
          _closedPromise = closure_5(typeError);
        }
        return _closedPromise;
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readRequests");
        } else {
          hasOwnPropertyResult = call(self, "_readRequests");
        }
      }
    }
  },
  {
    key: "cancel",
    value: function cancel() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof c29;
        }
        if (tmp3) {
          if (undefined === self._ownerReadableStream) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Cannot cancel a stream using a released reader");
            let tmp15 = closure_5(typeError);
          } else {
            tmp15 = Or(self._ownerReadableStream, tmp);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStreamDefaultReader.prototype." + "cancel" + " can only be used on a ReadableStreamDefaultReader");
          return closure_5(typeError1);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readRequests");
        } else {
          hasOwnPropertyResult = call(self, "_readRequests");
        }
      }
      tmp = typeError;
    }
  },
  {
    key: "read",
    value: function read() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof c29;
        }
        if (tmp2) {
          if (undefined === self._ownerReadableStream) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Cannot read from a stream using a released reader");
            return closure_5(typeError);
          } else {
            const tmp28 = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
            });
            const obj = {
              _chunkSteps(value) {
                      return closure_0({ value, done: false });
                    },
              _closeSteps() {
                      return closure_0({ value: "HermesInternal", done: null });
                    },
              _errorSteps(arg0) {
                      return closure_1(arg0);
                    }
            };
            const _ownerReadableStream = self._ownerReadableStream;
            _ownerReadableStream._disturbed = true;
            if ("closed" === _ownerReadableStream._state) {
              obj._closeSteps();
            } else if ("errored" === _ownerReadableStream._state) {
              obj._errorSteps(_ownerReadableStream._storedError);
            } else {
              const _readableStreamController = _ownerReadableStream._readableStreamController;
              _readableStreamController[SymbolResult3](obj);
            }
            return tmp28;
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStreamDefaultReader.prototype." + "read" + " can only be used on a ReadableStreamDefaultReader");
          return closure_5(typeError1);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readRequests");
        } else {
          hasOwnPropertyResult = call(self, "_readRequests");
        }
      }
    }
  },
  {
    key: "releaseLock",
    value: function releaseLock() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof c29;
        }
        if (tmp2) {
          if (undefined !== self._ownerReadableStream) {
            W(self);
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Reader was released");
            const _readRequests = self._readRequests;
            const tmp22 = new closure_15();
            self._readRequests = tmp22;
            const item = _readRequests.forEach((_errorSteps) => {
              _errorSteps._errorSteps(typeError);
            });
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStreamDefaultReader.prototype." + "releaseLock" + " can only be used on a ReadableStreamDefaultReader");
          throw typeError1;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readRequests");
        } else {
          hasOwnPropertyResult = call(self, "_readRequests");
        }
      }
    }
  }
];
const _moduleResult = _createClass(ReadableStreamDefaultReader, items1);
c29 = _moduleResult;
Object.defineProperties(_moduleResult.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } });
fn3(_moduleResult.prototype.cancel, "cancel");
fn3(_moduleResult.prototype.read, "read");
fn3(_moduleResult.prototype.releaseLock, "releaseLock");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object3 = Object;
  const _Symbol3 = Symbol;
  Object.defineProperty(_moduleResult.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
}
fn = function ie(transfer) {
  if (typeof transfer.transfer === "function") {
    fn = (transfer) => transfer.transfer();
  } else {
    const _structuredClone = structuredClone;
    if (typeof structuredClone === "function") {
      fn = (source) => {
        const obj = { transfer: null };
        items = [source];
        obj.transfer = items;
        return structuredClone(source, obj);
      };
    } else {
      fn = (transfer) => transfer;
    }
  }
  return fn(transfer);
};
fn = function le(detached) {
  if (typeof detached.detached === "boolean") {
    fn = (detached) => detached.detached;
  } else {
    fn = (byteLength) => 0 === byteLength.byteLength;
  }
  return fn(detached);
};
if (null === asyncIterator) {
  let _Symbol = Symbol;
  const _for = Symbol.for;
  if (null !== _for) {
    if (undefined !== _for) {
      let call = _for.call;
      let _Symbol2 = Symbol;
      if (typeof call === "unknown") {
        let _forResult = _for("Symbol.asyncIterator");
      } else {
        _forResult = call(_Symbol2, "Symbol.asyncIterator");
      }
    }
  }
  asyncIterator = tmp14;
}
str2 = "@@asyncIterator";
if (null !== asyncIterator) {
  str2 = "@@asyncIterator";
  if (undefined !== asyncIterator) {
    str2 = asyncIterator;
  }
}
function he(_reader, _preventCancel) {
  closure_3_0(this, _classCallCheck);
  this._ongoingPromise = undefined;
  this._isFinished = false;
  this._reader = _reader;
  this._preventCancel = _preventCancel;
}
_classCallCheck = he;
const entry = {
  key: "next",
  value: function next() {
    const self = this;
    if (this._ongoingPromise) {
      fn = function e() {
        return self._nextSteps();
      };
      const call = then.call;
      typeof call === "unknown" ? then(fn, fn) : call(self._ongoingPromise, fn, fn);
      const _ongoingPromise = self._ongoingPromise;
    } else {
      self._ongoingPromise = self._nextSteps();
      return self._ongoingPromise;
    }
  }
};
let items2 = [
  entry,
  {
    key: "return",
    value: function _return(value) {
      const self = this;
      closure_0 = value;
      if (this._ongoingPromise) {
        fn = function t() {
          return self._returnSteps(closure_0);
        };
        const call = then.call;
        typeof call === "unknown" ? then(fn, fn) : call(self._ongoingPromise, fn, fn);
        const _ongoingPromise = self._ongoingPromise;
      } else {
        self._ongoingPromise = self._returnSteps(value);
        return self._ongoingPromise;
      }
    }
  },
  {
    key: "_nextSteps",
    value: function _nextSteps() {
      const self = this;
      if (this._isFinished) {
        return Promise.resolve({ value: "HermesInternal", done: null });
      } else {
        const _reader = tmp._reader;
        const tmp5 = new self((arg0, arg1) => {
          closure_1 = arg0;
          closure_2 = arg1;
        });
        const obj = {
          _chunkSteps(value) {
              self._ongoingPromise = undefined;
              closure_1_12(() => closure_1({ value, done: false }));
            },
          _closeSteps() {
              self._ongoingPromise = undefined;
              self._isFinished = true;
              W(_reader);
              closure_1({ value: "HermesInternal", done: null });
            },
          _errorSteps(arg0) {
              self._ongoingPromise = undefined;
              self._isFinished = true;
              W(_reader);
              closure_2(arg0);
            }
        };
        const _ownerReadableStream = _reader._ownerReadableStream;
        _ownerReadableStream._disturbed = true;
        if ("closed" === _ownerReadableStream._state) {
          obj._closeSteps();
        } else if ("errored" === _ownerReadableStream._state) {
          obj._errorSteps(_ownerReadableStream._storedError);
        } else {
          const _readableStreamController = _ownerReadableStream._readableStreamController;
          _readableStreamController[SymbolResult3](obj);
        }
        return tmp5;
      }
    }
  },
  {
    key: "_returnSteps",
    value: function _returnSteps(value) {
      const self = this;
      if (this._isFinished) {
        const obj2 = { value, done: true };
        return Promise.resolve(obj2);
      } else {
        self._isFinished = true;
        const _reader = self._reader;
        if (self._preventCancel) {
          W(_reader);
          value = { value: null, done: true };
          value.value = value;
          const tmp12 = new Promise((fn) => fn(c0));
          return tmp12;
        } else {
          W(_reader);
          fn = () => {
            value = { value, done: true };
            return value;
          };
          const call = then.call;
          if (typeof call === "unknown") {
            let callResult = then(fn, undefined);
          } else {
            callResult = call(tmp2, fn, undefined);
          }
          return callResult;
        }
      }
    }
  }
];
closure_38 = _createClass(he, items2);
obj3 = {
  next() {
    if (_e(this)) {
      let nextResult = this._asyncIteratorImpl.next();
      const iter = this._asyncIteratorImpl;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("ReadableStreamAsyncIterator." + "next" + " can only be used on a ReadableSteamAsyncIterator");
      nextResult = closure_5(typeError);
    }
    return nextResult;
  },
  return(arg0) {
    if (_e(this)) {
      const _asyncIteratorImpl = this._asyncIteratorImpl;
      let returnResult = _asyncIteratorImpl.return(arg0);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("ReadableStreamAsyncIterator." + "return" + " can only be used on a ReadableSteamAsyncIterator");
      returnResult = closure_5(typeError);
    }
    return returnResult;
  }
};
obj3[str2] = function() {
  return this;
};
Object.defineProperty(obj3, str2, { enumerable: false });
fn4 = Number.isNaN;
if (!fn4) {
  fn4 = (arg0) => arg0 != arg0;
}
class ReadableStreamBYOBRequest {
  constructor() {
    tmp = closure_3_0(this, TransformStreamDefaultController);
    typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
_classCallCheck = ReadableStreamBYOBRequest;
const items3 = [
  {
    key: "view",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult1;
        }
        if (tmp2) {
          return self._view;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableStreamBYOBRequest.prototype." + "view" + " can only be used on a ReadableStreamBYOBRequest");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_associatedReadableByteStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_associatedReadableByteStreamController");
        }
      }
    }
  },
  {
    key: "respond",
    value: function respond(arg0) {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult1;
        }
        if (tmp2) {
          if (undefined === arg0) {
            const _TypeError8 = TypeError;
            const _HermesInternal4 = HermesInternal;
            const typeError = new TypeError("Parameter " + 1 + " is required in '" + "respond" + "'.");
            throw typeError;
          } else {
            const _Number = Number;
            const _Number2 = Number;
            const NumberResult = Number(arg0);
            let num = 0;
            if (0 !== NumberResult) {
              num = NumberResult;
            }
            if (closure_24(num)) {
              const tmp19 = closure_25(num);
              let num2 = 0;
              if (0 !== tmp19) {
                num2 = tmp19;
              }
              if (num2 >= 0) {
                if (num2 <= MAX_SAFE_INTEGER) {
                  let num3 = 0;
                  if (closure_24(num2)) {
                    num3 = 0;
                    if (0 !== num2) {
                      num3 = num2;
                    }
                  }
                  if (undefined === self._associatedReadableByteStreamController) {
                    const _TypeError6 = TypeError;
                    const typeError1 = new TypeError("This BYOB request has been invalidated");
                    throw typeError1;
                  } else if (fn(self._view.buffer)) {
                    const _TypeError5 = TypeError;
                    const typeError2 = new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
                    throw typeError2;
                  } else {
                    const _associatedReadableByteStreamController = self._associatedReadableByteStreamController;
                    const _pendingPullIntos = _associatedReadableByteStreamController._pendingPullIntos;
                    const peekResult = _pendingPullIntos.peek();
                    if ("closed" === _associatedReadableByteStreamController._controlledReadableByteStream._state) {
                      if (0 !== num3) {
                        const _TypeError4 = TypeError;
                        const typeError3 = new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
                        throw typeError3;
                      }
                    } else if (0 === num3) {
                      const _TypeError3 = TypeError;
                      const typeError4 = new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                      throw typeError4;
                    } else if (peekResult.bytesFilled + num3 > peekResult.byteLength) {
                      const _RangeError = RangeError;
                      const rangeError = new RangeError("bytesWritten out of range");
                      throw rangeError;
                    }
                    peekResult.buffer = fn(peekResult.buffer);
                    $e(_associatedReadableByteStreamController, num3);
                  }
                }
              }
              const _TypeError7 = TypeError;
              const _HermesInternal3 = HermesInternal;
              const typeError5 = new TypeError("" + "First parameter" + " is outside the accepted range of 0 to " + MAX_SAFE_INTEGER + ", inclusive");
              throw typeError5;
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal2 = HermesInternal;
              const typeError6 = new TypeError("" + "First parameter" + " is not a finite number");
              throw typeError6;
            }
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError7 = new TypeError("ReadableStreamBYOBRequest.prototype." + "respond" + " can only be used on a ReadableStreamBYOBRequest");
          throw typeError7;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_associatedReadableByteStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_associatedReadableByteStreamController");
        }
      }
    }
  },
  {
    key: "respondWithNewView",
    value: function respondWithNewView(buffer) {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult1;
        }
        if (tmp2) {
          if (undefined === buffer) {
            const _TypeError5 = TypeError;
            const _HermesInternal2 = HermesInternal;
            const typeError = new TypeError("Parameter " + 1 + " is required in '" + "respondWithNewView" + "'.");
            throw typeError;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (ArrayBuffer.isView(buffer)) {
              if (undefined === self._associatedReadableByteStreamController) {
                const _TypeError4 = TypeError;
                const typeError1 = new TypeError("This BYOB request has been invalidated");
                throw typeError1;
              } else if (fn(buffer.buffer)) {
                const _TypeError3 = TypeError;
                const typeError2 = new TypeError("The given view's buffer has been detached and so cannot be used as a response");
                throw typeError2;
              } else {
                Xe(self._associatedReadableByteStreamController, buffer);
              }
            } else {
              const _TypeError2 = TypeError;
              const typeError3 = new TypeError("You can only respond with array buffer views");
              throw typeError3;
            }
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError4 = new TypeError("ReadableStreamBYOBRequest.prototype." + "respondWithNewView" + " can only be used on a ReadableStreamBYOBRequest");
          throw typeError4;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_associatedReadableByteStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_associatedReadableByteStreamController");
        }
      }
    }
  }
];
_moduleResult1 = _createClass(ReadableStreamBYOBRequest, items3);
Object.defineProperties(_moduleResult1.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } });
fn3(_moduleResult1.prototype.respond, "respond");
fn3(_moduleResult1.prototype.respondWithNewView, "respondWithNewView");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object4 = Object;
  const _Symbol4 = Symbol;
  Object.defineProperty(_moduleResult1.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
}
class ReadableByteStreamController {
  constructor() {
    tmp = closure_3_0(this, TransformStreamDefaultController);
    typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
_classCallCheck = ReadableByteStreamController;
const items4 = [
  {
    key: "byobRequest",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult2;
        }
        if (tmp2) {
          if (null === self._byobRequest) {
            if (self._pendingPullIntos.length > 0) {
              const _pendingPullIntos = self._pendingPullIntos;
              const peekResult = _pendingPullIntos.peek();
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled, peekResult.byteLength - peekResult.bytesFilled);
              const _Object2 = Object;
              const obj = Object.create(_moduleResult1.prototype);
              obj._associatedReadableByteStreamController = self;
              obj._view = uint8Array;
              self._byobRequest = obj;
            }
          }
          return self._byobRequest;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableByteStreamController.prototype." + "byobRequest" + " can only be used on a ReadableByteStreamController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableByteStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableByteStream");
        }
      }
    }
  },
  {
    key: "desiredSize",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult2;
        }
        if (tmp2) {
          const _state = self._controlledReadableByteStream._state;
          let tmp12 = null;
          if ("errored" !== _state) {
            let num = 0;
            if ("closed" !== _state) {
              num = self._strategyHWM - self._queueTotalSize;
            }
            tmp12 = num;
          }
          return tmp12;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableByteStreamController.prototype." + "desiredSize" + " can only be used on a ReadableByteStreamController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableByteStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableByteStream");
        }
      }
    }
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult2;
        }
        if (tmp2) {
          if (self._closeRequested) {
            const _TypeError3 = TypeError;
            const typeError = new TypeError("The stream has already been closed; do not close it again!");
            throw typeError;
          } else {
            const _state = self._controlledReadableByteStream._state;
            if ("readable" !== _state) {
              const _TypeError2 = TypeError;
              const _HermesInternal2 = HermesInternal;
              const typeError1 = new TypeError("The stream (in " + _state + " state) is not in the readable state and cannot be closed");
              throw typeError1;
            } else {
              Qe(self);
            }
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError2 = new TypeError("ReadableByteStreamController.prototype." + "close" + " can only be used on a ReadableByteStreamController");
          throw typeError2;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableByteStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableByteStream");
        }
      }
    }
  },
  {
    key: "enqueue",
    value: function enqueue(byteLength) {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult2;
        }
        if (tmp2) {
          if (undefined === byteLength) {
            const _TypeError7 = TypeError;
            const _HermesInternal3 = HermesInternal;
            const typeError = new TypeError("Parameter " + 1 + " is required in '" + "enqueue" + "'.");
            throw typeError;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (ArrayBuffer.isView(byteLength)) {
              if (0 === byteLength.byteLength) {
                const _TypeError6 = TypeError;
                const typeError1 = new TypeError("chunk must have non-zero byteLength");
                throw typeError1;
              } else if (0 === byteLength.buffer.byteLength) {
                const _TypeError5 = TypeError;
                const typeError2 = new TypeError("chunk's buffer must have non-zero byteLength");
                throw typeError2;
              } else if (self._closeRequested) {
                const _TypeError4 = TypeError;
                const typeError3 = new TypeError("stream is closed or draining");
                throw typeError3;
              } else {
                const _state = self._controlledReadableByteStream._state;
                if ("readable" !== _state) {
                  const _TypeError3 = TypeError;
                  const _HermesInternal2 = HermesInternal;
                  const typeError4 = new TypeError("The stream (in " + _state + " state) is not in the readable state and cannot be enqueued to");
                  throw typeError4;
                } else {
                  xe(self, byteLength);
                }
              }
            } else {
              const _TypeError2 = TypeError;
              const typeError5 = new TypeError("chunk must be an array buffer view");
              throw typeError5;
            }
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError6 = new TypeError("ReadableByteStreamController.prototype." + "enqueue" + " can only be used on a ReadableByteStreamController");
          throw typeError6;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableByteStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableByteStream");
        }
      }
    }
  },
  {
    key: "error",
    value: function error() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult2;
        }
        if (tmp3) {
          const _controlledReadableByteStream = self._controlledReadableByteStream;
          if ("readable" === _controlledReadableByteStream._state) {
            if (null !== self._byobRequest) {
              self._byobRequest._associatedReadableByteStreamController = undefined;
              self._byobRequest._view = null;
              self._byobRequest = null;
            }
            const tmp17 = new closure_15();
            self._pendingPullIntos = tmp17;
            const tmp21 = new closure_15();
            self._queue = tmp21;
            self._queueTotalSize = 0;
            self._pullAlgorithm = undefined;
            self._cancelAlgorithm = undefined;
            jr(_controlledReadableByteStream, tmp);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableByteStreamController.prototype." + "error" + " can only be used on a ReadableByteStreamController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableByteStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableByteStream");
        }
      }
      tmp = typeError;
    }
  },
  {
    key: SymbolResult2,
    value(arg0) {
      const self = this;
      if (null !== this._byobRequest) {
        self._byobRequest._associatedReadableByteStreamController = undefined;
        self._byobRequest._view = null;
        self._byobRequest = null;
      }
      self._pendingPullIntos = new closure_15();
      const tmp = new closure_15();
      self._queue = new closure_15();
      self._queueTotalSize = 0;
      self._pullAlgorithm = undefined;
      self._cancelAlgorithm = undefined;
      return self._cancelAlgorithm(arg0);
    }
  },
  {
    key: SymbolResult3,
    value(arg0) {
      const self = this;
      if (this._queueTotalSize > 0) {
        He(self, arg0);
      } else {
        const _autoAllocateChunkSize = self._autoAllocateChunkSize;
        if (undefined !== _autoAllocateChunkSize) {
          try {
            const _ArrayBuffer = ArrayBuffer;
            const arrayBuffer = new ArrayBuffer(_autoAllocateChunkSize);
            const obj2 = { buffer: arrayBuffer, bufferByteLength: _autoAllocateChunkSize, byteOffset: 0, byteLength: _autoAllocateChunkSize, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: null, readerType: "default" };
            const _Uint8Array = Uint8Array;
            obj2.viewConstructor = Uint8Array;
            const _pendingPullIntos = self._pendingPullIntos;
            _pendingPullIntos.push(obj2);
          } catch (tmp13) {
            obj._errorSteps(tmp13);
          }
        }
        V(tmp, arg0);
        Pe(self);
      }
    }
  },
  {
    key: SymbolResult4,
    value() {
      const self = this;
      if (this._pendingPullIntos.length > 0) {
        const _pendingPullIntos = self._pendingPullIntos;
        const peekResult = _pendingPullIntos.peek();
        peekResult.readerType = "none";
        const tmp5 = new closure_15();
        self._pendingPullIntos = tmp5;
        const _pendingPullIntos1 = self._pendingPullIntos;
        _pendingPullIntos1.push(peekResult);
      }
    }
  }
];
_moduleResult2 = _createClass(ReadableByteStreamController, items4);
Object.defineProperties(_moduleResult2.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } });
fn3(_moduleResult2.prototype.close, "close");
fn3(_moduleResult2.prototype.enqueue, "enqueue");
fn3(_moduleResult2.prototype.error, "error");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object5 = Object;
  const _Symbol5 = Symbol;
  Object.defineProperty(_moduleResult2.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true });
}
class ReadableStreamBYOBReader {
  constructor(arg0) {
    self = this;
    tmp = closure_3_0(this, TransformStreamDefaultController);
    if (undefined === global) {
      tmp36 = globalThis;
      _TypeError4 = TypeError;
      _HermesInternal2 = HermesInternal;
      str8 = "'.";
      str9 = "ReadableStreamBYOBReader";
      str10 = " is required in '";
      num2 = 1;
      str11 = "Parameter ";
      tmp37 = new.target;
      tmp38 = new.target;
      typeError = new TypeError("Parameter " + 1 + " is required in '" + "ReadableStreamBYOBReader" + "'.");
      tmp40 = typeError;
      throw typeError;
    } else {
      tmp2 = typeof global === "object";
      if (typeof global === "object") {
        tmp41 = null;
        tmp2 = null !== global;
      }
      if (!tmp2) {
        tmp2 = typeof global === "function";
      }
      tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp7 = closure_2_93;
          tmp3 = global instanceof closure_2_93;
        }
        if (tmp3) {
          if (undefined !== global._reader) {
            tmp31 = globalThis;
            _TypeError3 = TypeError;
            tmp32 = new.target;
            str7 = "This stream has already been locked for exclusive reading by another reader";
            tmp33 = new.target;
            typeError1 = new TypeError("This stream has already been locked for exclusive reading by another reader");
            tmp35 = typeError1;
            throw typeError1;
          } else {
            _readableStreamController = global._readableStreamController;
            tmp13 = typeof _readableStreamController === "object";
            if (typeof _readableStreamController === "object") {
              tmp42 = null;
              tmp13 = null !== _readableStreamController;
            }
            if (!tmp13) {
              tmp13 = typeof _readableStreamController === "function";
            }
            tmp14 = tmp13;
            if (!tmp14) {
              if (tmp14) {
                tmp18 = closure_2_45;
                tmp14 = _readableStreamController instanceof closure_2_45;
              }
              if (tmp14) {
                tmp24 = closure_2_21;
                num = 0;
                tmp25 = closure_2_21(self, global);
                tmp26 = closure_2_15;
                tmp27 = new.target;
                tmp28 = new.target;
                tmp29 = new closure_2_15();
                tmp30 = tmp29;
                self._readIntoRequests = tmp29;
                return;
              } else {
                tmp19 = globalThis;
                _TypeError2 = TypeError;
                tmp20 = new.target;
                str6 = "Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source";
                tmp21 = new.target;
                typeError2 = new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
                tmp23 = typeError2;
                throw typeError2;
              }
            } else {
              tmp15 = globalThis;
              _Object2 = Object;
              hasOwnProperty2 = Object.prototype.hasOwnProperty;
              call2 = hasOwnProperty2.call;
              if (typeof call2 === "unknown") {
                str5 = "_controlledReadableByteStream";
                hasOwnProperty2Result = hasOwnProperty2("_controlledReadableByteStream");
              } else {
                str13 = "_controlledReadableByteStream";
                hasOwnProperty2Result = call2(_readableStreamController, "_controlledReadableByteStream");
              }
              tmp17 = hasOwnProperty2Result;
            }
          }
        } else {
          tmp8 = globalThis;
          _TypeError = TypeError;
          _HermesInternal = HermesInternal;
          str2 = " is not a ReadableStream.";
          str3 = "First parameter";
          str4 = "";
          tmp9 = new.target;
          tmp10 = new.target;
          typeError3 = new TypeError("" + "First parameter" + " is not a ReadableStream.");
          tmp12 = typeError3;
          throw typeError3;
        }
      } else {
        tmp4 = globalThis;
        _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          str = "_readableStreamController";
          hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
        } else {
          str12 = "_readableStreamController";
          hasOwnPropertyResult = call(global, "_readableStreamController");
        }
        tmp6 = hasOwnPropertyResult;
      }
    }
    return;
  }
}
_classCallCheck = ReadableStreamBYOBReader;
const items5 = [
  {
    key: "closed",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult3;
        }
        if (tmp2) {
          let _closedPromise = self._closedPromise;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableStreamBYOBReader.prototype." + "closed" + " can only be used on a ReadableStreamBYOBReader");
          _closedPromise = closure_5(typeError);
        }
        return _closedPromise;
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readIntoRequests");
        } else {
          hasOwnPropertyResult = call(self, "_readIntoRequests");
        }
      }
    }
  },
  {
    key: "cancel",
    value: function cancel() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult3;
        }
        if (tmp3) {
          if (undefined === self._ownerReadableStream) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Cannot cancel a stream using a released reader");
            let tmp15 = closure_5(typeError);
          } else {
            tmp15 = Or(self._ownerReadableStream, tmp);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStreamBYOBReader.prototype." + "cancel" + " can only be used on a ReadableStreamBYOBReader");
          return closure_5(typeError1);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readIntoRequests");
        } else {
          hasOwnPropertyResult = call(self, "_readIntoRequests");
        }
      }
      tmp = typeError;
    }
  },
  {
    key: "read",
    value: function read(byteLength) {
      let obj = min;
      if (min === undefined) {
        obj = {};
      }
      const self = this;
      byteLength = undefined;
      min = undefined;
      if (at(this)) {
        const _ArrayBuffer = ArrayBuffer;
        if (ArrayBuffer.isView(byteLength)) {
          if (0 === byteLength.byteLength) {
            const _TypeError5 = TypeError;
            let typeError = new TypeError("view must have non-zero byteLength");
            return d(typeError);
          } else if (0 === byteLength.buffer.byteLength) {
            const _TypeError4 = TypeError;
            let typeError1 = new TypeError("view's buffer must have non-zero byteLength");
            return d(typeError1);
          } else if (fn(byteLength.buffer)) {
            let _TypeError3 = TypeError;
            let typeError2 = new TypeError("view's buffer has been detached");
            return d(typeError2);
          } else {
            try {
              min = ((min, options) => {
                if (undefined !== min) {
                  if (typeof min !== "object") {
                    if (typeof min !== "function") {
                      const _TypeError3 = TypeError;
                      const _HermesInternal3 = HermesInternal;
                      const typeError = new TypeError("" + "options" + " is not an object.");
                      throw typeError;
                    }
                  }
                }
                min = undefined;
                if (null != min) {
                  min = min.min;
                }
                let num = 1;
                if (null !== min) {
                  num = 1;
                  if (undefined !== min) {
                    num = min;
                  }
                }
                const combined = "" + "options" + " has member 'min' that";
                const NumberResult = Number(num);
                let num2 = 0;
                if (0 !== NumberResult) {
                  num2 = NumberResult;
                }
                if (closure_1_24(num2)) {
                  const tmp10 = closure_1_25(num2);
                  let num3 = 0;
                  if (0 !== tmp10) {
                    num3 = tmp10;
                  }
                  if (num3 >= 0) {
                    if (num3 <= MAX_SAFE_INTEGER) {
                      let num4 = 0;
                      if (closure_1_24(num3)) {
                        num4 = 0;
                        if (0 !== num3) {
                          num4 = num3;
                        }
                      }
                      const obj = { min: num4 };
                      return obj;
                    }
                  }
                  const _TypeError2 = TypeError;
                  const _HermesInternal2 = HermesInternal;
                  const typeError1 = new TypeError("" + combined + " is outside the accepted range of 0 to " + MAX_SAFE_INTEGER + ", inclusive");
                  throw typeError1;
                } else {
                  const _TypeError = TypeError;
                  const _HermesInternal = HermesInternal;
                  const typeError2 = new TypeError("" + combined + " is not a finite number");
                  throw typeError2;
                }
              })(obj, "options").min;
              if (0 === min) {
                let _TypeError2 = TypeError;
                const typeError3 = new TypeError("options.min must be greater than 0");
                return d(typeError3);
              } else {
                if (((byteLength) => byteLength.constructor === DataView)(byteLength)) {
                  if (min > byteLength.byteLength) {
                    const _RangeError2 = RangeError;
                    const rangeError = new RangeError("options.min must be less than or equal to view's byteLength");
                    return d(rangeError);
                  }
                } else if (min > byteLength.length) {
                  const _RangeError = RangeError;
                  const rangeError1 = new RangeError("options.min must be less than or equal to view's length");
                  return d(rangeError1);
                }
                if (undefined === self._ownerReadableStream) {
                  return d(O("read from"));
                } else {
                  const obj2 = {
                    _chunkSteps(value) {
                                  return byteLength({ value, done: false });
                                },
                    _closeSteps(value) {
                                  return byteLength({ value, done: true });
                                },
                    _errorSteps(arg0) {
                                  return min(arg0);
                                }
                  };
                  it(self, byteLength, min, obj2);
                  return u((arg0, arg1) => {
                    closure_0 = arg0;
                    closure_1 = arg1;
                  });
                }
              }
            } catch (tmp36) {
              return d(tmp36);
            }
          }
        } else {
          let _TypeError = TypeError;
          const typeError4 = new TypeError("view must be an array buffer view");
          return d(typeError4);
        }
      } else {
        return d(st("read"));
      }
    }
  },
  {
    key: "releaseLock",
    value: function releaseLock() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult3;
        }
        if (tmp2) {
          if (undefined !== self._ownerReadableStream) {
            W(self);
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Reader was released");
            const _readIntoRequests = self._readIntoRequests;
            const tmp22 = new closure_15();
            self._readIntoRequests = tmp22;
            const item = _readIntoRequests.forEach((_errorSteps) => {
              _errorSteps._errorSteps(typeError);
            });
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStreamBYOBReader.prototype." + "releaseLock" + " can only be used on a ReadableStreamBYOBReader");
          throw typeError1;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readIntoRequests");
        } else {
          hasOwnPropertyResult = call(self, "_readIntoRequests");
        }
      }
    }
  }
];
_moduleResult3 = _createClass(ReadableStreamBYOBReader, items5);
Object.defineProperties(_moduleResult3.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } });
fn3(_moduleResult3.prototype.cancel, "cancel");
fn3(_moduleResult3.prototype.read, "read");
fn3(_moduleResult3.prototype.releaseLock, "releaseLock");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object6 = Object;
  const _Symbol6 = Symbol;
  Object.defineProperty(_moduleResult3.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
}
class WritableStream {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    obj1 = require;
    if (require === undefined) {
      obj1 = {};
    }
    self = this;
    tmp = closure_3_0(this, TransformStreamDefaultController);
    tmp2 = null;
    if (undefined !== obj) {
      tmp3 = typeof obj === "object";
      if (typeof obj === "object") {
        tmp3 = null !== obj;
      }
      if (!tmp3) {
        tmp3 = typeof obj === "function";
      }
      tmp2 = obj;
      if (!tmp3) {
        tmp4 = globalThis;
        _TypeError = TypeError;
        _HermesInternal = HermesInternal;
        str = " is not an object.";
        str2 = "First parameter";
        str3 = "";
        tmp5 = new.target;
        tmp6 = new.target;
        typeError = new TypeError("" + "First parameter" + " is not an object.");
        tmp8 = typeError;
        throw typeError;
      }
    }
    tmp9 = closure_2_64(obj1, "Second parameter");
    if (undefined !== tmp2) {
      if (typeof tmp2 !== "object") {
        if (typeof tmp2 !== "function") {
          tmp69 = globalThis;
          _TypeError6 = TypeError;
          _HermesInternal10 = HermesInternal;
          str22 = " is not an object.";
          str23 = "First parameter";
          str24 = "";
          tmp70 = new.target;
          tmp71 = new.target;
          typeError1 = new TypeError("" + "First parameter" + " is not an object.");
          tmp73 = typeError1;
          throw typeError1;
        }
      }
    }
    abort = undefined;
    if (null != tmp2) {
      abort = tmp2.abort;
    }
    close = undefined;
    if (null != tmp2) {
      close = tmp2.close;
    }
    start = undefined;
    if (null != tmp2) {
      start = tmp2.start;
    }
    type = undefined;
    if (null != tmp2) {
      type = tmp2.type;
    }
    write = undefined;
    if (null != tmp2) {
      write = tmp2.write;
    }
    fn = undefined;
    if (undefined !== abort) {
      tmp15 = globalThis;
      _HermesInternal2 = HermesInternal;
      str4 = " has member 'abort' that";
      str5 = "First parameter";
      str6 = "";
      closure_0 = abort;
      closure_1 = tmp2;
      if (typeof abort !== "function") {
        _TypeError2 = TypeError;
        _HermesInternal3 = HermesInternal;
        str7 = " is not a function.";
        tmp17 = new.target;
        tmp18 = new.target;
        typeError2 = new TypeError("" + tmp16 + " is not a function.");
        tmp20 = typeError2;
        throw typeError2;
      } else {
        fn = (arg0) => {
          items = [arg0];
          return g(obj3, obj6, items);
        };
      }
    }
    obj4 = { abort: fn, close: null, start: null, write: null, type: null };
    fn2 = undefined;
    if (undefined !== close) {
      tmp21 = globalThis;
      _HermesInternal4 = HermesInternal;
      str8 = " has member 'close' that";
      str9 = "First parameter";
      str10 = "";
      closure_0 = close;
      closure_1 = tmp2;
      if (typeof close !== "function") {
        _TypeError3 = TypeError;
        _HermesInternal5 = HermesInternal;
        str11 = " is not a function.";
        tmp23 = new.target;
        tmp24 = new.target;
        typeError3 = new TypeError("" + tmp22 + " is not a function.");
        tmp26 = typeError3;
        throw typeError3;
      } else {
        fn2 = () => g(obj3, obj6, []);
      }
    }
    obj4.close = fn2;
    fn3 = undefined;
    if (undefined !== start) {
      tmp27 = globalThis;
      _HermesInternal6 = HermesInternal;
      str12 = " has member 'start' that";
      str13 = "First parameter";
      str14 = "";
      closure_0 = start;
      closure_1 = tmp2;
      if (typeof start !== "function") {
        _TypeError4 = TypeError;
        _HermesInternal7 = HermesInternal;
        str15 = " is not a function.";
        tmp29 = new.target;
        tmp30 = new.target;
        typeError4 = new TypeError("" + tmp28 + " is not a function.");
        tmp32 = typeError4;
        throw typeError4;
      } else {
        fn3 = (arg0) => {
          items = [arg0];
          if (typeof obj3 !== "function") {
            const _TypeError = TypeError;
            const typeError = new TypeError("Argument is not a function");
            throw typeError;
          } else {
            const _Function = Function;
            const call = apply.call;
            return typeof call === "unknown" ? apply(obj6, items) : call(obj3, obj6, items);
          }
        };
      }
    }
    obj4.start = fn3;
    fn4 = undefined;
    if (undefined !== write) {
      tmp33 = globalThis;
      _HermesInternal8 = HermesInternal;
      str16 = " has member 'write' that";
      str17 = "First parameter";
      str18 = "";
      closure_0 = write;
      closure_1 = tmp2;
      if (typeof write !== "function") {
        _TypeError5 = TypeError;
        _HermesInternal9 = HermesInternal;
        str19 = " is not a function.";
        tmp35 = new.target;
        tmp36 = new.target;
        typeError5 = new TypeError("" + tmp34 + " is not a function.");
        tmp38 = typeError5;
        throw typeError5;
      } else {
        fn4 = (arg0, arg1) => {
          items = [arg0, arg1];
          return g(obj3, obj6, items);
        };
      }
    }
    obj4.write = fn4;
    obj4.type = type;
    self._state = "writable";
    self._storedError = undefined;
    self._writer = undefined;
    self._writableStreamController = undefined;
    tmp39 = new closure_2_15();
    self._writeRequests = tmp39;
    self._inFlightWriteRequest = undefined;
    self._closeRequest = undefined;
    self._inFlightCloseRequest = undefined;
    self._pendingAbortRequest = undefined;
    self._backpressure = false;
    if (undefined !== obj4.type) {
      tmp64 = globalThis;
      _RangeError2 = RangeError;
      tmp65 = new.target;
      str21 = "Invalid type is specified";
      tmp66 = new.target;
      rangeError = new RangeError("Invalid type is specified");
      tmp68 = rangeError;
      throw rangeError;
    } else {
      tmp40 = tmp9.size || (() => 1);
      highWaterMark = tmp9.highWaterMark;
      num = 1;
      if (undefined !== highWaterMark) {
        tmp41 = closure_2_41;
        if (!closure_2_41(highWaterMark)) {
          num = highWaterMark;
        }
        tmp42 = globalThis;
        _RangeError = RangeError;
        tmp43 = new.target;
        str20 = "Invalid highWaterMark";
        tmp44 = new.target;
        rangeError1 = new RangeError("Invalid highWaterMark");
        tmp46 = rangeError1;
        throw rangeError1;
      }
      closure_0 = obj4;
      tmp47 = globalThis;
      _Object = Object;
      tmp48 = closure_2_78;
      obj5 = Object.create(closure_2_78.prototype);
      closure_1 = obj5;
      tmp50 = undefined !== obj4.start ? (() => obj3.start(obj6)) : (() => {

      });
      tmp51 = undefined !== obj4.write ? ((arg0) => obj3.write(arg0, obj6)) : (() => new Promise((fn) => fn(c0)));
      tmp52 = undefined !== obj4.close ? (() => obj3.close()) : (() => new Promise((fn) => fn(c0)));
      tmp53 = undefined !== obj4.abort ? ((arg0) => obj3.abort(arg0)) : (() => new Promise((fn) => fn(c0)));
      tmp54 = closure_2_79;
      num2 = 0;
      tmp55 = self;
      tmp56 = obj5;
      tmp57 = tmp50;
      tmp58 = tmp51;
      tmp59 = tmp52;
      tmp60 = tmp53;
      tmp61 = num;
      tmp62 = tmp40;
      tmp63 = closure_2_79(self, obj5, tmp50, tmp51, tmp52, tmp53, num, tmp40);
      return;
    }
  }
}
_classCallCheck = WritableStream;
const items6 = [
  {
    key: "locked",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult4;
        }
        if (tmp2) {
          return undefined !== self._writer;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("WritableStream.prototype." + "locked" + " can only be used on a WritableStream");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_writableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_writableStreamController");
        }
      }
    }
  },
  {
    key: "abort",
    value: function abort() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult4;
        }
        if (tmp3) {
          if (undefined !== self._writer) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Cannot abort a stream that already has a writer");
            let tmp15 = closure_5(typeError);
          } else {
            tmp15 = wt(self, tmp);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("WritableStream.prototype." + "abort" + " can only be used on a WritableStream");
          return closure_5(typeError1);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_writableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_writableStreamController");
        }
      }
      tmp = _abortReason;
    }
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult4;
        }
        if (tmp2) {
          if (undefined !== self._writer) {
            const _TypeError3 = TypeError;
            const typeError = new TypeError("Cannot close a stream that already has a writer");
            let tmp15 = closure_5(typeError);
          } else {
            if (tmp13) {
              const _TypeError2 = TypeError;
              const typeError1 = new TypeError("Cannot close an already-closing stream");
              tmp15 = closure_5(typeError1);
            } else {
              tmp15 = Rt(self);
            }
            tmp13 = undefined !== self._closeRequest || undefined !== self._inFlightCloseRequest;
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError2 = new TypeError("WritableStream.prototype." + "close" + " can only be used on a WritableStream");
          return closure_5(typeError2);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_writableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_writableStreamController");
        }
      }
    }
  },
  {
    key: "getWriter",
    value: function getWriter() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult4;
        }
        if (tmp2) {
          const tmp16 = new _moduleResult5(self);
          return tmp16;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("WritableStream.prototype." + "getWriter" + " can only be used on a WritableStream");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_writableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_writableStreamController");
        }
      }
    }
  }
];
_moduleResult4 = _createClass(WritableStream, items6);
Object.defineProperties(_moduleResult4.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } });
fn3(_moduleResult4.prototype.abort, "abort");
fn3(_moduleResult4.prototype.close, "close");
fn3(_moduleResult4.prototype.getWriter, "getWriter");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object7 = Object;
  const _Symbol7 = Symbol;
  Object.defineProperty(_moduleResult4.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true });
}
class WritableStreamDefaultWriter {
  constructor(arg0) {
    self = this;
    tmp = closure_3_0(this, TransformStreamDefaultController);
    if (undefined === global) {
      tmp66 = globalThis;
      _TypeError3 = TypeError;
      _HermesInternal2 = HermesInternal;
      str15 = "'.";
      str16 = "WritableStreamDefaultWriter";
      str17 = " is required in '";
      num = 1;
      str18 = "Parameter ";
      tmp67 = new.target;
      tmp68 = new.target;
      typeError = new TypeError("Parameter " + 1 + " is required in '" + "WritableStreamDefaultWriter" + "'.");
      tmp70 = typeError;
      throw typeError;
    } else {
      tmp2 = typeof global === "object";
      if (typeof global === "object") {
        tmp71 = null;
        tmp2 = null !== global;
      }
      if (!tmp2) {
        tmp2 = typeof global === "function";
      }
      tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp7 = closure_2_65;
          tmp3 = global instanceof closure_2_65;
        }
        if (tmp3) {
          if (undefined !== global._writer) {
            tmp61 = globalThis;
            _TypeError2 = TypeError;
            tmp62 = new.target;
            str14 = "This stream has already been locked for exclusive writing by another writer";
            tmp63 = new.target;
            typeError1 = new TypeError("This stream has already been locked for exclusive writing by another writer");
            tmp65 = typeError1;
            throw typeError1;
          } else {
            self._ownerWritableStream = global;
            global._writer = self;
            _state = global._state;
            str20 = "writable";
            if ("writable" === _state) {
              tmp44 = undefined !== global._closeRequest || undefined !== global._inFlightCloseRequest;
              if (!tmp44) {
                if (global._backpressure) {
                  closure_0 = self;
                  tmp45 = closure_3;
                  tmp46 = new.target;
                  tmp47 = new.target;
                  tmp48 = new closure_3((_readyPromise_resolve, _readyPromise_reject) => {
                    _writer._readyPromise_resolve = _readyPromise_resolve;
                    _writer._readyPromise_reject = _readyPromise_reject;
                  });
                  tmp49 = tmp48;
                  self._readyPromise = tmp48;
                  str11 = "pending";
                  self._readyPromiseState = "pending";
                  tmp50 = closure_3;
                }
                closure_0 = self;
                tmp57 = new.target;
                tmp58 = new.target;
                tmp501 = new tmp50((_closedPromise_resolve, _closedPromise_reject) => {
                  self._closedPromise_resolve = _closedPromise_resolve;
                  self._closedPromise_reject = _closedPromise_reject;
                  self._closedPromiseState = "pending";
                });
                tmp60 = tmp501;
                self._closedPromise = tmp501;
              }
              closure_0 = self;
              tmp52 = new.target;
              tmp53 = new.target;
              tmp51 = closure_3;
              tmp54 = new closure_3((_readyPromise_resolve, _readyPromise_reject) => {
                _writer._readyPromise_resolve = _readyPromise_resolve;
                _writer._readyPromise_reject = _readyPromise_reject;
              });
              tmp55 = tmp54;
              self._readyPromise = tmp54;
              str12 = "pending";
              self._readyPromiseState = "pending";
              tmp50 = closure_3;
              if (undefined !== self._readyPromise_resolve) {
                result = self._readyPromise_resolve(undefined);
                self._readyPromise_resolve = undefined;
                self._readyPromise_reject = undefined;
                str13 = "fulfilled";
                self._readyPromiseState = "fulfilled";
                tmp50 = tmp51;
              }
            } else {
              str21 = "erroring";
              if ("erroring" === _state) {
                closure_0 = self;
                tmp33 = new.target;
                tmp34 = new.target;
                tmp32 = closure_3;
                tmp35 = new closure_3((_readyPromise_resolve, _readyPromise_reject) => {
                  _writer._readyPromise_resolve = _readyPromise_resolve;
                  _writer._readyPromise_reject = _readyPromise_reject;
                });
                tmp36 = tmp35;
                self._readyPromise = tmp35;
                str9 = "pending";
                self._readyPromiseState = "pending";
                if (undefined === self._readyPromise_reject) {
                  closure_0 = self;
                  tmp40 = new.target;
                  tmp41 = new.target;
                  tmp321 = new tmp32((_closedPromise_resolve, _closedPromise_reject) => {
                    self._closedPromise_resolve = _closedPromise_resolve;
                    self._closedPromise_reject = _closedPromise_reject;
                    self._closedPromiseState = "pending";
                  });
                  tmp43 = tmp321;
                  self._closedPromise = tmp321;
                } else {
                  _readyPromise2 = self._readyPromise;
                  tmp37 = c2;
                  str10 = closure_4;
                  call3 = closure_4.call;
                  if (typeof call3 === "unknown") {
                    str10Result = str10(undefined, tmp37);
                  } else {
                    call3Result = call3(_readyPromise2, undefined, tmp37);
                  }
                  _readyPromise_rejectResult = self._readyPromise_reject(global._storedError);
                  self._readyPromise_resolve = undefined;
                  self._readyPromise_reject = undefined;
                  str10 = "rejected";
                  self._readyPromiseState = "rejected";
                }
              } else {
                str22 = "closed";
                if ("closed" === _state) {
                  closure_0 = self;
                  tmp23 = new.target;
                  tmp24 = new.target;
                  tmp22 = closure_3;
                  tmp25 = new closure_3((_readyPromise_resolve, _readyPromise_reject) => {
                    _writer._readyPromise_resolve = _readyPromise_resolve;
                    _writer._readyPromise_reject = _readyPromise_reject;
                  });
                  tmp26 = tmp25;
                  self._readyPromise = tmp25;
                  str7 = "pending";
                  self._readyPromiseState = "pending";
                  if (undefined !== self._readyPromise_resolve) {
                    result1 = self._readyPromise_resolve(undefined);
                    self._readyPromise_resolve = undefined;
                    self._readyPromise_reject = undefined;
                    str8 = "fulfilled";
                    self._readyPromiseState = "fulfilled";
                  }
                  closure_0 = self;
                  tmp28 = new.target;
                  tmp29 = new.target;
                  tmp221 = new tmp22((_closedPromise_resolve, _closedPromise_reject) => {
                    self._closedPromise_resolve = _closedPromise_resolve;
                    self._closedPromise_reject = _closedPromise_reject;
                    self._closedPromiseState = "pending";
                  });
                  tmp31 = tmp221;
                  self._closedPromise = tmp221;
                  if (undefined !== self._closedPromise_resolve) {
                    result2 = self._closedPromise_resolve(undefined);
                    self._closedPromise_resolve = undefined;
                    self._closedPromise_reject = undefined;
                    str24 = "resolved";
                    self._closedPromiseState = "resolved";
                  }
                } else {
                  _storedError = global._storedError;
                  closure_0 = self;
                  tmp73 = new.target;
                  tmp74 = new.target;
                  tmp72 = closure_3;
                  tmp75 = new closure_3((_readyPromise_resolve, _readyPromise_reject) => {
                    _writer._readyPromise_resolve = _readyPromise_resolve;
                    _writer._readyPromise_reject = _readyPromise_reject;
                  });
                  tmp76 = tmp75;
                  self._readyPromise = tmp75;
                  str23 = "pending";
                  self._readyPromiseState = "pending";
                  if (undefined === self._readyPromise_reject) {
                    closure_0 = self;
                    tmp16 = new.target;
                    tmp17 = new.target;
                    tmp721 = new tmp72((_closedPromise_resolve, _closedPromise_reject) => {
                      self._closedPromise_resolve = _closedPromise_resolve;
                      self._closedPromise_reject = _closedPromise_reject;
                      self._closedPromiseState = "pending";
                    });
                    tmp19 = tmp721;
                    self._closedPromise = tmp721;
                    if (undefined !== self._closedPromise_reject) {
                      _closedPromise = self._closedPromise;
                      tmp78 = c2;
                      tmp79 = closure_4;
                      call4 = closure_4.call;
                      if (typeof call4 === "unknown") {
                        tmp79Result = tmp79(undefined, tmp78);
                      } else {
                        call4Result = call4(_closedPromise, undefined, tmp78);
                      }
                      result3 = self._closedPromise_reject(_storedError);
                      self._closedPromise_resolve = undefined;
                      self._closedPromise_reject = undefined;
                      str6 = "rejected";
                      self._closedPromiseState = "rejected";
                    }
                  } else {
                    _readyPromise = self._readyPromise;
                    tmp13 = c2;
                    str5 = closure_4;
                    call2 = closure_4.call;
                    if (typeof call2 === "unknown") {
                      str5Result = str5(undefined, tmp13);
                    } else {
                      call2Result = call2(_readyPromise, undefined, tmp13);
                    }
                    _readyPromise_rejectResult1 = self._readyPromise_reject(_storedError);
                    self._readyPromise_resolve = undefined;
                    self._readyPromise_reject = undefined;
                    str5 = "rejected";
                    self._readyPromiseState = "rejected";
                  }
                }
              }
              return;
            }
          }
        } else {
          tmp8 = globalThis;
          _TypeError = TypeError;
          _HermesInternal = HermesInternal;
          str2 = " is not a WritableStream.";
          str3 = "First parameter";
          str4 = "";
          tmp9 = new.target;
          tmp10 = new.target;
          typeError2 = new TypeError("" + "First parameter" + " is not a WritableStream.");
          tmp12 = typeError2;
          throw typeError2;
        }
      } else {
        tmp4 = globalThis;
        _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          str = "_writableStreamController";
          hasOwnPropertyResult = hasOwnProperty("_writableStreamController");
        } else {
          str19 = "_writableStreamController";
          hasOwnPropertyResult = call(global, "_writableStreamController");
        }
        tmp6 = hasOwnPropertyResult;
      }
    }
    return;
  }
}
_classCallCheck = WritableStreamDefaultWriter;
const items7 = [
  {
    key: "closed",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult5;
        }
        if (tmp2) {
          let _closedPromise = self._closedPromise;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("WritableStreamDefaultWriter.prototype." + "closed" + " can only be used on a WritableStreamDefaultWriter");
          _closedPromise = closure_5(typeError);
        }
        return _closedPromise;
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_ownerWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_ownerWritableStream");
        }
      }
    }
  },
  {
    key: "desiredSize",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult5;
        }
        if (tmp2) {
          if (undefined === self._ownerWritableStream) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Cannot desiredSize a stream using a released writer");
            throw typeError;
          } else {
            const _ownerWritableStream = self._ownerWritableStream;
            const _state = _ownerWritableStream._state;
            let tmp12 = null;
            if ("errored" !== _state) {
              tmp12 = null;
              if ("erroring" !== _state) {
                let num = 0;
                if ("closed" !== _state) {
                  const _writableStreamController = _ownerWritableStream._writableStreamController;
                  num = _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize;
                }
                tmp12 = num;
              }
            }
            return tmp12;
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("WritableStreamDefaultWriter.prototype." + "desiredSize" + " can only be used on a WritableStreamDefaultWriter");
          throw typeError1;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_ownerWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_ownerWritableStream");
        }
      }
    }
  },
  {
    key: "ready",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult5;
        }
        if (tmp2) {
          let _readyPromise = self._readyPromise;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("WritableStreamDefaultWriter.prototype." + "ready" + " can only be used on a WritableStreamDefaultWriter");
          _readyPromise = closure_5(typeError);
        }
        return _readyPromise;
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_ownerWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_ownerWritableStream");
        }
      }
    }
  },
  {
    key: "abort",
    value: function abort() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult5;
        }
        if (tmp3) {
          if (undefined === self._ownerWritableStream) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Cannot abort a stream using a released writer");
            let tmp15 = closure_5(typeError);
          } else {
            tmp15 = wt(self._ownerWritableStream, tmp);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("WritableStreamDefaultWriter.prototype." + "abort" + " can only be used on a WritableStreamDefaultWriter");
          return closure_5(typeError1);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_ownerWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_ownerWritableStream");
        }
      }
      tmp = _abortReason;
    }
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult5;
        }
        if (tmp2) {
          const _ownerWritableStream = self._ownerWritableStream;
          if (undefined === _ownerWritableStream) {
            const _TypeError3 = TypeError;
            const typeError = new TypeError("Cannot close a stream using a released writer");
            let tmp15 = closure_5(typeError);
          } else {
            if (tmp13) {
              const _TypeError2 = TypeError;
              const typeError1 = new TypeError("Cannot close an already-closing stream");
              tmp15 = closure_5(typeError1);
            } else {
              tmp15 = Rt(self._ownerWritableStream);
            }
            tmp13 = undefined !== _ownerWritableStream._closeRequest || undefined !== _ownerWritableStream._inFlightCloseRequest;
          }
          return tmp15;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError2 = new TypeError("WritableStreamDefaultWriter.prototype." + "close" + " can only be used on a WritableStreamDefaultWriter");
          return closure_5(typeError2);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_ownerWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_ownerWritableStream");
        }
      }
    }
  },
  {
    key: "releaseLock",
    value: function releaseLock() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult5;
        }
        if (tmp2) {
          if (undefined !== self._ownerWritableStream) {
            At(self);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("WritableStreamDefaultWriter.prototype." + "releaseLock" + " can only be used on a WritableStreamDefaultWriter");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_ownerWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_ownerWritableStream");
        }
      }
    }
  },
  {
    key: "write",
    value: function write() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult5;
        }
        if (tmp3) {
          if (undefined === self._ownerWritableStream) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Cannot write to a stream using a released writer");
            let tmp15 = closure_5(typeError);
          } else {
            tmp15 = zt(self, tmp);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("WritableStreamDefaultWriter.prototype." + "write" + " can only be used on a WritableStreamDefaultWriter");
          return closure_5(typeError1);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_ownerWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_ownerWritableStream");
        }
      }
      tmp = arg0;
    }
  }
];
_moduleResult5 = _createClass(WritableStreamDefaultWriter, items7);
Object.defineProperties(_moduleResult5.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } });
fn3(_moduleResult5.prototype.abort, "abort");
fn3(_moduleResult5.prototype.close, "close");
fn3(_moduleResult5.prototype.releaseLock, "releaseLock");
fn3(_moduleResult5.prototype.write, "write");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object8 = Object;
  const _Symbol8 = Symbol;
  Object.defineProperty(_moduleResult5.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
}
closure_77 = {};
class WritableStreamDefaultController {
  constructor() {
    tmp = closure_3_0(this, TransformStreamDefaultController);
    typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
_classCallCheck = WritableStreamDefaultController;
const items8 = [
  {
    key: "abortReason",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult6;
        }
        if (tmp2) {
          return self._abortReason;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("WritableStreamDefaultController.prototype." + "abortReason" + " can only be used on a WritableStreamDefaultController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledWritableStream");
        }
      }
    }
  },
  {
    key: "signal",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult6;
        }
        if (tmp2) {
          if (undefined === self._abortController) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
            throw typeError;
          } else {
            return self._abortController.signal;
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("WritableStreamDefaultController.prototype." + "signal" + " can only be used on a WritableStreamDefaultController");
          throw typeError1;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledWritableStream");
        }
      }
    }
  },
  {
    key: "error",
    value: function error() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult6;
        }
        if (tmp3) {
          if ("writable" === self._controlledWritableStream._state) {
            const _controlledWritableStream = self._controlledWritableStream;
            self._writeAlgorithm = undefined;
            self._closeAlgorithm = undefined;
            self._abortAlgorithm = undefined;
            self._strategySizeAlgorithm = undefined;
            _controlledWritableStream._state = "erroring";
            _controlledWritableStream._storedError = tmp;
            ({ _writer, _writableStreamController } = _controlledWritableStream);
            if (undefined !== _writer) {
              kt(_writer, tmp);
            }
            let _started = !tmp15;
            if (!(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest)) {
              _started = _writableStreamController._started;
            }
            if (_started) {
              Pt(_controlledWritableStream);
            }
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("WritableStreamDefaultController.prototype." + "error" + " can only be used on a WritableStreamDefaultController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledWritableStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledWritableStream");
        }
      }
    }
  },
  {
    key: SymbolResult,
    value(arg0) {
      this._writeAlgorithm = undefined;
      this._closeAlgorithm = undefined;
      this._abortAlgorithm = undefined;
      this._strategySizeAlgorithm = undefined;
      return this._abortAlgorithm(arg0);
    }
  },
  {
    key: SymbolResult1,
    value() {
      this._queue = new closure_15();
      this._queueTotalSize = 0;
    }
  }
];
_moduleResult6 = _createClass(WritableStreamDefaultController, items8);
Object.defineProperties(_moduleResult6.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } });
if (typeof Symbol.toStringTag === "symbol") {
  let _Object9 = Object;
  const _Symbol9 = Symbol;
  Object.defineProperty(_moduleResult6.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
}
if (typeof globalThis !== "undefined") {
  let _self = globalThis;
} else {
  const _self2 = self;
  if (typeof self !== "undefined") {
    _self = self;
  } else if (undefined !== global) {
    _self = global;
  }
}
let DOMException;
if (null != _self) {
  DOMException = _self.DOMException;
}
let tmp46;
if (((DOMException) => {
  if (typeof DOMException !== "function") {
    if (typeof DOMException !== "object") {
      return false;
    }
  }
  if ("DOMException" !== DOMException.name) {
    return false;
  } else {
    try {
      new DOMException();
      return true;
    } catch (err) {
      return false;
    }
  }
})(DOMException)) {
  tmp46 = DOMException;
}
if (!tmp46) {
  class e {
    constructor(arg0, arg1) {
      obj = {};
      str = global;
      if (!global) {
        str = "";
      }
      str2 = require;
      obj.message = str;
      if (!require) {
        str2 = "Error";
      }
      obj.name = str2;
      if (Error.captureStackTrace) {
        _Error = Error;
        captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
      }
      return;
    }
  }
  fn3(e, "DOMException");
  let _Object = Object;
  let _Error = Error;
  e.prototype = Object.create(Error.prototype);
  let _Object2 = Object;
  let obj10 = { value: e, writable: true, configurable: true };
  Object.defineProperty(e.prototype, "constructor", obj10);
  tmp46 = e;
}
closure_83 = tmp46;
class ReadableStreamDefaultController {
  constructor() {
    tmp = closure_3_0(this, TransformStreamDefaultController);
    typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
_classCallCheck = ReadableStreamDefaultController;
const items9 = [
  {
    key: "desiredSize",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult7;
        }
        if (tmp2) {
          const _state = self._controlledReadableStream._state;
          let tmp12 = null;
          if ("errored" !== _state) {
            let num = 0;
            if ("closed" !== _state) {
              num = self._strategyHWM - self._queueTotalSize;
            }
            tmp12 = num;
          }
          return tmp12;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableStreamDefaultController.prototype." + "desiredSize" + " can only be used on a ReadableStreamDefaultController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableStream");
        }
      }
    }
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult7;
        }
        if (tmp2) {
          const _closeRequested = self._closeRequested;
          let tmp13 = !_closeRequested;
          if (!_closeRequested) {
            tmp13 = "readable" === tmp12;
          }
          if (tmp13) {
            const _closeRequested2 = self._closeRequested;
            let tmp20 = !_closeRequested2;
            if (!_closeRequested2) {
              tmp20 = "readable" === tmp19;
            }
            if (tmp20) {
              self._closeRequested = true;
              if (0 === self._queue.length) {
                self._pullAlgorithm = undefined;
                self._cancelAlgorithm = undefined;
                self._strategySizeAlgorithm = undefined;
                Br(tmp21);
              }
            }
          } else {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("The stream is not in a state that permits close");
            throw typeError;
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStreamDefaultController.prototype." + "close" + " can only be used on a ReadableStreamDefaultController");
          throw typeError1;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableStream");
        }
      }
    }
  },
  {
    key: "enqueue",
    value: function enqueue() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult7;
        }
        if (tmp3) {
          const _closeRequested = self._closeRequested;
          let tmp14 = !_closeRequested;
          if (!_closeRequested) {
            tmp14 = "readable" === tmp13;
          }
          if (tmp14) {
            fr(self, tmp);
          } else {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("The stream is not in a state that permits enqueue");
            throw typeError;
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStreamDefaultController.prototype." + "enqueue" + " can only be used on a ReadableStreamDefaultController");
          throw typeError1;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableStream");
        }
      }
      tmp = arg0;
    }
  },
  {
    key: "error",
    value: function error() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult7;
        }
        if (tmp3) {
          const _controlledReadableStream = self._controlledReadableStream;
          if ("readable" === _controlledReadableStream._state) {
            const tmp16 = new closure_15();
            self._queue = tmp16;
            self._queueTotalSize = 0;
            self._pullAlgorithm = undefined;
            self._cancelAlgorithm = undefined;
            self._strategySizeAlgorithm = undefined;
            jr(_controlledReadableStream, tmp);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableStreamDefaultController.prototype." + "error" + " can only be used on a ReadableStreamDefaultController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledReadableStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledReadableStream");
        }
      }
      tmp = typeError;
    }
  },
  {
    key: SymbolResult2,
    value(arg0) {
      this._queue = new closure_15();
      this._queueTotalSize = 0;
      this._pullAlgorithm = undefined;
      this._cancelAlgorithm = undefined;
      this._strategySizeAlgorithm = undefined;
      return this._cancelAlgorithm(arg0);
    }
  },
  {
    key: SymbolResult3,
    value(_chunkSteps) {
      const self = this;
      let _controlledReadableStream = this._controlledReadableStream;
      if (this._queue.length > 0) {
        const _queue = self._queue;
        let _pulling = self._queueTotalSize;
        self._queueTotalSize = _pulling - _queue.shift().size;
        if (self._queueTotalSize < 0) {
          self._queueTotalSize = 0;
        }
        let length = self._closeRequested;
        if (length) {
          length = self._queue.length;
          if (0 === length) {
            self._pullAlgorithm = undefined;
            self._cancelAlgorithm = undefined;
            self._strategySizeAlgorithm = undefined;
            Br(_controlledReadableStream);
          }
          _chunkSteps._chunkSteps(tmp7);
          length = then(undefined, length);
        }
        closure_129_0 = self;
        _pulling = ur;
        if (ur(self)) {
          _pulling = self._pulling;
          if (_pulling) {
            self._pullAgain = true;
          } else {
            self._pulling = true;
            const fn3 = () => {
              self._pulling = false;
              if (self._pullAgain) {
                self._pullAgain = false;
                if (ur(self)) {
                  if (self._pulling) {
                    self._pullAgain = true;
                  } else {
                    self._pulling = true;
                    fn = () => {
                      self._pulling = false;
                      if (self._pullAgain) {
                        self._pullAgain = false;
                        if (ur(self)) {
                          if (self._pulling) {
                            self._pullAgain = true;
                          } else {
                            self._pulling = true;
                            fn = () => {
                              self._pulling = false;
                              if (self._pullAgain) {
                                self._pullAgain = false;
                                if (ur(self)) {
                                  if (self._pulling) {
                                    self._pullAgain = true;
                                  } else {
                                    self._pulling = true;
                                    fn = () => {
                                      self._pulling = false;
                                      if (self._pullAgain) {
                                        self._pullAgain = false;
                                        if (ur(self)) {
                                          if (self._pulling) {
                                            self._pullAgain = true;
                                          } else {
                                            self._pulling = true;
                                            fn = /* F127606 */ function() { ... };
                                            const fn2 = /* F127607 */ function() { ... };
                                            const call = then.call;
                                            const _pullAlgorithmResult = self._pullAlgorithm();
                                            const call2 = then.call;
                                            if (typeof call2 === "unknown") {
                                              then(undefined, tmp5);
                                            } else {
                                              call2(tmp4, undefined, tmp5);
                                            }
                                            tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                                          }
                                        }
                                      }
                                      return null;
                                    };
                                    const fn2 = (typeError) => {
                                      const _controlledReadableStream = self._controlledReadableStream;
                                      if ("readable" === _controlledReadableStream._state) {
                                        const tmp6 = new closure_15();
                                        self._queue = tmp6;
                                        self._queueTotalSize = 0;
                                        self._pullAlgorithm = undefined;
                                        self._cancelAlgorithm = undefined;
                                        self._strategySizeAlgorithm = undefined;
                                        jr(_controlledReadableStream, typeError);
                                      }
                                      return null;
                                    };
                                    const call = then.call;
                                    const _pullAlgorithmResult = self._pullAlgorithm();
                                    const call2 = then.call;
                                    if (typeof call2 === "unknown") {
                                      then(undefined, tmp5);
                                    } else {
                                      call2(tmp4, undefined, tmp5);
                                    }
                                    tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                                  }
                                }
                              }
                              return null;
                            };
                            const fn2 = (typeError) => {
                              const _controlledReadableStream = self._controlledReadableStream;
                              if ("readable" === _controlledReadableStream._state) {
                                const tmp6 = new closure_15();
                                self._queue = tmp6;
                                self._queueTotalSize = 0;
                                self._pullAlgorithm = undefined;
                                self._cancelAlgorithm = undefined;
                                self._strategySizeAlgorithm = undefined;
                                jr(_controlledReadableStream, typeError);
                              }
                              return null;
                            };
                            const call = then.call;
                            const _pullAlgorithmResult = self._pullAlgorithm();
                            const call2 = then.call;
                            if (typeof call2 === "unknown") {
                              then(undefined, tmp5);
                            } else {
                              call2(tmp4, undefined, tmp5);
                            }
                            tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                          }
                        }
                      }
                      return null;
                    };
                    const fn2 = (typeError) => {
                      const _controlledReadableStream = self._controlledReadableStream;
                      if ("readable" === _controlledReadableStream._state) {
                        const tmp6 = new closure_15();
                        self._queue = tmp6;
                        self._queueTotalSize = 0;
                        self._pullAlgorithm = undefined;
                        self._cancelAlgorithm = undefined;
                        self._strategySizeAlgorithm = undefined;
                        jr(_controlledReadableStream, typeError);
                      }
                      return null;
                    };
                    const call = then.call;
                    const _pullAlgorithmResult = self._pullAlgorithm();
                    const call2 = then.call;
                    if (typeof call2 === "unknown") {
                      then(undefined, tmp5);
                    } else {
                      call2(tmp4, undefined, tmp5);
                    }
                    tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                  }
                }
              }
              return null;
            };
            fn4 = (typeError) => {
              const _controlledReadableStream = self._controlledReadableStream;
              if ("readable" === _controlledReadableStream._state) {
                const tmp6 = new closure_15();
                self._queue = tmp6;
                self._queueTotalSize = 0;
                self._pullAlgorithm = undefined;
                self._cancelAlgorithm = undefined;
                self._strategySizeAlgorithm = undefined;
                jr(_controlledReadableStream, typeError);
              }
              return null;
            };
            const call3 = then.call;
            _pulling = typeof call3 === "unknown" ? then(fn3, fn4) : call3(self._pullAlgorithm(), fn3, fn4);
            length = fn;
            const call4 = then.call;
            if (typeof call4 !== "unknown") {
              call4(_pulling, undefined, length);
            }
            let _pullAlgorithmResult = self._pullAlgorithm();
          }
        }
        const arr = _queue.shift();
      } else {
        const _readRequests = _controlledReadableStream._reader._readRequests;
        _readRequests.push(_chunkSteps);
        if (ur(self)) {
          if (self._pulling) {
            self._pullAgain = true;
          } else {
            self._pulling = true;
            fn = () => {
              self._pulling = false;
              if (self._pullAgain) {
                self._pullAgain = false;
                if (ur(self)) {
                  if (self._pulling) {
                    self._pullAgain = true;
                  } else {
                    self._pulling = true;
                    fn = () => {
                      self._pulling = false;
                      if (self._pullAgain) {
                        self._pullAgain = false;
                        if (ur(self)) {
                          if (self._pulling) {
                            self._pullAgain = true;
                          } else {
                            self._pulling = true;
                            fn = () => {
                              self._pulling = false;
                              if (self._pullAgain) {
                                self._pullAgain = false;
                                if (ur(self)) {
                                  if (self._pulling) {
                                    self._pullAgain = true;
                                  } else {
                                    self._pulling = true;
                                    fn = () => {
                                      self._pulling = false;
                                      if (self._pullAgain) {
                                        self._pullAgain = false;
                                        if (ur(self)) {
                                          if (self._pulling) {
                                            self._pullAgain = true;
                                          } else {
                                            self._pulling = true;
                                            fn = /* F127606 */ function() { ... };
                                            const fn2 = /* F127607 */ function() { ... };
                                            const call = then.call;
                                            const _pullAlgorithmResult = self._pullAlgorithm();
                                            const call2 = then.call;
                                            if (typeof call2 === "unknown") {
                                              then(undefined, tmp5);
                                            } else {
                                              call2(tmp4, undefined, tmp5);
                                            }
                                            tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                                          }
                                        }
                                      }
                                      return null;
                                    };
                                    const fn2 = (typeError) => {
                                      const _controlledReadableStream = self._controlledReadableStream;
                                      if ("readable" === _controlledReadableStream._state) {
                                        const tmp6 = new closure_15();
                                        self._queue = tmp6;
                                        self._queueTotalSize = 0;
                                        self._pullAlgorithm = undefined;
                                        self._cancelAlgorithm = undefined;
                                        self._strategySizeAlgorithm = undefined;
                                        jr(_controlledReadableStream, typeError);
                                      }
                                      return null;
                                    };
                                    const call = then.call;
                                    const _pullAlgorithmResult = self._pullAlgorithm();
                                    const call2 = then.call;
                                    if (typeof call2 === "unknown") {
                                      then(undefined, tmp5);
                                    } else {
                                      call2(tmp4, undefined, tmp5);
                                    }
                                    tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                                  }
                                }
                              }
                              return null;
                            };
                            const fn2 = (typeError) => {
                              const _controlledReadableStream = self._controlledReadableStream;
                              if ("readable" === _controlledReadableStream._state) {
                                const tmp6 = new closure_15();
                                self._queue = tmp6;
                                self._queueTotalSize = 0;
                                self._pullAlgorithm = undefined;
                                self._cancelAlgorithm = undefined;
                                self._strategySizeAlgorithm = undefined;
                                jr(_controlledReadableStream, typeError);
                              }
                              return null;
                            };
                            const call = then.call;
                            const _pullAlgorithmResult = self._pullAlgorithm();
                            const call2 = then.call;
                            if (typeof call2 === "unknown") {
                              then(undefined, tmp5);
                            } else {
                              call2(tmp4, undefined, tmp5);
                            }
                            tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                          }
                        }
                      }
                      return null;
                    };
                    const fn2 = (typeError) => {
                      const _controlledReadableStream = self._controlledReadableStream;
                      if ("readable" === _controlledReadableStream._state) {
                        const tmp6 = new closure_15();
                        self._queue = tmp6;
                        self._queueTotalSize = 0;
                        self._pullAlgorithm = undefined;
                        self._cancelAlgorithm = undefined;
                        self._strategySizeAlgorithm = undefined;
                        jr(_controlledReadableStream, typeError);
                      }
                      return null;
                    };
                    const call = then.call;
                    const _pullAlgorithmResult = self._pullAlgorithm();
                    const call2 = then.call;
                    if (typeof call2 === "unknown") {
                      then(undefined, tmp5);
                    } else {
                      call2(tmp4, undefined, tmp5);
                    }
                    tmp4 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
                  }
                }
              }
              return null;
            };
            let fn2 = (typeError) => {
              const _controlledReadableStream = self._controlledReadableStream;
              if ("readable" === _controlledReadableStream._state) {
                const tmp6 = new closure_15();
                self._queue = tmp6;
                self._queueTotalSize = 0;
                self._pullAlgorithm = undefined;
                self._cancelAlgorithm = undefined;
                self._strategySizeAlgorithm = undefined;
                jr(_controlledReadableStream, typeError);
              }
              return null;
            };
            let call = then.call;
            const _pullAlgorithmResult1 = self._pullAlgorithm();
            let call2 = then.call;
            if (typeof call2 === "unknown") {
              then(undefined, tmp4);
            } else {
              call2(tmp3, undefined, tmp4);
            }
            tmp3 = typeof call === "unknown" ? then(fn, fn2) : call(self._pullAlgorithm(), fn, fn2);
          }
        }
      }
    }
  },
  {
    key: SymbolResult4,
    value() {

    }
  }
];
_moduleResult7 = _createClass(ReadableStreamDefaultController, items9);
Object.defineProperties(_moduleResult7.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } });
fn3(_moduleResult7.prototype.close, "close");
fn3(_moduleResult7.prototype.enqueue, "enqueue");
fn3(_moduleResult7.prototype.error, "error");
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      obj = {};
      str = global;
      if (!global) {
        str = "";
      }
      str2 = require;
      obj.message = str;
      if (!require) {
        str2 = "Error";
      }
      obj.name = str2;
      if (Error.captureStackTrace) {
        _Error = Error;
        captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
      }
      return;
    }
  }
  const _Symbol10 = Symbol;
  Object.defineProperty(_moduleResult7.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
}
class ReadableStream {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    obj1 = require;
    if (require === undefined) {
      obj1 = {};
    }
    self = this;
    tmp = closure_3_0(this, TransformStreamDefaultController);
    tmp2 = null;
    if (undefined !== obj) {
      tmp3 = typeof obj === "object";
      if (typeof obj === "object") {
        tmp3 = null !== obj;
      }
      if (!tmp3) {
        tmp3 = typeof obj === "function";
      }
      tmp2 = obj;
      if (!tmp3) {
        tmp4 = globalThis;
        _TypeError = TypeError;
        _HermesInternal = HermesInternal;
        str = " is not an object.";
        str2 = "First parameter";
        str3 = "";
        tmp5 = new.target;
        tmp6 = new.target;
        typeError = new TypeError("" + "First parameter" + " is not an object.");
        tmp8 = typeError;
        throw typeError;
      }
    }
    tmp9 = closure_2_64(obj1, "Second parameter");
    if (undefined !== tmp2) {
      if (typeof tmp2 !== "object") {
        if (typeof tmp2 !== "function") {
          tmp106 = globalThis;
          _TypeError9 = TypeError;
          _HermesInternal11 = HermesInternal;
          str27 = " is not an object.";
          str28 = "First parameter";
          str29 = "";
          tmp107 = new.target;
          tmp108 = new.target;
          typeError1 = new TypeError("" + "First parameter" + " is not an object.");
          tmp110 = typeError1;
          throw typeError1;
        }
      }
    }
    prop = undefined;
    if (null != tmp2) {
      prop = tmp2.autoAllocateChunkSize;
    }
    cancel = undefined;
    if (null != tmp2) {
      cancel = tmp2.cancel;
    }
    pull = undefined;
    if (null != tmp2) {
      pull = tmp2.pull;
    }
    start = undefined;
    if (null != tmp2) {
      start = tmp2.start;
    }
    type = undefined;
    if (null != tmp2) {
      type = tmp2.type;
    }
    tmp15 = undefined;
    if (undefined !== prop) {
      tmp111 = globalThis;
      _HermesInternal12 = HermesInternal;
      str30 = " has member 'autoAllocateChunkSize' that";
      str31 = "First parameter";
      str32 = "";
      combined = "" + "First parameter" + " has member 'autoAllocateChunkSize' that";
      _Number = Number;
      MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
      _Number2 = Number;
      NumberResult = Number(prop);
      num = 0;
      if (0 !== NumberResult) {
        num = NumberResult;
      }
      tmp16 = closure_2_24;
      if (closure_2_24(num)) {
        tmp21 = closure_2_25;
        tmp22 = closure_2_25(num);
        num2 = 0;
        if (0 !== tmp22) {
          num2 = tmp22;
        }
        if (num2 >= 0) {
          if (num2 <= MAX_SAFE_INTEGER) {
            num3 = 0;
            if (tmp16(num2)) {
              num3 = 0;
              if (0 !== num2) {
                num3 = num2;
              }
            }
            tmp15 = num3;
          }
        }
        _TypeError3 = TypeError;
        _HermesInternal3 = HermesInternal;
        str5 = ", inclusive";
        str6 = " is outside the accepted range of 0 to ";
        str7 = "";
        tmp23 = combined;
        tmp24 = MAX_SAFE_INTEGER;
        tmp25 = new.target;
        tmp26 = new.target;
        typeError2 = new TypeError("" + combined + " is outside the accepted range of 0 to " + MAX_SAFE_INTEGER + ", inclusive");
        tmp28 = typeError2;
        throw typeError2;
      } else {
        _TypeError2 = TypeError;
        _HermesInternal2 = HermesInternal;
        str4 = " is not a finite number";
        tmp17 = new.target;
        tmp18 = new.target;
        typeError3 = new TypeError("" + combined + " is not a finite number");
        tmp20 = typeError3;
        throw typeError3;
      }
    }
    obj4 = { autoAllocateChunkSize: tmp15, cancel: null, pull: null, start: null, type: null };
    fn = undefined;
    if (undefined !== cancel) {
      tmp29 = globalThis;
      _HermesInternal4 = HermesInternal;
      str8 = " has member 'cancel' that";
      str9 = "First parameter";
      str10 = "";
      TypeError = cancel;
      closure_1 = tmp2;
      if (typeof cancel !== "function") {
        _TypeError4 = TypeError;
        _HermesInternal5 = HermesInternal;
        str11 = " is not a function.";
        tmp31 = new.target;
        tmp32 = new.target;
        typeError4 = new TypeError("" + tmp30 + " is not a function.");
        tmp34 = typeError4;
        throw typeError4;
      } else {
        fn = (arg0) => {
          items = [arg0];
          return g(obj3, obj8, items);
        };
      }
    }
    obj4.cancel = fn;
    fn2 = undefined;
    if (undefined !== pull) {
      tmp35 = globalThis;
      _HermesInternal6 = HermesInternal;
      str12 = " has member 'pull' that";
      str13 = "First parameter";
      str14 = "";
      TypeError = pull;
      closure_1 = tmp2;
      if (typeof pull !== "function") {
        _TypeError5 = TypeError;
        _HermesInternal7 = HermesInternal;
        str15 = " is not a function.";
        tmp37 = new.target;
        tmp38 = new.target;
        typeError5 = new TypeError("" + tmp36 + " is not a function.");
        tmp40 = typeError5;
        throw typeError5;
      } else {
        fn2 = (arg0) => {
          items = [arg0];
          return g(obj3, obj8, items);
        };
      }
    }
    obj4.pull = fn2;
    fn3 = undefined;
    if (undefined !== start) {
      tmp41 = globalThis;
      _HermesInternal8 = HermesInternal;
      str16 = " has member 'start' that";
      str17 = "First parameter";
      str18 = "";
      TypeError = start;
      closure_1 = tmp2;
      if (typeof start !== "function") {
        _TypeError6 = TypeError;
        _HermesInternal9 = HermesInternal;
        str19 = " is not a function.";
        tmp43 = new.target;
        tmp44 = new.target;
        typeError6 = new TypeError("" + tmp42 + " is not a function.");
        tmp46 = typeError6;
        throw typeError6;
      } else {
        fn3 = (arg0) => {
          items = [arg0];
          if (typeof obj3 !== "function") {
            const _TypeError = TypeError;
            const typeError = new TypeError("Argument is not a function");
            throw typeError;
          } else {
            const _Function = Function;
            const call = apply.call;
            return typeof call === "unknown" ? apply(obj8, items) : call(obj3, obj8, items);
          }
        };
      }
    }
    obj4.start = fn3;
    tmp47 = undefined;
    if (undefined !== type) {
      tmp114 = globalThis;
      _HermesInternal13 = HermesInternal;
      str33 = " has member 'type' that";
      str34 = "First parameter";
      str35 = "";
      combined1 = "" + "First parameter" + " has member 'type' that";
      _HermesInternal14 = HermesInternal;
      combined2 = "" + type;
      str36 = "bytes";
      tmp47 = combined2;
      if ("bytes" != combined2) {
        _TypeError7 = TypeError;
        _HermesInternal10 = HermesInternal;
        str20 = "' is not a valid enumeration value for ReadableStreamType";
        str21 = " '";
        str22 = "";
        tmp48 = combined1;
        tmp49 = combined2;
        tmp50 = new.target;
        tmp51 = new.target;
        typeError7 = new TypeError("" + combined1 + " '" + combined2 + "' is not a valid enumeration value for ReadableStreamType");
        tmp53 = typeError7;
        throw typeError7;
      }
    }
    obj4.type = tmp47;
    self._state = "readable";
    self._reader = undefined;
    self._storedError = undefined;
    self._disturbed = false;
    if ("bytes" === obj4.type) {
      if (undefined !== tmp9.size) {
        tmp101 = globalThis;
        _RangeError3 = RangeError;
        tmp102 = new.target;
        str26 = "The strategy for a byte stream cannot have a size function";
        tmp103 = new.target;
        rangeError = new RangeError("The strategy for a byte stream cannot have a size function");
        tmp105 = rangeError;
        throw rangeError;
      } else {
        highWaterMark2 = tmp9.highWaterMark;
        num6 = 0;
        if (undefined !== highWaterMark2) {
          tmp76 = closure_2_41;
          if (!closure_2_41(highWaterMark2)) {
            num6 = highWaterMark2;
          }
          tmp77 = globalThis;
          _RangeError2 = RangeError;
          tmp78 = new.target;
          str24 = "Invalid highWaterMark";
          tmp79 = new.target;
          rangeError1 = new RangeError("Invalid highWaterMark");
          tmp81 = rangeError1;
          throw rangeError1;
        }
        TypeError = obj4;
        tmp82 = globalThis;
        _Object2 = Object;
        tmp83 = closure_2_45;
        obj5 = Object.create(closure_2_45.prototype);
        closure_1 = obj5;
        tmp85 = undefined !== obj4.start ? (() => obj3.start(obj8)) : (() => {

        });
        tmp86 = undefined !== obj4.pull ? (() => obj3.pull(obj8)) : (() => new Promise((fn) => fn(c0)));
        tmp87 = undefined !== obj4.cancel ? ((arg0) => obj3.cancel(arg0)) : (() => new Promise((fn) => fn(c0)));
        autoAllocateChunkSize = obj4.autoAllocateChunkSize;
        if (0 === autoAllocateChunkSize) {
          _TypeError8 = TypeError;
          tmp97 = new.target;
          str25 = "autoAllocateChunkSize must be greater than 0";
          tmp98 = new.target;
          typeError8 = new TypeError("autoAllocateChunkSize must be greater than 0");
          tmp100 = typeError8;
          throw typeError8;
        } else {
          tmp88 = closure_2_58;
          num7 = 0;
          tmp89 = self;
          tmp90 = obj5;
          tmp91 = tmp85;
          tmp92 = tmp86;
          tmp93 = tmp87;
          tmp94 = num6;
          tmp95 = autoAllocateChunkSize;
          tmp96 = closure_2_58(self, obj5, tmp85, tmp86, tmp87, num6, autoAllocateChunkSize);
        }
      }
    } else {
      tmp54 = tmp9.size || (() => 1);
      highWaterMark = tmp9.highWaterMark;
      num4 = 1;
      if (undefined !== highWaterMark) {
        tmp55 = closure_2_41;
        if (!closure_2_41(highWaterMark)) {
          num4 = highWaterMark;
        }
        tmp56 = globalThis;
        _RangeError = RangeError;
        tmp57 = new.target;
        str23 = "Invalid highWaterMark";
        tmp58 = new.target;
        rangeError2 = new RangeError("Invalid highWaterMark");
        tmp60 = rangeError2;
        throw rangeError2;
      }
      TypeError = obj4;
      tmp61 = globalThis;
      _Object = Object;
      tmp62 = closure_2_85;
      obj6 = Object.create(closure_2_85.prototype);
      closure_1 = obj6;
      tmp64 = undefined !== obj4.start ? (() => obj3.start(obj8)) : (() => {

      });
      tmp65 = undefined !== obj4.pull ? (() => obj3.pull(obj8)) : (() => new Promise((fn) => fn(c0)));
      tmp66 = undefined !== obj4.cancel ? ((arg0) => obj3.cancel(arg0)) : (() => new Promise((fn) => fn(c0)));
      tmp67 = closure_2_91;
      num5 = 0;
      tmp68 = self;
      tmp69 = obj6;
      tmp70 = tmp64;
      tmp71 = tmp65;
      tmp72 = tmp66;
      tmp73 = num4;
      tmp74 = tmp54;
      tmp75 = closure_2_91(self, obj6, tmp64, tmp65, tmp66, num4, tmp54);
    }
    return;
  }
}
_classCallCheck = ReadableStream;
const items10 = [
  {
    key: "locked",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult8;
        }
        if (tmp2) {
          return undefined !== self._reader;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ReadableStream.prototype." + "locked" + " can only be used on a ReadableStream");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_readableStreamController");
        }
      }
    }
  },
  {
    key: "cancel",
    value: function cancel() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult8;
        }
        if (tmp3) {
          if (undefined !== self._reader) {
            const _TypeError2 = TypeError;
            const typeError = new TypeError("Cannot cancel a stream that already has a reader");
            let tmp15 = closure_5(typeError);
          } else {
            tmp15 = Or(self, tmp);
          }
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStream.prototype." + "cancel" + " can only be used on a ReadableStream");
          return closure_5(typeError1);
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_readableStreamController");
        }
      }
      tmp = typeError;
    }
  },
  {
    key: "getReader",
    value: function getReader() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult8;
        }
        if (tmp3) {
          if (undefined !== tmp) {
            if (typeof tmp !== "object") {
              if (typeof tmp !== "function") {
                const _TypeError3 = TypeError;
                const _HermesInternal3 = HermesInternal;
                const typeError = new TypeError("" + "First parameter" + " is not an object.");
                throw typeError;
              }
            }
          }
          let mode;
          if (null != tmp) {
            mode = tmp.mode;
          }
          let tmp15;
          if (undefined !== mode) {
            const _HermesInternal4 = HermesInternal;
            const combined = "" + "First parameter" + " has member 'mode' that";
            const _HermesInternal5 = HermesInternal;
            const combined1 = "" + mode;
            tmp15 = combined1;
            if ("byob" != combined1) {
              const _TypeError2 = TypeError;
              const _HermesInternal2 = HermesInternal;
              const typeError1 = new TypeError("" + combined + " '" + combined1 + "' is not a valid enumeration value for ReadableStreamReaderMode");
              throw typeError1;
            }
          }
          if (undefined === tmp15) {
            let tmp26 = new c29(self);
          } else {
            tmp26 = new _moduleResult3(self);
          }
          return tmp26;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError2 = new TypeError("ReadableStream.prototype." + "getReader" + " can only be used on a ReadableStream");
          throw typeError2;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_readableStreamController");
        }
      }
    }
  },
  {
    key: "pipeThrough",
    value: function pipeThrough(decompressionStream) {
      let obj = preventAbort;
      if (preventAbort === undefined) {
        obj = {};
      }
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult8;
        }
        if (tmp2) {
          if (undefined === decompressionStream) {
            const _TypeError9 = TypeError;
            const _HermesInternal7 = HermesInternal;
            let typeError = new TypeError("Parameter " + 1 + " is required in '" + "pipeThrough" + "'.");
            throw typeError;
          } else {
            if (undefined !== decompressionStream) {
              if (typeof decompressionStream !== "object") {
                if (typeof decompressionStream !== "function") {
                  const _TypeError8 = TypeError;
                  const _HermesInternal6 = HermesInternal;
                  const typeError1 = new TypeError("" + "First parameter" + " is not an object.");
                  throw typeError1;
                }
              }
            }
            let readable;
            if (null != decompressionStream) {
              readable = decompressionStream.readable;
            }
            if (undefined === readable) {
              const _TypeError7 = TypeError;
              const _HermesInternal5 = HermesInternal;
              const typeError2 = new TypeError("" + "readable" + " is required in '" + "ReadableWritablePair" + "'.");
              throw typeError2;
            } else {
              const _HermesInternal8 = HermesInternal;
              let tmp15 = typeof readable === "object";
              const combined = "" + "First parameter" + " has member 'readable' that";
              if (typeof readable === "object") {
                tmp15 = null !== readable;
              }
              if (!tmp15) {
                tmp15 = typeof readable === "function";
              }
              let tmp16 = tmp15;
              if (!tmp16) {
                if (tmp16) {
                  tmp16 = readable instanceof _moduleResult8;
                }
                if (tmp16) {
                  let writable;
                  if (null != decompressionStream) {
                    writable = decompressionStream.writable;
                  }
                  if (undefined === writable) {
                    const _TypeError6 = TypeError;
                    const _HermesInternal4 = HermesInternal;
                    const typeError3 = new TypeError("" + "writable" + " is required in '" + "ReadableWritablePair" + "'.");
                    throw typeError3;
                  } else {
                    const _HermesInternal9 = HermesInternal;
                    let tmp25 = typeof writable === "object";
                    const combined1 = "" + "First parameter" + " has member 'writable' that";
                    if (typeof writable === "object") {
                      tmp25 = null !== writable;
                    }
                    if (!tmp25) {
                      tmp25 = typeof writable === "function";
                    }
                    let tmp26 = tmp25;
                    if (!tmp26) {
                      if (tmp26) {
                        tmp26 = writable instanceof _moduleResult4;
                      }
                      if (tmp26) {
                        if (undefined !== self._reader) {
                          const _TypeError5 = TypeError;
                          const typeError4 = new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
                          throw typeError4;
                        } else if (undefined !== writable._writer) {
                          const _TypeError4 = TypeError;
                          const typeError5 = new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
                          throw typeError5;
                        } else {
                          ({ preventClose: fn, preventAbort: Promise, preventCancel: then, signal: closure_5 } = tmp35);
                          const tmp72 = new c29(self);
                          const tmp78 = new _moduleResult5(writable);
                          self._disturbed = true;
                          c8 = false;
                          c0 = undefined;
                          const tmp83 = new Promise((fn) => fn(c0));
                          closure_9 = tmp83;
                          const tmp87 = new Promise((arg0, arg1) => {
                            _undefined = arg0;
                            writable = arg1;
                            fn = function q(fn, arg1, _storedError) {
                              closure_0 = fn;
                              closure_1 = arg1;
                              closure_2 = _storedError;
                              if (!c8) {
                                c8 = true;
                                if ("writable" === closure_1._state) {
                                  if (!tmp2) {
                                    closure_129_0 = closure_1_9;
                                    fn = () => {
                                      if (closure_1_0 !== closure_3_9) {
                                        closure_0 = closure_1_9;
                                        let fn = () => {
                                          if (closure_1_0 !== closure_3_9) {
                                            closure_0 = closure_1_9;
                                            let fn = /* F142343 */ function() { ... };
                                            let call = closure_2_4.call;
                                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                          }
                                        };
                                        let call = closure_2_4.call;
                                        typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                      }
                                    };
                                    let call = then.call;
                                    let fn2 = function n() {
                                      fn = () => {
                                        closure_2_75(closure_1_7);
                                        closure_2_22(closure_1_6);
                                        if (undefined !== closure_1_5) {
                                          const removed = closure_1_5.removeEventListener("abort", closure_2);
                                        }
                                        if (closure_1_1) {
                                          closure_1(_storedError);
                                        } else {
                                          closure_0(undefined);
                                        }
                                        return null;
                                      };
                                      const fn2 = (arg0) => {
                                        closure_3_75(_readyPromise);
                                        closure_3_22(closure_2_6);
                                        if (undefined !== closure_2_5) {
                                          const removed = closure_2_5.removeEventListener("abort", _storedError);
                                        }
                                        closure_1_1(arg0);
                                        return null;
                                      };
                                      const call = then.call;
                                      const tmp = closure_0();
                                      const call2 = then.call;
                                      if (typeof call2 === "unknown") {
                                        then(undefined, tmp4);
                                      } else {
                                        call2(tmp3, undefined, tmp4);
                                      }
                                      return null;
                                    };
                                    let call2 = then.call;
                                    const tmp5 = typeof call === "unknown" ? then(fn, undefined) : call(closure_1_9, fn, undefined);
                                    const call3 = then.call;
                                    if (typeof call3 === "unknown") {
                                      then(undefined, closure_2_2);
                                    } else {
                                      call3(tmp7, undefined, closure_2_2);
                                    }
                                    tmp7 = typeof call2 === "unknown" ? then(fn2, undefined) : call2(typeof call === "unknown" ? then(fn, undefined) : call(closure_1_9, fn, undefined), fn2, undefined);
                                  }
                                  tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
                                }
                                const fn3 = () => {
                                  closure_2_75(closure_1_7);
                                  closure_2_22(closure_1_6);
                                  if (undefined !== closure_1_5) {
                                    const removed = closure_1_5.removeEventListener("abort", closure_2);
                                  }
                                  if (closure_1_1) {
                                    closure_1(_storedError);
                                  } else {
                                    closure_0(undefined);
                                  }
                                  return null;
                                };
                                fn4 = (arg0) => {
                                  closure_3_75(_readyPromise);
                                  closure_3_22(closure_2_6);
                                  if (undefined !== closure_2_5) {
                                    const removed = closure_2_5.removeEventListener("abort", _storedError);
                                  }
                                  closure_1_1(arg0);
                                  return null;
                                };
                                const call4 = then.call;
                                const tmp11 = fn();
                                const call5 = then.call;
                                if (typeof call5 === "unknown") {
                                  then(undefined, closure_2_2);
                                } else {
                                  call5(tmp13, undefined, closure_2_2);
                                }
                                tmp13 = typeof call4 === "unknown" ? then(fn3, fn4) : call4(fn(), fn3, fn4);
                              }
                            };
                            class E {
                              constructor(arg0, arg1) {
                                closure_0 = arg0;
                                closure_1 = arg1;
                                if (!c8) {
                                  flag = true;
                                  c8 = true;
                                  tmp = closure_1;
                                  str = "writable";
                                  if ("writable" === closure_1._state) {
                                    tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
                                    if (!tmp2) {
                                      tmp3 = closure_1_9;
                                      closure_129_0 = closure_1_9;
                                      fn = () => {
                                        if (closure_1_0 !== closure_3_9) {
                                          closure_0 = closure_1_9;
                                          let fn = () => {
                                            if (closure_1_0 !== closure_3_9) {
                                              closure_0 = closure_1_9;
                                              let fn = () => {
                                                if (closure_1_0 !== closure_3_9) {
                                                  closure_0 = closure_1_9;
                                                  let fn = /* F142343 */ function() { ... };
                                                  let call = closure_2_4.call;
                                                  typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                                }
                                              };
                                              let call = closure_2_4.call;
                                              typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                            }
                                          };
                                          let call = closure_2_4.call;
                                          typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                        }
                                      };
                                      tmp4 = preventCancel;
                                      call = preventCancel.call;
                                      tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                                      fn2 = () => {
                                        closure_2_75(_readyPromise);
                                        closure_2_22(closure_1_6);
                                        if (undefined !== closure_1_5) {
                                          const removed = closure_1_5.removeEventListener("abort", no);
                                        }
                                        if (closure_0) {
                                          closure_1(closure_1);
                                        } else {
                                          closure_0(undefined);
                                        }
                                        return null;
                                      };
                                      call2 = tmp4.call;
                                      tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                                      tmp7 = preventClose;
                                      call3 = tmp4.call;
                                      if (typeof call3 === "unknown") {
                                        tmp4Result = tmp4(undefined, tmp7);
                                      } else {
                                        call3Result = call3(tmp6, undefined, tmp7);
                                      }
                                    }
                                  }
                                  tmp9 = closure_2_75;
                                  tmp10 = closure_1_7;
                                  num = 0;
                                  tmp11 = closure_2_75(closure_1_7);
                                  tmp12 = closure_2_22;
                                  tmp13 = closure_1_6;
                                  tmp14 = closure_2_22(closure_1_6);
                                  obj = E;
                                  if (undefined !== E) {
                                    tmp15 = no;
                                    str2 = "abort";
                                    removed = obj.removeEventListener("abort", no);
                                  }
                                  if (arg0) {
                                    tmp19 = closure_1;
                                    tmp20 = closure_1(arg1);
                                  } else {
                                    tmp17 = closure_0;
                                    tmp18 = closure_0(undefined);
                                  }
                                }
                                return;
                              }
                            }
                            if (undefined !== E) {
                              function no() {
                                if (undefined !== closure_2_5.reason) {
                                  let reason = closure_2_5.reason;
                                } else {
                                  reason = new closure_83("Aborted", "AbortError");
                                }
                                items = [];
                                if (!Promise) {
                                  items.push(() => {
                                    if ("writable" === items._state) {
                                      let tmp5 = wt(tmp, reason);
                                    } else {
                                      tmp5 = new Promise((fn) => fn(c0));
                                    }
                                    return tmp5;
                                  });
                                }
                                if (!then) {
                                  items.push(() => {
                                    if ("readable" === _state._state) {
                                      let tmp5 = Or(tmp, reason);
                                    } else {
                                      tmp5 = new Promise((fn) => fn(c0));
                                    }
                                    return tmp5;
                                  });
                                }
                                fn(() => Promise.all(items.map((fn) => fn())), true, reason);
                              }
                              if (E.aborted) {
                                if (undefined !== E.reason) {
                                  let reason = E.reason;
                                } else {
                                  reason = new closure_1_83("Aborted", "AbortError");
                                }
                                closure_131_0 = reason;
                                items = [];
                                closure_131_1 = items;
                                if (!typeError) {
                                  items.push(() => {
                                    if ("writable" === items._state) {
                                      let tmp5 = wt(tmp, reason);
                                    } else {
                                      tmp5 = new Promise((fn) => fn(c0));
                                    }
                                    return tmp5;
                                  });
                                }
                                class E {
                                  constructor(arg0, arg1) {
                                    closure_0 = arg0;
                                    closure_1 = arg1;
                                    if (!c8) {
                                      flag = true;
                                      c8 = true;
                                      tmp = closure_1;
                                      str = "writable";
                                      if ("writable" === closure_1._state) {
                                        tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
                                        if (!tmp2) {
                                          tmp3 = closure_1_9;
                                          closure_129_0 = closure_1_9;
                                          fn = () => {
                                            if (closure_1_0 !== closure_3_9) {
                                              closure_0 = closure_1_9;
                                              let fn = () => {
                                                if (closure_1_0 !== closure_3_9) {
                                                  closure_0 = closure_1_9;
                                                  let fn = () => {
                                                    if (closure_1_0 !== closure_3_9) {
                                                      closure_0 = closure_1_9;
                                                      let fn = /* F142343 */ function() { ... };
                                                      let call = closure_2_4.call;
                                                      typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                                    }
                                                  };
                                                  let call = closure_2_4.call;
                                                  typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                                }
                                              };
                                              let call = closure_2_4.call;
                                              typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                            }
                                          };
                                          tmp4 = preventCancel;
                                          call = preventCancel.call;
                                          tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                                          fn2 = () => {
                                            closure_2_75(_readyPromise);
                                            closure_2_22(closure_1_6);
                                            if (undefined !== closure_1_5) {
                                              const removed = closure_1_5.removeEventListener("abort", no);
                                            }
                                            if (closure_0) {
                                              closure_1(closure_1);
                                            } else {
                                              closure_0(undefined);
                                            }
                                            return null;
                                          };
                                          call2 = tmp4.call;
                                          tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                                          tmp7 = preventClose;
                                          call3 = tmp4.call;
                                          if (typeof call3 === "unknown") {
                                            tmp4Result = tmp4(undefined, tmp7);
                                          } else {
                                            call3Result = call3(tmp6, undefined, tmp7);
                                          }
                                        }
                                      }
                                      tmp9 = closure_2_75;
                                      tmp10 = closure_1_7;
                                      num = 0;
                                      tmp11 = closure_2_75(closure_1_7);
                                      tmp12 = closure_2_22;
                                      tmp13 = closure_1_6;
                                      tmp14 = closure_2_22(closure_1_6);
                                      obj = E;
                                      if (undefined !== E) {
                                        tmp15 = no;
                                        str2 = "abort";
                                        removed = obj.removeEventListener("abort", no);
                                      }
                                      if (arg0) {
                                        tmp19 = closure_1;
                                        tmp20 = closure_1(arg1);
                                      } else {
                                        tmp17 = closure_0;
                                        tmp18 = closure_0(undefined);
                                      }
                                    }
                                    return;
                                  }
                                }
                                if (!fn) {
                                  items.push(() => {
                                    if ("readable" === _state._state) {
                                      let tmp5 = Or(tmp, reason);
                                    } else {
                                      tmp5 = new Promise((fn) => fn(c0));
                                    }
                                    return tmp5;
                                  });
                                }
                                fn(() => Promise.all(items.map((fn) => fn())), true, reason);
                              } else {
                                const listener = E.addEventListener("abort", no);
                              }
                            }
                            if ("errored" === _undefined._state) {
                              const _storedError = tmp2._storedError;
                              closure_129_0 = _storedError;
                              if (typeError) {
                                E(true, _storedError);
                              } else {
                                fn(() => wt(closure_1, closure_0), true, _storedError);
                              }
                            } else {
                              let fn2 = (f) => {
                                closure_0 = f;
                                if (Promise) {
                                  E(true, f);
                                } else {
                                  fn(() => wt(closure_1, closure_0), true, f);
                                }
                                return null;
                              };
                              let call = then.call;
                              class E {
                                constructor(arg0, arg1) {
                                  closure_0 = arg0;
                                  closure_1 = arg1;
                                  if (!c8) {
                                    flag = true;
                                    c8 = true;
                                    tmp = closure_1;
                                    str = "writable";
                                    if ("writable" === closure_1._state) {
                                      tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
                                      if (!tmp2) {
                                        tmp3 = closure_1_9;
                                        closure_129_0 = closure_1_9;
                                        fn = () => {
                                          if (closure_1_0 !== closure_3_9) {
                                            closure_0 = closure_1_9;
                                            let fn = () => {
                                              if (closure_1_0 !== closure_3_9) {
                                                closure_0 = closure_1_9;
                                                let fn = () => {
                                                  if (closure_1_0 !== closure_3_9) {
                                                    closure_0 = closure_1_9;
                                                    let fn = /* F142343 */ function() { ... };
                                                    let call = closure_2_4.call;
                                                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                                  }
                                                };
                                                let call = closure_2_4.call;
                                                typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                              }
                                            };
                                            let call = closure_2_4.call;
                                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                          }
                                        };
                                        tmp4 = preventCancel;
                                        call = preventCancel.call;
                                        tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                                        fn2 = () => {
                                          closure_2_75(_readyPromise);
                                          closure_2_22(closure_1_6);
                                          if (undefined !== closure_1_5) {
                                            const removed = closure_1_5.removeEventListener("abort", no);
                                          }
                                          if (closure_0) {
                                            closure_1(closure_1);
                                          } else {
                                            closure_0(undefined);
                                          }
                                          return null;
                                        };
                                        call2 = tmp4.call;
                                        tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                                        tmp7 = preventClose;
                                        call3 = tmp4.call;
                                        if (typeof call3 === "unknown") {
                                          tmp4Result = tmp4(undefined, tmp7);
                                        } else {
                                          call3Result = call3(tmp6, undefined, tmp7);
                                        }
                                      }
                                    }
                                    tmp9 = closure_2_75;
                                    tmp10 = closure_1_7;
                                    num = 0;
                                    tmp11 = closure_2_75(closure_1_7);
                                    tmp12 = closure_2_22;
                                    tmp13 = closure_1_6;
                                    tmp14 = closure_2_22(closure_1_6);
                                    obj = E;
                                    if (undefined !== E) {
                                      tmp15 = no;
                                      str2 = "abort";
                                      removed = obj.removeEventListener("abort", no);
                                    }
                                    if (arg0) {
                                      tmp19 = closure_1;
                                      tmp20 = closure_1(arg1);
                                    } else {
                                      tmp17 = closure_0;
                                      tmp18 = closure_0(undefined);
                                    }
                                  }
                                  return;
                                }
                              }
                              if (typeof tmp8 === "unknown") {
                                then(undefined, closure_1_2);
                              } else {
                                tmp8(tmp5, undefined, closure_1_2);
                              }
                              tmp5 = typeof call === "unknown" ? then(undefined, fn2) : call(_closedPromise, undefined, fn2);
                            }
                            if ("errored" === writable._state) {
                              const _storedError2 = tmp13._storedError;
                              closure_130_0 = _storedError2;
                              if (fn) {
                                E(true, _storedError2);
                              } else {
                                fn(() => Or(closure_0, closure_0), true, _storedError2);
                              }
                            } else {
                              let fn3 = (f) => {
                                closure_0 = f;
                                if (then) {
                                  E(true, f);
                                } else {
                                  fn(() => Or(closure_0, closure_0), true, f);
                                }
                                return null;
                              };
                              let call2 = then.call;
                              class E {
                                constructor(arg0, arg1) {
                                  closure_0 = arg0;
                                  closure_1 = arg1;
                                  if (!c8) {
                                    flag = true;
                                    c8 = true;
                                    tmp = closure_1;
                                    str = "writable";
                                    if ("writable" === closure_1._state) {
                                      tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
                                      if (!tmp2) {
                                        tmp3 = closure_1_9;
                                        closure_129_0 = closure_1_9;
                                        fn = () => {
                                          if (closure_1_0 !== closure_3_9) {
                                            closure_0 = closure_1_9;
                                            let fn = () => {
                                              if (closure_1_0 !== closure_3_9) {
                                                closure_0 = closure_1_9;
                                                let fn = () => {
                                                  if (closure_1_0 !== closure_3_9) {
                                                    closure_0 = closure_1_9;
                                                    let fn = /* F142343 */ function() { ... };
                                                    let call = closure_2_4.call;
                                                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                                  }
                                                };
                                                let call = closure_2_4.call;
                                                typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                              }
                                            };
                                            let call = closure_2_4.call;
                                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                          }
                                        };
                                        tmp4 = preventCancel;
                                        call = preventCancel.call;
                                        tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                                        fn2 = () => {
                                          closure_2_75(_readyPromise);
                                          closure_2_22(closure_1_6);
                                          if (undefined !== closure_1_5) {
                                            const removed = closure_1_5.removeEventListener("abort", no);
                                          }
                                          if (closure_0) {
                                            closure_1(closure_1);
                                          } else {
                                            closure_0(undefined);
                                          }
                                          return null;
                                        };
                                        call2 = tmp4.call;
                                        tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                                        tmp7 = preventClose;
                                        call3 = tmp4.call;
                                        if (typeof call3 === "unknown") {
                                          tmp4Result = tmp4(undefined, tmp7);
                                        } else {
                                          call3Result = call3(tmp6, undefined, tmp7);
                                        }
                                      }
                                    }
                                    tmp9 = closure_2_75;
                                    tmp10 = closure_1_7;
                                    num = 0;
                                    tmp11 = closure_2_75(closure_1_7);
                                    tmp12 = closure_2_22;
                                    tmp13 = closure_1_6;
                                    tmp14 = closure_2_22(closure_1_6);
                                    obj = E;
                                    if (undefined !== E) {
                                      tmp15 = no;
                                      str2 = "abort";
                                      removed = obj.removeEventListener("abort", no);
                                    }
                                    if (arg0) {
                                      tmp19 = closure_1;
                                      tmp20 = closure_1(arg1);
                                    } else {
                                      tmp17 = closure_0;
                                      tmp18 = closure_0(undefined);
                                    }
                                  }
                                  return;
                                }
                              }
                              if (typeof tmp18 === "unknown") {
                                then(undefined, closure_1_2);
                              } else {
                                tmp18(tmp15, undefined, closure_1_2);
                              }
                              tmp15 = typeof call2 === "unknown" ? then(undefined, fn3) : call2(_closedPromise2, undefined, fn3);
                            }
                            if ("closed" === _undefined._state) {
                              if (no) {
                                E();
                              } else {
                                fn(() => {
                                  _ownerWritableStream = _ownerWritableStream._ownerWritableStream;
                                  const _state = _ownerWritableStream._state;
                                  let tmp2 = undefined !== _ownerWritableStream._closeRequest;
                                  if (!tmp2) {
                                    tmp2 = undefined !== _ownerWritableStream._inFlightCloseRequest;
                                  }
                                  if (!tmp2) {
                                    if ("closed" !== _state) {
                                      if ("errored" === _state) {
                                        let tmp4 = closure_5(_ownerWritableStream._storedError);
                                      } else {
                                        tmp4 = closure_2_69(tmp._ownerWritableStream);
                                      }
                                    }
                                    return tmp4;
                                  }
                                  tmp4 = new typeError((fn) => fn(c0));
                                  tmp = _ownerWritableStream;
                                });
                              }
                            } else {
                              function lo() {
                                if (closure_2_2) {
                                  E();
                                } else {
                                  fn(() => {
                                    _ownerWritableStream = _ownerWritableStream._ownerWritableStream;
                                    const _state = _ownerWritableStream._state;
                                    let tmp2 = undefined !== _ownerWritableStream._closeRequest;
                                    if (!tmp2) {
                                      tmp2 = undefined !== _ownerWritableStream._inFlightCloseRequest;
                                    }
                                    if (!tmp2) {
                                      if ("closed" !== _state) {
                                        if ("errored" === _state) {
                                          let tmp4 = closure_5(_ownerWritableStream._storedError);
                                        } else {
                                          tmp4 = closure_2_69(tmp._ownerWritableStream);
                                        }
                                      }
                                      return tmp4;
                                    }
                                    tmp4 = new typeError((fn) => fn(c0));
                                    tmp = _ownerWritableStream;
                                  });
                                }
                                return null;
                              }
                              let call3 = then.call;
                              class E {
                                constructor(arg0, arg1) {
                                  closure_0 = arg0;
                                  closure_1 = arg1;
                                  if (!c8) {
                                    flag = true;
                                    c8 = true;
                                    tmp = closure_1;
                                    str = "writable";
                                    if ("writable" === closure_1._state) {
                                      tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
                                      if (!tmp2) {
                                        tmp3 = closure_1_9;
                                        closure_129_0 = closure_1_9;
                                        fn = () => {
                                          if (closure_1_0 !== closure_3_9) {
                                            closure_0 = closure_1_9;
                                            let fn = () => {
                                              if (closure_1_0 !== closure_3_9) {
                                                closure_0 = closure_1_9;
                                                let fn = () => {
                                                  if (closure_1_0 !== closure_3_9) {
                                                    closure_0 = closure_1_9;
                                                    let fn = /* F142343 */ function() { ... };
                                                    let call = closure_2_4.call;
                                                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                                  }
                                                };
                                                let call = closure_2_4.call;
                                                typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                              }
                                            };
                                            let call = closure_2_4.call;
                                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                          }
                                        };
                                        tmp4 = preventCancel;
                                        call = preventCancel.call;
                                        tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                                        fn2 = () => {
                                          closure_2_75(_readyPromise);
                                          closure_2_22(closure_1_6);
                                          if (undefined !== closure_1_5) {
                                            const removed = closure_1_5.removeEventListener("abort", no);
                                          }
                                          if (closure_0) {
                                            closure_1(closure_1);
                                          } else {
                                            closure_0(undefined);
                                          }
                                          return null;
                                        };
                                        call2 = tmp4.call;
                                        tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                                        tmp7 = preventClose;
                                        call3 = tmp4.call;
                                        if (typeof call3 === "unknown") {
                                          tmp4Result = tmp4(undefined, tmp7);
                                        } else {
                                          call3Result = call3(tmp6, undefined, tmp7);
                                        }
                                      }
                                    }
                                    tmp9 = closure_2_75;
                                    tmp10 = closure_1_7;
                                    num = 0;
                                    tmp11 = closure_2_75(closure_1_7);
                                    tmp12 = closure_2_22;
                                    tmp13 = closure_1_6;
                                    tmp14 = closure_2_22(closure_1_6);
                                    obj = E;
                                    if (undefined !== E) {
                                      tmp15 = no;
                                      str2 = "abort";
                                      removed = obj.removeEventListener("abort", no);
                                    }
                                    if (arg0) {
                                      tmp19 = closure_1;
                                      tmp20 = closure_1(arg1);
                                    } else {
                                      tmp17 = closure_0;
                                      tmp18 = closure_0(undefined);
                                    }
                                  }
                                  return;
                                }
                              }
                              if (typeof tmp27 === "unknown") {
                                then(undefined, closure_1_2);
                              } else {
                                tmp27(tmp24, undefined, closure_1_2);
                              }
                              tmp24 = typeof call3 === "unknown" ? then(lo, undefined) : call3(_closedPromise3, lo, undefined);
                            }
                            if (tmp32) {
                              const _TypeError = TypeError;
                              typeError = new TypeError("the destination writable stream closed before all data could be piped to it");
                              class E {
                                constructor(arg0, arg1) {
                                  closure_0 = arg0;
                                  closure_1 = arg1;
                                  if (!c8) {
                                    flag = true;
                                    c8 = true;
                                    tmp = closure_1;
                                    str = "writable";
                                    if ("writable" === closure_1._state) {
                                      tmp2 = undefined !== tmp._closeRequest || undefined !== tmp._inFlightCloseRequest;
                                      if (!tmp2) {
                                        tmp3 = closure_1_9;
                                        closure_129_0 = closure_1_9;
                                        fn = () => {
                                          if (closure_1_0 !== closure_3_9) {
                                            closure_0 = closure_1_9;
                                            let fn = () => {
                                              if (closure_1_0 !== closure_3_9) {
                                                closure_0 = closure_1_9;
                                                let fn = () => {
                                                  if (closure_1_0 !== closure_3_9) {
                                                    closure_0 = closure_1_9;
                                                    let fn = /* F142343 */ function() { ... };
                                                    let call = closure_2_4.call;
                                                    typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                                  }
                                                };
                                                let call = closure_2_4.call;
                                                typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                              }
                                            };
                                            let call = closure_2_4.call;
                                            typeof call === "unknown" ? closure_2_4(fn, undefined) : call(closure_1_9, fn, undefined);
                                          }
                                        };
                                        tmp4 = preventCancel;
                                        call = preventCancel.call;
                                        tmp5 = typeof call === "unknown" ? tmp4(fn, undefined) : call(tmp3, fn, undefined);
                                        fn2 = () => {
                                          closure_2_75(_readyPromise);
                                          closure_2_22(closure_1_6);
                                          if (undefined !== closure_1_5) {
                                            const removed = closure_1_5.removeEventListener("abort", no);
                                          }
                                          if (closure_0) {
                                            closure_1(closure_1);
                                          } else {
                                            closure_0(undefined);
                                          }
                                          return null;
                                        };
                                        call2 = tmp4.call;
                                        tmp6 = typeof call2 === "unknown" ? tmp4(fn2, undefined) : call2(tmp5, fn2, undefined);
                                        tmp7 = preventClose;
                                        call3 = tmp4.call;
                                        if (typeof call3 === "unknown") {
                                          tmp4Result = tmp4(undefined, tmp7);
                                        } else {
                                          call3Result = call3(tmp6, undefined, tmp7);
                                        }
                                      }
                                    }
                                    tmp9 = closure_2_75;
                                    tmp10 = closure_1_7;
                                    num = 0;
                                    tmp11 = closure_2_75(closure_1_7);
                                    tmp12 = closure_2_22;
                                    tmp13 = closure_1_6;
                                    tmp14 = closure_2_22(closure_1_6);
                                    obj = E;
                                    if (undefined !== E) {
                                      tmp15 = no;
                                      str2 = "abort";
                                      removed = obj.removeEventListener("abort", no);
                                    }
                                    if (arg0) {
                                      tmp19 = closure_1;
                                      tmp20 = closure_1(arg1);
                                    } else {
                                      tmp17 = closure_0;
                                      tmp18 = closure_0(undefined);
                                    }
                                  }
                                  return;
                                }
                              }
                              if (fn) {
                                E(true, typeError);
                              } else {
                                fn(() => Or(c0, typeError), true, typeError);
                              }
                            }
                            let call4 = then.call;
                            if (typeof call4 === "unknown") {
                              then(undefined, closure_1_2);
                            } else {
                              call4(tmp40, undefined, closure_1_2);
                            }
                            _closedPromise3 = _closedPromise._closedPromise._closedPromise._closedPromise;
                            tmp32 = undefined !== writable._closeRequest || undefined !== writable._inFlightCloseRequest;
                            tmp40 = new Promise((arg0, arg1) => {
                              closure_0 = arg0;
                              closure_1 = arg1;
                              fn = function o(arg0) {
                                if (arg0) {
                                  closure_0();
                                } else {
                                  if (c8) {
                                    c0 = true;
                                    let callResult = new Promise((fn) => fn(c0));
                                  } else {
                                    fn = () => new typeError(/* F143621 */ function() { ... });
                                    let call = then.call;
                                    if (typeof call === "unknown") {
                                      callResult = then(fn, undefined);
                                    } else {
                                      callResult = call(_readyPromise, fn, undefined);
                                    }
                                  }
                                  const call2 = then.call;
                                  if (typeof call2 === "unknown") {
                                    then(tmp8, closure_1);
                                  } else {
                                    call2(callResult, tmp8, closure_1);
                                  }
                                }
                              };
                              fn(false);
                            });
                          });
                          let call4 = then.call;
                          if (typeof call4 === "unknown") {
                            then(undefined, fn);
                          } else {
                            call4(tmp87, undefined, fn);
                          }
                          return readable;
                        }
                        tmp35 = Tr(obj, "Second parameter");
                      } else {
                        const _TypeError3 = TypeError;
                        const _HermesInternal3 = HermesInternal;
                        const typeError6 = new TypeError("" + combined1 + " is not a WritableStream.");
                        throw typeError6;
                      }
                    } else {
                      const _Object3 = Object;
                      let call3 = hasOwnProperty3.call;
                      if (typeof call3 === "unknown") {
                        let hasOwnProperty3Result = hasOwnProperty3("_writableStreamController");
                      } else {
                        hasOwnProperty3Result = call3(writable, "_writableStreamController");
                      }
                    }
                  }
                } else {
                  const _TypeError2 = TypeError;
                  const _HermesInternal2 = HermesInternal;
                  const typeError7 = new TypeError("" + combined + " is not a ReadableStream.");
                  throw typeError7;
                }
              } else {
                const _Object2 = Object;
                let call2 = hasOwnProperty2.call;
                if (typeof call2 === "unknown") {
                  let hasOwnProperty2Result = hasOwnProperty2("_readableStreamController");
                } else {
                  hasOwnProperty2Result = call2(readable, "_readableStreamController");
                }
              }
            }
          }
        } else {
          let _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError8 = new TypeError("ReadableStream.prototype." + "pipeThrough" + " can only be used on a ReadableStream");
          throw typeError8;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_readableStreamController");
        }
      }
    }
  },
  {
    key: "pipeTo",
    value: function pipeTo(arg0) {
      let obj = preventAbort;
      if (preventAbort === undefined) {
        obj = {};
      }
      const self = this;
      if (Er(this)) {
        if (undefined === arg0) {
          return d("Parameter 1 is required in 'pipeTo'.");
        } else if (gt(arg0)) {
          try {
            const tmp12 = Tr(obj, "Second parameter");
            if (Wr(self)) {
              const _TypeError3 = TypeError;
              const typeError = new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream");
              let tmp18 = d(typeError);
            } else if (vt(arg0)) {
              const _TypeError2 = TypeError;
              const typeError1 = new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream");
              tmp18 = d(typeError1);
            } else {
              tmp18 = ir(self, arg0, tmp12.preventClose, tmp12.preventAbort, tmp12.preventCancel, tmp12.signal);
            }
            return tmp18;
          } catch (tmp31) {
            return d(tmp31);
          }
        } else {
          const _TypeError = TypeError;
          const typeError2 = new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream");
          return d(typeError2);
        }
      } else {
        return d(kr("pipeTo"));
      }
    }
  },
  {
    key: "tee",
    value: function tee() {
      let self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult8;
        }
        if (tmp2) {
          let _readableStreamController = self._readableStreamController;
          let tmp12 = typeof _readableStreamController === "object";
          if (typeof _readableStreamController === "object") {
            tmp12 = null !== _readableStreamController;
          }
          if (!tmp12) {
            tmp12 = typeof _readableStreamController === "function";
          }
          let tmp13 = tmp12;
          if (!tmp13) {
            if (tmp13) {
              tmp13 = _readableStreamController instanceof _moduleResult2;
            }
            if (tmp13) {
              closure_129_0 = self;
              closure_129_13 = function p() {
                let flag = typeof closure_6 === "object";
                if (typeof closure_6 === "object") {
                  flag = true;
                }
                if (!flag) {
                  flag = typeof tmp === "function";
                }
                let tmp2 = flag;
                if (!tmp2) {
                  if (tmp2) {
                    tmp2 = tmp instanceof _moduleResult3;
                  }
                  if (tmp2) {
                    closure_1_22(closure_6);
                    const tmp14 = new closure_1_29(closure_0);
                    closure_6 = tmp14;
                    closure_0 = tmp14;
                    fn = (typeError) => {
                      if (closure_0 === closure_6) {
                        const _readableStreamController2 = obj5._readableStreamController;
                        const _controlledReadableByteStream2 = _readableStreamController2._controlledReadableByteStream;
                        if ("readable" === _controlledReadableByteStream2._state) {
                          if (null !== _readableStreamController2._byobRequest) {
                            _readableStreamController2._byobRequest._associatedReadableByteStreamController = undefined;
                            _readableStreamController2._byobRequest._view = null;
                            _readableStreamController2._byobRequest = null;
                          }
                          const tmp4 = new closure_15();
                          _readableStreamController2._pendingPullIntos = tmp4;
                          const tmp8 = new closure_15();
                          _readableStreamController2._queue = tmp8;
                          _readableStreamController2._queueTotalSize = 0;
                          _readableStreamController2._pullAlgorithm = undefined;
                          _readableStreamController2._cancelAlgorithm = undefined;
                          jr(_controlledReadableByteStream2, typeError);
                        }
                        const _readableStreamController = obj6._readableStreamController;
                        const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
                        if ("readable" === _controlledReadableByteStream._state) {
                          if (null !== _readableStreamController._byobRequest) {
                            _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
                            _readableStreamController._byobRequest._view = null;
                            _readableStreamController._byobRequest = null;
                          }
                          const tmp16 = new closure_15();
                          _readableStreamController._pendingPullIntos = tmp16;
                          const tmp20 = new closure_15();
                          _readableStreamController._queue = tmp20;
                          _readableStreamController._queueTotalSize = 0;
                          _readableStreamController._pullAlgorithm = undefined;
                          _readableStreamController._cancelAlgorithm = undefined;
                          jr(_controlledReadableByteStream, typeError);
                        }
                        let tmp24 = c10;
                        if (c10) {
                          tmp24 = c11;
                        }
                        if (!tmp24) {
                          closure_5(undefined);
                        }
                      }
                      return null;
                    };
                    const call2 = obj6.call;
                    if (typeof call2 === "unknown") {
                      let call2Result = obj6(undefined, fn);
                    } else {
                      call2Result = call2(_closedPromise, undefined, fn);
                    }
                    const call3 = obj6.call;
                    if (typeof call3 === "unknown") {
                      obj6(undefined, closure_2);
                    } else {
                      call3(call2Result, undefined, closure_2);
                    }
                    _closedPromise = tmp14._closedPromise;
                  }
                  const obj = {
                    _chunkSteps(arg0) {
                        closure_0 = arg0;
                        fn(() => {
                          c8 = false;
                          c9 = false;
                          let tmp2 = closure_0;
                          if (!closure_2_10) {
                            if (!closure_2_11) {
                              try {
                                tmp2 = Se(closure_0);
                              } catch (tmp5) {
                                Ne(obj5._readableStreamController, tmp5);
                                Ne(obj6._readableStreamController, tmp5);
                                closure_2_5(Or(closure_0, tmp5));
                              }
                            }
                          }
                          if (!closure_2_10) {
                            xe(obj5._readableStreamController, closure_0);
                          }
                          if (!closure_2_11) {
                            xe(obj6._readableStreamController, tmp2);
                          }
                          c7 = false;
                          if (c8) {
                            closure_2_15();
                          } else if (c9) {
                            closure_2_16();
                          }
                        });
                      },
                    _closeSteps() {
                        c7 = false;
                        if (!closure_1_10) {
                          Qe(obj5._readableStreamController);
                        }
                        if (!closure_1_11) {
                          Qe(obj6._readableStreamController);
                        }
                        if (obj5._readableStreamController._pendingPullIntos.length > 0) {
                          const _readableStreamController = obj5._readableStreamController;
                          const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                          const peekResult = _pendingPullIntos.peek();
                          if ("closed" === _readableStreamController._controlledReadableByteStream._state) {
                            peekResult.buffer = fn(peekResult.buffer);
                            $e(_readableStreamController, 0);
                          } else {
                            const _TypeError = TypeError;
                            const typeError = new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                            throw typeError;
                          }
                        }
                        if (obj6._readableStreamController._pendingPullIntos.length > 0) {
                          const _readableStreamController2 = obj6._readableStreamController;
                          const _pendingPullIntos2 = _readableStreamController2._pendingPullIntos;
                          const peekResult1 = _pendingPullIntos2.peek();
                          if ("closed" === _readableStreamController2._controlledReadableByteStream._state) {
                            peekResult1.buffer = fn(peekResult1.buffer);
                            $e(_readableStreamController2, 0);
                          } else {
                            const _TypeError2 = TypeError;
                            const typeError1 = new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                            throw typeError1;
                          }
                        }
                        let tmp25 = closure_1_10;
                        if (closure_1_10) {
                          tmp25 = closure_1_11;
                        }
                        if (!tmp25) {
                          closure_1_5(undefined);
                        }
                      },
                    _errorSteps() {
                        c7 = false;
                      }
                  };
                  const _ownerReadableStream = closure_6._ownerReadableStream;
                  _ownerReadableStream._disturbed = true;
                  if ("closed" === _ownerReadableStream._state) {
                    obj._closeSteps();
                  } else if ("errored" === _ownerReadableStream._state) {
                    obj._errorSteps(_ownerReadableStream._storedError);
                  } else {
                    let _readableStreamController = _ownerReadableStream._readableStreamController;
                    _readableStreamController[SymbolResult3](obj);
                  }
                } else {
                  const _Object = Object;
                  hasOwnProperty = Object.prototype.hasOwnProperty;
                  const call = hasOwnProperty.call;
                  if (typeof call === "unknown") {
                    let hasOwnPropertyResult = hasOwnProperty("_readIntoRequests");
                  } else {
                    hasOwnPropertyResult = call(tmp, "_readIntoRequests");
                  }
                }
              };
              closure_129_14 = function S(buffer, arg1) {
                closure_0 = arg1;
                let flag = typeof closure_6 === "object";
                if (typeof closure_6 === "object") {
                  flag = true;
                }
                if (!flag) {
                  flag = typeof tmp === "function";
                }
                let tmp2 = flag;
                if (!tmp2) {
                  if (tmp2) {
                    tmp2 = tmp instanceof closure_1_29;
                  }
                  if (tmp2) {
                    closure_1_22(closure_6);
                    const tmp14 = new _moduleResult3(closure_0);
                    closure_6 = tmp14;
                    closure_129_0 = tmp14;
                    fn = (typeError) => {
                      if (closure_0 === closure_6) {
                        const _readableStreamController2 = obj5._readableStreamController;
                        const _controlledReadableByteStream2 = _readableStreamController2._controlledReadableByteStream;
                        if ("readable" === _controlledReadableByteStream2._state) {
                          if (null !== _readableStreamController2._byobRequest) {
                            _readableStreamController2._byobRequest._associatedReadableByteStreamController = undefined;
                            _readableStreamController2._byobRequest._view = null;
                            _readableStreamController2._byobRequest = null;
                          }
                          const tmp4 = new closure_15();
                          _readableStreamController2._pendingPullIntos = tmp4;
                          const tmp8 = new closure_15();
                          _readableStreamController2._queue = tmp8;
                          _readableStreamController2._queueTotalSize = 0;
                          _readableStreamController2._pullAlgorithm = undefined;
                          _readableStreamController2._cancelAlgorithm = undefined;
                          jr(_controlledReadableByteStream2, typeError);
                        }
                        const _readableStreamController = obj6._readableStreamController;
                        const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
                        if ("readable" === _controlledReadableByteStream._state) {
                          if (null !== _readableStreamController._byobRequest) {
                            _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
                            _readableStreamController._byobRequest._view = null;
                            _readableStreamController._byobRequest = null;
                          }
                          const tmp16 = new closure_15();
                          _readableStreamController._pendingPullIntos = tmp16;
                          const tmp20 = new closure_15();
                          _readableStreamController._queue = tmp20;
                          _readableStreamController._queueTotalSize = 0;
                          _readableStreamController._pullAlgorithm = undefined;
                          _readableStreamController._cancelAlgorithm = undefined;
                          jr(_controlledReadableByteStream, typeError);
                        }
                        let tmp24 = c10;
                        if (c10) {
                          tmp24 = c11;
                        }
                        if (!tmp24) {
                          closure_5(undefined);
                        }
                      }
                      return null;
                    };
                    const call2 = obj6.call;
                    if (typeof call2 === "unknown") {
                      let call2Result = obj6(undefined, fn);
                    } else {
                      call2Result = call2(_closedPromise, undefined, fn);
                    }
                    const call3 = obj6.call;
                    if (typeof call3 === "unknown") {
                      obj6(undefined, tmp18);
                    } else {
                      call3(call2Result, undefined, tmp18);
                    }
                    _closedPromise = tmp14._closedPromise;
                  }
                  closure_1 = arg1 ? obj6 : obj5;
                  closure_2 = arg1 ? obj5 : obj6;
                  const obj = {
                    _chunkSteps(arg0) {
                        closure_0 = arg0;
                        fn(() => {
                          c8 = false;
                          c9 = false;
                          const tmp2 = closure_0 ? c11 : c10;
                          if (closure_0 ? c10 : c11) {
                            if (!tmp2) {
                              Xe(closure_1._readableStreamController, closure_0);
                            }
                          } else {
                            try {
                              if (!tmp2) {
                                Xe(closure_1._readableStreamController, closure_0);
                              }
                              xe(closure_2._readableStreamController, Se(closure_0));
                              const tmp6 = Se(closure_0);
                            } catch (tmp14) {
                              Ne(closure_1._readableStreamController, tmp14);
                              Ne(closure_2._readableStreamController, tmp14);
                              closure_5(Or(self, tmp14));
                            }
                          }
                          c7 = false;
                          if (c8) {
                            closure_3_15();
                          } else if (c9) {
                            closure_3_16();
                          }
                        });
                      },
                    _closeSteps(byteLength) {
                        c7 = false;
                        let tmp = closure_0 ? c11 : c10;
                        const tmp2 = closure_0 ? c10 : c11;
                        if (!tmp) {
                          Qe(closure_1._readableStreamController);
                        }
                        if (!tmp2) {
                          Qe(closure_2._readableStreamController);
                        }
                        if (undefined !== byteLength) {
                          if (!tmp) {
                            Xe(closure_1._readableStreamController, byteLength);
                          }
                          let tmp12 = !tmp2;
                          if (!tmp2) {
                            tmp12 = closure_2._readableStreamController._pendingPullIntos.length > 0;
                          }
                          if (tmp12) {
                            const _readableStreamController = closure_2._readableStreamController;
                            const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                            const peekResult = _pendingPullIntos.peek();
                            if ("closed" === _readableStreamController._controlledReadableByteStream._state) {
                              peekResult.buffer = fn(peekResult.buffer);
                              $e(_readableStreamController, 0);
                            } else {
                              const _TypeError = TypeError;
                              const typeError = new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                              throw typeError;
                            }
                          }
                        }
                        if (tmp) {
                          tmp = tmp2;
                        }
                        if (!tmp) {
                          closure_5(undefined);
                        }
                      },
                    _errorSteps() {
                        c7 = false;
                      }
                  };
                  const _ownerReadableStream = closure_6._ownerReadableStream;
                  _ownerReadableStream._disturbed = true;
                  if ("errored" === _ownerReadableStream._state) {
                    obj._errorSteps(_ownerReadableStream._storedError);
                  } else {
                    (function Ie(_readableStreamController, buffer, arg2, _chunkSteps) {
                      const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
                      const constructor = buffer.constructor;
                      try {
                        const tmp6 = closure_1_30(buffer.buffer);
                        const obj2 = { buffer: tmp6, bufferByteLength: tmp6.byteLength, byteOffset: tmp2, byteLength: tmp3, bytesFilled: 0, minimumFill: tmp4, elementSize: tmp, viewConstructor: constructor, readerType: "byob" };
                        if (_readableStreamController._pendingPullIntos.length > 0) {
                          const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                          _pendingPullIntos.push(obj2);
                          closure_1_59(_controlledReadableByteStream, _chunkSteps);
                        } else if ("closed" !== _controlledReadableByteStream._state) {
                          if (_readableStreamController._queueTotalSize > 0) {
                            if (closure_1_50(_readableStreamController, obj2)) {
                              closure_1_51(_readableStreamController);
                              _chunkSteps._chunkSteps(closure_1_47(obj2));
                              const tmp27 = closure_1_47(obj2);
                            } else if (_readableStreamController._closeRequested) {
                              const _TypeError = TypeError;
                              const typeError = new TypeError("Insufficient bytes to fill elements in the given buffer");
                              closure_1_55(_readableStreamController, typeError);
                              _chunkSteps._errorSteps(typeError);
                            }
                          }
                          const _pendingPullIntos1 = _readableStreamController._pendingPullIntos;
                          _pendingPullIntos1.push(obj2);
                          closure_1_59(_controlledReadableByteStream, _chunkSteps);
                          closure_1_46(_readableStreamController);
                        } else {
                          const constructor1 = new constructor(obj2.buffer, obj2.byteOffset, 0);
                          _chunkSteps._closeSteps(constructor1);
                        }
                      } catch (tmp34) {
                        obj._errorSteps(tmp34);
                      }
                      tmp = ((constructor) => {
                        let num = 1;
                        if (constructor !== DataView) {
                          num = constructor.BYTES_PER_ELEMENT;
                        }
                        return num;
                      })(constructor);
                    })(_ownerReadableStream._readableStreamController, buffer, 1, obj);
                  }
                } else {
                  const _Object = Object;
                  hasOwnProperty = Object.prototype.hasOwnProperty;
                  const call = hasOwnProperty.call;
                  if (typeof call === "unknown") {
                    let hasOwnPropertyResult = hasOwnProperty("_readRequests");
                  } else {
                    hasOwnPropertyResult = call(tmp, "_readRequests");
                  }
                }
              };
              const fn3 = function g() {
                if (c7) {
                  c8 = true;
                  c0 = undefined;
                  const tmp23 = new Promise((fn) => fn(c0));
                  return tmp23;
                } else {
                  c7 = true;
                  const _readableStreamController = obj5._readableStreamController;
                  if (null === _readableStreamController._byobRequest) {
                    if (_readableStreamController._pendingPullIntos.length > 0) {
                      const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                      const peekResult = _pendingPullIntos.peek();
                      const _Uint8Array = Uint8Array;
                      const uint8Array = new Uint8Array(peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled, peekResult.byteLength - peekResult.bytesFilled);
                      const _Object = Object;
                      const obj = Object.create(_moduleResult1.prototype);
                      obj._associatedReadableByteStreamController = _readableStreamController;
                      obj._view = uint8Array;
                      _readableStreamController._byobRequest = obj;
                    }
                  }
                  const _byobRequest = _readableStreamController._byobRequest;
                  if (null === _byobRequest) {
                    closure_1_13();
                  } else {
                    closure_1_14(_byobRequest._view, false);
                  }
                  const tmp18 = new Promise((fn) => fn(c0));
                  return tmp18;
                }
              };
              closure_129_15 = fn3;
              fn4 = function v() {
                if (c7) {
                  c9 = true;
                  c0 = undefined;
                  const tmp23 = new Promise((fn) => fn(c0));
                  return tmp23;
                } else {
                  c7 = true;
                  const _readableStreamController = obj6._readableStreamController;
                  if (null === _readableStreamController._byobRequest) {
                    if (_readableStreamController._pendingPullIntos.length > 0) {
                      const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                      const peekResult = _pendingPullIntos.peek();
                      const _Uint8Array = Uint8Array;
                      const uint8Array = new Uint8Array(peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled, peekResult.byteLength - peekResult.bytesFilled);
                      const _Object = Object;
                      const obj = Object.create(_moduleResult1.prototype);
                      obj._associatedReadableByteStreamController = _readableStreamController;
                      obj._view = uint8Array;
                      _readableStreamController._byobRequest = obj;
                    }
                  }
                  const _byobRequest = _readableStreamController._byobRequest;
                  if (null === _byobRequest) {
                    closure_1_13();
                  } else {
                    closure_1_14(_byobRequest._view, true);
                  }
                  const tmp18 = new Promise((fn) => fn(c0));
                  return tmp18;
                }
              };
              closure_129_16 = fn4;
              class T {
                constructor() {
                  return;
                }
              }
              const tmp50 = new c29(self);
              closure_129_6 = tmp50;
              closure_129_7 = false;
              closure_129_8 = false;
              closure_129_9 = false;
              closure_129_10 = false;
              closure_129_11 = false;
              const tmp55 = new obj5((arg0) => {
                closure_5 = arg0;
              });
              closure_129_12 = tmp55;
              const _Object7 = Object;
              let obj = Object.create(_moduleResult8.prototype);
              obj._state = "readable";
              obj._reader = undefined;
              obj._storedError = undefined;
              obj._disturbed = false;
              const _Object8 = Object;
              Je(obj, Object.create(_moduleResult2.prototype), T, fn3, function w(arg0) {
                c10 = true;
                closure_1 = arg0;
                if (c11) {
                  items = [arg0, closure_2];
                  closure_5(Or(self, items.slice()));
                }
                return fn;
              }, 0, undefined);
              closure_129_3 = obj;
              const _Object9 = Object;
              const obj4 = Object.create(_moduleResult8.prototype);
              obj4._state = "readable";
              obj4._reader = undefined;
              obj4._storedError = undefined;
              obj4._disturbed = false;
              const _Object10 = Object;
              Je(obj4, Object.create(_moduleResult2.prototype), T, fn4, function R(arg0) {
                c11 = true;
                closure_2 = arg0;
                if (c10) {
                  items = [closure_1, arg0];
                  closure_5(Or(self, items.slice()));
                }
                return fn;
              }, 0, undefined);
              closure_129_4 = obj4;
              self = closure_129_6;
              const fn5 = (typeError) => {
                if (closure_0 === closure_6) {
                  const _readableStreamController2 = obj5._readableStreamController;
                  const _controlledReadableByteStream2 = _readableStreamController2._controlledReadableByteStream;
                  if ("readable" === _controlledReadableByteStream2._state) {
                    if (null !== _readableStreamController2._byobRequest) {
                      _readableStreamController2._byobRequest._associatedReadableByteStreamController = undefined;
                      _readableStreamController2._byobRequest._view = null;
                      _readableStreamController2._byobRequest = null;
                    }
                    const tmp4 = new closure_15();
                    _readableStreamController2._pendingPullIntos = tmp4;
                    const tmp8 = new closure_15();
                    _readableStreamController2._queue = tmp8;
                    _readableStreamController2._queueTotalSize = 0;
                    _readableStreamController2._pullAlgorithm = undefined;
                    _readableStreamController2._cancelAlgorithm = undefined;
                    jr(_controlledReadableByteStream2, typeError);
                  }
                  const _readableStreamController = obj6._readableStreamController;
                  const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
                  if ("readable" === _controlledReadableByteStream._state) {
                    if (null !== _readableStreamController._byobRequest) {
                      _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
                      _readableStreamController._byobRequest._view = null;
                      _readableStreamController._byobRequest = null;
                    }
                    const tmp16 = new closure_15();
                    _readableStreamController._pendingPullIntos = tmp16;
                    const tmp20 = new closure_15();
                    _readableStreamController._queue = tmp20;
                    _readableStreamController._queueTotalSize = 0;
                    _readableStreamController._pullAlgorithm = undefined;
                    _readableStreamController._cancelAlgorithm = undefined;
                    jr(_controlledReadableByteStream, typeError);
                  }
                  let tmp24 = c10;
                  if (c10) {
                    tmp24 = c11;
                  }
                  if (!tmp24) {
                    closure_5(undefined);
                  }
                }
                return null;
              };
              const call5 = obj6.call;
              items = closure_2;
              const call6 = tmp72.call;
              if (typeof call6 === "unknown") {
                tmp72(undefined, items);
              } else {
                call6(tmp73, undefined, items);
              }
              items = [obj, obj4];
              const _closedPromise2 = closure_129_6._closedPromise;
              tmp73 = typeof call5 === "unknown" ? obj6(undefined, fn5) : call5(closure_129_6._closedPromise, undefined, fn5);
            } else {
              fn = function h() {
                if (c7) {
                  c8 = true;
                  c0 = undefined;
                  let tmp9 = new Promise((fn) => fn(c0));
                } else {
                  c7 = true;
                  const obj = {
                    _chunkSteps(arg0) {
                        closure_0 = arg0;
                        fn(() => {
                          c8 = false;
                          if (!closure_2_9) {
                            fr(obj5._readableStreamController, closure_0);
                          }
                          if (!closure_2_10) {
                            fr(obj6._readableStreamController, closure_0);
                          }
                          c7 = false;
                          if (c8) {
                            fn();
                          }
                        });
                      },
                    _closeSteps() {
                        c7 = false;
                        if (!closure_1_9) {
                          const _readableStreamController = obj5._readableStreamController;
                          const _closeRequested = _readableStreamController._closeRequested;
                          let tmp3 = !_closeRequested;
                          if (!_closeRequested) {
                            tmp3 = "readable" === tmp2;
                          }
                          if (tmp3) {
                            _readableStreamController._closeRequested = true;
                            if (0 === _readableStreamController._queue.length) {
                              _readableStreamController._pullAlgorithm = undefined;
                              _readableStreamController._cancelAlgorithm = undefined;
                              _readableStreamController._strategySizeAlgorithm = undefined;
                              Br(tmp4);
                            }
                          }
                        }
                        if (!closure_1_10) {
                          const _readableStreamController2 = obj6._readableStreamController;
                          const _closeRequested2 = _readableStreamController2._closeRequested;
                          let tmp9 = !_closeRequested2;
                          if (!_closeRequested2) {
                            tmp9 = "readable" === tmp8;
                          }
                          if (tmp9) {
                            _readableStreamController2._closeRequested = true;
                            if (0 === _readableStreamController2._queue.length) {
                              _readableStreamController2._pullAlgorithm = undefined;
                              _readableStreamController2._cancelAlgorithm = undefined;
                              _readableStreamController2._strategySizeAlgorithm = undefined;
                              Br(tmp10);
                            }
                          }
                        }
                        let tmp13 = closure_1_9;
                        if (closure_1_9) {
                          tmp13 = closure_1_10;
                        }
                        if (!tmp13) {
                          closure_1_5(undefined);
                        }
                      },
                    _errorSteps() {
                        c7 = false;
                      }
                  };
                  const _ownerReadableStream = closure_6._ownerReadableStream;
                  _ownerReadableStream._disturbed = true;
                  if ("closed" === _ownerReadableStream._state) {
                    obj._closeSteps();
                  } else if ("errored" === _ownerReadableStream._state) {
                    obj._errorSteps(_ownerReadableStream._storedError);
                  } else {
                    let _readableStreamController = _ownerReadableStream._readableStreamController;
                    _readableStreamController[SymbolResult3](obj);
                  }
                  tmp9 = new Promise((fn) => fn(c0));
                }
                return tmp9;
              };
              class S {
                constructor() {
                  return;
                }
              }
              class T {
                constructor() {
                  return;
                }
              }
              const tmp21 = new c29(self);
              closure_6 = tmp21;
              c7 = false;
              c8 = false;
              c9 = false;
              c10 = false;
              const tmp26 = new obj5((arg0) => {
                closure_5 = arg0;
              });
              c11 = tmp26;
              const _Object3 = Object;
              obj5 = Object.create(_moduleResult8.prototype);
              obj5._state = "readable";
              obj5._reader = undefined;
              obj5._storedError = undefined;
              obj5._disturbed = false;
              const _Object4 = Object;
              _r(obj5, Object.create(_moduleResult7.prototype), S, fn, function _(arg0) {
                c9 = true;
                closure_1 = arg0;
                if (c10) {
                  items = [arg0, closure_2];
                  closure_5(Or(self, items.slice()));
                }
                return c11;
              }, 1, function te() {
                return 1;
              });
              const _Object5 = Object;
              obj6 = Object.create(_moduleResult8.prototype);
              obj6._state = "readable";
              obj6._reader = undefined;
              obj6._storedError = undefined;
              obj6._disturbed = false;
              const _Object6 = Object;
              _r(obj6, Object.create(_moduleResult7.prototype), S, fn, function p(arg0) {
                c10 = true;
                closure_2 = arg0;
                if (c9) {
                  items = [closure_1, arg0];
                  closure_5(Or(self, items.slice()));
                }
                return c11;
              }, 1, function te() {
                return 1;
              });
              const fn2 = (typeError) => {
                const _readableStreamController = obj5._readableStreamController;
                const _controlledReadableStream = _readableStreamController._controlledReadableStream;
                if ("readable" === _controlledReadableStream._state) {
                  const tmp4 = new closure_15();
                  _readableStreamController._queue = tmp4;
                  _readableStreamController._queueTotalSize = 0;
                  _readableStreamController._pullAlgorithm = undefined;
                  _readableStreamController._cancelAlgorithm = undefined;
                  _readableStreamController._strategySizeAlgorithm = undefined;
                  jr(_controlledReadableStream, typeError);
                }
                const _readableStreamController2 = obj6._readableStreamController;
                const _controlledReadableStream2 = _readableStreamController2._controlledReadableStream;
                if ("readable" === _controlledReadableStream2._state) {
                  const tmp11 = new closure_15();
                  _readableStreamController2._queue = tmp11;
                  _readableStreamController2._queueTotalSize = 0;
                  _readableStreamController2._pullAlgorithm = undefined;
                  _readableStreamController2._cancelAlgorithm = undefined;
                  _readableStreamController2._strategySizeAlgorithm = undefined;
                  jr(_controlledReadableStream2, typeError);
                }
                let tmp15 = c9;
                if (c9) {
                  tmp15 = c10;
                }
                if (!tmp15) {
                  closure_5(undefined);
                }
                return null;
              };
              let call3 = obj6.call;
              const call4 = tmp42.call;
              if (typeof call4 === "unknown") {
                tmp42(undefined, closure_2);
              } else {
                call4(tmp43, undefined, closure_2);
              }
              const items1 = [obj5, obj6];
              return items1.slice();
            }
          } else {
            const _Object2 = Object;
            class S {
              constructor() {
                return;
              }
            }
          }
        } else {
          let _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          class S {
            constructor() {
              return;
            }
          }
          class T {
            constructor() {
              return;
            }
          }
          throw tmp10;
        }
      } else {
        let _Object = Object;
        class S {
          constructor() {
            return;
          }
        }
      }
    }
  },
  {
    key: "values",
    value: function values() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult8;
        }
        if (tmp3) {
          if (undefined !== tmp) {
            if (typeof tmp !== "object") {
              if (typeof tmp !== "function") {
                const _TypeError2 = TypeError;
                const _HermesInternal2 = HermesInternal;
                const typeError = new TypeError("" + "First parameter" + " is not an object.");
                throw typeError;
              }
            }
          }
          let preventCancel;
          if (null != tmp) {
            preventCancel = tmp.preventCancel;
          }
          const _Boolean = Boolean;
          const tmp21 = new c29(self);
          const tmp26 = new closure_38(tmp21, Boolean(preventCancel));
          const _Object2 = Object;
          const obj = Object.create(obj3);
          obj._asyncIteratorImpl = tmp26;
          return obj;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("ReadableStream.prototype." + "values" + " can only be used on a ReadableStream");
          throw typeError1;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_readableStreamController");
        }
      }
    }
  },
  {
    key: str2,
    value(arg0) {
      return this.values(arg0);
    }
  }
];
const entry1 = {
  key: "from",
  value: function from(getReader) {
    let tmp = typeof getReader === "object";
    if (typeof getReader === "object") {
      tmp = null !== getReader;
    }
    if (!tmp) {
      tmp = typeof getReader === "function";
    }
    if (tmp) {
      if (undefined !== getReader.getReader) {
        const reader = getReader.getReader();
        const _Object = Object;
        const obj = Object.create(_moduleResult8.prototype);
        obj._state = "readable";
        obj._reader = undefined;
        obj._storedError = undefined;
        obj._disturbed = false;
        const _Object2 = Object;
        _r(obj, Object.create(_moduleResult7.prototype), obj2, function n() {
          try {
            const readResult = obj2.read();
            return _(readResult, (done) => {
              let tmp = typeof done === "object";
              if (typeof done === "object") {
                tmp = null !== done;
              }
              if (!tmp) {
                tmp = typeof done === "function";
              }
              if (tmp) {
                if (done.done) {
                  const _readableStreamController = iterator._readableStreamController;
                  const _closeRequested = _readableStreamController._closeRequested;
                  let tmp12 = !_closeRequested;
                  if (!_closeRequested) {
                    tmp12 = "readable" === tmp11;
                  }
                  if (tmp12) {
                    _readableStreamController._closeRequested = true;
                    if (0 === _readableStreamController._queue.length) {
                      _readableStreamController._pullAlgorithm = undefined;
                      _readableStreamController._cancelAlgorithm = undefined;
                      _readableStreamController._strategySizeAlgorithm = undefined;
                      Br(tmp13);
                    }
                  }
                } else {
                  fr(iterator._readableStreamController, done.value);
                }
              } else {
                const _TypeError = TypeError;
                const typeError = new TypeError("The promise returned by the reader.read() method must fulfill with an object");
                throw typeError;
              }
            });
          } catch (tmp5) {
            return d(tmp5);
          }
        }, function a(arg0) {
          try {
            return c(obj2.cancel(arg0));
          } catch (tmp4) {
            return d(tmp4);
          }
        }, 0, function te() {
          return 1;
        });
        closure_129_1 = obj;
        obj2 = obj;
      }
      return obj2;
    }
    let iterator = fe(getReader, "async");
    obj2 = Object.create(_moduleResult8.prototype);
    obj2._state = "readable";
    obj2._reader = undefined;
    obj2._storedError = undefined;
    obj2._disturbed = false;
    _r(obj2, Object.create(_moduleResult7.prototype), obj2, function a() {
      try {
        return _(c(be(closure_1)), (done) => {
          let tmp = typeof done === "object";
          if (typeof done === "object") {
            tmp = null !== done;
          }
          if (!tmp) {
            tmp = typeof done === "function";
          }
          if (tmp) {
            if (done.done) {
              const _readableStreamController = obj2._readableStreamController;
              const _closeRequested = _readableStreamController._closeRequested;
              let tmp12 = !_closeRequested;
              if (!_closeRequested) {
                tmp12 = "readable" === tmp11;
              }
              if (tmp12) {
                _readableStreamController._closeRequested = true;
                if (0 === _readableStreamController._queue.length) {
                  _readableStreamController._pullAlgorithm = undefined;
                  _readableStreamController._cancelAlgorithm = undefined;
                  _readableStreamController._strategySizeAlgorithm = undefined;
                  Br(tmp13);
                }
              }
            } else {
              fr(obj2._readableStreamController, done.value);
            }
          } else {
            const _TypeError = TypeError;
            const typeError = new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
            throw typeError;
          }
        });
      } catch (tmp5) {
        return d(tmp5);
      }
    }, function i(arg0) {
      iterator = iterator.iterator;
      try {
        const tmp2 = ue(iterator, "return");
        if (undefined === tmp2) {
          let tmp8 = c(undefined);
        } else {
          items = [arg0];
          tmp8 = _(g(tmp2, iterator, items), (obj) => {
            let tmp = typeof obj === "object";
            if (typeof obj === "object") {
              tmp = null !== obj;
            }
            if (!tmp) {
              tmp = typeof obj === "function";
            }
            if (!tmp) {
              const _TypeError = TypeError;
              const typeError = new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
              throw typeError;
            }
          });
        }
        return tmp8;
      } catch (tmp10) {
        return d(tmp10);
      }
    }, 0, function te() {
      return 1;
    });
  }
};
const items11 = [entry1];
_moduleResult8 = _createClass(ReadableStream, items10, items11);
Object.defineProperties(_moduleResult8, { from: { enumerable: true } });
Object.defineProperties(_moduleResult8.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } });
fn3(_moduleResult8.from, "from");
fn3(_moduleResult8.prototype.cancel, "cancel");
fn3(_moduleResult8.prototype.getReader, "getReader");
fn3(_moduleResult8.prototype.pipeThrough, "pipeThrough");
fn3(_moduleResult8.prototype.pipeTo, "pipeTo");
fn3(_moduleResult8.prototype.tee, "tee");
fn3(_moduleResult8.prototype.values, "values");
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      obj = {};
      str = global;
      if (!global) {
        str = "";
      }
      str2 = require;
      obj.message = str;
      if (!require) {
        str2 = "Error";
      }
      obj.name = str2;
      if (Error.captureStackTrace) {
        _Error = Error;
        captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
      }
      return;
    }
  }
  const _Symbol11 = Symbol;
  Object.defineProperty(_moduleResult8.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true });
}
Object.defineProperty(_moduleResult8.prototype, str2, { value: _moduleResult8.prototype.values, writable: true, configurable: true });
zr = function zr(byteLength) {
  return byteLength.byteLength;
};
fn3(zr, "size");
class ByteLengthQueuingStrategy {
  constructor(arg0) {
    tmp = closure_3_0(this, TransformStreamDefaultController);
    if (undefined === global) {
      tmp15 = globalThis;
      _TypeError3 = TypeError;
      _HermesInternal3 = HermesInternal;
      str9 = "'.";
      str10 = "ByteLengthQueuingStrategy";
      str11 = " is required in '";
      num = 1;
      str12 = "Parameter ";
      tmp16 = new.target;
      tmp17 = new.target;
      typeError = new TypeError("Parameter " + 1 + " is required in '" + "ByteLengthQueuingStrategy" + "'.");
      tmp19 = typeError;
      throw typeError;
    } else {
      if (undefined !== global) {
        if (typeof global !== "object") {
          if (typeof global !== "function") {
            tmp10 = globalThis;
            _TypeError2 = TypeError;
            _HermesInternal2 = HermesInternal;
            str6 = " is not an object.";
            str7 = "First parameter";
            str8 = "";
            tmp11 = new.target;
            tmp12 = new.target;
            typeError1 = new TypeError("" + "First parameter" + " is not an object.");
            tmp14 = typeError1;
            throw typeError1;
          }
        }
      }
      tmp2 = null;
      highWaterMark = undefined;
      if (null != global) {
        highWaterMark = global.highWaterMark;
      }
      if (undefined === highWaterMark) {
        tmp5 = globalThis;
        _TypeError = TypeError;
        _HermesInternal = HermesInternal;
        str = "'.";
        str2 = "QueuingStrategyInit";
        str3 = " is required in '";
        str4 = "highWaterMark";
        str5 = "";
        tmp6 = new.target;
        tmp7 = new.target;
        typeError2 = new TypeError("" + "highWaterMark" + " is required in '" + "QueuingStrategyInit" + "'.");
        tmp9 = typeError2;
        throw typeError2;
      } else {
        tmp4 = globalThis;
        _Number = Number;
        this._byteLengthQueuingStrategyHighWaterMark = Number(highWaterMark);
        return;
      }
    }
  }
}
_classCallCheck = ByteLengthQueuingStrategy;
const items12 = [
  {
    key: "highWaterMark",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult9;
        }
        if (tmp2) {
          return self._byteLengthQueuingStrategyHighWaterMark;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ByteLengthQueuingStrategy.prototype." + "highWaterMark" + " can only be used on a ByteLengthQueuingStrategy");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_byteLengthQueuingStrategyHighWaterMark");
        } else {
          hasOwnPropertyResult = call(self, "_byteLengthQueuingStrategyHighWaterMark");
        }
      }
    }
  },
  {
    key: "size",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult9;
        }
        if (tmp2) {
          return zr;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("ByteLengthQueuingStrategy.prototype." + "size" + " can only be used on a ByteLengthQueuingStrategy");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_byteLengthQueuingStrategyHighWaterMark");
        } else {
          hasOwnPropertyResult = call(self, "_byteLengthQueuingStrategyHighWaterMark");
        }
      }
    }
  }
];
_moduleResult9 = _createClass(ByteLengthQueuingStrategy, items12);
Object.defineProperties(_moduleResult9.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } });
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      obj = {};
      str = global;
      if (!global) {
        str = "";
      }
      str2 = require;
      obj.message = str;
      if (!require) {
        str2 = "Error";
      }
      obj.name = str2;
      if (Error.captureStackTrace) {
        _Error = Error;
        captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
      }
      return;
    }
  }
  const _Symbol12 = Symbol;
  Object.defineProperty(_moduleResult9.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
}
class Fr {
  constructor() {
    return 1;
  }
}
fn3(Fr, "size");
class CountQueuingStrategy {
  constructor(arg0) {
    tmp = closure_3_0(this, TransformStreamDefaultController);
    if (undefined === global) {
      tmp15 = globalThis;
      _TypeError3 = TypeError;
      _HermesInternal3 = HermesInternal;
      str9 = "'.";
      str10 = "CountQueuingStrategy";
      str11 = " is required in '";
      num = 1;
      str12 = "Parameter ";
      tmp16 = new.target;
      tmp17 = new.target;
      typeError = new TypeError("Parameter " + 1 + " is required in '" + "CountQueuingStrategy" + "'.");
      tmp19 = typeError;
      throw typeError;
    } else {
      if (undefined !== global) {
        if (typeof global !== "object") {
          if (typeof global !== "function") {
            tmp10 = globalThis;
            _TypeError2 = TypeError;
            _HermesInternal2 = HermesInternal;
            str6 = " is not an object.";
            str7 = "First parameter";
            str8 = "";
            tmp11 = new.target;
            tmp12 = new.target;
            typeError1 = new TypeError("" + "First parameter" + " is not an object.");
            tmp14 = typeError1;
            throw typeError1;
          }
        }
      }
      tmp2 = null;
      highWaterMark = undefined;
      if (null != global) {
        highWaterMark = global.highWaterMark;
      }
      if (undefined === highWaterMark) {
        tmp5 = globalThis;
        _TypeError = TypeError;
        _HermesInternal = HermesInternal;
        str = "'.";
        str2 = "QueuingStrategyInit";
        str3 = " is required in '";
        str4 = "highWaterMark";
        str5 = "";
        tmp6 = new.target;
        tmp7 = new.target;
        typeError2 = new TypeError("" + "highWaterMark" + " is required in '" + "QueuingStrategyInit" + "'.");
        tmp9 = typeError2;
        throw typeError2;
      } else {
        tmp4 = globalThis;
        _Number = Number;
        this._countQueuingStrategyHighWaterMark = Number(highWaterMark);
        return;
      }
    }
  }
}
_classCallCheck = CountQueuingStrategy;
const items13 = [
  {
    key: "highWaterMark",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult10;
        }
        if (tmp2) {
          return self._countQueuingStrategyHighWaterMark;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("CountQueuingStrategy.prototype." + "highWaterMark" + " can only be used on a CountQueuingStrategy");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_countQueuingStrategyHighWaterMark");
        } else {
          hasOwnPropertyResult = call(self, "_countQueuingStrategyHighWaterMark");
        }
      }
    }
  },
  {
    key: "size",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult10;
        }
        if (tmp2) {
          return Fr;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("CountQueuingStrategy.prototype." + "size" + " can only be used on a CountQueuingStrategy");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_countQueuingStrategyHighWaterMark");
        } else {
          hasOwnPropertyResult = call(self, "_countQueuingStrategyHighWaterMark");
        }
      }
    }
  }
];
_moduleResult10 = _createClass(CountQueuingStrategy, items13);
Object.defineProperties(_moduleResult10.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } });
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      obj = {};
      str = global;
      if (!global) {
        str = "";
      }
      str2 = require;
      obj.message = str;
      if (!require) {
        str2 = "Error";
      }
      obj.name = str2;
      if (Error.captureStackTrace) {
        _Error = Error;
        captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
      }
      return;
    }
  }
  const _Symbol13 = Symbol;
  Object.defineProperty(_moduleResult10.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true });
}
class TransformStream {
  constructor() {
    obj1 = global;
    if (global === undefined) {
      obj1 = {};
    }
    obj = require;
    if (require === undefined) {
      obj = {};
    }
    obj4 = importDefault;
    if (importDefault === undefined) {
      obj4 = {};
    }
    self = this;
    closure_0 = undefined;
    tmp2 = closure_3_0(this, TransformStreamDefaultController);
    if (undefined === obj1) {
      obj1 = null;
    }
    tmp3 = closure_2_64(obj, "Second parameter");
    tmp4 = closure_2_64(obj4, "Third parameter");
    if (undefined !== obj1) {
      if (typeof obj1 !== "object") {
        if (typeof obj1 !== "function") {
          tmp97 = globalThis;
          _TypeError5 = TypeError;
          _HermesInternal9 = HermesInternal;
          str23 = " is not an object.";
          str24 = "First parameter";
          str25 = "";
          tmp98 = new.target;
          tmp99 = new.target;
          typeError = new TypeError("" + "First parameter" + " is not an object.");
          tmp101 = typeError;
          throw typeError;
        }
      }
    }
    cancel = undefined;
    if (null != obj1) {
      cancel = obj1.cancel;
    }
    flush = undefined;
    if (null != obj1) {
      flush = obj1.flush;
    }
    readableType = undefined;
    if (null != obj1) {
      readableType = obj1.readableType;
    }
    start = undefined;
    if (null != obj1) {
      start = obj1.start;
    }
    transform = undefined;
    if (null != obj1) {
      transform = obj1.transform;
    }
    writableType = undefined;
    if (null != obj1) {
      writableType = obj1.writableType;
    }
    fn = undefined;
    if (undefined !== cancel) {
      tmp11 = globalThis;
      _HermesInternal = HermesInternal;
      str = " has member 'cancel' that";
      str2 = "First parameter";
      str3 = "";
      closure_0 = cancel;
      closure_1 = obj1;
      if (typeof cancel !== "function") {
        _TypeError = TypeError;
        _HermesInternal2 = HermesInternal;
        str4 = " is not a function.";
        tmp13 = new.target;
        tmp14 = new.target;
        typeError1 = new TypeError("" + tmp12 + " is not a function.");
        tmp16 = typeError1;
        throw typeError1;
      } else {
        fn = (arg0) => {
          items = [arg0];
          return g(closure_0, obj12, items);
        };
      }
    }
    obj5 = { cancel: fn, flush: null, readableType: null, start: null, transform: null, writableType: null };
    fn2 = undefined;
    if (undefined !== flush) {
      tmp17 = globalThis;
      _HermesInternal3 = HermesInternal;
      str5 = " has member 'flush' that";
      str6 = "First parameter";
      str7 = "";
      closure_0 = flush;
      closure_1 = obj1;
      if (typeof flush !== "function") {
        _TypeError2 = TypeError;
        _HermesInternal4 = HermesInternal;
        str8 = " is not a function.";
        tmp19 = new.target;
        tmp20 = new.target;
        typeError2 = new TypeError("" + tmp18 + " is not a function.");
        tmp22 = typeError2;
        throw typeError2;
      } else {
        fn2 = (arg0) => {
          items = [arg0];
          return g(closure_0, obj12, items);
        };
      }
    }
    obj5.flush = fn2;
    obj5.readableType = readableType;
    fn3 = undefined;
    if (undefined !== start) {
      tmp23 = globalThis;
      _HermesInternal5 = HermesInternal;
      str9 = " has member 'start' that";
      str10 = "First parameter";
      str11 = "";
      closure_0 = start;
      closure_1 = obj1;
      if (typeof start !== "function") {
        _TypeError3 = TypeError;
        _HermesInternal6 = HermesInternal;
        str12 = " is not a function.";
        tmp25 = new.target;
        tmp26 = new.target;
        typeError3 = new TypeError("" + tmp24 + " is not a function.");
        tmp28 = typeError3;
        throw typeError3;
      } else {
        fn3 = (arg0) => {
          items = [arg0];
          if (typeof closure_0 !== "function") {
            const _TypeError = TypeError;
            const typeError = new TypeError("Argument is not a function");
            throw typeError;
          } else {
            const _Function = Function;
            const call = apply.call;
            return typeof call === "unknown" ? apply(obj12, items) : call(closure_0, obj12, items);
          }
        };
      }
    }
    obj5.start = fn3;
    fn4 = undefined;
    if (undefined !== transform) {
      tmp29 = globalThis;
      _HermesInternal7 = HermesInternal;
      str13 = " has member 'transform' that";
      str14 = "First parameter";
      str15 = "";
      closure_0 = transform;
      closure_1 = obj1;
      if (typeof transform !== "function") {
        _TypeError4 = TypeError;
        _HermesInternal8 = HermesInternal;
        str16 = " is not a function.";
        tmp31 = new.target;
        tmp32 = new.target;
        typeError4 = new TypeError("" + tmp30 + " is not a function.");
        tmp34 = typeError4;
        throw typeError4;
      } else {
        fn4 = (arg0, arg1) => {
          items = [arg0, arg1];
          return g(closure_0, obj12, items);
        };
      }
    }
    obj5.transform = fn4;
    obj5.writableType = writableType;
    if (undefined !== obj5.readableType) {
      tmp92 = globalThis;
      _RangeError4 = RangeError;
      tmp93 = new.target;
      str22 = "Invalid readableType specified";
      tmp94 = new.target;
      rangeError = new RangeError("Invalid readableType specified");
      tmp96 = rangeError;
      throw rangeError;
    } else if (undefined !== obj5.writableType) {
      tmp87 = globalThis;
      _RangeError3 = RangeError;
      tmp88 = new.target;
      str21 = "Invalid writableType specified";
      tmp89 = new.target;
      rangeError1 = new RangeError("Invalid writableType specified");
      tmp91 = rangeError1;
      throw rangeError1;
    } else {
      highWaterMark2 = tmp4.highWaterMark;
      num = 0;
      if (undefined !== highWaterMark2) {
        tmp35 = closure_2_41;
        if (!closure_2_41(highWaterMark2)) {
          num = highWaterMark2;
        }
        tmp36 = globalThis;
        _RangeError = RangeError;
        tmp37 = new.target;
        str17 = "Invalid highWaterMark";
        tmp38 = new.target;
        rangeError2 = new RangeError("Invalid highWaterMark");
        tmp40 = rangeError2;
        throw rangeError2;
      }
      te = tmp4.size || (() => 1);
      highWaterMark = tmp3.highWaterMark;
      num2 = 1;
      num3 = 1;
      if (undefined !== highWaterMark) {
        tmp41 = closure_2_41;
        if (!closure_2_41(highWaterMark)) {
          num3 = highWaterMark;
        }
        tmp42 = globalThis;
        _RangeError2 = RangeError;
        tmp43 = new.target;
        str18 = "Invalid highWaterMark";
        tmp44 = new.target;
        rangeError3 = new RangeError("Invalid highWaterMark");
        tmp46 = rangeError3;
        throw rangeError3;
      }
      oe = tmp3.size || (() => 1);
      tmp48 = new.target;
      tmp49 = new.target;
      tmp47 = closure_3;
      tmp50 = new closure_3((arg0) => {
        closure_0 = arg0;
      });
      closure_0 = self;
      tmp51 = tmp50;
      closure_1 = tmp50;
      if (num3 === undefined) {
        num3 = 1;
      }
      if (oe === undefined) {
        oe = function oe() {
          return 1;
        };
      }
      fn5 = function i() {
        return obj12;
      };
      tmp52 = globalThis;
      _Object = Object;
      tmp53 = closure_2_65;
      fn6 = function l(arg0) {
        closure_1 = arg0;
        const _transformStreamController = closure_0._transformStreamController;
        if (closure_0._backpressure) {
          const fn2 = () => {
            const _writable = _transformStreamController._writable;
            if ("erroring" === _writable._state) {
              throw _writable._storedError;
            } else {
              closure_0 = _transformStreamController;
              fn = (arg0) => {
                const _controlledTransformStream = closure_0._controlledTransformStream;
                const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
                const _controlledReadableStream = _readableStreamController._controlledReadableStream;
                if ("readable" === _controlledReadableStream._state) {
                  const tmp4 = new closure_2_15();
                  _readableStreamController._queue = tmp4;
                  _readableStreamController._queueTotalSize = 0;
                  _readableStreamController._pullAlgorithm = undefined;
                  _readableStreamController._cancelAlgorithm = undefined;
                  _readableStreamController._strategySizeAlgorithm = undefined;
                  closure_2_98(_controlledReadableStream, arg0);
                }
                closure_2_105(_controlledTransformStream, arg0);
                throw arg0;
              };
              const call = then.call;
              if (typeof call === "unknown") {
                let callResult = then(undefined, fn);
              } else {
                callResult = call(_transformAlgorithmResult, undefined, fn);
              }
              return callResult;
            }
          };
          const call2 = then.call;
          if (typeof call2 === "unknown") {
            let call2Result = then(fn2, undefined);
          } else {
            call2Result = call2(_backpressureChangePromise, fn2, undefined);
          }
          _backpressureChangePromise = closure_0._backpressureChangePromise;
        } else {
          fn = (arg0) => {
            const _controlledTransformStream = closure_0._controlledTransformStream;
            const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
            const _controlledReadableStream = _readableStreamController._controlledReadableStream;
            if ("readable" === _controlledReadableStream._state) {
              const tmp4 = new closure_2_15();
              _readableStreamController._queue = tmp4;
              _readableStreamController._queueTotalSize = 0;
              _readableStreamController._pullAlgorithm = undefined;
              _readableStreamController._cancelAlgorithm = undefined;
              _readableStreamController._strategySizeAlgorithm = undefined;
              closure_2_98(_controlledReadableStream, arg0);
            }
            closure_2_105(_controlledTransformStream, arg0);
            throw arg0;
          };
          let call = then.call;
          if (typeof call === "unknown") {
            let callResult = then(undefined, fn);
          } else {
            callResult = call(_transformAlgorithmResult, undefined, fn);
          }
          return callResult;
        }
      };
      fn7 = function c() {
        const _transformStreamController = closure_0._transformStreamController;
        if (undefined !== _transformStreamController._finishPromise) {
          let _finishPromise = _transformStreamController._finishPromise;
        } else {
          const _readable = tmp._readable;
          const tmp8 = new Promise((_finishPromise_resolve, _finishPromise_reject) => {
            _transformStreamController._finishPromise_resolve = _finishPromise_resolve;
            _transformStreamController._finishPromise_reject = _finishPromise_reject;
          });
          _transformStreamController._finishPromise = tmp8;
          _transformStreamController._transformAlgorithm = undefined;
          _transformStreamController._flushAlgorithm = undefined;
          _transformStreamController._cancelAlgorithm = undefined;
          fn = () => {
            if ("errored" === _readable._state) {
              if (undefined !== _transformStreamController._finishPromise_reject) {
                let result = then;
                const call = then.call;
                if (typeof call === "unknown") {
                  result(undefined, fn);
                } else {
                  call(_finishPromise, undefined, fn);
                }
                result = _transformStreamController._finishPromise_reject(tmp7);
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
                _finishPromise = _transformStreamController._finishPromise;
              }
            } else {
              const _readableStreamController = _readable._readableStreamController;
              const _closeRequested = _readableStreamController._closeRequested;
              let tmp2 = !_closeRequested;
              if (!_closeRequested) {
                tmp2 = "readable" === tmp11;
              }
              if (tmp2) {
                _readableStreamController._closeRequested = true;
                if (0 === _readableStreamController._queue.length) {
                  _readableStreamController._pullAlgorithm = undefined;
                  _readableStreamController._cancelAlgorithm = undefined;
                  _readableStreamController._strategySizeAlgorithm = undefined;
                  Br(tmp3);
                }
              }
              if (undefined !== _transformStreamController._finishPromise_resolve) {
                const result1 = _transformStreamController._finishPromise_resolve();
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            }
            return null;
          };
          const fn2 = (typeError) => {
            const _readableStreamController = _readable._readableStreamController;
            const _controlledReadableStream = _readableStreamController._controlledReadableStream;
            if ("readable" === _controlledReadableStream._state) {
              const tmp4 = new closure_2_15();
              _readableStreamController._queue = tmp4;
              _readableStreamController._queueTotalSize = 0;
              _readableStreamController._pullAlgorithm = undefined;
              _readableStreamController._cancelAlgorithm = undefined;
              _readableStreamController._strategySizeAlgorithm = undefined;
              jr(_controlledReadableStream, typeError);
            }
            if (undefined === _transformStreamController._finishPromise_reject) {
              return null;
            } else {
              let result = then;
              const call = then.call;
              if (typeof call === "unknown") {
                result(undefined, fn);
              } else {
                call(_finishPromise, undefined, fn);
              }
              result = _transformStreamController._finishPromise_reject(typeError);
              _transformStreamController._finishPromise_resolve = undefined;
              _transformStreamController._finishPromise_reject = undefined;
              _finishPromise = _transformStreamController._finishPromise;
            }
          };
          const call2 = then.call;
          const _flushAlgorithmResult = _transformStreamController._flushAlgorithm();
          let call = then.call;
          if (typeof call === "unknown") {
            then(undefined, tmp3);
          } else {
            call(tmp2, undefined, tmp3);
          }
          _finishPromise = _transformStreamController._finishPromise;
          tmp2 = typeof call2 === "unknown" ? then(fn, fn2) : call2(_transformStreamController._flushAlgorithm(), fn, fn2);
        }
        return _finishPromise;
      };
      fn8 = function s(arg0) {
        closure_0 = arg0;
        const _transformStreamController = closure_0._transformStreamController;
        if (undefined !== _transformStreamController._finishPromise) {
          let _finishPromise = _transformStreamController._finishPromise;
        } else {
          const _readable = tmp._readable;
          const tmp8 = new Promise((_finishPromise_resolve, _finishPromise_reject) => {
            _transformStreamController._finishPromise_resolve = _finishPromise_resolve;
            _transformStreamController._finishPromise_reject = _finishPromise_reject;
          });
          _transformStreamController._finishPromise = tmp8;
          _transformStreamController._transformAlgorithm = undefined;
          _transformStreamController._flushAlgorithm = undefined;
          _transformStreamController._cancelAlgorithm = undefined;
          fn = () => {
            if ("errored" === _readable._state) {
              if (undefined !== _transformStreamController._finishPromise_reject) {
                let result = then;
                const call = then.call;
                if (typeof call === "unknown") {
                  result(undefined, fn);
                } else {
                  call(_finishPromise, undefined, fn);
                }
                result = _transformStreamController._finishPromise_reject(tmp10);
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
                _finishPromise = _transformStreamController._finishPromise;
              }
            } else {
              const _readableStreamController = _readable._readableStreamController;
              const _controlledReadableStream = _readableStreamController._controlledReadableStream;
              if ("readable" === _controlledReadableStream._state) {
                const tmp5 = new closure_2_15();
                _readableStreamController._queue = tmp5;
                _readableStreamController._queueTotalSize = 0;
                _readableStreamController._pullAlgorithm = undefined;
                _readableStreamController._cancelAlgorithm = undefined;
                _readableStreamController._strategySizeAlgorithm = undefined;
                jr(_controlledReadableStream, tmp14);
              }
              if (undefined !== _transformStreamController._finishPromise_resolve) {
                const result1 = _transformStreamController._finishPromise_resolve();
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            }
            return null;
          };
          const fn2 = (typeError) => {
            const _readableStreamController = _readable._readableStreamController;
            const _controlledReadableStream = _readableStreamController._controlledReadableStream;
            if ("readable" === _controlledReadableStream._state) {
              const tmp4 = new closure_2_15();
              _readableStreamController._queue = tmp4;
              _readableStreamController._queueTotalSize = 0;
              _readableStreamController._pullAlgorithm = undefined;
              _readableStreamController._cancelAlgorithm = undefined;
              _readableStreamController._strategySizeAlgorithm = undefined;
              jr(_controlledReadableStream, typeError);
            }
            if (undefined === _transformStreamController._finishPromise_reject) {
              return null;
            } else {
              let result = then;
              const call = then.call;
              if (typeof call === "unknown") {
                result(undefined, fn);
              } else {
                call(_finishPromise, undefined, fn);
              }
              result = _transformStreamController._finishPromise_reject(typeError);
              _transformStreamController._finishPromise_resolve = undefined;
              _transformStreamController._finishPromise_reject = undefined;
              _finishPromise = _transformStreamController._finishPromise;
            }
          };
          const call2 = then.call;
          const _cancelAlgorithmResult = _transformStreamController._cancelAlgorithm(arg0);
          let call = then.call;
          if (typeof call === "unknown") {
            then(undefined, tmp3);
          } else {
            call(tmp2, undefined, tmp3);
          }
          _finishPromise = _transformStreamController._finishPromise;
          tmp2 = typeof call2 === "unknown" ? then(fn, fn2) : call2(_transformStreamController._cancelAlgorithm(arg0), fn, fn2);
        }
        return _finishPromise;
      };
      obj6 = Object.create(closure_2_65.prototype);
      str19 = "writable";
      obj6._state = "writable";
      obj6._storedError = undefined;
      obj6._writer = undefined;
      obj6._writableStreamController = undefined;
      tmp55 = closure_2_15;
      tmp56 = new.target;
      tmp57 = new.target;
      tmp58 = new closure_2_15();
      tmp59 = tmp58;
      obj6._writeRequests = tmp58;
      obj6._inFlightWriteRequest = undefined;
      obj6._closeRequest = undefined;
      obj6._inFlightCloseRequest = undefined;
      obj6._pendingAbortRequest = undefined;
      flag = false;
      obj6._backpressure = false;
      tmp60 = closure_2_79;
      _Object2 = Object;
      tmp61 = closure_2_78;
      num4 = 0;
      tmp62 = obj6;
      tmp63 = fn5;
      tmp64 = num3;
      tmp65 = oe;
      tmp66 = closure_2_79(obj6, Object.create(closure_2_78.prototype), fn5, fn6, fn7, fn8, num3, oe);
      self._writable = obj6;
      if (num === undefined) {
        num = 1;
      }
      if (te === undefined) {
        te = function te() {
          return 1;
        };
      }
      _Object3 = Object;
      tmp67 = closure_2_93;
      fn9 = function d() {
        if (undefined !== closure_0._backpressureChangePromise) {
          const result = obj._backpressureChangePromise_resolve();
        }
        closure_0._backpressureChangePromise = new Promise((_backpressureChangePromise_resolve) => {
          obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
        });
        closure_0._backpressure = false;
        return closure_0._backpressureChangePromise;
      };
      fn10 = function f(_storedError) {
        const _transformStreamController = closure_0._transformStreamController;
        if (undefined !== _transformStreamController._finishPromise) {
          let _finishPromise = _transformStreamController._finishPromise;
        } else {
          const _writable = tmp._writable;
          const tmp8 = new Promise((_finishPromise_resolve, _finishPromise_reject) => {
            _transformStreamController._finishPromise_resolve = _finishPromise_resolve;
            _transformStreamController._finishPromise_reject = _finishPromise_reject;
          });
          _transformStreamController._finishPromise = tmp8;
          _transformStreamController._transformAlgorithm = undefined;
          _transformStreamController._flushAlgorithm = undefined;
          _transformStreamController._cancelAlgorithm = undefined;
          fn = () => {
            if ("errored" === _writable._state) {
              if (undefined !== _transformStreamController._finishPromise_reject) {
                let result = then;
                const call = then.call;
                if (typeof call === "unknown") {
                  result(undefined, fn);
                } else {
                  call(_finishPromise, undefined, fn);
                }
                result = _transformStreamController._finishPromise_reject(tmp14);
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
                _finishPromise = _transformStreamController._finishPromise;
              }
            } else {
              const _writableStreamController = _writable._writableStreamController;
              if ("writable" === _writableStreamController._controlledWritableStream._state) {
                const _controlledWritableStream = _writableStreamController._controlledWritableStream;
                _writableStreamController._writeAlgorithm = undefined;
                _writableStreamController._closeAlgorithm = undefined;
                _writableStreamController._abortAlgorithm = undefined;
                _writableStreamController._strategySizeAlgorithm = undefined;
                _controlledWritableStream._state = "erroring";
                _controlledWritableStream._storedError = _storedError;
                ({ _writer, _writableStreamController: _writableStreamController2 } = _controlledWritableStream);
                if (undefined !== _writer) {
                  kt(_writer, _storedError);
                }
                let _started = !tmp4;
                if (!(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest)) {
                  _started = _writableStreamController2._started;
                }
                if (_started) {
                  Pt(_controlledWritableStream);
                }
              }
              if (closure_0._backpressure) {
                if (undefined !== closure_0._backpressureChangePromise) {
                  const result1 = closure_0._backpressureChangePromise_resolve();
                }
                const tmp11 = new Promise((_backpressureChangePromise_resolve) => {
                  obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
                });
                closure_0._backpressureChangePromise = tmp11;
                closure_0._backpressure = false;
              }
              if (undefined !== _transformStreamController._finishPromise_resolve) {
                const result2 = _transformStreamController._finishPromise_resolve();
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            }
            return null;
          };
          const fn2 = (_storedError) => {
            const _writableStreamController = _writable._writableStreamController;
            if ("writable" === _writableStreamController._controlledWritableStream._state) {
              const _controlledWritableStream = _writableStreamController._controlledWritableStream;
              _writableStreamController._writeAlgorithm = undefined;
              _writableStreamController._closeAlgorithm = undefined;
              _writableStreamController._abortAlgorithm = undefined;
              _writableStreamController._strategySizeAlgorithm = undefined;
              _controlledWritableStream._state = "erroring";
              _controlledWritableStream._storedError = _storedError;
              ({ _writer, _writableStreamController: _writableStreamController2 } = _controlledWritableStream);
              if (undefined !== _writer) {
                kt(_writer, _storedError);
              }
              let _started = !tmp3;
              if (!(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest)) {
                _started = _writableStreamController2._started;
              }
              if (_started) {
                Pt(_controlledWritableStream);
              }
            }
            if (closure_0._backpressure) {
              if (undefined !== closure_0._backpressureChangePromise) {
                const result = closure_0._backpressureChangePromise_resolve();
              }
              const tmp10 = new Promise((_backpressureChangePromise_resolve) => {
                obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
              });
              closure_0._backpressureChangePromise = tmp10;
              closure_0._backpressure = false;
            }
            if (undefined === _transformStreamController._finishPromise_reject) {
              return null;
            } else {
              let result1 = then;
              const call = then.call;
              if (typeof call === "unknown") {
                result1(undefined, fn);
              } else {
                call(_finishPromise, undefined, fn);
              }
              result1 = _transformStreamController._finishPromise_reject(_storedError);
              _transformStreamController._finishPromise_resolve = undefined;
              _transformStreamController._finishPromise_reject = undefined;
              _finishPromise = _transformStreamController._finishPromise;
            }
          };
          const call2 = then.call;
          const _cancelAlgorithmResult = _transformStreamController._cancelAlgorithm(_storedError);
          let call = then.call;
          if (typeof call === "unknown") {
            then(undefined, tmp3);
          } else {
            call(tmp2, undefined, tmp3);
          }
          _finishPromise = _transformStreamController._finishPromise;
          tmp2 = typeof call2 === "unknown" ? then(fn, fn2) : call2(_transformStreamController._cancelAlgorithm(_storedError), fn, fn2);
        }
        return _finishPromise;
      };
      obj7 = Object.create(closure_2_93.prototype);
      str20 = "readable";
      obj7._state = "readable";
      obj7._reader = undefined;
      obj7._storedError = undefined;
      obj7._disturbed = false;
      tmp69 = closure_2_91;
      _Object4 = Object;
      tmp70 = closure_2_85;
      num5 = 0;
      tmp71 = obj7;
      tmp72 = fn5;
      tmp73 = num;
      tmp74 = te;
      tmp75 = closure_2_91(obj7, Object.create(closure_2_85.prototype), fn5, fn9, fn10, num, te);
      self._readable = obj7;
      self._backpressure = undefined;
      self._backpressureChangePromise = undefined;
      self._backpressureChangePromise_resolve = undefined;
      closure_0 = self;
      if (undefined !== self._backpressureChangePromise) {
        result = self._backpressureChangePromise_resolve();
      }
      tmp77 = new.target;
      tmp78 = new.target;
      tmp471 = new tmp47((_backpressureChangePromise_resolve) => {
        obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
      });
      tmp80 = tmp471;
      self._backpressureChangePromise = tmp471;
      flag2 = true;
      self._backpressure = true;
      self._transformStreamController = undefined;
      closure_0 = obj5;
      closure_1 = undefined;
      _Object5 = Object;
      tmp81 = closure_2_107;
      obj8 = Object.create(closure_2_107.prototype);
      closure_1 = obj8;
      obj8._controlledTransformStream = self;
      self._transformStreamController = obj8;
      obj8._transformAlgorithm = undefined !== obj5.transform ? ((arg0) => closure_0.transform(arg0, obj12)) : ((arg0) => {
        try {
          Kr(obj12, arg0);
          return c(undefined);
        } catch (tmp6) {
          return d(tmp6);
        }
      });
      obj8._flushAlgorithm = undefined !== obj5.flush ? (() => closure_0.flush(obj12)) : (() => new Promise((fn) => fn(c0)));
      obj8._cancelAlgorithm = undefined !== obj5.cancel ? ((arg0) => closure_0.cancel(arg0)) : (() => new Promise((fn) => fn(c0)));
      obj8._finishPromise = undefined;
      obj8._finishPromise_resolve = undefined;
      obj8._finishPromise_reject = undefined;
      if (undefined !== obj5.start) {
        tmp85 = closure_0;
        tmp86 = closure_0(obj5.start(self._transformStreamController));
      } else {
        tmp83 = closure_0;
        tmp84 = closure_0(undefined);
      }
      return;
    }
  }
}
_classCallCheck = TransformStream;
const items14 = [
  {
    key: "readable",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult11;
        }
        if (tmp2) {
          return self._readable;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("TransformStream.prototype." + "readable" + " can only be used on a TransformStream");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_transformStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_transformStreamController");
        }
      }
    }
  },
  {
    key: "writable",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult11;
        }
        if (tmp2) {
          return self._writable;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("TransformStream.prototype." + "writable" + " can only be used on a TransformStream");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_transformStreamController");
        } else {
          hasOwnPropertyResult = call(self, "_transformStreamController");
        }
      }
    }
  }
];
_moduleResult11 = _createClass(TransformStream, items14);
Object.defineProperties(_moduleResult11.prototype, { readable: { enumerable: true }, writable: { enumerable: true } });
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      obj = {};
      str = global;
      if (!global) {
        str = "";
      }
      str2 = require;
      obj.message = str;
      if (!require) {
        str2 = "Error";
      }
      obj.name = str2;
      if (Error.captureStackTrace) {
        _Error = Error;
        captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
      }
      return;
    }
  }
  const _Symbol14 = Symbol;
  Object.defineProperty(_moduleResult11.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true });
}
class TransformStreamDefaultController {
  constructor() {
    tmp = closure_3_0(this, TransformStreamDefaultController);
    typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
_classCallCheck = TransformStreamDefaultController;
const items15 = [
  {
    key: "desiredSize",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult12;
        }
        if (tmp2) {
          const _readableStreamController = self._controlledTransformStream._readable._readableStreamController;
          const _state = _readableStreamController._controlledReadableStream._state;
          let tmp12 = null;
          if ("errored" !== _state) {
            let num = 0;
            if ("closed" !== _state) {
              num = _readableStreamController._strategyHWM - _readableStreamController._queueTotalSize;
            }
            tmp12 = num;
          }
          return tmp12;
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("TransformStreamDefaultController.prototype." + "desiredSize" + " can only be used on a TransformStreamDefaultController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledTransformStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledTransformStream");
        }
      }
    }
  },
  {
    key: "enqueue",
    value: function enqueue() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult12;
        }
        if (tmp3) {
          Kr(self, tmp);
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("TransformStreamDefaultController.prototype." + "enqueue" + " can only be used on a TransformStreamDefaultController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledTransformStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledTransformStream");
        }
      }
      tmp = arg0;
    }
  },
  {
    key: "error",
    value: function error() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let tmp3 = tmp2;
      if (!tmp3) {
        if (tmp3) {
          tmp3 = self instanceof _moduleResult12;
        }
        if (tmp3) {
          const _controlledTransformStream = self._controlledTransformStream;
          const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
          const _controlledReadableStream = _readableStreamController._controlledReadableStream;
          if ("readable" === _controlledReadableStream._state) {
            const tmp16 = new closure_15();
            _readableStreamController._queue = tmp16;
            _readableStreamController._queueTotalSize = 0;
            _readableStreamController._pullAlgorithm = undefined;
            _readableStreamController._cancelAlgorithm = undefined;
            _readableStreamController._strategySizeAlgorithm = undefined;
            jr(_controlledReadableStream, tmp);
          }
          Vr(_controlledTransformStream, tmp);
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("TransformStreamDefaultController.prototype." + "error" + " can only be used on a TransformStreamDefaultController");
          throw typeError;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledTransformStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledTransformStream");
        }
      }
    }
  },
  {
    key: "terminate",
    value: function terminate() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let tmp2 = tmp;
      if (!tmp2) {
        if (tmp2) {
          tmp2 = self instanceof _moduleResult12;
        }
        if (tmp2) {
          const _controlledTransformStream = self._controlledTransformStream;
          const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
          const _closeRequested = _readableStreamController._closeRequested;
          let tmp13 = !_closeRequested;
          if (!_closeRequested) {
            tmp13 = "readable" === tmp12;
          }
          if (tmp13) {
            _readableStreamController._closeRequested = true;
            if (0 === _readableStreamController._queue.length) {
              _readableStreamController._pullAlgorithm = undefined;
              _readableStreamController._cancelAlgorithm = undefined;
              _readableStreamController._strategySizeAlgorithm = undefined;
              Br(tmp14);
            }
          }
          const _TypeError2 = TypeError;
          const typeError = new TypeError("TransformStream terminated");
          Vr(_controlledTransformStream, typeError);
        } else {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError1 = new TypeError("TransformStreamDefaultController.prototype." + "terminate" + " can only be used on a TransformStreamDefaultController");
          throw typeError1;
        }
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("_controlledTransformStream");
        } else {
          hasOwnPropertyResult = call(self, "_controlledTransformStream");
        }
      }
    }
  }
];
_moduleResult12 = _createClass(TransformStreamDefaultController, items15);
Object.defineProperties(_moduleResult12.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } });
fn3(_moduleResult12.prototype.enqueue, "enqueue");
fn3(_moduleResult12.prototype.error, "error");
fn3(_moduleResult12.prototype.terminate, "terminate");
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      obj = {};
      str = global;
      if (!global) {
        str = "";
      }
      str2 = require;
      obj.message = str;
      if (!require) {
        str2 = "Error";
      }
      obj.name = str2;
      if (Error.captureStackTrace) {
        _Error = Error;
        captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
      }
      return;
    }
  }
  const _Symbol15 = Symbol;
  Object.defineProperty(_moduleResult12.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
}
const obj18 = { ReadableStream: _moduleResult8, ReadableStreamDefaultController: _moduleResult7, ReadableByteStreamController: _moduleResult2, ReadableStreamBYOBRequest: _moduleResult1, ReadableStreamDefaultReader: _moduleResult, ReadableStreamBYOBReader: _moduleResult3, WritableStream: _moduleResult4, WritableStreamDefaultController: _moduleResult6, WritableStreamDefaultWriter: _moduleResult5, ByteLengthQueuingStrategy: _moduleResult9, CountQueuingStrategy: _moduleResult10, TransformStream: _moduleResult11, TransformStreamDefaultController: _moduleResult12 };
for (const key10621 in obj18) {
  class e {
    constructor(arg0, arg1) {
      obj = {};
      str = arg0;
      if (!arg0) {
        str = "";
      }
      str2 = arg1;
      obj.message = str;
      if (!arg1) {
        str2 = "Error";
      }
      obj.name = str2;
      if (Error.captureStackTrace) {
        _Error = Error;
        captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
      }
      return;
    }
  }
  let _Object10 = Object;
  if (typeof Object.prototype.hasOwnProperty.call === "unknown") {
    class e {
      constructor(arg0, arg1) {
        obj = {};
        str = arg0;
        if (!arg0) {
          str = "";
        }
        str2 = arg1;
        obj.message = str;
        if (!arg1) {
          str2 = "Error";
        }
        obj.name = str2;
        if (Error.captureStackTrace) {
          _Error = Error;
          captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
        }
        return;
      }
    }
  } else {
    class e {
      constructor(arg0, arg1) {
        obj = {};
        str = arg0;
        if (!arg0) {
          str = "";
        }
        str2 = arg1;
        obj.message = str;
        if (!arg1) {
          str2 = "Error";
        }
        obj.name = str2;
        if (Error.captureStackTrace) {
          _Error = Error;
          captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
        }
        return;
      }
    }
  }
  if (!tmp78) {
    class e {
      constructor(arg0, arg1) {
        obj = {};
        str = arg0;
        if (!arg0) {
          str = "";
        }
        str2 = arg1;
        obj.message = str;
        if (!arg1) {
          str2 = "Error";
        }
        obj.name = str2;
        if (Error.captureStackTrace) {
          _Error = Error;
          captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
        }
        return;
      }
    }
  } else {
    class e {
      constructor(arg0, arg1) {
        obj = {};
        str = arg0;
        if (!arg0) {
          str = "";
        }
        str2 = arg1;
        obj.message = str;
        if (!arg1) {
          str2 = "Error";
        }
        obj.name = str2;
        if (Error.captureStackTrace) {
          _Error = Error;
          captureStackTraceResult = Error.captureStackTrace(obj, obj.constructor);
        }
        return;
      }
    }
    let obj19 = { value: obj18[key10621], writable: true, configurable: true };
    let definePropertyResult16 = Object.defineProperty(_self, key10621, obj19);
    continue;
  }
  continue;
}
const bindResult = resolve.bind(Promise);
let obj = {
  key: "length",
  get() {
    return this._size;
  }
};
let obj11 = {
  key: "desiredSize",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult7;
      }
      if (tmp2) {
        const _state = self._controlledReadableStream._state;
        let tmp12 = null;
        if ("errored" !== _state) {
          let num = 0;
          if ("closed" !== _state) {
            num = self._strategyHWM - self._queueTotalSize;
          }
          tmp12 = num;
        }
        return tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("ReadableStreamDefaultController.prototype." + "desiredSize" + " can only be used on a ReadableStreamDefaultController");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_controlledReadableStream");
      } else {
        hasOwnPropertyResult = call(self, "_controlledReadableStream");
      }
    }
  }
};
let obj12 = {
  key: "locked",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult8;
      }
      if (tmp2) {
        return undefined !== self._reader;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("ReadableStream.prototype." + "locked" + " can only be used on a ReadableStream");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_readableStreamController");
      } else {
        hasOwnPropertyResult = call(self, "_readableStreamController");
      }
    }
  }
};
const obj13 = { value: _moduleResult8.prototype.values, writable: true, configurable: true };
const obj14 = {
  key: "highWaterMark",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult9;
      }
      if (tmp2) {
        return self._byteLengthQueuingStrategyHighWaterMark;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("ByteLengthQueuingStrategy.prototype." + "highWaterMark" + " can only be used on a ByteLengthQueuingStrategy");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_byteLengthQueuingStrategyHighWaterMark");
      } else {
        hasOwnPropertyResult = call(self, "_byteLengthQueuingStrategyHighWaterMark");
      }
    }
  }
};
const obj15 = {
  key: "highWaterMark",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult10;
      }
      if (tmp2) {
        return self._countQueuingStrategyHighWaterMark;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("CountQueuingStrategy.prototype." + "highWaterMark" + " can only be used on a CountQueuingStrategy");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_countQueuingStrategyHighWaterMark");
      } else {
        hasOwnPropertyResult = call(self, "_countQueuingStrategyHighWaterMark");
      }
    }
  }
};
const obj16 = {
  key: "readable",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult11;
      }
      if (tmp2) {
        return self._readable;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("TransformStream.prototype." + "readable" + " can only be used on a TransformStream");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_transformStreamController");
      } else {
        hasOwnPropertyResult = call(self, "_transformStreamController");
      }
    }
  }
};
const obj17 = {
  key: "desiredSize",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult12;
      }
      if (tmp2) {
        const _readableStreamController = self._controlledTransformStream._readable._readableStreamController;
        const _state = _readableStreamController._controlledReadableStream._state;
        let tmp12 = null;
        if ("errored" !== _state) {
          let num = 0;
          if ("closed" !== _state) {
            num = _readableStreamController._strategyHWM - _readableStreamController._queueTotalSize;
          }
          tmp12 = num;
        }
        return tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("TransformStreamDefaultController.prototype." + "desiredSize" + " can only be used on a TransformStreamDefaultController");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_controlledTransformStream");
      } else {
        hasOwnPropertyResult = call(self, "_controlledTransformStream");
      }
    }
  }
};
let obj2 = {
  key: "closed",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof c29;
      }
      if (tmp2) {
        let _closedPromise = self._closedPromise;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("ReadableStreamDefaultReader.prototype." + "closed" + " can only be used on a ReadableStreamDefaultReader");
        _closedPromise = closure_5(typeError);
      }
      return _closedPromise;
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_readRequests");
      } else {
        hasOwnPropertyResult = call(self, "_readRequests");
      }
    }
  }
};
let obj4 = {
  key: "view",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult1;
      }
      if (tmp2) {
        return self._view;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("ReadableStreamBYOBRequest.prototype." + "view" + " can only be used on a ReadableStreamBYOBRequest");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_associatedReadableByteStreamController");
      } else {
        hasOwnPropertyResult = call(self, "_associatedReadableByteStreamController");
      }
    }
  }
};
let obj5 = {
  key: "byobRequest",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult2;
      }
      if (tmp2) {
        if (null === self._byobRequest) {
          if (self._pendingPullIntos.length > 0) {
            const _pendingPullIntos = self._pendingPullIntos;
            const peekResult = _pendingPullIntos.peek();
            const _Uint8Array = Uint8Array;
            const uint8Array = new Uint8Array(peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled, peekResult.byteLength - peekResult.bytesFilled);
            const _Object2 = Object;
            const obj = Object.create(_moduleResult1.prototype);
            obj._associatedReadableByteStreamController = self;
            obj._view = uint8Array;
            self._byobRequest = obj;
          }
        }
        return self._byobRequest;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("ReadableByteStreamController.prototype." + "byobRequest" + " can only be used on a ReadableByteStreamController");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_controlledReadableByteStream");
      } else {
        hasOwnPropertyResult = call(self, "_controlledReadableByteStream");
      }
    }
  }
};
let obj6 = {
  key: "closed",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult3;
      }
      if (tmp2) {
        let _closedPromise = self._closedPromise;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("ReadableStreamBYOBReader.prototype." + "closed" + " can only be used on a ReadableStreamBYOBReader");
        _closedPromise = closure_5(typeError);
      }
      return _closedPromise;
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_readIntoRequests");
      } else {
        hasOwnPropertyResult = call(self, "_readIntoRequests");
      }
    }
  }
};
let obj7 = {
  key: "locked",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult4;
      }
      if (tmp2) {
        return undefined !== self._writer;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("WritableStream.prototype." + "locked" + " can only be used on a WritableStream");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_writableStreamController");
      } else {
        hasOwnPropertyResult = call(self, "_writableStreamController");
      }
    }
  }
};
let obj8 = {
  key: "closed",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult5;
      }
      if (tmp2) {
        let _closedPromise = self._closedPromise;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("WritableStreamDefaultWriter.prototype." + "closed" + " can only be used on a WritableStreamDefaultWriter");
        _closedPromise = closure_5(typeError);
      }
      return _closedPromise;
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_ownerWritableStream");
      } else {
        hasOwnPropertyResult = call(self, "_ownerWritableStream");
      }
    }
  }
};
let obj9 = {
  key: "abortReason",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let tmp2 = tmp;
    if (!tmp2) {
      if (tmp2) {
        tmp2 = self instanceof _moduleResult6;
      }
      if (tmp2) {
        return self._abortReason;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("WritableStreamDefaultController.prototype." + "abortReason" + " can only be used on a WritableStreamDefaultController");
        throw typeError;
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty("_controlledWritableStream");
      } else {
        hasOwnPropertyResult = call(self, "_controlledWritableStream");
      }
    }
  }
};
let tmp8 = Math.trunc || ((endImportTime) => {
  if (endImportTime < 0) {
    const _Math2 = Math;
    let rounded = Math.ceil(endImportTime);
  } else {
    const _Math = Math;
    rounded = Math.floor(endImportTime);
  }
  return rounded;
});
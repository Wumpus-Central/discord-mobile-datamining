import { runWorkletOnJS } from "01613_runWorkletOnJS.js";
// _runtime/01654_createMapperRegistry.js
import isJest from "isJest";

isJest = isJest.isJest();
function createMapperRegistry() {
  function updateMappersOrder() {
    function dfs(arg0) {
      items.add(arg0);
      while (tmp2 !== undefined) {
        let tmp4 = map;
        let value = map.get(tmp3);
        if (value) {
          let tmp7 = tmp6;
          let tmp8 = value;
          for (const item10022 of value) {
            let tmp10 = items;
            let tmp9 = item10022;
            if (!items.has(item10022)) {
              let tmp11 = dfs;
              let tmp12 = item10022;
              let tmp13 = dfs(tmp9);
            }
            continue;
          }
        }
        continue;
      }
      items.push(arg0);
    }
    const map = new Map();
    const item = map.forEach((outputs) => {
      if (outputs.outputs) {
        outputs = outputs.outputs;
        for (const item10009 of outputs) {
          let obj = map;
          let tmp3 = item10009;
          let value = map.get(item10009);
          let arr = value;
          if (undefined === value) {
            let tmp7 = item10009;
            let items = [arg0];
            let result = obj.set(tmp3, items);
          } else {
            let tmp5 = value;
            arr = arr.push(arg0);
          }
          continue;
        }
      }
    });
    let items = new Set();
    items = [];
    const item1 = map.forEach((arg0) => {
      if (!items.has(arg0)) {
        dfs(arg0);
      }
    });
  }
  function mapperRun() {
    let c2 = false;
    if (!c3) {
      try {
        c3 = true;
        if (map.size !== lib.length) {
          updateMappersOrder();
        }
        for (const item10015 of closure_1) {
          let obj = item10015;
          if (item10015.dirty) {
            let tmp8 = item10015;
            obj.dirty = false;
            let workletResult = obj.worklet();
          }
          continue;
        }
        c3 = false;
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
  }
  function maybeRequestUpdates() {
    if (c3) {
      mapperRun();
    } else if (!c2) {
      if (c3) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(mapperRun);
      } else {
        const _queueMicrotask = queueMicrotask;
        queueMicrotask(mapperRun);
      }
      c2 = true;
    }
  }
  function extractInputs(iter, items) {
    if (Array.isArray(iter)) {
      iter = iter[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp14 = extractInputs;
          let tmp15 = nextResult;
          let tmp16 = extractInputs(tmp13, items);
        }
        continue;
      }
    } else {
      if (obj.isSharedValue(iter)) {
        items.push(iter);
      } else {
        const _Object = Object;
        const _Object2 = Object;
        if (Object.getPrototypeOf(iter) === Object.prototype) {
          const _Object3 = Object;
          const values = Object.values(iter);
          for (const item10021 of values) {
            if (item10021) {
              let tmp5 = extractInputs;
              let tmp6 = item10021;
              let tmp7 = extractInputs(tmp4, arg1);
            }
            continue;
          }
        }
      }
      obj = lib(table[1]);
    }
    return items;
  }
  const map = new Map();
  let closure_1 = [];
  let c2 = false;
  let c3 = false;
  return {
    start(id, worklet, iter) {
      const obj = { id, dirty: true, worklet, inputs: null, outputs: null };
      const items = [];
      extractInputs(iter, items);
      obj[3] = items;
      obj[4] = arg3;
      const result = obj.set(obj.id, obj);
      let closure_1 = [];
      for (const item10018 of tmp3) {
        let addListenerResult = item10018.addListener(obj.id, () => {
          obj.dirty = true;
          if (outer1_3) {
            outer1_5();
          } else if (!outer1_2) {
            if (outer1_3) {
              const _requestAnimationFrame = requestAnimationFrame;
              const animationFrame = requestAnimationFrame(outer1_5);
            } else {
              const _queueMicrotask = queueMicrotask;
              queueMicrotask(outer1_5);
            }
            outer1_2 = true;
          }
        });
        continue;
      }
      maybeRequestUpdates();
    },
    stop(arg0) {
      const value = map.get(arg0);
      if (value) {
        map.delete(value.id);
        let closure_1 = [];
        const inputs = value.inputs;
        for (const item10013 of inputs) {
          let removeListenerResult = item10013.removeListener(value.id);
          continue;
        }
      }
    }
  };
}
createMapperRegistry.__closure = { IS_JEST: isJest, isSharedValue: require("isSharedValue").isSharedValue };
createMapperRegistry.__workletHash = 4849129099287;
createMapperRegistry.__initData = { code: "function createMapperRegistry_Pnpm_mappersTs1(){const{IS_JEST,isSharedValue}=this.__closure;const mappers=new Map();let sortedMappers=[];let runRequested=false;let processingMappers=false;function updateMappersOrder(){const pre=new Map();mappers.forEach(function(mapper){if(mapper.outputs){for(const output of mapper.outputs){const preMappers=pre.get(output);if(preMappers===undefined){pre.set(output,[mapper]);}else{preMappers.push(mapper);}}}});const visited=new Set();const newOrder=[];function dfs(mapper){visited.add(mapper);for(const input of mapper.inputs){const preMappers=pre.get(input);if(preMappers){for(const preMapper of preMappers){if(!visited.has(preMapper)){dfs(preMapper);}}}}newOrder.push(mapper);}mappers.forEach(function(mapper){if(!visited.has(mapper)){dfs(mapper);}});sortedMappers=newOrder;}function mapperRun(){runRequested=false;if(processingMappers){return;}try{processingMappers=true;if(mappers.size!==sortedMappers.length){updateMappersOrder();}for(const mapper of sortedMappers){if(mapper.dirty){mapper.dirty=false;mapper.worklet();}}}finally{processingMappers=false;}}function maybeRequestUpdates(){if(IS_JEST){mapperRun();}else if(!runRequested){if(processingMappers){requestAnimationFrame(mapperRun);}else{queueMicrotask(mapperRun);}runRequested=true;}}function extractInputs(inputs,resultArray){if(Array.isArray(inputs)){for(const input of inputs){input&&extractInputs(input,resultArray);}}else if(isSharedValue(inputs)){resultArray.push(inputs);}else if(Object.getPrototypeOf(inputs)===Object.prototype){for(const element of Object.values(inputs)){element&&extractInputs(element,resultArray);}}return resultArray;}return{start:function(mapperID,worklet,inputs,outputs){const mapper={id:mapperID,dirty:true,worklet:worklet,inputs:extractInputs(inputs,[]),outputs:outputs};mappers.set(mapper.id,mapper);sortedMappers=[];for(const sv of mapper.inputs){sv.addListener(mapper.id,function(){mapper.dirty=true;maybeRequestUpdates();});}maybeRequestUpdates();},stop:function(mapperID){const mapper=mappers.get(mapperID);if(mapper){mappers.delete(mapper.id);sortedMappers=[];for(const sv of mapper.inputs){sv.removeListener(mapper.id);}}}};}" };
let c5 = 9999;
let closure_6 = { code: "function pnpm_mappersTs2(){const{createMapperRegistry,mapperID,worklet,inputs,outputs}=this.__closure;let mapperRegistry=global.__mapperRegistry;if(mapperRegistry===undefined){mapperRegistry=global.__mapperRegistry=createMapperRegistry();}mapperRegistry.start(mapperID,worklet,inputs,outputs);}" };
let closure_7 = { code: "function pnpm_mappersTs3(){const{mapperID}=this.__closure;const mapperRegistry=global.__mapperRegistry;mapperRegistry===null||mapperRegistry===void 0||mapperRegistry.stop(mapperID);}" };

export const startMapper = function startMapper(fn, arr2, items) {
  let closure_0 = fn;
  items = arr2;
  if (arr2 === undefined) {
    items = [];
  }
  let items1 = items;
  if (items === undefined) {
    items1 = [];
  }
  const sum = c5 + 1;
  c5 = sum;
  const isJest = sum;
  let obj = items(items1[2]);
  fn = function f() {
    __mapperRegistry = __mapperRegistry.__mapperRegistry;
    if (undefined === __mapperRegistry) {
      if (typeof outer1_4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      function updateMappersOrder() {
        function dfs(arg0) {
          items.add(arg0);
          while (tmp2 !== undefined) {
            let tmp4 = map;
            let value = map.get(tmp3);
            if (value) {
              let tmp7 = tmp6;
              let tmp8 = value;
              for (const item10022 of value) {
                let tmp10 = items;
                let tmp9 = item10022;
                if (!items.has(item10022)) {
                  let tmp11 = dfs;
                  let tmp12 = item10022;
                  let tmp13 = dfs(tmp9);
                }
                continue;
              }
            }
            continue;
          }
          items.push(arg0);
        }
        const map = new Map();
        const item = map.forEach((outputs) => {
          if (outputs.outputs) {
            outputs = outputs.outputs;
            for (const item10009 of outputs) {
              let obj = map;
              let tmp3 = item10009;
              let value = map.get(item10009);
              let arr = value;
              if (undefined === value) {
                let tmp7 = item10009;
                let items = [arg0];
                let result = obj.set(tmp3, items);
              } else {
                let tmp5 = value;
                arr = arr.push(arg0);
              }
              continue;
            }
          }
        });
        let items = new Set();
        items = [];
        const item1 = map.forEach((arg0) => {
          if (!items.has(arg0)) {
            dfs(arg0);
          }
        });
      }
      function mapperRun() {
        let c2 = false;
        if (!c3) {
          try {
            c3 = true;
            if (map.size !== lib.length) {
              updateMappersOrder();
            }
            for (const item10015 of closure_1) {
              let obj = item10015;
              if (item10015.dirty) {
                let tmp8 = item10015;
                obj.dirty = false;
                let workletResult = obj.worklet();
              }
              continue;
            }
            c3 = false;
          } catch (tmp10) {
            c3 = tmp;
            throw tmp10;
          }
        }
      }
      function maybeRequestUpdates() {
        if (c3) {
          mapperRun();
        } else if (!c2) {
          if (c3) {
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(mapperRun);
          } else {
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(mapperRun);
          }
          c2 = true;
        }
      }
      function extractInputs(iter, items) {
        if (Array.isArray(iter)) {
          iter = iter[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            if (nextResult) {
              let tmp14 = extractInputs;
              let tmp15 = nextResult;
              let tmp16 = extractInputs(tmp13, items);
            }
            continue;
          }
        } else {
          if (obj.isSharedValue(iter)) {
            items.push(iter);
          } else {
            const _Object = Object;
            const _Object2 = Object;
            if (Object.getPrototypeOf(iter) === Object.prototype) {
              const _Object3 = Object;
              const values = Object.values(iter);
              for (const item10021 of values) {
                if (item10021) {
                  let tmp5 = extractInputs;
                  let tmp6 = item10021;
                  let tmp7 = extractInputs(tmp4, arg1);
                }
                continue;
              }
            }
          }
          obj = lib(table[1]);
        }
        return items;
      }
      const _Map = Map;
      let map = new Map();
      let closure_1 = [];
      let c2 = false;
      let c3 = false;
      let obj = { start: null, stop: null };
      obj[0] = function start(id, worklet, iter) {
        const obj = { id, dirty: true, worklet, inputs: null, outputs: null };
        const items = [];
        extractInputs(iter, items);
        obj[3] = items;
        obj[4] = arg3;
        const result = obj.set(obj.id, obj);
        let closure_1 = [];
        for (const item10018 of tmp3) {
          let addListenerResult = item10018.addListener(obj.id, () => {
            obj.dirty = true;
            if (outer1_3) {
              outer1_5();
            } else if (!outer1_2) {
              if (outer1_3) {
                const _requestAnimationFrame = requestAnimationFrame;
                const animationFrame = requestAnimationFrame(outer1_5);
              } else {
                const _queueMicrotask = queueMicrotask;
                queueMicrotask(outer1_5);
              }
              outer1_2 = true;
            }
          });
          continue;
        }
        maybeRequestUpdates();
      };
      obj[1] = function stop(arg0) {
        const value = map.get(arg0);
        if (value) {
          map.delete(value.id);
          let closure_1 = [];
          const inputs = value.inputs;
          for (const item10013 of inputs) {
            let removeListenerResult = item10013.removeListener(value.id);
            continue;
          }
        }
      };
      tmp.__mapperRegistry = obj;
      __mapperRegistry = obj;
    }
    __mapperRegistry.start(c3, map, closure_1, c2);
  };
  obj = { createMapperRegistry, mapperID: sum, worklet: fn, inputs: items, outputs: items1 };
  fn.__closure = obj;
  fn.__workletHash = 1517453109481;
  fn.__initData = closure_6;
  obj.runOnUI(fn)();
  return sum;
};
export const stopMapper = function stopMapper(_inlinePropsMapperId) {
  let closure_0 = _inlinePropsMapperId;
  const fn = function t() {
    __mapperRegistry = __mapperRegistry.__mapperRegistry;
    if (__mapperRegistry != null) {
      __mapperRegistry.stop(__mapperRegistry);
    }
  };
  fn.__closure = { mapperID: _inlinePropsMapperId };
  fn.__workletHash = 1696829263429;
  fn.__initData = closure_7;
  runWorkletOnJS /* runWorkletOnJS */.runOnUI(fn)();
};
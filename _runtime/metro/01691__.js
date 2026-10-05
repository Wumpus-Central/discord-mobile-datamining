// === Module 1691: ? ===

// Module 1691
import setupMicrotasks from "setupMicrotasks" /* 1650 */;
import _mod1692 from "module_1692" /* 1692 */;
import module_1646_mod from "module_1646" /* 1646 */;

let map, set;

const updateMappersOrder2 = function updateMappersOrder() {
  function dfs(item) {
    set.add(item);
    const tmp2 = item.inputs[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let value = map.get(tmp3);
      if (value) {
        for (const item10022 of value) {
          if (!set.has(item10022)) {
            let tmp13 = dfs(item10022);
          }
          continue;
        }
      }
      continue;
    }
    items.push(item);
  }
  map = new Map();
  const item = map.forEach((outputs) => {
    if (outputs.outputs) {
      outputs = outputs.outputs;
      for (const item10009 of outputs) {
        let value = map.get(item10009);
        let arr = value;
        if (undefined === value) {
          items = [outputs];
          let result = map.set(item10009, items);
        } else {
          let arr2 = arr.push(outputs);
        }
        continue;
      }
    }
  });
  set = new Set();
  items = [];
  const item1 = map.forEach((item) => {
    if (!set.has(item)) {
      dfs(item);
    }
  });
  let closure_1 = items;
};
let module_1646 = module_1646_mod;
module_1646 = module_1646.isJest();
function createMapperRegistry() {
  const updateMappersOrder = updateMappersOrder2;
  function mapperRun() {
    c2 = false;
    const tmp = c3;
    if (!tmp) {
      try {
        c3 = true;
        if (map.size !== length.length) {
          updateMappersOrder();
        }
        for (const item10015 of length) {
          if (item10015.dirty) {
            item10015.dirty = false;
            let workletResult = item10015.worklet();
          }
          continue;
        }
        c3 = false;
      } catch (tmp10) {
        c3 = false;
        throw tmp10;
      }
    }
  }
  function maybeRequestUpdates() {
    if (closure_2_3) {
      mapperRun();
    } else {
      const tmp2 = c2;
      if (!tmp2) {
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
  }
  function extractInputs(iter, items) {
    if (Array.isArray(iter)) {
      iter = iter[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp16 = extractInputs(tmp13, items);
        }
        continue;
      }
    } else {
      const obj = items(items1[1]);
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
              let tmp7 = extractInputs(tmp4, items);
            }
            continue;
          }
        }
      }
    }
    return items;
  }
  new Map();
  let closure_1 = [];
  let c2 = false;
  let c3 = false;
  return {
    start(id, worklet, iter, outputs) {
      const obj = { id, dirty: true, worklet, inputs: items, outputs };
      items = [];
      extractInputs(iter, items);
      const result = obj.set(obj.id, obj);
      let closure_1 = [];
      const inputs = obj.inputs;
      for (const item10018 of inputs) {
        let addListenerResult = item10018.addListener(obj.id, () => {
          obj.dirty = true;
          if (closure_1_3) {
            mapperRun();
          } else {
            const tmp2 = c2;
            if (!tmp2) {
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
let obj = { IS_JEST: module_1646, isSharedValue: _mod1692.isSharedValue };
createMapperRegistry.__closure = obj;
createMapperRegistry.__workletHash = 4849129099287;
createMapperRegistry.__initData = { code: "function createMapperRegistry_Pnpm_mappersTs1(){const{IS_JEST,isSharedValue}=this.__closure;const mappers=new Map();let sortedMappers=[];let runRequested=false;let processingMappers=false;function updateMappersOrder(){const pre=new Map();mappers.forEach(function(mapper){if(mapper.outputs){for(const output of mapper.outputs){const preMappers=pre.get(output);if(preMappers===undefined){pre.set(output,[mapper]);}else{preMappers.push(mapper);}}}});const visited=new Set();const newOrder=[];function dfs(mapper){visited.add(mapper);for(const input of mapper.inputs){const preMappers=pre.get(input);if(preMappers){for(const preMapper of preMappers){if(!visited.has(preMapper)){dfs(preMapper);}}}}newOrder.push(mapper);}mappers.forEach(function(mapper){if(!visited.has(mapper)){dfs(mapper);}});sortedMappers=newOrder;}function mapperRun(){runRequested=false;if(processingMappers){return;}try{processingMappers=true;if(mappers.size!==sortedMappers.length){updateMappersOrder();}for(const mapper of sortedMappers){if(mapper.dirty){mapper.dirty=false;mapper.worklet();}}}finally{processingMappers=false;}}function maybeRequestUpdates(){if(IS_JEST){mapperRun();}else if(!runRequested){if(processingMappers){requestAnimationFrame(mapperRun);}else{queueMicrotask(mapperRun);}runRequested=true;}}function extractInputs(inputs,resultArray){if(Array.isArray(inputs)){for(const input of inputs){input&&extractInputs(input,resultArray);}}else if(isSharedValue(inputs)){resultArray.push(inputs);}else if(Object.getPrototypeOf(inputs)===Object.prototype){for(const element of Object.values(inputs)){element&&extractInputs(element,resultArray);}}return resultArray;}return{start:function(mapperID,worklet,inputs,outputs){const mapper={id:mapperID,dirty:true,worklet:worklet,inputs:extractInputs(inputs,[]),outputs:outputs};mappers.set(mapper.id,mapper);sortedMappers=[];for(const sv of mapper.inputs){sv.addListener(mapper.id,function(){mapper.dirty=true;maybeRequestUpdates();});}maybeRequestUpdates();},stop:function(mapperID){const mapper=mappers.get(mapperID);if(mapper){mappers.delete(mapper.id);sortedMappers=[];for(const sv of mapper.inputs){sv.removeListener(mapper.id);}}}};}" };
let c5 = 9999;
const __initData = { code: "function pnpm_mappersTs2(){const{createMapperRegistry,mapperID,worklet,inputs,outputs}=this.__closure;let mapperRegistry=global.__mapperRegistry;if(mapperRegistry===undefined){mapperRegistry=global.__mapperRegistry=createMapperRegistry();}mapperRegistry.start(mapperID,worklet,inputs,outputs);}" };
const __initData2 = { code: "function pnpm_mappersTs3(){const{mapperID}=this.__closure;const mapperRegistry=global.__mapperRegistry;mapperRegistry===null||mapperRegistry===void 0||mapperRegistry.stop(mapperID);}" };

export const startMapper = function startMapper(fn) {
  let items = values2;
  if (values2 === undefined) {
    items = [];
  }
  let items1 = items;
  if (items === undefined) {
    items1 = [];
  }
  const sum = c5 + 1;
  c5 = sum;
  module_1646 = sum;
  let obj = items(items1[2]);
  const worklet = function f() {
    let tmp;
    let __mapperRegistry = global.__mapperRegistry;
    if (undefined === __mapperRegistry) {
      if (typeof createMapperRegistry === "function") {
        const updateMappersOrder = updateMappersOrder2;
        function mapperRun() {
          c2 = false;
          const tmp = c3;
          if (!tmp) {
            try {
              c3 = true;
              if (map.size !== length.length) {
                updateMappersOrder();
              }
              for (const item10015 of length) {
                if (item10015.dirty) {
                  item10015.dirty = false;
                  let workletResult = item10015.worklet();
                }
                continue;
              }
              c3 = false;
            } catch (tmp10) {
              c3 = false;
              throw tmp10;
            }
          }
        }
        function maybeRequestUpdates() {
          if (closure_2_3) {
            mapperRun();
          } else {
            const tmp2 = c2;
            if (!tmp2) {
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
        }
        function extractInputs(iter, items) {
          if (Array.isArray(iter)) {
            iter = iter[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              if (nextResult) {
                let tmp16 = extractInputs(tmp13, items);
              }
              continue;
            }
          } else {
            const obj = items(items1[1]);
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
                    let tmp7 = extractInputs(tmp4, items);
                  }
                  continue;
                }
              }
            }
          }
          return items;
        }
        let tmp2 = globalThis;
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        const tmp4 = map;
        let closure_1 = [];
        let c2 = false;
        let c3 = false;
        let obj = {
          start(id, worklet, iter, outputs) {
                const obj = { id, dirty: true, worklet, inputs: items, outputs };
                items = [];
                extractInputs(iter, items);
                const result = obj.set(obj.id, obj);
                let closure_1 = [];
                const inputs = obj.inputs;
                for (const item10018 of inputs) {
                  let addListenerResult = item10018.addListener(obj.id, () => {
                    obj.dirty = true;
                    if (closure_1_3) {
                      mapperRun();
                    } else {
                      const tmp2 = c2;
                      if (!tmp2) {
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
        tmp.__mapperRegistry = obj;
        __mapperRegistry = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    __mapperRegistry.start(module_1646, worklet, items, items1);
  };
  const obj2 = { createMapperRegistry, mapperID: sum, worklet, inputs: items, outputs: items1 };
  worklet.__closure = obj2;
  worklet.__workletHash = 1517453109481;
  worklet.__initData = __initData;
  let tmp2 = obj.runOnUI(worklet)();
  return sum;
};
export const stopMapper = function stopMapper(_inlinePropsMapperId) {
  let closure_0 = _inlinePropsMapperId;
  const fn = function t() {
    const __mapperRegistry = global.__mapperRegistry;
    if (__mapperRegistry != null) {
      __mapperRegistry.stop(_inlinePropsMapperId);
    }
  };
  fn.__closure = { mapperID: _inlinePropsMapperId };
  fn.__workletHash = 1696829263429;
  fn.__initData = __initData2;
  const obj = setupMicrotasks;
  obj.runOnUI(fn)();
};
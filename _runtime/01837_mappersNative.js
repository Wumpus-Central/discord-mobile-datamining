// _runtime/01837_mappersNative.js
import _mod1708 from "metro/01708__.js";
import _mod1772 from "metro/01772__.js";

const require = globalThis.__r;

let items = [
  {
    code: "(function createMapperRegistry_Pnpm_mappersNativeTs1(){let[isSharedValue]=this.__closure;const mappers=new Map();let sortedMappers=[];let processingMappers=false;function updateMappersOrder(){const pre=new Map();mappers.forEach(function(mapper){if(mapper.outputs){for(const output of mapper.outputs){const preMappers=pre.get(output);if(preMappers===undefined){pre.set(output,[mapper]);}else{preMappers.push(mapper);}}}});const visited=new Set();const newOrder=[];function dfs(mapper){visited.add(mapper);for(const input of mapper.inputs){const preMappers=pre.get(input);if(preMappers){for(const preMapper of preMappers){if(!visited.has(preMapper)){dfs(preMapper);}}}}newOrder.push(mapper);}mappers.forEach(function(mapper){if(!visited.has(mapper)){dfs(mapper);}});sortedMappers=newOrder;}let mapperRunFinalizers=[];global.__requestMapperRunFinalizer=function(finalizer){mapperRunFinalizers.push(finalizer);};let isAnyMapperDirty=false;function mapperRun(){if(processingMappers){return;}try{processingMappers=true;if(mappers.size!==sortedMappers.length){updateMappersOrder();}if(isAnyMapperDirty){isAnyMapperDirty=false;for(const mapper of sortedMappers){if(mapper.dirty){mapper.dirty=false;mapper.worklet();}}}}finally{processingMappers=false;const finalizers=mapperRunFinalizers;mapperRunFinalizers=[];for(const finalizer of finalizers){finalizer();}}}const schedulingFunction=globalThis.requestAnimationFrameFinalizer;function scheduledMapperRun(){mapperRun();schedulingFunction(scheduledMapperRun);}schedulingFunction(scheduledMapperRun);global.__mapperRun=mapperRun;function extractInputs(inputs,resultArray){if(Array.isArray(inputs)){for(const input of inputs){if(input){extractInputs(input,resultArray);}}}else if(isSharedValue(inputs)){resultArray.push(inputs);}else if(Object.getPrototypeOf(inputs)===Object.prototype){for(const element of Object.values(inputs)){if(element){extractInputs(element,resultArray);}}}return resultArray;}return{start:function(mapperID,worklet,inputs,outputs){const mapper={id:mapperID,dirty:true,worklet:worklet,inputs:extractInputs(inputs,[]),outputs:outputs};mappers.set(mapper.id,mapper);sortedMappers=[];isAnyMapperDirty=true;for(const sv of mapper.inputs){sv.addListener(mapper.id,function(){mapper.dirty=true;isAnyMapperDirty=true;});}},stop:function(mapperID){const mapper=mappers.get(mapperID);if(mapper){mappers.delete(mapper.id);sortedMappers=[];isAnyMapperDirty=true;for(const sv of mapper.inputs){sv.removeListener(mapper.id);}}}};})",
  },
  _mod1772.isSharedValue,
];
let c0;
[tmp2, tmp3] = items;
function createMapperRegistry() {
  function updateMappersOrder() {
    function dfs(item) {
      set.add(item);
      while (tmp2 !== undefined) {
        value = map.get(tmp3);
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
      tmp2 = item.inputs[Symbol.iterator]();
    }
    map = new Map();
    const item = map.forEach((outputs) => {
      if (outputs.outputs) {
        outputs = outputs.outputs;
        for (const item10009 of outputs) {
          value = map.get(item10009);
          let arr = value;
          if (undefined === value) {
            items = [arg0];
            let result = map.set(item10009, items);
          } else {
            let arr2 = arr.push(arg0);
          }
          continue;
        }
      }
    });
    const set = new Set();
    items = [];
    const item1 = map.forEach((item) => {
      if (!set.has(item)) {
        dfs(item);
      }
    });
    closure_1 = items;
  }
  function mapperRun() {
    if (!c2) {
      try {
        c2 = true;
        if (map.size !== length.length) {
          updateMappersOrder();
        }
        if (c5) {
          c5 = false;
          for (const item10017 of closure_1) {
            if (item10017.dirty) {
              item10017.dirty = false;
              let workletResult = item10017.worklet();
            }
            continue;
          }
        }
        c2 = false;
        closure_4 = [];
        for (const item10031 of closure_4) {
          let item10031Result = item10031();
          continue;
        }
      } catch (tmp14) {
        c2 = false;
        closure_4 = [];
        for (const item10042 of closure_4) {
          let item10042Result = item10042();
          continue;
        }
        throw tmp14;
      }
    }
  }
  function extractInputs(arg0, items) {
    if (Array.isArray(arg0)) {
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp17 = extractInputs(tmp14, items);
        }
        continue;
      }
    } else if (map(arg0)) {
      items.push(arg0);
    } else {
      const _Object = Object;
      const _Object2 = Object;
      if (Object.getPrototypeOf(arg0) === Object.prototype) {
        const _Object3 = Object;
        const values = Object.values(arg0);
        const iter2 = values[Symbol.iterator]();
        const nextResult1 = iter2.next();
        while (iter2 !== undefined) {
          if (nextResult1) {
            let tmp8 = extractInputs(tmp5, items);
          }
          continue;
        }
      }
    }
    return items;
  }
  let map = new Map();
  c2 = false;
  closure_4 = [];
  c0.__requestMapperRunFinalizer = (arg0) => {
    closure_4.push(arg0);
  };
  c5 = false;
  function scheduledMapperRun() {
    mapperRun();
    requestAnimationFrameFinalizer(scheduledMapperRun);
  }
  const animationFrameFinalizer = requestAnimationFrameFinalizer(scheduledMapperRun);
  c0.__mapperRun = mapperRun;
  return {
    start(id, worklet, arg2, outputs) {
      const obj = { id, dirty: true, worklet, inputs: null, outputs: null };
      items = [];
      extractInputs(arg2, items);
      obj.inputs = items;
      obj.outputs = outputs;
      const result = obj.set(obj.id, obj);
      closure_1 = [];
      c5 = true;
      for (const item10020 of tmp3) {
        let addListenerResult = item10020.addListener(obj.id, () => {
          obj.dirty = true;
          c5 = true;
        });
        continue;
      }
    },
    stop(arg0) {
      value = map.get(arg0);
      if (value) {
        map.delete(value.id);
        closure_1 = [];
        c5 = true;
        const inputs = value.inputs;
        for (const item10014 of inputs) {
          let removeListenerResult = item10014.removeListener(value.id);
          continue;
        }
      }
    },
  };
}
let items1 = [tmp3];
createMapperRegistry.__closure = items1;
createMapperRegistry.__workletHash = 9099712030889;
createMapperRegistry.__initData = tmp2;
let c4 = 9999;
let closure_5 = {
  code: "(function pnpm_mappersNativeTs2(){let[createMapperRegistry,mapperID,worklet,inputs,outputs]=this.__closure;let mapperRegistry=global.__mapperRegistry;if(mapperRegistry===undefined){mapperRegistry=global.__mapperRegistry=createMapperRegistry();}mapperRegistry.start(mapperID,worklet,inputs,outputs);})",
};
let closure_6 = {
  code: "(function pnpm_mappersNativeTs3(){let[mapperID]=this.__closure;const mapperRegistry=global.__mapperRegistry;mapperRegistry===null||mapperRegistry===void 0||mapperRegistry.stop(mapperID);})",
};

export function startMapper(pnpm_InlinePropManagerTs2) {
  items = __closure;
  if (__closure === undefined) {
    items = [];
  }
  let items1 = items2;
  if (items2 === undefined) {
    items1 = [];
  }
  const sum = c4 + 1;
  items2 = [closure_5, c3, sum, pnpm_InlinePropManagerTs2, items, items1];
  c0 = undefined;
  _require = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items2;
  function pnpm_mappersNativeTs2() {
    let __mapperRegistry = _undefined.__mapperRegistry;
    if (undefined === __mapperRegistry) {
      const tmp3 = _undefined();
      tmp.__mapperRegistry = tmp3;
      __mapperRegistry = tmp3;
    }
    __mapperRegistry.start(c1, c2, c3, c4);
  }
  const items3 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  pnpm_mappersNativeTs2.__closure = items3;
  pnpm_mappersNativeTs2.__workletHash = 4992448497009;
  pnpm_mappersNativeTs2.__initData = tmp2;
  require("metro/01708__.js").scheduleOnUI(pnpm_mappersNativeTs2);
  return sum;
}
export function stopMapper(_inlinePropsMapperId) {
  items = [closure_6, _inlinePropsMapperId];
  c0 = undefined;
  [tmp, tmp2] = items;
  function pnpm_mappersNativeTs3() {
    const __mapperRegistry = _undefined.__mapperRegistry;
    if (__mapperRegistry != null) {
      __mapperRegistry.stop(_undefined);
    }
  }
  const items1 = [tmp2];
  pnpm_mappersNativeTs3.__closure = items1;
  pnpm_mappersNativeTs3.__workletHash = 1973126588125;
  pnpm_mappersNativeTs3.__initData = tmp;
  _mod1708.scheduleOnUI(pnpm_mappersNativeTs3);
}

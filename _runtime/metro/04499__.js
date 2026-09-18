// === Module 4499: ? ===

// Module 4499
import ArtboardByIndex from "ArtboardByIndex" /* 4488 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useMemo: c2, useRef: c3 } = noop);

export const useViewModelInstance = function useViewModelInstance(arg0, instanceName) {
  _require = arg0;
  instanceName = undefined;
  if (instanceName != null) {
    instanceName = instanceName.instanceName;
  }
  if (instanceName != null) {
    const name = instanceName.name;
  }
  if (instanceName == null) {
    instanceName = name;
  }
  let artboardName;
  if (instanceName != null) {
    artboardName = instanceName.artboardName;
  }
  let viewModelName;
  if (instanceName != null) {
    viewModelName = instanceName.viewModelName;
  }
  let flag;
  if (instanceName != null) {
    flag = instanceName.useNew;
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (instanceName != null) {
    flag2 = instanceName.required;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let onInit;
  if (instanceName != null) {
    onInit = instanceName.onInit;
  }
  const tmp5 = viewModelName(onInit);
  tmp5.current = onInit;
  const items = [arg0, instanceName, artboardName, viewModelName, flag];
  const disposableMemo = require("module_4492").useDisposableMemo(() => {
    if (closure_0) {
      let tmp6 = null != closure_0;
      if (tmp6) {
        tmp6 = "getViewModelInstance" in closure_0;
      }
      if (tmp6) {
        let viewModelInstance = closure_0.getViewModelInstance();
        if (viewModelInstance == null) {
          viewModelInstance = null;
        }
        const obj2 = { instance: viewModelInstance, needsDispose: false };
        let obj11 = obj2;
      } else {
        let tmp7 = null != closure_0;
        if (tmp7) {
          tmp7 = "defaultArtboardViewModel" in closure_0;
        }
        if (tmp7) {
          if (viewModelName) {
            let viewModelByNameResult = closure_0.viewModelByName(viewModelName);
            if (!viewModelByNameResult) {
              const obj3 = { instance: null, needsDispose: false, error: null };
              const _HermesInternal3 = HermesInternal;
              obj3.error = "ViewModel '" + viewModelName + "' not found";
              obj11 = obj3;
            }
          } else {
            let ArtboardByNameResult;
            if (artboardName) {
              ArtboardByNameResult = ArtboardByIndex.ArtboardByName(artboardName);
            }
            viewModelByNameResult = closure_0.defaultArtboardViewModel(ArtboardByNameResult);
            if (!viewModelByNameResult) {
              if (artboardName) {
                const obj4 = { instance: null, needsDispose: false, error: null };
                const _HermesInternal2 = HermesInternal;
                obj4.error = "Artboard '" + artboardName + "' not found or has no ViewModel";
                let obj6 = obj4;
              } else {
                obj6 = { instance: null, needsDispose: false };
              }
              obj11 = obj6;
            }
          }
          if (instanceName) {
            let instanceByName = viewModelByNameResult.createInstanceByName(instanceName);
          } else {
            instanceByName = viewModelByNameResult.createDefaultInstance();
          }
          if (!instanceByName) {
            if (instanceName) {
              let obj7 = { instance: null, needsDispose: false, error: null };
              const _HermesInternal4 = HermesInternal;
              obj7.error = "ViewModel instance '" + instanceName + "' not found";
            }
            obj11 = obj7;
          }
          if (instanceByName == null) {
            instanceByName = null;
          }
          const obj8 = { instance: instanceByName, needsDispose: true };
          obj7 = obj8;
        } else {
          if (instanceName) {
            let instanceByName1 = closure_0.createInstanceByName(instanceName);
            if (!instanceByName1) {
              const obj9 = { instance: null, needsDispose: false, error: null };
              const _HermesInternal = HermesInternal;
              obj9.error = "ViewModel instance '" + instanceName + "' not found";
              obj11 = obj9;
            }
          } else if (tmp4) {
            instanceByName1 = closure_0.createInstance();
          } else {
            instanceByName1 = closure_0.createDefaultInstance();
          }
          if (instanceByName1 == null) {
            instanceByName1 = null;
          }
          const obj10 = { instance: instanceByName1, needsDispose: true };
          obj11 = obj10;
        }
      }
    } else {
      obj11 = { instance: "PX_16", needsDispose: true };
    }
    let current = obj11.instance;
    if (current) {
      current = ref.current;
    }
    if (current) {
      ref.current(obj11.instance);
    }
    return obj11;
  }, (needsDispose) => {
    if (tmp) {
      closure_0(instanceName[3]).callDispose(needsDispose.instance);
      const obj = closure_0(instanceName[3]);
    }
    tmp = needsDispose.needsDispose && needsDispose.instance;
  }, items);
  const items1 = [disposableMemo.error];
  let obj = require("module_4492");
  if (flag2) {
    if (null === disposableMemo.instance) {
      let str = "useViewModelInstance: Failed to get ViewModelInstance. Ensure the source has a valid ViewModel and instance available.";
      if (disposableMemo.error) {
        let _HermesInternal = HermesInternal;
        str = "useViewModelInstance: " + disposableMemo.error;
      }
      let error = new Error(str);
      throw error;
    }
  }
  const instance = disposableMemo.instance;
  if (disposableMemo.instance) {
    let obj2 = { instance, error: null };
    let obj3 = obj2;
  } else if (undefined === instance) {
    obj3 = { instance: "Array", error: 0 };
  } else {
    obj3 = { instance: null, error: tmp7 };
  }
  return obj3;
};
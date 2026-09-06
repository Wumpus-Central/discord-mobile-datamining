// === Module 4337: ? ===

// Module 4337
import ArtboardByIndex from "ArtboardByIndex" /* 4326 */;
import noop from "module_19" /* 19 */;

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
  let obj = require("module_4330");
  const items = [arg0, instanceName, artboardName, viewModelName, flag];
  const disposableMemo = obj.useDisposableMemo(() => {
    let obj = closure_0;
    if (closure_0) {
      let tmp6 = null != obj;
      if (tmp6) {
        tmp6 = "getViewModelInstance" in obj;
      }
      if (tmp6) {
        let viewModelInstance = obj.getViewModelInstance();
        if (viewModelInstance == null) {
          viewModelInstance = null;
        }
        obj = { instance: viewModelInstance, needsDispose: false };
        let obj7 = obj;
      } else {
        let tmp7 = null != obj;
        if (tmp7) {
          tmp7 = "defaultArtboardViewModel" in obj;
        }
        if (tmp7) {
          if (viewModelName) {
            let viewModelByNameResult = obj.viewModelByName(viewModelName);
            if (!viewModelByNameResult) {
              obj = { instance: null, needsDispose: false, error: null };
              const _HermesInternal3 = HermesInternal;
              obj.error = "ViewModel '" + viewModelName + "' not found";
              obj7 = obj;
            }
          } else {
            let ArtboardByNameResult;
            if (artboardName) {
              let obj4 = ArtboardByIndex;
              ArtboardByNameResult = obj4.ArtboardByName(artboardName);
            }
            viewModelByNameResult = obj.defaultArtboardViewModel(ArtboardByNameResult);
            if (!viewModelByNameResult) {
              if (artboardName) {
                const obj1 = { instance: null, needsDispose: false, error: null };
                const _HermesInternal2 = HermesInternal;
                obj1.error = "Artboard '" + artboardName + "' not found or has no ViewModel";
                let obj2 = obj1;
              } else {
                obj2 = { instance: null, needsDispose: false };
              }
              obj7 = obj2;
            }
          }
          if (instanceName) {
            let instanceByName = viewModelByNameResult.createInstanceByName(instanceName);
          } else {
            instanceByName = viewModelByNameResult.createDefaultInstance();
          }
          if (!instanceByName) {
            if (instanceName) {
              let obj3 = { instance: null, needsDispose: false, error: null };
              const _HermesInternal4 = HermesInternal;
              obj3.error = "ViewModel instance '" + instanceName + "' not found";
            }
            obj7 = obj3;
          }
          if (instanceByName == null) {
            instanceByName = null;
          }
          obj4 = { instance: instanceByName, needsDispose: true };
          obj3 = obj4;
        } else {
          if (instanceName) {
            let instanceByName1 = obj.createInstanceByName(instanceName);
            if (!instanceByName1) {
              const obj5 = { instance: null, needsDispose: false, error: null };
              const _HermesInternal = HermesInternal;
              obj5.error = "ViewModel instance '" + instanceName + "' not found";
              obj7 = obj5;
            }
          } else if (tmp4) {
            instanceByName1 = obj.createInstance();
          } else {
            instanceByName1 = obj.createDefaultInstance();
          }
          if (instanceByName1 == null) {
            instanceByName1 = null;
          }
          const obj6 = { instance: instanceByName1, needsDispose: true };
          obj7 = obj6;
        }
      }
    } else {
      obj7 = { instance: "PX_16", needsDispose: true };
    }
    let current = obj7.instance;
    if (current) {
      current = ref.current;
    }
    if (current) {
      ref.current(obj7.instance);
    }
    return obj7;
  }, (needsDispose) => {
    if (tmp) {
      closure_0(instanceName[3]).callDispose(needsDispose.instance);
      const obj = closure_0(instanceName[3]);
    }
    tmp = needsDispose.needsDispose && needsDispose.instance;
  }, items);
  const items1 = [disposableMemo.error];
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
    obj = { instance, error: null };
  } else if (undefined === instance) {
    obj = { instance: "Array", error: 0 };
  } else {
    obj = { instance: null, error: tmp7 };
  }
  return obj;
};
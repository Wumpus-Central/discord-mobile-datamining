// === Module 4156: useViewModelInstance ===

// Module 4156 (useViewModelInstance)
import noop from "noop" /* 19 */;

({ useMemo: obj1, useRef: c3 } = noop);

export const useViewModelInstance = function useViewModelInstance(arg0, instanceName) {
  const _require = arg0;
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
  closure_5 = tmp5;
  tmp5.current = onInit;
  let obj = _require(instanceName[2]);
  const items = [arg0, instanceName, artboardName, viewModelName, flag];
  const disposableMemo = obj.useDisposableMemo(() => {
    let obj = callback;
    if (callback) {
      let tmp6 = null != obj;
      if (tmp6) {
        tmp6 = "getViewModelInstance" in obj;
      }
      if (tmp6) {
        let viewModelInstance = obj.getViewModelInstance();
        if (viewModelInstance == null) {
          viewModelInstance = null;
        }
        obj = { instance: null, needsDispose: false };
        obj[0] = viewModelInstance;
        let obj7 = obj;
      } else {
        let tmp7 = null != obj;
        if (tmp7) {
          tmp7 = "defaultArtboardViewModel" in obj;
        }
        if (tmp7) {
          if (tmp3) {
            let viewModelByNameResult = obj.viewModelByName(tmp3);
            if (!viewModelByNameResult) {
              obj = { instance: null, needsDispose: false, error: null };
              const _HermesInternal3 = HermesInternal;
              obj[2] = "ViewModel '" + tmp3 + "' not found";
              obj7 = obj;
            }
          } else {
            let ArtboardByNameResult;
            if (tmp2) {
              let obj4 = callback(instanceName[1]);
              ArtboardByNameResult = obj4.ArtboardByName(tmp2);
            }
            viewModelByNameResult = obj.defaultArtboardViewModel(ArtboardByNameResult);
            if (!viewModelByNameResult) {
              if (tmp2) {
                obj1 = { instance: null, needsDispose: false, error: null };
                const _HermesInternal2 = HermesInternal;
                obj1[2] = "Artboard '" + tmp2 + "' not found or has no ViewModel";
                let obj2 = obj1;
              } else {
                obj2 = { instance: null, needsDispose: false };
              }
              obj7 = obj2;
            }
          }
          if (tmp) {
            let instanceByName = viewModelByNameResult.createInstanceByName(tmp);
          } else {
            instanceByName = viewModelByNameResult.createDefaultInstance();
          }
          if (!instanceByName) {
            if (tmp) {
              let obj3 = { instance: null, needsDispose: false, error: null };
              const _HermesInternal4 = HermesInternal;
              obj3[2] = "ViewModel instance '" + tmp + "' not found";
            }
            obj7 = obj3;
          }
          if (instanceByName == null) {
            instanceByName = null;
          }
          obj4 = { instance: null, needsDispose: true };
          obj4[0] = instanceByName;
          obj3 = obj4;
        } else {
          if (tmp) {
            let instanceByName1 = obj.createInstanceByName(tmp);
            if (!instanceByName1) {
              const obj5 = { instance: null, needsDispose: false, error: null };
              const _HermesInternal = HermesInternal;
              obj5[2] = "ViewModel instance '" + tmp + "' not found";
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
          const obj6 = { instance: null, needsDispose: true };
          obj6[0] = instanceByName1;
          obj7 = obj6;
        }
      }
    } else {
      obj7 = { instance: "ct", needsDispose: true };
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
      callback(instanceName[3]).callDispose(needsDispose.instance);
      const obj = callback(instanceName[3]);
    }
  }, items);
  const items1 = [disposableMemo.error];
  if (flag2) {
    if (null === disposableMemo.instance) {
      let str = "useViewModelInstance: Failed to get ViewModelInstance. Ensure the source has a valid ViewModel and instance available.";
      if (disposableMemo.error) {
        let _HermesInternal = HermesInternal;
        str = "useViewModelInstance: " + disposableMemo.error;
      }
      error = new Error(str);
      throw error;
    }
  }
  const instance = disposableMemo.instance;
  if (disposableMemo.instance) {
    obj = { instance: null, error: null };
    obj[0] = instance;
  } else if (undefined === instance) {
    obj = { instance: "Array", error: 0 };
  } else {
    obj = { instance: null, error: null };
    obj[1] = tmp7;
  }
  return obj;
};
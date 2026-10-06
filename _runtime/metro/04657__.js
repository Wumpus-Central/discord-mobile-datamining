// _runtime/metro/04657__.js
import ArtboardByIndex from "../04646_ArtboardByIndex.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ useMemo: c2, useRef: c3 } = react);

export const useViewModelInstance = function useViewModelInstance(arg0, instanceName) {
  let closure_0;
  let name;
  let obj3;
  _require = arg0;
  instanceName = undefined;
  if (instanceName != null) {
    instanceName = instanceName.instanceName;
  }
  if (instanceName != null) {
    name = instanceName.name;
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
  const ref = tmp5;
  tmp5.current = onInit;
  let obj = require("react");
  const items = [arg0, instanceName, artboardName, viewModelName, flag];
  const disposableMemo = obj.useDisposableMemo(
    () => {
      let obj11;
      if (closure_0) {
        const tmp6 = null != closure_0 && "getViewModelInstance" in closure_0;
        if (tmp6) {
          let viewModelInstance = closure_0.getViewModelInstance();
          if (viewModelInstance == null) {
            viewModelInstance = null;
          }
          obj11 = { instance: viewModelInstance, needsDispose: false };
          const obj2 = { instance: viewModelInstance, needsDispose: false };
        } else {
          const tmp7 = null != closure_0 && "defaultArtboardViewModel" in closure_0;
          if (tmp7) {
            let viewModelByNameResult;
            let instanceByName;
            if (viewModelName) {
              viewModelByNameResult = closure_0.viewModelByName(viewModelName);
              if (!viewModelByNameResult) {
                const _HermesInternal3 = HermesInternal;
                obj11 = { instance: null, needsDispose: false, error: "ViewModel '" + viewModelName + "' not found" };
                const obj3 = {
                  instance: null,
                  needsDispose: false,
                  error: "ViewModel '" + viewModelName + "' not found",
                };
              }
            } else {
              let ArtboardByNameResult;
              const defaultArtboardViewModel = closure_0.defaultArtboardViewModel;
              if (artboardName) {
                const obj5 = ArtboardByIndex;
                ArtboardByNameResult = obj5.ArtboardByName(artboardName);
              }
              viewModelByNameResult = defaultArtboardViewModel(ArtboardByNameResult);
              if (!viewModelByNameResult) {
                let obj6;
                if (artboardName) {
                  const _HermesInternal2 = HermesInternal;
                  obj6 = {
                    instance: null,
                    needsDispose: false,
                    error: "Artboard '" + artboardName + "' not found or has no ViewModel",
                  };
                  const obj4 = {
                    instance: null,
                    needsDispose: false,
                    error: "Artboard '" + artboardName + "' not found or has no ViewModel",
                  };
                } else {
                  obj6 = { instance: null, needsDispose: false };
                }
                obj11 = obj6;
              }
            }
            if (instanceName) {
              instanceByName = viewModelByNameResult.createInstanceByName(instanceName);
            } else {
              instanceByName = viewModelByNameResult.createDefaultInstance();
            }
            if (!instanceByName) {
              let obj7;
              if (instanceName) {
                obj7 = {
                  instance: null,
                  needsDispose: false,
                  error: "ViewModel instance '" + instanceName + "' not found",
                };
                const _HermesInternal4 = HermesInternal;
              }
              obj11 = obj7;
            }
            if (instanceByName == null) {
              instanceByName = null;
            }
            obj7 = { instance: instanceByName, needsDispose: true };
            const obj8 = { instance: instanceByName, needsDispose: true };
          } else {
            let instanceByName1;
            if (instanceName) {
              instanceByName1 = closure_0.createInstanceByName(instanceName);
              if (!instanceByName1) {
                const _HermesInternal = HermesInternal;
                obj11 = {
                  instance: null,
                  needsDispose: false,
                  error: "ViewModel instance '" + instanceName + "' not found",
                };
                const obj9 = {
                  instance: null,
                  needsDispose: false,
                  error: "ViewModel instance '" + instanceName + "' not found",
                };
              }
            } else if (tmp4) {
              instanceByName1 = closure_0.createInstance();
            } else {
              instanceByName1 = closure_0.createDefaultInstance();
            }
            if (instanceByName1 == null) {
              instanceByName1 = null;
            }
            obj11 = { instance: instanceByName1, needsDispose: true };
            const obj10 = { instance: instanceByName1, needsDispose: true };
          }
        }
      } else {
        obj11 = { instance: "Reflect", needsDispose: true };
      }
      const current = obj11.instance && ref.current;
      if (current) {
        ref.current(obj11.instance);
      }
      return obj11;
    },
    (needsDispose) => {
      const tmp = needsDispose.needsDispose && needsDispose.instance;
      if (tmp) {
        const obj = closure_0(instanceName[3]);
        obj.callDispose(needsDispose.instance);
      }
    },
    items,
  );
  const items1 = [disposableMemo.error];
  let tmp7 = artboardName(function () {
    let error = null;
    if (disposableMemo.error) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      error = new Error(tmp.error);
    }
    return error;
  }, items1);
  if (flag2) {
    if (null === disposableMemo.instance) {
      let str =
        "useViewModelInstance: Failed to get ViewModelInstance. Ensure the source has a valid ViewModel and instance available.";
      let _Error = Error;
      if (disposableMemo.error) {
        let _HermesInternal = HermesInternal;
        str = "useViewModelInstance: " + disposableMemo.error;
      }
      let self = this;
      let self2 = this;
      const _Error1 = new _Error(str);
      throw _Error1;
    }
  }
  const instance = disposableMemo.instance;
  if (instance) {
    let obj2 = { instance, error: null };
    obj3 = obj2;
  } else if (undefined === instance) {
    obj3 = { instance: "Array", error: 0 };
  } else {
    obj3 = { instance: null, error: tmp7 };
  }
  return obj3;
};

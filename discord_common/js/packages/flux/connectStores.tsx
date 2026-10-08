// discord_common/js/packages/flux/connectStores.tsx
import BatchedStoreListener from "BatchedStoreListener.tsx";
import c from "../../../../_runtime/00576_c.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["ref"];
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/connectStores.tsx");

export default function connectStores(items, arg1, arg2) {
  if (null != arg2) {
    if (arg2.forwardRef) {
      closure_129_0 = items;
      closure_129_1 = arg1;
      let fn = (displayName) => {
        items = displayName;
        let str = displayName.displayName;
        if (str == null) {
          str = displayName.name;
        }
        if (str == null) {
          str = "<Unknown>";
        }
        const combined = "FluxContainer(" + str + ")";
        const Component = noop.Component;
        class FluxContainer extends Component {
          constructor() {
            applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
            closure_0 = applyArgumentsResult;
            closure_0 = closure_1;
            memoizedFunction = function memoizedFunction(arg0) {
              if (null != c1) {
                if (null != c2) {
                  if (combined(FluxContainer[4])(c1, arg0)) {
                    let tmp5 = c2;
                  }
                  if (null == tmp5) {
                    c1 = arg0;
                    const tmp11 = closure_0(arg0);
                    c2 = tmp11;
                    tmp5 = tmp11;
                  }
                  return tmp5;
                }
              }
              tmp5 = null;
              if (null != c1) {
                tmp5 = null;
                if (null != c2) {
                  tmp5 = null;
                  if (combined(FluxContainer[4])(c1, arg0)) {
                    c1 = arg0;
                    tmp5 = c2;
                  }
                }
              }
            };
            c1 = null;
            c2 = null;
            memoizedFunction.getCachedResult = function getCachedResult(childProps) {
              if (null != c1) {
                if (null != c2) {
                  if (combined(FluxContainer[4])(c1, childProps)) {
                    let tmp5 = c2;
                  }
                  return tmp5;
                }
              }
              tmp5 = null;
              if (null != c1) {
                tmp5 = null;
                if (null != c2) {
                  tmp5 = null;
                  if (combined(FluxContainer[4])(c1, childProps)) {
                    c1 = childProps;
                    tmp5 = c2;
                  }
                }
              }
            };
            memoizedFunction.clear = () => {
              c1 = null;
              c2 = null;
            };
            applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
            batchedStoreListener = new closure_0(closure_2[3]).BatchedStoreListener(closure_0, () => {
              const memoizedGetStateFromStores = closure_0.memoizedGetStateFromStores;
              const cachedResult = memoizedGetStateFromStores.getCachedResult(closure_0.props.childProps);
              let tmp6Result = null != cachedResult;
              if (tmp6Result) {
                const memoizedGetStateFromStores2 = closure_0.memoizedGetStateFromStores;
                memoizedGetStateFromStores2.clear();
                tmp6Result = combined(FluxContainer[4])(
                  closure_0.memoizedGetStateFromStores(closure_0.props.childProps),
                  cachedResult,
                );
                const tmp6 = combined(FluxContainer[4]);
              }
              if (!tmp6Result) {
                closure_0.forceUpdate();
              }
            });
            applyArgumentsResult.listener = batchedStoreListener;
            return applyArgumentsResult;
          }
        }
        const prototype = FluxContainer.prototype;
        prototype["componentDidMount"] = function componentDidMount() {
          const listener = this.listener;
          listener.attach(combined);
        };
        prototype["componentWillUnmount"] = function componentWillUnmount() {
          const listener = this.listener;
          listener.detach();
          const memoizedGetStateFromStores = this.memoizedGetStateFromStores;
          memoizedGetStateFromStores.clear();
        };
        prototype["render"] = function render() {
          ({ childProps, forwardedConnectStoresRef } = this.props);
          const result = this.memoizedGetStateFromStores(childProps);
          const merged = Object.assign(childProps);
          const merged1 = Object.assign(result);
          return <closure_0 ref={forwardedConnectStoresRef} />;
        };
        FluxContainer.displayName = combined;
        let tmp2 = items(558).isReactCompilerEnabled()
          ? function ForwardRef(ref) {
              const cResult = c.c(6);
              if (cResult[0] !== ref) {
                const tmp6 = _objectWithoutProperties(ref.ref, closure_3);
                cResult[0] = ref.ref;
                cResult[1] = tmp6;
                cResult[2] = ref.ref;
                let tmp3 = ref;
                let tmp2 = tmp6;
              } else {
                tmp2 = cResult[1];
                tmp3 = cResult[2];
              }
              if (cResult[3] === tmp2) {
                if (cResult[4] === tmp3) {
                  let tmp7 = cResult[5];
                }
                return tmp7;
              }
              const tmp8 = <FluxContainer childProps={tmp2} forwardedConnectStoresRef={tmp3} />;
              cResult[3] = tmp2;
              cResult[4] = tmp3;
              cResult[5] = tmp8;
              tmp7 = tmp8;
            }
          : function ForwardRef(forwardedConnectStoresRef) {
              return (
                <FluxContainer
                  childProps={Object.assign(forwardedConnectStoresRef, Object.assign({ ref: 0 }))}
                  forwardedConnectStoresRef={forwardedConnectStoresRef.ref}
                />
              );
            };
        tmp2.displayName = "ForwardRef(" + combined + ")";
        return tmp2;
      };
    }
    return fn;
  }
  closure_1 = arg1;
  fn = (displayName) => {
    items = displayName;
    let str = displayName.displayName;
    if (str == null) {
      str = displayName.name;
    }
    if (str == null) {
      str = "<Unknown>";
    }
    const combined = "FluxContainer(" + str + ")";
    const Component = noop.Component;
    class FluxContainer extends Component {
      constructor() {
        applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
        closure_0 = applyArgumentsResult;
        closure_0 = closure_1;
        memoizedFunction = function memoizedFunction(arg0) {
          if (null != c1) {
            if (null != c2) {
              if (combined(FluxContainer[4])(c1, arg0)) {
                let tmp5 = c2;
              }
              if (null == tmp5) {
                c1 = arg0;
                const tmp11 = closure_0(arg0);
                c2 = tmp11;
                tmp5 = tmp11;
              }
              return tmp5;
            }
          }
          tmp5 = null;
          if (null != c1) {
            tmp5 = null;
            if (null != c2) {
              tmp5 = null;
              if (combined(FluxContainer[4])(c1, arg0)) {
                c1 = arg0;
                tmp5 = c2;
              }
            }
          }
        };
        c1 = null;
        c2 = null;
        memoizedFunction.getCachedResult = function getCachedResult(childProps) {
          if (null != c1) {
            if (null != c2) {
              if (combined(FluxContainer[4])(c1, childProps)) {
                let tmp5 = c2;
              }
              return tmp5;
            }
          }
          tmp5 = null;
          if (null != c1) {
            tmp5 = null;
            if (null != c2) {
              tmp5 = null;
              if (combined(FluxContainer[4])(c1, childProps)) {
                c1 = childProps;
                tmp5 = c2;
              }
            }
          }
        };
        memoizedFunction.clear = () => {
          c1 = null;
          c2 = null;
        };
        applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
        batchedStoreListener = new closure_0(closure_2[3]).BatchedStoreListener(closure_0, () => {
          const memoizedGetStateFromStores = closure_0.memoizedGetStateFromStores;
          const cachedResult = memoizedGetStateFromStores.getCachedResult(closure_0.props);
          let tmp6Result = null != cachedResult;
          if (tmp6Result) {
            const memoizedGetStateFromStores2 = closure_0.memoizedGetStateFromStores;
            memoizedGetStateFromStores2.clear();
            tmp6Result = combined(FluxContainer[4])(
              closure_0.memoizedGetStateFromStores(closure_0.props),
              cachedResult,
            );
            const tmp6 = combined(FluxContainer[4]);
          }
          if (!tmp6Result) {
            closure_0.forceUpdate();
          }
        });
        applyArgumentsResult.listener = batchedStoreListener;
        return applyArgumentsResult;
      }
    }
    const prototype = FluxContainer.prototype;
    prototype["componentDidMount"] = function componentDidMount() {
      const listener = this.listener;
      listener.attach(combined);
    };
    prototype["componentWillUnmount"] = function componentWillUnmount() {
      const listener = this.listener;
      listener.detach();
      const memoizedGetStateFromStores = this.memoizedGetStateFromStores;
      memoizedGetStateFromStores.clear();
    };
    prototype["render"] = function render() {
      const result = this.memoizedGetStateFromStores(this.props);
      const merged = Object.assign(this.props);
      const merged1 = Object.assign(result);
      return <closure_0 />;
    };
    FluxContainer.displayName = combined;
    return FluxContainer;
  };
}

// _runtime/metro/01881__.js

export function getViewInfo(findHostInstanceResult) {
  let uiViewClassName;
  if (findHostInstanceResult != null) {
    const __viewConfig = findHostInstanceResult.__viewConfig;
    if (__viewConfig != null) {
      uiViewClassName = __viewConfig.uiViewClassName;
    }
  }
  if (uiViewClassName == null) {
    let uiViewClassName1;
    if (findHostInstanceResult != null) {
      const _viewConfig = findHostInstanceResult._viewConfig;
      if (_viewConfig != null) {
        uiViewClassName1 = _viewConfig.uiViewClassName;
      }
    }
    uiViewClassName = uiViewClassName1;
  }
  if (uiViewClassName == null) {
    let type;
    if (findHostInstanceResult != null) {
      const __internalInstanceHandle = findHostInstanceResult.__internalInstanceHandle;
      if (__internalInstanceHandle != null) {
        type = __internalInstanceHandle.type;
      }
    }
    uiViewClassName = type;
  }
  if (uiViewClassName == null) {
    let elementType;
    if (findHostInstanceResult != null) {
      const __internalInstanceHandle2 = findHostInstanceResult.__internalInstanceHandle;
      if (__internalInstanceHandle2 != null) {
        elementType = __internalInstanceHandle2.elementType;
      }
    }
    uiViewClassName = elementType;
  }
  const obj = { reactViewName: uiViewClassName, viewTag: null };
  let __nativeTag;
  if (findHostInstanceResult != null) {
    __nativeTag = findHostInstanceResult.__nativeTag;
  }
  obj.viewTag = __nativeTag;
  return obj;
}
export function getViewTagFromInstance(_childInstance) {
  if (_childInstance) {
    if (typeof _childInstance.getComponentViewTag === "function") {
      const componentViewTag = _childInstance.getComponentViewTag();
      if (-1 !== componentViewTag) {
        return componentViewTag;
      }
    }
    let uiViewClassName;
    if (_childInstance != null) {
      const __viewConfig = _childInstance.__viewConfig;
      if (__viewConfig != null) {
        uiViewClassName = __viewConfig.uiViewClassName;
      }
    }
    if (uiViewClassName == null) {
      let uiViewClassName1;
      if (_childInstance != null) {
        const _viewConfig = _childInstance._viewConfig;
        if (_viewConfig != null) {
          uiViewClassName1 = _viewConfig.uiViewClassName;
        }
      }
      uiViewClassName = uiViewClassName1;
    }
    if (uiViewClassName == null) {
      let type;
      if (_childInstance != null) {
        const __internalInstanceHandle = _childInstance.__internalInstanceHandle;
        if (__internalInstanceHandle != null) {
          type = __internalInstanceHandle.type;
        }
      }
      uiViewClassName = type;
    }
    if (uiViewClassName == null) {
      if (_childInstance != null) {
        const __internalInstanceHandle2 = _childInstance.__internalInstanceHandle;
        if (__internalInstanceHandle2 != null) {
          const elementType = __internalInstanceHandle2.elementType;
        }
      }
    }
    let __nativeTag;
    if (_childInstance != null) {
      __nativeTag = _childInstance.__nativeTag;
    }
    if (undefined !== __nativeTag) {
      return __nativeTag;
    } else {
      const getNativeScrollRef = _childInstance.getNativeScrollRef;
      let nativeScrollRef;
      if (getNativeScrollRef != null) {
        nativeScrollRef = getNativeScrollRef();
      }
      if (nativeScrollRef) {
        let uiViewClassName2;
        if (nativeScrollRef != null) {
          const __viewConfig3 = nativeScrollRef.__viewConfig;
          if (__viewConfig3 != null) {
            uiViewClassName2 = __viewConfig3.uiViewClassName;
          }
        }
        if (uiViewClassName2 == null) {
          let uiViewClassName3;
          if (nativeScrollRef != null) {
            const _viewConfig3 = nativeScrollRef._viewConfig;
            if (_viewConfig3 != null) {
              uiViewClassName3 = _viewConfig3.uiViewClassName;
            }
          }
          uiViewClassName2 = uiViewClassName3;
        }
        if (uiViewClassName2 == null) {
          let type1;
          if (nativeScrollRef != null) {
            const __internalInstanceHandle5 = nativeScrollRef.__internalInstanceHandle;
            if (__internalInstanceHandle5 != null) {
              type1 = __internalInstanceHandle5.type;
            }
          }
          uiViewClassName2 = type1;
        }
        if (uiViewClassName2 == null) {
          if (nativeScrollRef != null) {
            const __internalInstanceHandle6 = nativeScrollRef.__internalInstanceHandle;
            if (__internalInstanceHandle6 != null) {
              const elementType3 = __internalInstanceHandle6.elementType;
            }
          }
        }
        let __nativeTag1;
        if (nativeScrollRef != null) {
          __nativeTag1 = nativeScrollRef.__nativeTag;
        }
        if (__nativeTag1 == null) {
          __nativeTag1 = null;
        }
        return __nativeTag1;
      } else {
        const getScrollableNode = _childInstance.getScrollableNode;
        let scrollableNode;
        if (getScrollableNode != null) {
          scrollableNode = getScrollableNode();
        }
        let tmp9 = scrollableNode;
        if (typeof scrollableNode !== "number") {
          let tmp14 = null;
          if (scrollableNode) {
            let uiViewClassName4;
            if (scrollableNode != null) {
              const __viewConfig2 = scrollableNode.__viewConfig;
              if (__viewConfig2 != null) {
                uiViewClassName4 = __viewConfig2.uiViewClassName;
              }
            }
            if (uiViewClassName4 == null) {
              let uiViewClassName5;
              if (scrollableNode != null) {
                const _viewConfig2 = scrollableNode._viewConfig;
                if (_viewConfig2 != null) {
                  uiViewClassName5 = _viewConfig2.uiViewClassName;
                }
              }
              uiViewClassName4 = uiViewClassName5;
            }
            if (uiViewClassName4 == null) {
              let type2;
              if (scrollableNode != null) {
                const __internalInstanceHandle3 = scrollableNode.__internalInstanceHandle;
                if (__internalInstanceHandle3 != null) {
                  type2 = __internalInstanceHandle3.type;
                }
              }
              uiViewClassName4 = type2;
            }
            if (uiViewClassName4 == null) {
              if (scrollableNode != null) {
                const __internalInstanceHandle4 = scrollableNode.__internalInstanceHandle;
                if (__internalInstanceHandle4 != null) {
                  const elementType2 = __internalInstanceHandle4.elementType;
                }
              }
            }
            let __nativeTag2;
            if (scrollableNode != null) {
              __nativeTag2 = scrollableNode.__nativeTag;
            }
            if (__nativeTag2 == null) {
              __nativeTag2 = null;
            }
            tmp14 = __nativeTag2;
          }
          tmp9 = tmp14;
        }
        return tmp9;
      }
    }
  } else {
    return null;
  }
}

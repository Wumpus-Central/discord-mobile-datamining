// _runtime/metro/01756__.js

export const getViewInfo = function getViewInfo(findHostInstanceResult) {
  let __nativeTag;
  let _nativeTag;
  let _nativeTag1;
  let obj;
  let viewConfig1;
  let viewConfig3;
  if (undefined !== findHostInstanceResult._nativeTag) {
    if (null !== findHostInstanceResult.__nativeTag) {
      let uiViewClassName;
      if (findHostInstanceResult != null) {
        const viewConfig2 = findHostInstanceResult.viewConfig;
        if (viewConfig2 != null) {
          uiViewClassName = viewConfig2.uiViewClassName;
        }
      }
      const obj2 = { viewName: uiViewClassName, viewTag: _nativeTag, viewConfig: viewConfig1 };
      _nativeTag = undefined;
      if (findHostInstanceResult != null) {
        _nativeTag = findHostInstanceResult._nativeTag;
      }
      viewConfig1 = undefined;
      if (findHostInstanceResult != null) {
        viewConfig1 = findHostInstanceResult.viewConfig;
      }
      obj = obj2;
    }
    return obj;
  }
  if (undefined !== findHostInstanceResult.__nativeTag) {
    if (null !== findHostInstanceResult.__nativeTag) {
      let __viewConfig;
      if (findHostInstanceResult != null) {
        __viewConfig = findHostInstanceResult.__viewConfig;
      }
      if (__viewConfig == null) {
        let _viewConfig;
        if (findHostInstanceResult != null) {
          _viewConfig = findHostInstanceResult._viewConfig;
        }
        __viewConfig = _viewConfig;
      }
      let uiViewClassName1;
      if (__viewConfig != null) {
        uiViewClassName1 = __viewConfig.uiViewClassName;
      }
      const obj3 = { viewName: uiViewClassName1, viewTag: __nativeTag, viewConfig: __viewConfig };
      __nativeTag = undefined;
      if (findHostInstanceResult != null) {
        __nativeTag = findHostInstanceResult.__nativeTag;
      }
      obj = obj3;
    }
  }
  let uiViewClassName2;
  if (findHostInstanceResult != null) {
    const viewConfig = findHostInstanceResult.viewConfig;
    if (viewConfig != null) {
      uiViewClassName2 = viewConfig.uiViewClassName;
    }
  }
  obj = { viewName: uiViewClassName2, viewTag: _nativeTag1, viewConfig: viewConfig3 };
  _nativeTag1 = undefined;
  if (findHostInstanceResult != null) {
    _nativeTag1 = findHostInstanceResult._nativeTag;
  }
  viewConfig3 = undefined;
  if (findHostInstanceResult != null) {
    viewConfig3 = findHostInstanceResult.viewConfig;
  }
};

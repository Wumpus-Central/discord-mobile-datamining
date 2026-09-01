// _runtime/01766_getViewInfo.js
arg5.getViewInfo = function getViewInfo(findHostInstanceResult) {
  if (undefined !== findHostInstanceResult._nativeTag) {
    if (null !== findHostInstanceResult.__nativeTag) {
      let uiViewClassName;
      if (findHostInstanceResult != null) {
        const viewConfig2 = findHostInstanceResult.viewConfig;
        if (viewConfig2 != null) {
          uiViewClassName = viewConfig2.uiViewClassName;
        }
      }
      let obj = { viewName: null, viewTag: null, viewConfig: null };
      obj[0] = uiViewClassName;
      let _nativeTag;
      if (findHostInstanceResult != null) {
        _nativeTag = findHostInstanceResult._nativeTag;
      }
      obj[1] = _nativeTag;
      let viewConfig;
      if (findHostInstanceResult != null) {
        viewConfig = findHostInstanceResult.viewConfig;
      }
      obj[2] = viewConfig;
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
      obj = { viewName: null, viewTag: null, viewConfig: null };
      obj[0] = uiViewClassName1;
      let __nativeTag;
      if (findHostInstanceResult != null) {
        __nativeTag = findHostInstanceResult.__nativeTag;
      }
      obj[1] = __nativeTag;
      obj[2] = __viewConfig;
    }
  }
  let uiViewClassName2;
  if (findHostInstanceResult != null) {
    viewConfig = findHostInstanceResult.viewConfig;
    if (viewConfig != null) {
      uiViewClassName2 = viewConfig.uiViewClassName;
    }
  }
  obj = { viewName: uiViewClassName2, viewTag: null, viewConfig: null };
  let _nativeTag1;
  if (findHostInstanceResult != null) {
    _nativeTag1 = findHostInstanceResult._nativeTag;
  }
  obj[1] = _nativeTag1;
  let viewConfig1;
  if (findHostInstanceResult != null) {
    viewConfig1 = findHostInstanceResult.viewConfig;
  }
  obj[2] = viewConfig1;
};

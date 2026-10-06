// === Module 15069: FastAssetImage ===

// Module 15069 (FastAssetImage)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import StoreUtils from "StoreUtils" /* 5329 */;
import FastImageDefault from "FastImage" /* 5981 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let applicationId;

let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let asset;
  let closure_129_0;
  let first;
  let style;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(10);
  ({ asset, style } = applicationId);
  applicationId = applicationId.applicationId;
  [tmp5, closure_129_0] = react.useState();
  _slicedToArray(react.useState(), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(nativeEvent) {
      closure_1_0(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let application_id;
  if (asset != null) {
    application_id = asset.application_id;
  }
  if (application_id == null) {
    application_id = applicationId;
  }
  if (cResult[1] === application_id) {
    if (cResult[2] === asset) {
      let tmp8;
      let tmp9;
      if (cResult[3] === tmp5) {
        tmp8 = cResult[4];
      }
      if (cResult[5] !== tmp8) {
        const obj2 = { uri: tmp8 };
        cResult[5] = tmp8;
        cResult[6] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[6];
      }
      if (cResult[7] === tmp9) {
        let tmp10;
        if (cResult[8] === style) {
          tmp10 = cResult[9];
        }
        return tmp10;
      }
      const tmp13 = jsx(FastImageDefault, { style, onLayout: first, source: tmp9 });
      cResult[7] = tmp9;
      cResult[8] = style;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
  }
  let str = "";
  if (null != asset) {
    str = "";
    if (null != application_id) {
      str = "";
      if (null != tmp5) {
        const tmpResult = StoreUtils;
        str = tmpResult.getAssetURL(application_id, asset, tmp5);
      }
    }
  }
  cResult[1] = application_id;
  cResult[2] = asset;
  cResult[3] = tmp5;
  cResult[4] = str;
  tmp8 = str;
}) : ((applicationId) => {
  let closure_3;
  let first;
  let tmp3;
  applicationId = applicationId.applicationId;
  const asset = applicationId.asset;
  first = undefined;
  const style = applicationId.style;
  [first, tmp3] = react.useState();
  _slicedToArray = tmp3;
  const items = [tmp3];
  const items1 = [applicationId, asset, first];
  const onLayout = react.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.layout.width);
  }, items);
  const source = react.useMemo(() => {
    let application_id;
    if (asset != null) {
      application_id = asset.application_id;
    }
    if (application_id == null) {
      application_id = applicationId;
    }
    let uri = "";
    if (null != asset) {
      uri = "";
      if (null != application_id) {
        uri = "";
        if (null != first) {
          const obj = StoreUtils;
          uri = obj.getAssetURL(application_id, asset, tmp3);
        }
      }
    }
    return { uri };
  }, items1);
  return jsx(asset(first[6]), { style, onLayout, source });
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FastAssetImage.tsx");

export default tmp2;
// === Module 15050: FastAssetImage ===

// Module 15050 (FastAssetImage)
import c from "c" /* 576 */;
import StoreUtils from "StoreUtils" /* 5322 */;
import FastImageDefault from "FastImage" /* 5974 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FastAssetImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = c.c(10);
  ({ asset, style } = applicationId);
  [tmp5, require] = noop.useState();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let application_id;
  if (asset != null) {
    application_id = asset.application_id;
  }
  if (application_id == null) {
    application_id = applicationId.applicationId;
  }
  if (cResult[1] === application_id) {
    if (cResult[2] === asset) {
      if (cResult[3] === tmp5) {
        let tmp8 = cResult[4];
      }
      if (cResult[5] !== tmp8) {
        const obj2 = { uri: tmp8 };
        cResult[5] = tmp8;
        cResult[6] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[6];
      }
      if (cResult[7] === tmp9) {
        if (cResult[8] === style) {
          let tmp10 = cResult[9];
        }
        return tmp10;
      }
      const obj3 = { style, onLayout: first, source: tmp9 };
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
        str = StoreUtils.getAssetURL(application_id, asset, tmp5);
        const tmpResult = StoreUtils;
      }
    }
  }
  cResult[1] = application_id;
  cResult[2] = asset;
  cResult[3] = tmp5;
  cResult[4] = str;
  tmp8 = str;
  const tmp4 = _slicedToArray(noop.useState(), 2);
}) : ((style) => {
  const applicationId = style.applicationId;
  const asset = style.asset;
  _slicedToArray = undefined;
  const tmp = _slicedToArray(noop.useState(), 2);
  const first = tmp[0];
  _slicedToArray = tmp3;
  const items = [tmp[1]];
  const items1 = [applicationId, asset, first];
  const onLayout = noop.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.layout.width);
  }, items);
  const source = noop.useMemo(() => {
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
          uri = StoreUtils.getAssetURL(application_id, asset, tmp3);
        }
      }
    }
    return { uri };
  }, items1);
  return jsx(asset(first[6]), { style: style.style, onLayout, source });
});
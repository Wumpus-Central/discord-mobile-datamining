// === Module 15236: FastAssetImage ===

// Module 15236 (FastAssetImage)
import StoreUtils from "StoreUtils" /* 4802 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FastAssetImage.tsx");

export default function FastAssetImage(style) {
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
      application_id = tmp.application_id;
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
          uri = StoreUtils.getAssetURL(application_id, tmp, tmp3);
        }
      }
    }
    return { uri };
  }, items1);
  return jsx(asset(first[4]), { style: style.style, onLayout, source });
};
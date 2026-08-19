// === Module 14582: FastAssetImage ===

// Module 14582 (FastAssetImage)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FastAssetImage.tsx");

export default function FastAssetImage(style) {
  const applicationId = style.applicationId;
  const asset = style.asset;
  let callback;
  const tmp = callback(React.useState(), 2);
  const first = tmp[0];
  callback = tmp3;
  const items = [tmp[1]];
  const items1 = [applicationId, asset, first];
  const onLayout = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, items);
  const source = React.useMemo(() => {
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
          uri = applicationId(first[3]).getAssetURL(application_id, asset, tmp3);
          const obj = applicationId(first[3]);
        }
      }
    }
    return { uri };
  }, items1);
  return jsx(asset(first[4]), { style: style.style, onLayout, source });
};
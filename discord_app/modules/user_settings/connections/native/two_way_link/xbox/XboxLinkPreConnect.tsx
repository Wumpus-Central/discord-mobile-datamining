// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx
import closure_3 from "../../../../../../../_runtime/00019_noop.js";
import { XboxLinkModalScenes } from "XboxLinkConstants.tsx";
import { PlatformTypes } from "../../../../../../Constants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ image: { width: 231, height: 160 } });
const result = require("set").fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx",
);

export default function XboxLinkPreConnect() {
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(closure_1_4.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(closure_1_4.ERROR);
  }, items1);
  const memo = React.useMemo(() => ({ uri: callback(table[6]) }), []);
  obj = {
    platformType: PlatformTypes.XBOX,
    onError: callback1,
    onNext: callback,
    img: memo,
    imgStyle: callback().image,
    title: null,
    body: null,
  };
  const intl = navigation(1233).intl;
  obj[5] = intl.string(navigation(1233).t["e/z3na"]);
  const intl2 = navigation(1233).intl;
  obj[6] = intl2.string(navigation(1233).t["7tXu0i"]);
  return jsx(navigation(9327).TwoWayLinkPreConnect, {
    platformType: PlatformTypes.XBOX,
    onError: callback1,
    onNext: callback,
    img: memo,
    imgStyle: callback().image,
    title: null,
    body: null,
  });
}

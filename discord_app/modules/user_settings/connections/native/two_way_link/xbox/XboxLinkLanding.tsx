// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx
import combinedDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import closure_3 from "../../../../../../../_runtime/00019_noop.js";
import { XboxLinkModalScenes } from "XboxLinkConstants.tsx";
import ME from "../../../../../../Constants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ HelpdeskArticles: c5, PlatformTypes: closure_6 } = ME);
let closure_8 = createCacheKey.createStyles({ image: { width: 230, height: 160 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default function XboxLinkLanding() {
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const tmp = callback();
  const articleURL = combinedDefault.getArticleURL(constants.XBOX_CONNECTION);
  let intl = navigation(1236).intl;
  const obj2 = combinedDefault;
  let items = [navigation];
  const memo = React.useMemo(() => {
    let obj = { label: null, icon: null };
    const intl = navigation(1236).intl;
    obj[0] = intl.string(navigation(1236).t.ihQXsb);
    obj[1] = navigation(6896).VoiceNormalIcon;
    const items = [obj, , , ];
    obj = { label: null, icon: null };
    const intl2 = navigation(1236).intl;
    obj[0] = intl2.string(navigation(1236).t.Xt1n4P);
    obj[1] = navigation(7982).ScreenStreamIcon;
    items[1] = obj;
    obj = { label: null, icon: null };
    const intl3 = navigation(1236).intl;
    obj[0] = intl3.string(navigation(1236).t.xqVY3p);
    obj[1] = navigation(6884).GroupIcon;
    items[2] = obj;
    obj1 = { label: null, icon: null };
    const intl4 = navigation(1236).intl;
    obj1[0] = intl4.string(navigation(1236).t.iQsKVW);
    obj1[1] = navigation(9430).GameControllerIcon;
    items[3] = obj1;
    return items;
  }, []);
  callback = React.useCallback(() => {
    navigation.push(closure_1_4.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: callback(9754) }), []);
  obj = { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1236).intl;
  obj[3] = intl2.string(navigation(1236).t.m8aahn);
  let intl3 = navigation(1236).intl;
  obj[4] = intl3.string(navigation(1236).t.z3rAhq);
  obj[5] = intl.format(navigation(1236).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  obj[6] = callback;
  obj[7] = memo;
  return jsx(navigation(9755).TwoWayLinkLanding, { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
};
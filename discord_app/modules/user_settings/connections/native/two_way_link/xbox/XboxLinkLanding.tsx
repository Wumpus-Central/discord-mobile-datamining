// === Module 9252: XboxLinkLanding ===

// Module 9252 (XboxLinkLanding)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef9256 from "module_9256" /* 9256 */;
import noop from "module_19" /* 19 */;

const require = fn;
const XboxLinkModalScenes = fn(9251).XboxLinkModalScenes;
const Constants = fn(1074);
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_8 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default function XboxLinkLanding() {
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const tmp = closure_8();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
  let intl = navigation(1114).intl;
  let items = [navigation];
  const memo = noop.useMemo(() => {
    let obj = { label: null, icon: null };
    const intl = navigation(1114).intl;
    obj.label = intl.string(navigation(1114).t.ihQXsb);
    obj.icon = navigation(5115).VoiceNormalIcon;
    const items = [obj, , , ];
    obj = { label: null, icon: null };
    const intl2 = navigation(1114).intl;
    obj.label = intl2.string(navigation(1114).t.Xt1n4P);
    obj.icon = navigation(9253).ScreenStreamIcon;
    items[1] = obj;
    obj = { label: null, icon: null };
    const intl3 = navigation(1114).intl;
    obj.label = intl3.string(navigation(1114).t.xqVY3p);
    obj.icon = navigation(5103).GroupIcon;
    items[2] = obj;
    const obj1 = { label: null, icon: null };
    const intl4 = navigation(1114).intl;
    obj1.label = intl4.string(navigation(1114).t.iQsKVW);
    obj1.icon = navigation(9255).GameControllerIcon;
    items[3] = obj1;
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef9256 }), []);
  obj = { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1114).intl;
  obj.headerConnect = intl2.string(navigation(1114).t.m8aahn);
  let intl3 = navigation(1114).intl;
  obj.headerReconnect = intl3.string(navigation(1114).t.z3rAhq);
  obj.body = intl.format(navigation(1114).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(navigation(9257).TwoWayLinkLanding, { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
};
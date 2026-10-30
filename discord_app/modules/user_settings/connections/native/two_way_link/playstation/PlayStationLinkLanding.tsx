// === Module 14587: PlayStationLinkLanding ===

// Module 14587 (PlayStationLinkLanding)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef14588 from "module_14588" /* 14588 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(14586).PlayStationLinkModalScenes;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export function PlayStationLinkLanding(platformType) {
  let navigation;
  const tmp = closure_7();
  navigation = navigation(1498).useNavigation();
  let obj = navigation(1498);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1114).intl;
  let items = [navigation];
  const memo = noop.useMemo(() => {
    const obj = { label: null, subLabel: null, icon: null };
    const intl = navigation(1114).intl;
    obj.label = intl.string(navigation(1114).t["+eJP7o"]);
    const intl2 = navigation(1114).intl;
    obj.subLabel = intl2.string(navigation(1114).t["+0VIUh"]);
    obj.icon = navigation(8665).VoiceNormalIcon;
    const items = [obj, ];
    const obj2 = { label: null, icon: null };
    const intl3 = navigation(1114).intl;
    obj2.label = intl3.string(navigation(1114).t.ZH4QFa);
    obj2.icon = navigation(9707).GameControllerIcon;
    items[1] = obj2;
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef14588 }), []);
  const obj3 = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1114).intl;
  obj3.headerConnect = intl2.string(navigation(1114).t.xAWHOy);
  let intl3 = navigation(1114).intl;
  obj3.headerReconnect = intl3.string(navigation(1114).t["ZJ/vBh"]);
  obj3.body = intl.format(navigation(1114).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj3.onNext = callback;
  obj3.valueProps = memo;
  return jsx(navigation(9709).TwoWayLinkLanding, { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
}
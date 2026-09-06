// === Module 9256: PlayStationLinkLanding ===

// Module 9256 (PlayStationLinkLanding)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef9257 from "module_9257" /* 9257 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(9255).PlayStationLinkModalScenes;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = function PlayStationLinkLanding(platformType) {
  let navigation;
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const tmp = closure_7();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1114).intl;
  let items = [navigation];
  const memo = noop.useMemo(() => {
    let obj = { label: null, subLabel: null, icon: null };
    const intl = navigation(1114).intl;
    obj.label = intl.string(navigation(1114).t["+eJP7o"]);
    const intl2 = navigation(1114).intl;
    obj.subLabel = intl2.string(navigation(1114).t["+0VIUh"]);
    obj.icon = navigation(5101).VoiceNormalIcon;
    const items = [obj, ];
    obj = { label: null, icon: null };
    const intl3 = navigation(1114).intl;
    obj.label = intl3.string(navigation(1114).t.ZH4QFa);
    obj.icon = navigation(9223).GameControllerIcon;
    items[1] = obj;
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef9257 }), []);
  obj = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1114).intl;
  obj.headerConnect = intl2.string(navigation(1114).t.xAWHOy);
  let intl3 = navigation(1114).intl;
  obj.headerReconnect = intl3.string(navigation(1114).t["ZJ/vBh"]);
  obj.body = intl.format(navigation(1114).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(navigation(9225).TwoWayLinkLanding, { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
};
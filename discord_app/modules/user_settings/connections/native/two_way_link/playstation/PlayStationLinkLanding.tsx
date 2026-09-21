// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import _modDef9377 from "../../../../../../../discord_assets/assets/connections/ps_link_landing.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_4 = fn(9375).PlayStationLinkModalScenes;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx",
);

export const PlayStationLinkLanding = function PlayStationLinkLanding(platformType) {
  let navigation;
  const tmp = closure_7();
  navigation = navigation(1484).useNavigation();
  let obj = navigation(1484);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1115).intl;
  let items = [navigation];
  const memo = noop.useMemo(() => {
    const obj = { label: null, subLabel: null, icon: null };
    const intl = navigation(1115).intl;
    obj.label = intl.string(navigation(1115).t["+eJP7o"]);
    const intl2 = navigation(1115).intl;
    obj.subLabel = intl2.string(navigation(1115).t["+0VIUh"]);
    obj.icon = navigation(5319).VoiceNormalIcon;
    const items = [obj];
    const obj2 = { label: null, icon: null };
    const intl3 = navigation(1115).intl;
    obj2.label = intl3.string(navigation(1115).t.ZH4QFa);
    obj2.icon = navigation(9348).GameControllerIcon;
    items[1] = obj2;
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef9377 }), []);
  const obj3 = {
    platformType: platformType.platformType,
    img: memo1,
    imgStyle: tmp.image,
    headerConnect: null,
    headerReconnect: null,
    body: null,
    onNext: null,
    valueProps: null,
  };
  let intl2 = navigation(1115).intl;
  obj3.headerConnect = intl2.string(navigation(1115).t.xAWHOy);
  let intl3 = navigation(1115).intl;
  obj3.headerReconnect = intl3.string(navigation(1115).t["ZJ/vBh"]);
  obj3.body = intl.format(navigation(1115).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj3.onNext = callback;
  obj3.valueProps = memo;
  return jsx(navigation(9350).TwoWayLinkLanding, {
    platformType: platformType.platformType,
    img: memo1,
    imgStyle: tmp.image,
    headerConnect: null,
    headerReconnect: null,
    body: null,
    onNext: null,
    valueProps: null,
  });
};

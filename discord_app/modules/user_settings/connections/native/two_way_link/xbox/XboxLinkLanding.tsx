// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import _modDef9348 from "../../../../../../../discord_assets/assets/connections/xbox_link_landing.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const XboxLinkModalScenes = fn(9343).XboxLinkModalScenes;
const Constants = fn(1074);
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx",
);

export default function XboxLinkLanding() {
  const tmp = closure_8();
  navigation = navigation(1484).useNavigation();
  let obj = navigation(1484);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
  let intl = navigation(1115).intl;
  let items = [navigation];
  const memo = noop.useMemo(() => {
    const obj = { label: null, icon: null };
    const intl = navigation(1115).intl;
    obj.label = intl.string(navigation(1115).t.ihQXsb);
    obj.icon = navigation(5312).VoiceNormalIcon;
    const items = [obj, , ,];
    const obj2 = { label: null, icon: null };
    const intl2 = navigation(1115).intl;
    obj2.label = intl2.string(navigation(1115).t.Xt1n4P);
    obj2.icon = navigation(9345).ScreenStreamIcon;
    items[1] = obj2;
    const obj3 = { label: null, icon: null };
    const intl3 = navigation(1115).intl;
    obj3.label = intl3.string(navigation(1115).t.xqVY3p);
    obj3.icon = navigation(5300).GroupIcon;
    items[2] = obj3;
    const obj4 = { label: null, icon: null };
    const intl4 = navigation(1115).intl;
    obj4.label = intl4.string(navigation(1115).t.iQsKVW);
    obj4.icon = navigation(9347).GameControllerIcon;
    items[3] = obj4;
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef9348 }), []);
  let obj3 = {
    platformType: constants2.XBOX,
    img: memo1,
    imgStyle: tmp.image,
    headerConnect: null,
    headerReconnect: null,
    body: null,
    onNext: null,
    valueProps: null,
  };
  let intl2 = navigation(1115).intl;
  obj3.headerConnect = intl2.string(navigation(1115).t.m8aahn);
  let intl3 = navigation(1115).intl;
  obj3.headerReconnect = intl3.string(navigation(1115).t.z3rAhq);
  obj3.body = intl.format(navigation(1115).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  obj3.onNext = callback;
  obj3.valueProps = memo;
  return jsx(navigation(9349).TwoWayLinkLanding, {
    platformType: constants2.XBOX,
    img: memo1,
    imgStyle: tmp.image,
    headerConnect: null,
    headerReconnect: null,
    body: null,
    onNext: null,
    valueProps: null,
  });
}

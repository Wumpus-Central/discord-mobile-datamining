// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import _modDef9274 from "../../../../../../../_runtime/metro/09274__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_4 = fn(9272).CrunchyrollLinkModalScenes;
const Constants = fn(1074);
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ image: { width: 234, height: 147 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx",
);

export default function CrunchyrollLinkLanding() {
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  let items = [navigation];
  const memo = noop.useMemo(() => {
    const obj = { label: null, icon: null };
    const intl = navigation(1114).intl;
    obj.label = intl.string(navigation(1114).t["2TXHQd"]);
    obj.icon = navigation(8274).PlayIcon;
    const items = [obj];
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  obj = {
    platformType: constants2.CRUNCHYROLL,
    img: _modDef9274,
    imgStyle: closure_8().image,
    headerConnect: null,
    body: null,
    learnMoreLink: null,
    onNext: null,
    valueProps: null,
  };
  let intl = navigation(1114).intl;
  obj.headerConnect = intl.string(navigation(1114).t["Da+3NJ"]);
  const intl2 = navigation(1114).intl;
  obj.body = intl2.string(navigation(1114).t.MaPpPL);
  const tmp = closure_8();
  obj.learnMoreLink = HelpdeskUtilsDefault.getArticleURL(constants.CRUNCHYROLL_CONNECTION);
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(navigation(9225).TwoWayLinkLanding, {
    platformType: constants2.CRUNCHYROLL,
    img: _modDef9274,
    imgStyle: closure_8().image,
    headerConnect: null,
    body: null,
    learnMoreLink: null,
    onNext: null,
    valueProps: null,
  });
}

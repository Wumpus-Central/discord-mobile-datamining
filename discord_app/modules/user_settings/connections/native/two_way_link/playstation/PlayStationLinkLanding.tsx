// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import _modDef14321 from "../../../../../../../discord_assets/assets/connections/ps_link_landing.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_4 = fn(14319).PlayStationLinkModalScenes;
const HelpdeskArticles = fn(1084).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx",
);

export const PlayStationLinkLanding = ReactCompilerGating.isReactCompilerEnabled()
  ? function PlayStationLinkLanding(platformType) {
      const cResult = navigation(576).c(11);
      platformType = platformType.platformType;
      const tmp4 = closure_7();
      const obj = navigation(576);
      navigation = navigation(1502).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
        const intl = tmp(1125).intl;
        const obj4 = { helpdeskArticleUrl: articleURL };
        const formatResult = intl.format(tmp(1125).t.kqZQNe, obj4);
        cResult[0] = formatResult;
        let first = formatResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { label: null, subLabel: null, icon: null };
        const intl2 = tmp(1125).intl;
        obj5.label = intl2.string(tmp(1125).t["+eJP7o"]);
        const intl3 = tmp(1125).intl;
        obj5.subLabel = intl3.string(tmp(1125).t["+0VIUh"]);
        obj5.icon = tmp(8609).VoiceNormalIcon;
        const items = [obj5];
        const obj6 = { label: null, icon: null };
        const intl4 = tmp(1125).intl;
        obj6.label = intl4.string(tmp(1125).t.ZH4QFa);
        obj6.icon = tmp(9650).GameControllerIcon;
        items[1] = obj6;
        cResult[1] = items;
        let tmp11 = items;
      } else {
        tmp11 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        const fn = function f() {
          navigation.push(constants.PRE_CONNECT);
        };
        cResult[2] = navigation;
        cResult[3] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { uri: _modDef14321 };
        cResult[4] = obj7;
        let tmp13 = obj7;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1125).intl;
        const stringResult = intl5.string(tmp(1125).t.xAWHOy);
        const intl6 = tmp(1125).intl;
        const stringResult1 = intl6.string(tmp(1125).t["ZJ/vBh"]);
        cResult[5] = stringResult;
        cResult[6] = stringResult1;
        let tmp16 = stringResult1;
        let tmp15 = stringResult;
      } else {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      if (cResult[7] === tmp12) {
        if (cResult[8] === platformType) {
          if (cResult[9] === tmp4.image) {
            let tmp19 = cResult[10];
          }
          return tmp19;
        }
      }
      const tmp20 = jsx(navigation(9652).TwoWayLinkLanding, {
        platformType,
        img: tmp13,
        imgStyle: tmp4.image,
        headerConnect: tmp15,
        headerReconnect: tmp16,
        body: first,
        onNext: tmp12,
        valueProps: tmp11,
      });
      cResult[7] = tmp12;
      cResult[8] = platformType;
      cResult[9] = tmp4.image;
      cResult[10] = tmp20;
      tmp19 = tmp20;
      const obj2 = navigation(1502);
    }
  : function PlayStationLinkLanding(platformType) {
      let navigation;
      const tmp = closure_7();
      navigation = navigation(1502).useNavigation();
      let obj = navigation(1502);
      const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
      let intl = navigation(1125).intl;
      let items = [navigation];
      const memo = noop.useMemo(() => {
        const obj = { label: null, subLabel: null, icon: null };
        const intl = navigation(1125).intl;
        obj.label = intl.string(navigation(1125).t["+eJP7o"]);
        const intl2 = navigation(1125).intl;
        obj.subLabel = intl2.string(navigation(1125).t["+0VIUh"]);
        obj.icon = navigation(8609).VoiceNormalIcon;
        const items = [obj];
        const obj2 = { label: null, icon: null };
        const intl3 = navigation(1125).intl;
        obj2.label = intl3.string(navigation(1125).t.ZH4QFa);
        obj2.icon = navigation(9650).GameControllerIcon;
        items[1] = obj2;
        return items;
      }, []);
      const callback = noop.useCallback(() => {
        navigation.push(constants.PRE_CONNECT);
      }, items);
      const memo1 = noop.useMemo(() => ({ uri: _modDef14321 }), []);
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
      let intl2 = navigation(1125).intl;
      obj3.headerConnect = intl2.string(navigation(1125).t.xAWHOy);
      let intl3 = navigation(1125).intl;
      obj3.headerReconnect = intl3.string(navigation(1125).t["ZJ/vBh"]);
      obj3.body = intl.format(navigation(1125).t.kqZQNe, { helpdeskArticleUrl: articleURL });
      obj3.onNext = callback;
      obj3.valueProps = memo;
      return jsx(navigation(9652).TwoWayLinkLanding, {
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

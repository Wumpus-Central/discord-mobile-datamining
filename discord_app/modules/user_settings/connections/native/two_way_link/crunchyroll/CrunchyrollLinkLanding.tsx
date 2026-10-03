// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import _modDef8779 from "../../../../../../../_runtime/metro/08779__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const constants = fn(8777).CrunchyrollLinkModalScenes;
const Constants = fn(1085);
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ image: { width: 234, height: 147 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = navigation(576).c(9);
      const tmp4 = closure_8();
      const obj = navigation(576);
      navigation = navigation(1490).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { label: null, icon: null };
        const intl = tmp(1126).intl;
        obj3.label = intl.string(tmp(1126).t["2TXHQd"]);
        obj3.icon = tmp(7948).PlayIcon;
        const items = [obj3];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== navigation) {
        class L {
          constructor() {
            arr = closure_0.push(closure_4.PRE_CONNECT);
            return;
          }
        }
        cResult[1] = navigation;
        cResult[2] = L;
      } else {
        class L {
          constructor() {
            arr = closure_0.push(closure_4.PRE_CONNECT);
            return;
          }
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            arr = closure_0.push(closure_4.PRE_CONNECT);
            return;
          }
        }
        const stringResult = obj4.string(tmp(1126).t["Da+3NJ"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.MaPpPL);
        const articleURL = HelpdeskUtilsDefault.getArticleURL(constants2.CRUNCHYROLL_CONNECTION);
        cResult[3] = stringResult;
        cResult[4] = stringResult1;
        cResult[5] = articleURL;
        let tmp10 = articleURL;
        let tmp9 = stringResult1;
        const tmp8 = stringResult;
      } else {
        class L {
          constructor() {
            arr = closure_0.push(closure_4.PRE_CONNECT);
            return;
          }
        }
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      if (cResult[6] === L) {
        class L {
          constructor() {
            arr = closure_0.push(closure_4.PRE_CONNECT);
            return;
          }
        }
        return tmp16;
      }
      const obj2 = navigation(1490);
      tmp16 = jsx(navigation(8741).TwoWayLinkLanding, {
        platformType: constants3.CRUNCHYROLL,
        img: _modDef8779,
        imgStyle: tmp4.image,
        headerConnect: tmp8,
        body: tmp9,
        learnMoreLink: tmp10,
        onNext: L,
        valueProps: first,
      });
      cResult[6] = L;
      cResult[7] = tmp4.image;
      cResult[8] = tmp16;
      const obj6 = {
        platformType: constants3.CRUNCHYROLL,
        img: _modDef8779,
        imgStyle: tmp4.image,
        headerConnect: tmp8,
        body: tmp9,
        learnMoreLink: tmp10,
        onNext: L,
        valueProps: first,
      };
    }
  : () => {
      const tmp = closure_8();
      navigation = navigation(1490).useNavigation();
      let items = [navigation];
      const memo = noop.useMemo(() => {
        const obj = { label: null, icon: null };
        const intl = navigation(1126).intl;
        obj.label = intl.string(navigation(1126).t["2TXHQd"]);
        obj.icon = navigation(7948).PlayIcon;
        const items = [obj];
        return items;
      }, []);
      const callback = noop.useCallback(() => {
        navigation.push(constants.PRE_CONNECT);
      }, items);
      const obj2 = {
        platformType: constants3.CRUNCHYROLL,
        img: _modDef8779,
        imgStyle: tmp.image,
        headerConnect: null,
        body: null,
        learnMoreLink: null,
        onNext: null,
        valueProps: null,
      };
      let intl = navigation(1126).intl;
      obj2.headerConnect = intl.string(navigation(1126).t["Da+3NJ"]);
      const intl2 = navigation(1126).intl;
      obj2.body = intl2.string(navigation(1126).t.MaPpPL);
      let obj = navigation(1490);
      obj2.learnMoreLink = HelpdeskUtilsDefault.getArticleURL(constants2.CRUNCHYROLL_CONNECTION);
      obj2.onNext = callback;
      obj2.valueProps = memo;
      return jsx(navigation(8741).TwoWayLinkLanding, {
        platformType: constants3.CRUNCHYROLL,
        img: _modDef8779,
        imgStyle: tmp.image,
        headerConnect: null,
        body: null,
        learnMoreLink: null,
        onNext: null,
        valueProps: null,
      });
    };

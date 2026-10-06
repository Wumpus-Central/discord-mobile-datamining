// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/08811_AssetRegistry.js";
import react from "../../../../../../../_runtime/00019_react.js";
import Constants from "../../../../../../Constants.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let arr, navigation;

let hasOwnProperty;
let metroRequire;
const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 234, height: 147 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let tmp10;
      let tmp16;
      let tmp8;
      let tmp9;
      const obj = navigation(576);
      const cResult = obj.c(9);
      const tmp4 = closure_8();
      const obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { label: intl.string(navigation(1126).t["2TXHQd"]), icon: navigation(7959).PlayIcon };
        intl = tmp(1126).intl;
        const items = [obj3];
        cResult[0] = items;
        first = items;
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
      const image = tmp4.image;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            arr = closure_0.push(closure_4.PRE_CONNECT);
            return;
          }
        }
        const stringResult = obj4.string(navigation(1126).t["Da+3NJ"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(navigation(1126).t.MaPpPL);
        const obj5 = HelpdeskUtilsDefault;
        const articleURL = obj5.getArticleURL(constants2.CRUNCHYROLL_CONNECTION);
        cResult[3] = stringResult;
        cResult[4] = stringResult1;
        cResult[5] = articleURL;
        tmp10 = articleURL;
        tmp9 = stringResult1;
        tmp8 = stringResult;
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
      const TwoWayLinkLanding = tmp(8773).TwoWayLinkLanding;
      tmp16 = (
        <TwoWayLinkLanding
          platformType={constants3.CRUNCHYROLL}
          img={AssetRegistryDefault}
          imgStyle={image}
          headerConnect={tmp8}
          body={tmp9}
          learnMoreLink={tmp10}
          onNext={L}
          valueProps={first}
        />
      );
      cResult[6] = L;
      cResult[7] = tmp4.image;
      cResult[8] = tmp16;
    }
  : () => {
      const tmp = closure_8();
      let obj = navigation(1490);
      navigation = obj.useNavigation();
      let items = [navigation];
      const memo = react.useMemo(() => {
        let intl;
        const obj = {
          label: intl.string(navigation(dependencyMap[5]).t["2TXHQd"]),
          icon: navigation(dependencyMap[6]).PlayIcon,
        };
        intl = navigation(dependencyMap[5]).intl;
        const items = [obj];
        return items;
      }, []);
      const callback = react.useCallback(() => {
        navigation.push(constants.PRE_CONNECT);
      }, items);
      const TwoWayLinkLanding = navigation(8773).TwoWayLinkLanding;
      let intl = navigation(1126).intl;
      const intl2 = navigation(1126).intl;
      const obj3 = HelpdeskUtilsDefault;
      return (
        <TwoWayLinkLanding
          platformType={constants3.CRUNCHYROLL}
          img={AssetRegistryDefault}
          imgStyle={tmp.image}
          headerConnect={intl.string(navigation(1126).t["Da+3NJ"])}
          body={intl2.string(navigation(1126).t.MaPpPL)}
          learnMoreLink={obj3.getArticleURL(constants2.CRUNCHYROLL_CONNECTION)}
          onNext={callback}
          valueProps={memo}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx",
);

export default tmp3;

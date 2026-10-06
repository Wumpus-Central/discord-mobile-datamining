// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../../Constants.tsx";
import XboxLinkConstants from "XboxLinkConstants.tsx";
import _modDef8777 from "../../../../../../../discord_assets/assets/connections/xbox_discord_link.png.js";
import react from "../../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let navigation;

const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp10;
      let tmp11;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = navigation(576);
      const cResult = obj.c(11);
      const tmp4 = closure_7();
      const obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function t(arg0) {
          navigation.push(XboxLinkModalScenes.DISCORD_CONSENT, arg0);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        const fn2 = function _() {
          navigation.push(XboxLinkModalScenes.ERROR);
        };
        cResult[2] = navigation;
        cResult[3] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { uri: _modDef8777 };
        cResult[4] = obj3;
        tmp8 = obj3;
      } else {
        tmp8 = cResult[4];
      }
      const image = tmp4.image;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(navigation(1126).t["e/z3na"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(navigation(1126).t["7tXu0i"]);
        cResult[5] = stringResult;
        cResult[6] = stringResult1;
        tmp11 = stringResult1;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp6) {
          let tmp14;
          if (cResult[9] === tmp4.image) {
            tmp14 = cResult[10];
          }
          return tmp14;
        }
      }
      const tmp15 = jsx(navigation(8778).TwoWayLinkPreConnect, {
        platformType: PlatformTypes.XBOX,
        onError: tmp7,
        onNext: tmp6,
        img: tmp8,
        imgStyle: image,
        title: tmp10,
        body: tmp11,
      });
      cResult[7] = tmp7;
      cResult[8] = tmp6;
      cResult[9] = tmp4.image;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
  : () => {
      const tmp = closure_7();
      let obj = navigation(1490);
      navigation = obj.useNavigation();
      const items = [navigation];
      const items1 = [navigation];
      const callback = react.useCallback((arg0) => {
        navigation.push(XboxLinkModalScenes.DISCORD_CONSENT, arg0);
      }, items);
      const callback1 = react.useCallback(() => {
        navigation.push(XboxLinkModalScenes.ERROR);
      }, items1);
      const memo = react.useMemo(() => {
        const obj = { uri: _modDef8777 };
        return obj;
      }, []);
      const TwoWayLinkPreConnect = navigation(8778).TwoWayLinkPreConnect;
      const intl = navigation(1126).intl;
      const intl2 = navigation(1126).intl;
      return (
        <TwoWayLinkPreConnect
          platformType={PlatformTypes.XBOX}
          onError={callback1}
          onNext={callback}
          img={memo}
          imgStyle={tmp.image}
          title={intl.string(navigation(1126).t["e/z3na"])}
          body={intl2.string(navigation(1126).t["7tXu0i"])}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx",
);

export default tmp2;

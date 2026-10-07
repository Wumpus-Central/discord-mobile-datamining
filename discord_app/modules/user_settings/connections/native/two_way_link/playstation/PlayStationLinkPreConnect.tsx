// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx
import _modDef8802 from "../../../../../../../discord_assets/assets/connections/ps_discord_link.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_4 = fn(8798).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx",
);

export const PlayStationLinkPreConnect = ReactCompilerGating.isReactCompilerEnabled()
  ? (platformType) => {
      const cResult = navigation(576).c(12);
      platformType = platformType.platformType;
      const tmp4 = closure_6();
      const obj = navigation(576);
      navigation = navigation(1490).useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function s(arg0) {
          navigation.push(constants.DISCORD_CONSENT, arg0);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        const fn2 = function f() {
          navigation.push(constants.ERROR, {});
        };
        cResult[2] = navigation;
        cResult[3] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { uri: _modDef8802 };
        cResult[4] = obj3;
        let tmp8 = obj3;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["6n+UPR"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.JaaqIf);
        cResult[5] = stringResult;
        cResult[6] = stringResult1;
        let tmp11 = stringResult1;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp6) {
          if (cResult[9] === platformType) {
            if (cResult[10] === tmp4.image) {
              let tmp14 = cResult[11];
            }
            return tmp14;
          }
        }
      }
      const tmp15 = jsx(navigation(8778).TwoWayLinkPreConnect, {
        platformType,
        onError: tmp7,
        onNext: tmp6,
        img: tmp8,
        imgStyle: tmp4.image,
        title: tmp10,
        body: tmp11,
      });
      cResult[7] = tmp7;
      cResult[8] = tmp6;
      cResult[9] = platformType;
      cResult[10] = tmp4.image;
      cResult[11] = tmp15;
      tmp14 = tmp15;
      const obj2 = navigation(1490);
    }
  : (platformType) => {
      let navigation;
      const tmp = closure_6();
      navigation = navigation(1490).useNavigation();
      const items = [navigation];
      const items1 = [navigation];
      const callback = noop.useCallback((arg0) => {
        navigation.push(constants.DISCORD_CONSENT, arg0);
      }, items);
      const callback1 = noop.useCallback(() => {
        navigation.push(constants.ERROR, {});
      }, items1);
      const memo = noop.useMemo(() => ({ uri: _modDef8802 }), []);
      const obj2 = {
        platformType: platformType.platformType,
        onError: callback1,
        onNext: callback,
        img: memo,
        imgStyle: tmp.image,
        title: null,
        body: null,
      };
      const intl = navigation(1126).intl;
      obj2.title = intl.string(navigation(1126).t["6n+UPR"]);
      const intl2 = navigation(1126).intl;
      obj2.body = intl2.string(navigation(1126).t.JaaqIf);
      return jsx(navigation(8778).TwoWayLinkPreConnect, {
        platformType: platformType.platformType,
        onError: callback1,
        onNext: callback,
        img: memo,
        imgStyle: tmp.image,
        title: null,
        body: null,
      });
    };

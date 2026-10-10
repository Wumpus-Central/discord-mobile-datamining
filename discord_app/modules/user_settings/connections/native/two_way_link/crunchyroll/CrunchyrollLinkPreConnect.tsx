// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx
import _modDef12933 from "../../../../../../../_runtime/metro/12933__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const constants = fn(12929).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const redirectDestination = fn(8456).CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CrunchyrollLinkPreConnect() {
      const cResult = navigation(576).c(10);
      const tmp4 = closure_8();
      const obj = navigation(576);
      navigation = navigation(1503).useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function n(arg0) {
          navigation.push(constants.DISCORD_CONSENT, arg0);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        class N {
          constructor() {
            arr = closure_0.push(closure_4.ERROR);
            return;
          }
        }
        cResult[2] = navigation;
        cResult[3] = N;
      } else {
        class N {
          constructor() {
            arr = closure_0.push(closure_4.ERROR);
            return;
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            arr = closure_0.push(closure_4.ERROR);
            return;
          }
        }
        const stringResult = obj3.string(tmp(1126).t.siPkNp);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(tmp(1126).t.oS4NEH);
        cResult[4] = stringResult;
        cResult[5] = stringResult1;
        let tmp9 = stringResult1;
        const tmp8 = stringResult;
      } else {
        class N {
          constructor() {
            arr = closure_0.push(closure_4.ERROR);
            return;
          }
        }
        tmp9 = cResult[5];
      }
      if (cResult[6] === N) {
        class N {
          constructor() {
            arr = closure_0.push(closure_4.ERROR);
            return;
          }
        }
      }
      const obj2 = navigation(1503);
      const obj4 = {
        platformType: PlatformTypes.CRUNCHYROLL,
        onError: N,
        onNext: tmp6,
        img: _modDef12933,
        imgStyle: tmp4.image,
        title: tmp8,
        body: tmp9,
        redirectDestination,
      };
      cResult[6] = N;
      cResult[7] = tmp6;
      cResult[8] = tmp4.image;
      cResult[9] = jsx(navigation(9218).TwoWayLinkPreConnect, {
        platformType: PlatformTypes.CRUNCHYROLL,
        onError: N,
        onNext: tmp6,
        img: _modDef12933,
        imgStyle: tmp4.image,
        title: tmp8,
        body: tmp9,
        redirectDestination,
      });
      const tmp12 = jsx(navigation(9218).TwoWayLinkPreConnect, {
        platformType: PlatformTypes.CRUNCHYROLL,
        onError: N,
        onNext: tmp6,
        img: _modDef12933,
        imgStyle: tmp4.image,
        title: tmp8,
        body: tmp9,
        redirectDestination,
      });
    }
  : function CrunchyrollLinkPreConnect() {
      const tmp = closure_8();
      navigation = navigation(1503).useNavigation();
      const items = [navigation];
      const items1 = [navigation];
      const callback = noop.useCallback((arg0) => {
        navigation.push(constants.DISCORD_CONSENT, arg0);
      }, items);
      const callback1 = noop.useCallback(() => {
        navigation.push(constants.ERROR);
      }, items1);
      const obj2 = {
        platformType: PlatformTypes.CRUNCHYROLL,
        onError: callback1,
        onNext: callback,
        img: _modDef12933,
        imgStyle: tmp.image,
        title: null,
        body: null,
        redirectDestination: null,
      };
      const intl = navigation(1126).intl;
      obj2.title = intl.string(navigation(1126).t.siPkNp);
      const intl2 = navigation(1126).intl;
      obj2.body = intl2.string(navigation(1126).t.oS4NEH);
      obj2.redirectDestination = redirectDestination;
      return jsx(navigation(9218).TwoWayLinkPreConnect, {
        platformType: PlatformTypes.CRUNCHYROLL,
        onError: callback1,
        onNext: callback,
        img: _modDef12933,
        imgStyle: tmp.image,
        title: null,
        body: null,
        redirectDestination: null,
      });
    };

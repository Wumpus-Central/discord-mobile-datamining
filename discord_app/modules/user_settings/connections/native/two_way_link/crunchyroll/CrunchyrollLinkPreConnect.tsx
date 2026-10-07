// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx
import _modDef8813 from "../../../../../../../_runtime/metro/08813__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_4 = fn(8809).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const redirectDestination = fn(8024).CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = navigation(576).c(10);
      const tmp4 = closure_8();
      const obj = navigation(576);
      navigation = navigation(1490).useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function t(arg0) {
          navigation.push(constants.DISCORD_CONSENT, arg0);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        const fn2 = function y() {
          navigation.push(constants.ERROR);
        };
        cResult[2] = navigation;
        cResult[3] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.siPkNp);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.oS4NEH);
        cResult[4] = stringResult;
        cResult[5] = stringResult1;
        let tmp9 = stringResult1;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp4.image) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      const obj2 = navigation(1490);
      const tmp13 = jsx(navigation(8778).TwoWayLinkPreConnect, {
        platformType: PlatformTypes.CRUNCHYROLL,
        onError: tmp7,
        onNext: tmp6,
        img: _modDef8813,
        imgStyle: tmp4.image,
        title: tmp8,
        body: tmp9,
        redirectDestination,
      });
      cResult[6] = tmp7;
      cResult[7] = tmp6;
      cResult[8] = tmp4.image;
      cResult[9] = tmp13;
      tmp12 = tmp13;
      const obj3 = {
        platformType: PlatformTypes.CRUNCHYROLL,
        onError: tmp7,
        onNext: tmp6,
        img: _modDef8813,
        imgStyle: tmp4.image,
        title: tmp8,
        body: tmp9,
        redirectDestination,
      };
    }
  : () => {
      const tmp = closure_8();
      navigation = navigation(1490).useNavigation();
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
        img: _modDef8813,
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
      return jsx(navigation(8778).TwoWayLinkPreConnect, {
        platformType: PlatformTypes.CRUNCHYROLL,
        onError: callback1,
        onNext: callback,
        img: _modDef8813,
        imgStyle: tmp.image,
        title: null,
        body: null,
        redirectDestination: null,
      });
    };

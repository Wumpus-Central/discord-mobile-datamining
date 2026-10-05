// === Module 8769: PlayStationLinkPreConnect ===

// Module 8769 (PlayStationLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 8766 */;
import _modDef8770 from "module_8770" /* 8770 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, platformType;

let closure_4 = PlayStationLinkConstants.PlayStationLinkModalScenes;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = navigation(576);
  const cResult = obj.c(12);
  platformType = platformType.platformType;
  const tmp4 = closure_6();
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s(arg0) {
      navigation.push(constants.DISCORD_CONSENT, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn2 = function f() {
      navigation.push(constants.ERROR, {});
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { uri: _modDef8770 };
    cResult[4] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[4];
  }
  const image = tmp4.image;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(navigation(1126).t["6n+UPR"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(navigation(1126).t.JaaqIf);
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
      if (cResult[9] === platformType) {
        let tmp14;
        if (cResult[10] === tmp4.image) {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
  }
  const tmp15 = jsx(navigation(8746).TwoWayLinkPreConnect, { platformType, onError: tmp7, onNext: tmp6, img: tmp8, imgStyle: image, title: tmp10, body: tmp11 });
  cResult[7] = tmp7;
  cResult[8] = tmp6;
  cResult[9] = platformType;
  cResult[10] = tmp4.image;
  cResult[11] = tmp15;
  tmp14 = tmp15;
}) : ((platformType) => {
  navigation = undefined;
  platformType = platformType.platformType;
  const tmp = closure_6();
  let obj = navigation(1490);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = react.useMemo(() => {
    const obj = { uri: _modDef8770 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(8746).TwoWayLinkPreConnect;
  const intl = navigation(1126).intl;
  const intl2 = navigation(1126).intl;
  return <TwoWayLinkPreConnect platformType={platformType} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1126).t["6n+UPR"])} body={intl2.string(navigation(1126).t.JaaqIf)} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = tmp2;
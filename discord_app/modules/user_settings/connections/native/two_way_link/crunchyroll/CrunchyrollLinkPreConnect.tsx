// === Module 8812: CrunchyrollLinkPreConnect ===

// Module 8812 (CrunchyrollLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8024 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 8809 */;
import AssetRegistryDefault from "AssetRegistry" /* 8813 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const redirectDestination = CrunchyrollConnectionConstants.CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = navigation(576);
  const cResult = obj.c(10);
  const tmp4 = closure_8();
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t(arg0) {
      navigation.push(constants.DISCORD_CONSENT, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn2 = function y() {
      navigation.push(constants.ERROR);
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  const image = tmp4.image;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(navigation(1126).t.siPkNp);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(navigation(1126).t.oS4NEH);
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    tmp9 = stringResult1;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp7) {
    if (cResult[7] === tmp6) {
      let tmp12;
      if (cResult[8] === tmp4.image) {
        tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const TwoWayLinkPreConnect = tmp(8778).TwoWayLinkPreConnect;
  const tmp13 = <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={tmp7} onNext={tmp6} img={AssetRegistryDefault} imgStyle={image} title={tmp8} body={tmp9} redirectDestination={redirectDestination} />;
  cResult[6] = tmp7;
  cResult[7] = tmp6;
  cResult[8] = tmp4.image;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : (() => {
  const tmp = closure_8();
  const obj = navigation(1490);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const TwoWayLinkPreConnect = navigation(8778).TwoWayLinkPreConnect;
  const intl = navigation(1126).intl;
  const intl2 = navigation(1126).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={callback1} onNext={callback} img={AssetRegistryDefault} imgStyle={tmp.image} title={intl.string(navigation(1126).t.siPkNp)} body={intl2.string(navigation(1126).t.oS4NEH)} redirectDestination={redirectDestination} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default tmp2;
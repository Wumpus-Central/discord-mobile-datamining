// discord_app/modules/user_settings/voice/native/KrispLogo.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef9678 from "../../../../../_runtime/metro/09678__.js";
import _modDef9679 from "../../../../../_runtime/metro/09679__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
function handleKrispLinkPressed() {
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants4.NOISE_SUPPRESSION);
  const obj3 = { text: null, href: null, location: null };
  const intl = util.intl;
  obj3.text = intl.string(util.t.hvVgAZ);
  obj3.href = articleURL;
  obj3.location = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  AnalyticsUtilsDefault.track(constants.NOISE_CANCELLATION_LINK_CLICKED, obj3);
  const obj4 = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  LinkingDefault.openURL(articleURL);
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({
  AnalyticEvents: closure_7,
  AnalyticsPages: closure_8,
  AnalyticsSections: closure_9,
  HelpdeskArticles: c10,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = {
  logo: { marginLeft: 20, height: 30, width: 67 },
  detailsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    gap: 12,
  },
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore];
        const fn = function o() {
          return theme.theme;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      if (tmpResult2.isThemeLight(stateFromStores)) {
        let tmp8Result = _modDef9678;
      } else {
        tmp8Result = _modDef9679;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.vFiCSx);
        cResult[2] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp8Result) {
        const obj2 = { style: closure_13.logo, source: tmp8Result, accessibilityLabel: tmp10 };
        const tmp16 = closure_1_11(React3, obj2);
        cResult[3] = tmp8Result;
        cResult[4] = tmp16;
        let tmp12 = tmp16;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.hvVgAZ);
        cResult[5] = stringResult1;
        let tmp17 = stringResult1;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          accessibilityRole: "link",
          accessibilityLabel: tmp17,
          onPress: handleKrispLinkPressed,
          children: null,
        };
        const obj4 = { variant: "text-sm/medium", color: "text-link", children: null };
        const intl3 = util.intl;
        obj4.children = intl3.string(util.t.hvVgAZ);
        obj3.children = closure_1_11(Text_Text.Text, obj4);
        const tmp23 = closure_1_11(hasOwnProperty, obj3);
        cResult[6] = tmp23;
        let tmp19 = tmp23;
      } else {
        tmp19 = cResult[6];
      }
      if (cResult[7] !== tmp12) {
        const obj5 = { style: closure_13.detailsView, children: null };
        const items1 = [tmp12, tmp19];
        obj5.children = items1;
        const tmp28 = __initData(React4, obj5);
        cResult[7] = tmp12;
        cResult[8] = tmp28;
        let tmp24 = tmp28;
      } else {
        tmp24 = cResult[8];
      }
      return tmp24;
    }
  : () => {
      const items = [ThemeStore];
      const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
      if (obj2.isThemeLight(stateFromStores)) {
        let tmp4Result = _modDef9678;
      } else {
        tmp4Result = _modDef9679;
      }
      const obj3 = { style: closure_13.detailsView, children: null };
      const obj4 = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: null };
      const intl = util.intl;
      obj4.accessibilityLabel = intl.string(util.t.vFiCSx);
      const items1 = [closure_1_11(React3, obj4)];
      const obj5 = { accessibilityRole: "link", accessibilityLabel: null, onPress: null, children: null };
      const intl2 = util.intl;
      obj5.accessibilityLabel = intl2.string(util.t.hvVgAZ);
      obj5.onPress = handleKrispLinkPressed;
      const obj6 = { variant: "text-sm/medium", color: "text-link", children: null };
      const intl3 = util.intl;
      obj6.children = intl3.string(util.t.hvVgAZ);
      obj5.children = closure_1_11(Text_Text.Text, obj6);
      items1[1] = closure_1_11(hasOwnProperty, obj5);
      obj3.children = items1;
      return __initData(React4, obj3);
    };
export { handleKrispLinkPressed };

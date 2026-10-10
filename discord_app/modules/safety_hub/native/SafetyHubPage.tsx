// discord_app/modules/safety_hub/native/SafetyHubPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import _modDef3184 from "../../age_assurance/ManualReview.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import InlineNotice from "../../../design/mana/components/InlineNotice/InlineNotice.native.tsx";
import ManualReviewActionCreators from "../../age_assurance/ManualReviewActionCreators.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import AutomatedUnderageAppealModalActionCreatorsDefault from "../AutomatedUnderageAppealModalActionCreators.native.tsx";
import useAvailableAgeVerificationMethods from "../hooks/useAvailableAgeVerificationMethods.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const require = globalThis.__r;

const useShouldShowInitialGoogleWalletBanner = hyh4ls(14997);
require = fn;
function handleLogInClick() {
  AuthenticationActionCreatorsDefault.closeSuspendedUser();
}
function handleRetryClick() {
  AutomatedUnderageAppealModalActionCreatorsDefault.openV2("");
}
function handleManualReviewClick() {
  const result = ManualReviewActionCreators.handleManualReviewCta();
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const AgeCheckStatus = fn(7512).AgeCheckStatus;
const Constants = fn(1085);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RetryBanner() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.dqbMbn);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { type: "critical", message: first, role: "alert", action: null };
        const obj3 = { text: null, onClick: null };
        const intl2 = util.intl;
        obj3.text = intl2.string(util.t.IcA9iD);
        obj3.onClick = handleRetryClick;
        obj2.action = obj3;
        const tmp9 = __initData(InlineNotice.InlineNotice, obj2);
        cResult[1] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : function RetryBanner() {
      const obj = { type: "critical", message: null, role: "alert", action: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.dqbMbn);
      const obj2 = { text: null, onClick: null };
      const intl2 = util.intl;
      obj2.text = intl2.string(util.t.IcA9iD);
      obj2.onClick = handleRetryClick;
      obj.action = obj2;
      return __initData(InlineNotice.InlineNotice, obj);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AgeCheckLoadingBanner() {
      const cResult = c.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function n() {
          return isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const intl = util.intl;
        const t = util.t;
        const stringResult = intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]);
        cResult[2] = stateFromStores;
        cResult[3] = stringResult;
      } else {
        if (cResult[4] !== cResult[3]) {
          const obj2 = { type: "info", message: tmp8, role: "status" };
          const tmp13 = __initData(InlineNotice.InlineNotice, obj2);
          cResult[4] = tmp8;
          cResult[5] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[5];
        }
        return tmp11;
      }
      const tmpResult = initialize;
    }
  : function AgeCheckLoadingBanner() {
      const items = [SafetyHubStore];
      const stateFromStores = initialize.useStateFromStores(items, () =>
        isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled(),
      );
      const intl = util.intl;
      const t = util.t;
      return __initData(InlineNotice.InlineNotice, {
        type: "info",
        message: intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]),
        role: "status",
      });
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ManualOrAutomatedReviewBanner() {
      const cResult = require("c").c(5);
      const tmp4 = closure_22();
      _require = tmp4;
      if (cResult[0] !== tmp4) {
        const intl = tmp(1126).intl;
        const obj2 = {
          manualReviewHook(children, arg1) {
            return __initData(
              Text_Text.Text,
              {
                onPress: handleManualReviewClick,
                style: link.link,
                variant: "text-sm/normal",
                color: "text-default",
                children,
              },
              arg1,
            );
          },
        };
        const formatResult = intl.format(_modDef3184.vPoM8y, obj2);
        cResult[0] = tmp4;
        cResult[1] = formatResult;
        let tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { text: null, onClick: null };
        const intl2 = tmp(1126).intl;
        obj3.text = intl2.string(tmp(1126).t.IcA9iD);
        obj3.onClick = handleRetryClick;
        cResult[2] = obj3;
        let tmp8 = obj3;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        const obj4 = { type: "critical", message: tmp5, role: "alert", action: tmp8 };
        const tmp12 = closure_12(tmp(7567).InlineNotice, obj4);
        cResult[3] = tmp5;
        cResult[4] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
  : function ManualOrAutomatedReviewBanner() {
      _require = closure_22();
      const obj = { type: "critical", message: null, role: "alert", action: null };
      const intl = require("util").intl;
      obj.message = intl.format(_modDef3184.vPoM8y, {
        manualReviewHook(children, arg1) {
          return __initData(
            Text_Text.Text,
            {
              onPress: handleManualReviewClick,
              style: link.link,
              variant: "text-sm/normal",
              color: "text-default",
              children,
            },
            arg1,
          );
        },
      });
      const obj3 = { text: null, onClick: null };
      const intl2 = require("util").intl;
      obj3.text = intl2.string(require("util").t.IcA9iD);
      obj3.onClick = handleRetryClick;
      obj.action = obj3;
      return closure_12(require("InlineNotice").InlineNotice, obj);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ManualReviewBanner() {
      const cResult = c.c(5);
      const availableAgeVerificationMethods = useAvailableAgeVerificationMethods.useAvailableAgeVerificationMethods();
      const methods = availableAgeVerificationMethods.methods;
      if (availableAgeVerificationMethods.loading) {
        const _Symbol5 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp27 = __initData(closure_18, {});
          cResult[0] = tmp27;
          let first = tmp27;
        } else {
          first = cResult[0];
        }
      } else {
        if (null != methods) {
          if (0 !== methods.length) {
            if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
              const _Symbol2 = Symbol;
              if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp15 = __initData(closure_19, {});
                cResult[3] = tmp15;
              }
            } else {
              const _Symbol = Symbol;
              if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp10 = __initData(closure_17, {});
                cResult[4] = tmp10;
                let tmp7 = tmp10;
              } else {
                tmp7 = cResult[4];
              }
              return tmp7;
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.VTgFYh);
          cResult[1] = stringResult;
          let obj4 = stringResult;
        } else {
          obj4 = cResult[1];
        }
        const _Symbol4 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { type: "critical", message: obj4, role: "alert", action: null };
          obj4 = { text: null, onClick: null };
          const intl2 = util.intl;
          obj4.text = intl2.string(util.t.NkTGsC);
          obj4.onClick = handleManualReviewClick;
          obj3.action = obj4;
          const tmp21 = __initData(InlineNotice.InlineNotice, obj3);
          cResult[2] = tmp21;
        }
      }
    }
  : function ManualReviewBanner() {
      const availableAgeVerificationMethods = useAvailableAgeVerificationMethods.useAvailableAgeVerificationMethods();
      const methods = availableAgeVerificationMethods.methods;
      if (availableAgeVerificationMethods.loading) {
        let tmp5Result = __initData(closure_18, {});
      } else {
        if (null != methods) {
          if (0 !== methods.length) {
            if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
              tmp5Result = __initData(closure_19, {});
            } else {
              tmp5Result = __initData(closure_17, {});
            }
          }
        }
        const obj2 = { type: "critical", message: null, role: "alert", action: null };
        const intl = util.intl;
        obj2.message = intl.string(util.t.VTgFYh);
        const obj3 = { text: null, onClick: null };
        const intl2 = util.intl;
        obj3.text = intl2.string(util.t.NkTGsC);
        obj3.onClick = handleManualReviewClick;
        obj2.action = obj3;
        tmp5Result = __initData(InlineNotice.InlineNotice, obj2);
      }
      return tmp5Result;
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AutomatedUnderageAppealStatus() {
      let hyh4ls = require;
      let formatResult = dependencyMap;
      const cResult = c.c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function n() {
          return ageCheckStatus.getAgeCheckStatus();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp3 = items;
        tmp4 = fn;
      } else {
        [tmp3, tmp4] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
      const hyh4lsResult = initialize;
      const shouldShowInitialGoogleWalletBanner =
        useShouldShowInitialGoogleWalletBanner.useShouldShowInitialGoogleWalletBanner();
      if (stateFromStores === AgeCheckStatus.NONE) {
        if (cResult[2] !== shouldShowInitialGoogleWalletBanner) {
          let tmp46 = null;
          if (shouldShowInitialGoogleWalletBanner) {
            tmp46 = __initData(closure_19, {});
          }
          cResult[2] = shouldShowInitialGoogleWalletBanner;
          cResult[3] = tmp46;
        }
      } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
        const _Symbol9 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { type: "positive", message: null, role: "status" };
          const intl6 = util.intl;
          hyh4ls = util.t.hyh4ls;
          const obj3 = {
            loginHook(children) {
              return closure_1_12(require("Text/Text").Text, {
                variant: "text-sm/medium",
                color: "text-link",
                onPress() {
                  return closure_1_1(closure_1_3[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
                },
                children,
              });
            },
          };
          formatResult = intl6.format(hyh4ls, obj3);
          obj2.message = formatResult;
          const tmp43 = __initData(InlineNotice.InlineNotice, obj2);
          cResult[4] = tmp43;
        }
      } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
        const _Symbol7 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = util.intl;
          const stringResult = intl4.string(util.t["2Qe65J"]);
          cResult[5] = stringResult;
          let obj5 = stringResult;
        } else {
          obj5 = cResult[5];
        }
        const _Symbol8 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { type: "positive", message: obj5, role: "status", action: null };
          obj5 = { text: null, onClick: null };
          const intl5 = util.intl;
          obj5.text = intl5.string(util.t["2jvQ6K"]);
          obj5.onClick = handleLogInClick;
          obj4.action = obj5;
          const tmp39 = __initData(InlineNotice.InlineNotice, obj4);
          cResult[6] = tmp39;
        }
      } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
        const _Symbol6 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { type: "positive", message: null, role: "status" };
          const intl3 = util.intl;
          obj6.message = intl3.string(util.t.Ie7p1Q);
          const tmp33 = __initData(InlineNotice.InlineNotice, obj6);
          cResult[7] = tmp33;
        }
      } else if (stateFromStores === AgeCheckStatus.ERROR) {
        const _Symbol5 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { type: "critical", message: null, role: "alert" };
          const intl2 = util.intl;
          obj7.message = intl2.string(util.t["4sILBU"]);
          const tmp29 = __initData(InlineNotice.InlineNotice, obj7);
          cResult[8] = tmp29;
        }
      } else if (stateFromStores === AgeCheckStatus.FAILURE) {
        const _Symbol4 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { type: "critical", message: null, role: "alert" };
          const intl = util.intl;
          obj8.message = intl.string(util.t["40R63o"]);
          const tmp25 = __initData(InlineNotice.InlineNotice, obj8);
          cResult[9] = tmp25;
        }
      } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
        const _Symbol3 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp21 = __initData(closure_17, {});
          cResult[10] = tmp21;
        }
      } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp16 = __initData(closure_20, {});
          cResult[11] = tmp16;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp12 = __initData(closure_18, {});
          cResult[12] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[12];
        }
        return tmp9;
      }
      const hyh4lsResult1 = useShouldShowInitialGoogleWalletBanner;
    }
  : function AutomatedUnderageAppealStatus() {
      const items = [SafetyHubStore];
      const stateFromStores = initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus());
      useShouldShowInitialGoogleWalletBanner;
      if (stateFromStores === AgeCheckStatus.NONE) {
        let tmp20 = null;
        if (tmp5) {
          tmp20 = __initData(closure_19, {});
        }
        let tmp9 = tmp20;
      } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
        const obj2 = { type: "positive", message: null, role: "status" };
        const intl6 = util.intl;
        const obj3 = {
          loginHook(children) {
            return closure_1_12(require("Text/Text").Text, {
              variant: "text-sm/medium",
              color: "text-link",
              onPress() {
                return closure_1_1(closure_1_3[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
              },
              children,
            });
          },
        };
        obj2.message = intl6.format(util.t.hyh4ls, obj3);
        tmp9 = __initData(InlineNotice.InlineNotice, obj2);
      } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
        const obj4 = { type: "positive", message: null, role: "status", action: null };
        const intl4 = util.intl;
        obj4.message = intl4.string(util.t["2Qe65J"]);
        const obj5 = { text: null, onClick: null };
        const intl5 = util.intl;
        obj5.text = intl5.string(util.t["2jvQ6K"]);
        obj5.onClick = handleLogInClick;
        obj4.action = obj5;
        tmp9 = __initData(InlineNotice.InlineNotice, obj4);
      } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
        const obj6 = { type: "positive", message: null, role: "status" };
        const intl3 = util.intl;
        obj6.message = intl3.string(util.t.Ie7p1Q);
        tmp9 = __initData(InlineNotice.InlineNotice, obj6);
      } else if (stateFromStores === AgeCheckStatus.ERROR) {
        const obj7 = { type: "critical", message: null, role: "alert" };
        const intl2 = util.intl;
        obj7.message = intl2.string(util.t["4sILBU"]);
        tmp9 = __initData(InlineNotice.InlineNotice, obj7);
      } else if (stateFromStores === AgeCheckStatus.FAILURE) {
        const obj8 = { type: "critical", message: null, role: "alert" };
        const intl = util.intl;
        obj8.message = intl.string(util.t["40R63o"]);
        tmp9 = __initData(InlineNotice.InlineNotice, obj8);
      } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
        tmp9 = __initData(closure_17, {});
      } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
        tmp9 = __initData(closure_20, {});
      } else {
        tmp9 = __initData(closure_18, {});
      }
      return tmp9;
    };
const createStyles = fn(5092);
let obj7 = {
  container: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 },
  loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" },
  body: null,
  link: null,
};
let obj8 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj7.body = { gap: nativeDefault.space.PX_8 };
obj7.link = { textDecorationLine: "underline" };
let closure_22 = createStyles.createStyles(obj7);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  const tmp = closure_22();
  const tmp2 = importDefault;
  const tmp4 = require("useSafetyHubLoading")();
  const tmp5 = visible;
  importDefault = visible(safetyHubFetchError[22]).useSafetyHubInitialized();
  let obj = visible(safetyHubFetchError[22]);
  const state = visible(safetyHubFetchError[23]).useSafetyHubAccountStanding();
  let obj2 = visible(safetyHubFetchError[23]);
  safetyHubFetchError = visible(safetyHubFetchError[24]).useSafetyHubFetchError();
  require("useMountEffect")(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    if (closure_1) {
      const obj3 = { account_standing: state.state };
      AnalyticsUtilsDefault.track(constants.SAFETY_HUB_VIEWED, obj3);
      const obj5 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      MonitoringAgentDefault.increment(obj5);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = noop.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(14999, dependencyMap.paths),
          "SafetyHubErrorActionSheet",
          {},
        );
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp4) {
    let obj4 = { style: null, children: null };
    const items1 = [,];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj4.style = items1;
    obj4.children = closure_12(closure_6, { animating: true, size: "large" });
    let tmp9 = closure_12(closure_5, obj4);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      let obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.body, children: null };
      const items2 = [closure_12(closure_21, {}), closure_12(tmp2(tmp3[33]), {})];
      obj6.children = items2;
      const items3 = [
        closure_13(closure_5, obj6),
        closure_12(tmp5(tmp3[34]).ConnectedSafetyHubViolationsContainer, {}),
      ];
      obj5.children = items3;
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
}

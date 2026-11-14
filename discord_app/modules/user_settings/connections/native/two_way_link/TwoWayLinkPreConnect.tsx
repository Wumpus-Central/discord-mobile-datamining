// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import ConnectedAccountsActionCreatorsDefault from "../../../../../actions/ConnectedAccountsActionCreators.tsx";
import TwoWayLinkType from "../../../../../../discord_common/js/shared/shared-constants/TwoWayLinkType.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_12 = async function _fetchAuthorizeURL() {
  await ConnectedAccountsActionCreatorsDefault.authorize(closure_0, {
    twoWayLinkType: TwoWayLinkType.TwoWayLinkType.MOBILE,
  });
  return value.body.url;
};
const View = fn(17).View;
const WebBrowserType = fn(1072).WebBrowserType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = new LoggerDefault("TwoWayLink");
const createStyles = fn(5306);
let closure_11 = createStyles.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx",
);

export function TwoWayLinkPreConnect(platformType) {
  platformType = platformType.platformType;
  const onError = platformType.onError;
  const onNext = platformType.onNext;
  ({ imgStyle, redirectDestination, autoStart } = platformType);
  ({ img, title, body } = platformType);
  if (autoStart === undefined) {
    autoStart = false;
  }
  asyncGeneratorStep = undefined;
  noop = undefined;
  const tmp = closure_11();
  const twoWayLinkStyles = platformType(onNext[10]).useTwoWayLinkStyles();
  let obj = platformType(onNext[10]);
  [tmp6, c4] = autoStart(noop.useState(false), 2);
  noop = noop.useRef(undefined);
  closure_6 = noop.useRef(false);
  const effect = noop.useEffect(() => {
    closure_6.current = true;
    return () => {
      closure_1_6.current = false;
    };
  }, []);
  items = [onError, platformType];
  const onPress = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              platformType = tmp7;
              closure_128_0 = undefined;
              state = undefined;
              v2(true);
              c3 = 1;
              v2 = 2;
              c5 = 1;
              const obj4 = {
                value: (function fetchAuthorizeURL() {
                  const self = this;
                  const apply = closure_1_12.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(platformType),
                done: false,
              };
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            if (closure_129_6.current) {
              closure_129_4(false);
              closure_129_1();
              c5 = 3;
              const obj5 = { value: undefined, done: true };
              return obj5;
            } else {
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            c3 = 0;
            if (!closure_129_6.current) {
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              let tmp12 = tmp3(tmp42[11]);
              let getCallbackParamsFromURL = tmp12.openURL;
              let tmp13 = closure_128_0;
              let tmp17 = onPress;
              if (obj.isAndroid()) {
                let IN_APP = tmp17.CHROME;
              } else {
                IN_APP = tmp17.IN_APP;
              }
              const callbackParamsFromURL = getCallbackParamsFromURL(tmp13, IN_APP);
              closure_129_4(false);
              tmp12 = platformType(tmp42[13]);
              getCallbackParamsFromURL = tmp12.getCallbackParamsFromURL;
              state = getCallbackParamsFromURL(closure_128_0).state;
              tmp13 = tmp3(tmp42[14]);
              tmp13(null != state, "Authorize URL state query parameter must be present");
              tmp17 = state;
              closure_129_5.current = state;
              obj = platformType(tmp42[12]);
            }
          }
        } catch (tmp42) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp42;
          } else {
            v2 = tmp;
          }
        }
      }
    }),
    items,
  );
  onError(onNext[15])(() => {
    if (autoStart) {
      callback();
    }
  });
  const items1 = [platformType, onNext];
  const callback1 = noop.useCallback((callbackState) => {
    callbackState = callbackState.callbackState;
    if (callbackState === ref.current) {
      const obj = { callbackCode: tmp, callbackState };
      onNext(obj);
    } else {
      const _HermesInternal = HermesInternal;
      logger.warn("" + platformType + " link: received mismatching callback state!");
    }
  }, items1);
  const items2 = [callback1];
  const effect1 = noop.useEffect(() => {
    const subscription = DispatcherDefault.subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    return () => {
      onError(onNext[16]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    };
  }, items2);
  let obj2 = { style: twoWayLinkStyles.container, children: null };
  let obj3 = { style: twoWayLinkStyles.content, children: null };
  let obj4 = { source: img, style: null };
  const items3 = [tmp.image];
  const tmp5 = autoStart(noop.useState(false), 2);
  if (imgStyle == null) {
    imgStyle = false;
  }
  items3[1] = imgStyle;
  obj4.style = items3;
  const items4 = [
    callback1(onError(onNext[17]), obj4),
    callback1(platformType(onNext[18]).Text, {
      variant: "heading-xl/semibold",
      color: "mobile-text-heading-primary",
      style: twoWayLinkStyles.title,
      accessibilityRole: "header",
      children: title,
    }),
    callback1(platformType(onNext[18]).Text, {
      variant: "body-md/medium",
      color: "text-default",
      style: twoWayLinkStyles.body,
      children: body,
    }),
  ];
  let tmp14Result = null != redirectDestination;
  if (tmp14Result) {
    const obj7 = { style: tmp.redirect, variant: "body-sm/medium", color: "text-default", children: null };
    const intl = tmp2(tmp3[19]).intl;
    const obj8 = { redirectUrl: redirectDestination };
    obj7.children = intl.format(tmp2(tmp3[19]).t.XhlYYn, obj8);
    tmp14Result = tmp14(tmp2(tmp3[18]).Text, obj7);
  }
  items4[3] = tmp14Result;
  obj3.children = items4;
  const items5 = [closure_9(closure_6, obj3)];
  const obj9 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj10 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
  const intl2 = tmp2(tmp3[19]).intl;
  obj11.text = intl2.string(platformType(onNext[19]).t["3PatSz"]);
  obj11.onPress = onPress;
  obj11.loading = tmp6;
  obj10.children = callback1(platformType(onNext[21]).Button, obj11);
  obj9.children = callback1(closure_6, obj10);
  items5[1] = callback1(platformType(onNext[20]).SafeAreaPaddingView, obj9);
  obj2.children = items5;
  return closure_9(closure_6, obj2);
}

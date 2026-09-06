// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import ConnectedAccountsActionCreatorsDefault from "../../../../../actions/ConnectedAccountsActionCreators.tsx";
import TwoWayLinkType from "../../../../../../discord_common/js/shared/shared-constants/TwoWayLinkType.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_13 = async function _authorizeLink(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          let url;
          const obj1 = { twoWayLinkType: TwoWayLinkType.TwoWayLinkType.MOBILE };
          c3 = 1;
          c4 = 1;
          const obj2 = { value: ConnectedAccountsActionCreatorsDefault.authorize(closure_0, obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        url = value.body.url;
        const obj5 = closure_130_1(closure_130_2[10]);
        const tmp18 = url;
        let tmp6 = closure_130_8;
        if (obj6.isAndroid()) {
          let IN_APP = tmp6.CHROME;
        } else {
          IN_APP = tmp6.IN_APP;
        }
        tmp6 = closure_1;
        obj5.openURL(tmp18, IN_APP);
        c4 = 3;
        obj6 = closure_130_0(closure_130_2[11]);
      }
    } catch (tmp9) {
      c4 = tmp;
      throw tmp9;
    }
  }
};
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const WebBrowserType = fn(1074).WebBrowserType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = new LoggerDefault("TwoWayLink");
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx",
);

export const TwoWayLinkPreConnect = function TwoWayLinkPreConnect(platformType) {
  platformType = platformType.platformType;
  const onError = platformType.onError;
  const onNext = platformType.onNext;
  ({ imgStyle, redirectDestination } = platformType);
  _slicedToArray = undefined;
  let callback1;
  ({ img, title, body } = platformType);
  const tmp = closure_12();
  let obj = platformType(onNext[12]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [tmp6, c3] = _slicedToArray(callback1.useState(false), 2);
  asyncGeneratorStep = callback1.useRef(undefined);
  const items = [onError, platformType];
  const items1 = [platformType, onNext];
  const callback = callback1.useCallback(
    asyncGeneratorStep(async () => {
      v0(true);
      await (function authorizeLink() {
        const self = this;
        const apply = closure_1_13.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(platformType);
      closure_128_0 = value;
      closure_129_3(false);
      const state = platformType(tmp15[13]).getCallbackParamsFromURL(closure_128_0).state;
      tmp3(tmp15[14])(null != state, "Authorize URL state query parameter must be present");
      closure_129_4.current = state;
      await "HermesInternal";
      v0 = 0;
      closure_129_1();
    }),
    items,
  );
  callback1 = callback1.useCallback((callbackState) => {
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
  const effect = callback1.useEffect(() => {
    const subscription = DispatcherDefault.subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    return () => {
      onError(onNext[15]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    };
  }, items2);
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const obj1 = { source: img, style: null };
  const items3 = [tmp.image];
  if (imgStyle == null) {
    imgStyle = false;
  }
  items3[1] = imgStyle;
  obj1.style = items3;
  const items4 = [
    closure_9(closure_6, obj1),
    closure_9(platformType(onNext[16]).Text, {
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      style: twoWayLinkStyles.title,
      accessibilityRole: "header",
      children: title,
    }),
    closure_9(platformType(onNext[16]).Text, {
      variant: "text-md/medium",
      color: "text-default",
      style: twoWayLinkStyles.body,
      children: body,
    }),
  ];
  let tmp12Result = null != redirectDestination;
  if (tmp12Result) {
    const obj4 = { style: tmp.redirect, variant: "text-sm/medium", color: "text-default", children: null };
    const intl = tmp2(tmp3[17]).intl;
    const obj5 = { redirectUrl: redirectDestination };
    obj4.children = intl.format(tmp2(tmp3[17]).t.XhlYYn, obj5);
    tmp12Result = closure_9(tmp2(tmp3[16]).Text, obj4);
  }
  items4[3] = tmp12Result;
  obj.children = items4;
  const items5 = [closure_10(closure_7, obj)];
  const obj6 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj7 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
  const intl2 = tmp2(tmp3[17]).intl;
  obj8.text = intl2.string(platformType(onNext[17]).t["3PatSz"]);
  obj8.onPress = callback;
  obj8.loading = tmp6;
  obj7.children = closure_9(platformType(onNext[19]).Button, obj8);
  obj6.children = closure_9(closure_7, obj7);
  items5[1] = closure_9(platformType(onNext[18]).SafeAreaPaddingView, obj6);
  obj.children = items5;
  return closure_10(closure_7, obj);
};

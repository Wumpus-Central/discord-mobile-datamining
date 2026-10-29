// === Module 18881: ConjureHomeScreen ===

// Module 18881 (ConjureHomeScreen)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6555 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ConjureHomeScreen = "ConjureHomeScreen";
const createStyles = fn(5005);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.centered = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_24 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeScreen(navigation) {
  const cResult = navigation(first[8]).c(27);
  navigation = navigation.navigation;
  closure_11();
  ({ projectId, requestId, focusComposer } = navigation.route.params);
  const obj = navigation(first[8]);
  const isFocused = navigation(first[9]).useIsFocused();
  if (cResult[0] !== navigation) {
    const fn = function l() {
      if (navigation.canGoBack()) {
        let goBackResult = navigation.goBack();
      } else {
        goBackResult = navigation.navigate("main");
      }
      return goBackResult;
    };
    cResult[0] = navigation;
    cResult[1] = fn;
  }
  const obj2 = navigation(first[9]);
  const conjureForMeGuildId = navigation(first[10]).useConjureForMeGuildId(ConjureHomeScreen);
  if (cResult[2] === isFocused) {
    if (cResult[3] === projectId) {
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        class T {
          constructor() {
            return closure_1_7.isConnectedOrOverlay();
          }
        }
        cResult[6] = items;
        cResult[7] = T;
        let tmp11 = T;
        let tmp10 = items;
      } else {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      const stateFromStores = tmp(tmp2[11]).useStateFromStores(tmp10, tmp11);
      let tmp14;
      if (true === focusComposer) {
        if (requestId == null) {
          requestId = 0;
        }
        tmp14 = requestId;
      }
      requestId = tmp14;
      [first, _slicedToArray] = noop.useState();
      noop = noop.useRef(false);
      if (cResult[8] !== navigation) {
        class A {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                ref.current = true;
              }
            });
          }
        }
        const items1 = [navigation];
        class T {
          constructor() {
            return closure_1_7.isConnectedOrOverlay();
          }
        }
        cResult[8] = navigation;
        cResult[9] = A;
        cResult[10] = items1;
        let tmp20 = items1;
      } else {
        class A {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                ref.current = true;
              }
            });
          }
        }
        tmp20 = cResult[10];
      }
      const effect = noop.useEffect(A, tmp20);
      if (cResult[11] === tmp14) {
        class A {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                ref.current = true;
              }
            });
          }
        }
      }
      class O {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_2;
            if (closure_2 !== tmp) {
              ready = function ready() {
                ref.current = true;
                closure_3(closure_1);
              };
              tmp3 = closure_4;
              if (closure_4.current) {
                tmp4 = ready;
                if (ready.isFocused()) {
                  tmp7 = globalThis;
                  _requestAnimationFrame = requestAnimationFrame;
                  closure_1 = requestAnimationFrame(ready);
                  return () => cancelAnimationFrame(closure_1);
                }
              }
              tmp5 = globalThis;
              _setTimeout = setTimeout;
              num = 1000;
              closure_2 = setTimeout(ready, 1000);
              tmp6 = ready;
              str = "transitionEnd";
              closure_3 = ready.addListener("transitionEnd", (data) => {
                if (!data.data.closing) {
                  if (typeof ready === "function") {
                    closure_4.current = true;
                    closure_3(requestId);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              });
              return () => {
                clearTimeout(closure_2);
                closure_3();
              };
            }
          }
          return;
        }
      }
      const items2 = [tmp14, first, navigation];
      cResult[11] = tmp14;
      cResult[12] = navigation;
      cResult[13] = first;
      cResult[14] = O;
      cResult[15] = items2;
      const tmpResult2 = tmp(tmp2[11]);
    }
  }
  cResult[2] = isFocused;
  cResult[3] = projectId;
  cResult[4] = requestId;
  cResult[5] = { routeFocused: null, projectId, requestId };
  const obj3 = { routeFocused: null, projectId, requestId };
  const tmpResult = navigation(first[10]);
}) : (function ConjureHomeScreen(navigation) {
  navigation = navigation.navigation;
  let first;
  closure_6 = undefined;
  let ref;
  const tmp = closure_11();
  const params = navigation.route.params;
  const projectId = params.projectId;
  let num = params.requestId;
  const isFocused = navigation(num[9]).useIsFocused();
  const items = [navigation];
  const callback = num.useCallback(() => {
    if (navigation.canGoBack()) {
      let goBackResult = navigation.goBack();
    } else {
      goBackResult = navigation.navigate("main");
    }
    return goBackResult;
  }, items);
  const obj = navigation(num[9]);
  const conjureForMeGuildId = navigation(num[10]).useConjureForMeGuildId(ConjureHomeScreen);
  const items1 = [isFocused, projectId, num];
  const memo = num.useMemo(() => ({ routeFocused: isFocused, projectId, requestId: num }), items1);
  const obj3 = navigation(num[10]);
  const items2 = [ref];
  let tmp9;
  const stateFromStores = navigation(num[11]).useStateFromStores(items2, () => ref.isConnectedOrOverlay());
  if (true === params.focusComposer) {
    if (num == null) {
      num = 0;
    }
    tmp9 = num;
  }
  num = tmp9;
  const tmp11 = isFocused(num.useState(), 2);
  first = tmp11[0];
  closure_6 = tmp11[1];
  ref = obj2.useRef(false);
  const items3 = [navigation];
  const effect = obj2.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      ref.current = true;
    }
  }), items3);
  const items4 = [tmp9, first, navigation];
  const effect1 = obj2.useEffect(() => {
    if (null != num) {
      if (first !== tmp) {
        function ready() {
          ref.current = true;
          closure_1_6(num);
        }
        if (ref.current) {
          if (navigation.isFocused()) {
            const _requestAnimationFrame = requestAnimationFrame;
            navigation = requestAnimationFrame(ready);
            return () => cancelAnimationFrame(closure_0);
          }
        }
        const _setTimeout = setTimeout;
        const timeout = setTimeout(ready, 1000);
        closure_2 = navigation.addListener("transitionEnd", (data) => {
          if (!data.data.closing) {
            ref.current = true;
            closure_1_6(num);
          }
        });
        return () => {
          clearTimeout(closure_1);
          closure_2();
        };
      }
    }
  }, items4);
  const obj5 = { style: tmp.container, children: null };
  if (null != conjureForMeGuildId) {
    const obj6 = { value: memo, children: null };
    const obj7 = { guildId: conjureForMeGuildId, onClose: callback, focusRequest: null };
    let tmp23 = null;
    if (null != tmp9) {
      tmp23 = null;
      if (first === tmp9) {
        tmp23 = tmp9;
      }
    }
    obj7.focusRequest = tmp23;
    obj6.children = closure_8(projectId(tmp3[13]), obj7);
    let tmp15Result = closure_8(projectId(tmp3[12]).Provider, obj6);
    const tmp22 = projectId(tmp3[13]);
  } else {
    const obj8 = { style: null, children: null };
    if (stateFromStores) {
      obj8.style = tmp.centered;
      const obj9 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      const intl = tmp2(tmp3[15]).intl;
      obj9.children = intl.string(projectId(tmp3[16])["c+8IMp"]);
      const items5 = [closure_8(tmp2(tmp3[14]).Text, obj9), , ];
      const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl2 = tmp2(tmp3[15]).intl;
      obj10.children = intl2.string(projectId(tmp3[16])["5PqGKy"]);
      items5[1] = closure_8(tmp2(tmp3[14]).Text, obj10);
      const obj11 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp2(tmp3[15]).intl;
      obj11.text = intl3.string(tmp2(tmp3[15]).t["13/7kX"]);
      obj11.onPress = callback;
      items5[2] = closure_8(tmp2(tmp3[17]).Button, obj11);
      obj8.children = items5;
      tmp15Result = closure_9(tmp16, obj8);
    } else {
      obj8.style = tmp.centered;
      obj8.children = closure_8(first, {});
      tmp15Result = closure_8(tmp16, obj8);
    }
  }
  obj5.children = tmp15Result;
  return closure_8(closure_6, obj5);
});
// === Module 18990: ConjureHomeScreen ===

// Module 18990 (ConjureHomeScreen)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
const obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.centered = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeScreen.tsx");

export default function ConjureHomeScreen(navigation) {
  navigation = navigation.navigation;
  let first;
  let connectedOrOverlay;
  let ref;
  const tmp = closure_10();
  const params = navigation.route.params;
  const projectId = params.projectId;
  let num = params.requestId;
  const entryPoint = params.entryPoint;
  const isFocused = navigation(num[7]).useIsFocused();
  const items = [navigation];
  const callback = isFocused.useCallback(() => {
    if (navigation.canGoBack()) {
      let goBackResult = navigation.goBack();
    } else {
      goBackResult = navigation.navigate("main");
    }
    return goBackResult;
  }, items);
  const obj = navigation(num[7]);
  const conjureForMeGuildId = navigation(num[8]).useConjureForMeGuildId("ConjureHomeScreen");
  const items1 = [isFocused, projectId, num, entryPoint];
  const memo = isFocused.useMemo(() => ({ routeFocused: isFocused, projectId, requestId: num, entryPoint }), items1);
  const obj3 = navigation(num[8]);
  const items2 = [connectedOrOverlay];
  let tmp9;
  const stateFromStores = navigation(num[9]).useStateFromStores(items2, () => connectedOrOverlay.isConnectedOrOverlay());
  if (true === params.focusComposer) {
    if (num == null) {
      num = 0;
    }
    tmp9 = num;
  }
  num = tmp9;
  const tmp11 = entryPoint(isFocused.useState(), 2);
  first = tmp11[0];
  connectedOrOverlay = tmp11[1];
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
          connectedOrOverlay(num);
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
            connectedOrOverlay(num);
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
    obj6.children = tmp15(projectId(tmp3[11]), obj7);
    let tmp15Result = tmp15(projectId(tmp3[10]).Provider, obj6);
    const tmp22 = projectId(tmp3[11]);
  } else {
    const obj8 = { style: null, children: null };
    if (stateFromStores) {
      obj8.style = tmp.centered;
      const obj9 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      const intl = tmp2(tmp3[13]).intl;
      obj9.children = intl.string(projectId(tmp3[14])["c+8IMp"]);
      const items5 = [tmp15(tmp2(tmp3[12]).Text, obj9), , ];
      const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl2 = tmp2(tmp3[13]).intl;
      obj10.children = intl2.string(projectId(tmp3[14])["5PqGKy"]);
      items5[1] = tmp15(tmp2(tmp3[12]).Text, obj10);
      const obj11 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp2(tmp3[13]).intl;
      obj11.text = intl3.string(tmp2(tmp3[13]).t["13/7kX"]);
      obj11.onPress = callback;
      items5[2] = tmp15(tmp2(tmp3[15]).Button, obj11);
      obj8.children = items5;
      tmp15Result = closure_9(tmp16, obj8);
    } else {
      obj8.style = tmp.centered;
      obj8.children = tmp15(num, {});
      tmp15Result = tmp15(tmp16, obj8);
    }
  }
  obj5.children = tmp15Result;
  return ref(first, obj5);
};
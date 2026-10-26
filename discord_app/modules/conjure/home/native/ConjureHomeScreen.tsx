// discord_app/modules/conjure/home/native/ConjureHomeScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import ConjureStandaloneScreenDefault from "../../builder/native/ConjureStandaloneScreen.tsx";
import ConjureGlobalScreenContextDefault from "../../builder/native/ConjureGlobalScreenContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ConjureHomeScreen = "ConjureHomeScreen";
const createStyles = fn(4971);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.centered = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_24,
};
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_24,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureHomeScreen(navigation) {
      let tmp2 = dependencyMap;
      const cResult = navigation(576).c(17);
      navigation = navigation.navigation;
      const tmp4 = closure_10();
      ({ projectId, requestId } = navigation.route.params);
      const obj = navigation(576);
      const isFocused = navigation(1506).useIsFocused();
      if (cResult[0] !== navigation) {
        const fn = function n() {
          if (navigation.canGoBack()) {
            let goBackResult = navigation.goBack();
          } else {
            goBackResult = navigation.navigate("main");
          }
          return goBackResult;
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      const obj2 = navigation(1506);
      const conjureForMeGuildId = navigation(12304).useConjureForMeGuildId(ConjureHomeScreen);
      if (cResult[2] === isFocused) {
        if (cResult[3] === projectId) {
          if (cResult[4] === requestId) {
            let tmp8 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [GatewayConnectionStore];
            class B {
              constructor() {
                return closure_1_6.isConnectedOrOverlay();
              }
            }
            cResult[6] = items;
            cResult[7] = B;
            let tmp11 = B;
            let tmp10 = items;
          } else {
            tmp10 = cResult[6];
            tmp11 = cResult[7];
          }
          let centered = tmp(504).useStateFromStores(tmp10, tmp11);
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp8) {
              if (cResult[10] === centered) {
                if (cResult[11] === tmp4.centered) {
                  if (cResult[12] === conjureForMeGuildId) {
                    if (cResult[14] === tmp4.container) {
                      if (cResult[15] === tmp13) {
                        let tmp26 = cResult[16];
                      }
                      return tmp26;
                    }
                    class B {
                      constructor() {
                        return closure_1_6.isConnectedOrOverlay();
                      }
                    }
                    const obj3 = { style: tmp4.container, children: cResult[13] };
                    const tmp28 = closure_7(closure_5, obj3);
                    cResult[14] = tmp4.container;
                    cResult[15] = cResult[13];
                    cResult[16] = tmp28;
                    tmp26 = tmp28;
                  }
                }
              }
            }
          }
          if (null != conjureForMeGuildId) {
            const obj4 = { value: null, children: null };
            class B {
              constructor() {
                return closure_1_6.isConnectedOrOverlay();
              }
            }
            const obj5 = { guildId: conjureForMeGuildId, onClose: tmp6 };
            tmp2 = closure_7(ConjureStandaloneScreenDefault, obj5);
            obj4.children = tmp2;
            let tmp18 = closure_7(ConjureGlobalScreenContextDefault.Provider, obj4);
          } else if (centered) {
            const obj6 = { style: null, children: null };
            class B {
              constructor() {
                return closure_1_6.isConnectedOrOverlay();
              }
            }
            const obj7 = { variant: "heading-lg/semibold", color: "text-default", children: null };
            const intl = tmp(1128).intl;
            obj7.children = intl.string(_modDef3830["c+8IMp"]);
            const items1 = [closure_7(tmp(5234).Text, obj7), ,];
            const obj8 = { variant: "text-md/normal", color: "text-muted", children: null };
            const intl2 = tmp(1128).intl;
            obj8.children = intl2.string(_modDef3830["5PqGKy"]);
            items1[1] = closure_7(tmp(5234).Text, obj8);
            const obj9 = { variant: "secondary", size: "sm", text: null, onPress: null };
            const intl3 = tmp(1128).intl;
            obj9.text = intl3.string(tmp(1128).t["13/7kX"]);
            obj9.onPress = tmp6;
            items1[2] = closure_7(tmp(5244).Button, obj9);
            obj6.children = items1;
            tmp18 = closure_8(closure_5, obj6);
          } else {
            const obj10 = { style: null, children: null };
            class B {
              constructor() {
                return closure_1_6.isConnectedOrOverlay();
              }
            }
            obj10.children = closure_7(closure_4, {});
            tmp18 = closure_7(closure_5, obj10);
          }
          cResult[8] = tmp6;
          cResult[9] = tmp8;
          cResult[10] = centered;
          centered = tmp4.centered;
          cResult[11] = centered;
          cResult[12] = conjureForMeGuildId;
          cResult[13] = tmp18;
          const tmpResult2 = tmp(504);
        }
      }
      const obj11 = { routeFocused: isFocused, projectId, requestId };
      cResult[2] = isFocused;
      cResult[3] = projectId;
      cResult[4] = requestId;
      cResult[5] = obj11;
      tmp8 = obj11;
      const tmpResult = navigation(12304);
    }
  : function ConjureHomeScreen(navigation) {
      navigation = navigation.navigation;
      const tmp = closure_10();
      const params = navigation.route.params;
      const projectId = params.projectId;
      const requestId = params.requestId;
      const isFocused = navigation(requestId[8]).useIsFocused();
      const items = [navigation];
      const callback = isFocused.useCallback(() => {
        if (navigation.canGoBack()) {
          let goBackResult = navigation.goBack();
        } else {
          goBackResult = navigation.navigate("main");
        }
        return goBackResult;
      }, items);
      const obj = navigation(requestId[8]);
      const conjureForMeGuildId = navigation(requestId[9]).useConjureForMeGuildId(ConjureHomeScreen);
      const items1 = [isFocused, projectId, requestId];
      const memo = isFocused.useMemo(() => ({ routeFocused: isFocused, projectId, requestId }), items1);
      navigation(requestId[10]);
      [][0] = GatewayConnectionStore;
      const obj3 = { style: tmp.container, children: null };
      if (null != conjureForMeGuildId) {
        const obj4 = { value: memo, children: null };
        const obj5 = { guildId: conjureForMeGuildId, onClose: callback };
        obj4.children = closure_7(projectId(tmp3[12]), obj5);
        let tmp10Result = closure_7(projectId(tmp3[11]).Provider, obj4);
      } else {
        const obj6 = { style: null, children: null };
        if (tmp9) {
          obj6.style = tmp.centered;
          const obj7 = { variant: "heading-lg/semibold", color: "text-default", children: null };
          const intl = tmp2(tmp3[14]).intl;
          obj7.children = intl.string(projectId(tmp3[15])["c+8IMp"]);
          const items2 = [closure_7(tmp2(tmp3[13]).Text, obj7), ,];
          const obj8 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl2 = tmp2(tmp3[14]).intl;
          obj8.children = intl2.string(projectId(tmp3[15])["5PqGKy"]);
          items2[1] = closure_7(tmp2(tmp3[13]).Text, obj8);
          const obj9 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl3 = tmp2(tmp3[14]).intl;
          obj9.text = intl3.string(tmp2(tmp3[14]).t["13/7kX"]);
          obj9.onPress = callback;
          items2[2] = closure_7(tmp2(tmp3[16]).Button, obj9);
          obj6.children = items2;
          tmp10Result = closure_8(closure_5, obj6);
        } else {
          obj6.style = tmp.centered;
          obj6.children = closure_7(closure_4, {});
          tmp10Result = closure_7(closure_5, obj6);
        }
      }
      obj3.children = tmp10Result;
      return closure_7(closure_5, obj3);
    };

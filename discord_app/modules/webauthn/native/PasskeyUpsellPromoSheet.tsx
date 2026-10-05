// discord_app/modules/webauthn/native/PasskeyUpsellPromoSheet.tsx
import NativeCeremoniesDefault from "NativeCeremonies.tsx";
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators.tsx";
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const Image = fn(17).Image;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { source: tmp(15515), style: { height: 190, width: 220, resizeMode: "contain" } };
        const tmp7 = closure_7(Image, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      _require = noop.useRef(false);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h() {
          if (!ref.current) {
            tmp.current = true;
            PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
            const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellPromoSheet();
            const obj4 = {
              setRegistering() {},
              onRegisterSuccess(arg0) {
                ({ ticket, credential } = arg0);
                const obj2 = { screen: constants.WEBAUTHN_NAME, params: null };
                const obj3 = { ticket, credential, name: null };
                const intl = ref(1126).intl;
                obj3.name = intl.string(ref(1126).t["8H5RmH"]);
                obj2.params = obj3;
                ref(6885).openUserSettings(obj2);
              },
            };
            NativeCeremoniesDefault.registerPasskey(obj4).catch(() => {});
            const registerPasskeyResult = NativeCeremoniesDefault.registerPasskey(obj4);
          }
        };
        cResult[1] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
            obj2 = closure_1_1(closure_1_2[9]);
            result = obj2.closePasskeyUpsellPromoSheet();
            return;
          }
        }
        cResult[2] = P;
      } else {
        class P {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
            obj2 = closure_1_1(closure_1_2[9]);
            result = obj2.closePasskeyUpsellPromoSheet();
            return;
          }
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
            obj2 = closure_1_1(closure_1_2[9]);
            result = obj2.closePasskeyUpsellPromoSheet();
            return;
          }
        }
        const stringResult = obj3.string(tmp(1126).t.CjleBl);
        const tmpResult = tmp(1369);
        const string = tmp(1126).intl.string;
        const I = tmp(1126).t;
        if (isIOSResult) {
          class P {
            constructor() {
              obj = closure_1_1(closure_1_2[8]);
              markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
              obj2 = closure_1_1(closure_1_2[9]);
              result = obj2.closePasskeyUpsellPromoSheet();
              return;
            }
          }
        } else {
          class P {
            constructor() {
              obj = closure_1_1(closure_1_2[8]);
              markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
              obj2 = closure_1_1(closure_1_2[9]);
              result = obj2.closePasskeyUpsellPromoSheet();
              return;
            }
          }
        }
        class I {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            return obj.markDismissed(closure_1_6.USER_DISMISS);
          }
        }
        cResult[3] = stringResult;
        cResult[4] = tmp12;
        cResult[5] = I;
        isIOSResult = tmp(1369).isIOS();
      } else {
        class P {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
            obj2 = closure_1_1(closure_1_2[9]);
            result = obj2.closePasskeyUpsellPromoSheet();
            return;
          }
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              obj = closure_1_1(closure_1_2[8]);
              markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
              obj2 = closure_1_1(closure_1_2[9]);
              result = obj2.closePasskeyUpsellPromoSheet();
              return;
            }
          }
          let obj4 = { size: "lg", onPress: tmp8, text: null };
          let intl = tmp(1126).intl;
          obj4.text = intl.string(tmp(1126).t.NIFmCJ);
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[8]);
              return obj.markDismissed(closure_1_6.USER_DISMISS);
            }
          }
          const tmp17 = closure_7(tmp(5594).Button, obj4);
          const tmp16 = closure_7(tmp(5594).Button, obj4);
        } else {
          class P {
            constructor() {
              obj = closure_1_1(closure_1_2[8]);
              markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
              obj2 = closure_1_1(closure_1_2[9]);
              result = obj2.closePasskeyUpsellPromoSheet();
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              obj = closure_1_1(closure_1_2[8]);
              markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
              obj2 = closure_1_1(closure_1_2[9]);
              result = obj2.closePasskeyUpsellPromoSheet();
              return;
            }
          }
          const obj5 = {
            illustration: first,
            title: cResult[3],
            description: cResult[4],
            onDismiss: cResult[5],
            actions: null,
          };
          const obj6 = { children: null };
          class I {
            constructor() {
              obj = closure_1_1(closure_1_2[8]);
              return obj.markDismissed(closure_1_6.USER_DISMISS);
            }
          }
          tmp20[0] = tmp16;
          const obj7 = { size: "lg", variant: "secondary", onPress: P, text: null };
          const intl2 = tmp(1126).intl;
          obj7.text = intl2.string(tmp(1126).t["7J6/nG"]);
          tmp20[1] = closure_7(tmp(5594).Button, obj7);
          obj6.children = tmp20;
          obj5.actions = closure_8(tmp(5592).ButtonGroup, obj6);
          const tmp21 = closure_7(tmp(10045).PromoSheet, obj5);
          cResult[7] = tmp21;
        } else {
          class P {
            constructor() {
              obj = closure_1_1(closure_1_2[8]);
              markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
              obj2 = closure_1_1(closure_1_2[9]);
              result = obj2.closePasskeyUpsellPromoSheet();
              return;
            }
          }
        }
        class I {
          constructor() {
            obj = closure_1_1(closure_1_2[8]);
            return obj.markDismissed(closure_1_6.USER_DISMISS);
          }
        }
      }
      let obj = require("c");
    }
  : () => {
      let obj = {
        source: require("../../../../_runtime/metro/15515__.js"),
        style: { height: 190, width: 220, resizeMode: "contain" },
      };
      _require = noop.useRef(false);
      let obj2 = {
        illustration: closure_7(Image, {
          source: require("../../../../_runtime/metro/15515__.js"),
          style: { height: 190, width: 220, resizeMode: "contain" },
        }),
        title: null,
        description: null,
        onDismiss: null,
        actions: null,
      };
      let intl = require("util").intl;
      obj2.title = intl.string(require("util").t.CjleBl);
      const tmp4 = closure_7(Image, {
        source: require("../../../../_runtime/metro/15515__.js"),
        style: { height: 190, width: 220, resizeMode: "contain" },
      });
      let obj3 = require("PlatformUtils");
      const intl2 = require("util").intl;
      const string = intl2.string;
      const t = require("util").t;
      if (isIOSResult) {
        let stringResult = string(t["7yxR9t"]);
      } else {
        stringResult = string(t.d6uxJy);
      }
      obj2.description = stringResult;
      obj2.onDismiss = function onDismiss() {
        return PasskeyUpsellManagerDefault.markDismissed(constants.USER_DISMISS);
      };
      let obj4 = { children: null };
      const obj5 = {
        size: "lg",
        onPress() {
          if (!ref.current) {
            tmp.current = true;
            PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
            const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellPromoSheet();
            const obj4 = {
              setRegistering() {},
              onRegisterSuccess(arg0) {
                ({ ticket, credential } = arg0);
                const obj2 = { screen: constants.WEBAUTHN_NAME, params: null };
                const obj3 = { ticket, credential, name: null };
                const intl = ref(1126).intl;
                obj3.name = intl.string(ref(1126).t["8H5RmH"]);
                obj2.params = obj3;
                ref(6885).openUserSettings(obj2);
              },
            };
            NativeCeremoniesDefault.registerPasskey(obj4).catch(() => {});
            const registerPasskeyResult = NativeCeremoniesDefault.registerPasskey(obj4);
          }
        },
        text: null,
      };
      const intl3 = tmp2(1126).intl;
      obj5.text = intl3.string(require("util").t.NIFmCJ);
      const items = [closure_7(require("components/Button/Button").Button, obj5)];
      const obj6 = {
        size: "lg",
        variant: "secondary",
        onPress() {
          PasskeyUpsellManagerDefault.markDismissed(constants.USER_DISMISS);
          const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellPromoSheet();
        },
        text: null,
      };
      const intl4 = tmp2(1126).intl;
      obj6.text = intl4.string(require("util").t["7J6/nG"]);
      items[1] = closure_7(require("components/Button/Button").Button, obj6);
      obj4.children = items;
      obj2.actions = closure_8(require("ButtonGroup").ButtonGroup, obj4);
      return closure_7(require("PromoSheet").PromoSheet, obj2);
    };

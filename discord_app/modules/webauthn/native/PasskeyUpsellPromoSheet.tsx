// discord_app/modules/webauthn/native/PasskeyUpsellPromoSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import NativeCeremoniesDefault from "NativeCeremonies.tsx";
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators.tsx";
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
const Image = react_native.Image;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let ButtonGroup;
      let first;
      let intl;
      let intl2;
      let obj3;
      let obj6;
      let ref;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp16;
      let tmp18;
      let tmp8;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { source: tmp(15531), style: { height: 190, width: 220, resizeMode: "contain" } };
        const tmp7 = closure_7(Image, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      _require = react.useRef(false);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h() {
          if (!ref.current) {
            tmp.current = true;
            let obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
            let obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
            const obj4 = {
              setRegistering() {},
              onRegisterSuccess(arg0) {
                let credential;
                let intl;
                let obj2;
                let ticket;
                ({ ticket, credential } = arg0);
                const obj = { screen: constants.WEBAUTHN_NAME, params: obj2 };
                obj2 = { ticket, credential, name: intl.string(ref(closure_1_2[12]).t["8H5RmH"]) };
                const openUserSettings = ref(closure_1_2[11]).openUserSettings;
                ref(closure_1_2[11]);
                intl = ref(closure_1_2[12]).intl;
                openUserSettings(obj);
              },
            };
            const obj3 = NativeCeremoniesDefault;
            const registerPasskeyResult = obj3.registerPasskey(obj4);
            registerPasskeyResult.catch(() => {});
          }
        };
        cResult[1] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(constants.USER_DISMISS);
            const obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
          }
        }
        cResult[2] = P;
      } else {
        class P {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(constants.USER_DISMISS);
            const obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
          }
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(constants.USER_DISMISS);
            const obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
          }
        }
        const stringResult = obj3.string(tmp(1126).t.CjleBl);
        const tmpResult = tmp(1369);
        const isIOSResult = tmpResult.isIOS();
        const string = tmp(1126).intl.string;
        const t = tmp(1126).t;
        if (isIOSResult) {
          class P {
            constructor() {
              const obj = PasskeyUpsellManagerDefault;
              obj.markDismissed(constants.USER_DISMISS);
              const obj2 = PasskeyUpsellActionCreatorsDefault;
              const result = obj2.closePasskeyUpsellPromoSheet();
            }
          }
        } else {
          class P {
            constructor() {
              const obj = PasskeyUpsellManagerDefault;
              obj.markDismissed(constants.USER_DISMISS);
              const obj2 = PasskeyUpsellActionCreatorsDefault;
              const result = obj2.closePasskeyUpsellPromoSheet();
            }
          }
        }
        class I {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            return obj.markDismissed(constants.USER_DISMISS);
          }
        }
        cResult[3] = stringResult;
        cResult[4] = tmp15;
        cResult[5] = I;
        tmp11 = tmp15;
        tmp12 = I;
        tmp10 = stringResult;
      } else {
        class P {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(constants.USER_DISMISS);
            const obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
          }
        }
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(constants.USER_DISMISS);
            const obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
          }
        }
        let obj4 = { size: "lg", onPress: tmp8, text: intl.string(tmp(1126).t.NIFmCJ) };
        const Button = tmp(5601).Button;
        intl = tmp(1126).intl;
        const tmp17 = closure_7(Button, obj4);
        class I {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            return obj.markDismissed(constants.USER_DISMISS);
          }
        }
        tmp16 = tmp17;
      } else {
        class P {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(constants.USER_DISMISS);
            const obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(constants.USER_DISMISS);
            const obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
          }
        }
        const obj5 = {
          illustration: first,
          title: tmp10,
          description: tmp11,
          onDismiss: tmp12,
          actions: closure_8(ButtonGroup, obj6),
        };
        const PromoSheet = tmp(10058).PromoSheet;
        obj6 = { children: tmp20 };
        class I {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            return obj.markDismissed(constants.USER_DISMISS);
          }
        }
        tmp20[0] = tmp16;
        ButtonGroup = tmp(5599).ButtonGroup;
        const obj7 = { size: "lg", variant: "secondary", onPress: P, text: intl2.string(tmp(1126).t["7J6/nG"]) };
        const Button2 = tmp(5601).Button;
        intl2 = tmp(1126).intl;
        tmp20[1] = closure_7(Button2, obj7);
        const tmp21 = closure_7(PromoSheet, obj5);
        cResult[7] = tmp21;
        tmp18 = tmp21;
      } else {
        class P {
          constructor() {
            const obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(constants.USER_DISMISS);
            const obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
          }
        }
      }
      return tmp18;
    }
  : () => {
      let ButtonGroup;
      let intl;
      let intl3;
      let intl4;
      let items;
      let obj4;
      let ref;
      let stringResult;
      let obj = { source: require("AssetRegistry"), style: { height: 190, width: 220, resizeMode: "contain" } };
      const tmp4 = closure_7(Image, obj);
      _require = react.useRef(false);
      let obj2 = {
        illustration: tmp4,
        title: intl.string(require("intl").t.CjleBl),
        description: stringResult,
        onDismiss() {
          const obj = PasskeyUpsellManagerDefault;
          return obj.markDismissed(constants.USER_DISMISS);
        },
        actions: closure_8(ButtonGroup, obj4),
      };
      const PromoSheet = require("PromoSheet").PromoSheet;
      intl = require("intl").intl;
      let obj3 = require("PlatformUtils");
      const isIOSResult = obj3.isIOS();
      const intl2 = require("intl").intl;
      const string = intl2.string;
      const t = require("intl").t;
      if (isIOSResult) {
        stringResult = string(t["7yxR9t"]);
      } else {
        stringResult = string(t.d6uxJy);
      }
      obj4 = { children: items };
      ButtonGroup = tmp2(5599).ButtonGroup;
      const obj5 = {
        size: "lg",
        onPress() {
          if (!ref.current) {
            tmp.current = true;
            let obj = PasskeyUpsellManagerDefault;
            obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
            let obj2 = PasskeyUpsellActionCreatorsDefault;
            const result = obj2.closePasskeyUpsellPromoSheet();
            const obj4 = {
              setRegistering() {},
              onRegisterSuccess(arg0) {
                let credential;
                let intl;
                let obj2;
                let ticket;
                ({ ticket, credential } = arg0);
                const obj = { screen: constants.WEBAUTHN_NAME, params: obj2 };
                obj2 = { ticket, credential, name: intl.string(ref(closure_1_2[12]).t["8H5RmH"]) };
                const openUserSettings = ref(closure_1_2[11]).openUserSettings;
                ref(closure_1_2[11]);
                intl = ref(closure_1_2[12]).intl;
                openUserSettings(obj);
              },
            };
            const obj3 = NativeCeremoniesDefault;
            const registerPasskeyResult = obj3.registerPasskey(obj4);
            registerPasskeyResult.catch(() => {});
          }
        },
        text: intl3.string(require("intl").t.NIFmCJ),
      };
      const Button = tmp2(5601).Button;
      intl3 = tmp2(1126).intl;
      items = [closure_7(Button, obj5)];
      const obj6 = {
        size: "lg",
        variant: "secondary",
        onPress() {
          const obj = PasskeyUpsellManagerDefault;
          obj.markDismissed(constants.USER_DISMISS);
          const obj2 = PasskeyUpsellActionCreatorsDefault;
          const result = obj2.closePasskeyUpsellPromoSheet();
        },
        text: intl4.string(require("intl").t["7J6/nG"]),
      };
      const Button2 = tmp2(5601).Button;
      intl4 = tmp2(1126).intl;
      items[1] = closure_7(Button2, obj6);
      return closure_7(PromoSheet, obj2);
    };
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default tmp3;

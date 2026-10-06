// discord_app/modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import _modDef2621 from "../NitroFileUpload.messages.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, importDefault, markAsDismissed;

let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { illustration: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let closure_2;
      let ref;
      let tmp10;
      let tmp16;
      let tmp20;
      let tmp5;
      const tmp = markAsDismissed;
      const obj = markAsDismissed(576);
      const cResult = obj.c(18);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_7();
      importDefault = react.useRef(false);
      if (cResult[0] !== markAsDismissed) {
        const fn = function u(arg0) {
          if (!ref.current) {
            tmp.current = true;
            markAsDismissed(arg0);
          }
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      if (cResult[2] !== tmp5) {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
        cResult[2] = tmp5;
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
      }
      const tmpResult = tmp(5597);
      const unmountEffect = tmpResult.useUnmountEffect(I);
      if (cResult[4] !== tmp5) {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
        cResult[4] = tmp5;
        cResult[5] = tmp9;
      } else {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
        const tmp11 = jsx(tmp(17160).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" });
        cResult[6] = tmp11;
        tmp10 = tmp11;
      } else {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
      }
      if (cResult[7] !== tmp4.illustration) {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
        const tmp14 = <View style={tmp4.illustration}>{tmp10}</View>;
        cResult[7] = tmp4.illustration;
        cResult[8] = tmp14;
      } else {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
        const stringResult = obj4.string(_modDef2621.IyCdAU);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(_modDef2621.LhfXZN);
        cResult[9] = stringResult;
        cResult[10] = stringResult1;
        tmp16 = stringResult1;
      } else {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
        tmp16 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
        const stringResult2 = obj5.string(tmp(1126).t["NX+WJN"]);
        cResult[11] = stringResult2;
        tmp20 = stringResult2;
      } else {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
      }
      if (cResult[12] !== tmp9) {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
        cResult[12] = tmp9;
        cResult[13] = jsx(tmp(5601).Button, { grow: true, size: "lg", variant: "primary", text: tmp20, onPress: tmp9 });
        const tmp23 = jsx(tmp(5601).Button, { grow: true, size: "lg", variant: "primary", text: tmp20, onPress: tmp9 });
      } else {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
      }
      if (cResult[14] === tmp9) {
        class I {
          constructor() {
            closure_2(ContentDismissActionType.AUTO_DISMISS);
          }
        }
      }
      cResult[14] = tmp9;
      cResult[15] = tmp12;
      cResult[16] = tmp22;
      cResult[17] = jsx(tmp(10058).PromoSheet, {
        illustration: tmp12,
        title: tmp15,
        description: tmp16,
        onDismiss: tmp9,
        actions: tmp22,
      });
      jsx(tmp(10058).PromoSheet, {
        illustration: tmp12,
        title: tmp15,
        description: tmp16,
        onDismiss: tmp9,
        actions: tmp22,
      });
    }
  : (markAsDismissed) => {
      let intl3;
      let ref;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_7();
      importDefault = react.useRef(false);
      const items = [markAsDismissed];
      const callback = react.useCallback((arg0) => {
        if (!ref.current) {
          tmp.current = true;
          markAsDismissed(arg0);
        }
      }, items);
      const obj = markAsDismissed(callback[8]);
      const unmountEffect = obj.useUnmountEffect(() => {
        callback(ContentDismissActionType.AUTO_DISMISS);
      });
      const items1 = [callback];
      const callback1 = react.useCallback(() => {
        callback(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const PromoSheet = markAsDismissed(callback[13]).PromoSheet;
      const intl = markAsDismissed(callback[10]).intl;
      const intl2 = markAsDismissed(callback[10]).intl;
      ({
        grow: true,
        size: "lg",
        variant: "primary",
        text: intl3.string(markAsDismissed(callback[10]).t["NX+WJN"]),
        onPress: callback1,
      });
      const Button = markAsDismissed(callback[12]).Button;
      intl3 = markAsDismissed(callback[10]).intl;
      return (
        <PromoSheet
          illustration={null}
          title={intl.string(require("../NitroFileUpload.messages.js").IyCdAU)}
          description={intl2.string(require("../NitroFileUpload.messages.js").LhfXZN)}
          onDismiss={callback1}
          actions={null}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx",
);

export default tmp2;

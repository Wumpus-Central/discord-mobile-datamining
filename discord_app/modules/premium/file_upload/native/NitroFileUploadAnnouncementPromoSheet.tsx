// discord_app/modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2593 from "../NitroFileUpload.messages.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { illustration: { paddingTop: nativeDefault.space.PX_12 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(576).c(18);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_7();
      importDefault = noop.useRef(false);
      if (cResult[0] !== markAsDismissed) {
        const fn = function u(arg0) {
          if (!ref.current) {
            tmp.current = true;
            markAsDismissed(arg0);
          }
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      if (cResult[2] !== tmp5) {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
        cResult[2] = tmp5;
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
      }
      const obj = markAsDismissed(576);
      const unmountEffect = markAsDismissed(5590).useUnmountEffect(I);
      if (cResult[4] !== tmp5) {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
        cResult[4] = tmp5;
        cResult[5] = tmp9;
      } else {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
        const tmp11 = jsx(tmp(17131).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" });
        cResult[6] = tmp11;
        const tmp10 = tmp11;
      } else {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
      }
      if (cResult[7] !== tmp4.illustration) {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
        const obj2 = { style: tmp4.illustration, children: tmp10 };
        const tmp14 = <View style={tmp4.illustration}>{tmp10}</View>;
        cResult[7] = tmp4.illustration;
        cResult[8] = tmp14;
      } else {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
        const stringResult = obj4.string(_modDef2593.IyCdAU);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(_modDef2593.LhfXZN);
        cResult[9] = stringResult;
        cResult[10] = stringResult1;
        let tmp16 = stringResult1;
        const tmp15 = stringResult;
      } else {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
        tmp16 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
        const stringResult2 = obj5.string(tmp(1126).t["NX+WJN"]);
        cResult[11] = stringResult2;
        const tmp20 = stringResult2;
      } else {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
      }
      if (cResult[12] !== tmp9) {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
        const obj3 = { grow: true, size: "lg", variant: "primary", text: tmp20, onPress: tmp9 };
        const tmp23 = jsx(tmp(5594).Button, { grow: true, size: "lg", variant: "primary", text: tmp20, onPress: tmp9 });
        cResult[12] = tmp9;
        cResult[13] = tmp23;
      } else {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
      }
      if (cResult[14] === tmp9) {
        class I {
          constructor() {
            tmp = closure_2(ContentDismissActionType.AUTO_DISMISS);
            return;
          }
        }
      }
      const tmpResult = markAsDismissed(5590);
      cResult[14] = tmp9;
      cResult[15] = tmp12;
      cResult[16] = tmp22;
      cResult[17] = jsx(markAsDismissed(10045).PromoSheet, {
        illustration: tmp12,
        title: tmp15,
        description: tmp16,
        onDismiss: tmp9,
        actions: tmp22,
      });
      const tmp24 = jsx(markAsDismissed(10045).PromoSheet, {
        illustration: tmp12,
        title: tmp15,
        description: tmp16,
        onDismiss: tmp9,
        actions: tmp22,
      });
    }
  : (markAsDismissed) => {
      markAsDismissed = markAsDismissed.markAsDismissed;
      importDefault = noop.useRef(false);
      const items = [markAsDismissed];
      const callback = noop.useCallback((arg0) => {
        if (!ref.current) {
          tmp.current = true;
          markAsDismissed(arg0);
        }
      }, items);
      const tmp = closure_7();
      const unmountEffect = markAsDismissed(callback[8]).useUnmountEffect(() => {
        callback(ContentDismissActionType.AUTO_DISMISS);
      });
      const items1 = [callback];
      const callback1 = noop.useCallback(() => {
        callback(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const obj2 = { illustration: null, title: null, description: null, onDismiss: null, actions: null };
      const obj = markAsDismissed(callback[8]);
      obj2.illustration = (
        <View style={tmp.illustration}>
          {jsx(markAsDismissed(callback[9]).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" })}
        </View>
      );
      const intl = markAsDismissed(callback[10]).intl;
      obj2.title = intl.string(require("../NitroFileUpload.messages.js").IyCdAU);
      const intl2 = markAsDismissed(callback[10]).intl;
      obj2.description = intl2.string(require("../NitroFileUpload.messages.js").LhfXZN);
      obj2.onDismiss = callback1;
      const obj4 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
      const intl3 = markAsDismissed(callback[10]).intl;
      obj4.text = intl3.string(markAsDismissed(callback[10]).t["NX+WJN"]);
      obj4.onPress = callback1;
      obj2.actions = jsx(markAsDismissed(callback[12]).Button, {
        grow: true,
        size: "lg",
        variant: "primary",
        text: null,
        onPress: null,
      });
      return jsx(markAsDismissed(callback[13]).PromoSheet, {
        illustration: null,
        title: null,
        description: null,
        onDismiss: null,
        actions: null,
      });
    };

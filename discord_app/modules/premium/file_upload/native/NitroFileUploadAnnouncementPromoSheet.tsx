// discord_app/modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { illustration: { paddingTop: nativeDefault.space.PX_12 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx",
);

export default function NitroFileUploadAnnouncementPromoSheet(markAsDismissed) {
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
  const unmountEffect = markAsDismissed(callback[6]).useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const callback1 = noop.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const obj2 = { illustration: null, title: null, description: null, onDismiss: null, actions: null };
  const obj = markAsDismissed(callback[6]);
  obj2.illustration = (
    <View style={tmp.illustration}>
      {jsx(markAsDismissed(callback[8]).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" })}
    </View>
  );
  const intl = markAsDismissed(callback[9]).intl;
  obj2.title = intl.string(require("../NitroFileUpload.messages.js").IyCdAU);
  const intl2 = markAsDismissed(callback[9]).intl;
  obj2.description = intl2.string(require("../NitroFileUpload.messages.js").LhfXZN);
  obj2.onDismiss = callback1;
  const obj4 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = markAsDismissed(callback[9]).intl;
  obj4.text = intl3.string(markAsDismissed(callback[9]).t["NX+WJN"]);
  obj4.onPress = callback1;
  obj2.actions = jsx(markAsDismissed(callback[11]).Button, {
    grow: true,
    size: "lg",
    variant: "primary",
    text: null,
    onPress: null,
  });
  return jsx(markAsDismissed(callback[7]).PromoSheet, {
    illustration: null,
    title: null,
    description: null,
    onDismiss: null,
    actions: null,
  });
}

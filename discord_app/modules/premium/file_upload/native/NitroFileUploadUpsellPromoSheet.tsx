// discord_app/modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = { illustration: { paddingTop: nativeDefault.space.PX_12 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx");

export default function NitroFileUploadUpsellPromoSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = noop.useRef(false);
  const items = [markAsDismissed];
  const callback = noop.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  const tmp = closure_8();
  const unmountEffect = markAsDismissed(callback[7]).useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = noop.useCallback(() => {
    callback(ContentDismissActionType.TAKE_ACTION);
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
  }, items1);
  const callback2 = noop.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const obj2 = { illustration: null, title: null, description: null, onDismiss: null, actions: null };
  const obj = markAsDismissed(callback[7]);
  obj2.illustration = (
    <View style={tmp.illustration}>
      {jsx(markAsDismissed(callback[10]).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" })}
    </View>
  );
  const intl = markAsDismissed(callback[11]).intl;
  obj2.title = intl.string(require("../NitroFileUpload.messages.js")["Uty2/X"]);
  const intl2 = markAsDismissed(callback[11]).intl;
  obj2.description = intl2.string(require("../NitroFileUpload.messages.js").VAgI8Q);
  obj2.onDismiss = callback2;
  const obj4 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = markAsDismissed(callback[11]).intl;
  obj4.text = intl3.string(require("../NitroFileUpload.messages.js").mRy6sO);
  obj4.onPress = callback1;
  obj2.actions = jsx(markAsDismissed(callback[13]).Button, {
    grow: true,
    size: "lg",
    variant: "primary",
    text: null,
    onPress: null,
  });
  return jsx(markAsDismissed(callback[9]).PromoSheet, {
    illustration: null,
    title: null,
    description: null,
    onDismiss: null,
    actions: null,
  });
}

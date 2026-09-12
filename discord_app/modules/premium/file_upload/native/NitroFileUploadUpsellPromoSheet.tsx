// discord_app/modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(4636);
let createStyles = { illustration: null };
createStyles = { paddingTop: nativeDefault.space.PX_12 };
createStyles.illustration = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = markAsDismissed(callback[7]);
  const unmountEffect = obj.useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = noop.useCallback(() => {
    callback(ContentDismissActionType.TAKE_ACTION);
    const obj = { screen: UserSettingsSections.PREMIUM };
    obj.openUserSettings(obj);
  }, items1);
  const callback2 = noop.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  obj = { illustration: null, title: null, description: null, onDismiss: null, actions: null };
  obj = {
    style: closure_8().illustration,
    children: jsx(markAsDismissed(callback[10]).FileUploadSpotIllustration, {
      accessible: false,
      resizeMode: "contain",
    }),
  };
  obj.illustration = (
    <View style={closure_8().illustration}>
      {jsx(markAsDismissed(callback[10]).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" })}
    </View>
  );
  const intl = markAsDismissed(callback[11]).intl;
  obj.title = intl.string(require("../NitroFileUpload.messages.js")["Uty2/X"]);
  const intl2 = markAsDismissed(callback[11]).intl;
  obj.description = intl2.string(require("../NitroFileUpload.messages.js").VAgI8Q);
  obj.onDismiss = callback2;
  const obj1 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = markAsDismissed(callback[11]).intl;
  obj1.text = intl3.string(require("../NitroFileUpload.messages.js").mRy6sO);
  obj1.onPress = callback1;
  obj.actions = jsx(markAsDismissed(callback[13]).Button, {
    grow: true,
    size: "lg",
    variant: "primary",
    text: null,
    onPress: null,
  });
  return jsx(markAsDismissed(callback[9]).PromoSheet, {
    style: closure_8().illustration,
    children: jsx(markAsDismissed(callback[10]).FileUploadSpotIllustration, {
      accessible: false,
      resizeMode: "contain",
    }),
  });
}

// discord_app/modules/rtc/native/SecureFramesVerificationBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const SecureFramesConstants = fn(9971);
({
  EPOCH_AUTHENTICATOR_CHUNK_SIZE: hasOwnProperty,
  EPOCH_AUTHENTICATOR_COLUMNS: metroRequire,
  EPOCH_AUTHENTICATOR_LENGTH: closure_7,
} = SecureFramesConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { iconContainer: null, icon: null, share: null, content: null, subtitle: null, footer: null };
let size = {
  height: 80,
  width: 80,
  borderRadius: 40,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.iconContainer = size;
obj2.icon = { height: 48, width: 48 };
obj2.share = { height: 24 };
obj2.content = { padding: 16 };
obj2.subtitle = { textAlign: "center" };
obj2.footer = { textAlign: "center", marginTop: 8 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default function SecureFramesVerificationBottomSheet(onShareClick) {
  onShareClick = onShareClick.onShareClick;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = closure_10();
  const readableSecureFramesFingerprint = onShareClick(9977).useReadableSecureFramesFingerprint({
    fingerprintBase64: epochAuthenticator,
    chunkSize,
    desiredLength,
  });
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = noop.useCallback(() => {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      ActionSheetActionCreatorsDefault.hideActionSheet();
      onShareClick(joined);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    readableSecureFramesFingerprint(dependencyMap[7]).hideActionSheet();
  }, []);
  const obj3 = { startExpanded: true, header: null, children: null };
  const obj4 = {
    title: null,
    leading: closure_8(onShareClick(7438).ActionSheetCloseButton, { onPress: callback1 }),
    trailing: null,
  };
  const obj5 = {
    style: tmp.share,
    hitSlop: 8,
    onPress: callback,
    disabled: null == readableSecureFramesFingerprint,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const intl = onShareClick(1115).intl;
  obj5.accessibilityLabel = intl.string(onShareClick(1115).t.RDE0Sc);
  const obj6 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl2 = onShareClick(1115).intl;
  obj6.children = intl2.string(onShareClick(1115).t.RDE0Sc);
  obj5.children = closure_8(onShareClick(4752).Text, obj6);
  obj4.trailing = closure_8(onShareClick(5334).PressableOpacity, obj5);
  obj3.header = closure_8(onShareClick(7389).BottomSheetTitleHeader, obj4);
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
  const obj9 = { style: tmp.iconContainer, children: null };
  const obj = onShareClick(9977);
  let obj2 = { fingerprintBase64: epochAuthenticator, chunkSize, desiredLength };
  const tmp2 = onShareClick;
  obj9.children = closure_8(onShareClick(5306).LockIcon, {
    style: tmp.icon,
    color: readableSecureFramesFingerprint(576).colors.TEXT_SUBTLE,
  });
  const items1 = [
    closure_8(View, obj9),
    closure_8(onShareClick(4752).Text, {
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      children: title,
    }),
    closure_8(onShareClick(4752).Text, {
      style: tmp.subtitle,
      variant: "text-md/medium",
      color: "text-default",
      children: subtitle,
    }),
  ];
  obj8.children = items1;
  const items2 = [closure_9(onShareClick(5184).Stack, obj8), ,];
  const obj12 = { title: null, trailing: null, chunks: null, columns: null };
  const obj10 = { style: tmp.icon, color: readableSecureFramesFingerprint(576).colors.TEXT_SUBTLE };
  const obj11 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle };
  const tmp10 = readableSecureFramesFingerprint;
  const intl3 = onShareClick(1115).intl;
  obj12.title = intl3.string(onShareClick(1115).t.cgBTyO);
  let tmp7Result = null != readableSecureFramesFingerprint;
  if (tmp7Result) {
    const obj13 = { chunks: readableSecureFramesFingerprint };
    tmp7Result = closure_8(tmp10(9987), obj13);
  }
  obj12.trailing = tmp7Result;
  obj12.chunks = readableSecureFramesFingerprint;
  obj12.columns = columns;
  items2[1] = closure_8(readableSecureFramesFingerprint(9984), obj12);
  items2[2] = closure_8(tmp2(4752).Text, {
    style: tmp.footer,
    variant: "text-xs/normal",
    color: "text-muted",
    children: footer,
  });
  obj7.children = items2;
  obj3.children = closure_9(View, obj7);
  return closure_8(onShareClick(7390).BottomSheet, obj3);
}

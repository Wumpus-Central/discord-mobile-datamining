// === Module 9776: SecureFramesVerificationBottomSheet ===

// Module 9776 (SecureFramesVerificationBottomSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY" /* 9762 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ EPOCH_AUTHENTICATOR_CHUNK_SIZE: c5, EPOCH_AUTHENTICATOR_COLUMNS: closure_6, EPOCH_AUTHENTICATOR_LENGTH: error } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { iconContainer: null, icon: null, share: null, content: null, subtitle: null, footer: null };
createCacheKey = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 48, width: 48 };
createCacheKey[2] = { height: 24 };
createCacheKey[3] = { padding: 16 };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { textAlign: "center", marginTop: 8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default function SecureFramesVerificationBottomSheet(onShareClick) {
  onShareClick = onShareClick.onShareClick;
  let readableSecureFramesFingerprint;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = callback3();
  let obj = onShareClick(9767);
  obj = { fingerprintBase64: epochAuthenticator, chunkSize: closure_5, desiredLength: closure_7 };
  readableSecureFramesFingerprint = obj.useReadableSecureFramesFingerprint(obj);
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = React.useCallback(() => {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      readableSecureFramesFingerprint(closure_1_2[7]).hideActionSheet();
      onShareClick(joined);
      const obj2 = readableSecureFramesFingerprint(closure_1_2[7]);
    }
  }, items);
  const callback1 = React.useCallback(() => {
    readableSecureFramesFingerprint(table[7]).hideActionSheet();
  }, []);
  obj = { startExpanded: true, header: null, children: null };
  obj1 = { title: null, leading: callback(onShareClick(5942).ActionSheetCloseButton, { onPress: callback1 }), trailing: null };
  let obj2 = { style: tmp.share, hitSlop: 8, onPress: callback, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = onShareClick(1236).intl;
  obj2[5] = intl.string(onShareClick(1236).t.RDE0Sc);
  const obj3 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl2 = onShareClick(1236).intl;
  obj3[2] = intl2.string(onShareClick(1236).t.RDE0Sc);
  obj2[6] = callback(onShareClick(4441).Text, obj3);
  obj1[2] = callback(onShareClick(5020).PressableOpacity, obj2);
  obj[1] = callback(onShareClick(5573).BottomSheetTitleHeader, obj1);
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
  const obj6 = { style: tmp.iconContainer, children: callback(onShareClick(4996).LockIcon, { style: tmp.icon, color: readableSecureFramesFingerprint(712).colors.TEXT_SUBTLE }) };
  const items1 = [callback(View, obj6), callback(onShareClick(4441).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: title }), callback(onShareClick(4441).Text, { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle })];
  obj5[4] = items1;
  const items2 = [callback2(onShareClick(4878).Stack, obj5), , ];
  const obj9 = { title: null, trailing: null, chunks: null, columns: null };
  const obj7 = { style: tmp.icon, color: readableSecureFramesFingerprint(712).colors.TEXT_SUBTLE };
  const obj8 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle };
  const tmp10 = readableSecureFramesFingerprint;
  const tmp2 = onShareClick;
  const tmp8 = callback2;
  const tmp9 = View;
  const intl3 = onShareClick(1236).intl;
  obj9[0] = intl3.string(onShareClick(1236).t.cgBTyO);
  let tmp7Result = null != readableSecureFramesFingerprint;
  if (tmp7Result) {
    const obj10 = { chunks: null };
    obj10[0] = readableSecureFramesFingerprint;
    tmp7Result = tmp7(tmp10(9777), obj10);
  }
  obj9[1] = tmp7Result;
  obj9[2] = readableSecureFramesFingerprint;
  obj9[3] = closure_6;
  items2[1] = callback(readableSecureFramesFingerprint(9774), obj9);
  items2[2] = callback(tmp2(4441).Text, { style: tmp.footer, variant: "text-xs/normal", color: "text-muted", children: footer });
  obj4[1] = items2;
  obj[2] = tmp8(tmp9, obj4);
  return callback(onShareClick(5574).BottomSheet, obj);
};
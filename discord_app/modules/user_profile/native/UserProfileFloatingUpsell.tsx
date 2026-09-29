// === Module 14337: UserProfileFloatingUpsell ===

// Module 14337 (UserProfileFloatingUpsell)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 14338 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const UserProfileUpsellCardV2Default = UserProfileUpsellCardV2;

require = fn;
const Constants = fn(6795);
({ FLOATING_UPSELL_HEIGHT: hasOwnProperty, PROFILE_SIDE_PADDING: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_8 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0, marginHorizontal: timestampProducer - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFloatingUpsell.tsx");

export default function UserProfileFloatingUpsell(arg0) {
  const tmp = closure_8(useSafeAreaInsetsDefault().bottom);
  const obj = { style: closure_8(useSafeAreaInsetsDefault().bottom).container };
  const merged = Object.assign(arg0);
  return jsx(UserProfileUpsellCardV2Default, { style: closure_8(useSafeAreaInsetsDefault().bottom).container });
};
export const useFloatingUpsellHeight = function useFloatingUpsellHeight() {
  const tmp = _slicedToArray(noop.useState(hasOwnProperty), 2);
  closure_0 = tmp[1];
  return { height: tmp[0], onLayout: noop.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.height), []) };
};
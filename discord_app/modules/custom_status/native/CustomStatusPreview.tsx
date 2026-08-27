// === Module 9137: CustomStatusPreview ===

// Module 9137 (CustomStatusPreview)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 5953 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: c5, UserProfileThemeTypes: closure_6 } = ARBITRARY_LARGE_OFFSET);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { flex: 1, position: "relative", overflow: "hidden", width: 323, maxHeight: 301, borderWidth: num, borderColor: null, borderRadius: null };
  const colors = ThemesDefault.colors;
  if (arg0) {
    let BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    let tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  obj = { profileContainer: null, profileEffect: null };
  obj[6] = BACKGROUND_SURFACE_HIGH;
  obj[7] = tmp4(712).radii.lg;
  const merged = Object.assign(tmp4(712).shadows.SHADOW_HIGH);
  obj[0] = obj;
  obj[1] = { zIndex: 1 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/custom_status/native/CustomStatusPreview.tsx");

export default function CustomStatusPreview(user) {
  user = user.user;
  const pendingStatusText = user.pendingStatusText;
  const pendingStatusEmoji = user.pendingStatusEmoji;
  const placeholderText = user.placeholderText;
  const tmp3 = pendingStatusText(pendingStatusEmoji[6])(user.id);
  const tmp4 = pendingStatusText(pendingStatusEmoji[7])(tmp3);
  ({ theme, primaryColor, secondaryColor } = pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp3 }));
  const tmp7 = callback2(null != primaryColor);
  const tmp8 = pendingStatusText(pendingStatusEmoji[9])();
  let obj = user(pendingStatusEmoji[10]);
  const userProfileColors = obj.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [user, pendingStatusText, pendingStatusEmoji];
  ({ gradientFallbackBackground, avatarBackground, containerBackground } = userProfileColors);
  const callback = React.useCallback(() => {
    let obj = user(pendingStatusEmoji[11]);
    obj.dismissKeyboard();
    obj = { user, previewText: pendingStatusText, previewEmoji: pendingStatusEmoji };
    pendingStatusText(pendingStatusEmoji[12]).openLazy(user(pendingStatusEmoji[14])(pendingStatusEmoji[13], pendingStatusEmoji.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
  }, items);
  obj = { theme, primaryColor, secondaryColor, children: null };
  obj = { style: items1, children: null };
  items1 = [tmp7.profileContainer];
  const items2 = [callback(pendingStatusText(pendingStatusEmoji[16]), { user, displayProfile: tmp3, bannerHeight: 132, disableInteraction: true }), , ];
  const items3 = [callback(pendingStatusText(pendingStatusEmoji[17]), { user, backgroundColor: avatarBackground, disableStatus: true }), ];
  obj1 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor: primaryColor, containerStyle: null, children: null };
  const items4 = [, , ];
  ({ profileContentWrapper: arr5[0], profileContent: arr5[1] } = tmp8);
  let tmp15 = "" !== pendingStatusText;
  const tmp5 = pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp3 });
  if (!tmp15) {
    tmp15 = null !== pendingStatusEmoji;
  }
  if (!tmp15) {
    tmp15 = "" !== placeholderText;
  }
  let tmp16 = !tmp15;
  if (!tmp15) {
    const obj2 = { paddingTop: null };
    obj2[0] = closure_5;
    tmp16 = obj2;
  }
  items4[2] = tmp16;
  obj1[3] = items4;
  const items5 = [callback(pendingStatusText(pendingStatusEmoji[19]), { hasCustomProfileTheme: null != primaryColor, style: tmp8.customStatusBubble, emojiOnlyStyle: tmp8.emojiOnlyCustomStatusBubble, onPressTruncatedStatus: callback, previewEmoji: pendingStatusEmoji, previewText: pendingStatusText, placeholderText }), ];
  const obj4 = { user, themeType: constants.PREVIEW, pronouns: null, badges: null, badgeContainerBackground: null, showBadgeToastOnPress: false };
  let pronouns;
  let tmpResult = tmp(tmp2[20]);
  if (tmp3 != null) {
    pronouns = tmp3.pronouns;
  }
  const obj5 = { children: null };
  obj4[2] = pronouns;
  obj4[3] = tmp4;
  obj4[4] = containerBackground;
  items5[1] = callback(tmpResult, obj4);
  obj1[4] = items5;
  items3[1] = closure_8(pendingStatusText(pendingStatusEmoji[18]), obj1);
  obj5[0] = items3;
  items2[1] = closure_8(View, obj5);
  let profileEffect;
  if (tmp3 != null) {
    profileEffect = tmp3.profileEffect;
  }
  let tmp11Result = null != profileEffect;
  if (tmp11Result) {
    let skuId;
    tmpResult = tmp(tmp2[21]);
    if (tmp3 != null) {
      skuId = tmp3.profileEffect.skuId;
    }
    const obj6 = { skuId: null, style: null };
    obj6[0] = skuId;
    obj6[1] = tmp7.profileEffect;
    tmp11Result = tmp11(tmpResult, obj6);
  }
  items2[2] = tmp11Result;
  obj[1] = items2;
  obj[3] = closure_8(View, obj);
  return callback(user(pendingStatusEmoji[15]).ThemeContextProvider, obj);
};
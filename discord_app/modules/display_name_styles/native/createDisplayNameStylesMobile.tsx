// === Module 12915: createDisplayNameStylesMobile ===

// Module 12915 (createDisplayNameStylesMobile)
import closure_0 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import closure_1 from "mergeGuildAvatar" /* 1922 */;

const result = require("set").fileFinishedImporting("modules/display_name_styles/native/createDisplayNameStylesMobile.tsx");

export const createDisplayNameStylesMobile = function createDisplayNameStylesMobile(author, member) {
  currentUser = currentUser.getCurrentUser();
  let displayNameStyles = author.displayNameStyles;
  if (tmp2) {
    displayNameStyles = currentUser.displayNameStyles;
  }
  let fontId;
  if (member != null) {
    const displayNameStyles2 = member.displayNameStyles;
    if (displayNameStyles2 != null) {
      fontId = displayNameStyles2.fontId;
    }
  }
  if (fontId == null) {
    let fontId1;
    if (displayNameStyles != null) {
      fontId1 = displayNameStyles.fontId;
    }
    fontId = fontId1;
  }
  if (null != fontId) {
    if (obj.displayNameStylesEnabled) {
      obj = { fontId: null };
      obj[0] = fontId;
      return obj;
    }
  }
};
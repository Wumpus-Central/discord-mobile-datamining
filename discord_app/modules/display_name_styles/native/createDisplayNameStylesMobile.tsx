// === Module 7963: createDisplayNameStylesMobile ===

// Module 7963 (createDisplayNameStylesMobile)
import DisplayNameFont from "DisplayNameFont" /* 1391 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/createDisplayNameStylesMobile.tsx");

export const createDisplayNameStylesMobile = function createDisplayNameStylesMobile(author, member) {
  const currentUser = UserStore.getCurrentUser();
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
    if (AccessibilityStore.displayNameStylesEnabled) {
      const obj = { fontId };
      return obj;
    }
  }
};
export const getDisplayNameFontIdForMobileUser = function getDisplayNameFontIdForMobileUser(user, guildId) {
  if (null != user) {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    const currentUser = UserStore.getCurrentUser();
    let displayNameStyles = user.displayNameStyles;
    if (tmp6) {
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
    let tmp9;
    if (null != fontId) {
      if (AccessibilityStore.displayNameStylesEnabled) {
        const obj = { fontId };
        tmp9 = obj;
      }
    }
    let fontId2;
    if (tmp9 != null) {
      fontId2 = tmp9.fontId;
    }
    if (null != fontId2) {
      if (fontId2 !== DisplayNameFont.DisplayNameFont.DEFAULT) {
        return fontId2;
      }
    }
    tmp6 = null != currentUser && currentUser.id === user.id;
  }
};
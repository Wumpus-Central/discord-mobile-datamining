// discord_app/modules/display_name_styles/native/createDisplayNameStylesMobile.tsx
import DisplayNameFont from "../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";
import closure_2 from "../../a11y/AccessibilityStore.tsx";
import closure_3 from "../../../stores/GuildMemberStore.tsx";
import closure_4 from "../../../stores/UserStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/display_name_styles/native/createDisplayNameStylesMobile.tsx");

export const createDisplayNameStylesMobile = function createDisplayNameStylesMobile(author, member) {
  const currentUser = authStore.getCurrentUser();
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
    if (closure_2.displayNameStylesEnabled) {
      const obj = { fontId: null };
      obj[0] = fontId;
      return obj;
    }
  }
};
export const getDisplayNameFontIdForMobileUser = function getDisplayNameFontIdForMobileUser(user, guildId) {
  if (null != user) {
    let member = null;
    if (null != guildId) {
      member = member.getMember(guildId, user.id);
    }
    const currentUser = authStore.getCurrentUser();
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
      if (closure_2.displayNameStylesEnabled) {
        const obj = { fontId: null };
        obj[0] = fontId;
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
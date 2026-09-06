// discord_common/js/packages/tokens/modules/generated/generated-definitions.tsx
import size from "../../../../../../_runtime/metro/00002__.js";

let obj = { Modules: null };
obj = {
  button: null,
  channels: null,
  chat: null,
  control: null,
  form: null,
  guildbar: null,
  icon: null,
  menu: null,
  mobile: null,
  modal: null,
  select: null,
};
obj = {
  BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 2147483647;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 2147483647;
      }
    },
  },
  BORDER_RADIUS_LG: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 2147483647;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 2147483647;
      }
    },
  },
};
obj.button = obj;
obj.channels = {
  NAME_LINE_HEIGHT: {
    resolve(density) {
      density = density.density;
      if ("compact" === density) {
        return 20;
      } else {
        if ("default" !== density) {
          if ("cozy" === density) {
            return 28;
          }
        }
        return 24;
      }
    },
  },
  SPINE_INVERTED_OFFSET_TOP: {
    resolve(density) {
      density = density.density;
      if ("compact" === density) {
        return 2;
      } else {
        if ("default" !== density) {
          if ("cozy" === density) {
            return 9;
          }
        }
        return 6;
      }
    },
  },
  SPINE_OFFSET_LEFT: {
    resolve(density) {
      density = density.density;
      if ("compact" === density) {
        return 20;
      } else {
        if ("default" !== density) {
          if ("cozy" === density) {
            return 28;
          }
        }
        return 24;
      }
    },
  },
};
obj.chat = {
  AVATAR_SIZE: {
    resolve() {
      return 40;
    },
  },
  INPUT_ICON_SIZE: {
    resolve() {
      return 20;
    },
  },
  MARKUP_LINE_HEIGHT: {
    resolve() {
      return "1.375rem";
    },
  },
  RESIZE_HANDLE_WIDTH: {
    resolve() {
      return 8;
    },
  },
};
obj.control = {
  INPUT_HEIGHT_MD: {
    resolve() {
      return 40;
    },
  },
  INPUT_HEIGHT_SM: {
    resolve() {
      return 32;
    },
  },
  ITEM_HEIGHT_MD: {
    resolve() {
      return 40;
    },
  },
  ITEM_HEIGHT_SM: {
    resolve() {
      return 32;
    },
  },
};
obj.form = {
  INPUT_HEIGHT: {
    resolve() {
      return 44;
    },
  },
};
obj.guildbar = {
  AVATAR_SIZE: {
    resolve(arg0) {
      ({ enabledExperiments, density } = arg0);
      if (0 === enabledExperiments.length) {
        return 40;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("refresh-fast-follow-avatars" === iter.next()) {
            let str2 = "compact";
            if ("compact" !== density) {
              let str3 = "default";
              if ("default" !== density) {
                let str4 = "cozy";
              }
              iter.return();
              return 44;
            }
            iter.return();
            return 40;
          }
        }
        return 40;
      }
    },
  },
  FOLDER_SIZE: {
    resolve(arg0) {
      ({ enabledExperiments, density } = arg0);
      if (0 === enabledExperiments.length) {
        return 48;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("refresh-fast-follow-avatars" === iter.next()) {
            let str2 = "compact";
            if ("compact" !== density) {
              let str3 = "default";
              if ("default" !== density) {
                let str4 = "cozy";
              }
              iter.return();
              return 52;
            }
            iter.return();
            return 48;
          }
        }
        return 48;
      }
    },
  },
};
obj.icon = {
  SIZE_LG: {
    resolve() {
      return 32;
    },
  },
  SIZE_MD: {
    resolve() {
      return 24;
    },
  },
  SIZE_SM: {
    resolve() {
      return 18;
    },
  },
  SIZE_XS: {
    resolve() {
      return 16;
    },
  },
  SIZE_XXS: {
    resolve() {
      return 12;
    },
  },
};
obj.menu = {
  BORDER_WIDTH: {
    resolve() {
      return 1;
    },
  },
  SCROLLER_BLOCK_PADDING: {
    resolve() {
      return 8;
    },
  },
};
obj.mobile = {
  BOUNTY_TILE_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 24;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 24;
      }
    },
  },
  CARD_DEFAULT_RADIUS: {
    resolve() {
      return 16;
    },
  },
  CHANNEL_DETAILS_NAV_BUTTONS_GAP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 12;
      }
    },
  },
  CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "sm";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "lg";
            return "lg";
          }
        }
        return "sm";
      }
    },
  },
  CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "tertiary";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "icon-only";
            return "icon-only";
          }
        }
        return "tertiary";
      }
    },
  },
  CHANNEL_DRAWER_CORNER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 8;
      }
    },
  },
  CHANNEL_DRAWER_DIVIDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 1;
          }
        }
        return 0;
      }
    },
  },
  CHANNEL_DRAWER_SPACING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 8;
      }
    },
  },
  CHANNEL_HEADER_ICON_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "md";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "xs";
            return "xs";
          }
        }
        return "md";
      }
    },
  },
  CHANNEL_ITEM_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 12;
      }
    },
  },
  CHANNEL_LIST_SUBTITLE_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-xs/medium";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-sm/medium";
            return "text-sm/medium";
          }
        }
        return "text-xs/medium";
      }
    },
  },
  CHANNEL_LIST_TITLE_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "redesign/heading-18/bold";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "heading-lg/semibold";
            return "heading-lg/semibold";
          }
        }
        return "redesign/heading-18/bold";
      }
    },
  },
  CHANNEL_NAME_CHANNEL_BORDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 1;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 1;
      }
    },
  },
  CHANNEL_NAME_CHANNEL_ICON_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 12;
      }
    },
  },
  CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND: {
    resolve() {
      return "background-base-lower";
    },
  },
  CHAT_INPUT_ACTION_BUTTON_GAP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" !== nextResult) {
            if ("mobile-visual-refresh-legacy-send-button" !== nextResult) {
              if ("mobile-visual-refresh-floating" === nextResult) {
                iter.return();
                return 10;
              }
            }
          }
          iter.return();
          return 8;
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_ACTION_BUTTON_MARGIN: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 4;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 4;
      }
    },
  },
  CHAT_INPUT_ACTION_BUTTON_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 40;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 32;
          }
        }
        return 40;
      }
    },
  },
  CHAT_INPUT_ACTION_ICON_ACTIVE_TINT: {
    resolve() {
      return "icon-strong";
    },
  },
  CHAT_INPUT_ACTION_ICON_PIXEL_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 24;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 20;
          }
        }
        return 24;
      }
    },
  },
  CHAT_INPUT_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 24;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 24;
      }
    },
  },
  CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE: {
    resolve() {
      return 44;
    },
  },
  CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 1;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 8;
      }
    },
  },
  CHAT_INPUT_CONTEXT_BAR_GAP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_EXPRESSION_OFFSET_LEFT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 6;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 6;
      }
    },
  },
  CHAT_INPUT_EXPRESSION_OFFSET_TOP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 6;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 10;
          }
        }
        return 6;
      }
    },
  },
  CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 1;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 4;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 4;
      }
    },
  },
  CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH: {
    resolve() {
      return 1;
    },
  },
  CHAT_INPUT_FLOATING_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_CONTENT_GAP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === nextResult) {
            iter.return();
            return 10;
          } else if ("mobile-visual-refresh-legacy-send-button" === nextResult) {
            iter.return();
            return 12;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === nextResult) {
            iter.return();
            return 10;
          } else if ("mobile-visual-refresh-legacy-send-button" === nextResult) {
            iter.return();
            return 12;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 20;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_OFFSET_MINIMUM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 56;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 36;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_SCRIM_OFFSET_TOP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 24;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_ICON_DEFAULT_TINT: {
    resolve() {
      return "interactive-icon-default";
    },
  },
  CHAT_INPUT_ICON_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "medium";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "small20";
            return "small20";
          }
        }
        return "medium";
      }
    },
  },
  CHAT_INPUT_PILL_BORDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 1;
          }
        }
        return 0;
      }
    },
  },
  CHAT_INPUT_PILL_MARGIN_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 4;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 4;
      }
    },
  },
  CHAT_INPUT_PILL_PADDING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 2;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 2;
      }
    },
  },
  CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 4;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 4;
      }
    },
  },
  CHAT_INPUT_REPLY_MENTION_ICON_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 20;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 20;
      }
    },
  },
  CHAT_INPUT_SEND_BUTTON_HEIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 40;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" !== nextResult) {
            if ("mobile-visual-refresh-legacy-send-button" !== nextResult) {
              if ("mobile-visual-refresh-floating" === nextResult) {
                iter.return();
                return 36;
              }
            }
          }
          iter.return();
          return 32;
        }
        return 40;
      }
    },
  },
  CHAT_INPUT_SEND_BUTTON_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 40;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === nextResult) {
            iter.return();
            return 32;
          } else if ("mobile-visual-refresh-floating" === nextResult) {
            iter.return();
            return 36;
          } else if ("mobile-visual-refresh-legacy-send-button" === nextResult) {
            iter.return();
            return 40;
          }
        }
        return 40;
      }
    },
  },
  COACHMARK_BODY_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 260;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 240;
          }
        }
        return 260;
      }
    },
  },
  COACHMARK_BUTTON_SPACING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 12;
      }
    },
  },
  CONTROL_CHECKBOX_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 4;
          }
        }
        return 8;
      }
    },
  },
  CONTROL_CHECKBOX_BORDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 2;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 1.2;
          }
        }
        return 2;
      }
    },
  },
  CONTROL_CHECKBOX_SIZE_DEFAULT: {
    resolve() {
      return 24;
    },
  },
  CONTROL_RADIO_ICON_BORDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 2;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 1.2;
          }
        }
        return 2;
      }
    },
  },
  CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 10;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 10;
      }
    },
  },
  CONTROL_RADIO_ICON_SIZE_DEFAULT: {
    resolve() {
      return 24;
    },
  },
  CONTROL_SWITCH_HEIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 32;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 28;
          }
        }
        return 32;
      }
    },
  },
  CONTROL_SWITCH_KNOB_CHECKED_OFFSET: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 28;
          }
        }
        return 16;
      }
    },
  },
  CONTROL_SWITCH_KNOB_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 24;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 20;
          }
        }
        return 24;
      }
    },
  },
  CONTROL_SWITCH_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 48;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 56;
          }
        }
        return 48;
      }
    },
  },
  EMOJI_ROW_EMOJI_CONTAINER_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 48;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 48;
          }
        }
        return 48;
      }
    },
  },
  EMOJI_ROW_EMOJI_FONT_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 28;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 22;
          }
        }
        return 28;
      }
    },
  },
  EMOJI_ROW_EMOJI_LINE_HEIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 33;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 28;
          }
        }
        return 33;
      }
    },
  },
  EMOJI_ROW_EMOJI_MIN_SPACING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 12;
      }
    },
  },
  EMOJI_ROW_EMOJI_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 28;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 24;
          }
        }
        return 28;
      }
    },
  },
  GIFTING_SETTINGS_PADDING_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 0;
      }
    },
  },
  GROUP_AVATAR_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 72;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 64;
          }
        }
        return 72;
      }
    },
  },
  GUILD_BAR_ITEM_MARGIN: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 4;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 6;
          }
        }
        return 4;
      }
    },
  },
  GUILD_BAR_ITEM_PADDING: {
    resolve() {
      return 8;
    },
  },
  GUILD_BAR_ITEM_SIZE: {
    resolve() {
      return 48;
    },
  },
  GUILD_FOLDER_BACKGROUND_LEFT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 12;
      }
    },
  },
  GUILD_FOLDER_BACKGROUND_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 2147483647;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 2147483647;
      }
    },
  },
  GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  GUILD_FOLDER_COLOR_OPACITY: {
    resolve() {
      return 0.15;
    },
  },
  GUILD_FOLDER_PADDING: {
    resolve() {
      return 8;
    },
  },
  GUILD_FOLDER_PREVIEW_ICON_MARGIN: {
    resolve() {
      return 6;
    },
  },
  GUILD_FOLDER_PREVIEW_OPACITY: {
    resolve() {
      return 0.4;
    },
  },
  GUILD_ITEM_SELECTED_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 16;
      }
    },
  },
  HEADER_TITLE_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "heading-md/bold";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "heading-lg/semibold";
            return "heading-lg/semibold";
          }
        }
        return "heading-md/bold";
      }
    },
  },
  INPUT_FIELD_BORDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 1;
          }
        }
        return 0;
      }
    },
  },
  INPUT_FIELD_PADDING_VERTICAL_SM_IOS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 4;
          }
        }
        return 8;
      }
    },
  },
  INPUT_FIELD_RADIUS_LG: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 16;
      }
    },
  },
  INPUT_FIELD_RADIUS_MD: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 12;
      }
    },
  },
  INPUT_FIELD_RADIUS_SM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 12;
      }
    },
  },
  INPUT_FIELD_ROUND_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 2147483647;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 2147483647;
      }
    },
  },
  INPUT_FIELD_TEXT_STYLE_LG: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-md/medium";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-md/normal";
            return "text-md/normal";
          }
        }
        return "text-md/medium";
      }
    },
  },
  INPUT_FIELD_TEXT_STYLE_MD: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-sm/medium";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-md/normal";
            return "text-md/normal";
          }
        }
        return "text-sm/medium";
      }
    },
  },
  INPUT_FIELD_TEXT_STYLE_SM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-xs/medium";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-xs/normal";
            return "text-xs/normal";
          }
        }
        return "text-xs/medium";
      }
    },
  },
  JUMP_TO_PRESENT_BOTTOM_SPACING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 12;
      }
    },
  },
  JUMP_TO_PRESENT_BUTTON_SIZE: {
    resolve() {
      return 40;
    },
  },
  JUMP_TO_PRESENT_ICON_SIZE: {
    resolve() {
      return 20;
    },
  },
  JUMP_TO_PRESENT_RIGHT_SPACING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 12;
      }
    },
  },
  MEDIA_KEYBOARD_BAR_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 2147483647;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 2147483647;
      }
    },
  },
  MEDIA_KEYBOARD_BAR_BORDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 1;
          }
        }
        return 0;
      }
    },
  },
  MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 24;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 24;
      }
    },
  },
  MEDIA_KEYBOARD_BAR_GAP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 4;
          }
        }
        return 16;
      }
    },
  },
  MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 16;
      }
    },
  },
  MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE: {
    resolve() {
      return "icon-default";
    },
  },
  MEDIA_KEYBOARD_BUTTON_PADDING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 4;
          }
        }
        return 0;
      }
    },
  },
  MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE: {
    resolve() {
      return "text-default";
    },
  },
  MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-xs/semibold";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-xs/medium";
            return "text-xs/medium";
          }
        }
        return "text-xs/semibold";
      }
    },
  },
  MEDIA_KEYBOARD_SEND_VERTICAL_INSET: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  MESSAGES_HEADER_BUTTON_GAP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 8;
      }
    },
  },
  MESSAGES_HEADER_BUTTON_LAYOUT: {
    resolve() {
      return "row";
    },
  },
  MESSAGES_HEADER_PADDING_BOTTOM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 16;
      }
    },
  },
  MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 8;
      }
    },
  },
  MESSAGES_ITEM_CHANNEL_AVATAR_SIZE: {
    resolve() {
      return 32;
    },
  },
  MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "redesign/channel-title/semibold";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-md/medium";
            return "text-md/medium";
          }
        }
        return "redesign/channel-title/semibold";
      }
    },
  },
  MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 8;
      }
    },
  },
  MOBILE_KEYBOARD_TOP_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 15;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 24;
          }
        }
        return 15;
      }
    },
  },
  MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 24;
          }
        }
        return 0;
      }
    },
  },
  PROMO_SHEET_GRAPHIC_MAX_WIDTH: {
    resolve() {
      return 288;
    },
  },
  QUEST_DOCK_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 24;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 24;
      }
    },
  },
  SEGMENTED_CONTROL_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 16;
      }
    },
  },
  SETTINGS_PADDING_TOP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 24;
          }
        }
        return 16;
      }
    },
  },
  SHEET_HANDLE_HEIGHT: {
    resolve() {
      return 4;
    },
  },
  SHEET_HANDLE_MARGIN_BOTTOM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 24;
          }
        }
        return 12;
      }
    },
  },
  SHEET_HANDLE_MARGIN_TOP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 4;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 4;
      }
    },
  },
  SHEET_HANDLE_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 32;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 36;
          }
        }
        return 32;
      }
    },
  },
  SHEET_HEADER_PADDING_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 16;
      }
    },
  },
  TABLE_ROW_ARROW_MARGIN_END: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 0;
      }
    },
  },
  TABLE_ROW_ARROW_MARGIN_START: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 14;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 8;
          }
        }
        return 14;
      }
    },
  },
  TABLE_ROW_ARROW_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 8;
      }
    },
  },
  TABLE_ROW_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 16;
      }
    },
  },
  TABLE_ROW_CONTENT_HEIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 36;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 32;
          }
        }
        return 36;
      }
    },
  },
  TABLE_ROW_DIVIDER_PADDING: {
    resolve() {
      return 56;
    },
  },
  TABLE_ROW_GROUP_HELPER_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-sm/medium";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-sm/normal";
            return "text-sm/normal";
          }
        }
        return "text-sm/medium";
      }
    },
  },
  TABLE_ROW_HEIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 60;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 56;
          }
        }
        return 60;
      }
    },
  },
  TABLE_ROW_ICON_SIZE: {
    resolve() {
      return 32;
    },
  },
  TABLE_ROW_LABEL_COLOR: {
    resolve() {
      return "text-strong";
    },
  },
  TABLE_ROW_LABEL_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-md/semibold";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-md/medium";
            return "text-md/medium";
          }
        }
        return "text-md/semibold";
      }
    },
  },
  TABLE_ROW_PADDING: {
    resolve() {
      return 12;
    },
  },
  TAB_BAR_UNREAD_BADGE_SIZE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 22;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 22;
      }
    },
  },
  TAB_LABEL_MARGIN_TOP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return -6;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return -4;
          }
        }
        return -6;
      }
    },
  },
  TAB_LABEL_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-xxs/semibold";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-xs/medium";
            return "text-xs/medium";
          }
        }
        return "text-xxs/semibold";
      }
    },
  },
  USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-sm/semibold";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            let str2 = "text-sm/medium";
            return "text-sm/medium";
          }
        }
        return "text-sm/semibold";
      }
    },
  },
  USER_ROW_LABEL_LINE_HEIGHT_ANDROID: {
    resolve() {
      return 16;
    },
  },
  USER_ROW_LABEL_LINE_HEIGHT_IOS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 22;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 20;
          }
        }
        return 22;
      }
    },
  },
  VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 0;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 1;
          }
        }
        return 0;
      }
    },
  },
  VOICE_MESSAGE_CHAT_GAP: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 10;
          }
        }
        return 8;
      }
    },
  },
  VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID: {
    resolve() {
      return 14;
    },
  },
  VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS: {
    resolve() {
      return 17;
    },
  },
  VOICE_MESSAGE_DURATION_MARGIN_LEFT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 4;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 4;
      }
    },
  },
  VOICE_MESSAGE_DURATION_TEXT_STYLE: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return "text-sm/semibold";
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === nextResult) {
            iter.return();
            let str4 = "text-xs/semibold";
            return "text-xs/semibold";
          } else if ("mobile-visual-refresh-floating" === nextResult) {
            iter.return();
            let str3 = "text-sm/semibold";
            return "text-sm/semibold";
          }
        }
        return "text-sm/semibold";
      }
    },
  },
  VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_HEIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 40;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === nextResult) {
            iter.return();
            return 32;
          } else if ("mobile-visual-refresh-floating" === nextResult) {
            iter.return();
            return 58;
          }
        }
        return 40;
      }
    },
  },
  VOICE_MESSAGE_RECORDING_CHAT_CONTAINER_MARGIN_RIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 8;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 8;
      }
    },
  },
  VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_BOTTOM: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 9;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 0;
          }
        }
        return 9;
      }
    },
  },
  VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 12;
      }
    },
  },
  VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 10;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === nextResult) {
            iter.return();
            return 6;
          } else if ("mobile-visual-refresh-floating" === nextResult) {
            iter.return();
            return 0;
          }
        }
        return 10;
      }
    },
  },
  VOICE_MESSAGE_RECORDING_LOCK_PILL_OFFSET_RIGHT: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 27;
          }
        }
        return 12;
      }
    },
  },
  VOICE_MESSAGE_RECORDING_LOCK_PILL_WIDTH: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 40;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === nextResult) {
            iter.return();
            return 32;
          } else if ("mobile-visual-refresh-floating" === nextResult) {
            iter.return();
            return 36;
          }
        }
        return 40;
      }
    },
  },
  VOICE_MESSAGE_RECORDING_PILL_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 32;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 32;
      }
    },
  },
  VOICE_MESSAGE_RECORDING_PILL_PADDING_HORIZONTAL: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("mobile-visual-refresh-floating" === nextResult) {
            iter.return();
            return 10;
          } else if ("mobile-visual-refresh-legacy-send-button" === nextResult) {
            iter.return();
            return 12;
          }
        }
        return 12;
      }
    },
  },
  VOICE_PANEL_CONTROLS_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 32;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 32;
      }
    },
  },
  VOICE_PANEL_CONTROLS_PADDING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 16;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 4;
          }
        }
        return 16;
      }
    },
  },
  VOICE_PANEL_GUTTER: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 12;
      }
    },
  },
  VOICE_PANEL_PADDING: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 12;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 12;
      }
    },
  },
  VOICE_TILE_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 24;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 12;
          }
        }
        return 24;
      }
    },
  },
  YOU_BAR_BORDER_RADIUS: {
    resolve(enabledExperiments) {
      enabledExperiments = enabledExperiments.enabledExperiments;
      if (0 === enabledExperiments.length) {
        return 28;
      } else {
        const iter = enabledExperiments[Symbol.iterator]();
        while (iter !== undefined) {
          if ("mobile-visual-refresh" === iter.next()) {
            iter.return();
            return 16;
          }
        }
        return 28;
      }
    },
  },
};
obj.modal = {
  HORIZONTAL_PADDING: {
    resolve() {
      return 24;
    },
  },
  VERTICAL_PADDING: {
    resolve() {
      return 16;
    },
  },
  WIDTH_LARGE: {
    resolve() {
      return 800;
    },
  },
  WIDTH_MEDIUM: {
    resolve() {
      return 602;
    },
  },
  WIDTH_SMALL: {
    resolve() {
      return 442;
    },
  },
};
obj.select = {
  MAX_WIDTH: {
    resolve() {
      return 248;
    },
  },
  OPTION_HEIGHT: {
    resolve() {
      return 40;
    },
  },
};
obj.Modules = obj;
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/tokens/modules/generated/generated-definitions.tsx",
);

export const _private = obj;

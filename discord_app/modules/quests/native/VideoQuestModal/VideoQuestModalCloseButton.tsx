// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(10);
      ({ onClose, iconColor, style } = arg0);
      if (undefined === iconColor) {
        iconColor = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.cpT0Cq);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { flexShrink: 0, minWidth: 24, minHeight: 24 };
        cResult[1] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== style) {
        const items = [tmp7, style];
        cResult[2] = style;
        cResult[3] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== iconColor) {
        const obj3 = { color: iconColor };
        const tmp11 = jsx(XSmallIcon.XSmallIcon, { color: iconColor });
        cResult[4] = iconColor;
        cResult[5] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === onClose) {
        if (cResult[7] === tmp8) {
          if (cResult[8] === tmp9) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      const tmp13 = jsx(Pressables.PressableOpacity, {
        accessibilityLabel: first,
        accessibilityRole: "button",
        hitSlop: 12,
        onPress: onClose,
        style: tmp8,
        children: tmp9,
      });
      cResult[6] = onClose;
      cResult[7] = tmp8;
      cResult[8] = tmp9;
      cResult[9] = tmp13;
      tmp12 = tmp13;
    }
  : (iconColor) => {
      let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
      if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
        MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
      }
      const obj = {
        accessibilityLabel: null,
        accessibilityRole: "button",
        hitSlop: 12,
        onPress: null,
        style: null,
        children: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
      obj.onPress = iconColor.onClose;
      const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, iconColor.style];
      obj.style = items;
      obj.children = jsx(XSmallIcon.XSmallIcon, { color: MOBILE_TEXT_HEADING_PRIMARY });
      return jsx(Pressables.PressableOpacity, {
        accessibilityLabel: null,
        accessibilityRole: "button",
        hitSlop: 12,
        onPress: null,
        style: null,
        children: null,
      });
    };

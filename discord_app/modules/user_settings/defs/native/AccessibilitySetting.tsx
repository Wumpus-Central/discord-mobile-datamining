// discord_app/modules/user_settings/defs/native/AccessibilitySetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import AccessibilityIcon from "../../../../design/components/Icon/native/redesign/generated/AccessibilityIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap;

const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let items = [dismissible_content.DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(4);
      const obj2 = useSelectedDismissibleContent;
      const first = _slicedToArray(obj2.useSelectedDismissibleContent(items), 1)[0];
      if (cResult[0] !== first) {
        let tmp7 = null != first;
        if (tmp7) {
          let hasItem;
          if (items != null) {
            hasItem = items.includes(first);
          }
          tmp7 = hasItem;
        }
        cResult[0] = first;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        let tmp10 = null;
        if (tmp5) {
          const TextBadge = native.TextBadge;
          const intl = intl2.intl;
          tmp10 = <TextBadge text={intl.string(intl2.t.y2b7CA)} />;
        }
        cResult[2] = tmp5;
        cResult[3] = tmp10;
        tmp9 = tmp10;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  : () => {
      let tmp4;
      const obj = useSelectedDismissibleContent;
      [tmp4, r10012] = obj.useSelectedDismissibleContent(items);
      let tmp5 = null;
      _slicedToArray(obj.useSelectedDismissibleContent(items), 2);
      if (null != tmp4) {
        let hasItem;
        if (items != null) {
          hasItem = items.includes(tmp4);
        }
        tmp5 = null;
        if (hasItem) {
          const TextBadge = native.TextBadge;
          const intl = intl2.intl;
          tmp5 = <TextBadge text={intl.string(intl2.t.y2b7CA)} />;
        }
      }
      return tmp5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let first;
      const obj = first(576);
      const cResult = obj.c(3);
      const obj2 = first(6901);
      let tmp2 = _slicedToArray(obj2.useSelectedDismissibleContent(items), 2);
      first = tmp2[0];
      dependencyMap = tmp4;
      if (cResult[0] === tmp2[1]) {
        let tmp5;
        if (cResult[1] === first) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const fn = function n() {
        let tmp2 = null != first;
        if (tmp2) {
          let hasItem;
          if (items != null) {
            hasItem = items.includes(tmp);
          }
          tmp2 = hasItem;
        }
        if (tmp2) {
          closure_1(ContentDismissActionType.TAKE_ACTION);
        }
        return true;
      };
      cResult[0] = tmp2[1];
      cResult[1] = first;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : () => {
      let closure_1;
      let first;
      const obj = first(6901);
      const tmp = _slicedToArray(obj.useSelectedDismissibleContent(items), 2);
      first = tmp[0];
      dependencyMap = tmp3;
      items = [tmp[1], first];
      return react.useCallback(() => {
        let tmp2 = null != first;
        if (tmp2) {
          let hasItem;
          if (items != null) {
            hasItem = items.includes(tmp);
          }
          tmp2 = hasItem;
        }
        if (tmp2) {
          closure_1(ContentDismissActionType.TAKE_ACTION);
        }
        return true;
      }, items);
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.G0neg7);
  },
  parent: null,
  IconComponent: AccessibilityIcon.AccessibilityIcon,
  useTrailing: tmp2,
  usePreNavigationAction: tmp3,
  screen: {
    route: UserSettingsSections.ACCESSIBILITY,
    getComponent() {
      return require("SettingsAccessibilityScreen").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;

// discord_app/modules/conjure/title_bar/native/ConjureYouScreenButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Link from "../../../../../_runtime/01503_Link.js";
import _modDef3863 from "../../intl/ConjureUntranslated.messages.js";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import useConjureWandStatusDefault from "useConjureWandStatus.tsx";
import ConjureWorkingWandDefault from "ConjureWorkingWand.tsx";
import getIconSize from "../../../../../discord_common/js/packages/design/components/Icon/getIconSize.tsx";
import YouScreenNavIconDefault from "../../../main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx";
import openConjureProjectsSheetDefault from "../../projects/native/openConjureProjectsSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let obj = { dot: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ConjureYouScreenButton() {
        const cResult = c.c(9);
        const tmp4 = closure_4();
        ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
        const tmp6 = useConjureWandStatusDefault();
        const isFocused = Link.useIsFocused();
        if (cResult[0] === isFocused) {
          if (cResult[1] === working) {
            let tmp8 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(_modDef3863.uk6jhJ);
            cResult[3] = stringResult;
            let tmp13 = stringResult;
          } else {
            tmp13 = cResult[3];
          }
          if (cResult[4] === accessibilityLabel) {
            if (cResult[5] === hasBadge) {
              if (cResult[6] === tmp4.dot) {
                if (cResult[7] === tmp8) {
                  let tmp15 = cResult[8];
                }
                return tmp15;
              }
            }
          }
          const obj3 = {
            IconComponent: MagicWandIcon.MagicWandIcon,
            icon: tmp8,
            accessibilityLabel,
            label: tmp13,
            onPress: openConjureProjectsSheetDefault,
            showRedDot: hasBadge,
            dotStyle: tmp4.dot,
          };
          const tmp18 = jsx(YouScreenNavIconDefault, {
            IconComponent: MagicWandIcon.MagicWandIcon,
            icon: tmp8,
            accessibilityLabel,
            label: tmp13,
            onPress: openConjureProjectsSheetDefault,
            showRedDot: hasBadge,
            dotStyle: tmp4.dot,
          });
          cResult[4] = accessibilityLabel;
          cResult[5] = hasBadge;
          cResult[6] = tmp4.dot;
          cResult[7] = tmp8;
          cResult[8] = tmp18;
          tmp15 = tmp18;
          const tmp5Result = YouScreenNavIconDefault;
        }
        let tmp9;
        if (working) {
          const obj4 = { size: getIconSize.ICON_SIZE.md, paused: !isFocused };
          tmp9 = jsx(ConjureWorkingWandDefault, { size: getIconSize.ICON_SIZE.md, paused: !isFocused });
          const tmp5Result2 = ConjureWorkingWandDefault;
        }
        cResult[0] = isFocused;
        cResult[1] = working;
        cResult[2] = tmp9;
        tmp8 = tmp9;
      }
    : function ConjureYouScreenButton() {
        const tmp = closure_4();
        ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
        const tmp4 = useConjureWandStatusDefault();
        const isFocused = Link.useIsFocused();
        const obj2 = {
          IconComponent: null,
          icon: null,
          accessibilityLabel: null,
          label: null,
          onPress: null,
          showRedDot: null,
          dotStyle: null,
        };
        obj2.IconComponent = MagicWandIcon.MagicWandIcon;
        let tmp7Result;
        if (working) {
          const obj3 = { size: getIconSize.ICON_SIZE.md, paused: !isFocused };
          tmp7Result = jsx(ConjureWorkingWandDefault, { size: getIconSize.ICON_SIZE.md, paused: !isFocused });
          const tmp2Result = ConjureWorkingWandDefault;
        }
        obj2.icon = tmp7Result;
        obj2.accessibilityLabel = accessibilityLabel;
        const intl = util.intl;
        obj2.label = intl.string(_modDef3863.uk6jhJ);
        obj2.onPress = openConjureProjectsSheetDefault;
        obj2.showRedDot = hasBadge;
        obj2.dotStyle = tmp.dot;
        return jsx(YouScreenNavIconDefault, {
          IconComponent: null,
          icon: null,
          accessibilityLabel: null,
          label: null,
          onPress: null,
          showRedDot: null,
          dotStyle: null,
        });
      },
);

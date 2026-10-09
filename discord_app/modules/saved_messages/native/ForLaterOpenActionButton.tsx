// discord_app/modules/saved_messages/native/ForLaterOpenActionButton.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ButtonHooks from "../../../design/components/Button/native/ButtonHooks.native.tsx";
import SavedMessagesTypes from "../SavedMessagesTypes.tsx";
import showForLaterModal from "showForLaterModal.tsx";
import BookmarkIcon2 from "../../../design/components/Icon/native/redesign/generated/BookmarkIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "../SavedMessagesStore.tsx";

const ClipViewDefault = tmp3(8997);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const point = {
  shape: fn(8997).CutoutShape.Circle,
  x: fn(12953).ICON_SIZE.sm - 7,
  y: fn(12953).ICON_SIZE.sm - 8,
  size: 10,
};
const createStyles = fn(5091);
let obj = {
  container: { aspectRatio: 1, alignItems: "center", justifyContent: "center", position: "relative" },
  iconAnchor: null,
  dot: null,
};
let size = { width: fn(12953).ICON_SIZE.sm, height: fn(12953).ICON_SIZE.sm, position: "relative" };
obj.iconAnchor = size;
const size1 = {
  position: "absolute",
  height: 6.5,
  width: 6.5,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION,
  borderRadius: nativeDefault.radii.lg,
  right: -2,
  bottom: -0.5,
};
obj.dot = size1;
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgedIcon(showRedDot) {
      let items1 = dependencyMap;
      const cResult = c.c(12);
      let dot = showRedDot.showRedDot;
      let tmp3 = importDefault;
      const tmp4 = useThemeDefault();
      const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp4);
      let iconAnchor = closure_9();
      const iconSizeStyles = ButtonHooks.useIconSizeStyles("sm", true, 2);
      if (showRedDot.type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
        let BookmarkIcon = ClockIcon.ClockIcon;
      } else {
        BookmarkIcon = BookmarkIcon2.BookmarkIcon;
      }
      if (cResult[0] === iconSizeStyles) {
        if (cResult[1] === iconAnchor.container) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === BookmarkIcon) {
          if (cResult[4] === dot) {
            if (cResult[5] === iconAnchor.dot) {
              if (cResult[6] === iconAnchor.iconAnchor) {
                if (cResult[7] === token) {
                  if (cResult[9] === tmp7) {
                    if (cResult[10] === tmp8) {
                      let tmp17 = cResult[11];
                    }
                    return tmp17;
                  }
                  const obj4 = { style: tmp7, children: cResult[8] };
                  const tmp20 = timestampProducer(View, obj4);
                  cResult[9] = tmp7;
                  cResult[10] = cResult[8];
                  cResult[11] = tmp20;
                  tmp17 = tmp20;
                }
              }
            }
          }
        }
        if (dot) {
          const obj5 = { style: iconAnchor.iconAnchor, children: null };
          const obj6 = { cutouts: null, children: null };
          const items = [point];
          obj6.cutouts = items;
          const obj7 = { size: "sm", color: token };
          obj6.children = timestampProducer(BookmarkIcon, obj7);
          items1 = [timestampProducer(ClipViewDefault, obj6)];
          const obj8 = { style: iconAnchor.dot };
          tmp3 = timestampProducer(View, obj8);
          items1[1] = tmp3;
          obj5.children = items1;
          let tmp10 = React5(View, obj5);
          const tmp3Result = ClipViewDefault;
        } else {
          const obj9 = { size: "sm", color: token };
          tmp10 = timestampProducer(BookmarkIcon, obj9);
        }
        cResult[3] = BookmarkIcon;
        cResult[4] = dot;
        dot = iconAnchor.dot;
        cResult[5] = dot;
        iconAnchor = iconAnchor.iconAnchor;
        cResult[6] = iconAnchor;
        cResult[7] = token;
        cResult[8] = tmp10;
      }
      const items2 = [iconAnchor.container, iconSizeStyles];
      cResult[0] = iconSizeStyles;
      cResult[1] = iconAnchor.container;
      cResult[2] = items2;
      tmp7 = items2;
    }
  : function BadgedIcon(arg0) {
      ({ type, showRedDot } = arg0);
      const tmp3 = useThemeDefault();
      const token = useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, tmp3);
      const tmp6 = closure_9();
      const iconSizeStyles = ButtonHooks.useIconSizeStyles("sm", true, 2);
      if (type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
        let BookmarkIcon = ClockIcon.ClockIcon;
      } else {
        BookmarkIcon = BookmarkIcon2.BookmarkIcon;
      }
      const obj3 = { style: null, children: null };
      const items = [tmp6.container, iconSizeStyles];
      obj3.style = items;
      if (showRedDot) {
        const obj4 = { style: tmp6.iconAnchor, children: null };
        const obj5 = { cutouts: null, children: null };
        const items1 = [point];
        obj5.cutouts = items1;
        const obj6 = { size: "sm", color: token };
        obj5.children = timestampProducer(BookmarkIcon, obj6);
        const items2 = [timestampProducer(ClipViewDefault, obj5)];
        const obj7 = { style: tmp6.dot };
        items2[1] = timestampProducer(View, obj7);
        obj4.children = items2;
        let tmp8Result = React5(View, obj4);
        const tmpResult = ClipViewDefault;
      } else {
        const obj8 = { size: "sm", color: token };
        tmp8Result = timestampProducer(BookmarkIcon, obj8);
      }
      obj3.children = tmp8Result;
      return timestampProducer(View, obj3);
    };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForLaterActionButton(type) {
      const cResult = type(576).c(18);
      type = type.type;
      const onOpen = type.onOpen;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SavedMessagesStore];
        const fn = function l() {
          return SavedMessagesStore.hasOverdueReminder();
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      type(504);
      if (cResult[3] === onOpen) {
        if (cResult[4] === type) {
          let tmp10 = cResult[5];
        }
        const tmp11 = type === tmp(9652).SavedMessageSortTypes.REMINDER && tmp9;
        if (cResult[6] === tmp11) {
          if (cResult[7] === type) {
            let tmp12 = cResult[8];
          }
          if (cResult[9] !== type) {
            const intl = tmp(1126).intl;
            if (type === tmp(9652).SavedMessageSortTypes.REMINDER) {
              let aUXxzT = tmp(1126).t.aUXxzT;
            } else {
              aUXxzT = tmp(1126).t["2pAkDA"];
            }
            const stringResult = intl.string(aUXxzT);
            cResult[9] = type;
            cResult[10] = stringResult;
          } else {
            if (cResult[11] === tmp10) {
              if (cResult[12] === tmp12) {
                if (cResult[13] === tmp16) {
                  let tmp20 = cResult[14];
                }
                if (cResult[15] === ref) {
                  if (cResult[16] === tmp20) {
                    let tmp23 = cResult[17];
                  }
                  return tmp23;
                }
                const obj2 = { ref, children: tmp20 };
                const tmp26 = closure_6(View, obj2);
                cResult[15] = ref;
                cResult[16] = tmp20;
                cResult[17] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj3 = {
              variant: "tertiary",
              size: "sm",
              icon: tmp12,
              onPress: tmp10,
              accessibilityLabel: cResult[10],
              maxFontSizeMultiplier: 2,
            };
            const tmp22 = closure_6(tmp(8114).IconButton, obj3);
            cResult[11] = tmp10;
            cResult[12] = tmp12;
            cResult[13] = cResult[10];
            cResult[14] = tmp22;
            tmp20 = tmp22;
          }
        }
        const obj4 = { type, showRedDot: tmp11 };
        const tmp15 = closure_6(closure_10, obj4);
        cResult[6] = tmp11;
        cResult[7] = type;
        cResult[8] = tmp15;
        tmp12 = tmp15;
      }
      class E {
        constructor() {
          tmp = onOpen();
          obj = closure_0(closure_2[17]);
          showForLaterModalResult = obj.showForLaterModal(type);
          return;
        }
      }
      cResult[3] = onOpen;
      cResult[4] = type;
      cResult[5] = E;
      tmp10 = E;
      const obj = type(576);
    }
  : function ForLaterActionButton(ref) {
      const type = ref.type;
      const onOpen = ref.onOpen;
      const items = [SavedMessagesStore];
      const items1 = [onOpen, type];
      const stateFromStores = type(504).useStateFromStores(items, () => SavedMessagesStore.hasOverdueReminder(), []);
      const obj2 = { ref: ref.ref, children: null };
      const callback = noop.useCallback(() => {
        onOpen();
        showForLaterModal.showForLaterModal(type);
      }, items1);
      const obj3 = { type, showRedDot: null };
      const obj = type(504);
      const obj4 = {
        variant: "tertiary",
        size: "sm",
        icon: closure_6(closure_10, obj3),
        onPress: callback,
        accessibilityLabel: null,
        maxFontSizeMultiplier: 2,
      };
      obj3.showRedDot = type === type(9652).SavedMessageSortTypes.REMINDER && stateFromStores;
      const intl = tmp(1126).intl;
      if (type === type(9652).SavedMessageSortTypes.REMINDER) {
        let aUXxzT = tmp(1126).t.aUXxzT;
      } else {
        aUXxzT = tmp(1126).t["2pAkDA"];
      }
      obj4.accessibilityLabel = intl.string(aUXxzT);
      obj2.children = closure_6(type(8114).IconButton, obj4);
      return closure_6(View, obj2);
    };

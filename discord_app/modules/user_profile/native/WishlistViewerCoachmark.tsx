// discord_app/modules/user_profile/native/WishlistViewerCoachmark.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl4 from "../../../intl/index.native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import _modDef12982 from "../../../../discord_assets/assets/assets/mobile_wishlist_coachmark.png.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({
  imageContainer: { alignItems: "center", justifyContent: "center" },
  image: { width: 160, height: 106 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(6);
      const tmp3 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { uri: _modDef12982 };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3.image) {
        const tmp9 = <hasOwnProperty source={first} style={tmp3.image} />;
        cResult[1] = tmp3.image;
        cResult[2] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp3.imageContainer) {
        let tmp10;
        if (cResult[4] === tmp6) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = <React3 style={tmp3.imageContainer}>{tmp6}</React3>;
      cResult[3] = tmp3.imageContainer;
      cResult[4] = tmp6;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : () => {
      const tmp = closure_8();
      ({ source: { uri: _modDef12982 }, style: tmp.image });
      ({ uri: _modDef12982 });
      return <React3 style={tmp.imageContainer}>{null}</React3>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onViewWishlist) => {
      let isVisible;
      let markAsDismissed;
      let tmp10;
      let tmp11;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = markAsDismissed(576);
      const cResult = obj.c(12);
      ({ isVisible, markAsDismissed } = onViewWishlist);
      onViewWishlist = onViewWishlist.onViewWishlist;
      const anchorRef = onViewWishlist.anchorRef;
      if (cResult[0] !== onViewWishlist) {
        const fn = function n() {
          onViewWishlist();
        };
        cResult[0] = onViewWishlist;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = markAsDismissed(1126).intl;
        const stringResult = intl.string(markAsDismissed(1126).t["+b6iUl"]);
        const intl2 = markAsDismissed(1126).intl;
        const stringResult1 = intl2.string(markAsDismissed(1126).t.Howsng);
        cResult[2] = stringResult;
        cResult[3] = stringResult1;
        tmp6 = stringResult1;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      if (cResult[4] !== markAsDismissed) {
        const fn2 = function y() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        };
        cResult[4] = markAsDismissed;
        cResult[5] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function _() {
          return <closure_1_9 />;
        };
        const intl3 = markAsDismissed(1126).intl;
        const stringResult2 = intl3.string(markAsDismissed(1126).t.TxBQzD);
        cResult[6] = fn3;
        cResult[7] = stringResult2;
        tmp11 = stringResult2;
        tmp10 = fn3;
      } else {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === isVisible) {
          let tmp13;
          if (cResult[10] === tmp9) {
            tmp13 = cResult[11];
          }
          const tmpResult = markAsDismissed(9895);
          const coachmark = tmpResult.useCoachmark(anchorRef, tmp13);
          return null;
        }
      }
      const obj2 = {
        title: tmp5,
        description: tmp6,
        position: "bottom",
        visible: isVisible,
        onDismiss: tmp9,
        renderImgComponent: tmp10,
        buttonLabel: tmp11,
        buttonVariant: "primary",
        onButtonPress: tmp4,
      };
      cResult[8] = tmp4;
      cResult[9] = isVisible;
      cResult[10] = tmp9;
      cResult[11] = obj2;
      tmp13 = obj2;
    }
  : (isVisible) => {
      isVisible = isVisible.isVisible;
      const markAsDismissed = isVisible.markAsDismissed;
      const onViewWishlist = isVisible.onViewWishlist;
      let onButtonPress;
      const items = [onViewWishlist];
      const anchorRef = isVisible.anchorRef;
      onButtonPress = onButtonPress.useCallback(() => {
        onViewWishlist();
      }, items);
      const items1 = [isVisible, markAsDismissed, onButtonPress];
      const memo = onButtonPress.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        const obj = {
          title: intl.string(intl4.t["+b6iUl"]),
          description: intl2.string(intl4.t.Howsng),
          position: "bottom",
          visible: isVisible,
          onDismiss() {
            return markAsDismissed(constants.USER_DISMISS);
          },
          renderImgComponent() {
            return closure_1_7(closure_1_9, {});
          },
          buttonLabel: intl3.string(intl4.t.TxBQzD),
          buttonVariant: "primary",
          onButtonPress,
        };
        intl = intl4.intl;
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        return obj;
      }, items1);
      let obj = isVisible(onViewWishlist[9]);
      const coachmark = obj.useCoachmark(anchorRef, memo);
      return null;
    };
const result = size.fileFinishedImporting("modules/user_profile/native/WishlistViewerCoachmark.tsx");

export default tmp3;

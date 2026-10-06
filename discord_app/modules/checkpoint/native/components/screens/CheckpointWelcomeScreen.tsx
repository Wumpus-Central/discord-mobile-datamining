// discord_app/modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../intl/index.native.tsx";
import useWindowDimensionsDefault from "../../../../screen/useWindowDimensions.native.tsx";
import _modDef3039 from "../../../Checkpoint.messages.js";
import _modDef3071 from "../../../Checkpoint2026.messages.js";
import UserUtils from "../../../../../utils/UserUtils.tsx";
import TextWritingAnimation from "../TextWritingAnimation.tsx";
import CheckpointKnickKnacksDefault from "../CheckpointKnickKnacks.tsx";
import CheckpointScreenDefault from "../CheckpointScreen.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const TextWritingAnimationDefault = TextWritingAnimation;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 100;
let createStyles = createStyles_mod;
let obj = {
  container: { width: "100%", flexGrow: 1 },
  title: { transformOrigin: "left", width: 340 },
  titleText: { textTransform: "uppercase", fontSize: 72, lineHeight: 72, letterSpacing: -2.88 },
  subtitle: obj2,
  content: { flex: 1, justifyContent: "center" },
  knickKnacks: obj3,
};
obj2 = { maxWidth: 327, marginTop: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let container;
      let content;
      let currentUser;
      let items1;
      let items2;
      let obj7;
      let tmp12;
      let tmp7;
      let tmp8;
      const obj = react;
      const cResult = obj.c(26);
      const tmp4 = closure_8();
      const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function h() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      const tmpResult2 = UserUtils;
      const name = tmpResult2.useName(stateFromStores);
      ({ container, content } = tmp4);
      if (cResult[2] !== bound) {
        const obj2 = { transform: items1 };
        items1 = [{ scale: bound }];
        const obj3 = { scale: bound };
        cResult[2] = bound;
        cResult[3] = obj2;
        tmp12 = obj2;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp4.title) {
        let tmp13;
        let tmp14;
        if (cResult[5] === tmp12) {
          tmp13 = cResult[6];
        }
        const _Symbol = Symbol;
        const titleText = tmp4.titleText;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(_modDef3039["CdU/PF"]);
          cResult[7] = stringResult;
          tmp14 = stringResult;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === tmp4.titleText) {
          let tmp16;
          let tmp20;
          if (cResult[9] === tmp13) {
            tmp16 = cResult[10];
          }
          const subtitle = tmp4.subtitle;
          if (cResult[11] !== name) {
            const intl2 = intl3.intl;
            const obj4 = { username: name };
            const formatToPlainStringResult = intl2.formatToPlainString(_modDef3071.xhZ23b, obj4);
            cResult[11] = name;
            cResult[12] = formatToPlainStringResult;
            tmp20 = formatToPlainStringResult;
          } else {
            tmp20 = cResult[12];
          }
          if (cResult[13] === tmp4.subtitle) {
            let tmp22;
            let tmp27;
            if (cResult[14] === tmp20) {
              tmp22 = cResult[15];
            }
            if (cResult[16] !== tmp4.knickKnacks) {
              const obj5 = { style: tmp4.knickKnacks };
              const tmp29 = hasOwnProperty(CheckpointKnickKnacksDefault, obj5);
              cResult[16] = tmp4.knickKnacks;
              cResult[17] = tmp29;
              tmp27 = tmp29;
            } else {
              tmp27 = cResult[17];
            }
            if (cResult[18] === tmp4.content) {
              if (cResult[19] === tmp22) {
                if (cResult[20] === tmp27) {
                  let tmp30;
                  if (cResult[21] === tmp16) {
                    tmp30 = cResult[22];
                  }
                  if (cResult[23] === tmp4.container) {
                    let tmp34;
                    if (cResult[24] === tmp30) {
                      tmp34 = cResult[25];
                    }
                    return tmp34;
                  }
                  const obj6 = { children: hasOwnProperty(View, obj7) };
                  obj7 = { style: container, children: tmp30 };
                  const tmp5Result = CheckpointScreenDefault;
                  const tmp38 = hasOwnProperty(tmp5Result, obj6);
                  cResult[23] = tmp4.container;
                  cResult[24] = tmp30;
                  cResult[25] = tmp38;
                  tmp34 = tmp38;
                }
              }
            }
            const obj8 = { style: content, children: items2 };
            items2 = [tmp16, tmp22, tmp27];
            const tmp33 = metroRequire(View, obj8);
            cResult[18] = tmp4.content;
            cResult[19] = tmp22;
            cResult[20] = tmp27;
            cResult[21] = tmp16;
            cResult[22] = tmp33;
            tmp30 = tmp33;
          }
          const obj9 = {
            style: subtitle,
            text: tmp20,
            delay: delay + TextWritingAnimation.DURATION,
            variant: "heading-xl/medium",
          };
          const tmp5Result2 = TextWritingAnimationDefault;
          const tmp26 = hasOwnProperty(tmp5Result2, obj9);
          cResult[13] = tmp4.subtitle;
          cResult[14] = tmp20;
          cResult[15] = tmp26;
          tmp22 = tmp26;
        }
        const obj10 = { style: tmp13, textStyle: titleText, text: tmp14, delay, variant: "display-lg" };
        const tmp19 = hasOwnProperty(TextWritingAnimationDefault, obj10);
        cResult[8] = tmp4.titleText;
        cResult[9] = tmp13;
        cResult[10] = tmp19;
        tmp16 = tmp19;
      }
      const items3 = [tmp4.title, tmp12];
      cResult[4] = tmp4.title;
      cResult[5] = tmp12;
      cResult[6] = items3;
      tmp13 = items3;
    }
  : () => {
      let currentUser;
      let intl;
      let intl2;
      let items1;
      let items2;
      let items3;
      let obj4;
      let obj5;
      const tmp = closure_8();
      const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj2 = UserUtils;
      const name = obj2.useName(stateFromStores);
      const obj3 = { children: hasOwnProperty(View, obj4) };
      obj4 = { style: tmp.container, children: metroRequire(View, obj5) };
      obj5 = { style: tmp.content, children: items3 };
      const obj6 = {
        style: items1,
        textStyle: tmp.titleText,
        text: intl.string(_modDef3039["CdU/PF"]),
        delay,
        variant: "display-lg",
      };
      items1 = [tmp.title];
      const obj7 = { transform: items2 };
      items2 = [{ scale: bound }];
      items1[1] = obj7;
      const tmp5 = CheckpointScreenDefault;
      const tmp6 = TextWritingAnimationDefault;
      intl = intl3.intl;
      items3 = [hasOwnProperty(tmp6, obj6), ,];
      const obj8 = {
        style: tmp.subtitle,
        text: intl2.formatToPlainString(_modDef3071.xhZ23b, { username: name }),
        delay: delay + TextWritingAnimation.DURATION,
        variant: "heading-xl/medium",
      };
      const tmp7 = TextWritingAnimationDefault;
      intl2 = intl3.intl;
      items3[1] = hasOwnProperty(tmp7, obj8);
      const obj9 = { style: tmp.knickKnacks };
      items3[2] = hasOwnProperty(CheckpointKnickKnacksDefault, obj9);
      return hasOwnProperty(tmp5, obj3);
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx");

export default tmp4;

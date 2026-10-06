// discord_app/modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import PublicGuildsUtils from "../../PublicGuildsUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/11286_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

let closure_4;
let hasOwnProperty;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  content: { padding: 16 },
  avatar: size,
  nameWrapper: { flexDirection: "row", alignItems: "center" },
  headerText: { marginLeft: 8 },
  description: { marginTop: 8 },
};
size = { borderRadius: nativeDefault.radii.lg, height: 80, width: 80, marginVertical: 16 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let avatar;
      let content;
      let first;
      let items;
      let items1;
      let obj8;
      let tmp11;
      let tmp15;
      let tmp17;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(22);
      const tmp4 = closure_6();
      ({ content, avatar } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = PublicGuildsUtils;
        const publicSystemMessageAvatar = tmpResult.getPublicSystemMessageAvatar();
        cResult[0] = publicSystemMessageAvatar;
        first = publicSystemMessageAvatar;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.avatar) {
        const obj2 = { style: avatar, source: first };
        const tmp10 = React3(FastImageDefault, obj2);
        cResult[1] = tmp4.avatar;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      const nameWrapper = tmp4.nameWrapper;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { source: AssetRegistryDefault, disableColor: true };
        const Icon = native.Icon;
        const tmp14 = React3(Icon, obj3);
        cResult[3] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[3];
      }
      const headerText = tmp4.headerText;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.xfAlNx);
        cResult[4] = stringResult;
        tmp15 = stringResult;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] !== tmp4.headerText) {
        const obj4 = {
          style: headerText,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp15,
        };
        const tmp19 = React3(Text_Text.Text, obj4);
        cResult[5] = tmp4.headerText;
        cResult[6] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] === tmp4.nameWrapper) {
        let tmp20;
        let tmp22;
        let tmp24;
        let tmp27;
        let tmp29;
        if (cResult[8] === tmp17) {
          tmp20 = cResult[9];
        }
        const _Symbol = Symbol;
        const description = tmp4.description;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl4.intl;
          const stringResult1 = intl2.string(intl4.t.BUZ0sl);
          cResult[10] = stringResult1;
          tmp22 = stringResult1;
        } else {
          tmp22 = cResult[10];
        }
        if (cResult[11] !== tmp4.description) {
          const obj5 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp22 };
          const tmp26 = React3(Text_Text.Text, obj5);
          cResult[11] = tmp4.description;
          cResult[12] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[12];
        }
        const _Symbol2 = Symbol;
        const description2 = tmp4.description;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl4.intl;
          const stringResult2 = intl3.string(intl4.t.w5beJH);
          cResult[13] = stringResult2;
          tmp27 = stringResult2;
        } else {
          tmp27 = cResult[13];
        }
        if (cResult[14] !== tmp4.description) {
          const obj6 = { style: description2, variant: "text-sm/medium", color: "text-default", children: tmp27 };
          const tmp31 = React3(Text_Text.Text, obj6);
          cResult[14] = tmp4.description;
          cResult[15] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[15];
        }
        if (cResult[16] === tmp4.content) {
          if (cResult[17] === tmp24) {
            if (cResult[18] === tmp29) {
              if (cResult[19] === tmp7) {
                let tmp32;
                if (cResult[20] === tmp20) {
                  tmp32 = cResult[21];
                }
                return tmp32;
              }
            }
          }
        }
        const obj7 = { startExpanded: true, children: hasOwnProperty(View, obj8) };
        obj8 = { style: content, children: items };
        items = [tmp7, tmp20, tmp24, tmp29];
        BottomSheet = Sheet_BottomSheet.BottomSheet;
        const tmp36 = React3(BottomSheet, obj7);
        cResult[16] = tmp4.content;
        cResult[17] = tmp24;
        cResult[18] = tmp29;
        cResult[19] = tmp7;
        cResult[20] = tmp20;
        cResult[21] = tmp36;
        tmp32 = tmp36;
      }
      const obj9 = { style: nameWrapper, children: items1 };
      items1 = [tmp11, tmp17];
      const tmp21 = hasOwnProperty(View, obj9);
      cResult[7] = tmp4.nameWrapper;
      cResult[8] = tmp17;
      cResult[9] = tmp21;
      tmp20 = tmp21;
    }
  : () => {
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let obj2;
      let obj4;
      const tmp = closure_6();
      const obj = { startExpanded: true, children: hasOwnProperty(View, obj2) };
      obj2 = { style: tmp.content, children: items };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      const obj3 = { style: tmp.avatar, source: obj4.getPublicSystemMessageAvatar() };
      const tmp2 = FastImageDefault;
      obj4 = PublicGuildsUtils;
      items = [React3(tmp2, obj3), , ,];
      const obj5 = { style: tmp.nameWrapper, children: items1 };
      const obj6 = { source: AssetRegistryDefault, disableColor: true };
      const Icon = native.Icon;
      items1 = [React3(Icon, obj6)];
      const obj7 = {
        style: tmp.headerText,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl4.t.xfAlNx),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items1[1] = React3(Text, obj7);
      items[1] = hasOwnProperty(View, obj5);
      const obj8 = {
        style: tmp.description,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl2.string(intl4.t.BUZ0sl),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items[2] = React3(Text2, obj8);
      const obj9 = {
        style: tmp.description,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl3.string(intl4.t.w5beJH),
      };
      const Text3 = Text_Text.Text;
      intl3 = intl4.intl;
      items[3] = React3(Text3, obj9);
      return React3(BottomSheet, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default tmp4;
